const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-DiWaSB7x.js","assets/react-CVd_-pOw.js"])))=>i.map(i=>d[i]);
import{j as r,b as H,R as go,L as bn,D as xn,G as yo,A as vn,c as We,S as Lt,C as Je,d as Wo,e as mo,f as Vo,P as wn,h as Cn,i as bo,F as kn,T as Sn}from"./react-CVd_-pOw.js";import{R as Fn}from"./react-dom-DUAWm-_Q.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const An="modulepreload",En=function(t){return"/admin/monthly-report/"+t},xo={},Ye=function(e,o,i){let s=Promise.resolve();if(o&&o.length>0){let c=function(y){return Promise.all(y.map(g=>Promise.resolve(g).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=c(o.map(y=>{if(y=En(y),y in xo)return;xo[y]=!0;const g=y.endsWith(".css"),u=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${u}`))return;const f=document.createElement("link");if(f.rel=g?"stylesheet":An,g||(f.as="script"),f.crossOrigin="",f.href=y,d&&f.setAttribute("nonce",d),document.head.appendChild(f),g)return new Promise((p,k)=>{f.addEventListener("load",p),f.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${y}`)))})}))}function n(c){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=c,window.dispatchEvent(a),!a.defaultPrevented)throw c}return s.then(c=>{for(const a of c||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})},se="Total";function Tn(...t){const e=new Set([se]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(i=>{i!=null&&i.llmModel&&e.add(i.llmModel),((i==null?void 0:i.monthlyScores)||[]).forEach(n=>Object.keys((n==null?void 0:n.byLlm)||{}).forEach(c=>e.add(c)))})}),[se,...Array.from(e).filter(o=>o!==se).sort((o,i)=>o.localeCompare(i))]}function Ko(t,e){return!Array.isArray(t)||!e||e===se?t:t.map(o=>{var d,y;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const s=i[i.length-1],n=i.length>=2?i[i.length-2]:null,c=(d=s==null?void 0:s.byLlm)==null?void 0:d[e],a=(y=n==null?void 0:n.byLlm)==null?void 0:y[e];return c?{...o,score:c.score??o.score,prev:(a==null?void 0:a.score)??o.prev,vsComp:c.comp??o.vsComp,allScores:c.allScores??o.allScores,monthlyScores:i.map(g=>{var f;const u=(f=g==null?void 0:g.byLlm)==null?void 0:f[e];return u?{...g,score:u.score,comp:u.comp,allScores:u.allScores}:g})}:o})}function qo(t,e){return!Array.isArray(t)||!e||e===se?t:t.map(o=>{var y,g;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const s=i[i.length-1],n=i.length>=2?i[i.length-2]:null,c=(y=s==null?void 0:s.byLlm)==null?void 0:y[e],a=(g=n==null?void 0:n.byLlm)==null?void 0:g[e];if(!c)return o;const d=c.compScore??o.compScore;return{...o,score:c.score??o.score,prev:(a==null?void 0:a.score)??o.prev,compScore:d,compName:c.compName??o.compName,allScores:c.allScores??o.allScores,gap:+((c.score??o.score)-d||0).toFixed(2),monthlyScores:i.map(u=>{var p;const f=(p=u==null?void 0:u.byLlm)==null?void 0:p[e];return f?{...u,score:f.score,compScore:f.compScore,compName:f.compName,allScores:f.allScores}:u})}})}function Ln(t,e){if(!Array.isArray(t)||!e||e===se)return(t||[]).filter(s=>!s.llmModel||s.llmModel===se||s.llmModel==="TOTAL"||s.llmModel==="All");const o={};t.forEach(s=>{const n=`${s.date}|${s.country}|${s.division}`;o[n]||(o[n]={}),o[n][s.llmModel]=s});const i=[];return Object.values(o).forEach(s=>{const n=s[e]||s[se]||s.TOTAL||s.All;n&&i.push(n)}),i}function Jo(t,e,o){if(!o||o===se||!Array.isArray(e)||!e.length)return t;const i=e.filter(c=>(c.country==="TOTAL"||c.country==="TTL")&&(c.division==="TOTAL"||c.division==="TTL"||c.division==="")&&c.llmModel===o);if(!i.length)return t;i.sort((c,a)=>String(c.date).localeCompare(String(a.date)));const s=i[i.length-1],n=i.length>=2?i[i.length-2]:null;return{...t,score:s.lg??t.score,prev:(n==null?void 0:n.lg)??t.prev,vsComp:s.comp??t.vsComp}}const G="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",$n=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function Ie(t){const e=$n.indexOf(t);return e>=0?e:999}function bt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Bn(t){if(!t||!String(t).trim())return"";const e=c=>bt(c).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),o=String(t).split(/\n/),i=[];let s=[];const n=()=>{s.length&&(i.push(`<p style="margin:0 0 10px;font-size:13px;line-height:1.75;font-family:${G};color:#222;">${s.map(e).join("<br/>")}</p>`),s=[])};for(const c of o){const a=c.trim();if(!a){n();continue}let d;(d=a.match(/^(\d+)\.(\d+)\.?\s+(.+)$/))?(n(),i.push(`<h3 style="font-size:14px;font-weight:700;margin:14px 0 6px;font-family:${G};color:#111;">${bt(d[1])}.${bt(d[2])} ${e(d[3])}</h3>`)):(d=a.match(/^(\d+)\.\s+(.+)$/))?(n(),i.push(`<h2 style="font-size:16px;font-weight:700;margin:22px 0 10px;border-top:1px solid #999;padding-top:12px;font-family:${G};color:#000;">${bt(d[1])}. ${e(d[2])}</h2>`)):s.push(a)}return n(),i.join("")}const vo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function eo(t){return vo.filter(e=>t.includes(e)).concat(t.filter(e=>!vo.includes(e)))}const Rn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function oo(t){return Rn[String(t||"").trim().toUpperCase()]||t}function oe(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function ze(t,e){if(t==null||e==null||e===0)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function je(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function fe(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function In(t){if(!t)return null;const e=t.toLowerCase();return e.includes("youtube")?{bg:"#FFE4E6",color:"#9F1239"}:e.includes("reddit")?{bg:"#FFEDD5",color:"#9A3412"}:null}function jn(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — BU Totals (Sheet Values)",bu:"BU",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"본부별 종합 (시트 합계 직접 사용)",bu:"본부",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},s=["MS","HS","ES"],c=s.filter(a=>t[a]).concat(Object.keys(t).filter(a=>!s.includes(a))).map(a=>{const d=t[a],y=(e||{})[a],g=d.comp>0?Math.round(d.lg/d.comp*100):100,u=fe(d.lg,d.comp)||"#FFFFFF",f=y&&y.lg!=null?ze(d.lg,y.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};font-weight:700;text-align:center;background:#F5F5F5;">${bt(a)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;font-weight:700;background:${u};">${oe(d.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;background:${u};">${oe(d.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;font-weight:700;background:${u};">${g}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;">${f}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${G};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${G};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.bu}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function Pn(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — Country Totals (Sheet Values)",country:"Country",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"국가별 종합 (시트 합계 직접 사용)",country:"국가",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},n=eo(Object.keys(t)).map(c=>{const a=t[c],d=(e||{})[c],y=a.comp>0?Math.round(a.lg/a.comp*100):100,g=fe(a.lg,a.comp)||"#FFFFFF",u=d&&d.lg!=null?ze(a.lg,d.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};font-weight:700;text-align:center;background:#F5F5F5;">${bt(oo(c))}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;font-weight:700;background:${g};">${oe(a.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;background:${g};">${oe(a.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;font-weight:700;background:${g};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;">${u}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${G};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${G};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.country}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function Mn(t,e,o,i){const s=o==="en"?{product:"Product",metric:"Metric",title:"Monthly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"월간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},n={};(e||[]).forEach(h=>{h.country&&h.product&&(n[`${h.country}|${h.product}`]=h.score)});const c={},a=new Set,d=new Set;(t||[]).forEach(h=>{!h.country||h.country==="TTL"||h.country==="TOTAL"||!h.product||(a.add(h.country),d.add(h.product),c[h.product]||(c[h.product]={}),c[h.product][h.country]=h)});const y=eo(Array.from(a)),g=Array.from(d).sort((h,F)=>Ie(h)-Ie(F));if(!g.length||!y.length)return`<p style="font-size:11px;color:#666;font-family:${G};">데이터가 없습니다.</p>`;const u={};(i||[]).forEach(h=>{[h.kr,h.category,h.id,h.en].filter(Boolean).forEach(x=>{u[x]=h})});const p='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+y.map(h=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${bt(oo(h))}</th>`).join(""),k=[];return g.forEach((h,F)=>{const x=F%2===0?"#FFFFFF":"#FAFAFA",v=u[h],I=(v?fe(v.score,v.vsComp):null)||x,$=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${G};text-align:center;font-weight:700;background:${I};">${v?oe(v.score):"—"}</td>`,j=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${G};text-align:center;font-weight:700;background:${I};">${v?je(v.score,v.vsComp):"—"}</td>`,T=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${G};text-align:center;background:${I};color:#1A1A1A;font-weight:600;">${v!=null&&v.compName?bt(v.compName):"—"}</td>`,_=y.map(E=>{var m;const A=(m=c[h])==null?void 0:m[E],L=(A?fe(A.score,A.compScore):null)||x;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${G};text-align:center;font-weight:700;background:${L};">${A?oe(A.score):"—"}</td>`}).join(""),O=y.map(E=>{var m;const A=(m=c[h])==null?void 0:m[E],L=(A?fe(A.score,A.compScore):null)||x;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${G};text-align:center;font-weight:700;background:${L};">${A?je(A.score,A.compScore):"—"}</td>`}).join(""),C=y.map(E=>{var m;const A=(m=c[h])==null?void 0:m[E],L=(A?fe(A.score,A.compScore):null)||x;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${G};text-align:center;background:${L};color:#1A1A1A;font-weight:600;">${A!=null&&A.compName?bt(A.compName):"—"}</td>`}).join("");k.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${G};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${bt(h)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${G};font-weight:600;background:#F5F5F5;white-space:nowrap;">${s.lg} (%)</td>
        ${$}${_}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${G};background:#F5F5F5;white-space:nowrap;">${s.ratio}</td>
        ${j}${O}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${G};background:#F5F5F5;white-space:nowrap;">${o==="en"?"Top Comp":"경쟁사"}</td>
        ${T}${C}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${G};color:#000;">${s.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${G};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${s.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${s.metric}</th>
        ${p}
      </tr>
    </thead>
    <tbody>
      ${k.join("")}
    </tbody>
  </table>
  </div>`}function Dn(t,e,o){const i=o==="en"?{title:"Monthly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"월간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",mom:"MoM(%p)"},s={};(e||[]).forEach(d=>{d.id&&(s[d.id]=d.score)});const n=["MS","HS","ES"],c={};(t||[]).forEach(d=>{const y=d.bu||"OTHER";c[y]||(c[y]=[]),c[y].push(d)});const a=[];return n.forEach(d=>{const y=(c[d]||[]).slice().sort((g,u)=>Ie(g.kr||g.category||g.id)-Ie(u.kr||u.category||u.id));y.forEach((g,u)=>{const f=g.prev!=null&&g.prev>0?g.prev:s[g.id],p=ze(g.score,f),k=fe(g.score,g.vsComp)||"#FFFFFF";a.push(`<tr>
        ${u===0?`<td rowspan="${y.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${d}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;">${bt(g.kr||g.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;font-weight:700;background:${k};">${oe(g.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;background:${k};">${oe(g.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;background:${k};">${bt(g.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;font-weight:700;background:${k};">${je(g.score,g.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${G};text-align:center;">${p}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${G};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${G};">
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
  </table>`}function Nn(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((n,c)=>n+(c.score||0),0),s=t.map((n,c)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:center;">${c+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};">${bt(n.source||n.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:right;font-weight:700;">${(n.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:right;">${i>0?(n.score/i*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${G};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${G};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${s}</tbody>
  </table>`}function _n(t,e){const o=(t||[]).filter(a=>a.cnty==="TTL"||a.cnty==="TOTAL"||!a.cnty);if(!o.length)return"";o.sort((a,d)=>(d.citations||0)-(a.citations||0));const i=o.slice(0,20),s=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},n=o.reduce((a,d)=>a+(d.citations||0),0),c=i.map((a,d)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:center;">${d+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};">${bt(a.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};">${bt(a.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:right;font-weight:700;">${(a.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:right;">${n>0?(a.citations/n*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${G};color:#000;">${s.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${G};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${s.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${s.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${s.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${s.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function On(t,e){const o={};(t||[]).forEach(a=>{!a.cnty||a.cnty==="TTL"||a.cnty==="TOTAL"||(o[a.cnty]||(o[a.cnty]=[]),o[a.cnty].push(a))});const i=eo(Object.keys(o));if(!i.length)return"";const s=e==="en"?{title:"Citation by Country (Top 5 Domains)",country:"Country",total:"Total"}:{title:"국가별 Citation Top 5 도메인",country:"국가",total:"전체"},n=5,c=i.map(a=>{const d=o[a].sort((f,p)=>(p.citations||0)-(f.citations||0)),y=d.reduce((f,p)=>f+(p.citations||0),0),g=d.slice(0,n),u=[];for(let f=0;f<n;f++){const p=g[f],k=p?In(p.domain):null,h=k?`background:${k.bg};`:"",F=k?`color:${k.color};font-weight:700;`:"";u.push(`<td style="border:1px solid #999;padding:5px 8px;font-size:10px;font-family:${G};${h}${F}">${p?`${bt(p.domain||"")} <span style="color:#666;font-weight:400;">(${(p.citations||0).toLocaleString("en-US")})</span>`:"—"}</td>`)}return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};font-weight:700;background:#F5F5F5;text-align:center;">${bt(oo(a))}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:right;font-weight:700;">${y.toLocaleString("en-US")}</td>
      ${u.join("")}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${G};color:#000;">${s.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${G};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${s.country}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${s.total}</th>
      ${Array.from({length:n},(a,d)=>`<th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">#${d+1}</th>`).join("")}
    </tr></thead>
    <tbody>${c}</tbody>
  </table>
  </div>`}function zn(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},s=Object.keys(o).filter(a=>o[a]!=null);if(!s.length)return"";const n=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},c=s.map(a=>{const d=o[a]||0,y=i[a]||0,g=d-y,u=g>0?"LG":g<0?"SS":"=",f=g>0?"#86EFAC":g<0?"#FCA5A5":"#FFFFFF",p=g>0?"#14532D":g<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${f};color:${p};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};font-weight:${a==="TTL"?"900":"600"};">${bt(a)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:right;font-weight:700;">${d.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:right;">${y.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:right;font-weight:700;">${g>0?"+":""}${g.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${G};text-align:center;font-weight:900;">${u}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${G};color:#000;">${n.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${G};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${n.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${n.winner}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function Gn(t,e,o){var a;if(!t||!t.length)return"";const i=((a=t[0])==null?void 0:a.targetMonth)||"3월",s=e==="en"?{title:`Progress Tracker — ${i} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${i} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function n(d){return d>=80?"#D1FAE5":d>=50?"#FEF3C7":"#FEE2E2"}const c=t.map(d=>{const y=(d.monthRate||0).toFixed(0),g=(d.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${G};background:#F5F5F5;">${bt(d.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(d.monthRate)};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(d.monthActual||0).toLocaleString()} / ${(d.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${n(d.progressRate)};">${g}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(d.cumActual||0).toLocaleString()} / ${(d.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${G};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${G};color:#000;">${s.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${G};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i} ${s.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${s.count}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function Un(t,e){var c;if(!t||!t.length)return"";const o=((c=t[0])==null?void 0:c.targetMonth)||"3월",i=e==="en"?{title:`${o} Achievement by Organization`,org:"Organization",tasks:"Tasks",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`${o} 조직별 달성 현황`,org:"조직",tasks:"과제수",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function s(a){return a>=80?"#D1FAE5":a>=50?"#FEF3C7":"#FEE2E2"}const n=t.map(a=>`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${G};background:#F5F5F5;">${bt(a.stakeholder)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${a.taskCount}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${s(a.monthRate)};">${(a.monthRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(a.monthActual||0).toLocaleString()} / ${(a.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${s(a.progressRate)};">${(a.progressRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(a.cumActual||0).toLocaleString()} / ${(a.annualGoal||0).toLocaleString()}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:16px 0 10px;font-family:${G};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${G};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.org}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.tasks}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${n}</tbody>
  </table>`}function no(t,e,o,i,s={},n="ko",c=[],a=[],d={}){const{productsCntyPrev:y=[],productsPrev:g=[],categoryStats:u=null,stakeholderStats:f=null,cntyKeys:p=null,llmModel:k,monthlyVis:h}=d;if(k&&k!=="Total"&&(o=Ko(o,k),c=qo(c,k),e=Jo(e,h,k)),Array.isArray(p)&&p.length>0){const v=new Set(p.map(S=>String(S).toUpperCase()));c=(c||[]).filter(S=>S&&v.has(String(S.country).toUpperCase())),a=(a||[]).filter(S=>S&&v.has(String(S.country).toUpperCase()))}const F=n==="en"?"GEO Monthly Report":"GEO 월간 보고서",x=t.period||"";return`<!DOCTYPE html><html lang="${n}"><head>
<meta charset="UTF-8">
<title>${bt(F)} — ${bt(x)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${G} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${G};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${G};">${bt(F)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${G};">${bt(x)} · ${bt(t.team||"")}</p>
    </div>

    ${t.showMonthlyReportBody!==!1&&t.monthlyReportBody?`
    <section style="margin-bottom:28px;">
      ${Bn(t.monthlyReportBody)}
    </section>`:""}

    ${e&&e.score!=null?`
    <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-bottom:8px;font-family:${G};">
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;width:30%;">${n==="en"?"Total LG Visibility":"전체 LG Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${oe(e.score)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${n==="en"?"Competitor (Samsung) Visibility":"경쟁사(Samsung) Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${oe(e.vsComp)}%</td>
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

    ${jn(e==null?void 0:e.buTotals,e==null?void 0:e.buTotalsPrev,n)}
    ${Pn(e==null?void 0:e.countryTotals,e==null?void 0:e.countryTotalsPrev,n)}
    ${Dn(o,g,n)}
    ${Mn(c,y,n,o)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${G};color:#000;">${n==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${Nn(i,n)}
    ${_n(a,n)}
    ${On(a,n)}
    ${zn(s,n)}

    ${Gn(u,n)}
    ${Un(f,n)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${G};">
      <p style="margin:0;">${n==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const mt="#CF0652",R="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Hn=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,$e={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,monthlyReportBody:Hn,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},Wn={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},Vn=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],Kn={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},qn=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],Jn=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],Yn=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],Yo=3;function Xn(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==Yo?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function Zn(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:Yo}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ge={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function ge(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function Qn(t){try{const e=await fetch(ge(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function tr(t,e,o){try{const i=await fetch(ge(t).snapshots,{method:"POST",headers:Ge,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const s=await i.json();return s.ok?s.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function er(t,e,o){try{const i=await fetch(`${ge(t).snapshots}/${e}`,{method:"PUT",headers:Ge,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const s=await i.json();return s.ok?s.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function or(t,e){try{const o=await fetch(`${ge(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function $t(t,e,o="ko",i=""){try{const s=await fetch("/api/generate-insight",{method:"POST",headers:Ge,body:JSON.stringify({type:t,data:e,lang:o,rules:i})});if(!s.ok){const c=await s.json().catch(()=>({}));throw new Error(c.error||`HTTP ${s.status}`)}const n=await s.json();if(!n.ok)throw new Error(n.error||"AI 생성 실패");return n.insight}catch(s){throw console.error("[API] generateAIInsight failed:",s.message),s}}async function Pe(t){try{const e=await fetch(ge(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function wo(t){try{const e=await fetch(ge(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function nr(t,e,o={}){const{includePromptList:i=!1,includeReadability:s=!1}=o,[n,c]=await Promise.all([Pe("dashboard").catch(()=>null),Pe("visibility").catch(()=>null)]),a={...n||{},...c||{}};if(n&&Object.keys(n).forEach(P=>{a[P]==null&&n[P]!=null&&(a[P]=n[P])}),c!=null&&c.meta&&(n!=null&&n.meta)&&(a.meta={...n.meta||{},...c.meta||{}}),!a||!Object.keys(a).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const d=a.meta||{},y=a.total||{},u=(a.productsPartial||a.products||[]).map(P=>{var w;const L=P.weekly||((w=a.weeklyMap)==null?void 0:w[P.id])||[],m=P.vsComp>0?P.score/P.vsComp*100:100;return{...P,weekly:L,monthly:P.monthly||[],compRatio:P.compRatio||Math.round(m),status:P.status||(m>=100?"lead":m>=80?"behind":"critical")}}),f=a.citations||[],p=a.dotcom||{},k=a.productsCnty||[],h=a.citationsCnty||[],F=a.weeklyLabels||null,x=a.weeklyAll||{},v=a.citationsByCnty||{},S=a.dotcomByCnty||{},I=e(u,k,f,h,"ko"),$=e(u,k,f,h,"en"),j={appendixPrompts:a.appendixPrompts||[],weeklyPR:a.weeklyPR||[],weeklyPRLabels:a.weeklyPRLabels||[],weeklyBrandPrompt:a.weeklyBrandPrompt||[],weeklyBrandPromptLabels:a.weeklyBrandPromptLabels||[],unlaunchedMap:a.unlaunchedMap||{},prTopicList:a.prTopicList||[],weeklyLabelsFull:a.weeklyLabelsFull||[]},T={monthlyVis:a.monthlyVis||[],includePromptList:i,includeReadability:s},_=t(d,y,I.products,I.citations,p,"ko",I.productsCnty,I.citationsCnty,F,x,v,S,T,j),O=t({...d,title:d.title||"GEO KPI Dashboard"},y,$.products,$.citations,p,"en",$.productsCnty,$.citationsCnty,F,x,v,S,T,j),C=`${d.period||""} ${d.title||"KPI Dashboard"}`.trim(),A=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:C,htmlKo:_,htmlEn:O})})).json();if(!A.ok)throw new Error(A.error||"게시 실패");return A}async function Co(t,e){try{const o=await fetch(ge(t).syncData,{method:"POST",headers:Ge,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const rr={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Ve={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},ko={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function Re(t,e,o,i,s){return s!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(n=>({...n,kr:n.en||Ve[n.kr]||n.kr,compName:n.compNameEn||ko[n.compName]||n.compName})),productsCnty:e.map(n=>({...n,country:n.countryEn||rr[n.country]||n.country,product:n.productEn||Ve[n.product]||n.product,compName:n.compNameEn||ko[n.compName]||n.compName})),citations:o.map(n=>({...n,category:n.categoryEn||Ve[n.category]||n.category})),citationsCnty:i.map(n=>({...n,cnty:n.cntyEn||n.cnty}))}}async function ir(t,{from:e="ko",to:o="en"}={}){const s=[];for(let n=0;n<t.length;n+=20){const c=t.slice(n,n+20),a=await Promise.all(c.map(async d=>{if(!d||!d.trim())return d;const y=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(d)}`,g=await fetch(y);if(!g.ok)throw new Error(`번역 실패 (${g.status})`);return(await g.json())[0].map(f=>f[0]).join("")}));s.push(...a)}return s}const he=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],ar=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function sr(t){const e=ar.indexOf(t);return e>=0?e:999}function Be(t){return sr(t)}function ro(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function Xo(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[ro(o)]=o)}),e}function So(t,e){var d,y,g,u;if(!((d=t==null?void 0:t.quantitativeGoals)!=null&&d.rows))return(g=(y=t==null?void 0:t._dashboard)==null?void 0:y.categoryStats)!=null&&g.length?[...t._dashboard.categoryStats].sort((f,p)=>Be(f.category)-Be(p.category)):null;const o=t.quantitativeGoals.rows,i=Xo((u=t.quantitativeResults)==null?void 0:u.rows);new Date().getMonth()+1;let s=e,n=he.indexOf(s);n<0&&(s="3월",n=0);const c=[...new Set(o.map(f=>f.taskCategory).filter(Boolean))],a=n>0?he[n-1]:null;return c.map(f=>{const p=o.filter(T=>T.taskCategory===f);let k=0,h=0,F=0,x=0,v=0,S=0;p.forEach(T=>{var A,P,L,m,w;const _=ro(T),O=i[_]||{},C=typeof((A=T.monthly)==null?void 0:A[s])=="number"?T.monthly[s]:0,E=typeof((P=O.monthly)==null?void 0:P[s])=="number"?O.monthly[s]:0;if(h+=C,k+=E,a){const N=typeof((L=T.monthly)==null?void 0:L[a])=="number"?T.monthly[a]:0,B=typeof((m=O.monthly)==null?void 0:m[a])=="number"?O.monthly[a]:0;S+=N,v+=B}for(let N=0;N<=n;N++){const B=he[N];typeof((w=O.monthly)==null?void 0:w[B])=="number"&&(F+=O.monthly[B])}he.forEach(N=>{var B;typeof((B=T.monthly)==null?void 0:B[N])=="number"&&(x+=T.monthly[N])})});const I=h>0?Math.round(k/h*1e3)/10:0,$=S>0?Math.round(v/S*1e3)/10:0,j=x>0?Math.round(F/x*1e3)/10:0;return{category:f,taskCount:p.length,targetMonth:s,monthRate:I,prevMonthRate:$,prevMonth:a,progressRate:j,monthActual:k,monthGoal:h,cumActual:F,annualGoal:x}}).sort((f,p)=>Be(f.category)-Be(p.category))}const lr=["MS","HS","ES","고가혁","브랜드","D2C","PR"];function Fo(t){const e=lr.indexOf(t);return e>=0?e:999}function Ao(t,e){var a,d;if(!((a=t==null?void 0:t.quantitativeGoals)!=null&&a.rows))return null;const o=t.quantitativeGoals.rows,i=Xo((d=t.quantitativeResults)==null?void 0:d.rows);new Date().getMonth()+1;let s=e,n=he.indexOf(s);return n<0&&(s="3월",n=0),[...new Set(o.map(y=>y.stakeholder).filter(Boolean))].map(y=>{const g=o.filter(x=>x.stakeholder===y);let u=0,f=0,p=0,k=0;g.forEach(x=>{var j,T,_;const v=ro(x),S=i[v]||{},I=typeof((j=x.monthly)==null?void 0:j[s])=="number"?x.monthly[s]:0,$=typeof((T=S.monthly)==null?void 0:T[s])=="number"?S.monthly[s]:0;f+=I,u+=$;for(let O=0;O<=n;O++){const C=he[O];typeof((_=S.monthly)==null?void 0:_[C])=="number"&&(p+=S.monthly[C])}he.forEach(O=>{var C;typeof((C=x.monthly)==null?void 0:C[O])=="number"&&(k+=x.monthly[O])})});const h=f>0?Math.round(u/f*1e3)/10:0,F=k>0?Math.round(p/k*1e3)/10:0;return{stakeholder:y,taskCount:g.length,targetMonth:s,monthRate:h,monthActual:u,monthGoal:f,progressRate:F,cumActual:p,annualGoal:k}}).sort((y,g)=>Fo(y.stakeholder)-Fo(g.stakeholder))}function cr(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}async function Zo(){const t=await Ye(()=>import("./xlsx-DiWaSB7x.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const dr=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],Xe={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},pr={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Ee={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Fe={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},ur={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(dr.map((t,e)=>[t,e]));const Qo={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},tn=new Set(Object.values(Ee)),Eo=[...new Set(Object.values(Qo))].filter(t=>!tn.has(t));Eo.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:Eo,validCodes:[...tn]});function Ze(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Nt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function fr(t,e){return Array.isArray(t)?t.length===0?(Ze(e,"invalid input: empty rows",{len:0}),!1):!0:(Ze(e,"invalid input: not an array",{type:typeof t}),!1)}function Ue(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const i=o.map(s=>String(s??"").trim().toLowerCase());return e.every(s=>i.some(n=>s instanceof RegExp?s.test(n):n===String(s).toLowerCase()))})}function hr(t,e="sync"){var s,n,c;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((s=t.products)==null?void 0:s.length)||((n=t.productsPartial)==null?void 0:n.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(c=t.weeklyLabels)!=null&&c.length&&t.weeklyLabels.every((d,y)=>d===`W${y+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const wt={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR Visibility",weeklyPR:"Weekly PR Visibility",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",appendix:"Appendix.Prompt List",unlaunched:"unlaunched",prTopicList:"PR Topic List"},To=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],Lo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function gr(t,e,o,i,s={}){const n=await Zo(),c=n.utils.book_new(),a=n.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);a["!cols"]=[{wch:24},{wch:50},{wch:40}],n.utils.book_append_sheet(c,a,"meta");const d=n.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);d["!cols"]=[{wch:14},{wch:10},{wch:44}],n.utils.book_append_sheet(c,d,"total");const y=n.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(h=>[h.id,h.bu,h.kr,h.score,h.prev,h.vsComp,h.compName])]);y["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],n.utils.book_append_sheet(c,y,"products");const g=n.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(h=>[h.id,h.kr,...h.weekly])]);g["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],n.utils.book_append_sheet(c,g,"weekly");const u=n.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(h=>[h.rank,h.source,h.category,h.score,h.delta,h.ratio??0])]);u["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],n.utils.book_append_sheet(c,u,"citations");const f=(s==null?void 0:s.lg)||{},p=(s==null?void 0:s.samsung)||{},k=n.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...To.map(h=>`LG_${h}`),...Lo.map(h=>`Samsung_${h}`)],[...To.map(h=>f[h]??0),...Lo.map(h=>p[h]??0)]]);k["!cols"]=Array(15).fill({wch:14}),n.utils.book_append_sheet(c,k,"dotcom"),n.writeFile(c,"GEO_Newsletter_템플릿.xlsx")}function Jt(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),s=parseFloat(i)||0;return o?+s.toFixed(2):Math.abs(s)<=1&&s!==0?+(s*100).toFixed(2):+s.toFixed(2)}function Me(t){return t==null||String(t).trim()===""?null:Jt(t)}function ee(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function ne(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const yr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function mr(t){const e=ne(t);return yr[e]||e}function ve(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,s=0;const n=e.match(/(\d{4})/);if(n)s=parseInt(n[1]);else{const a=e.match(/(\d{2})년/);if(a)s=2e3+parseInt(a[1]);else{const d=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);d&&(s=2e3+parseInt(d[1]))}}const c=e.match(/(\d{1,2})월/);if(c)i=parseInt(c[1]);else{const a=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(a)i=o[a[1].toLowerCase()];else{const d=e.match(/\d{4}[-\/](\d{1,2})/);d&&(i=parseInt(d[1]))}}return s?s*12+i:i}function br(t){const e={},o=["titleFontSize","citationTopN","citDomainTopN","weekStart"],i=["showNotice","showKpiLogic","showTotal","showProducts","showCnty","showCitations","showCitDomain","showCitCnty","showDotcom","showProductInsight","showProductHowToRead","showCitationInsight","showCitationHowToRead","showDotcomInsight","showDotcomHowToRead","showCntyInsight","showCntyHowToRead","showCitDomainInsight","showCitDomainHowToRead","showCitCntyInsight","showCitCntyHowToRead","showTodo"];if(t.forEach(n=>{if(!n[0]||String(n[0]).startsWith("[")||String(n[0]).startsWith("※")||n[0]==="key")return;const c=String(n[0]).trim(),a=n[1]??"";if(o.includes(c))e[c]=parseInt(a)||(c==="titleFontSize"?24:10);else if(i.includes(c)){const d=String(a).trim().toLowerCase();e[c]=d==="y"||d==="yes"||d==="true"||d==="1"}else e[c]=String(a)}),["showNotice","showProductHowToRead","showCitationHowToRead","showDotcomHowToRead","showCntyHowToRead","showCitDomainHowToRead","showCitCntyHowToRead"].forEach(n=>{e[n]=!1}),e.weeklyLabels){const n=String(e.weeklyLabels).split(",").map(c=>c.trim()).filter(Boolean);n.length?e.weeklyLabels=n:delete e.weeklyLabels}if(e.period){const n={"1월":"Jan","2월":"Feb","3월":"Mar","4월":"Apr","5월":"May","6월":"Jun","7월":"Jul","8월":"Aug","9월":"Sep","10월":"Oct","11월":"Nov","12월":"Dec"},c=e.period.match(/(\d{4})년\s*(\d{1,2}월)/);c&&(e.period=`${n[c[2]]||c[2]} ${c[1]}`)}if(e.dateLine){const n=e.dateLine.match(/(\d{4})년\s*(\d{1,2})월/);if(n){const c=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.dateLine=`As of ${c[parseInt(n[2])]||n[2]} ${n[1]}`}}return Object.keys(e).length?{meta:e}:{}}function xr(t){const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let s=!1;if(t.forEach(L=>{if(!L[0]||String(L[0]).startsWith("[")||String(L[0]).startsWith("※")||L[0]==="key")return;const m=String(L[0]).trim();(o.includes(m)||e.includes(m))&&(s=!0,e.includes(m)?i[m]=parseInt(L[1])||0:i[m]=Jt(L[1]))}),s&&Object.keys(i).length>=2)return{total:i};const n=t.find(L=>L.some(m=>String(m||"").trim().toUpperCase()==="LG")),c=n?n.findIndex(L=>String(L||"").trim().toUpperCase()==="LG"):4,a=n?n.findIndex(L=>{const m=String(L||"").trim().toUpperCase();return m==="SAMSUNG"||m==="SAMSUMG"}):5,d=a>=0?a:c+1,y=n?n.findIndex(L=>/date/i.test(String(L||"").trim())):0,g=n?n.findIndex(L=>/countries|country/i.test(String(L||"").trim())):2,u=n?n.findIndex(L=>/divisions?/i.test(String(L||"").trim())):3,f=n?n.findIndex(L=>/^(llm\s*model|llm|model)$/i.test(String(L||"").trim())):-1,p=[];t.filter(L=>{const m=String(L[y>=0?y:0]||"").trim();return m&&!m.startsWith("[")&&!m.startsWith("※")&&!/^date$/i.test(m)&&!/^key$/i.test(m)}).forEach(L=>{const m=String(L[y>=0?y:0]||"").trim(),w=ne(L[g>=0?g:2]),N=String(L[u>=0?u:3]||"").trim().toUpperCase(),M=(f>=0?String(L[f]||"").trim():"")||"Total",J=Jt(L[c]),lt=Jt(L[d]);m&&J>0&&p.push({date:m,country:w,division:N,llmModel:M,lg:J,comp:lt})});const h=p.filter(L=>(L.country==="TOTAL"||L.country==="TTL")&&(L.division==="TOTAL"||L.division==="TTL"||L.division==="")&&(L.llmModel==="Total"||L.llmModel==="TOTAL"||L.llmModel==="All"));h.sort((L,m)=>ve(L.date)-ve(m.date));const F=h[h.length-1],x=h.length>=2?h[h.length-2]:null;if(!F){const L=t.find(B=>B.some(M=>String(M||"").trim().toUpperCase()==="TOTAL"));if(!L)return Nt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(B=>B==null?void 0:B.slice(0,6))});const m=Jt(L[c]),w=Jt(L[d]),N={total:{score:m,prev:m,vsComp:w,rank:m>=w?1:2,totalBrands:12}};return p.length&&(N.monthlyVis=p),N}const v=F.lg,S=F.comp,I=x?x.lg:v,$=F.date,j=x?x.date:null;function T(L){const m={};return p.filter(w=>w.date===L&&(w.country==="TOTAL"||w.country==="TTL")&&w.division&&w.division!=="TOTAL"&&w.division!=="TTL"&&w.division!==""&&(w.llmModel==="Total"||w.llmModel==="TOTAL"||w.llmModel==="All")).forEach(w=>{m[w.division]={lg:w.lg,comp:w.comp}}),m}const _=T($),O=j?T(j):{};function C(L){const m={};return p.filter(w=>w.date===L&&w.country&&w.country!=="TOTAL"&&w.country!=="TTL"&&(w.division==="TOTAL"||w.division==="TTL"||w.division==="")&&(w.llmModel==="Total"||w.llmModel==="TOTAL"||w.llmModel==="All")).forEach(w=>{m[w.country]={lg:w.lg,comp:w.comp}}),m}const E=C($),A=j?C(j):{},P={total:{score:v,prev:I,vsComp:S,rank:v>=S?1:2,totalBrands:12},...Object.keys(_).length?{buTotals:_}:{},...Object.keys(O).length?{buTotalsPrev:O}:{},...Object.keys(E).length?{countryTotals:E}:{},...Object.keys(A).length?{countryTotalsPrev:A}:{}};return $&&(P.derivedPeriod=$),p.length&&(P.monthlyVis=p),P}function vr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((o,i)=>console.log(`  row${i}: [${o.slice(0,8).map(s=>JSON.stringify(String(s||"").trim())).join(", ")}]`));const e=t.findIndex(o=>{const i=String(o[0]||"").trim().toLowerCase();return i==="div"||i==="division"||i==="divisions"});if(e<0){const o=t.findIndex(i=>i.some((s,n)=>n>=1&&String(s||"").trim().toUpperCase()==="LG"));return o<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${o}: [${t[o].slice(0,8).map(i=>JSON.stringify(String(i||"").trim())).join(", ")}]`),$o(t,o))}return console.log(`[parseProductCnty] header at row${e}: [${t[e].slice(0,8).map(o=>JSON.stringify(String(o||"").trim())).join(", ")}]`),$o(t,e)}function $o(t,e){const o=t[e],i=o.findIndex((u,f)=>f>=3&&String(u||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const s=o.findIndex(u=>/^(llm\s*model|llm|model)$/i.test(String(u||"").trim())),n=[];for(let u=i+1;u<o.length;u++){const f=String(o[u]||"").trim();f&&f.toUpperCase()!=="LG"&&n.push({name:f,col:u})}const c=t.slice(e+1).filter(u=>{const f=String(u[0]||"").trim();return f&&!f.startsWith("[")&&!f.startsWith("※")}),a={},d={};c.forEach(u=>{const f=String(u[0]||"").trim(),p=String(u[1]||"").trim(),k=String(u[2]||"").trim(),h=ne(u[2])||k,F=String(u[3]||"").trim(),v=(s>=0?String(u[s]||"").trim():"")||"Total",S=Jt(u[i]),I=n.map(_=>({name:_.name,score:Jt(u[_.col])})).filter(_=>_.score>0),$=[...I].sort((_,O)=>O.score-_.score)[0]||{name:"",score:0},j=+(S-$.score).toFixed(2),T={LG:S};if(I.forEach(_=>{T[_.name]=_.score}),h==="TTL"||h==="TOTAL"){const _=Fe[F]||F.toLowerCase(),O=ur[F]||F;a[_]||(a[_]=[]),a[_].push({id:_,bu:f,kr:O,category:F,date:p,llmModel:v,score:S,vsComp:$.score,compName:$.name,allScores:T})}else{const _=`${F}|${h}`;d[_]||(d[_]=[]),d[_].push({product:F,country:h,date:p,llmModel:v,score:S,compName:$.name,compScore:$.score,gap:j,allScores:T})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(a).join(", ")||"없음"} / 국가별: ${Object.keys(d).length}건`);const y=[];for(const[u,f]of Object.entries(a)){const p=f.filter(v=>v.llmModel==="Total"||v.llmModel==="TOTAL"||v.llmModel==="All"),k=p.length?p:f;k.sort((v,S)=>ve(v.date)-ve(S.date));const h=k[k.length-1],F=k.length>=2?k[k.length-2].score:null;console.log(`[parseProductCnty] ${u}: dates=[${k.map(v=>v.date).join(",")}] score=${h.score} prev=${F} vsComp=${h.vsComp}`);const x=k.map(v=>{const S=f.filter($=>$.date===v.date),I={};return S.forEach($=>{I[$.llmModel]={score:$.score,comp:$.vsComp,allScores:$.allScores}}),{date:v.date,score:v.score,comp:v.vsComp,allScores:v.allScores,byLlm:I}});y.push({...h,prev:F,monthlyScores:x})}const g=[];for(const u of Object.values(d)){const f=u.filter(x=>x.llmModel==="Total"||x.llmModel==="TOTAL"||x.llmModel==="All"),p=f.length?f:u;p.sort((x,v)=>ve(x.date)-ve(v.date));const k=p[p.length-1],h=p.length>=2?p[p.length-2].score:null,F=p.map(x=>{const v=u.filter(I=>I.date===x.date),S={};return v.forEach(I=>{S[I.llmModel]={score:I.score,compScore:I.compScore,compName:I.compName,allScores:I.allScores}}),{date:x.date,score:x.score,compScore:x.compScore,compName:x.compName,allScores:x.allScores,byLlm:S}});g.push({...k,prev:h,monthlyScores:F})}return{...y.length?{productsPartial:y}:{},...g.length?{productsCnty:g}:{}}}function en(t,e=0,o){const i=o??t.length;for(let s=e;s<i;s++){const n=[];for(const c of t[s]||[]){const a=String(c||"").split(/\n/)[0].trim();/^W\d+/i.test(a)&&n.push(a.toUpperCase())}if(n.length>=2)return n}return null}const Ke={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function Bo(t,e){var h;const o=e?Ke[e]||{}:{...Ke.MS,...Ke.ES};if(!Object.keys(o).length)return Nt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const i=t.findIndex(F=>F.some(x=>String(x||"").trim()in o));if(i<0)return Nt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const s=t[i],n=t.findIndex((F,x)=>x>i&&F.some(v=>String(v||"").trim()==="TTL")),c=n>0?n+1:Math.min(i+20,t.length);let a=-1,d=-1;for(let F=i+1;F<c;F++){const x=t[F];if(!x.some(I=>String(I||"").trim().toUpperCase()==="LG"))continue;if(d<0&&(d=F),x.some(I=>{const $=String(I||"").trim().toLowerCase().replace(/[\s_-]/g,"");return $==="nonbrand"||$==="nb"})){a=F;break}}const y=a>=0?a:d>=0?d:n;if(y<0)return Nt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:i,ttlRowIdx:n});const g=t[y],u=a>=0?"LG-NB":d>=0?"LG":"TTL",f={},p=Object.keys(o).map(F=>s.findIndex(x=>String(x||"").trim()===F)).filter(F=>F>=0).sort((F,x)=>F-x);for(const[F,x]of Object.entries(o)){const v=s.findIndex($=>String($||"").trim()===F);if(v<0)continue;const S=p.find($=>$>v)||v+20,I=[];for(let $=v+1;$<S&&$<g.length;$++){const j=Jt(g[$]);j>0&&I.push(j)}I.length&&(f[x]=I)}if(!Object.keys(f).length)return Nt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:i,dataRowIdx:y,dataRowLabel:u});const k=en(t,i,c)||((h=Object.values(f)[0])==null?void 0:h.map((F,x)=>`W${x+1}`))||[];return{weeklyMap:f,weeklyLabels:k}}function wr(t,e,o){for(const i of Object.values(t))for(const s of Object.values(i))for(const[n,c]of Object.entries(s))s[n]=c.slice(o);for(const[i,s]of Object.entries(e))e[i]=s.slice(o)}function Cr(t){const{data:e,rows:o,headerIdx:i,brandIdx:s,catIdx:n,countryIdx:c,isNonBrand:a,isTotal:d,weeklyMap:y,weeklyAll:g}=t;let u=t.wCols,f=t.weeklyLabels;if(!u.length){const p=e.find(k=>String(k[s]||"").trim().toUpperCase()==="LG"&&a(k));if(p){const k=[];for(let h=s+1;h<p.length;h++)if(String(p[h]||"").trim())k.push(h);else if(k.length)break;u=k,f=en(o,0,i+1)||u.map((h,F)=>`W${F+1}`)}}return e.forEach(p=>{if(!a(p))return;const k=String(p[s]||"").trim();if(!k)return;const h=String(p[n>=0?n:0]||"").trim();if(!h)return;const F=Fe[h]||h.toLowerCase(),x=c>=0?ne(p[c]):"TOTAL",v=x==="TOTAL"||x==="TTL"||!x?"Total":x;g[F]||(g[F]={}),g[F][v]||(g[F][v]={}),g[F][v][k]=u.map(S=>Me(p[S]))}),e.forEach(p=>{if(String(p[s]||"").trim().toUpperCase()!=="LG"||!a(p)||!d(p))return;const h=String(p[n>=0?n:0]||"").trim();h&&(y[Fe[h]||h.toLowerCase()]=u.map(F=>Me(p[F])))}),{wCols:u,weeklyLabels:f}}function kr(t){const{data:e,header:o,lgIdx:i,catIdx:s,isTotal:n,weeklyMap:c}=t,a=o.findIndex(g=>{const u=String(g||"").trim().toLowerCase();return u==="date"||u==="week"||u==="period"}),d={},y=[];return e.forEach(g=>{if(!n(g))return;const u=String(g[s>=0?s:3]||"").trim();if(u){if(a>=0){const f=String(g[a]||"").trim();f&&!y.includes(f)&&y.push(f)}d[u]=d[u]||[],d[u].push(Me(g[i]))}}),Object.entries(d).forEach(([g,u])=>{c[Fe[g]||g.toLowerCase()]=u}),y.length?y:null}function Sr(t){const{data:e,wCols:o,catIdx:i,isTotal:s,weeklyMap:n}=t;e.forEach(c=>{if(!s(c))return;const a=String(c[i>=0?i:0]||"").trim();a&&(n[Fe[a]||a.toLowerCase()]=o.map(d=>Me(c[d])))})}function qe(t,e){const o={};let i=[],s=-1;for(let T=0;T<Math.min(t.length,10);T++){const _=t[T];if(!_)continue;let O=0;for(let C=0;C<_.length;C++)/^w\d+$/i.test(String(_[C]||"").trim())&&O++;if(O>=2){s=T;break}}let n=t.findIndex(T=>{const _=T.slice(0,5).map(O=>String(O||"").trim().toLowerCase());return _.includes("category")||_.includes("product")});if(n<0&&s>=0&&(n=s),n<0&&(n=t.findIndex(T=>{let _=!1,O=0;for(let C=0;C<Math.min(T.length,10);C++){const E=String(T[C]||"").trim();E.toUpperCase()==="LG"?(_=!0,O++):E&&isNaN(parseFloat(E))&&O++}return _&&O>=3})),n<0)return Bo(t,e);const c=t[n],a=n+1;let d=null;if(t[a]){const T=t[a].slice(4,8).map(_=>String(_||"").trim()).filter(Boolean);T.length&&T.every(_=>/^\d{1,2}\/\d{1,2}/.test(_)||/~/.test(_)||/^\(/.test(_))&&(d=a)}const y=d!=null?d+1:a,g=t.slice(y).filter(T=>T[0]!=null&&String(T[0]).trim()),u=c.findIndex(T=>{const _=String(T||"").trim().toLowerCase();return _==="category"||_==="product"}),f=c.findIndex(T=>{const _=String(T||"").trim().toLowerCase();return _==="country"||_==="county"}),p=c.findIndex(T=>String(T||"").trim().toLowerCase()==="brand"),k=c.findIndex(T=>String(T||"").trim().toUpperCase()==="LG");let h=[];const F=s>=0?t[s]:c;for(let T=0;T<F.length;T++)/^w\d+$/i.test(String(F[T]||"").trim())&&h.push(T);if(!h.length)for(let T=0;T<c.length;T++){const _=String(c[T]||"").split(/\n/)[0].trim();/^w\d+/i.test(_)&&h.push(T)}i=h.map(T=>String(F[T]||"").trim().toUpperCase());let x=h.map((T,_)=>{const O=i[_]||`W${T}`;let C="";const E=d!=null?t[d]:s!==n&&s>=0?t[s+1]:null;if(E){const A=String(E[T]||"").trim();A&&/\d/.test(A)&&(C=A.startsWith("(")?A:`(${A})`)}return C?`${O}${C}`:O});console.log(`[parseWeekly:${e}] wLabelRow:${s} headerIdx:${n} dateRangeRow:${d} wCols:${h.length} labels:`,i.slice(0,5),"full:",x.slice(-2));function v(T){if(f<0)return!0;const _=String(T[f]||"").replace(/[()]/g,"").trim().toUpperCase();return _==="TOTAL"||_==="TTL"||_===""}const S=c.findIndex(T=>{const _=String(T||"").trim().toLowerCase().replace(/[\s_-]/g,"");return _==="b/nb"||_==="bnb"||_==="brand/nonbrand"});function I(T){if(S<0)return!0;const _=String(T[S]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return _==="nonbrand"||_==="nb"}const $={},j={data:g,rows:t,header:c,headerIdx:n,brandIdx:p,lgIdx:k,catIdx:u,countryIdx:f,wCols:h,weeklyLabels:i,weeklyMap:o,weeklyAll:$,isNonBrand:I,isTotal:v};if(p>=0){const T=Cr(j);h=T.wCols,i=T.weeklyLabels}else if(k>=0){const T=kr(j);T&&(i=T)}else h.length&&Sr(j);if(i.length>0){let T=i.length;for(const E of Object.values($))for(const A of Object.values(E))for(const P of Object.values(A)){const L=P.findIndex(m=>m!=null);L>=0&&L<T&&(T=L)}for(const E of Object.values(o)){const A=E.findIndex(P=>P!=null);A>=0&&A<T&&(T=A)}const _=12,C=i.length-T>_?i.length-_:T;C>0&&C<i.length&&(i=i.slice(C),x=x.slice(C),wr($,o,C))}if(Object.keys(o).length){const T={weeklyMap:o};return i.length&&(T.weeklyLabels=i),x.length&&(T.weeklyLabelsFull=x),Object.keys($).length&&(T.weeklyAll=$),T}return Bo(t,e)}function Fr(t){const e=t.findIndex(S=>S.some(j=>{const T=String(j||"").trim().toLowerCase();return T.includes("page type")||T==="country"})?!S.some(j=>/^\[.*\]$/.test(String(j||"").trim())):!1);if(e<0)return Nt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(S=>S==null?void 0:S.slice(0,6))});const o=t[e],i=[];for(let S=2;S<o.length;S++){const I=String(o[S]||"").trim();if(/\bLG\b/i.test(I)){const $=S+1;$<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[$]||""))&&i.push({lg:S,ss:$})}}i.length||i.push({lg:2,ss:3});const s=t.slice(e+1).filter(S=>S[0]!=null&&String(S[0]).trim());let n=i[0];for(let S=i.length-1;S>=0;S--)if(s.some(I=>ee(I[i[S].lg])>0)){n=i[S];break}if(!s.some(S=>ee(S[n.lg])>0)){for(let S=Math.min(n.lg,o.length)-1;S>=2;S--)if(s.some(I=>ee(I[S])>0)){n={lg:S-1,ss:S};break}}const c={},a={},d={},y={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},g=new Set,u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=i.map(S=>{const I=String(o[S.lg]||"").trim(),$=I.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return $?$[1].charAt(0).toUpperCase()+$[1].slice(1).toLowerCase():I.replace(/\s*LG\s*/i,"").trim()}),p={};s.forEach(S=>{const I=ne(S[0]),$=String(S[1]||"").replace(/[()]/g,"").trim();let j=/page total|^ttl$/i.test($)?"TTL":$;j.toLowerCase()==="microsite"&&(j="Microsites");const T=y[I]||I.toUpperCase();g.add(T);const _=ee(S[n.lg]),O=ee(S[n.ss]);T==="TTL"?(c[j]=(c[j]||0)+_,a[j]=(a[j]||0)+O):(d[T]||(d[T]={lg:{},samsung:{}}),d[T].lg[j]=(d[T].lg[j]||0)+_,d[T].samsung[j]=(d[T].samsung[j]||0)+O),T==="TTL"&&(p[j]||(p[j]={}),i.forEach((C,E)=>{var L,m;const A=ee(S[C.lg]),P=ee(S[C.ss]);if(A>0||P>0){const w=f[E]||`M${E+1}`;p[j][w]={lg:(((L=p[j][w])==null?void 0:L.lg)||0)+A,samsung:(((m=p[j][w])==null?void 0:m.samsung)||0)+P}}}))});const k=new Set;Object.values(p).forEach(S=>Object.keys(S).forEach(I=>k.add(I)));const h=u.filter(S=>k.has(S)),F={},x={};i.forEach((S,I)=>{const $=f[I];if(!$)return;const j={},T={};s.forEach(_=>{const O=ne(_[0]),C=String(_[1]||"").replace(/[()]/g,"").trim();let E=/page total|^ttl$/i.test(C)?"TTL":C;E.toLowerCase()==="microsite"&&(E="Microsites");const A=y[O]||O.toUpperCase(),P=ee(_[S.lg]),L=ee(_[S.ss]);P<=0&&L<=0||(A==="TTL"?(P>0&&(j[E]=(j[E]||0)+P),L>0&&(T[E]=(T[E]||0)+L)):(x[$]||(x[$]={}),x[$][A]||(x[$][A]={lg:{},samsung:{}}),P>0&&(x[$][A].lg[E]=(x[$][A].lg[E]||0)+P),L>0&&(x[$][A].samsung[E]=(x[$][A].samsung[E]||0)+L)))}),Object.keys(j).length&&(F[$]={lg:j,samsung:T})}),Object.keys(x).forEach(S=>{Object.keys(x[S]).forEach(I=>{const $=x[S][I];Object.values($.lg).some(T=>T>0)||Object.values($.samsung).some(T=>T>0)||delete x[S][I]}),Object.keys(x[S]).length||delete x[S]});const v={};return(c.TTL||Object.keys(c).length)&&(v.dotcom={lg:c,samsung:a,byMonth:F,byCntyByMonth:x}),Object.keys(d).length&&(v.dotcomByCnty=d),Object.keys(p).length&&h.length&&(v.dotcomTrend=p,v.dotcomTrendMonths=h),v}function Ar(t){const e=t.findIndex(m=>m.some(B=>{const M=String(B||"").trim().toLowerCase();return M==="channel"||M==="country"})?!m.some(B=>/^\[.*\]$/.test(String(B||"").trim())):!1);e<0&&Nt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(m=>m==null?void 0:m.slice(0,6))});const o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let s=-1,n=-1,c=-1;for(let m=0;m<o.length;m++){const w=String(o[m]||"").trim().toLowerCase();w==="country"&&s<0&&(s=m),w==="channel"&&n<0&&(n=m),w==="prd"&&c<0&&(c=m)}const a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function d(m){const w=String(m||"").trim().toLowerCase();if(!w)return null;const N=w.match(/^(\d{1,2})월/);if(N){const M=parseInt(N[1]);if(M>=1&&M<=12)return a[M-1]}const B=w.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return B?B[1].charAt(0).toUpperCase()+B[1].slice(1).toLowerCase():null}const y=[],g=new Set;for(let m=0;m<o.length;m++){const w=d(o[m]);w&&!g.has(m)&&(y.push({col:m,label:w}),g.add(m))}if(e>0){const m=t[e-1];if(m)for(let w=0;w<m.length;w++){const N=d(m[w]);N&&!g.has(w)&&(y.push({col:w,label:N}),g.add(w))}}let u=2;if(y.length>0)u=Math.min(...y.map(m=>m.col));else if(s>=0&&n>=0)u=Math.max(s,n,c)+1;else{const m=t[i];m&&!String(m[0]||"").trim()?(s=1,n=2,u=3):(s=0,n=1,u=2)}if(s<0||n<0){const m=t[i],w=m&&!String(m[0]||"").trim()?1:0;s<0&&(s=w),n<0&&(n=w+1)}if(y.length>0){y.sort((B,M)=>B.col-M.col);const m=y[0],w=a.indexOf(m.label),N=new Set([s,n,c].filter(B=>B>=0));if(w>0&&m.col>u){let B=w-1;for(let M=m.col-1;M>=u&&B>=0;M--){if(g.has(M)||N.has(M))continue;const J=String(o[M]||"").trim(),lt=e>0?String((t[e-1]||[])[M]||"").trim():"";J||lt||(y.push({col:M,label:a[B]}),g.add(M),B--)}}}y.sort((m,w)=>a.indexOf(m.label)-a.indexOf(w.label));const f=t.slice(i).filter(m=>m.some(w=>w!=null&&String(w).trim())),p=[],k={},h={},F={},x={},v=new Set,S={};f.forEach(m=>{const w=ne(m[s]),N=String(m[n]||"").replace(/[()]/g,"").trim(),B=c>=0?String(m[c]||"").trim():"";if(!w||!N||N.toLowerCase()==="total")return;v.add(w);const M={};if(y.forEach(({col:gt,label:dt})=>{const nt=ee(m[gt]);nt>0&&(M[dt]=nt)}),Object.keys(M).length===0)return;const J=B.toUpperCase(),lt=!B||J==="TTL"||J==="TOTAL",ct=w==="TTL"||w==="TOTAL"?"TTL":w;S[ct]||(S[ct]={}),S[ct][N]||(S[ct][N]={ttl:null,prds:[]}),lt?S[ct][N].ttl=M:S[ct][N].prds.push({prd:B,monthScores:M})});const I=m=>{for(let w=y.length-1;w>=0;w--){const N=m[y[w].label];if(N>0)return N}return 0},$=m=>m.ttl?{...m.ttl}:{},j={};Object.entries(S).forEach(([m,w])=>{m!=="TTL"&&Object.entries(w).forEach(([N,B])=>{const M=$(B);Object.keys(M).length!==0&&(j[m]||(j[m]={}),j[m][N]=M)})});const T=S.TTL||{};Object.entries(T).forEach(([m,w])=>{const N=$(w),B=I(N);B>0&&(p.push({source:m,category:"",score:B,delta:0,ratio:0,monthScores:N}),k[m]=N),w.prds.forEach(({prd:M,monthScores:J})=>{const lt=I(J);lt>0&&(F[M]||(F[M]=[]),F[M].push({source:m,category:"",score:lt,delta:0,ratio:0,monthScores:J}))})}),Object.entries(S).forEach(([m,w])=>{m!=="TTL"&&Object.entries(w).forEach(([N,B])=>{const M=$(B),J=I(M);J>0&&(h[m]||(h[m]=[]),h[m].push({source:N,category:"",score:J,delta:0,ratio:0,monthScores:M,prd:""})),B.prds.forEach(({prd:lt,monthScores:ct})=>{const gt=I(ct);if(gt<=0)return;h[m]||(h[m]=[]),h[m].push({source:N,category:"",score:gt,delta:0,ratio:0,monthScores:ct,prd:lt}),x[lt]||(x[lt]={}),x[lt][N]||(x[lt][N]={source:N,category:"",score:0,delta:0,ratio:0,monthScores:{}});const dt=x[lt][N];dt.score+=gt,Object.entries(ct).forEach(([nt,Ct])=>{dt.monthScores[nt]=(dt.monthScores[nt]||0)+Ct})})})});const _={};new Set([...Object.keys(F),...Object.keys(x)]).forEach(m=>{let w=F[m];(!w||!w.length)&&(w=Object.values(x[m]||{})),w&&w.length&&(_[m]=w)});const C=p.reduce((m,w)=>m+w.score,0);p.sort((m,w)=>w.score-m.score),p.forEach((m,w)=>{m.rank=w+1,m.ratio=C>0?+(m.score/C*100).toFixed(1):0});for(const[m,w]of Object.entries(h)){const N=w.reduce((B,M)=>B+M.score,0);w.sort((B,M)=>M.score-B.score),w.forEach((B,M)=>{B.rank=M+1,B.ratio=N>0?+(B.score/N*100).toFixed(1):0})}for(const[m,w]of Object.entries(_)){const N=w.reduce((B,M)=>B+M.score,0);w.sort((B,M)=>M.score-B.score),w.forEach((B,M)=>{B.rank=M+1,B.ratio=N>0?+(B.score/N*100).toFixed(1):0})}const E=y.map(m=>m.label).filter(m=>Object.values(k).some(w=>w[m]>0)),A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let P=null;if(E.length>0){const m={};Object.values(k).forEach(B=>{Object.entries(B).forEach(([M,J])=>{J>0&&(m[M]=(m[M]||0)+1)})});let w=E[E.length-1];if(E.length>=2){const B=m[w]||0,M=E[E.length-2],J=m[M]||0;J>0&&B<J*.5&&(w=M)}const N=A.findIndex(B=>w.toLowerCase().startsWith(B.toLowerCase()));N>=0&&(P=`${A[N]} ${new Date().getFullYear()}`)}const L={};return p.length>0&&(L.citations=p),Object.keys(h).length>0&&(L.citationsByCnty=h),Object.keys(_).length>0&&(L.citationsByPrd=_),Object.keys(k).length>0&&(L.citTouchPointsTrend=k,L.citTrendMonths=E),Object.keys(j).length>0&&(L.citTouchPointsTrendByCnty=j),P&&(L.citDerivedPeriod=P),L}function Er(t){const e={GLOBAL:"TTL",TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let s=null,n=0,c=-1,a=-1,d=-1,y=-1,g=-1,u=4;for(let C=0;C<Math.min(t.length,10);C++){const E=t[C];if(!E)continue;const A=E.some(w=>/^no$/i.test(String(w||"").trim())),P=E.some(w=>/^region$/i.test(String(w||"").trim())),L=E.some(w=>/domain|domian/i.test(String(w||"").trim())),m=E.some(w=>/^prd$/i.test(String(w||"").trim()));if(A||P||L||m){s=E,n=C+1;for(let w=0;w<E.length;w++){const N=String(E[w]||"").trim().toLowerCase();N==="prd"&&g<0&&(g=w),N==="no"&&c<0&&(c=w),N==="region"&&a<0&&(a=w),(N==="domain"||N==="domian")&&d<0&&(d=w),N==="type"&&y<0&&(y=w)}break}(String(E[0]||"").trim().startsWith("[")||!String(E[0]||"").trim())&&(n=C+1)}s||Nt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(C=>C==null?void 0:C.slice(0,6))});const f=c>=0||a>=0||g>=0;if(f)a<0&&(a=c>=0?c+1:g>=0?g+2:1),d<0&&(d=a+1),y<0&&(y=d+1),u=Math.max(d,y)+1;else if(d>=0)y=d+1,u=d+2;else{for(let C=n;C<Math.min(t.length,n+5);C++){const E=t[C];if(E){for(let A=0;A<Math.min(E.length,6);A++){const P=String(E[A]||"").trim();if(P.includes(".")&&P.length>3&&!i.test(P)){d=A,y=A+1,u=A+2;break}}if(d>=0)break}}d<0&&(d=0,y=1,u=2)}const p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],k=C=>{const E=String(C||"").trim().toLowerCase();if(!E)return null;const A=E.match(/^(\d{1,2})월/);if(A){const L=parseInt(A[1]);if(L>=1&&L<=12)return p[L-1]}const P=E.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return P?P[1].charAt(0).toUpperCase()+P[1].slice(1).toLowerCase():null},h=[];if(s)for(let C=u;C<s.length;C++){const E=k(s[C]);E&&h.push({col:C,label:E})}const F=C=>/^(type|domain[_ ]type)$/i.test(String(C||"").trim()),x=C=>/^(domain|domian)$/i.test(String(C||"").trim()),v=C=>/^region$/i.test(String(C||"").trim()),S=[];s&&h.forEach(({col:C,label:E})=>{const A=C-1,P=C-2,L=C-3;L<0||F(s[A])&&x(s[P])&&v(s[L])&&S.push({regionCol:L,domainCol:P,typeCol:A,monthCol:C,label:E})});const I=[],$={},j={};let T="TTL";const _=C=>{let E=String(C||"").trim();if(!E)return"";const A=E.match(/^\[([^\]]+)\]/);A&&(E=A[1].trim()),E=E.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const P=E.indexOf("/");return P>=0&&(E=E.slice(0,P)),E};if(S.length>=2){const C={};for(let A=n;A<t.length;A++){const P=t[A];if(!P)continue;const L=g>=0?String(P[g]||"").trim():"";S.forEach(m=>{const w=_(P[m.domainCol]);if(!w||!w.includes("."))return;const N=String(P[m.monthCol]||"").replace(/,/g,"").trim(),B=parseFloat(N);if(isNaN(B)||B<=0)return;const M=String(P[m.regionCol]||"").trim().toUpperCase(),J=e[M]||M||"TTL",lt=String(P[m.typeCol]||"").trim(),ct=`${J}|${w}|${lt}|${L}`;C[ct]||(C[ct]={cnty:J,domain:w,type:lt,prd:L,monthScores:{}}),C[ct].monthScores[m.label]=(C[ct].monthScores[m.label]||0)+B})}Object.values(C).forEach(A=>{let P=0;for(let N=h.length-1;N>=0;N--){const B=A.monthScores[h[N].label];if(B>0){P=B;break}}if(P<=0)return;j[A.cnty]=(j[A.cnty]||0)+1,I.push({cnty:A.cnty,rank:j[A.cnty],domain:A.domain,type:A.type,citations:P,monthScores:A.monthScores,prd:A.prd});const L=`${A.cnty}|${A.domain}`,m=!A.prd||/^(ttl|total)$/i.test(A.prd);$[L]||($[L]={cnty:A.cnty,domain:A.domain,type:A.type,months:{},_hasTtl:!1});const w=$[L];m?(w.type=A.type||w.type,w._hasTtl=!0,Object.entries(A.monthScores).forEach(([N,B])=>{B>0&&(w.months[N]=B)})):w._hasTtl||Object.entries(A.monthScores).forEach(([N,B])=>{B>0&&!w.months[N]&&(w.months[N]=B)})}),Object.values($).forEach(A=>{delete A._hasTtl});const E={};I.forEach(A=>{E[A.cnty]||(E[A.cnty]=[]),E[A.cnty].push(A)}),Object.values(E).forEach(A=>{A.sort((P,L)=>L.citations-P.citations),A.forEach((P,L)=>{P.rank=L+1})})}else for(let C=n;C<t.length;C++){const E=t[C];if(!E)continue;const A=String(E[d]||"").trim(),P=String(E[y]||"").trim(),L=g>=0?String(E[g]||"").trim():"";if(!f&&(!A||!A.includes("."))){const B=String(E[d]||"").trim().toUpperCase(),M=e[B]||(o.includes(B)?B:null);M&&(!P||P==="")&&(T=M);continue}if(!A||!A.includes("."))continue;let m="TTL";if(f&&a>=0){const B=String(E[a]||"").trim().toUpperCase();m=e[B]||B}else f||(m=T);let w=0;if(h.length>0)for(let B=h.length-1;B>=0;B--){const M=String(E[h[B].col]||"").replace(/,/g,"").trim(),J=parseFloat(M);if(!isNaN(J)&&J>0){w=J;break}}else for(let B=E.length-1;B>=u;B--){const M=String(E[B]||"").replace(/,/g,"").trim();if(!M)continue;const J=parseFloat(M);if(!isNaN(J)&&J>0){w=J;break}}if(h.length>0){const B={};if(h.forEach(({col:M,label:J})=>{const lt=String(E[M]||"").replace(/,/g,"").trim(),ct=parseFloat(lt);!isNaN(ct)&&ct>0&&(B[J]=ct)}),Object.keys(B).length>0){const M=`${m}|${A}`;$[M]={cnty:m,domain:A,type:P,months:B}}}const N={};h.length>0&&h.forEach(({col:B,label:M})=>{const J=String(E[B]||"").replace(/,/g,"").trim(),lt=parseFloat(J);!isNaN(lt)&&lt>0&&(N[M]=lt)}),w>0&&(j[m]=(j[m]||0)+1,I.push({cnty:m,rank:j[m],domain:A,type:P,citations:w,monthScores:N,prd:L}))}const O={};if(I.length>0&&(O.citationsCnty=I),Object.keys($).length>0){O.citDomainTrend=$;const C=h.map(E=>E.label).filter(E=>Object.values($).some(A=>A.months[E]>0));O.citDomainMonths=C}return O}function Ro(t,e){const o=Ue(t,[/^type$/,/^(county|country)$/]);if(o<0)return Nt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(v=>v==null?void 0:v.slice(0,6))});const i=t[o];let s=-1,n=-1,c=-1,a=-1,d=4;for(let v=0;v<i.length;v++){const S=String(i[v]||"").trim().toLowerCase();S==="type"&&s<0&&(s=v),(S==="county"||S==="country")&&n<0&&(n=v),(S==="topic"||S==="topoc")&&c<0&&(c=v),S==="brand"&&a<0&&(a=v)}d=Math.max(s,n,c,a)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,g=/^w\d+/i,u=[],f=[o];for(let v=0;v<=o;v++)v!==o&&f.push(v);for(const v of f){if(u.length>0)break;const S=t[v];if(S)for(let I=d;I<S.length;I++){const $=String(S[I]||"").split(/\n/)[0].trim();$&&(y.test($)||g.test($))&&u.push({col:I,label:$})}}const p=t.slice(o+1),k=[];p.forEach(v=>{if(!v)return;const S=String(v[s]||"").trim(),I=ne(v[n]),$=String(v[c]||"").trim(),j=String(v[a]||"").trim();if(!$||!j)return;const T={};let _=0;u.forEach(({col:O,label:C})=>{const E=Jt(v[O]);E>0&&(T[C]=E,_=E)}),(Object.keys(T).length>0||$)&&k.push({type:S,country:I,topic:$,brand:j,scores:T,latestScore:_})});const h=e==="weekly"?"weeklyPR":"monthlyPR",F=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",x={};return k.length>0&&(x[h]=k),u.length>0&&(x[F]=u.map(v=>v.label)),x}function Io(t,e){const o=t.findIndex(x=>x?x.some(v=>/steakholders|stakeholders/i.test(String(v||"").trim()))||x.some(v=>/^type$/i.test(String(v||"").trim()))&&x.some(v=>/topoc|topic/i.test(String(v||"").trim())):!1);if(o<0)return Nt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(x=>x==null?void 0:x.slice(0,6))});const i=t[o];let s=-1,n=-1,c=-1,a=-1,d=4;for(let x=0;x<i.length;x++){const v=String(i[x]||"").trim().toLowerCase();(v==="steakholders"||v==="stakeholders")&&s<0&&(s=x),v==="type"&&n<0&&(n=x),(v==="country"||v==="county")&&c<0&&(c=x),(v==="topoc"||v==="topic")&&a<0&&(a=x)}d=Math.max(s,n,c,a)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i,g=/^w\d+/i,u=[];for(let x=d;x<i.length;x++){const v=String(i[x]||"").split(/\n/)[0].trim();v&&(y.test(v)||g.test(v))&&u.push({col:x,label:v})}const f=t.slice(o+1),p=[];f.forEach(x=>{if(!x)return;const v=String(x[s]||"").trim(),S=String(x[n]||"").trim(),I=ne(x[c]),$=String(x[a]||"").trim();if(!$||!v)return;const j={};let T=0;u.forEach(({col:_,label:O})=>{const C=Jt(x[_]);C>0&&(j[O]=C,T=C)}),p.push({stakeholder:v,type:S,country:I,topic:$,scores:j,latestScore:T})});const k=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",h=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",F={};return p.length>0&&(F[k]=p),u.length>0&&(F[h]=u.map(x=>x.label)),F}function Tr(t){const e=Ue(t,[/^prompts?$/,/^country$/]);if(e<0)return Nt("parseAppendix","header not found (need Prompts + Country)",{firstRows:t.slice(0,5).map(a=>a==null?void 0:a.slice(0,6))});const o=t[e],i={},s=["country","prompts","division","category","launched","branded","cej","topic"];for(let a=0;a<o.length;a++){const d=String(o[a]||"").trim().toLowerCase();s.includes(d)&&!i[d]&&(i[d]=a)}const n=t.slice(e+1),c=[];return n.forEach(a=>{if(!a)return;const d=String(a[i.prompts]||"").trim();d&&c.push({country:ne(a[i.country]),prompt:d,division:String(a[i.division]||"").trim(),category:String(a[i.category]||"").trim(),launched:String(a[i.launched]||"").trim(),branded:String(a[i.branded]||"").trim(),cej:String(a[i.cej]||"").trim(),topic:String(a[i.topic]||"").trim()})}),c.length>0?{appendixPrompts:c}:{}}const pe={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0};function Lr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const e=Ue(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((u,f)=>console.log(`  row${f}:`,u==null?void 0:u.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const o=t[e];let i=-1,s=-1,n=-1;for(let u=0;u<o.length;u++){const f=String(o[u]||"").trim().toLowerCase();i<0&&(f==="country"||f==="county")&&(i=u),s<0&&(f==="category"||f==="product"||f==="제품"||f==="카테고리")&&(s=u),n<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(f)&&(n=u)}if(i<0||s<0||n<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:s,statusCol:n,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const c=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),a={...pe};let d=0,y=0,g=0;return t.slice(e+1).forEach((u,f)=>{const p=e+1+f;try{if(!u){g++;return}const k=String(u[n]||"").trim();if(!k){g++;return}d++;const h=k.toLowerCase().replace(/\s+/g," ");if(!c.has(h)&&!c.has(h.replace(/\s/g,"")))return;const F=mr(u[i]),x=String(u[s]||"").trim();if(!F||!x){console.warn("[parseUnlaunched] row skipped",{rowIdx:p,raw:{country:u[i],category:u[s],status:u[n]},parsed:{country:F,rawCategory:x}}),g++;return}const v=x.toUpperCase(),S=Qo[v]||v;a[`${F}|${S}`]=!0,S!==v&&(a[`${F}|${v}`]=!0),y++}catch(k){let h;try{h={country:u==null?void 0:u[i],category:u==null?void 0:u[s],status:u==null?void 0:u[n]}}catch{h=u}console.warn("[parseUnlaunched] row error",{rowIdx:p,raw:h,error:k==null?void 0:k.message}),g++}}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${y}건 + 디폴트 ${Object.keys(pe).length}건 + skip ${g}건 / 총행 ${d} / 최종키 ${Object.keys(a).length}개`),{unlaunchedMap:a}}function $r(t){const e=Ue(t,[/^bu$/,/topic/]);if(e<0)return Nt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(g=>g==null?void 0:g.slice(0,6))});const o=t[e];let i=-1,s=-1,n=-1,c=-1,a=-1;for(let g=0;g<o.length;g++){const u=String(o[g]||"").trim().toLowerCase();i<0&&u==="bu"&&(i=g),s<0&&u.includes("topic")&&u.includes("대시보드")&&(s=g),n<0&&(u==="explanation"||u==="설명")&&(n=g),c<0&&u.includes("기존")&&(c=g),a<0&&u.includes("topic")&&u.includes("row")&&(a=g)}s<0&&(s=1),n<0&&(n=2);const d=[];let y="";return t.slice(e+1).forEach(g=>{if(!g)return;const u=String(g[i]||"").trim();u&&(y=u);const f=String(g[s]||"").trim();if(!f)return;const p=String(g[n]||"").trim(),k=c>=0?String(g[c]||"").trim():"",h=a>=0?String(g[a]||"").trim():"";d.push({bu:y,topic:f,explanation:p,oldTopic:k,topicRow:h})}),d.length>0?{prTopicList:d}:{}}function Br(t,e){var o;if(!fr(e,`parseSheetRows:${t}`))return{};try{if(t===wt.meta)return br(e);if(t===wt.visSummary)return xr(e);if(t===wt.productMS||t===wt.productHS||t===wt.productES)return vr(e);if(t===wt.weeklyMS)return qe(e,"MS");if(t===wt.weeklyHS)return qe(e,"HS");if(t===wt.weeklyES)return qe(e,"ES");if(t===wt.monthlyPR)return Ro(e,"monthly");if(t===wt.weeklyPR)return Ro(e,"weekly");if(t===wt.monthlyBrandPrompt)return Io(e,"monthly");if(t===wt.weeklyBrandPrompt)return Io(e,"weekly");if(t===wt.citPageType)return Fr(e);if(t===wt.citTouchPoints)return Ar(e);if(t===wt.citDomain)return Er(e);if(t===wt.appendix)return Tr(e);if(t===wt.unlaunched)return Lr(e);if(t===wt.prTopicList)return $r(e)}catch(i){return Ze(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:i==null?void 0:i.message,stack:(o=i==null?void 0:i.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Nt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(wt)})}function Rr(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function Ir(t,e){const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,s=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!s.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${s.status}).`);const n=await s.text(),c=await Zo(),a=c.read(n,{type:"string"}),d=a.Sheets[a.SheetNames[0]];return c.utils.sheet_to_json(d,{header:1,defval:""})}async function jr(t,e){var n,c;const o=Object.values(wt),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const s=await Promise.allSettled(o.map(a=>Ir(t,a).then(d=>({name:a,rows:d}))));for(let a=0;a<o.length;a++){const d=o[a],y=s[a];if(e==null||e(`"${d}" 처리 중... (${a+1}/${o.length})`),y.status==="rejected"){console.warn(`"${d}" 시트 건너뜀:`,(n=y.reason)==null?void 0:n.message);continue}try{const{rows:g}=y.value,u=Br(d,g);for(const[f,p]of Object.entries(u))f==="weeklyLabels"||f==="weeklyLabelsFull"?i[f]||(i[f]=p):Array.isArray(p)&&Array.isArray(i[f])?i[f]=[...i[f],...p]:p&&typeof p=="object"&&!Array.isArray(p)&&i[f]&&typeof i[f]=="object"&&!Array.isArray(i[f])?i[f]={...i[f],...p}:i[f]=p}catch(g){console.warn(`"${d}" 시트 처리 실패:`,g.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const a=[];for(const[d,y]of Object.entries(i.weeklyAll)){const g=y.Total||y.TTL||{},u=g.LG||g.lg||[],f=Object.entries(g).filter(([x])=>x!=="LG"&&x!=="lg"),p=u.length?u[u.length-1]:0,k=u.length>=5?u[0]:0;let h="",F=0;for(const[x,v]of f){const S=v.length?v[v.length-1]:0;S>F&&(F=S,h=x)}p>0&&a.push({id:d,bu:pr[d]||"HS",kr:Xe[d]||d,category:d,date:((c=i.meta)==null?void 0:c.period)||"",score:p,prev:k,vsComp:F,compName:h,allScores:{LG:p,...h?{[h]:F}:{}}})}if(a.length&&(i.productsPartial=a,console.log(`[SYNC] weeklyAll에서 ${a.length}개 제품 생성:`,a.map(d=>`${d.id}=${d.score}`).join(", "))),!i.productsCnty){const d=[];for(const[y,g]of Object.entries(i.weeklyAll)){const u=Xe[y]||y;for(const[f,p]of Object.entries(g)){if(f==="Total"||f==="TTL")continue;const k=p.LG||p.lg||[],h=k.length?k[k.length-1]:0;if(h<=0)continue;const F=k.length>=2?k[0]:0;let x="",v=0;const S={LG:h};for(const[$,j]of Object.entries(p)){if($==="LG"||$==="lg")continue;const T=j.length?j[j.length-1]:0;S[$]=T,T>v&&(v=T,x=$)}const I=+(h-v).toFixed(1);d.push({product:u,country:f,score:h,prev:F,compName:x,compScore:v,gap:I,allScores:S})}}d.length&&(i.productsCnty=d,console.log(`[SYNC] weeklyAll에서 productsCnty ${d.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((d,y)=>d===`W${y+1}`)){const d=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(y=>String(y).split(/\n/)[0].trim().toUpperCase()).filter(y=>/^W\d+/.test(y));if(d.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",d),i.weeklyLabels=d;const y=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(g=>{const u=String(g).split(/\n/);return u[0].trim().toUpperCase()+(u[1]?u[1].trim():"")}).filter(g=>/^W\d+/.test(g));y.length&&(i.weeklyLabelsFull=y)}}if(i._syncIssues=hr(i,"syncFromGoogleSheets"),typeof localStorage<"u")try{const a=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");a.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:i._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(a.slice(0,10)))}catch{}return i}const ut={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:R,outline:"none",boxSizing:"border-box"};function Pr(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),s=Math.floor(i/24);return s>=1?`${s}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function Mr({savedAt:t,ageMs:e,stale:o,style:i}){const s=t==null,n=s?"#1E293B":o?"#7F1D1D":"#064E3B",c=s?"#94A3B8":o?"#FCA5A5":"#86EFAC",a=s?"#334155":o?"#B91C1C":"#047857",d=s?"○":o?"⚠️":"●",y=s?"동기화 정보 없음":`데이터 최신화: ${Pr(e)}`,g=t?new Date(t).toLocaleString("ko-KR"):"";return r.jsxs("span",{title:g,style:{display:"inline-flex",alignItems:"center",gap:5,background:n,color:c,border:`1px solid ${a}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:R,whiteSpace:"nowrap",...i||{}},children:[r.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:d}),y]})}function Dr({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Ut="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",Yt="#CF0652",ue="#94A3B8",De={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},on={LG:Yt,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},jo=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],Qe={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},Nr=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Ne={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},_r={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},Or={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},io=90;function ao(t,e){const o=De[e]||De.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function zr(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function Gr(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function to(t){const e=String(t||"").trim().toUpperCase();return Ne[e]||t}function Ur(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?_r[o]||Ne[o]||t:Or[o]||Ne[o]||t}let Hr=0;function Po(t,e,o,i,s,n={}){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const c=n.fadeBeforeIdx!=null?n.fadeBeforeIdx:-1,a=n.baselineLabel||"",d=n.labelOffsetY||0,y=n.lineOffsetY||0,g=Hr++,u={t:18,r:10,b:20,l:10},f=o-u.l-u.r,p=i-u.t-u.b,k=t.filter(C=>C!=null);if(!k.length){let C=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const E=t.length,A=E>1?E-1:1;return C+=t.map((P,L)=>`<text x="${(u.l+L/A*f).toFixed(1)}" y="${u.t+p+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Ut}">${e[L]||""}</text>`).join(""),C+="</svg>",C}const h=Math.min(...k)-1,F=Math.max(...k)+1,x=F-h||1,v=t.length,S=v>1?v-1:1,I=t.map((C,E)=>u.l+E/S*f),$=[];t.forEach((C,E)=>{C!=null&&$.push({x:I[E],y:u.t+(1-(C-h)/x)*p,v:C,idx:E})});let j=`<svg viewBox="0 0 ${o} ${i+12}" width="100%" height="${i+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const T=c>0?$.filter(C=>C.idx<c):[],_=c>0?$.filter(C=>C.idx>=c):$,O="#64748B";if(_.length>=2){const C=_.map((A,P)=>`${P?"L":"M"}${A.x.toFixed(1)},${A.y.toFixed(1)}`).join(" "),E=C+` L${_[_.length-1].x.toFixed(1)},${u.t+p} L${_[0].x.toFixed(1)},${u.t+p} Z`;j+=`<defs><linearGradient id="lg${g}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${s}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${s}" stop-opacity="0.03"/>
    </linearGradient></defs>`,j+=`<path d="${E}" fill="url(#lg${g})"/>`,j+=`<path d="${C}" stroke="${s}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(T.length>=2){const C=T.map((E,A)=>`${A?"L":"M"}${E.x.toFixed(1)},${E.y.toFixed(1)}`).join(" ");j+=`<path d="${C}" stroke="${O}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(j+=$.map(C=>{const E=c>0&&C.idx<c;return c>0&&C.idx===c?`<circle cx="${C.x.toFixed(1)}" cy="${C.y.toFixed(1)}" r="4" fill="#000" stroke="${s}" stroke-width="3"/>`:`<circle cx="${C.x.toFixed(1)}" cy="${C.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${E?O:s}" stroke-width="2" opacity="${E?.85:1}"/>`}).join(""),j+=$.map(C=>{const A=c>0&&C.idx<c?O:s;return`<text x="${C.x.toFixed(1)}" y="${Math.max(C.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${A}" font-family="${Ut}">${C.v.toFixed(1)}</text>`}).join(""),c>0&&a){const C=I[c];j+=`<line x1="${C.toFixed(1)}" y1="${(u.t+y).toFixed(1)}" x2="${C.toFixed(1)}" y2="${(u.t+p+y).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const E=C>o*.7,A=(E?u.t+p+1:u.t+8)+d;j+=`<text x="${(E?C-5:C+5).toFixed(1)}" y="${A.toFixed(1)}" text-anchor="${E?"end":"start"}" font-size="9" fill="#64748B" font-family="${Ut}">${a}</text>`}return j+=t.map((C,E)=>`<text x="${I[E].toFixed(1)}" y="${u.t+p+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Ut}">${e[E]||""}</text>`).join(""),j+="</svg>",j}function Ae(t,e){return on[t]||jo[e%jo.length]}function nn(t,e,o,i,s={}){const n=Object.keys(t);if(!n.length||!e.length)return"";const c=s.fadeBeforeIdx!=null?s.fadeBeforeIdx:-1,a=s.baselineLabel||"";let d=1/0,y=-1/0;if(n.forEach(v=>(t[v]||[]).forEach(S=>{S!=null&&(S<d&&(d=S),S>y&&(y=S))})),!isFinite(d))return"";const g=Math.max((y-d)*.15,2);d=Math.max(0,d-g),y=Math.min(100,y+g);const u=y-d||1,f=e.length,p=8,k=8,h=i-p-k,F="#64748B";let x="";for(let v=0;v<=4;v++){const S=p+v/4*h;x+=`<line x1="0" y1="${S.toFixed(1)}" x2="${o}" y2="${S.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(n.forEach((v,S)=>{const I=t[v]||[],$=Ae(v,S),j=v==="LG",T=j?2.5:1.5,_=j?1:.7,O=[];if(I.forEach((P,L)=>{if(P==null)return;const m=(L+.5)/f*o,w=p+(1-(P-d)/u)*h;O.push({x:m,y:w,v:P,idx:L})}),!O.length)return;const C=c>0?O.filter(P=>P.idx<c):[],E=c>0?O.filter(P=>P.idx>=c):O;function A(P,L,m,w){if(P.length>=2){const N=P.map((B,M)=>`${M?"L":"M"}${B.x.toFixed(1)},${B.y.toFixed(1)}`).join(" ");x+=`<path d="${N}" stroke="${L}" fill="none" stroke-width="${T}" stroke-linecap="round" stroke-linejoin="round" opacity="${m}"/>`}P.forEach(N=>{w&&N.idx===c||(x+=`<circle cx="${N.x.toFixed(1)}" cy="${N.y.toFixed(1)}" r="${j?3.5:2.5}" fill="#fff" stroke="${L}" stroke-width="${j?2:1.5}" opacity="${m}"/>`)})}if(A(C,F,.85,!1),A(E,$,_,j&&c>0),j&&c>0){const P=O.find(L=>L.idx===c);P&&(x+=`<circle cx="${P.x.toFixed(1)}" cy="${P.y.toFixed(1)}" r="4.5" fill="#000" stroke="${$}" stroke-width="3"/>`)}}),c>0&&a){const v=(c+.5)/f*o;x+=`<line x1="${v.toFixed(1)}" y1="${p}" x2="${v.toFixed(1)}" y2="${p+h}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const S=v>o*.7;x+=`<text x="${(S?v-5:v+5).toFixed(1)}" y="${(p+12).toFixed(1)}" text-anchor="${S?"end":"start"}" font-size="11" fill="#64748B" font-family="${Ut}">${a}</text>`}return`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${x}</svg>`}function Wr({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:s,monthlyVis:n,total:c,meta:a,wLabels:d}){const y={monthlyVis:n};return`
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
${(()=>{const g=u=>JSON.stringify(u).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?g(e):"{}"};
var _products=${g(o.map(u=>({id:u.id,bu:u.bu,kr:u.kr,en:u.en||u.kr,category:u.category||"",date:u.date||"",status:u.status,score:u.score||0,prev:u.prev||0,vsComp:u.vsComp||0,compName:u.compName||"",compRatio:u.compRatio||0,allScores:u.allScores||{},monthlyScores:u.monthlyScores||[]})))};
var _productsCnty=${g(i||[])};
var _unlaunchedMap=${g(s)};
var _PROD_TO_UL=${g(Ee)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${g((y==null?void 0:y.monthlyVis)||[])};
var _total=${g(c)};
var _meta={period:${g(a.period||"")},reportNo:${g(a.reportNo||"")},totalInsight:${g(a.totalInsight||"")}};
var _wLabels=${g(d)};`})()}
${(()=>{const g=u=>JSON.stringify(u).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${g(on)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${Yt}';
var _FONT=${g(Ut)};
var _COMP='${ue}';
var _REGIONS=${g(Object.fromEntries(Object.entries(Qe).map(([u,f])=>[u,f.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(Qe).map(([g,u])=>[g,t==="en"?u.labelEn:u.label]))).replace(/<\//g,"<\\/")};
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
`}const Vr=["audio","rac","aircare"];function rn(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return Vr.includes(String(e).toLowerCase())}function Kr(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function _e(t,e){if(!rn(t)||!e)return-1;const o=Kr(t);if(o>0){const i=e.findIndex(s=>{const n=String(s||"").trim().match(/^W?(\d+)$/i);return n&&parseInt(n[1],10)===o});if(i>=0)return i}return e.findIndex(i=>{const s=String(i||"").trim();return/^Apr(il)?$/i.test(s)||s==="4월"})}const Oe={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function qr(t){const e=Oe[t]||Oe.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function an(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),i=Oe[e]||Oe.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.racair}</p>`:""}function Jr(t,e,o,i,s,n,c){if(!e||!Object.keys(e).length)return"";const d=["MS","HS","ES"].map(y=>{const g=t.filter(f=>f.bu===y);if(!g.length)return"";const u=g.map(f=>{var C,E;const p=((C=e[f.id])==null?void 0:C.Total)||{},k=Object.keys(p).sort((A,P)=>{var w,N;if(A==="LG")return-1;if(P==="LG")return 1;const L=((w=p[A])==null?void 0:w[p[A].length-1])||0;return(((N=p[P])==null?void 0:N[p[P].length-1])||0)-L});if(!k.length)return"";const h=ao(f.status,s),F=(E=p.LG)==null?void 0:E[p.LG.length-1],x=k.map((A,P)=>{const L=Ae(A,P),m=A==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${L};opacity:${m?1:.7}"></i><span style="font-size:13px;color:${m?"#1A1A1A":"#94A3B8"};font-weight:${m?700:400}">${A}</span></span>`}).join(""),v=o.length,S=`<colgroup><col style="width:${io}px">${o.map(()=>"<col>").join("")}</colgroup>`,I=_e(f,o),$=`<tr><td style="padding:0;border:0"></td><td colspan="${v}" style="padding:8px 0;border:0">${nn(p,o,v*80,180,{fadeBeforeIdx:I,baselineLabel:I>0?"*Baseline 재설정":""})}</td></tr>`,j=`<tr><td style="padding:0;border:0"></td><td colspan="${v}" style="padding:4px 0 6px;border:0">${x}</td></tr>`,T=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(A=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${A}</th>`).join("")}</tr>`,_=k.map((A,P)=>{const L=Ae(A,P),m=A==="LG",w=o.map((N,B)=>{var J;const M=(J=p[A])==null?void 0:J[B];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${M!=null?m?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${m?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${M!=null?M.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${m?"#FFF8F9":P%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${m?700:500};color:${L};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${L};margin-right:4px;vertical-align:0"></i>${A}</td>${w}</tr>`}).join(""),O=so(f.id||f.category,n);return`<div class="trend-row${O?" is-unlaunched":""}" data-prodid="${f.id||f.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Yt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${lo(f,n)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${O?"#F1F5F9":h.bg};color:${O?"#64748B":h.color};border:1px solid ${O?"#CBD5E1":h.border}">${O?s==="en"?"Unlaunched":"미출시":h.label}</span>
          ${F!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${F.toFixed(1)}%</span>`:""}
          ${f.compName?`<span style="font-size:14px;color:#94A3B8">vs ${f.compName} ${f.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Ut}">${S}<tbody>${$}${j}${T}${_}</tbody></table></div>
        ${an(f,s)}
      </div>`}).join("");return u?`<div class="bu-group" data-bu="${y}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${y}</span></div>
      ${u}
    </div>`:""}).join("");return d.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${s==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${c||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${s==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${d}</div>
  </div>`:""}function Yr(t,e,o,i,s,n){if(!e||!e.length)return"";const c=["MS","HS","ES"],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function y(p){const k=String(p).match(/(\d{1,2})월/);if(k)return parseInt(k[1])-1;const h=String(p).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return h?d[h[1].toLowerCase()]:-1}const g=[0,1,2,3,4,5,6,7,8,9,10,11],u=a.slice(),f=c.map(p=>{const k=t.filter(F=>F.bu===p);if(!k.length)return"";const h=k.map(F=>{const x=F.monthlyScores||[];let v={};if(x.length>=2){const m=new Set;if(x.forEach(w=>{w.allScores&&Object.keys(w.allScores).forEach(N=>m.add(N))}),m.forEach(w=>{v[w]=g.map(N=>{var M;const B=x.find(J=>y(J.date)===N);return((M=B==null?void 0:B.allScores)==null?void 0:M[w])??null})}),!m.size&&(v.LG=g.map(w=>{const N=x.find(B=>y(B.date)===w);return N?N.score:null}),F.vsComp>0)){const w=g.map(N=>{const B=x.find(M=>y(M.date)===N);return(B==null?void 0:B.comp)??null});w.some(N=>N!=null)&&(v[F.compName||"Comp"]=w)}}else{const m=e.filter(M=>M.division===p&&(M.country==="TOTAL"||M.country==="TTL")),w={};m.forEach(M=>{const J=y(M.date);J>=0&&(w[J]=M)});const N=g.map(M=>{var J;return((J=w[M])==null?void 0:J.lg)||null}),B=g.map(M=>{var J;return((J=w[M])==null?void 0:J.comp)||null});v={LG:N},B.some(M=>M!=null&&M>0)&&(v.Samsung=B)}const S=Object.keys(v).sort((m,w)=>{if(m==="LG")return-1;if(w==="LG")return 1;const N=(v[m]||[]).filter(M=>M!=null).pop()||0;return((v[w]||[]).filter(M=>M!=null).pop()||0)-N});if(!S.length)return"";const I=ao(F.status,i),$=(v.LG||[]).filter(m=>m!=null).pop(),j=S.map((m,w)=>{const N=Ae(m,w),B=m==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${N};opacity:${B?1:.7}"></i><span style="font-size:13px;color:${B?"#1A1A1A":"#94A3B8"};font-weight:${B?700:400}">${m}</span></span>`}).join(""),T=u.length,_=`<colgroup><col style="width:${io}px">${u.map(()=>"<col>").join("")}</colgroup>`,O=_e(F,u),C=`<tr><td style="padding:0;border:0"></td><td colspan="${T}" style="padding:8px 0;border:0">${nn(v,u,T*80,180,{fadeBeforeIdx:O,baselineLabel:O>0?"*Baseline 재설정":""})}</td></tr>`,E=`<tr><td style="padding:0;border:0"></td><td colspan="${T}" style="padding:4px 0 6px;border:0">${j}</td></tr>`,A=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${u.map(m=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${m}</th>`).join("")}</tr>`,P=S.map((m,w)=>{const N=Ae(m,w),B=m==="LG",M=u.map((J,lt)=>{var gt;const ct=(gt=v[m])==null?void 0:gt[lt];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${ct!=null?B?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${B?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${ct!=null?ct.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${B?"#FFF8F9":w%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${B?700:500};color:${N};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${N};margin-right:4px;vertical-align:0"></i>${m}</td>${M}</tr>`}).join(""),L=so(F.id||F.category,s);return`<div class="trend-row${L?" is-unlaunched":""}" data-prodid="${F.id||F.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${Yt};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${lo(F,s)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${L?"#F1F5F9":I.bg};color:${L?"#64748B":I.color};border:1px solid ${L?"#CBD5E1":I.border}">${L?i==="en"?"Unlaunched":"미출시":I.label}</span>
          ${$!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${$.toFixed(1)}%</span>`:""}
          ${F.compName?`<span style="font-size:14px;color:#94A3B8">vs ${F.compName} ${F.compRatio||""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Ut}">${_}<tbody>${C}${E}${A}${P}</tbody></table></div>
        ${an(F,i)}
      </div>`}).join("");return h?`<div class="bu-group" data-bu="${p}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${p}</span></div>
      ${h}
    </div>`:""}).join("");return f.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${n||""} &nbsp;|&nbsp; ${u[0]}–${u[u.length-1]} (${u.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${f}</div>
  </div>`:""}function sn(){return""}function Mo(t,e,o,i,s){const n=+(t.score-t.prev).toFixed(1),c=t.vsComp||0,a=+(t.score-c).toFixed(1),d=n>0?"▲":n<0?"▼":"─",y=n>0?"#22C55E":n<0?"#EF4444":"#94A3B8";return`<div class="hero" id="hero-section"${s==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
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
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${Yt}"></div>
          </div>
          ${c>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(c,100)}%;background:${ue}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${Yt}"></i> LG ${t.score}%</span>
            ${c>0?`<span><i style="background:${ue}"></i> Samsung ${c}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${c>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${c}%</span>
          <span class="hero-comp-gap" style="color:${a>=0?"#22C55E":"#EF4444"}">Gap ${a>=0?"+":""}${a}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
  </div>`}function Se(t,e){const o=Ee[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function so(t,e){return Nr.every(o=>{const i=Ee[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function lo(t,e){return Se(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Do(t,e,o,i,s,n,c,a,d){if(!t.length)return"";const g=["MS","HS","ES"].map(u=>{const f=t.filter(k=>k.bu===u);if(!f.length)return"";const p=f.map(k=>{var W,ft;const h=k.weekly||[],F=h.filter(V=>V!=null),x=k.weeklyScore||(F.length>0?F[F.length-1]:k.score),v=k.monthlyScore||k.score,S=x,I=((W=a==null?void 0:a[k.id])==null?void 0:W.Total)||((ft=a==null?void 0:a[k.id])==null?void 0:ft.TTL)||{};let $=0;Object.entries(I).forEach(([V,rt])=>{if(V==="LG"||V==="lg")return;const at=Array.isArray(rt)&&rt.length?rt[rt.length-1]:0;at>$&&($=at)});const j=k.vsComp||0,T=$>0?x/$*100:j>0?x/j*100:100,_=j>0?v/j*100:100,O=Math.round(T*10)/10,C=Math.round(_*10)/10,E=O,A=T>=100?"lead":T>=80?"behind":"critical",P=ao(A,i),L=F.length>=1?F[F.length-1]:null,m=F.length>=2?F[F.length-2]:null,w=L!=null&&m!=null?+(L-m).toFixed(1):null,N=w>0?"▲":w<0?"▼":"─",B=w>0?"#22C55E":w<0?"#EF4444":"#94A3B8",M=A==="critical"?"#BE123C":A==="behind"?"#D97706":"#15803D",J=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],lt={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function ct(V){const rt=String(V).match(/(\d{1,2})월/);if(rt)return parseInt(rt[1])-1;const at=String(V).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return at?lt[at[1].toLowerCase()]:-1}let gt=k.monthlyScores||[];if(gt.length<2&&c.length>0){const V=c.filter(at=>at.division===k.bu&&(at.country==="TOTAL"||at.country==="TTL")),rt={};V.forEach(at=>{const St=ct(at.date);St>=0&&(rt[St]={date:at.date,score:at.lg,comp:at.comp})}),gt=Object.keys(rt).sort((at,St)=>at-St).map(at=>rt[at])}const dt=gt.length>0?gt.map(V=>{const rt=ct(V.date);return rt>=0?J[rt]:V.date}):["M-3","M-2","M-1","M0"],nt=gt.length>0?gt.map(V=>V.score):[null,null,null,k.score],Ct=gt.length>=2?+(gt[gt.length-1].score-gt[gt.length-2].score).toFixed(1):null,Ht=Ct>0?"▲":Ct<0?"▼":"─",Bt=Ct>0?"#22C55E":Ct<0?"#EF4444":"#94A3B8",kt=E,At=kt>=100?"#15803D":kt>=80?"#D97706":"#BE123C",Et=k.weeklyPrev||(F.length>=5?F[F.length-5]:F[0]||0),_t=x&&Et?+(x-Et).toFixed(1):null,Tt=v&&(k.monthlyPrev||k.prev)?+(v-(k.monthlyPrev||k.prev)).toFixed(1):null,Xt=Se(k.id||k.category,n),Wt=so(k.id||k.category,n),U=Wt?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:P;return`<div class="prod-card${Wt?" is-unlaunched":""}" data-prodid="${k.id||k.category}" data-ws="${x.toFixed(1)}" data-ms="${v.toFixed(1)}" data-wr="${O}" data-mr="${C}" data-wmom="${_t??""}" data-mmom="${Tt??""}" style="border-color:${U.border}">
        <div class="prod-head">
          <span class="prod-name">${lo(k,n)}</span>
          ${Xt.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${U.bg};color:${U.color};border-color:${U.border}">${U.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${S.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${B}">${w!=null?`WoW ${N} ${Math.abs(w).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${Bt}">${rn(k)||Ct==null?"":`MoM ${Ht} ${Math.abs(Ct).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const V=s.slice(-10),rt=_e(k,V),at=String(k.id||"").toLowerCase(),St=at==="aircare"?30:at==="rac"?20:0;return Po(h.slice(-10),V,300,90,M,{fadeBeforeIdx:rt,baselineLabel:rt>0?"*Baseline 재설정":"",labelOffsetY:St})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const V=_e(k,dt),at=String(k.id||"").toLowerCase()==="audio";return Po(nt,dt,300,90,M,{fadeBeforeIdx:V,baselineLabel:V>0?"*Baseline 재설정":"",labelOffsetY:at?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${k.compName}`:`${k.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(kt,120)}%;background:${At}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${At}">${kt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${u}">
      <div class="bu-header"><span class="bu-label">${u}</span><span class="bu-count">${f.length}${o.categories}</span></div>
      <div class="prod-grid">${p}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${d||""}${d?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${sn(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${g}${(()=>{const u=t.filter(f=>Se(f.id||f.category,n).length>0).map(f=>`${(f.id||"").toLowerCase()==="audio"||f.kr==="오디오"?"Audio-Sound Suite":f.kr}: ${Se(f.id||f.category,n).map(p=>Ur(p,i)).join(", ")} ${i==="en"?"not launched":"미출시"}`);return(u.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${u.join(" / ")}</p>`:"")+qr(i)})()}</div>
  </div>`}function No(t,e,o,i){const n={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),c=Ee[n]||(n||"").toUpperCase(),a=i&&i[`${t.country}|${c}`],d=Gr(t.score,t.compScore),y=a?"#94A3B8":d==="lead"?"#15803D":d==="behind"?"#D97706":"#BE123C",g=+(t.score-t.compScore).toFixed(1),u=a?"#64748B":g>=0?"#15803D":"#BE123C",f=130,p=["TCL","HISENSE","HAIER"];let k="",h=0;t.allScores&&Object.entries(t.allScores).forEach(([$,j])=>{const T=String($).toUpperCase();p.some(O=>T.includes(O))&&j>h&&(k=$,h=j)});const F=Math.max(e,h),x=Math.max(3,Math.round(t.score/F*f)),v=t.compScore>0?Math.max(3,Math.round(t.compScore/F*f)):0,S=h>0?Math.max(3,Math.round(h/F*f)):0,I="#9333EA";return`<div class="vbar-item${a?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${n}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${y}">${t.score.toFixed(1)}</span>
        <div class="vbar-col" style="height:${x}px;background:${y}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ue}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${v}px;background:${ue}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${h>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${I}">${h.toFixed(1)}</span>
        <div class="vbar-col" style="height:${S}px;background:${I}"></div>
        <span class="vbar-col-name" style="color:${I}">${k.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${u}">${g>=0?"+":""}${g}%p</span>
    <span class="vbar-label">${o}</span>
  </div>`}function _o(t,e,o,i,s,n){if(!t||!t.length)return"";const c=new Map;t.forEach(p=>{c.has(p.product)||c.set(p.product,[]),c.get(p.product).push(p)});const a=e.cntyProductFilter||{},d=[...c.entries()].filter(([p])=>a[p]!==!1).map(([p,k])=>{const h=Math.max(...k.map(x=>Math.max(x.score,x.compScore)),1),F=k.map(x=>No(x,h,to(x.country),s)).join("");return`<div class="cnty-product" data-group-product="${p}"><div class="bu-header"><span class="bu-label">${p}</span></div><div class="vbar-chart">${F}</div></div>`}).join(""),y=new Map;t.forEach(p=>{y.has(p.country)||y.set(p.country,[]),y.get(p.country).push(p)});const g=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],f=g.filter(p=>y.has(p)).concat([...y.keys()].filter(p=>!g.includes(p))).map(p=>{const k=y.get(p);if(!k)return"";const h=Math.max(...k.map(x=>Math.max(x.score,x.compScore)),1),F=k.map(x=>No(x,h,x.product,s)).join("");return`<div class="cnty-product" data-group-country="${p}"><div class="bu-header"><span class="bu-label">${to(p)}</span></div><div class="vbar-chart">${F}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
    ${sn(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${f}</div>
      <div class="cnty-view-product" style="display:none">${d}</div>
      ${(()=>{if(!s||!Object.keys(s).length)return"";const p={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},h=[...new Set(t.map(F=>F.product))].map(F=>{const x=p[F]||String(F).toLowerCase(),v=Se(x,s),S=x==="audio"?"Audio-Sound Suite":F;return v.length?`${S}: ${v.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return h.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${h.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const Oo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function Xr(t){const e=Oo[t]||Oo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(s=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${s.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${s.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Zr(t,e){if(!t||t.length===0)return`<div style="display:flex;align-items:center;justify-content:center;min-height:400px;color:#64748B;font-size:16px">${e==="en"?"No Prompt data available.":"프롬프트 데이터가 없습니다."}</div>`;const o="Prompt List",i=e==="en"?"List of prompts used for GEO KPI measurement.":"GEO KPI 측정에 사용되는 프롬프트 목록입니다.",s=e==="en"?"All":"전체",n=e==="en"?"Total":"총",c=e==="en"?"":"개",a=e==="en"?"Clear filters":"필터 초기화",d=[{key:"country",label:e==="en"?"Country":"국가"},{key:"division",label:"Division"},{key:"category",label:e==="en"?"Category":"카테고리"},{key:"branded",label:e==="en"?"Type":"유형"},{key:"cej",label:"CEJ"},{key:"topic",label:e==="en"?"Topic":"토픽"}],y={};d.forEach(p=>{const k=new Set;t.forEach(h=>{h[p.key]&&k.add(h[p.key])}),y[p.key]=[...k].sort()});const g=JSON.stringify(t).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");JSON.stringify(y).replace(/</g,"\\u003c").replace(/>/g,"\\u003e");const u=JSON.stringify({MS:"#3B82F6",HS:"#10B981",ES:"#F59E0B",PR:"#8B5CF6"}),f=JSON.stringify({Awareness:"#6366F1",Interest:"#3B82F6",Conversion:"#10B981"});return`<div style="max-width:1200px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${o}</h2>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
      <span style="font-size:15px;color:#64748B">${i}</span>
      <span id="pl-count" style="font-size:12px;color:#94A3B8">${n} ${t.length}${c?" "+c:""}</span>
      <span id="pl-clear" onclick="_plClear()" style="font-size:11px;color:#3B82F6;cursor:pointer;display:none">${a}</span>
    </div>
    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden">
      <table id="pl-table" style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:#F8FAFC">
            <th style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B">#</th>
            ${d.map(p=>`<th data-col="${p.key}" onclick="_plToggle('${p.key}')" style="padding:10px 12px;text-align:center;font-size:11px;font-weight:700;color:#64748B;cursor:pointer;position:relative;white-space:nowrap;user-select:none">${p.label} <span id="pl-arrow-${p.key}" style="font-size:9px;color:#94A3B8">▽</span></th>`).join("")}
            <th style="padding:10px 12px;text-align:left;font-size:11px;font-weight:700;color:#64748B;min-width:300px">${e==="en"?"Prompt":"프롬프트"}</th>
          </tr>
        </thead>
        <tbody id="pl-body"></tbody>
      </table>
    </div>
    <!-- Filter dropdowns (hidden by default) -->
    ${d.map(p=>`<div id="pl-dd-${p.key}" style="display:none;position:fixed;z-index:999;background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:6px;min-width:140px;max-height:240px;overflow-y:auto;box-shadow:0 8px 24px rgba(0,0,0,0.15)">
      <div onclick="_plFilter('${p.key}','')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${s}</div>
      ${y[p.key].map(k=>`<div onclick="_plFilter('${p.key}','${k.replace(/'/g,"\\'")}')" style="padding:5px 10px;border-radius:4px;cursor:pointer;font-size:12px;color:#64748B">${k}</div>`).join("")}
    </div>`).join("")}
  </div>
  <script>
  (function(){
    var _plData=${g};
    var _plFilters={};
    var _divC=${u};
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
      document.getElementById('pl-count').textContent='${n} '+f.length+'${c?" "+c:""}';
      var hasF=Object.keys(_plFilters).some(function(k){return !!_plFilters[k];});
      document.getElementById('pl-clear').style.display=hasF?'':'none';
      // Update arrows
      ${JSON.stringify(d.map(p=>p.key))}.forEach(function(k){
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
  <\/script>`}function zo(t,e,o,i,s,n){if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const c=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],a=[];for(let C=0;C<12;C++)a.push("w"+(5+C));const d=[...new Set(t.map(C=>C.topic))].filter(Boolean),y=[...new Set(t.map(C=>C.type))].filter(Boolean),g=[...new Set(t.map(C=>C.country))].filter(C=>C&&C!=="TTL"),u=c.filter(C=>g.includes(C)).concat(c.filter(C=>!g.includes(C))),f=JSON.stringify(t).replace(/</g,"\\u003c"),p=JSON.stringify(a),k=JSON.stringify(d),h=JSON.stringify(y),F=JSON.stringify(u),x=72;function v(C){const E={};return C&&String(C).split(`
`).forEach(A=>{const P=A.indexOf("=");if(P>0){const L=A.slice(0,P).trim(),m=A.slice(P+1).trim();L&&(E[L]=m)}}),E}const S=v(i==null?void 0:i.prTopicPromptsRaw);s&&s.length&&d.forEach(C=>{if(!S[C]){const E=s.find(A=>A.topic===C&&A.country==="US");E&&(S[C]=E.prompt)}});const I=(n==null?void 0:n.prTopicList)||[],$={},j={};I.forEach(C=>{[C.topic,C.topicRow,C.oldTopic].filter(Boolean).map(A=>A.trim()).forEach(A=>{C.explanation&&!$[A]&&($[A]=C.explanation),C.bu&&!j[A]&&(j[A]=C.bu)})});const _={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...$,...v(i==null?void 0:i.prTopicDescsRaw)},O={};return d.forEach(C=>{const E=j[C];if(E)O[C]=E;else{const A=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];O[C]=A.some(P=>C.toLowerCase().includes(P.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Ut}">
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
      <span style="display:block;font-size:14px;font-weight:700;color:${Yt};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
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
    var D=${f},W=${p},TP=${k},TY=${h},CN=${F};
    var CW=${x};
    var TOPIC_CAT=${JSON.stringify(O)};
    var TOPIC_PROMPT=${JSON.stringify(S).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(_).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(I).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Ne)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var RED='${Yt}',COMP='${ue}';
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
  <\/script>`}function Go(t,e,o,i,s,n){const c=(t||[]).filter(h=>!0);if(!c.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const a=[];for(let h=0;h<12;h++)a.push("w"+(5+h));const y=[...new Set(c.map(h=>h.stakeholder))].filter(Boolean).map(h=>({stakeholder:h,topics:[...new Set(c.filter(F=>F.stakeholder===h).map(F=>F.topic))].filter(Boolean)})),g=72,u=JSON.stringify(c).replace(/</g,"\\u003c"),f=JSON.stringify(a),p=JSON.stringify(y),k="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Ut}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${s||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">W5–W16 (12${o==="en"?" weeks":"주"})</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${Yt};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(n==null?void 0:n.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${k}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${u},W=${f},GROUPS=${p};
    var CW=${g},RED='${Yt}';
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
  <\/script>`}function Qr(t,e,o,i,s,n,c,a,d,y,g,u,f,p){var Xt,Wt,jt;f!=null&&f.llmModel&&f.llmModel!=="Total"&&(o=Ko(o,f.llmModel),c=qo(c,f.llmModel),e=Jo(e,f.monthlyVis,f.llmModel),f.monthlyVis&&(f={...f,monthlyVis:Ln(f.monthlyVis,f.llmModel)})),o=(o||[]).map(U=>({...U,weekly:(U.weekly||[]).map(W=>W??0),monthly:(U.monthly||[]).map(W=>W??0)})),y&&typeof y=="object"&&Object.values(y).forEach(U=>{!U||typeof U!="object"||Object.values(U).forEach(W=>{!W||typeof W!="object"||Object.keys(W).forEach(ft=>{const V=W[ft];Array.isArray(V)&&(W[ft]=V.map(rt=>rt??0))})})});const k={aircare:"Xiaomi"};o=o.map(U=>{const W=k[(U.id||"").toLowerCase()];if(!W||!U.allScores)return U;const ft=Object.entries(U.allScores).find(([at])=>at.toLowerCase()===W.toLowerCase()&&at.toLowerCase()!=="lg");if(!ft)return U;const V=ft[1];if(!(V>0))return U;const rt=Math.round(U.score/V*100);return{...U,compName:ft[0],vsComp:V,compRatio:rt,status:rt>=100?"lead":rt>=80?"behind":"critical"}});const h=(f==null?void 0:f.visibilityOnly)||!1,F=(f==null?void 0:f.includePromptList)||!1,x=(f==null?void 0:f.includeReadability)===!0,v=(p==null?void 0:p.unlaunchedMap)||{},I=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${n}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,$=De[n]||De.ko;let j;if(d&&d.length)j=d.map(U=>String(U).toUpperCase().startsWith("W")?U.toUpperCase():U);else{const U=y?Math.max(...Object.values(y).flatMap(ft=>Object.values(ft).flatMap(V=>Object.values(V).map(rt=>(rt==null?void 0:rt.length)||0))),0):0,W=t.weekStart||Math.max(1,U-11);j=Array.from({length:Math.max(12,U)},(ft,V)=>`W${W+V}`)}const T=new Set;y&&Object.values(y).forEach(U=>Object.keys(U).forEach(W=>{W!=="Total"&&T.add(W)})),c&&c.forEach(U=>{U.country&&U.country!=="TTL"&&T.add(U.country)});const _=[...T].sort(),O=n==="en"?"All":"전체",C=["MS","HS","ES"],E=o.map(U=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${U.bu}" value="${U.id}" checked onchange="onFilterChange()"><span>${U.kr}</span></label>`).join(""),A=C.map(U=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${U}" checked onchange="onBuChange('${U}')"><span>${U}</span></label>`).join(""),P=_.map(U=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${U}" checked onchange="onFilterChange()"><span>${to(U)}</span></label>`).join(""),L=Object.entries(Qe).map(([U,W])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${U}" checked onchange="onRegionChange('${U}')"><span>${W.labelEn}</span></label>`).join(""),m=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${n==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${n==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,w=f!=null&&f.weeklyLabelsFull&&f.weeklyLabelsFull.length===j.length?f.weeklyLabelsFull:j,N=j.map((U,W)=>`<option value="${W}"${W===j.length-1?" selected":""}>${w[W]||U}</option>`).join(""),B=(((Xt=o[0])==null?void 0:Xt.monthlyScores)||[]).map(U=>{const W=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ft=String(U.date).match(/(\d{1,2})월/),V=String(U.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return ft?W[parseInt(ft[1])-1]:V?V[1].charAt(0).toUpperCase()+V[1].slice(1).toLowerCase():U.date}),M=B.map((U,W)=>`<option value="${W}"${W===B.length-1?" selected":""}>${U}</option>`).join(""),J=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Ut}`,lt=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${m}
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${j[j.length-1]} ${n==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${j.length>1?"":' style="display:none"'}>
        <span class="fl-label">${n==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${J}">${N}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${n==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${J}"${B.length>0?"":" disabled"}>${M||"<option>—</option>"}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${O}</span></label>
        ${A}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${O}</span></label>
        ${E}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${O}</span></label>
        ${L}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${n==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${O}</span></label>
        ${P}
      </div>
    </div>
  </div>`,ct=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${n==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${zr(t.noticeText)}</div></div>`:"",gt=[ct,t.showTotal!==!1?Mo(e,t,$,n,"weekly"):""].join(""),dt=[ct,t.showTotal!==!1?Mo(e,t,$,n,"monthly"):""].join(""),nt=[];if(y&&Object.keys(y).length){const U=Xe;Object.entries(y).forEach(([W,ft])=>{const V=o.find(at=>at.id===W),rt=(V==null?void 0:V.kr)||U[W]||W;Object.entries(ft).forEach(([at,St])=>{if(at==="Total"||at==="TTL"||at==="TOTAL")return;const Vt=St.LG||St.lg||[],re=Vt.length>0?Vt[Vt.length-1]:0;if(re<=0)return;let Y="",z=0;Object.entries(St).forEach(([yt,vt])=>{if(yt==="LG"||yt==="lg")return;const Pt=Array.isArray(vt)&&vt.length?vt[vt.length-1]:0;Pt>z&&(z=Pt,Y=yt)});const st=+(re-z).toFixed(1),Ft={};Object.entries(St).forEach(([yt,vt])=>{if(Array.isArray(vt)&&vt.length){const Pt=vt[vt.length-1];Pt!=null&&(Ft[yt]=Pt)}}),nt.push({product:rt,country:at,score:re,compName:Y,compScore:z,gap:st,allScores:Ft})})})}const Ct=((Wt=f==null?void 0:f.weeklyLabelsFull)==null?void 0:Wt[f.weeklyLabelsFull.length-1])||j[j.length-1]||"",Ht=Ct?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${Ct} ${n==="en"?"data":"기준"}</span>`:"",Bt=[gt,t.showProducts!==!1?Do(o,t,$,n,j,v,(f==null?void 0:f.monthlyVis)||[],y,Ht):"",`<div id="trend-container">${Jr(o,y,j,$,n,v,Ht)}</div>`,t.showCnty!==!1?_o(nt,t,$,n,v,Ht):""].join(""),kt=o.map(U=>{const W=U.monthlyScore||U.score,ft=U.monthlyPrev||U.prev,V=U.vsComp||0,rt=V>0?W/V*100:100;return{...U,score:W,prev:ft,weeklyScore:W,weeklyPrev:ft,monthlyScore:W,monthlyPrev:ft,weekly:(U.monthlyScores||[]).map(at=>at.score),status:rt>=100?"lead":rt>=80?"behind":"critical"}}),At=(((jt=o[0])==null?void 0:jt.monthlyScores)||[]).map(U=>{const W=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ft=String(U.date).match(/(\d{1,2})월/),V=String(U.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return ft?W[parseInt(ft[1])-1]:V?V[1].charAt(0).toUpperCase()+V[1].slice(1).toLowerCase():U.date}),Et=(f==null?void 0:f.monthlyVis)||[],_t=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",Tt=[dt,t.showProducts!==!1?Do(kt,t,$,n,At.length?At:["Feb","Mar"],v,Et,{},_t):"",`<div id="monthly-trend-container">${Yr(kt,Et,$,n,v,_t)}</div>`,t.showCnty!==!1?_o(c,t,$,n,v,_t):""].join("");return`<!DOCTYPE html>
<html lang="${n==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${Dr({FONT:Ut,RED:Yt,COMP:ue})}</style>
</head>
<body>
${h?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${n==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${lt.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${Bt}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${Tt}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${zo(p==null?void 0:p.weeklyPR,p==null?void 0:p.weeklyPRLabels,n,t,p==null?void 0:p.appendixPrompts,p)}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Go(p==null?void 0:p.weeklyBrandPrompt,p==null?void 0:p.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${x?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
    <button class="tab-btn" onclick="switchTab('progress')">Progress Tracker</button>
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
    ${lt}
    <div id="bu-weekly-content" class="dash-container">${Bt}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${Tt}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${zo(p==null?void 0:p.weeklyPR,p==null?void 0:p.weeklyPRLabels,n,t,p==null?void 0:p.appendixPrompts,p)}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Go(p==null?void 0:p.weeklyBrandPrompt,p==null?void 0:p.weeklyBrandPromptLabels,n,null,n==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
${x?`<div id="tab-readability" class="tab-panel">
  <div class="progress-placeholder"><div class="inner">
    <div class="icon">📖</div>
    <h2>Readability</h2>
    <p>${$.readabilityMsg}</p>
  </div></div>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${I}
</div>
<div id="tab-promptlist" class="tab-panel">
  ${Zr(p==null?void 0:p.appendixPrompts,n)}
</div>
<div id="tab-glossary" class="tab-panel">
  ${Xr(n)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${$.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${Wr({lang:n,weeklyAll:y,products:o,productsCnty:c,ulMap:v,monthlyVis:f==null?void 0:f.monthlyVis,total:e,meta:t,wLabels:j})}
<\/script>
</body>
</html>`}function ti(t){const e=t.filter(d=>d.status==="lead"),o=t.filter(d=>d.status==="behind"),i=t.filter(d=>d.status==="critical"),s=[...t].sort((d,y)=>y.score-d.score)[0],n=[...t].sort((d,y)=>d.score-y.score)[0],c=(t.reduce((d,y)=>d+y.score,0)/t.length).toFixed(1),a=[];return a.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${c}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),s&&a.push(`가장 높은 카테고리는 ${s.kr} ${s.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${n.kr} ${n.score.toFixed(1)}%로 상·하위 간 ${(s.score-n.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?a.push(`취약 카테고리(${i.map(d=>d.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&a.push(`추격 카테고리(${o.map(d=>d.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),a.join(" ")}function ei(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function oi(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const tt=wt,ni={citation:[tt.meta,tt.citTouchPoints,tt.citDomain,tt.citPageType],"weekly-report":[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES],"monthly-report":[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES],dashboard:[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citDomain,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES,tt.weeklyPR,tt.weeklyBrandPrompt,tt.appendix,tt.unlaunched,tt.prTopicList],newsletter:[tt.meta,tt.visSummary,tt.citTouchPoints,tt.citPageType,tt.productMS,tt.productHS,tt.productES,tt.weeklyMS,tt.weeklyHS,tt.weeklyES,tt.unlaunched]};function ri(t){return ni[t]||[]}const Uo="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif";function ii(t){const e=String(t||"").trim();if(!e)return"";const o=e.match(/\/d\/([a-zA-Z0-9_-]{20,})/);return o?o[1]:/^[a-zA-Z0-9_-]{20,}$/.test(e)?e:""}function ai({url:t,downloadName:e="sheet",mode:o}){const[i,s]=H.useState(!1),[n,c]=H.useState(""),a=o?ri(o):[],d=a.length?"zip":"xlsx",y=a.length?`📥 시트 CSV ZIP 다운로드 (탭 ${a.length}개)`:"📥 시트 xlsx 다운로드";async function g(){const u=ii(t);if(!u){c("ERROR: 동기화 URL 비어있거나 잘못됨");return}s(!0),c("");try{const f=new URLSearchParams({id:u,name:e});a.length&&f.set("tabs",a.join(","));const p=await fetch(`/api/sheet-download?${f.toString()}`,{credentials:"include"});if(!p.ok){const F=await p.text().catch(()=>"");let x=F;try{const v=JSON.parse(F);x=v.error||v.detail||F}catch{}throw new Error(`(${p.status}) ${x}`)}const k=await p.blob(),h=document.createElement("a");h.href=URL.createObjectURL(k),h.download=`${e}.${d}`,document.body.appendChild(h),h.click(),h.remove(),setTimeout(()=>URL.revokeObjectURL(h.href),1e3),c("다운로드 완료")}catch(f){c("ERROR: "+(f.message||String(f)))}finally{s(!1)}}return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("button",{onClick:g,disabled:i||!t,style:{width:"100%",padding:"8px 0",borderRadius:8,border:"none",background:i||!t?"#1E293B":"#1D4ED8",color:i||!t?"#94A3B8":"#DBEAFE",fontSize:11,fontWeight:700,fontFamily:Uo,cursor:i||!t?"not-allowed":"pointer"},children:i?"다운로드 중…":y}),n&&r.jsx("div",{style:{marginTop:6,padding:"4px 8px",borderRadius:4,fontSize:10,fontFamily:Uo,background:n.startsWith("ERROR")?"#450A0A":"#14532D",color:n.startsWith("ERROR")?"#FCA5A5":"#86EFAC",wordBreak:"break-word",whiteSpace:"pre-wrap",lineHeight:1.4},children:n})]})}function si({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:s,metaEn:n,setMetaEn:c,total:a,setTotal:d,products:y,setProducts:g,citations:u,setCitations:f,dotcom:p,setDotcom:k,productsCnty:h,setProductsCnty:F,citationsCnty:x,setCitationsCnty:v,resolved:S,previewLang:I,setPreviewLang:$,snapshots:j,setSnapshots:T,setWeeklyLabels:_,setWeeklyAll:O,weeklyLabels:C,weeklyAll:E,citationsByCnty:A,dotcomByCnty:P,generateHTML:L,publishEndpoint:m,setMonthlyVis:w,onSyncExtra:N,categoryStats:B,extra:M,monthlyVis:J,progressMonth:lt,setProgressMonth:ct,progressDataMonth:gt}){const dt=H.useRef({products:y,productsCnty:h,citations:u,citationsCnty:x,total:a,dotcom:p,extra:M});dt.current={products:y,productsCnty:h,citations:u,citationsCnty:x,total:a,dotcom:p,extra:M};function nt(){return dt.current}const[Ct,Ht]=H.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[Bt,kt]=H.useState(!1),[At,Et]=H.useState(null),[_t,Tt]=H.useState(""),[Xt,Wt]=H.useState(""),[jt,U]=H.useState(!1),[W,ft]=H.useState(""),[V,rt]=H.useState(!1),[at,St]=H.useState(!1),[Vt,re]=H.useState(!1),[Y,z]=H.useState(!1),[st,Ft]=H.useState(""),[yt,vt]=H.useState(!1),[Pt,Kt]=H.useState(!0),[Mt,qt]=H.useState(""),[Zt,we]=H.useState(null),[le,He]=H.useState([]),Rt=t==="newsletter",[ie,ye]=H.useState(()=>{const l=new Date;return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`});function Qt(){Rt&&fetch("/api/publish").then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.months)&&He(l.months)}).catch(()=>{})}H.useEffect(()=>{if(Rt){Qt();return}fetch(m||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(b=>b.ok?b.json():null).then(we).catch(()=>{})},[t,m,Rt]);const ln=(()=>{const l=new Set,b=new Date;for(let et=0;et<24;et++){const xt=new Date(b.getFullYear(),b.getMonth()-et,1);l.add(`${xt.getFullYear()}-${String(xt.getMonth()+1).padStart(2,"0")}`)}for(const et of le)l.add(et.month);return ie&&l.add(ie),[...l].sort((et,xt)=>xt.localeCompare(et))})();function Te(l){const[b,et]=l.split("-");return`${b}년 ${parseInt(et,10)}월`}const[cn,co]=H.useState(null);H.useEffect(()=>{let l=!0;const b=()=>wo(t).then(xt=>{l&&co(xt)});b();const et=setInterval(b,6e4);return()=>{l=!1,clearInterval(et)}},[t]);function dn(){wo(t).then(co)}async function pn(){if(!Y){z(!0),Ft("");try{const l=nt(),b=Re(l.products,l.productsCnty,l.citations,l.citationsCnty,"ko"),et=Re(l.products,l.productsCnty,l.citations,l.citationsCnty,"en");let xt,Ot,K;if(t==="dashboard"){const Q=J||[],pt=l.extra||M||{};xt=L(i,l.total,b.products,b.citations,l.dotcom,"ko",b.productsCnty,b.citationsCnty,C,E,A,P,Q,pt),Ot=L(n,l.total,et.products,et.citations,l.dotcom,"en",et.productsCnty,et.citationsCnty,C,E,A,P,Q,pt),K=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else xt=L(i,l.total,b.products,b.citations,p,"ko",b.productsCnty,b.citationsCnty,{weeklyLabels:C,categoryStats:B,unlaunchedMap:(M==null?void 0:M.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),Ot=L(n,l.total,et.products,et.citations,p,"en",et.productsCnty,et.citationsCnty,{weeklyLabels:C,categoryStats:B,unlaunchedMap:(M==null?void 0:M.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),K=`${i.period||""} ${i.title||"Newsletter"}`.trim();const me=m||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),D={title:K,htmlKo:xt,htmlEn:Ot};Rt&&(D.month=ie);const It=await(await fetch(me,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(D)})).json();if(!It.ok)throw new Error(It.error||"게시 실패");if(we({...It,published:!0}),Rt&&Qt(),t==="dashboard")try{const Q=await Pe(t)||{},pt=l.extra||M||{};Co(t,{...Q,meta:i,total:l.total,weeklyPR:pt.weeklyPR||Q.weeklyPR,weeklyPRLabels:pt.weeklyPRLabels||Q.weeklyPRLabels,weeklyBrandPrompt:pt.weeklyBrandPrompt||Q.weeklyBrandPrompt,weeklyBrandPromptLabels:pt.weeklyBrandPromptLabels||Q.weeklyBrandPromptLabels,appendixPrompts:pt.appendixPrompts||Q.appendixPrompts})}catch{}const zt=`${window.location.origin}${It.urls.ko}`,ot=`${window.location.origin}${It.urls.en}`;try{await navigator.clipboard.writeText(zt+`
`+ot)}catch{}Ft(`KO: ${zt}
EN: ${ot}`)}catch(l){Ft("ERROR:"+l.message)}finally{z(!1),setTimeout(()=>Ft(""),2e4)}}}async function un(){if(!yt){vt(!0),qt("");try{const l=await nr(Qr,Re,{includeProgressTracker:Pt});qt(`통합 게시 완료!
KO: ${window.location.origin}${l.urls.ko}
EN: ${window.location.origin}${l.urls.en}`)}catch(l){qt("ERROR: "+l.message)}finally{vt(!1),setTimeout(()=>qt(""),15e3)}}}async function po(l){try{const b=m||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),et=Rt?`${b}?month=${encodeURIComponent(l||ie)}`:b;(await(await fetch(et,{method:"DELETE"})).json()).ok&&(Rt?Qt():we(null))}catch{}}async function fn(){if(I!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}St(!0)}async function uo(l){St(!1),re(!0);const b=(l==null?void 0:l.products)??y,et=(l==null?void 0:l.productsCnty)??h,xt=(l==null?void 0:l.citations)??u,Ot=(l==null?void 0:l.citationsCnty)??x;try{const K=i,me=[K.title||"",K.dateLine||"",K.noticeText||"",K.totalInsight||"",K.reportType||"",K.productInsight||"",K.productHowToRead||"",K.citationInsight||"",K.citationHowToRead||"",K.dotcomInsight||"",K.dotcomHowToRead||"",K.todoText||"",K.todoNotice||"",K.kpiLogicText||"",K.cntyInsight||"",K.cntyHowToRead||"",K.citDomainInsight||"",K.citDomainHowToRead||"",K.citCntyInsight||"",K.citCntyHowToRead||"",K.citPrdInsight||"",K.citPrdHowToRead||"",K.period||"",K.team||"",K.reportNo||"",K.monthlyReportBody||""],D=b.map(Z=>Z.kr||""),ce=b.map(Z=>Z.compName||""),It=xt.map(Z=>Z.category||""),zt=[...new Set(et.map(Z=>Z.country||""))],ot=[...new Set(et.map(Z=>Z.product||""))],Q=[...new Set(et.map(Z=>Z.compName||""))],pt=[...new Set(Ot.map(Z=>Z.cnty||"").filter(Z=>Z&&Z!=="TTL"))],ht=[...me,...D,...ce,...It,...zt,...ot,...Q,...pt].map(Z=>Z||" "),X=await ir(ht,{from:"ko",to:"en"});let q=0;const ae={...i,title:X[q++]||K.title,dateLine:X[q++]||K.dateLine,noticeText:X[q++]||K.noticeText,totalInsight:X[q++]||K.totalInsight,reportType:X[q++]||K.reportType,productInsight:X[q++]||K.productInsight,productHowToRead:X[q++]||K.productHowToRead,citationInsight:X[q++]||K.citationInsight,citationHowToRead:X[q++]||K.citationHowToRead,dotcomInsight:X[q++]||K.dotcomInsight,dotcomHowToRead:X[q++]||K.dotcomHowToRead,todoText:X[q++]||K.todoText,todoNotice:X[q++]||K.todoNotice,kpiLogicText:X[q++]||K.kpiLogicText,cntyInsight:X[q++]||K.cntyInsight,cntyHowToRead:X[q++]||K.cntyHowToRead,citDomainInsight:X[q++]||K.citDomainInsight,citDomainHowToRead:X[q++]||K.citDomainHowToRead,citCntyInsight:X[q++]||K.citCntyInsight,citCntyHowToRead:X[q++]||K.citCntyHowToRead,citPrdInsight:X[q++]||K.citPrdInsight,citPrdHowToRead:X[q++]||K.citPrdHowToRead,period:(q++,K.period),team:X[q++]||K.team,reportNo:(q++,K.reportNo),monthlyReportBody:X[q++]||K.monthlyReportBody},Dt=Z=>Z&&Z.replace(/\b\w/g,it=>it.toUpperCase()),te=Z=>(Z||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),de={};b.forEach((Z,it)=>{de[Z.id]={en:Dt(X[q+it]||Z.kr),compNameEn:te(X[q+D.length+it]||Z.compName)}}),q+=D.length+ce.length;const Gt={};xt.forEach((Z,it)=>{Gt[`${Z.rank}_${Z.source}`]=Dt(X[q+it]||Z.category)}),q+=It.length;const be={};zt.forEach((Z,it)=>{be[Z]=/^[A-Z]{2,3}$/.test(Z)?Z:X[q+it]||Z}),q+=zt.length;const Le={};ot.forEach((Z,it)=>{Le[Z]=X[q+it]||Z}),q+=ot.length;const Ce={};Q.forEach((Z,it)=>{Ce[Z]=X[q+it]||Z}),q+=Q.length;const ke={};pt.forEach((Z,it)=>{ke[Z]=/^[A-Z]{2,3}$/.test(Z)?Z:X[q+it]||Z}),c(ae),g(Z=>Z.map(it=>{var fo,ho;return{...it,en:((fo=de[it.id])==null?void 0:fo.en)||it.en||it.kr,compNameEn:((ho=de[it.id])==null?void 0:ho.compNameEn)||it.compNameEn||it.compName}})),f(Z=>Z.map(it=>({...it,categoryEn:Gt[`${it.rank}_${it.source}`]||it.categoryEn||it.category}))),F(Z=>Z.map(it=>({...it,countryEn:Dt(be[it.country]||it.country),productEn:Dt(Le[it.product]||it.product),compNameEn:te(Ce[it.compName]||it.compName)}))),v(Z=>Z.map(it=>({...it,cntyEn:it.cnty==="TTL"?"TTL":Dt(ke[it.cnty]||it.cnty)}))),re(!1)}catch(K){alert("번역 오류: "+K.message),re(!1)}}async function hn(){const l=L(e,a,S.products,S.citations,p,I,S.productsCnty,S.citationsCnty);try{await navigator.clipboard.writeText(l)}catch{const b=document.createElement("textarea");b.value=l,document.body.appendChild(b),b.select(),document.execCommand("copy"),document.body.removeChild(b)}U(!0),setTimeout(()=>U(!1),2500)}async function gn(){await gr(e,a,y,u,p)}async function yn(){if(V!=="sending"){rt("sending");try{const l=nt(),b=L(e,l.total,l.products,l.citations,l.dotcom,I,l.productsCnty,l.citationsCnty,{weeklyLabels:C,categoryStats:B,unlaunchedMap:(M==null?void 0:M.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly"}),et=`[LG GEO] ${e.title} · ${e.period}`,Ot=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:W.trim(),subject:et,html:b})})).json();if(!Ot.ok)throw new Error(Ot.error||"발송 실패");rt("ok"),setTimeout(()=>rt(!1),4e3)}catch(l){rt("error"),Tt(l.message),setTimeout(()=>{rt(!1),Tt("")},5e3)}}}async function mn(){var et,xt,Ot,K,me;if(Bt)return;const l=Rr(Ct.trim());if(!l){Et("error"),Tt("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Et(null),3e3);return}kt(!0),Et(null),Tt(""),Wt("");const b=[];try{const D=await jr(l,ot=>Tt(ot));if(b.push(`[Sync] parsed keys: ${Object.keys(D).join(", ")||"(없음)"}`),D.meta&&b.push(`[Sync] meta keys: ${Object.keys(D.meta).join(", ")}`),D.productsPartial&&b.push(`[Sync] products: ${D.productsPartial.length}건`),b.push(`[Sync] citations: ${((et=D.citations)==null?void 0:et.length)??0}건`),b.push(`[Sync] citationsCnty: ${((xt=D.citationsCnty)==null?void 0:xt.length)??0}건`),b.push(`[Sync] dotcom: ${D.dotcom?"OK":"(없음)"}`),b.push(`[Sync] productsCnty: ${((Ot=D.productsCnty)==null?void 0:Ot.length)??0}건`),D.meta){const ot=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];s(Q=>{const pt={...Q};for(const[ht,X]of Object.entries(D.meta))ot.includes(ht)&&Q[ht]||(pt[ht]=X);return pt}),c(Q=>({...Q,period:D.meta.period,dateLine:D.meta.dateLine,reportNo:D.meta.reportNo}))}if(D.citations&&(f(D.citations),dt.current={...dt.current,citations:D.citations}),D.dotcom&&(k(ot=>({...ot,...D.dotcom})),dt.current={...dt.current,dotcom:{...dt.current.dotcom,...D.dotcom}}),D.productsCnty&&(F(D.productsCnty),dt.current={...dt.current,productsCnty:D.productsCnty}),D.citationsCnty&&(v(D.citationsCnty),dt.current={...dt.current,citationsCnty:D.citationsCnty}),D.monthlyVis&&w&&w(D.monthlyVis),N){const ot={weeklyPR:D.weeklyPR||null,weeklyPRLabels:D.weeklyPRLabels||null,weeklyBrandPrompt:D.weeklyBrandPrompt||null,weeklyBrandPromptLabels:D.weeklyBrandPromptLabels||null,appendixPrompts:D.appendixPrompts||null,unlaunchedMap:D.unlaunchedMap||null,weeklyLabelsFull:D.weeklyLabelsFull||null,prTopicList:D.prTopicList||null};N(ot),dt.current={...dt.current,extra:{...dt.current.extra,...ot}}}const ce=D.weeklyLabels||((K=D.meta)==null?void 0:K.weeklyLabels);console.log("[SYNC] weeklyLabels:",ce,"weeklyLabelsFull:",D.weeklyLabelsFull),ce&&ce.length&&_(ce),D.weeklyAll&&O(ot=>({...ot,...D.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(D));const It=D.weeklyMap?Object.keys(D.weeklyMap):[],zt=((me=D.productsPartial)==null?void 0:me.map(ot=>ot.id))||[];if(console.log("[SYNC] weeklyMap keys:",It.length?It:"NONE"),console.log("[SYNC] productsPartial IDs:",zt.length?zt:"NONE"),It.length&&zt.length){const ot=zt.filter(pt=>!It.includes(pt)),Q=It.filter(pt=>!zt.includes(pt));ot.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",ot),Q.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",Q),!ot.length&&!Q.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(D.productsPartial){const ot=D.productsPartial.map(Q=>{var Ce;const pt=((Ce=D.weeklyMap)==null?void 0:Ce[Q.id])||[],ht=pt.filter(ke=>ke!=null&&ke>0),X=Q.score,q=Q.prev||0,ae=Q.vsComp>0?Math.round(X/Q.vsComp*100):100,Dt=ht.length>0?ht[ht.length-1]:X,te=ht.length>=5?ht[ht.length-5]:ht[0]||0,de=X,Gt=q,be=ae,Le=q>0&&q!==X?[q,X]:[];return{...Q,score:de,prev:Gt,weekly:pt,monthly:Le,weeklyScore:Dt,weeklyPrev:te,monthlyScore:X,monthlyPrev:q,compRatio:be,status:be>=100?"lead":be>=80?"behind":"critical"}});g(ot),dt.current={...dt.current,products:ot}}else D.weeklyMap&&g(ot=>ot.map(Q=>{var ht;const pt=(ht=D.weeklyMap)==null?void 0:ht[Q.id];return pt?{...Q,weekly:pt}:Q}));if(D.total){const ot={...dt.current.total,...D.total,...D.buTotals?{buTotals:D.buTotals}:{},...D.buTotalsPrev?{buTotalsPrev:D.buTotalsPrev}:{},...D.countryTotals?{countryTotals:D.countryTotals}:{},...D.countryTotalsPrev?{countryTotalsPrev:D.countryTotalsPrev}:{}};d(Q=>({...Q,...ot})),dt.current={...dt.current,total:ot}}{let ot=function(q){if(!q)return 0;const ae=String(q).trim(),Dt=ae.match(/(\d{1,2})월/);if(Dt){const Gt=parseInt(Dt[1]);return Gt>=1&&Gt<=12?Gt:0}const te=ae.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(te)return ht[te[1].toLowerCase()]||0;const de=ae.match(/\d{4}[-\/](\d{1,2})/);if(de){const Gt=parseInt(de[1]);return Gt>=1&&Gt<=12?Gt:0}return 0};const Q=new Date().getFullYear(),pt=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ht={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let X=0;if(D.derivedPeriod){const q=ot(D.derivedPeriod);q>X&&(X=q)}if(D.citDerivedPeriod){const q=ot(D.citDerivedPeriod);q>X&&(X=q)}X>0&&X<=12&&(s(q=>({...q,period:`${Q}년 ${X}월`})),c(q=>({...q,period:`${pt[X]} ${Q}`})))}if(!D.total&&D.productsPartial&&D.productsPartial.length>0){const ot=D.productsPartial,Q=+(ot.reduce((ht,X)=>ht+X.score,0)/ot.length).toFixed(1),pt=+(ot.reduce((ht,X)=>ht+(X.vsComp||0),0)/ot.length).toFixed(1);d(ht=>({...ht,score:Q,vsComp:pt,rank:Q>=pt?1:2}))}if(setTimeout(()=>{Co(t,{meta:D.meta||null,total:D.total?{...D.total,...D.buTotals?{buTotals:D.buTotals}:{},...D.buTotalsPrev?{buTotalsPrev:D.buTotalsPrev}:{},...D.countryTotals?{countryTotals:D.countryTotals}:{},...D.countryTotalsPrev?{countryTotalsPrev:D.countryTotalsPrev}:{}}:null,productsPartial:D.productsPartial||null,weeklyMap:D.weeklyMap||null,weeklyLabels:D.weeklyLabels||null,weeklyLabelsFull:D.weeklyLabelsFull||null,weeklyAll:D.weeklyAll||null,citations:D.citations||null,dotcom:D.dotcom||null,productsCnty:D.productsCnty||null,citationsCnty:D.citationsCnty||null,citationsByCnty:D.citationsByCnty||null,dotcomByCnty:D.dotcomByCnty||null,appendixPrompts:D.appendixPrompts||null,unlaunchedMap:D.unlaunchedMap||null,prTopicList:D.prTopicList||null,monthlyVis:D.monthlyVis||null,weeklyPR:D.weeklyPR||null,weeklyPRLabels:D.weeklyPRLabels||null,monthlyPR:D.monthlyPR||null,monthlyPRLabels:D.monthlyPRLabels||null,weeklyBrandPrompt:D.weeklyBrandPrompt||null,weeklyBrandPromptLabels:D.weeklyBrandPromptLabels||null,monthlyBrandPrompt:D.monthlyBrandPrompt||null,monthlyBrandPromptLabels:D.monthlyBrandPromptLabels||null,dotcomTrend:D.dotcomTrend||null,dotcomTrendMonths:D.dotcomTrendMonths||null}),setTimeout(dn,250)},100),Wt(b.join(`
`)),Et("ok"),Tt(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const ot={};D.productsPartial&&(ot.products=D.productsPartial.map(Q=>{var Dt;const pt=((Dt=D.weeklyMap)==null?void 0:Dt[Q.id])||[],ht=Q.vsComp>0?Q.score/Q.vsComp*100:100,X=pt.find(te=>te!=null&&te>0),q=Q.prev!=null&&Q.prev>0?Q.prev:X||0,ae=q>0?[q,Q.score]:[];return{...Q,prev:q,weekly:pt,monthly:ae,compRatio:Math.round(ht),status:ht>=100?"lead":ht>=80?"behind":"critical"}})),D.productsCnty&&(ot.productsCnty=D.productsCnty),D.citations&&(ot.citations=D.citations),D.citationsCnty&&(ot.citationsCnty=D.citationsCnty);try{await uo(ot)}catch{}Tt("동기화 + 번역 완료!")}}catch(D){b.push(`[ERROR] ${D.message}`),Et("error"),Tt(D.message),Wt(b.join(`
`))}finally{kt(!1),setTimeout(()=>{Et(null),Tt("")},4e3)}}return r.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[r.jsx("div",{style:{width:28,height:28,borderRadius:7,background:mt,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:R},children:"LG"})}),r.jsxs("div",{children:[r.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:R},children:["GEO Builder ",r.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:R},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),r.jsx(Mr,{...cn||{}})]}),r.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"구글 시트 동기화"}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:R},children:"Google Sheets URL"}),r.jsx("input",{value:Ct,onChange:l=>Ht(l.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...ut,fontSize:11,padding:"7px 9px",marginBottom:8,color:Ct?"#E2E8F0":"#334155"}}),r.jsxs("button",{onClick:mn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:Bt?"wait":"pointer",background:Bt?"#1E293B":mt,fontSize:12,fontWeight:700,color:Bt?"#94A3B8":"#FFFFFF",fontFamily:R,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(go,{size:13,style:{animation:Bt?"spin 1s linear infinite":"none"}}),Bt?"동기화 중...":"구글 시트 동기화"]}),(At||Bt&&_t)&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:R,lineHeight:1.6,background:At==="ok"?"#14532D":At==="error"?"#450A0A":"#1E293B",color:At==="ok"?"#86EFAC":At==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${At==="ok"?"#22C55E33":At==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:_t}),Xt&&r.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[Xt,r.jsx("button",{onClick:()=>{navigator.clipboard.writeText(Xt).then(()=>{const l=document.getElementById("vis-debug-copy-btn");l&&(l.textContent="복사됨!",setTimeout(()=>{l.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:R,cursor:"pointer"},children:"로그 복사"})]}),r.jsx(ai,{url:Ct,downloadName:`${t||"dashboard"}-sheet`,mode:t||"dashboard"}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("button",{onClick:fn,disabled:Vt,style:{width:"100%",padding:"9px 0",background:Vt?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:R,cursor:Vt?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:Vt?.6:1},children:[r.jsx(bn,{size:13})," ",Vt?"번역 중...":"AI 번역 (EN)"]}),at&&r.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:R},children:"AI 번역 확인"}),r.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:R},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",r.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",r.jsx("br",{}),"진행하시겠습니까?"]}),r.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[r.jsx("button",{onClick:()=>St(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:R,cursor:"pointer"},children:"아니오"}),r.jsx("button",{onClick:uo,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:R,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),r.jsxs("button",{onClick:gn,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[r.jsx(xn,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[Rt&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"발행 월"}),r.jsx("select",{value:ie,onChange:l=>ye(l.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:R,fontSize:11,fontWeight:700,cursor:"pointer"},children:ln.map(l=>r.jsxs("option",{value:l,children:[l," · ",Te(l),le.find(b=>b.month===l)?" ✓ 게시됨":""]},l))})]}),Rt&&ct&&r.jsxs("div",{style:{marginBottom:8},children:[r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["핵심 과제 진척 월 ",r.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",gt||"—",")"]})]}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("select",{value:lt||"",onChange:l=>ct(l.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:R,fontSize:11,fontWeight:700,cursor:"pointer"},children:[r.jsxs("option",{value:"",children:["자동 (",gt||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(l=>r.jsx("option",{value:l,children:l},l))]}),lt&&r.jsx("button",{onClick:()=>ct(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:R,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),r.jsxs("button",{onClick:pn,disabled:Y,style:{width:"100%",padding:"9px 0",background:Y?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:Y?"#94A3B8":"#FFFFFF",fontFamily:R,cursor:Y?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[r.jsx(yo,{size:12}),Y?"게시 중...":Rt?`${Te(ie)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:R,cursor:"pointer"},children:[r.jsx("input",{type:"checkbox",checked:Pt,onChange:l=>Kt(l.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),r.jsxs("button",{onClick:un,disabled:yt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:yt?"#1E293B":"#166534",color:yt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:R,cursor:yt?"wait":"pointer",marginBottom:6},children:[r.jsx(yo,{size:12}),yt?"통합 게시 중...":"통합 대시보드 게시"]}),Mt&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:R,lineHeight:1.8,background:Mt.startsWith("ERROR")?"#450A0A":"#14532D",color:Mt.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Mt.startsWith("ERROR:")?Mt.slice(6):Mt})]})]}),r.jsxs("button",{onClick:async()=>{const l={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(l).some(et=>et.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const xt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:l})})).json();xt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(xt.error||""))}catch(et){alert("아카이빙 실패: "+et.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[r.jsx(vn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&st&&r.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:R,lineHeight:1.8,background:st.startsWith("ERROR:")?"#450A0A":"#14532D",color:st.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${st.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:st.startsWith("ERROR:")?st.slice(6):r.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[r.jsx(We,{size:11,style:{marginTop:3,flexShrink:0}})," ",r.jsxs("span",{children:[st,r.jsx("br",{}),r.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Rt&&(Zt==null?void 0:Zt.published)&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[r.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:R,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),r.jsx("button",{onClick:()=>po(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:R,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:Zt.urls.ko},{label:"EN",url:Zt.urls.en}].map(({label:l,url:b})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[r.jsxs("a",{href:b,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:R,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[l,": ",b]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${b}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(We,{size:10})})]},l)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:R},children:Zt.ts?new Date(Zt.ts).toLocaleString("ko-KR"):""})]}),Rt&&le.length>0&&r.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[r.jsx("div",{style:{marginBottom:6},children:r.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:R,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",le.length,")"]})}),le.map(l=>r.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:R},children:Te(l.month)}),r.jsx("button",{onClick:()=>{confirm(`${Te(l.month)} 게시본을 삭제할까요?`)&&po(l.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:R,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:l.urls.ko},{label:"EN",url:l.urls.en}].map(({label:b,url:et})=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[r.jsxs("a",{href:et,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:R,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[b,": ",et]}),r.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${et}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:r.jsx(We,{size:10})})]},b)),r.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:R},children:l.ts?new Date(l.ts).toLocaleString("ko-KR"):""})]},l.month))]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"헤더 편집"}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["리포트 유형 ",r.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),r.jsx("input",{value:e.reportType,onChange:l=>o(b=>({...b,reportType:l.target.value})),style:{...ut,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:"보고서 번호"}),r.jsx("input",{value:e.reportNo,onChange:l=>o(b=>({...b,reportNo:l.target.value})),style:{...ut}})]}),r.jsxs("div",{style:{flex:1.4},children:[r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["기간 ",r.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),r.jsx("input",{value:e.period,onChange:l=>o(b=>({...b,period:l.target.value})),style:{...ut}})]})]}),r.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:"제목 텍스트"}),r.jsx("textarea",{value:e.title,onChange:l=>o(b=>({...b,title:l.target.value})),rows:4,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["팀명 ",r.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),r.jsx("input",{value:e.team,onChange:l=>o(b=>({...b,team:l.target.value})),style:{...ut,marginBottom:8}}),r.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:R},children:["기준 텍스트 ",r.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),r.jsx("input",{value:e.dateLine,onChange:l=>o(b=>({...b,dateLine:l.target.value})),style:{...ut,marginBottom:10}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Notice"}),r.jsx("button",{onClick:()=>o(l=>({...l,showNotice:!l.showNotice})),style:{background:e.showNotice?mt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.noticeText,onChange:l=>o(b=>({...b,noticeText:l.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...ut,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"KPI Logic"}),r.jsx("button",{onClick:()=>o(l=>({...l,showKpiLogic:!l.showKpiLogic})),style:{background:e.showKpiLogic?mt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:r.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{value:e.kpiLogicText,onChange:l=>o(b=>({...b,kpiLogicText:l.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...ut,marginBottom:4,resize:"vertical"}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})]})]})]}),r.jsxs("div",{style:{marginBottom:10},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"폰트 크기"}),r.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:R,fontWeight:700},children:[e.titleFontSize,"px"]})]}),r.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:l=>o(b=>({...b,titleFontSize:Number(l.target.value)})),style:{width:"100%",accentColor:mt,cursor:"pointer"}})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R,flex:1},children:"제목 색상"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("input",{type:"color",value:e.titleColor,onChange:l=>o(b=>({...b,titleColor:l.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),r.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:R},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([l,b])=>r.jsx("button",{onClick:()=>o(et=>({...et,titleColor:l})),title:b,style:{width:16,height:16,borderRadius:"50%",background:l,border:e.titleColor===l?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},l))]})]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),r.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"섹션 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:[{key:"showTotal",label:"GEO 지수"},{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"},{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showDotcom",label:"닷컴"},{key:"showTodo",label:"Action Plan"}].map(({key:l,label:b})=>r.jsx("button",{onClick:()=>o(et=>({...et,[l]:!et[l]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:e[l]?mt:"#1E293B",color:e[l]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:b},l))}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:R},children:"제품 카드:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v1"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:(e.productCardVersion||"v1")==="v1"?mt:"#1E293B",color:(e.productCardVersion||"v1")==="v1"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:"V1 트렌드"}),r.jsx("span",{style:{width:1,height:14,background:"#334155",margin:"0 4px"}}),r.jsx("button",{onClick:()=>o(l=>({...l,trendMode:(l.trendMode||"weekly")==="weekly"?"monthly":"weekly"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.trendMode==="monthly"?"#166534":"#1E293B",color:e.trendMode==="monthly"?"#86EFAC":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:e.trendMode==="monthly"?"Monthly":"Weekly"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:12},children:[r.jsx("span",{style:{fontSize:11,color:"#64748B",fontFamily:R},children:"카드 타입:"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v2"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v2"?mt:"#1E293B",color:e.productCardVersion==="v2"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:"V2 국가별"}),r.jsx("button",{onClick:()=>o(l=>({...l,productCardVersion:"v3"})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.productCardVersion==="v3"?mt:"#1E293B",color:e.productCardVersion==="v3"?"#FFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:R},children:"V3 경쟁사"})]}),r.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:R},children:"콘텐츠 편집"})]}),t==="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"월간 보고서 본문"}),r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,monthlyReportBody:"⏳ AI 생성 중..."}));const l=await $t("monthlyReportBody",{products:nt().products,productsCnty:nt().productsCnty,total:nt().total,citations:nt().citations,todoText:e.todoText||"",period:e.period||""},I);o(b=>({...b,monthlyReportBody:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,monthlyReportBody:`[AI 실패: ${l.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.monthlyReportBody||"",onChange:l=>o(b=>({...b,monthlyReportBody:l.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:R},children:[r.jsx("code",{children:"1. 제목"})," → H2 · ",r.jsx("code",{children:"2.1 부제"})," → H3 · ",r.jsx("code",{children:"**텍스트**"})," → ",r.jsx("strong",{children:"볼드"})]})]}),t!=="monthly-report"&&t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"GEO 전략 인사이트"}),r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,totalInsight:"⏳ AI 생성 중..."}));const l=await $t("totalInsight",{products:nt().products,productsCnty:nt().productsCnty,total:nt().total,todoText:e.todoText||""},I);o(b=>({...b,totalInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,totalInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]})]}),r.jsx("textarea",{value:e.totalInsight,onChange:l=>o(b=>({...b,totalInsight:l.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,productInsight:"⏳ AI 생성 중..."}));const l=await $t("product",{products:nt().products,total:nt().total},I);o(b=>({...b,productInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,productInsight:`[AI 실패: ${l.message}]

`+ti(nt().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductInsight:!l.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?mt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showProductInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productInsight,onChange:l=>o(b=>({...b,productInsight:l.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품 섹션 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,productHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"제품별 GEO Visibility"},I);o(b=>({...b,productHowToRead:l}))}catch{o(l=>({...l,productHowToRead:ei()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showProductHowToRead:!l.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?mt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showProductHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.productHowToRead,onChange:l=>o(b=>({...b,productHowToRead:l.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 섹션 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,cntyInsight:"⏳ AI 생성 중..."}));const l=await $t("cnty",{productsCnty:nt().productsCnty},I);o(b=>({...b,cntyInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,cntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyInsight:!l.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?mt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyInsight,onChange:l=>o(b=>({...b,cntyInsight:l.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,cntyHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"국가별 GEO Visibility"},I);o(b=>({...b,cntyHowToRead:l}))}catch{o(l=>({...l,cntyHowToRead:oi()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCntyHowToRead:!l.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?mt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.cntyHowToRead,onChange:l=>o(b=>({...b,cntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"PR Visibility 안내 문구"}),r.jsx("textarea",{value:e.prNotice||"",onChange:l=>o(b=>({...b,prNotice:l.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["PR 토픽별 설명 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:l=>o(b=>({...b,prTopicDescsRaw:l.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["PR 토픽별 대표 프롬프트 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),r.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:l=>o(b=>({...b,prTopicPromptsRaw:l.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater
(비워두면 Appendix.Prompt List US 데이터 자동 매칭)`,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"Brand Prompt 이상 점검 안내 문구"}),r.jsx("textarea",{value:e.bpNotice||"",onChange:l=>o(b=>({...b,bpNotice:l.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Citation 카테고리 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citationInsight:"⏳ AI 생성 중..."}));const l=await $t("citation",{citations:nt().citations},I);o(b=>({...b,citationInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citationInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationInsight:!l.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?mt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitationInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationInsight,onChange:l=>o(b=>({...b,citationInsight:l.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citationHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"Citation 도메인별 현황"},I);o(b=>({...b,citationHowToRead:l}))}catch{o(l=>({...l,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitationHowToRead:!l.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?mt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citationHowToRead,onChange:l=>o(b=>({...b,citationHowToRead:l.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"도메인별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citDomainInsight:"⏳ AI 생성 중..."}));const l=await $t("citDomain",{citationsCnty:nt().citationsCnty},I);o(b=>({...b,citDomainInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citDomainInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainInsight:!l.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?mt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainInsight,onChange:l=>o(b=>({...b,citDomainInsight:l.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"도메인별 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citDomainHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"도메인별 Citation 현황"},I);o(b=>({...b,citDomainHowToRead:l}))}catch{o(l=>({...l,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainHowToRead:!l.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?mt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citDomainHowToRead,onChange:l=>o(b=>({...b,citDomainHowToRead:l.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citCntyInsight:"⏳ AI 생성 중..."}));const l=await $t("citCnty",{citationsCnty:nt().citationsCnty},I);o(b=>({...b,citCntyInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citCntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyInsight:!l.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?mt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyInsight,onChange:l=>o(b=>({...b,citCntyInsight:l.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citCntyHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"국가별 Citation 도메인"},I);o(b=>({...b,citCntyHowToRead:l}))}catch{o(l=>({...l,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyHowToRead:!l.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?mt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citCntyHowToRead,onChange:l=>o(b=>({...b,citCntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품별 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citPrdInsight:"⏳ AI 생성 중..."}));const l=await $t("citPrd",{citationsCnty:nt().citationsCnty},I);o(b=>({...b,citPrdInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,citPrdInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdInsight:!l.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?mt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdInsight||"",onChange:l=>o(b=>({...b,citPrdInsight:l.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"제품별 Citation How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,citPrdHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"제품별 Citation"},I);o(b=>({...b,citPrdHowToRead:l}))}catch{o(l=>({...l,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdHowToRead:!l.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?mt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:l=>o(b=>({...b,citPrdHowToRead:l.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),h.length>0&&(()=>{const l=[...new Set(S.productsCnty.map(b=>b.product))];return r.jsxs("div",{style:{marginBottom:8},children:[r.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:R},children:"국가별 제품군 표시"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:l.map(b=>{const et=(e.cntyProductFilter||{})[b]!==!1;return r.jsx("button",{onClick:()=>o(xt=>({...xt,cntyProductFilter:{...xt.cntyProductFilter||{},[b]:!et}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:et?"#166534":"#1E293B",color:et?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:b},b)})})]})})(),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"닷컴 Citation 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,dotcomInsight:"⏳ AI 생성 중..."}));const l=await $t("dotcom",{dotcom:nt().dotcom},I);o(b=>({...b,dotcomInsight:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,dotcomInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomInsight:!l.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?mt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showDotcomInsight?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomInsight,onChange:l=>o(b=>({...b,dotcomInsight:l.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"닷컴 How to Read"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,dotcomHowToRead:"⏳ AI 생성 중..."}));const l=await $t("howToRead",{section:"닷컴 Citation"},I);o(b=>({...b,dotcomHowToRead:l}))}catch{o(b=>({...b,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showDotcomHowToRead:!l.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?mt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.dotcomHowToRead,onChange:l=>o(b=>({...b,dotcomHowToRead:l.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),r.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:["전사 핵심 과제 노티스 ",r.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),r.jsx("textarea",{value:e.todoNotice||"",onChange:l=>o(b=>({...b,todoNotice:l.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:8}}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:"Action Plan 인사이트"}),r.jsxs("div",{style:{display:"flex",gap:4},children:[r.jsxs("button",{onClick:async()=>{try{o(b=>({...b,todoText:"⏳ AI 생성 중..."}));const l=await $t("todo",{products:nt().products},I);o(b=>({...b,todoText:l}))}catch(l){console.error("[AI]",l),o(b=>({...b,todoText:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:3},children:[r.jsx(Lt,{size:9})," AI 생성"]}),r.jsx("button",{onClick:()=>o(l=>({...l,showTodo:!l.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?mt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R},children:e.showTodo?"ON":"OFF"})]})]}),r.jsx("textarea",{value:e.todoText,onChange:l=>o(b=>({...b,todoText:l.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...ut,resize:"vertical",lineHeight:1.6,marginBottom:4}}),r.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:R},children:["**텍스트** → ",r.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),r.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:hn,style:{width:"100%",padding:"9px 0",background:jt?"#14532D":"transparent",border:`1px solid ${jt?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:jt?"#86EFAC":"#64748B",fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:jt?r.jsxs(r.Fragment,{children:[r.jsx(Je,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(Wo,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:R},children:"수신 이메일 주소"}),r.jsx("input",{type:"email",value:W,onChange:l=>ft(l.target.value),placeholder:"recipient@example.com",style:{...ut,fontSize:11,marginBottom:8}}),r.jsx("button",{onClick:yn,disabled:V==="sending"||!W.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:V==="sending"||!W.trim()?"not-allowed":"pointer",background:V==="ok"?"#14532D":V==="error"?"#7F1D1D":V==="sending"?"#1E3A5F":W.trim()?"#1D4ED8":"#1E293B",color:V==="ok"?"#86EFAC":V==="error"?"#FCA5A5":W.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:V==="sending"?r.jsxs(r.Fragment,{children:[r.jsx(go,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):V==="ok"?r.jsxs(r.Fragment,{children:[r.jsx(Je,{size:12})," 발송 완료!"]}):V==="error"?r.jsxs(r.Fragment,{children:[r.jsx(mo,{size:12})," 발송 실패 — 다시 시도"]}):r.jsxs(r.Fragment,{children:[r.jsx(mo,{size:12})," 메일 발송"]})})]})]})]}),r.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:r.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:R,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function li({value:t,onChange:e,products:o,productsCnty:i,monthlyVis:s,style:n}){const c=Vo.useMemo(()=>Tn(o,i,s),[o,i,s]);return!c.length||c.length===1&&c[0]==="Total"?null:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...n},children:[r.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),r.jsx("select",{value:t||"Total",onChange:a=>e(a.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:c.map(a=>r.jsx("option",{value:a,children:a},a))})]})}const xe="monthly-report",Ho="geo-monthly-report-cache";function ci({meta:t,total:e,products:o,citations:i,dotcom:s,productsCnty:n=[],citationsCnty:c=[],lang:a="ko",weeklyLabels:d,categoryStats:y,stakeholderStats:g,cntyKeys:u=null,llmModel:f,monthlyVis:p}){const k=H.useRef(null),h=H.useMemo(()=>no(t,e,o,i,s,a,n,c,{categoryStats:y,stakeholderStats:g,cntyKeys:u,llmModel:f,monthlyVis:p}),[t,e,o,i,s,a,n,c,d,u,f,p]);return Vo.useEffect(()=>{const F=k.current;if(!F)return;const x=F.contentDocument||F.contentWindow.document;x.open(),x.write(h),x.close();const v=()=>{try{x.body.style.overflow="hidden",x.documentElement.style.overflow="hidden";const S=x.documentElement.scrollHeight;S&&(F.style.height=S+20+"px")}catch{}};setTimeout(v,150),setTimeout(v,400),setTimeout(v,1e3),setTimeout(v,2e3)},[h]),r.jsx("iframe",{ref:k,title:"newsletter-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function di({meta:t,total:e,products:o,citations:i,dotcom:s,productsCnty:n=[],citationsCnty:c=[],lang:a="ko",weeklyLabels:d,categoryStats:y,stakeholderStats:g,cntyKeys:u=null,llmModel:f,monthlyVis:p}){const[k,h]=H.useState(!1),F=H.useMemo(()=>no(t,e,o,i,s,a,n,c,{categoryStats:y,stakeholderStats:g,cntyKeys:u,llmModel:f,monthlyVis:p}),[t,e,o,i,s,a,n,c,d,y,u,f,p]);async function x(){try{await navigator.clipboard.writeText(F)}catch{const v=document.createElement("textarea");v.value=F,document.body.appendChild(v),v.select(),document.execCommand("copy"),document.body.removeChild(v)}h(!0),setTimeout(()=>h(!1),2500)}return r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[r.jsxs("div",{children:[r.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:R},children:"이메일 HTML 코드"}),r.jsx("span",{style:{fontSize:11,color:"#334155",fontFamily:R,marginLeft:10},children:"table 기반 · 인라인 스타일 · 이메일 클라이언트 호환"})]}),r.jsx("button",{onClick:x,style:{padding:"6px 14px",borderRadius:7,border:"none",background:k?"#14532D":mt,color:k?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R,cursor:"pointer",display:"flex",alignItems:"center",gap:5,transition:"all 0.2s"},children:k?r.jsxs(r.Fragment,{children:[r.jsx(Je,{size:12})," 복사됨!"]}):r.jsxs(r.Fragment,{children:[r.jsx(Wo,{size:12})," HTML 복사"]})})]}),r.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:r.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:F})})]})}function pi(){const t=H.useRef(Xn(Ho)).current,[e,o]=H.useState({...$e,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,s]=H.useState({...$e,...(t==null?void 0:t.metaEn)??{}}),[n,c]=H.useState((t==null?void 0:t.total)??Wn),[a,d]=H.useState((t==null?void 0:t.products)??Vn),[y,g]=H.useState((t==null?void 0:t.citations)??Yn),[u,f]=H.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:Kn),[p,k]=H.useState((t==null?void 0:t.productsCnty)??qn),[h,F]=H.useState((t==null?void 0:t.citationsCnty)??Jn),[x,v]=H.useState((t==null?void 0:t.weeklyLabels)??null),[S,I]=H.useState((t==null?void 0:t.weeklyAll)??{}),[$,j]=H.useState(null),[T,_]=H.useState(null),[O,C]=H.useState("preview"),[E,A]=H.useState("ko"),[P,L]=H.useState("Total"),[m,w]=H.useState((t==null?void 0:t.monthlyVis)??[]),[N,B]=H.useState([]),[M,J]=H.useState(""),[lt,ct]=H.useState(!1),[gt,dt]=H.useState(""),[nt,Ct]=H.useState(null),[Ht,Bt]=H.useState(!0),[kt,At]=H.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),Et=H.useMemo(()=>{const Y=new Set;return(p||[]).forEach(z=>{z&&z.country&&!/^(ttl|total)$/i.test(z.country)&&Y.add(String(z.country).toUpperCase())}),Array.from(Y).sort()},[p]),_t=kt.length>0?kt:null,Tt=H.useCallback(Y=>{At(z=>z.includes(Y)?z.filter(st=>st!==Y):[...z,Y])},[]),Xt=H.useCallback(()=>At(Et),[Et]),Wt=H.useCallback(()=>At([]),[]);H.useEffect(()=>{let Y=!1;const z=cr(e.period)||"3월";async function st(){var Ft,yt,vt;try{const Pt=await fetch("/api/tracker-snapshot-v2"),Kt=Pt.ok?await Pt.json():null;if(Kt!=null&&Kt.ok&&((vt=(yt=(Ft=Kt.data)==null?void 0:Ft.quantitativeGoals)==null?void 0:yt.rows)!=null&&vt.length)){const Mt=So(Kt.data,z),qt=Ao(Kt.data,z);if(Mt!=null&&Mt.length&&!Y){j(Mt),qt!=null&&qt.length&&_(qt);return}}}catch{}try{const[{parseKPISheet:Pt},Kt]=await Promise.all([Ye(()=>import("./sheetParser-BGRKNm5Y.js"),[]),Ye(()=>import("./xlsx-DiWaSB7x.js").then(Qt=>Qt.x),__vite__mapDeps([0,1]))]),Mt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,qt=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${Mt}&headers=1`,Zt=await fetch(qt,{cache:"no-store"});if(!Zt.ok)return;const we=await Zt.text(),le=Kt.read(we,{type:"string"}),He=le.Sheets[le.SheetNames[0]],Rt=Kt.utils.sheet_to_json(He,{header:1,defval:""}),ie=Pt(Rt),ye=So(ie,z);if(ye!=null&&ye.length&&!Y){j(ye);const Qt=Ao(ie,z);Qt!=null&&Qt.length&&_(Qt)}}catch{}}return st(),()=>{Y=!0}},[e.period]);const jt=E==="en"?i:e,U=E==="en"?s:o,W=H.useMemo(()=>Re(a,p,y,h,E),[a,p,y,h,E]);H.useEffect(()=>{Qn(xe).then(B)},[]);const ft=H.useRef(null);function V(Y,z=2e3){clearTimeout(ft.current),dt(Y),ft.current=setTimeout(()=>dt(""),z)}H.useEffect(()=>()=>clearTimeout(ft.current),[]);const rt=H.useRef(!1);H.useEffect(()=>{let Y=!1;return Pe(xe).then(z=>{Y||!z||(rt.current=!0,z.meta&&o(st=>({...st,...z.meta})),z.total&&c(st=>({...st,...z.total})),z.citations&&g(z.citations),z.dotcom&&f(st=>({...st,...z.dotcom})),z.productsCnty&&k(z.productsCnty),z.citationsCnty&&F(z.citationsCnty),z.weeklyLabels&&v(z.weeklyLabels),z.weeklyAll&&I(st=>({...st,...z.weeklyAll})),z.monthlyVis&&w(z.monthlyVis),z.productsPartial?d(z.productsPartial.map(st=>{var vt;const Ft=((vt=z.weeklyMap)==null?void 0:vt[st.id])||[],yt=st.vsComp>0?st.score/st.vsComp*100:100;return{...st,weekly:Ft,monthly:[],compRatio:Math.round(yt),status:yt>=100?"lead":yt>=80?"behind":"critical"}})):z.weeklyMap&&d(st=>st.map(Ft=>{var vt;const yt=(vt=z.weeklyMap)==null?void 0:vt[Ft.id];return yt?{...Ft,weekly:yt}:Ft})))}),()=>{Y=!0}},[]),H.useEffect(()=>{Zn(Ho,{metaKo:e,metaEn:i,total:n,products:a,citations:y,dotcom:u,productsCnty:p,citationsCnty:h,weeklyLabels:x,weeklyAll:S,selectedCountries:kt})},[e,i,n,a,y,u,p,h,x,S,kt]);async function at(){if(!nt)return;const z=await er(xe,nt,{metaKo:e,metaEn:i,total:n,products:a,citations:y,dotcom:u,productsCnty:p,citationsCnty:h,weeklyLabels:x,weeklyAll:S});z&&B(z),V(z?"저장 완료!":"저장 실패")}async function St(){var st;const Y=M.trim()||`${jt.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,z=await tr(xe,Y,{metaKo:e,metaEn:i,total:n,products:a,citations:y,dotcom:u,productsCnty:p,citationsCnty:h,weeklyLabels:x,weeklyAll:S});z&&(B(z),J(""),Ct(((st=z[0])==null?void 0:st.ts)||null)),V(z?"새로 저장 완료!":"저장 실패")}function Vt(Y){const z=Y.data;o({...$e,...z.metaKo||z.meta||{}}),s({...$e,...z.metaEn||{}}),z.total&&c(z.total),z.products&&d(z.products),z.citations&&g(z.citations),z.dotcom&&f(z.dotcom),z.productsCnty&&k(z.productsCnty),z.citationsCnty&&F(z.citationsCnty),z.weeklyLabels&&v(z.weeklyLabels),z.weeklyAll&&I(z.weeklyAll),Ct(Y.ts),V(`"${Y.name}" 불러옴`)}async function re(Y){const z=N[Y];if(!z)return;const st=await or(xe,z.ts);st&&B(st),nt===z.ts&&Ct(null)}return r.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:R},children:[Ht&&r.jsx(si,{mode:xe,meta:jt,setMeta:U,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:s,total:n,setTotal:c,products:a,setProducts:d,citations:y,setCitations:g,dotcom:u,setDotcom:f,productsCnty:p,setProductsCnty:k,citationsCnty:h,setCitationsCnty:F,resolved:W,previewLang:E,setPreviewLang:A,snapshots:N,setSnapshots:B,setWeeklyLabels:v,setWeeklyAll:I,weeklyLabels:x,weeklyAll:S,generateHTML:no}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[r.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[r.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[r.jsx("button",{onClick:()=>Bt(Y=>!Y),title:Ht?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:Ht?r.jsx(wn,{size:16}):r.jsx(Cn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"월간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"월간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:Y,tab:z,lang:st,label:Ft})=>{const yt=z==="code"?O==="code":O==="preview"&&E===st;return r.jsx("button",{onClick:()=>{C(z),st&&A(st)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:yt?"#1E293B":"transparent",color:yt?"#FFFFFF":"#475569",fontSize:11,fontWeight:yt?700:500,fontFamily:R,cursor:"pointer"},children:Ft},Y)})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[gt&&r.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:R},children:gt}),r.jsxs("button",{onClick:at,disabled:!nt,title:nt?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:nt?"pointer":"default",background:nt?"#1D4ED8":"#1E293B",color:nt?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:4,opacity:nt?1:.5},children:[r.jsx(bo,{size:11})," 저장"]}),r.jsx("input",{value:M,onChange:Y=>J(Y.target.value),placeholder:"버전 이름...",onKeyDown:Y=>Y.key==="Enter"&&St(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:R,outline:"none"}}),r.jsxs("button",{onClick:St,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:4},children:[r.jsx(bo,{size:11})," 새로 저장"]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{onClick:()=>ct(!lt),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:lt?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:R,display:"flex",alignItems:"center",gap:4},children:[r.jsx(kn,{size:11})," 불러오기 ",N.length>0&&r.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",N.length,")"]})]}),lt&&r.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:Y=>Y.stopPropagation(),children:N.length===0?r.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:R,textAlign:"center"},children:"저장된 버전이 없습니다"}):N.map((Y,z)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:nt===Y.ts?"#1E3A5F":"#0F172A",border:nt===Y.ts?"1px solid #3B82F6":"1px solid transparent"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:R,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Y.name}),r.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:R},children:new Date(Y.ts).toLocaleString("ko-KR")})]}),r.jsx("button",{onClick:()=>{Vt(Y),ct(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:R},children:"적용"}),r.jsx("button",{onClick:()=>re(z),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:r.jsx(Sn,{size:10})})]},Y.ts))})]})]})]}),Et.length>0&&r.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[r.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),Et.map(Y=>{const z=kt.includes(Y);return r.jsx("button",{onClick:()=>Tt(Y),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(z?"#22C55E":"#334155"),background:z?"#16A34A":"#1E293B",color:z?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:Y},Y)}),r.jsx("button",{onClick:Xt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),r.jsx("button",{onClick:Wt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),r.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:kt.length===0?"전체 국가":`${kt.length}개 선택`})]}),O==="preview"?r.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:r.jsxs("div",{style:{maxWidth:960,margin:"0 auto"},children:[r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:r.jsx(li,{value:P,onChange:L,products:W.products,productsCnty:W.productsCnty,monthlyVis:m})}),r.jsx(ci,{meta:jt,total:n,products:W.products,citations:W.citations,dotcom:u,productsCnty:W.productsCnty,citationsCnty:W.citationsCnty,lang:E,weeklyLabels:x,categoryStats:$,stakeholderStats:T,cntyKeys:_t,llmModel:P,monthlyVis:m})]})}):r.jsx(di,{meta:jt,total:n,products:W.products,citations:W.citations,dotcom:u,productsCnty:W.productsCnty,citationsCnty:W.citationsCnty,lang:E,weeklyLabels:x,categoryStats:$,stakeholderStats:T,cntyKeys:_t,llmModel:P,monthlyVis:m}),r.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:r.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:R},children:["v","3.1.9"]})})]})]})}Fn.createRoot(document.getElementById("root")).render(r.jsx(pi,{}));
