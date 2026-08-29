const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-CaYOwpyI.js","assets/react-Ce9l3SD5.js"])))=>i.map(i=>d[i]);
import{j as n,b as dt,R as ko,L as Dn,D as On,G as So,A as Nn,c as We,S as Ot,P as _n,C as Qe,d as an,e as Fo,f as sn,h as zn,i as Gn,k as To,F as Un,T as Hn}from"./react-Ce9l3SD5.js";import{R as Vn}from"./react-dom-D_GsT2Iz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const Wn="modulepreload",Kn=function(t){return"/admin/monthly-report/"+t},Eo={},to=function(e,o,i){let a=Promise.resolve();if(o&&o.length>0){let c=function(y){return Promise.all(y.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),p=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=c(o.map(y=>{if(y=Kn(y),y in Eo)return;Eo[y]=!0;const h=y.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Wn,h||(d.as="script"),d.crossOrigin="",d.href=y,p&&d.setAttribute("nonce",p),document.head.appendChild(d),h)return new Promise((m,k)=>{d.addEventListener("load",m),d.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${y}`)))})}))}function r(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return a.then(c=>{for(const l of c||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},ce="Total";function qn(...t){const e=new Set([ce]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(i=>{i!=null&&i.llmModel&&e.add(i.llmModel),((i==null?void 0:i.monthlyScores)||[]).forEach(r=>Object.keys((r==null?void 0:r.byLlm)||{}).forEach(c=>e.add(c)))})}),[ce,...Array.from(e).filter(o=>o!==ce).sort((o,i)=>o.localeCompare(i))]}function ln(t,e){return!Array.isArray(t)||!e||e===ce?t:t.map(o=>{var y;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const a=i.filter(h=>{var u;return(u=h==null?void 0:h.byLlm)==null?void 0:u[e]}),r=a[a.length-1]||null,c=a.length>=2?a[a.length-2]:null;if(!r)return o;const l=r.byLlm[e],p=(y=c==null?void 0:c.byLlm)==null?void 0:y[e];return{...o,score:l.score??o.score,prev:(p==null?void 0:p.score)??null,vsComp:l.comp??o.vsComp,allScores:l.allScores??o.allScores,monthlyScore:l.score??o.monthlyScore??o.score,monthlyPrev:(p==null?void 0:p.score)??null,monthlyScores:i.map(h=>{var d;const u=(d=h==null?void 0:h.byLlm)==null?void 0:d[e];return u?{...h,score:u.score,comp:u.comp,allScores:u.allScores}:{...h,score:null,comp:null,allScores:null}})}})}function cn(t,e){return!Array.isArray(t)||!e||e===ce?t:t.map(o=>{var h;const i=(o==null?void 0:o.monthlyScores)||[];if(!i.length)return o;const a=i.filter(u=>{var d;return(d=u==null?void 0:u.byLlm)==null?void 0:d[e]}),r=a[a.length-1]||null,c=a.length>=2?a[a.length-2]:null;if(!r)return o;const l=r.byLlm[e],p=(h=c==null?void 0:c.byLlm)==null?void 0:h[e],y=l.compScore??o.compScore;return{...o,score:l.score??o.score,prev:(p==null?void 0:p.score)??null,compScore:y,compName:l.compName??o.compName,allScores:l.allScores??o.allScores,gap:+((l.score??o.score)-y||0).toFixed(2),monthlyScores:i.map(u=>{var m;const d=(m=u==null?void 0:u.byLlm)==null?void 0:m[e];return d?{...u,score:d.score,compScore:d.compScore,compName:d.compName,allScores:d.allScores}:{...u,score:null,compScore:null,compName:null,allScores:null}})}})}function Jn(t,e){if(!Array.isArray(t)||!e||e===ce)return(t||[]).filter(a=>!a.llmModel||a.llmModel===ce||a.llmModel==="TOTAL"||a.llmModel==="All");const o={};t.forEach(a=>{const r=`${a.date}|${a.country}|${a.division}`;o[r]||(o[r]={}),o[r][a.llmModel]=a});const i=[];return Object.values(o).forEach(a=>{const r=a[e]||a[ce]||a.TOTAL||a.All;r&&i.push(r)}),i}function dn(t,e,o){if(!o||o===ce||!Array.isArray(e)||!e.length)return t;const i=e.filter(c=>(c.country==="TOTAL"||c.country==="TTL")&&(c.division==="TOTAL"||c.division==="TTL"||c.division==="")&&c.llmModel===o);if(!i.length)return t;i.sort((c,l)=>String(c.date).localeCompare(String(l.date)));const a=i[i.length-1],r=i.length>=2?i[i.length-2]:null;return{...t,score:a.lg??t.score,prev:(r==null?void 0:r.lg)??t.prev,vsComp:a.comp??t.vsComp}}function Yn(t){const e=String(t??"").trim().toUpperCase();return!e||e==="TTL"||e==="TOTAL"}function pn(t){const e=String(t??"").trim();return!e||/^(total|all|ttl)$/i.test(e)}function un(t){const e=new Map;(t||[]).forEach(i=>{if(!i||!i.domain)return;const a=Number(i.citations)||0;if(!(a>0))return;e.has(i.domain)||e.set(i.domain,{cnty:i.cnty,domain:i.domain,ttlSum:0,ttlTop:0,ttlType:"",prdSum:0,prdTop:0,prdType:""});const r=e.get(i.domain);Yn(i.prd)?(r.ttlSum+=a,a>r.ttlTop&&(r.ttlTop=a,r.ttlType=i.type||"")):(r.prdSum+=a,a>r.prdTop&&(r.prdTop=a,r.prdType=i.type||""))});const o=[];return e.forEach(i=>{const a=i.ttlSum>0,r=a?i.ttlSum:i.prdSum;r>0&&o.push({cnty:i.cnty,domain:i.domain,type:(a?i.ttlType:i.prdType)||"",citations:r})}),o.sort((i,a)=>a.citations-i.citations||String(i.domain).localeCompare(String(a.domain))),o.forEach((i,a)=>{i.rank=a+1}),o}const tt="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",Xn=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function je(t){const e=Xn.indexOf(t);return e>=0?e:999}function Rt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ao(t){if(!t||!String(t).trim())return"";const e=c=>Rt(c).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),o=String(t).split(/\n/),i=[];let a=[];const r=()=>{a.length&&(i.push(`<p style="margin:0 0 10px;font-size:13px;line-height:1.75;font-family:${tt};color:#222;">${a.map(e).join("<br/>")}</p>`),a=[])};for(const c of o){const l=c.trim();if(!l){r();continue}let p;(p=l.match(/^(\d+)\.(\d+)\.?\s+(.+)$/))?(r(),i.push(`<h3 style="font-size:14px;font-weight:700;margin:14px 0 6px;font-family:${tt};color:#111;">${Rt(p[1])}.${Rt(p[2])} ${e(p[3])}</h3>`)):(p=l.match(/^(\d+)\.\s+(.+)$/))?(r(),i.push(`<h2 style="font-size:16px;font-weight:700;margin:22px 0 10px;border-top:1px solid #999;padding-top:12px;font-family:${tt};color:#000;">${Rt(p[1])}. ${e(p[2])}</h2>`)):a.push(l)}return r(),i.join("")}const Lo=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function ao(t){return Lo.filter(e=>t.includes(e)).concat(t.filter(e=>!Lo.includes(e)))}const Zn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function so(t){return Zn[String(t||"").trim().toUpperCase()]||t}function le(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Ge(t,e){if(t==null||e==null||e===0)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Me(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ye(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Qn(t){if(!t)return null;const e=t.toLowerCase();return e.includes("youtube")?{bg:"#FFE4E6",color:"#9F1239"}:e.includes("reddit")?{bg:"#FFEDD5",color:"#9A3412"}:null}function tr(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — BU Totals (Sheet Values)",bu:"BU",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"본부별 종합 (시트 합계 직접 사용)",bu:"본부",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},a=["MS","HS","ES"],c=a.filter(l=>t[l]).concat(Object.keys(t).filter(l=>!a.includes(l))).map(l=>{const p=t[l],y=(e||{})[l],h=p.comp>0?Math.round(p.lg/p.comp*100):100,u=ye(p.lg,p.comp)||"#FFFFFF",d=y&&y.lg!=null?Ge(p.lg,y.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};font-weight:700;text-align:center;background:#F5F5F5;">${Rt(l)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${u};">${le(p.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;background:${u};">${le(p.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${u};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;">${d}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.bu}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function er(t,e,o){if(!t||!Object.keys(t).length)return"";const i=o==="en"?{title:"Monthly Visibility — Country Totals (Sheet Values)",country:"Country",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"국가별 종합 (시트 합계 직접 사용)",country:"국가",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},r=ao(Object.keys(t)).map(c=>{const l=t[c],p=(e||{})[c],y=l.comp>0?Math.round(l.lg/l.comp*100):100,h=ye(l.lg,l.comp)||"#FFFFFF",u=p&&p.lg!=null?Ge(l.lg,p.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};font-weight:700;text-align:center;background:#F5F5F5;">${Rt(so(c))}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${h};">${le(l.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;background:${h};">${le(l.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${h};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;">${u}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.country}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.mom}</th>
    </tr></thead>
    <tbody>${r}</tbody>
  </table>`}function or(t,e,o,i){const a=o==="en"?{product:"Product",metric:"Metric",title:"Monthly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"월간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},r={};(e||[]).forEach(b=>{b.country&&b.product&&(r[`${b.country}|${b.product}`]=b.score)});const c={},l=new Set,p=new Set;(t||[]).forEach(b=>{!b.country||b.country==="TTL"||b.country==="TOTAL"||!b.product||(l.add(b.country),p.add(b.product),c[b.product]||(c[b.product]={}),c[b.product][b.country]=b)});const y=ao(Array.from(l)),h=Array.from(p).sort((b,v)=>je(b)-je(v));if(!h.length||!y.length)return`<p style="font-size:11px;color:#666;font-family:${tt};">데이터가 없습니다.</p>`;const u={};(i||[]).forEach(b=>{[b.kr,b.category,b.id,b.en].filter(Boolean).forEach(w=>{u[w]=b})});const m='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+y.map(b=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Rt(so(b))}</th>`).join(""),k=[];return h.forEach((b,v)=>{const w=v%2===0?"#FFFFFF":"#FAFAFA",x=u[b],P=(x?ye(x.score,x.vsComp):null)||w,O=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;font-weight:700;background:${P};">${x?le(x.score):"—"}</td>`,W=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;font-weight:700;background:${P};">${x?Me(x.score,x.vsComp):"—"}</td>`,L=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;background:${P};color:#1A1A1A;font-weight:600;">${x!=null&&x.compName?Rt(x.compName):"—"}</td>`,N=y.map(H=>{var _;const F=(_=c[b])==null?void 0:_[H],A=(F?ye(F.score,F.compScore):null)||w;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;font-weight:700;background:${A};">${F?le(F.score):"—"}</td>`}).join(""),V=y.map(H=>{var _;const F=(_=c[b])==null?void 0:_[H],A=(F?ye(F.score,F.compScore):null)||w;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;font-weight:700;background:${A};">${F?Me(F.score,F.compScore):"—"}</td>`}).join(""),z=y.map(H=>{var _;const F=(_=c[b])==null?void 0:_[H],A=(F?ye(F.score,F.compScore):null)||w;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;background:${A};color:#1A1A1A;font-weight:600;">${F!=null&&F.compName?Rt(F.compName):"—"}</td>`}).join("");k.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${tt};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Rt(b)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${tt};font-weight:600;background:#F5F5F5;white-space:nowrap;">${a.lg} (%)</td>
        ${O}${N}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${tt};background:#F5F5F5;white-space:nowrap;">${a.ratio}</td>
        ${W}${V}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${tt};background:#F5F5F5;white-space:nowrap;">${o==="en"?"Top Comp":"경쟁사"}</td>
        ${L}${z}
      </tr>`)}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};table-layout:auto;">
    <thead>
      <tr>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.product}</th>
        <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;background:#E8E8E8;white-space:nowrap;">${a.metric}</th>
        ${m}
      </tr>
    </thead>
    <tbody>
      ${k.join("")}
    </tbody>
  </table>
  </div>`}function nr(t,e,o){const i=o==="en"?{title:"Monthly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"월간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",mom:"MoM(%p)"},a={};(e||[]).forEach(p=>{p.id&&(a[p.id]=p.score)});const r=["MS","HS","ES"],c={};(t||[]).forEach(p=>{const y=p.bu||"OTHER";c[y]||(c[y]=[]),c[y].push(p)});const l=[];return r.forEach(p=>{const y=(c[p]||[]).slice().sort((h,u)=>je(h.kr||h.category||h.id)-je(u.kr||u.category||u.id));y.forEach((h,u)=>{const d=h.prev!=null&&h.prev>0?h.prev:a[h.id],m=Ge(h.score,d),k=ye(h.score,h.vsComp)||"#FFFFFF";l.push(`<tr>
        ${u===0?`<td rowspan="${y.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${p}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;">${Rt(h.kr||h.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${k};">${le(h.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;background:${k};">${le(h.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;background:${k};">${Rt(h.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${k};">${Me(h.score,h.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;">${m}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
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
      ${l.join("")}
    </tbody>
  </table>`}function rr(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},i=t.reduce((r,c)=>r+(c.score||0),0),a=t.map((r,c)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:center;">${c+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};">${Rt(r.source||r.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;font-weight:700;">${(r.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;">${i>0?(r.score/i*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${o.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${o.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${o.source}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:140px;">${o.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:100px;">${o.ratio}</th>
    </tr></thead>
    <tbody>${a}</tbody>
  </table>`}function ir(t,e){const o=un((t||[]).filter(l=>(l.cnty==="TTL"||l.cnty==="TOTAL"||!l.cnty)&&pn(l.llm)));if(!o.length)return"";const i=o.slice(0,20),a=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},r=o.reduce((l,p)=>l+(p.citations||0),0),c=i.map((l,p)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:center;">${p+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};">${Rt(l.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};">${Rt(l.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;font-weight:700;">${(l.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;">${r>0?(l.citations/r*100).toFixed(1)+"%":"—"}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:50px;">${a.rank}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${a.domain}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:120px;">${a.score}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${e==="en"?"Share":"비중"}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function ar(t,e){const o={};(t||[]).forEach(l=>{!l.cnty||l.cnty==="TTL"||l.cnty==="TOTAL"||pn(l.llm)&&(o[l.cnty]||(o[l.cnty]=[]),o[l.cnty].push(l))}),Object.keys(o).forEach(l=>{o[l]=un(o[l])});const i=ao(Object.keys(o));if(!i.length)return"";const a=e==="en"?{title:"Citation by Country (Top 5 Domains)",country:"Country",total:"Total"}:{title:"국가별 Citation Top 5 도메인",country:"국가",total:"전체"},r=5,c=i.map(l=>{const p=o[l],y=p.reduce((d,m)=>d+(m.citations||0),0),h=p.slice(0,r),u=[];for(let d=0;d<r;d++){const m=h[d],k=m?Qn(m.domain):null,b=k?`background:${k.bg};`:"",v=k?`color:${k.color};font-weight:700;`:"";u.push(`<td style="border:1px solid #999;padding:5px 8px;font-size:10px;font-family:${tt};${b}${v}">${m?`${Rt(m.domain||"")} <span style="color:#666;font-weight:400;">(${(m.citations||0).toLocaleString("en-US")})</span>`:"—"}</td>`)}return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};font-weight:700;background:#F5F5F5;text-align:center;">${Rt(so(l))}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;font-weight:700;">${y.toLocaleString("en-US")}</td>
      ${u.join("")}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${a.country}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${a.total}</th>
      ${Array.from({length:r},(l,p)=>`<th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">#${p+1}</th>`).join("")}
    </tr></thead>
    <tbody>${c}</tbody>
  </table>
  </div>`}function sr(t,e){if(!t||!t.lg)return"";const o=t.lg,i=t.samsung||{},a=Object.keys(o).filter(l=>o[l]!=null);if(!a.length)return"";const r=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},c=a.map(l=>{const p=o[l]||0,y=i[l]||0,h=p-y,u=h>0?"LG":h<0?"SS":"=",d=h>0?"#86EFAC":h<0?"#FCA5A5":"#FFFFFF",m=h>0?"#14532D":h<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${d};color:${m};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};font-weight:${l==="TTL"?"900":"600"};">${Rt(l)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;font-weight:700;">${p.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;">${y.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;font-weight:700;">${h>0?"+":""}${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:center;font-weight:900;">${u}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${r.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${r.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${r.winner}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function lr(t,e,o){var l;if(!t||!t.length)return"";const i=((l=t[0])==null?void 0:l.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${i} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${i} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function r(p){return p>=80?"#D1FAE5":p>=50?"#FEF3C7":"#FEE2E2"}const c=t.map(p=>{const y=(p.monthRate||0).toFixed(0),h=(p.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${tt};background:#F5F5F5;">${Rt(p.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${r(p.monthRate)};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(p.monthActual||0).toLocaleString()} / ${(p.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${r(p.progressRate)};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(p.cumActual||0).toLocaleString()} / ${(p.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${tt};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${tt};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i} ${a.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function cr(t,e){var c;if(!t||!t.length)return"";const o=((c=t[0])==null?void 0:c.targetMonth)||"3월",i=e==="en"?{title:`${o} Achievement by Organization`,org:"Organization",tasks:"Tasks",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`${o} 조직별 달성 현황`,org:"조직",tasks:"과제수",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function a(l){return l>=80?"#D1FAE5":l>=50?"#FEF3C7":"#FEE2E2"}const r=t.map(l=>`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${tt};background:#F5F5F5;">${Rt(l.stakeholder)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${l.taskCount}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(l.monthRate)};">${(l.monthRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(l.monthActual||0).toLocaleString()} / ${(l.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(l.progressRate)};">${(l.progressRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(l.cumActual||0).toLocaleString()} / ${(l.annualGoal||0).toLocaleString()}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:16px 0 10px;font-family:${tt};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.org}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.tasks}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${i.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${i.count}</th>
    </tr></thead>
    <tbody>${r}</tbody>
  </table>`}function lo(t,e,o,i,a={},r="ko",c=[],l=[],p={}){const{productsCntyPrev:y=[],productsPrev:h=[],categoryStats:u=null,stakeholderStats:d=null,cntyKeys:m=null,llmModel:k,monthlyVis:b}=p;if(k&&k!=="Total"&&(o=ln(o,k),c=cn(c,k),e=dn(e,b,k)),Array.isArray(m)&&m.length>0){const x=new Set(m.map(D=>String(D).toUpperCase()));c=(c||[]).filter(D=>D&&x.has(String(D.country).toUpperCase())),l=(l||[]).filter(D=>D&&x.has(String(D.country).toUpperCase()))}const v=r==="en"?"GEO Monthly Report":"GEO 월간 보고서",w=t.period||"";return`<!DOCTYPE html><html lang="${r}"><head>
<meta charset="UTF-8">
<title>${Rt(v)} — ${Rt(w)}</title>
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
body, table, td, th, h1, h2, p, span, div { font-family: ${tt} !important; }
</style>
</head>
<body style="margin:0;padding:24px;font-family:${tt};color:#000;background:#FFFFFF;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="border-bottom:2px solid #000;padding-bottom:12px;margin-bottom:18px;">
      <h1 style="font-size:22px;font-weight:700;margin:0;font-family:${tt};">${Rt(v)}</h1>
      <p style="font-size:13px;color:#444;margin:4px 0 0;font-family:${tt};">${Rt(w)} · ${Rt(t.team||"")}</p>
    </div>

    ${t.showMonthlyReportBody!==!1&&t.monthlyReportBody?`
    <section style="margin-bottom:28px;">
      ${Ao(t.monthlyReportBody)}
    </section>`:""}

    ${e&&e.score!=null?`
    <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-bottom:8px;font-family:${tt};">
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;width:30%;">${r==="en"?"Total LG Visibility":"전체 LG Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${le(e.score)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${r==="en"?"Competitor (Samsung) Visibility":"경쟁사(Samsung) Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${le(e.vsComp)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${r==="en"?"vs Competitor":"경쟁사 대비"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${Me(e.score,e.vsComp)}</td>
      </tr>
      ${e.prev!=null&&e.prev>0?`<tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">MoM(%p)</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${Ge(e.score,e.prev)}</td>
      </tr>`:""}
    </table>`:""}

    ${t.showMonthlyDeltaAnalysis!==!1&&t.monthlyDeltaAnalysis?`
    <section style="margin-bottom:28px;">
      <h1 style="font-size:18px;font-weight:700;margin:0 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${tt};color:#000;">${r==="en"?"Change Driver Analysis":"증감 요인 분석"}</h1>
      ${Ao(t.monthlyDeltaAnalysis)}
    </section>`:""}

    ${tr(e==null?void 0:e.buTotals,e==null?void 0:e.buTotalsPrev,r)}
    ${er(e==null?void 0:e.countryTotals,e==null?void 0:e.countryTotalsPrev,r)}
    ${nr(o,h,r)}
    ${or(c,y,r,o)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${tt};color:#000;">${r==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${rr(i,r)}
    ${ir(l,r)}
    ${ar(l,r)}
    ${sr(a,r)}

    ${lr(u,r)}
    ${cr(d,r)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${tt};">
      <p style="margin:0;">${r==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const Bt="#CF0652",E="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",dr=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Be={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",showTotalInsight:!0,showInsightV2:!1,showInsightV3:!0,productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,showHighlight:!0,highlightInsight:"",showHighlightInsight:!1,bumpInsight:"",showBumpInsight:!1,hlChapterTitle:"",hlWeeklyTitle:"",hlModelTitle:"",hlBumpTitle:"",kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,showTodoV2:!1,monthlyReportBody:dr,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,showDotcomChatGpt:!0,showTouchPointsBump:!0,showTouchPointsBumpChatGpt:!0,showDomainBumpModels:!0,bumpHighlight:[],showLlmShare:!0,llmShareTopN:10,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},pr={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},ur=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],hr={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},fr=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],mr=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],gr=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],hn=3;function yr(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==hn?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function br(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:hn}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const Ue={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function he(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function xr(t){try{const e=await fetch(he(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function vr(t,e){try{const o=await fetch(`${he(t).snapshots}/${e}`);if(!o.ok)return null;const i=await o.json();return i.ok?i.snapshot:null}catch(o){return console.warn("[API] fetchSnapshotData failed:",o.message),null}}async function wr(t,e,o){try{const i=await fetch(he(t).snapshots,{method:"POST",headers:Ue,body:JSON.stringify({name:e,data:o})});if(!i.ok)return console.warn("[API] postSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] postSnapshot failed:",i.message),null}}async function Cr(t,e,o){try{const i=await fetch(`${he(t).snapshots}/${e}`,{method:"PUT",headers:Ue,body:JSON.stringify({data:o})});if(!i.ok)return console.warn("[API] updateSnapshot:",i.status),null;const a=await i.json();return a.ok?a.snapshots:null}catch(i){return console.warn("[API] updateSnapshot failed:",i.message),null}}async function kr(t,e){try{const o=await fetch(`${he(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const i=await o.json();return i.ok?i.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Nt(t,e,o="ko",i="",a=""){try{const r=await fetch("/api/generate-insight",{method:"POST",headers:Ue,body:JSON.stringify({type:t,data:e,lang:o,rules:i,extraPrompt:a})});if(!r.ok){const l=await r.json().catch(()=>({}));throw new Error(l.error||`HTTP ${r.status}`)}const c=await r.json();if(!c.ok)throw new Error(c.error||"AI 생성 실패");return c.insight}catch(r){throw console.error("[API] generateAIInsight failed:",r.message),r}}async function Pe(t){try{const e=await fetch(he(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function $o(t){try{const e=await fetch(he(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function Sr(t,e,o={}){const{includeReadability:i=!1}=o,[a,r]=await Promise.all([Pe("dashboard").catch(()=>null),Pe("visibility").catch(()=>null)]),c={...a||{},...r||{}};if(a&&Object.keys(a).forEach(F=>{c[F]==null&&a[F]!=null&&(c[F]=a[F])}),r!=null&&r.meta&&(a!=null&&a.meta)&&(c.meta={...a.meta||{},...r.meta||{}}),!c||!Object.keys(c).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const l=c.meta||{},p=c.total||{},h=(c.productsPartial||c.products||[]).map(F=>{var _;const j=F.weekly||((_=c.weeklyMap)==null?void 0:_[F.id])||[],A=F.vsComp>0?F.score/F.vsComp*100:100;return{...F,weekly:j,monthly:F.monthly||[],compRatio:F.compRatio||Math.round(A),status:F.status||(A>=100?"lead":A>=80?"behind":"critical")}}),u=c.citations||[],d=c.dotcom||{},m=c.productsCnty||[],k=c.citationsCnty||[],b=c.weeklyLabels||null,v=c.weeklyAll||{},w=c.citationsByCnty||{},x=c.dotcomByCnty||{},D=e(h,m,u,k,"ko"),P=e(h,m,u,k,"en"),O={weeklyPR:c.weeklyPR||[],weeklyPRLabels:c.weeklyPRLabels||[],monthlyPR:c.monthlyPR||[],monthlyPRLabels:c.monthlyPRLabels||[],weeklyBrandPrompt:c.weeklyBrandPrompt||[],weeklyBrandPromptLabels:c.weeklyBrandPromptLabels||[],unlaunchedMap:c.unlaunchedMap||{},prTopicList:c.prTopicList||[],weeklyLabelsFull:c.weeklyLabelsFull||[]},W={monthlyVis:c.monthlyVis||[],includeReadability:i},L=t(l,p,D.products,D.citations,d,"ko",D.productsCnty,D.citationsCnty,b,v,w,x,W,O),N=t({...l,title:l.title||"GEO KPI Dashboard"},p,P.products,P.citations,d,"en",P.productsCnty,P.citationsCnty,b,v,w,x,W,O),V=`${l.period||""} ${l.title||"KPI Dashboard"}`.trim(),H=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:V,htmlKo:L,htmlEn:N})})).json();if(!H.ok)throw new Error(H.error||"게시 실패");return H}async function Bo(t,e){try{const o=await fetch(he(t).syncData,{method:"POST",headers:Ue,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Fr={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},Ke={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},Io={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function xe(t,e,o,i,a){return a!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:i}:{products:t.map(r=>({...r,kr:r.en||Ke[r.kr]||r.kr,compName:r.compNameEn||Io[r.compName]||r.compName})),productsCnty:e.map(r=>({...r,country:r.countryEn||Fr[r.country]||r.country,product:r.productEn||Ke[r.product]||r.product,compName:r.compNameEn||Io[r.compName]||r.compName})),citations:o.map(r=>({...r,category:r.categoryEn||Ke[r.category]||r.category})),citationsCnty:i.map(r=>({...r,cnty:r.cntyEn||r.cnty}))}}async function Tr(t,{from:e="ko",to:o="en"}={}){var i;try{const a=await fetch("/api/translate",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({texts:t,from:e,to:o})}),r=await a.json().catch(()=>({}));if(!a.ok||!r.ok)throw new Error(r.error||`번역 실패 (${a.status})`);if(!Array.isArray(r.translated)||r.translated.length!==t.length)throw new Error(`번역 결과 길이 불일치 (${(i=r.translated)==null?void 0:i.length} ≠ ${t.length})`);return r.translated}catch(a){return console.warn("[translate] 서버 프록시 실패 → 직접 호출 폴백:",a.message),Er(t,{from:e,to:o})}}async function Er(t,{from:e="ko",to:o="en"}={}){const a=[];for(let r=0;r<t.length;r+=5){const c=t.slice(r,r+5),l=await Promise.all(c.map(async p=>{if(!p||!p.trim())return p;const y=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(p)}`,h=await fetch(y);if(!h.ok)throw new Error(`번역 실패 (${h.status})`);return(await h.json())[0].map(d=>d[0]).join("")}));a.push(...l)}return a}const be=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],Ar=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function Lr(t){const e=Ar.indexOf(t);return e>=0?e:999}function Ie(t){return Lr(t)}function co(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function fn(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[co(o)]=o)}),e}function Ro(t,e){var p,y,h,u;if(!((p=t==null?void 0:t.quantitativeGoals)!=null&&p.rows))return(h=(y=t==null?void 0:t._dashboard)==null?void 0:y.categoryStats)!=null&&h.length?[...t._dashboard.categoryStats].sort((d,m)=>Ie(d.category)-Ie(m.category)):null;const o=t.quantitativeGoals.rows,i=fn((u=t.quantitativeResults)==null?void 0:u.rows);new Date().getMonth()+1;let a=e,r=be.indexOf(a);r<0&&(a="3월",r=0);const c=[...new Set(o.map(d=>d.taskCategory).filter(Boolean))],l=r>0?be[r-1]:null;return c.map(d=>{const m=o.filter(L=>L.taskCategory===d);let k=0,b=0,v=0,w=0,x=0,D=0;m.forEach(L=>{var F,j,A,_,K;const N=co(L),V=i[N]||{},z=typeof((F=L.monthly)==null?void 0:F[a])=="number"?L.monthly[a]:0,H=typeof((j=V.monthly)==null?void 0:j[a])=="number"?V.monthly[a]:0;if(b+=z,k+=H,l){const Y=typeof((A=L.monthly)==null?void 0:A[l])=="number"?L.monthly[l]:0,Z=typeof((_=V.monthly)==null?void 0:_[l])=="number"?V.monthly[l]:0;D+=Y,x+=Z}for(let Y=0;Y<=r;Y++){const Z=be[Y];typeof((K=V.monthly)==null?void 0:K[Z])=="number"&&(v+=V.monthly[Z])}be.forEach(Y=>{var Z;typeof((Z=L.monthly)==null?void 0:Z[Y])=="number"&&(w+=L.monthly[Y])})});const P=b>0?Math.round(k/b*1e3)/10:0,O=D>0?Math.round(x/D*1e3)/10:0,W=w>0?Math.round(v/w*1e3)/10:0;return{category:d,taskCount:m.length,targetMonth:a,monthRate:P,prevMonthRate:O,prevMonth:l,progressRate:W,monthActual:k,monthGoal:b,cumActual:v,annualGoal:w}}).sort((d,m)=>Ie(d.category)-Ie(m.category))}const $r=["MS","HS","ES","고가혁","브랜드","D2C","PR"];function jo(t){const e=$r.indexOf(t);return e>=0?e:999}function Mo(t,e){var l,p;if(!((l=t==null?void 0:t.quantitativeGoals)!=null&&l.rows))return null;const o=t.quantitativeGoals.rows,i=fn((p=t.quantitativeResults)==null?void 0:p.rows);new Date().getMonth()+1;let a=e,r=be.indexOf(a);return r<0&&(a="3월",r=0),[...new Set(o.map(y=>y.stakeholder).filter(Boolean))].map(y=>{const h=o.filter(w=>w.stakeholder===y);let u=0,d=0,m=0,k=0;h.forEach(w=>{var W,L,N;const x=co(w),D=i[x]||{},P=typeof((W=w.monthly)==null?void 0:W[a])=="number"?w.monthly[a]:0,O=typeof((L=D.monthly)==null?void 0:L[a])=="number"?D.monthly[a]:0;d+=P,u+=O;for(let V=0;V<=r;V++){const z=be[V];typeof((N=D.monthly)==null?void 0:N[z])=="number"&&(m+=D.monthly[z])}be.forEach(V=>{var z;typeof((z=w.monthly)==null?void 0:z[V])=="number"&&(k+=w.monthly[V])})});const b=d>0?Math.round(u/d*1e3)/10:0,v=k>0?Math.round(m/k*1e3)/10:0;return{stakeholder:y,taskCount:h.length,targetMonth:a,monthRate:b,monthActual:u,monthGoal:d,progressRate:v,cumActual:m,annualGoal:k}}).sort((y,h)=>jo(y.stakeholder)-jo(h.stakeholder))}function Br(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},i=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return i?`${o[i[1].toLowerCase()]}월`:null}async function mn(){const t=await to(()=>import("./xlsx-CaYOwpyI.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const Ir=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],eo={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},Rr={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Ee={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Fe={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},jr={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(Ir.map((t,e)=>[t,e]));const Re={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},gn=new Set(Object.values(Ee)),Po=[...new Set(Object.values(Re))].filter(t=>!gn.has(t));Po.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:Po,validCodes:[...gn]});function oo(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Yt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function Mr(t,e,o){console.log(`[${t}]`,e,"")}function Pr(t,e){return Array.isArray(t)?t.length===0?(oo(e,"invalid input: empty rows",{len:0}),!1):!0:(oo(e,"invalid input: not an array",{type:typeof t}),!1)}function po(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const i=o.map(a=>String(a??"").trim().toLowerCase());return e.every(a=>i.some(r=>a instanceof RegExp?a.test(r):r===String(a).toLowerCase()))})}function Dr(t,e="sync"){var a,r,c;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((a=t.products)==null?void 0:a.length)||((r=t.productsPartial)==null?void 0:r.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(c=t.weeklyLabels)!=null&&c.length&&t.weeklyLabels.every((p,y)=>p===`W${y+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const _t={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR_수정",weeklyPR:"Weekly PR_수정",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",unlaunched:"unlaunched",prTopicList:"PR Topic List"},Do=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],Oo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function Or(t,e,o,i,a={}){const r=await mn(),c=r.utils.book_new(),l=r.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);l["!cols"]=[{wch:24},{wch:50},{wch:40}],r.utils.book_append_sheet(c,l,"meta");const p=r.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);p["!cols"]=[{wch:14},{wch:10},{wch:44}],r.utils.book_append_sheet(c,p,"total");const y=r.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(b=>[b.id,b.bu,b.kr,b.score,b.prev,b.vsComp,b.compName])]);y["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],r.utils.book_append_sheet(c,y,"products");const h=r.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(b=>[b.id,b.kr,...b.weekly])]);h["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],r.utils.book_append_sheet(c,h,"weekly");const u=r.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...i.map(b=>[b.rank,b.source,b.category,b.score,b.delta,b.ratio??0])]);u["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],r.utils.book_append_sheet(c,u,"citations");const d=(a==null?void 0:a.lg)||{},m=(a==null?void 0:a.samsung)||{},k=r.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...Do.map(b=>`LG_${b}`),...Oo.map(b=>`Samsung_${b}`)],[...Do.map(b=>d[b]??0),...Oo.map(b=>m[b]??0)]]);k["!cols"]=Array(15).fill({wch:14}),r.utils.book_append_sheet(c,k,"dotcom"),r.writeFile(c,"GEO_Newsletter_템플릿.xlsx")}function ne(t){const e=String(t??"").trim(),o=e.includes("%"),i=e.replace(/%/g,"").replace(/,/g,"").trim(),a=parseFloat(i)||0;return o?+a.toFixed(2):Math.abs(a)<=1&&a!==0?+(a*100).toFixed(2):+a.toFixed(2)}function De(t){return t==null||String(t).trim()===""?null:ne(t)}function Vt(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function de(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const Nr={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function _r(t){const e=de(t);return Nr[e]||e}function ve(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let i=0,a=0;const r=e.match(/(\d{4})/);if(r)a=parseInt(r[1]);else{const l=e.match(/(\d{2})년/);if(l)a=2e3+parseInt(l[1]);else{const p=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);p&&(a=2e3+parseInt(p[1]))}}const c=e.match(/(\d{1,2})월/);if(c)i=parseInt(c[1]);else{const l=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(l)i=o[l[1].toLowerCase()];else{const p=e.match(/\d{4}[-\/](\d{1,2})/);p&&(i=parseInt(p[1]))}}return a?a*12+i:i}function zr(t){var Z;console.log(`[parseVisSummary] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((f,Q)=>console.log(`  row${Q}: [${(f||[]).slice(0,8).map(U=>JSON.stringify(String(U||"").trim())).join(", ")}]`));const e=["rank","totalBrands"],o=["score","prev","vsComp"],i={};let a=!1,r=-1;if(t.forEach((f,Q)=>{if(!f[0]||String(f[0]).startsWith("[")||String(f[0]).startsWith("※")||f[0]==="key")return;const U=String(f[0]).trim();(o.includes(U)||e.includes(U))&&(a||(r=Q),a=!0,e.includes(U)?i[U]=parseInt(f[1])||0:i[U]=ne(f[1]))}),a&&Object.keys(i).length>=2)return console.log(`[parseVisSummary] KV path 진입 (legacy) — trigger row${r}: r[0]='${(Z=t[r])==null?void 0:Z[0]}' / kvObj keys:`,Object.keys(i)),{total:i};console.log("[parseVisSummary] Table path 진입");let c=t.find(f=>f.some(Q=>String(Q||"").trim().toUpperCase()==="LG"));c||(c=t.find(f=>f.some(Q=>/^date$|^region$|^countries$|^country$|^divisions?$/i.test(String(Q||"").trim()))));const l=c?c.findIndex(f=>String(f||"").trim().toUpperCase()==="LG"):-1,p=c?c.findIndex(f=>{const Q=String(f||"").trim().toUpperCase();return Q==="SAMSUNG"||Q==="SAMSUMG"}):-1,y=c?c.findIndex(f=>/date/i.test(String(f||"").trim())):0,h=c?c.findIndex(f=>/countries|country/i.test(String(f||"").trim())):2,u=c?c.findIndex(f=>/divisions?/i.test(String(f||"").trim())):3,d=c?c.findIndex(f=>/^(llm\s*model|llm|model)$/i.test(String(f||"").trim())):-1,m=Math.max(y,h,u,d),k=l>=0?l:m>=0?m+1:4,b=p>=0?p:k+1;console.log(`[parseVisSummary] columns: date=${y} cnty=${h} div=${u} llm=${d} lg=${k}(raw=${l}) ss=${b}(raw=${p})`);const v=[];t.filter(f=>{const Q=String(f[y>=0?y:0]||"").trim();return Q&&!Q.startsWith("[")&&!Q.startsWith("※")&&!/^date$/i.test(Q)&&!/^key$/i.test(Q)}).forEach(f=>{const Q=String(f[y>=0?y:0]||"").trim(),U=de(f[h>=0?h:2]),mt=String(f[u>=0?u:3]||"").trim().toUpperCase(),C=(d>=0?String(f[d]||"").trim():"")||"Total",S=ne(f[k]),B=ne(f[b]);Q&&S>0&&v.push({date:Q,country:U,division:mt,llmModel:C,lg:S,comp:B})});const x=v.filter(f=>(f.country==="TOTAL"||f.country==="TTL")&&(f.division==="TOTAL"||f.division==="TTL"||f.division==="")&&(f.llmModel==="Total"||f.llmModel==="TOTAL"||f.llmModel==="All"));x.sort((f,Q)=>ve(f.date)-ve(Q.date));const D=x[x.length-1],P=x.length>=2?x[x.length-2]:null;if(!D){const f=t.find(T=>T.some(C=>String(C||"").trim().toUpperCase()==="TOTAL"));if(!f)return Yt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(T=>T==null?void 0:T.slice(0,6))});const Q=ne(f[k]),U=ne(f[b]),mt={total:{score:Q,prev:Q,vsComp:U,rank:Q>=U?1:2,totalBrands:12}};return v.length&&(mt.monthlyVis=v),mt}const O=D.lg,W=D.comp,L=P?P.lg:O,N=D.date,V=P?P.date:null;function z(f){const Q={};return v.filter(U=>U.date===f&&(U.country==="TOTAL"||U.country==="TTL")&&U.division&&U.division!=="TOTAL"&&U.division!=="TTL"&&U.division!==""&&(U.llmModel==="Total"||U.llmModel==="TOTAL"||U.llmModel==="All")).forEach(U=>{Q[U.division]={lg:U.lg,comp:U.comp}}),Q}const H=z(N),F=V?z(V):{};function j(f){const Q={};return v.filter(U=>U.date===f&&U.country&&U.country!=="TOTAL"&&U.country!=="TTL"&&(U.division==="TOTAL"||U.division==="TTL"||U.division==="")&&(U.llmModel==="Total"||U.llmModel==="TOTAL"||U.llmModel==="All")).forEach(U=>{Q[U.country]={lg:U.lg,comp:U.comp}}),Q}const A=j(N),_=V?j(V):{},K={total:{score:O,prev:L,vsComp:W,rank:O>=W?1:2,totalBrands:12},...Object.keys(H).length?{buTotals:H}:{},...Object.keys(F).length?{buTotalsPrev:F}:{},...Object.keys(A).length?{countryTotals:A}:{},...Object.keys(_).length?{countryTotalsPrev:_}:{}};N&&(K.derivedPeriod=N),v.length&&(K.monthlyVis=v);const Y={};return v.forEach(f=>{Y[f.date]=(Y[f.date]||0)+1}),console.log(`[parseVisSummary] monthlyVis ${v.length}행 / unique dates:`,Y,`/ TOTAL+TOTAL+Total 행: ${x.length}`),console.log("[parseVisSummary] 반환 keys:",Object.keys(K)),K}function Gr(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((a,r)=>console.log(`  row${r}: [${a.slice(0,8).map(c=>JSON.stringify(String(c||"").trim())).join(", ")}]`));const e={},o=[];t.forEach((a,r)=>{if(r===0)return;const c=String((a==null?void 0:a[1])||"").trim(),l=String((a==null?void 0:a[2])||"").trim().toUpperCase();c&&(e[c]=(e[c]||0)+1,(l==="TTL"||l==="TOTAL")&&o.push({date:c,cat:String((a==null?void 0:a[3])||"").trim(),llm:String((a==null?void 0:a[4])||"").trim()||"(empty)",div:String((a==null?void 0:a[0])||"").trim()}))}),console.log("[parseProductCnty] 모든 unique dates (시트 raw):",e),console.log("[parseProductCnty] TTL country 행들 (date / category / llmModel):"),o.forEach(a=>console.log(`  ${a.div} | ${a.date} | ${a.cat} | LLM='${a.llm}'`));const i=t.findIndex(a=>{const r=String(a[0]||"").trim().toLowerCase();return r==="div"||r==="division"||r==="divisions"});if(i<0){const a=t.findIndex(r=>r.some((c,l)=>l>=1&&String(c||"").trim().toUpperCase()==="LG"));return a<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${a}: [${t[a].slice(0,8).map(r=>JSON.stringify(String(r||"").trim())).join(", ")}]`),No(t,a))}return console.log(`[parseProductCnty] header at row${i}: [${t[i].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),No(t,i)}function No(t,e){const o=t[e],i=o.findIndex((u,d)=>d>=3&&String(u||"").trim().toUpperCase()==="LG");if(i<0)return console.warn("[parseProductCnty] LG column not found"),{};const a=o.findIndex(u=>/^(llm\s*model|llm|model)$/i.test(String(u||"").trim())),r=[];for(let u=i+1;u<o.length;u++){const d=String(o[u]||"").trim();d&&d.toUpperCase()!=="LG"&&r.push({name:d,col:u})}const c=t.slice(e+1).filter(u=>{const d=String(u[0]||"").trim();return d&&!d.startsWith("[")&&!d.startsWith("※")}),l={},p={};c.forEach(u=>{const d=String(u[0]||"").trim(),m=String(u[1]||"").trim(),k=String(u[2]||"").trim(),b=de(u[2])||k,v=String(u[3]||"").trim(),x=(a>=0?String(u[a]||"").trim():"")||"Total",D=ne(u[i]),P=r.map(N=>({name:N.name,score:ne(u[N.col])})).filter(N=>N.score>0),O=[...P].sort((N,V)=>V.score-N.score)[0]||{name:"",score:0},W=+(D-O.score).toFixed(2),L={LG:D};if(P.forEach(N=>{L[N.name]=N.score}),b==="TTL"||b==="TOTAL"){const N=Fe[v]||v.toLowerCase(),V=jr[v]||v;l[N]||(l[N]=[]),l[N].push({id:N,bu:d,kr:V,category:v,date:m,llmModel:x,score:D,vsComp:O.score,compName:O.name,allScores:L})}else{const N=`${v}|${b}`;p[N]||(p[N]=[]),p[N].push({product:v,country:b,date:m,llmModel:x,score:D,compName:O.name,compScore:O.score,gap:W,allScores:L})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(l).join(", ")||"없음"} / 국가별: ${Object.keys(p).length}건`);const y=[];for(const[u,d]of Object.entries(l)){const m=d.filter(x=>x.llmModel==="Total"||x.llmModel==="TOTAL"||x.llmModel==="All"),k=m.length?m:d;k.sort((x,D)=>ve(x.date)-ve(D.date));const b=k[k.length-1],v=k.length>=2?k[k.length-2].score:null;console.log(`[parseProductCnty] ${u}: dates=[${k.map(x=>x.date).join(",")}] score=${b.score} prev=${v} vsComp=${b.vsComp}`);const w=k.map(x=>{const D=d.filter(O=>O.date===x.date),P={};return D.forEach(O=>{P[O.llmModel]={score:O.score,comp:O.vsComp,allScores:O.allScores}}),{date:x.date,score:x.score,comp:x.vsComp,allScores:x.allScores,byLlm:P}});y.push({...b,prev:v,monthlyScores:w})}const h=[];for(const u of Object.values(p)){const d=u.filter(w=>w.llmModel==="Total"||w.llmModel==="TOTAL"||w.llmModel==="All"),m=d.length?d:u;m.sort((w,x)=>ve(w.date)-ve(x.date));const k=m[m.length-1],b=m.length>=2?m[m.length-2].score:null,v=m.map(w=>{const x=u.filter(P=>P.date===w.date),D={};return x.forEach(P=>{D[P.llmModel]={score:P.score,compScore:P.compScore,compName:P.compName,allScores:P.allScores}}),{date:w.date,score:w.score,compScore:w.compScore,compName:w.compName,allScores:w.allScores,byLlm:D}});h.push({...k,prev:b,monthlyScores:v})}return{...y.length?{productsPartial:y}:{},...h.length?{productsCnty:h}:{}}}function yn(t,e=0,o){const i=o??t.length;for(let a=e;a<i;a++){const r=[];for(const c of t[a]||[]){const l=String(c||"").split(/\n/)[0].trim();/^W\d+/i.test(l)&&r.push(l.toUpperCase())}if(r.length>=2)return r}return null}const qe={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function _o(t,e){var b;const o=e?qe[e]||{}:{...qe.MS,...qe.ES};if(!Object.keys(o).length)return Yt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const i=t.findIndex(v=>v.some(w=>String(w||"").trim()in o));if(i<0)return Yt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const a=t[i],r=t.findIndex((v,w)=>w>i&&v.some(x=>String(x||"").trim()==="TTL")),c=r>0?r+1:Math.min(i+20,t.length);let l=-1,p=-1;for(let v=i+1;v<c;v++){const w=t[v];if(!w.some(P=>String(P||"").trim().toUpperCase()==="LG"))continue;if(p<0&&(p=v),w.some(P=>{const O=String(P||"").trim().toLowerCase().replace(/[\s_-]/g,"");return O==="nonbrand"||O==="nb"})){l=v;break}}const y=l>=0?l:p>=0?p:r;if(y<0)return Yt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:i,ttlRowIdx:r});const h=t[y],u=l>=0?"LG-NB":p>=0?"LG":"TTL",d={},m=Object.keys(o).map(v=>a.findIndex(w=>String(w||"").trim()===v)).filter(v=>v>=0).sort((v,w)=>v-w);for(const[v,w]of Object.entries(o)){const x=a.findIndex(O=>String(O||"").trim()===v);if(x<0)continue;const D=m.find(O=>O>x)||x+20,P=[];for(let O=x+1;O<D&&O<h.length;O++){const W=ne(h[O]);W>0&&P.push(W)}P.length&&(d[w]=P)}if(!Object.keys(d).length)return Yt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:i,dataRowIdx:y,dataRowLabel:u});const k=yn(t,i,c)||((b=Object.values(d)[0])==null?void 0:b.map((v,w)=>`W${w+1}`))||[];return{weeklyMap:d,weeklyLabels:k}}function Ur(t,e,o){for(const i of Object.values(t))for(const a of Object.values(i))for(const[r,c]of Object.entries(a))a[r]=c.slice(o);for(const[i,a]of Object.entries(e))e[i]=a.slice(o)}function Hr(t){const{data:e,rows:o,headerIdx:i,brandIdx:a,catIdx:r,countryIdx:c,isNonBrand:l,isTotal:p,weeklyMap:y,weeklyAll:h}=t;let u=t.wCols,d=t.weeklyLabels;if(!u.length){const m=e.find(k=>String(k[a]||"").trim().toUpperCase()==="LG"&&l(k));if(m){const k=[];for(let b=a+1;b<m.length;b++)if(String(m[b]||"").trim())k.push(b);else if(k.length)break;u=k,d=yn(o,0,i+1)||u.map((b,v)=>`W${v+1}`)}}return e.forEach(m=>{if(!l(m))return;const k=String(m[a]||"").trim();if(!k)return;const b=String(m[r>=0?r:0]||"").trim();if(!b)return;const v=Fe[b]||b.toLowerCase(),w=c>=0?de(m[c]):"TOTAL",x=w==="TOTAL"||w==="TTL"||!w?"Total":w;h[v]||(h[v]={}),h[v][x]||(h[v][x]={}),h[v][x][k]=u.map(D=>De(m[D]))}),e.forEach(m=>{if(String(m[a]||"").trim().toUpperCase()!=="LG"||!l(m)||!p(m))return;const b=String(m[r>=0?r:0]||"").trim();b&&(y[Fe[b]||b.toLowerCase()]=u.map(v=>De(m[v])))}),{wCols:u,weeklyLabels:d}}function Vr(t){const{data:e,header:o,lgIdx:i,catIdx:a,isTotal:r,weeklyMap:c}=t,l=o.findIndex(h=>{const u=String(h||"").trim().toLowerCase();return u==="date"||u==="week"||u==="period"}),p={},y=[];return e.forEach(h=>{if(!r(h))return;const u=String(h[a>=0?a:3]||"").trim();if(u){if(l>=0){const d=String(h[l]||"").trim();d&&!y.includes(d)&&y.push(d)}p[u]=p[u]||[],p[u].push(De(h[i]))}}),Object.entries(p).forEach(([h,u])=>{c[Fe[h]||h.toLowerCase()]=u}),y.length?y:null}function Wr(t){const{data:e,wCols:o,catIdx:i,isTotal:a,weeklyMap:r}=t;e.forEach(c=>{if(!a(c))return;const l=String(c[i>=0?i:0]||"").trim();l&&(r[Fe[l]||l.toLowerCase()]=o.map(p=>De(c[p])))})}function Je(t,e){const o={};let i=[],a=-1;for(let L=0;L<Math.min(t.length,10);L++){const N=t[L];if(!N)continue;let V=0;for(let z=0;z<N.length;z++)/^w\d+$/i.test(String(N[z]||"").trim())&&V++;if(V>=2){a=L;break}}let r=t.findIndex(L=>{const N=L.slice(0,5).map(V=>String(V||"").trim().toLowerCase());return N.includes("category")||N.includes("product")});if(r<0&&a>=0&&(r=a),r<0&&(r=t.findIndex(L=>{let N=!1,V=0;for(let z=0;z<Math.min(L.length,10);z++){const H=String(L[z]||"").trim();H.toUpperCase()==="LG"?(N=!0,V++):H&&isNaN(parseFloat(H))&&V++}return N&&V>=3})),r<0)return _o(t,e);const c=t[r],l=r+1;let p=null;if(t[l]){const L=t[l].slice(4,8).map(N=>String(N||"").trim()).filter(Boolean);L.length&&L.every(N=>/^\d{1,2}\/\d{1,2}/.test(N)||/~/.test(N)||/^\(/.test(N))&&(p=l)}const y=p!=null?p+1:l,h=t.slice(y).filter(L=>L[0]!=null&&String(L[0]).trim()),u=c.findIndex(L=>{const N=String(L||"").trim().toLowerCase();return N==="category"||N==="product"}),d=c.findIndex(L=>{const N=String(L||"").trim().toLowerCase();return N==="country"||N==="county"}),m=c.findIndex(L=>String(L||"").trim().toLowerCase()==="brand"),k=c.findIndex(L=>String(L||"").trim().toUpperCase()==="LG");let b=[];const v=a>=0?t[a]:c;for(let L=0;L<v.length;L++)/^w\d+$/i.test(String(v[L]||"").trim())&&b.push(L);if(!b.length)for(let L=0;L<c.length;L++){const N=String(c[L]||"").split(/\n/)[0].trim();/^w\d+/i.test(N)&&b.push(L)}i=b.map(L=>String(v[L]||"").trim().toUpperCase());let w=b.map((L,N)=>{const V=i[N]||`W${L}`;let z="";const H=p!=null?t[p]:a!==r&&a>=0?t[a+1]:null;if(H){const F=String(H[L]||"").trim();F&&/\d/.test(F)&&(z=F.startsWith("(")?F:`(${F})`)}return z?`${V}${z}`:V});console.log(`[parseWeekly:${e}] wLabelRow:${a} headerIdx:${r} dateRangeRow:${p} wCols:${b.length} labels:`,i.slice(0,5),"full:",w.slice(-2));function x(L){if(d<0)return!0;const N=String(L[d]||"").replace(/[()]/g,"").trim().toUpperCase();return N==="TOTAL"||N==="TTL"||N===""}const D=c.findIndex(L=>{const N=String(L||"").trim().toLowerCase().replace(/[\s_-]/g,"");return N==="b/nb"||N==="bnb"||N==="brand/nonbrand"});function P(L){if(D<0)return!0;const N=String(L[D]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return N==="nonbrand"||N==="nb"}const O={},W={data:h,rows:t,header:c,headerIdx:r,brandIdx:m,lgIdx:k,catIdx:u,countryIdx:d,wCols:b,weeklyLabels:i,weeklyMap:o,weeklyAll:O,isNonBrand:P,isTotal:x};if(m>=0){const L=Hr(W);b=L.wCols,i=L.weeklyLabels}else if(k>=0){const L=Vr(W);L&&(i=L)}else b.length&&Wr(W);if(i.length>0){let L=i.length;for(const H of Object.values(O))for(const F of Object.values(H))for(const j of Object.values(F)){const A=j.findIndex(_=>_!=null);A>=0&&A<L&&(L=A)}for(const H of Object.values(o)){const F=H.findIndex(j=>j!=null);F>=0&&F<L&&(L=F)}const N=12,z=i.length-L>N?i.length-N:L;z>0&&z<i.length&&(i=i.slice(z),w=w.slice(z),Ur(O,o,z))}if(Object.keys(o).length){const L={weeklyMap:o};return i.length&&(L.weeklyLabels=i),w.length&&(L.weeklyLabelsFull=w),Object.keys(O).length&&(L.weeklyAll=O),L}return _o(t,e)}function Kr(t){console.log(`[parseCitPageType] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((T,C)=>console.log(`  row${C}: [${(T||[]).slice(0,10).map(S=>JSON.stringify(String(S||"").trim())).join(", ")}]`));const e=t.findIndex(T=>T.some(B=>{const $=String(B||"").trim().toLowerCase();return $.includes("page type")||$==="country"})?!T.some(B=>/^\[.*\]$/.test(String(B||"").trim())):!1);if(e<0)return Yt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(T=>T==null?void 0:T.slice(0,6))});const o=t[e],i=o.findIndex(T=>{const C=String(T||"").replace(/[​‌‍﻿ ]/g,"").replace(/\s+/g,"").toLowerCase();return/^(llmmodel|llm|model)$/.test(C)}),a=o.findIndex(T=>/^country$|countries/i.test(String(T||"").trim())),r=o.findIndex(T=>{const C=String(T||"").replace(/[​‌‍﻿]/g,"").replace(/\s+/g,"").toLowerCase();return/^pa[gy]etype$/.test(C)||C==="type"}),c=a>=0?a:0,l=r>=0?r:c+1;console.log(`[parseCitPageType] header row${e}: [${o.slice(0,10).map(T=>JSON.stringify(String(T||"").trim())).join(", ")}]`),console.log(`[parseCitPageType] llmCol=${i} cntyCol=${a} ptCol=${r} (fallbackCnty=${c} fallbackPt=${l})`),i<0&&console.warn("[parseCitPageType] WARN: llmCol not detected — header codepoints:",o.slice(0,4).map(T=>Array.from(String(T||"")).map(C=>C.codePointAt(0).toString(16)).join(" ")));const p=[],y=new Set,h=Math.max(l+1,2);for(let T=h;T<o.length;T++){const C=String(o[T]||"").trim();if(/\bLG\b/i.test(C)){const S=T+1;if(S<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[S]||""))){const B=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i),$=B?B[1].toLowerCase():`col${T}`;y.has($)||(p.push({lg:T,ss:S}),y.add($))}}}p.length||p.push({lg:h,ss:h+1}),console.log("[parseCitPageType] monthPairs:",p.map(T=>`LG=${T.lg}/SS=${T.ss}`).join(", "));const u=new Map;let d="",m=0;t.slice(e+1).forEach(T=>{if(!T||!T.some(S=>String(S||"").trim())){d="";return}let C=i>=0?String(T[i]||"").trim():"";C?d=C:i>=0&&d&&(C=d,m++),u.set(T,C)}),m&&console.log(`[parseCitPageType] merged-cell forward-fill (Model): ${m}건 상속`);const k=t.slice(e+1).filter(T=>T&&T[c]!=null&&String(T[c]).trim());console.log(`[parseCitPageType] data ${k.length}행 (필터 통과)`);let b=p[0];for(let T=p.length-1;T>=0;T--)if(k.some(C=>Vt(C[p[T].lg])>0)){b=p[T];break}if(!k.some(T=>Vt(T[b.lg])>0)){for(let T=Math.min(b.lg,o.length)-1;T>=2;T--)if(k.some(C=>Vt(C[T])>0)){b={lg:T-1,ss:T};break}}const v={},w={},x={},D={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},P=new Set,O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],W=p.map(T=>{const C=String(o[T.lg]||"").trim(),S=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return S?S[1].charAt(0).toUpperCase()+S[1].slice(1).toLowerCase():C.replace(/\s*LG\s*/i,"").trim()}),L={},N=T=>String(T||"").trim().replace(/^\((.*)\)$/,"$1").trim(),V=T=>{const C=N(T);return!C||/^(total|all|ttl)$/i.test(C)},z={plp:"PLP",pdp:"PDP",microsite:"Microsites",microsites:"Microsites",newsroom:"Newsroom",support:"Support",buyingguide:"Buying-guide",experience:"Experience"},H=T=>{const C=String(T||"").replace(/[()]/g,"").trim();if(/page total|^ttl$/i.test(C))return"TTL";const S=C.toLowerCase().replace(/^lg[-\s]+/,"").replace(/[-\s]+/g,"");return z[S]||C},F=T=>{const C=de(T[c]);return{cnty:D[C]||C.toUpperCase(),key:H(T[l])}},j=new Set;k.forEach(T=>{const C=u.get(T)||"";if(V(C))return;const{cnty:S,key:B}=F(T);p.forEach(($,G)=>{(Vt(T[$.lg])>0||Vt(T[$.ss])>0)&&j.add(`${S}|${B}|${G}`)})});const A=(T,C,S,B)=>j.has(`${C}|${S}|${B}`)?!T:T,_=p.indexOf(b);j.size&&console.log(`[parseCitPageType] LLM breakdown 감지: ${j.size}건 (해당 월은 Total/TTL 행 제외 + 모델 행 합산)`);const K={};function Y(T){return K[T]||(K[T]={lg:{},samsung:{},dotcomByCnty:{},dotcomTrend:{}}),K[T]}k.forEach(T=>{const C=u.get(T)||"",S=V(C),B=S?"Total":C,{cnty:$,key:G}=F(T);P.add($);const yt=Vt(T[b.lg]),vt=Vt(T[b.ss]);A(S,$,G,_)&&($==="TTL"?(v[G]=(v[G]||0)+yt,w[G]=(w[G]||0)+vt):(x[$]||(x[$]={lg:{},samsung:{}}),x[$].lg[G]=(x[$].lg[G]||0)+yt,x[$].samsung[G]=(x[$].samsung[G]||0)+vt)),$==="TTL"&&p.forEach((bt,Ct)=>{var X,ct;if(!A(S,$,G,Ct))return;const Tt=Vt(T[bt.lg]),R=Vt(T[bt.ss]);if(Tt>0||R>0){L[G]||(L[G]={});const at=W[Ct]||`M${Ct+1}`;L[G][at]={lg:(((X=L[G][at])==null?void 0:X.lg)||0)+Tt,samsung:(((ct=L[G][at])==null?void 0:ct.samsung)||0)+R}}});const ft=Y(B);$==="TTL"?(ft.lg[G]=(ft.lg[G]||0)+yt,ft.samsung[G]=(ft.samsung[G]||0)+vt,ft.dotcomTrend[G]||(ft.dotcomTrend[G]={}),p.forEach((bt,Ct)=>{var X,ct;const Tt=Vt(T[bt.lg]),R=Vt(T[bt.ss]);if(Tt>0||R>0){const at=W[Ct]||`M${Ct+1}`;ft.dotcomTrend[G][at]={lg:(((X=ft.dotcomTrend[G][at])==null?void 0:X.lg)||0)+Tt,samsung:(((ct=ft.dotcomTrend[G][at])==null?void 0:ct.samsung)||0)+R}}})):(ft.dotcomByCnty[$]||(ft.dotcomByCnty[$]={lg:{},samsung:{}}),ft.dotcomByCnty[$].lg[G]=(ft.dotcomByCnty[$].lg[G]||0)+yt,ft.dotcomByCnty[$].samsung[G]=(ft.dotcomByCnty[$].samsung[G]||0)+vt)});const Z=new Set;Object.values(L).forEach(T=>Object.keys(T).forEach(C=>Z.add(C)));const f=O.filter(T=>Z.has(T)),Q={},U={};p.forEach((T,C)=>{const S=W[C];if(!S)return;const B={},$={};k.forEach(G=>{const yt=u.get(G)||"",vt=V(yt),{cnty:ft,key:bt}=F(G);if(!A(vt,ft,bt,C))return;const Ct=Vt(G[T.lg]),Tt=Vt(G[T.ss]);Ct<=0&&Tt<=0||(ft==="TTL"?(Ct>0&&(B[bt]=(B[bt]||0)+Ct),Tt>0&&($[bt]=($[bt]||0)+Tt)):(U[S]||(U[S]={}),U[S][ft]||(U[S][ft]={lg:{},samsung:{}}),Ct>0&&(U[S][ft].lg[bt]=(U[S][ft].lg[bt]||0)+Ct),Tt>0&&(U[S][ft].samsung[bt]=(U[S][ft].samsung[bt]||0)+Tt)))}),Object.keys(B).length&&(Q[S]={lg:B,samsung:$})}),Object.keys(U).forEach(T=>{Object.keys(U[T]).forEach(C=>{const S=U[T][C];Object.values(S.lg).some($=>$>0)||Object.values(S.samsung).some($=>$>0)||delete U[T][C]}),Object.keys(U[T]).length||delete U[T]});const mt={};return(v.TTL||Object.keys(v).length)&&(mt.dotcom={lg:v,samsung:w,byMonth:Q,byCntyByMonth:U}),Object.keys(x).length&&(mt.dotcomByCnty=x),Object.keys(L).length&&f.length&&(mt.dotcomTrend=L,mt.dotcomTrendMonths=f),(Object.keys(K).length>1||Object.keys(K).length===1&&!(K.Total||K.TOTAL||K.All))&&(mt.dotcomByLlm=K),console.log(`[parseCitPageType] 결과: dotcom.lg keys=${Object.keys(v).join(",")||"(EMPTY)"} / dotcomByCnty=${Object.keys(x).join(",")||"(EMPTY)"} / dotcomTrend keys=${Object.keys(L).join(",")||"(EMPTY)"} / byLlm keys=${Object.keys(K).join(",")||"(EMPTY)"}`),mt}function qr(t){console.log(`[parseCitTouchPoints] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((C,S)=>console.log(`  row${S}: [${(C||[]).slice(0,12).map(B=>JSON.stringify(String(B||"").trim())).join(", ")}]`));const e=t.findIndex(C=>C.some($=>{const G=String($||"").trim().toLowerCase();return G==="channel"||G==="country"})?!C.some($=>/^\[.*\]$/.test(String($||"").trim())):!1);e<0&&Yt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(C=>C==null?void 0:C.slice(0,6))});const o=e>=0?t[e]:[],i=(e>=0?e:0)+1;let a=-1,r=-1,c=-1,l=-1;for(let C=0;C<o.length;C++){const S=String(o[C]||"").trim().toLowerCase();S==="country"&&a<0&&(a=C),S==="channel"&&r<0&&(r=C),S==="prd"&&c<0&&(c=C),/^(llm\s*model|llm|model)$/i.test(S)&&l<0&&(l=C)}const p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function y(C){const S=String(C||"").trim().toLowerCase();if(!S)return null;const B=S.match(/^(\d{1,2})월/);if(B){const G=parseInt(B[1]);if(G>=1&&G<=12)return p[G-1]}const $=S.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return $?$[1].charAt(0).toUpperCase()+$[1].slice(1).toLowerCase():null}const h=[],u=new Set;for(let C=0;C<o.length;C++){const S=y(o[C]);S&&!u.has(C)&&(h.push({col:C,label:S}),u.add(C))}if(e>0){const C=t[e-1];if(C)for(let S=0;S<C.length;S++){const B=y(C[S]);B&&!u.has(S)&&(h.push({col:S,label:B}),u.add(S))}}let d=2;if(h.length>0)d=Math.min(...h.map(C=>C.col));else if(a>=0&&r>=0)d=Math.max(a,r,c)+1;else{const C=t[i];C&&!String(C[0]||"").trim()?(a=1,r=2,d=3):(a=0,r=1,d=2)}if(a<0||r<0){const C=t[i],S=C&&!String(C[0]||"").trim()?1:0;a<0&&(a=S),r<0&&(r=S+1)}if(h.length>0){h.sort(($,G)=>$.col-G.col);const C=h[0],S=p.indexOf(C.label),B=new Set([a,r,c].filter($=>$>=0));if(S>0&&C.col>d){let $=S-1;for(let G=C.col-1;G>=d&&$>=0;G--){if(u.has(G)||B.has(G))continue;const yt=String(o[G]||"").trim(),vt=e>0?String((t[e-1]||[])[G]||"").trim():"";yt||vt||(h.push({col:G,label:p[$]}),u.add(G),$--)}}}h.sort((C,S)=>p.indexOf(C.label)-p.indexOf(S.label)),console.log(`[parseCitTouchPoints] header row${e}: [${(o||[]).slice(0,12).map(C=>JSON.stringify(String(C||"").trim())).join(", ")}]`),console.log(`[parseCitTouchPoints] countryCol=${a} channelCol=${r} prdCol=${c} llmCol=${l} dataStartCol=${d}`),console.log("[parseCitTouchPoints] monthLabels (sorted):",h.map(C=>`${C.label}@col${C.col}`).join(", "));const m=t.slice(i).filter(C=>C.some(S=>S!=null&&String(S).trim())),k=[],b={},v={},w={},x={},D=new Set,P={},O={},W={},L=C=>String(C||"").replace(/[()]/g,"").trim();m.forEach(C=>{const S=de(C[a]),B=L(C[r]);if(!S||!B||B.toLowerCase()==="total")return;const $=S==="TTL"||S==="TOTAL",G=l>=0?L(C[l]):"",yt=!G||/^(total|all|ttl)$/i.test(G),vt=c>=0?L(C[c]):"",ft=!vt||/^(ttl|total)$/i.test(vt.toUpperCase());h.forEach(({col:bt,label:Ct})=>{Vt(C[bt])<=0||($||(P[B]||(P[B]={}),P[B][Ct]=!0),yt||(O[B]||(O[B]={}),O[B][Ct]=!0),ft||(W[B]||(W[B]={}),W[B][Ct]=!0))})});const N=Object.keys(P).map(C=>`${C}:[${Object.keys(P[C]).join(",")}]`).join(" ");console.log(`[parseCitTouchPoints] Country breakdown 감지 (channel × month): ${N||"(없음)"}`),console.log("[parseCitTouchPoints] LLM breakdown 감지:",Object.keys(O).map(C=>`${C}:[${Object.keys(O[C]).join(",")}]`).join(" ")||"(없음)"),console.log("[parseCitTouchPoints] PRD breakdown 감지:",Object.keys(W).map(C=>`${C}:[${Object.keys(W[C]).join(",")}]`).join(" ")||"(없음)");const V={},z={},H={},F={};m.forEach(C=>{const S=de(C[a]),B=L(C[r]),$=c>=0?L(C[c]):"",G=l>=0?L(C[l]):"";if(!S||!B||B.toLowerCase()==="total")return;const yt=S==="TTL"||S==="TOTAL",vt=!G||/^(total|all|ttl)$/i.test(G),ft=$.toUpperCase(),bt=!$||ft==="TTL"||ft==="TOTAL";if(yt||D.add(S),!yt&&(H[S]||(H[S]={}),H[S][B]||(H[S][B]={ttl:null,prds:[]}),!bt)){const Tt={};h.forEach(({col:R,label:X})=>{var at;const ct=Vt(C[R]);ct<=0||vt&&((at=O[B])!=null&&at[X])||(Tt[X]=ct)}),Object.keys(Tt).length&&H[S][B].prds.push({prd:$,monthScores:Tt})}V[B]||(V[B]={}),z[B]||(z[B]={});const Ct=yt?"TTL":S;z[B][Ct]||(z[B][Ct]={}),h.forEach(({col:Tt,label:R})=>{var ht,M,rt,St;const X=Vt(C[Tt]);if(X<=0)return;const ct=yt&&((ht=P[B])==null?void 0:ht[R]),at=vt&&((M=O[B])==null?void 0:M[R]),xt=bt&&((rt=W[B])==null?void 0:rt[R]),pt=vt?"Total":G;!ct&&!(bt&&((St=W[B])!=null&&St[R]))&&(F[pt]||(F[pt]={}),F[pt][B]||(F[pt][B]={}),F[pt][B][R]=(F[pt][B][R]||0)+X),!(ct||at||xt)&&(V[B][R]=(V[B][R]||0)+X,z[B][Ct][R]=(z[B][Ct][R]||0)+X)})});const j=C=>{for(let S=h.length-1;S>=0;S--){const B=C[h[S].label];if(B>0)return B}return 0},A={};Object.entries(z).forEach(([C,S])=>{Object.entries(S).forEach(([B,$])=>{B!=="TTL"&&Object.keys($).length!==0&&(A[B]||(A[B]={}),A[B][C]=$)})}),Object.entries(V).forEach(([C,S])=>{const B=j(S);B>0&&(k.push({source:C,category:"",score:B,delta:0,ratio:0,monthScores:S}),b[C]=S)}),Object.entries(z).forEach(([C,S])=>{Object.entries(S).forEach(([B,$])=>{if(B==="TTL")return;const G=j($);G>0&&(v[B]||(v[B]=[]),v[B].push({source:C,category:"",score:G,delta:0,ratio:0,monthScores:$,prd:""}))})}),Object.entries(H).forEach(([C,S])=>{Object.entries(S).forEach(([B,$])=>{$.prds.forEach(({prd:G,monthScores:yt})=>{const vt=j(yt);if(vt<=0)return;v[C]||(v[C]=[]),v[C].push({source:B,category:"",score:vt,delta:0,ratio:0,monthScores:yt,prd:G}),x[G]||(x[G]={}),x[G][B]||(x[G][B]={source:B,category:"",score:0,delta:0,ratio:0,monthScores:{}});const ft=x[G][B];ft.score+=vt,Object.entries(yt).forEach(([bt,Ct])=>{ft.monthScores[bt]=(ft.monthScores[bt]||0)+Ct})})})});const _={};new Set([...Object.keys(w),...Object.keys(x)]).forEach(C=>{let S=w[C];(!S||!S.length)&&(S=Object.values(x[C]||{})),S&&S.length&&(_[C]=S)});const Y=k.reduce((C,S)=>C+S.score,0);k.sort((C,S)=>S.score-C.score),k.forEach((C,S)=>{C.rank=S+1,C.ratio=Y>0?+(C.score/Y*100).toFixed(1):0});for(const[C,S]of Object.entries(v)){const B=S.reduce(($,G)=>$+G.score,0);S.sort(($,G)=>G.score-$.score),S.forEach(($,G)=>{$.rank=G+1,$.ratio=B>0?+($.score/B*100).toFixed(1):0})}for(const[C,S]of Object.entries(_)){const B=S.reduce(($,G)=>$+G.score,0);S.sort(($,G)=>G.score-$.score),S.forEach(($,G)=>{$.rank=G+1,$.ratio=B>0?+($.score/B*100).toFixed(1):0})}const Z=h.map(C=>C.label).filter(C=>Object.values(b).some(S=>S[C]>0)),f={};h.forEach(C=>{let S=0;Object.values(b).forEach(B=>{S+=B[C.label]||0}),f[C.label]=S}),console.log("[parseCitTouchPoints] citTouchPointsTrend 월별 합계:",f,"→ validMonths:",Z);const Q={};Object.entries(H.TTL||{}).forEach(([C,S])=>{Q[C]={ttl:S.ttl,latestScore:j(S.ttl||{})}}),console.log("[parseCitTouchPoints] groupMap.TTL 채널별 dump:",Q),console.log("[parseCitTouchPoints] citations top 3:",k.slice(0,3).map(C=>({source:C.source,score:C.score,monthScores:C.monthScores})));const U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let mt=null;if(Z.length>0){const C={};Object.values(b).forEach($=>{Object.entries($).forEach(([G,yt])=>{yt>0&&(C[G]=(C[G]||0)+1)})});let S=Z[Z.length-1];if(Z.length>=2){const $=C[S]||0,G=Z[Z.length-2],yt=C[G]||0;yt>0&&$<yt*.5&&(S=G)}const B=U.findIndex($=>S.toLowerCase().startsWith($.toLowerCase()));B>=0&&(mt=`${U[B]} ${new Date().getFullYear()}`)}const T={};return k.length>0&&(T.citations=k),Object.keys(v).length>0&&(T.citationsByCnty=v),Object.keys(_).length>0&&(T.citationsByPrd=_),Object.keys(b).length>0&&(T.citTouchPointsTrend=b,T.citTrendMonths=Z),Object.keys(A).length>0&&(T.citTouchPointsTrendByCnty=A),Object.keys(F).length>0&&(T.citTouchPointsByLlm=F,console.log("[parseCitTouchPoints] citTouchPointsByLlm LLM 모델:",Object.keys(F).join(", "))),mt&&(T.citDerivedPeriod=mt),T}function Jr(t){console.log(`[parseCitDomain] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((j,A)=>console.log(`  row${A}: [${(j||[]).slice(0,14).map(_=>JSON.stringify(String(_||"").trim())).join(", ")}]`));const e={GLOBAL:"TTL",TOTAL:"TTL",TTL:"TTL",ALL:"TTL",WW:"TTL",WORLD:"TTL",WORLDWIDE:"TTL",GLOBE:"TTL",글로벌:"TTL",전체:"TTL",월드:"TTL",총계:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],i=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let a=null,r=0,c=-1,l=-1,p=-1,y=-1,h=-1,u=-1,d=4;for(let j=0;j<Math.min(t.length,10);j++){const A=t[j];if(!A)continue;const _=A.some(f=>/^no$/i.test(String(f||"").trim())),K=A.some(f=>/^region$/i.test(String(f||"").trim())),Y=A.some(f=>/domain|domian/i.test(String(f||"").trim())),Z=A.some(f=>/^prd$/i.test(String(f||"").trim()));if(_||K||Y||Z){a=A,r=j+1;for(let f=0;f<A.length;f++){const Q=String(A[f]||"").trim().toLowerCase();Q==="prd"&&h<0&&(h=f),Q==="no"&&c<0&&(c=f),Q==="region"&&l<0&&(l=f),(Q==="domain"||Q==="domian")&&p<0&&(p=f),Q==="type"&&y<0&&(y=f),/^(llm\s*model|llm|model)$/i.test(Q)&&u<0&&(u=f)}console.log(`[parseCitDomain] header row${j}: [${(A||[]).slice(0,14).map(f=>JSON.stringify(String(f||"").trim())).join(", ")}]`),console.log(`[parseCitDomain] columns: prdCol=${h} noCol=${c} regionCol=${l} domainCol=${p} typeCol=${y} llmCol=${u}`);break}(String(A[0]||"").trim().startsWith("[")||!String(A[0]||"").trim())&&(r=j+1)}a||Yt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(j=>j==null?void 0:j.slice(0,6))});const m=c>=0||l>=0||h>=0;if(m)l<0&&(l=c>=0?c+1:h>=0?h+2:1),p<0&&(p=l+1),y<0&&(y=p+1),d=Math.max(p,y)+1;else if(p>=0)y=p+1,d=p+2;else{for(let j=r;j<Math.min(t.length,r+5);j++){const A=t[j];if(A){for(let _=0;_<Math.min(A.length,6);_++){const K=String(A[_]||"").trim();if(K.includes(".")&&K.length>3&&!i.test(K)){p=_,y=_+1,d=_+2;break}}if(p>=0)break}}p<0&&(p=0,y=1,d=2)}const k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=j=>{const A=String(j||"").trim().toLowerCase();if(!A)return null;const _=A.match(/^(\d{1,2})월/);if(_){const Y=parseInt(_[1]);if(Y>=1&&Y<=12)return k[Y-1]}const K=A.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return K?K[1].charAt(0).toUpperCase()+K[1].slice(1).toLowerCase():null},v=[];if(a)for(let j=d;j<a.length;j++){const A=b(a[j]);A&&v.push({col:j,label:A})}const w=j=>/^(type|domain[_ ]type)$/i.test(String(j||"").trim()),x=j=>/^(domain|domian)$/i.test(String(j||"").trim()),D=j=>/^region$/i.test(String(j||"").trim()),P=[];a&&v.forEach(({col:j,label:A})=>{const _=j-1,K=j-2,Y=j-3;Y<0||w(a[_])&&x(a[K])&&D(a[Y])&&P.push({regionCol:Y,domainCol:K,typeCol:_,monthCol:j,label:A})}),console.log(`[parseCitDomain] domainMonthLabels: ${v.map(j=>`${j.label}@col${j.col}`).join(", ")||"(없음)"}`),console.log(`[parseCitDomain] monthBlocks (v3 layout): ${P.length}개`,P.map(j=>`${j.label}@col${j.monthCol}(r${j.regionCol}/d${j.domainCol}/t${j.typeCol})`).join(", "));const O=[],W={};let L=null,N=null;const V={};let z="TTL";const H=j=>{let A=String(j||"").trim();if(!A)return"";const _=A.match(/^\[([^\]]+)\]/);_&&(A=_[1].trim()),A=A.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const K=A.indexOf("/");return K>=0&&(A=A.slice(0,K)),A};if(P.length>=2){const j=R=>String(R||"").replace(/[()]/g,"").trim(),A={},_=P.map(()=>({region:"",domain:"",type:""}));let K="",Y=0,Z=0;for(let R=r;R<t.length;R++){const X=t[R];if(!X)continue;let ct=h>=0?j(X[h]):"";ct?K=ct:ct=K;const at=u>=0?j(X[u]):"";P.forEach((xt,pt)=>{const ht=_[pt],M=H(X[xt.domainCol]);M&&M.includes(".")&&(ht.domain=M,ht.region=String(X[xt.regionCol]||"").trim().toUpperCase(),ht.type=String(X[xt.typeCol]||"").trim());const rt=String(X[xt.monthCol]||"").replace(/,/g,"").trim(),St=parseFloat(rt);if(isNaN(St)||St<=0)return;let Ft=M,ot,q;if(Ft&&Ft.includes("."))ot=String(X[xt.regionCol]||"").trim().toUpperCase(),q=String(X[xt.typeCol]||"").trim();else if(ht.domain)Ft=ht.domain,ot=ht.region,q=ht.type,Y++;else{Z++;return}const st=e[ot]||ot||"TTL",Mt=`${st}|${Ft}|${q}|${ct}|${at}`;A[Mt]||(A[Mt]={cnty:st,domain:Ft,type:q,prd:ct,llm:at,monthScores:{}}),A[Mt].monthScores[xt.label]=(A[Mt].monthScores[xt.label]||0)+St})}(Y||Z)&&console.log(`[parseCitDomain] merged-cell forward-fill: 상속 ${Y}건 / domain 없어 drop ${Z}건`);const f=R=>{const X=j(R);return!X||/^(total|all|ttl)$/i.test(X)},Q=new Set;Object.values(A).forEach(R=>{if(f(R.llm))return;const X=`${R.cnty}|${R.domain}|${R.type}|${R.prd}`;Object.entries(R.monthScores).forEach(([ct,at])=>{at>0&&Q.add(`${X}|${ct}`)})});const U={};Object.values(A).forEach(R=>{const X=`${R.cnty}|${R.domain}|${R.type}|${R.prd}`,ct=f(R.llm);U[X]||(U[X]={cnty:R.cnty,domain:R.domain,type:R.type,prd:R.prd,monthScores:{}}),Object.entries(R.monthScores).forEach(([at,xt])=>{xt>0&&Q.has(`${X}|${at}`)!==ct&&(U[X].monthScores[at]=(U[X].monthScores[at]||0)+xt)})}),console.log(`[parseCitDomain] LLM collapse: ${Object.keys(A).length} → ${Object.keys(U).length} rows / breakdown 월 ${Q.size}건`);const mt=R=>/^(ttl|total|global|all|ww|world|worldwide)$/i.test(String(R||"").trim()),T=R=>{const X=String(R||"").trim();return!X||/^(ttl|total)$/i.test(X)},C=R=>{for(let X=v.length-1;X>=0;X--){const ct=R[v[X].label];if(ct>0)return ct}return 0},S=R=>R.find(X=>Object.keys(X).length)||{},B=(R,X)=>{Object.entries(X).forEach(([ct,at])=>{at>0&&(R[ct]=(R[ct]||0)+at)})},$={};Object.values(A).forEach(R=>{if(f(R.llm))return;const X=j(R.llm);$[X]||($[X]={}),$[X][R.domain]||($[X][R.domain]=[{},{},{},{}]);const ct=(mt(R.cnty)?0:2)+(T(R.prd)?0:1);B($[X][R.domain][ct],R.monthScores)});const G={},yt={};if(Object.entries($).forEach(([R,X])=>{const ct={},at={};Object.entries(X).forEach(([xt,pt])=>{const ht=S(pt),M=C(ht);M>0&&(ct[xt]=M,at[xt]=ht)}),Object.keys(ct).length&&(G[R]=ct),Object.keys(at).length&&(yt[R]=at)}),Object.keys(G).length){const R={};Object.values(U).forEach(at=>{R[at.domain]||(R[at.domain]=[{},{},{},{}]);const xt=(mt(at.cnty)?0:2)+(T(at.prd)?0:1);B(R[at.domain][xt],at.monthScores)});const X={},ct={};Object.entries(R).forEach(([at,xt])=>{const pt=S(xt),ht=C(pt);ht>0&&(X[at]=ht,ct[at]=pt)}),Object.keys(X).length&&(G.Total=X),Object.keys(ct).length&&(yt.Total=ct),console.log("[parseCitDomain] citDomainByLlm 모델:",Object.keys(G).join(", ")),Object.keys(G).length>1&&(L=G),Object.keys(yt).length>1&&(N=yt)}Object.values(U).forEach(R=>{let X=0;for(let pt=v.length-1;pt>=0;pt--){const ht=R.monthScores[v[pt].label];if(ht>0){X=ht;break}}if(X<=0)return;V[R.cnty]=(V[R.cnty]||0)+1,O.push({cnty:R.cnty,rank:V[R.cnty],domain:R.domain,type:R.type,citations:X,monthScores:R.monthScores,prd:R.prd});const ct=`${R.cnty}|${R.domain}`,at=!R.prd||/^(ttl|total)$/i.test(R.prd);W[ct]||(W[ct]={cnty:R.cnty,domain:R.domain,type:R.type,months:{},_ttlMonths:{}});const xt=W[ct];at?(xt.type=R.type||xt.type,Object.entries(R.monthScores).forEach(([pt,ht])=>{ht>0&&(xt._ttlMonths[pt]?xt.months[pt]+=ht:(xt.months[pt]=ht,xt._ttlMonths[pt]=!0))})):Object.entries(R.monthScores).forEach(([pt,ht])=>{!(ht>0)||xt._ttlMonths[pt]||(xt.months[pt]=(xt.months[pt]||0)+ht)})}),Object.values(W).forEach(R=>{delete R._ttlMonths});const vt={TTL:{},CNTY:{}};Object.entries(W).forEach(([R,X])=>{const ct=R.startsWith("TTL|")?"TTL":"CNTY";Object.entries(X.months).forEach(([at,xt])=>{xt>0&&(vt[ct][at]=(vt[ct][at]||0)+1)})}),console.log("[parseCitDomain] trend 월 커버리지 (키 수) — TTL:",vt.TTL,"/ CNTY:",vt.CNTY);const ft={},bt={};Object.values(A).forEach(R=>{ft[R.cnty]=(ft[R.cnty]||0)+1,bt[R.prd||"(empty)"]=(bt[R.prd||"(empty)"]||0)+1}),console.log(`[parseCitDomain] aggMap entries: ${Object.keys(A).length} / cnty dist:`,ft,"/ prd dist:",bt);const Ct=Object.values(A).filter(R=>R.cnty==="TTL"&&R.monthScores.May>0).slice(0,5);console.log(`[parseCitDomain] May cnty=TTL sample (${Ct.length}건):`,Ct.map(R=>`${R.domain}|prd='${R.prd}'|type='${R.type}'|May=${R.monthScores.May}`).join(" / "));const Tt={};O.forEach(R=>{Tt[R.cnty]||(Tt[R.cnty]=[]),Tt[R.cnty].push(R)}),Object.values(Tt).forEach(R=>{R.sort((X,ct)=>ct.citations-X.citations),R.forEach((X,ct)=>{X.rank=ct+1})})}else for(let j=r;j<t.length;j++){const A=t[j];if(!A)continue;const _=String(A[p]||"").trim(),K=String(A[y]||"").trim(),Y=h>=0?String(A[h]||"").trim():"";if(!m&&(!_||!_.includes("."))){const U=String(A[p]||"").trim().toUpperCase(),mt=e[U]||(o.includes(U)?U:null);mt&&(!K||K==="")&&(z=mt);continue}if(!_||!_.includes("."))continue;let Z="TTL";if(m&&l>=0){const U=String(A[l]||"").trim().toUpperCase();Z=e[U]||U}else m||(Z=z);let f=0;if(v.length>0)for(let U=v.length-1;U>=0;U--){const mt=String(A[v[U].col]||"").replace(/,/g,"").trim(),T=parseFloat(mt);if(!isNaN(T)&&T>0){f=T;break}}else for(let U=A.length-1;U>=d;U--){const mt=String(A[U]||"").replace(/,/g,"").trim();if(!mt)continue;const T=parseFloat(mt);if(!isNaN(T)&&T>0){f=T;break}}if(v.length>0){const U={};if(v.forEach(({col:mt,label:T})=>{const C=String(A[mt]||"").replace(/,/g,"").trim(),S=parseFloat(C);!isNaN(S)&&S>0&&(U[T]=S)}),Object.keys(U).length>0){const mt=`${Z}|${_}`;W[mt]={cnty:Z,domain:_,type:K,months:U}}}const Q={};v.length>0&&v.forEach(({col:U,label:mt})=>{const T=String(A[U]||"").replace(/,/g,"").trim(),C=parseFloat(T);!isNaN(C)&&C>0&&(Q[mt]=C)}),f>0&&(V[Z]=(V[Z]||0)+1,O.push({cnty:Z,rank:V[Z],domain:_,type:K,citations:f,monthScores:Q,prd:Y}))}const F={};if(O.length>0&&(F.citationsCnty=O),Object.keys(W).length>0){F.citDomainTrend=W;const j=v.map(A=>A.label).filter(A=>Object.values(W).some(_=>_.months[A]>0));F.citDomainMonths=j}return L&&(F.citDomainByLlm=L),N&&(F.citDomainByLlmTrend=N),F}function zo(t,e){const o=po(t,[/^type$/,/^(county|country)$/]);if(o<0)return Yt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(x=>x==null?void 0:x.slice(0,6))});const i=t[o];let a=-1,r=-1,c=-1,l=-1,p=4;for(let x=0;x<i.length;x++){const D=String(i[x]||"").split(/\n/)[0].trim().toLowerCase();D==="type"&&a<0&&(a=x),(D==="county"||D==="country")&&r<0&&(r=x),(D==="topic"||D==="topoc")&&c<0&&(c=x),D==="brand"&&l<0&&(l=x)}c<0&&(c=2,Yt(`parsePRVisibility:${e}`,"topic header not found, falling back to column C (index 2)",{header:i.slice(0,6)})),p=Math.max(a,r,c,l)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,h=/^w\d+/i,u=[],d=[o];for(let x=0;x<=o;x++)x!==o&&d.push(x);for(const x of d){if(u.length>0)break;const D=t[x];if(D)for(let P=p;P<D.length;P++){const O=String(D[P]||"").split(/\n/)[0].trim();O&&(y.test(O)||h.test(O))&&u.push({col:P,label:O})}}const m=t.slice(o+1),k=[];m.forEach(x=>{if(!x)return;const D=String(x[a]||"").trim(),P=de(x[r]),O=String(x[c]||"").trim(),W=String(x[l]||"").trim();if(!O||!W)return;const L={};let N=0;u.forEach(({col:V,label:z})=>{const H=ne(x[V]);H>0&&(L[z]=H,N=H)}),(Object.keys(L).length>0||O)&&k.push({type:D,country:P,topic:O,brand:W,scores:L,latestScore:N})});const b=e==="weekly"?"weeklyPR":"monthlyPR",v=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",w={};return k.length>0&&(w[b]=k),u.length>0&&(w[v]=u.map(x=>x.label)),w}function Go(t,e){const o=t.findIndex(w=>w?w.some(x=>/steakholders|stakeholders/i.test(String(x||"").trim()))||w.some(x=>/^type$/i.test(String(x||"").trim()))&&w.some(x=>/topoc|topic/i.test(String(x||"").trim())):!1);if(o<0)return Yt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const i=t[o];let a=-1,r=-1,c=-1,l=-1,p=4;for(let w=0;w<i.length;w++){const x=String(i[w]||"").trim().toLowerCase();(x==="steakholders"||x==="stakeholders")&&a<0&&(a=w),x==="type"&&r<0&&(r=w),(x==="country"||x==="county")&&c<0&&(c=w),(x==="topoc"||x==="topic")&&l<0&&(l=w)}p=Math.max(a,r,c,l)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,h=/^w\d+/i,u=[];for(let w=p;w<i.length;w++){const x=String(i[w]||"").split(/\n/)[0].trim();x&&(y.test(x)||h.test(x))&&u.push({col:w,label:x})}const d=t.slice(o+1),m=[];d.forEach(w=>{if(!w)return;const x=String(w[a]||"").trim(),D=String(w[r]||"").trim(),P=de(w[c]),O=String(w[l]||"").trim();if(!O||!x)return;const W={};let L=0;u.forEach(({col:N,label:V})=>{const z=ne(w[N]);z>0&&(W[V]=z,L=z)}),m.push({stakeholder:x,type:D,country:P,topic:O,scores:W,latestScore:L})});const k=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",b=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",v={};return m.length>0&&(v[k]=m),u.length>0&&(v[b]=u.map(w=>w.label)),v}const pe={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0},Yr={"IN|DW":!0};function Xr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const e=po(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,m)=>console.log(`  row${m}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const o=t[e];let i=-1,a=-1,r=-1;for(let d=0;d<o.length;d++){const m=String(o[d]||"").trim().toLowerCase();i<0&&(m==="country"||m==="county")&&(i=d),a<0&&(m==="category"||m==="product"||m==="제품"||m==="카테고리")&&(a=d),r<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(m)&&(r=d)}if(i<0||a<0||r<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:i,categoryCol:a,statusCol:r,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const c=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),l={...pe};let p=0,y=0,h=0;t.slice(e+1).forEach((d,m)=>{const k=e+1+m;try{if(!d){h++;return}const b=String(d[r]||"").trim();if(!b){h++;return}p++;const v=b.toLowerCase().replace(/\s+/g," ");if(!c.has(v)&&!c.has(v.replace(/\s/g,"")))return;const w=_r(d[i]),x=String(d[a]||"").trim();if(!w||!x){console.warn("[parseUnlaunched] row skipped",{rowIdx:k,raw:{country:d[i],category:d[a],status:d[r]},parsed:{country:w,rawCategory:x}}),h++;return}const D=x.toUpperCase(),P=Re[D]||D;l[`${w}|${P}`]=!0,P!==D&&(l[`${w}|${D}`]=!0),y++}catch(b){let v;try{v={country:d==null?void 0:d[i],category:d==null?void 0:d[a],status:d==null?void 0:d[r]}}catch{v=d}console.warn("[parseUnlaunched] row error",{rowIdx:k,raw:v,error:b==null?void 0:b.message}),h++}});let u=0;return Object.keys(Yr).forEach(d=>{const[m,k]=d.split("|");[k,...Object.keys(Re).filter(b=>Re[b]===k)].forEach(b=>{l[`${m}|${b}`]&&(delete l[`${m}|${b}`],u++)})}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${y}건 + 디폴트 ${Object.keys(pe).length}건 + 강제출시 제거 ${u}건 + skip ${h}건 / 총행 ${p} / 최종키 ${Object.keys(l).length}개`),{unlaunchedMap:l}}function Zr(t){const e=po(t,[/^bu$/,/topic/]);if(e<0)return Yt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(h=>h==null?void 0:h.slice(0,6))});const o=t[e];let i=-1,a=-1,r=-1,c=-1,l=-1;for(let h=0;h<o.length;h++){const u=String(o[h]||"").trim().toLowerCase();i<0&&u==="bu"&&(i=h),a<0&&u.includes("topic")&&u.includes("대시보드")&&(a=h),r<0&&(u==="explanation"||u==="설명")&&(r=h),c<0&&u.includes("기존")&&(c=h),l<0&&u.includes("topic")&&u.includes("row")&&(l=h)}a<0&&(a=1),r<0&&(r=2);const p=[];let y="";return t.slice(e+1).forEach(h=>{if(!h)return;const u=String(h[i]||"").trim();u&&(y=u);const d=String(h[a]||"").trim();if(!d)return;const m=String(h[r]||"").trim(),k=c>=0?String(h[c]||"").trim():"",b=l>=0?String(h[l]||"").trim():"";p.push({bu:y,topic:d,explanation:m,oldTopic:k,topicRow:b})}),p.length>0?{prTopicList:p}:{}}function Qr(t,e){var o;if(!Pr(e,`parseSheetRows:${t}`))return{};try{if(t===_t.meta)return Mr("parseSheetRows","meta 시트 무시 — 문구는 서버 기본값 사용"),{};if(t===_t.visSummary)return zr(e);if(t===_t.productMS||t===_t.productHS||t===_t.productES)return Gr(e);if(t===_t.weeklyMS)return Je(e,"MS");if(t===_t.weeklyHS)return Je(e,"HS");if(t===_t.weeklyES)return Je(e,"ES");if(t===_t.monthlyPR)return zo(e,"monthly");if(t===_t.weeklyPR)return zo(e,"weekly");if(t===_t.monthlyBrandPrompt)return Go(e,"monthly");if(t===_t.weeklyBrandPrompt)return Go(e,"weekly");if(t===_t.citPageType)return Kr(e);if(t===_t.citTouchPoints)return qr(e);if(t===_t.citDomain)return Jr(e);if(t===_t.unlaunched)return Xr(e);if(t===_t.prTopicList)return Zr(e)}catch(i){return oo(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:i==null?void 0:i.message,stack:(o=i==null?void 0:i.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Yt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(_t)})}function ti(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function ei(t,e){var u;const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,i=`/gsheets-proxy/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,a=await fetch(i,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!a.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${a.status}).`);const r=await a.text(),c=await mn(),l=c.read(r,{type:"string"}),p=l.Sheets[l.SheetNames[0]],y=c.utils.sheet_to_json(p,{header:1,defval:""}),h=r.split(`
`).length;return console.log(`[fetchSheet] "${e}": csv ${r.length}자/${h}줄 → ${y.length}행 × ${((u=y[0])==null?void 0:u.length)??0}컬럼`),y}async function oi(t,e){var r,c;const o=Object.values(_t),i={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const a=await Promise.allSettled(o.map(l=>ei(t,l).then(p=>({name:l,rows:p}))));for(let l=0;l<o.length;l++){const p=o[l],y=a[l];if(e==null||e(`"${p}" 처리 중... (${l+1}/${o.length})`),y.status==="rejected"){console.warn(`"${p}" 시트 건너뜀:`,(r=y.reason)==null?void 0:r.message);continue}try{const{rows:h}=y.value,u=Qr(p,h);for(const[d,m]of Object.entries(u))d==="weeklyLabels"||d==="weeklyLabelsFull"?i[d]||(i[d]=m):Array.isArray(m)&&Array.isArray(i[d])?i[d]=[...i[d],...m]:m&&typeof m=="object"&&!Array.isArray(m)&&i[d]&&typeof i[d]=="object"&&!Array.isArray(i[d])?i[d]={...i[d],...m}:i[d]=m}catch(h){console.warn(`"${p}" 시트 처리 실패:`,h.message)}}if(!i.productsPartial&&i.weeklyAll&&i.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const l=[];for(const[p,y]of Object.entries(i.weeklyAll)){const h=y.Total||y.TTL||{},u=h.LG||h.lg||[],d=Object.entries(h).filter(([w])=>w!=="LG"&&w!=="lg"),m=u.length?u[u.length-1]:0,k=u.length>=5?u[0]:0;let b="",v=0;for(const[w,x]of d){const D=x.length?x[x.length-1]:0;D>v&&(v=D,b=w)}m>0&&l.push({id:p,bu:Rr[p]||"HS",kr:eo[p]||p,category:p,date:((c=i.meta)==null?void 0:c.period)||"",score:m,prev:k,vsComp:v,compName:b,allScores:{LG:m,...b?{[b]:v}:{}}})}if(l.length&&(i.productsPartial=l,console.log(`[SYNC] weeklyAll에서 ${l.length}개 제품 생성:`,l.map(p=>`${p.id}=${p.score}`).join(", "))),!i.productsCnty){const p=[];for(const[y,h]of Object.entries(i.weeklyAll)){const u=eo[y]||y;for(const[d,m]of Object.entries(h)){if(d==="Total"||d==="TTL")continue;const k=m.LG||m.lg||[],b=k.length?k[k.length-1]:0;if(b<=0)continue;const v=k.length>=2?k[0]:0;let w="",x=0;const D={LG:b};for(const[O,W]of Object.entries(m)){if(O==="LG"||O==="lg")continue;const L=W.length?W[W.length-1]:0;D[O]=L,L>x&&(x=L,w=O)}const P=+(b-x).toFixed(1);p.push({product:u,country:d,score:b,prev:v,compName:w,compScore:x,gap:P,allScores:D})}}p.length&&(i.productsCnty=p,console.log(`[SYNC] weeklyAll에서 productsCnty ${p.length}건 생성`))}}if(i.weeklyLabels&&i.weeklyLabels.length&&i.weeklyLabels.every((p,y)=>p===`W${y+1}`)){const p=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(y=>String(y).split(/\n/)[0].trim().toUpperCase()).filter(y=>/^W\d+/.test(y));if(p.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",p),i.weeklyLabels=p;const y=(i.weeklyPRLabels||i.weeklyBrandPromptLabels||[]).map(h=>{const u=String(h).split(/\n/);return u[0].trim().toUpperCase()+(u[1]?u[1].trim():"")}).filter(h=>/^W\d+/.test(h));y.length&&(i.weeklyLabelsFull=y)}}if(i._syncIssues=Dr(i,"syncFromGoogleSheets"),typeof localStorage<"u")try{const l=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");l.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:i._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(l.slice(0,10)))}catch{}return i}const Et={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:E,outline:"none",boxSizing:"border-box"};function ni(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),i=Math.floor(o/60),a=Math.floor(i/24);return a>=1?`${a}일 전`:i>=1?`${i}시간 전`:o>=1?`${o}분 전`:"방금 전"}function ri({savedAt:t,ageMs:e,stale:o,style:i}){const a=t==null,r=a?"#1E293B":o?"#7F1D1D":"#064E3B",c=a?"#94A3B8":o?"#FCA5A5":"#86EFAC",l=a?"#334155":o?"#B91C1C":"#047857",p=a?"○":o?"⚠️":"●",y=a?"동기화 정보 없음":`데이터 최신화: ${ni(e)}`,h=t?new Date(t).toLocaleString("ko-KR"):"";return n.jsxs("span",{title:h,style:{display:"inline-flex",alignItems:"center",gap:5,background:r,color:c,border:`1px solid ${l}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:E,whiteSpace:"nowrap",...i||{}},children:[n.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:p}),y]})}function ii({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Xt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",re="#CF0652",ue="#94A3B8",Oe={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},bn={LG:re,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},Uo=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],no={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},ai=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],Ne={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},si={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},li={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},uo=90;function ho(t,e){const o=Oe[e]||Oe.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function ci(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function di(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function ro(t){const e=String(t||"").trim().toUpperCase();return Ne[e]||t}function pi(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?si[o]||Ne[o]||t:li[o]||Ne[o]||t}let ui=0;function Ho(t,e,o,i,a,r={}){if(!t||!t.length)return`<svg width="${o}" height="${i}"></svg>`;const c=r.fadeBeforeIdx!=null?r.fadeBeforeIdx:-1,l=r.baselineLabel||"",p=r.labelOffsetY||0,y=r.lineOffsetY||0,h=ui++,u={t:18,r:10,b:20,l:10},d=o-u.l-u.r,m=i-u.t-u.b,k=t.filter(z=>z!=null);if(!k.length){let z=`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const H=t.length,F=H>1?H-1:1;return z+=t.map((j,A)=>`<text x="${(u.l+A/F*d).toFixed(1)}" y="${u.t+m+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Xt}">${e[A]||""}</text>`).join(""),z+="</svg>",z}const b=Math.min(...k)-1,v=Math.max(...k)+1,w=v-b||1,x=t.length,D=x>1?x-1:1,P=t.map((z,H)=>u.l+H/D*d),O=[];t.forEach((z,H)=>{z!=null&&O.push({x:P[H],y:u.t+(1-(z-b)/w)*m,v:z,idx:H})});let W=`<svg viewBox="0 0 ${o} ${i+12}" width="100%" height="${i+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const L=c>0?O.filter(z=>z.idx<c):[],N=c>0?O.filter(z=>z.idx>=c):O,V="#64748B";if(N.length>=2){const z=N.map((F,j)=>`${j?"L":"M"}${F.x.toFixed(1)},${F.y.toFixed(1)}`).join(" "),H=z+` L${N[N.length-1].x.toFixed(1)},${u.t+m} L${N[0].x.toFixed(1)},${u.t+m} Z`;W+=`<defs><linearGradient id="lg${h}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${a}" stop-opacity="0.03"/>
    </linearGradient></defs>`,W+=`<path d="${H}" fill="url(#lg${h})"/>`,W+=`<path d="${z}" stroke="${a}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(L.length>=2){const z=L.map((H,F)=>`${F?"L":"M"}${H.x.toFixed(1)},${H.y.toFixed(1)}`).join(" ");W+=`<path d="${z}" stroke="${V}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(W+=O.map(z=>{const H=c>0&&z.idx<c;return c>0&&z.idx===c?`<circle cx="${z.x.toFixed(1)}" cy="${z.y.toFixed(1)}" r="4" fill="#000" stroke="${a}" stroke-width="3"/>`:`<circle cx="${z.x.toFixed(1)}" cy="${z.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${H?V:a}" stroke-width="2" opacity="${H?.85:1}"/>`}).join(""),W+=O.map(z=>{const F=c>0&&z.idx<c?V:a;return`<text x="${z.x.toFixed(1)}" y="${Math.max(z.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${F}" font-family="${Xt}">${z.v.toFixed(1)}</text>`}).join(""),c>0&&l){const z=P[c];W+=`<line x1="${z.toFixed(1)}" y1="${(u.t+y).toFixed(1)}" x2="${z.toFixed(1)}" y2="${(u.t+m+y).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const H=z>o*.7,F=(H?u.t+m+1:u.t+8)+p;W+=`<text x="${(H?z-5:z+5).toFixed(1)}" y="${F.toFixed(1)}" text-anchor="${H?"end":"start"}" font-size="9" fill="#64748B" font-family="${Xt}">${l}</text>`}return W+=t.map((z,H)=>`<text x="${P[H].toFixed(1)}" y="${u.t+m+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Xt}">${e[H]||""}</text>`).join(""),W+="</svg>",W}function Te(t,e){return bn[t]||Uo[e%Uo.length]}function xn(t,e,o,i,a={}){const r=Object.keys(t);if(!r.length||!e.length)return"";const c=a.fadeBeforeIdx!=null?a.fadeBeforeIdx:-1,l=a.baselineLabel||"";let p=1/0,y=-1/0;if(r.forEach(x=>(t[x]||[]).forEach(D=>{D!=null&&(D<p&&(p=D),D>y&&(y=D))})),!isFinite(p))return"";const h=Math.max((y-p)*.15,2);p=Math.max(0,p-h),y=Math.min(100,y+h);const u=y-p||1,d=e.length,m=8,k=8,b=i-m-k,v="#64748B";let w="";for(let x=0;x<=4;x++){const D=m+x/4*b;w+=`<line x1="0" y1="${D.toFixed(1)}" x2="${o}" y2="${D.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(r.forEach((x,D)=>{const P=t[x]||[],O=Te(x,D),W=x==="LG",L=W?2.5:1.5,N=W?1:.7,V=[];if(P.forEach((j,A)=>{if(j==null)return;const _=(A+.5)/d*o,K=m+(1-(j-p)/u)*b;V.push({x:_,y:K,v:j,idx:A})}),!V.length)return;const z=c>0?V.filter(j=>j.idx<c):[],H=c>0?V.filter(j=>j.idx>=c):V;function F(j,A,_,K){if(j.length>=2){const Y=j.map((Z,f)=>`${f?"L":"M"}${Z.x.toFixed(1)},${Z.y.toFixed(1)}`).join(" ");w+=`<path d="${Y}" stroke="${A}" fill="none" stroke-width="${L}" stroke-linecap="round" stroke-linejoin="round" opacity="${_}"/>`}j.forEach(Y=>{K&&Y.idx===c||(w+=`<circle cx="${Y.x.toFixed(1)}" cy="${Y.y.toFixed(1)}" r="${W?3.5:2.5}" fill="#fff" stroke="${A}" stroke-width="${W?2:1.5}" opacity="${_}"/>`)})}if(F(z,v,.85,!1),F(H,O,N,W&&c>0),W&&c>0){const j=V.find(A=>A.idx===c);j&&(w+=`<circle cx="${j.x.toFixed(1)}" cy="${j.y.toFixed(1)}" r="4.5" fill="#000" stroke="${O}" stroke-width="3"/>`)}}),c>0&&l){const x=(c+.5)/d*o;w+=`<line x1="${x.toFixed(1)}" y1="${m}" x2="${x.toFixed(1)}" y2="${m+b}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const D=x>o*.7;w+=`<text x="${(D?x-5:x+5).toFixed(1)}" y="${(m+12).toFixed(1)}" text-anchor="${D?"end":"start"}" font-size="11" fill="#64748B" font-family="${Xt}">${l}</text>`}return`<svg viewBox="0 0 ${o} ${i}" width="100%" height="${i}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${w}</svg>`}function hi({lang:t,weeklyAll:e,products:o,productsCnty:i,ulMap:a,monthlyVis:r,total:c,meta:l,wLabels:p}){const y={monthlyVis:r};return`
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
${(()=>{const h=u=>JSON.stringify(u).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?h(e):"{}"};
var _products=${h(o.map(u=>({id:u.id,bu:u.bu,kr:u.kr,en:u.en||u.kr,category:u.category||"",date:u.date||"",status:u.status,score:u.score||0,prev:u.prev||0,vsComp:u.vsComp||0,compName:u.compName||"",compRatio:u.compRatio||0,allScores:u.allScores||{},monthlyScores:u.monthlyScores||[]})))};
var _productsCnty=${h(i||[])};
var _unlaunchedMap=${h(a)};
var _PROD_TO_UL=${h(Ee)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${h((y==null?void 0:y.monthlyVis)||[])};
var _total=${h(c)};
var _meta={period:${h(l.period||"")},reportNo:${h(l.reportNo||"")},totalInsight:${h(l.totalInsight||"")}};
var _wLabels=${h(p)};`})()}
${(()=>{const h=u=>JSON.stringify(u).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${h(bn)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${re}';
var _FONT=${h(Xt)};
var _COMP='${ue}';
var _REGIONS=${h(Object.fromEntries(Object.entries(no).map(([u,d])=>[u,d.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(no).map(([h,u])=>[h,t==="en"?u.labelEn:u.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${uo};

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
`}const fi=["audio","rac","aircare"];function mi(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return fi.includes(String(e).toLowerCase())}function gi(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function _e(t,e){if(!mi(t)||!e)return-1;const o=gi(t);if(o>0){const i=e.findIndex(a=>{const r=String(a||"").trim().match(/^W?(\d+)$/i);return r&&parseInt(r[1],10)===o});if(i>=0)return i}return e.findIndex(i=>{const a=String(i||"").trim();return/^Apr(il)?$/i.test(a)||a==="4월"})}const ze={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function yi(t){const e=ze[t]||ze.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function vn(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),i=ze[e]||ze.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${i.racair}</p>`:""}function bi(t,e,o,i,a,r,c){if(!e||!Object.keys(e).length)return"";const p=["MS","HS","ES"].map(y=>{const h=t.filter(d=>d.bu===y);if(!h.length)return"";const u=h.map(d=>{var z,H;const m=((z=e[d.id])==null?void 0:z.Total)||{},k=Object.keys(m).sort((F,j)=>{var K,Y;if(F==="LG")return-1;if(j==="LG")return 1;const A=((K=m[F])==null?void 0:K[m[F].length-1])||0;return(((Y=m[j])==null?void 0:Y[m[j].length-1])||0)-A});if(!k.length)return"";const b=ho(d.status,a),v=(H=m.LG)==null?void 0:H[m.LG.length-1],w=k.map((F,j)=>{const A=Te(F,j),_=F==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${A};opacity:${_?1:.7}"></i><span style="font-size:13px;color:${_?"#1A1A1A":"#94A3B8"};font-weight:${_?700:400}">${F}</span></span>`}).join(""),x=o.length,D=`<colgroup><col style="width:${uo}px">${o.map(()=>"<col>").join("")}</colgroup>`,P=_e(d,o),O=`<tr><td style="padding:0;border:0"></td><td colspan="${x}" style="padding:8px 0;border:0">${xn(m,o,x*80,180,{fadeBeforeIdx:P,baselineLabel:P>0?"*Baseline 재설정":""})}</td></tr>`,W=`<tr><td style="padding:0;border:0"></td><td colspan="${x}" style="padding:4px 0 6px;border:0">${w}</td></tr>`,L=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(F=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${F}</th>`).join("")}</tr>`,N=k.map((F,j)=>{const A=Te(F,j),_=F==="LG",K=o.map((Y,Z)=>{var Q;const f=(Q=m[F])==null?void 0:Q[Z];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${f!=null?_?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${_?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${f!=null?f.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${_?"#FFF8F9":j%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${_?700:500};color:${A};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${A};margin-right:4px;vertical-align:0"></i>${F}</td>${K}</tr>`}).join(""),V=fo(d.id||d.category,r);return`<div class="trend-row${V?" is-unlaunched":""}" data-prodid="${d.id||d.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${re};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${mo(d,r)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${V?"#F1F5F9":b.bg};color:${V?"#64748B":b.color};border:1px solid ${V?"#CBD5E1":b.border}">${V?a==="en"?"Unlaunched":"미출시":b.label}</span>
          ${v!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${v.toFixed(1)}%</span>`:""}
          ${d.compName?`<span style="font-size:14px;color:#94A3B8">vs ${d.compName} ${d.compRatio!=null&&d.compRatio!==""?Math.round(d.compRatio):""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Xt}">${D}<tbody>${O}${W}${L}${N}</tbody></table></div>
        ${vn(d,a)}
      </div>`}).join("");return u?`<div class="bu-group" data-bu="${y}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${y}</span></div>
      ${u}
    </div>`:""}).join("");return p.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${c||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${a==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${p}</div>
  </div>`:""}function xi(t,e,o,i,a,r){if(!e||!e.length)return"";const c=["MS","HS","ES"],l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function y(m){const k=String(m||""),b=k.match(/(\d{1,2})월/);if(b)return parseInt(b[1])-1;const v=k.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(v)return p[v[1].toLowerCase()];const w=k.match(/\d{4}[-\/](\d{1,2})/);return w?parseInt(w[1])-1:-1}const h=[0,1,2,3,4,5,6,7,8,9,10,11],u=l.slice(),d=c.map(m=>{const k=t.filter(v=>v.bu===m);if(!k.length)return"";const b=k.map(v=>{const w=v.monthlyScores||[];let x={};if(w.length>=2){const _=new Set;if(w.forEach(K=>{K.allScores&&Object.keys(K.allScores).forEach(Y=>_.add(Y))}),_.forEach(K=>{x[K]=h.map(Y=>{var f;const Z=w.find(Q=>y(Q.date)===Y);return((f=Z==null?void 0:Z.allScores)==null?void 0:f[K])??null})}),!_.size&&(x.LG=h.map(K=>{const Y=w.find(Z=>y(Z.date)===K);return Y?Y.score:null}),v.vsComp>0)){const K=h.map(Y=>{const Z=w.find(f=>y(f.date)===Y);return(Z==null?void 0:Z.comp)??null});K.some(Y=>Y!=null)&&(x[v.compName||"Comp"]=K)}}else{const _=e.filter(f=>f.division===m&&(f.country==="TOTAL"||f.country==="TTL")),K={};_.forEach(f=>{const Q=y(f.date);Q>=0&&(K[Q]=f)});const Y=h.map(f=>{var Q;return((Q=K[f])==null?void 0:Q.lg)||null}),Z=h.map(f=>{var Q;return((Q=K[f])==null?void 0:Q.comp)||null});x={LG:Y},Z.some(f=>f!=null&&f>0)&&(x.Samsung=Z)}const D=Object.keys(x).sort((_,K)=>{if(_==="LG")return-1;if(K==="LG")return 1;const Y=(x[_]||[]).filter(f=>f!=null).pop()||0;return((x[K]||[]).filter(f=>f!=null).pop()||0)-Y});if(!D.length)return"";const P=ho(v.status,i),O=(x.LG||[]).filter(_=>_!=null).pop(),W=D.map((_,K)=>{const Y=Te(_,K),Z=_==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${Y};opacity:${Z?1:.7}"></i><span style="font-size:13px;color:${Z?"#1A1A1A":"#94A3B8"};font-weight:${Z?700:400}">${_}</span></span>`}).join(""),L=u.length,N=`<colgroup><col style="width:${uo}px">${u.map(()=>"<col>").join("")}</colgroup>`,V=_e(v,u),z=`<tr><td style="padding:0;border:0"></td><td colspan="${L}" style="padding:8px 0;border:0">${xn(x,u,L*80,180,{fadeBeforeIdx:V,baselineLabel:V>0?"*Baseline 재설정":""})}</td></tr>`,H=`<tr><td style="padding:0;border:0"></td><td colspan="${L}" style="padding:4px 0 6px;border:0">${W}</td></tr>`,F=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${u.map(_=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${_}</th>`).join("")}</tr>`,j=D.map((_,K)=>{const Y=Te(_,K),Z=_==="LG",f=u.map((Q,U)=>{var T;const mt=(T=x[_])==null?void 0:T[U];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${mt!=null?Z?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${Z?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${mt!=null?mt.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${Z?"#FFF8F9":K%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${Z?700:500};color:${Y};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${Y};margin-right:4px;vertical-align:0"></i>${_}</td>${f}</tr>`}).join(""),A=fo(v.id||v.category,a);return`<div class="trend-row${A?" is-unlaunched":""}" data-prodid="${v.id||v.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${re};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${mo(v,a)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${A?"#F1F5F9":P.bg};color:${A?"#64748B":P.color};border:1px solid ${A?"#CBD5E1":P.border}">${A?i==="en"?"Unlaunched":"미출시":P.label}</span>
          ${O!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${O.toFixed(1)}%</span>`:""}
          ${v.compName?`<span style="font-size:14px;color:#94A3B8">vs ${v.compName} ${v.compRatio!=null&&v.compRatio!==""?Math.round(v.compRatio):""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Xt}">${N}<tbody>${z}${H}${F}${j}</tbody></table></div>
        ${vn(v,i)}
      </div>`}).join("");return b?`<div class="bu-group" data-bu="${m}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${m}</span></div>
      ${b}
    </div>`:""}).join("");return d.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${i==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${r||""} &nbsp;|&nbsp; ${u[0]}–${u[u.length-1]} (${u.length}${i==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${d}</div>
  </div>`:""}function wn(){return""}function Vo(t,e,o,i,a){const r=+(t.score-t.prev).toFixed(1),c=t.vsComp||0,l=+(t.score-c).toFixed(1),p=r>0?"▲":r<0?"▼":"─",y=r>0?"#22C55E":r<0?"#EF4444":"#94A3B8",h=c>0?Math.round(t.score/c*100):null,u=h==null?"#94A3B8":h>=100?"#22C55E":h>=80?"#FBBF24":"#EF4444";return`<div class="hero" id="hero-section"${a==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
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
        ${h!=null?`<div class="hero-compratio">
          <span class="hero-compratio-cap">${i==="en"?"Comp. Ratio":"경쟁비"}</span>
          <span class="hero-compratio-val" style="color:${u}">${h}%</span>
          <span class="hero-compratio-sub">${i==="en"?"vs Samsung":"삼성 대비"}</span>
        </div>`:""}
        <div class="hero-score-row">
          <span class="hero-score">${t.score}</span><span class="hero-pct">%</span>
          <span class="hero-delta" style="color:${y}">${p} ${Math.abs(r).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${re}"></div>
          </div>
          ${c>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(c,100)}%;background:${ue}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${re}"></i> LG ${t.score}%</span>
            ${c>0?`<span><i style="background:${ue}"></i> Samsung ${c}%</span>`:""}
            <span><i style="background:#475569"></i> prev ${t.prev}%</span>
          </div>
        </div>
      </div>
      <div class="hero-right">
        ${c>0?`<div class="hero-comp">
          <span class="hero-comp-label">SAMSUNG</span> <span class="hero-comp-score">${c}%</span>
          <span class="hero-comp-gap" style="color:${l>=0?"#22C55E":"#EF4444"}">Gap ${l>=0?"+":""}${l}%p</span>
        </div>`:""}
        <div class="hero-info">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN</div>
      </div>
    </div>
  </div>`}function Se(t,e){const o=Ee[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(i=>i.endsWith("|"+o)).map(i=>i.split("|")[0])}function fo(t,e){return ai.every(o=>{const i=Ee[t]||(t||"").toUpperCase();return(e||{})[`${o}|${i}`]})}function mo(t,e){return Se(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Wo(t,e,o,i,a,r,c,l,p){if(!t.length)return"";const h=["MS","HS","ES"].map(u=>{const d=t.filter(k=>k.bu===u);if(!d.length)return"";const m=d.map(k=>{var at,xt;const b=k.weekly||[],v=b.filter(pt=>pt!=null),w=k.weeklyScore||(v.length>0?v[v.length-1]:k.score),x=k.monthlyScore||k.score,D=w,P=((at=l==null?void 0:l[k.id])==null?void 0:at.Total)||((xt=l==null?void 0:l[k.id])==null?void 0:xt.TTL)||{};let O=0;Object.entries(P).forEach(([pt,ht])=>{if(pt==="LG"||pt==="lg")return;const M=Array.isArray(ht)&&ht.length?ht[ht.length-1]:0;M>O&&(O=M)});const W=k.vsComp||0,L=O>0?w/O*100:W>0?w/W*100:100,N=W>0?x/W*100:100,V=Math.round(L),z=Math.round(N),H=V,F=L>=100?"lead":L>=80?"behind":"critical",j=ho(F,i),A=v.length>=1?v[v.length-1]:null,_=v.length>=2?v[v.length-2]:null,K=A!=null&&_!=null?+(A-_).toFixed(1):null,Y=K>0?"▲":K<0?"▼":"─",Z=K>0?"#22C55E":K<0?"#EF4444":"#94A3B8",f=F==="critical"?"#BE123C":F==="behind"?"#D97706":"#15803D",Q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],U={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function mt(pt){const ht=String(pt||""),M=ht.match(/(\d{1,2})월/);if(M)return parseInt(M[1])-1;const rt=ht.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(rt)return U[rt[1].toLowerCase()];const St=ht.match(/\d{4}[-\/](\d{1,2})/);return St?parseInt(St[1])-1:-1}let T=k.monthlyScores||[];if(T.length<2&&c.length>0){const pt=c.filter(M=>M.division===k.bu&&(M.country==="TOTAL"||M.country==="TTL")),ht={};pt.forEach(M=>{const rt=mt(M.date);rt>=0&&(ht[rt]={date:M.date,score:M.lg,comp:M.comp})}),T=Object.keys(ht).sort((M,rt)=>M-rt).map(M=>ht[M])}const C=T.length>0?T.map(pt=>{const ht=mt(pt.date);return ht>=0?Q[ht]:pt.date}):["M-3","M-2","M-1","M0"],S=T.length>0?T.map(pt=>pt.score):[null,null,null,k.score],B=T.length>=2?+(T[T.length-1].score-T[T.length-2].score).toFixed(1):null,$=B>0?"▲":B<0?"▼":"─",G=B>0?"#22C55E":B<0?"#EF4444":"#94A3B8",yt=H,vt=yt>=100?"#15803D":yt>=80?"#D97706":"#BE123C",ft=k.weeklyPrev||(v.length>=5?v[v.length-5]:v[0]||0),bt=w&&ft?+(w-ft).toFixed(1):null,Ct=x&&(k.monthlyPrev||k.prev)?+(x-(k.monthlyPrev||k.prev)).toFixed(1):null,Tt=Se(k.id||k.category,r),R=fo(k.id||k.category,r),ct=R?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:i==="en"?"Unlaunched":"미출시"}:j;return`<div class="prod-card${R?" is-unlaunched":""}" data-prodid="${k.id||k.category}" data-ws="${w.toFixed(1)}" data-ms="${x.toFixed(1)}" data-wr="${V}" data-mr="${z}" data-wmom="${bt??""}" data-mmom="${Ct??""}" style="border-color:${ct.border}">
        <div class="prod-head">
          <span class="prod-name">${mo(k,r)}</span>
          ${Tt.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${i==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${ct.bg};color:${ct.color};border-color:${ct.border}">${ct.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${D.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${Z}">${K!=null?`WoW ${Y} ${Math.abs(K).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${G}">${B==null?"MoM —":`MoM ${$} ${Math.abs(B).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const pt=a.slice(-10),ht=_e(k,pt),M=String(k.id||"").toLowerCase(),rt=M==="aircare"?30:M==="rac"?20:0;return Ho(b.slice(-10),pt,300,90,f,{fadeBeforeIdx:ht,baselineLabel:ht>0?"*Baseline 재설정":"",labelOffsetY:rt})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const pt=_e(k,C),M=String(k.id||"").toLowerCase()==="audio";return Ho(S,C,300,90,f,{fadeBeforeIdx:pt,baselineLabel:pt>0?"*Baseline 재설정":"",labelOffsetY:M?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${i==="en"?`vs ${k.compName}`:`${k.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(yt,120)}%;background:${vt}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${vt}">${yt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${u}">
      <div class="bu-header"><span class="bu-label">${u}</span><span class="bu-count">${d.length}${o.categories}</span></div>
      <div class="prod-grid">${m}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${p||""}${p?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${wn(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${h}${(()=>{const u=t.filter(d=>Se(d.id||d.category,r).length>0).map(d=>`${(d.id||"").toLowerCase()==="audio"||d.kr==="오디오"?"Audio-Sound Suite":d.kr}: ${Se(d.id||d.category,r).map(m=>pi(m,i)).join(", ")} ${i==="en"?"not launched":"미출시"}`);return(u.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${u.join(" / ")}</p>`:"")+yi(i)})()}</div>
  </div>`}function Ko(t,e,o,i){const r={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),c=Ee[r]||(r||"").toUpperCase(),l=i&&i[`${t.country}|${c}`],p=di(t.score,t.compScore),y=l?"#94A3B8":p==="lead"?"#15803D":p==="behind"?"#D97706":"#BE123C",h=+(t.score-t.compScore).toFixed(1),u=l?"#64748B":h>=0?"#15803D":"#BE123C",d=130,m=["TCL","HISENSE","HAIER"];let k="",b=0;t.allScores&&Object.entries(t.allScores).forEach(([N,V])=>{const z=String(N).toUpperCase();m.some(F=>z.includes(F))&&V>b&&(k=N,b=V)});const v=Math.max(e,b),w=l?1:t.score,x=Math.max(3,Math.round(w/v*d)),D=t.compScore>0?Math.max(3,Math.round(t.compScore/v*d)):0,P=b>0?Math.max(3,Math.round(b/v*d)):0,O="#9333EA",W=l?"—":t.score.toFixed(1),L=l?"—":`${h>=0?"+":""}${h}%p`;return`<div class="vbar-item${l?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${r}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${y}">${W}</span>
        <div class="vbar-col" style="height:${x}px;background:${y}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ue}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${D}px;background:${ue}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${b>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${O}">${b.toFixed(1)}</span>
        <div class="vbar-col" style="height:${P}px;background:${O}"></div>
        <span class="vbar-col-name" style="color:${O}">${k.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${u}">${L}</span>
    <span class="vbar-label">${o}</span>
  </div>`}function qo(t,e,o,i,a,r){if(!t||!t.length)return"";const c=new Map;t.forEach(m=>{c.has(m.product)||c.set(m.product,[]),c.get(m.product).push(m)});const l=e.cntyProductFilter||{},p=[...c.entries()].filter(([m])=>l[m]!==!1).map(([m,k])=>{const b=Math.max(...k.map(w=>Math.max(w.score,w.compScore)),1),v=k.map(w=>Ko(w,b,ro(w.country),a)).join("");return`<div class="cnty-product" data-group-product="${m}"><div class="bu-header"><span class="bu-label">${m}</span></div><div class="vbar-chart">${v}</div></div>`}).join(""),y=new Map;t.forEach(m=>{y.has(m.country)||y.set(m.country,[]),y.get(m.country).push(m)});const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],d=h.filter(m=>y.has(m)).concat([...y.keys()].filter(m=>!h.includes(m))).map(m=>{const k=y.get(m);if(!k)return"";const b=Math.max(...k.map(w=>Math.max(w.score,w.compScore)),1),v=k.map(w=>Ko(w,b,w.product,a)).join("");return`<div class="cnty-product" data-group-country="${m}"><div class="bu-header"><span class="bu-label">${ro(m)}</span></div><div class="vbar-chart">${v}</div></div>`}).join("");return`<div class="section-card cnty-section">
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
        <span class="legend"><i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical} <i style="background:${ue}"></i>Comp. <i style="background:#9333EA"></i>C-Brand</span>
      </div>
    </div>
    ${wn(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${d}</div>
      <div class="cnty-view-product" style="display:none">${p}</div>
      ${(()=>{if(!a||!Object.keys(a).length)return"";const m={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},b=[...new Set(t.map(v=>v.product))].map(v=>{const w=m[v]||String(v).toLowerCase(),x=Se(w,a),D=w==="audio"?"Audio-Sound Suite":v;return x.length?`${D}: ${x.join(", ")} ${i==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return b.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${b.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const Jo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function vi(t){const e=Jo[t]||Jo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(a=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${a.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${a.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Yo(t,e,o,i,a,r="weekly"){const c=r==="monthly",l=c?"prm":"pr";if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const p=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];let y;c?y=e&&e.length?e.slice():[]:y=e&&e.length?e.slice(-12):[];const h=[...new Set(t.map(F=>F.topic))].filter(Boolean),u=[...new Set(t.map(F=>F.type))].filter(Boolean),d=[...new Set(t.map(F=>F.country))].filter(F=>F&&F!=="TTL"),m=p.filter(F=>d.includes(F)).concat(p.filter(F=>!d.includes(F))),k=JSON.stringify(t).replace(/</g,"\\u003c"),b=JSON.stringify(y),v=JSON.stringify(h),w=JSON.stringify(u),x=JSON.stringify(m),D=72;function P(F){const j={};return F&&String(F).split(`
`).forEach(A=>{const _=A.indexOf("=");if(_>0){const K=A.slice(0,_).trim(),Y=A.slice(_+1).trim();K&&(j[K]=Y)}}),j}const O=P(i==null?void 0:i.prTopicPromptsRaw),W=(a==null?void 0:a.prTopicList)||[],L={},N={};W.forEach(F=>{[F.topic,F.topicRow,F.oldTopic].filter(Boolean).map(A=>A.trim()).forEach(A=>{F.explanation&&!L[A]&&(L[A]=F.explanation),F.bu&&!N[A]&&(N[A]=F.bu)})});const z={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...L,...P(i==null?void 0:i.prTopicDescsRaw)},H={};return h.forEach(F=>{const j=N[F];if(j)H[F]=j;else{const A=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];H[F]=A.some(_=>F.toLowerCase().includes(_.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Xt}">
    <!-- 필터 바 -->
    <div id="${l}-filters" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px;padding:10px 16px;background:#fff;border:1px solid #E8EDF2;border-radius:10px">
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Type":"유형"}</span>
        <div id="${l}-type-chips"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Country":"국가"}</span>
        <div id="${l}-cnty-chips" style="display:flex;gap:4px;flex-wrap:wrap"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"View":"보기"}</span>
        <div id="${l}-view-chips" style="display:flex;gap:4px"></div>
      </div>
    </div>
    <!-- NOTICE -->
    <div style="margin:0 0 24px;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
      <span style="display:block;font-size:14px;font-weight:700;color:${re};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
      <span style="font-size:15px;color:#fff;line-height:1.8">${(i==null?void 0:i.prNotice)||(o==="en"?'PR Visibility tracks how well "LG Electronics" is featured in AI search engine responses to queries related to our key business areas, product lines, and service topics. It monitors the visibility of our information versus competitors by major topic. For "Brand" type queries, items with Visibility below 100% indicate the need for GEO strategy review.':"PR Visibility 는 AI 검색 엔진 내 자사 주요 사업/제품군/서비스 토픽 관련 질의에 대한 답변에서 'LG전자'가 얼마나 잘 노출되는지를 추적합니다. 주요 토픽 별로 경쟁사 대비 자사 정보의 가시성을 모니터링 하며, '브랜드' 유형의 경우, Visibility 100% 미만 항목은 GEO 전략 검토가 필요함을 의미합니다.")}</span>
    </div>
    <!-- 상단 요약 매트릭스 -->
    <div class="section-card" style="margin-bottom:24px">
      <div class="section-header">
        <div class="section-title">${o==="en"?"PR Visibility Overview":"PR Visibility 현황"} <span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${e!=null&&e.length?e[e.length-1].toUpperCase():""} ${o==="en"?"data":"기준"}</span></div>
        <span class="legend"><i style="background:#15803D"></i>${o==="en"?"Lead ≥100%":"선도 ≥100%"} <i style="background:#D97706"></i>${o==="en"?"Behind ≥80%":"추격 ≥80%"} <i style="background:#BE123C"></i>${o==="en"?"Critical <80%":"취약 <80%"} <span style="color:#94A3B8;font-size:11px;margin-left:6px">${o==="en"?"() = vs #1 competitor":"() 는 1위 경쟁사 대비"}</span></span>
      </div>
      <div class="section-body" id="${l}-matrix"></div>
    </div>
    <!-- 토픽별 트렌드 -->
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${c?o==="en"?"Monthly Competitor Trend by Topic":"토픽별 월간 경쟁사 트렌드":o==="en"?"Weekly Competitor Trend by Topic":"토픽별 주간 경쟁사 트렌드"}</div>
        <span class="legend">${c?y.length?`${y[0]}–${y[y.length-1]} (${y.length}${o==="en"?" months":"개월"})`:"":y.length?`${y[0].toUpperCase()}–${y[y.length-1].toUpperCase()} (${y.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div class="section-body" id="${l}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${k},W=${b},TP=${v},TY=${w},CN=${x};
    var CW=${D};
    var TOPIC_CAT=${JSON.stringify(H)};
    var TOPIC_PROMPT=${JSON.stringify(O).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(z).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(W).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(Ne)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var fView='together';
    var RED='${re}',COMP='${ue}';
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
      var te=document.getElementById('${l}-type-chips');if(te)te.innerHTML=TY.map(function(t){return chip(t,fType===t,"_${l}SetType('"+t+"')")}).join(' ');
      var ce=document.getElementById('${l}-cnty-chips');if(!ce)return;
      var allOn=CN.every(function(c){return fCnty[c]});
      ce.innerHTML=chip('${o==="en"?"All":"전체"}',allOn,'_${l}CntyAll()')+' '+CN.map(function(c){return chip(cf(c),!!fCnty[c],"_${l}CntyTog('"+c+"')")}).join(' ');
      var ve=document.getElementById('${l}-view-chips');if(ve)ve.innerHTML=chip('${o==="en"?"By Country":"국가별 함께"}',fView==='together',"_${l}SetView('together')")+' '+chip('${o==="en"?"Total":"국가 Total"}',fView==='total',"_${l}SetView('total')");
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
      var el=document.getElementById('${l}-matrix');if(!el)return;
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
      var el=document.getElementById('${l}-sections');if(!el)return;
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
    window._${l}SetType=function(t){fType=t;renderAll()};
    window._${l}CntyTog=function(c){fCnty[c]=!fCnty[c];renderAll()};
    window._${l}CntyAll=function(){var on=CN.every(function(c){return fCnty[c]});CN.forEach(function(c){fCnty[c]=!on});renderAll()};
    window._${l}SetView=function(v){fView=v;renderAll()};
    renderAll();
  })();
  <\/script>`}function Xo(t,e,o,i,a,r){const c=(t||[]).filter(b=>!0);if(!c.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const l=e&&e.length?e.slice(-12):[],y=[...new Set(c.map(b=>b.stakeholder))].filter(Boolean).map(b=>({stakeholder:b,topics:[...new Set(c.filter(v=>v.stakeholder===b).map(v=>v.topic))].filter(Boolean)})),h=72,u=JSON.stringify(c).replace(/</g,"\\u003c"),d=JSON.stringify(l),m=JSON.stringify(y),k="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Xt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${a||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">${l.length?`${l[0].toUpperCase()}–${l[l.length-1].toUpperCase()} (${l.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${re};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(r==null?void 0:r.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${k}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${u},W=${d},GROUPS=${m};
    var CW=${h},RED='${re}';
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
  <\/script>`}function wi(t,e,o,i,a,r,c,l,p,y,h,u,d,m){var xt,pt,ht;d!=null&&d.llmModel&&d.llmModel!=="Total"&&(o=ln(o,d.llmModel),c=cn(c,d.llmModel),e=dn(e,d.monthlyVis,d.llmModel),d.monthlyVis&&(d={...d,monthlyVis:Jn(d.monthlyVis,d.llmModel)})),o=(o||[]).map(M=>({...M,weekly:(M.weekly||[]).map(rt=>rt??0),monthly:(M.monthly||[]).map(rt=>rt??0)})),y&&typeof y=="object"&&Object.values(y).forEach(M=>{!M||typeof M!="object"||Object.values(M).forEach(rt=>{!rt||typeof rt!="object"||Object.keys(rt).forEach(St=>{const Ft=rt[St];Array.isArray(Ft)&&(rt[St]=Ft.map(ot=>ot??0))})})});const k={aircare:"Xiaomi"};o=o.map(M=>{const rt=k[(M.id||"").toLowerCase()];if(!rt||!M.allScores)return M;const St=Object.entries(M.allScores).find(([q])=>q.toLowerCase()===rt.toLowerCase()&&q.toLowerCase()!=="lg");if(!St)return M;const Ft=St[1];if(!(Ft>0))return M;const ot=Math.round(M.score/Ft*100);return{...M,compName:St[0],vsComp:Ft,compRatio:ot,status:ot>=100?"lead":ot>=80?"behind":"critical"}});const b=(d==null?void 0:d.visibilityOnly)||!1,v=(d==null?void 0:d.includeReadability)===!0,w=(m==null?void 0:m.unlaunchedMap)||{},D=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${r}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,P=Oe[r]||Oe.ko;let O;if(p&&p.length)O=p.map(M=>String(M).toUpperCase().startsWith("W")?M.toUpperCase():M);else{const M=y?Math.max(...Object.values(y).flatMap(St=>Object.values(St).flatMap(Ft=>Object.values(Ft).map(ot=>(ot==null?void 0:ot.length)||0))),0):0,rt=t.weekStart||Math.max(1,M-11);O=Array.from({length:Math.max(12,M)},(St,Ft)=>`W${rt+Ft}`)}const W=new Set;y&&Object.values(y).forEach(M=>Object.keys(M).forEach(rt=>{rt!=="Total"&&W.add(rt)})),c&&c.forEach(M=>{M.country&&M.country!=="TTL"&&W.add(M.country)});const L=[...W].sort(),N=r==="en"?"All":"전체",V=["MS","HS","ES"],z=o.map(M=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${M.bu}" value="${M.id}" checked onchange="onFilterChange()"><span>${M.kr}</span></label>`).join(""),H=V.map(M=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${M}" checked onchange="onBuChange('${M}')"><span>${M}</span></label>`).join(""),F=L.map(M=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${M}" checked onchange="onFilterChange()"><span>${ro(M)}</span></label>`).join(""),j=Object.entries(no).map(([M,rt])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${M}" checked onchange="onRegionChange('${M}')"><span>${rt.labelEn}</span></label>`).join(""),A=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${r==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${r==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,_=d!=null&&d.weeklyLabelsFull&&d.weeklyLabelsFull.length===O.length?d.weeklyLabelsFull:O,K=O.map((M,rt)=>`<option value="${rt}"${rt===O.length-1?" selected":""}>${_[rt]||M}</option>`).join(""),Y=(((xt=o[0])==null?void 0:xt.monthlyScores)||[]).map(M=>{const rt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],St=String(M.date).match(/(\d{1,2})월/),Ft=String(M.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return St?rt[parseInt(St[1])-1]:Ft?Ft[1].charAt(0).toUpperCase()+Ft[1].slice(1).toLowerCase():M.date}),Z=Y.map((M,rt)=>`<option value="${rt}"${rt===Y.length-1?" selected":""}>${M}</option>`).join(""),f=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Xt}`,Q=new Set(["Total"]);(o||[]).forEach(M=>(M.monthlyScores||[]).forEach(rt=>Object.keys(rt.byLlm||{}).forEach(St=>Q.add(St)))),(c||[]).forEach(M=>(M.monthlyScores||[]).forEach(rt=>Object.keys(rt.byLlm||{}).forEach(St=>Q.add(St)))),((d==null?void 0:d.monthlyVis)||[]).forEach(M=>{M.llmModel&&Q.add(M.llmModel)});const U=["Total",...Array.from(Q).filter(M=>M!=="Total").sort((M,rt)=>M.localeCompare(rt))],mt=(d==null?void 0:d.llmModel)||"Total",T=U.map(M=>`<option value="${M}"${M===mt?" selected":""}>${M}</option>`).join(""),C=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${A}
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${O[O.length-1]} ${r==="en"?"data":"기준"}</span>
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
      <div class="fl-group" id="vis-week-select-group"${O.length>1?"":' style="display:none"'}>
        <span class="fl-label">${r==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${f}">${K}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${r==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${f}"${Y.length>0?"":" disabled"}>${Z||"<option>—</option>"}</select>
      </div>
      <div class="fl-group" id="vis-llm-select-group" style="display:none">
        <span class="fl-label">LLM Model</span>
        <select id="vis-llm-select" onchange="switchLlmModel(this.value)" style="${f};opacity:0.55;cursor:not-allowed" disabled>${T}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${N}</span></label>
        ${H}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${N}</span></label>
        ${z}
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">Region</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="region" checked onchange="toggleAll(this,'region')"><span>${N}</span></label>
        ${j}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${r==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${N}</span></label>
        ${F}
      </div>
    </div>
  </div>`,S=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${r==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${ci(t.noticeText)}</div></div>`:"",B=[S,t.showTotal!==!1?Vo(e,t,P,r,"weekly"):""].join(""),$=[S,t.showTotal!==!1?Vo(e,t,P,r,"monthly"):""].join(""),G=[];if(y&&Object.keys(y).length){const M=eo;Object.entries(y).forEach(([rt,St])=>{const Ft=o.find(q=>q.id===rt),ot=(Ft==null?void 0:Ft.kr)||M[rt]||rt;Object.entries(St).forEach(([q,st])=>{if(q==="Total"||q==="TTL"||q==="TOTAL")return;const Mt=st.LG||st.lg||[],It=Mt.length>0?Mt[Mt.length-1]:0;if(It<=0)return;let Ut="",Ht=0;Object.entries(st).forEach(([Kt,Dt])=>{if(Kt==="LG"||Kt==="lg")return;const Qt=Array.isArray(Dt)&&Dt.length?Dt[Dt.length-1]:0;Qt>Ht&&(Ht=Qt,Ut=Kt)});const Wt=+(It-Ht).toFixed(1),Zt={};Object.entries(st).forEach(([Kt,Dt])=>{if(Array.isArray(Dt)&&Dt.length){const Qt=Dt[Dt.length-1];Qt!=null&&(Zt[Kt]=Qt)}}),G.push({product:ot,country:q,score:It,compName:Ut,compScore:Ht,gap:Wt,allScores:Zt})})})}const yt=((pt=d==null?void 0:d.weeklyLabelsFull)==null?void 0:pt[d.weeklyLabelsFull.length-1])||O[O.length-1]||"",vt=yt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${yt} ${r==="en"?"data":"기준"}</span>`:"",ft=[B,t.showProducts!==!1?Wo(o,t,P,r,O,w,(d==null?void 0:d.monthlyVis)||[],y,vt):"",`<div id="trend-container">${bi(o,y,O,P,r,w,vt)}</div>`,t.showCnty!==!1?qo(G,t,P,r,w,vt):""].join(""),bt=o.map(M=>{const rt=M.monthlyScore||M.score,St=M.monthlyPrev||M.prev,Ft=M.vsComp||0,ot=Ft>0?rt/Ft*100:100;return{...M,score:rt,prev:St,weeklyScore:rt,weeklyPrev:St,monthlyScore:rt,monthlyPrev:St,weekly:(M.monthlyScores||[]).map(q=>q.score),status:ot>=100?"lead":ot>=80?"behind":"critical"}}),Ct=(((ht=o[0])==null?void 0:ht.monthlyScores)||[]).map(M=>{const rt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],St=String(M.date).match(/(\d{1,2})월/),Ft=String(M.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return St?rt[parseInt(St[1])-1]:Ft?Ft[1].charAt(0).toUpperCase()+Ft[1].slice(1).toLowerCase():M.date}),Tt=(d==null?void 0:d.monthlyVis)||[],R=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",X=[$,t.showProducts!==!1?Wo(bt,t,P,r,Ct.length?Ct:["Feb","Mar"],w,Tt,{},R):"",`<div id="monthly-trend-container">${xi(bt,Tt,P,r,w,R)}</div>`,t.showCnty!==!1?qo(c,t,P,r,w,R):""].join(""),ct=`border:none;border-radius:6px;padding:6px 18px;font-size:14px;font-weight:700;cursor:pointer;font-family:${Xt}`,at=`
    <div style="max-width:1400px;margin:0 auto;padding:16px 40px 0">
      <div style="display:inline-flex;gap:2px;background:#1E293B;border-radius:8px;padding:3px">
        <button id="pr-period-w-btn" onclick="switchPRPeriod('weekly')" style="${ct};background:#fff;color:#0F172A">${r==="en"?"Weekly":"주간"}</button>
        <button id="pr-period-m-btn" onclick="switchPRPeriod('monthly')" style="${ct};background:transparent;color:#94A3B8">${r==="en"?"Monthly":"월간"}</button>
      </div>
    </div>
    <div id="pr-period-weekly">${Yo(m==null?void 0:m.weeklyPR,m==null?void 0:m.weeklyPRLabels,r,t,m)}</div>
    <div id="pr-period-monthly" style="display:none">${Yo(m==null?void 0:m.monthlyPR,m==null?void 0:m.monthlyPRLabels,r,t,m,"monthly")}</div>`;return`<!DOCTYPE html>
<html lang="${r==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${ii({FONT:Xt,RED:re,COMP:ue})}</style>
</head>
<body>
${b?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${r==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${C.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${ft}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${X}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${at}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Xo(m==null?void 0:m.weeklyBrandPrompt,m==null?void 0:m.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
</div>
`:`
<div class="tab-bar">
  <div style="display:flex;gap:4px;align-items:center">
    <button class="tab-btn active" onclick="switchTab('visibility')">Visibility</button>
    <button class="tab-btn" onclick="switchTab('citation')">Citation</button>
    ${v?`<button class="tab-btn" onclick="switchTab('readability')">Readability</button>`:""}
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
    <div id="bu-weekly-content" class="dash-container">${ft}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${X}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${at}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Xo(m==null?void 0:m.weeklyBrandPrompt,m==null?void 0:m.weeklyBrandPromptLabels,r,null,r==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
${v?`<div id="tab-readability" class="tab-panel">
  <!--READABILITY_EMBED-->
  <iframe id="readability-iframe" data-src="/p/GEO-KPI-Dashboard-${r==="en"?"EN":"KO"}-readability" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Readability"></iframe>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${D}
</div>
<div id="tab-glossary" class="tab-panel">
  ${vi(r)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${P.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${hi({lang:r,weeklyAll:y,products:o,productsCnty:c,ulMap:w,monthlyVis:d==null?void 0:d.monthlyVis,total:e,meta:t,wLabels:O})}
<\/script>
</body>
</html>`}function Ci(t){const e=t.filter(p=>p.status==="lead"),o=t.filter(p=>p.status==="behind"),i=t.filter(p=>p.status==="critical"),a=[...t].sort((p,y)=>y.score-p.score)[0],r=[...t].sort((p,y)=>p.score-y.score)[0],c=(t.reduce((p,y)=>p+y.score,0)/t.length).toFixed(1),l=[];return l.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${c}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${i.length}개로 분류됩니다.`),a&&l.push(`가장 높은 카테고리는 ${a.kr} ${a.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${r.kr} ${r.score.toFixed(1)}%로 상·하위 간 ${(a.score-r.score).toFixed(1)}%p의 편차가 존재합니다.`),i.length?l.push(`취약 카테고리(${i.map(p=>p.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&l.push(`추격 카테고리(${o.map(p=>p.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),l.join(" ")}function ki(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function Si(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const Cn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ye={year:2026,month:2,vol:3};function kn(t){const e=String(t||"").trim();if(!e)return null;let o=null,i=null;const a=e.match(/(\d{4})/);if(a)o=parseInt(a[1]);else{const c=e.match(/(\d{2})년/);c&&(o=2e3+parseInt(c[1]))}const r=e.match(/(\d{1,2})\s*월/);if(r)i=parseInt(r[1]);else{const c=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(c)i=Cn.findIndex(l=>l.toLowerCase()===c[1].toLowerCase())+1;else{const l=e.match(/\d{4}[-/](\d{1,2})/);l&&(i=parseInt(l[1]))}}return!o||!i||i<1||i>12?null:{year:o,month:i}}function io(t){const e=kn(t);if(!e)return null;const o=(e.year-Ye.year)*12+(e.month-Ye.month),i=Ye.vol+o;return i<1?null:`Vol.${String(i).padStart(2,"0")}`}function Fi(t){const e=kn(t);return e?e.month===1?{year:e.year-1,month:12}:{year:e.year,month:e.month-1}:null}function Sn(t,e="en"){const o=Fi(t);return o?e==="ko"?`${o.year}년 ${o.month}월 기준`:`As of ${Cn[o.month-1]} ${o.year}`:null}function Zo(t){const e={},o=io(t);o&&(e.reportNo=o);const i=Sn(t,"en");return i&&(e.dateLine=i),e}const He=["title","dateLine","noticeText","totalInsight","reportType","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","todoText","todoNotice","kpiLogicText","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","period","team","reportNo","monthlyReportBody","highlightInsight","bumpInsight","hlChapterTitle","hlWeeklyTitle","hlModelTitle","hlBumpTitle","semiHighlightText"],Fn=["v2ExIntro2","v2Ex1T2","v2Ex1B2","v2Ex2T2","v2Ex2B2","v2Ex3T2","v2Ex3B2","v2T11Caption","v2CaseCaption","v2C1Title","v2C1Keep","v2C1Bko","v2C1Tko","v2C2Title4","v2C2Keep2","v2C2Bko4","v2C2Tko4","v2VisTblHtml8","todoV2Title","todoV2NoticeLabel","todoV2NoticeHtml","todoV2PerfTitle","todoV2ChBu","todoV2NewBu","todoV2FixBu","todoV2TechBu","todoV2NextSecTitle","todoV2NextTitle","todoV2NextHtml3"];He.push(...Fn);const Ti=["rd_h1","rd_intro","rd_introNotes","rd_summary","rd_areaIntro","rd_h2","rd_d1Title","rd_d1","rd_d1Notes","rd_d2Title","rd_d2","rd_d3Title","rd_d3","rd_d4Title","rd_d4"];He.push(...Ti);const Ei=["v3Ex1T","v3Ex1B","v3Ex2T","v3Ex2B"];He.push(...Ei);function Ai(t,e){return t.startsWith("rd_")&&(typeof e=="string"||e==null)}function Xe({label:t,value:e,options:o,onSelect:i,accent:a=Bt}){return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:[n.jsx("span",{style:{width:66,flexShrink:0,fontSize:11,color:"#64748B",fontFamily:E},children:t}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:o.map(r=>{const c=e===r.value;return n.jsx("button",{onClick:()=>i(r.value),title:r.hint||"",style:{padding:"3px 9px",borderRadius:4,border:"none",cursor:"pointer",background:c?r.accent||a:"#1E293B",color:c?"#FFFFFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:E},children:r.label},r.value)})})]})}function Li({label:t,items:e,meta:o,setMeta:i}){return n.jsxs("div",{style:{marginBottom:12},children:[n.jsx("p",{style:{margin:"0 0 6px 2px",fontSize:10,fontWeight:700,color:"#64748B",letterSpacing:.5,fontFamily:E},children:t}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:e.map(({key:a,label:r})=>n.jsx("button",{onClick:()=>i(c=>({...c,[a]:!c[a]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:o[a]?Bt:"#1E293B",color:o[a]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:r},a))})]})}const Qo=[{value:"",label:"표시 안 함",keys:[]},{value:"2026-06",label:"6월 하이라이트 인사이트",keys:["showInsightV2"]},{value:"2026-07",label:"7월 하이라이트",keys:["showHighlight","showReadability"]}],tn=[{value:"",label:"표시 안 함",keys:[]},{value:"2026-08",label:"8월 Executive Summary",keys:["showInsightV3","showTotal"]}],$i=["showInsightV3","showTotal","showTotalInsight"];function en(t,e){const o=t.find(i=>i.keys.length&&i.keys.every(a=>e[a]));return o?o.value:""}function on({label:t,value:e,variants:o,allKeys:i,setMeta:a}){const r=i||[...new Set(o.flatMap(c=>c.keys))];return n.jsxs("div",{style:{marginBottom:12},children:[n.jsx("p",{style:{margin:"0 0 6px 2px",fontSize:10,fontWeight:700,color:"#64748B",letterSpacing:.5,fontFamily:E},children:t}),n.jsx("select",{value:e,onChange:c=>{const l=o.find(p=>p.value===c.target.value);a(p=>{const y={...p};return r.forEach(h=>{y[h]=!1}),((l==null?void 0:l.keys)||[]).forEach(h=>{y[h]=!0}),y})},style:{width:"100%",padding:"6px 8px",borderRadius:6,cursor:"pointer",background:"#1E293B",color:"#E2E8F0",border:"1px solid #334155",fontSize:11,fontWeight:700,fontFamily:E},children:o.map(c=>n.jsx("option",{value:c.value,children:c.label},c.value))})]})}const Bi=[{label:"비저빌리티",items:[{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"}]},{label:"사이테이션",items:[{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showTouchPointsBump",label:"외부채널 범프차트"},{key:"showTouchPointsBumpChatGpt",label:"외부채널 모델별(3개)"},{key:"showDomainBumpModels",label:"도메인 모델별(3개)"},{key:"showLlmShare",label:"모델별 인용비중"}]},{label:"닷컴",items:[{key:"showDotcom",label:"닷컴"},{key:"showDotcomChatGpt",label:"닷컴 Chat-GPT"}]},{label:"Action Plan",items:[{key:"showTodo",label:"Action Plan"},{key:"showTodoV2",label:"액션 아이템 V2"}]}];function nn({children:t}){return n.jsx("p",{style:{margin:"14px 0 8px 2px",fontSize:10,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:t})}function Ze(t,e){const o={...t};return He.forEach(i=>{o[i]=e==null?void 0:e[i]}),new Set([...Object.keys(t||{}),...Object.keys(e||{})]).forEach(i=>{Ai(i,t==null?void 0:t[i])&&(o[i]=e==null?void 0:e[i])}),o}function Ii(t,e){const o=/<body[^>]*>([\s\S]*)<\/body>/i,i=(e.match(o)||[])[1];if(!i)return console.warn("[mergeBilingualEmail] EN <body> 추출 실패 — KO 단독 발송"),t;const a=`
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0;background:#F1F5F9;">
    <tr><td align="center" style="padding:28px 16px;">
      <div style="border-top:2px dashed #CBD5E1;max-width:600px;margin:0 auto;padding-top:18px;font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif;font-size:12px;font-weight:700;color:#64748B;letter-spacing:2px;">&#9660;&nbsp;&nbsp;ENGLISH VERSION&nbsp;&nbsp;&#9660;</div>
    </td></tr>
  </table>`;return/<\/body>/i.test(t)?t.replace(/<\/body>/i,`${a}${i}</body>`):(console.warn("[mergeBilingualEmail] KO </body> 미발견 — 단순 연결"),t+a+i)}function Ri({mode:t,meta:e,setMeta:o,metaKo:i,setMetaKo:a,metaEn:r,setMetaEn:c,total:l,setTotal:p,products:y,setProducts:h,citations:u,setCitations:d,dotcom:m,setDotcom:k,productsCnty:b,setProductsCnty:v,citationsCnty:w,setCitationsCnty:x,resolved:D,previewLang:P,setPreviewLang:O,snapshots:W,setSnapshots:L,setWeeklyLabels:N,setWeeklyAll:V,weeklyLabels:z,weeklyAll:H,citationsByCnty:F,dotcomByCnty:j,generateHTML:A,publishEndpoint:_,setMonthlyVis:K,onSyncExtra:Y,categoryStats:Z,extra:f,monthlyVis:Q,progressMonth:U,setProgressMonth:mt,progressDataMonth:T,editMode:C=!1,setEditMode:S}){const B=dt.useRef({products:y,productsCnty:b,citations:u,citationsCnty:w,total:l,dotcom:m,extra:f});B.current={products:y,productsCnty:b,citations:u,citationsCnty:w,total:l,dotcom:m,extra:f};function $(){return B.current}const[G,yt]=dt.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[vt,ft]=dt.useState(!1),[bt,Ct]=dt.useState(null),[Tt,R]=dt.useState(""),[X,ct]=dt.useState(""),[at,xt]=dt.useState(!1),[pt,ht]=dt.useState(""),[M,rt]=dt.useState(!1),[St,Ft]=dt.useState(!1),[ot,q]=dt.useState(!1),[st,Mt]=dt.useState(!1),[It,Ut]=dt.useState(""),[Ht,Wt]=dt.useState(!1),[Zt,Kt]=dt.useState(!0),[Dt,Qt]=dt.useState(""),[ie,we]=dt.useState(null),[fe,Ae]=dt.useState([]),Pt=t==="newsletter",[Jt,Tn]=dt.useState(()=>{const s=new Date;return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}`});function Ve(){Pt&&fetch("/api/publish").then(s=>s.ok?s.json():null).then(s=>{s&&Array.isArray(s.months)&&Ae(s.months)}).catch(()=>{})}dt.useEffect(()=>{if(Pt){Ve();return}fetch(_||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(g=>g.ok?g.json():null).then(we).catch(()=>{})},[t,_,Pt]);const En=(()=>{const s=new Set,g=new Date;for(let J=0;J<24;J++){const Lt=new Date(g.getFullYear(),g.getMonth()-J,1);s.add(`${Lt.getFullYear()}-${String(Lt.getMonth()+1).padStart(2,"0")}`)}for(const J of fe)s.add(J.month);return Jt&&s.add(Jt),[...s].sort((J,Lt)=>Lt.localeCompare(J))})();function Le(s){const[g,J]=s.split("-");return`${g}년 ${parseInt(J,10)}월`}const[An,go]=dt.useState(null);dt.useEffect(()=>{let s=!0;const g=()=>$o(t).then(Lt=>{s&&go(Lt)});g();const J=setInterval(g,6e4);return()=>{s=!1,clearInterval(J)}},[t]);function Ln(){$o(t).then(go)}async function $n(){if(!st){Mt(!0),Ut("");try{const s=$(),g=xe(s.products,s.productsCnty,s.citations,s.citationsCnty,"ko"),J=xe(s.products,s.productsCnty,s.citations,s.citationsCnty,"en");let Lt,qt,nt;if(t==="dashboard"){const it=Q||[],ut=s.extra||f||{};Lt=A(i,s.total,g.products,g.citations,s.dotcom,"ko",g.productsCnty,g.citationsCnty,z,H,F,j,it,ut),qt=A(Ze(i,r),s.total,J.products,J.citations,s.dotcom,"en",J.productsCnty,J.citationsCnty,z,H,F,j,it,ut),nt=`${i.period||""} ${i.title||"KPI Dashboard"}`.trim()}else Lt=A(i,s.total,g.products,g.citations,m,"ko",g.productsCnty,g.citationsCnty,{weeklyLabels:z,weeklyAll:H,categoryStats:Z,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null}),qt=A(Ze(i,r),s.total,J.products,J.citations,m,"en",J.productsCnty,J.citationsCnty,{weeklyLabels:z,weeklyAll:H,categoryStats:Z,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null}),nt=`${i.period||""} ${i.title||"Newsletter"}`.trim();const oe=_||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),I={title:nt,htmlKo:Lt,htmlEn:qt};Pt&&(I.month=Jt);const zt=await(await fetch(oe,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(I)})).json();if(!zt.ok)throw new Error(zt.error||"게시 실패");if(we({...zt,published:!0}),Pt&&Ve(),t==="dashboard")try{const it=await Pe(t)||{},ut=s.extra||f||{};Bo(t,{...it,meta:i,total:s.total,weeklyPR:ut.weeklyPR||it.weeklyPR,weeklyPRLabels:ut.weeklyPRLabels||it.weeklyPRLabels,monthlyPR:ut.monthlyPR||it.monthlyPR,monthlyPRLabels:ut.monthlyPRLabels||it.monthlyPRLabels,weeklyBrandPrompt:ut.weeklyBrandPrompt||it.weeklyBrandPrompt,weeklyBrandPromptLabels:ut.weeklyBrandPromptLabels||it.weeklyBrandPromptLabels})}catch{}const Gt=`${window.location.origin}${zt.urls.ko}`,et=`${window.location.origin}${zt.urls.en}`;try{await navigator.clipboard.writeText(Gt+`
`+et)}catch{}Ut(`KO: ${Gt}
EN: ${et}`)}catch(s){Ut("ERROR:"+s.message)}finally{Mt(!1),setTimeout(()=>Ut(""),2e4)}}}async function Bn(){if(!Ht){Wt(!0),Qt("");try{const s=await Sr(wi,xe,{includeProgressTracker:Zt});Qt(`통합 게시 완료!
KO: ${window.location.origin}${s.urls.ko}
EN: ${window.location.origin}${s.urls.en}`)}catch(s){Qt("ERROR: "+s.message)}finally{Wt(!1),setTimeout(()=>Qt(""),15e3)}}}async function yo(s){try{const g=_||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),J=Pt?`${g}?month=${encodeURIComponent(s||Jt)}`:g;(await(await fetch(J,{method:"DELETE"})).json()).ok&&(Pt?Ve():we(null))}catch{}}async function In(){if(P!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}Ft(!0)}async function bo(s){Ft(!1),q(!0);const g=(s==null?void 0:s.products)??y,J=(s==null?void 0:s.productsCnty)??b,Lt=(s==null?void 0:s.citations)??u,qt=(s==null?void 0:s.citationsCnty)??w;try{const nt=i,oe=[nt.title||"",nt.dateLine||"",nt.noticeText||"",nt.totalInsight||"",nt.reportType||"",nt.productInsight||"",nt.productHowToRead||"",nt.citationInsight||"",nt.citationHowToRead||"",nt.dotcomInsight||"",nt.dotcomHowToRead||"",nt.todoText||"",nt.todoNotice||"",nt.kpiLogicText||"",nt.cntyInsight||"",nt.cntyHowToRead||"",nt.citDomainInsight||"",nt.citDomainHowToRead||"",nt.citCntyInsight||"",nt.citCntyHowToRead||"",nt.citPrdInsight||"",nt.citPrdHowToRead||"",nt.period||"",nt.team||"",nt.reportNo||"",nt.monthlyReportBody||""],I=g.map(lt=>lt.kr||""),te=g.map(lt=>lt.compName||""),zt=Lt.map(lt=>lt.category||""),Gt=[...new Set(J.map(lt=>lt.country||""))],et=[...new Set(J.map(lt=>lt.product||""))],it=[...new Set(J.map(lt=>lt.compName||""))],ut=[...new Set(qt.map(lt=>lt.cnty||"").filter(lt=>lt&&lt!=="TTL"))],At=Fn.filter(lt=>nt[lt]!=null&&String(nt[lt]).trim()!==""),$t=At.map(lt=>String(nt[lt])),jt=[...oe,...I,...te,...zt,...Gt,...et,...it,...ut,...$t].map(lt=>lt||" "),kt=await Tr(jt,{from:"ko",to:"en"});let gt=0;const ae={...i,title:kt[gt++]||nt.title,dateLine:kt[gt++]||nt.dateLine,noticeText:kt[gt++]||nt.noticeText,totalInsight:kt[gt++]||nt.totalInsight,reportType:kt[gt++]||nt.reportType,productInsight:kt[gt++]||nt.productInsight,productHowToRead:kt[gt++]||nt.productHowToRead,citationInsight:kt[gt++]||nt.citationInsight,citationHowToRead:kt[gt++]||nt.citationHowToRead,dotcomInsight:kt[gt++]||nt.dotcomInsight,dotcomHowToRead:kt[gt++]||nt.dotcomHowToRead,todoText:kt[gt++]||nt.todoText,todoNotice:kt[gt++]||nt.todoNotice,kpiLogicText:kt[gt++]||nt.kpiLogicText,cntyInsight:kt[gt++]||nt.cntyInsight,cntyHowToRead:kt[gt++]||nt.cntyHowToRead,citDomainInsight:kt[gt++]||nt.citDomainInsight,citDomainHowToRead:kt[gt++]||nt.citDomainHowToRead,citCntyInsight:kt[gt++]||nt.citCntyInsight,citCntyHowToRead:kt[gt++]||nt.citCntyHowToRead,citPrdInsight:kt[gt++]||nt.citPrdInsight,citPrdHowToRead:kt[gt++]||nt.citPrdHowToRead,period:(gt++,nt.period),team:kt[gt++]||nt.team,reportNo:(gt++,nt.reportNo),monthlyReportBody:kt[gt++]||nt.monthlyReportBody},se=lt=>lt&&lt.replace(/\b\w/g,wt=>wt.toUpperCase()),ee=lt=>(lt||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),me={};g.forEach((lt,wt)=>{me[lt.id]={en:se(kt[gt+wt]||lt.kr),compNameEn:ee(kt[gt+I.length+wt]||lt.compName)}}),gt+=I.length+te.length;const $e={};Lt.forEach((lt,wt)=>{$e[`${lt.rank}_${lt.source}`]=se(kt[gt+wt]||lt.category)}),gt+=zt.length;const Ce={};Gt.forEach((lt,wt)=>{Ce[lt]=/^[A-Z]{2,3}$/.test(lt)?lt:kt[gt+wt]||lt}),gt+=Gt.length;const ke={};et.forEach((lt,wt)=>{ke[lt]=kt[gt+wt]||lt}),gt+=et.length;const xo={};it.forEach((lt,wt)=>{xo[lt]=kt[gt+wt]||lt}),gt+=it.length;const vo={};ut.forEach((lt,wt)=>{vo[lt]=/^[A-Z]{2,3}$/.test(lt)?lt:kt[gt+wt]||lt}),gt+=ut.length,At.forEach((lt,wt)=>{ae[lt]=kt[gt+wt]||nt[lt]}),c(ae),h(lt=>lt.map(wt=>{var wo,Co;return{...wt,en:((wo=me[wt.id])==null?void 0:wo.en)||wt.en||wt.kr,compNameEn:((Co=me[wt.id])==null?void 0:Co.compNameEn)||wt.compNameEn||wt.compName}})),d(lt=>lt.map(wt=>({...wt,categoryEn:$e[`${wt.rank}_${wt.source}`]||wt.categoryEn||wt.category}))),v(lt=>lt.map(wt=>({...wt,countryEn:se(Ce[wt.country]||wt.country),productEn:se(ke[wt.product]||wt.product),compNameEn:ee(xo[wt.compName]||wt.compName)}))),x(lt=>lt.map(wt=>({...wt,cntyEn:wt.cnty==="TTL"?"TTL":se(vo[wt.cnty]||wt.cnty)}))),q(!1)}catch(nt){alert("번역 오류: "+nt.message),q(!1)}}async function Rn(){const s=A(e,l,D.products,D.citations,m,P,D.productsCnty,D.citationsCnty);try{await navigator.clipboard.writeText(s)}catch{const g=document.createElement("textarea");g.value=s,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g)}xt(!0),setTimeout(()=>xt(!1),2500)}async function jn(){await Or(e,l,y,u,m)}async function Mn(){if(M!=="sending"){rt("sending");try{const s=$(),g=xe(s.products,s.productsCnty,s.citations,s.citationsCnty,"ko"),J=xe(s.products,s.productsCnty,s.citations,s.citationsCnty,"en"),Lt={weeklyLabels:z,weeklyAll:H,categoryStats:Z,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null},qt=Ze(i,r),nt=A(i,s.total,g.products,g.citations,s.dotcom,"ko",g.productsCnty,g.citationsCnty,Lt),oe=A(qt,s.total,J.products,J.citations,s.dotcom,"en",J.productsCnty,J.citationsCnty,Lt),I=Ii(nt,oe),te=`[LG GEO] ${i.title} · ${i.period} (KO/EN)`,Gt=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:pt.trim(),subject:te,html:I})})).json();if(!Gt.ok)throw new Error(Gt.error||"발송 실패");rt("ok"),setTimeout(()=>rt(!1),4e3)}catch(s){rt("error"),R(s.message),setTimeout(()=>{rt(!1),R("")},5e3)}}}async function Pn(){var J,Lt,qt,nt,oe;if(vt)return;const s=ti(G.trim());if(!s){Ct("error"),R("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Ct(null),3e3);return}ft(!0),Ct(null),R(""),ct("");const g=[];try{const I=await oi(s,et=>R(et));if(g.push(`[Sync] parsed keys: ${Object.keys(I).join(", ")||"(없음)"}`),I.meta&&g.push(`[Sync] meta keys: ${Object.keys(I.meta).join(", ")}`),I.productsPartial&&g.push(`[Sync] products: ${I.productsPartial.length}건`),g.push(`[Sync] citations: ${((J=I.citations)==null?void 0:J.length)??0}건`),g.push(`[Sync] citationsCnty: ${((Lt=I.citationsCnty)==null?void 0:Lt.length)??0}건`),g.push(`[Sync] dotcom: ${I.dotcom?"OK":"(없음)"}`),g.push(`[Sync] productsCnty: ${((qt=I.productsCnty)==null?void 0:qt.length)??0}건`),I.meta){const et=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"];a(it=>{const ut={...it};for(const[At,$t]of Object.entries(I.meta))et.includes(At)&&it[At]||(ut[At]=$t);return ut}),c(it=>({...it,period:I.meta.period,dateLine:I.meta.dateLine,reportNo:I.meta.reportNo}))}if(I.citations&&(d(I.citations),B.current={...B.current,citations:I.citations}),I.dotcom&&(k(et=>({...et,...I.dotcom})),B.current={...B.current,dotcom:{...B.current.dotcom,...I.dotcom}}),I.productsCnty&&(v(I.productsCnty),B.current={...B.current,productsCnty:I.productsCnty}),I.citationsCnty&&(x(I.citationsCnty),B.current={...B.current,citationsCnty:I.citationsCnty}),I.monthlyVis&&K&&K(I.monthlyVis),Y){const et={weeklyPR:I.weeklyPR||null,weeklyPRLabels:I.weeklyPRLabels||null,monthlyPR:I.monthlyPR||null,monthlyPRLabels:I.monthlyPRLabels||null,weeklyBrandPrompt:I.weeklyBrandPrompt||null,weeklyBrandPromptLabels:I.weeklyBrandPromptLabels||null,unlaunchedMap:I.unlaunchedMap||null,weeklyLabelsFull:I.weeklyLabelsFull||null,prTopicList:I.prTopicList||null,citTouchPointsTrend:I.citTouchPointsTrend||null,citTrendMonths:I.citTrendMonths||null,citDomainTrend:I.citDomainTrend||null,citDomainMonths:I.citDomainMonths||null,citTouchPointsByLlm:I.citTouchPointsByLlm||null,citDomainByLlm:I.citDomainByLlm||null,citDomainByLlmTrend:I.citDomainByLlmTrend||null,dotcomByLlm:I.dotcomByLlm||null};Y(et),B.current={...B.current,extra:{...B.current.extra,...et}}}const te=I.weeklyLabels||((nt=I.meta)==null?void 0:nt.weeklyLabels);console.log("[SYNC] weeklyLabels:",te,"weeklyLabelsFull:",I.weeklyLabelsFull),te&&te.length&&N(te),I.weeklyAll&&V(et=>({...et,...I.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(I));const zt=I.weeklyMap?Object.keys(I.weeklyMap):[],Gt=((oe=I.productsPartial)==null?void 0:oe.map(et=>et.id))||[];if(console.log("[SYNC] weeklyMap keys:",zt.length?zt:"NONE"),console.log("[SYNC] productsPartial IDs:",Gt.length?Gt:"NONE"),zt.length&&Gt.length){const et=Gt.filter(ut=>!zt.includes(ut)),it=zt.filter(ut=>!Gt.includes(ut));et.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",et),it.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",it),!et.length&&!it.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(I.productsPartial){const et=I.productsPartial.map(it=>{var Ce;const ut=((Ce=I.weeklyMap)==null?void 0:Ce[it.id])||[],At=ut.filter(ke=>ke!=null&&ke>0),$t=it.score,jt=it.prev||0,kt=it.vsComp>0?Math.round($t/it.vsComp*100):100,gt=At.length>0?At[At.length-1]:$t,ae=At.length>=2?At[At.length-2]:0,se=$t,ee=jt,me=kt,$e=jt>0&&jt!==$t?[jt,$t]:[];return{...it,score:se,prev:ee,weekly:ut,monthly:$e,weeklyScore:gt,weeklyPrev:ae,monthlyScore:$t,monthlyPrev:jt,compRatio:me,status:me>=100?"lead":me>=80?"behind":"critical"}});h(et),B.current={...B.current,products:et}}else I.weeklyMap&&h(et=>et.map(it=>{var At;const ut=(At=I.weeklyMap)==null?void 0:At[it.id];return ut?{...it,weekly:ut}:it}));if(I.total){const et={...B.current.total,...I.total,...I.buTotals?{buTotals:I.buTotals}:{},...I.buTotalsPrev?{buTotalsPrev:I.buTotalsPrev}:{},...I.countryTotals?{countryTotals:I.countryTotals}:{},...I.countryTotalsPrev?{countryTotalsPrev:I.countryTotalsPrev}:{}};p(it=>({...it,...et})),B.current={...B.current,total:et}}{let et=function(jt){if(!jt)return 0;const kt=String(jt).trim(),gt=kt.match(/(\d{1,2})월/);if(gt){const ee=parseInt(gt[1]);return ee>=1&&ee<=12?ee:0}const ae=kt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(ae)return At[ae[1].toLowerCase()]||0;const se=kt.match(/\d{4}[-\/](\d{1,2})/);if(se){const ee=parseInt(se[1]);return ee>=1&&ee<=12?ee:0}return 0};const it=new Date().getFullYear(),ut=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],At={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let $t=0;if(I.derivedPeriod){const jt=et(I.derivedPeriod);jt>$t&&($t=jt)}if(I.citDerivedPeriod){const jt=et(I.citDerivedPeriod);jt>$t&&($t=jt)}$t>0&&$t<=12&&(a(jt=>({...jt,period:`${it}년 ${$t}월`})),c(jt=>({...jt,period:`${ut[$t]} ${it}`})))}if(!I.total&&I.productsPartial&&I.productsPartial.length>0){const et=I.productsPartial,it=+(et.reduce((At,$t)=>At+$t.score,0)/et.length).toFixed(1),ut=+(et.reduce((At,$t)=>At+($t.vsComp||0),0)/et.length).toFixed(1);p(At=>({...At,score:it,vsComp:ut,rank:it>=ut?1:2}))}if(setTimeout(()=>{Bo(t,{meta:I.meta||null,total:I.total?{...I.total,...I.buTotals?{buTotals:I.buTotals}:{},...I.buTotalsPrev?{buTotalsPrev:I.buTotalsPrev}:{},...I.countryTotals?{countryTotals:I.countryTotals}:{},...I.countryTotalsPrev?{countryTotalsPrev:I.countryTotalsPrev}:{}}:null,productsPartial:I.productsPartial||null,weeklyMap:I.weeklyMap||null,weeklyLabels:I.weeklyLabels||null,weeklyLabelsFull:I.weeklyLabelsFull||null,weeklyAll:I.weeklyAll||null,citations:I.citations||null,dotcom:I.dotcom||null,productsCnty:I.productsCnty||null,citationsCnty:I.citationsCnty||null,citationsByCnty:I.citationsByCnty||null,dotcomByCnty:I.dotcomByCnty||null,unlaunchedMap:I.unlaunchedMap||null,prTopicList:I.prTopicList||null,monthlyVis:I.monthlyVis||null,weeklyPR:I.weeklyPR||null,weeklyPRLabels:I.weeklyPRLabels||null,monthlyPR:I.monthlyPR||null,monthlyPRLabels:I.monthlyPRLabels||null,weeklyBrandPrompt:I.weeklyBrandPrompt||null,weeklyBrandPromptLabels:I.weeklyBrandPromptLabels||null,monthlyBrandPrompt:I.monthlyBrandPrompt||null,monthlyBrandPromptLabels:I.monthlyBrandPromptLabels||null,dotcomTrend:I.dotcomTrend||null,dotcomTrendMonths:I.dotcomTrendMonths||null,dotcomByLlm:I.dotcomByLlm||null}),setTimeout(Ln,250)},100),ct(g.join(`
`)),Ct("ok"),R(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const et={};I.productsPartial&&(et.products=I.productsPartial.map(it=>{var gt;const ut=((gt=I.weeklyMap)==null?void 0:gt[it.id])||[],At=it.vsComp>0?it.score/it.vsComp*100:100,$t=ut.find(ae=>ae!=null&&ae>0),jt=it.prev!=null&&it.prev>0?it.prev:$t||0,kt=jt>0?[jt,it.score]:[];return{...it,prev:jt,weekly:ut,monthly:kt,compRatio:Math.round(At),status:At>=100?"lead":At>=80?"behind":"critical"}})),I.productsCnty&&(et.productsCnty=I.productsCnty),I.citations&&(et.citations=I.citations),I.citationsCnty&&(et.citationsCnty=I.citationsCnty);try{await bo(et)}catch{}R("동기화 + 번역 완료!")}}catch(I){g.push(`[ERROR] ${I.message}`),Ct("error"),R(I.message),ct(g.join(`
`))}finally{ft(!1),setTimeout(()=>{Ct(null),R("")},4e3)}}return n.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:7,background:Bt,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:E},children:"LG"})}),n.jsxs("div",{children:[n.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:E},children:["GEO Builder ",n.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:E},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),n.jsx(ri,{...An||{}})]}),n.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"구글 시트 동기화"}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:E},children:"Google Sheets URL"}),n.jsx("input",{value:G,onChange:s=>yt(s.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...Et,fontSize:11,padding:"7px 9px",marginBottom:8,color:G?"#E2E8F0":"#334155"}}),n.jsxs("button",{onClick:Pn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:vt?"wait":"pointer",background:vt?"#1E293B":Bt,fontSize:12,fontWeight:700,color:vt?"#94A3B8":"#FFFFFF",fontFamily:E,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(ko,{size:13,style:{animation:vt?"spin 1s linear infinite":"none"}}),vt?"동기화 중...":"구글 시트 동기화"]}),(bt||vt&&Tt)&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.6,background:bt==="ok"?"#14532D":bt==="error"?"#450A0A":"#1E293B",color:bt==="ok"?"#86EFAC":bt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${bt==="ok"?"#22C55E33":bt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:Tt}),X&&n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[X,n.jsx("button",{onClick:()=>{navigator.clipboard.writeText(X).then(()=>{const s=document.getElementById("vis-debug-copy-btn");s&&(s.textContent="복사됨!",setTimeout(()=>{s.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:E,cursor:"pointer"},children:"로그 복사"})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:In,disabled:ot,style:{width:"100%",padding:"9px 0",background:ot?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:E,cursor:ot?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:ot?.6:1},children:[n.jsx(Dn,{size:13})," ",ot?"번역 중...":"AI 번역 (EN)"]}),St&&n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:E},children:"AI 번역 확인"}),n.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:E},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",n.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",n.jsx("br",{}),"진행하시겠습니까?"]}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>Ft(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:E,cursor:"pointer"},children:"아니오"}),n.jsx("button",{onClick:bo,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:E,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),n.jsxs("button",{onClick:jn,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[n.jsx(On,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[Pt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"발행 월"}),n.jsx("select",{value:Jt,onChange:s=>Tn(s.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:E,fontSize:11,fontWeight:700,cursor:"pointer"},children:En.map(s=>n.jsxs("option",{value:s,children:[s," · ",Le(s),fe.find(g=>g.month===s)?" ✓ 게시됨":""]},s))})]}),Pt&&mt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["핵심 과제 진척 월 ",n.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",T||"—",")"]})]}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("select",{value:U||"",onChange:s=>mt(s.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:E,fontSize:11,fontWeight:700,cursor:"pointer"},children:[n.jsxs("option",{value:"",children:["자동 (",T||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(s=>n.jsx("option",{value:s,children:s},s))]}),U&&n.jsx("button",{onClick:()=>mt(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:E,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),n.jsxs("button",{onClick:$n,disabled:st,style:{width:"100%",padding:"9px 0",background:st?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:st?"#94A3B8":"#FFFFFF",fontFamily:E,cursor:st?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(So,{size:12}),st?"게시 중...":Pt?`${Le(Jt)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:E,cursor:"pointer"},children:[n.jsx("input",{type:"checkbox",checked:Zt,onChange:s=>Kt(s.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),n.jsxs("button",{onClick:Bn,disabled:Ht,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:Ht?"#1E293B":"#166534",color:Ht?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:E,cursor:Ht?"wait":"pointer",marginBottom:6},children:[n.jsx(So,{size:12}),Ht?"통합 게시 중...":"통합 대시보드 게시"]}),Dt&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.8,background:Dt.startsWith("ERROR")?"#450A0A":"#14532D",color:Dt.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Dt.startsWith("ERROR:")?Dt.slice(6):Dt})]})]}),n.jsxs("button",{onClick:async()=>{const s={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(s).some(J=>J.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const Lt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:s})})).json();Lt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(Lt.error||""))}catch(J){alert("아카이빙 실패: "+J.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[n.jsx(Nn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&It&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.8,background:It.startsWith("ERROR:")?"#450A0A":"#14532D",color:It.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${It.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:It.startsWith("ERROR:")?It.slice(6):n.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[n.jsx(We,{size:11,style:{marginTop:3,flexShrink:0}})," ",n.jsxs("span",{children:[It,n.jsx("br",{}),n.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!Pt&&(ie==null?void 0:ie.published)&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:E,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),n.jsx("button",{onClick:()=>yo(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:E,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:ie.urls.ko},{label:"EN",url:ie.urls.en}].map(({label:s,url:g})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[n.jsxs("a",{href:g,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:E,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[s,": ",g]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${g}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(We,{size:10})})]},s)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:E},children:ie.ts?new Date(ie.ts).toLocaleString("ko-KR"):""})]}),Pt&&fe.length>0&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsx("div",{style:{marginBottom:6},children:n.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:E,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",fe.length,")"]})}),fe.map(s=>n.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:E},children:Le(s.month)}),n.jsx("button",{onClick:()=>{confirm(`${Le(s.month)} 게시본을 삭제할까요?`)&&yo(s.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:E,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:s.urls.ko},{label:"EN",url:s.urls.en}].map(({label:g,url:J})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[n.jsxs("a",{href:J,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:E,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[g,": ",J]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${J}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(We,{size:10})})]},g)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:E},children:s.ts?new Date(s.ts).toLocaleString("ko-KR"):""})]},s.month))]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[t!=="dashboard"&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"헤더 편집"}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["리포트 유형 ",n.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),n.jsx("input",{value:e.reportType,onChange:s=>o(g=>({...g,reportType:s.target.value})),style:{...Et,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["보고서 번호 ",n.jsx("span",{style:{color:"#334155"},children:"(자동)"})]}),n.jsx("input",{value:e.reportNo,onChange:s=>o(g=>({...g,reportNo:s.target.value})),style:{...Et}})]}),n.jsxs("div",{style:{flex:1.4},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["발행월 ",n.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),n.jsx("input",{value:e.period,onChange:s=>{const g=s.target.value;o(J=>({...J,period:g,...Zo(g)})),c&&c(J=>({...J,period:g,...Zo(g)}))},style:{...Et}})]})]}),io(e.period)&&n.jsxs("p",{style:{margin:"-4px 0 8px",fontSize:10.5,color:"#64748B",fontFamily:E,lineHeight:1.5},children:["자동 연동 — 보고서 번호 ",n.jsx("span",{style:{color:"#94A3B8",fontWeight:700},children:io(e.period)})," · ","데이터 기준 ",n.jsx("span",{style:{color:"#94A3B8",fontWeight:700},children:Sn(e.period,"ko")})]}),n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:"제목 텍스트"}),n.jsx("textarea",{value:e.title,onChange:s=>o(g=>({...g,title:s.target.value})),rows:4,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["팀명 ",n.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),n.jsx("input",{value:e.team,onChange:s=>o(g=>({...g,team:s.target.value})),style:{...Et,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["기준 텍스트 ",n.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),n.jsx("input",{value:e.dateLine,onChange:s=>o(g=>({...g,dateLine:s.target.value})),style:{...Et,marginBottom:10}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Notice"}),n.jsx("button",{onClick:()=>o(s=>({...s,showNotice:!s.showNotice})),style:{background:e.showNotice?Bt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.noticeText,onChange:s=>o(g=>({...g,noticeText:s.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...Et,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"KPI Logic"}),n.jsx("button",{onClick:()=>o(s=>({...s,showKpiLogic:!s.showKpiLogic})),style:{background:e.showKpiLogic?Bt:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.kpiLogicText,onChange:s=>o(g=>({...g,kpiLogicText:s.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...Et,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]})]}),n.jsxs("div",{style:{marginBottom:10},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"폰트 크기"}),n.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:E,fontWeight:700},children:[e.titleFontSize,"px"]})]}),n.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:s=>o(g=>({...g,titleFontSize:Number(s.target.value)})),style:{width:"100%",accentColor:Bt,cursor:"pointer"}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E,flex:1},children:"제목 색상"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("input",{type:"color",value:e.titleColor,onChange:s=>o(g=>({...g,titleColor:s.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),n.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:E},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([s,g])=>n.jsx("button",{onClick:()=>o(J=>({...J,titleColor:s})),title:g,style:{width:16,height:16,borderRadius:"50%",background:s,border:e.titleColor===s?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},s))]})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"섹션 표시"}),n.jsxs("div",{style:{marginBottom:16},children:[n.jsx(on,{label:"익스큐티브 서머리",variants:tn,allKeys:$i,value:en(tn,e),setMeta:o}),n.jsx(on,{label:"하이라이트",variants:Qo,value:en(Qo,e),setMeta:o}),Bi.map(s=>n.jsx(Li,{label:s.label,items:s.items,meta:e,setMeta:o},s.label))]}),(()=>{const s=et=>String(et||"").replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\.(com|net|org|io|co|kr|jp|us|uk|de|fr|cn|in|br)(\.[a-z]{2})?$/i,""),g=et=>/brand/i.test(et)&&/(manufacturer|메뉴팩|메뉴펙|제조)/i.test(et)?"Brand":et,J=Array.isArray(f==null?void 0:f.citTrendMonths)?f.citTrendMonths:[],Lt=J.length?J[J.length-1]:null,qt=et=>{if(!et)return 0;if(Lt!=null&&et[Lt]!=null)return Number(et[Lt])||0;const it=Object.values(et).map(Number).filter(ut=>!isNaN(ut));return it.length?it[it.length-1]:0},nt=[],oe=new Set,I=(et,it,ut)=>{et&&!oe.has(et)&&(oe.add(et),nt.push({value:et,label:it,score:ut}))};if(f!=null&&f.citTouchPointsTrend&&Object.entries(f.citTouchPointsTrend).forEach(([et,it])=>{const ut=g(et);I(ut,ut,qt(it))}),f!=null&&f.citDomainTrend){const et=Object.entries(f.citDomainTrend).filter(([ut])=>ut.startsWith("TTL|"));(et.length?et:Object.entries(f.citDomainTrend)).forEach(([,ut])=>I(ut.domain,s(ut.domain),qt(ut.months)))}if(!nt.length)return null;nt.sort((et,it)=>it.score-et.score);const te=nt.slice(0,10),zt=Array.isArray(e.bumpHighlight)?e.bumpHighlight:[],Gt=et=>o(it=>{const ut=Array.isArray(it.bumpHighlight)?it.bumpHighlight:[];return{...it,bumpHighlight:ut.includes(et)?ut.filter(At=>At!==et):[...ut,et]}});return n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"범프차트 지적 요소 (색상 강조)"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:te.map(({value:et,label:it})=>{const ut=zt.includes(et);return n.jsx("button",{onClick:()=>Gt(et),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:ut?Bt:"#1E293B",color:ut?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:it},et)})})]})})(),e.showLlmShare!==!1&&n.jsxs(n.Fragment,{children:[n.jsx(nn,{children:"Citation"}),n.jsx(Xe,{label:"인용비중",value:e.llmShareTopN===5?5:10,options:[{value:5,label:"Top 5"},{value:10,label:"Top 10"}],onSelect:s=>o(g=>({...g,llmShareTopN:s}))})]}),n.jsx(nn,{children:"제품 카드"}),n.jsx(Xe,{label:"버전",value:e.productCardVersion||"v1",options:[{value:"v1",label:"V1 트렌드",hint:"점수 + MoM + 미니 트렌드"},{value:"v4",label:"V4 경합",hint:"V1 트렌드 + 경쟁비 0.05 이하는 검은색",accent:"#1A1A1A"}],onSelect:s=>o(g=>({...g,productCardVersion:s}))}),n.jsx(Xe,{label:"트렌드 기준",value:e.trendMode||"weekly",options:[{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],onSelect:s=>o(g=>({...g,trendMode:s})),accent:"#166534"}),n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"콘텐츠 편집"})]}),t==="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"월간 보고서 본문"}),n.jsxs("button",{onClick:async()=>{var s;try{o(J=>({...J,monthlyReportBody:"⏳ AI 생성 중..."}));const g=await Nt("monthlyReportBody",{products:$().products,productsCnty:$().productsCnty,total:$().total,citations:$().citations,todoText:e.todoText||"",period:e.period||"",unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}},P);o(J=>({...J,monthlyReportBody:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,monthlyReportBody:`[AI 실패: ${g.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.monthlyReportBody||"",onChange:s=>o(g=>({...g,monthlyReportBody:s.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:E},children:[n.jsx("code",{children:"1. 제목"})," → H2 · ",n.jsx("code",{children:"2.1 부제"})," → H3 · ",n.jsx("code",{children:"**텍스트**"})," → ",n.jsx("strong",{children:"볼드"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"증감 요인 분석 (Samsung 격차·MoM)"}),n.jsxs("button",{onClick:async()=>{var s;try{o(J=>({...J,monthlyDeltaAnalysis:"⏳ AI 분석 중..."}));const g=await Nt("monthlyDelta",{total:$().total,products:$().products,productsCnty:$().productsCnty,period:e.period||"",unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}},P);o(J=>({...J,monthlyDeltaAnalysis:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,monthlyDeltaAnalysis:`[AI 실패: ${g.message}]`}))}},title:"경쟁사(Samsung) 대비 격차 증감 + 전월 대비 증감 요인 AI 분석",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 분석"]})]}),n.jsx("textarea",{value:e.monthlyDeltaAnalysis||"",onChange:s=>o(g=>({...g,monthlyDeltaAnalysis:s.target.value})),rows:16,placeholder:"Samsung 대비 격차 증감 + 전월 대비 증감 요인 분석. 'AI 분석' 버튼으로 자동 생성...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsx("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:E},children:"경쟁사(Samsung) 대비 격차 증감과 전월 대비 증감에 영향을 준 수치를 리스트업·정리합니다."})]}),Pt&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>S&&S(s=>!s),style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:"pointer",background:C?Bt:"#1E293B",color:C?"#FFFFFF":"#94A3B8",fontSize:12,fontWeight:700,fontFamily:E,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all 0.2s"},children:[n.jsx(_n,{size:13})," ",C?"편집 모드 켜짐 — 끄기":"편집 모드 켜기"]}),n.jsx("div",{style:{background:"#0F172A",border:"1px solid #1E293B",borderRadius:8,padding:"8px 10px",marginBottom:10},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:E,lineHeight:1.6},children:C?n.jsxs(n.Fragment,{children:["✏️ 미리보기에서 텍스트를 ",n.jsx("strong",{style:{color:"#E2E8F0"},children:"직접 클릭해 편집"})," (볼드·색·크기 적용된 상태 그대로).",n.jsx("br",{}),"바깥 클릭 = 저장 · Esc = 취소"]}):n.jsx(n.Fragment,{children:"편집 모드를 켜면 미리보기 텍스트를 직접 클릭해 편집할 수 있어요."})})}),[{label:"GEO 전략 인사이트",field:"totalInsight",type:"totalInsight",data:()=>{var s;return{products:$().products,productsCnty:$().productsCnty,total:$().total,todoText:e.todoText||"",unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}}}},{label:"Highlight 인사이트",field:"highlightInsight",toggle:"showHighlightInsight",type:"highlight",data:()=>({products:$().products,weeklyAll:H})},{label:"Citation 범프 인사이트",field:"bumpInsight",toggle:"showBumpInsight",type:"bump",data:()=>({citTouchPointsTrend:f==null?void 0:f.citTouchPointsTrend,citDomainTrend:f==null?void 0:f.citDomainTrend,citTrendMonths:f==null?void 0:f.citTrendMonths,citDomainMonths:f==null?void 0:f.citDomainMonths})},{label:"제품 인사이트",field:"productInsight",toggle:"showProductInsight",type:"product",data:()=>({products:$().products,total:$().total})},{label:"제품 How to Read",field:"productHowToRead",toggle:"showProductHowToRead",type:"howToRead",data:()=>({section:"제품별 GEO Visibility"})},{label:"국가별 인사이트",field:"cntyInsight",toggle:"showCntyInsight",type:"cnty",data:()=>{var s;return{productsCnty:$().productsCnty,unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}}}},{label:"국가별 How to Read",field:"cntyHowToRead",toggle:"showCntyHowToRead",type:"howToRead",data:()=>({section:"국가별 GEO Visibility"})},{label:"Citation 인사이트",field:"citationInsight",toggle:"showCitationInsight",type:"citation",data:()=>({citations:$().citations})},{label:"Citation How to Read",field:"citationHowToRead",toggle:"showCitationHowToRead",type:"howToRead",data:()=>({section:"Citation 도메인별 현황"})},{label:"제품별 Citation 인사이트",field:"citPrdInsight",toggle:"showCitPrdInsight",type:"citPrd",data:()=>({citationsCnty:$().citationsCnty})},{label:"제품별 Citation How to Read",field:"citPrdHowToRead",toggle:"showCitPrdHowToRead",type:"howToRead",data:()=>({section:"제품별 Citation"})},{label:"닷컴 인사이트",field:"dotcomInsight",toggle:"showDotcomInsight",type:"dotcom",data:()=>({dotcom:$().dotcom})},{label:"닷컴 How to Read",field:"dotcomHowToRead",toggle:"showDotcomHowToRead",type:"howToRead",data:()=>({section:"닷컴 Citation"})},{label:"Action Plan 인사이트",field:"todoText",type:"todo",data:()=>({products:$().products})}].map(s=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 0"},children:[s.toggle?n.jsx("button",{onClick:()=>o(g=>({...g,[s.toggle]:!g[s.toggle]})),title:"표시 / 숨김",style:{background:e[s.toggle]?Bt:"#334155",border:"none",borderRadius:7,width:26,height:13,cursor:"pointer",position:"relative",padding:0,flexShrink:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e[s.toggle]?15:3,width:9,height:9,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})}):n.jsx("span",{style:{width:26,flexShrink:0}}),n.jsx("p",{style:{margin:0,flex:1,fontSize:11,color:"#94A3B8",fontFamily:E,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s.label}),n.jsxs("button",{onClick:async()=>{try{o(J=>({...J,[s.field]:"⏳ AI 생성 중..."}));const g=await Nt(s.type,s.data(),P);o(J=>({...J,[s.field]:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,[s.field]:`[AI 실패: ${g.message}]`}))}},title:`${s.label} AI 생성 (결과는 미리보기에 표시)`,style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:10,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3,flexShrink:0},children:[n.jsx(Ot,{size:9})," AI"]})]},s.field)),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0 16px"}})]}),t!=="monthly-report"&&t!=="dashboard"&&!Pt&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"GEO 전략 인사이트"}),n.jsxs("button",{onClick:async()=>{var s;try{o(J=>({...J,totalInsight:"⏳ AI 생성 중..."}));const g=await Nt("totalInsight",{products:$().products,productsCnty:$().productsCnty,total:$().total,todoText:e.todoText||"",unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}},P);o(J=>({...J,totalInsight:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,totalInsight:`[AI 실패: ${g.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.totalInsight,onChange:s=>o(g=>({...g,totalInsight:s.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,productInsight:"⏳ AI 생성 중..."}));const s=await Nt("product",{products:$().products,total:$().total},P);o(g=>({...g,productInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,productInsight:`[AI 실패: ${s.message}]

`+Ci($().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showProductInsight:!s.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?Bt:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showProductInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productInsight,onChange:s=>o(g=>({...g,productInsight:s.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품 섹션 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,productHowToRead:"⏳ AI 생성 중..."}));const s=await Nt("howToRead",{section:"제품별 GEO Visibility"},P);o(g=>({...g,productHowToRead:s}))}catch{o(s=>({...s,productHowToRead:ki()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showProductHowToRead:!s.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?Bt:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showProductHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productHowToRead,onChange:s=>o(g=>({...g,productHowToRead:s.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{var s;try{o(J=>({...J,cntyInsight:"⏳ AI 생성 중..."}));const g=await Nt("cnty",{productsCnty:$().productsCnty,unlaunchedMap:((s=$().extra)==null?void 0:s.unlaunchedMap)||{}},P);o(J=>({...J,cntyInsight:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,cntyInsight:`[AI 실패: ${g.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCntyInsight:!s.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?Bt:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyInsight,onChange:s=>o(g=>({...g,cntyInsight:s.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,cntyHowToRead:"⏳ AI 생성 중..."}));const s=await Nt("howToRead",{section:"국가별 GEO Visibility"},P);o(g=>({...g,cntyHowToRead:s}))}catch{o(s=>({...s,cntyHowToRead:Si()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCntyHowToRead:!s.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?Bt:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyHowToRead,onChange:s=>o(g=>({...g,cntyHowToRead:s.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"PR Visibility 안내 문구"}),n.jsx("textarea",{value:e.prNotice||"",onChange:s=>o(g=>({...g,prNotice:s.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["PR 토픽별 설명 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:s=>o(g=>({...g,prTopicDescsRaw:s.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["PR 토픽별 대표 프롬프트 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:s=>o(g=>({...g,prTopicPromptsRaw:s.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater`,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"Brand Prompt 이상 점검 안내 문구"}),n.jsx("textarea",{value:e.bpNotice||"",onChange:s=>o(g=>({...g,bpNotice:s.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Citation 카테고리 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citationInsight:"⏳ AI 생성 중..."}));const s=await Nt("citation",{citations:$().citations},P);o(g=>({...g,citationInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citationInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitationInsight:!s.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?Bt:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitationInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationInsight,onChange:s=>o(g=>({...g,citationInsight:s.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citationHowToRead:"⏳ AI 생성 중..."}));const s=await Nt("howToRead",{section:"Citation 도메인별 현황"},P);o(g=>({...g,citationHowToRead:s}))}catch{o(s=>({...s,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitationHowToRead:!s.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?Bt:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationHowToRead,onChange:s=>o(g=>({...g,citationHowToRead:s.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"도메인별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citDomainInsight:"⏳ AI 생성 중..."}));const s=await Nt("citDomain",{citationsCnty:$().citationsCnty},P);o(g=>({...g,citDomainInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citDomainInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitDomainInsight:!s.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?Bt:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainInsight,onChange:s=>o(g=>({...g,citDomainInsight:s.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"도메인별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citDomainHowToRead:"⏳ AI 생성 중..."}));const s=await Nt("howToRead",{section:"도메인별 Citation 현황"},P);o(g=>({...g,citDomainHowToRead:s}))}catch{o(s=>({...s,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitDomainHowToRead:!s.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?Bt:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainHowToRead,onChange:s=>o(g=>({...g,citDomainHowToRead:s.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citCntyInsight:"⏳ AI 생성 중..."}));const s=await Nt("citCnty",{citationsCnty:$().citationsCnty},P);o(g=>({...g,citCntyInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citCntyInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitCntyInsight:!s.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?Bt:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyInsight,onChange:s=>o(g=>({...g,citCntyInsight:s.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citCntyHowToRead:"⏳ AI 생성 중..."}));const s=await Nt("howToRead",{section:"국가별 Citation 도메인"},P);o(g=>({...g,citCntyHowToRead:s}))}catch{o(s=>({...s,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitCntyHowToRead:!s.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?Bt:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyHowToRead,onChange:s=>o(g=>({...g,citCntyHowToRead:s.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citPrdInsight:"⏳ AI 생성 중..."}));const s=await Nt("citPrd",{citationsCnty:$().citationsCnty},P);o(g=>({...g,citPrdInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,citPrdInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitPrdInsight:!s.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?Bt:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdInsight||"",onChange:s=>o(g=>({...g,citPrdInsight:s.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citPrdHowToRead:"⏳ AI 생성 중..."}));const s=await Nt("howToRead",{section:"제품별 Citation"},P);o(g=>({...g,citPrdHowToRead:s}))}catch{o(s=>({...s,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showCitPrdHowToRead:!s.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?Bt:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:s=>o(g=>({...g,citPrdHowToRead:s.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),b.length>0&&(()=>{const s=[...new Set(D.productsCnty.map(g=>g.product))];return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 제품군 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:s.map(g=>{const J=(e.cntyProductFilter||{})[g]!==!1;return n.jsx("button",{onClick:()=>o(Lt=>({...Lt,cntyProductFilter:{...Lt.cntyProductFilter||{},[g]:!J}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:J?"#166534":"#1E293B",color:J?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:g},g)})})]})})(),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"닷컴 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,dotcomInsight:"⏳ AI 생성 중..."}));const s=await Nt("dotcom",{dotcom:$().dotcom},P);o(g=>({...g,dotcomInsight:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,dotcomInsight:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showDotcomInsight:!s.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?Bt:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showDotcomInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomInsight,onChange:s=>o(g=>({...g,dotcomInsight:s.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"닷컴 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,dotcomHowToRead:"⏳ AI 생성 중..."}));const s=await Nt("howToRead",{section:"닷컴 Citation"},P);o(g=>({...g,dotcomHowToRead:s}))}catch{o(g=>({...g,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showDotcomHowToRead:!s.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?Bt:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomHowToRead,onChange:s=>o(g=>({...g,dotcomHowToRead:s.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["전사 핵심 과제 노티스 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),n.jsx("textarea",{value:e.todoNotice||"",onChange:s=>o(g=>({...g,todoNotice:s.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Action Plan 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,todoText:"⏳ AI 생성 중..."}));const s=await Nt("todo",{products:$().products},P);o(g=>({...g,todoText:s}))}catch(s){console.error("[AI]",s),o(g=>({...g,todoText:`[AI 실패: ${s.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(s=>({...s,showTodo:!s.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?Bt:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showTodo?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.todoText,onChange:s=>o(g=>({...g,todoText:s.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:Rn,style:{width:"100%",padding:"9px 0",background:at?"#14532D":"transparent",border:`1px solid ${at?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:at?"#86EFAC":"#64748B",fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:at?n.jsxs(n.Fragment,{children:[n.jsx(Qe,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(an,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"수신 이메일 주소"}),n.jsx("input",{type:"email",value:pt,onChange:s=>ht(s.target.value),placeholder:"recipient@example.com",style:{...Et,fontSize:11,marginBottom:8}}),n.jsx("button",{onClick:Mn,disabled:M==="sending"||!pt.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:M==="sending"||!pt.trim()?"not-allowed":"pointer",background:M==="ok"?"#14532D":M==="error"?"#7F1D1D":M==="sending"?"#1E3A5F":pt.trim()?"#1D4ED8":"#1E293B",color:M==="ok"?"#86EFAC":M==="error"?"#FCA5A5":pt.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:M==="sending"?n.jsxs(n.Fragment,{children:[n.jsx(ko,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):M==="ok"?n.jsxs(n.Fragment,{children:[n.jsx(Qe,{size:12})," 발송 완료!"]}):M==="error"?n.jsxs(n.Fragment,{children:[n.jsx(Fo,{size:12})," 발송 실패 — 다시 시도"]}):n.jsxs(n.Fragment,{children:[n.jsx(Fo,{size:12})," 메일 발송 (KO + EN)"]})})]})]})]}),n.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:E,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function ji({value:t,onChange:e,products:o,productsCnty:i,monthlyVis:a,style:r}){const c=sn.useMemo(()=>qn(o,i,a),[o,i,a]);return!c.length||c.length===1&&c[0]==="Total"?null:n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...r},children:[n.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),n.jsx("select",{value:t||"Total",onChange:l=>e(l.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:c.map(l=>n.jsx("option",{value:l,children:l},l))})]})}const ge="monthly-report",rn="geo-monthly-report-cache";function Mi({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:r=[],citationsCnty:c=[],lang:l="ko",weeklyLabels:p,categoryStats:y,stakeholderStats:h,cntyKeys:u=null,llmModel:d,monthlyVis:m}){const k=dt.useRef(null),b=dt.useMemo(()=>lo(t,e,o,i,a,l,r,c,{categoryStats:y,stakeholderStats:h,cntyKeys:u,llmModel:d,monthlyVis:m}),[t,e,o,i,a,l,r,c,p,u,d,m]);return sn.useEffect(()=>{const v=k.current;if(!v)return;const w=v.contentDocument||v.contentWindow.document;w.open(),w.write(b),w.close();const x=()=>{try{w.body.style.overflow="hidden",w.documentElement.style.overflow="hidden";const D=w.documentElement.scrollHeight;D&&(v.style.height=D+20+"px")}catch{}};setTimeout(x,150),setTimeout(x,400),setTimeout(x,1e3),setTimeout(x,2e3)},[b]),n.jsx("iframe",{ref:k,title:"newsletter-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function Pi({meta:t,total:e,products:o,citations:i,dotcom:a,productsCnty:r=[],citationsCnty:c=[],lang:l="ko",weeklyLabels:p,categoryStats:y,stakeholderStats:h,cntyKeys:u=null,llmModel:d,monthlyVis:m}){const[k,b]=dt.useState(!1),v=dt.useMemo(()=>lo(t,e,o,i,a,l,r,c,{categoryStats:y,stakeholderStats:h,cntyKeys:u,llmModel:d,monthlyVis:m}),[t,e,o,i,a,l,r,c,p,y,u,d,m]);async function w(){try{await navigator.clipboard.writeText(v)}catch{const x=document.createElement("textarea");x.value=v,document.body.appendChild(x),x.select(),document.execCommand("copy"),document.body.removeChild(x)}b(!0),setTimeout(()=>b(!1),2500)}return n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[n.jsxs("div",{children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:E},children:"이메일 HTML 코드"}),n.jsx("span",{style:{fontSize:11,color:"#334155",fontFamily:E,marginLeft:10},children:"table 기반 · 인라인 스타일 · 이메일 클라이언트 호환"})]}),n.jsx("button",{onClick:w,style:{padding:"6px 14px",borderRadius:7,border:"none",background:k?"#14532D":Bt,color:k?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",gap:5,transition:"all 0.2s"},children:k?n.jsxs(n.Fragment,{children:[n.jsx(Qe,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(an,{size:12})," HTML 복사"]})})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:n.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:v})})]})}function Di(){const t=dt.useRef(yr(rn)).current,[e,o]=dt.useState({...Be,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[i,a]=dt.useState({...Be,...(t==null?void 0:t.metaEn)??{}}),[r,c]=dt.useState((t==null?void 0:t.total)??pr),[l,p]=dt.useState((t==null?void 0:t.products)??ur),[y,h]=dt.useState((t==null?void 0:t.citations)??gr),[u,d]=dt.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:hr),[m,k]=dt.useState((t==null?void 0:t.productsCnty)??fr),[b,v]=dt.useState((t==null?void 0:t.citationsCnty)??mr),[w,x]=dt.useState((t==null?void 0:t.weeklyLabels)??null),[D,P]=dt.useState((t==null?void 0:t.weeklyAll)??{}),[O,W]=dt.useState(null),[L,N]=dt.useState(null),[V,z]=dt.useState("preview"),[H,F]=dt.useState("ko"),[j,A]=dt.useState("Total"),[_,K]=dt.useState((t==null?void 0:t.monthlyVis)??[]),[Y,Z]=dt.useState([]),[f,Q]=dt.useState(""),[U,mt]=dt.useState(!1),[T,C]=dt.useState(""),[S,B]=dt.useState(null),[$,G]=dt.useState(!0),[yt,vt]=dt.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),ft=dt.useMemo(()=>{const ot=new Set;return(m||[]).forEach(q=>{q&&q.country&&!/^(ttl|total)$/i.test(q.country)&&ot.add(String(q.country).toUpperCase())}),Array.from(ot).sort()},[m]),bt=yt.length>0?yt:null,Ct=dt.useCallback(ot=>{vt(q=>q.includes(ot)?q.filter(st=>st!==ot):[...q,ot])},[]),Tt=dt.useCallback(()=>vt(ft),[ft]),R=dt.useCallback(()=>vt([]),[]);dt.useEffect(()=>{let ot=!1;const q=Br(e.period)||"3월";async function st(){var Mt,It,Ut;try{const Ht=await fetch("/api/tracker-snapshot-v2"),Wt=Ht.ok?await Ht.json():null;if(Wt!=null&&Wt.ok&&((Ut=(It=(Mt=Wt.data)==null?void 0:Mt.quantitativeGoals)==null?void 0:It.rows)!=null&&Ut.length)){const Zt=Ro(Wt.data,q),Kt=Mo(Wt.data,q);if(Zt!=null&&Zt.length&&!ot){W(Zt),Kt!=null&&Kt.length&&N(Kt);return}}}catch{}try{const[{parseKPISheet:Ht},Wt]=await Promise.all([to(()=>import("./sheetParser-BGRKNm5Y.js"),[]),to(()=>import("./xlsx-CaYOwpyI.js").then(Jt=>Jt.x),__vite__mapDeps([0,1]))]),Zt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,Kt=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${Zt}&headers=1`,Dt=await fetch(Kt,{cache:"no-store"});if(!Dt.ok)return;const Qt=await Dt.text(),ie=Wt.read(Qt,{type:"string"}),we=ie.Sheets[ie.SheetNames[0]],fe=Wt.utils.sheet_to_json(we,{header:1,defval:""}),Ae=Ht(fe),Pt=Ro(Ae,q);if(Pt!=null&&Pt.length&&!ot){W(Pt);const Jt=Mo(Ae,q);Jt!=null&&Jt.length&&N(Jt)}}catch{}}return st(),()=>{ot=!0}},[e.period]);const X=H==="en"?i:e,ct=H==="en"?a:o,at=dt.useMemo(()=>xe(l,m,y,b,H),[l,m,y,b,H]);dt.useEffect(()=>{xr(ge).then(Z)},[]);const xt=dt.useRef(null);function pt(ot,q=2e3){clearTimeout(xt.current),C(ot),xt.current=setTimeout(()=>C(""),q)}dt.useEffect(()=>()=>clearTimeout(xt.current),[]);const ht=dt.useRef(!1);dt.useEffect(()=>{let ot=!1;return Pe(ge).then(q=>{ot||!q||(ht.current=!0,q.meta&&o(st=>({...st,...q.meta})),q.total&&c(st=>({...st,...q.total})),q.citations&&h(q.citations),q.dotcom&&d(st=>({...st,...q.dotcom})),q.productsCnty&&k(q.productsCnty),q.citationsCnty&&v(q.citationsCnty),q.weeklyLabels&&x(q.weeklyLabels),q.weeklyAll&&P(st=>({...st,...q.weeklyAll})),q.monthlyVis&&K(q.monthlyVis),q.productsPartial?p(q.productsPartial.map(st=>{var Ut;const Mt=((Ut=q.weeklyMap)==null?void 0:Ut[st.id])||[],It=st.vsComp>0?st.score/st.vsComp*100:100;return{...st,weekly:Mt,monthly:[],compRatio:Math.round(It),status:It>=100?"lead":It>=80?"behind":"critical"}})):q.weeklyMap&&p(st=>st.map(Mt=>{var Ut;const It=(Ut=q.weeklyMap)==null?void 0:Ut[Mt.id];return It?{...Mt,weekly:It}:Mt})))}),()=>{ot=!0}},[]),dt.useEffect(()=>{br(rn,{metaKo:e,metaEn:i,total:r,products:l,citations:y,dotcom:u,productsCnty:m,citationsCnty:b,weeklyLabels:w,weeklyAll:D,selectedCountries:yt})},[e,i,r,l,y,u,m,b,w,D,yt]);async function M(){if(!S)return;const q=await Cr(ge,S,{metaKo:e,metaEn:i,total:r,products:l,citations:y,dotcom:u,productsCnty:m,citationsCnty:b,weeklyLabels:w,weeklyAll:D});q&&Z(q),pt(q?"저장 완료!":"저장 실패")}async function rt(){var st;const ot=f.trim()||`${X.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,q=await wr(ge,ot,{metaKo:e,metaEn:i,total:r,products:l,citations:y,dotcom:u,productsCnty:m,citationsCnty:b,weeklyLabels:w,weeklyAll:D});q&&(Z(q),Q(""),B(((st=q[0])==null?void 0:st.ts)||null)),pt(q?"새로 저장 완료!":"저장 실패")}async function St(ot){const q=await vr(ge,ot.ts);if(!q||q.data==null){C("불러오기 실패 — 저장본을 찾을 수 없습니다");return}const st=q.data;o({...Be,...st.metaKo||st.meta||{}}),a({...Be,...st.metaEn||{}}),st.total&&c(st.total),st.products&&p(st.products),st.citations&&h(st.citations),st.dotcom&&d(st.dotcom),st.productsCnty&&k(st.productsCnty),st.citationsCnty&&v(st.citationsCnty),st.weeklyLabels&&x(st.weeklyLabels),st.weeklyAll&&P(st.weeklyAll),B(ot.ts),pt(`"${ot.name}" 불러옴`)}async function Ft(ot){const q=Y[ot];if(!q)return;const st=await kr(ge,q.ts);st&&Z(st),S===q.ts&&B(null)}return n.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:E},children:[$&&n.jsx(Ri,{mode:ge,meta:X,setMeta:ct,metaKo:e,setMetaKo:o,metaEn:i,setMetaEn:a,total:r,setTotal:c,products:l,setProducts:p,citations:y,setCitations:h,dotcom:u,setDotcom:d,productsCnty:m,setProductsCnty:k,citationsCnty:b,setCitationsCnty:v,resolved:at,previewLang:H,setPreviewLang:F,snapshots:Y,setSnapshots:Z,setWeeklyLabels:x,setWeeklyAll:P,weeklyLabels:w,weeklyAll:D,generateHTML:lo}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[n.jsx("button",{onClick:()=>G(ot=>!ot),title:$?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:$?n.jsx(zn,{size:16}):n.jsx(Gn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"월간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"월간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:ot,tab:q,lang:st,label:Mt})=>{const It=q==="code"?V==="code":V==="preview"&&H===st;return n.jsx("button",{onClick:()=>{z(q),st&&F(st)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:It?"#1E293B":"transparent",color:It?"#FFFFFF":"#475569",fontSize:11,fontWeight:It?700:500,fontFamily:E,cursor:"pointer"},children:Mt},ot)})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[T&&n.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:E},children:T}),n.jsxs("button",{onClick:M,disabled:!S,title:S?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:S?"pointer":"default",background:S?"#1D4ED8":"#1E293B",color:S?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:4,opacity:S?1:.5},children:[n.jsx(To,{size:11})," 저장"]}),n.jsx("input",{value:f,onChange:ot=>Q(ot.target.value),placeholder:"버전 이름...",onKeyDown:ot=>ot.key==="Enter"&&rt(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:E,outline:"none"}}),n.jsxs("button",{onClick:rt,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:4},children:[n.jsx(To,{size:11})," 새로 저장"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsxs("button",{onClick:()=>mt(!U),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:U?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:4},children:[n.jsx(Un,{size:11})," 불러오기 ",Y.length>0&&n.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",Y.length,")"]})]}),U&&n.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:ot=>ot.stopPropagation(),children:Y.length===0?n.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:E,textAlign:"center"},children:"저장된 버전이 없습니다"}):Y.map((ot,q)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:S===ot.ts?"#1E3A5F":"#0F172A",border:S===ot.ts?"1px solid #3B82F6":"1px solid transparent"},children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:E,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:ot.name}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:new Date(ot.ts).toLocaleString("ko-KR")})]}),n.jsx("button",{onClick:()=>{St(ot),mt(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E},children:"적용"}),n.jsx("button",{onClick:()=>Ft(q),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:n.jsx(Hn,{size:10})})]},ot.ts))})]})]})]}),ft.length>0&&n.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[n.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),ft.map(ot=>{const q=yt.includes(ot);return n.jsx("button",{onClick:()=>Ct(ot),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(q?"#22C55E":"#334155"),background:q?"#16A34A":"#1E293B",color:q?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:ot},ot)}),n.jsx("button",{onClick:Tt,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),n.jsx("button",{onClick:R,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),n.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:yt.length===0?"전체 국가":`${yt.length}개 선택`})]}),V==="preview"?n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:n.jsxs("div",{style:{maxWidth:960,margin:"0 auto"},children:[n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:n.jsx(ji,{value:j,onChange:A,products:at.products,productsCnty:at.productsCnty,monthlyVis:_})}),n.jsx(Mi,{meta:X,total:r,products:at.products,citations:at.citations,dotcom:u,productsCnty:at.productsCnty,citationsCnty:at.citationsCnty,lang:H,weeklyLabels:w,categoryStats:O,stakeholderStats:L,cntyKeys:bt,llmModel:j,monthlyVis:_})]})}):n.jsx(Pi,{meta:X,total:r,products:at.products,citations:at.citations,dotcom:u,productsCnty:at.productsCnty,citationsCnty:at.citationsCnty,lang:H,weeklyLabels:w,categoryStats:O,stakeholderStats:L,cntyKeys:bt,llmModel:j,monthlyVis:_}),n.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:n.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:E},children:["v","3.1.9"]})})]})]})}Vn.createRoot(document.getElementById("root")).render(n.jsx(Di,{}));
