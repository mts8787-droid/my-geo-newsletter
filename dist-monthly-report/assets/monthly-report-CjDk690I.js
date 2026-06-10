const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-DiWaSB7x.js","assets/react-CVd_-pOw.js"])))=>i.map(i=>d[i]);
import{j as r,b as tt,R as go,L as yn,D as bn,G as mo,A as xn,c as We,S as Dt,C as Je,d as Wo,e as yo,f as Vo,P as vn,h as wn,i as bo,F as Cn,T as kn}from"./react-CVd_-pOw.js";import{R as Sn}from"./react-dom-DUAWm-_Q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();const Fn="modulepreload",An=function(t){return"/admin/monthly-report/"+t},xo={},Ye=function(e,o,i){let a=Promise.resolve();if(o&&o.length>0){let c=function(y){return Promise.all(y.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=c(o.map(y=>{if(y=An(y),y in xo)return;xo[y]=!0;const h=y.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${p}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":Fn,h||(u.as="script"),u.crossOrigin="",u.href=y,d&&u.setAttribute("nonce",d),document.head.appendChild(u),h)return new Promise((f,C)=>{u.addEventListener("load",f),u.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${y}`)))})}))}function n(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return a.then(c=>{for(const s of c||[])s.status==="rejected"&&n(s.reason);return e().catch(n)})},se="Total";function En(...t){const e=new Set([se]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(i=>{i!=null&&i.llmModel&&e.add(i.llmModel),((i==null?void 0:i.monthlyScores)||[]).forEach(n=>Object.keys((n==null?void 0:n.byLlm)||{}).forEach(c=>e.add(c)))})}),[se,...Array.from(e).filter(o=>o!==se).sort((o,i)=>o.localeCompare(i))]}function Ko(t,e){return!Array.isArray(t)||!e||e===se?t:t.map(o=>{var y;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const a=i.filter(h=>{var p;return(p=h==null?void 0:h.byLlm)==null?void 0:p[e]}),n=a[a.length-1]||null,c=a.length>=2?a[a.length-2]:null;if(!n)return o;const s=n.byLlm[e],d=(y=c==null?void 0:c.byLlm)==null?void 0:y[e];return{...o,score:s.score??o.score,prev:(d==null?void 0:d.score)??null,vsComp:s.comp??o.vsComp,allScores:s.allScores??o.allScores,monthlyScore:s.score??o.monthlyScore??o.score,monthlyPrev:(d==null?void 0:d.score)??null,monthlyScores:i.map(h=>{var u;const p=(u=h==null?void 0:h.byLlm)==null?void 0:u[e];return p?{...h,score:p.score,comp:p.comp,allScores:p.allScores}:{...h,score:null,comp:null,allScores:null}})}})}function qo(t,e){return!Array.isArray(t)||!e||e===se?t:t.map(o=>{var h;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const a=i.filter(p=>{var u;return(u=p==null?void 0:p.byLlm)==null?void 0:u[e]}),n=a[a.length-1]||null,c=a.length>=2?a[a.length-2]:null;if(!n)return o;const s=n.byLlm[e],d=(h=c==null?void 0:c.byLlm)==null?void 0:h[e],y=s.compScore??o.compScore;return{...o,score:s.score??o.score,prev:(d==null?void 0:d.score)??null,compScore:y,compName:s.compName??o.compName,allScores:s.allScores??o.allScores,gap:+((s.score??o.score)-y||0).toFixed(2),monthlyScores:i.map(p=>{var f;const u=(f=p==null?void 0:p.byLlm)==null?void 0:f[e];return u?{...p,score:u.score,compScore:u.compScore,compName:u.compName,allScores:u.allScores}:{...p,score:null,compScore:null,compName:null,allScores:null}})}})}function Tn(t,e){if(!Array.isArray(t)||!e||e===se)return(t||[]).filter(a=>!a.llmModel||a.llmModel===se||a.llmModel==="TOTAL"||a.llmModel==="All");const o={};t.forEach(a=>{const n=`${a.date}|${a.country}|${a.division}`;o[n]||(o[n]={}),o[n][a.llmModel]=a});const i=[];return Object.values(o).forEach(a=>{const n=a[e]||a[se]||a.TOTAL||a.All;n&&i.push(n)}),i}function Jo(t,e,o){if(!o||o===se||!Array.isArray(e)||!e.length)return t;const i=e.filter(c=>(c.country==="TOTAL"||c.country==="TTL")&&(c.division==="TOTAL"||c.division==="TTL"||c.division==="")&&c.llmModel===o);if(!i.length)return t;i.sort((c,s)=>String(c.date).localeCompare(String(s.date)));const a=i[i.length-1],n=i.length>=2?i[i.length-2]:null;return{...t,score:a.lg??t.score,prev:(n==null?void 0:n.lg)??t.prev,vsComp:a.comp??t.vsComp}}const J="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",$n=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function Ie(t){const e=$n.indexOf(t);return e>=0?e:999}function St(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ln(t){if(!t||!String(t).trim())return"";const e=c=>St(c).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),o=String(t).split(/\n/),i=[];let a=[];const n=()=>{a.length&&(i.push(`<p style="margin:0 0 10px;font-size:13px;line-height:1.75;font-family:${J};color:#222;">${a.map(e).join("<br/>")}</p>`),a=[])};for(const c of o){const s=c.trim();if(!s){n();continue}let d;(d=s.match(/^(\d+)\.(\d+)\.?\s+(.+)$/))?(n(),i.push(`<h3 style="font-size:14px;font-weight:700;margin:14px 0 6px;font-family:${J};color:#111;">${St(d[1])}.${St(d[2])} ${e(d[3])}</h3>`)):(d=s.match(/^(\d+)\.\s+(.+)$/))?(n(),i.push(`<h2 style="font-size:16px;font-weight:700;margin:22px 0 10px;border-top:1px solid #999;padding-top:12px;font-family:${J};color:#000;">${St(d[1])}. ${e(d[2])}</h2>`)):a.push(s)}return n(),i.join("")}const vo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function eo(t){return vo.filter(e=>t.includes(e)).concat(t.filter(e=>!vo.includes(e)))}const Bn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function oo(t){return Bn[String(t||"").trim().toUpperCase()]||t}function ne(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function ze(t,e){if(t==null||e==null||e===0)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function je(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function fe(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Rn(t){if(!t)return null;const e=t.toLowerCase();return e.includes("youtube")?{bg:"#FFE4E6",color:"#9F1239"}:e.includes("reddit")?{bg:"#FFEDD5",color:"#9A3412"}:null}function In(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — BU Totals (Sheet Values)",bu:"BU",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"본부별 종합 (시트 합계 직접 사용)",bu:"본부",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},a=["MS","HS","ES"],c=a.filter(s=>t[s]).concat(Object.keys(t).filter(s=>!a.includes(s))).map(s=>{const d=t[s],y=(e||{})[s],h=d.comp>0?Math.round(d.lg/d.comp*100):100,p=fe(d.lg,d.comp)||"#FFFFFF",u=y&&y.lg!=null?ze(d.lg,y.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};font-weight:700;text-align:center;background:#F5F5F5;">${St(s)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;font-weight:700;background:${p};">${ne(d.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;background:${p};">${ne(d.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;font-weight:700;background:${p};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;">${u}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.bu}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function jn(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — Country Totals (Sheet Values)",country:"Country",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"국가별 종합 (시트 합계 직접 사용)",country:"국가",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},n=eo(Object.keys(t)).map(c=>{const s=t[c],d=(e||{})[c],y=s.comp>0?Math.round(s.lg/s.comp*100):100,h=fe(s.lg,s.comp)||"#FFFFFF",p=d&&d.lg!=null?ze(s.lg,d.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};font-weight:700;text-align:center;background:#F5F5F5;">${St(oo(c))}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;font-weight:700;background:${h};">${ne(s.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;background:${h};">${ne(s.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;font-weight:700;background:${h};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;">${p}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.country}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function Pn(t,e,o,i){const a=o==="en"?{product:"Product",metric:"Metric",title:"Monthly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"월간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={};(e||[]).forEach(m=>{m.country&&m.product&&(n[`${m.country}|${m.product}`]=m.score)});const c={},s=new Set,d=new Set;(t||[]).forEach(m=>{!m.country||m.country==="TTL"||m.country==="TOTAL"||!m.product||(s.add(m.country),d.add(m.product),c[m.product]||(c[m.product]={}),c[m.product][m.country]=m)});const y=eo(Array.from(s)),h=Array.from(d).sort((m,v)=>Ie(m)-Ie(v));if(!h.length||!y.length)return`<p style="font-size:11px;color:#666;font-family:${J};">데이터가 없습니다.</p>`;const p={};(i||[]).forEach(m=>{[m.kr,m.category,m.id,m.en].filter(Boolean).forEach(w=>{p[w]=m})});const f='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+y.map(m=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${St(oo(m))}</th>`).join(""),C=[];return h.forEach((m,v)=>{const w=v%2===0?"#FFFFFF":"#FAFAFA",x=p[m],j=(x?fe(x.score,x.vsComp):null)||w,R=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;font-weight:700;background:${j};">${x?ne(x.score):"—"}</td>`,G=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;font-weight:700;background:${j};">${x?je(x.score,x.vsComp):"—"}</td>`,$=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;background:${j};color:#1A1A1A;font-weight:600;">${x!=null&&x.compName?St(x.compName):"—"}</td>`,N=y.map(A=>{var z;const g=(z=c[m])==null?void 0:z[A],D=(g?fe(g.score,g.compScore):null)||w;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;font-weight:700;background:${D};">${g?ne(g.score):"—"}</td>`}).join(""),U=y.map(A=>{var z;const g=(z=c[m])==null?void 0:z[A],D=(g?fe(g.score,g.compScore):null)||w;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;font-weight:700;background:${D};">${g?je(g.score,g.compScore):"—"}</td>`}).join(""),S=y.map(A=>{var z;const g=(z=c[m])==null?void 0:z[A],D=(g?fe(g.score,g.compScore):null)||w;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${J};text-align:center;background:${D};color:#1A1A1A;font-weight:600;">${g!=null&&g.compName?St(g.compName):"—"}</td>`}).join("");C.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${J};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${St(m)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${J};font-weight:600;background:#F5F5F5;white-space:nowrap;">${a.lg} (%)</td>
        ${R}${N}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${J};background:#F5F5F5;white-space:nowrap;">${a.ratio}</td>
        ${G}${U}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${J};background:#F5F5F5;white-space:nowrap;">${o==="en"?"Top Comp":"경쟁사"}</td>
        ${$}${S}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.metric}</th>
        ${f}
      </tr>
    </thead>
    <tbody>
      ${C.join("")}
    </tbody>
  </table>
  </div>`}function Mn(t,e,o){const i=o==="en"?{title:"Monthly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"월간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",mom:"MoM(%p)"},a={};(e||[]).forEach(d=>{d.id&&(a[d.id]=d.score)});const n=["MS","HS","ES"],c={};(t||[]).forEach(d=>{const y=d.bu||"OTHER";c[y]||(c[y]=[]),c[y].push(d)});const s=[];return n.forEach(d=>{const y=(c[d]||[]).slice().sort((h,p)=>Ie(h.kr||h.category||h.id)-Ie(p.kr||p.category||p.id));y.forEach((h,p)=>{const u=h.prev!=null&&h.prev>0?h.prev:a[h.id],f=ze(h.score,u),C=fe(h.score,h.vsComp)||"#FFFFFF";s.push(`<tr>
        ${p===0?`<td rowspan="${y.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${d}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;">${St(h.kr||h.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;font-weight:700;background:${C};">${ne(h.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;background:${C};">${ne(h.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;background:${C};">${St(h.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;font-weight:700;background:${C};">${je(h.score,h.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${J};text-align:center;">${f}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
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
  </table>`}function Dn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((n,c)=>n+(c.score||0),0),a=t.map((n,c)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:center;">${c+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};">${St(n.source||n.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;font-weight:700;">${(n.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;">${i>0?(n.score/i*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${a}</tbody>
  </table>`}function On(t,e){const o=(t||[]).filter(s=>s.cnty==="TTL"||s.cnty==="TOTAL"||!s.cnty);if(!o.length)return"";o.sort((s,d)=>(d.citations||0)-(s.citations||0));const i=o.slice(0,20),a=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((s,d)=>s+(d.citations||0),0),c=i.map((s,d)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:center;">${d+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};">${St(s.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};">${St(s.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;font-weight:700;">${(s.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;">${n>0?(s.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${a.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${a.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function Nn(t,e){const o={};(t||[]).forEach(s=>{!s.cnty||s.cnty==="TTL"||s.cnty==="TOTAL"||(o[s.cnty]||(o[s.cnty]=[]),o[s.cnty].push(s))});const i=eo(Object.keys(o));if(!i.length)return"";const a=e==="en"?{title:"Citation by Country (Top 5 Domains)",country:"Country",total:"Total"}:{title:"국가별 Citation Top 5 도메인",country:"국가",total:"전체"},n=5,c=i.map(s=>{const d=o[s].sort((u,f)=>(f.citations||0)-(u.citations||0)),y=d.reduce((u,f)=>u+(f.citations||0),0),h=d.slice(0,n),p=[];for(let u=0;u<n;u++){const f=h[u],C=f?Rn(f.domain):null,m=C?`background:${C.bg};`:"",v=C?`color:${C.color};font-weight:700;`:"";p.push(`<td style="border:1px solid #999;padding:5px 8px;font-size:10px;font-family:${J};${m}${v}">${f?`${St(f.domain||"")} <span style="color:#666;font-weight:400;">(${(f.citations||0).toLocaleString("en-US")})</span>`:"—"}</td>`)}return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};font-weight:700;background:#F5F5F5;text-align:center;">${St(oo(s))}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;font-weight:700;">${y.toLocaleString("en-US")}</td>
      ${p.join("")}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${a.country}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${a.total}</th>
      ${Array.from({length:n},(s,d)=>`<th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">#${d+1}</th>`).join("")}
    </tr></thead>
    <tbody>${c}</tbody>
  </table>
  </div>`}function _n(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},a=Object.keys(o).filter(s=>o[s]!=null);if(!a.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},c=a.map(s=>{const d=o[s]||0,y=i[s]||0,h=d-y,p=h>0?"LG":h<0?"SS":"=",u=h>0?"#86EFAC":h<0?"#FCA5A5":"#FFFFFF",f=h>0?"#14532D":h<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${u};color:${f};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};font-weight:${s==="TTL"?"900":"600"};">${St(s)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;font-weight:700;">${d.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;">${y.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:right;font-weight:700;">${h>0?"+":""}${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${J};text-align:center;font-weight:900;">${p}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${J};color:#000;">${n.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${n.winner}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function zn(t,e,o){var s;if(!t||!t.length)return"";const i=((s=t[0])==null?void 0:s.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${i} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${i} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function n(d){return d>=80?"#D1FAE5":d>=50?"#FEF3C7":"#FEE2E2"}const c=t.map(d=>{const y=(d.monthRate||0).toFixed(0),h=(d.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${J};background:#F5F5F5;">${St(d.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(d.monthRate)};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(d.monthActual||0).toLocaleString()} / ${(d.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(d.progressRate)};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(d.cumActual||0).toLocaleString()} / ${(d.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${J};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${J};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i} ${a.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function Gn(t,e){var c;if(!t||!t.length)return"";const o=((c=t[0])==null?void 0:c.targetMonth)||"3월",i=e==="en"?{title:`${o} Achievement by Organization`,org:"Organization",tasks:"Tasks",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`${o} 조직별 달성 현황`,org:"조직",tasks:"과제수",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function a(s){return s>=80?"#D1FAE5":s>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(s=>`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${J};background:#F5F5F5;">${St(s.stakeholder)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${s.taskCount}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(s.monthRate)};">${(s.monthRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.monthActual||0).toLocaleString()} / ${(s.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(s.progressRate)};">${(s.progressRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.cumActual||0).toLocaleString()} / ${(s.annualGoal||0).toLocaleString()}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:16px 0 10px;font-family:${J};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${J};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.org}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.tasks}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function no(t,e,o,i,a={},n="ko",c=[],s=[],d={}){const{productsCntyPrev:y=[],productsPrev:h=[],categoryStats:p=null,stakeholderStats:u=null,cntyKeys:f=null,llmModel:C,monthlyVis:m}=d;if(C&&C!=="Total"&&(o=Ko(o,C),c=qo(c,C),e=Jo(e,m,C)),Array.isArray(f)&&f.length>0){const x=new Set(f.map(I=>String(I).toUpperCase()));c=(c||[]).filter(I=>I&&x.has(String(I.country).toUpperCase())),s=(s||[]).filter(I=>I&&x.has(String(I.country).toUpperCase()))}const v=n==="en"?"GEO Monthly Report":"GEO 월간 보고서",w=t.period||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${St(v)} — ${St(w)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${J} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${J};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${J};">${St(v)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${J};">${St(w)} · ${St(t.team||"")}</p>
    </div>

    ${t.showMonthlyReportBody!==!1&&t.monthlyReportBody?`
    <section style="margin-bottom:28px;">
      ${Ln(t.monthlyReportBody)}
    </section>`:""}

    ${e&&e.score!=null?`
    <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-bottom:8px;font-family:${J};">
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;width:30%;">${n==="en"?"Total LG Visibility":"전체 LG Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${ne(e.score)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"Competitor (Samsung) Visibility":"경쟁사(Samsung) Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${ne(e.vsComp)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"vs Competitor":"경쟁사 대비"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${je(e.score,e.vsComp)}</td>
      </tr>
      ${e.prev!=null&&e.prev>0?`<tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">MoM(%p)</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${ze(e.score,e.prev)}</td>
      </tr>`:""}
    </table>`:""}

    ${In(e==null?void 0:e.buTotals,e==null?void 0:e.buTotalsPrev,n)}
    ${jn(e==null?void 0:e.countryTotals,e==null?void 0:e.countryTotalsPrev,n)}
    ${Mn(o,h,n)}
    ${Pn(c,y,n,o)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${J};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Dn(i,n)}
    ${On(s,n)}
    ${Nn(s,n)}
    ${_n(a,n)}

    ${zn(p,n)}
    ${Gn(u,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${J};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const kt="#CF0652",L="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Un=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Le={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:Un,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},Hn={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},Wn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],Vn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},Kn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],qn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],Jn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Yo=3;function Yn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Yo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function Xn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Yo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ge={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function ge(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function Zn(t){try{const e=await fetch(ge(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Qn(t,e,o){try{const i=await fetch(ge(t).snapshots,{method:"POST",headers:Ge,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function tr(t,e,o){try{const i=await fetch(`${ge(t).snapshots}/${e}`,{method:"PUT",headers:Ge,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function er(t,e){try{const o=await fetch(`${ge(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Ot(t,e,o="ko",i=""){try{const a=await fetch("/api/generate-insight",{method:"POST",headers:Ge,body:JSON.stringify({type:t,data:e,lang:o,rules:i})});if(!a.ok){const c=await a.json().catch(()=>({}));throw new Error(c.error||`HTTP ${a.status}`)}const n=await a.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(a){throw console.error("[API] generateAIInsight failed:",a.message),a}}async function Pe(t){try{const e=await fetch(ge(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function wo(t){try{const e=await fetch(ge(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function or(t,e,o={}){const{includePromptList:i=!1,includeReadability:a=!1}=o,[n,c]=await Promise.all([Pe("dashboard").catch(()=>null),Pe("visibility").catch(()=>null)]),s={...n||{},...c||{}};if(n&&Object.keys(n).forEach(B=>{s[B]==null&&n[B]!=null&&(s[B]=n[B])}),c!=null&&c.meta&&(n!=null&&n.meta)&&(s.meta={...n.meta||{},...c.meta||{}}),!s||!Object.keys(s).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const d=s.meta||{},y=s.total||{},p=(s.productsPartial||s.products||[]).map(B=>{var H;const D=B.weekly||((H=s.weeklyMap)==null?void 0:H[B.id])||[],z=B.vsComp>0?B.score/B.vsComp*100:100;return{...B,weekly:D,monthly:B.monthly||[],compRatio:B.compRatio||Math.round(z),status:B.status||(z>=100?"lead":z>=80?"behind":"critical")}}),u=s.citations||[],f=s.dotcom||{},C=s.productsCnty||[],m=s.citationsCnty||[],v=s.weeklyLabels||null,w=s.weeklyAll||{},x=s.citationsByCnty||{},I=s.dotcomByCnty||{},j=e(p,C,u,m,"ko"),R=e(p,C,u,m,"en"),G={appendixPrompts:s.appendixPrompts||[],weeklyPR:s.weeklyPR||[],weeklyPRLabels:s.weeklyPRLabels||[],weeklyBrandPrompt:s.weeklyBrandPrompt||[],weeklyBrandPromptLabels:s.weeklyBrandPromptLabels||[],unlaunchedMap:s.unlaunchedMap||{},prTopicList:s.prTopicList||[],weeklyLabelsFull:s.weeklyLabelsFull||[]},$={monthlyVis:s.monthlyVis||[],includePromptList:i,includeReadability:a},N=t(d,y,j.products,j.citations,f,"ko",j.productsCnty,j.citationsCnty,v,w,x,I,$,G),U=t({...d,title:d.title||"GEO KPI Dashboard"},y,R.products,R.citations,f,"en",R.productsCnty,R.citationsCnty,v,w,x,I,$,G),S=`${d.period||""} ${d.title||"KPI Dashboard"}`.trim(),g=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:S,htmlKo:N,htmlEn:U})})).json();if(!g.ok)throw new Error(g.error||"게시 실패");return g}async function Co(t,e){try{const o=await fetch(ge(t).syncData,{method:"POST",headers:Ge,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const nr={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Ve={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},ko={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function Re(t,e,o,i,a){return a!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(n=>({...n,kr:n.en||Ve[n.kr]||n.kr,compName:n.compNameEn||ko[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||nr[n.country]||n.country,product:n.productEn||Ve[n.product]||n.product,compName:n.compNameEn||ko[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||Ve[n.category]||n.category})),citationsCnty:i.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function rr(t,{from:e="ko",to:o="en"}={}){const a=[];for(let n=0;n<t.length;n+=20){const c=t.slice(n,n+20),s=await Promise.all(c.map(async d=>{if(!d||!d.trim())return d;const y=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(d)}`,h=await fetch(y);if(!h.ok)throw new Error(`번역 실패 (${h.status})`);return(await h.json())[0].map(u=>u[0]).join("")}));a.push(...s)}return a}const he=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],ir=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function ar(t){const e=ir.indexOf(t);return e>=0?e:999}function Be(t){return ar(t)}function ro(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Xo(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[ro(o)]=o)}),e}function So(t,e){var d,y,h,p;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(h=(y=t==null?void 0:t._dashboard)==null?void 0:y.categoryStats)!=null&&h.length?[...t._dashboard.categoryStats].sort((u,f)=>Be(u.category)-Be(f.category)):null;const o=t.quantitativeGoals.rows,i=Xo((p=t.quantitativeResults)==null?void 0:p.rows);new Date().getMonth()+1;let a=e,n=he.indexOf(a);n<0&&(a="3월",n=0);const c=[...new Set(o.map(u=>u.taskCategory).filter(Boolean))],s=n>0?he[n-1]:null;return c.map(u=>{const f=o.filter($=>$.taskCategory===u);let C=0,m=0,v=0,w=0,x=0,I=0;f.forEach($=>{var g,B,D,z,H;const N=ro($),U=i[N]||{},S=typeof((g=$.monthly)==null?void 0:g[a])=="number"?$.monthly[a]:0,A=typeof((B=U.monthly)==null?void 0:B[a])=="number"?U.monthly[a]:0;if(m+=S,C+=A,s){const T=typeof((D=$.monthly)==null?void 0:D[s])=="number"?$.monthly[s]:0,M=typeof((z=U.monthly)==null?void 0:z[s])=="number"?U.monthly[s]:0;I+=T,x+=M}for(let T=0;T<=n;T++){const M=he[T];typeof((H=U.monthly)==null?void 0:H[M])=="number"&&(v+=U.monthly[M])}he.forEach(T=>{var M;typeof((M=$.monthly)==null?void 0:M[T])=="number"&&(w+=$.monthly[T])})});const j=m>0?Math.round(C/m*1e3)/10:0,R=I>0?Math.round(x/I*1e3)/10:0,G=w>0?Math.round(v/w*1e3)/10:0;return{category:u,taskCount:f.length,targetMonth:a,monthRate:j,prevMonthRate:R,prevMonth:s,progressRate:G,monthActual:C,monthGoal:m,cumActual:v,annualGoal:w}}).sort((u,f)=>Be(u.category)-Be(f.category))}const sr=["MS","HS","ES","고가혁","브랜드","D2C","PR"];function Fo(t){const e=sr.indexOf(t);return e>=0?e:999}function Ao(t,e){var s,d;if(!((s=t==null?void 0:t.quantitativeGoals)!=null&&s.rows))return null;const o=t.quantitativeGoals.rows,i=Xo((d=t.quantitativeResults)==null?void 0:d.rows);new Date().getMonth()+1;let a=e,n=he.indexOf(a);return n<0&&(a="3월",n=0),[...new Set(o.map(y=>y.stakeholder).filter(Boolean))].map(y=>{const h=o.filter(w=>w.stakeholder===y);let p=0,u=0,f=0,C=0;h.forEach(w=>{var G,$,N;const x=ro(w),I=i[x]||{},j=typeof((G=w.monthly)==null?void 0:G[a])=="number"?w.monthly[a]:0,R=typeof(($=I.monthly)==null?void 0:$[a])=="number"?I.monthly[a]:0;u+=j,p+=R;for(let U=0;U<=n;U++){const S=he[U];typeof((N=I.monthly)==null?void 0:N[S])=="number"&&(f+=I.monthly[S])}he.forEach(U=>{var S;typeof((S=w.monthly)==null?void 0:S[U])=="number"&&(C+=w.monthly[U])})});const m=u>0?Math.round(p/u*1e3)/10:0,v=C>0?Math.round(f/C*1e3)/10:0;return{stakeholder:y,taskCount:h.length,targetMonth:a,monthRate:m,monthActual:p,monthGoal:u,progressRate:v,cumActual:f,annualGoal:C}}).sort((y,h)=>Fo(y.stakeholder)-Fo(h.stakeholder))}function lr(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}async function Zo(){const t=await Ye(()=>import("./xlsx-DiWaSB7x.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const cr=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],Xe={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},dr={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Ee={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Fe={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},pr={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(cr.map((t,e)=>[t,e]));const Qo={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},tn=new Set(Object.values(Ee)),Eo=[...new Set(Object.values(Qo))].filter(t=>!tn.has(t));Eo.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:Eo,validCodes:[...tn]});function Ze(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Kt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function ur(t,e){return Array.isArray(t)?t.length===0?(Ze(e,"invalid input: empty rows",{len:0}),!1):!0:(Ze(e,"invalid input: not an array",{type:typeof t}),!1)}function Ue(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const i=o.map(a=>String(a??"").trim().toLowerCase());return e.every(a=>i.some(n=>a instanceof RegExp?a.test(n):n===String(a).toLowerCase()))})}function fr(t,e="sync"){var a,n,c;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((a=t.products)==null?void 0:a.length)||((n=t.productsPartial)==null?void 0:n.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(c=t.weeklyLabels)!=null&&c.length&&t.weeklyLabels.every((d,y)=>d===`W${y+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const Bt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},To=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],$o=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function hr(t,e,o,i,a={}){const n=await Zo(),c=n.utils.book_new(),s=n.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);s["!cols"]=[{wch:24},{wch:50},{wch:40}],n.utils.book_append_sheet(c,s,"meta");const d=n.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);d["!cols"]=[{wch:14},{wch:10},{wch:44}],n.utils.book_append_sheet(c,d,"total");const y=n.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(m=>[m.id,m.bu,m.kr,m.score,m.prev,m.vsComp,m.compName])]);y["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],n.utils.book_append_sheet(c,y,"products");const h=n.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(m=>[m.id,m.kr,...m.weekly])]);h["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],n.utils.book_append_sheet(c,h,"weekly");const p=n.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(m=>[m.rank,m.source,m.category,m.score,m.delta,m.ratio??0])]);p["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],n.utils.book_append_sheet(c,p,"citations");const u=(a==null?void 0:a.lg)||{},f=(a==null?void 0:a.samsung)||{},C=n.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...To.map(m=>`LG_${m}`),...$o.map(m=>`Samsung_${m}`)],[...To.map(m=>u[m]??0),...$o.map(m=>f[m]??0)]]);C["!cols"]=Array(15).fill({wch:14}),n.utils.book_append_sheet(c,C,"dotcom"),n.writeFile(c,"GEO_Newsletter_템플릿.xlsx")}function Zt(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),a=parseFloat(i)||0;return o?+a.toFixed(2):Math.abs(a)<=1&&a!==0?+(a*100).toFixed(2):+a.toFixed(2)}function Me(t){return t==null||String(t).trim()===""?null:Zt(t)}function Ht(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function Qt(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const gr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function mr(t){const e=Qt(t);return gr[e]||e}function ve(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,a=0;const n=e.match(/(\d{4})/);if(n)a=parseInt(n[1]);else{const s=e.match(/(\d{2})년/);if(s)a=2e3+parseInt(s[1]);else{const d=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);d&&(a=2e3+parseInt(d[1]))}}const c=e.match(/(\d{1,2})월/);if(c)i=parseInt(c[1]);else{const s=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(s)i=o[s[1].toLowerCase()];else{const d=e.match(/\d{4}[-\/](\d{1,2})/);d&&(i=parseInt(d[1]))}}return a?a*12+i:i}function yr(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],i=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const c=String(n[0]).trim(),s=n[1]??"";if(o.includes(c))e[c]=parseInt(s)||(c==="titleFontSize"?24:10);else if(i.includes(c)){const d=String(s).trim().toLowerCase();e[c]=d==="y"||d==="yes"||d==="true"||d==="1"}else e[c]=String(s)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(c=>c.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},c=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);c&&(e.period=`${n[c[2]]||c[2]} ${c[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const c=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${c[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function br(t){var M;console.log(`[parseVisSummary] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((F,K)=>console.log(`  row${K}: [${(F||[]).slice(0,8).map(W=>JSON.stringify(String(W||"").trim())).join(", ")}]`));const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let a=!1,n=-1;if(t.forEach((F,K)=>{if(!F[0]||String(F[0]).startsWith("[")||String(F[0]).startsWith("※")||F[0]==="key")return;const W=String(F[0]).trim();(o.includes(W)||e.includes(W))&&(a||(n=K),a=!0,e.includes(W)?i[W]=parseInt(F[1])||0:i[W]=Zt(F[1]))}),a&&Object.keys(i).length>=2)return console.log(`[parseVisSummary] KV path 진입 (legacy) — trigger row${n}: r[0]='${(M=t[n])==null?void 0:M[0]}' / kvObj keys:`,Object.keys(i)),{total:i};console.log("[parseVisSummary] Table path 진입");let c=t.find(F=>F.some(K=>String(K||"").trim().toUpperCase()==="LG"));c||(c=t.find(F=>F.some(K=>/^date$|^region$|^countries$|^country$|^divisions?$/i.test(String(K||"").trim()))));const s=c?c.findIndex(F=>String(F||"").trim().toUpperCase()==="LG"):-1,d=c?c.findIndex(F=>{const K=String(F||"").trim().toUpperCase();return K==="SAMSUNG"||K==="SAMSUMG"}):-1,y=c?c.findIndex(F=>/date/i.test(String(F||"").trim())):0,h=c?c.findIndex(F=>/countries|country/i.test(String(F||"").trim())):2,p=c?c.findIndex(F=>/divisions?/i.test(String(F||"").trim())):3,u=c?c.findIndex(F=>/^(llm\s*model|llm|model)$/i.test(String(F||"").trim())):-1,f=Math.max(y,h,p,u),C=s>=0?s:f>=0?f+1:4,m=d>=0?d:C+1;console.log(`[parseVisSummary] columns: date=${y} cnty=${h} div=${p} llm=${u} lg=${C}(raw=${s}) ss=${m}(raw=${d})`);const v=[];t.filter(F=>{const K=String(F[y>=0?y:0]||"").trim();return K&&!K.startsWith("[")&&!K.startsWith("※")&&!/^date$/i.test(K)&&!/^key$/i.test(K)}).forEach(F=>{const K=String(F[y>=0?y:0]||"").trim(),W=Qt(F[h>=0?h:2]),et=String(F[p>=0?p:3]||"").trim().toUpperCase(),k=(u>=0?String(F[u]||"").trim():"")||"Total",E=Zt(F[C]),O=Zt(F[m]);K&&E>0&&v.push({date:K,country:W,division:et,llmModel:k,lg:E,comp:O})});const x=v.filter(F=>(F.country==="TOTAL"||F.country==="TTL")&&(F.division==="TOTAL"||F.division==="TTL"||F.division==="")&&(F.llmModel==="Total"||F.llmModel==="TOTAL"||F.llmModel==="All"));x.sort((F,K)=>ve(F.date)-ve(K.date));const I=x[x.length-1],j=x.length>=2?x[x.length-2]:null;if(!I){const F=t.find(X=>X.some(k=>String(k||"").trim().toUpperCase()==="TOTAL"));if(!F)return Kt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(X=>X==null?void 0:X.slice(0,6))});const K=Zt(F[C]),W=Zt(F[m]),et={total:{score:K,prev:K,vsComp:W,rank:K>=W?1:2,totalBrands:12}};return v.length&&(et.monthlyVis=v),et}const R=I.lg,G=I.comp,$=j?j.lg:R,N=I.date,U=j?j.date:null;function S(F){const K={};return v.filter(W=>W.date===F&&(W.country==="TOTAL"||W.country==="TTL")&&W.division&&W.division!=="TOTAL"&&W.division!=="TTL"&&W.division!==""&&(W.llmModel==="Total"||W.llmModel==="TOTAL"||W.llmModel==="All")).forEach(W=>{K[W.division]={lg:W.lg,comp:W.comp}}),K}const A=S(N),g=U?S(U):{};function B(F){const K={};return v.filter(W=>W.date===F&&W.country&&W.country!=="TOTAL"&&W.country!=="TTL"&&(W.division==="TOTAL"||W.division==="TTL"||W.division==="")&&(W.llmModel==="Total"||W.llmModel==="TOTAL"||W.llmModel==="All")).forEach(W=>{K[W.country]={lg:W.lg,comp:W.comp}}),K}const D=B(N),z=U?B(U):{},H={total:{score:R,prev:$,vsComp:G,rank:R>=G?1:2,totalBrands:12},...Object.keys(A).length?{buTotals:A}:{},...Object.keys(g).length?{buTotalsPrev:g}:{},...Object.keys(D).length?{countryTotals:D}:{},...Object.keys(z).length?{countryTotalsPrev:z}:{}};N&&(H.derivedPeriod=N),v.length&&(H.monthlyVis=v);const T={};return v.forEach(F=>{T[F.date]=(T[F.date]||0)+1}),console.log(`[parseVisSummary] monthlyVis ${v.length}행 / unique dates:`,T,`/ TOTAL+TOTAL+Total 행: ${x.length}`),console.log("[parseVisSummary] 반환 keys:",Object.keys(H)),H}function xr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((a,n)=>console.log(`  row${n}: [${a.slice(0,8).map(c=>JSON.stringify(String(c||"").trim())).join(", ")}]`));const e={},o=[];t.forEach((a,n)=>{if(n===0)return;const c=String((a==null?void 0:a[1])||"").trim(),s=String((a==null?void 0:a[2])||"").trim().toUpperCase();c&&(e[c]=(e[c]||0)+1,(s==="TTL"||s==="TOTAL")&&o.push({date:c,cat:String((a==null?void 0:a[3])||"").trim(),llm:String((a==null?void 0:a[4])||"").trim()||"(empty)",div:String((a==null?void 0:a[0])||"").trim()}))}),console.log("[parseProductCnty] 모든 unique dates (시트 raw):",e),console.log("[parseProductCnty] TTL country 행들 (date / category / llmModel):"),o.forEach(a=>console.log(`  ${a.div} | ${a.date} | ${a.cat} | LLM='${a.llm}'`));const i=t.findIndex(a=>{const n=String(a[0]||"").trim().toLowerCase();return n==="div"||n==="division"||n==="divisions"});if(i<0){const a=t.findIndex(n=>n.some((c,s)=>s>=1&&String(c||"").trim().toUpperCase()==="LG"));return a<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${a}: [${t[a].slice(0,8).map(n=>JSON.stringify(String(n||"").trim())).join(", ")}]`),Lo(t,a))}return console.log(`[parseProductCnty] header at row${i}: [${t[i].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),Lo(t,i)}function Lo(t,e){const o=t[e],i=o.findIndex((p,u)=>u>=3&&String(p||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const a=o.findIndex(p=>/^(llm\s*model|llm|model)$/i.test(String(p||"").trim())),n=[];for(let p=i+1;p<o.length;p++){const u=String(o[p]||"").trim();u&&u.toUpperCase()!=="LG"&&n.push({name:u,col:p})}const c=t.slice(e+1).filter(p=>{const u=String(p[0]||"").trim();return u&&!u.startsWith("[")&&!u.startsWith("※")}),s={},d={};c.forEach(p=>{const u=String(p[0]||"").trim(),f=String(p[1]||"").trim(),C=String(p[2]||"").trim(),m=Qt(p[2])||C,v=String(p[3]||"").trim(),x=(a>=0?String(p[a]||"").trim():"")||"Total",I=Zt(p[i]),j=n.map(N=>({name:N.name,score:Zt(p[N.col])})).filter(N=>N.score>0),R=[...j].sort((N,U)=>U.score-N.score)[0]||{name:"",score:0},G=+(I-R.score).toFixed(2),$={LG:I};if(j.forEach(N=>{$[N.name]=N.score}),m==="TTL"||m==="TOTAL"){const N=Fe[v]||v.toLowerCase(),U=pr[v]||v;s[N]||(s[N]=[]),s[N].push({id:N,bu:u,kr:U,category:v,date:f,llmModel:x,score:I,vsComp:R.score,compName:R.name,allScores:$})}else{const N=`${v}|${m}`;d[N]||(d[N]=[]),d[N].push({product:v,country:m,date:f,llmModel:x,score:I,compName:R.name,compScore:R.score,gap:G,allScores:$})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(s).join(", ")||"없음"} / 국가별: ${Object.keys(d).length}건`);const y=[];for(const[p,u]of Object.entries(s)){const f=u.filter(x=>x.llmModel==="Total"||x.llmModel==="TOTAL"||x.llmModel==="All"),C=f.length?f:u;C.sort((x,I)=>ve(x.date)-ve(I.date));const m=C[C.length-1],v=C.length>=2?C[C.length-2].score:null;console.log(`[parseProductCnty] ${p}: dates=[${C.map(x=>x.date).join(",")}] score=${m.score} prev=${v} vsComp=${m.vsComp}`);const w=C.map(x=>{const I=u.filter(R=>R.date===x.date),j={};return I.forEach(R=>{j[R.llmModel]={score:R.score,comp:R.vsComp,allScores:R.allScores}}),{date:x.date,score:x.score,comp:x.vsComp,allScores:x.allScores,byLlm:j}});y.push({...m,prev:v,monthlyScores:w})}const h=[];for(const p of Object.values(d)){const u=p.filter(w=>w.llmModel==="Total"||w.llmModel==="TOTAL"||w.llmModel==="All"),f=u.length?u:p;f.sort((w,x)=>ve(w.date)-ve(x.date));const C=f[f.length-1],m=f.length>=2?f[f.length-2].score:null,v=f.map(w=>{const x=p.filter(j=>j.date===w.date),I={};return x.forEach(j=>{I[j.llmModel]={score:j.score,compScore:j.compScore,compName:j.compName,allScores:j.allScores}}),{date:w.date,score:w.score,compScore:w.compScore,compName:w.compName,allScores:w.allScores,byLlm:I}});h.push({...C,prev:m,monthlyScores:v})}return{...y.length?{productsPartial:y}:{},...h.length?{productsCnty:h}:{}}}function en(t,e=0,o){const i=o??t.length;for(let a=e;a<i;a++){const n=[];for(const c of t[a]||[]){const s=String(c||"").split(/\n/)[0].trim();/^W\d+/i.test(s)&&n.push(s.toUpperCase())}if(n.length>=2)return n}return null}const Ke={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function Bo(t,e){var m;const o=e?Ke[e]||{}:{...Ke.MS,...Ke.ES};if(!Object.keys(o).length)return Kt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const i=t.findIndex(v=>v.some(w=>String(w||"").trim()in o));if(i<0)return Kt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const a=t[i],n=t.findIndex((v,w)=>w>i&&v.some(x=>String(x||"").trim()==="TTL")),c=n>0?n+1:Math.min(i+20,t.length);let s=-1,d=-1;for(let v=i+1;v<c;v++){const w=t[v];if(!w.some(j=>String(j||"").trim().toUpperCase()==="LG"))continue;if(d<0&&(d=v),w.some(j=>{const R=String(j||"").trim().toLowerCase().replace(/[\s_-]/g,"");return R==="nonbrand"||R==="nb"})){s=v;break}}const y=s>=0?s:d>=0?d:n;if(y<0)return Kt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:i,ttlRowIdx:n});const h=t[y],p=s>=0?"LG-NB":d>=0?"LG":"TTL",u={},f=Object.keys(o).map(v=>a.findIndex(w=>String(w||"").trim()===v)).filter(v=>v>=0).sort((v,w)=>v-w);for(const[v,w]of Object.entries(o)){const x=a.findIndex(R=>String(R||"").trim()===v);if(x<0)continue;const I=f.find(R=>R>x)||x+20,j=[];for(let R=x+1;R<I&&R<h.length;R++){const G=Zt(h[R]);G>0&&j.push(G)}j.length&&(u[w]=j)}if(!Object.keys(u).length)return Kt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:i,dataRowIdx:y,dataRowLabel:p});const C=en(t,i,c)||((m=Object.values(u)[0])==null?void 0:m.map((v,w)=>`W${w+1}`))||[];return{weeklyMap:u,weeklyLabels:C}}function vr(t,e,o){for(const i of Object.values(t))for(const a of Object.values(i))for(const[n,c]of Object.entries(a))a[n]=c.slice(o);for(const[i,a]of Object.entries(e))e[i]=a.slice(o)}function wr(t){const{data:e,rows:o,headerIdx:i,brandIdx:a,catIdx:n,countryIdx:c,isNonBrand:s,isTotal:d,weeklyMap:y,weeklyAll:h}=t;let p=t.wCols,u=t.weeklyLabels;if(!p.length){const f=e.find(C=>String(C[a]||"").trim().toUpperCase()==="LG"&&s(C));if(f){const C=[];for(let m=a+1;m<f.length;m++)if(String(f[m]||"").trim())C.push(m);else if(C.length)break;p=C,u=en(o,0,i+1)||p.map((m,v)=>`W${v+1}`)}}return e.forEach(f=>{if(!s(f))return;const C=String(f[a]||"").trim();if(!C)return;const m=String(f[n>=0?n:0]||"").trim();if(!m)return;const v=Fe[m]||m.toLowerCase(),w=c>=0?Qt(f[c]):"TOTAL",x=w==="TOTAL"||w==="TTL"||!w?"Total":w;h[v]||(h[v]={}),h[v][x]||(h[v][x]={}),h[v][x][C]=p.map(I=>Me(f[I]))}),e.forEach(f=>{if(String(f[a]||"").trim().toUpperCase()!=="LG"||!s(f)||!d(f))return;const m=String(f[n>=0?n:0]||"").trim();m&&(y[Fe[m]||m.toLowerCase()]=p.map(v=>Me(f[v])))}),{wCols:p,weeklyLabels:u}}function Cr(t){const{data:e,header:o,lgIdx:i,catIdx:a,isTotal:n,weeklyMap:c}=t,s=o.findIndex(h=>{const p=String(h||"").trim().toLowerCase();return p==="date"||p==="week"||p==="period"}),d={},y=[];return e.forEach(h=>{if(!n(h))return;const p=String(h[a>=0?a:3]||"").trim();if(p){if(s>=0){const u=String(h[s]||"").trim();u&&!y.includes(u)&&y.push(u)}d[p]=d[p]||[],d[p].push(Me(h[i]))}}),Object.entries(d).forEach(([h,p])=>{c[Fe[h]||h.toLowerCase()]=p}),y.length?y:null}function kr(t){const{data:e,wCols:o,catIdx:i,isTotal:a,weeklyMap:n}=t;e.forEach(c=>{if(!a(c))return;const s=String(c[i>=0?i:0]||"").trim();s&&(n[Fe[s]||s.toLowerCase()]=o.map(d=>Me(c[d])))})}function qe(t,e){const o={};let i=[],a=-1;for(let $=0;$<Math.min(t.length,10);$++){const N=t[$];if(!N)continue;let U=0;for(let S=0;S<N.length;S++)/^w\d+$/i.test(String(N[S]||"").trim())&&U++;if(U>=2){a=$;break}}let n=t.findIndex($=>{const N=$.slice(0,5).map(U=>String(U||"").trim().toLowerCase());return N.includes("category")||N.includes("product")});if(n<0&&a>=0&&(n=a),n<0&&(n=t.findIndex($=>{let N=!1,U=0;for(let S=0;S<Math.min($.length,10);S++){const A=String($[S]||"").trim();A.toUpperCase()==="LG"?(N=!0,U++):A&&isNaN(parseFloat(A))&&U++}return N&&U>=3})),n<0)return Bo(t,e);const c=t[n],s=n+1;let d=null;if(t[s]){const $=t[s].slice(4,8).map(N=>String(N||"").trim()).filter(Boolean);$.length&&$.every(N=>/^\d{1,2}\/\d{1,2}/.test(N)||/~/.test(N)||/^\(/.test(N))&&(d=s)}const y=d!=null?d+1:s,h=t.slice(y).filter($=>$[0]!=null&&String($[0]).trim()),p=c.findIndex($=>{const N=String($||"").trim().toLowerCase();return N==="category"||N==="product"}),u=c.findIndex($=>{const N=String($||"").trim().toLowerCase();return N==="country"||N==="county"}),f=c.findIndex($=>String($||"").trim().toLowerCase()==="brand"),C=c.findIndex($=>String($||"").trim().toUpperCase()==="LG");let m=[];const v=a>=0?t[a]:c;for(let $=0;$<v.length;$++)/^w\d+$/i.test(String(v[$]||"").trim())&&m.push($);if(!m.length)for(let $=0;$<c.length;$++){const N=String(c[$]||"").split(/\n/)[0].trim();/^w\d+/i.test(N)&&m.push($)}i=m.map($=>String(v[$]||"").trim().toUpperCase());let w=m.map(($,N)=>{const U=i[N]||`W${$}`;let S="";const A=d!=null?t[d]:a!==n&&a>=0?t[a+1]:null;if(A){const g=String(A[$]||"").trim();g&&/\d/.test(g)&&(S=g.startsWith("(")?g:`(${g})`)}return S?`${U}${S}`:U});console.log(`[parseWeekly:${e}] wLabelRow:${a} headerIdx:${n} dateRangeRow:${d} wCols:${m.length} labels:`,i.slice(0,5),"full:",w.slice(-2));function x($){if(u<0)return!0;const N=String($[u]||"").replace(/[()]/g,"").trim().toUpperCase();return N==="TOTAL"||N==="TTL"||N===""}const I=c.findIndex($=>{const N=String($||"").trim().toLowerCase().replace(/[\s_-]/g,"");return N==="b/nb"||N==="bnb"||N==="brand/nonbrand"});function j($){if(I<0)return!0;const N=String($[I]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return N==="nonbrand"||N==="nb"}const R={},G={data:h,rows:t,header:c,headerIdx:n,brandIdx:f,lgIdx:C,catIdx:p,countryIdx:u,wCols:m,weeklyLabels:i,weeklyMap:o,weeklyAll:R,isNonBrand:j,isTotal:x};if(f>=0){const $=wr(G);m=$.wCols,i=$.weeklyLabels}else if(C>=0){const $=Cr(G);$&&(i=$)}else m.length&&kr(G);if(i.length>0){let $=i.length;for(const A of Object.values(R))for(const g of Object.values(A))for(const B of Object.values(g)){const D=B.findIndex(z=>z!=null);D>=0&&D<$&&($=D)}for(const A of Object.values(o)){const g=A.findIndex(B=>B!=null);g>=0&&g<$&&($=g)}const N=12,S=i.length-$>N?i.length-N:$;S>0&&S<i.length&&(i=i.slice(S),w=w.slice(S),vr(R,o,S))}if(Object.keys(o).length){const $={weeklyMap:o};return i.length&&($.weeklyLabels=i),w.length&&($.weeklyLabelsFull=w),Object.keys(R).length&&($.weeklyAll=R),$}return Bo(t,e)}function Sr(t){console.log(`[parseCitPageType] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((g,B)=>console.log(`  row${B}: [${(g||[]).slice(0,10).map(D=>JSON.stringify(String(D||"").trim())).join(", ")}]`));const e=t.findIndex(g=>g.some(z=>{const H=String(z||"").trim().toLowerCase();return H.includes("page type")||H==="country"})?!g.some(z=>/^\[.*\]$/.test(String(z||"").trim())):!1);if(e<0)return Kt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(g=>g==null?void 0:g.slice(0,6))});const o=t[e],i=o.findIndex(g=>/^(llm\s*model|llm|model)$/i.test(String(g||"").trim())),a=o.findIndex(g=>/^country$|countries/i.test(String(g||"").trim())),n=o.findIndex(g=>{const B=String(g||"").replace(/[​‌‍﻿]/g,"").replace(/\s+/g,"").toLowerCase();return/^pa[gy]etype$/.test(B)||B==="type"}),c=a>=0?a:0,s=n>=0?n:c+1;console.log(`[parseCitPageType] header row${e}: [${o.slice(0,10).map(g=>JSON.stringify(String(g||"").trim())).join(", ")}]`),console.log(`[parseCitPageType] llmCol=${i} cntyCol=${a} ptCol=${n} (fallbackCnty=${c} fallbackPt=${s})`);const d=[],y=new Set,h=Math.max(s+1,2);for(let g=h;g<o.length;g++){const B=String(o[g]||"").trim();if(/\bLG\b/i.test(B)){const D=g+1;if(D<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[D]||""))){const z=B.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i),H=z?z[1].toLowerCase():`col${g}`;y.has(H)||(d.push({lg:g,ss:D}),y.add(H))}}}d.length||d.push({lg:h,ss:h+1}),console.log("[parseCitPageType] monthPairs:",d.map(g=>`LG=${g.lg}/SS=${g.ss}`).join(", "));const p=t.slice(e+1).filter(g=>g[c]!=null&&String(g[c]).trim());console.log(`[parseCitPageType] data ${p.length}행 (필터 통과)`);let u=d[0];for(let g=d.length-1;g>=0;g--)if(p.some(B=>Ht(B[d[g].lg])>0)){u=d[g];break}if(!p.some(g=>Ht(g[u.lg])>0)){for(let g=Math.min(u.lg,o.length)-1;g>=2;g--)if(p.some(B=>Ht(B[g])>0)){u={lg:g-1,ss:g};break}}const f={},C={},m={},v={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},w=new Set,x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],I=d.map(g=>{const B=String(o[g.lg]||"").trim(),D=B.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return D?D[1].charAt(0).toUpperCase()+D[1].slice(1).toLowerCase():B.replace(/\s*LG\s*/i,"").trim()}),j={},R={};function G(g){return R[g]||(R[g]={lg:{},samsung:{},dotcomByCnty:{},dotcomTrend:{}}),R[g]}p.forEach(g=>{const D=(i>=0?String(g[i]||"").trim():"")||"Total",z=D==="Total"||D==="TOTAL"||D==="All",H=Qt(g[c]),T=String(g[s]||"").replace(/[()]/g,"").trim();let M=/page total|^ttl$/i.test(T)?"TTL":T;M.toLowerCase()==="microsite"&&(M="Microsites");const F=v[H]||H.toUpperCase();w.add(F);const K=Ht(g[u.lg]),W=Ht(g[u.ss]);z&&(F==="TTL"?(f[M]=(f[M]||0)+K,C[M]=(C[M]||0)+W):(m[F]||(m[F]={lg:{},samsung:{}}),m[F].lg[M]=(m[F].lg[M]||0)+K,m[F].samsung[M]=(m[F].samsung[M]||0)+W),F==="TTL"&&(j[M]||(j[M]={}),d.forEach((X,k)=>{var Z,Y;const E=Ht(g[X.lg]),O=Ht(g[X.ss]);if(E>0||O>0){const ut=I[k]||`M${k+1}`;j[M][ut]={lg:(((Z=j[M][ut])==null?void 0:Z.lg)||0)+E,samsung:(((Y=j[M][ut])==null?void 0:Y.samsung)||0)+O}}})));const et=G(D);F==="TTL"?(et.lg[M]=(et.lg[M]||0)+K,et.samsung[M]=(et.samsung[M]||0)+W,et.dotcomTrend[M]||(et.dotcomTrend[M]={}),d.forEach((X,k)=>{var Z,Y;const E=Ht(g[X.lg]),O=Ht(g[X.ss]);if(E>0||O>0){const ut=I[k]||`M${k+1}`;et.dotcomTrend[M][ut]={lg:(((Z=et.dotcomTrend[M][ut])==null?void 0:Z.lg)||0)+E,samsung:(((Y=et.dotcomTrend[M][ut])==null?void 0:Y.samsung)||0)+O}}})):(et.dotcomByCnty[F]||(et.dotcomByCnty[F]={lg:{},samsung:{}}),et.dotcomByCnty[F].lg[M]=(et.dotcomByCnty[F].lg[M]||0)+K,et.dotcomByCnty[F].samsung[M]=(et.dotcomByCnty[F].samsung[M]||0)+W)});const $=new Set;Object.values(j).forEach(g=>Object.keys(g).forEach(B=>$.add(B)));const N=x.filter(g=>$.has(g)),U={},S={};d.forEach((g,B)=>{const D=I[B];if(!D)return;const z={},H={};p.forEach(T=>{const F=(i>=0?String(T[i]||"").trim():"")||"Total";if(!(F==="Total"||F==="TOTAL"||F==="All"))return;const W=Qt(T[c]),et=String(T[s]||"").replace(/[()]/g,"").trim();let X=/page total|^ttl$/i.test(et)?"TTL":et;X.toLowerCase()==="microsite"&&(X="Microsites");const k=v[W]||W.toUpperCase(),E=Ht(T[g.lg]),O=Ht(T[g.ss]);E<=0&&O<=0||(k==="TTL"?(E>0&&(z[X]=(z[X]||0)+E),O>0&&(H[X]=(H[X]||0)+O)):(S[D]||(S[D]={}),S[D][k]||(S[D][k]={lg:{},samsung:{}}),E>0&&(S[D][k].lg[X]=(S[D][k].lg[X]||0)+E),O>0&&(S[D][k].samsung[X]=(S[D][k].samsung[X]||0)+O)))}),Object.keys(z).length&&(U[D]={lg:z,samsung:H})}),Object.keys(S).forEach(g=>{Object.keys(S[g]).forEach(B=>{const D=S[g][B];Object.values(D.lg).some(H=>H>0)||Object.values(D.samsung).some(H=>H>0)||delete S[g][B]}),Object.keys(S[g]).length||delete S[g]});const A={};return(f.TTL||Object.keys(f).length)&&(A.dotcom={lg:f,samsung:C,byMonth:U,byCntyByMonth:S}),Object.keys(m).length&&(A.dotcomByCnty=m),Object.keys(j).length&&N.length&&(A.dotcomTrend=j,A.dotcomTrendMonths=N),(Object.keys(R).length>1||Object.keys(R).length===1&&!(R.Total||R.TOTAL||R.All))&&(A.dotcomByLlm=R),console.log(`[parseCitPageType] 결과: dotcom.lg keys=${Object.keys(f).join(",")||"(EMPTY)"} / dotcomByCnty=${Object.keys(m).join(",")||"(EMPTY)"} / dotcomTrend keys=${Object.keys(j).join(",")||"(EMPTY)"} / byLlm keys=${Object.keys(R).join(",")||"(EMPTY)"}`),A}function Fr(t){console.log(`[parseCitTouchPoints] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((k,E)=>console.log(`  row${E}: [${(k||[]).slice(0,12).map(O=>JSON.stringify(String(O||"").trim())).join(", ")}]`));const e=t.findIndex(k=>k.some(Z=>{const Y=String(Z||"").trim().toLowerCase();return Y==="channel"||Y==="country"})?!k.some(Z=>/^\[.*\]$/.test(String(Z||"").trim())):!1);e<0&&Kt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(k=>k==null?void 0:k.slice(0,6))});const o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let a=-1,n=-1,c=-1,s=-1;for(let k=0;k<o.length;k++){const E=String(o[k]||"").trim().toLowerCase();E==="country"&&a<0&&(a=k),E==="channel"&&n<0&&(n=k),E==="prd"&&c<0&&(c=k),/^(llm\s*model|llm|model)$/i.test(E)&&s<0&&(s=k)}const d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function y(k){const E=String(k||"").trim().toLowerCase();if(!E)return null;const O=E.match(/^(\d{1,2})월/);if(O){const Y=parseInt(O[1]);if(Y>=1&&Y<=12)return d[Y-1]}const Z=E.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return Z?Z[1].charAt(0).toUpperCase()+Z[1].slice(1).toLowerCase():null}const h=[],p=new Set;for(let k=0;k<o.length;k++){const E=y(o[k]);E&&!p.has(k)&&(h.push({col:k,label:E}),p.add(k))}if(e>0){const k=t[e-1];if(k)for(let E=0;E<k.length;E++){const O=y(k[E]);O&&!p.has(E)&&(h.push({col:E,label:O}),p.add(E))}}let u=2;if(h.length>0)u=Math.min(...h.map(k=>k.col));else if(a>=0&&n>=0)u=Math.max(a,n,c)+1;else{const k=t[i];k&&!String(k[0]||"").trim()?(a=1,n=2,u=3):(a=0,n=1,u=2)}if(a<0||n<0){const k=t[i],E=k&&!String(k[0]||"").trim()?1:0;a<0&&(a=E),n<0&&(n=E+1)}if(h.length>0){h.sort((Z,Y)=>Z.col-Y.col);const k=h[0],E=d.indexOf(k.label),O=new Set([a,n,c].filter(Z=>Z>=0));if(E>0&&k.col>u){let Z=E-1;for(let Y=k.col-1;Y>=u&&Z>=0;Y--){if(p.has(Y)||O.has(Y))continue;const ut=String(o[Y]||"").trim(),bt=e>0?String((t[e-1]||[])[Y]||"").trim():"";ut||bt||(h.push({col:Y,label:d[Z]}),p.add(Y),Z--)}}}h.sort((k,E)=>d.indexOf(k.label)-d.indexOf(E.label)),console.log(`[parseCitTouchPoints] header row${e}: [${(o||[]).slice(0,12).map(k=>JSON.stringify(String(k||"").trim())).join(", ")}]`),console.log(`[parseCitTouchPoints] countryCol=${a} channelCol=${n} prdCol=${c} llmCol=${s} dataStartCol=${u}`),console.log("[parseCitTouchPoints] monthLabels (sorted):",h.map(k=>`${k.label}@col${k.col}`).join(", "));const f=t.slice(i).filter(k=>k.some(E=>E!=null&&String(E).trim())),C=[],m={},v={},w={},x={},I=new Set,j={},R={},G={},$=k=>String(k||"").replace(/[()]/g,"").trim();f.forEach(k=>{const E=Qt(k[a]),O=$(k[n]);if(!E||!O||O.toLowerCase()==="total")return;const Z=E==="TTL"||E==="TOTAL",Y=s>=0?$(k[s]):"",ut=!Y||/^(total|all|ttl)$/i.test(Y),bt=c>=0?$(k[c]):"",Ct=!bt||/^(ttl|total)$/i.test(bt.toUpperCase());h.forEach(({col:Rt,label:wt})=>{Ht(k[Rt])<=0||(Z||(j[O]||(j[O]={}),j[O][wt]=!0),ut||(R[O]||(R[O]={}),R[O][wt]=!0),Ct||(G[O]||(G[O]={}),G[O][wt]=!0))})});const N=Object.keys(j).map(k=>`${k}:[${Object.keys(j[k]).join(",")}]`).join(" ");console.log(`[parseCitTouchPoints] Country breakdown 감지 (channel × month): ${N||"(없음)"}`),console.log("[parseCitTouchPoints] LLM breakdown 감지:",Object.keys(R).map(k=>`${k}:[${Object.keys(R[k]).join(",")}]`).join(" ")||"(없음)"),console.log("[parseCitTouchPoints] PRD breakdown 감지:",Object.keys(G).map(k=>`${k}:[${Object.keys(G[k]).join(",")}]`).join(" ")||"(없음)");const U={},S={},A={},g={};f.forEach(k=>{const E=Qt(k[a]),O=$(k[n]),Z=c>=0?$(k[c]):"",Y=s>=0?$(k[s]):"";if(!E||!O||O.toLowerCase()==="total")return;const ut=E==="TTL"||E==="TOTAL",bt=!Y||/^(total|all|ttl)$/i.test(Y),Ct=Z.toUpperCase(),Rt=!Z||Ct==="TTL"||Ct==="TOTAL";if(ut||I.add(E),!ut&&(A[E]||(A[E]={}),A[E][O]||(A[E][O]={ttl:null,prds:[]}),!Rt)){const Mt={};h.forEach(({col:Ft,label:Tt})=>{var xt;const It=Ht(k[Ft]);It<=0||bt&&((xt=R[O])!=null&&xt[Tt])||(Mt[Tt]=It)}),Object.keys(Mt).length&&A[E][O].prds.push({prd:Z,monthScores:Mt})}U[O]||(U[O]={}),S[O]||(S[O]={});const wt=ut?"TTL":E;S[O][wt]||(S[O][wt]={}),h.forEach(({col:Mt,label:Ft})=>{var _,q,dt,gt;const Tt=Ht(k[Mt]);if(Tt<=0)return;const It=ut&&((_=j[O])==null?void 0:_[Ft]),xt=bt&&((q=R[O])==null?void 0:q[Ft]),Wt=Rt&&((dt=G[O])==null?void 0:dt[Ft]),ct=bt?"Total":Y;!It&&!(Rt&&((gt=G[O])!=null&&gt[Ft]))&&(g[ct]||(g[ct]={}),g[ct][O]||(g[ct][O]={}),g[ct][O][Ft]=(g[ct][O][Ft]||0)+Tt),!(It||xt||Wt)&&(U[O][Ft]=(U[O][Ft]||0)+Tt,S[O][wt][Ft]=(S[O][wt][Ft]||0)+Tt)})});const B=k=>{for(let E=h.length-1;E>=0;E--){const O=k[h[E].label];if(O>0)return O}return 0},D={};Object.entries(S).forEach(([k,E])=>{Object.entries(E).forEach(([O,Z])=>{O!=="TTL"&&Object.keys(Z).length!==0&&(D[O]||(D[O]={}),D[O][k]=Z)})}),Object.entries(U).forEach(([k,E])=>{const O=B(E);O>0&&(C.push({source:k,category:"",score:O,delta:0,ratio:0,monthScores:E}),m[k]=E)}),Object.entries(S).forEach(([k,E])=>{Object.entries(E).forEach(([O,Z])=>{if(O==="TTL")return;const Y=B(Z);Y>0&&(v[O]||(v[O]=[]),v[O].push({source:k,category:"",score:Y,delta:0,ratio:0,monthScores:Z,prd:""}))})}),Object.entries(A).forEach(([k,E])=>{Object.entries(E).forEach(([O,Z])=>{Z.prds.forEach(({prd:Y,monthScores:ut})=>{const bt=B(ut);if(bt<=0)return;v[k]||(v[k]=[]),v[k].push({source:O,category:"",score:bt,delta:0,ratio:0,monthScores:ut,prd:Y}),x[Y]||(x[Y]={}),x[Y][O]||(x[Y][O]={source:O,category:"",score:0,delta:0,ratio:0,monthScores:{}});const Ct=x[Y][O];Ct.score+=bt,Object.entries(ut).forEach(([Rt,wt])=>{Ct.monthScores[Rt]=(Ct.monthScores[Rt]||0)+wt})})})});const z={};new Set([...Object.keys(w),...Object.keys(x)]).forEach(k=>{let E=w[k];(!E||!E.length)&&(E=Object.values(x[k]||{})),E&&E.length&&(z[k]=E)});const T=C.reduce((k,E)=>k+E.score,0);C.sort((k,E)=>E.score-k.score),C.forEach((k,E)=>{k.rank=E+1,k.ratio=T>0?+(k.score/T*100).toFixed(1):0});for(const[k,E]of Object.entries(v)){const O=E.reduce((Z,Y)=>Z+Y.score,0);E.sort((Z,Y)=>Y.score-Z.score),E.forEach((Z,Y)=>{Z.rank=Y+1,Z.ratio=O>0?+(Z.score/O*100).toFixed(1):0})}for(const[k,E]of Object.entries(z)){const O=E.reduce((Z,Y)=>Z+Y.score,0);E.sort((Z,Y)=>Y.score-Z.score),E.forEach((Z,Y)=>{Z.rank=Y+1,Z.ratio=O>0?+(Z.score/O*100).toFixed(1):0})}const M=h.map(k=>k.label).filter(k=>Object.values(m).some(E=>E[k]>0)),F={};h.forEach(k=>{let E=0;Object.values(m).forEach(O=>{E+=O[k.label]||0}),F[k.label]=E}),console.log("[parseCitTouchPoints] citTouchPointsTrend 월별 합계:",F,"→ validMonths:",M);const K={};Object.entries(A.TTL||{}).forEach(([k,E])=>{K[k]={ttl:E.ttl,latestScore:B(E.ttl||{})}}),console.log("[parseCitTouchPoints] groupMap.TTL 채널별 dump:",K),console.log("[parseCitTouchPoints] citations top 3:",C.slice(0,3).map(k=>({source:k.source,score:k.score,monthScores:k.monthScores})));const W=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let et=null;if(M.length>0){const k={};Object.values(m).forEach(Z=>{Object.entries(Z).forEach(([Y,ut])=>{ut>0&&(k[Y]=(k[Y]||0)+1)})});let E=M[M.length-1];if(M.length>=2){const Z=k[E]||0,Y=M[M.length-2],ut=k[Y]||0;ut>0&&Z<ut*.5&&(E=Y)}const O=W.findIndex(Z=>E.toLowerCase().startsWith(Z.toLowerCase()));O>=0&&(et=`${W[O]} ${new Date().getFullYear()}`)}const X={};return C.length>0&&(X.citations=C),Object.keys(v).length>0&&(X.citationsByCnty=v),Object.keys(z).length>0&&(X.citationsByPrd=z),Object.keys(m).length>0&&(X.citTouchPointsTrend=m,X.citTrendMonths=M),Object.keys(D).length>0&&(X.citTouchPointsTrendByCnty=D),Object.keys(g).length>0&&(X.citTouchPointsByLlm=g,console.log("[parseCitTouchPoints] citTouchPointsByLlm LLM 모델:",Object.keys(g).join(", "))),et&&(X.citDerivedPeriod=et),X}function Ar(t){console.log(`[parseCitDomain] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((A,g)=>console.log(`  row${g}: [${(A||[]).slice(0,14).map(B=>JSON.stringify(String(B||"").trim())).join(", ")}]`));const e={GLOBAL:"TTL",TOTAL:"TTL",TTL:"TTL",ALL:"TTL",WW:"TTL",WORLD:"TTL",WORLDWIDE:"TTL",GLOBE:"TTL",글로벌:"TTL",전체:"TTL",월드:"TTL",총계:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let a=null,n=0,c=-1,s=-1,d=-1,y=-1,h=-1,p=-1,u=4;for(let A=0;A<Math.min(t.length,10);A++){const g=t[A];if(!g)continue;const B=g.some(T=>/^no$/i.test(String(T||"").trim())),D=g.some(T=>/^region$/i.test(String(T||"").trim())),z=g.some(T=>/domain|domian/i.test(String(T||"").trim())),H=g.some(T=>/^prd$/i.test(String(T||"").trim()));if(B||D||z||H){a=g,n=A+1;for(let T=0;T<g.length;T++){const M=String(g[T]||"").trim().toLowerCase();M==="prd"&&h<0&&(h=T),M==="no"&&c<0&&(c=T),M==="region"&&s<0&&(s=T),(M==="domain"||M==="domian")&&d<0&&(d=T),M==="type"&&y<0&&(y=T),/^(llm\s*model|llm|model)$/i.test(M)&&p<0&&(p=T)}console.log(`[parseCitDomain] header row${A}: [${(g||[]).slice(0,14).map(T=>JSON.stringify(String(T||"").trim())).join(", ")}]`),console.log(`[parseCitDomain] columns: prdCol=${h} noCol=${c} regionCol=${s} domainCol=${d} typeCol=${y} llmCol=${p}`);break}(String(g[0]||"").trim().startsWith("[")||!String(g[0]||"").trim())&&(n=A+1)}a||Kt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(A=>A==null?void 0:A.slice(0,6))});const f=c>=0||s>=0||h>=0;if(f)s<0&&(s=c>=0?c+1:h>=0?h+2:1),d<0&&(d=s+1),y<0&&(y=d+1),u=Math.max(d,y)+1;else if(d>=0)y=d+1,u=d+2;else{for(let A=n;A<Math.min(t.length,n+5);A++){const g=t[A];if(g){for(let B=0;B<Math.min(g.length,6);B++){const D=String(g[B]||"").trim();if(D.includes(".")&&D.length>3&&!i.test(D)){d=B,y=B+1,u=B+2;break}}if(d>=0)break}}d<0&&(d=0,y=1,u=2)}const C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=A=>{const g=String(A||"").trim().toLowerCase();if(!g)return null;const B=g.match(/^(\d{1,2})월/);if(B){const z=parseInt(B[1]);if(z>=1&&z<=12)return C[z-1]}const D=g.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return D?D[1].charAt(0).toUpperCase()+D[1].slice(1).toLowerCase():null},v=[];if(a)for(let A=u;A<a.length;A++){const g=m(a[A]);g&&v.push({col:A,label:g})}const w=A=>/^(type|domain[_ ]type)$/i.test(String(A||"").trim()),x=A=>/^(domain|domian)$/i.test(String(A||"").trim()),I=A=>/^region$/i.test(String(A||"").trim()),j=[];a&&v.forEach(({col:A,label:g})=>{const B=A-1,D=A-2,z=A-3;z<0||w(a[B])&&x(a[D])&&I(a[z])&&j.push({regionCol:z,domainCol:D,typeCol:B,monthCol:A,label:g})}),console.log(`[parseCitDomain] domainMonthLabels: ${v.map(A=>`${A.label}@col${A.col}`).join(", ")||"(없음)"}`),console.log(`[parseCitDomain] monthBlocks (v3 layout): ${j.length}개`,j.map(A=>`${A.label}@col${A.monthCol}(r${A.regionCol}/d${A.domainCol}/t${A.typeCol})`).join(", "));const R=[],G={},$={};let N="TTL";const U=A=>{let g=String(A||"").trim();if(!g)return"";const B=g.match(/^\[([^\]]+)\]/);B&&(g=B[1].trim()),g=g.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const D=g.indexOf("/");return D>=0&&(g=g.slice(0,D)),g};if(j.length>=2){const A=T=>String(T||"").replace(/[()]/g,"").trim(),g={};for(let T=n;T<t.length;T++){const M=t[T];if(!M)continue;const F=h>=0?A(M[h]):"",K=p>=0?A(M[p]):"";j.forEach(W=>{const et=U(M[W.domainCol]);if(!et||!et.includes("."))return;const X=String(M[W.monthCol]||"").replace(/,/g,"").trim(),k=parseFloat(X);if(isNaN(k)||k<=0)return;const E=String(M[W.regionCol]||"").trim().toUpperCase(),O=e[E]||E||"TTL",Z=String(M[W.typeCol]||"").trim(),Y=`${O}|${et}|${Z}|${F}|${K}`;g[Y]||(g[Y]={cnty:O,domain:et,type:Z,prd:F,llm:K,monthScores:{}}),g[Y].monthScores[W.label]=(g[Y].monthScores[W.label]||0)+k})}Object.values(g).forEach(T=>{let M=0;for(let X=v.length-1;X>=0;X--){const k=T.monthScores[v[X].label];if(k>0){M=k;break}}if(M<=0)return;$[T.cnty]=($[T.cnty]||0)+1,R.push({cnty:T.cnty,rank:$[T.cnty],domain:T.domain,type:T.type,citations:M,monthScores:T.monthScores,prd:T.prd,llm:T.llm});const F=`${T.cnty}|${T.domain}`,K=!T.prd||/^(ttl|total)$/i.test(T.prd),W=!T.llm||/^(total|all|ttl)$/i.test(T.llm);G[F]||(G[F]={cnty:T.cnty,domain:T.domain,type:T.type,months:{},_hasTtl:!1});const et=G[F];K&&W?(et.type=T.type||et.type,et._hasTtl=!0,Object.entries(T.monthScores).forEach(([X,k])=>{k>0&&(et.months[X]=k)})):et._hasTtl||Object.entries(T.monthScores).forEach(([X,k])=>{k>0&&!et.months[X]&&(et.months[X]=k)})}),Object.values(G).forEach(T=>{delete T._hasTtl});const B={},D={};Object.values(g).forEach(T=>{B[T.cnty]=(B[T.cnty]||0)+1,D[T.prd||"(empty)"]=(D[T.prd||"(empty)"]||0)+1}),console.log(`[parseCitDomain] aggMap entries: ${Object.keys(g).length} / cnty dist:`,B,"/ prd dist:",D);const z=Object.values(g).filter(T=>T.cnty==="TTL"&&T.monthScores.May>0).slice(0,5);console.log(`[parseCitDomain] May cnty=TTL sample (${z.length}건):`,z.map(T=>`${T.domain}|prd='${T.prd}'|type='${T.type}'|May=${T.monthScores.May}`).join(" / "));const H={};R.forEach(T=>{H[T.cnty]||(H[T.cnty]=[]),H[T.cnty].push(T)}),Object.values(H).forEach(T=>{T.sort((M,F)=>F.citations-M.citations),T.forEach((M,F)=>{M.rank=F+1})})}else for(let A=n;A<t.length;A++){const g=t[A];if(!g)continue;const B=String(g[d]||"").trim(),D=String(g[y]||"").trim(),z=h>=0?String(g[h]||"").trim():"";if(!f&&(!B||!B.includes("."))){const F=String(g[d]||"").trim().toUpperCase(),K=e[F]||(o.includes(F)?F:null);K&&(!D||D==="")&&(N=K);continue}if(!B||!B.includes("."))continue;let H="TTL";if(f&&s>=0){const F=String(g[s]||"").trim().toUpperCase();H=e[F]||F}else f||(H=N);let T=0;if(v.length>0)for(let F=v.length-1;F>=0;F--){const K=String(g[v[F].col]||"").replace(/,/g,"").trim(),W=parseFloat(K);if(!isNaN(W)&&W>0){T=W;break}}else for(let F=g.length-1;F>=u;F--){const K=String(g[F]||"").replace(/,/g,"").trim();if(!K)continue;const W=parseFloat(K);if(!isNaN(W)&&W>0){T=W;break}}if(v.length>0){const F={};if(v.forEach(({col:K,label:W})=>{const et=String(g[K]||"").replace(/,/g,"").trim(),X=parseFloat(et);!isNaN(X)&&X>0&&(F[W]=X)}),Object.keys(F).length>0){const K=`${H}|${B}`;G[K]={cnty:H,domain:B,type:D,months:F}}}const M={};v.length>0&&v.forEach(({col:F,label:K})=>{const W=String(g[F]||"").replace(/,/g,"").trim(),et=parseFloat(W);!isNaN(et)&&et>0&&(M[K]=et)}),T>0&&($[H]=($[H]||0)+1,R.push({cnty:H,rank:$[H],domain:B,type:D,citations:T,monthScores:M,prd:z}))}const S={};if(R.length>0&&(S.citationsCnty=R),Object.keys(G).length>0){S.citDomainTrend=G;const A=v.map(g=>g.label).filter(g=>Object.values(G).some(B=>B.months[g]>0));S.citDomainMonths=A}return S}function Ro(t,e){const o=Ue(t,[/^type$/,/^(county|country)$/]);if(o<0)return Kt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(x=>x==null?void 0:x.slice(0,6))});const i=t[o];let a=-1,n=-1,c=-1,s=-1,d=4;for(let x=0;x<i.length;x++){const I=String(i[x]||"").trim().toLowerCase();I==="type"&&a<0&&(a=x),(I==="county"||I==="country")&&n<0&&(n=x),(I==="topic"||I==="topoc")&&c<0&&(c=x),I==="brand"&&s<0&&(s=x)}d=Math.max(a,n,c,s)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,p=[],u=[o];for(let x=0;x<=o;x++)x!==o&&u.push(x);for(const x of u){if(p.length>0)break;const I=t[x];if(I)for(let j=d;j<I.length;j++){const R=String(I[j]||"").split(/\n/)[0].trim();R&&(y.test(R)||h.test(R))&&p.push({col:j,label:R})}}const f=t.slice(o+1),C=[];f.forEach(x=>{if(!x)return;const I=String(x[a]||"").trim(),j=Qt(x[n]),R=String(x[c]||"").trim(),G=String(x[s]||"").trim();if(!R||!G)return;const $={};let N=0;p.forEach(({col:U,label:S})=>{const A=Zt(x[U]);A>0&&($[S]=A,N=A)}),(Object.keys($).length>0||R)&&C.push({type:I,country:j,topic:R,brand:G,scores:$,latestScore:N})});const m=e==="weekly"?"weeklyPR":"monthlyPR",v=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",w={};return C.length>0&&(w[m]=C),p.length>0&&(w[v]=p.map(x=>x.label)),w}function Io(t,e){const o=t.findIndex(w=>w?w.some(x=>/steakholders|stakeholders/i.test(String(x||"").trim()))||w.some(x=>/^type$/i.test(String(x||"").trim()))&&w.some(x=>/topoc|topic/i.test(String(x||"").trim())):!1);if(o<0)return Kt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const i=t[o];let a=-1,n=-1,c=-1,s=-1,d=4;for(let w=0;w<i.length;w++){const x=String(i[w]||"").trim().toLowerCase();(x==="steakholders"||x==="stakeholders")&&a<0&&(a=w),x==="type"&&n<0&&(n=w),(x==="country"||x==="county")&&c<0&&(c=w),(x==="topoc"||x==="topic")&&s<0&&(s=w)}d=Math.max(a,n,c,s)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,p=[];for(let w=d;w<i.length;w++){const x=String(i[w]||"").split(/\n/)[0].trim();x&&(y.test(x)||h.test(x))&&p.push({col:w,label:x})}const u=t.slice(o+1),f=[];u.forEach(w=>{if(!w)return;const x=String(w[a]||"").trim(),I=String(w[n]||"").trim(),j=Qt(w[c]),R=String(w[s]||"").trim();if(!R||!x)return;const G={};let $=0;p.forEach(({col:N,label:U})=>{const S=Zt(w[N]);S>0&&(G[U]=S,$=S)}),f.push({stakeholder:x,type:I,country:j,topic:R,scores:G,latestScore:$})});const C=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",m=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",v={};return f.length>0&&(v[C]=f),p.length>0&&(v[m]=p.map(w=>w.label)),v}function Er(t){const e=Ue(t,[/^prompts?$/,/^country$/]);if(e<0)return Kt("parseAppendix","header not found (need Prompts + Country)",{firstRows:t.slice(0,5).map(s=>s==null?void 0:s.slice(0,6))});const o=t[e],i={},a=["country","prompts","division","category","launched","branded","cej","topic"];for(let s=0;s<o.length;s++){const d=String(o[s]||"").trim().toLowerCase();a.includes(d)&&!i[d]&&(i[d]=s)}const n=t.slice(e+1),c=[];return n.forEach(s=>{if(!s)return;const d=String(s[i.prompts]||"").trim();d&&c.push({country:Qt(s[i.country]),prompt:d,division:String(s[i.division]||"").trim(),category:String(s[i.category]||"").trim(),launched:String(s[i.launched]||"").trim(),branded:String(s[i.branded]||"").trim(),cej:String(s[i.cej]||"").trim(),topic:String(s[i.topic]||"").trim()})}),c.length>0?{appendixPrompts:c}:{}}const pe={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function Tr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const e=Ue(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((p,u)=>console.log(`  row${u}:`,p==null?void 0:p.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const o=t[e];let i=-1,a=-1,n=-1;for(let p=0;p<o.length;p++){const u=String(o[p]||"").trim().toLowerCase();i<0&&(u==="country"||u==="county")&&(i=p),a<0&&(u==="category"||u==="product"||u==="제품"||u==="카테고리")&&(a=p),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(u)&&(n=p)}if(i<0||a<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:a,statusCol:n,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const c=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),s={...pe};let d=0,y=0,h=0;return t.slice(e+1).forEach((p,u)=>{const f=e+1+u;try{if(!p){h++;return}const C=String(p[n]||"").trim();if(!C){h++;return}d++;const m=C.toLowerCase().replace(/\s+/g," ");if(!c.has(m)&&!c.has(m.replace(/\s/g,"")))return;const v=mr(p[i]),w=String(p[a]||"").trim();if(!v||!w){console.warn("[parseUnlaunched] row skipped",{rowIdx:f,raw:{country:p[i],category:p[a],status:p[n]},parsed:{country:v,rawCategory:w}}),h++;return}const x=w.toUpperCase(),I=Qo[x]||x;s[`${v}|${I}`]=!0,I!==x&&(s[`${v}|${x}`]=!0),y++}catch(C){let m;try{m={country:p==null?void 0:p[i],category:p==null?void 0:p[a],status:p==null?void 0:p[n]}}catch{m=p}console.warn("[parseUnlaunched] row error",{rowIdx:f,raw:m,error:C==null?void 0:C.message}),h++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${y}건 + 디폴트 ${Object.keys(pe).length}건 + skip ${h}건 / 총행 ${d} / 최종키 ${Object.keys(s).length}개`),{unlaunchedMap:s}}function $r(t){const e=Ue(t,[/^bu$/,/topic/]);if(e<0)return Kt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(h=>h==null?void 0:h.slice(0,6))});const o=t[e];let i=-1,a=-1,n=-1,c=-1,s=-1;for(let h=0;h<o.length;h++){const p=String(o[h]||"").trim().toLowerCase();i<0&&p==="bu"&&(i=h),a<0&&p.includes("topic")&&p.includes("대시보드")&&(a=h),n<0&&(p==="explanation"||p==="설명")&&(n=h),c<0&&p.includes("기존")&&(c=h),s<0&&p.includes("topic")&&p.includes("row")&&(s=h)}a<0&&(a=1),n<0&&(n=2);const d=[];let y="";return t.slice(e+1).forEach(h=>{if(!h)return;const p=String(h[i]||"").trim();p&&(y=p);const u=String(h[a]||"").trim();if(!u)return;const f=String(h[n]||"").trim(),C=c>=0?String(h[c]||"").trim():"",m=s>=0?String(h[s]||"").trim():"";d.push({bu:y,topic:u,explanation:f,oldTopic:C,topicRow:m})}),d.length>0?{prTopicList:d}:{}}function Lr(t,e){var o;if(!ur(e,`parseSheetRows:${t}`))return{};try{if(t===Bt.meta)return yr(e);if(t===Bt.visSummary)return br(e);if(t===Bt.productMS||t===Bt.productHS||t===Bt.productES)return xr(e);if(t===Bt.weeklyMS)return qe(e,"MS");if(t===Bt.weeklyHS)return qe(e,"HS");if(t===Bt.weeklyES)return qe(e,"ES");if(t===Bt.monthlyPR)return Ro(e,"monthly");if(t===Bt.weeklyPR)return Ro(e,"weekly");if(t===Bt.monthlyBrandPrompt)return Io(e,"monthly");if(t===Bt.weeklyBrandPrompt)return Io(e,"weekly");if(t===Bt.citPageType)return Sr(e);if(t===Bt.citTouchPoints)return Fr(e);if(t===Bt.citDomain)return Ar(e);if(t===Bt.appendix)return Er(e);if(t===Bt.unlaunched)return Tr(e);if(t===Bt.prTopicList)return $r(e)}catch(i){return Ze(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:i==null?void 0:i.message,stack:(o=i==null?void 0:i.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Kt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(Bt)})}function Br(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Rr(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,a=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!a.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${a.status}).`);const n=await a.text(),c=await Zo(),s=c.read(n,{type:"string"}),d=s.Sheets[s.SheetNames[0]];return c.utils.sheet_to_json(d,{header:1,defval:""})}async function Ir(t,e){var n,c;const o=Object.values(Bt),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const a=await Promise.allSettled(o.map(s=>Rr(t,s).then(d=>({name:s,rows:d}))));for(let s=0;s<o.length;s++){const d=o[s],y=a[s];if(e==null||e(`"${d}" 처리 중... (${s+1}/${o.length})`),y.status==="rejected"){console.warn(`"${d}" 시트 건너뜀:`,(n=y.reason)==null?void 0:n.message);continue}try{const{rows:h}=y.value,p=Lr(d,h);for(const[u,f]of Object.entries(p))u==="weeklyLabels"||u==="weeklyLabelsFull"?i[u]||(i[u]=f):Array.isArray(f)&&Array.isArray(i[u])?i[u]=[...i[u],...f]:f&&typeof f=="object"&&!Array.isArray(f)&&i[u]&&typeof i[u]=="object"&&!Array.isArray(i[u])?i[u]={...i[u],...f}:i[u]=f}catch(h){console.warn(`"${d}" 시트 처리 실패:`,h.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const s=[];for(const[d,y]of Object.entries(i.weeklyAll)){const h=y.Total||y.TTL||{},p=h.LG||h.lg||[],u=Object.entries(h).filter(([w])=>w!=="LG"&&w!=="lg"),f=p.length?p[p.length-1]:0,C=p.length>=5?p[0]:0;let m="",v=0;for(const[w,x]of u){const I=x.length?x[x.length-1]:0;I>v&&(v=I,m=w)}f>0&&s.push({id:d,bu:dr[d]||"HS",kr:Xe[d]||d,category:d,date:((c=i.meta)==null?void 0:c.period)||"",score:f,prev:C,vsComp:v,compName:m,allScores:{LG:f,...m?{[m]:v}:{}}})}if(s.length&&(i.productsPartial=s,console.log(`[SYNC] weeklyAll에서 ${s.length}개 제품 생성:`,s.map(d=>`${d.id}=${d.score}`).join(", "))),!i.productsCnty){const d=[];for(const[y,h]of Object.entries(i.weeklyAll)){const p=Xe[y]||y;for(const[u,f]of Object.entries(h)){if(u==="Total"||u==="TTL")continue;const C=f.LG||f.lg||[],m=C.length?C[C.length-1]:0;if(m<=0)continue;const v=C.length>=2?C[0]:0;let w="",x=0;const I={LG:m};for(const[R,G]of Object.entries(f)){if(R==="LG"||R==="lg")continue;const $=G.length?G[G.length-1]:0;I[R]=$,$>x&&(x=$,w=R)}const j=+(m-x).toFixed(1);d.push({product:p,country:u,score:m,prev:v,compName:w,compScore:x,gap:j,allScores:I})}}d.length&&(i.productsCnty=d,console.log(`[SYNC] weeklyAll에서 productsCnty ${d.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((d,y)=>d===`W${y+1}`)){const d=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(y=>String(y).split(/\n/)[0].trim().toUpperCase()).filter(y=>/^W\d+/.test(y));if(d.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",d),i.weeklyLabels=d;const y=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(h=>{const p=String(h).split(/\n/);return p[0].trim().toUpperCase()+(p[1]?p[1].trim():"")}).filter(h=>/^W\d+/.test(h));y.length&&(i.weeklyLabelsFull=y)}}if(i._syncIssues=fr(i,"syncFromGoogleSheets"),typeof localStorage<"u")try{const s=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");s.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:i._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(s.slice(0,10)))}catch{}return i}const yt={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none",boxSizing:"border-box"};function jr(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),a=Math.floor(i/24);return a>=1?`${a}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Pr({savedAt:t,ageMs:e,stale:o,style:i}){const a=t==null,n=a?"#1E293B":o?"#7F1D1D":"#064E3B",c=a?"#94A3B8":o?"#FCA5A5":"#86EFAC",s=a?"#334155":o?"#B91C1C":"#047857",d=a?"○":o?"⚠️":"●",y=a?"동기화 정보 없음":`데이터 최신화: ${jr(e)}`,h=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:h,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:c,border:`1px solid ${s}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:L,whiteSpace:"nowrap",...i||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:d}),y]})}function Mr({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Xt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",te="#CF0652",ue="#94A3B8",De={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},on={LG:te,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},jo=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Qe={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Dr=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Oe={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},Or={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},Nr={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},io=90;function ao(t,e){const o=De[e]||De.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function _r(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function zr(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function to(t){const e=String(t||"").trim().toUpperCase();return Oe[e]||t}function Gr(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?Or[o]||Oe[o]||t:Nr[o]||Oe[o]||t}let Ur=0;function Po(t,e,o,i,a,n={}){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const c=n.fadeBeforeIdx!=null?n.fadeBeforeIdx:-1,s=n.baselineLabel||"",d=n.labelOffsetY||0,y=n.lineOffsetY||0,h=Ur++,p={t:18,r:10,b:20,l:10},u=o-p.l-p.r,f=i-p.t-p.b,C=t.filter(S=>S!=null);if(!C.length){let S=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const A=t.length,g=A>1?A-1:1;return S+=t.map((B,D)=>`<text x="${(p.l+D/g*u).toFixed(1)}" y="${p.t+f+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Xt}">${e[D]||""}</text>`).join(""),S+="</svg>",S}const m=Math.min(...C)-1,v=Math.max(...C)+1,w=v-m||1,x=t.length,I=x>1?x-1:1,j=t.map((S,A)=>p.l+A/I*u),R=[];t.forEach((S,A)=>{S!=null&&R.push({x:j[A],y:p.t+(1-(S-m)/w)*f,v:S,idx:A})});let G=`<svg viewBox="0 0 ${o} ${i+12}" width="100%" height="${i+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const $=c>0?R.filter(S=>S.idx<c):[],N=c>0?R.filter(S=>S.idx>=c):R,U="#64748B";if(N.length>=2){const S=N.map((g,B)=>`${B?"L":"M"}${g.x.toFixed(1)},${g.y.toFixed(1)}`).join(" "),A=S+` L${N[N.length-1].x.toFixed(1)},${p.t+f} L${N[0].x.toFixed(1)},${p.t+f} Z`;G+=`<defs><linearGradient id="lg${h}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${a}" stop-opacity="0.03"/>
    </linearGradient></defs>`,G+=`<path d="${A}" fill="url(#lg${h})"/>`,G+=`<path d="${S}" stroke="${a}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if($.length>=2){const S=$.map((A,g)=>`${g?"L":"M"}${A.x.toFixed(1)},${A.y.toFixed(1)}`).join(" ");G+=`<path d="${S}" stroke="${U}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(G+=R.map(S=>{const A=c>0&&S.idx<c;return c>0&&S.idx===c?`<circle cx="${S.x.toFixed(1)}" cy="${S.y.toFixed(1)}" r="4" fill="#000" stroke="${a}" stroke-width="3"/>`:`<circle cx="${S.x.toFixed(1)}" cy="${S.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${A?U:a}" stroke-width="2" opacity="${A?.85:1}"/>`}).join(""),G+=R.map(S=>{const g=c>0&&S.idx<c?U:a;return`<text x="${S.x.toFixed(1)}" y="${Math.max(S.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${g}" font-family="${Xt}">${S.v.toFixed(1)}</text>`}).join(""),c>0&&s){const S=j[c];G+=`<line x1="${S.toFixed(1)}" y1="${(p.t+y).toFixed(1)}" x2="${S.toFixed(1)}" y2="${(p.t+f+y).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const A=S>o*.7,g=(A?p.t+f+1:p.t+8)+d;G+=`<text x="${(A?S-5:S+5).toFixed(1)}" y="${g.toFixed(1)}" text-anchor="${A?"end":"start"}" font-size="9" fill="#64748B" font-family="${Xt}">${s}</text>`}return G+=t.map((S,A)=>`<text x="${j[A].toFixed(1)}" y="${p.t+f+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Xt}">${e[A]||""}</text>`).join(""),G+="</svg>",G}function Ae(t,e){return on[t]||jo[e%jo.length]}function nn(t,e,o,i,a={}){const n=Object.keys(t);if(!n.length||!e.length)return"";const c=a.fadeBeforeIdx!=null?a.fadeBeforeIdx:-1,s=a.baselineLabel||"";let d=1/0,y=-1/0;if(n.forEach(x=>(t[x]||[]).forEach(I=>{I!=null&&(I<d&&(d=I),I>y&&(y=I))})),!isFinite(d))return"";const h=Math.max((y-d)*.15,2);d=Math.max(0,d-h),y=Math.min(100,y+h);const p=y-d||1,u=e.length,f=8,C=8,m=i-f-C,v="#64748B";let w="";for(let x=0;x<=4;x++){const I=f+x/4*m;w+=`<line x1="0" y1="${I.toFixed(1)}" x2="${o}" y2="${I.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(n.forEach((x,I)=>{const j=t[x]||[],R=Ae(x,I),G=x==="LG",$=G?2.5:1.5,N=G?1:.7,U=[];if(j.forEach((B,D)=>{if(B==null)return;const z=(D+.5)/u*o,H=f+(1-(B-d)/p)*m;U.push({x:z,y:H,v:B,idx:D})}),!U.length)return;const S=c>0?U.filter(B=>B.idx<c):[],A=c>0?U.filter(B=>B.idx>=c):U;function g(B,D,z,H){if(B.length>=2){const T=B.map((M,F)=>`${F?"L":"M"}${M.x.toFixed(1)},${M.y.toFixed(1)}`).join(" ");w+=`<path d="${T}" stroke="${D}" fill="none" stroke-width="${$}" stroke-linecap="round" stroke-linejoin="round" opacity="${z}"/>`}B.forEach(T=>{H&&T.idx===c||(w+=`<circle cx="${T.x.toFixed(1)}" cy="${T.y.toFixed(1)}" r="${G?3.5:2.5}" fill="#fff" stroke="${D}" stroke-width="${G?2:1.5}" opacity="${z}"/>`)})}if(g(S,v,.85,!1),g(A,R,N,G&&c>0),G&&c>0){const B=U.find(D=>D.idx===c);B&&(w+=`<circle cx="${B.x.toFixed(1)}" cy="${B.y.toFixed(1)}" r="4.5" fill="#000" stroke="${R}" stroke-width="3"/>`)}}),c>0&&s){const x=(c+.5)/u*o;w+=`<line x1="${x.toFixed(1)}" y1="${f}" x2="${x.toFixed(1)}" y2="${f+m}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const I=x>o*.7;w+=`<text x="${(I?x-5:x+5).toFixed(1)}" y="${(f+12).toFixed(1)}" text-anchor="${I?"end":"start"}" font-size="11" fill="#64748B" font-family="${Xt}">${s}</text>`}return`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${w}</svg>`}function Hr({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:a,monthlyVis:n,total:c,meta:s,wLabels:d}){const y={monthlyVis:n};return`
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
${(()=>{const h=p=>JSON.stringify(p).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?h(e):"{}"};
var _products=${h(o.map(p=>({id:p.id,bu:p.bu,kr:p.kr,en:p.en||p.kr,category:p.category||"",date:p.date||"",status:p.status,score:p.score||0,prev:p.prev||0,vsComp:p.vsComp||0,compName:p.compName||"",compRatio:p.compRatio||0,allScores:p.allScores||{},monthlyScores:p.monthlyScores||[]})))};
var _productsCnty=${h(i||[])};
var _unlaunchedMap=${h(a)};
var _PROD_TO_UL=${h(Ee)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${h((y==null?void 0:y.monthlyVis)||[])};
var _total=${h(c)};
var _meta={period:${h(s.period||"")},reportNo:${h(s.reportNo||"")},totalInsight:${h(s.totalInsight||"")}};
var _wLabels=${h(d)};`})()}
${(()=>{const h=p=>JSON.stringify(p).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${h(on)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${te}';
var _FONT=${h(Xt)};
var _COMP='${ue}';
var _REGIONS=${h(Object.fromEntries(Object.entries(Qe).map(([p,u])=>[p,u.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Qe).map(([h,p])=>[h,t==="en"?p.labelEn:p.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${io};

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
// 초기 로드 — script 가 </body> 직전이라 DOM 이미 파싱 완료 상태. 직접 호출.
updateHeroFromCheckboxes();
// LLM 모델 != Total 일 때 monthly 모드로 자동 전환 (iframe 재렌더 시에도 monthly 유지)
(function(){
  var llmSel=document.getElementById('vis-llm-select');
  if(llmSel&&llmSel.value&&llmSel.value!=='Total'){
    switchPeriodPage('monthly');
  }
})();
`}const Wr=["audio","rac","aircare"];function Vr(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return Wr.includes(String(e).toLowerCase())}function Kr(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function Ne(t,e){if(!Vr(t)||!e)return-1;const o=Kr(t);if(o>0){const i=e.findIndex(a=>{const n=String(a||"").trim().match(/^W?(\d+)$/i);return n&&parseInt(n[1],10)===o});if(i>=0)return i}return e.findIndex(i=>{const a=String(i||"").trim();return/^Apr(il)?$/i.test(a)||a==="4월"})}const _e={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function qr(t){const e=_e[t]||_e.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function rn(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),i=_e[e]||_e.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.racair}</p>`:""}function Jr(t,e,o,i,a,n,c){if(!e||!Object.keys(e).length)return"";const d=["MS","HS","ES"].map(y=>{const h=t.filter(u=>u.bu===y);if(!h.length)return"";const p=h.map(u=>{var S,A;const f=((S=e[u.id])==null?void 0:S.Total)||{},C=Object.keys(f).sort((g,B)=>{var H,T;if(g==="LG")return-1;if(B==="LG")return 1;const D=((H=f[g])==null?void 0:H[f[g].length-1])||0;return(((T=f[B])==null?void 0:T[f[B].length-1])||0)-D});if(!C.length)return"";const m=ao(u.status,a),v=(A=f.LG)==null?void 0:A[f.LG.length-1],w=C.map((g,B)=>{const D=Ae(g,B),z=g==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${D};opacity:${z?1:.7}"></i><span style="font-size:13px;color:${z?"#1A1A1A":"#94A3B8"};font-weight:${z?700:400}">${g}</span></span>`}).join(""),x=o.length,I=`<colgroup><col style="width:${io}px">${o.map(()=>"<col>").join("")}</colgroup>`,j=Ne(u,o),R=`<tr><td style="padding:0;border:0"></td><td colspan="${x}" style="padding:8px 0;border:0">${nn(f,o,x*80,180,{fadeBeforeIdx:j,baselineLabel:j>0?"*Baseline 재설정":""})}</td></tr>`,G=`<tr><td style="padding:0;border:0"></td><td colspan="${x}" style="padding:4px 0 6px;border:0">${w}</td></tr>`,$=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(g=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${g}</th>`).join("")}</tr>`,N=C.map((g,B)=>{const D=Ae(g,B),z=g==="LG",H=o.map((T,M)=>{var K;const F=(K=f[g])==null?void 0:K[M];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${F!=null?z?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${z?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${F!=null?F.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${z?"#FFF8F9":B%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${z?700:500};color:${D};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${D};margin-right:4px;vertical-align:0"></i>${g}</td>${H}</tr>`}).join(""),U=so(u.id||u.category,n);return`<div class="trend-row${U?" is-unlaunched":""}" data-prodid="${u.id||u.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${te};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${lo(u,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${U?"#F1F5F9":m.bg};color:${U?"#64748B":m.color};border:1px solid ${U?"#CBD5E1":m.border}">${U?a==="en"?"Unlaunched":"미출시":m.label}</span>
          ${v!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${v.toFixed(1)}%</span>`:""}
          ${u.compName?`<span style="font-size:14px;color:#94A3B8">vs ${u.compName} ${u.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Xt}">${I}<tbody>${R}${G}${$}${N}</tbody></table></div>
        ${rn(u,a)}
      </div>`}).join("");return p?`<div class="bu-group" data-bu="${y}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${y}</span></div>
      ${p}
    </div>`:""}).join("");return d.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${c||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${a==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${d}</div>
  </div>`:""}function Yr(t,e,o,i,a,n){if(!e||!e.length)return"";const c=["MS","HS","ES"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function y(f){const C=String(f||""),m=C.match(/(\d{1,2})월/);if(m)return parseInt(m[1])-1;const v=C.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(v)return d[v[1].toLowerCase()];const w=C.match(/\d{4}[-\/](\d{1,2})/);return w?parseInt(w[1])-1:-1}const h=[0,1,2,3,4,5,6,7,8,9,10,11],p=s.slice(),u=c.map(f=>{const C=t.filter(v=>v.bu===f);if(!C.length)return"";const m=C.map(v=>{const w=v.monthlyScores||[];let x={};if(w.length>=2){const z=new Set;if(w.forEach(H=>{H.allScores&&Object.keys(H.allScores).forEach(T=>z.add(T))}),z.forEach(H=>{x[H]=h.map(T=>{var F;const M=w.find(K=>y(K.date)===T);return((F=M==null?void 0:M.allScores)==null?void 0:F[H])??null})}),!z.size&&(x.LG=h.map(H=>{const T=w.find(M=>y(M.date)===H);return T?T.score:null}),v.vsComp>0)){const H=h.map(T=>{const M=w.find(F=>y(F.date)===T);return(M==null?void 0:M.comp)??null});H.some(T=>T!=null)&&(x[v.compName||"Comp"]=H)}}else{const z=e.filter(F=>F.division===f&&(F.country==="TOTAL"||F.country==="TTL")),H={};z.forEach(F=>{const K=y(F.date);K>=0&&(H[K]=F)});const T=h.map(F=>{var K;return((K=H[F])==null?void 0:K.lg)||null}),M=h.map(F=>{var K;return((K=H[F])==null?void 0:K.comp)||null});x={LG:T},M.some(F=>F!=null&&F>0)&&(x.Samsung=M)}const I=Object.keys(x).sort((z,H)=>{if(z==="LG")return-1;if(H==="LG")return 1;const T=(x[z]||[]).filter(F=>F!=null).pop()||0;return((x[H]||[]).filter(F=>F!=null).pop()||0)-T});if(!I.length)return"";const j=ao(v.status,i),R=(x.LG||[]).filter(z=>z!=null).pop(),G=I.map((z,H)=>{const T=Ae(z,H),M=z==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${T};opacity:${M?1:.7}"></i><span style="font-size:13px;color:${M?"#1A1A1A":"#94A3B8"};font-weight:${M?700:400}">${z}</span></span>`}).join(""),$=p.length,N=`<colgroup><col style="width:${io}px">${p.map(()=>"<col>").join("")}</colgroup>`,U=Ne(v,p),S=`<tr><td style="padding:0;border:0"></td><td colspan="${$}" style="padding:8px 0;border:0">${nn(x,p,$*80,180,{fadeBeforeIdx:U,baselineLabel:U>0?"*Baseline 재설정":""})}</td></tr>`,A=`<tr><td style="padding:0;border:0"></td><td colspan="${$}" style="padding:4px 0 6px;border:0">${G}</td></tr>`,g=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${p.map(z=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${z}</th>`).join("")}</tr>`,B=I.map((z,H)=>{const T=Ae(z,H),M=z==="LG",F=p.map((K,W)=>{var X;const et=(X=x[z])==null?void 0:X[W];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${et!=null?M?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${M?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${et!=null?et.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${M?"#FFF8F9":H%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${M?700:500};color:${T};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${T};margin-right:4px;vertical-align:0"></i>${z}</td>${F}</tr>`}).join(""),D=so(v.id||v.category,a);return`<div class="trend-row${D?" is-unlaunched":""}" data-prodid="${v.id||v.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${te};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${lo(v,a)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${D?"#F1F5F9":j.bg};color:${D?"#64748B":j.color};border:1px solid ${D?"#CBD5E1":j.border}">${D?i==="en"?"Unlaunched":"미출시":j.label}</span>
          ${R!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${R.toFixed(1)}%</span>`:""}
          ${v.compName?`<span style="font-size:14px;color:#94A3B8">vs ${v.compName} ${v.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Xt}">${N}<tbody>${S}${A}${g}${B}</tbody></table></div>
        ${rn(v,i)}
      </div>`}).join("");return m?`<div class="bu-group" data-bu="${f}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${f}</span></div>
      ${m}
    </div>`:""}).join("");return u.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${p[0]}–${p[p.length-1]} (${p.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${u}</div>
  </div>`:""}function an(){return""}function Mo(t,e,o,i,a){const n=+(t.score-t.prev).toFixed(1),c=t.vsComp||0,s=+(t.score-c).toFixed(1),d=n>0?"▲":n<0?"▼":"─",y=n>0?"#22C55E":n<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section"${a==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
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
          <span class="hero-delta" style="color:${y}">${d} ${Math.abs(n).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${te}"></div>
          </div>
          ${c>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(c,100)}%;background:${ue}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${te}"></i> LG ${t.score}%</span>
            ${c>0?`<span><i style="background:${ue}"></i> Samsung ${c}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${c>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${c}%</span>
          <span class="hero-comp-gap" style="color:${s>=0?"#22C55E":"#EF4444"}">Gap ${s>=0?"+":""}${s}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
  </div>`}function Se(t,e){const o=Ee[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function so(t,e){return Dr.every(o=>{const i=Ee[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function lo(t,e){return Se(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Do(t,e,o,i,a,n,c,s,d){if(!t.length)return"";const h=["MS","HS","ES"].map(p=>{const u=t.filter(C=>C.bu===p);if(!u.length)return"";const f=u.map(C=>{var xt,Wt;const m=C.weekly||[],v=m.filter(ct=>ct!=null),w=C.weeklyScore||(v.length>0?v[v.length-1]:C.score),x=C.monthlyScore||C.score,I=w,j=((xt=s==null?void 0:s[C.id])==null?void 0:xt.Total)||((Wt=s==null?void 0:s[C.id])==null?void 0:Wt.TTL)||{};let R=0;Object.entries(j).forEach(([ct,_])=>{if(ct==="LG"||ct==="lg")return;const q=Array.isArray(_)&&_.length?_[_.length-1]:0;q>R&&(R=q)});const G=C.vsComp||0,$=R>0?w/R*100:G>0?w/G*100:100,N=G>0?x/G*100:100,U=Math.round($*10)/10,S=Math.round(N*10)/10,A=U,g=$>=100?"lead":$>=80?"behind":"critical",B=ao(g,i),D=v.length>=1?v[v.length-1]:null,z=v.length>=2?v[v.length-2]:null,H=D!=null&&z!=null?+(D-z).toFixed(1):null,T=H>0?"▲":H<0?"▼":"─",M=H>0?"#22C55E":H<0?"#EF4444":"#94A3B8",F=g==="critical"?"#BE123C":g==="behind"?"#D97706":"#15803D",K=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],W={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function et(ct){const _=String(ct||""),q=_.match(/(\d{1,2})월/);if(q)return parseInt(q[1])-1;const dt=_.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(dt)return W[dt[1].toLowerCase()];const gt=_.match(/\d{4}[-\/](\d{1,2})/);return gt?parseInt(gt[1])-1:-1}let X=C.monthlyScores||[];if(X.length<2&&c.length>0){const ct=c.filter(q=>q.division===C.bu&&(q.country==="TOTAL"||q.country==="TTL")),_={};ct.forEach(q=>{const dt=et(q.date);dt>=0&&(_[dt]={date:q.date,score:q.lg,comp:q.comp})}),X=Object.keys(_).sort((q,dt)=>q-dt).map(q=>_[q])}const k=X.length>0?X.map(ct=>{const _=et(ct.date);return _>=0?K[_]:ct.date}):["M-3","M-2","M-1","M0"],E=X.length>0?X.map(ct=>ct.score):[null,null,null,C.score],O=X.length>=2?+(X[X.length-1].score-X[X.length-2].score).toFixed(1):null,Z=O>0?"▲":O<0?"▼":"─",Y=O>0?"#22C55E":O<0?"#EF4444":"#94A3B8",ut=A,bt=ut>=100?"#15803D":ut>=80?"#D97706":"#BE123C",Ct=C.weeklyPrev||(v.length>=5?v[v.length-5]:v[0]||0),Rt=w&&Ct?+(w-Ct).toFixed(1):null,wt=x&&(C.monthlyPrev||C.prev)?+(x-(C.monthlyPrev||C.prev)).toFixed(1):null,Mt=Se(C.id||C.category,n),Ft=so(C.id||C.category,n),It=Ft?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:B;return`<div class="prod-card${Ft?" is-unlaunched":""}" data-prodid="${C.id||C.category}" data-ws="${w.toFixed(1)}" data-ms="${x.toFixed(1)}" data-wr="${U}" data-mr="${S}" data-wmom="${Rt??""}" data-mmom="${wt??""}" style="border-color:${It.border}">
        <div class="prod-head">
          <span class="prod-name">${lo(C,n)}</span>
          ${Mt.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${It.bg};color:${It.color};border-color:${It.border}">${It.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${I.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${M}">${H!=null?`WoW ${T} ${Math.abs(H).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Y}">${O==null?"MoM —":`MoM ${Z} ${Math.abs(O).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const ct=a.slice(-10),_=Ne(C,ct),q=String(C.id||"").toLowerCase(),dt=q==="aircare"?30:q==="rac"?20:0;return Po(m.slice(-10),ct,300,90,F,{fadeBeforeIdx:_,baselineLabel:_>0?"*Baseline 재설정":"",labelOffsetY:dt})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const ct=Ne(C,k),q=String(C.id||"").toLowerCase()==="audio";return Po(E,k,300,90,F,{fadeBeforeIdx:ct,baselineLabel:ct>0?"*Baseline 재설정":"",labelOffsetY:q?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${C.compName}`:`${C.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(ut,120)}%;background:${bt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${bt}">${ut}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${p}">
      <div class="bu-header"><span class="bu-label">${p}</span><span class="bu-count">${u.length}${o.categories}</span></div>
      <div class="prod-grid">${f}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${d||""}${d?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${an(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${h}${(()=>{const p=t.filter(u=>Se(u.id||u.category,n).length>0).map(u=>`${(u.id||"").toLowerCase()==="audio"||u.kr==="오디오"?"Audio-Sound Suite":u.kr}: ${Se(u.id||u.category,n).map(f=>Gr(f,i)).join(", ")} ${i==="en"?"not launched":"미출시"}`);return(p.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${p.join(" / ")}</p>`:"")+qr(i)})()}</div>
  </div>`}function Oo(t,e,o,i){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),c=Ee[n]||(n||"").toUpperCase(),s=i&&i[`${t.country}|${c}`],d=zr(t.score,t.compScore),y=s?"#94A3B8":d==="lead"?"#15803D":d==="behind"?"#D97706":"#BE123C",h=+(t.score-t.compScore).toFixed(1),p=s?"#64748B":h>=0?"#15803D":"#BE123C",u=130,f=["TCL","HISENSE","HAIER"];let C="",m=0;t.allScores&&Object.entries(t.allScores).forEach(([N,U])=>{const S=String(N).toUpperCase();f.some(g=>S.includes(g))&&U>m&&(C=N,m=U)});const v=Math.max(e,m),w=s?1:t.score,x=Math.max(3,Math.round(w/v*u)),I=t.compScore>0?Math.max(3,Math.round(t.compScore/v*u)):0,j=m>0?Math.max(3,Math.round(m/v*u)):0,R="#9333EA",G=s?"—":t.score.toFixed(1),$=s?"—":`${h>=0?"+":""}${h}%p`;return`<div class="vbar-item${s?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${y}">${G}</span>
        <div class="vbar-col" style="height:${x}px;background:${y}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ue}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${I}px;background:${ue}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${m>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${R}">${m.toFixed(1)}</span>
        <div class="vbar-col" style="height:${j}px;background:${R}"></div>
        <span class="vbar-col-name" style="color:${R}">${C.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${p}">${$}</span>
    <span class="vbar-label">${o}</span>
  </div>`}function No(t,e,o,i,a,n){if(!t||!t.length)return"";const c=new Map;t.forEach(f=>{c.has(f.product)||c.set(f.product,[]),c.get(f.product).push(f)});const s=e.cntyProductFilter||{},d=[...c.entries()].filter(([f])=>s[f]!==!1).map(([f,C])=>{const m=Math.max(...C.map(w=>Math.max(w.score,w.compScore)),1),v=C.map(w=>Oo(w,m,to(w.country),a)).join("");return`<div class="cnty-product" data-group-product="${f}"><div class="bu-header"><span class="bu-label">${f}</span></div><div class="vbar-chart">${v}</div></div>`}).join(""),y=new Map;t.forEach(f=>{y.has(f.country)||y.set(f.country,[]),y.get(f.country).push(f)});const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],u=h.filter(f=>y.has(f)).concat([...y.keys()].filter(f=>!h.includes(f))).map(f=>{const C=y.get(f);if(!C)return"";const m=Math.max(...C.map(w=>Math.max(w.score,w.compScore)),1),v=C.map(w=>Oo(w,m,w.product,a)).join("");return`<div class="cnty-product" data-group-country="${f}"><div class="bu-header"><span class="bu-label">${to(f)}</span></div><div class="vbar-chart">${v}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${ue}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${an(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${u}</div>
      <div class="cnty-view-product" style="display:none">${d}</div>
      ${(()=>{if(!a||!Object.keys(a).length)return"";const f={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},m=[...new Set(t.map(v=>v.product))].map(v=>{const w=f[v]||String(v).toLowerCase(),x=Se(w,a),I=w==="audio"?"Audio-Sound Suite":v;return x.length?`${I}: ${x.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return m.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${m.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const _o={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function Xr(t){const e=_o[t]||_o.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(a=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${a.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${a.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Zr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",i=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",a=e==="en"?"All":"전체",n=e==="en"?"Total":"총",c=e==="en"?"":"개",s=e==="en"?"Clear filters":"필터 초기화",d=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],y={};d.forEach(f=>{const C=new Set;t.forEach(m=>{m[f.key]&&C.add(m[f.key])}),y[f.key]=[...C].sort()});const h=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(y).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const p=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),u=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${i}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${n} ${t.length}${c?" "+c:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${s}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${d.map(f=>`<th data-col="${f.key}" onclick="_plToggle('${f.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${f.label} <span id="pl-arrow-${f.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${d.map(f=>`<div id="pl-dd-${f.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${f.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${a}</div>
      ${y[f.key].map(C=>`<div onclick="_plFilter('${f.key}','${C.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${C}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${h};
    var _plFilters={};
    var _divC=${p};
    var _cejC=${u};
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
      document.getElementById('pl-count').textContent='${n} '+f.length+'${c?" "+c:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(d.map(f=>f.key))}.forEach(function(k){
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
  <\/script>`}function zo(t,e,o,i,a,n){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const c=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],s=[];for(let S=0;S<12;S++)s.push("w"+(5+S));const d=[...new Set(t.map(S=>S.topic))].filter(Boolean),y=[...new Set(t.map(S=>S.type))].filter(Boolean),h=[...new Set(t.map(S=>S.country))].filter(S=>S&&S!=="TTL"),p=c.filter(S=>h.includes(S)).concat(c.filter(S=>!h.includes(S))),u=JSON.stringify(t).replace(/</g,"\\u003c"),f=JSON.stringify(s),C=JSON.stringify(d),m=JSON.stringify(y),v=JSON.stringify(p),w=72;function x(S){const A={};return S&&String(S).split(`
`).forEach(g=>{const B=g.indexOf("=");if(B>0){const D=g.slice(0,B).trim(),z=g.slice(B+1).trim();D&&(A[D]=z)}}),A}const I=x(i==null?void 0:i.prTopicPromptsRaw);a&&a.length&&d.forEach(S=>{if(!I[S]){const A=a.find(g=>g.topic===S&&g.country==="US");A&&(I[S]=A.prompt)}});const j=(n==null?void 0:n.prTopicList)||[],R={},G={};j.forEach(S=>{[S.topic,S.topicRow,S.oldTopic].filter(Boolean).map(g=>g.trim()).forEach(g=>{S.explanation&&!R[g]&&(R[g]=S.explanation),S.bu&&!G[g]&&(G[g]=S.bu)})});const N={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...R,...x(i==null?void 0:i.prTopicDescsRaw)},U={};return d.forEach(S=>{const A=G[S];if(A)U[S]=A;else{const g=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];U[S]=g.some(B=>S.toLowerCase().includes(B.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Xt}">
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
      <span style="display:block;font-size:14px;font-weight:700;color:${te};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
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
    var D=${u},W=${f},TP=${C},TY=${m},CN=${v};
    var CW=${w};
    var TOPIC_CAT=${JSON.stringify(U)};
    var TOPIC_PROMPT=${JSON.stringify(I).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(N).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(j).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Oe)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${te}',COMP='${ue}';
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
  <\/script>`}function Go(t,e,o,i,a,n){const c=(t||[]).filter(m=>!0);if(!c.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const s=[];for(let m=0;m<12;m++)s.push("w"+(5+m));const y=[...new Set(c.map(m=>m.stakeholder))].filter(Boolean).map(m=>({stakeholder:m,topics:[...new Set(c.filter(v=>v.stakeholder===m).map(v=>v.topic))].filter(Boolean)})),h=72,p=JSON.stringify(c).replace(/</g,"\\u003c"),u=JSON.stringify(s),f=JSON.stringify(y),C="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Xt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${a||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${te};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${C}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${p},W=${u},GROUPS=${f};
    var CW=${h},RED='${te}';
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
  <\/script>`}function Qr(t,e,o,i,a,n,c,s,d,y,h,p,u,f){var xt,Wt,ct;u!=null&&u.llmModel&&u.llmModel!=="Total"&&(o=Ko(o,u.llmModel),c=qo(c,u.llmModel),e=Jo(e,u.monthlyVis,u.llmModel),u.monthlyVis&&(u={...u,monthlyVis:Tn(u.monthlyVis,u.llmModel)})),o=(o||[]).map(_=>({..._,weekly:(_.weekly||[]).map(q=>q??0),monthly:(_.monthly||[]).map(q=>q??0)})),y&&typeof y=="object"&&Object.values(y).forEach(_=>{!_||typeof _!="object"||Object.values(_).forEach(q=>{!q||typeof q!="object"||Object.keys(q).forEach(dt=>{const gt=q[dt];Array.isArray(gt)&&(q[dt]=gt.map($t=>$t??0))})})});const C={aircare:"Xiaomi"};o=o.map(_=>{const q=C[(_.id||"").toLowerCase()];if(!q||!_.allScores)return _;const dt=Object.entries(_.allScores).find(([Q])=>Q.toLowerCase()===q.toLowerCase()&&Q.toLowerCase()!=="lg");if(!dt)return _;const gt=dt[1];if(!(gt>0))return _;const $t=Math.round(_.score/gt*100);return{..._,compName:dt[0],vsComp:gt,compRatio:$t,status:$t>=100?"lead":$t>=80?"behind":"critical"}});const m=(u==null?void 0:u.visibilityOnly)||!1,v=(u==null?void 0:u.includePromptList)||!1,w=(u==null?void 0:u.includeReadability)===!0,x=(f==null?void 0:f.unlaunchedMap)||{},j=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${n}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,R=De[n]||De.ko;let G;if(d&&d.length)G=d.map(_=>String(_).toUpperCase().startsWith("W")?_.toUpperCase():_);else{const _=y?Math.max(...Object.values(y).flatMap(dt=>Object.values(dt).flatMap(gt=>Object.values(gt).map($t=>($t==null?void 0:$t.length)||0))),0):0,q=t.weekStart||Math.max(1,_-11);G=Array.from({length:Math.max(12,_)},(dt,gt)=>`W${q+gt}`)}const $=new Set;y&&Object.values(y).forEach(_=>Object.keys(_).forEach(q=>{q!=="Total"&&$.add(q)})),c&&c.forEach(_=>{_.country&&_.country!=="TTL"&&$.add(_.country)});const N=[...$].sort(),U=n==="en"?"All":"전체",S=["MS","HS","ES"],A=o.map(_=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${_.bu}" value="${_.id}" checked onchange="onFilterChange()"><span>${_.kr}</span></label>`).join(""),g=S.map(_=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${_}" checked onchange="onBuChange('${_}')"><span>${_}</span></label>`).join(""),B=N.map(_=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${_}" checked onchange="onFilterChange()"><span>${to(_)}</span></label>`).join(""),D=Object.entries(Qe).map(([_,q])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${_}" checked onchange="onRegionChange('${_}')"><span>${q.labelEn}</span></label>`).join(""),z=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,H=u!=null&&u.weeklyLabelsFull&&u.weeklyLabelsFull.length===G.length?u.weeklyLabelsFull:G,T=G.map((_,q)=>`<option value="${q}"${q===G.length-1?" selected":""}>${H[q]||_}</option>`).join(""),M=(((xt=o[0])==null?void 0:xt.monthlyScores)||[]).map(_=>{const q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dt=String(_.date).match(/(\d{1,2})월/),gt=String(_.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return dt?q[parseInt(dt[1])-1]:gt?gt[1].charAt(0).toUpperCase()+gt[1].slice(1).toLowerCase():_.date}),F=M.map((_,q)=>`<option value="${q}"${q===M.length-1?" selected":""}>${_}</option>`).join(""),K=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Xt}`,W=new Set(["Total"]);(o||[]).forEach(_=>(_.monthlyScores||[]).forEach(q=>Object.keys(q.byLlm||{}).forEach(dt=>W.add(dt)))),(c||[]).forEach(_=>(_.monthlyScores||[]).forEach(q=>Object.keys(q.byLlm||{}).forEach(dt=>W.add(dt)))),((u==null?void 0:u.monthlyVis)||[]).forEach(_=>{_.llmModel&&W.add(_.llmModel)});const et=["Total",...Array.from(W).filter(_=>_!=="Total").sort((_,q)=>_.localeCompare(q))],X=(u==null?void 0:u.llmModel)||"Total",k=et.map(_=>`<option value="${_}"${_===X?" selected":""}>${_}</option>`).join(""),E=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${z}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${G[G.length-1]} ${n==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${G.length>1?"":' style="display:none"'}>
        <span class="fl-label">${n==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${K}">${T}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${n==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${K}"${M.length>0?"":" disabled"}>${F||"<option>—</option>"}</select>
      </div>
      <div class="fl-group" id="vis-llm-select-group" style="display:none">
        <span class="fl-label">LLM Model</span>
        <select id="vis-llm-select" onchange="switchLlmModel(this.value)" style="${K}"${et.length>1?"":" disabled"}>${k}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${U}</span></label>
        ${g}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${U}</span></label>
        ${A}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${U}</span></label>
        ${D}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${U}</span></label>
        ${B}
      </div>
    </div>
  </div>`,O=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${_r(t.noticeText)}</div></div>`:"",Z=[O,t.showTotal!==!1?Mo(e,t,R,n,"weekly"):""].join(""),Y=[O,t.showTotal!==!1?Mo(e,t,R,n,"monthly"):""].join(""),ut=[];if(y&&Object.keys(y).length){const _=Xe;Object.entries(y).forEach(([q,dt])=>{const gt=o.find(Q=>Q.id===q),$t=(gt==null?void 0:gt.kr)||_[q]||q;Object.entries(dt).forEach(([Q,V])=>{if(Q==="Total"||Q==="TTL"||Q==="TOTAL")return;const ft=V.LG||V.lg||[],jt=ft.length>0?ft[ft.length-1]:0;if(jt<=0)return;let Et="",Nt=0;Object.entries(V).forEach(([Pt,Lt])=>{if(Pt==="LG"||Pt==="lg")return;const _t=Array.isArray(Lt)&&Lt.length?Lt[Lt.length-1]:0;_t>Nt&&(Nt=_t,Et=Pt)});const re=+(jt-Nt).toFixed(1),zt={};Object.entries(V).forEach(([Pt,Lt])=>{if(Array.isArray(Lt)&&Lt.length){const _t=Lt[Lt.length-1];_t!=null&&(zt[Pt]=_t)}}),ut.push({product:$t,country:Q,score:jt,compName:Et,compScore:Nt,gap:re,allScores:zt})})})}const bt=((Wt=u==null?void 0:u.weeklyLabelsFull)==null?void 0:Wt[u.weeklyLabelsFull.length-1])||G[G.length-1]||"",Ct=bt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${bt} ${n==="en"?"data":"기준"}</span>`:"",Rt=[Z,t.showProducts!==!1?Do(o,t,R,n,G,x,(u==null?void 0:u.monthlyVis)||[],y,Ct):"",`<div id="trend-container">${Jr(o,y,G,R,n,x,Ct)}</div>`,t.showCnty!==!1?No(ut,t,R,n,x,Ct):""].join(""),wt=o.map(_=>{const q=_.monthlyScore||_.score,dt=_.monthlyPrev||_.prev,gt=_.vsComp||0,$t=gt>0?q/gt*100:100;return{..._,score:q,prev:dt,weeklyScore:q,weeklyPrev:dt,monthlyScore:q,monthlyPrev:dt,weekly:(_.monthlyScores||[]).map(Q=>Q.score),status:$t>=100?"lead":$t>=80?"behind":"critical"}}),Mt=(((ct=o[0])==null?void 0:ct.monthlyScores)||[]).map(_=>{const q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dt=String(_.date).match(/(\d{1,2})월/),gt=String(_.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return dt?q[parseInt(dt[1])-1]:gt?gt[1].charAt(0).toUpperCase()+gt[1].slice(1).toLowerCase():_.date}),Ft=(u==null?void 0:u.monthlyVis)||[],Tt=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",It=[Y,t.showProducts!==!1?Do(wt,t,R,n,Mt.length?Mt:["Feb","Mar"],x,Ft,{},Tt):"",`<div id="monthly-trend-container">${Yr(wt,Ft,R,n,x,Tt)}</div>`,t.showCnty!==!1?No(c,t,R,n,x,Tt):""].join("");return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${Mr({FONT:Xt,RED:te,COMP:ue})}</style>
</head>
<body>
${m?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${E.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${Rt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${It}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${zo(f==null?void 0:f.weeklyPR,f==null?void 0:f.weeklyPRLabels,n,t,f==null?void 0:f.appendixPrompts,f)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Go(f==null?void 0:f.weeklyBrandPrompt,f==null?void 0:f.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${w?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
    ${v?`<button class="tab-btn" onclick="switchTab('promptlist')">Prompt List</button>`:""}
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
  <button class="gnb-sub-btn" onclick="switchCitSub('llm-compare')">${n==="en"?"LLM Compare":"LLM 모델별 비교"}</button>
</div>
<div id="tab-visibility" class="tab-panel active">
  <div id="vis-sub-bu" class="vis-sub-panel active">
    ${E}
    <div id="bu-weekly-content" class="dash-container">${Rt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${It}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${zo(f==null?void 0:f.weeklyPR,f==null?void 0:f.weeklyPRLabels,n,t,f==null?void 0:f.appendixPrompts,f)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Go(f==null?void 0:f.weeklyBrandPrompt,f==null?void 0:f.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
  </div>
</div>
<div id="tab-citation" class="tab-panel">
  <div id="cit-sub-touchpoint">
    <iframe id="cit-iframe-tp" src="/p/${n==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=touchpoint" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Touch Points"></iframe>
  </div>
  <div id="cit-sub-dotcom" style="display:none">
    <iframe id="cit-iframe-dc" data-src="/p/${n==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=dotcom" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Dotcom"></iframe>
  </div>
  <div id="cit-sub-llm-compare" style="display:none">
    <iframe id="cit-iframe-llm" data-src="/p/${n==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=llm-compare" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - LLM Compare"></iframe>
  </div>
</div>
${w?`<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${R.readabilityMsg}</p>
  </div></div>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${j}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${Zr(f==null?void 0:f.appendixPrompts,n)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${Xr(n)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${R.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${Hr({lang:n,weeklyAll:y,products:o,productsCnty:c,ulMap:x,monthlyVis:u==null?void 0:u.monthlyVis,total:e,meta:t,wLabels:G})}
<\/script>
</body>
</html>`}function ti(t){const e=t.filter(d=>d.status==="lead"),o=t.filter(d=>d.status==="behind"),i=t.filter(d=>d.status==="critical"),a=[...t].sort((d,y)=>y.score-d.score)[0],n=[...t].sort((d,y)=>d.score-y.score)[0],c=(t.reduce((d,y)=>d+y.score,0)/t.length).toFixed(1),s=[];return s.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${c}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),a&&s.push(`가장 높은 카테고리는 ${a.kr} ${a.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(a.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?s.push(`취약 카테고리(${i.map(d=>d.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&s.push(`추격 카테고리(${o.map(d=>d.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),s.join(" ")}function ei(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function oi(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const st=Bt,ni={citation:[st.meta,st.citTouchPoints,st.citDomain,st.citPageType],"weekly-report":[st.meta,st.visSummary,st.citTouchPoints,st.citPageType,st.productMS,st.productHS,st.productES,st.weeklyMS,st.weeklyHS,st.weeklyES],"monthly-report":[st.meta,st.visSummary,st.citTouchPoints,st.citPageType,st.productMS,st.productHS,st.productES,st.weeklyMS,st.weeklyHS,st.weeklyES],dashboard:[st.meta,st.visSummary,st.citTouchPoints,st.citDomain,st.citPageType,st.productMS,st.productHS,st.productES,st.weeklyMS,st.weeklyHS,st.weeklyES,st.weeklyPR,st.weeklyBrandPrompt,st.appendix,st.unlaunched,st.prTopicList],newsletter:[st.meta,st.visSummary,st.citTouchPoints,st.citPageType,st.productMS,st.productHS,st.productES,st.weeklyMS,st.weeklyHS,st.weeklyES,st.unlaunched]};function ri(t){return ni[t]||[]}const Uo="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function ii(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function ai({url:t,downloadName:e="sheet",mode:o}){const[i,a]=tt.useState(!1),[n,c]=tt.useState(""),s=o?ri(o):[],d=s.length?"zip":"xlsx",y=s.length?`📥 시트 CSV ZIP 다운로드 (탭 ${s.length}개)`:"📥 시트 xlsx 다운로드";async function h(){const p=ii(t);if(!p){c("ERROR: 동기화 URL 비어있거나 잘못됨");return}a(!0),c("");try{const u=new URLSearchParams({id:p,name:e});s.length&&u.set("tabs",s.join(","));const f=await fetch(`/api/sheet-download?${u.toString()}`,{credentials:"include"});if(!f.ok){const v=await f.text().catch(()=>"");let w=v;try{const x=JSON.parse(v);w=x.error||x.detail||v}catch{}throw new Error(`(${f.status}) ${w}`)}const C=await f.blob(),m=document.createElement("a");m.href=URL.createObjectURL(C),m.download=`${e}.${d}`,document.body.appendChild(m),m.click(),m.remove(),setTimeout(()=>URL.revokeObjectURL(m.href),1e3),c("다운로드 완료")}catch(u){c("ERROR: "+(u.message||String(u)))}finally{a(!1)}}return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("button",{onClick:h,disabled:i||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:i||!t?"#1E293B":"#1D4ED8",color:i||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Uo,cursor:i||!t?"not-allowed":"pointer"},children:i?"다운로드 중…":y}),n&&r.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Uo,background:n.startsWith("ERROR")?"#450A0A":"#14532D",color:n.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:n})]})}function si({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:a,metaEn:n,setMetaEn:c,total:s,setTotal:d,products:y,setProducts:h,citations:p,setCitations:u,dotcom:f,setDotcom:C,productsCnty:m,setProductsCnty:v,citationsCnty:w,setCitationsCnty:x,resolved:I,previewLang:j,setPreviewLang:R,snapshots:G,setSnapshots:$,setWeeklyLabels:N,setWeeklyAll:U,weeklyLabels:S,weeklyAll:A,citationsByCnty:g,dotcomByCnty:B,generateHTML:D,publishEndpoint:z,setMonthlyVis:H,onSyncExtra:T,categoryStats:M,extra:F,monthlyVis:K,progressMonth:W,setProgressMonth:et,progressDataMonth:X}){const k=tt.useRef({products:y,productsCnty:m,citations:p,citationsCnty:w,total:s,dotcom:f,extra:F});k.current={products:y,productsCnty:m,citations:p,citationsCnty:w,total:s,dotcom:f,extra:F};function E(){return k.current}const[O,Z]=tt.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[Y,ut]=tt.useState(!1),[bt,Ct]=tt.useState(null),[Rt,wt]=tt.useState(""),[Mt,Ft]=tt.useState(""),[Tt,It]=tt.useState(!1),[xt,Wt]=tt.useState(""),[ct,_]=tt.useState(!1),[q,dt]=tt.useState(!1),[gt,$t]=tt.useState(!1),[Q,V]=tt.useState(!1),[ft,jt]=tt.useState(""),[Et,Nt]=tt.useState(!1),[re,zt]=tt.useState(!0),[Pt,Lt]=tt.useState(""),[_t,we]=tt.useState(null),[le,He]=tt.useState([]),Gt=t==="newsletter",[ie,me]=tt.useState(()=>{const l=new Date;return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`});function ee(){Gt&&fetch("/api/publish").then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.months)&&He(l.months)}).catch(()=>{})}tt.useEffect(()=>{if(Gt){ee();return}fetch(z||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(b=>b.ok?b.json():null).then(we).catch(()=>{})},[t,z,Gt]);const sn=(()=>{const l=new Set,b=new Date;for(let lt=0;lt<24;lt++){const At=new Date(b.getFullYear(),b.getMonth()-lt,1);l.add(`${At.getFullYear()}-${String(At.getMonth()+1).padStart(2,"0")}`)}for(const lt of le)l.add(lt.month);return ie&&l.add(ie),[...l].sort((lt,At)=>At.localeCompare(lt))})();function Te(l){const[b,lt]=l.split("-");return`${b}년 ${parseInt(lt,10)}월`}const[ln,co]=tt.useState(null);tt.useEffect(()=>{let l=!0;const b=()=>wo(t).then(At=>{l&&co(At)});b();const lt=setInterval(b,6e4);return()=>{l=!1,clearInterval(lt)}},[t]);function cn(){wo(t).then(co)}async function dn(){if(!Q){V(!0),jt("");try{const l=E(),b=Re(l.products,l.productsCnty,l.citations,l.citationsCnty,"ko"),lt=Re(l.products,l.productsCnty,l.citations,l.citationsCnty,"en");let At,qt,ot;if(t==="dashboard"){const at=K||[],mt=l.extra||F||{};At=D(i,l.total,b.products,b.citations,l.dotcom,"ko",b.productsCnty,b.citationsCnty,S,A,g,B,at,mt),qt=D(n,l.total,lt.products,lt.citations,l.dotcom,"en",lt.productsCnty,lt.citationsCnty,S,A,g,B,at,mt),ot=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else At=D(i,l.total,b.products,b.citations,f,"ko",b.productsCnty,b.citationsCnty,{weeklyLabels:S,categoryStats:M,unlaunchedMap:(F==null?void 0:F.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),qt=D(n,l.total,lt.products,lt.citations,f,"en",lt.productsCnty,lt.citationsCnty,{weeklyLabels:S,categoryStats:M,unlaunchedMap:(F==null?void 0:F.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),ot=`${i.period||""} ${i.title||"Newsletter"}`.trim();const ye=z||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),P={title:ot,htmlKo:At,htmlEn:qt};Gt&&(P.month=ie);const Ut=await(await fetch(ye,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(P)})).json();if(!Ut.ok)throw new Error(Ut.error||"게시 실패");if(we({...Ut,published:!0}),Gt&&ee(),t==="dashboard")try{const at=await Pe(t)||{},mt=l.extra||F||{};Co(t,{...at,meta:i,total:l.total,weeklyPR:mt.weeklyPR||at.weeklyPR,weeklyPRLabels:mt.weeklyPRLabels||at.weeklyPRLabels,weeklyBrandPrompt:mt.weeklyBrandPrompt||at.weeklyBrandPrompt,weeklyBrandPromptLabels:mt.weeklyBrandPromptLabels||at.weeklyBrandPromptLabels,appendixPrompts:mt.appendixPrompts||at.appendixPrompts})}catch{}const Jt=`${window.location.origin}${Ut.urls.ko}`,pt=`${window.location.origin}${Ut.urls.en}`;try{await navigator.clipboard.writeText(Jt+`
`+pt)}catch{}jt(`KO: ${Jt}
EN: ${pt}`)}catch(l){jt("ERROR:"+l.message)}finally{V(!1),setTimeout(()=>jt(""),2e4)}}}async function pn(){if(!Et){Nt(!0),Lt("");try{const l=await or(Qr,Re,{includeProgressTracker:re});Lt(`통합 게시 완료!
KO: ${window.location.origin}${l.urls.ko}
EN: ${window.location.origin}${l.urls.en}`)}catch(l){Lt("ERROR: "+l.message)}finally{Nt(!1),setTimeout(()=>Lt(""),15e3)}}}async function po(l){try{const b=z||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),lt=Gt?`${b}?month=${encodeURIComponent(l||ie)}`:b;(await(await fetch(lt,{method:"DELETE"})).json()).ok&&(Gt?ee():we(null))}catch{}}async function un(){if(j!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}dt(!0)}async function uo(l){dt(!1),$t(!0);const b=(l==null?void 0:l.products)??y,lt=(l==null?void 0:l.productsCnty)??m,At=(l==null?void 0:l.citations)??p,qt=(l==null?void 0:l.citationsCnty)??w;try{const ot=i,ye=[ot.title||"",ot.dateLine||"",ot.noticeText||"",ot.totalInsight||"",ot.reportType||"",ot.productInsight||"",ot.productHowToRead||"",ot.citationInsight||"",ot.citationHowToRead||"",ot.dotcomInsight||"",ot.dotcomHowToRead||"",ot.todoText||"",ot.todoNotice||"",ot.kpiLogicText||"",ot.cntyInsight||"",ot.cntyHowToRead||"",ot.citDomainInsight||"",ot.citDomainHowToRead||"",ot.citCntyInsight||"",ot.citCntyHowToRead||"",ot.citPrdInsight||"",ot.citPrdHowToRead||"",ot.period||"",ot.team||"",ot.reportNo||"",ot.monthlyReportBody||""],P=b.map(it=>it.kr||""),ce=b.map(it=>it.compName||""),Ut=At.map(it=>it.category||""),Jt=[...new Set(lt.map(it=>it.country||""))],pt=[...new Set(lt.map(it=>it.product||""))],at=[...new Set(lt.map(it=>it.compName||""))],mt=[...new Set(qt.map(it=>it.cnty||"").filter(it=>it&&it!=="TTL"))],vt=[...ye,...P,...ce,...Ut,...Jt,...pt,...at,...mt].map(it=>it||" "),rt=await rr(vt,{from:"ko",to:"en"});let nt=0;const ae={...i,title:rt[nt++]||ot.title,dateLine:rt[nt++]||ot.dateLine,noticeText:rt[nt++]||ot.noticeText,totalInsight:rt[nt++]||ot.totalInsight,reportType:rt[nt++]||ot.reportType,productInsight:rt[nt++]||ot.productInsight,productHowToRead:rt[nt++]||ot.productHowToRead,citationInsight:rt[nt++]||ot.citationInsight,citationHowToRead:rt[nt++]||ot.citationHowToRead,dotcomInsight:rt[nt++]||ot.dotcomInsight,dotcomHowToRead:rt[nt++]||ot.dotcomHowToRead,todoText:rt[nt++]||ot.todoText,todoNotice:rt[nt++]||ot.todoNotice,kpiLogicText:rt[nt++]||ot.kpiLogicText,cntyInsight:rt[nt++]||ot.cntyInsight,cntyHowToRead:rt[nt++]||ot.cntyHowToRead,citDomainInsight:rt[nt++]||ot.citDomainInsight,citDomainHowToRead:rt[nt++]||ot.citDomainHowToRead,citCntyInsight:rt[nt++]||ot.citCntyInsight,citCntyHowToRead:rt[nt++]||ot.citCntyHowToRead,citPrdInsight:rt[nt++]||ot.citPrdInsight,citPrdHowToRead:rt[nt++]||ot.citPrdHowToRead,period:(nt++,ot.period),team:rt[nt++]||ot.team,reportNo:(nt++,ot.reportNo),monthlyReportBody:rt[nt++]||ot.monthlyReportBody},Vt=it=>it&&it.replace(/\b\w/g,ht=>ht.toUpperCase()),oe=it=>(it||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),de={};b.forEach((it,ht)=>{de[it.id]={en:Vt(rt[nt+ht]||it.kr),compNameEn:oe(rt[nt+P.length+ht]||it.compName)}}),nt+=P.length+ce.length;const Yt={};At.forEach((it,ht)=>{Yt[`${it.rank}_${it.source}`]=Vt(rt[nt+ht]||it.category)}),nt+=Ut.length;const be={};Jt.forEach((it,ht)=>{be[it]=/^[A-Z]{2,3}$/.test(it)?it:rt[nt+ht]||it}),nt+=Jt.length;const $e={};pt.forEach((it,ht)=>{$e[it]=rt[nt+ht]||it}),nt+=pt.length;const Ce={};at.forEach((it,ht)=>{Ce[it]=rt[nt+ht]||it}),nt+=at.length;const ke={};mt.forEach((it,ht)=>{ke[it]=/^[A-Z]{2,3}$/.test(it)?it:rt[nt+ht]||it}),c(ae),h(it=>it.map(ht=>{var fo,ho;return{...ht,en:((fo=de[ht.id])==null?void 0:fo.en)||ht.en||ht.kr,compNameEn:((ho=de[ht.id])==null?void 0:ho.compNameEn)||ht.compNameEn||ht.compName}})),u(it=>it.map(ht=>({...ht,categoryEn:Yt[`${ht.rank}_${ht.source}`]||ht.categoryEn||ht.category}))),v(it=>it.map(ht=>({...ht,countryEn:Vt(be[ht.country]||ht.country),productEn:Vt($e[ht.product]||ht.product),compNameEn:oe(Ce[ht.compName]||ht.compName)}))),x(it=>it.map(ht=>({...ht,cntyEn:ht.cnty==="TTL"?"TTL":Vt(ke[ht.cnty]||ht.cnty)}))),$t(!1)}catch(ot){alert("번역 오류: "+ot.message),$t(!1)}}async function fn(){const l=D(e,s,I.products,I.citations,f,j,I.productsCnty,I.citationsCnty);try{await navigator.clipboard.writeText(l)}catch{const b=document.createElement("textarea");b.value=l,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}It(!0),setTimeout(()=>It(!1),2500)}async function hn(){await hr(e,s,y,p,f)}async function gn(){if(ct!=="sending"){_("sending");try{const l=E(),b=D(e,l.total,l.products,l.citations,l.dotcom,j,l.productsCnty,l.citationsCnty,{weeklyLabels:S,categoryStats:M,unlaunchedMap:(F==null?void 0:F.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),lt=`[LG GEO] ${e.title} · ${e.period}`,qt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:xt.trim(),subject:lt,html:b})})).json();if(!qt.ok)throw new Error(qt.error||"발송 실패");_("ok"),setTimeout(()=>_(!1),4e3)}catch(l){_("error"),wt(l.message),setTimeout(()=>{_(!1),wt("")},5e3)}}}async function mn(){var lt,At,qt,ot,ye;if(Y)return;const l=Br(O.trim());if(!l){Ct("error"),wt("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Ct(null),3e3);return}ut(!0),Ct(null),wt(""),Ft("");const b=[];try{const P=await Ir(l,pt=>wt(pt));if(b.push(`[Sync] parsed keys: ${Object.keys(P).join(", ")||"(없음)"}`),P.meta&&b.push(`[Sync] meta keys: ${Object.keys(P.meta).join(", ")}`),P.productsPartial&&b.push(`[Sync] products: ${P.productsPartial.length}건`),b.push(`[Sync] citations: ${((lt=P.citations)==null?void 0:lt.length)??0}건`),b.push(`[Sync] citationsCnty: ${((At=P.citationsCnty)==null?void 0:At.length)??0}건`),b.push(`[Sync] dotcom: ${P.dotcom?"OK":"(없음)"}`),b.push(`[Sync] productsCnty: ${((qt=P.productsCnty)==null?void 0:qt.length)??0}건`),P.meta){const pt=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];a(at=>{const mt={...at};for(const[vt,rt]of Object.entries(P.meta))pt.includes(vt)&&at[vt]||(mt[vt]=rt);return mt}),c(at=>({...at,period:P.meta.period,dateLine:P.meta.dateLine,reportNo:P.meta.reportNo}))}if(P.citations&&(u(P.citations),k.current={...k.current,citations:P.citations}),P.dotcom&&(C(pt=>({...pt,...P.dotcom})),k.current={...k.current,dotcom:{...k.current.dotcom,...P.dotcom}}),P.productsCnty&&(v(P.productsCnty),k.current={...k.current,productsCnty:P.productsCnty}),P.citationsCnty&&(x(P.citationsCnty),k.current={...k.current,citationsCnty:P.citationsCnty}),P.monthlyVis&&H&&H(P.monthlyVis),T){const pt={weeklyPR:P.weeklyPR||null,weeklyPRLabels:P.weeklyPRLabels||null,weeklyBrandPrompt:P.weeklyBrandPrompt||null,weeklyBrandPromptLabels:P.weeklyBrandPromptLabels||null,appendixPrompts:P.appendixPrompts||null,unlaunchedMap:P.unlaunchedMap||null,weeklyLabelsFull:P.weeklyLabelsFull||null,prTopicList:P.prTopicList||null};T(pt),k.current={...k.current,extra:{...k.current.extra,...pt}}}const ce=P.weeklyLabels||((ot=P.meta)==null?void 0:ot.weeklyLabels);console.log("[SYNC] weeklyLabels:",ce,"weeklyLabelsFull:",P.weeklyLabelsFull),ce&&ce.length&&N(ce),P.weeklyAll&&U(pt=>({...pt,...P.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(P));const Ut=P.weeklyMap?Object.keys(P.weeklyMap):[],Jt=((ye=P.productsPartial)==null?void 0:ye.map(pt=>pt.id))||[];if(console.log("[SYNC] weeklyMap keys:",Ut.length?Ut:"NONE"),console.log("[SYNC] productsPartial IDs:",Jt.length?Jt:"NONE"),Ut.length&&Jt.length){const pt=Jt.filter(mt=>!Ut.includes(mt)),at=Ut.filter(mt=>!Jt.includes(mt));pt.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",pt),at.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",at),!pt.length&&!at.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(P.productsPartial){const pt=P.productsPartial.map(at=>{var Ce;const mt=((Ce=P.weeklyMap)==null?void 0:Ce[at.id])||[],vt=mt.filter(ke=>ke!=null&&ke>0),rt=at.score,nt=at.prev||0,ae=at.vsComp>0?Math.round(rt/at.vsComp*100):100,Vt=vt.length>0?vt[vt.length-1]:rt,oe=vt.length>=5?vt[vt.length-5]:vt[0]||0,de=rt,Yt=nt,be=ae,$e=nt>0&&nt!==rt?[nt,rt]:[];return{...at,score:de,prev:Yt,weekly:mt,monthly:$e,weeklyScore:Vt,weeklyPrev:oe,monthlyScore:rt,monthlyPrev:nt,compRatio:be,status:be>=100?"lead":be>=80?"behind":"critical"}});h(pt),k.current={...k.current,products:pt}}else P.weeklyMap&&h(pt=>pt.map(at=>{var vt;const mt=(vt=P.weeklyMap)==null?void 0:vt[at.id];return mt?{...at,weekly:mt}:at}));if(P.total){const pt={...k.current.total,...P.total,...P.buTotals?{buTotals:P.buTotals}:{},...P.buTotalsPrev?{buTotalsPrev:P.buTotalsPrev}:{},...P.countryTotals?{countryTotals:P.countryTotals}:{},...P.countryTotalsPrev?{countryTotalsPrev:P.countryTotalsPrev}:{}};d(at=>({...at,...pt})),k.current={...k.current,total:pt}}{let pt=function(nt){if(!nt)return 0;const ae=String(nt).trim(),Vt=ae.match(/(\d{1,2})월/);if(Vt){const Yt=parseInt(Vt[1]);return Yt>=1&&Yt<=12?Yt:0}const oe=ae.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(oe)return vt[oe[1].toLowerCase()]||0;const de=ae.match(/\d{4}[-\/](\d{1,2})/);if(de){const Yt=parseInt(de[1]);return Yt>=1&&Yt<=12?Yt:0}return 0};const at=new Date().getFullYear(),mt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],vt={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let rt=0;if(P.derivedPeriod){const nt=pt(P.derivedPeriod);nt>rt&&(rt=nt)}if(P.citDerivedPeriod){const nt=pt(P.citDerivedPeriod);nt>rt&&(rt=nt)}rt>0&&rt<=12&&(a(nt=>({...nt,period:`${at}년 ${rt}월`})),c(nt=>({...nt,period:`${mt[rt]} ${at}`})))}if(!P.total&&P.productsPartial&&P.productsPartial.length>0){const pt=P.productsPartial,at=+(pt.reduce((vt,rt)=>vt+rt.score,0)/pt.length).toFixed(1),mt=+(pt.reduce((vt,rt)=>vt+(rt.vsComp||0),0)/pt.length).toFixed(1);d(vt=>({...vt,score:at,vsComp:mt,rank:at>=mt?1:2}))}if(setTimeout(()=>{Co(t,{meta:P.meta||null,total:P.total?{...P.total,...P.buTotals?{buTotals:P.buTotals}:{},...P.buTotalsPrev?{buTotalsPrev:P.buTotalsPrev}:{},...P.countryTotals?{countryTotals:P.countryTotals}:{},...P.countryTotalsPrev?{countryTotalsPrev:P.countryTotalsPrev}:{}}:null,productsPartial:P.productsPartial||null,weeklyMap:P.weeklyMap||null,weeklyLabels:P.weeklyLabels||null,weeklyLabelsFull:P.weeklyLabelsFull||null,weeklyAll:P.weeklyAll||null,citations:P.citations||null,dotcom:P.dotcom||null,productsCnty:P.productsCnty||null,citationsCnty:P.citationsCnty||null,citationsByCnty:P.citationsByCnty||null,dotcomByCnty:P.dotcomByCnty||null,appendixPrompts:P.appendixPrompts||null,unlaunchedMap:P.unlaunchedMap||null,prTopicList:P.prTopicList||null,monthlyVis:P.monthlyVis||null,weeklyPR:P.weeklyPR||null,weeklyPRLabels:P.weeklyPRLabels||null,monthlyPR:P.monthlyPR||null,monthlyPRLabels:P.monthlyPRLabels||null,weeklyBrandPrompt:P.weeklyBrandPrompt||null,weeklyBrandPromptLabels:P.weeklyBrandPromptLabels||null,monthlyBrandPrompt:P.monthlyBrandPrompt||null,monthlyBrandPromptLabels:P.monthlyBrandPromptLabels||null,dotcomTrend:P.dotcomTrend||null,dotcomTrendMonths:P.dotcomTrendMonths||null}),setTimeout(cn,250)},100),Ft(b.join(`
`)),Ct("ok"),wt(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const pt={};P.productsPartial&&(pt.products=P.productsPartial.map(at=>{var Vt;const mt=((Vt=P.weeklyMap)==null?void 0:Vt[at.id])||[],vt=at.vsComp>0?at.score/at.vsComp*100:100,rt=mt.find(oe=>oe!=null&&oe>0),nt=at.prev!=null&&at.prev>0?at.prev:rt||0,ae=nt>0?[nt,at.score]:[];return{...at,prev:nt,weekly:mt,monthly:ae,compRatio:Math.round(vt),status:vt>=100?"lead":vt>=80?"behind":"critical"}})),P.productsCnty&&(pt.productsCnty=P.productsCnty),P.citations&&(pt.citations=P.citations),P.citationsCnty&&(pt.citationsCnty=P.citationsCnty);try{await uo(pt)}catch{}wt("동기화 + 번역 완료!")}}catch(P){b.push(`[ERROR] ${P.message}`),Ct("error"),wt(P.message),Ft(b.join(`
`))}finally{ut(!1),setTimeout(()=>{Ct(null),wt("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:kt,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:L},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:L},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Pr,{...ln||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:L},children:"Google Sheets URL"}),r.jsx("input",{value:O,onChange:l=>Z(l.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...yt,fontSize:11,padding:"7px 9px",marginBottom:8,color:O?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:mn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:Y?"wait":"pointer",background:Y?"#1E293B":kt,fontSize:12,fontWeight:700,color:Y?"#94A3B8":"#FFFFFF",fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(go,{size:13,style:{animation:Y?"spin 1s linear infinite":"none"}}),Y?"동기화 중...":"구글 시트 동기화"]}),(bt||Y&&Rt)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.6,background:bt==="ok"?"#14532D":bt==="error"?"#450A0A":"#1E293B",color:bt==="ok"?"#86EFAC":bt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${bt==="ok"?"#22C55E33":bt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Rt}),Mt&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[Mt,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(Mt).then(()=>{const l=document.getElementById("vis-debug-copy-btn");l&&(l.textContent="복사됨!",setTimeout(()=>{l.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"로그 복사"})]}),r.jsx(ai,{url:O,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("button",{onClick:un,disabled:gt,style:{width:"100%",padding:"9px 0",background:gt?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:L,cursor:gt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:gt?.6:1},children:[r.jsx(yn,{size:13})," ",gt?"번역 중...":"AI 번역 (EN)"]}),q&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:L},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>dt(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:L,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:uo,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),r.jsxs("button",{onClick:hn,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(bn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[Gt&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"발행 월"}),r.jsx("select",{value:ie,onChange:l=>me(l.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:sn.map(l=>r.jsxs("option",{value:l,children:[l," · ",Te(l),le.find(b=>b.month===l)?" ✓ 게시됨":""]},l))})]}),Gt&&et&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["핵심 과제 진척 월 ",r.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",X||"—",")"]})]}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("select",{value:W||"",onChange:l=>et(l.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:[r.jsxs("option",{value:"",children:["자동 (",X||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(l=>r.jsx("option",{value:l,children:l},l))]}),W&&r.jsx("button",{onClick:()=>et(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),r.jsxs("button",{onClick:dn,disabled:Q,style:{width:"100%",padding:"9px 0",background:Q?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Q?"#94A3B8":"#FFFFFF",fontFamily:L,cursor:Q?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(mo,{size:12}),Q?"게시 중...":Gt?`${Te(ie)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:L,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:re,onChange:l=>zt(l.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),r.jsxs("button",{onClick:pn,disabled:Et,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:Et?"#1E293B":"#166534",color:Et?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,cursor:Et?"wait":"pointer",marginBottom:6},children:[r.jsx(mo,{size:12}),Et?"통합 게시 중...":"통합 대시보드 게시"]}),Pt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:Pt.startsWith("ERROR")?"#450A0A":"#14532D",color:Pt.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Pt.startsWith("ERROR:")?Pt.slice(6):Pt})]})]}),r.jsxs("button",{onClick:async()=>{const l={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(l).some(lt=>lt.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const At=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:l})})).json();At.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(At.error||""))}catch(lt){alert("아카이빙 실패: "+lt.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(xn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&ft&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:ft.startsWith("ERROR:")?"#450A0A":"#14532D",color:ft.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${ft.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:ft.startsWith("ERROR:")?ft.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(We,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[ft,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Gt&&(_t==null?void 0:_t.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:()=>po(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:_t.urls.ko},{label:"EN",url:_t.urls.en}].map(({label:l,url:b})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:b,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[l,": ",b]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${b}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(We,{size:10})})]},l)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:_t.ts?new Date(_t.ts).toLocaleString("ko-KR"):""})]}),Gt&&le.length>0&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsx("div",{style:{marginBottom:6},children:r.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",le.length,")"]})}),le.map(l=>r.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L},children:Te(l.month)}),r.jsx("button",{onClick:()=>{confirm(`${Te(l.month)} 게시본을 삭제할까요?`)&&po(l.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:l.urls.ko},{label:"EN",url:l.urls.en}].map(({label:b,url:lt})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[r.jsxs("a",{href:lt,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[b,": ",lt]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${lt}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(We,{size:10})})]},b)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:l.ts?new Date(l.ts).toLocaleString("ko-KR"):""})]},l.month))]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:l=>o(b=>({...b,reportType:l.target.value})),style:{...yt,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:l=>o(b=>({...b,reportNo:l.target.value})),style:{...yt}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:l=>o(b=>({...b,period:l.target.value})),style:{...yt}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:l=>o(b=>({...b,title:l.target.value})),rows:4,style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:l=>o(b=>({...b,team:l.target.value})),style:{...yt,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:l=>o(b=>({...b,dateLine:l.target.value})),style:{...yt,marginBottom:10}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Notice"}),r.jsx("button",{onClick:()=>o(l=>({...l,showNotice:!l.showNotice})),style:{background:e.showNotice?kt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:l=>o(b=>({...b,noticeText:l.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...yt,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(l=>({...l,showKpiLogic:!l.showKpiLogic})),style:{background:e.showKpiLogic?kt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:l=>o(b=>({...b,kpiLogicText:l.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...yt,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:L,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:l=>o(b=>({...b,titleFontSize:Number(l.target.value)})),style:{width:"100%",accentColor:kt,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:l=>o(b=>({...b,titleColor:l.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:L},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([l,b])=>r.jsx("button",{onClick:()=>o(lt=>({...lt,titleColor:l})),title:b,style:{width:16,height:16,borderRadius:"50%",background:l,border:e.titleColor===l?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},l))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:l,label:b})=>r.jsx("button",{onClick:()=>o(lt=>({...lt,[l]:!lt[l]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[l]?kt:"#1E293B",color:e[l]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:b},l))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?kt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(l=>({...l,trendMode:(l.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?kt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?kt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"콘텐츠 편집"})]}),t==="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"월간 보고서 본문"}),r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,monthlyReportBody:"⏳ AI 생성 중..."}));const l=await Ot("monthlyReportBody",{products:E().products,productsCnty:E().productsCnty,total:E().total,citations:E().citations,todoText:e.todoText||"",period:e.period||""},j);o(b=>({...b,monthlyReportBody:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,monthlyReportBody:`[AI 실패: ${l.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.monthlyReportBody||"",onChange:l=>o(b=>({...b,monthlyReportBody:l.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:L},children:[r.jsx("code",{children:"1. 제목"})," → H2 · ",r.jsx("code",{children:"2.1 부제"})," → H3 · ",r.jsx("code",{children:"**텍스트**"})," → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,totalInsight:"⏳ AI 생성 중..."}));const l=await Ot("totalInsight",{products:E().products,productsCnty:E().productsCnty,total:E().total,todoText:e.todoText||""},j);o(b=>({...b,totalInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,totalInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:l=>o(b=>({...b,totalInsight:l.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,productInsight:"⏳ AI 생성 중..."}));const l=await Ot("product",{products:E().products,total:E().total},j);o(b=>({...b,productInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,productInsight:`[AI 실패: ${l.message}]

`+ti(E().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductInsight:!l.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?kt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:l=>o(b=>({...b,productInsight:l.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,productHowToRead:"⏳ AI 생성 중..."}));const l=await Ot("howToRead",{section:"제품별 GEO Visibility"},j);o(b=>({...b,productHowToRead:l}))}catch{o(l=>({...l,productHowToRead:ei()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductHowToRead:!l.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?kt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:l=>o(b=>({...b,productHowToRead:l.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,cntyInsight:"⏳ AI 생성 중..."}));const l=await Ot("cnty",{productsCnty:E().productsCnty},j);o(b=>({...b,cntyInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,cntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyInsight:!l.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?kt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:l=>o(b=>({...b,cntyInsight:l.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,cntyHowToRead:"⏳ AI 생성 중..."}));const l=await Ot("howToRead",{section:"국가별 GEO Visibility"},j);o(b=>({...b,cntyHowToRead:l}))}catch{o(l=>({...l,cntyHowToRead:oi()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyHowToRead:!l.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?kt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:l=>o(b=>({...b,cntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:l=>o(b=>({...b,prNotice:l.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:l=>o(b=>({...b,prTopicDescsRaw:l.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:l=>o(b=>({...b,prTopicPromptsRaw:l.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:l=>o(b=>({...b,bpNotice:l.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citationInsight:"⏳ AI 생성 중..."}));const l=await Ot("citation",{citations:E().citations},j);o(b=>({...b,citationInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citationInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationInsight:!l.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?kt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:l=>o(b=>({...b,citationInsight:l.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citationHowToRead:"⏳ AI 생성 중..."}));const l=await Ot("howToRead",{section:"Citation 도메인별 현황"},j);o(b=>({...b,citationHowToRead:l}))}catch{o(l=>({...l,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationHowToRead:!l.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?kt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:l=>o(b=>({...b,citationHowToRead:l.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citDomainInsight:"⏳ AI 생성 중..."}));const l=await Ot("citDomain",{citationsCnty:E().citationsCnty},j);o(b=>({...b,citDomainInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citDomainInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainInsight:!l.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?kt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:l=>o(b=>({...b,citDomainInsight:l.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citDomainHowToRead:"⏳ AI 생성 중..."}));const l=await Ot("howToRead",{section:"도메인별 Citation 현황"},j);o(b=>({...b,citDomainHowToRead:l}))}catch{o(l=>({...l,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainHowToRead:!l.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?kt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:l=>o(b=>({...b,citDomainHowToRead:l.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citCntyInsight:"⏳ AI 생성 중..."}));const l=await Ot("citCnty",{citationsCnty:E().citationsCnty},j);o(b=>({...b,citCntyInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citCntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyInsight:!l.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?kt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:l=>o(b=>({...b,citCntyInsight:l.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citCntyHowToRead:"⏳ AI 생성 중..."}));const l=await Ot("howToRead",{section:"국가별 Citation 도메인"},j);o(b=>({...b,citCntyHowToRead:l}))}catch{o(l=>({...l,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyHowToRead:!l.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?kt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:l=>o(b=>({...b,citCntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citPrdInsight:"⏳ AI 생성 중..."}));const l=await Ot("citPrd",{citationsCnty:E().citationsCnty},j);o(b=>({...b,citPrdInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citPrdInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdInsight:!l.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?kt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdInsight||"",onChange:l=>o(b=>({...b,citPrdInsight:l.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citPrdHowToRead:"⏳ AI 생성 중..."}));const l=await Ot("howToRead",{section:"제품별 Citation"},j);o(b=>({...b,citPrdHowToRead:l}))}catch{o(l=>({...l,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdHowToRead:!l.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?kt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:l=>o(b=>({...b,citPrdHowToRead:l.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),m.length>0&&(()=>{const l=[...new Set(I.productsCnty.map(b=>b.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:l.map(b=>{const lt=(e.cntyProductFilter||{})[b]!==!1;return r.jsx("button",{onClick:()=>o(At=>({...At,cntyProductFilter:{...At.cntyProductFilter||{},[b]:!lt}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:lt?"#166534":"#1E293B",color:lt?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:b},b)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,dotcomInsight:"⏳ AI 생성 중..."}));const l=await Ot("dotcom",{dotcom:E().dotcom},j);o(b=>({...b,dotcomInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,dotcomInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomInsight:!l.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?kt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:l=>o(b=>({...b,dotcomInsight:l.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,dotcomHowToRead:"⏳ AI 생성 중..."}));const l=await Ot("howToRead",{section:"닷컴 Citation"},j);o(b=>({...b,dotcomHowToRead:l}))}catch{o(b=>({...b,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomHowToRead:!l.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?kt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:l=>o(b=>({...b,dotcomHowToRead:l.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:l=>o(b=>({...b,todoNotice:l.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,todoText:"⏳ AI 생성 중..."}));const l=await Ot("todo",{products:E().products},j);o(b=>({...b,todoText:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,todoText:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Dt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showTodo:!l.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?kt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:l=>o(b=>({...b,todoText:l.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...yt,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:fn,style:{width:"100%",padding:"9px 0",background:Tt?"#14532D":"transparent",border:`1px solid ${Tt?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:Tt?"#86EFAC":"#64748B",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:Tt?r.jsxs(r.Fragment,{children:[r.jsx(Je,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(Wo,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:xt,onChange:l=>Wt(l.target.value),placeholder:"recipient@example.com",style:{...yt,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:gn,disabled:ct==="sending"||!xt.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:ct==="sending"||!xt.trim()?"not-allowed":"pointer",background:ct==="ok"?"#14532D":ct==="error"?"#7F1D1D":ct==="sending"?"#1E3A5F":xt.trim()?"#1D4ED8":"#1E293B",color:ct==="ok"?"#86EFAC":ct==="error"?"#FCA5A5":xt.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:ct==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(go,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):ct==="ok"?r.jsxs(r.Fragment,{children:[r.jsx(Je,{size:12})," 발송 완료!"]}):ct==="error"?r.jsxs(r.Fragment,{children:[r.jsx(yo,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(yo,{size:12})," 메일 발송"]})})]})]})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:L,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function li({value:t,onChange:e,products:o,productsCnty:i,monthlyVis:a,style:n}){const c=Vo.useMemo(()=>En(o,i,a),[o,i,a]);return!c.length||c.length===1&&c[0]==="Total"?null:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...n},children:[r.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),r.jsx("select",{value:t||"Total",onChange:s=>e(s.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:c.map(s=>r.jsx("option",{value:s,children:s},s))})]})}const xe="monthly-report",Ho="geo-monthly-report-cache";function ci({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:n=[],citationsCnty:c=[],lang:s="ko",weeklyLabels:d,categoryStats:y,stakeholderStats:h,cntyKeys:p=null,llmModel:u,monthlyVis:f}){const C=tt.useRef(null),m=tt.useMemo(()=>no(t,e,o,i,a,s,n,c,{categoryStats:y,stakeholderStats:h,cntyKeys:p,llmModel:u,monthlyVis:f}),[t,e,o,i,a,s,n,c,d,p,u,f]);return Vo.useEffect(()=>{const v=C.current;if(!v)return;const w=v.contentDocument||v.contentWindow.document;w.open(),w.write(m),w.close();const x=()=>{try{w.body.style.overflow="hidden",w.documentElement.style.overflow="hidden";const I=w.documentElement.scrollHeight;I&&(v.style.height=I+20+"px")}catch{}};setTimeout(x,150),setTimeout(x,400),setTimeout(x,1e3),setTimeout(x,2e3)},[m]),r.jsx("iframe",{ref:C,title:"newsletter-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function di({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:n=[],citationsCnty:c=[],lang:s="ko",weeklyLabels:d,categoryStats:y,stakeholderStats:h,cntyKeys:p=null,llmModel:u,monthlyVis:f}){const[C,m]=tt.useState(!1),v=tt.useMemo(()=>no(t,e,o,i,a,s,n,c,{categoryStats:y,stakeholderStats:h,cntyKeys:p,llmModel:u,monthlyVis:f}),[t,e,o,i,a,s,n,c,d,y,p,u,f]);async function w(){try{await navigator.clipboard.writeText(v)}catch{const x=document.createElement("textarea");x.value=v,document.body.appendChild(x),x.select(),document.execCommand("copy"),document.body.removeChild(x)}m(!0),setTimeout(()=>m(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsxs("div",{children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L},children:"이메일 HTML 코드"}),r.jsx("span",{style:{fontSize:11,color:"#334155",fontFamily:L,marginLeft:10},children:"table 기반 · 인라인 스타일 · 이메일 클라이언트 호환"})]}),r.jsx("button",{onClick:w,style:{padding:"6px 14px",borderRadius:7,border:"none",background:C?"#14532D":kt,color:C?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",gap:5,transition:"all 0.2s"},children:C?r.jsxs(r.Fragment,{children:[r.jsx(Je,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(Wo,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:v})})]})}function pi(){const t=tt.useRef(Yn(Ho)).current,[e,o]=tt.useState({...Le,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,a]=tt.useState({...Le,...(t==null?void 0:t.metaEn)??{}}),[n,c]=tt.useState((t==null?void 0:t.total)??Hn),[s,d]=tt.useState((t==null?void 0:t.products)??Wn),[y,h]=tt.useState((t==null?void 0:t.citations)??Jn),[p,u]=tt.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:Vn),[f,C]=tt.useState((t==null?void 0:t.productsCnty)??Kn),[m,v]=tt.useState((t==null?void 0:t.citationsCnty)??qn),[w,x]=tt.useState((t==null?void 0:t.weeklyLabels)??null),[I,j]=tt.useState((t==null?void 0:t.weeklyAll)??{}),[R,G]=tt.useState(null),[$,N]=tt.useState(null),[U,S]=tt.useState("preview"),[A,g]=tt.useState("ko"),[B,D]=tt.useState("Total"),[z,H]=tt.useState((t==null?void 0:t.monthlyVis)??[]),[T,M]=tt.useState([]),[F,K]=tt.useState(""),[W,et]=tt.useState(!1),[X,k]=tt.useState(""),[E,O]=tt.useState(null),[Z,Y]=tt.useState(!0),[ut,bt]=tt.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),Ct=tt.useMemo(()=>{const Q=new Set;return(f||[]).forEach(V=>{V&&V.country&&!/^(ttl|total)$/i.test(V.country)&&Q.add(String(V.country).toUpperCase())}),Array.from(Q).sort()},[f]),Rt=ut.length>0?ut:null,wt=tt.useCallback(Q=>{bt(V=>V.includes(Q)?V.filter(ft=>ft!==Q):[...V,Q])},[]),Mt=tt.useCallback(()=>bt(Ct),[Ct]),Ft=tt.useCallback(()=>bt([]),[]);tt.useEffect(()=>{let Q=!1;const V=lr(e.period)||"3월";async function ft(){var jt,Et,Nt;try{const re=await fetch("/api/tracker-snapshot-v2"),zt=re.ok?await re.json():null;if(zt!=null&&zt.ok&&((Nt=(Et=(jt=zt.data)==null?void 0:jt.quantitativeGoals)==null?void 0:Et.rows)!=null&&Nt.length)){const Pt=So(zt.data,V),Lt=Ao(zt.data,V);if(Pt!=null&&Pt.length&&!Q){G(Pt),Lt!=null&&Lt.length&&N(Lt);return}}}catch{}try{const[{parseKPISheet:re},zt]=await Promise.all([Ye(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Ye(()=>import("./xlsx-DiWaSB7x.js").then(ee=>ee.x),__vite__mapDeps([0,1]))]),Pt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,Lt=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${Pt}&headers=1`,_t=await fetch(Lt,{cache:"no-store"});if(!_t.ok)return;const we=await _t.text(),le=zt.read(we,{type:"string"}),He=le.Sheets[le.SheetNames[0]],Gt=zt.utils.sheet_to_json(He,{header:1,defval:""}),ie=re(Gt),me=So(ie,V);if(me!=null&&me.length&&!Q){G(me);const ee=Ao(ie,V);ee!=null&&ee.length&&N(ee)}}catch{}}return ft(),()=>{Q=!0}},[e.period]);const Tt=A==="en"?i:e,It=A==="en"?a:o,xt=tt.useMemo(()=>Re(s,f,y,m,A),[s,f,y,m,A]);tt.useEffect(()=>{Zn(xe).then(M)},[]);const Wt=tt.useRef(null);function ct(Q,V=2e3){clearTimeout(Wt.current),k(Q),Wt.current=setTimeout(()=>k(""),V)}tt.useEffect(()=>()=>clearTimeout(Wt.current),[]);const _=tt.useRef(!1);tt.useEffect(()=>{let Q=!1;return Pe(xe).then(V=>{Q||!V||(_.current=!0,V.meta&&o(ft=>({...ft,...V.meta})),V.total&&c(ft=>({...ft,...V.total})),V.citations&&h(V.citations),V.dotcom&&u(ft=>({...ft,...V.dotcom})),V.productsCnty&&C(V.productsCnty),V.citationsCnty&&v(V.citationsCnty),V.weeklyLabels&&x(V.weeklyLabels),V.weeklyAll&&j(ft=>({...ft,...V.weeklyAll})),V.monthlyVis&&H(V.monthlyVis),V.productsPartial?d(V.productsPartial.map(ft=>{var Nt;const jt=((Nt=V.weeklyMap)==null?void 0:Nt[ft.id])||[],Et=ft.vsComp>0?ft.score/ft.vsComp*100:100;return{...ft,weekly:jt,monthly:[],compRatio:Math.round(Et),status:Et>=100?"lead":Et>=80?"behind":"critical"}})):V.weeklyMap&&d(ft=>ft.map(jt=>{var Nt;const Et=(Nt=V.weeklyMap)==null?void 0:Nt[jt.id];return Et?{...jt,weekly:Et}:jt})))}),()=>{Q=!0}},[]),tt.useEffect(()=>{Xn(Ho,{metaKo:e,metaEn:i,total:n,products:s,citations:y,dotcom:p,productsCnty:f,citationsCnty:m,weeklyLabels:w,weeklyAll:I,selectedCountries:ut})},[e,i,n,s,y,p,f,m,w,I,ut]);async function q(){if(!E)return;const V=await tr(xe,E,{metaKo:e,metaEn:i,total:n,products:s,citations:y,dotcom:p,productsCnty:f,citationsCnty:m,weeklyLabels:w,weeklyAll:I});V&&M(V),ct(V?"저장 완료!":"저장 실패")}async function dt(){var ft;const Q=F.trim()||`${Tt.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,V=await Qn(xe,Q,{metaKo:e,metaEn:i,total:n,products:s,citations:y,dotcom:p,productsCnty:f,citationsCnty:m,weeklyLabels:w,weeklyAll:I});V&&(M(V),K(""),O(((ft=V[0])==null?void 0:ft.ts)||null)),ct(V?"새로 저장 완료!":"저장 실패")}function gt(Q){const V=Q.data;o({...Le,...V.metaKo||V.meta||{}}),a({...Le,...V.metaEn||{}}),V.total&&c(V.total),V.products&&d(V.products),V.citations&&h(V.citations),V.dotcom&&u(V.dotcom),V.productsCnty&&C(V.productsCnty),V.citationsCnty&&v(V.citationsCnty),V.weeklyLabels&&x(V.weeklyLabels),V.weeklyAll&&j(V.weeklyAll),O(Q.ts),ct(`"${Q.name}" 불러옴`)}async function $t(Q){const V=T[Q];if(!V)return;const ft=await er(xe,V.ts);ft&&M(ft),E===V.ts&&O(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:L},children:[Z&&r.jsx(si,{mode:xe,meta:Tt,setMeta:It,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:a,total:n,setTotal:c,products:s,setProducts:d,citations:y,setCitations:h,dotcom:p,setDotcom:u,productsCnty:f,setProductsCnty:C,citationsCnty:m,setCitationsCnty:v,resolved:xt,previewLang:A,setPreviewLang:g,snapshots:T,setSnapshots:M,setWeeklyLabels:x,setWeeklyAll:j,weeklyLabels:w,weeklyAll:I,generateHTML:no}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>Y(Q=>!Q),title:Z?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:Z?r.jsx(vn,{size:16}):r.jsx(wn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"월간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"월간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:Q,tab:V,lang:ft,label:jt})=>{const Et=V==="code"?U==="code":U==="preview"&&A===ft;return r.jsx("button",{onClick:()=>{S(V),ft&&g(ft)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:Et?"#1E293B":"transparent",color:Et?"#FFFFFF":"#475569",fontSize:11,fontWeight:Et?700:500,fontFamily:L,cursor:"pointer"},children:jt},Q)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[X&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:L},children:X}),r.jsxs("button",{onClick:q,disabled:!E,title:E?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:E?"pointer":"default",background:E?"#1D4ED8":"#1E293B",color:E?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4,opacity:E?1:.5},children:[r.jsx(bo,{size:11})," 저장"]}),r.jsx("input",{value:F,onChange:Q=>K(Q.target.value),placeholder:"버전 이름...",onKeyDown:Q=>Q.key==="Enter"&&dt(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none"}}),r.jsxs("button",{onClick:dt,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(bo,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>et(!W),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:W?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(Cn,{size:11})," 불러오기 ",T.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",T.length,")"]})]}),W&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:Q=>Q.stopPropagation(),children:T.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:L,textAlign:"center"},children:"저장된 버전이 없습니다"}):T.map((Q,V)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:E===Q.ts?"#1E3A5F":"#0F172A",border:E===Q.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Q.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:new Date(Q.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{gt(Q),et(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L},children:"적용"}),r.jsx("button",{onClick:()=>$t(V),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(kn,{size:10})})]},Q.ts))})]})]})]}),Ct.length>0&&r.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[r.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),Ct.map(Q=>{const V=ut.includes(Q);return r.jsx("button",{onClick:()=>wt(Q),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(V?"#22C55E":"#334155"),background:V?"#16A34A":"#1E293B",color:V?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:Q},Q)}),r.jsx("button",{onClick:Mt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),r.jsx("button",{onClick:Ft,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),r.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:ut.length===0?"전체 국가":`${ut.length}개 선택`})]}),U==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsxs("div",{style:{maxWidth:960,margin:"0 auto"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:r.jsx(li,{value:B,onChange:D,products:xt.products,productsCnty:xt.productsCnty,monthlyVis:z})}),r.jsx(ci,{meta:Tt,total:n,products:xt.products,citations:xt.citations,dotcom:p,productsCnty:xt.productsCnty,citationsCnty:xt.citationsCnty,lang:A,weeklyLabels:w,categoryStats:R,stakeholderStats:$,cntyKeys:Rt,llmModel:B,monthlyVis:z})]})}):r.jsx(di,{meta:Tt,total:n,products:xt.products,citations:xt.citations,dotcom:p,productsCnty:xt.productsCnty,citationsCnty:xt.citationsCnty,lang:A,weeklyLabels:w,categoryStats:R,stakeholderStats:$,cntyKeys:Rt,llmModel:B,monthlyVis:z}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:["v","3.1.9"]})})]})]})}Sn.createRoot(document.getElementById("root")).render(r.jsx(pi,{}));
