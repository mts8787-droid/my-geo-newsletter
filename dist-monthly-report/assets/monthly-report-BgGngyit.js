const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-DiWaSB7x.js","assets/react-CVd_-pOw.js"])))=>i.map(i=>d[i]);
import{j as r,b as ct,R as go,L as yn,D as bn,G as mo,A as xn,c as We,S as Mt,C as Je,d as Wo,e as yo,f as Vo,P as vn,h as wn,i as bo,F as Cn,T as kn}from"./react-CVd_-pOw.js";import{R as Sn}from"./react-dom-DUAWm-_Q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=o(a);fetch(a.href,n)}})();const Fn="modulepreload",Tn=function(t){return"/admin/monthly-report/"+t},xo={},Ye=function(e,o,i){let a=Promise.resolve();if(o&&o.length>0){let c=function(m){return Promise.all(m.map(h=>Promise.resolve(h).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=c(o.map(m=>{if(m=Tn(m),m in xo)return;xo[m]=!0;const h=m.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${p}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":Fn,h||(u.as="script"),u.crossOrigin="",u.href=m,d&&u.setAttribute("nonce",d),document.head.appendChild(u),h)return new Promise((f,w)=>{u.addEventListener("load",f),u.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${m}`)))})}))}function n(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return a.then(c=>{for(const s of c||[])s.status==="rejected"&&n(s.reason);return e().catch(n)})},pe="Total";function An(...t){const e=new Set([pe]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(i=>{i!=null&&i.llmModel&&e.add(i.llmModel),((i==null?void 0:i.monthlyScores)||[]).forEach(n=>Object.keys((n==null?void 0:n.byLlm)||{}).forEach(c=>e.add(c)))})}),[pe,...Array.from(e).filter(o=>o!==pe).sort((o,i)=>o.localeCompare(i))]}function Ko(t,e){return!Array.isArray(t)||!e||e===pe?t:t.map(o=>{var m;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const a=i.filter(h=>{var p;return(p=h==null?void 0:h.byLlm)==null?void 0:p[e]}),n=a[a.length-1]||null,c=a.length>=2?a[a.length-2]:null;if(!n)return o;const s=n.byLlm[e],d=(m=c==null?void 0:c.byLlm)==null?void 0:m[e];return{...o,score:s.score??o.score,prev:(d==null?void 0:d.score)??null,vsComp:s.comp??o.vsComp,allScores:s.allScores??o.allScores,monthlyScore:s.score??o.monthlyScore??o.score,monthlyPrev:(d==null?void 0:d.score)??null,monthlyScores:i.map(h=>{var u;const p=(u=h==null?void 0:h.byLlm)==null?void 0:u[e];return p?{...h,score:p.score,comp:p.comp,allScores:p.allScores}:{...h,score:null,comp:null,allScores:null}})}})}function qo(t,e){return!Array.isArray(t)||!e||e===pe?t:t.map(o=>{var h;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const a=i.filter(p=>{var u;return(u=p==null?void 0:p.byLlm)==null?void 0:u[e]}),n=a[a.length-1]||null,c=a.length>=2?a[a.length-2]:null;if(!n)return o;const s=n.byLlm[e],d=(h=c==null?void 0:c.byLlm)==null?void 0:h[e],m=s.compScore??o.compScore;return{...o,score:s.score??o.score,prev:(d==null?void 0:d.score)??null,compScore:m,compName:s.compName??o.compName,allScores:s.allScores??o.allScores,gap:+((s.score??o.score)-m||0).toFixed(2),monthlyScores:i.map(p=>{var f;const u=(f=p==null?void 0:p.byLlm)==null?void 0:f[e];return u?{...p,score:u.score,compScore:u.compScore,compName:u.compName,allScores:u.allScores}:{...p,score:null,compScore:null,compName:null,allScores:null}})}})}function En(t,e){if(!Array.isArray(t)||!e||e===pe)return(t||[]).filter(a=>!a.llmModel||a.llmModel===pe||a.llmModel==="TOTAL"||a.llmModel==="All");const o={};t.forEach(a=>{const n=`${a.date}|${a.country}|${a.division}`;o[n]||(o[n]={}),o[n][a.llmModel]=a});const i=[];return Object.values(o).forEach(a=>{const n=a[e]||a[pe]||a.TOTAL||a.All;n&&i.push(n)}),i}function Jo(t,e,o){if(!o||o===pe||!Array.isArray(e)||!e.length)return t;const i=e.filter(c=>(c.country==="TOTAL"||c.country==="TTL")&&(c.division==="TOTAL"||c.division==="TTL"||c.division==="")&&c.llmModel===o);if(!i.length)return t;i.sort((c,s)=>String(c.date).localeCompare(String(s.date)));const a=i[i.length-1],n=i.length>=2?i[i.length-2]:null;return{...t,score:a.lg??t.score,prev:(n==null?void 0:n.lg)??t.prev,vsComp:a.comp??t.vsComp}}const Q="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",$n=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function je(t){const e=$n.indexOf(t);return e>=0?e:999}function Rt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ln(t){if(!t||!String(t).trim())return"";const e=c=>Rt(c).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),o=String(t).split(/\n/),i=[];let a=[];const n=()=>{a.length&&(i.push(`<p style="margin:0 0 10px;font-size:13px;line-height:1.75;font-family:${Q};color:#222;">${a.map(e).join("<br/>")}</p>`),a=[])};for(const c of o){const s=c.trim();if(!s){n();continue}let d;(d=s.match(/^(\d+)\.(\d+)\.?\s+(.+)$/))?(n(),i.push(`<h3 style="font-size:14px;font-weight:700;margin:14px 0 6px;font-family:${Q};color:#111;">${Rt(d[1])}.${Rt(d[2])} ${e(d[3])}</h3>`)):(d=s.match(/^(\d+)\.\s+(.+)$/))?(n(),i.push(`<h2 style="font-size:16px;font-weight:700;margin:22px 0 10px;border-top:1px solid #999;padding-top:12px;font-family:${Q};color:#000;">${Rt(d[1])}. ${e(d[2])}</h2>`)):a.push(s)}return n(),i.join("")}const vo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function eo(t){return vo.filter(e=>t.includes(e)).concat(t.filter(e=>!vo.includes(e)))}const Bn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function oo(t){return Bn[String(t||"").trim().toUpperCase()]||t}function ae(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function ze(t,e){if(t==null||e==null||e===0)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Ie(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ge(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Rn(t){if(!t)return null;const e=t.toLowerCase();return e.includes("youtube")?{bg:"#FFE4E6",color:"#9F1239"}:e.includes("reddit")?{bg:"#FFEDD5",color:"#9A3412"}:null}function jn(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — BU Totals (Sheet Values)",bu:"BU",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"본부별 종합 (시트 합계 직접 사용)",bu:"본부",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},a=["MS","HS","ES"],c=a.filter(s=>t[s]).concat(Object.keys(t).filter(s=>!a.includes(s))).map(s=>{const d=t[s],m=(e||{})[s],h=d.comp>0?Math.round(d.lg/d.comp*100):100,p=ge(d.lg,d.comp)||"#FFFFFF",u=m&&m.lg!=null?ze(d.lg,m.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};font-weight:700;text-align:center;background:#F5F5F5;">${Rt(s)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;font-weight:700;background:${p};">${ae(d.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;background:${p};">${ae(d.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;font-weight:700;background:${p};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;">${u}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${Q};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${Q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.bu}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function In(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — Country Totals (Sheet Values)",country:"Country",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"국가별 종합 (시트 합계 직접 사용)",country:"국가",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},n=eo(Object.keys(t)).map(c=>{const s=t[c],d=(e||{})[c],m=s.comp>0?Math.round(s.lg/s.comp*100):100,h=ge(s.lg,s.comp)||"#FFFFFF",p=d&&d.lg!=null?ze(s.lg,d.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};font-weight:700;text-align:center;background:#F5F5F5;">${Rt(oo(c))}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;font-weight:700;background:${h};">${ae(s.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;background:${h};">${ae(s.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;font-weight:700;background:${h};">${m}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;">${p}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${Q};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${Q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.country}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function Pn(t,e,o,i){const a=o==="en"?{product:"Product",metric:"Metric",title:"Monthly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"월간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={};(e||[]).forEach(g=>{g.country&&g.product&&(n[`${g.country}|${g.product}`]=g.score)});const c={},s=new Set,d=new Set;(t||[]).forEach(g=>{!g.country||g.country==="TTL"||g.country==="TOTAL"||!g.product||(s.add(g.country),d.add(g.product),c[g.product]||(c[g.product]={}),c[g.product][g.country]=g)});const m=eo(Array.from(s)),h=Array.from(d).sort((g,x)=>je(g)-je(x));if(!h.length||!m.length)return`<p style="font-size:11px;color:#666;font-family:${Q};">데이터가 없습니다.</p>`;const p={};(i||[]).forEach(g=>{[g.kr,g.category,g.id,g.en].filter(Boolean).forEach(C=>{p[C]=g})});const f='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+m.map(g=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Rt(oo(g))}</th>`).join(""),w=[];return h.forEach((g,x)=>{const C=x%2===0?"#FFFFFF":"#FAFAFA",y=p[g],D=(y?ge(y.score,y.vsComp):null)||C,I=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${Q};text-align:center;font-weight:700;background:${D};">${y?ae(y.score):"—"}</td>`,_=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${Q};text-align:center;font-weight:700;background:${D};">${y?Ie(y.score,y.vsComp):"—"}</td>`,E=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${Q};text-align:center;background:${D};color:#1A1A1A;font-weight:600;">${y!=null&&y.compName?Rt(y.compName):"—"}</td>`,M=m.map(V=>{var P;const A=(P=c[g])==null?void 0:P[V],O=(A?ge(A.score,A.compScore):null)||C;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${Q};text-align:center;font-weight:700;background:${O};">${A?ae(A.score):"—"}</td>`}).join(""),U=m.map(V=>{var P;const A=(P=c[g])==null?void 0:P[V],O=(A?ge(A.score,A.compScore):null)||C;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${Q};text-align:center;font-weight:700;background:${O};">${A?Ie(A.score,A.compScore):"—"}</td>`}).join(""),N=m.map(V=>{var P;const A=(P=c[g])==null?void 0:P[V],O=(A?ge(A.score,A.compScore):null)||C;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${Q};text-align:center;background:${O};color:#1A1A1A;font-weight:600;">${A!=null&&A.compName?Rt(A.compName):"—"}</td>`}).join("");w.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${Q};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Rt(g)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${Q};font-weight:600;background:#F5F5F5;white-space:nowrap;">${a.lg} (%)</td>
        ${I}${M}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${Q};background:#F5F5F5;white-space:nowrap;">${a.ratio}</td>
        ${_}${U}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${Q};background:#F5F5F5;white-space:nowrap;">${o==="en"?"Top Comp":"경쟁사"}</td>
        ${E}${N}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${Q};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${Q};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.metric}</th>
        ${f}
      </tr>
    </thead>
    <tbody>
      ${w.join("")}
    </tbody>
  </table>
  </div>`}function Mn(t,e,o){const i=o==="en"?{title:"Monthly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"월간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",mom:"MoM(%p)"},a={};(e||[]).forEach(d=>{d.id&&(a[d.id]=d.score)});const n=["MS","HS","ES"],c={};(t||[]).forEach(d=>{const m=d.bu||"OTHER";c[m]||(c[m]=[]),c[m].push(d)});const s=[];return n.forEach(d=>{const m=(c[d]||[]).slice().sort((h,p)=>je(h.kr||h.category||h.id)-je(p.kr||p.category||p.id));m.forEach((h,p)=>{const u=h.prev!=null&&h.prev>0?h.prev:a[h.id],f=ze(h.score,u),w=ge(h.score,h.vsComp)||"#FFFFFF";s.push(`<tr>
        ${p===0?`<td rowspan="${m.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${d}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;">${Rt(h.kr||h.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;font-weight:700;background:${w};">${ae(h.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;background:${w};">${ae(h.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;background:${w};">${Rt(h.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;font-weight:700;background:${w};">${Ie(h.score,h.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${Q};text-align:center;">${f}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${Q};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${Q};">
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
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:center;">${c+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};">${Rt(n.source||n.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:right;font-weight:700;">${(n.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:right;">${i>0?(n.score/i*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${Q};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${Q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${a}</tbody>
  </table>`}function On(t,e){const o=(t||[]).filter(s=>s.cnty==="TTL"||s.cnty==="TOTAL"||!s.cnty);if(!o.length)return"";o.sort((s,d)=>(d.citations||0)-(s.citations||0));const i=o.slice(0,20),a=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((s,d)=>s+(d.citations||0),0),c=i.map((s,d)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:center;">${d+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};">${Rt(s.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};">${Rt(s.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:right;font-weight:700;">${(s.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:right;">${n>0?(s.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${Q};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${Q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${a.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${a.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function Nn(t,e){const o={};(t||[]).forEach(s=>{!s.cnty||s.cnty==="TTL"||s.cnty==="TOTAL"||(o[s.cnty]||(o[s.cnty]=[]),o[s.cnty].push(s))});const i=eo(Object.keys(o));if(!i.length)return"";const a=e==="en"?{title:"Citation by Country (Top 5 Domains)",country:"Country",total:"Total"}:{title:"국가별 Citation Top 5 도메인",country:"국가",total:"전체"},n=5,c=i.map(s=>{const d=o[s].sort((u,f)=>(f.citations||0)-(u.citations||0)),m=d.reduce((u,f)=>u+(f.citations||0),0),h=d.slice(0,n),p=[];for(let u=0;u<n;u++){const f=h[u],w=f?Rn(f.domain):null,g=w?`background:${w.bg};`:"",x=w?`color:${w.color};font-weight:700;`:"";p.push(`<td style="border:1px solid #999;padding:5px 8px;font-size:10px;font-family:${Q};${g}${x}">${f?`${Rt(f.domain||"")} <span style="color:#666;font-weight:400;">(${(f.citations||0).toLocaleString("en-US")})</span>`:"—"}</td>`)}return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};font-weight:700;background:#F5F5F5;text-align:center;">${Rt(oo(s))}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:right;font-weight:700;">${m.toLocaleString("en-US")}</td>
      ${p.join("")}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${Q};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${Q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${a.country}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${a.total}</th>
      ${Array.from({length:n},(s,d)=>`<th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">#${d+1}</th>`).join("")}
    </tr></thead>
    <tbody>${c}</tbody>
  </table>
  </div>`}function _n(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},a=Object.keys(o).filter(s=>o[s]!=null);if(!a.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},c=a.map(s=>{const d=o[s]||0,m=i[s]||0,h=d-m,p=h>0?"LG":h<0?"SS":"=",u=h>0?"#86EFAC":h<0?"#FCA5A5":"#FFFFFF",f=h>0?"#14532D":h<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${u};color:${f};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};font-weight:${s==="TTL"?"900":"600"};">${Rt(s)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:right;font-weight:700;">${d.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:right;">${m.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:right;font-weight:700;">${h>0?"+":""}${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${Q};text-align:center;font-weight:900;">${p}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${Q};color:#000;">${n.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${Q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${n.winner}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function zn(t,e,o){var s;if(!t||!t.length)return"";const i=((s=t[0])==null?void 0:s.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${i} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${i} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function n(d){return d>=80?"#D1FAE5":d>=50?"#FEF3C7":"#FEE2E2"}const c=t.map(d=>{const m=(d.monthRate||0).toFixed(0),h=(d.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${Q};background:#F5F5F5;">${Rt(d.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(d.monthRate)};">${m}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(d.monthActual||0).toLocaleString()} / ${(d.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(d.progressRate)};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(d.cumActual||0).toLocaleString()} / ${(d.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${Q};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${Q};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${Q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i} ${a.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function Gn(t,e){var c;if(!t||!t.length)return"";const o=((c=t[0])==null?void 0:c.targetMonth)||"3월",i=e==="en"?{title:`${o} Achievement by Organization`,org:"Organization",tasks:"Tasks",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`${o} 조직별 달성 현황`,org:"조직",tasks:"과제수",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function a(s){return s>=80?"#D1FAE5":s>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(s=>`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${Q};background:#F5F5F5;">${Rt(s.stakeholder)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${s.taskCount}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(s.monthRate)};">${(s.monthRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.monthActual||0).toLocaleString()} / ${(s.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(s.progressRate)};">${(s.progressRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.cumActual||0).toLocaleString()} / ${(s.annualGoal||0).toLocaleString()}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:16px 0 10px;font-family:${Q};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${Q};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.org}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.tasks}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function no(t,e,o,i,a={},n="ko",c=[],s=[],d={}){const{productsCntyPrev:m=[],productsPrev:h=[],categoryStats:p=null,stakeholderStats:u=null,cntyKeys:f=null,llmModel:w,monthlyVis:g}=d;if(w&&w!=="Total"&&(o=Ko(o,w),c=qo(c,w),e=Jo(e,g,w)),Array.isArray(f)&&f.length>0){const y=new Set(f.map(j=>String(j).toUpperCase()));c=(c||[]).filter(j=>j&&y.has(String(j.country).toUpperCase())),s=(s||[]).filter(j=>j&&y.has(String(j.country).toUpperCase()))}const x=n==="en"?"GEO Monthly Report":"GEO 월간 보고서",C=t.period||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${Rt(x)} — ${Rt(C)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${Q} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${Q};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${Q};">${Rt(x)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${Q};">${Rt(C)} · ${Rt(t.team||"")}</p>
    </div>

    ${t.showMonthlyReportBody!==!1&&t.monthlyReportBody?`
    <section style="margin-bottom:28px;">
      ${Ln(t.monthlyReportBody)}
    </section>`:""}

    ${e&&e.score!=null?`
    <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-bottom:8px;font-family:${Q};">
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;width:30%;">${n==="en"?"Total LG Visibility":"전체 LG Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${ae(e.score)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"Competitor (Samsung) Visibility":"경쟁사(Samsung) Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${ae(e.vsComp)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"vs Competitor":"경쟁사 대비"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${Ie(e.score,e.vsComp)}</td>
      </tr>
      ${e.prev!=null&&e.prev>0?`<tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">MoM(%p)</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${ze(e.score,e.prev)}</td>
      </tr>`:""}
    </table>`:""}

    ${jn(e==null?void 0:e.buTotals,e==null?void 0:e.buTotalsPrev,n)}
    ${In(e==null?void 0:e.countryTotals,e==null?void 0:e.countryTotalsPrev,n)}
    ${Mn(o,h,n)}
    ${Pn(c,m,n,o)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${Q};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Dn(i,n)}
    ${On(s,n)}
    ${Nn(s,n)}
    ${_n(a,n)}

    ${zn(p,n)}
    ${Gn(u,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${Q};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const Bt="#CF0652",L="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Un=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Le={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:Un,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,showTouchPointsBump:!0,bumpHighlight:[],showLlmShare:!0,llmShareTopN:10,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},Hn={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},Wn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],Vn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},Kn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],qn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],Jn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Yo=3;function Yn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Yo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function Xn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Yo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ge={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function ye(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function Zn(t){try{const e=await fetch(ye(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function Qn(t,e,o){try{const i=await fetch(ye(t).snapshots,{method:"POST",headers:Ge,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function tr(t,e,o){try{const i=await fetch(`${ye(t).snapshots}/${e}`,{method:"PUT",headers:Ge,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function er(t,e){try{const o=await fetch(`${ye(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Dt(t,e,o="ko",i=""){try{const a=await fetch("/api/generate-insight",{method:"POST",headers:Ge,body:JSON.stringify({type:t,data:e,lang:o,rules:i})});if(!a.ok){const c=await a.json().catch(()=>({}));throw new Error(c.error||`HTTP ${a.status}`)}const n=await a.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(a){throw console.error("[API] generateAIInsight failed:",a.message),a}}async function Pe(t){try{const e=await fetch(ye(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function wo(t){try{const e=await fetch(ye(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function or(t,e,o={}){const{includePromptList:i=!1,includeReadability:a=!1}=o,[n,c]=await Promise.all([Pe("dashboard").catch(()=>null),Pe("visibility").catch(()=>null)]),s={...n||{},...c||{}};if(n&&Object.keys(n).forEach(F=>{s[F]==null&&n[F]!=null&&(s[F]=n[F])}),c!=null&&c.meta&&(n!=null&&n.meta)&&(s.meta={...n.meta||{},...c.meta||{}}),!s||!Object.keys(s).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const d=s.meta||{},m=s.total||{},p=(s.productsPartial||s.products||[]).map(F=>{var J;const O=F.weekly||((J=s.weeklyMap)==null?void 0:J[F.id])||[],P=F.vsComp>0?F.score/F.vsComp*100:100;return{...F,weekly:O,monthly:F.monthly||[],compRatio:F.compRatio||Math.round(P),status:F.status||(P>=100?"lead":P>=80?"behind":"critical")}}),u=s.citations||[],f=s.dotcom||{},w=s.productsCnty||[],g=s.citationsCnty||[],x=s.weeklyLabels||null,C=s.weeklyAll||{},y=s.citationsByCnty||{},j=s.dotcomByCnty||{},D=e(p,w,u,g,"ko"),I=e(p,w,u,g,"en"),_={appendixPrompts:s.appendixPrompts||[],weeklyPR:s.weeklyPR||[],weeklyPRLabels:s.weeklyPRLabels||[],monthlyPR:s.monthlyPR||[],monthlyPRLabels:s.monthlyPRLabels||[],weeklyBrandPrompt:s.weeklyBrandPrompt||[],weeklyBrandPromptLabels:s.weeklyBrandPromptLabels||[],unlaunchedMap:s.unlaunchedMap||{},prTopicList:s.prTopicList||[],weeklyLabelsFull:s.weeklyLabelsFull||[]},E={monthlyVis:s.monthlyVis||[],includePromptList:i,includeReadability:a},M=t(d,m,D.products,D.citations,f,"ko",D.productsCnty,D.citationsCnty,x,C,y,j,E,_),U=t({...d,title:d.title||"GEO KPI Dashboard"},m,I.products,I.citations,f,"en",I.productsCnty,I.citationsCnty,x,C,y,j,E,_),N=`${d.period||""} ${d.title||"KPI Dashboard"}`.trim(),A=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:N,htmlKo:M,htmlEn:U})})).json();if(!A.ok)throw new Error(A.error||"게시 실패");return A}async function Co(t,e){try{const o=await fetch(ye(t).syncData,{method:"POST",headers:Ge,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const nr={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Ve={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},ko={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function Re(t,e,o,i,a){return a!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(n=>({...n,kr:n.en||Ve[n.kr]||n.kr,compName:n.compNameEn||ko[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||nr[n.country]||n.country,product:n.productEn||Ve[n.product]||n.product,compName:n.compNameEn||ko[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||Ve[n.category]||n.category})),citationsCnty:i.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function rr(t,{from:e="ko",to:o="en"}={}){const a=[];for(let n=0;n<t.length;n+=20){const c=t.slice(n,n+20),s=await Promise.all(c.map(async d=>{if(!d||!d.trim())return d;const m=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(d)}`,h=await fetch(m);if(!h.ok)throw new Error(`번역 실패 (${h.status})`);return(await h.json())[0].map(u=>u[0]).join("")}));a.push(...s)}return a}const me=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],ir=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function ar(t){const e=ir.indexOf(t);return e>=0?e:999}function Be(t){return ar(t)}function ro(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Xo(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[ro(o)]=o)}),e}function So(t,e){var d,m,h,p;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(h=(m=t==null?void 0:t._dashboard)==null?void 0:m.categoryStats)!=null&&h.length?[...t._dashboard.categoryStats].sort((u,f)=>Be(u.category)-Be(f.category)):null;const o=t.quantitativeGoals.rows,i=Xo((p=t.quantitativeResults)==null?void 0:p.rows);new Date().getMonth()+1;let a=e,n=me.indexOf(a);n<0&&(a="3월",n=0);const c=[...new Set(o.map(u=>u.taskCategory).filter(Boolean))],s=n>0?me[n-1]:null;return c.map(u=>{const f=o.filter(E=>E.taskCategory===u);let w=0,g=0,x=0,C=0,y=0,j=0;f.forEach(E=>{var A,F,O,P,J;const M=ro(E),U=i[M]||{},N=typeof((A=E.monthly)==null?void 0:A[a])=="number"?E.monthly[a]:0,V=typeof((F=U.monthly)==null?void 0:F[a])=="number"?U.monthly[a]:0;if(g+=N,w+=V,s){const X=typeof((O=E.monthly)==null?void 0:O[s])=="number"?E.monthly[s]:0,H=typeof((P=U.monthly)==null?void 0:P[s])=="number"?U.monthly[s]:0;j+=X,y+=H}for(let X=0;X<=n;X++){const H=me[X];typeof((J=U.monthly)==null?void 0:J[H])=="number"&&(x+=U.monthly[H])}me.forEach(X=>{var H;typeof((H=E.monthly)==null?void 0:H[X])=="number"&&(C+=E.monthly[X])})});const D=g>0?Math.round(w/g*1e3)/10:0,I=j>0?Math.round(y/j*1e3)/10:0,_=C>0?Math.round(x/C*1e3)/10:0;return{category:u,taskCount:f.length,targetMonth:a,monthRate:D,prevMonthRate:I,prevMonth:s,progressRate:_,monthActual:w,monthGoal:g,cumActual:x,annualGoal:C}}).sort((u,f)=>Be(u.category)-Be(f.category))}const sr=["MS","HS","ES","고가혁","브랜드","D2C","PR"];function Fo(t){const e=sr.indexOf(t);return e>=0?e:999}function To(t,e){var s,d;if(!((s=t==null?void 0:t.quantitativeGoals)!=null&&s.rows))return null;const o=t.quantitativeGoals.rows,i=Xo((d=t.quantitativeResults)==null?void 0:d.rows);new Date().getMonth()+1;let a=e,n=me.indexOf(a);return n<0&&(a="3월",n=0),[...new Set(o.map(m=>m.stakeholder).filter(Boolean))].map(m=>{const h=o.filter(C=>C.stakeholder===m);let p=0,u=0,f=0,w=0;h.forEach(C=>{var _,E,M;const y=ro(C),j=i[y]||{},D=typeof((_=C.monthly)==null?void 0:_[a])=="number"?C.monthly[a]:0,I=typeof((E=j.monthly)==null?void 0:E[a])=="number"?j.monthly[a]:0;u+=D,p+=I;for(let U=0;U<=n;U++){const N=me[U];typeof((M=j.monthly)==null?void 0:M[N])=="number"&&(f+=j.monthly[N])}me.forEach(U=>{var N;typeof((N=C.monthly)==null?void 0:N[U])=="number"&&(w+=C.monthly[U])})});const g=u>0?Math.round(p/u*1e3)/10:0,x=w>0?Math.round(f/w*1e3)/10:0;return{stakeholder:m,taskCount:h.length,targetMonth:a,monthRate:g,monthActual:p,monthGoal:u,progressRate:x,cumActual:f,annualGoal:w}}).sort((m,h)=>Fo(m.stakeholder)-Fo(h.stakeholder))}function lr(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}async function Zo(){const t=await Ye(()=>import("./xlsx-DiWaSB7x.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const cr=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],Xe={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},dr={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Ae={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Fe={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},pr={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(cr.map((t,e)=>[t,e]));const Qo={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},tn=new Set(Object.values(Ae)),Ao=[...new Set(Object.values(Qo))].filter(t=>!tn.has(t));Ao.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:Ao,validCodes:[...tn]});function Ze(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Xt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function ur(t,e){return Array.isArray(t)?t.length===0?(Ze(e,"invalid input: empty rows",{len:0}),!1):!0:(Ze(e,"invalid input: not an array",{type:typeof t}),!1)}function Ue(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const i=o.map(a=>String(a??"").trim().toLowerCase());return e.every(a=>i.some(n=>a instanceof RegExp?a.test(n):n===String(a).toLowerCase()))})}function fr(t,e="sync"){var a,n,c;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((a=t.products)==null?void 0:a.length)||((n=t.productsPartial)==null?void 0:n.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(c=t.weeklyLabels)!=null&&c.length&&t.weeklyLabels.every((d,m)=>d===`W${m+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const It={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR_수정",weeklyPR:"Weekly PR_수정",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},Eo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],$o=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function hr(t,e,o,i,a={}){const n=await Zo(),c=n.utils.book_new(),s=n.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);s["!cols"]=[{wch:24},{wch:50},{wch:40}],n.utils.book_append_sheet(c,s,"meta");const d=n.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);d["!cols"]=[{wch:14},{wch:10},{wch:44}],n.utils.book_append_sheet(c,d,"total");const m=n.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(g=>[g.id,g.bu,g.kr,g.score,g.prev,g.vsComp,g.compName])]);m["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],n.utils.book_append_sheet(c,m,"products");const h=n.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(g=>[g.id,g.kr,...g.weekly])]);h["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],n.utils.book_append_sheet(c,h,"weekly");const p=n.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(g=>[g.rank,g.source,g.category,g.score,g.delta,g.ratio??0])]);p["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],n.utils.book_append_sheet(c,p,"citations");const u=(a==null?void 0:a.lg)||{},f=(a==null?void 0:a.samsung)||{},w=n.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...Eo.map(g=>`LG_${g}`),...$o.map(g=>`Samsung_${g}`)],[...Eo.map(g=>u[g]??0),...$o.map(g=>f[g]??0)]]);w["!cols"]=Array(15).fill({wch:14}),n.utils.book_append_sheet(c,w,"dotcom"),n.writeFile(c,"GEO_Newsletter_템플릿.xlsx")}function te(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),a=parseFloat(i)||0;return o?+a.toFixed(2):Math.abs(a)<=1&&a!==0?+(a*100).toFixed(2):+a.toFixed(2)}function Me(t){return t==null||String(t).trim()===""?null:te(t)}function zt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function se(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const gr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function mr(t){const e=se(t);return gr[e]||e}function we(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,a=0;const n=e.match(/(\d{4})/);if(n)a=parseInt(n[1]);else{const s=e.match(/(\d{2})년/);if(s)a=2e3+parseInt(s[1]);else{const d=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);d&&(a=2e3+parseInt(d[1]))}}const c=e.match(/(\d{1,2})월/);if(c)i=parseInt(c[1]);else{const s=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(s)i=o[s[1].toLowerCase()];else{const d=e.match(/\d{4}[-\/](\d{1,2})/);d&&(i=parseInt(d[1]))}}return a?a*12+i:i}function yr(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],i=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const c=String(n[0]).trim(),s=n[1]??"";if(o.includes(c))e[c]=parseInt(s)||(c==="titleFontSize"?24:10);else if(i.includes(c)){const d=String(s).trim().toLowerCase();e[c]=d==="y"||d==="yes"||d==="true"||d==="1"}else e[c]=String(s)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(c=>c.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},c=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);c&&(e.period=`${n[c[2]]||c[2]} ${c[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const c=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${c[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function br(t){var H;console.log(`[parseVisSummary] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((v,W)=>console.log(`  row${W}: [${(v||[]).slice(0,8).map(T=>JSON.stringify(String(T||"").trim())).join(", ")}]`));const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let a=!1,n=-1;if(t.forEach((v,W)=>{if(!v[0]||String(v[0]).startsWith("[")||String(v[0]).startsWith("※")||v[0]==="key")return;const T=String(v[0]).trim();(o.includes(T)||e.includes(T))&&(a||(n=W),a=!0,e.includes(T)?i[T]=parseInt(v[1])||0:i[T]=te(v[1]))}),a&&Object.keys(i).length>=2)return console.log(`[parseVisSummary] KV path 진입 (legacy) — trigger row${n}: r[0]='${(H=t[n])==null?void 0:H[0]}' / kvObj keys:`,Object.keys(i)),{total:i};console.log("[parseVisSummary] Table path 진입");let c=t.find(v=>v.some(W=>String(W||"").trim().toUpperCase()==="LG"));c||(c=t.find(v=>v.some(W=>/^date$|^region$|^countries$|^country$|^divisions?$/i.test(String(W||"").trim()))));const s=c?c.findIndex(v=>String(v||"").trim().toUpperCase()==="LG"):-1,d=c?c.findIndex(v=>{const W=String(v||"").trim().toUpperCase();return W==="SAMSUNG"||W==="SAMSUMG"}):-1,m=c?c.findIndex(v=>/date/i.test(String(v||"").trim())):0,h=c?c.findIndex(v=>/countries|country/i.test(String(v||"").trim())):2,p=c?c.findIndex(v=>/divisions?/i.test(String(v||"").trim())):3,u=c?c.findIndex(v=>/^(llm\s*model|llm|model)$/i.test(String(v||"").trim())):-1,f=Math.max(m,h,p,u),w=s>=0?s:f>=0?f+1:4,g=d>=0?d:w+1;console.log(`[parseVisSummary] columns: date=${m} cnty=${h} div=${p} llm=${u} lg=${w}(raw=${s}) ss=${g}(raw=${d})`);const x=[];t.filter(v=>{const W=String(v[m>=0?m:0]||"").trim();return W&&!W.startsWith("[")&&!W.startsWith("※")&&!/^date$/i.test(W)&&!/^key$/i.test(W)}).forEach(v=>{const W=String(v[m>=0?m:0]||"").trim(),T=se(v[h>=0?h:2]),q=String(v[p>=0?p:3]||"").trim().toUpperCase(),k=(u>=0?String(v[u]||"").trim():"")||"Total",S=te(v[w]),$=te(v[g]);W&&S>0&&x.push({date:W,country:T,division:q,llmModel:k,lg:S,comp:$})});const y=x.filter(v=>(v.country==="TOTAL"||v.country==="TTL")&&(v.division==="TOTAL"||v.division==="TTL"||v.division==="")&&(v.llmModel==="Total"||v.llmModel==="TOTAL"||v.llmModel==="All"));y.sort((v,W)=>we(v.date)-we(W.date));const j=y[y.length-1],D=y.length>=2?y[y.length-2]:null;if(!j){const v=t.find(K=>K.some(k=>String(k||"").trim().toUpperCase()==="TOTAL"));if(!v)return Xt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(K=>K==null?void 0:K.slice(0,6))});const W=te(v[w]),T=te(v[g]),q={total:{score:W,prev:W,vsComp:T,rank:W>=T?1:2,totalBrands:12}};return x.length&&(q.monthlyVis=x),q}const I=j.lg,_=j.comp,E=D?D.lg:I,M=j.date,U=D?D.date:null;function N(v){const W={};return x.filter(T=>T.date===v&&(T.country==="TOTAL"||T.country==="TTL")&&T.division&&T.division!=="TOTAL"&&T.division!=="TTL"&&T.division!==""&&(T.llmModel==="Total"||T.llmModel==="TOTAL"||T.llmModel==="All")).forEach(T=>{W[T.division]={lg:T.lg,comp:T.comp}}),W}const V=N(M),A=U?N(U):{};function F(v){const W={};return x.filter(T=>T.date===v&&T.country&&T.country!=="TOTAL"&&T.country!=="TTL"&&(T.division==="TOTAL"||T.division==="TTL"||T.division==="")&&(T.llmModel==="Total"||T.llmModel==="TOTAL"||T.llmModel==="All")).forEach(T=>{W[T.country]={lg:T.lg,comp:T.comp}}),W}const O=F(M),P=U?F(U):{},J={total:{score:I,prev:E,vsComp:_,rank:I>=_?1:2,totalBrands:12},...Object.keys(V).length?{buTotals:V}:{},...Object.keys(A).length?{buTotalsPrev:A}:{},...Object.keys(O).length?{countryTotals:O}:{},...Object.keys(P).length?{countryTotalsPrev:P}:{}};M&&(J.derivedPeriod=M),x.length&&(J.monthlyVis=x);const X={};return x.forEach(v=>{X[v.date]=(X[v.date]||0)+1}),console.log(`[parseVisSummary] monthlyVis ${x.length}행 / unique dates:`,X,`/ TOTAL+TOTAL+Total 행: ${y.length}`),console.log("[parseVisSummary] 반환 keys:",Object.keys(J)),J}function xr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((a,n)=>console.log(`  row${n}: [${a.slice(0,8).map(c=>JSON.stringify(String(c||"").trim())).join(", ")}]`));const e={},o=[];t.forEach((a,n)=>{if(n===0)return;const c=String((a==null?void 0:a[1])||"").trim(),s=String((a==null?void 0:a[2])||"").trim().toUpperCase();c&&(e[c]=(e[c]||0)+1,(s==="TTL"||s==="TOTAL")&&o.push({date:c,cat:String((a==null?void 0:a[3])||"").trim(),llm:String((a==null?void 0:a[4])||"").trim()||"(empty)",div:String((a==null?void 0:a[0])||"").trim()}))}),console.log("[parseProductCnty] 모든 unique dates (시트 raw):",e),console.log("[parseProductCnty] TTL country 행들 (date / category / llmModel):"),o.forEach(a=>console.log(`  ${a.div} | ${a.date} | ${a.cat} | LLM='${a.llm}'`));const i=t.findIndex(a=>{const n=String(a[0]||"").trim().toLowerCase();return n==="div"||n==="division"||n==="divisions"});if(i<0){const a=t.findIndex(n=>n.some((c,s)=>s>=1&&String(c||"").trim().toUpperCase()==="LG"));return a<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${a}: [${t[a].slice(0,8).map(n=>JSON.stringify(String(n||"").trim())).join(", ")}]`),Lo(t,a))}return console.log(`[parseProductCnty] header at row${i}: [${t[i].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),Lo(t,i)}function Lo(t,e){const o=t[e],i=o.findIndex((p,u)=>u>=3&&String(p||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const a=o.findIndex(p=>/^(llm\s*model|llm|model)$/i.test(String(p||"").trim())),n=[];for(let p=i+1;p<o.length;p++){const u=String(o[p]||"").trim();u&&u.toUpperCase()!=="LG"&&n.push({name:u,col:p})}const c=t.slice(e+1).filter(p=>{const u=String(p[0]||"").trim();return u&&!u.startsWith("[")&&!u.startsWith("※")}),s={},d={};c.forEach(p=>{const u=String(p[0]||"").trim(),f=String(p[1]||"").trim(),w=String(p[2]||"").trim(),g=se(p[2])||w,x=String(p[3]||"").trim(),y=(a>=0?String(p[a]||"").trim():"")||"Total",j=te(p[i]),D=n.map(M=>({name:M.name,score:te(p[M.col])})).filter(M=>M.score>0),I=[...D].sort((M,U)=>U.score-M.score)[0]||{name:"",score:0},_=+(j-I.score).toFixed(2),E={LG:j};if(D.forEach(M=>{E[M.name]=M.score}),g==="TTL"||g==="TOTAL"){const M=Fe[x]||x.toLowerCase(),U=pr[x]||x;s[M]||(s[M]=[]),s[M].push({id:M,bu:u,kr:U,category:x,date:f,llmModel:y,score:j,vsComp:I.score,compName:I.name,allScores:E})}else{const M=`${x}|${g}`;d[M]||(d[M]=[]),d[M].push({product:x,country:g,date:f,llmModel:y,score:j,compName:I.name,compScore:I.score,gap:_,allScores:E})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(s).join(", ")||"없음"} / 국가별: ${Object.keys(d).length}건`);const m=[];for(const[p,u]of Object.entries(s)){const f=u.filter(y=>y.llmModel==="Total"||y.llmModel==="TOTAL"||y.llmModel==="All"),w=f.length?f:u;w.sort((y,j)=>we(y.date)-we(j.date));const g=w[w.length-1],x=w.length>=2?w[w.length-2].score:null;console.log(`[parseProductCnty] ${p}: dates=[${w.map(y=>y.date).join(",")}] score=${g.score} prev=${x} vsComp=${g.vsComp}`);const C=w.map(y=>{const j=u.filter(I=>I.date===y.date),D={};return j.forEach(I=>{D[I.llmModel]={score:I.score,comp:I.vsComp,allScores:I.allScores}}),{date:y.date,score:y.score,comp:y.vsComp,allScores:y.allScores,byLlm:D}});m.push({...g,prev:x,monthlyScores:C})}const h=[];for(const p of Object.values(d)){const u=p.filter(C=>C.llmModel==="Total"||C.llmModel==="TOTAL"||C.llmModel==="All"),f=u.length?u:p;f.sort((C,y)=>we(C.date)-we(y.date));const w=f[f.length-1],g=f.length>=2?f[f.length-2].score:null,x=f.map(C=>{const y=p.filter(D=>D.date===C.date),j={};return y.forEach(D=>{j[D.llmModel]={score:D.score,compScore:D.compScore,compName:D.compName,allScores:D.allScores}}),{date:C.date,score:C.score,compScore:C.compScore,compName:C.compName,allScores:C.allScores,byLlm:j}});h.push({...w,prev:g,monthlyScores:x})}return{...m.length?{productsPartial:m}:{},...h.length?{productsCnty:h}:{}}}function en(t,e=0,o){const i=o??t.length;for(let a=e;a<i;a++){const n=[];for(const c of t[a]||[]){const s=String(c||"").split(/\n/)[0].trim();/^W\d+/i.test(s)&&n.push(s.toUpperCase())}if(n.length>=2)return n}return null}const Ke={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function Bo(t,e){var g;const o=e?Ke[e]||{}:{...Ke.MS,...Ke.ES};if(!Object.keys(o).length)return Xt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const i=t.findIndex(x=>x.some(C=>String(C||"").trim()in o));if(i<0)return Xt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const a=t[i],n=t.findIndex((x,C)=>C>i&&x.some(y=>String(y||"").trim()==="TTL")),c=n>0?n+1:Math.min(i+20,t.length);let s=-1,d=-1;for(let x=i+1;x<c;x++){const C=t[x];if(!C.some(D=>String(D||"").trim().toUpperCase()==="LG"))continue;if(d<0&&(d=x),C.some(D=>{const I=String(D||"").trim().toLowerCase().replace(/[\s_-]/g,"");return I==="nonbrand"||I==="nb"})){s=x;break}}const m=s>=0?s:d>=0?d:n;if(m<0)return Xt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:i,ttlRowIdx:n});const h=t[m],p=s>=0?"LG-NB":d>=0?"LG":"TTL",u={},f=Object.keys(o).map(x=>a.findIndex(C=>String(C||"").trim()===x)).filter(x=>x>=0).sort((x,C)=>x-C);for(const[x,C]of Object.entries(o)){const y=a.findIndex(I=>String(I||"").trim()===x);if(y<0)continue;const j=f.find(I=>I>y)||y+20,D=[];for(let I=y+1;I<j&&I<h.length;I++){const _=te(h[I]);_>0&&D.push(_)}D.length&&(u[C]=D)}if(!Object.keys(u).length)return Xt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:i,dataRowIdx:m,dataRowLabel:p});const w=en(t,i,c)||((g=Object.values(u)[0])==null?void 0:g.map((x,C)=>`W${C+1}`))||[];return{weeklyMap:u,weeklyLabels:w}}function vr(t,e,o){for(const i of Object.values(t))for(const a of Object.values(i))for(const[n,c]of Object.entries(a))a[n]=c.slice(o);for(const[i,a]of Object.entries(e))e[i]=a.slice(o)}function wr(t){const{data:e,rows:o,headerIdx:i,brandIdx:a,catIdx:n,countryIdx:c,isNonBrand:s,isTotal:d,weeklyMap:m,weeklyAll:h}=t;let p=t.wCols,u=t.weeklyLabels;if(!p.length){const f=e.find(w=>String(w[a]||"").trim().toUpperCase()==="LG"&&s(w));if(f){const w=[];for(let g=a+1;g<f.length;g++)if(String(f[g]||"").trim())w.push(g);else if(w.length)break;p=w,u=en(o,0,i+1)||p.map((g,x)=>`W${x+1}`)}}return e.forEach(f=>{if(!s(f))return;const w=String(f[a]||"").trim();if(!w)return;const g=String(f[n>=0?n:0]||"").trim();if(!g)return;const x=Fe[g]||g.toLowerCase(),C=c>=0?se(f[c]):"TOTAL",y=C==="TOTAL"||C==="TTL"||!C?"Total":C;h[x]||(h[x]={}),h[x][y]||(h[x][y]={}),h[x][y][w]=p.map(j=>Me(f[j]))}),e.forEach(f=>{if(String(f[a]||"").trim().toUpperCase()!=="LG"||!s(f)||!d(f))return;const g=String(f[n>=0?n:0]||"").trim();g&&(m[Fe[g]||g.toLowerCase()]=p.map(x=>Me(f[x])))}),{wCols:p,weeklyLabels:u}}function Cr(t){const{data:e,header:o,lgIdx:i,catIdx:a,isTotal:n,weeklyMap:c}=t,s=o.findIndex(h=>{const p=String(h||"").trim().toLowerCase();return p==="date"||p==="week"||p==="period"}),d={},m=[];return e.forEach(h=>{if(!n(h))return;const p=String(h[a>=0?a:3]||"").trim();if(p){if(s>=0){const u=String(h[s]||"").trim();u&&!m.includes(u)&&m.push(u)}d[p]=d[p]||[],d[p].push(Me(h[i]))}}),Object.entries(d).forEach(([h,p])=>{c[Fe[h]||h.toLowerCase()]=p}),m.length?m:null}function kr(t){const{data:e,wCols:o,catIdx:i,isTotal:a,weeklyMap:n}=t;e.forEach(c=>{if(!a(c))return;const s=String(c[i>=0?i:0]||"").trim();s&&(n[Fe[s]||s.toLowerCase()]=o.map(d=>Me(c[d])))})}function qe(t,e){const o={};let i=[],a=-1;for(let E=0;E<Math.min(t.length,10);E++){const M=t[E];if(!M)continue;let U=0;for(let N=0;N<M.length;N++)/^w\d+$/i.test(String(M[N]||"").trim())&&U++;if(U>=2){a=E;break}}let n=t.findIndex(E=>{const M=E.slice(0,5).map(U=>String(U||"").trim().toLowerCase());return M.includes("category")||M.includes("product")});if(n<0&&a>=0&&(n=a),n<0&&(n=t.findIndex(E=>{let M=!1,U=0;for(let N=0;N<Math.min(E.length,10);N++){const V=String(E[N]||"").trim();V.toUpperCase()==="LG"?(M=!0,U++):V&&isNaN(parseFloat(V))&&U++}return M&&U>=3})),n<0)return Bo(t,e);const c=t[n],s=n+1;let d=null;if(t[s]){const E=t[s].slice(4,8).map(M=>String(M||"").trim()).filter(Boolean);E.length&&E.every(M=>/^\d{1,2}\/\d{1,2}/.test(M)||/~/.test(M)||/^\(/.test(M))&&(d=s)}const m=d!=null?d+1:s,h=t.slice(m).filter(E=>E[0]!=null&&String(E[0]).trim()),p=c.findIndex(E=>{const M=String(E||"").trim().toLowerCase();return M==="category"||M==="product"}),u=c.findIndex(E=>{const M=String(E||"").trim().toLowerCase();return M==="country"||M==="county"}),f=c.findIndex(E=>String(E||"").trim().toLowerCase()==="brand"),w=c.findIndex(E=>String(E||"").trim().toUpperCase()==="LG");let g=[];const x=a>=0?t[a]:c;for(let E=0;E<x.length;E++)/^w\d+$/i.test(String(x[E]||"").trim())&&g.push(E);if(!g.length)for(let E=0;E<c.length;E++){const M=String(c[E]||"").split(/\n/)[0].trim();/^w\d+/i.test(M)&&g.push(E)}i=g.map(E=>String(x[E]||"").trim().toUpperCase());let C=g.map((E,M)=>{const U=i[M]||`W${E}`;let N="";const V=d!=null?t[d]:a!==n&&a>=0?t[a+1]:null;if(V){const A=String(V[E]||"").trim();A&&/\d/.test(A)&&(N=A.startsWith("(")?A:`(${A})`)}return N?`${U}${N}`:U});console.log(`[parseWeekly:${e}] wLabelRow:${a} headerIdx:${n} dateRangeRow:${d} wCols:${g.length} labels:`,i.slice(0,5),"full:",C.slice(-2));function y(E){if(u<0)return!0;const M=String(E[u]||"").replace(/[()]/g,"").trim().toUpperCase();return M==="TOTAL"||M==="TTL"||M===""}const j=c.findIndex(E=>{const M=String(E||"").trim().toLowerCase().replace(/[\s_-]/g,"");return M==="b/nb"||M==="bnb"||M==="brand/nonbrand"});function D(E){if(j<0)return!0;const M=String(E[j]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return M==="nonbrand"||M==="nb"}const I={},_={data:h,rows:t,header:c,headerIdx:n,brandIdx:f,lgIdx:w,catIdx:p,countryIdx:u,wCols:g,weeklyLabels:i,weeklyMap:o,weeklyAll:I,isNonBrand:D,isTotal:y};if(f>=0){const E=wr(_);g=E.wCols,i=E.weeklyLabels}else if(w>=0){const E=Cr(_);E&&(i=E)}else g.length&&kr(_);if(i.length>0){let E=i.length;for(const V of Object.values(I))for(const A of Object.values(V))for(const F of Object.values(A)){const O=F.findIndex(P=>P!=null);O>=0&&O<E&&(E=O)}for(const V of Object.values(o)){const A=V.findIndex(F=>F!=null);A>=0&&A<E&&(E=A)}const M=12,N=i.length-E>M?i.length-M:E;N>0&&N<i.length&&(i=i.slice(N),C=C.slice(N),vr(I,o,N))}if(Object.keys(o).length){const E={weeklyMap:o};return i.length&&(E.weeklyLabels=i),C.length&&(E.weeklyLabelsFull=C),Object.keys(I).length&&(E.weeklyAll=I),E}return Bo(t,e)}function Sr(t){console.log(`[parseCitPageType] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((T,q)=>console.log(`  row${q}: [${(T||[]).slice(0,10).map(K=>JSON.stringify(String(K||"").trim())).join(", ")}]`));const e=t.findIndex(T=>T.some(k=>{const S=String(k||"").trim().toLowerCase();return S.includes("page type")||S==="country"})?!T.some(k=>/^\[.*\]$/.test(String(k||"").trim())):!1);if(e<0)return Xt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(T=>T==null?void 0:T.slice(0,6))});const o=t[e],i=o.findIndex(T=>{const q=String(T||"").replace(/[​‌‍﻿ ]/g,"").replace(/\s+/g,"").toLowerCase();return/^(llmmodel|llm|model)$/.test(q)}),a=o.findIndex(T=>/^country$|countries/i.test(String(T||"").trim())),n=o.findIndex(T=>{const q=String(T||"").replace(/[​‌‍﻿]/g,"").replace(/\s+/g,"").toLowerCase();return/^pa[gy]etype$/.test(q)||q==="type"}),c=a>=0?a:0,s=n>=0?n:c+1;console.log(`[parseCitPageType] header row${e}: [${o.slice(0,10).map(T=>JSON.stringify(String(T||"").trim())).join(", ")}]`),console.log(`[parseCitPageType] llmCol=${i} cntyCol=${a} ptCol=${n} (fallbackCnty=${c} fallbackPt=${s})`),i<0&&console.warn("[parseCitPageType] WARN: llmCol not detected — header codepoints:",o.slice(0,4).map(T=>Array.from(String(T||"")).map(q=>q.codePointAt(0).toString(16)).join(" ")));const d=[],m=new Set,h=Math.max(s+1,2);for(let T=h;T<o.length;T++){const q=String(o[T]||"").trim();if(/\bLG\b/i.test(q)){const K=T+1;if(K<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[K]||""))){const k=q.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i),S=k?k[1].toLowerCase():`col${T}`;m.has(S)||(d.push({lg:T,ss:K}),m.add(S))}}}d.length||d.push({lg:h,ss:h+1}),console.log("[parseCitPageType] monthPairs:",d.map(T=>`LG=${T.lg}/SS=${T.ss}`).join(", "));const p=new Map;let u="",f=0;t.slice(e+1).forEach(T=>{if(!T||!T.some(K=>String(K||"").trim())){u="";return}let q=i>=0?String(T[i]||"").trim():"";q?u=q:i>=0&&u&&(q=u,f++),p.set(T,q)}),f&&console.log(`[parseCitPageType] merged-cell forward-fill (Model): ${f}건 상속`);const w=t.slice(e+1).filter(T=>T&&T[c]!=null&&String(T[c]).trim());console.log(`[parseCitPageType] data ${w.length}행 (필터 통과)`);let g=d[0];for(let T=d.length-1;T>=0;T--)if(w.some(q=>zt(q[d[T].lg])>0)){g=d[T];break}if(!w.some(T=>zt(T[g.lg])>0)){for(let T=Math.min(g.lg,o.length)-1;T>=2;T--)if(w.some(q=>zt(q[T])>0)){g={lg:T-1,ss:T};break}}const x={},C={},y={},j={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},D=new Set,I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],_=d.map(T=>{const q=String(o[T.lg]||"").trim(),K=q.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return K?K[1].charAt(0).toUpperCase()+K[1].slice(1).toLowerCase():q.replace(/\s*LG\s*/i,"").trim()}),E={},M=T=>String(T||"").trim().replace(/^\((.*)\)$/,"$1").trim(),U=T=>{const q=M(T);return!q||/^(total|all|ttl)$/i.test(q)},N=T=>{const q=se(T[c]),K=String(T[s]||"").replace(/[()]/g,"").trim();let k=/page total|^ttl$/i.test(K)?"TTL":K;return k.toLowerCase()==="microsite"&&(k="Microsites"),{cnty:j[q]||q.toUpperCase(),key:k}},V=new Set;w.forEach(T=>{const q=p.get(T)||"";if(U(q))return;const{cnty:K,key:k}=N(T);d.forEach((S,$)=>{(zt(T[S.lg])>0||zt(T[S.ss])>0)&&V.add(`${K}|${k}|${$}`)})});const A=(T,q,K,k)=>V.has(`${q}|${K}|${k}`)?!T:T,F=d.indexOf(g);V.size&&console.log(`[parseCitPageType] LLM breakdown 감지: ${V.size}건 (해당 월은 Total/TTL 행 제외 + 모델 행 합산)`);const O={};function P(T){return O[T]||(O[T]={lg:{},samsung:{},dotcomByCnty:{},dotcomTrend:{}}),O[T]}w.forEach(T=>{const q=p.get(T)||"",K=U(q),k=K?"Total":q,{cnty:S,key:$}=N(T);D.add(S);const ot=zt(T[g.lg]),Z=zt(T[g.ss]);A(K,S,$,F)&&(S==="TTL"?(x[$]=(x[$]||0)+ot,C[$]=(C[$]||0)+Z):(y[S]||(y[S]={lg:{},samsung:{}}),y[S].lg[$]=(y[S].lg[$]||0)+ot,y[S].samsung[$]=(y[S].samsung[$]||0)+Z)),S==="TTL"&&d.forEach((mt,wt)=>{var tt,nt;if(!A(K,S,$,wt))return;const kt=zt(T[mt.lg]),R=zt(T[mt.ss]);if(kt>0||R>0){E[$]||(E[$]={});const ht=_[wt]||`M${wt+1}`;E[$][ht]={lg:(((tt=E[$][ht])==null?void 0:tt.lg)||0)+kt,samsung:(((nt=E[$][ht])==null?void 0:nt.samsung)||0)+R}}});const lt=P(k);S==="TTL"?(lt.lg[$]=(lt.lg[$]||0)+ot,lt.samsung[$]=(lt.samsung[$]||0)+Z,lt.dotcomTrend[$]||(lt.dotcomTrend[$]={}),d.forEach((mt,wt)=>{var tt,nt;const kt=zt(T[mt.lg]),R=zt(T[mt.ss]);if(kt>0||R>0){const ht=_[wt]||`M${wt+1}`;lt.dotcomTrend[$][ht]={lg:(((tt=lt.dotcomTrend[$][ht])==null?void 0:tt.lg)||0)+kt,samsung:(((nt=lt.dotcomTrend[$][ht])==null?void 0:nt.samsung)||0)+R}}})):(lt.dotcomByCnty[S]||(lt.dotcomByCnty[S]={lg:{},samsung:{}}),lt.dotcomByCnty[S].lg[$]=(lt.dotcomByCnty[S].lg[$]||0)+ot,lt.dotcomByCnty[S].samsung[$]=(lt.dotcomByCnty[S].samsung[$]||0)+Z)});const J=new Set;Object.values(E).forEach(T=>Object.keys(T).forEach(q=>J.add(q)));const X=I.filter(T=>J.has(T)),H={},v={};d.forEach((T,q)=>{const K=_[q];if(!K)return;const k={},S={};w.forEach($=>{const ot=p.get($)||"",Z=U(ot),{cnty:lt,key:mt}=N($);if(!A(Z,lt,mt,q))return;const wt=zt($[T.lg]),kt=zt($[T.ss]);wt<=0&&kt<=0||(lt==="TTL"?(wt>0&&(k[mt]=(k[mt]||0)+wt),kt>0&&(S[mt]=(S[mt]||0)+kt)):(v[K]||(v[K]={}),v[K][lt]||(v[K][lt]={lg:{},samsung:{}}),wt>0&&(v[K][lt].lg[mt]=(v[K][lt].lg[mt]||0)+wt),kt>0&&(v[K][lt].samsung[mt]=(v[K][lt].samsung[mt]||0)+kt)))}),Object.keys(k).length&&(H[K]={lg:k,samsung:S})}),Object.keys(v).forEach(T=>{Object.keys(v[T]).forEach(q=>{const K=v[T][q];Object.values(K.lg).some(S=>S>0)||Object.values(K.samsung).some(S=>S>0)||delete v[T][q]}),Object.keys(v[T]).length||delete v[T]});const W={};return(x.TTL||Object.keys(x).length)&&(W.dotcom={lg:x,samsung:C,byMonth:H,byCntyByMonth:v}),Object.keys(y).length&&(W.dotcomByCnty=y),Object.keys(E).length&&X.length&&(W.dotcomTrend=E,W.dotcomTrendMonths=X),(Object.keys(O).length>1||Object.keys(O).length===1&&!(O.Total||O.TOTAL||O.All))&&(W.dotcomByLlm=O),console.log(`[parseCitPageType] 결과: dotcom.lg keys=${Object.keys(x).join(",")||"(EMPTY)"} / dotcomByCnty=${Object.keys(y).join(",")||"(EMPTY)"} / dotcomTrend keys=${Object.keys(E).join(",")||"(EMPTY)"} / byLlm keys=${Object.keys(O).join(",")||"(EMPTY)"}`),W}function Fr(t){console.log(`[parseCitTouchPoints] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((k,S)=>console.log(`  row${S}: [${(k||[]).slice(0,12).map($=>JSON.stringify(String($||"").trim())).join(", ")}]`));const e=t.findIndex(k=>k.some(ot=>{const Z=String(ot||"").trim().toLowerCase();return Z==="channel"||Z==="country"})?!k.some(ot=>/^\[.*\]$/.test(String(ot||"").trim())):!1);e<0&&Xt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(k=>k==null?void 0:k.slice(0,6))});const o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let a=-1,n=-1,c=-1,s=-1;for(let k=0;k<o.length;k++){const S=String(o[k]||"").trim().toLowerCase();S==="country"&&a<0&&(a=k),S==="channel"&&n<0&&(n=k),S==="prd"&&c<0&&(c=k),/^(llm\s*model|llm|model)$/i.test(S)&&s<0&&(s=k)}const d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function m(k){const S=String(k||"").trim().toLowerCase();if(!S)return null;const $=S.match(/^(\d{1,2})월/);if($){const Z=parseInt($[1]);if(Z>=1&&Z<=12)return d[Z-1]}const ot=S.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return ot?ot[1].charAt(0).toUpperCase()+ot[1].slice(1).toLowerCase():null}const h=[],p=new Set;for(let k=0;k<o.length;k++){const S=m(o[k]);S&&!p.has(k)&&(h.push({col:k,label:S}),p.add(k))}if(e>0){const k=t[e-1];if(k)for(let S=0;S<k.length;S++){const $=m(k[S]);$&&!p.has(S)&&(h.push({col:S,label:$}),p.add(S))}}let u=2;if(h.length>0)u=Math.min(...h.map(k=>k.col));else if(a>=0&&n>=0)u=Math.max(a,n,c)+1;else{const k=t[i];k&&!String(k[0]||"").trim()?(a=1,n=2,u=3):(a=0,n=1,u=2)}if(a<0||n<0){const k=t[i],S=k&&!String(k[0]||"").trim()?1:0;a<0&&(a=S),n<0&&(n=S+1)}if(h.length>0){h.sort((ot,Z)=>ot.col-Z.col);const k=h[0],S=d.indexOf(k.label),$=new Set([a,n,c].filter(ot=>ot>=0));if(S>0&&k.col>u){let ot=S-1;for(let Z=k.col-1;Z>=u&&ot>=0;Z--){if(p.has(Z)||$.has(Z))continue;const lt=String(o[Z]||"").trim(),mt=e>0?String((t[e-1]||[])[Z]||"").trim():"";lt||mt||(h.push({col:Z,label:d[ot]}),p.add(Z),ot--)}}}h.sort((k,S)=>d.indexOf(k.label)-d.indexOf(S.label)),console.log(`[parseCitTouchPoints] header row${e}: [${(o||[]).slice(0,12).map(k=>JSON.stringify(String(k||"").trim())).join(", ")}]`),console.log(`[parseCitTouchPoints] countryCol=${a} channelCol=${n} prdCol=${c} llmCol=${s} dataStartCol=${u}`),console.log("[parseCitTouchPoints] monthLabels (sorted):",h.map(k=>`${k.label}@col${k.col}`).join(", "));const f=t.slice(i).filter(k=>k.some(S=>S!=null&&String(S).trim())),w=[],g={},x={},C={},y={},j=new Set,D={},I={},_={},E=k=>String(k||"").replace(/[()]/g,"").trim();f.forEach(k=>{const S=se(k[a]),$=E(k[n]);if(!S||!$||$.toLowerCase()==="total")return;const ot=S==="TTL"||S==="TOTAL",Z=s>=0?E(k[s]):"",lt=!Z||/^(total|all|ttl)$/i.test(Z),mt=c>=0?E(k[c]):"",wt=!mt||/^(ttl|total)$/i.test(mt.toUpperCase());h.forEach(({col:kt,label:R})=>{zt(k[kt])<=0||(ot||(D[$]||(D[$]={}),D[$][R]=!0),lt||(I[$]||(I[$]={}),I[$][R]=!0),wt||(_[$]||(_[$]={}),_[$][R]=!0))})});const M=Object.keys(D).map(k=>`${k}:[${Object.keys(D[k]).join(",")}]`).join(" ");console.log(`[parseCitTouchPoints] Country breakdown 감지 (channel × month): ${M||"(없음)"}`),console.log("[parseCitTouchPoints] LLM breakdown 감지:",Object.keys(I).map(k=>`${k}:[${Object.keys(I[k]).join(",")}]`).join(" ")||"(없음)"),console.log("[parseCitTouchPoints] PRD breakdown 감지:",Object.keys(_).map(k=>`${k}:[${Object.keys(_[k]).join(",")}]`).join(" ")||"(없음)");const U={},N={},V={},A={};f.forEach(k=>{const S=se(k[a]),$=E(k[n]),ot=c>=0?E(k[c]):"",Z=s>=0?E(k[s]):"";if(!S||!$||$.toLowerCase()==="total")return;const lt=S==="TTL"||S==="TOTAL",mt=!Z||/^(total|all|ttl)$/i.test(Z),wt=ot.toUpperCase(),kt=!ot||wt==="TTL"||wt==="TOTAL";if(lt||j.add(S),!lt&&(V[S]||(V[S]={}),V[S][$]||(V[S][$]={ttl:null,prds:[]}),!kt)){const tt={};h.forEach(({col:nt,label:ht})=>{var vt;const xt=zt(k[nt]);xt<=0||mt&&((vt=I[$])!=null&&vt[ht])||(tt[ht]=xt)}),Object.keys(tt).length&&V[S][$].prds.push({prd:ot,monthScores:tt})}U[$]||(U[$]={}),N[$]||(N[$]={});const R=lt?"TTL":S;N[$][R]||(N[$][R]={}),h.forEach(({col:tt,label:nt})=>{var Tt,St,z,at;const ht=zt(k[tt]);if(ht<=0)return;const xt=lt&&((Tt=D[$])==null?void 0:Tt[nt]),vt=mt&&((St=I[$])==null?void 0:St[nt]),Et=kt&&((z=_[$])==null?void 0:z[nt]),yt=mt?"Total":Z;!xt&&!(kt&&((at=_[$])!=null&&at[nt]))&&(A[yt]||(A[yt]={}),A[yt][$]||(A[yt][$]={}),A[yt][$][nt]=(A[yt][$][nt]||0)+ht),!(xt||vt||Et)&&(U[$][nt]=(U[$][nt]||0)+ht,N[$][R][nt]=(N[$][R][nt]||0)+ht)})});const F=k=>{for(let S=h.length-1;S>=0;S--){const $=k[h[S].label];if($>0)return $}return 0},O={};Object.entries(N).forEach(([k,S])=>{Object.entries(S).forEach(([$,ot])=>{$!=="TTL"&&Object.keys(ot).length!==0&&(O[$]||(O[$]={}),O[$][k]=ot)})}),Object.entries(U).forEach(([k,S])=>{const $=F(S);$>0&&(w.push({source:k,category:"",score:$,delta:0,ratio:0,monthScores:S}),g[k]=S)}),Object.entries(N).forEach(([k,S])=>{Object.entries(S).forEach(([$,ot])=>{if($==="TTL")return;const Z=F(ot);Z>0&&(x[$]||(x[$]=[]),x[$].push({source:k,category:"",score:Z,delta:0,ratio:0,monthScores:ot,prd:""}))})}),Object.entries(V).forEach(([k,S])=>{Object.entries(S).forEach(([$,ot])=>{ot.prds.forEach(({prd:Z,monthScores:lt})=>{const mt=F(lt);if(mt<=0)return;x[k]||(x[k]=[]),x[k].push({source:$,category:"",score:mt,delta:0,ratio:0,monthScores:lt,prd:Z}),y[Z]||(y[Z]={}),y[Z][$]||(y[Z][$]={source:$,category:"",score:0,delta:0,ratio:0,monthScores:{}});const wt=y[Z][$];wt.score+=mt,Object.entries(lt).forEach(([kt,R])=>{wt.monthScores[kt]=(wt.monthScores[kt]||0)+R})})})});const P={};new Set([...Object.keys(C),...Object.keys(y)]).forEach(k=>{let S=C[k];(!S||!S.length)&&(S=Object.values(y[k]||{})),S&&S.length&&(P[k]=S)});const X=w.reduce((k,S)=>k+S.score,0);w.sort((k,S)=>S.score-k.score),w.forEach((k,S)=>{k.rank=S+1,k.ratio=X>0?+(k.score/X*100).toFixed(1):0});for(const[k,S]of Object.entries(x)){const $=S.reduce((ot,Z)=>ot+Z.score,0);S.sort((ot,Z)=>Z.score-ot.score),S.forEach((ot,Z)=>{ot.rank=Z+1,ot.ratio=$>0?+(ot.score/$*100).toFixed(1):0})}for(const[k,S]of Object.entries(P)){const $=S.reduce((ot,Z)=>ot+Z.score,0);S.sort((ot,Z)=>Z.score-ot.score),S.forEach((ot,Z)=>{ot.rank=Z+1,ot.ratio=$>0?+(ot.score/$*100).toFixed(1):0})}const H=h.map(k=>k.label).filter(k=>Object.values(g).some(S=>S[k]>0)),v={};h.forEach(k=>{let S=0;Object.values(g).forEach($=>{S+=$[k.label]||0}),v[k.label]=S}),console.log("[parseCitTouchPoints] citTouchPointsTrend 월별 합계:",v,"→ validMonths:",H);const W={};Object.entries(V.TTL||{}).forEach(([k,S])=>{W[k]={ttl:S.ttl,latestScore:F(S.ttl||{})}}),console.log("[parseCitTouchPoints] groupMap.TTL 채널별 dump:",W),console.log("[parseCitTouchPoints] citations top 3:",w.slice(0,3).map(k=>({source:k.source,score:k.score,monthScores:k.monthScores})));const T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let q=null;if(H.length>0){const k={};Object.values(g).forEach(ot=>{Object.entries(ot).forEach(([Z,lt])=>{lt>0&&(k[Z]=(k[Z]||0)+1)})});let S=H[H.length-1];if(H.length>=2){const ot=k[S]||0,Z=H[H.length-2],lt=k[Z]||0;lt>0&&ot<lt*.5&&(S=Z)}const $=T.findIndex(ot=>S.toLowerCase().startsWith(ot.toLowerCase()));$>=0&&(q=`${T[$]} ${new Date().getFullYear()}`)}const K={};return w.length>0&&(K.citations=w),Object.keys(x).length>0&&(K.citationsByCnty=x),Object.keys(P).length>0&&(K.citationsByPrd=P),Object.keys(g).length>0&&(K.citTouchPointsTrend=g,K.citTrendMonths=H),Object.keys(O).length>0&&(K.citTouchPointsTrendByCnty=O),Object.keys(A).length>0&&(K.citTouchPointsByLlm=A,console.log("[parseCitTouchPoints] citTouchPointsByLlm LLM 모델:",Object.keys(A).join(", "))),q&&(K.citDerivedPeriod=q),K}function Tr(t){console.log(`[parseCitDomain] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((A,F)=>console.log(`  row${F}: [${(A||[]).slice(0,14).map(O=>JSON.stringify(String(O||"").trim())).join(", ")}]`));const e={GLOBAL:"TTL",TOTAL:"TTL",TTL:"TTL",ALL:"TTL",WW:"TTL",WORLD:"TTL",WORLDWIDE:"TTL",GLOBE:"TTL",글로벌:"TTL",전체:"TTL",월드:"TTL",총계:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let a=null,n=0,c=-1,s=-1,d=-1,m=-1,h=-1,p=-1,u=4;for(let A=0;A<Math.min(t.length,10);A++){const F=t[A];if(!F)continue;const O=F.some(H=>/^no$/i.test(String(H||"").trim())),P=F.some(H=>/^region$/i.test(String(H||"").trim())),J=F.some(H=>/domain|domian/i.test(String(H||"").trim())),X=F.some(H=>/^prd$/i.test(String(H||"").trim()));if(O||P||J||X){a=F,n=A+1;for(let H=0;H<F.length;H++){const v=String(F[H]||"").trim().toLowerCase();v==="prd"&&h<0&&(h=H),v==="no"&&c<0&&(c=H),v==="region"&&s<0&&(s=H),(v==="domain"||v==="domian")&&d<0&&(d=H),v==="type"&&m<0&&(m=H),/^(llm\s*model|llm|model)$/i.test(v)&&p<0&&(p=H)}console.log(`[parseCitDomain] header row${A}: [${(F||[]).slice(0,14).map(H=>JSON.stringify(String(H||"").trim())).join(", ")}]`),console.log(`[parseCitDomain] columns: prdCol=${h} noCol=${c} regionCol=${s} domainCol=${d} typeCol=${m} llmCol=${p}`);break}(String(F[0]||"").trim().startsWith("[")||!String(F[0]||"").trim())&&(n=A+1)}a||Xt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(A=>A==null?void 0:A.slice(0,6))});const f=c>=0||s>=0||h>=0;if(f)s<0&&(s=c>=0?c+1:h>=0?h+2:1),d<0&&(d=s+1),m<0&&(m=d+1),u=Math.max(d,m)+1;else if(d>=0)m=d+1,u=d+2;else{for(let A=n;A<Math.min(t.length,n+5);A++){const F=t[A];if(F){for(let O=0;O<Math.min(F.length,6);O++){const P=String(F[O]||"").trim();if(P.includes(".")&&P.length>3&&!i.test(P)){d=O,m=O+1,u=O+2;break}}if(d>=0)break}}d<0&&(d=0,m=1,u=2)}const w=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=A=>{const F=String(A||"").trim().toLowerCase();if(!F)return null;const O=F.match(/^(\d{1,2})월/);if(O){const J=parseInt(O[1]);if(J>=1&&J<=12)return w[J-1]}const P=F.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return P?P[1].charAt(0).toUpperCase()+P[1].slice(1).toLowerCase():null},x=[];if(a)for(let A=u;A<a.length;A++){const F=g(a[A]);F&&x.push({col:A,label:F})}const C=A=>/^(type|domain[_ ]type)$/i.test(String(A||"").trim()),y=A=>/^(domain|domian)$/i.test(String(A||"").trim()),j=A=>/^region$/i.test(String(A||"").trim()),D=[];a&&x.forEach(({col:A,label:F})=>{const O=A-1,P=A-2,J=A-3;J<0||C(a[O])&&y(a[P])&&j(a[J])&&D.push({regionCol:J,domainCol:P,typeCol:O,monthCol:A,label:F})}),console.log(`[parseCitDomain] domainMonthLabels: ${x.map(A=>`${A.label}@col${A.col}`).join(", ")||"(없음)"}`),console.log(`[parseCitDomain] monthBlocks (v3 layout): ${D.length}개`,D.map(A=>`${A.label}@col${A.monthCol}(r${A.regionCol}/d${A.domainCol}/t${A.typeCol})`).join(", "));const I=[],_={};let E=null;const M={};let U="TTL";const N=A=>{let F=String(A||"").trim();if(!F)return"";const O=F.match(/^\[([^\]]+)\]/);O&&(F=O[1].trim()),F=F.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const P=F.indexOf("/");return P>=0&&(F=F.slice(0,P)),F};if(D.length>=2){const A=R=>String(R||"").replace(/[()]/g,"").trim(),F={},O=D.map(()=>({region:"",domain:"",type:""}));let P="",J=0,X=0;for(let R=n;R<t.length;R++){const tt=t[R];if(!tt)continue;let nt=h>=0?A(tt[h]):"";nt?P=nt:nt=P;const ht=p>=0?A(tt[p]):"";D.forEach((xt,vt)=>{const Et=O[vt],yt=N(tt[xt.domainCol]);yt&&yt.includes(".")&&(Et.domain=yt,Et.region=String(tt[xt.regionCol]||"").trim().toUpperCase(),Et.type=String(tt[xt.typeCol]||"").trim());const Tt=String(tt[xt.monthCol]||"").replace(/,/g,"").trim(),St=parseFloat(Tt);if(isNaN(St)||St<=0)return;let z=yt,at,Ft;if(z&&z.includes("."))at=String(tt[xt.regionCol]||"").trim().toUpperCase(),Ft=String(tt[xt.typeCol]||"").trim();else if(Et.domain)z=Et.domain,at=Et.region,Ft=Et.type,J++;else{X++;return}const Y=e[at]||at||"TTL",G=`${Y}|${z}|${Ft}|${nt}|${ht}`;F[G]||(F[G]={cnty:Y,domain:z,type:Ft,prd:nt,llm:ht,monthScores:{}}),F[G].monthScores[xt.label]=(F[G].monthScores[xt.label]||0)+St})}(J||X)&&console.log(`[parseCitDomain] merged-cell forward-fill: 상속 ${J}건 / domain 없어 drop ${X}건`);const H=R=>{const tt=A(R);return!tt||/^(total|all|ttl)$/i.test(tt)},v=new Set;Object.values(F).forEach(R=>{if(H(R.llm))return;const tt=`${R.cnty}|${R.domain}|${R.type}|${R.prd}`;Object.entries(R.monthScores).forEach(([nt,ht])=>{ht>0&&v.add(`${tt}|${nt}`)})});const W={};Object.values(F).forEach(R=>{const tt=`${R.cnty}|${R.domain}|${R.type}|${R.prd}`,nt=H(R.llm);W[tt]||(W[tt]={cnty:R.cnty,domain:R.domain,type:R.type,prd:R.prd,monthScores:{}}),Object.entries(R.monthScores).forEach(([ht,xt])=>{xt>0&&v.has(`${tt}|${ht}`)!==nt&&(W[tt].monthScores[ht]=(W[tt].monthScores[ht]||0)+xt)})}),console.log(`[parseCitDomain] LLM collapse: ${Object.keys(F).length} → ${Object.keys(W).length} rows / breakdown 월 ${v.size}건`);const T=R=>/^(ttl|total|global|all|ww|world|worldwide)$/i.test(String(R||"").trim()),q=R=>{const tt=String(R||"").trim();return!tt||/^(ttl|total)$/i.test(tt)},K=R=>{for(let tt=x.length-1;tt>=0;tt--){const nt=R[x[tt].label];if(nt>0)return nt}return 0},k=R=>R.find(tt=>Object.keys(tt).length)||{},S=(R,tt)=>{Object.entries(tt).forEach(([nt,ht])=>{ht>0&&(R[nt]=(R[nt]||0)+ht)})},$={};Object.values(F).forEach(R=>{if(H(R.llm))return;const tt=A(R.llm);$[tt]||($[tt]={}),$[tt][R.domain]||($[tt][R.domain]=[{},{},{},{}]);const nt=(T(R.cnty)?0:2)+(q(R.prd)?0:1);S($[tt][R.domain][nt],R.monthScores)});const ot={};if(Object.entries($).forEach(([R,tt])=>{const nt={};Object.entries(tt).forEach(([ht,xt])=>{const vt=K(k(xt));vt>0&&(nt[ht]=vt)}),Object.keys(nt).length&&(ot[R]=nt)}),Object.keys(ot).length){const R={};Object.values(W).forEach(nt=>{R[nt.domain]||(R[nt.domain]=[{},{},{},{}]);const ht=(T(nt.cnty)?0:2)+(q(nt.prd)?0:1);S(R[nt.domain][ht],nt.monthScores)});const tt={};Object.entries(R).forEach(([nt,ht])=>{const xt=K(k(ht));xt>0&&(tt[nt]=xt)}),Object.keys(tt).length&&(ot.Total=tt),console.log("[parseCitDomain] citDomainByLlm 모델:",Object.keys(ot).join(", ")),Object.keys(ot).length>1&&(E=ot)}Object.values(W).forEach(R=>{let tt=0;for(let vt=x.length-1;vt>=0;vt--){const Et=R.monthScores[x[vt].label];if(Et>0){tt=Et;break}}if(tt<=0)return;M[R.cnty]=(M[R.cnty]||0)+1,I.push({cnty:R.cnty,rank:M[R.cnty],domain:R.domain,type:R.type,citations:tt,monthScores:R.monthScores,prd:R.prd});const nt=`${R.cnty}|${R.domain}`,ht=!R.prd||/^(ttl|total)$/i.test(R.prd);_[nt]||(_[nt]={cnty:R.cnty,domain:R.domain,type:R.type,months:{},_ttlMonths:{}});const xt=_[nt];ht?(xt.type=R.type||xt.type,Object.entries(R.monthScores).forEach(([vt,Et])=>{Et>0&&(xt._ttlMonths[vt]?xt.months[vt]+=Et:(xt.months[vt]=Et,xt._ttlMonths[vt]=!0))})):Object.entries(R.monthScores).forEach(([vt,Et])=>{!(Et>0)||xt._ttlMonths[vt]||(xt.months[vt]=(xt.months[vt]||0)+Et)})}),Object.values(_).forEach(R=>{delete R._ttlMonths});const Z={TTL:{},CNTY:{}};Object.entries(_).forEach(([R,tt])=>{const nt=R.startsWith("TTL|")?"TTL":"CNTY";Object.entries(tt.months).forEach(([ht,xt])=>{xt>0&&(Z[nt][ht]=(Z[nt][ht]||0)+1)})}),console.log("[parseCitDomain] trend 월 커버리지 (키 수) — TTL:",Z.TTL,"/ CNTY:",Z.CNTY);const lt={},mt={};Object.values(F).forEach(R=>{lt[R.cnty]=(lt[R.cnty]||0)+1,mt[R.prd||"(empty)"]=(mt[R.prd||"(empty)"]||0)+1}),console.log(`[parseCitDomain] aggMap entries: ${Object.keys(F).length} / cnty dist:`,lt,"/ prd dist:",mt);const wt=Object.values(F).filter(R=>R.cnty==="TTL"&&R.monthScores.May>0).slice(0,5);console.log(`[parseCitDomain] May cnty=TTL sample (${wt.length}건):`,wt.map(R=>`${R.domain}|prd='${R.prd}'|type='${R.type}'|May=${R.monthScores.May}`).join(" / "));const kt={};I.forEach(R=>{kt[R.cnty]||(kt[R.cnty]=[]),kt[R.cnty].push(R)}),Object.values(kt).forEach(R=>{R.sort((tt,nt)=>nt.citations-tt.citations),R.forEach((tt,nt)=>{tt.rank=nt+1})})}else for(let A=n;A<t.length;A++){const F=t[A];if(!F)continue;const O=String(F[d]||"").trim(),P=String(F[m]||"").trim(),J=h>=0?String(F[h]||"").trim():"";if(!f&&(!O||!O.includes("."))){const W=String(F[d]||"").trim().toUpperCase(),T=e[W]||(o.includes(W)?W:null);T&&(!P||P==="")&&(U=T);continue}if(!O||!O.includes("."))continue;let X="TTL";if(f&&s>=0){const W=String(F[s]||"").trim().toUpperCase();X=e[W]||W}else f||(X=U);let H=0;if(x.length>0)for(let W=x.length-1;W>=0;W--){const T=String(F[x[W].col]||"").replace(/,/g,"").trim(),q=parseFloat(T);if(!isNaN(q)&&q>0){H=q;break}}else for(let W=F.length-1;W>=u;W--){const T=String(F[W]||"").replace(/,/g,"").trim();if(!T)continue;const q=parseFloat(T);if(!isNaN(q)&&q>0){H=q;break}}if(x.length>0){const W={};if(x.forEach(({col:T,label:q})=>{const K=String(F[T]||"").replace(/,/g,"").trim(),k=parseFloat(K);!isNaN(k)&&k>0&&(W[q]=k)}),Object.keys(W).length>0){const T=`${X}|${O}`;_[T]={cnty:X,domain:O,type:P,months:W}}}const v={};x.length>0&&x.forEach(({col:W,label:T})=>{const q=String(F[W]||"").replace(/,/g,"").trim(),K=parseFloat(q);!isNaN(K)&&K>0&&(v[T]=K)}),H>0&&(M[X]=(M[X]||0)+1,I.push({cnty:X,rank:M[X],domain:O,type:P,citations:H,monthScores:v,prd:J}))}const V={};if(I.length>0&&(V.citationsCnty=I),Object.keys(_).length>0){V.citDomainTrend=_;const A=x.map(F=>F.label).filter(F=>Object.values(_).some(O=>O.months[F]>0));V.citDomainMonths=A}return E&&(V.citDomainByLlm=E),V}function Ro(t,e){const o=Ue(t,[/^type$/,/^(county|country)$/]);if(o<0)return Xt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(y=>y==null?void 0:y.slice(0,6))});const i=t[o];let a=-1,n=-1,c=-1,s=-1,d=4;for(let y=0;y<i.length;y++){const j=String(i[y]||"").trim().toLowerCase();j==="type"&&a<0&&(a=y),(j==="county"||j==="country")&&n<0&&(n=y),(j==="topic"||j==="topoc")&&c<0&&(c=y),j==="brand"&&s<0&&(s=y)}d=Math.max(a,n,c,s)+1;const m=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,p=[],u=[o];for(let y=0;y<=o;y++)y!==o&&u.push(y);for(const y of u){if(p.length>0)break;const j=t[y];if(j)for(let D=d;D<j.length;D++){const I=String(j[D]||"").split(/\n/)[0].trim();I&&(m.test(I)||h.test(I))&&p.push({col:D,label:I})}}const f=t.slice(o+1),w=[];f.forEach(y=>{if(!y)return;const j=String(y[a]||"").trim(),D=se(y[n]),I=String(y[c]||"").trim(),_=String(y[s]||"").trim();if(!I||!_)return;const E={};let M=0;p.forEach(({col:U,label:N})=>{const V=te(y[U]);V>0&&(E[N]=V,M=V)}),(Object.keys(E).length>0||I)&&w.push({type:j,country:D,topic:I,brand:_,scores:E,latestScore:M})});const g=e==="weekly"?"weeklyPR":"monthlyPR",x=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",C={};return w.length>0&&(C[g]=w),p.length>0&&(C[x]=p.map(y=>y.label)),C}function jo(t,e){const o=t.findIndex(C=>C?C.some(y=>/steakholders|stakeholders/i.test(String(y||"").trim()))||C.some(y=>/^type$/i.test(String(y||"").trim()))&&C.some(y=>/topoc|topic/i.test(String(y||"").trim())):!1);if(o<0)return Xt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(C=>C==null?void 0:C.slice(0,6))});const i=t[o];let a=-1,n=-1,c=-1,s=-1,d=4;for(let C=0;C<i.length;C++){const y=String(i[C]||"").trim().toLowerCase();(y==="steakholders"||y==="stakeholders")&&a<0&&(a=C),y==="type"&&n<0&&(n=C),(y==="country"||y==="county")&&c<0&&(c=C),(y==="topoc"||y==="topic")&&s<0&&(s=C)}d=Math.max(a,n,c,s)+1;const m=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,h=/^w\d+/i,p=[];for(let C=d;C<i.length;C++){const y=String(i[C]||"").split(/\n/)[0].trim();y&&(m.test(y)||h.test(y))&&p.push({col:C,label:y})}const u=t.slice(o+1),f=[];u.forEach(C=>{if(!C)return;const y=String(C[a]||"").trim(),j=String(C[n]||"").trim(),D=se(C[c]),I=String(C[s]||"").trim();if(!I||!y)return;const _={};let E=0;p.forEach(({col:M,label:U})=>{const N=te(C[M]);N>0&&(_[U]=N,E=N)}),f.push({stakeholder:y,type:j,country:D,topic:I,scores:_,latestScore:E})});const w=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",g=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",x={};return f.length>0&&(x[w]=f),p.length>0&&(x[g]=p.map(C=>C.label)),x}function Ar(t){const e=Ue(t,[/^prompts?$/,/^country$/]);if(e<0)return Xt("parseAppendix","header not found (need Prompts + Country)",{firstRows:t.slice(0,5).map(s=>s==null?void 0:s.slice(0,6))});const o=t[e],i={},a=["country","prompts","division","category","launched","branded","cej","topic"];for(let s=0;s<o.length;s++){const d=String(o[s]||"").trim().toLowerCase();a.includes(d)&&!i[d]&&(i[d]=s)}const n=t.slice(e+1),c=[];return n.forEach(s=>{if(!s)return;const d=String(s[i.prompts]||"").trim();d&&c.push({country:se(s[i.country]),prompt:d,division:String(s[i.division]||"").trim(),category:String(s[i.category]||"").trim(),launched:String(s[i.launched]||"").trim(),branded:String(s[i.branded]||"").trim(),cej:String(s[i.cej]||"").trim(),topic:String(s[i.topic]||"").trim()})}),c.length>0?{appendixPrompts:c}:{}}const fe={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function Er(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(fe).length}건`),{unlaunchedMap:{...fe}};const e=Ue(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((p,u)=>console.log(`  row${u}:`,p==null?void 0:p.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(fe).length}건`),{unlaunchedMap:{...fe}};const o=t[e];let i=-1,a=-1,n=-1;for(let p=0;p<o.length;p++){const u=String(o[p]||"").trim().toLowerCase();i<0&&(u==="country"||u==="county")&&(i=p),a<0&&(u==="category"||u==="product"||u==="제품"||u==="카테고리")&&(a=p),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(u)&&(n=p)}if(i<0||a<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:a,statusCol:n,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(fe).length}건`),{unlaunchedMap:{...fe}};const c=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),s={...fe};let d=0,m=0,h=0;return t.slice(e+1).forEach((p,u)=>{const f=e+1+u;try{if(!p){h++;return}const w=String(p[n]||"").trim();if(!w){h++;return}d++;const g=w.toLowerCase().replace(/\s+/g," ");if(!c.has(g)&&!c.has(g.replace(/\s/g,"")))return;const x=mr(p[i]),C=String(p[a]||"").trim();if(!x||!C){console.warn("[parseUnlaunched] row skipped",{rowIdx:f,raw:{country:p[i],category:p[a],status:p[n]},parsed:{country:x,rawCategory:C}}),h++;return}const y=C.toUpperCase(),j=Qo[y]||y;s[`${x}|${j}`]=!0,j!==y&&(s[`${x}|${y}`]=!0),m++}catch(w){let g;try{g={country:p==null?void 0:p[i],category:p==null?void 0:p[a],status:p==null?void 0:p[n]}}catch{g=p}console.warn("[parseUnlaunched] row error",{rowIdx:f,raw:g,error:w==null?void 0:w.message}),h++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${m}건 + 디폴트 ${Object.keys(fe).length}건 + skip ${h}건 / 총행 ${d} / 최종키 ${Object.keys(s).length}개`),{unlaunchedMap:s}}function $r(t){const e=Ue(t,[/^bu$/,/topic/]);if(e<0)return Xt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(h=>h==null?void 0:h.slice(0,6))});const o=t[e];let i=-1,a=-1,n=-1,c=-1,s=-1;for(let h=0;h<o.length;h++){const p=String(o[h]||"").trim().toLowerCase();i<0&&p==="bu"&&(i=h),a<0&&p.includes("topic")&&p.includes("대시보드")&&(a=h),n<0&&(p==="explanation"||p==="설명")&&(n=h),c<0&&p.includes("기존")&&(c=h),s<0&&p.includes("topic")&&p.includes("row")&&(s=h)}a<0&&(a=1),n<0&&(n=2);const d=[];let m="";return t.slice(e+1).forEach(h=>{if(!h)return;const p=String(h[i]||"").trim();p&&(m=p);const u=String(h[a]||"").trim();if(!u)return;const f=String(h[n]||"").trim(),w=c>=0?String(h[c]||"").trim():"",g=s>=0?String(h[s]||"").trim():"";d.push({bu:m,topic:u,explanation:f,oldTopic:w,topicRow:g})}),d.length>0?{prTopicList:d}:{}}function Lr(t,e){var o;if(!ur(e,`parseSheetRows:${t}`))return{};try{if(t===It.meta)return yr(e);if(t===It.visSummary)return br(e);if(t===It.productMS||t===It.productHS||t===It.productES)return xr(e);if(t===It.weeklyMS)return qe(e,"MS");if(t===It.weeklyHS)return qe(e,"HS");if(t===It.weeklyES)return qe(e,"ES");if(t===It.monthlyPR)return Ro(e,"monthly");if(t===It.weeklyPR)return Ro(e,"weekly");if(t===It.monthlyBrandPrompt)return jo(e,"monthly");if(t===It.weeklyBrandPrompt)return jo(e,"weekly");if(t===It.citPageType)return Sr(e);if(t===It.citTouchPoints)return Fr(e);if(t===It.citDomain)return Tr(e);if(t===It.appendix)return Ar(e);if(t===It.unlaunched)return Er(e);if(t===It.prTopicList)return $r(e)}catch(i){return Ze(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:i==null?void 0:i.message,stack:(o=i==null?void 0:i.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Xt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(It)})}function Br(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Rr(t,e){var p;const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,a=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!a.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${a.status}).`);const n=await a.text(),c=await Zo(),s=c.read(n,{type:"string"}),d=s.Sheets[s.SheetNames[0]],m=c.utils.sheet_to_json(d,{header:1,defval:""}),h=n.split(`
`).length;return console.log(`[fetchSheet] "${e}": csv ${n.length}자/${h}줄 → ${m.length}행 × ${((p=m[0])==null?void 0:p.length)??0}컬럼`),m}async function jr(t,e){var n,c;const o=Object.values(It),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const a=await Promise.allSettled(o.map(s=>Rr(t,s).then(d=>({name:s,rows:d}))));for(let s=0;s<o.length;s++){const d=o[s],m=a[s];if(e==null||e(`"${d}" 처리 중... (${s+1}/${o.length})`),m.status==="rejected"){console.warn(`"${d}" 시트 건너뜀:`,(n=m.reason)==null?void 0:n.message);continue}try{const{rows:h}=m.value,p=Lr(d,h);for(const[u,f]of Object.entries(p))u==="weeklyLabels"||u==="weeklyLabelsFull"?i[u]||(i[u]=f):Array.isArray(f)&&Array.isArray(i[u])?i[u]=[...i[u],...f]:f&&typeof f=="object"&&!Array.isArray(f)&&i[u]&&typeof i[u]=="object"&&!Array.isArray(i[u])?i[u]={...i[u],...f}:i[u]=f}catch(h){console.warn(`"${d}" 시트 처리 실패:`,h.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const s=[];for(const[d,m]of Object.entries(i.weeklyAll)){const h=m.Total||m.TTL||{},p=h.LG||h.lg||[],u=Object.entries(h).filter(([C])=>C!=="LG"&&C!=="lg"),f=p.length?p[p.length-1]:0,w=p.length>=5?p[0]:0;let g="",x=0;for(const[C,y]of u){const j=y.length?y[y.length-1]:0;j>x&&(x=j,g=C)}f>0&&s.push({id:d,bu:dr[d]||"HS",kr:Xe[d]||d,category:d,date:((c=i.meta)==null?void 0:c.period)||"",score:f,prev:w,vsComp:x,compName:g,allScores:{LG:f,...g?{[g]:x}:{}}})}if(s.length&&(i.productsPartial=s,console.log(`[SYNC] weeklyAll에서 ${s.length}개 제품 생성:`,s.map(d=>`${d.id}=${d.score}`).join(", "))),!i.productsCnty){const d=[];for(const[m,h]of Object.entries(i.weeklyAll)){const p=Xe[m]||m;for(const[u,f]of Object.entries(h)){if(u==="Total"||u==="TTL")continue;const w=f.LG||f.lg||[],g=w.length?w[w.length-1]:0;if(g<=0)continue;const x=w.length>=2?w[0]:0;let C="",y=0;const j={LG:g};for(const[I,_]of Object.entries(f)){if(I==="LG"||I==="lg")continue;const E=_.length?_[_.length-1]:0;j[I]=E,E>y&&(y=E,C=I)}const D=+(g-y).toFixed(1);d.push({product:p,country:u,score:g,prev:x,compName:C,compScore:y,gap:D,allScores:j})}}d.length&&(i.productsCnty=d,console.log(`[SYNC] weeklyAll에서 productsCnty ${d.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((d,m)=>d===`W${m+1}`)){const d=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(m=>String(m).split(/\n/)[0].trim().toUpperCase()).filter(m=>/^W\d+/.test(m));if(d.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",d),i.weeklyLabels=d;const m=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(h=>{const p=String(h).split(/\n/);return p[0].trim().toUpperCase()+(p[1]?p[1].trim():"")}).filter(h=>/^W\d+/.test(h));m.length&&(i.weeklyLabelsFull=m)}}if(i._syncIssues=fr(i,"syncFromGoogleSheets"),typeof localStorage<"u")try{const s=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");s.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:i._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(s.slice(0,10)))}catch{}return i}const At={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none",boxSizing:"border-box"};function Ir(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),a=Math.floor(i/24);return a>=1?`${a}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Pr({savedAt:t,ageMs:e,stale:o,style:i}){const a=t==null,n=a?"#1E293B":o?"#7F1D1D":"#064E3B",c=a?"#94A3B8":o?"#FCA5A5":"#86EFAC",s=a?"#334155":o?"#B91C1C":"#047857",d=a?"○":o?"⚠️":"●",m=a?"동기화 정보 없음":`데이터 최신화: ${Ir(e)}`,h=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:h,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:c,border:`1px solid ${s}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:L,whiteSpace:"nowrap",...i||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:d}),m]})}function Mr({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Zt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",ee="#CF0652",he="#94A3B8",De={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},on={LG:ee,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},Io=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Qe={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Dr=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Oe={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},Or={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},Nr={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},io=90;function ao(t,e){const o=De[e]||De.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function _r(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function zr(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function to(t){const e=String(t||"").trim().toUpperCase();return Oe[e]||t}function Gr(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?Or[o]||Oe[o]||t:Nr[o]||Oe[o]||t}let Ur=0;function Po(t,e,o,i,a,n={}){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const c=n.fadeBeforeIdx!=null?n.fadeBeforeIdx:-1,s=n.baselineLabel||"",d=n.labelOffsetY||0,m=n.lineOffsetY||0,h=Ur++,p={t:18,r:10,b:20,l:10},u=o-p.l-p.r,f=i-p.t-p.b,w=t.filter(N=>N!=null);if(!w.length){let N=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const V=t.length,A=V>1?V-1:1;return N+=t.map((F,O)=>`<text x="${(p.l+O/A*u).toFixed(1)}" y="${p.t+f+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Zt}">${e[O]||""}</text>`).join(""),N+="</svg>",N}const g=Math.min(...w)-1,x=Math.max(...w)+1,C=x-g||1,y=t.length,j=y>1?y-1:1,D=t.map((N,V)=>p.l+V/j*u),I=[];t.forEach((N,V)=>{N!=null&&I.push({x:D[V],y:p.t+(1-(N-g)/C)*f,v:N,idx:V})});let _=`<svg viewBox="0 0 ${o} ${i+12}" width="100%" height="${i+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const E=c>0?I.filter(N=>N.idx<c):[],M=c>0?I.filter(N=>N.idx>=c):I,U="#64748B";if(M.length>=2){const N=M.map((A,F)=>`${F?"L":"M"}${A.x.toFixed(1)},${A.y.toFixed(1)}`).join(" "),V=N+` L${M[M.length-1].x.toFixed(1)},${p.t+f} L${M[0].x.toFixed(1)},${p.t+f} Z`;_+=`<defs><linearGradient id="lg${h}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${a}" stop-opacity="0.03"/>
    </linearGradient></defs>`,_+=`<path d="${V}" fill="url(#lg${h})"/>`,_+=`<path d="${N}" stroke="${a}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(E.length>=2){const N=E.map((V,A)=>`${A?"L":"M"}${V.x.toFixed(1)},${V.y.toFixed(1)}`).join(" ");_+=`<path d="${N}" stroke="${U}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(_+=I.map(N=>{const V=c>0&&N.idx<c;return c>0&&N.idx===c?`<circle cx="${N.x.toFixed(1)}" cy="${N.y.toFixed(1)}" r="4" fill="#000" stroke="${a}" stroke-width="3"/>`:`<circle cx="${N.x.toFixed(1)}" cy="${N.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${V?U:a}" stroke-width="2" opacity="${V?.85:1}"/>`}).join(""),_+=I.map(N=>{const A=c>0&&N.idx<c?U:a;return`<text x="${N.x.toFixed(1)}" y="${Math.max(N.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${A}" font-family="${Zt}">${N.v.toFixed(1)}</text>`}).join(""),c>0&&s){const N=D[c];_+=`<line x1="${N.toFixed(1)}" y1="${(p.t+m).toFixed(1)}" x2="${N.toFixed(1)}" y2="${(p.t+f+m).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const V=N>o*.7,A=(V?p.t+f+1:p.t+8)+d;_+=`<text x="${(V?N-5:N+5).toFixed(1)}" y="${A.toFixed(1)}" text-anchor="${V?"end":"start"}" font-size="9" fill="#64748B" font-family="${Zt}">${s}</text>`}return _+=t.map((N,V)=>`<text x="${D[V].toFixed(1)}" y="${p.t+f+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Zt}">${e[V]||""}</text>`).join(""),_+="</svg>",_}function Te(t,e){return on[t]||Io[e%Io.length]}function nn(t,e,o,i,a={}){const n=Object.keys(t);if(!n.length||!e.length)return"";const c=a.fadeBeforeIdx!=null?a.fadeBeforeIdx:-1,s=a.baselineLabel||"";let d=1/0,m=-1/0;if(n.forEach(y=>(t[y]||[]).forEach(j=>{j!=null&&(j<d&&(d=j),j>m&&(m=j))})),!isFinite(d))return"";const h=Math.max((m-d)*.15,2);d=Math.max(0,d-h),m=Math.min(100,m+h);const p=m-d||1,u=e.length,f=8,w=8,g=i-f-w,x="#64748B";let C="";for(let y=0;y<=4;y++){const j=f+y/4*g;C+=`<line x1="0" y1="${j.toFixed(1)}" x2="${o}" y2="${j.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(n.forEach((y,j)=>{const D=t[y]||[],I=Te(y,j),_=y==="LG",E=_?2.5:1.5,M=_?1:.7,U=[];if(D.forEach((F,O)=>{if(F==null)return;const P=(O+.5)/u*o,J=f+(1-(F-d)/p)*g;U.push({x:P,y:J,v:F,idx:O})}),!U.length)return;const N=c>0?U.filter(F=>F.idx<c):[],V=c>0?U.filter(F=>F.idx>=c):U;function A(F,O,P,J){if(F.length>=2){const X=F.map((H,v)=>`${v?"L":"M"}${H.x.toFixed(1)},${H.y.toFixed(1)}`).join(" ");C+=`<path d="${X}" stroke="${O}" fill="none" stroke-width="${E}" stroke-linecap="round" stroke-linejoin="round" opacity="${P}"/>`}F.forEach(X=>{J&&X.idx===c||(C+=`<circle cx="${X.x.toFixed(1)}" cy="${X.y.toFixed(1)}" r="${_?3.5:2.5}" fill="#fff" stroke="${O}" stroke-width="${_?2:1.5}" opacity="${P}"/>`)})}if(A(N,x,.85,!1),A(V,I,M,_&&c>0),_&&c>0){const F=U.find(O=>O.idx===c);F&&(C+=`<circle cx="${F.x.toFixed(1)}" cy="${F.y.toFixed(1)}" r="4.5" fill="#000" stroke="${I}" stroke-width="3"/>`)}}),c>0&&s){const y=(c+.5)/u*o;C+=`<line x1="${y.toFixed(1)}" y1="${f}" x2="${y.toFixed(1)}" y2="${f+g}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const j=y>o*.7;C+=`<text x="${(j?y-5:y+5).toFixed(1)}" y="${(f+12).toFixed(1)}" text-anchor="${j?"end":"start"}" font-size="11" fill="#64748B" font-family="${Zt}">${s}</text>`}return`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${C}</svg>`}function Hr({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:a,monthlyVis:n,total:c,meta:s,wLabels:d}){const m={monthlyVis:n};return`
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
${(()=>{const h=p=>JSON.stringify(p).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?h(e):"{}"};
var _products=${h(o.map(p=>({id:p.id,bu:p.bu,kr:p.kr,en:p.en||p.kr,category:p.category||"",date:p.date||"",status:p.status,score:p.score||0,prev:p.prev||0,vsComp:p.vsComp||0,compName:p.compName||"",compRatio:p.compRatio||0,allScores:p.allScores||{},monthlyScores:p.monthlyScores||[]})))};
var _productsCnty=${h(i||[])};
var _unlaunchedMap=${h(a)};
var _PROD_TO_UL=${h(Ae)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${h((m==null?void 0:m.monthlyVis)||[])};
var _total=${h(c)};
var _meta={period:${h(s.period||"")},reportNo:${h(s.reportNo||"")},totalInsight:${h(s.totalInsight||"")}};
var _wLabels=${h(d)};`})()}
${(()=>{const h=p=>JSON.stringify(p).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${h(on)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${ee}';
var _FONT=${h(Zt)};
var _COMP='${he}';
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
  if(!ttl.length)return null;
  ttl.sort(function(a,b){return _dateMi(a.date)-_dateMi(b.date)});
  var idx=-1;
  ttl.forEach(function(r,i){if(_dateMi(r.date)===_curMonthIdxIn12)idx=i});
  if(idx<0)return null;
  var cur=ttl[idx];var prev=idx>0?ttl[idx-1]:null;
  return{
    score:+(Number(cur.lg)||0).toFixed(1),
    prev:+(Number(prev?prev.lg:cur.lg)||0).toFixed(1),
    vsComp:+(Number(cur.comp)||0).toFixed(1),
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
`}const Wr=["audio","rac","aircare"];function Vr(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return Wr.includes(String(e).toLowerCase())}function Kr(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function Ne(t,e){if(!Vr(t)||!e)return-1;const o=Kr(t);if(o>0){const i=e.findIndex(a=>{const n=String(a||"").trim().match(/^W?(\d+)$/i);return n&&parseInt(n[1],10)===o});if(i>=0)return i}return e.findIndex(i=>{const a=String(i||"").trim();return/^Apr(il)?$/i.test(a)||a==="4월"})}const _e={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function qr(t){const e=_e[t]||_e.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function rn(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),i=_e[e]||_e.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.racair}</p>`:""}function Jr(t,e,o,i,a,n,c){if(!e||!Object.keys(e).length)return"";const d=["MS","HS","ES"].map(m=>{const h=t.filter(u=>u.bu===m);if(!h.length)return"";const p=h.map(u=>{var N,V;const f=((N=e[u.id])==null?void 0:N.Total)||{},w=Object.keys(f).sort((A,F)=>{var J,X;if(A==="LG")return-1;if(F==="LG")return 1;const O=((J=f[A])==null?void 0:J[f[A].length-1])||0;return(((X=f[F])==null?void 0:X[f[F].length-1])||0)-O});if(!w.length)return"";const g=ao(u.status,a),x=(V=f.LG)==null?void 0:V[f.LG.length-1],C=w.map((A,F)=>{const O=Te(A,F),P=A==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${O};opacity:${P?1:.7}"></i><span style="font-size:13px;color:${P?"#1A1A1A":"#94A3B8"};font-weight:${P?700:400}">${A}</span></span>`}).join(""),y=o.length,j=`<colgroup><col style="width:${io}px">${o.map(()=>"<col>").join("")}</colgroup>`,D=Ne(u,o),I=`<tr><td style="padding:0;border:0"></td><td colspan="${y}" style="padding:8px 0;border:0">${nn(f,o,y*80,180,{fadeBeforeIdx:D,baselineLabel:D>0?"*Baseline 재설정":""})}</td></tr>`,_=`<tr><td style="padding:0;border:0"></td><td colspan="${y}" style="padding:4px 0 6px;border:0">${C}</td></tr>`,E=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(A=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${A}</th>`).join("")}</tr>`,M=w.map((A,F)=>{const O=Te(A,F),P=A==="LG",J=o.map((X,H)=>{var W;const v=(W=f[A])==null?void 0:W[H];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${v!=null?P?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${P?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${v!=null?v.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${P?"#FFF8F9":F%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${P?700:500};color:${O};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${O};margin-right:4px;vertical-align:0"></i>${A}</td>${J}</tr>`}).join(""),U=so(u.id||u.category,n);return`<div class="trend-row${U?" is-unlaunched":""}" data-prodid="${u.id||u.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${ee};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${lo(u,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${U?"#F1F5F9":g.bg};color:${U?"#64748B":g.color};border:1px solid ${U?"#CBD5E1":g.border}">${U?a==="en"?"Unlaunched":"미출시":g.label}</span>
          ${x!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${x.toFixed(1)}%</span>`:""}
          ${u.compName?`<span style="font-size:14px;color:#94A3B8">vs ${u.compName} ${u.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Zt}">${j}<tbody>${I}${_}${E}${M}</tbody></table></div>
        ${rn(u,a)}
      </div>`}).join("");return p?`<div class="bu-group" data-bu="${m}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${m}</span></div>
      ${p}
    </div>`:""}).join("");return d.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${c||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${a==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${d}</div>
  </div>`:""}function Yr(t,e,o,i,a,n){if(!e||!e.length)return"";const c=["MS","HS","ES"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function m(f){const w=String(f||""),g=w.match(/(\d{1,2})월/);if(g)return parseInt(g[1])-1;const x=w.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(x)return d[x[1].toLowerCase()];const C=w.match(/\d{4}[-\/](\d{1,2})/);return C?parseInt(C[1])-1:-1}const h=[0,1,2,3,4,5,6,7,8,9,10,11],p=s.slice(),u=c.map(f=>{const w=t.filter(x=>x.bu===f);if(!w.length)return"";const g=w.map(x=>{const C=x.monthlyScores||[];let y={};if(C.length>=2){const P=new Set;if(C.forEach(J=>{J.allScores&&Object.keys(J.allScores).forEach(X=>P.add(X))}),P.forEach(J=>{y[J]=h.map(X=>{var v;const H=C.find(W=>m(W.date)===X);return((v=H==null?void 0:H.allScores)==null?void 0:v[J])??null})}),!P.size&&(y.LG=h.map(J=>{const X=C.find(H=>m(H.date)===J);return X?X.score:null}),x.vsComp>0)){const J=h.map(X=>{const H=C.find(v=>m(v.date)===X);return(H==null?void 0:H.comp)??null});J.some(X=>X!=null)&&(y[x.compName||"Comp"]=J)}}else{const P=e.filter(v=>v.division===f&&(v.country==="TOTAL"||v.country==="TTL")),J={};P.forEach(v=>{const W=m(v.date);W>=0&&(J[W]=v)});const X=h.map(v=>{var W;return((W=J[v])==null?void 0:W.lg)||null}),H=h.map(v=>{var W;return((W=J[v])==null?void 0:W.comp)||null});y={LG:X},H.some(v=>v!=null&&v>0)&&(y.Samsung=H)}const j=Object.keys(y).sort((P,J)=>{if(P==="LG")return-1;if(J==="LG")return 1;const X=(y[P]||[]).filter(v=>v!=null).pop()||0;return((y[J]||[]).filter(v=>v!=null).pop()||0)-X});if(!j.length)return"";const D=ao(x.status,i),I=(y.LG||[]).filter(P=>P!=null).pop(),_=j.map((P,J)=>{const X=Te(P,J),H=P==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${X};opacity:${H?1:.7}"></i><span style="font-size:13px;color:${H?"#1A1A1A":"#94A3B8"};font-weight:${H?700:400}">${P}</span></span>`}).join(""),E=p.length,M=`<colgroup><col style="width:${io}px">${p.map(()=>"<col>").join("")}</colgroup>`,U=Ne(x,p),N=`<tr><td style="padding:0;border:0"></td><td colspan="${E}" style="padding:8px 0;border:0">${nn(y,p,E*80,180,{fadeBeforeIdx:U,baselineLabel:U>0?"*Baseline 재설정":""})}</td></tr>`,V=`<tr><td style="padding:0;border:0"></td><td colspan="${E}" style="padding:4px 0 6px;border:0">${_}</td></tr>`,A=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${p.map(P=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${P}</th>`).join("")}</tr>`,F=j.map((P,J)=>{const X=Te(P,J),H=P==="LG",v=p.map((W,T)=>{var K;const q=(K=y[P])==null?void 0:K[T];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${q!=null?H?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${H?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${q!=null?q.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${H?"#FFF8F9":J%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${H?700:500};color:${X};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${X};margin-right:4px;vertical-align:0"></i>${P}</td>${v}</tr>`}).join(""),O=so(x.id||x.category,a);return`<div class="trend-row${O?" is-unlaunched":""}" data-prodid="${x.id||x.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${ee};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${lo(x,a)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${O?"#F1F5F9":D.bg};color:${O?"#64748B":D.color};border:1px solid ${O?"#CBD5E1":D.border}">${O?i==="en"?"Unlaunched":"미출시":D.label}</span>
          ${I!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${I.toFixed(1)}%</span>`:""}
          ${x.compName?`<span style="font-size:14px;color:#94A3B8">vs ${x.compName} ${x.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Zt}">${M}<tbody>${N}${V}${A}${F}</tbody></table></div>
        ${rn(x,i)}
      </div>`}).join("");return g?`<div class="bu-group" data-bu="${f}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${f}</span></div>
      ${g}
    </div>`:""}).join("");return u.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${p[0]}–${p[p.length-1]} (${p.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${u}</div>
  </div>`:""}function an(){return""}function Mo(t,e,o,i,a){const n=+(t.score-t.prev).toFixed(1),c=t.vsComp||0,s=+(t.score-c).toFixed(1),d=n>0?"▲":n<0?"▼":"─",m=n>0?"#22C55E":n<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section"${a==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
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
          <span class="hero-delta" style="color:${m}">${d} ${Math.abs(n).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${ee}"></div>
          </div>
          ${c>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(c,100)}%;background:${he}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${ee}"></i> LG ${t.score}%</span>
            ${c>0?`<span><i style="background:${he}"></i> Samsung ${c}%</span>`:""}
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
  </div>`}function Se(t,e){const o=Ae[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function so(t,e){return Dr.every(o=>{const i=Ae[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function lo(t,e){return Se(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Do(t,e,o,i,a,n,c,s,d){if(!t.length)return"";const h=["MS","HS","ES"].map(p=>{const u=t.filter(w=>w.bu===p);if(!u.length)return"";const f=u.map(w=>{var vt,Et;const g=w.weekly||[],x=g.filter(yt=>yt!=null),C=w.weeklyScore||(x.length>0?x[x.length-1]:w.score),y=w.monthlyScore||w.score,j=C,D=((vt=s==null?void 0:s[w.id])==null?void 0:vt.Total)||((Et=s==null?void 0:s[w.id])==null?void 0:Et.TTL)||{};let I=0;Object.entries(D).forEach(([yt,Tt])=>{if(yt==="LG"||yt==="lg")return;const St=Array.isArray(Tt)&&Tt.length?Tt[Tt.length-1]:0;St>I&&(I=St)});const _=w.vsComp||0,E=I>0?C/I*100:_>0?C/_*100:100,M=_>0?y/_*100:100,U=Math.round(E*10)/10,N=Math.round(M*10)/10,V=U,A=E>=100?"lead":E>=80?"behind":"critical",F=ao(A,i),O=x.length>=1?x[x.length-1]:null,P=x.length>=2?x[x.length-2]:null,J=O!=null&&P!=null?+(O-P).toFixed(1):null,X=J>0?"▲":J<0?"▼":"─",H=J>0?"#22C55E":J<0?"#EF4444":"#94A3B8",v=A==="critical"?"#BE123C":A==="behind"?"#D97706":"#15803D",W=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],T={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function q(yt){const Tt=String(yt||""),St=Tt.match(/(\d{1,2})월/);if(St)return parseInt(St[1])-1;const z=Tt.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(z)return T[z[1].toLowerCase()];const at=Tt.match(/\d{4}[-\/](\d{1,2})/);return at?parseInt(at[1])-1:-1}let K=w.monthlyScores||[];if(K.length<2&&c.length>0){const yt=c.filter(St=>St.division===w.bu&&(St.country==="TOTAL"||St.country==="TTL")),Tt={};yt.forEach(St=>{const z=q(St.date);z>=0&&(Tt[z]={date:St.date,score:St.lg,comp:St.comp})}),K=Object.keys(Tt).sort((St,z)=>St-z).map(St=>Tt[St])}const k=K.length>0?K.map(yt=>{const Tt=q(yt.date);return Tt>=0?W[Tt]:yt.date}):["M-3","M-2","M-1","M0"],S=K.length>0?K.map(yt=>yt.score):[null,null,null,w.score],$=K.length>=2?+(K[K.length-1].score-K[K.length-2].score).toFixed(1):null,ot=$>0?"▲":$<0?"▼":"─",Z=$>0?"#22C55E":$<0?"#EF4444":"#94A3B8",lt=V,mt=lt>=100?"#15803D":lt>=80?"#D97706":"#BE123C",wt=w.weeklyPrev||(x.length>=5?x[x.length-5]:x[0]||0),kt=C&&wt?+(C-wt).toFixed(1):null,R=y&&(w.monthlyPrev||w.prev)?+(y-(w.monthlyPrev||w.prev)).toFixed(1):null,tt=Se(w.id||w.category,n),nt=so(w.id||w.category,n),xt=nt?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:F;return`<div class="prod-card${nt?" is-unlaunched":""}" data-prodid="${w.id||w.category}" data-ws="${C.toFixed(1)}" data-ms="${y.toFixed(1)}" data-wr="${U}" data-mr="${N}" data-wmom="${kt??""}" data-mmom="${R??""}" style="border-color:${xt.border}">
        <div class="prod-head">
          <span class="prod-name">${lo(w,n)}</span>
          ${tt.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${xt.bg};color:${xt.color};border-color:${xt.border}">${xt.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${j.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${H}">${J!=null?`WoW ${X} ${Math.abs(J).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Z}">${$==null?"MoM —":`MoM ${ot} ${Math.abs($).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const yt=a.slice(-10),Tt=Ne(w,yt),St=String(w.id||"").toLowerCase(),z=St==="aircare"?30:St==="rac"?20:0;return Po(g.slice(-10),yt,300,90,v,{fadeBeforeIdx:Tt,baselineLabel:Tt>0?"*Baseline 재설정":"",labelOffsetY:z})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const yt=Ne(w,k),St=String(w.id||"").toLowerCase()==="audio";return Po(S,k,300,90,v,{fadeBeforeIdx:yt,baselineLabel:yt>0?"*Baseline 재설정":"",labelOffsetY:St?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${w.compName}`:`${w.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(lt,120)}%;background:${mt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${mt}">${lt}%</span>
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
  </div>`}function Oo(t,e,o,i){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),c=Ae[n]||(n||"").toUpperCase(),s=i&&i[`${t.country}|${c}`],d=zr(t.score,t.compScore),m=s?"#94A3B8":d==="lead"?"#15803D":d==="behind"?"#D97706":"#BE123C",h=+(t.score-t.compScore).toFixed(1),p=s?"#64748B":h>=0?"#15803D":"#BE123C",u=130,f=["TCL","HISENSE","HAIER"];let w="",g=0;t.allScores&&Object.entries(t.allScores).forEach(([M,U])=>{const N=String(M).toUpperCase();f.some(A=>N.includes(A))&&U>g&&(w=M,g=U)});const x=Math.max(e,g),C=s?1:t.score,y=Math.max(3,Math.round(C/x*u)),j=t.compScore>0?Math.max(3,Math.round(t.compScore/x*u)):0,D=g>0?Math.max(3,Math.round(g/x*u)):0,I="#9333EA",_=s?"—":t.score.toFixed(1),E=s?"—":`${h>=0?"+":""}${h}%p`;return`<div class="vbar-item${s?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${m}">${_}</span>
        <div class="vbar-col" style="height:${y}px;background:${m}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${he}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${j}px;background:${he}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${g>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${I}">${g.toFixed(1)}</span>
        <div class="vbar-col" style="height:${D}px;background:${I}"></div>
        <span class="vbar-col-name" style="color:${I}">${w.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${p}">${E}</span>
    <span class="vbar-label">${o}</span>
  </div>`}function No(t,e,o,i,a,n){if(!t||!t.length)return"";const c=new Map;t.forEach(f=>{c.has(f.product)||c.set(f.product,[]),c.get(f.product).push(f)});const s=e.cntyProductFilter||{},d=[...c.entries()].filter(([f])=>s[f]!==!1).map(([f,w])=>{const g=Math.max(...w.map(C=>Math.max(C.score,C.compScore)),1),x=w.map(C=>Oo(C,g,to(C.country),a)).join("");return`<div class="cnty-product" data-group-product="${f}"><div class="bu-header"><span class="bu-label">${f}</span></div><div class="vbar-chart">${x}</div></div>`}).join(""),m=new Map;t.forEach(f=>{m.has(f.country)||m.set(f.country,[]),m.get(f.country).push(f)});const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],u=h.filter(f=>m.has(f)).concat([...m.keys()].filter(f=>!h.includes(f))).map(f=>{const w=m.get(f);if(!w)return"";const g=Math.max(...w.map(C=>Math.max(C.score,C.compScore)),1),x=w.map(C=>Oo(C,g,C.product,a)).join("");return`<div class="cnty-product" data-group-country="${f}"><div class="bu-header"><span class="bu-label">${to(f)}</span></div><div class="vbar-chart">${x}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${he}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${an(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${u}</div>
      <div class="cnty-view-product" style="display:none">${d}</div>
      ${(()=>{if(!a||!Object.keys(a).length)return"";const f={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},g=[...new Set(t.map(x=>x.product))].map(x=>{const C=f[x]||String(x).toLowerCase(),y=Se(C,a),j=C==="audio"?"Audio-Sound Suite":x;return y.length?`${j}: ${y.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return g.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${g.join(" / ")}</p>`:""})()}
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
  </div>`}function Zr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",i=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",a=e==="en"?"All":"전체",n=e==="en"?"Total":"총",c=e==="en"?"":"개",s=e==="en"?"Clear filters":"필터 초기화",d=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],m={};d.forEach(f=>{const w=new Set;t.forEach(g=>{g[f.key]&&w.add(g[f.key])}),m[f.key]=[...w].sort()});const h=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(m).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const p=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),u=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
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
      ${m[f.key].map(w=>`<div onclick="_plFilter('${f.key}','${w.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${w}</div>`).join("")}
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
  <\/script>`}function zo(t,e,o,i,a,n,c="weekly"){const s=c==="monthly",d=s?"prm":"pr";if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const m=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];let h;s?h=e&&e.length?e.slice():[]:h=e&&e.length?e.slice(-12):[];const p=[...new Set(t.map(F=>F.topic))].filter(Boolean),u=[...new Set(t.map(F=>F.type))].filter(Boolean),f=[...new Set(t.map(F=>F.country))].filter(F=>F&&F!=="TTL"),w=m.filter(F=>f.includes(F)).concat(m.filter(F=>!f.includes(F))),g=JSON.stringify(t).replace(/</g,"\\u003c"),x=JSON.stringify(h),C=JSON.stringify(p),y=JSON.stringify(u),j=JSON.stringify(w),D=72;function I(F){const O={};return F&&String(F).split(`
`).forEach(P=>{const J=P.indexOf("=");if(J>0){const X=P.slice(0,J).trim(),H=P.slice(J+1).trim();X&&(O[X]=H)}}),O}const _=I(i==null?void 0:i.prTopicPromptsRaw);a&&a.length&&p.forEach(F=>{if(!_[F]){const O=a.find(P=>P.topic===F&&P.country==="US");O&&(_[F]=O.prompt)}});const E=(n==null?void 0:n.prTopicList)||[],M={},U={};E.forEach(F=>{[F.topic,F.topicRow,F.oldTopic].filter(Boolean).map(P=>P.trim()).forEach(P=>{F.explanation&&!M[P]&&(M[P]=F.explanation),F.bu&&!U[P]&&(U[P]=F.bu)})});const V={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...M,...I(i==null?void 0:i.prTopicDescsRaw)},A={};return p.forEach(F=>{const O=U[F];if(O)A[F]=O;else{const P=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];A[F]=P.some(J=>F.toLowerCase().includes(J.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Zt}">
    <!-- 필터 바 -->
    <div id="${d}-filters" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px;padding:10px 16px;background:#fff;border:1px solid #E8EDF2;border-radius:10px">
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Type":"유형"}</span>
        <div id="${d}-type-chips"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Country":"국가"}</span>
        <div id="${d}-cnty-chips" style="display:flex;gap:4px;flex-wrap:wrap"></div>
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
        <span class="legend"><i style="background:#15803D"></i>${o==="en"?"Lead ≥100%":"선도 ≥100%"} <i style="background:#D97706"></i>${o==="en"?"Behind ≥80%":"추격 ≥80%"} <i style="background:#BE123C"></i>${o==="en"?"Critical <80%":"취약 <80%"} <span style="color:#94A3B8;font-size:11px;margin-left:6px">${o==="en"?"() = vs SS ratio":"() 는 SS 대비 경쟁비"}</span></span>
      </div>
      <div class="section-body" id="${d}-matrix"></div>
    </div>
    <!-- 토픽별 트렌드 -->
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${s?o==="en"?"Monthly Competitor Trend by Topic":"토픽별 월간 경쟁사 트렌드":o==="en"?"Weekly Competitor Trend by Topic":"토픽별 주간 경쟁사 트렌드"}</div>
        <span class="legend">${s?h.length?`${h[0]}–${h[h.length-1]} (${h.length}${o==="en"?" months":"개월"})`:"":h.length?`${h[0].toUpperCase()}–${h[h.length-1].toUpperCase()} (${h.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div class="section-body" id="${d}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${g},W=${x},TP=${C},TY=${y},CN=${j};
    var CW=${D};
    var TOPIC_CAT=${JSON.stringify(A)};
    var TOPIC_PROMPT=${JSON.stringify(_).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(V).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(E).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Oe)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${ee}',COMP='${he}';
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
      var te=document.getElementById('${d}-type-chips');if(te)te.innerHTML=TY.map(function(t){return chip(t,fType===t,"_${d}SetType('"+t+"')")}).join(' ');
      var ce=document.getElementById('${d}-cnty-chips');if(!ce)return;
      var allOn=CN.every(function(c){return fCnty[c]});
      ce.innerHTML=chip('${o==="en"?"All":"전체"}',allOn,'_${d}CntyAll()')+' '+CN.map(function(c){return chip(cf(c),!!fCnty[c],"_${d}CntyTog('"+c+"')")}).join(' ');
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
      var el=document.getElementById('${d}-matrix');if(!el)return;
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
        var dataKey=(row.topicRow||'').trim();
        h+='<tr style="border-bottom:1px solid #F1F5F9;'+(isNewBU&&idx>0?'border-top:2px solid #CBD5E1;':'')+'">';
        if(isNewBU){
          h+='<td rowspan="'+buCount+'" style="padding:6px 8px;font-size:15px;font-weight:700;color:#475569;vertical-align:middle;text-align:center;border-right:2px solid #E8EDF2;background:#F8FAFC;line-height:1.4;word-break:keep-all">'+bu+'</td>';
          prevBU=bu;
        }
        h+='<td style="padding:6px 10px;font-size:16px;font-weight:600;color:#1A1A1A">'+row.topic+'</td>';
        h+='<td style="padding:6px 10px;font-size:14px;color:#64748B;line-height:1.4">'+((row.explanation||''))+'</td>';
        cols.forEach(function(cnty){
          var lg=lastVal(dataKey,cnty,'LG');
          var ss=lastVal(dataKey,cnty,'Samsung');
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
      var el=document.getElementById('${d}-sections');if(!el)return;
      var N=W.length;var tblW=CW*N;var html='';
      // PR Topic List의 Topic-row(topicRow)로 데이터 매칭, 대시보드 토픽명으로 표시
      var sectionTopics=[];
      if(_prTopicList&&_prTopicList.length){
        _prTopicList.forEach(function(t){if(t.topicRow&&t.topicRow.trim())sectionTopics.push({key:t.topicRow.trim(),name:t.topic||t.topicRow.trim()})});
      }
      if(!sectionTopics.length)TP.forEach(function(t){sectionTopics.push({key:t,name:t})});
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
        html+='<span style="font-size:21px;font-weight:700;color:#1A1A1A">'+topicName+'</span>';
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
    window._${d}SetType=function(t){fType=t;renderAll()};
    window._${d}CntyTog=function(c){fCnty[c]=!fCnty[c];renderAll()};
    window._${d}CntyAll=function(){var on=CN.every(function(c){return fCnty[c]});CN.forEach(function(c){fCnty[c]=!on});renderAll()};
    renderAll();
  })();
  <\/script>`}function Go(t,e,o,i,a,n){const c=(t||[]).filter(g=>!0);if(!c.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const s=e&&e.length?e.slice(-12):[],m=[...new Set(c.map(g=>g.stakeholder))].filter(Boolean).map(g=>({stakeholder:g,topics:[...new Set(c.filter(x=>x.stakeholder===g).map(x=>x.topic))].filter(Boolean)})),h=72,p=JSON.stringify(c).replace(/</g,"\\u003c"),u=JSON.stringify(s),f=JSON.stringify(m),w="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Zt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${a||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">${s.length?`${s[0].toUpperCase()}–${s[s.length-1].toUpperCase()} (${s.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${ee};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${w}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${p},W=${u},GROUPS=${f};
    var CW=${h},RED='${ee}';
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
  <\/script>`}function Qr(t,e,o,i,a,n,c,s,d,m,h,p,u,f){var yt,Tt,St;u!=null&&u.llmModel&&u.llmModel!=="Total"&&(o=Ko(o,u.llmModel),c=qo(c,u.llmModel),e=Jo(e,u.monthlyVis,u.llmModel),u.monthlyVis&&(u={...u,monthlyVis:En(u.monthlyVis,u.llmModel)})),o=(o||[]).map(z=>({...z,weekly:(z.weekly||[]).map(at=>at??0),monthly:(z.monthly||[]).map(at=>at??0)})),m&&typeof m=="object"&&Object.values(m).forEach(z=>{!z||typeof z!="object"||Object.values(z).forEach(at=>{!at||typeof at!="object"||Object.keys(at).forEach(Ft=>{const Y=at[Ft];Array.isArray(Y)&&(at[Ft]=Y.map(G=>G??0))})})});const w={aircare:"Xiaomi"};o=o.map(z=>{const at=w[(z.id||"").toLowerCase()];if(!at||!z.allScores)return z;const Ft=Object.entries(z.allScores).find(([bt])=>bt.toLowerCase()===at.toLowerCase()&&bt.toLowerCase()!=="lg");if(!Ft)return z;const Y=Ft[1];if(!(Y>0))return z;const G=Math.round(z.score/Y*100);return{...z,compName:Ft[0],vsComp:Y,compRatio:G,status:G>=100?"lead":G>=80?"behind":"critical"}});const g=(u==null?void 0:u.visibilityOnly)||!1,x=(u==null?void 0:u.includePromptList)||!1,C=(u==null?void 0:u.includeReadability)===!0,y=(f==null?void 0:f.unlaunchedMap)||{},D=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${n}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,I=De[n]||De.ko;let _;if(d&&d.length)_=d.map(z=>String(z).toUpperCase().startsWith("W")?z.toUpperCase():z);else{const z=m?Math.max(...Object.values(m).flatMap(Ft=>Object.values(Ft).flatMap(Y=>Object.values(Y).map(G=>(G==null?void 0:G.length)||0))),0):0,at=t.weekStart||Math.max(1,z-11);_=Array.from({length:Math.max(12,z)},(Ft,Y)=>`W${at+Y}`)}const E=new Set;m&&Object.values(m).forEach(z=>Object.keys(z).forEach(at=>{at!=="Total"&&E.add(at)})),c&&c.forEach(z=>{z.country&&z.country!=="TTL"&&E.add(z.country)});const M=[...E].sort(),U=n==="en"?"All":"전체",N=["MS","HS","ES"],V=o.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${z.bu}" value="${z.id}" checked onchange="onFilterChange()"><span>${z.kr}</span></label>`).join(""),A=N.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${z}" checked onchange="onBuChange('${z}')"><span>${z}</span></label>`).join(""),F=M.map(z=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${z}" checked onchange="onFilterChange()"><span>${to(z)}</span></label>`).join(""),O=Object.entries(Qe).map(([z,at])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${z}" checked onchange="onRegionChange('${z}')"><span>${at.labelEn}</span></label>`).join(""),P=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,J=u!=null&&u.weeklyLabelsFull&&u.weeklyLabelsFull.length===_.length?u.weeklyLabelsFull:_,X=_.map((z,at)=>`<option value="${at}"${at===_.length-1?" selected":""}>${J[at]||z}</option>`).join(""),H=(((yt=o[0])==null?void 0:yt.monthlyScores)||[]).map(z=>{const at=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ft=String(z.date).match(/(\d{1,2})월/),Y=String(z.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return Ft?at[parseInt(Ft[1])-1]:Y?Y[1].charAt(0).toUpperCase()+Y[1].slice(1).toLowerCase():z.date}),v=H.map((z,at)=>`<option value="${at}"${at===H.length-1?" selected":""}>${z}</option>`).join(""),W=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Zt}`,T=new Set(["Total"]);(o||[]).forEach(z=>(z.monthlyScores||[]).forEach(at=>Object.keys(at.byLlm||{}).forEach(Ft=>T.add(Ft)))),(c||[]).forEach(z=>(z.monthlyScores||[]).forEach(at=>Object.keys(at.byLlm||{}).forEach(Ft=>T.add(Ft)))),((u==null?void 0:u.monthlyVis)||[]).forEach(z=>{z.llmModel&&T.add(z.llmModel)});const q=["Total",...Array.from(T).filter(z=>z!=="Total").sort((z,at)=>z.localeCompare(at))],K=(u==null?void 0:u.llmModel)||"Total",k=q.map(z=>`<option value="${z}"${z===K?" selected":""}>${z}</option>`).join(""),S=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${P}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${_[_.length-1]} ${n==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${_.length>1?"":' style="display:none"'}>
        <span class="fl-label">${n==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${W}">${X}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${n==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${W}"${H.length>0?"":" disabled"}>${v||"<option>—</option>"}</select>
      </div>
      <div class="fl-group" id="vis-llm-select-group" style="display:none">
        <span class="fl-label">LLM Model</span>
        <select id="vis-llm-select" onchange="switchLlmModel(this.value)" style="${W};opacity:0.55;cursor:not-allowed" disabled>${k}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${U}</span></label>
        ${A}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${U}</span></label>
        ${V}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${U}</span></label>
        ${O}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${U}</span></label>
        ${F}
      </div>
    </div>
  </div>`,$=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${_r(t.noticeText)}</div></div>`:"",ot=[$,t.showTotal!==!1?Mo(e,t,I,n,"weekly"):""].join(""),Z=[$,t.showTotal!==!1?Mo(e,t,I,n,"monthly"):""].join(""),lt=[];if(m&&Object.keys(m).length){const z=Xe;Object.entries(m).forEach(([at,Ft])=>{const Y=o.find(bt=>bt.id===at),G=(Y==null?void 0:Y.kr)||z[at]||at;Object.entries(Ft).forEach(([bt,Pt])=>{if(bt==="Total"||bt==="TTL"||bt==="TOTAL")return;const jt=Pt.LG||Pt.lg||[],Gt=jt.length>0?jt[jt.length-1]:0;if(Gt<=0)return;let oe="",Ot=0;Object.entries(Pt).forEach(([Nt,Ht])=>{if(Nt==="LG"||Nt==="lg")return;const Kt=Array.isArray(Ht)&&Ht.length?Ht[Ht.length-1]:0;Kt>Ot&&(Ot=Kt,oe=Nt)});const Ut=+(Gt-Ot).toFixed(1),Vt={};Object.entries(Pt).forEach(([Nt,Ht])=>{if(Array.isArray(Ht)&&Ht.length){const Kt=Ht[Ht.length-1];Kt!=null&&(Vt[Nt]=Kt)}}),lt.push({product:G,country:bt,score:Gt,compName:oe,compScore:Ot,gap:Ut,allScores:Vt})})})}const mt=((Tt=u==null?void 0:u.weeklyLabelsFull)==null?void 0:Tt[u.weeklyLabelsFull.length-1])||_[_.length-1]||"",wt=mt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${mt} ${n==="en"?"data":"기준"}</span>`:"",kt=[ot,t.showProducts!==!1?Do(o,t,I,n,_,y,(u==null?void 0:u.monthlyVis)||[],m,wt):"",`<div id="trend-container">${Jr(o,m,_,I,n,y,wt)}</div>`,t.showCnty!==!1?No(lt,t,I,n,y,wt):""].join(""),R=o.map(z=>{const at=z.monthlyScore||z.score,Ft=z.monthlyPrev||z.prev,Y=z.vsComp||0,G=Y>0?at/Y*100:100;return{...z,score:at,prev:Ft,weeklyScore:at,weeklyPrev:Ft,monthlyScore:at,monthlyPrev:Ft,weekly:(z.monthlyScores||[]).map(bt=>bt.score),status:G>=100?"lead":G>=80?"behind":"critical"}}),tt=(((St=o[0])==null?void 0:St.monthlyScores)||[]).map(z=>{const at=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ft=String(z.date).match(/(\d{1,2})월/),Y=String(z.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return Ft?at[parseInt(Ft[1])-1]:Y?Y[1].charAt(0).toUpperCase()+Y[1].slice(1).toLowerCase():z.date}),nt=(u==null?void 0:u.monthlyVis)||[],ht=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",xt=[Z,t.showProducts!==!1?Do(R,t,I,n,tt.length?tt:["Feb","Mar"],y,nt,{},ht):"",`<div id="monthly-trend-container">${Yr(R,nt,I,n,y,ht)}</div>`,t.showCnty!==!1?No(c,t,I,n,y,ht):""].join(""),vt=`border:none;border-radius:6px;padding:6px 18px;font-size:14px;font-weight:700;cursor:pointer;font-family:${Zt}`,Et=`
    <div style="max-width:1400px;margin:0 auto;padding:16px 40px 0">
      <div style="display:inline-flex;gap:2px;background:#1E293B;border-radius:8px;padding:3px">
        <button id="pr-period-w-btn" onclick="switchPRPeriod('weekly')" style="${vt};background:#fff;color:#0F172A">${n==="en"?"Weekly":"주간"}</button>
        <button id="pr-period-m-btn" onclick="switchPRPeriod('monthly')" style="${vt};background:transparent;color:#94A3B8">${n==="en"?"Monthly":"월간"}</button>
      </div>
    </div>
    <div id="pr-period-weekly">${zo(f==null?void 0:f.weeklyPR,f==null?void 0:f.weeklyPRLabels,n,t,f==null?void 0:f.appendixPrompts,f)}</div>
    <div id="pr-period-monthly" style="display:none">${zo(f==null?void 0:f.monthlyPR,f==null?void 0:f.monthlyPRLabels,n,t,f==null?void 0:f.appendixPrompts,f,"monthly")}</div>`;return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${Mr({FONT:Zt,RED:ee,COMP:he})}</style>
</head>
<body>
${g?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${S.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${kt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${xt}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${Et}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Go(f==null?void 0:f.weeklyBrandPrompt,f==null?void 0:f.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${C?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
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
  <button class="gnb-sub-btn" onclick="switchCitSub('llm-compare')">${n==="en"?"LLM Compare":"LLM 모델별 비교"}</button>
</div>
<div id="tab-visibility" class="tab-panel active">
  <div id="vis-sub-bu" class="vis-sub-panel active">
    ${S}
    <div id="bu-weekly-content" class="dash-container">${kt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${xt}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${Et}
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
${C?`<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${I.readabilityMsg}</p>
  </div></div>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${D}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${Zr(f==null?void 0:f.appendixPrompts,n)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${Xr(n)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${I.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${Hr({lang:n,weeklyAll:m,products:o,productsCnty:c,ulMap:y,monthlyVis:u==null?void 0:u.monthlyVis,total:e,meta:t,wLabels:_})}
<\/script>
</body>
</html>`}function ti(t){const e=t.filter(d=>d.status==="lead"),o=t.filter(d=>d.status==="behind"),i=t.filter(d=>d.status==="critical"),a=[...t].sort((d,m)=>m.score-d.score)[0],n=[...t].sort((d,m)=>d.score-m.score)[0],c=(t.reduce((d,m)=>d+m.score,0)/t.length).toFixed(1),s=[];return s.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${c}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),a&&s.push(`가장 높은 카테고리는 ${a.kr} ${a.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(a.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?s.push(`취약 카테고리(${i.map(d=>d.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&s.push(`추격 카테고리(${o.map(d=>d.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),s.join(" ")}function ei(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function oi(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const gt=It,ni={citation:[gt.meta,gt.citTouchPoints,gt.citDomain,gt.citPageType],"weekly-report":[gt.meta,gt.visSummary,gt.citTouchPoints,gt.citPageType,gt.productMS,gt.productHS,gt.productES,gt.weeklyMS,gt.weeklyHS,gt.weeklyES],"monthly-report":[gt.meta,gt.visSummary,gt.citTouchPoints,gt.citPageType,gt.productMS,gt.productHS,gt.productES,gt.weeklyMS,gt.weeklyHS,gt.weeklyES],dashboard:[gt.meta,gt.visSummary,gt.citTouchPoints,gt.citDomain,gt.citPageType,gt.productMS,gt.productHS,gt.productES,gt.weeklyMS,gt.weeklyHS,gt.weeklyES,gt.monthlyPR,gt.weeklyPR,gt.weeklyBrandPrompt,gt.appendix,gt.unlaunched,gt.prTopicList],newsletter:[gt.meta,gt.visSummary,gt.citTouchPoints,gt.citDomain,gt.citPageType,gt.productMS,gt.productHS,gt.productES,gt.weeklyMS,gt.weeklyHS,gt.weeklyES,gt.unlaunched]};function ri(t){return ni[t]||[]}const Uo="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function ii(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function ai({url:t,downloadName:e="sheet",mode:o}){const[i,a]=ct.useState(!1),[n,c]=ct.useState(""),s=o?ri(o):[],d=s.length?"zip":"xlsx",m=s.length?`📥 시트 CSV ZIP 다운로드 (탭 ${s.length}개)`:"📥 시트 xlsx 다운로드";async function h(){const p=ii(t);if(!p){c("ERROR: 동기화 URL 비어있거나 잘못됨");return}a(!0),c("");try{const u=new URLSearchParams({id:p,name:e});s.length&&u.set("tabs",s.join(","));const f=await fetch(`/api/sheet-download?${u.toString()}`,{credentials:"include"});if(!f.ok){const x=await f.text().catch(()=>"");let C=x;try{const y=JSON.parse(x);C=y.error||y.detail||x}catch{}throw new Error(`(${f.status}) ${C}`)}const w=await f.blob(),g=document.createElement("a");g.href=URL.createObjectURL(w),g.download=`${e}.${d}`,document.body.appendChild(g),g.click(),g.remove(),setTimeout(()=>URL.revokeObjectURL(g.href),1e3),c("다운로드 완료")}catch(u){c("ERROR: "+(u.message||String(u)))}finally{a(!1)}}return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("button",{onClick:h,disabled:i||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:i||!t?"#1E293B":"#1D4ED8",color:i||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Uo,cursor:i||!t?"not-allowed":"pointer"},children:i?"다운로드 중…":m}),n&&r.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Uo,background:n.startsWith("ERROR")?"#450A0A":"#14532D",color:n.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:n})]})}function si({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:a,metaEn:n,setMetaEn:c,total:s,setTotal:d,products:m,setProducts:h,citations:p,setCitations:u,dotcom:f,setDotcom:w,productsCnty:g,setProductsCnty:x,citationsCnty:C,setCitationsCnty:y,resolved:j,previewLang:D,setPreviewLang:I,snapshots:_,setSnapshots:E,setWeeklyLabels:M,setWeeklyAll:U,weeklyLabels:N,weeklyAll:V,citationsByCnty:A,dotcomByCnty:F,generateHTML:O,publishEndpoint:P,setMonthlyVis:J,onSyncExtra:X,categoryStats:H,extra:v,monthlyVis:W,progressMonth:T,setProgressMonth:q,progressDataMonth:K}){const k=ct.useRef({products:m,productsCnty:g,citations:p,citationsCnty:C,total:s,dotcom:f,extra:v});k.current={products:m,productsCnty:g,citations:p,citationsCnty:C,total:s,dotcom:f,extra:v};function S(){return k.current}const[$,ot]=ct.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[Z,lt]=ct.useState(!1),[mt,wt]=ct.useState(null),[kt,R]=ct.useState(""),[tt,nt]=ct.useState(""),[ht,xt]=ct.useState(!1),[vt,Et]=ct.useState(""),[yt,Tt]=ct.useState(!1),[St,z]=ct.useState(!1),[at,Ft]=ct.useState(!1),[Y,G]=ct.useState(!1),[bt,Pt]=ct.useState(""),[jt,Gt]=ct.useState(!1),[oe,Ot]=ct.useState(!0),[Ut,Vt]=ct.useState(""),[Nt,Ht]=ct.useState(null),[Kt,He]=ct.useState([]),qt=t==="newsletter",[le,be]=ct.useState(()=>{const l=new Date;return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`});function ne(){qt&&fetch("/api/publish").then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.months)&&He(l.months)}).catch(()=>{})}ct.useEffect(()=>{if(qt){ne();return}fetch(P||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(b=>b.ok?b.json():null).then(Ht).catch(()=>{})},[t,P,qt]);const sn=(()=>{const l=new Set,b=new Date;for(let rt=0;rt<24;rt++){const Lt=new Date(b.getFullYear(),b.getMonth()-rt,1);l.add(`${Lt.getFullYear()}-${String(Lt.getMonth()+1).padStart(2,"0")}`)}for(const rt of Kt)l.add(rt.month);return le&&l.add(le),[...l].sort((rt,Lt)=>Lt.localeCompare(rt))})();function Ee(l){const[b,rt]=l.split("-");return`${b}년 ${parseInt(rt,10)}월`}const[ln,co]=ct.useState(null);ct.useEffect(()=>{let l=!0;const b=()=>wo(t).then(Lt=>{l&&co(Lt)});b();const rt=setInterval(b,6e4);return()=>{l=!1,clearInterval(rt)}},[t]);function cn(){wo(t).then(co)}async function dn(){if(!Y){G(!0),Pt("");try{const l=S(),b=Re(l.products,l.productsCnty,l.citations,l.citationsCnty,"ko"),rt=Re(l.products,l.productsCnty,l.citations,l.citationsCnty,"en");let Lt,Wt,st;if(t==="dashboard"){const it=W||[],ft=l.extra||v||{};Lt=O(i,l.total,b.products,b.citations,l.dotcom,"ko",b.productsCnty,b.citationsCnty,N,V,A,F,it,ft),Wt=O(n,l.total,rt.products,rt.citations,l.dotcom,"en",rt.productsCnty,rt.citationsCnty,N,V,A,F,it,ft),st=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else Lt=O(i,l.total,b.products,b.citations,f,"ko",b.productsCnty,b.citationsCnty,{weeklyLabels:N,categoryStats:H,unlaunchedMap:(v==null?void 0:v.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(v==null?void 0:v.citTouchPointsTrend)||null,citTrendMonths:(v==null?void 0:v.citTrendMonths)||[],citDomainTrend:(v==null?void 0:v.citDomainTrend)||null,citDomainMonths:(v==null?void 0:v.citDomainMonths)||[],citTouchPointsByLlm:(v==null?void 0:v.citTouchPointsByLlm)||null,citDomainByLlm:(v==null?void 0:v.citDomainByLlm)||null}),Wt=O(n,l.total,rt.products,rt.citations,f,"en",rt.productsCnty,rt.citationsCnty,{weeklyLabels:N,categoryStats:H,unlaunchedMap:(v==null?void 0:v.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(v==null?void 0:v.citTouchPointsTrend)||null,citTrendMonths:(v==null?void 0:v.citTrendMonths)||[],citDomainTrend:(v==null?void 0:v.citDomainTrend)||null,citDomainMonths:(v==null?void 0:v.citDomainMonths)||[],citTouchPointsByLlm:(v==null?void 0:v.citTouchPointsByLlm)||null,citDomainByLlm:(v==null?void 0:v.citDomainByLlm)||null}),st=`${i.period||""} ${i.title||"Newsletter"}`.trim();const ce=P||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),B={title:st,htmlKo:Lt,htmlEn:Wt};qt&&(B.month=le);const _t=await(await fetch(ce,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(B)})).json();if(!_t.ok)throw new Error(_t.error||"게시 실패");if(Ht({..._t,published:!0}),qt&&ne(),t==="dashboard")try{const it=await Pe(t)||{},ft=l.extra||v||{};Co(t,{...it,meta:i,total:l.total,weeklyPR:ft.weeklyPR||it.weeklyPR,weeklyPRLabels:ft.weeklyPRLabels||it.weeklyPRLabels,monthlyPR:ft.monthlyPR||it.monthlyPR,monthlyPRLabels:ft.monthlyPRLabels||it.monthlyPRLabels,weeklyBrandPrompt:ft.weeklyBrandPrompt||it.weeklyBrandPrompt,weeklyBrandPromptLabels:ft.weeklyBrandPromptLabels||it.weeklyBrandPromptLabels,appendixPrompts:ft.appendixPrompts||it.appendixPrompts})}catch{}const Jt=`${window.location.origin}${_t.urls.ko}`,et=`${window.location.origin}${_t.urls.en}`;try{await navigator.clipboard.writeText(Jt+`
`+et)}catch{}Pt(`KO: ${Jt}
EN: ${et}`)}catch(l){Pt("ERROR:"+l.message)}finally{G(!1),setTimeout(()=>Pt(""),2e4)}}}async function pn(){if(!jt){Gt(!0),Vt("");try{const l=await or(Qr,Re,{includeProgressTracker:oe});Vt(`통합 게시 완료!
KO: ${window.location.origin}${l.urls.ko}
EN: ${window.location.origin}${l.urls.en}`)}catch(l){Vt("ERROR: "+l.message)}finally{Gt(!1),setTimeout(()=>Vt(""),15e3)}}}async function po(l){try{const b=P||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),rt=qt?`${b}?month=${encodeURIComponent(l||le)}`:b;(await(await fetch(rt,{method:"DELETE"})).json()).ok&&(qt?ne():Ht(null))}catch{}}async function un(){if(D!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}z(!0)}async function uo(l){z(!1),Ft(!0);const b=(l==null?void 0:l.products)??m,rt=(l==null?void 0:l.productsCnty)??g,Lt=(l==null?void 0:l.citations)??p,Wt=(l==null?void 0:l.citationsCnty)??C;try{const st=i,ce=[st.title||"",st.dateLine||"",st.noticeText||"",st.totalInsight||"",st.reportType||"",st.productInsight||"",st.productHowToRead||"",st.citationInsight||"",st.citationHowToRead||"",st.dotcomInsight||"",st.dotcomHowToRead||"",st.todoText||"",st.todoNotice||"",st.kpiLogicText||"",st.cntyInsight||"",st.cntyHowToRead||"",st.citDomainInsight||"",st.citDomainHowToRead||"",st.citCntyInsight||"",st.citCntyHowToRead||"",st.citPrdInsight||"",st.citPrdHowToRead||"",st.period||"",st.team||"",st.reportNo||"",st.monthlyReportBody||""],B=b.map(ut=>ut.kr||""),re=b.map(ut=>ut.compName||""),_t=Lt.map(ut=>ut.category||""),Jt=[...new Set(rt.map(ut=>ut.country||""))],et=[...new Set(rt.map(ut=>ut.product||""))],it=[...new Set(rt.map(ut=>ut.compName||""))],ft=[...new Set(Wt.map(ut=>ut.cnty||"").filter(ut=>ut&&ut!=="TTL"))],$t=[...ce,...B,...re,..._t,...Jt,...et,...it,...ft].map(ut=>ut||" "),pt=await rr($t,{from:"ko",to:"en"});let dt=0;const de={...i,title:pt[dt++]||st.title,dateLine:pt[dt++]||st.dateLine,noticeText:pt[dt++]||st.noticeText,totalInsight:pt[dt++]||st.totalInsight,reportType:pt[dt++]||st.reportType,productInsight:pt[dt++]||st.productInsight,productHowToRead:pt[dt++]||st.productHowToRead,citationInsight:pt[dt++]||st.citationInsight,citationHowToRead:pt[dt++]||st.citationHowToRead,dotcomInsight:pt[dt++]||st.dotcomInsight,dotcomHowToRead:pt[dt++]||st.dotcomHowToRead,todoText:pt[dt++]||st.todoText,todoNotice:pt[dt++]||st.todoNotice,kpiLogicText:pt[dt++]||st.kpiLogicText,cntyInsight:pt[dt++]||st.cntyInsight,cntyHowToRead:pt[dt++]||st.cntyHowToRead,citDomainInsight:pt[dt++]||st.citDomainInsight,citDomainHowToRead:pt[dt++]||st.citDomainHowToRead,citCntyInsight:pt[dt++]||st.citCntyInsight,citCntyHowToRead:pt[dt++]||st.citCntyHowToRead,citPrdInsight:pt[dt++]||st.citPrdInsight,citPrdHowToRead:pt[dt++]||st.citPrdHowToRead,period:(dt++,st.period),team:pt[dt++]||st.team,reportNo:(dt++,st.reportNo),monthlyReportBody:pt[dt++]||st.monthlyReportBody},Yt=ut=>ut&&ut.replace(/\b\w/g,Ct=>Ct.toUpperCase()),ie=ut=>(ut||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),ue={};b.forEach((ut,Ct)=>{ue[ut.id]={en:Yt(pt[dt+Ct]||ut.kr),compNameEn:ie(pt[dt+B.length+Ct]||ut.compName)}}),dt+=B.length+re.length;const Qt={};Lt.forEach((ut,Ct)=>{Qt[`${ut.rank}_${ut.source}`]=Yt(pt[dt+Ct]||ut.category)}),dt+=_t.length;const xe={};Jt.forEach((ut,Ct)=>{xe[ut]=/^[A-Z]{2,3}$/.test(ut)?ut:pt[dt+Ct]||ut}),dt+=Jt.length;const $e={};et.forEach((ut,Ct)=>{$e[ut]=pt[dt+Ct]||ut}),dt+=et.length;const Ce={};it.forEach((ut,Ct)=>{Ce[ut]=pt[dt+Ct]||ut}),dt+=it.length;const ke={};ft.forEach((ut,Ct)=>{ke[ut]=/^[A-Z]{2,3}$/.test(ut)?ut:pt[dt+Ct]||ut}),c(de),h(ut=>ut.map(Ct=>{var fo,ho;return{...Ct,en:((fo=ue[Ct.id])==null?void 0:fo.en)||Ct.en||Ct.kr,compNameEn:((ho=ue[Ct.id])==null?void 0:ho.compNameEn)||Ct.compNameEn||Ct.compName}})),u(ut=>ut.map(Ct=>({...Ct,categoryEn:Qt[`${Ct.rank}_${Ct.source}`]||Ct.categoryEn||Ct.category}))),x(ut=>ut.map(Ct=>({...Ct,countryEn:Yt(xe[Ct.country]||Ct.country),productEn:Yt($e[Ct.product]||Ct.product),compNameEn:ie(Ce[Ct.compName]||Ct.compName)}))),y(ut=>ut.map(Ct=>({...Ct,cntyEn:Ct.cnty==="TTL"?"TTL":Yt(ke[Ct.cnty]||Ct.cnty)}))),Ft(!1)}catch(st){alert("번역 오류: "+st.message),Ft(!1)}}async function fn(){const l=O(e,s,j.products,j.citations,f,D,j.productsCnty,j.citationsCnty);try{await navigator.clipboard.writeText(l)}catch{const b=document.createElement("textarea");b.value=l,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}xt(!0),setTimeout(()=>xt(!1),2500)}async function hn(){await hr(e,s,m,p,f)}async function gn(){if(yt!=="sending"){Tt("sending");try{const l=S(),b=O(e,l.total,l.products,l.citations,l.dotcom,D,l.productsCnty,l.citationsCnty,{weeklyLabels:N,categoryStats:H,unlaunchedMap:(v==null?void 0:v.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",citTouchPointsTrend:(v==null?void 0:v.citTouchPointsTrend)||null,citTrendMonths:(v==null?void 0:v.citTrendMonths)||[],citDomainTrend:(v==null?void 0:v.citDomainTrend)||null,citDomainMonths:(v==null?void 0:v.citDomainMonths)||[],citTouchPointsByLlm:(v==null?void 0:v.citTouchPointsByLlm)||null,citDomainByLlm:(v==null?void 0:v.citDomainByLlm)||null}),rt=`[LG GEO] ${e.title} · ${e.period}`,Wt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:vt.trim(),subject:rt,html:b})})).json();if(!Wt.ok)throw new Error(Wt.error||"발송 실패");Tt("ok"),setTimeout(()=>Tt(!1),4e3)}catch(l){Tt("error"),R(l.message),setTimeout(()=>{Tt(!1),R("")},5e3)}}}async function mn(){var rt,Lt,Wt,st,ce;if(Z)return;const l=Br($.trim());if(!l){wt("error"),R("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>wt(null),3e3);return}lt(!0),wt(null),R(""),nt("");const b=[];try{const B=await jr(l,et=>R(et));if(b.push(`[Sync] parsed keys: ${Object.keys(B).join(", ")||"(없음)"}`),B.meta&&b.push(`[Sync] meta keys: ${Object.keys(B.meta).join(", ")}`),B.productsPartial&&b.push(`[Sync] products: ${B.productsPartial.length}건`),b.push(`[Sync] citations: ${((rt=B.citations)==null?void 0:rt.length)??0}건`),b.push(`[Sync] citationsCnty: ${((Lt=B.citationsCnty)==null?void 0:Lt.length)??0}건`),b.push(`[Sync] dotcom: ${B.dotcom?"OK":"(없음)"}`),b.push(`[Sync] productsCnty: ${((Wt=B.productsCnty)==null?void 0:Wt.length)??0}건`),B.meta){const et=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];a(it=>{const ft={...it};for(const[$t,pt]of Object.entries(B.meta))et.includes($t)&&it[$t]||(ft[$t]=pt);return ft}),c(it=>({...it,period:B.meta.period,dateLine:B.meta.dateLine,reportNo:B.meta.reportNo}))}if(B.citations&&(u(B.citations),k.current={...k.current,citations:B.citations}),B.dotcom&&(w(et=>({...et,...B.dotcom})),k.current={...k.current,dotcom:{...k.current.dotcom,...B.dotcom}}),B.productsCnty&&(x(B.productsCnty),k.current={...k.current,productsCnty:B.productsCnty}),B.citationsCnty&&(y(B.citationsCnty),k.current={...k.current,citationsCnty:B.citationsCnty}),B.monthlyVis&&J&&J(B.monthlyVis),X){const et={weeklyPR:B.weeklyPR||null,weeklyPRLabels:B.weeklyPRLabels||null,monthlyPR:B.monthlyPR||null,monthlyPRLabels:B.monthlyPRLabels||null,weeklyBrandPrompt:B.weeklyBrandPrompt||null,weeklyBrandPromptLabels:B.weeklyBrandPromptLabels||null,appendixPrompts:B.appendixPrompts||null,unlaunchedMap:B.unlaunchedMap||null,weeklyLabelsFull:B.weeklyLabelsFull||null,prTopicList:B.prTopicList||null,citTouchPointsTrend:B.citTouchPointsTrend||null,citTrendMonths:B.citTrendMonths||null,citDomainTrend:B.citDomainTrend||null,citDomainMonths:B.citDomainMonths||null,citTouchPointsByLlm:B.citTouchPointsByLlm||null,citDomainByLlm:B.citDomainByLlm||null};X(et),k.current={...k.current,extra:{...k.current.extra,...et}}}const re=B.weeklyLabels||((st=B.meta)==null?void 0:st.weeklyLabels);console.log("[SYNC] weeklyLabels:",re,"weeklyLabelsFull:",B.weeklyLabelsFull),re&&re.length&&M(re),B.weeklyAll&&U(et=>({...et,...B.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(B));const _t=B.weeklyMap?Object.keys(B.weeklyMap):[],Jt=((ce=B.productsPartial)==null?void 0:ce.map(et=>et.id))||[];if(console.log("[SYNC] weeklyMap keys:",_t.length?_t:"NONE"),console.log("[SYNC] productsPartial IDs:",Jt.length?Jt:"NONE"),_t.length&&Jt.length){const et=Jt.filter(ft=>!_t.includes(ft)),it=_t.filter(ft=>!Jt.includes(ft));et.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",et),it.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",it),!et.length&&!it.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(B.productsPartial){const et=B.productsPartial.map(it=>{var Ce;const ft=((Ce=B.weeklyMap)==null?void 0:Ce[it.id])||[],$t=ft.filter(ke=>ke!=null&&ke>0),pt=it.score,dt=it.prev||0,de=it.vsComp>0?Math.round(pt/it.vsComp*100):100,Yt=$t.length>0?$t[$t.length-1]:pt,ie=$t.length>=5?$t[$t.length-5]:$t[0]||0,ue=pt,Qt=dt,xe=de,$e=dt>0&&dt!==pt?[dt,pt]:[];return{...it,score:ue,prev:Qt,weekly:ft,monthly:$e,weeklyScore:Yt,weeklyPrev:ie,monthlyScore:pt,monthlyPrev:dt,compRatio:xe,status:xe>=100?"lead":xe>=80?"behind":"critical"}});h(et),k.current={...k.current,products:et}}else B.weeklyMap&&h(et=>et.map(it=>{var $t;const ft=($t=B.weeklyMap)==null?void 0:$t[it.id];return ft?{...it,weekly:ft}:it}));if(B.total){const et={...k.current.total,...B.total,...B.buTotals?{buTotals:B.buTotals}:{},...B.buTotalsPrev?{buTotalsPrev:B.buTotalsPrev}:{},...B.countryTotals?{countryTotals:B.countryTotals}:{},...B.countryTotalsPrev?{countryTotalsPrev:B.countryTotalsPrev}:{}};d(it=>({...it,...et})),k.current={...k.current,total:et}}{let et=function(dt){if(!dt)return 0;const de=String(dt).trim(),Yt=de.match(/(\d{1,2})월/);if(Yt){const Qt=parseInt(Yt[1]);return Qt>=1&&Qt<=12?Qt:0}const ie=de.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(ie)return $t[ie[1].toLowerCase()]||0;const ue=de.match(/\d{4}[-\/](\d{1,2})/);if(ue){const Qt=parseInt(ue[1]);return Qt>=1&&Qt<=12?Qt:0}return 0};const it=new Date().getFullYear(),ft=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$t={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let pt=0;if(B.derivedPeriod){const dt=et(B.derivedPeriod);dt>pt&&(pt=dt)}if(B.citDerivedPeriod){const dt=et(B.citDerivedPeriod);dt>pt&&(pt=dt)}pt>0&&pt<=12&&(a(dt=>({...dt,period:`${it}년 ${pt}월`})),c(dt=>({...dt,period:`${ft[pt]} ${it}`})))}if(!B.total&&B.productsPartial&&B.productsPartial.length>0){const et=B.productsPartial,it=+(et.reduce(($t,pt)=>$t+pt.score,0)/et.length).toFixed(1),ft=+(et.reduce(($t,pt)=>$t+(pt.vsComp||0),0)/et.length).toFixed(1);d($t=>({...$t,score:it,vsComp:ft,rank:it>=ft?1:2}))}if(setTimeout(()=>{Co(t,{meta:B.meta||null,total:B.total?{...B.total,...B.buTotals?{buTotals:B.buTotals}:{},...B.buTotalsPrev?{buTotalsPrev:B.buTotalsPrev}:{},...B.countryTotals?{countryTotals:B.countryTotals}:{},...B.countryTotalsPrev?{countryTotalsPrev:B.countryTotalsPrev}:{}}:null,productsPartial:B.productsPartial||null,weeklyMap:B.weeklyMap||null,weeklyLabels:B.weeklyLabels||null,weeklyLabelsFull:B.weeklyLabelsFull||null,weeklyAll:B.weeklyAll||null,citations:B.citations||null,dotcom:B.dotcom||null,productsCnty:B.productsCnty||null,citationsCnty:B.citationsCnty||null,citationsByCnty:B.citationsByCnty||null,dotcomByCnty:B.dotcomByCnty||null,appendixPrompts:B.appendixPrompts||null,unlaunchedMap:B.unlaunchedMap||null,prTopicList:B.prTopicList||null,monthlyVis:B.monthlyVis||null,weeklyPR:B.weeklyPR||null,weeklyPRLabels:B.weeklyPRLabels||null,monthlyPR:B.monthlyPR||null,monthlyPRLabels:B.monthlyPRLabels||null,weeklyBrandPrompt:B.weeklyBrandPrompt||null,weeklyBrandPromptLabels:B.weeklyBrandPromptLabels||null,monthlyBrandPrompt:B.monthlyBrandPrompt||null,monthlyBrandPromptLabels:B.monthlyBrandPromptLabels||null,dotcomTrend:B.dotcomTrend||null,dotcomTrendMonths:B.dotcomTrendMonths||null}),setTimeout(cn,250)},100),nt(b.join(`
`)),wt("ok"),R(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const et={};B.productsPartial&&(et.products=B.productsPartial.map(it=>{var Yt;const ft=((Yt=B.weeklyMap)==null?void 0:Yt[it.id])||[],$t=it.vsComp>0?it.score/it.vsComp*100:100,pt=ft.find(ie=>ie!=null&&ie>0),dt=it.prev!=null&&it.prev>0?it.prev:pt||0,de=dt>0?[dt,it.score]:[];return{...it,prev:dt,weekly:ft,monthly:de,compRatio:Math.round($t),status:$t>=100?"lead":$t>=80?"behind":"critical"}})),B.productsCnty&&(et.productsCnty=B.productsCnty),B.citations&&(et.citations=B.citations),B.citationsCnty&&(et.citationsCnty=B.citationsCnty);try{await uo(et)}catch{}R("동기화 + 번역 완료!")}}catch(B){b.push(`[ERROR] ${B.message}`),wt("error"),R(B.message),nt(b.join(`
`))}finally{lt(!1),setTimeout(()=>{wt(null),R("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:Bt,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:L},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:L},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Pr,{...ln||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:L},children:"Google Sheets URL"}),r.jsx("input",{value:$,onChange:l=>ot(l.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...At,fontSize:11,padding:"7px 9px",marginBottom:8,color:$?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:mn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:Z?"wait":"pointer",background:Z?"#1E293B":Bt,fontSize:12,fontWeight:700,color:Z?"#94A3B8":"#FFFFFF",fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(go,{size:13,style:{animation:Z?"spin 1s linear infinite":"none"}}),Z?"동기화 중...":"구글 시트 동기화"]}),(mt||Z&&kt)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.6,background:mt==="ok"?"#14532D":mt==="error"?"#450A0A":"#1E293B",color:mt==="ok"?"#86EFAC":mt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${mt==="ok"?"#22C55E33":mt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:kt}),tt&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[tt,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(tt).then(()=>{const l=document.getElementById("vis-debug-copy-btn");l&&(l.textContent="복사됨!",setTimeout(()=>{l.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"로그 복사"})]}),r.jsx(ai,{url:$,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("button",{onClick:un,disabled:at,style:{width:"100%",padding:"9px 0",background:at?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:L,cursor:at?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:at?.6:1},children:[r.jsx(yn,{size:13})," ",at?"번역 중...":"AI 번역 (EN)"]}),St&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:L},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:L},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>z(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:L,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:uo,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:L,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),r.jsxs("button",{onClick:hn,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(bn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[qt&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"발행 월"}),r.jsx("select",{value:le,onChange:l=>be(l.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:sn.map(l=>r.jsxs("option",{value:l,children:[l," · ",Ee(l),Kt.find(b=>b.month===l)?" ✓ 게시됨":""]},l))})]}),qt&&q&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["핵심 과제 진척 월 ",r.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",K||"—",")"]})]}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("select",{value:T||"",onChange:l=>q(l.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:[r.jsxs("option",{value:"",children:["자동 (",K||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(l=>r.jsx("option",{value:l,children:l},l))]}),T&&r.jsx("button",{onClick:()=>q(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:L,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),r.jsxs("button",{onClick:dn,disabled:Y,style:{width:"100%",padding:"9px 0",background:Y?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Y?"#94A3B8":"#FFFFFF",fontFamily:L,cursor:Y?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(mo,{size:12}),Y?"게시 중...":qt?`${Ee(le)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:L,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:oe,onChange:l=>Ot(l.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),r.jsxs("button",{onClick:pn,disabled:jt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:jt?"#1E293B":"#166534",color:jt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,cursor:jt?"wait":"pointer",marginBottom:6},children:[r.jsx(mo,{size:12}),jt?"통합 게시 중...":"통합 대시보드 게시"]}),Ut&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:Ut.startsWith("ERROR")?"#450A0A":"#14532D",color:Ut.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Ut.startsWith("ERROR:")?Ut.slice(6):Ut})]})]}),r.jsxs("button",{onClick:async()=>{const l={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(l).some(rt=>rt.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const Lt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:l})})).json();Lt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(Lt.error||""))}catch(rt){alert("아카이빙 실패: "+rt.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(xn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&bt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:L,lineHeight:1.8,background:bt.startsWith("ERROR:")?"#450A0A":"#14532D",color:bt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${bt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:bt.startsWith("ERROR:")?bt.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(We,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[bt,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!qt&&(Nt==null?void 0:Nt.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:()=>po(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:Nt.urls.ko},{label:"EN",url:Nt.urls.en}].map(({label:l,url:b})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:b,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[l,": ",b]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${b}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(We,{size:10})})]},l)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:Nt.ts?new Date(Nt.ts).toLocaleString("ko-KR"):""})]}),qt&&Kt.length>0&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsx("div",{style:{marginBottom:6},children:r.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:L,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",Kt.length,")"]})}),Kt.map(l=>r.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L},children:Ee(l.month)}),r.jsx("button",{onClick:()=>{confirm(`${Ee(l.month)} 게시본을 삭제할까요?`)&&po(l.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:L,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:l.urls.ko},{label:"EN",url:l.urls.en}].map(({label:b,url:rt})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[r.jsxs("a",{href:rt,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:L,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[b,": ",rt]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${rt}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(We,{size:10})})]},b)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:l.ts?new Date(l.ts).toLocaleString("ko-KR"):""})]},l.month))]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:l=>o(b=>({...b,reportType:l.target.value})),style:{...At,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:l=>o(b=>({...b,reportNo:l.target.value})),style:{...At}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:l=>o(b=>({...b,period:l.target.value})),style:{...At}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:l=>o(b=>({...b,title:l.target.value})),rows:4,style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:l=>o(b=>({...b,team:l.target.value})),style:{...At,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:L},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:l=>o(b=>({...b,dateLine:l.target.value})),style:{...At,marginBottom:10}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Notice"}),r.jsx("button",{onClick:()=>o(l=>({...l,showNotice:!l.showNotice})),style:{background:e.showNotice?Bt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:l=>o(b=>({...b,noticeText:l.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...At,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(l=>({...l,showKpiLogic:!l.showKpiLogic})),style:{background:e.showKpiLogic?Bt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:l=>o(b=>({...b,kpiLogicText:l.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...At,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:L,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:l=>o(b=>({...b,titleFontSize:Number(l.target.value)})),style:{width:"100%",accentColor:Bt,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:l=>o(b=>({...b,titleColor:l.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:L},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([l,b])=>r.jsx("button",{onClick:()=>o(rt=>({...rt,titleColor:l})),title:b,style:{width:16,height:16,borderRadius:"50%",background:l,border:e.titleColor===l?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},l))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showTouchPointsBump",label:"외부채널 범프차트"},{key:"showLlmShare",label:"모델별 인용비중"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:l,label:b})=>r.jsx("button",{onClick:()=>o(rt=>({...rt,[l]:!rt[l]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[l]?Bt:"#1E293B",color:e[l]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:b},l))}),(()=>{const l=et=>String(et||"").replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\.(com|net|org|io|co|kr|jp|us|uk|de|fr|cn|in|br)(\.[a-z]{2})?$/i,""),b=et=>/brand/i.test(et)&&/(manufacturer|메뉴팩|메뉴펙|제조)/i.test(et)?"Brand":et,rt=Array.isArray(v==null?void 0:v.citTrendMonths)?v.citTrendMonths:[],Lt=rt.length?rt[rt.length-1]:null,Wt=et=>{if(!et)return 0;if(Lt!=null&&et[Lt]!=null)return Number(et[Lt])||0;const it=Object.values(et).map(Number).filter(ft=>!isNaN(ft));return it.length?it[it.length-1]:0},st=[],ce=new Set,B=(et,it,ft)=>{et&&!ce.has(et)&&(ce.add(et),st.push({value:et,label:it,score:ft}))};if(v!=null&&v.citTouchPointsTrend&&Object.entries(v.citTouchPointsTrend).forEach(([et,it])=>{const ft=b(et);B(ft,ft,Wt(it))}),v!=null&&v.citDomainTrend){const et=Object.entries(v.citDomainTrend).filter(([ft])=>ft.startsWith("TTL|"));(et.length?et:Object.entries(v.citDomainTrend)).forEach(([,ft])=>B(ft.domain,l(ft.domain),Wt(ft.months)))}if(!st.length)return null;st.sort((et,it)=>it.score-et.score);const re=st.slice(0,10),_t=Array.isArray(e.bumpHighlight)?e.bumpHighlight:[],Jt=et=>o(it=>{const ft=Array.isArray(it.bumpHighlight)?it.bumpHighlight:[];return{...it,bumpHighlight:ft.includes(et)?ft.filter($t=>$t!==et):[...ft,et]}});return r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"범프차트 지적 요소 (색상 강조)"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:re.map(({value:et,label:it})=>{const ft=_t.includes(et);return r.jsx("button",{onClick:()=>Jt(et),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:ft?Bt:"#1E293B",color:ft?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:it},et)})})]})})(),e.showLlmShare!==!1&&r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:16},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"인용비중 노출:"}),[5,10].map(l=>r.jsxs("button",{onClick:()=>o(b=>({...b,llmShareTopN:l})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:(e.llmShareTopN===5?5:10)===l?Bt:"#1E293B",color:(e.llmShareTopN===5?5:10)===l?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:["Top ",l]},l))]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?Bt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(l=>({...l,trendMode:(l.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:L},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?Bt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?Bt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:L},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:L},children:"콘텐츠 편집"})]}),t==="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"월간 보고서 본문"}),r.jsxs("button",{onClick:async()=>{var l;try{o(rt=>({...rt,monthlyReportBody:"⏳ AI 생성 중..."}));const b=await Dt("monthlyReportBody",{products:S().products,productsCnty:S().productsCnty,total:S().total,citations:S().citations,todoText:e.todoText||"",period:e.period||"",unlaunchedMap:((l=S().extra)==null?void 0:l.unlaunchedMap)||{}},D);o(rt=>({...rt,monthlyReportBody:b}))}catch(b){console.error("[AI]",b),o(rt=>({...rt,monthlyReportBody:`[AI 실패: ${b.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.monthlyReportBody||"",onChange:l=>o(b=>({...b,monthlyReportBody:l.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:L},children:[r.jsx("code",{children:"1. 제목"})," → H2 · ",r.jsx("code",{children:"2.1 부제"})," → H3 · ",r.jsx("code",{children:"**텍스트**"})," → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{var l;try{o(rt=>({...rt,totalInsight:"⏳ AI 생성 중..."}));const b=await Dt("totalInsight",{products:S().products,productsCnty:S().productsCnty,total:S().total,todoText:e.todoText||"",unlaunchedMap:((l=S().extra)==null?void 0:l.unlaunchedMap)||{}},D);o(rt=>({...rt,totalInsight:b}))}catch(b){console.error("[AI]",b),o(rt=>({...rt,totalInsight:`[AI 실패: ${b.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:l=>o(b=>({...b,totalInsight:l.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,productInsight:"⏳ AI 생성 중..."}));const l=await Dt("product",{products:S().products,total:S().total},D);o(b=>({...b,productInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,productInsight:`[AI 실패: ${l.message}]

`+ti(S().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductInsight:!l.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?Bt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:l=>o(b=>({...b,productInsight:l.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,productHowToRead:"⏳ AI 생성 중..."}));const l=await Dt("howToRead",{section:"제품별 GEO Visibility"},D);o(b=>({...b,productHowToRead:l}))}catch{o(l=>({...l,productHowToRead:ei()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductHowToRead:!l.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?Bt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:l=>o(b=>({...b,productHowToRead:l.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{var l;try{o(rt=>({...rt,cntyInsight:"⏳ AI 생성 중..."}));const b=await Dt("cnty",{productsCnty:S().productsCnty,unlaunchedMap:((l=S().extra)==null?void 0:l.unlaunchedMap)||{}},D);o(rt=>({...rt,cntyInsight:b}))}catch(b){console.error("[AI]",b),o(rt=>({...rt,cntyInsight:`[AI 실패: ${b.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyInsight:!l.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?Bt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:l=>o(b=>({...b,cntyInsight:l.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,cntyHowToRead:"⏳ AI 생성 중..."}));const l=await Dt("howToRead",{section:"국가별 GEO Visibility"},D);o(b=>({...b,cntyHowToRead:l}))}catch{o(l=>({...l,cntyHowToRead:oi()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyHowToRead:!l.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?Bt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:l=>o(b=>({...b,cntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:l=>o(b=>({...b,prNotice:l.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:l=>o(b=>({...b,prTopicDescsRaw:l.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:l=>o(b=>({...b,prTopicPromptsRaw:l.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:l=>o(b=>({...b,bpNotice:l.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citationInsight:"⏳ AI 생성 중..."}));const l=await Dt("citation",{citations:S().citations},D);o(b=>({...b,citationInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citationInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationInsight:!l.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?Bt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:l=>o(b=>({...b,citationInsight:l.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citationHowToRead:"⏳ AI 생성 중..."}));const l=await Dt("howToRead",{section:"Citation 도메인별 현황"},D);o(b=>({...b,citationHowToRead:l}))}catch{o(l=>({...l,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationHowToRead:!l.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?Bt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:l=>o(b=>({...b,citationHowToRead:l.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citDomainInsight:"⏳ AI 생성 중..."}));const l=await Dt("citDomain",{citationsCnty:S().citationsCnty},D);o(b=>({...b,citDomainInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citDomainInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainInsight:!l.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?Bt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:l=>o(b=>({...b,citDomainInsight:l.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citDomainHowToRead:"⏳ AI 생성 중..."}));const l=await Dt("howToRead",{section:"도메인별 Citation 현황"},D);o(b=>({...b,citDomainHowToRead:l}))}catch{o(l=>({...l,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainHowToRead:!l.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?Bt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:l=>o(b=>({...b,citDomainHowToRead:l.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citCntyInsight:"⏳ AI 생성 중..."}));const l=await Dt("citCnty",{citationsCnty:S().citationsCnty},D);o(b=>({...b,citCntyInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citCntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyInsight:!l.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?Bt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:l=>o(b=>({...b,citCntyInsight:l.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citCntyHowToRead:"⏳ AI 생성 중..."}));const l=await Dt("howToRead",{section:"국가별 Citation 도메인"},D);o(b=>({...b,citCntyHowToRead:l}))}catch{o(l=>({...l,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyHowToRead:!l.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?Bt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:l=>o(b=>({...b,citCntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citPrdInsight:"⏳ AI 생성 중..."}));const l=await Dt("citPrd",{citationsCnty:S().citationsCnty},D);o(b=>({...b,citPrdInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citPrdInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdInsight:!l.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?Bt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdInsight||"",onChange:l=>o(b=>({...b,citPrdInsight:l.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"제품별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citPrdHowToRead:"⏳ AI 생성 중..."}));const l=await Dt("howToRead",{section:"제품별 Citation"},D);o(b=>({...b,citPrdHowToRead:l}))}catch{o(l=>({...l,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdHowToRead:!l.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?Bt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:l=>o(b=>({...b,citPrdHowToRead:l.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),g.length>0&&(()=>{const l=[...new Set(j.productsCnty.map(b=>b.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:L},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:l.map(b=>{const rt=(e.cntyProductFilter||{})[b]!==!1;return r.jsx("button",{onClick:()=>o(Lt=>({...Lt,cntyProductFilter:{...Lt.cntyProductFilter||{},[b]:!rt}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:rt?"#166534":"#1E293B",color:rt?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:b},b)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,dotcomInsight:"⏳ AI 생성 중..."}));const l=await Dt("dotcom",{dotcom:S().dotcom},D);o(b=>({...b,dotcomInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,dotcomInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomInsight:!l.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?Bt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:l=>o(b=>({...b,dotcomInsight:l.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,dotcomHowToRead:"⏳ AI 생성 중..."}));const l=await Dt("howToRead",{section:"닷컴 Citation"},D);o(b=>({...b,dotcomHowToRead:l}))}catch{o(b=>({...b,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomHowToRead:!l.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?Bt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:l=>o(b=>({...b,dotcomHowToRead:l.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:l=>o(b=>({...b,todoNotice:l.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,todoText:"⏳ AI 생성 중..."}));const l=await Dt("todo",{products:S().products},D);o(b=>({...b,todoText:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,todoText:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Mt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showTodo:!l.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?Bt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:l=>o(b=>({...b,todoText:l.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...At,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:L},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:fn,style:{width:"100%",padding:"9px 0",background:ht?"#14532D":"transparent",border:`1px solid ${ht?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:ht?"#86EFAC":"#64748B",fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:ht?r.jsxs(r.Fragment,{children:[r.jsx(Je,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(Wo,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:L},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:vt,onChange:l=>Et(l.target.value),placeholder:"recipient@example.com",style:{...At,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:gn,disabled:yt==="sending"||!vt.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:yt==="sending"||!vt.trim()?"not-allowed":"pointer",background:yt==="ok"?"#14532D":yt==="error"?"#7F1D1D":yt==="sending"?"#1E3A5F":vt.trim()?"#1D4ED8":"#1E293B",color:yt==="ok"?"#86EFAC":yt==="error"?"#FCA5A5":vt.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:yt==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(go,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):yt==="ok"?r.jsxs(r.Fragment,{children:[r.jsx(Je,{size:12})," 발송 완료!"]}):yt==="error"?r.jsxs(r.Fragment,{children:[r.jsx(yo,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(yo,{size:12})," 메일 발송"]})})]})]})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:L,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function li({value:t,onChange:e,products:o,productsCnty:i,monthlyVis:a,style:n}){const c=Vo.useMemo(()=>An(o,i,a),[o,i,a]);return!c.length||c.length===1&&c[0]==="Total"?null:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...n},children:[r.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),r.jsx("select",{value:t||"Total",onChange:s=>e(s.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:c.map(s=>r.jsx("option",{value:s,children:s},s))})]})}const ve="monthly-report",Ho="geo-monthly-report-cache";function ci({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:n=[],citationsCnty:c=[],lang:s="ko",weeklyLabels:d,categoryStats:m,stakeholderStats:h,cntyKeys:p=null,llmModel:u,monthlyVis:f}){const w=ct.useRef(null),g=ct.useMemo(()=>no(t,e,o,i,a,s,n,c,{categoryStats:m,stakeholderStats:h,cntyKeys:p,llmModel:u,monthlyVis:f}),[t,e,o,i,a,s,n,c,d,p,u,f]);return Vo.useEffect(()=>{const x=w.current;if(!x)return;const C=x.contentDocument||x.contentWindow.document;C.open(),C.write(g),C.close();const y=()=>{try{C.body.style.overflow="hidden",C.documentElement.style.overflow="hidden";const j=C.documentElement.scrollHeight;j&&(x.style.height=j+20+"px")}catch{}};setTimeout(y,150),setTimeout(y,400),setTimeout(y,1e3),setTimeout(y,2e3)},[g]),r.jsx("iframe",{ref:w,title:"newsletter-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function di({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:n=[],citationsCnty:c=[],lang:s="ko",weeklyLabels:d,categoryStats:m,stakeholderStats:h,cntyKeys:p=null,llmModel:u,monthlyVis:f}){const[w,g]=ct.useState(!1),x=ct.useMemo(()=>no(t,e,o,i,a,s,n,c,{categoryStats:m,stakeholderStats:h,cntyKeys:p,llmModel:u,monthlyVis:f}),[t,e,o,i,a,s,n,c,d,m,p,u,f]);async function C(){try{await navigator.clipboard.writeText(x)}catch{const y=document.createElement("textarea");y.value=x,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y)}g(!0),setTimeout(()=>g(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsxs("div",{children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:L},children:"이메일 HTML 코드"}),r.jsx("span",{style:{fontSize:11,color:"#334155",fontFamily:L,marginLeft:10},children:"table 기반 · 인라인 스타일 · 이메일 클라이언트 호환"})]}),r.jsx("button",{onClick:C,style:{padding:"6px 14px",borderRadius:7,border:"none",background:w?"#14532D":Bt,color:w?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L,cursor:"pointer",display:"flex",alignItems:"center",gap:5,transition:"all 0.2s"},children:w?r.jsxs(r.Fragment,{children:[r.jsx(Je,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(Wo,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:x})})]})}function pi(){const t=ct.useRef(Yn(Ho)).current,[e,o]=ct.useState({...Le,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,a]=ct.useState({...Le,...(t==null?void 0:t.metaEn)??{}}),[n,c]=ct.useState((t==null?void 0:t.total)??Hn),[s,d]=ct.useState((t==null?void 0:t.products)??Wn),[m,h]=ct.useState((t==null?void 0:t.citations)??Jn),[p,u]=ct.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:Vn),[f,w]=ct.useState((t==null?void 0:t.productsCnty)??Kn),[g,x]=ct.useState((t==null?void 0:t.citationsCnty)??qn),[C,y]=ct.useState((t==null?void 0:t.weeklyLabels)??null),[j,D]=ct.useState((t==null?void 0:t.weeklyAll)??{}),[I,_]=ct.useState(null),[E,M]=ct.useState(null),[U,N]=ct.useState("preview"),[V,A]=ct.useState("ko"),[F,O]=ct.useState("Total"),[P,J]=ct.useState((t==null?void 0:t.monthlyVis)??[]),[X,H]=ct.useState([]),[v,W]=ct.useState(""),[T,q]=ct.useState(!1),[K,k]=ct.useState(""),[S,$]=ct.useState(null),[ot,Z]=ct.useState(!0),[lt,mt]=ct.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),wt=ct.useMemo(()=>{const Y=new Set;return(f||[]).forEach(G=>{G&&G.country&&!/^(ttl|total)$/i.test(G.country)&&Y.add(String(G.country).toUpperCase())}),Array.from(Y).sort()},[f]),kt=lt.length>0?lt:null,R=ct.useCallback(Y=>{mt(G=>G.includes(Y)?G.filter(bt=>bt!==Y):[...G,Y])},[]),tt=ct.useCallback(()=>mt(wt),[wt]),nt=ct.useCallback(()=>mt([]),[]);ct.useEffect(()=>{let Y=!1;const G=lr(e.period)||"3월";async function bt(){var Pt,jt,Gt;try{const oe=await fetch("/api/tracker-snapshot-v2"),Ot=oe.ok?await oe.json():null;if(Ot!=null&&Ot.ok&&((Gt=(jt=(Pt=Ot.data)==null?void 0:Pt.quantitativeGoals)==null?void 0:jt.rows)!=null&&Gt.length)){const Ut=So(Ot.data,G),Vt=To(Ot.data,G);if(Ut!=null&&Ut.length&&!Y){_(Ut),Vt!=null&&Vt.length&&M(Vt);return}}}catch{}try{const[{parseKPISheet:oe},Ot]=await Promise.all([Ye(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Ye(()=>import("./xlsx-DiWaSB7x.js").then(ne=>ne.x),__vite__mapDeps([0,1]))]),Ut=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,Vt=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${Ut}&headers=1`,Nt=await fetch(Vt,{cache:"no-store"});if(!Nt.ok)return;const Ht=await Nt.text(),Kt=Ot.read(Ht,{type:"string"}),He=Kt.Sheets[Kt.SheetNames[0]],qt=Ot.utils.sheet_to_json(He,{header:1,defval:""}),le=oe(qt),be=So(le,G);if(be!=null&&be.length&&!Y){_(be);const ne=To(le,G);ne!=null&&ne.length&&M(ne)}}catch{}}return bt(),()=>{Y=!0}},[e.period]);const ht=V==="en"?i:e,xt=V==="en"?a:o,vt=ct.useMemo(()=>Re(s,f,m,g,V),[s,f,m,g,V]);ct.useEffect(()=>{Zn(ve).then(H)},[]);const Et=ct.useRef(null);function yt(Y,G=2e3){clearTimeout(Et.current),k(Y),Et.current=setTimeout(()=>k(""),G)}ct.useEffect(()=>()=>clearTimeout(Et.current),[]);const Tt=ct.useRef(!1);ct.useEffect(()=>{let Y=!1;return Pe(ve).then(G=>{Y||!G||(Tt.current=!0,G.meta&&o(bt=>({...bt,...G.meta})),G.total&&c(bt=>({...bt,...G.total})),G.citations&&h(G.citations),G.dotcom&&u(bt=>({...bt,...G.dotcom})),G.productsCnty&&w(G.productsCnty),G.citationsCnty&&x(G.citationsCnty),G.weeklyLabels&&y(G.weeklyLabels),G.weeklyAll&&D(bt=>({...bt,...G.weeklyAll})),G.monthlyVis&&J(G.monthlyVis),G.productsPartial?d(G.productsPartial.map(bt=>{var Gt;const Pt=((Gt=G.weeklyMap)==null?void 0:Gt[bt.id])||[],jt=bt.vsComp>0?bt.score/bt.vsComp*100:100;return{...bt,weekly:Pt,monthly:[],compRatio:Math.round(jt),status:jt>=100?"lead":jt>=80?"behind":"critical"}})):G.weeklyMap&&d(bt=>bt.map(Pt=>{var Gt;const jt=(Gt=G.weeklyMap)==null?void 0:Gt[Pt.id];return jt?{...Pt,weekly:jt}:Pt})))}),()=>{Y=!0}},[]),ct.useEffect(()=>{Xn(Ho,{metaKo:e,metaEn:i,total:n,products:s,citations:m,dotcom:p,productsCnty:f,citationsCnty:g,weeklyLabels:C,weeklyAll:j,selectedCountries:lt})},[e,i,n,s,m,p,f,g,C,j,lt]);async function St(){if(!S)return;const G=await tr(ve,S,{metaKo:e,metaEn:i,total:n,products:s,citations:m,dotcom:p,productsCnty:f,citationsCnty:g,weeklyLabels:C,weeklyAll:j});G&&H(G),yt(G?"저장 완료!":"저장 실패")}async function z(){var bt;const Y=v.trim()||`${ht.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,G=await Qn(ve,Y,{metaKo:e,metaEn:i,total:n,products:s,citations:m,dotcom:p,productsCnty:f,citationsCnty:g,weeklyLabels:C,weeklyAll:j});G&&(H(G),W(""),$(((bt=G[0])==null?void 0:bt.ts)||null)),yt(G?"새로 저장 완료!":"저장 실패")}function at(Y){const G=Y.data;o({...Le,...G.metaKo||G.meta||{}}),a({...Le,...G.metaEn||{}}),G.total&&c(G.total),G.products&&d(G.products),G.citations&&h(G.citations),G.dotcom&&u(G.dotcom),G.productsCnty&&w(G.productsCnty),G.citationsCnty&&x(G.citationsCnty),G.weeklyLabels&&y(G.weeklyLabels),G.weeklyAll&&D(G.weeklyAll),$(Y.ts),yt(`"${Y.name}" 불러옴`)}async function Ft(Y){const G=X[Y];if(!G)return;const bt=await er(ve,G.ts);bt&&H(bt),S===G.ts&&$(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:L},children:[ot&&r.jsx(si,{mode:ve,meta:ht,setMeta:xt,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:a,total:n,setTotal:c,products:s,setProducts:d,citations:m,setCitations:h,dotcom:p,setDotcom:u,productsCnty:f,setProductsCnty:w,citationsCnty:g,setCitationsCnty:x,resolved:vt,previewLang:V,setPreviewLang:A,snapshots:X,setSnapshots:H,setWeeklyLabels:y,setWeeklyAll:D,weeklyLabels:C,weeklyAll:j,generateHTML:no}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>Z(Y=>!Y),title:ot?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:ot?r.jsx(vn,{size:16}):r.jsx(wn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"월간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"월간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:Y,tab:G,lang:bt,label:Pt})=>{const jt=G==="code"?U==="code":U==="preview"&&V===bt;return r.jsx("button",{onClick:()=>{N(G),bt&&A(bt)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:jt?"#1E293B":"transparent",color:jt?"#FFFFFF":"#475569",fontSize:11,fontWeight:jt?700:500,fontFamily:L,cursor:"pointer"},children:Pt},Y)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[K&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:L},children:K}),r.jsxs("button",{onClick:St,disabled:!S,title:S?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:S?"pointer":"default",background:S?"#1D4ED8":"#1E293B",color:S?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4,opacity:S?1:.5},children:[r.jsx(bo,{size:11})," 저장"]}),r.jsx("input",{value:v,onChange:Y=>W(Y.target.value),placeholder:"버전 이름...",onKeyDown:Y=>Y.key==="Enter"&&z(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:L,outline:"none"}}),r.jsxs("button",{onClick:z,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(bo,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>q(!T),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:T?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:L,display:"flex",alignItems:"center",gap:4},children:[r.jsx(Cn,{size:11})," 불러오기 ",X.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",X.length,")"]})]}),T&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:Y=>Y.stopPropagation(),children:X.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:L,textAlign:"center"},children:"저장된 버전이 없습니다"}):X.map((Y,G)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:S===Y.ts?"#1E3A5F":"#0F172A",border:S===Y.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:L,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Y.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:L},children:new Date(Y.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{at(Y),q(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:L},children:"적용"}),r.jsx("button",{onClick:()=>Ft(G),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(kn,{size:10})})]},Y.ts))})]})]})]}),wt.length>0&&r.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[r.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),wt.map(Y=>{const G=lt.includes(Y);return r.jsx("button",{onClick:()=>R(Y),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(G?"#22C55E":"#334155"),background:G?"#16A34A":"#1E293B",color:G?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:Y},Y)}),r.jsx("button",{onClick:tt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),r.jsx("button",{onClick:nt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),r.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:lt.length===0?"전체 국가":`${lt.length}개 선택`})]}),U==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsxs("div",{style:{maxWidth:960,margin:"0 auto"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:r.jsx(li,{value:F,onChange:O,products:vt.products,productsCnty:vt.productsCnty,monthlyVis:P})}),r.jsx(ci,{meta:ht,total:n,products:vt.products,citations:vt.citations,dotcom:p,productsCnty:vt.productsCnty,citationsCnty:vt.citationsCnty,lang:V,weeklyLabels:C,categoryStats:I,stakeholderStats:E,cntyKeys:kt,llmModel:F,monthlyVis:P})]})}):r.jsx(di,{meta:ht,total:n,products:vt.products,citations:vt.citations,dotcom:p,productsCnty:vt.productsCnty,citationsCnty:vt.citationsCnty,lang:V,weeklyLabels:C,categoryStats:I,stakeholderStats:E,cntyKeys:kt,llmModel:F,monthlyVis:P}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:L},children:["v","3.1.9"]})})]})]})}Sn.createRoot(document.getElementById("root")).render(r.jsx(pi,{}));
