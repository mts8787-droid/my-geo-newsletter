const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/xlsx-CaYOwpyI.js","assets/react-Ce9l3SD5.js"])))=>i.map(i=>d[i]);
import{j as n,b as ct,R as So,L as Dn,D as On,G as Fo,A as Nn,c as Ke,S as Ot,P as _n,C as to,d as sn,e as To,f as ln,h as zn,i as Gn,k as Eo,F as Un,T as Hn}from"./react-Ce9l3SD5.js";import{R as Vn}from"./react-dom-D_GsT2Iz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();const Wn="modulepreload",Kn=function(t){return"/admin/monthly-report/"+t},Ao={},eo=function(e,o,r){let a=Promise.resolve();if(o&&o.length>0){let c=function(y){return Promise.all(y.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),p=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=c(o.map(y=>{if(y=Kn(y),y in Ao)return;Ao[y]=!0;const h=y.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Wn,h||(d.as="script"),d.crossOrigin="",d.href=y,p&&d.setAttribute("nonce",p),document.head.appendChild(d),h)return new Promise((m,k)=>{d.addEventListener("load",m),d.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${y}`)))})}))}function i(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return a.then(c=>{for(const s of c||[])s.status==="rejected"&&i(s.reason);return e().catch(i)})},le="Total";function qn(...t){const e=new Set([le]);return t.forEach(o=>{o&&Array.isArray(o)&&o.forEach(r=>{r!=null&&r.llmModel&&e.add(r.llmModel),((r==null?void 0:r.monthlyScores)||[]).forEach(i=>Object.keys((i==null?void 0:i.byLlm)||{}).forEach(c=>e.add(c)))})}),[le,...Array.from(e).filter(o=>o!==le).sort((o,r)=>o.localeCompare(r))]}function cn(t,e){return!Array.isArray(t)||!e||e===le?t:t.map(o=>{var y;const r=(o==null?void 0:o.monthlyScores)||[];if(!r.length)return o;const a=r.filter(h=>{var u;return(u=h==null?void 0:h.byLlm)==null?void 0:u[e]}),i=a[a.length-1]||null,c=a.length>=2?a[a.length-2]:null;if(!i)return o;const s=i.byLlm[e],p=(y=c==null?void 0:c.byLlm)==null?void 0:y[e];return{...o,score:s.score??o.score,prev:(p==null?void 0:p.score)??null,vsComp:s.comp??o.vsComp,allScores:s.allScores??o.allScores,monthlyScore:s.score??o.monthlyScore??o.score,monthlyPrev:(p==null?void 0:p.score)??null,monthlyScores:r.map(h=>{var d;const u=(d=h==null?void 0:h.byLlm)==null?void 0:d[e];return u?{...h,score:u.score,comp:u.comp,allScores:u.allScores}:{...h,score:null,comp:null,allScores:null}})}})}function dn(t,e){return!Array.isArray(t)||!e||e===le?t:t.map(o=>{var h;const r=(o==null?void 0:o.monthlyScores)||[];if(!r.length)return o;const a=r.filter(u=>{var d;return(d=u==null?void 0:u.byLlm)==null?void 0:d[e]}),i=a[a.length-1]||null,c=a.length>=2?a[a.length-2]:null;if(!i)return o;const s=i.byLlm[e],p=(h=c==null?void 0:c.byLlm)==null?void 0:h[e],y=s.compScore??o.compScore;return{...o,score:s.score??o.score,prev:(p==null?void 0:p.score)??null,compScore:y,compName:s.compName??o.compName,allScores:s.allScores??o.allScores,gap:+((s.score??o.score)-y||0).toFixed(2),monthlyScores:r.map(u=>{var m;const d=(m=u==null?void 0:u.byLlm)==null?void 0:m[e];return d?{...u,score:d.score,compScore:d.compScore,compName:d.compName,allScores:d.allScores}:{...u,score:null,compScore:null,compName:null,allScores:null}})}})}function Jn(t,e){if(!Array.isArray(t)||!e||e===le)return(t||[]).filter(a=>!a.llmModel||a.llmModel===le||a.llmModel==="TOTAL"||a.llmModel==="All");const o={};t.forEach(a=>{const i=`${a.date}|${a.country}|${a.division}`;o[i]||(o[i]={}),o[i][a.llmModel]=a});const r=[];return Object.values(o).forEach(a=>{const i=a[e]||a[le]||a.TOTAL||a.All;i&&r.push(i)}),r}function pn(t,e,o){if(!o||o===le||!Array.isArray(e)||!e.length)return t;const r=e.filter(c=>(c.country==="TOTAL"||c.country==="TTL")&&(c.division==="TOTAL"||c.division==="TTL"||c.division==="")&&c.llmModel===o);if(!r.length)return t;r.sort((c,s)=>String(c.date).localeCompare(String(s.date)));const a=r[r.length-1],i=r.length>=2?r[r.length-2]:null;return{...t,score:a.lg??t.score,prev:(i==null?void 0:i.lg)??t.prev,vsComp:a.comp??t.vsComp}}function Yn(t){const e=String(t??"").trim().toUpperCase();return!e||e==="TTL"||e==="TOTAL"}function un(t){const e=String(t??"").trim();return!e||/^(total|all|ttl)$/i.test(e)}function hn(t){const e=new Map;(t||[]).forEach(r=>{if(!r||!r.domain)return;const a=Number(r.citations)||0;if(!(a>0))return;e.has(r.domain)||e.set(r.domain,{cnty:r.cnty,domain:r.domain,ttlSum:0,ttlTop:0,ttlType:"",prdSum:0,prdTop:0,prdType:""});const i=e.get(r.domain);Yn(r.prd)?(i.ttlSum+=a,a>i.ttlTop&&(i.ttlTop=a,i.ttlType=r.type||"")):(i.prdSum+=a,a>i.prdTop&&(i.prdTop=a,i.prdType=r.type||""))});const o=[];return e.forEach(r=>{const a=r.ttlSum>0,i=a?r.ttlSum:r.prdSum;i>0&&o.push({cnty:r.cnty,domain:r.domain,type:(a?r.ttlType:r.prdType)||"",citations:i})}),o.sort((r,a)=>a.citations-r.citations||String(r.domain).localeCompare(String(a.domain))),o.forEach((r,a)=>{r.rank=a+1}),o}const tt="'LGEIText','LG Smart', 'Arial Narrow', 'Malgun Gothic', Arial, sans-serif",Xn=["TV","모니터","Monitor","오디오","Audio","AV","세탁기","WM","냉장고","REF","식기세척기","DW","청소기","VC","Cooking","쿠킹","RAC","Aircare","Air Care","에어케어"];function Me(t){const e=Xn.indexOf(t);return e>=0?e:999}function Rt(t){return typeof t!="string"?String(t??""):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Lo(t){if(!t||!String(t).trim())return"";const e=c=>Rt(c).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),o=String(t).split(/\n/),r=[];let a=[];const i=()=>{a.length&&(r.push(`<p style="margin:0 0 10px;font-size:13px;line-height:1.75;font-family:${tt};color:#222;">${a.map(e).join("<br/>")}</p>`),a=[])};for(const c of o){const s=c.trim();if(!s){i();continue}let p;(p=s.match(/^(\d+)\.(\d+)\.?\s+(.+)$/))?(i(),r.push(`<h3 style="font-size:14px;font-weight:700;margin:14px 0 6px;font-family:${tt};color:#111;">${Rt(p[1])}.${Rt(p[2])} ${e(p[3])}</h3>`)):(p=s.match(/^(\d+)\.\s+(.+)$/))?(i(),r.push(`<h2 style="font-size:16px;font-weight:700;margin:22px 0 10px;border-top:1px solid #999;padding-top:12px;font-family:${tt};color:#000;">${Rt(p[1])}. ${e(p[2])}</h2>`)):a.push(s)}return i(),r.join("")}const $o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];function so(t){return $o.filter(e=>t.includes(e)).concat(t.filter(e=>!$o.includes(e)))}const Zn={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"};function lo(t){return Zn[String(t||"").trim().toUpperCase()]||t}function ae(t){return t==null||isNaN(t)?"—":Number(t).toFixed(1)}function Ue(t,e){if(t==null||e==null||e===0)return"—";const o=+(t-e).toFixed(1);return o===0?"0.0":(o>0?"+":"")+o.toFixed(1)}function Pe(t,e){return t==null||e==null||e===0?"—":Math.round(t/e*100)+"%"}function ye(t,e){if(t==null||e==null||e===0)return null;const o=t/e*100;return o>=100?"#D1FAE5":o>=80?"#FEF3C7":"#FFE4E6"}function Qn(t){if(!t)return null;const e=t.toLowerCase();return e.includes("youtube")?{bg:"#FFE4E6",color:"#9F1239"}:e.includes("reddit")?{bg:"#FFEDD5",color:"#9A3412"}:null}function tr(t,e,o){if(!t||!Object.keys(t).length)return"";const r=o==="en"?{title:"Monthly Visibility — BU Totals (Sheet Values)",bu:"BU",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"본부별 종합 (시트 합계 직접 사용)",bu:"본부",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},a=["MS","HS","ES"],c=a.filter(s=>t[s]).concat(Object.keys(t).filter(s=>!a.includes(s))).map(s=>{const p=t[s],y=(e||{})[s],h=p.comp>0?Math.round(p.lg/p.comp*100):100,u=ye(p.lg,p.comp)||"#FFFFFF",d=y&&y.lg!=null?Ue(p.lg,y.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};font-weight:700;text-align:center;background:#F5F5F5;">${Rt(s)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${u};">${ae(p.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;background:${u};">${ae(p.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${u};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;">${d}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${r.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.bu}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.mom}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function er(t,e,o){if(!t||!Object.keys(t).length)return"";const r=o==="en"?{title:"Monthly Visibility — Country Totals (Sheet Values)",country:"Country",lg:"LG (%)",comp:"Comp (%)",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"국가별 종합 (시트 합계 직접 사용)",country:"국가",lg:"LG (%)",comp:"경쟁사 (%)",ratio:"경쟁비",mom:"MoM(%p)"},i=so(Object.keys(t)).map(c=>{const s=t[c],p=(e||{})[c],y=s.comp>0?Math.round(s.lg/s.comp*100):100,h=ye(s.lg,s.comp)||"#FFFFFF",u=p&&p.lg!=null?Ue(s.lg,p.lg):"—";return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};font-weight:700;text-align:center;background:#F5F5F5;">${Rt(lo(c))}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${h};">${ae(s.lg)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;background:${h};">${ae(s.comp)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${h};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;">${u}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${r.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.country}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.lg}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.comp}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.ratio}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.mom}</th>
    </tr></thead>
    <tbody>${i}</tbody>
  </table>`}function or(t,e,o,r){const a=o==="en"?{product:"Product",metric:"Metric",title:"Monthly GEO Visibility — Country × Product (Pivot)",lg:"LG",ratio:"vs Comp"}:{product:"제품",metric:"구분",title:"월간 GEO Visibility — 국가별 × 제품별",lg:"LG",ratio:"경쟁비"},i={};(e||[]).forEach(b=>{b.country&&b.product&&(i[`${b.country}|${b.product}`]=b.score)});const c={},s=new Set,p=new Set;(t||[]).forEach(b=>{!b.country||b.country==="TTL"||b.country==="TOTAL"||!b.product||(s.add(b.country),p.add(b.product),c[b.product]||(c[b.product]={}),c[b.product][b.country]=b)});const y=so(Array.from(s)),h=Array.from(p).sort((b,v)=>Me(b)-Me(v));if(!h.length||!y.length)return`<p style="font-size:11px;color:#666;font-family:${tt};">데이터가 없습니다.</p>`;const u={};(r||[]).forEach(b=>{[b.kr,b.category,b.id,b.en].filter(Boolean).forEach(w=>{u[w]=b})});const m='<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#FBBF24;min-width:55px;">TTL</th>'+y.map(b=>`<th style="border:1px solid #999;padding:4px 6px;font-size:10px;font-weight:700;text-align:center;background:#E8E8E8;min-width:50px;">${Rt(lo(b))}</th>`).join(""),k=[];return h.forEach((b,v)=>{const w=v%2===0?"#FFFFFF":"#FAFAFA",x=u[b],j=(x?ye(x.score,x.vsComp):null)||w,D=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;font-weight:700;background:${j};">${x?ae(x.score):"—"}</td>`,W=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;font-weight:700;background:${j};">${x?Pe(x.score,x.vsComp):"—"}</td>`,L=`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;background:${j};color:#1A1A1A;font-weight:600;">${x!=null&&x.compName?Rt(x.compName):"—"}</td>`,_=y.map(H=>{var z;const F=(z=c[b])==null?void 0:z[H],A=(F?ye(F.score,F.compScore):null)||w;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;font-weight:700;background:${A};">${F?ae(F.score):"—"}</td>`}).join(""),V=y.map(H=>{var z;const F=(z=c[b])==null?void 0:z[H],A=(F?ye(F.score,F.compScore):null)||w;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;font-weight:700;background:${A};">${F?Pe(F.score,F.compScore):"—"}</td>`}).join(""),G=y.map(H=>{var z;const F=(z=c[b])==null?void 0:z[H],A=(F?ye(F.score,F.compScore):null)||w;return`<td style="border:1px solid #999;padding:3px 5px;font-size:10px;font-family:${tt};text-align:center;background:${A};color:#1A1A1A;font-weight:600;">${F!=null&&F.compName?Rt(F.compName):"—"}</td>`}).join("");k.push(`
      <tr>
        <td rowspan="3" style="border:1px solid #999;padding:4px 6px;font-size:11px;font-family:${tt};font-weight:700;background:#F0F0F0;text-align:center;vertical-align:middle;white-space:nowrap;">${Rt(b)}</td>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${tt};font-weight:600;background:#F5F5F5;white-space:nowrap;">${a.lg} (%)</td>
        ${D}${_}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${tt};background:#F5F5F5;white-space:nowrap;">${a.ratio}</td>
        ${W}${V}
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:3px 6px;font-size:10px;font-family:${tt};background:#F5F5F5;white-space:nowrap;">${o==="en"?"Top Comp":"경쟁사"}</td>
        ${L}${G}
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
  </div>`}function nr(t,e,o){const r=o==="en"?{title:"Monthly GEO Visibility — Product Summary (TTL)",bu:"BU",product:"Product",lg:"LG",comp:"Comp",compName:"Comp Name",ratio:"vs Comp",mom:"MoM(%p)"}:{title:"월간 GEO Visibility — 제품별 종합 (TTL)",bu:"본부",product:"제품",lg:"LG",comp:"경쟁사",compName:"경쟁사명",ratio:"경쟁비",mom:"MoM(%p)"},a={};(e||[]).forEach(p=>{p.id&&(a[p.id]=p.score)});const i=["MS","HS","ES"],c={};(t||[]).forEach(p=>{const y=p.bu||"OTHER";c[y]||(c[y]=[]),c[y].push(p)});const s=[];return i.forEach(p=>{const y=(c[p]||[]).slice().sort((h,u)=>Me(h.kr||h.category||h.id)-Me(u.kr||u.category||u.id));y.forEach((h,u)=>{const d=h.prev!=null&&h.prev>0?h.prev:a[h.id],m=Ue(h.score,d),k=ye(h.score,h.vsComp)||"#FFFFFF";s.push(`<tr>
        ${u===0?`<td rowspan="${y.length}" style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};font-weight:700;background:#F5F5F5;text-align:center;vertical-align:middle;">${p}</td>`:""}
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;">${Rt(h.kr||h.id)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${k};">${ae(h.score)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;background:${k};">${ae(h.vsComp)}%</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;background:${k};">${Rt(h.compName||"")}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;font-weight:700;background:${k};">${Pe(h.score,h.vsComp)}</td>
        <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-family:${tt};text-align:center;">${m}</td>
      </tr>`)})}),`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${r.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead>
      <tr style="background:#E8E8E8;">
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.bu}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.product}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.lg}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.comp}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.compName}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.ratio}</th>
        <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.mom}</th>
      </tr>
    </thead>
    <tbody>
      ${s.join("")}
    </tbody>
  </table>`}function rr(t,e){if(!t||!t.length)return"";const o=e==="en"?{title:"Citation by Category",rank:"Rank",source:"Category",score:"Citations",ratio:"Share"}:{title:"Citation 카테고리별",rank:"순위",source:"카테고리",score:"인용수",ratio:"비중"},r=t.reduce((i,c)=>i+(c.score||0),0),a=t.map((i,c)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:center;">${c+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};">${Rt(i.source||i.category||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;font-weight:700;">${(i.score||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;">${r>0?(i.score/r*100).toFixed(1)+"%":"—"}</td>
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
  </table>`}function ir(t,e){const o=hn((t||[]).filter(s=>(s.cnty==="TTL"||s.cnty==="TOTAL"||!s.cnty)&&un(s.llm)));if(!o.length)return"";const r=o.slice(0,20),a=e==="en"?{title:"Citation by Domain (Top 20)",rank:"Rank",domain:"Domain",type:"Type",score:"Citations"}:{title:"Citation 도메인별 Top 20",rank:"순위",domain:"도메인",type:"유형",score:"인용수"},i=o.reduce((s,p)=>s+(p.citations||0),0),c=r.map((s,p)=>`
    <tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:center;">${p+1}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};">${Rt(s.domain||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};">${Rt(s.type||"")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;font-weight:700;">${(s.citations||0).toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;">${i>0?(s.citations/i*100).toFixed(1)+"%":"—"}</td>
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
  </table>`}function ar(t,e){const o={};(t||[]).forEach(s=>{!s.cnty||s.cnty==="TTL"||s.cnty==="TOTAL"||un(s.llm)&&(o[s.cnty]||(o[s.cnty]=[]),o[s.cnty].push(s))}),Object.keys(o).forEach(s=>{o[s]=hn(o[s])});const r=so(Object.keys(o));if(!r.length)return"";const a=e==="en"?{title:"Citation by Country (Top 5 Domains)",country:"Country",total:"Total"}:{title:"국가별 Citation Top 5 도메인",country:"국가",total:"전체"},i=5,c=r.map(s=>{const p=o[s],y=p.reduce((d,m)=>d+(m.citations||0),0),h=p.slice(0,i),u=[];for(let d=0;d<i;d++){const m=h[d],k=m?Qn(m.domain):null,b=k?`background:${k.bg};`:"",v=k?`color:${k.color};font-weight:700;`:"";u.push(`<td style="border:1px solid #999;padding:5px 8px;font-size:10px;font-family:${tt};${b}${v}">${m?`${Rt(m.domain||"")} <span style="color:#666;font-weight:400;">(${(m.citations||0).toLocaleString("en-US")})</span>`:"—"}</td>`)}return`<tr>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};font-weight:700;background:#F5F5F5;text-align:center;">${Rt(lo(s))}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;font-weight:700;">${y.toLocaleString("en-US")}</td>
      ${u.join("")}
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${a.title}</h2>
  <div style="overflow-x:auto;">
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${a.country}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:80px;">${a.total}</th>
      ${Array.from({length:i},(s,p)=>`<th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">#${p+1}</th>`).join("")}
    </tr></thead>
    <tbody>${c}</tbody>
  </table>
  </div>`}function sr(t,e){if(!t||!t.lg)return"";const o=t.lg,r=t.samsung||{},a=Object.keys(o).filter(s=>o[s]!=null);if(!a.length)return"";const i=e==="en"?{title:"Dotcom Citation — LG vs Samsung",type:"Page Type",lg:"LG",sam:"Samsung",diff:"Diff",winner:"Winner"}:{title:"닷컴 Citation — LG vs Samsung",type:"페이지 유형",lg:"LG",sam:"Samsung",diff:"차이",winner:"우위"},c=a.map(s=>{const p=o[s]||0,y=r[s]||0,h=p-y,u=h>0?"LG":h<0?"SS":"=",d=h>0?"#86EFAC":h<0?"#FCA5A5":"#FFFFFF",m=h>0?"#14532D":h<0?"#7F1D1D":"#1A1A1A";return`<tr style="background:${d};color:${m};">
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};font-weight:${s==="TTL"?"900":"600"};">${Rt(s)}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;font-weight:700;">${p.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;">${y.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:right;font-weight:700;">${h>0?"+":""}${h.toLocaleString("en-US")}</td>
      <td style="border:1px solid #999;padding:5px 8px;font-size:11px;font-family:${tt};text-align:center;font-weight:900;">${u}</td>
    </tr>`}).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:24px 0 10px;font-family:${tt};color:#000;">${i.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${i.type}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${i.lg}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${i.sam}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;">${i.diff}</th>
      <th style="border:1px solid #999;padding:6px 8px;font-size:11px;font-weight:700;text-align:center;width:60px;">${i.winner}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function lr(t,e,o){var s;if(!t||!t.length)return"";const r=((s=t[0])==null?void 0:s.targetMonth)||"3월",a=e==="en"?{title:`Progress Tracker — ${r} Executive Summary`,cat:"Task Category",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`Progress Tracker — ${r} Executive Summary`,cat:"과제 구분",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function i(p){return p>=80?"#D1FAE5":p>=50?"#FEF3C7":"#FEE2E2"}const c=t.map(p=>{const y=(p.monthRate||0).toFixed(0),h=(p.progressRate||0).toFixed(0);return`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${tt};background:#F5F5F5;">${Rt(p.category)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${i(p.monthRate)};">${y}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(p.monthActual||0).toLocaleString()} / ${(p.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${i(p.progressRate)};">${h}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(p.cumActual||0).toLocaleString()} / ${(p.annualGoal||0).toLocaleString()}</td>
    </tr>`}).join("");return`
  <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${tt};color:#000;">Progress Tracker</h1>
  <h2 style="font-size:16px;font-weight:700;margin:10px 0;font-family:${tt};color:#000;">${a.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.cat}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r} ${a.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${a.count}</th>
    </tr></thead>
    <tbody>${c}</tbody>
  </table>`}function cr(t,e){var c;if(!t||!t.length)return"";const o=((c=t[0])==null?void 0:c.targetMonth)||"3월",r=e==="en"?{title:`${o} Achievement by Organization`,org:"Organization",tasks:"Tasks",rate:"Achievement",count:"Actual/Goal",progress:"YTD Progress"}:{title:`${o} 조직별 달성 현황`,org:"조직",tasks:"과제수",rate:"달성률",count:"실적/목표",progress:"연간 진척률"};function a(s){return s>=80?"#D1FAE5":s>=50?"#FEF3C7":"#FEE2E2"}const i=t.map(s=>`<tr>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;font-family:${tt};background:#F5F5F5;">${Rt(s.stakeholder)}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${s.taskCount}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(s.monthRate)};">${(s.monthRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.monthActual||0).toLocaleString()} / ${(s.monthGoal||0).toLocaleString()}</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;font-weight:700;text-align:center;background:${a(s.progressRate)};">${(s.progressRate||0).toFixed(0)}%</td>
      <td style="border:1px solid #999;padding:6px 10px;font-size:12px;text-align:center;">${(s.cumActual||0).toLocaleString()} / ${(s.annualGoal||0).toLocaleString()}</td>
    </tr>`).join("");return`
  <h2 style="font-size:16px;font-weight:700;margin:16px 0 10px;font-family:${tt};color:#000;">${r.title}</h2>
  <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;font-family:${tt};">
    <thead><tr style="background:#E8E8E8;">
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.org}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.tasks}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${o} ${r.rate}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.count}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.progress}</th>
      <th style="border:1px solid #999;padding:8px 10px;font-size:12px;font-weight:700;text-align:center;">${r.count}</th>
    </tr></thead>
    <tbody>${i}</tbody>
  </table>`}function co(t,e,o,r,a={},i="ko",c=[],s=[],p={}){const{productsCntyPrev:y=[],productsPrev:h=[],categoryStats:u=null,stakeholderStats:d=null,cntyKeys:m=null,llmModel:k,monthlyVis:b}=p;if(k&&k!=="Total"&&(o=cn(o,k),c=dn(c,k),e=pn(e,b,k)),Array.isArray(m)&&m.length>0){const x=new Set(m.map(M=>String(M).toUpperCase()));c=(c||[]).filter(M=>M&&x.has(String(M.country).toUpperCase())),s=(s||[]).filter(M=>M&&x.has(String(M.country).toUpperCase()))}const v=i==="en"?"GEO Monthly Report":"GEO 월간 보고서",w=t.period||"";return`<!DOCTYPE html><html lang="${i}"><head>
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
      ${Lo(t.monthlyReportBody)}
    </section>`:""}

    ${e&&e.score!=null?`
    <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;margin-bottom:8px;font-family:${tt};">
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;width:30%;">${i==="en"?"Total LG Visibility":"전체 LG Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${ae(e.score)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${i==="en"?"Competitor (Samsung) Visibility":"경쟁사(Samsung) Visibility"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${ae(e.vsComp)}%</td>
      </tr>
      <tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">${i==="en"?"vs Competitor":"경쟁사 대비"}</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;text-align:right;">${Pe(e.score,e.vsComp)}</td>
      </tr>
      ${e.prev!=null&&e.prev>0?`<tr>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;font-weight:700;background:#F5F5F5;">MoM(%p)</td>
        <td style="border:1px solid #999;padding:8px 12px;font-size:13px;text-align:right;">${Ue(e.score,e.prev)}</td>
      </tr>`:""}
    </table>`:""}

    ${t.showMonthlyDeltaAnalysis!==!1&&t.monthlyDeltaAnalysis?`
    <section style="margin-bottom:28px;">
      <h1 style="font-size:18px;font-weight:700;margin:0 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${tt};color:#000;">${i==="en"?"Change Driver Analysis":"증감 요인 분석"}</h1>
      ${Lo(t.monthlyDeltaAnalysis)}
    </section>`:""}

    ${tr(e==null?void 0:e.buTotals,e==null?void 0:e.buTotalsPrev,i)}
    ${er(e==null?void 0:e.countryTotals,e==null?void 0:e.countryTotalsPrev,i)}
    ${nr(o,h,i)}
    ${or(c,y,i,o)}

    <h1 style="font-size:18px;font-weight:700;margin:32px 0 6px;border-top:2px solid #000;padding-top:14px;font-family:${tt};color:#000;">${i==="en"?"Citation Analysis":"Citation 분석"}</h1>
    ${rr(r,i)}
    ${ir(s,i)}
    ${ar(s,i)}
    ${sr(a,i)}

    ${lr(u,i)}
    ${cr(d,i)}

    <div style="margin-top:32px;padding-top:12px;border-top:1px solid #999;font-size:11px;color:#666;font-family:${tt};">
      <p style="margin:0;">${i==="en"?"LG Electronics · D2C Digital Marketing Team":"LG전자 · D2C디지털마케팅팀"}</p>
    </div>
  </div>
</body></html>`}const It="#CF0652",E="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",dr=`1. GEO 최적화의 중요성 및 방향성 정의

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

실시간 지표 모니터링이 가능한 대시보드를 오픈하였으며, 'Action Item Tracker'를 통해 각 조직별 실행 목표 및 과제 진척도를 모니터링합니다. 하반기에는 지역별 GEO 위원회를 신설하여 현지 밀착형 최적화 지원을 강화할 예정입니다.`,Ie={period:"Feb 2026",team:"D2C디지털마케팅팀",reportNo:"Vol.03",reportType:"GEO 월간 성과 분석 리포트",title:"생성형 AI 엔진 가시성(Visibility) 성과 분석",titleFontSize:24,titleColor:"#1A1A1A",dateLine:"As of Feb 2026",totalInsight:"권위 있는 인용 출처와 통계 데이터를 활용한 Citation Optimization 전략은 생성형 AI 검색 엔진에서의 가시성을 최대 30~40% 향상시킬 수 있습니다. 청소기·식기세척기 카테고리의 구조화 데이터 강화가 시급히 필요합니다.",showTotalInsight:!0,showInsightV2:!1,showInsightV3:!0,productInsight:"",showProductInsight:!1,productHowToRead:"",showProductHowToRead:!1,citationInsight:"",showCitationInsight:!1,citationHowToRead:"",showCitationHowToRead:!1,dotcomInsight:"",showDotcomInsight:!1,dotcomHowToRead:"",showDotcomHowToRead:!1,cntyInsight:"",showCntyInsight:!1,cntyHowToRead:"",showCntyHowToRead:!1,showHighlight:!0,highlightInsight:"",showHighlightInsight:!1,bumpInsight:"",showBumpInsight:!1,hlChapterTitle:"",hlWeeklyTitle:"",hlModelTitle:"",hlBumpTitle:"",kpiLogicText:"",showKpiLogic:!1,citDomainInsight:"",showCitDomainInsight:!1,citDomainHowToRead:"",showCitDomainHowToRead:!1,citCntyInsight:"",showCitCntyInsight:!1,citCntyHowToRead:"",showCitCntyHowToRead:!1,citPrdInsight:"",showCitPrdInsight:!1,citPrdHowToRead:"",showCitPrdHowToRead:!1,noticeText:"",showNotice:!0,todoText:"",showTodo:!1,showTodoV2:!1,monthlyReportBody:dr,showMonthlyReportBody:!0,showTotal:!0,showProducts:!0,showCnty:!0,showCitations:!0,showCitDomain:!0,showCitCnty:!0,showCitPrd:!0,citationTopN:10,citDomainTopN:10,showDotcom:!0,showDotcomChatGpt:!0,showTouchPointsBump:!0,showTouchPointsBumpChatGpt:!0,showDomainBumpModels:!0,bumpHighlight:[],showLlmShare:!0,llmShareTopN:10,cntyProductFilter:{},citCntyDomainFilter:{},citCntyFilter:{},aiPromptRules:`- 제공된 데이터에 있는 수치만 사용할 것 (추가 계산·추정 금지)
- 리포트에 표시된 제품명, 점수, 경쟁사명을 그대로 인용
- 존재하지 않는 수치를 만들어내지 말 것
- 전문적이지만 간결하게 3~5문장
- 비즈니스 보고서 톤 (한국어 작성 시)`},pr={score:42.7,prev:42.2,vsComp:42.2,rank:1,totalBrands:12},ur=[{id:"tv",kr:"TV",bu:"MS",score:45.5,prev:45.2,vsComp:41.2,compName:"삼성전자",compRatio:110,status:"lead",weekly:[44.2,45.2,44.9,45.5]},{id:"monitor",kr:"모니터",bu:"MS",score:59,prev:56.9,vsComp:49,compName:"삼성전자",compRatio:120,status:"lead",weekly:[55.2,56.9,57.4,59]},{id:"audio",kr:"오디오",bu:"MS",score:38.2,prev:36.5,vsComp:36.1,compName:"소니",compRatio:106,status:"lead",weekly:[35.1,36.5,37,38.2]},{id:"fridge",kr:"냉장고",bu:"HS",score:50.2,prev:48.7,vsComp:48.7,compName:"삼성전자",compRatio:103,status:"lead",weekly:[48.7,48.3,49.6,50.2]},{id:"washer",kr:"세탁기",bu:"HS",score:44.1,prev:42.8,vsComp:40.9,compName:"삼성전자",compRatio:108,status:"lead",weekly:[42.8,43,43.6,44.1]},{id:"cooking",kr:"Cooking",bu:"HS",score:32.4,prev:31,vsComp:34.7,compName:"보쉬",compRatio:93,status:"behind",weekly:[31,31.8,32,32.4]},{id:"dw",kr:"식기세척기",bu:"HS",score:26.9,prev:29.2,vsComp:35.4,compName:"보쉬",compRatio:76,status:"critical",weekly:[28.5,27.8,27.3,26.9]},{id:"vacuum",kr:"청소기",bu:"HS",score:6.1,prev:7.3,vsComp:22.4,compName:"다이슨",compRatio:27,status:"critical",weekly:[7,6.8,6.4,6.1]},{id:"rac",kr:"RAC",bu:"ES",score:33.1,prev:33.9,vsComp:28.5,compName:"삼성전자",compRatio:116,status:"lead",weekly:[33.9,34.1,33.5,33.1]},{id:"aircare",kr:"Aircare",bu:"ES",score:28.5,prev:26,vsComp:23.3,compName:"다이슨",compRatio:122,status:"lead",weekly:[24.8,26,27.1,28.5]}],hr={lg:{TTL:222447,PLP:52378,Microsites:24075,PDP:46880,Newsroom:21131,Support:15666,"Buying-guide":14471,Experience:47846},samsung:{TTL:199180,PLP:34177,Microsites:14708,PDP:35709,Newsroom:43152,Support:39144,"Buying-guide":32290}},fr=[{product:"TV",country:"미국",score:87.1,compName:"삼성",compScore:87.2,gap:-5.5},{product:"TV",country:"영국",score:87.2,compName:"삼성",compScore:86.3,gap:-1.7},{product:"TV",country:"독일",score:85.3,compName:"삼성",compScore:84.2,gap:-1.5},{product:"TV",country:"브라질",score:85.7,compName:"삼성",compScore:86.3,gap:-6.6},{product:"TV",country:"인도",score:84.7,compName:"삼성",compScore:85.2,gap:-5.1},{product:"TV",country:"멕시코",score:84.8,compName:"삼성",compScore:84.7,gap:.7},{product:"TV",country:"스페인",score:83.7,compName:"삼성",compScore:82.7,gap:-1.5},{product:"TV",country:"호주",score:87.4,compName:"삼성",compScore:87.3,gap:1.4},{product:"TV",country:"베트남",score:83.8,compName:"삼성",compScore:84.4,gap:-2.5},{product:"TV",country:"캐나다",score:86.1,compName:"삼성",compScore:86.2,gap:-.9},{product:"세탁기",country:"미국",score:44.7,compName:"",compScore:0,gap:-.6},{product:"세탁기",country:"영국",score:36.8,compName:"",compScore:0,gap:3.5},{product:"세탁기",country:"독일",score:19,compName:"",compScore:0,gap:-9.8},{product:"세탁기",country:"브라질",score:37.7,compName:"",compScore:0,gap:3.1},{product:"세탁기",country:"인도",score:50,compName:"",compScore:0,gap:.8},{product:"세탁기",country:"멕시코",score:43.4,compName:"",compScore:0,gap:-.8},{product:"세탁기",country:"스페인",score:35.5,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"호주",score:49.3,compName:"",compScore:0,gap:.6},{product:"세탁기",country:"베트남",score:51.3,compName:"",compScore:0,gap:1.4},{product:"세탁기",country:"캐나다",score:46.1,compName:"",compScore:0,gap:-.4},{product:"냉장고",country:"미국",score:43.6,compName:"",compScore:0,gap:3.3},{product:"냉장고",country:"영국",score:42.6,compName:"",compScore:0,gap:2.5},{product:"냉장고",country:"독일",score:35.8,compName:"",compScore:0,gap:-6.4},{product:"냉장고",country:"브라질",score:33.3,compName:"",compScore:0,gap:-2.2},{product:"냉장고",country:"인도",score:52.9,compName:"",compScore:0,gap:1.9},{product:"냉장고",country:"멕시코",score:50.2,compName:"",compScore:0,gap:-2.3},{product:"냉장고",country:"스페인",score:36.9,compName:"",compScore:0,gap:1.4},{product:"냉장고",country:"호주",score:45.8,compName:"",compScore:0,gap:1.3},{product:"냉장고",country:"베트남",score:48.8,compName:"",compScore:0,gap:2.2},{product:"냉장고",country:"캐나다",score:39.2,compName:"",compScore:0,gap:1.6}],mr=[{cnty:"TTL",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"TTL",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"TTL",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"TTL",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"TTL",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"TTL",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"TTL",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"TTL",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"TTL",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"TTL",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"US",rank:1,domain:"reddit.com",type:"Community",citations:209008},{cnty:"US",rank:2,domain:"youtube.com",type:"SNS",citations:143718},{cnty:"US",rank:3,domain:"rtings.com",type:"Review",citations:74054},{cnty:"US",rank:4,domain:"bestbuy.com",type:"Retail",citations:72185},{cnty:"US",rank:5,domain:"consumerreports.org",type:"Review",citations:66544},{cnty:"US",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:52190},{cnty:"US",rank:7,domain:"tomsguide.com",type:"Review",citations:43815},{cnty:"US",rank:8,domain:"techradar.com",type:"Review",citations:40717},{cnty:"US",rank:9,domain:"homedepot.com",type:"Retail",citations:37577},{cnty:"US",rank:10,domain:"samsung.com",type:"Brand/Manufacturer",citations:37144},{cnty:"CA",rank:1,domain:"reddit.com",type:"Community",citations:59466},{cnty:"CA",rank:2,domain:"youtube.com",type:"SNS",citations:40521},{cnty:"CA",rank:3,domain:"rtings.com",type:"Review",citations:33188},{cnty:"CA",rank:4,domain:"bestbuy.com",type:"Retail",citations:28422},{cnty:"CA",rank:5,domain:"consumerreports.org",type:"Review",citations:22011},{cnty:"CA",rank:6,domain:"lg.com",type:"Brand/Manufacturer",citations:18322},{cnty:"CA",rank:7,domain:"samsung.com",type:"Brand/Manufacturer",citations:13894},{cnty:"CA",rank:8,domain:"costco.ca",type:"Retail",citations:9788},{cnty:"CA",rank:9,domain:"canadianappliance.ca",type:"Retail",citations:8843},{cnty:"CA",rank:10,domain:"homedepot.ca",type:"Retail",citations:7321},{cnty:"UK",rank:1,domain:"reddit.com",type:"Community",citations:54287},{cnty:"UK",rank:2,domain:"youtube.com",type:"SNS",citations:36411},{cnty:"UK",rank:3,domain:"which.co.uk",type:"Review",citations:39853},{cnty:"UK",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:22108},{cnty:"UK",rank:5,domain:"samsung.com",type:"Brand/Manufacturer",citations:18900},{cnty:"UK",rank:6,domain:"techradar.com",type:"Review",citations:16422},{cnty:"UK",rank:7,domain:"johnlewis.com",type:"Retail",citations:15108},{cnty:"UK",rank:8,domain:"currys.co.uk",type:"Retail",citations:14322},{cnty:"UK",rank:9,domain:"argos.co.uk",type:"Retail",citations:12088},{cnty:"UK",rank:10,domain:"rtings.com",type:"Review",citations:11004},{cnty:"DE",rank:1,domain:"reddit.com",type:"Community",citations:42135},{cnty:"DE",rank:2,domain:"youtube.com",type:"SNS",citations:30188},{cnty:"DE",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:22005},{cnty:"DE",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:19422},{cnty:"DE",rank:5,domain:"mediamarkt.de",type:"Retail",citations:17890},{cnty:"DE",rank:6,domain:"saturn.de",type:"Retail",citations:14544},{cnty:"DE",rank:7,domain:"testberichte.de",type:"Review",citations:12908},{cnty:"DE",rank:8,domain:"chip.de",type:"Review",citations:11233},{cnty:"DE",rank:9,domain:"idealo.de",type:"Comparison",citations:10422},{cnty:"DE",rank:10,domain:"rtings.com",type:"Review",citations:9088},{cnty:"BR",rank:1,domain:"youtube.com",type:"SNS",citations:48322},{cnty:"BR",rank:2,domain:"reddit.com",type:"Community",citations:38901},{cnty:"BR",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:24005},{cnty:"BR",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:21188},{cnty:"BR",rank:5,domain:"magazineluiza.com.br",type:"Retail",citations:18443},{cnty:"BR",rank:6,domain:"americanas.com.br",type:"Retail",citations:15322},{cnty:"BR",rank:7,domain:"zoom.com.br",type:"Comparison",citations:12008},{cnty:"BR",rank:8,domain:"tecnoblog.net",type:"Review",citations:10688},{cnty:"BR",rank:9,domain:"buscape.com.br",type:"Comparison",citations:9443},{cnty:"BR",rank:10,domain:"techtudo.com.br",type:"Review",citations:8211},{cnty:"MX",rank:1,domain:"youtube.com",type:"SNS",citations:35188},{cnty:"MX",rank:2,domain:"reddit.com",type:"Community",citations:28422},{cnty:"MX",rank:3,domain:"lg.com",type:"Brand/Manufacturer",citations:20344},{cnty:"MX",rank:4,domain:"samsung.com",type:"Brand/Manufacturer",citations:18068},{cnty:"MX",rank:5,domain:"translate.google.com",type:"etc.",citations:9052},{cnty:"MX",rank:6,domain:"pccomponentes.com",type:"Retail",citations:7868},{cnty:"MX",rank:7,domain:"consumerreports.org",type:"Review",citations:6966},{cnty:"MX",rank:8,domain:"ocu.org",type:"Information",citations:6127},{cnty:"MX",rank:9,domain:"xataka.com",type:"Review",citations:5869},{cnty:"MX",rank:10,domain:"mejoresmarcas.com.mx",type:"Comparison",citations:5473},{cnty:"IN",rank:1,domain:"reddit.com",type:"Community",citations:47458},{cnty:"IN",rank:2,domain:"youtube.com",type:"SNS",citations:41583},{cnty:"IN",rank:3,domain:"samsung.com",type:"Brand/Manufacturer",citations:17434},{cnty:"IN",rank:4,domain:"lg.com",type:"Brand/Manufacturer",citations:15525},{cnty:"IN",rank:5,domain:"croma.com",type:"Retail",citations:14224},{cnty:"IN",rank:6,domain:"bajajfinserv.in",type:"Service",citations:12098},{cnty:"IN",rank:7,domain:"rtings.com",type:"Review",citations:10664},{cnty:"IN",rank:8,domain:"shop.haierindia.com",type:"Brand/Manufacturer",citations:8871},{cnty:"IN",rank:9,domain:"flipkart.com",type:"Retail",citations:7886},{cnty:"IN",rank:10,domain:"timesofindia.indiatimes.com",type:"News",citations:7048},{cnty:"AU",rank:1,domain:"reddit.com",type:"Community",citations:49142},{cnty:"AU",rank:2,domain:"appliancesonline.com.au",type:"Retail",citations:31543},{cnty:"AU",rank:3,domain:"choice.com.au",type:"Review",citations:24167},{cnty:"AU",rank:4,domain:"youtube.com",type:"SNS",citations:21724},{cnty:"AU",rank:5,domain:"thegoodguys.com.au",type:"Retail",citations:20874},{cnty:"AU",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:16161},{cnty:"AU",rank:7,domain:"lg.com",type:"Brand/Manufacturer",citations:13313},{cnty:"AU",rank:8,domain:"techradar.com",type:"Review",citations:13296},{cnty:"AU",rank:9,domain:"rtings.com",type:"Review",citations:11385},{cnty:"AU",rank:10,domain:"productreview.com.au",type:"Community",citations:9370},{cnty:"VN",rank:1,domain:"youtube.com",type:"SNS",citations:42020},{cnty:"VN",rank:2,domain:"dienmayxanh.com",type:"Retail",citations:25059},{cnty:"VN",rank:3,domain:"fptshop.com.vn",type:"Retail",citations:21174},{cnty:"VN",rank:4,domain:"dienmaycholon.com",type:"Retail",citations:18112},{cnty:"VN",rank:5,domain:"lg.com",type:"Brand/Manufacturer",citations:11371},{cnty:"VN",rank:6,domain:"samsung.com",type:"Brand/Manufacturer",citations:11193},{cnty:"VN",rank:7,domain:"reddit.com",type:"Community",citations:10238},{cnty:"VN",rank:8,domain:"panasonic.com",type:"Brand/Manufacturer",citations:8453},{cnty:"VN",rank:9,domain:"cellphones.com.vn",type:"Retail",citations:8176},{cnty:"VN",rank:10,domain:"dienmaythienphu.vn",type:"Retail",citations:8070}],gr=[{rank:1,source:"TechRadar",category:"모니터",score:87,delta:5.2,ratio:18.5},{rank:2,source:"RTINGS.com",category:"TV",score:82,delta:2.1,ratio:17.4},{rank:3,source:"Tom's Guide",category:"청소기",score:76,delta:-1.3,ratio:16.2},{rank:4,source:"Wirecutter",category:"냉장고",score:71,delta:8.4,ratio:15.1},{rank:5,source:"CNET",category:"세탁기",score:68,delta:3.7,ratio:14.5},{rank:6,source:"디지털타임스",category:"TV",score:64,delta:-2.5,ratio:13.6},{rank:7,source:"PCMag",category:"모니터",score:61,delta:1.9,ratio:13}],yr=["totalInsight","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","noticeText","kpiLogicText","todoText","todoNotice","aiPromptRules","monthlyReportBody"],fn=3;function br(t){try{const e=localStorage.getItem(t);if(!e)return null;const o=JSON.parse(e);return o._v===2?{metaKo:o.meta,metaEn:null,total:o.total,products:o.products,citations:o.citations,dotcom:o.dotcom,productsCnty:o.productsCnty,citationsCnty:o.citationsCnty,_v:3}:o._v!==fn?(localStorage.removeItem(t),null):o}catch(e){return console.warn("[cache] loadCache error:",e.message),null}}function xr(t,e){try{localStorage.setItem(t,JSON.stringify({...e,_v:fn}))}catch(o){console.warn("[cache] saveCache error (localStorage full?):",o.message)}}const He={"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"};function he(t){return{snapshots:`/api/${t}/snapshots`,syncData:`/api/${t}/sync-data`,publish:t==="dashboard"?"/api/publish-dashboard":t==="citation"?"/api/publish-citation":t==="monthly-report"?"/api/publish-monthly-report":"/api/publish"}}async function vr(t){try{const e=await fetch(he(t).snapshots);return e.ok?await e.json():[]}catch(e){return console.warn("[API] fetchSnapshots failed:",e.message),[]}}async function wr(t,e){try{const o=await fetch(`${he(t).snapshots}/${e}`);if(!o.ok)return null;const r=await o.json();return r.ok?r.snapshot:null}catch(o){return console.warn("[API] fetchSnapshotData failed:",o.message),null}}async function Cr(t,e,o){try{const r=await fetch(he(t).snapshots,{method:"POST",headers:He,body:JSON.stringify({name:e,data:o})});if(!r.ok)return console.warn("[API] postSnapshot:",r.status),null;const a=await r.json();return a.ok?a.snapshots:null}catch(r){return console.warn("[API] postSnapshot failed:",r.message),null}}async function kr(t,e,o){try{const r=await fetch(`${he(t).snapshots}/${e}`,{method:"PUT",headers:He,body:JSON.stringify({data:o})});if(!r.ok)return console.warn("[API] updateSnapshot:",r.status),null;const a=await r.json();return a.ok?a.snapshots:null}catch(r){return console.warn("[API] updateSnapshot failed:",r.message),null}}async function Sr(t,e){try{const o=await fetch(`${he(t).snapshots}/${e}`,{method:"DELETE"});if(!o.ok)return console.warn("[API] deleteSnapshot:",o.status),null;const r=await o.json();return r.ok?r.snapshots:null}catch(o){return console.warn("[API] deleteSnapshot failed:",o.message),null}}async function Nt(t,e,o="ko",r="",a=""){try{const i=await fetch("/api/generate-insight",{method:"POST",headers:He,body:JSON.stringify({type:t,data:e,lang:o,rules:r,extraPrompt:a})});if(!i.ok){const s=await i.json().catch(()=>({}));throw new Error(s.error||`HTTP ${i.status}`)}const c=await i.json();if(!c.ok)throw new Error(c.error||"AI 생성 실패");return c.insight}catch(i){throw console.error("[API] generateAIInsight failed:",i.message),i}}async function De(t){try{const e=await fetch(he(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?o.data:null}catch(e){return console.warn("[API] fetchSyncData failed:",e.message),null}}async function Bo(t){try{const e=await fetch(he(t).syncData);if(!e.ok)return null;const o=await e.json();return o.ok?{savedAt:o.savedAt??null,ageMs:typeof o.ageMs=="number"?o.ageMs:null,stale:!!o.stale,staleThresholdMs:o.staleThresholdMs??1440*60*1e3}:null}catch(e){return console.warn("[API] fetchSyncMeta failed:",e.message),null}}async function Fr(t,e,o={}){const{includeReadability:r=!1}=o,[a,i]=await Promise.all([De("dashboard").catch(()=>null),De("visibility").catch(()=>null)]),c={...a||{},...i||{}};if(a&&Object.keys(a).forEach(F=>{c[F]==null&&a[F]!=null&&(c[F]=a[F])}),i!=null&&i.meta&&(a!=null&&a.meta)&&(c.meta={...a.meta||{},...i.meta||{}}),!c||!Object.keys(c).length)throw new Error("동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.");const s=c.meta||{},p=c.total||{},h=(c.productsPartial||c.products||[]).map(F=>{var z;const I=F.weekly||((z=c.weeklyMap)==null?void 0:z[F.id])||[],A=F.vsComp>0?F.score/F.vsComp*100:100;return{...F,weekly:I,monthly:F.monthly||[],compRatio:F.compRatio||Math.round(A),status:F.status||(A>=100?"lead":A>=80?"behind":"critical")}}),u=c.citations||[],d=c.dotcom||{},m=c.productsCnty||[],k=c.citationsCnty||[],b=c.weeklyLabels||null,v=c.weeklyAll||{},w=c.citationsByCnty||{},x=c.dotcomByCnty||{},M=e(h,m,u,k,"ko"),j=e(h,m,u,k,"en"),D={weeklyPR:c.weeklyPR||[],weeklyPRLabels:c.weeklyPRLabels||[],monthlyPR:c.monthlyPR||[],monthlyPRLabels:c.monthlyPRLabels||[],weeklyBrandPrompt:c.weeklyBrandPrompt||[],weeklyBrandPromptLabels:c.weeklyBrandPromptLabels||[],unlaunchedMap:c.unlaunchedMap||{},prTopicList:c.prTopicList||[],weeklyLabelsFull:c.weeklyLabelsFull||[]},W={monthlyVis:c.monthlyVis||[],includeReadability:r},L=t(s,p,M.products,M.citations,d,"ko",M.productsCnty,M.citationsCnty,b,v,w,x,W,D),_=t({...s,title:s.title||"GEO KPI Dashboard"},p,j.products,j.citations,d,"en",j.productsCnty,j.citationsCnty,b,v,w,x,W,D),V=`${s.period||""} ${s.title||"KPI Dashboard"}`.trim(),H=await(await fetch("/api/publish-dashboard",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({title:V,htmlKo:L,htmlEn:_})})).json();if(!H.ok)throw new Error(H.error||"게시 실패");return H}async function Io(t,e){try{const o=await fetch(he(t).syncData,{method:"POST",headers:He,body:JSON.stringify({data:e})});o.ok||console.warn("[API] saveSyncData:",o.status)}catch(o){console.warn("[API] saveSyncData failed:",o.message)}}const Tr={미국:"US",영국:"UK",독일:"Germany",브라질:"Brazil",인도:"India",멕시코:"Mexico",스페인:"Spain",호주:"Australia",베트남:"Vietnam",캐나다:"Canada"},qe={TV:"TV",세탁기:"Washing Machine",냉장고:"Refrigerator",모니터:"Monitor",오디오:"Audio",Cooking:"Cooking",식기세척기:"Dishwasher",청소기:"Vacuum Cleaner",RAC:"RAC",Aircare:"Aircare"},Ro={삼성:"Samsung",삼성전자:"Samsung",보쉬:"Bosch",다이슨:"Dyson",소니:"Sony"};function we(t,e,o,r,a){return a!=="en"?{products:t,productsCnty:e,citations:o,citationsCnty:r}:{products:t.map(i=>({...i,kr:i.en||qe[i.kr]||i.kr,compName:i.compNameEn||Ro[i.compName]||i.compName})),productsCnty:e.map(i=>({...i,country:i.countryEn||Tr[i.country]||i.country,product:i.productEn||qe[i.product]||i.product,compName:i.compNameEn||Ro[i.compName]||i.compName})),citations:o.map(i=>({...i,category:i.categoryEn||qe[i.category]||i.category})),citationsCnty:r.map(i=>({...i,cnty:i.cntyEn||i.cnty}))}}async function Er(t,{from:e="ko",to:o="en"}={}){var r;try{const a=await fetch("/api/translate",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({texts:t,from:e,to:o})}),i=await a.json().catch(()=>({}));if(!a.ok||!i.ok)throw new Error(i.error||`번역 실패 (${a.status})`);if(!Array.isArray(i.translated)||i.translated.length!==t.length)throw new Error(`번역 결과 길이 불일치 (${(r=i.translated)==null?void 0:r.length} ≠ ${t.length})`);return i.translated}catch(a){return console.warn("[translate] 서버 프록시 실패 → 직접 호출 폴백:",a.message),Ar(t,{from:e,to:o})}}async function Ar(t,{from:e="ko",to:o="en"}={}){const a=[];for(let i=0;i<t.length;i+=5){const c=t.slice(i,i+5),s=await Promise.all(c.map(async p=>{if(!p||!p.trim())return p;const y=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${o}&dt=t&q=${encodeURIComponent(p)}`,h=await fetch(y);if(!h.ok)throw new Error(`번역 실패 (${h.status})`);return(await h.json())[0].map(d=>d[0]).join("")}));a.push(...s)}return a}const be=["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],Lr=["콘텐츠수정","신규콘텐츠제작","외부채널관리","닷컴기술개선"];function $r(t){const e=Lr.indexOf(t);return e>=0?e:999}function Re(t){return $r(t)}function po(t){return`${t.stakeholder||""}|${t.task||""}|${t.pageType||""}|${t.detail||""}`}function mn(t){const e={};return(t||[]).forEach(o=>{o.stakeholder&&o.task&&(e[po(o)]=o)}),e}function jo(t,e){var p,y,h,u;if(!((p=t==null?void 0:t.quantitativeGoals)!=null&&p.rows))return(h=(y=t==null?void 0:t._dashboard)==null?void 0:y.categoryStats)!=null&&h.length?[...t._dashboard.categoryStats].sort((d,m)=>Re(d.category)-Re(m.category)):null;const o=t.quantitativeGoals.rows,r=mn((u=t.quantitativeResults)==null?void 0:u.rows);new Date().getMonth()+1;let a=e,i=be.indexOf(a);i<0&&(a="3월",i=0);const c=[...new Set(o.map(d=>d.taskCategory).filter(Boolean))],s=i>0?be[i-1]:null;return c.map(d=>{const m=o.filter(L=>L.taskCategory===d);let k=0,b=0,v=0,w=0,x=0,M=0;m.forEach(L=>{var F,I,A,z,K;const _=po(L),V=r[_]||{},G=typeof((F=L.monthly)==null?void 0:F[a])=="number"?L.monthly[a]:0,H=typeof((I=V.monthly)==null?void 0:I[a])=="number"?V.monthly[a]:0;if(b+=G,k+=H,s){const X=typeof((A=L.monthly)==null?void 0:A[s])=="number"?L.monthly[s]:0,Z=typeof((z=V.monthly)==null?void 0:z[s])=="number"?V.monthly[s]:0;M+=X,x+=Z}for(let X=0;X<=i;X++){const Z=be[X];typeof((K=V.monthly)==null?void 0:K[Z])=="number"&&(v+=V.monthly[Z])}be.forEach(X=>{var Z;typeof((Z=L.monthly)==null?void 0:Z[X])=="number"&&(w+=L.monthly[X])})});const j=b>0?Math.round(k/b*1e3)/10:0,D=M>0?Math.round(x/M*1e3)/10:0,W=w>0?Math.round(v/w*1e3)/10:0;return{category:d,taskCount:m.length,targetMonth:a,monthRate:j,prevMonthRate:D,prevMonth:s,progressRate:W,monthActual:k,monthGoal:b,cumActual:v,annualGoal:w}}).sort((d,m)=>Re(d.category)-Re(m.category))}const Br=["MS","HS","ES","고가혁","브랜드","D2C","PR"];function Mo(t){const e=Br.indexOf(t);return e>=0?e:999}function Po(t,e){var s,p;if(!((s=t==null?void 0:t.quantitativeGoals)!=null&&s.rows))return null;const o=t.quantitativeGoals.rows,r=mn((p=t.quantitativeResults)==null?void 0:p.rows);new Date().getMonth()+1;let a=e,i=be.indexOf(a);return i<0&&(a="3월",i=0),[...new Set(o.map(y=>y.stakeholder).filter(Boolean))].map(y=>{const h=o.filter(w=>w.stakeholder===y);let u=0,d=0,m=0,k=0;h.forEach(w=>{var W,L,_;const x=po(w),M=r[x]||{},j=typeof((W=w.monthly)==null?void 0:W[a])=="number"?w.monthly[a]:0,D=typeof((L=M.monthly)==null?void 0:L[a])=="number"?M.monthly[a]:0;d+=j,u+=D;for(let V=0;V<=i;V++){const G=be[V];typeof((_=M.monthly)==null?void 0:_[G])=="number"&&(m+=M.monthly[G])}be.forEach(V=>{var G;typeof((G=w.monthly)==null?void 0:G[V])=="number"&&(k+=w.monthly[V])})});const b=d>0?Math.round(u/d*1e3)/10:0,v=k>0?Math.round(m/k*1e3)/10:0;return{stakeholder:y,taskCount:h.length,targetMonth:a,monthRate:b,monthActual:u,monthGoal:d,progressRate:v,cumActual:m,annualGoal:k}}).sort((y,h)=>Mo(y.stakeholder)-Mo(h.stakeholder))}function Ir(t){if(!t)return null;const e=String(t).match(/(\d{1,2})월/);if(e)return`${parseInt(e[1])}월`;const o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},r=String(t).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return r?`${o[r[1].toLowerCase()]}월`:null}async function gn(){const t=await eo(()=>import("./xlsx-CaYOwpyI.js").then(e=>e.x),__vite__mapDeps([0,1]));return t.default||t}const Rr=["tv","monitor","audio","washer","fridge","dw","vacuum","cooking","rac","aircare","styler"],oo={tv:"TV",monitor:"모니터",audio:"오디오",washer:"세탁기",fridge:"냉장고",dw:"식기세척기",vacuum:"청소기",cooking:"Cooking",rac:"RAC",aircare:"Aircare",styler:"Styler"},jr={tv:"MS",monitor:"MS",audio:"MS",washer:"HS",fridge:"HS",dw:"HS",vacuum:"HS",cooking:"HS",styler:"HS",rac:"ES",aircare:"ES"},Le={tv:"TV",monitor:"IT",audio:"AV",washer:"WM",fridge:"REF",dw:"DW",vacuum:"VC",cooking:"COOKING",rac:"RAC",aircare:"AIRCARE",styler:"STYLER"},Ee={TV:"tv",Monitor:"monitor",IT:"monitor",Audio:"audio",AV:"audio",WM:"washer",Washer:"washer","Washing Machine":"washer",REF:"fridge",Refrigerator:"fridge",DW:"dw",Dishwasher:"dw",VC:"vacuum",Vacuum:"vacuum","Vacuum Cleaner":"vacuum",Cooking:"cooking",Cook:"cooking",RAC:"rac",Aircare:"aircare","Air Care":"aircare",Styler:"styler"},Mr={TV:"TV",Monitor:"모니터",IT:"모니터",Audio:"오디오",AV:"오디오",WM:"세탁기",Washer:"세탁기","Washing Machine":"세탁기",REF:"냉장고",Refrigerator:"냉장고",DW:"식기세척기",Dishwasher:"식기세척기",VC:"청소기",Vacuum:"청소기","Vacuum Cleaner":"청소기",Cooking:"Cooking",Cook:"Cooking",RAC:"RAC",Aircare:"Aircare","Air Care":"Aircare",Styler:"Styler"};Object.fromEntries(Rr.map((t,e)=>[t,e]));const je={TV:"TV",MONITOR:"IT",IT:"IT",AUDIO:"AV",AV:"AV",WASHER:"WM",WM:"WM","WASHING MACHINE":"WM",REFRIGERATOR:"REF",REF:"REF",FRIDGE:"REF",DISHWASHER:"DW",DW:"DW",VACUUM:"VC",VC:"VC","VACUUM CLEANER":"VC",COOKING:"COOKING",COOK:"COOKING",RAC:"RAC",AIRCARE:"AIRCARE","AIR CARE":"AIRCARE",STYLER:"STYLER"},yn=new Set(Object.values(Le)),Do=[...new Set(Object.values(je))].filter(t=>!yn.has(t));Do.length&&console.warn("[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치",{unknown:Do,validCodes:[...yn]});function no(t,e,o){return console.error(`[${t}] FATAL:`,e,o??""),{}}function Yt(t,e,o){return console.warn(`[${t}] WARN:`,e,o??""),{}}function Pr(t,e,o){console.log(`[${t}]`,e,"")}function Dr(t,e){return Array.isArray(t)?t.length===0?(no(e,"invalid input: empty rows",{len:0}),!1):!0:(no(e,"invalid input: not an array",{type:typeof t}),!1)}function uo(t,e){return t.findIndex(o=>{if(!Array.isArray(o))return!1;const r=o.map(a=>String(a??"").trim().toLowerCase());return e.every(a=>r.some(i=>a instanceof RegExp?a.test(i):i===String(a).toLowerCase()))})}function Or(t,e="sync"){var a,i,c;const o=[];return!t||typeof t!="object"?(o.push("result 가 객체가 아님"),console.warn(`[${e}] verify FATAL:`,o),o):(((a=t.products)==null?void 0:a.length)||((i=t.productsPartial)==null?void 0:i.length)||o.push("products / productsPartial 둘 다 비어있음 — 대시보드 카드 누락 위험"),Array.isArray(t.productsCnty)&&t.productsCnty.length===0&&o.push("productsCnty 비어있음 — 국가별 그리드 누락"),t.unlaunchedMap&&!t.unlaunchedMap["BR|AV"]&&o.push("unlaunchedMap DEFAULT 누락 (BR|AV) — parseUnlaunched 가 DEFAULT 병합 안 함"),(c=t.weeklyLabels)!=null&&c.length&&t.weeklyLabels.every((p,y)=>p===`W${y+1}`)&&o.push("weeklyLabels 가 자동 생성 (W1,W2,...) — PR 라벨 폴백 미동작"),o.length?console.warn(`[${e}] verify: ${o.length}개 이슈 발견`,o):console.log(`[${e}] verify: invariant 통과`),o)}const _t={meta:"meta",visSummary:"Monthly Visibility Summary",productMS:"Monthly Visibility Product_CNTY_MS",productHS:"Monthly Visibility Product_CNTY_HS",productES:"Monthly Visibility Product_CNTY_ES",weeklyMS:"Weekly MS Visibility",weeklyHS:"Weekly HS Visibility",weeklyES:"Weekly ES Visibility",monthlyPR:"Monthly PR_수정",weeklyPR:"Weekly PR_수정",monthlyBrandPrompt:"Monthly Brand Prompt Visibility",weeklyBrandPrompt:"Weekly Brand Prompt Visibility",citPageType:"Citation-Page Type",citTouchPoints:"Citation-Touch Points",citDomain:"Citation-Domain",unlaunched:"unlaunched",prTopicList:"PR Topic List"},Oo=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide","Experience"],No=["TTL","PLP","Microsites","PDP","Newsroom","Support","Buying-guide"];async function Nr(t,e,o,r,a={}){const i=await gn(),c=i.utils.book_new(),s=i.utils.aoa_to_sheet([["[GEO Newsletter] 리포트 기본 정보 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요."],[""],["key","value","설명"],["period",t.period,"보고서 기간 (예: 2026년 3월)"],["team",t.team,"담당 팀명"],["reportNo",t.reportNo,"보고서 번호 (예: Vol.03)"],["reportType",t.reportType,"리포트 유형 (예: GEO 월간 성과 분석 리포트)"],["title",t.title,"리포트 제목"],["titleFontSize",t.titleFontSize,"제목 폰트 크기 (숫자, 예: 24)"],["titleColor",t.titleColor,"제목 색상 (HEX, 예: #1A1A1A)"],["dateLine",t.dateLine,"기준 텍스트 (예: 2026년 3월 기준)"],["showNotice",t.showNotice?"Y":"N","Notice 표시 여부 (Y/N)"],["noticeText",t.noticeText,"Notice 내용"],["totalInsight",t.totalInsight,"GEO 전략 인사이트"],["productInsight",t.productInsight,"제품별 GEO 인사이트"],["showProductInsight",t.showProductInsight?"Y":"N","제품별 인사이트 표시 (Y/N)"],["productHowToRead",t.productHowToRead,"제품별 읽는 법"],["showProductHowToRead",t.showProductHowToRead?"Y":"N","제품별 읽는 법 표시 (Y/N)"],["citationInsight",t.citationInsight,"Citation 인사이트"],["showCitationInsight",t.showCitationInsight?"Y":"N","Citation 인사이트 표시 (Y/N)"],["citationHowToRead",t.citationHowToRead,"Citation 읽는 법"],["showCitationHowToRead",t.showCitationHowToRead?"Y":"N","Citation 읽는 법 표시 (Y/N)"],["dotcomInsight",t.dotcomInsight,"닷컴 Citation 인사이트"],["showDotcomInsight",t.showDotcomInsight?"Y":"N","닷컴 인사이트 표시 (Y/N)"],["dotcomHowToRead",t.dotcomHowToRead,"닷컴 읽는 법"],["showDotcomHowToRead",t.showDotcomHowToRead?"Y":"N","닷컴 읽는 법 표시 (Y/N)"]]);s["!cols"]=[{wch:24},{wch:50},{wch:40}],i.utils.book_append_sheet(c,s,"meta");const p=i.utils.aoa_to_sheet([["[GEO Newsletter] 전체 GEO 가시성 지수 시트"],["※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력."],[""],["key","value","설명"],["score",e.score,"이번 달 전체 GEO 점수 (0~100, 소수점 가능)"],["prev",e.prev,"전월 GEO 점수 — 전월 대비 증감 자동 계산"],["vsComp",e.vsComp,"삼성전자 전체 GEO 점수 (0~100, 소수점 가능)"],["rank",e.rank,"전체 브랜드 중 LG전자 순위 (정수)"],["totalBrands",e.totalBrands,"비교 대상 전체 브랜드 수 (정수)"]]);p["!cols"]=[{wch:14},{wch:10},{wch:44}],i.utils.book_append_sheet(c,p,"total");const y=i.utils.aoa_to_sheet([["[GEO Newsletter] 제품별 데이터 시트"],["※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요."],["  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명"],[""],["id","bu","kr","score","prev","vsComp","compName"],...o.map(b=>[b.id,b.bu,b.kr,b.score,b.prev,b.vsComp,b.compName])]);y["!cols"]=[{wch:10},{wch:6},{wch:12},{wch:8},{wch:8},{wch:10},{wch:12}],i.utils.book_append_sheet(c,y,"products");const h=i.utils.aoa_to_sheet([["[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)"],["※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요."],["  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다."],[""],["id","kr","W1","W2","W3","W4"],...o.map(b=>[b.id,b.kr,...b.weekly])]);h["!cols"]=[{wch:10},{wch:12},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8},{wch:8}],i.utils.book_append_sheet(c,h,"weekly");const u=i.utils.aoa_to_sheet([["[GEO Newsletter] AI Citation 현황 시트"],["※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요."],["  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리"],["  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)"],[""],["rank","source","category","score","delta","ratio"],...r.map(b=>[b.rank,b.source,b.category,b.score,b.delta,b.ratio??0])]);u["!cols"]=[{wch:6},{wch:18},{wch:12},{wch:8},{wch:8}],i.utils.book_append_sheet(c,u,"citations");const d=(a==null?void 0:a.lg)||{},m=(a==null?void 0:a.samsung)||{},k=i.utils.aoa_to_sheet([["[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트"],["※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요."],[""],[...Oo.map(b=>`LG_${b}`),...No.map(b=>`Samsung_${b}`)],[...Oo.map(b=>d[b]??0),...No.map(b=>m[b]??0)]]);k["!cols"]=Array(15).fill({wch:14}),i.utils.book_append_sheet(c,k,"dotcom"),i.writeFile(c,"GEO_Newsletter_템플릿.xlsx")}function oe(t){const e=String(t??"").trim(),o=e.includes("%"),r=e.replace(/%/g,"").replace(/,/g,"").trim(),a=parseFloat(r)||0;return o?+a.toFixed(2):Math.abs(a)<=1&&a!==0?+(a*100).toFixed(2):+a.toFixed(2)}function Oe(t){return t==null||String(t).trim()===""?null:oe(t)}function Ht(t){return parseFloat(String(t??"").replace(/,/g,"").replace(/%/g,"").trim())||0}function ce(t){return String(t||"").replace(/[()]/g,"").replace(/\./g,"").trim().toUpperCase()}const _r={US:"US",USA:"US","UNITED STATES":"US",AMERICA:"US",CA:"CA",CAN:"CA",CANADA:"CA",UK:"UK",GB:"UK","GREAT BRITAIN":"UK","UNITED KINGDOM":"UK",BRITAIN:"UK",ENGLAND:"UK",DE:"DE",GER:"DE",GERMANY:"DE",DEUTSCHLAND:"DE",ES:"ES",SP:"ES",SPAIN:"ES",ESPAÑA:"ES",BR:"BR",BRA:"BR",BRAZIL:"BR",BRASIL:"BR",MX:"MX",MEX:"MX",MEXICO:"MX",MÉXICO:"MX",AU:"AU",AUS:"AU",AUSTRALIA:"AU",VN:"VN",VIE:"VN",VIET:"VN",VIETNAM:"VN","VIET NAM":"VN",IN:"IN",IND:"IN",INDIA:"IN",KR:"KR",KOR:"KR",KOREA:"KR","SOUTH KOREA":"KR",JP:"JP",JPN:"JP",JAPAN:"JP",CN:"CN",CHN:"CN",CHINA:"CN",FR:"FR",FRA:"FR",FRANCE:"FR",IT:"IT",ITA:"IT",ITALY:"IT",ITALIA:"IT"};function zr(t){const e=ce(t);return _r[e]||e}function Ce(t){const e=String(t||"").trim(),o={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let r=0,a=0;const i=e.match(/(\d{4})/);if(i)a=parseInt(i[1]);else{const s=e.match(/(\d{2})년/);if(s)a=2e3+parseInt(s[1]);else{const p=e.match(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+(\d{2})\b/i);p&&(a=2e3+parseInt(p[1]))}}const c=e.match(/(\d{1,2})월/);if(c)r=parseInt(c[1]);else{const s=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(s)r=o[s[1].toLowerCase()];else{const p=e.match(/\d{4}[-\/](\d{1,2})/);p&&(r=parseInt(p[1]))}}return a?a*12+r:r}function Gr(t){var Z;console.log(`[parseVisSummary] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((f,Q)=>console.log(`  row${Q}: [${(f||[]).slice(0,8).map(U=>JSON.stringify(String(U||"").trim())).join(", ")}]`));const e=["rank","totalBrands"],o=["score","prev","vsComp"],r={};let a=!1,i=-1;if(t.forEach((f,Q)=>{if(!f[0]||String(f[0]).startsWith("[")||String(f[0]).startsWith("※")||f[0]==="key")return;const U=String(f[0]).trim();(o.includes(U)||e.includes(U))&&(a||(i=Q),a=!0,e.includes(U)?r[U]=parseInt(f[1])||0:r[U]=oe(f[1]))}),a&&Object.keys(r).length>=2)return console.log(`[parseVisSummary] KV path 진입 (legacy) — trigger row${i}: r[0]='${(Z=t[i])==null?void 0:Z[0]}' / kvObj keys:`,Object.keys(r)),{total:r};console.log("[parseVisSummary] Table path 진입");let c=t.find(f=>f.some(Q=>String(Q||"").trim().toUpperCase()==="LG"));c||(c=t.find(f=>f.some(Q=>/^date$|^region$|^countries$|^country$|^divisions?$/i.test(String(Q||"").trim()))));const s=c?c.findIndex(f=>String(f||"").trim().toUpperCase()==="LG"):-1,p=c?c.findIndex(f=>{const Q=String(f||"").trim().toUpperCase();return Q==="SAMSUNG"||Q==="SAMSUMG"}):-1,y=c?c.findIndex(f=>/date/i.test(String(f||"").trim())):0,h=c?c.findIndex(f=>/countries|country/i.test(String(f||"").trim())):2,u=c?c.findIndex(f=>/divisions?/i.test(String(f||"").trim())):3,d=c?c.findIndex(f=>/^(llm\s*model|llm|model)$/i.test(String(f||"").trim())):-1,m=Math.max(y,h,u,d),k=s>=0?s:m>=0?m+1:4,b=p>=0?p:k+1;console.log(`[parseVisSummary] columns: date=${y} cnty=${h} div=${u} llm=${d} lg=${k}(raw=${s}) ss=${b}(raw=${p})`);const v=[];t.filter(f=>{const Q=String(f[y>=0?y:0]||"").trim();return Q&&!Q.startsWith("[")&&!Q.startsWith("※")&&!/^date$/i.test(Q)&&!/^key$/i.test(Q)}).forEach(f=>{const Q=String(f[y>=0?y:0]||"").trim(),U=ce(f[h>=0?h:2]),gt=String(f[u>=0?u:3]||"").trim().toUpperCase(),C=(d>=0?String(f[d]||"").trim():"")||"Total",S=oe(f[k]),O=oe(f[b]);Q&&S>0&&v.push({date:Q,country:U,division:gt,llmModel:C,lg:S,comp:O})});const x=v.filter(f=>(f.country==="TOTAL"||f.country==="TTL")&&(f.division==="TOTAL"||f.division==="TTL"||f.division==="")&&(f.llmModel==="Total"||f.llmModel==="TOTAL"||f.llmModel==="All"));x.sort((f,Q)=>Ce(f.date)-Ce(Q.date));const M=x[x.length-1],j=x.length>=2?x[x.length-2]:null;if(!M){const f=t.find(T=>T.some(C=>String(C||"").trim().toUpperCase()==="TOTAL"));if(!f)return Yt("parseVisSummary","no TOTAL row found",{sample:t.slice(0,5).map(T=>T==null?void 0:T.slice(0,6))});const Q=oe(f[k]),U=oe(f[b]),gt={total:{score:Q,prev:Q,vsComp:U,rank:Q>=U?1:2,totalBrands:12}};return v.length&&(gt.monthlyVis=v),gt}const D=M.lg,W=M.comp,L=j?j.lg:D,_=M.date,V=j?j.date:null;function G(f){const Q={};return v.filter(U=>U.date===f&&(U.country==="TOTAL"||U.country==="TTL")&&U.division&&U.division!=="TOTAL"&&U.division!=="TTL"&&U.division!==""&&(U.llmModel==="Total"||U.llmModel==="TOTAL"||U.llmModel==="All")).forEach(U=>{Q[U.division]={lg:U.lg,comp:U.comp}}),Q}const H=G(_),F=V?G(V):{};function I(f){const Q={};return v.filter(U=>U.date===f&&U.country&&U.country!=="TOTAL"&&U.country!=="TTL"&&(U.division==="TOTAL"||U.division==="TTL"||U.division==="")&&(U.llmModel==="Total"||U.llmModel==="TOTAL"||U.llmModel==="All")).forEach(U=>{Q[U.country]={lg:U.lg,comp:U.comp}}),Q}const A=I(_),z=V?I(V):{},K={total:{score:D,prev:L,vsComp:W,rank:D>=W?1:2,totalBrands:12},...Object.keys(H).length?{buTotals:H}:{},...Object.keys(F).length?{buTotalsPrev:F}:{},...Object.keys(A).length?{countryTotals:A}:{},...Object.keys(z).length?{countryTotalsPrev:z}:{}};_&&(K.derivedPeriod=_),v.length&&(K.monthlyVis=v);const X={};return v.forEach(f=>{X[f.date]=(X[f.date]||0)+1}),console.log(`[parseVisSummary] monthlyVis ${v.length}행 / unique dates:`,X,`/ TOTAL+TOTAL+Total 행: ${x.length}`),console.log("[parseVisSummary] 반환 keys:",Object.keys(K)),K}function Ur(t){console.log(`[parseProductCnty] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((a,i)=>console.log(`  row${i}: [${a.slice(0,8).map(c=>JSON.stringify(String(c||"").trim())).join(", ")}]`));const e={},o=[];t.forEach((a,i)=>{if(i===0)return;const c=String((a==null?void 0:a[1])||"").trim(),s=String((a==null?void 0:a[2])||"").trim().toUpperCase();c&&(e[c]=(e[c]||0)+1,(s==="TTL"||s==="TOTAL")&&o.push({date:c,cat:String((a==null?void 0:a[3])||"").trim(),llm:String((a==null?void 0:a[4])||"").trim()||"(empty)",div:String((a==null?void 0:a[0])||"").trim()}))}),console.log("[parseProductCnty] 모든 unique dates (시트 raw):",e),console.log("[parseProductCnty] TTL country 행들 (date / category / llmModel):"),o.forEach(a=>console.log(`  ${a.div} | ${a.date} | ${a.cat} | LLM='${a.llm}'`));const r=t.findIndex(a=>{const i=String(a[0]||"").trim().toLowerCase();return i==="div"||i==="division"||i==="divisions"});if(r<0){const a=t.findIndex(i=>i.some((c,s)=>s>=1&&String(c||"").trim().toUpperCase()==="LG"));return a<0?(console.warn("[parseProductCnty] header not found — no Div/Division/LG column"),{}):(console.log(`[parseProductCnty] fallback header at row${a}: [${t[a].slice(0,8).map(i=>JSON.stringify(String(i||"").trim())).join(", ")}]`),_o(t,a))}return console.log(`[parseProductCnty] header at row${r}: [${t[r].slice(0,8).map(a=>JSON.stringify(String(a||"").trim())).join(", ")}]`),_o(t,r)}function _o(t,e){const o=t[e],r=o.findIndex((u,d)=>d>=3&&String(u||"").trim().toUpperCase()==="LG");if(r<0)return console.warn("[parseProductCnty] LG column not found"),{};const a=o.findIndex(u=>/^(llm\s*model|llm|model)$/i.test(String(u||"").trim())),i=[];for(let u=r+1;u<o.length;u++){const d=String(o[u]||"").trim();d&&d.toUpperCase()!=="LG"&&i.push({name:d,col:u})}const c=t.slice(e+1).filter(u=>{const d=String(u[0]||"").trim();return d&&!d.startsWith("[")&&!d.startsWith("※")}),s={},p={};c.forEach(u=>{const d=String(u[0]||"").trim(),m=String(u[1]||"").trim(),k=String(u[2]||"").trim(),b=ce(u[2])||k,v=String(u[3]||"").trim(),x=(a>=0?String(u[a]||"").trim():"")||"Total",M=oe(u[r]),j=i.map(_=>({name:_.name,score:oe(u[_.col])})).filter(_=>_.score>0),D=[...j].sort((_,V)=>V.score-_.score)[0]||{name:"",score:0},W=+(M-D.score).toFixed(2),L={LG:M};if(j.forEach(_=>{L[_.name]=_.score}),b==="TTL"||b==="TOTAL"){const _=Ee[v]||v.toLowerCase(),V=Mr[v]||v;s[_]||(s[_]=[]),s[_].push({id:_,bu:d,kr:V,category:v,date:m,llmModel:x,score:M,vsComp:D.score,compName:D.name,allScores:L})}else{const _=`${v}|${b}`;p[_]||(p[_]=[]),p[_].push({product:v,country:b,date:m,llmModel:x,score:M,compName:D.name,compScore:D.score,gap:W,allScores:L})}}),console.log(`[parseProductCnty] TTL 제품: ${Object.keys(s).join(", ")||"없음"} / 국가별: ${Object.keys(p).length}건`);const y=[];for(const[u,d]of Object.entries(s)){const m=d.filter(x=>x.llmModel==="Total"||x.llmModel==="TOTAL"||x.llmModel==="All"),k=m.length?m:d;k.sort((x,M)=>Ce(x.date)-Ce(M.date));const b=k[k.length-1],v=k.length>=2?k[k.length-2].score:null;console.log(`[parseProductCnty] ${u}: dates=[${k.map(x=>x.date).join(",")}] score=${b.score} prev=${v} vsComp=${b.vsComp}`);const w=k.map(x=>{const M=d.filter(D=>D.date===x.date),j={};return M.forEach(D=>{j[D.llmModel]={score:D.score,comp:D.vsComp,allScores:D.allScores}}),{date:x.date,score:x.score,comp:x.vsComp,allScores:x.allScores,byLlm:j}});y.push({...b,prev:v,monthlyScores:w})}const h=[];for(const u of Object.values(p)){const d=u.filter(w=>w.llmModel==="Total"||w.llmModel==="TOTAL"||w.llmModel==="All"),m=d.length?d:u;m.sort((w,x)=>Ce(w.date)-Ce(x.date));const k=m[m.length-1],b=m.length>=2?m[m.length-2].score:null,v=m.map(w=>{const x=u.filter(j=>j.date===w.date),M={};return x.forEach(j=>{M[j.llmModel]={score:j.score,compScore:j.compScore,compName:j.compName,allScores:j.allScores}}),{date:w.date,score:w.score,compScore:w.compScore,compName:w.compName,allScores:w.allScores,byLlm:M}});h.push({...k,prev:b,monthlyScores:v})}return{...y.length?{productsPartial:y}:{},...h.length?{productsCnty:h}:{}}}function bn(t,e=0,o){const r=o??t.length;for(let a=e;a<r;a++){const i=[];for(const c of t[a]||[]){const s=String(c||"").split(/\n/)[0].trim();/^W\d+/i.test(s)&&i.push(s.toUpperCase())}if(i.length>=2)return i}return null}const Je={MS:{TV:"tv",Monitor:"monitor",AV:"audio"},ES:{RAC:"rac",Aircare:"aircare"}};function zo(t,e){var b;const o=e?Je[e]||{}:{...Je.MS,...Je.ES};if(!Object.keys(o).length)return Yt("parseDashboardLayout","no DASH_CAT_MAP for division",{div:e});const r=t.findIndex(v=>v.some(w=>String(w||"").trim()in o));if(r<0)return Yt("parseDashboardLayout","category row not found",{div:e,expectedKeys:Object.keys(o)});const a=t[r],i=t.findIndex((v,w)=>w>r&&v.some(x=>String(x||"").trim()==="TTL")),c=i>0?i+1:Math.min(r+20,t.length);let s=-1,p=-1;for(let v=r+1;v<c;v++){const w=t[v];if(!w.some(j=>String(j||"").trim().toUpperCase()==="LG"))continue;if(p<0&&(p=v),w.some(j=>{const D=String(j||"").trim().toLowerCase().replace(/[\s_-]/g,"");return D==="nonbrand"||D==="nb"})){s=v;break}}const y=s>=0?s:p>=0?p:i;if(y<0)return Yt("parseDashboardLayout","data row (LG/NB/TTL) not found",{div:e,catRowIdx:r,ttlRowIdx:i});const h=t[y],u=s>=0?"LG-NB":p>=0?"LG":"TTL",d={},m=Object.keys(o).map(v=>a.findIndex(w=>String(w||"").trim()===v)).filter(v=>v>=0).sort((v,w)=>v-w);for(const[v,w]of Object.entries(o)){const x=a.findIndex(D=>String(D||"").trim()===v);if(x<0)continue;const M=m.find(D=>D>x)||x+20,j=[];for(let D=x+1;D<M&&D<h.length;D++){const W=oe(h[D]);W>0&&j.push(W)}j.length&&(d[w]=j)}if(!Object.keys(d).length)return Yt("parseDashboardLayout","no weekly data extracted",{div:e,catRowIdx:r,dataRowIdx:y,dataRowLabel:u});const k=bn(t,r,c)||((b=Object.values(d)[0])==null?void 0:b.map((v,w)=>`W${w+1}`))||[];return{weeklyMap:d,weeklyLabels:k}}function Hr(t,e,o){for(const r of Object.values(t))for(const a of Object.values(r))for(const[i,c]of Object.entries(a))a[i]=c.slice(o);for(const[r,a]of Object.entries(e))e[r]=a.slice(o)}function Vr(t){const{data:e,rows:o,headerIdx:r,brandIdx:a,catIdx:i,countryIdx:c,isNonBrand:s,isTotal:p,weeklyMap:y,weeklyAll:h}=t;let u=t.wCols,d=t.weeklyLabels;if(!u.length){const m=e.find(k=>String(k[a]||"").trim().toUpperCase()==="LG"&&s(k));if(m){const k=[];for(let b=a+1;b<m.length;b++)if(String(m[b]||"").trim())k.push(b);else if(k.length)break;u=k,d=bn(o,0,r+1)||u.map((b,v)=>`W${v+1}`)}}return e.forEach(m=>{if(!s(m))return;const k=String(m[a]||"").trim();if(!k)return;const b=String(m[i>=0?i:0]||"").trim();if(!b)return;const v=Ee[b]||b.toLowerCase(),w=c>=0?ce(m[c]):"TOTAL",x=w==="TOTAL"||w==="TTL"||!w?"Total":w;h[v]||(h[v]={}),h[v][x]||(h[v][x]={}),h[v][x][k]=u.map(M=>Oe(m[M]))}),e.forEach(m=>{if(String(m[a]||"").trim().toUpperCase()!=="LG"||!s(m)||!p(m))return;const b=String(m[i>=0?i:0]||"").trim();b&&(y[Ee[b]||b.toLowerCase()]=u.map(v=>Oe(m[v])))}),{wCols:u,weeklyLabels:d}}function Wr(t){const{data:e,header:o,lgIdx:r,catIdx:a,isTotal:i,weeklyMap:c}=t,s=o.findIndex(h=>{const u=String(h||"").trim().toLowerCase();return u==="date"||u==="week"||u==="period"}),p={},y=[];return e.forEach(h=>{if(!i(h))return;const u=String(h[a>=0?a:3]||"").trim();if(u){if(s>=0){const d=String(h[s]||"").trim();d&&!y.includes(d)&&y.push(d)}p[u]=p[u]||[],p[u].push(Oe(h[r]))}}),Object.entries(p).forEach(([h,u])=>{c[Ee[h]||h.toLowerCase()]=u}),y.length?y:null}function Kr(t){const{data:e,wCols:o,catIdx:r,isTotal:a,weeklyMap:i}=t;e.forEach(c=>{if(!a(c))return;const s=String(c[r>=0?r:0]||"").trim();s&&(i[Ee[s]||s.toLowerCase()]=o.map(p=>Oe(c[p])))})}function Ye(t,e){const o={};let r=[],a=-1;for(let L=0;L<Math.min(t.length,10);L++){const _=t[L];if(!_)continue;let V=0;for(let G=0;G<_.length;G++)/^w\d+$/i.test(String(_[G]||"").trim())&&V++;if(V>=2){a=L;break}}let i=t.findIndex(L=>{const _=L.slice(0,5).map(V=>String(V||"").trim().toLowerCase());return _.includes("category")||_.includes("product")});if(i<0&&a>=0&&(i=a),i<0&&(i=t.findIndex(L=>{let _=!1,V=0;for(let G=0;G<Math.min(L.length,10);G++){const H=String(L[G]||"").trim();H.toUpperCase()==="LG"?(_=!0,V++):H&&isNaN(parseFloat(H))&&V++}return _&&V>=3})),i<0)return zo(t,e);const c=t[i],s=i+1;let p=null;if(t[s]){const L=t[s].slice(4,8).map(_=>String(_||"").trim()).filter(Boolean);L.length&&L.every(_=>/^\d{1,2}\/\d{1,2}/.test(_)||/~/.test(_)||/^\(/.test(_))&&(p=s)}const y=p!=null?p+1:s,h=t.slice(y).filter(L=>L[0]!=null&&String(L[0]).trim()),u=c.findIndex(L=>{const _=String(L||"").trim().toLowerCase();return _==="category"||_==="product"}),d=c.findIndex(L=>{const _=String(L||"").trim().toLowerCase();return _==="country"||_==="county"}),m=c.findIndex(L=>String(L||"").trim().toLowerCase()==="brand"),k=c.findIndex(L=>String(L||"").trim().toUpperCase()==="LG");let b=[];const v=a>=0?t[a]:c;for(let L=0;L<v.length;L++)/^w\d+$/i.test(String(v[L]||"").trim())&&b.push(L);if(!b.length)for(let L=0;L<c.length;L++){const _=String(c[L]||"").split(/\n/)[0].trim();/^w\d+/i.test(_)&&b.push(L)}r=b.map(L=>String(v[L]||"").trim().toUpperCase());let w=b.map((L,_)=>{const V=r[_]||`W${L}`;let G="";const H=p!=null?t[p]:a!==i&&a>=0?t[a+1]:null;if(H){const F=String(H[L]||"").trim();F&&/\d/.test(F)&&(G=F.startsWith("(")?F:`(${F})`)}return G?`${V}${G}`:V});console.log(`[parseWeekly:${e}] wLabelRow:${a} headerIdx:${i} dateRangeRow:${p} wCols:${b.length} labels:`,r.slice(0,5),"full:",w.slice(-2));function x(L){if(d<0)return!0;const _=String(L[d]||"").replace(/[()]/g,"").trim().toUpperCase();return _==="TOTAL"||_==="TTL"||_===""}const M=c.findIndex(L=>{const _=String(L||"").trim().toLowerCase().replace(/[\s_-]/g,"");return _==="b/nb"||_==="bnb"||_==="brand/nonbrand"});function j(L){if(M<0)return!0;const _=String(L[M]||"").trim().toLowerCase().replace(/[\s_-]/g,"");return _==="nonbrand"||_==="nb"}const D={},W={data:h,rows:t,header:c,headerIdx:i,brandIdx:m,lgIdx:k,catIdx:u,countryIdx:d,wCols:b,weeklyLabels:r,weeklyMap:o,weeklyAll:D,isNonBrand:j,isTotal:x};if(m>=0){const L=Vr(W);b=L.wCols,r=L.weeklyLabels}else if(k>=0){const L=Wr(W);L&&(r=L)}else b.length&&Kr(W);if(r.length>0){let L=r.length;for(const H of Object.values(D))for(const F of Object.values(H))for(const I of Object.values(F)){const A=I.findIndex(z=>z!=null);A>=0&&A<L&&(L=A)}for(const H of Object.values(o)){const F=H.findIndex(I=>I!=null);F>=0&&F<L&&(L=F)}const _=12,G=r.length-L>_?r.length-_:L;G>0&&G<r.length&&(r=r.slice(G),w=w.slice(G),Hr(D,o,G))}if(Object.keys(o).length){const L={weeklyMap:o};return r.length&&(L.weeklyLabels=r),w.length&&(L.weeklyLabelsFull=w),Object.keys(D).length&&(L.weeklyAll=D),L}return zo(t,e)}function qr(t){console.log(`[parseCitPageType] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((T,C)=>console.log(`  row${C}: [${(T||[]).slice(0,10).map(S=>JSON.stringify(String(S||"").trim())).join(", ")}]`));const e=t.findIndex(T=>T.some(O=>{const P=String(O||"").trim().toLowerCase();return P.includes("page type")||P==="country"})?!T.some(O=>/^\[.*\]$/.test(String(O||"").trim())):!1);if(e<0)return Yt("parseCitPageType","header not found",{firstRows:t.slice(0,5).map(T=>T==null?void 0:T.slice(0,6))});const o=t[e],r=o.findIndex(T=>{const C=String(T||"").replace(/[​‌‍﻿ ]/g,"").replace(/\s+/g,"").toLowerCase();return/^(llmmodel|llm|model)$/.test(C)}),a=o.findIndex(T=>/^country$|countries/i.test(String(T||"").trim())),i=o.findIndex(T=>{const C=String(T||"").replace(/[​‌‍﻿]/g,"").replace(/\s+/g,"").toLowerCase();return/^pa[gy]etype$/.test(C)||C==="type"}),c=a>=0?a:0,s=i>=0?i:c+1;console.log(`[parseCitPageType] header row${e}: [${o.slice(0,10).map(T=>JSON.stringify(String(T||"").trim())).join(", ")}]`),console.log(`[parseCitPageType] llmCol=${r} cntyCol=${a} ptCol=${i} (fallbackCnty=${c} fallbackPt=${s})`),r<0&&console.warn("[parseCitPageType] WARN: llmCol not detected — header codepoints:",o.slice(0,4).map(T=>Array.from(String(T||"")).map(C=>C.codePointAt(0).toString(16)).join(" ")));const p=[],y=new Set,h=Math.max(s+1,2);for(let T=h;T<o.length;T++){const C=String(o[T]||"").trim();if(/\bLG\b/i.test(C)){const S=T+1;if(S<o.length&&/\bSS\b|\bSAMSUNG\b/i.test(String(o[S]||""))){const O=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i),P=O?O[1].toLowerCase():`col${T}`;y.has(P)||(p.push({lg:T,ss:S}),y.add(P))}}}p.length||p.push({lg:h,ss:h+1}),console.log("[parseCitPageType] monthPairs:",p.map(T=>`LG=${T.lg}/SS=${T.ss}`).join(", "));const u=new Map;let d="",m=0;t.slice(e+1).forEach(T=>{if(!T||!T.some(S=>String(S||"").trim())){d="";return}let C=r>=0?String(T[r]||"").trim():"";C?d=C:r>=0&&d&&(C=d,m++),u.set(T,C)}),m&&console.log(`[parseCitPageType] merged-cell forward-fill (Model): ${m}건 상속`);const k=t.slice(e+1).filter(T=>T&&T[c]!=null&&String(T[c]).trim());console.log(`[parseCitPageType] data ${k.length}행 (필터 통과)`);let b=p[0];for(let T=p.length-1;T>=0;T--)if(k.some(C=>Ht(C[p[T].lg])>0)){b=p[T];break}if(!k.some(T=>Ht(T[b.lg])>0)){for(let T=Math.min(b.lg,o.length)-1;T>=2;T--)if(k.some(C=>Ht(C[T])>0)){b={lg:T-1,ss:T};break}}const v={},w={},x={},M={TOTAL:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},j=new Set,D=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],W=p.map(T=>{const C=String(o[T.lg]||"").trim(),S=C.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);return S?S[1].charAt(0).toUpperCase()+S[1].slice(1).toLowerCase():C.replace(/\s*LG\s*/i,"").trim()}),L={},_=T=>String(T||"").trim().replace(/^\((.*)\)$/,"$1").trim(),V=T=>{const C=_(T);return!C||/^(total|all|ttl)$/i.test(C)},G={plp:"PLP",pdp:"PDP",microsite:"Microsites",microsites:"Microsites",newsroom:"Newsroom",support:"Support",buyingguide:"Buying-guide",experience:"Experience"},H=T=>{const C=String(T||"").replace(/[()]/g,"").trim();if(/page total|^ttl$/i.test(C))return"TTL";const S=C.toLowerCase().replace(/^lg[-\s]+/,"").replace(/[-\s]+/g,"");return G[S]||C},F=T=>{const C=ce(T[c]);return{cnty:M[C]||C.toUpperCase(),key:H(T[s])}},I=new Set;k.forEach(T=>{const C=u.get(T)||"";if(V(C))return;const{cnty:S,key:O}=F(T);p.forEach((P,$)=>{(Ht(T[P.lg])>0||Ht(T[P.ss])>0)&&I.add(`${S}|${O}|${$}`)})});const A=(T,C,S,O)=>I.has(`${C}|${S}|${O}`)?!T:T,z=p.indexOf(b);I.size&&console.log(`[parseCitPageType] LLM breakdown 감지: ${I.size}건 (해당 월은 Total/TTL 행 제외 + 모델 행 합산)`);const K={};function X(T){return K[T]||(K[T]={lg:{},samsung:{},dotcomByCnty:{},dotcomTrend:{}}),K[T]}k.forEach(T=>{const C=u.get(T)||"",S=V(C),O=S?"Total":C,{cnty:P,key:$}=F(T);j.add(P);const mt=Ht(T[b.lg]),St=Ht(T[b.ss]);A(S,P,$,z)&&(P==="TTL"?(v[$]=(v[$]||0)+mt,w[$]=(w[$]||0)+St):(x[P]||(x[P]={lg:{},samsung:{}}),x[P].lg[$]=(x[P].lg[$]||0)+mt,x[P].samsung[$]=(x[P].samsung[$]||0)+St)),P==="TTL"&&p.forEach((Ct,wt)=>{var Y,lt;if(!A(S,P,$,wt))return;const Ft=Ht(T[Ct.lg]),R=Ht(T[Ct.ss]);if(Ft>0||R>0){L[$]||(L[$]={});const at=W[wt]||`M${wt+1}`;L[$][at]={lg:(((Y=L[$][at])==null?void 0:Y.lg)||0)+Ft,samsung:(((lt=L[$][at])==null?void 0:lt.samsung)||0)+R}}});const ut=X(O);P==="TTL"?(ut.lg[$]=(ut.lg[$]||0)+mt,ut.samsung[$]=(ut.samsung[$]||0)+St,ut.dotcomTrend[$]||(ut.dotcomTrend[$]={}),p.forEach((Ct,wt)=>{var Y,lt;const Ft=Ht(T[Ct.lg]),R=Ht(T[Ct.ss]);if(Ft>0||R>0){const at=W[wt]||`M${wt+1}`;ut.dotcomTrend[$][at]={lg:(((Y=ut.dotcomTrend[$][at])==null?void 0:Y.lg)||0)+Ft,samsung:(((lt=ut.dotcomTrend[$][at])==null?void 0:lt.samsung)||0)+R}}})):(ut.dotcomByCnty[P]||(ut.dotcomByCnty[P]={lg:{},samsung:{}}),ut.dotcomByCnty[P].lg[$]=(ut.dotcomByCnty[P].lg[$]||0)+mt,ut.dotcomByCnty[P].samsung[$]=(ut.dotcomByCnty[P].samsung[$]||0)+St)});const Z=new Set;Object.values(L).forEach(T=>Object.keys(T).forEach(C=>Z.add(C)));const f=D.filter(T=>Z.has(T)),Q={},U={};p.forEach((T,C)=>{const S=W[C];if(!S)return;const O={},P={};k.forEach($=>{const mt=u.get($)||"",St=V(mt),{cnty:ut,key:Ct}=F($);if(!A(St,ut,Ct,C))return;const wt=Ht($[T.lg]),Ft=Ht($[T.ss]);wt<=0&&Ft<=0||(ut==="TTL"?(wt>0&&(O[Ct]=(O[Ct]||0)+wt),Ft>0&&(P[Ct]=(P[Ct]||0)+Ft)):(U[S]||(U[S]={}),U[S][ut]||(U[S][ut]={lg:{},samsung:{}}),wt>0&&(U[S][ut].lg[Ct]=(U[S][ut].lg[Ct]||0)+wt),Ft>0&&(U[S][ut].samsung[Ct]=(U[S][ut].samsung[Ct]||0)+Ft)))}),Object.keys(O).length&&(Q[S]={lg:O,samsung:P})}),Object.keys(U).forEach(T=>{Object.keys(U[T]).forEach(C=>{const S=U[T][C];Object.values(S.lg).some(P=>P>0)||Object.values(S.samsung).some(P=>P>0)||delete U[T][C]}),Object.keys(U[T]).length||delete U[T]});const gt={};return(v.TTL||Object.keys(v).length)&&(gt.dotcom={lg:v,samsung:w,byMonth:Q,byCntyByMonth:U}),Object.keys(x).length&&(gt.dotcomByCnty=x),Object.keys(L).length&&f.length&&(gt.dotcomTrend=L,gt.dotcomTrendMonths=f),(Object.keys(K).length>1||Object.keys(K).length===1&&!(K.Total||K.TOTAL||K.All))&&(gt.dotcomByLlm=K),console.log(`[parseCitPageType] 결과: dotcom.lg keys=${Object.keys(v).join(",")||"(EMPTY)"} / dotcomByCnty=${Object.keys(x).join(",")||"(EMPTY)"} / dotcomTrend keys=${Object.keys(L).join(",")||"(EMPTY)"} / byLlm keys=${Object.keys(K).join(",")||"(EMPTY)"}`),gt}function Jr(t){console.log(`[parseCitTouchPoints] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((C,S)=>console.log(`  row${S}: [${(C||[]).slice(0,12).map(O=>JSON.stringify(String(O||"").trim())).join(", ")}]`));const e=t.findIndex(C=>C.some(P=>{const $=String(P||"").trim().toLowerCase();return $==="channel"||$==="country"})?!C.some(P=>/^\[.*\]$/.test(String(P||"").trim())):!1);e<0&&Yt("parseCitTouchPoints","header not found (need channel/country) — falling back to position-based parse",{firstRows:t.slice(0,5).map(C=>C==null?void 0:C.slice(0,6))});const o=e>=0?t[e]:[],r=(e>=0?e:0)+1;let a=-1,i=-1,c=-1,s=-1;for(let C=0;C<o.length;C++){const S=String(o[C]||"").trim().toLowerCase();S==="country"&&a<0&&(a=C),S==="channel"&&i<0&&(i=C),S==="prd"&&c<0&&(c=C),/^(llm\s*model|llm|model)$/i.test(S)&&s<0&&(s=C)}const p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function y(C){const S=String(C||"").trim().toLowerCase();if(!S)return null;const O=S.match(/^(\d{1,2})월/);if(O){const $=parseInt(O[1]);if($>=1&&$<=12)return p[$-1]}const P=S.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return P?P[1].charAt(0).toUpperCase()+P[1].slice(1).toLowerCase():null}const h=[],u=new Set;for(let C=0;C<o.length;C++){const S=y(o[C]);S&&!u.has(C)&&(h.push({col:C,label:S}),u.add(C))}if(e>0){const C=t[e-1];if(C)for(let S=0;S<C.length;S++){const O=y(C[S]);O&&!u.has(S)&&(h.push({col:S,label:O}),u.add(S))}}let d=2;if(h.length>0)d=Math.min(...h.map(C=>C.col));else if(a>=0&&i>=0)d=Math.max(a,i,c)+1;else{const C=t[r];C&&!String(C[0]||"").trim()?(a=1,i=2,d=3):(a=0,i=1,d=2)}if(a<0||i<0){const C=t[r],S=C&&!String(C[0]||"").trim()?1:0;a<0&&(a=S),i<0&&(i=S+1)}if(h.length>0){h.sort((P,$)=>P.col-$.col);const C=h[0],S=p.indexOf(C.label),O=new Set([a,i,c].filter(P=>P>=0));if(S>0&&C.col>d){let P=S-1;for(let $=C.col-1;$>=d&&P>=0;$--){if(u.has($)||O.has($))continue;const mt=String(o[$]||"").trim(),St=e>0?String((t[e-1]||[])[$]||"").trim():"";mt||St||(h.push({col:$,label:p[P]}),u.add($),P--)}}}h.sort((C,S)=>p.indexOf(C.label)-p.indexOf(S.label)),console.log(`[parseCitTouchPoints] header row${e}: [${(o||[]).slice(0,12).map(C=>JSON.stringify(String(C||"").trim())).join(", ")}]`),console.log(`[parseCitTouchPoints] countryCol=${a} channelCol=${i} prdCol=${c} llmCol=${s} dataStartCol=${d}`),console.log("[parseCitTouchPoints] monthLabels (sorted):",h.map(C=>`${C.label}@col${C.col}`).join(", "));const m=t.slice(r).filter(C=>C.some(S=>S!=null&&String(S).trim())),k=[],b={},v={},w={},x={},M=new Set,j={},D={},W={},L=C=>String(C||"").replace(/[()]/g,"").trim();m.forEach(C=>{const S=ce(C[a]),O=L(C[i]);if(!S||!O||O.toLowerCase()==="total")return;const P=S==="TTL"||S==="TOTAL",$=s>=0?L(C[s]):"",mt=!$||/^(total|all|ttl)$/i.test($),St=c>=0?L(C[c]):"",ut=!St||/^(ttl|total)$/i.test(St.toUpperCase());h.forEach(({col:Ct,label:wt})=>{Ht(C[Ct])<=0||(P||(j[O]||(j[O]={}),j[O][wt]=!0),mt||(D[O]||(D[O]={}),D[O][wt]=!0),ut||(W[O]||(W[O]={}),W[O][wt]=!0))})});const _=Object.keys(j).map(C=>`${C}:[${Object.keys(j[C]).join(",")}]`).join(" ");console.log(`[parseCitTouchPoints] Country breakdown 감지 (channel × month): ${_||"(없음)"}`),console.log("[parseCitTouchPoints] LLM breakdown 감지:",Object.keys(D).map(C=>`${C}:[${Object.keys(D[C]).join(",")}]`).join(" ")||"(없음)"),console.log("[parseCitTouchPoints] PRD breakdown 감지:",Object.keys(W).map(C=>`${C}:[${Object.keys(W[C]).join(",")}]`).join(" ")||"(없음)");const V={},G={},H={},F={};m.forEach(C=>{const S=ce(C[a]),O=L(C[i]),P=c>=0?L(C[c]):"",$=s>=0?L(C[s]):"";if(!S||!O||O.toLowerCase()==="total")return;const mt=S==="TTL"||S==="TOTAL",St=!$||/^(total|all|ttl)$/i.test($),ut=P.toUpperCase(),Ct=!P||ut==="TTL"||ut==="TOTAL";if(mt||M.add(S),!mt&&(H[S]||(H[S]={}),H[S][O]||(H[S][O]={ttl:null,prds:[]}),!Ct)){const Ft={};h.forEach(({col:R,label:Y})=>{var at;const lt=Ht(C[R]);lt<=0||St&&((at=D[O])!=null&&at[Y])||(Ft[Y]=lt)}),Object.keys(Ft).length&&H[S][O].prds.push({prd:P,monthScores:Ft})}V[O]||(V[O]={}),G[O]||(G[O]={});const wt=mt?"TTL":S;G[O][wt]||(G[O][wt]={}),h.forEach(({col:Ft,label:R})=>{var pt,N,et,xt;const Y=Ht(C[Ft]);if(Y<=0)return;const lt=mt&&((pt=j[O])==null?void 0:pt[R]),at=St&&((N=D[O])==null?void 0:N[R]),bt=Ct&&((et=W[O])==null?void 0:et[R]),ht=St?"Total":$;!lt&&!(Ct&&((xt=W[O])!=null&&xt[R]))&&(F[ht]||(F[ht]={}),F[ht][O]||(F[ht][O]={}),F[ht][O][R]=(F[ht][O][R]||0)+Y),!(lt||at||bt)&&(V[O][R]=(V[O][R]||0)+Y,G[O][wt][R]=(G[O][wt][R]||0)+Y)})});const I=C=>{for(let S=h.length-1;S>=0;S--){const O=C[h[S].label];if(O>0)return O}return 0},A={};Object.entries(G).forEach(([C,S])=>{Object.entries(S).forEach(([O,P])=>{O!=="TTL"&&Object.keys(P).length!==0&&(A[O]||(A[O]={}),A[O][C]=P)})}),Object.entries(V).forEach(([C,S])=>{const O=I(S);O>0&&(k.push({source:C,category:"",score:O,delta:0,ratio:0,monthScores:S}),b[C]=S)}),Object.entries(G).forEach(([C,S])=>{Object.entries(S).forEach(([O,P])=>{if(O==="TTL")return;const $=I(P);$>0&&(v[O]||(v[O]=[]),v[O].push({source:C,category:"",score:$,delta:0,ratio:0,monthScores:P,prd:""}))})}),Object.entries(H).forEach(([C,S])=>{Object.entries(S).forEach(([O,P])=>{P.prds.forEach(({prd:$,monthScores:mt})=>{const St=I(mt);if(St<=0)return;v[C]||(v[C]=[]),v[C].push({source:O,category:"",score:St,delta:0,ratio:0,monthScores:mt,prd:$}),x[$]||(x[$]={}),x[$][O]||(x[$][O]={source:O,category:"",score:0,delta:0,ratio:0,monthScores:{}});const ut=x[$][O];ut.score+=St,Object.entries(mt).forEach(([Ct,wt])=>{ut.monthScores[Ct]=(ut.monthScores[Ct]||0)+wt})})})});const z={};new Set([...Object.keys(w),...Object.keys(x)]).forEach(C=>{let S=w[C];(!S||!S.length)&&(S=Object.values(x[C]||{})),S&&S.length&&(z[C]=S)});const X=k.reduce((C,S)=>C+S.score,0);k.sort((C,S)=>S.score-C.score),k.forEach((C,S)=>{C.rank=S+1,C.ratio=X>0?+(C.score/X*100).toFixed(1):0});for(const[C,S]of Object.entries(v)){const O=S.reduce((P,$)=>P+$.score,0);S.sort((P,$)=>$.score-P.score),S.forEach((P,$)=>{P.rank=$+1,P.ratio=O>0?+(P.score/O*100).toFixed(1):0})}for(const[C,S]of Object.entries(z)){const O=S.reduce((P,$)=>P+$.score,0);S.sort((P,$)=>$.score-P.score),S.forEach((P,$)=>{P.rank=$+1,P.ratio=O>0?+(P.score/O*100).toFixed(1):0})}const Z=h.map(C=>C.label).filter(C=>Object.values(b).some(S=>S[C]>0)),f={};h.forEach(C=>{let S=0;Object.values(b).forEach(O=>{S+=O[C.label]||0}),f[C.label]=S}),console.log("[parseCitTouchPoints] citTouchPointsTrend 월별 합계:",f,"→ validMonths:",Z);const Q={};Object.entries(H.TTL||{}).forEach(([C,S])=>{Q[C]={ttl:S.ttl,latestScore:I(S.ttl||{})}}),console.log("[parseCitTouchPoints] groupMap.TTL 채널별 dump:",Q),console.log("[parseCitTouchPoints] citations top 3:",k.slice(0,3).map(C=>({source:C.source,score:C.score,monthScores:C.monthScores})));const U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let gt=null;if(Z.length>0){const C={};Object.values(b).forEach(P=>{Object.entries(P).forEach(([$,mt])=>{mt>0&&(C[$]=(C[$]||0)+1)})});let S=Z[Z.length-1];if(Z.length>=2){const P=C[S]||0,$=Z[Z.length-2],mt=C[$]||0;mt>0&&P<mt*.5&&(S=$)}const O=U.findIndex(P=>S.toLowerCase().startsWith(P.toLowerCase()));O>=0&&(gt=`${U[O]} ${new Date().getFullYear()}`)}const T={};return k.length>0&&(T.citations=k),Object.keys(v).length>0&&(T.citationsByCnty=v),Object.keys(z).length>0&&(T.citationsByPrd=z),Object.keys(b).length>0&&(T.citTouchPointsTrend=b,T.citTrendMonths=Z),Object.keys(A).length>0&&(T.citTouchPointsTrendByCnty=A),Object.keys(F).length>0&&(T.citTouchPointsByLlm=F,console.log("[parseCitTouchPoints] citTouchPointsByLlm LLM 모델:",Object.keys(F).join(", "))),gt&&(T.citDerivedPeriod=gt),T}function Yr(t){console.log(`[parseCitDomain] 총 ${t.length}행, 첫 5행:`),t.slice(0,5).forEach((I,A)=>console.log(`  row${A}: [${(I||[]).slice(0,14).map(z=>JSON.stringify(String(z||"").trim())).join(", ")}]`));const e={GLOBAL:"TTL",TOTAL:"TTL",TTL:"TTL",ALL:"TTL",WW:"TTL",WORLD:"TTL",WORLDWIDE:"TTL",GLOBE:"TTL",글로벌:"TTL",전체:"TTL",월드:"TTL",총계:"TTL",미국:"US",캐나다:"CA",영국:"UK",독일:"DE",스페인:"ES",브라질:"BR",멕시코:"MX",인도:"IN",호주:"AU",베트남:"VN"},o=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN","TTL","GLOBAL"],r=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|[0-9]{1,2}월)/i;let a=null,i=0,c=-1,s=-1,p=-1,y=-1,h=-1,u=-1,d=4;for(let I=0;I<Math.min(t.length,10);I++){const A=t[I];if(!A)continue;const z=A.some(f=>/^no$/i.test(String(f||"").trim())),K=A.some(f=>/^region$/i.test(String(f||"").trim())),X=A.some(f=>/domain|domian/i.test(String(f||"").trim())),Z=A.some(f=>/^prd$/i.test(String(f||"").trim()));if(z||K||X||Z){a=A,i=I+1;for(let f=0;f<A.length;f++){const Q=String(A[f]||"").trim().toLowerCase();Q==="prd"&&h<0&&(h=f),Q==="no"&&c<0&&(c=f),Q==="region"&&s<0&&(s=f),(Q==="domain"||Q==="domian")&&p<0&&(p=f),Q==="type"&&y<0&&(y=f),/^(llm\s*model|llm|model)$/i.test(Q)&&u<0&&(u=f)}console.log(`[parseCitDomain] header row${I}: [${(A||[]).slice(0,14).map(f=>JSON.stringify(String(f||"").trim())).join(", ")}]`),console.log(`[parseCitDomain] columns: prdCol=${h} noCol=${c} regionCol=${s} domainCol=${p} typeCol=${y} llmCol=${u}`);break}(String(A[0]||"").trim().startsWith("[")||!String(A[0]||"").trim())&&(i=I+1)}a||Yt("parseCitDomain","header not found (need No/Region/Domain/PRD) — falling back to domain auto-detect",{firstRows:t.slice(0,5).map(I=>I==null?void 0:I.slice(0,6))});const m=c>=0||s>=0||h>=0;if(m)s<0&&(s=c>=0?c+1:h>=0?h+2:1),p<0&&(p=s+1),y<0&&(y=p+1),d=Math.max(p,y)+1;else if(p>=0)y=p+1,d=p+2;else{for(let I=i;I<Math.min(t.length,i+5);I++){const A=t[I];if(A){for(let z=0;z<Math.min(A.length,6);z++){const K=String(A[z]||"").trim();if(K.includes(".")&&K.length>3&&!r.test(K)){p=z,y=z+1,d=z+2;break}}if(p>=0)break}}p<0&&(p=0,y=1,d=2)}const k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],b=I=>{const A=String(I||"").trim().toLowerCase();if(!A)return null;const z=A.match(/^(\d{1,2})월/);if(z){const X=parseInt(z[1]);if(X>=1&&X<=12)return k[X-1]}const K=A.match(/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return K?K[1].charAt(0).toUpperCase()+K[1].slice(1).toLowerCase():null},v=[];if(a)for(let I=d;I<a.length;I++){const A=b(a[I]);A&&v.push({col:I,label:A})}const w=I=>/^(type|domain[_ ]type)$/i.test(String(I||"").trim()),x=I=>/^(domain|domian)$/i.test(String(I||"").trim()),M=I=>/^region$/i.test(String(I||"").trim()),j=[];a&&v.forEach(({col:I,label:A})=>{const z=I-1,K=I-2,X=I-3;X<0||w(a[z])&&x(a[K])&&M(a[X])&&j.push({regionCol:X,domainCol:K,typeCol:z,monthCol:I,label:A})}),console.log(`[parseCitDomain] domainMonthLabels: ${v.map(I=>`${I.label}@col${I.col}`).join(", ")||"(없음)"}`),console.log(`[parseCitDomain] monthBlocks (v3 layout): ${j.length}개`,j.map(I=>`${I.label}@col${I.monthCol}(r${I.regionCol}/d${I.domainCol}/t${I.typeCol})`).join(", "));const D=[],W={};let L=null,_=null;const V={};let G="TTL";const H=I=>{let A=String(I||"").trim();if(!A)return"";const z=A.match(/^\[([^\]]+)\]/);z&&(A=z[1].trim()),A=A.replace(/^https?:\/\//i,"").replace(/^www\./i,"").toLowerCase();const K=A.indexOf("/");return K>=0&&(A=A.slice(0,K)),A};if(j.length>=2){const I=R=>String(R||"").replace(/[()]/g,"").trim(),A={},z=j.map(()=>({region:"",domain:"",type:""}));let K="",X=0,Z=0;for(let R=i;R<t.length;R++){const Y=t[R];if(!Y)continue;let lt=h>=0?I(Y[h]):"";lt?K=lt:lt=K;const at=u>=0?I(Y[u]):"";j.forEach((bt,ht)=>{const pt=z[ht],N=H(Y[bt.domainCol]);N&&N.includes(".")&&(pt.domain=N,pt.region=String(Y[bt.regionCol]||"").trim().toUpperCase(),pt.type=String(Y[bt.typeCol]||"").trim());const et=String(Y[bt.monthCol]||"").replace(/,/g,"").trim(),xt=parseFloat(et);if(isNaN(xt)||xt<=0)return;let Tt=N,rt,q;if(Tt&&Tt.includes("."))rt=String(Y[bt.regionCol]||"").trim().toUpperCase(),q=String(Y[bt.typeCol]||"").trim();else if(pt.domain)Tt=pt.domain,rt=pt.region,q=pt.type,X++;else{Z++;return}const dt=e[rt]||rt||"TTL",$t=`${dt}|${Tt}|${q}|${lt}|${at}`;A[$t]||(A[$t]={cnty:dt,domain:Tt,type:q,prd:lt,llm:at,monthScores:{}}),A[$t].monthScores[bt.label]=(A[$t].monthScores[bt.label]||0)+xt})}(X||Z)&&console.log(`[parseCitDomain] merged-cell forward-fill: 상속 ${X}건 / domain 없어 drop ${Z}건`);const f=R=>{const Y=I(R);return!Y||/^(total|all|ttl)$/i.test(Y)},Q=new Set;Object.values(A).forEach(R=>{if(f(R.llm))return;const Y=`${R.cnty}|${R.domain}|${R.type}|${R.prd}`;Object.entries(R.monthScores).forEach(([lt,at])=>{at>0&&Q.add(`${Y}|${lt}`)})});const U={};Object.values(A).forEach(R=>{const Y=`${R.cnty}|${R.domain}|${R.type}|${R.prd}`,lt=f(R.llm);U[Y]||(U[Y]={cnty:R.cnty,domain:R.domain,type:R.type,prd:R.prd,monthScores:{}}),Object.entries(R.monthScores).forEach(([at,bt])=>{bt>0&&Q.has(`${Y}|${at}`)!==lt&&(U[Y].monthScores[at]=(U[Y].monthScores[at]||0)+bt)})}),console.log(`[parseCitDomain] LLM collapse: ${Object.keys(A).length} → ${Object.keys(U).length} rows / breakdown 월 ${Q.size}건`);const gt=R=>/^(ttl|total|global|all|ww|world|worldwide)$/i.test(String(R||"").trim()),T=R=>{const Y=String(R||"").trim();return!Y||/^(ttl|total)$/i.test(Y)},C=R=>{for(let Y=v.length-1;Y>=0;Y--){const lt=R[v[Y].label];if(lt>0)return lt}return 0},S=R=>R.find(Y=>Object.keys(Y).length)||{},O=(R,Y)=>{Object.entries(Y).forEach(([lt,at])=>{at>0&&(R[lt]=(R[lt]||0)+at)})},P={};Object.values(A).forEach(R=>{if(f(R.llm))return;const Y=I(R.llm);P[Y]||(P[Y]={}),P[Y][R.domain]||(P[Y][R.domain]=[{},{},{},{}]);const lt=(gt(R.cnty)?0:2)+(T(R.prd)?0:1);O(P[Y][R.domain][lt],R.monthScores)});const $={},mt={};if(Object.entries(P).forEach(([R,Y])=>{const lt={},at={};Object.entries(Y).forEach(([bt,ht])=>{const pt=S(ht),N=C(pt);N>0&&(lt[bt]=N,at[bt]=pt)}),Object.keys(lt).length&&($[R]=lt),Object.keys(at).length&&(mt[R]=at)}),Object.keys($).length){const R={};Object.values(U).forEach(at=>{R[at.domain]||(R[at.domain]=[{},{},{},{}]);const bt=(gt(at.cnty)?0:2)+(T(at.prd)?0:1);O(R[at.domain][bt],at.monthScores)});const Y={},lt={};Object.entries(R).forEach(([at,bt])=>{const ht=S(bt),pt=C(ht);pt>0&&(Y[at]=pt,lt[at]=ht)}),Object.keys(Y).length&&($.Total=Y),Object.keys(lt).length&&(mt.Total=lt),console.log("[parseCitDomain] citDomainByLlm 모델:",Object.keys($).join(", ")),Object.keys($).length>1&&(L=$),Object.keys(mt).length>1&&(_=mt)}Object.values(U).forEach(R=>{let Y=0;for(let ht=v.length-1;ht>=0;ht--){const pt=R.monthScores[v[ht].label];if(pt>0){Y=pt;break}}if(Y<=0)return;V[R.cnty]=(V[R.cnty]||0)+1,D.push({cnty:R.cnty,rank:V[R.cnty],domain:R.domain,type:R.type,citations:Y,monthScores:R.monthScores,prd:R.prd});const lt=`${R.cnty}|${R.domain}`,at=!R.prd||/^(ttl|total)$/i.test(R.prd);W[lt]||(W[lt]={cnty:R.cnty,domain:R.domain,type:R.type,months:{},_ttlMonths:{}});const bt=W[lt];at?(bt.type=R.type||bt.type,Object.entries(R.monthScores).forEach(([ht,pt])=>{pt>0&&(bt._ttlMonths[ht]?bt.months[ht]+=pt:(bt.months[ht]=pt,bt._ttlMonths[ht]=!0))})):Object.entries(R.monthScores).forEach(([ht,pt])=>{!(pt>0)||bt._ttlMonths[ht]||(bt.months[ht]=(bt.months[ht]||0)+pt)})}),Object.values(W).forEach(R=>{delete R._ttlMonths});const St={TTL:{},CNTY:{}};Object.entries(W).forEach(([R,Y])=>{const lt=R.startsWith("TTL|")?"TTL":"CNTY";Object.entries(Y.months).forEach(([at,bt])=>{bt>0&&(St[lt][at]=(St[lt][at]||0)+1)})}),console.log("[parseCitDomain] trend 월 커버리지 (키 수) — TTL:",St.TTL,"/ CNTY:",St.CNTY);const ut={},Ct={};Object.values(A).forEach(R=>{ut[R.cnty]=(ut[R.cnty]||0)+1,Ct[R.prd||"(empty)"]=(Ct[R.prd||"(empty)"]||0)+1}),console.log(`[parseCitDomain] aggMap entries: ${Object.keys(A).length} / cnty dist:`,ut,"/ prd dist:",Ct);const wt=Object.values(A).filter(R=>R.cnty==="TTL"&&R.monthScores.May>0).slice(0,5);console.log(`[parseCitDomain] May cnty=TTL sample (${wt.length}건):`,wt.map(R=>`${R.domain}|prd='${R.prd}'|type='${R.type}'|May=${R.monthScores.May}`).join(" / "));const Ft={};D.forEach(R=>{Ft[R.cnty]||(Ft[R.cnty]=[]),Ft[R.cnty].push(R)}),Object.values(Ft).forEach(R=>{R.sort((Y,lt)=>lt.citations-Y.citations),R.forEach((Y,lt)=>{Y.rank=lt+1})})}else for(let I=i;I<t.length;I++){const A=t[I];if(!A)continue;const z=String(A[p]||"").trim(),K=String(A[y]||"").trim(),X=h>=0?String(A[h]||"").trim():"";if(!m&&(!z||!z.includes("."))){const U=String(A[p]||"").trim().toUpperCase(),gt=e[U]||(o.includes(U)?U:null);gt&&(!K||K==="")&&(G=gt);continue}if(!z||!z.includes("."))continue;let Z="TTL";if(m&&s>=0){const U=String(A[s]||"").trim().toUpperCase();Z=e[U]||U}else m||(Z=G);let f=0;if(v.length>0)for(let U=v.length-1;U>=0;U--){const gt=String(A[v[U].col]||"").replace(/,/g,"").trim(),T=parseFloat(gt);if(!isNaN(T)&&T>0){f=T;break}}else for(let U=A.length-1;U>=d;U--){const gt=String(A[U]||"").replace(/,/g,"").trim();if(!gt)continue;const T=parseFloat(gt);if(!isNaN(T)&&T>0){f=T;break}}if(v.length>0){const U={};if(v.forEach(({col:gt,label:T})=>{const C=String(A[gt]||"").replace(/,/g,"").trim(),S=parseFloat(C);!isNaN(S)&&S>0&&(U[T]=S)}),Object.keys(U).length>0){const gt=`${Z}|${z}`;W[gt]={cnty:Z,domain:z,type:K,months:U}}}const Q={};v.length>0&&v.forEach(({col:U,label:gt})=>{const T=String(A[U]||"").replace(/,/g,"").trim(),C=parseFloat(T);!isNaN(C)&&C>0&&(Q[gt]=C)}),f>0&&(V[Z]=(V[Z]||0)+1,D.push({cnty:Z,rank:V[Z],domain:z,type:K,citations:f,monthScores:Q,prd:X}))}const F={};if(D.length>0&&(F.citationsCnty=D),Object.keys(W).length>0){F.citDomainTrend=W;const I=v.map(A=>A.label).filter(A=>Object.values(W).some(z=>z.months[A]>0));F.citDomainMonths=I}return L&&(F.citDomainByLlm=L),_&&(F.citDomainByLlmTrend=_),F}function Go(t,e){const o=uo(t,[/^type$/,/^(county|country)$/]);if(o<0)return Yt(`parsePRVisibility:${e}`,"header not found (need Type + Country)",{firstRows:t.slice(0,5).map(x=>x==null?void 0:x.slice(0,6))});const r=t[o];let a=-1,i=-1,c=-1,s=-1,p=4;for(let x=0;x<r.length;x++){const M=String(r[x]||"").split(/\n/)[0].trim().toLowerCase();M==="type"&&a<0&&(a=x),(M==="county"||M==="country")&&i<0&&(i=x),(M==="topic"||M==="topoc")&&c<0&&(c=x),M==="brand"&&s<0&&(s=x)}c<0&&(c=2,Yt(`parsePRVisibility:${e}`,"topic header not found, falling back to column C (index 2)",{header:r.slice(0,6)})),p=Math.max(a,i,c,s)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,h=/^w\d+/i,u=[],d=[o];for(let x=0;x<=o;x++)x!==o&&d.push(x);for(const x of d){if(u.length>0)break;const M=t[x];if(M)for(let j=p;j<M.length;j++){const D=String(M[j]||"").split(/\n/)[0].trim();D&&(y.test(D)||h.test(D))&&u.push({col:j,label:D})}}const m=t.slice(o+1),k=[];m.forEach(x=>{if(!x)return;const M=String(x[a]||"").trim(),j=ce(x[i]),D=String(x[c]||"").trim(),W=String(x[s]||"").trim();if(!D||!W)return;const L={};let _=0;u.forEach(({col:V,label:G})=>{const H=oe(x[V]);H>0&&(L[G]=H,_=H)}),(Object.keys(L).length>0||D)&&k.push({type:M,country:j,topic:D,brand:W,scores:L,latestScore:_})});const b=e==="weekly"?"weeklyPR":"monthlyPR",v=e==="weekly"?"weeklyPRLabels":"monthlyPRLabels",w={};return k.length>0&&(w[b]=k),u.length>0&&(w[v]=u.map(x=>x.label)),w}function Uo(t,e){const o=t.findIndex(w=>w?w.some(x=>/steakholders|stakeholders/i.test(String(x||"").trim()))||w.some(x=>/^type$/i.test(String(x||"").trim()))&&w.some(x=>/topoc|topic/i.test(String(x||"").trim())):!1);if(o<0)return Yt(`parseBrandPromptVisibility:${e}`,"header not found (need Stakeholders or Type+Topic)",{firstRows:t.slice(0,5).map(w=>w==null?void 0:w.slice(0,6))});const r=t[o];let a=-1,i=-1,c=-1,s=-1,p=4;for(let w=0;w<r.length;w++){const x=String(r[w]||"").trim().toLowerCase();(x==="steakholders"||x==="stakeholders")&&a<0&&(a=w),x==="type"&&i<0&&(i=w),(x==="country"||x==="county")&&c<0&&(c=w),(x==="topoc"||x==="topic")&&s<0&&(s=w)}p=Math.max(a,i,c,s)+1;const y=/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{1,2}월|\d{2,4}년|\d{4}[-/]\d{1,2})/i,h=/^w\d+/i,u=[];for(let w=p;w<r.length;w++){const x=String(r[w]||"").split(/\n/)[0].trim();x&&(y.test(x)||h.test(x))&&u.push({col:w,label:x})}const d=t.slice(o+1),m=[];d.forEach(w=>{if(!w)return;const x=String(w[a]||"").trim(),M=String(w[i]||"").trim(),j=ce(w[c]),D=String(w[s]||"").trim();if(!D||!x)return;const W={};let L=0;u.forEach(({col:_,label:V})=>{const G=oe(w[_]);G>0&&(W[V]=G,L=G)}),m.push({stakeholder:x,type:M,country:j,topic:D,scores:W,latestScore:L})});const k=e==="weekly"?"weeklyBrandPrompt":"monthlyBrandPrompt",b=e==="weekly"?"weeklyBrandPromptLabels":"monthlyBrandPromptLabels",v={};return m.length>0&&(v[k]=m),u.length>0&&(v[b]=u.map(w=>w.label)),v}const pe={"BR|AV":!0,"VN|AV":!0,"IN|AV":!0},Xr={"IN|DW":!0};function Zr(t){if(!Array.isArray(t)||t.length===0)return console.warn("[parseUnlaunched] invalid input",{type:typeof t,isArray:Array.isArray(t),len:t==null?void 0:t.length}),console.log(`[parseUnlaunched] decision=default-only reason=invalid-input / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const e=uo(t,[/^(country|county)$/,/^(launched|launch|launch\s*status|status|출시여부|출시)$/]);if(e<0)return console.warn("[parseUnlaunched] 헤더 못찾음. 시트 첫 10행:"),t.slice(0,10).forEach((d,m)=>console.log(`  row${m}:`,d==null?void 0:d.slice(0,6))),console.log(`[parseUnlaunched] decision=default-only reason=header-not-found / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const o=t[e];let r=-1,a=-1,i=-1;for(let d=0;d<o.length;d++){const m=String(o[d]||"").trim().toLowerCase();r<0&&(m==="country"||m==="county")&&(r=d),a<0&&(m==="category"||m==="product"||m==="제품"||m==="카테고리")&&(a=d),i<0&&/^(launched|launch|launch\s*status|status|출시여부|출시)$/i.test(m)&&(i=d)}if(r<0||a<0||i<0)return console.warn("[parseUnlaunched] 필수 컬럼 누락",{countryCol:r,categoryCol:a,statusCol:i,header:o}),console.log(`[parseUnlaunched] decision=default-only reason=missing-columns / 시트매칭 0건 + 디폴트 ${Object.keys(pe).length}건`),{unlaunchedMap:{...pe}};const c=new Set(["unlaunched","not launched","notlaunched","미출시","no","n","false","unlaunch","미 출시","미발매","not available","na"]),s={...pe};let p=0,y=0,h=0;t.slice(e+1).forEach((d,m)=>{const k=e+1+m;try{if(!d){h++;return}const b=String(d[i]||"").trim();if(!b){h++;return}p++;const v=b.toLowerCase().replace(/\s+/g," ");if(!c.has(v)&&!c.has(v.replace(/\s/g,"")))return;const w=zr(d[r]),x=String(d[a]||"").trim();if(!w||!x){console.warn("[parseUnlaunched] row skipped",{rowIdx:k,raw:{country:d[r],category:d[a],status:d[i]},parsed:{country:w,rawCategory:x}}),h++;return}const M=x.toUpperCase(),j=je[M]||M;s[`${w}|${j}`]=!0,j!==M&&(s[`${w}|${M}`]=!0),y++}catch(b){let v;try{v={country:d==null?void 0:d[r],category:d==null?void 0:d[a],status:d==null?void 0:d[i]}}catch{v=d}console.warn("[parseUnlaunched] row error",{rowIdx:k,raw:v,error:b==null?void 0:b.message}),h++}});let u=0;return Object.keys(Xr).forEach(d=>{const[m,k]=d.split("|");[k,...Object.keys(je).filter(b=>je[b]===k)].forEach(b=>{s[`${m}|${b}`]&&(delete s[`${m}|${b}`],u++)})}),console.log(`[parseUnlaunched] decision=merged / 시트매칭 ${y}건 + 디폴트 ${Object.keys(pe).length}건 + 강제출시 제거 ${u}건 + skip ${h}건 / 총행 ${p} / 최종키 ${Object.keys(s).length}개`),{unlaunchedMap:s}}function Qr(t){const e=uo(t,[/^bu$/,/topic/]);if(e<0)return Yt("parsePRTopicList","header not found (need BU + Topic)",{firstRows:t.slice(0,5).map(h=>h==null?void 0:h.slice(0,6))});const o=t[e];let r=-1,a=-1,i=-1,c=-1,s=-1;for(let h=0;h<o.length;h++){const u=String(o[h]||"").trim().toLowerCase();r<0&&u==="bu"&&(r=h),a<0&&u.includes("topic")&&u.includes("대시보드")&&(a=h),i<0&&(u==="explanation"||u==="설명")&&(i=h),c<0&&u.includes("기존")&&(c=h),s<0&&u.includes("topic")&&u.includes("row")&&(s=h)}a<0&&(a=1),i<0&&(i=2);const p=[];let y="";return t.slice(e+1).forEach(h=>{if(!h)return;const u=String(h[r]||"").trim();u&&(y=u);const d=String(h[a]||"").trim();if(!d)return;const m=String(h[i]||"").trim(),k=c>=0?String(h[c]||"").trim():"",b=s>=0?String(h[s]||"").trim():"";p.push({bu:y,topic:d,explanation:m,oldTopic:k,topicRow:b})}),p.length>0?{prTopicList:p}:{}}function ti(t,e){var o;if(!Dr(e,`parseSheetRows:${t}`))return{};try{if(t===_t.meta)return Pr("parseSheetRows","meta 시트 무시 — 문구는 서버 기본값 사용"),{};if(t===_t.visSummary)return Gr(e);if(t===_t.productMS||t===_t.productHS||t===_t.productES)return Ur(e);if(t===_t.weeklyMS)return Ye(e,"MS");if(t===_t.weeklyHS)return Ye(e,"HS");if(t===_t.weeklyES)return Ye(e,"ES");if(t===_t.monthlyPR)return Go(e,"monthly");if(t===_t.weeklyPR)return Go(e,"weekly");if(t===_t.monthlyBrandPrompt)return Uo(e,"monthly");if(t===_t.weeklyBrandPrompt)return Uo(e,"weekly");if(t===_t.citPageType)return qr(e);if(t===_t.citTouchPoints)return Jr(e);if(t===_t.citDomain)return Yr(e);if(t===_t.unlaunched)return Zr(e);if(t===_t.prTopicList)return Qr(e)}catch(r){return no(`parseSheetRows:${t}`,"parser threw — sheet 격리",{error:r==null?void 0:r.message,stack:(o=r==null?void 0:r.stack)==null?void 0:o.split(`
`).slice(0,3).join(" | ")})}return Yt("parseSheetRows","unknown sheet name — router has no handler",{sheetName:t,known:Object.values(_t)})}function ei(t){const e=t.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);return e?e[1]:null}async function oi(t,e){var m;const o=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,r=typeof window>"u",i=`${r?"https://docs.google.com":"/gsheets-proxy"}/spreadsheets/d/${t}/gviz/tq?sheet=${encodeURIComponent(e)}&tqx=out:csv;reqId:${o}&headers=1`,c=await fetch(i,{cache:"no-store",headers:r?{"User-Agent":"Mozilla/5.0","Cache-Control":"no-cache, no-store",Pragma:"no-cache"}:{"Cache-Control":"no-cache, no-store",Pragma:"no-cache"}});if(!c.ok)throw new Error(`"${e}" 시트를 가져올 수 없습니다 (HTTP ${c.status}).`);const s=await c.text(),p=await gn(),y=p.read(s,{type:"string"}),h=y.Sheets[y.SheetNames[0]],u=p.utils.sheet_to_json(h,{header:1,defval:""}),d=s.split(`
`).length;return console.log(`[fetchSheet] "${e}": csv ${s.length}자/${d}줄 → ${u.length}행 × ${((m=u[0])==null?void 0:m.length)??0}컬럼`),u}async function ni(t,e){var i,c;const o=Object.values(_t),r={};e==null||e(`${o.length}개 시트 병렬 로드 중...`);const a=await Promise.allSettled(o.map(s=>oi(t,s).then(p=>({name:s,rows:p}))));for(let s=0;s<o.length;s++){const p=o[s],y=a[s];if(e==null||e(`"${p}" 처리 중... (${s+1}/${o.length})`),y.status==="rejected"){console.warn(`"${p}" 시트 건너뜀:`,(i=y.reason)==null?void 0:i.message);continue}try{const{rows:h}=y.value,u=ti(p,h);for(const[d,m]of Object.entries(u))d==="weeklyLabels"||d==="weeklyLabelsFull"?r[d]||(r[d]=m):Array.isArray(m)&&Array.isArray(r[d])?r[d]=[...r[d],...m]:m&&typeof m=="object"&&!Array.isArray(m)&&r[d]&&typeof r[d]=="object"&&!Array.isArray(r[d])?r[d]={...r[d],...m}:r[d]=m}catch(h){console.warn(`"${p}" 시트 처리 실패:`,h.message)}}if(!r.productsPartial&&r.weeklyAll&&r.weeklyMap){console.log("[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성");const s=[];for(const[p,y]of Object.entries(r.weeklyAll)){const h=y.Total||y.TTL||{},u=h.LG||h.lg||[],d=Object.entries(h).filter(([w])=>w!=="LG"&&w!=="lg"),m=u.length?u[u.length-1]:0,k=u.length>=5?u[0]:0;let b="",v=0;for(const[w,x]of d){const M=x.length?x[x.length-1]:0;M>v&&(v=M,b=w)}m>0&&s.push({id:p,bu:jr[p]||"HS",kr:oo[p]||p,category:p,date:((c=r.meta)==null?void 0:c.period)||"",score:m,prev:k,vsComp:v,compName:b,allScores:{LG:m,...b?{[b]:v}:{}}})}if(s.length&&(r.productsPartial=s,console.log(`[SYNC] weeklyAll에서 ${s.length}개 제품 생성:`,s.map(p=>`${p.id}=${p.score}`).join(", "))),!r.productsCnty){const p=[];for(const[y,h]of Object.entries(r.weeklyAll)){const u=oo[y]||y;for(const[d,m]of Object.entries(h)){if(d==="Total"||d==="TTL")continue;const k=m.LG||m.lg||[],b=k.length?k[k.length-1]:0;if(b<=0)continue;const v=k.length>=2?k[0]:0;let w="",x=0;const M={LG:b};for(const[D,W]of Object.entries(m)){if(D==="LG"||D==="lg")continue;const L=W.length?W[W.length-1]:0;M[D]=L,L>x&&(x=L,w=D)}const j=+(b-x).toFixed(1);p.push({product:u,country:d,score:b,prev:v,compName:w,compScore:x,gap:j,allScores:M})}}p.length&&(r.productsCnty=p,console.log(`[SYNC] weeklyAll에서 productsCnty ${p.length}건 생성`))}}if(r.weeklyLabels&&r.weeklyLabels.length&&r.weeklyLabels.every((p,y)=>p===`W${y+1}`)){const p=(r.weeklyPRLabels||r.weeklyBrandPromptLabels||[]).map(y=>String(y).split(/\n/)[0].trim().toUpperCase()).filter(y=>/^W\d+/.test(y));if(p.length>=2){console.log("[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:",p),r.weeklyLabels=p;const y=(r.weeklyPRLabels||r.weeklyBrandPromptLabels||[]).map(h=>{const u=String(h).split(/\n/);return u[0].trim().toUpperCase()+(u[1]?u[1].trim():"")}).filter(h=>/^W\d+/.test(h));y.length&&(r.weeklyLabelsFull=y)}}if(r._syncIssues=Or(r,"syncFromGoogleSheets"),typeof localStorage<"u")try{const s=JSON.parse(localStorage.getItem("syncDiagnostics")||"[]");s.unshift({ts:Date.now(),scope:"syncFromGoogleSheets",issues:r._syncIssues||[],sheetCount:o.length}),localStorage.setItem("syncDiagnostics",JSON.stringify(s.slice(0,10)))}catch{}return r}const Et={width:"100%",background:"#1E293B",border:"1px solid #334155",borderRadius:7,padding:"6px 10px",fontSize:11,color:"#E2E8F0",fontFamily:E,outline:"none",boxSizing:"border-box"};function ri(t){if(t==null)return"동기화 안 됨";const e=Math.floor(t/1e3),o=Math.floor(e/60),r=Math.floor(o/60),a=Math.floor(r/24);return a>=1?`${a}일 전`:r>=1?`${r}시간 전`:o>=1?`${o}분 전`:"방금 전"}function ii({savedAt:t,ageMs:e,stale:o,style:r}){const a=t==null,i=a?"#1E293B":o?"#7F1D1D":"#064E3B",c=a?"#94A3B8":o?"#FCA5A5":"#86EFAC",s=a?"#334155":o?"#B91C1C":"#047857",p=a?"○":o?"⚠️":"●",y=a?"동기화 정보 없음":`데이터 최신화: ${ri(e)}`,h=t?new Date(t).toLocaleString("ko-KR"):"";return n.jsxs("span",{title:h,style:{display:"inline-flex",alignItems:"center",gap:5,background:i,color:c,border:`1px solid ${s}`,borderRadius:7,padding:"4px 9px",fontSize:11,fontWeight:600,fontFamily:E,whiteSpace:"nowrap",...r||{}},children:[n.jsx("span",{"aria-hidden":!0,style:{fontSize:10},children:p}),y]})}function ai({FONT:t,RED:e,COMP:o}){return`*{margin:0;padding:0;box-sizing:border-box}
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
`}const Xt="'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif",ne="#CF0652",ue="#94A3B8",Ne={ko:{lead:"선도",behind:"추격",critical:"취약",weeklyTab:"주별",monthlyTab:"월별",vsComp:"대비",categories:"개 카테고리",byProduct:"제품별",byCountry:"국가별",allProducts:"전체 제품",allCountries:"전체 국가",productTitle:"제품별 GEO Visibility 현황",cntyTitle:"국가별 GEO Visibility 현황",cntyTitleByProduct:"제품별 GEO Visibility 현황",cBrandCompare:"C브랜드 비교",citationTitle:"도메인 카테고리별 Citation 현황",citDomainTitle:"도메인별 Citation 현황",citCntyTitle:"국가별 Citation 도메인",dotcomTitle:"닷컴 Citation (경쟁사대비)",legendLead:"선도 ≥100%",legendBehind:"추격 ≥80%",legendCritical:"취약 <80%",lgBasis:"LG/1위 기준",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG 우위",dotcomSsWin:"SS 우위",dotcomNone:"없음",dotcomTTL:"TTL (전체)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀",citLegend:"Citation Score 건수 (비중)",progressMsg:"4월 업데이트 예정",readabilityMsg:"4월 업데이트 예정"},en:{lead:"Lead",behind:"Behind",critical:"Critical",weeklyTab:"Weekly",monthlyTab:"Monthly",vsComp:"vs",categories:" Categories",byProduct:"By Product",byCountry:"By Country",allProducts:"All Products",allCountries:"All Countries",productTitle:"GEO Visibility by Product",cntyTitle:"GEO Visibility by Country",cntyTitleByProduct:"GEO Visibility by Product",cBrandCompare:"Compare China Brand",citationTitle:"Citation by Domain Category",citDomainTitle:"Citation by Domain",citCntyTitle:"Citation Domain by Country",dotcomTitle:"Dotcom Citation (vs Competitor)",legendLead:"Lead ≥100%",legendBehind:"Behind ≥80%",legendCritical:"Critical <80%",lgBasis:"LG/Top 1 Basis",insight:"INSIGHT",howToRead:"HOW TO READ",geoInsight:"Executive Summary",dotcomLgWin:"LG Leads",dotcomSsWin:"SS Leads",dotcomNone:"None",dotcomTTL:"TTL (Total)",dotcomLgOnly:"— (LG only)",todoTitle:"Action Plan",footer:"Overseas Sales HQ · D2C Digital Marketing Team",citLegend:"Citation Score Count (Ratio)",progressMsg:"Coming in April update",readabilityMsg:"Coming in April update"}},xn={LG:ne,Samsung:"#3B82F6",Sony:"#7C3AED",Hisense:"#059669",TCL:"#D97706",Asus:"#0EA5E9",Dell:"#6366F1",MSI:"#EF4444",JBL:"#F97316",Bose:"#8B5CF6",Bosch:"#14B8A6",Whirlpool:"#06B6D4",Haier:"#22C55E",Miele:"#A855F7",Dyson:"#EC4899",Xiaomi:"#F59E0B",Shark:"#6B7280",Daikin:"#2563EB",Mitsubishi:"#DC2626",Media:"#10B981",Panasonic:"#0D9488",Blueair:"#0284C7",Philips:"#7C3AED"},Ho=["#94A3B8","#64748B","#475569","#CBD5E1","#E2E8F0"],ro={NA:{label:"북미",labelEn:"North America",countries:["US","CA"]},EU:{label:"유럽",labelEn:"Europe",countries:["UK","DE","ES"]},LATAM:{label:"중남미",labelEn:"Latin America",countries:["BR","MX"]},APAC:{label:"아태",labelEn:"Asia Pacific",countries:["AU","VN"]},IN:{label:"인도",labelEn:"India",countries:["IN"]}},si=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],_e={US:"USA",CA:"Canada",UK:"UK",GB:"UK",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"Korea",CN:"China",TTL:"Total",TOTAL:"Total",GLOBAL:"Global"},li={US:"United States",CA:"Canada",UK:"United Kingdom",GB:"United Kingdom",DE:"Germany",ES:"Spain",FR:"France",IT:"Italy",BR:"Brazil",MX:"Mexico",IN:"India",AU:"Australia",VN:"Vietnam",JP:"Japan",KR:"South Korea",CN:"China"},ci={US:"미국",CA:"캐나다",UK:"영국",GB:"영국",DE:"독일",ES:"스페인",FR:"프랑스",IT:"이탈리아",BR:"브라질",MX:"멕시코",IN:"인도",AU:"호주",VN:"베트남",JP:"일본",KR:"한국",CN:"중국"},ho=90;function fo(t,e){const o=Ne[e]||Ne.ko;return t==="lead"?{bg:"#ECFDF5",border:"#A7F3D0",color:"#15803D",label:o.lead}:t==="behind"?{bg:"#FFFBEB",border:"#FDE68A",color:"#B45309",label:o.behind}:t==="critical"?{bg:"#FFF1F2",border:"#FECDD3",color:"#BE123C",label:o.critical}:{bg:"#F8FAFC",border:"#E2E8F0",color:"#475569",label:"—"}}function di(t){return(t||"").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\r?\n/g,"<br>")}function pi(t,e){if(e<=0)return"lead";const o=t/e*100;return o>=100?"lead":o>=80?"behind":"critical"}function io(t){const e=String(t||"").trim().toUpperCase();return _e[e]||t}function ui(t,e){const o=String(t||"").trim().toUpperCase();return e==="en"?li[o]||_e[o]||t:ci[o]||_e[o]||t}let hi=0;function Vo(t,e,o,r,a,i={}){if(!t||!t.length)return`<svg width="${o}" height="${r}"></svg>`;const c=i.fadeBeforeIdx!=null?i.fadeBeforeIdx:-1,s=i.baselineLabel||"",p=i.labelOffsetY||0,y=i.lineOffsetY||0,h=hi++,u={t:18,r:10,b:20,l:10},d=o-u.l-u.r,m=r-u.t-u.b,k=t.filter(G=>G!=null);if(!k.length){let G=`<svg viewBox="0 0 ${o} ${r}" width="100%" height="${r}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`;const H=t.length,F=H>1?H-1:1;return G+=t.map((I,A)=>`<text x="${(u.l+A/F*d).toFixed(1)}" y="${u.t+m+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Xt}">${e[A]||""}</text>`).join(""),G+="</svg>",G}const b=Math.min(...k)-1,v=Math.max(...k)+1,w=v-b||1,x=t.length,M=x>1?x-1:1,j=t.map((G,H)=>u.l+H/M*d),D=[];t.forEach((G,H)=>{G!=null&&D.push({x:j[H],y:u.t+(1-(G-b)/w)*m,v:G,idx:H})});let W=`<svg viewBox="0 0 ${o} ${r+12}" width="100%" height="${r+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`;const L=c>0?D.filter(G=>G.idx<c):[],_=c>0?D.filter(G=>G.idx>=c):D,V="#64748B";if(_.length>=2){const G=_.map((F,I)=>`${I?"L":"M"}${F.x.toFixed(1)},${F.y.toFixed(1)}`).join(" "),H=G+` L${_[_.length-1].x.toFixed(1)},${u.t+m} L${_[0].x.toFixed(1)},${u.t+m} Z`;W+=`<defs><linearGradient id="lg${h}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${a}" stop-opacity="0.03"/>
    </linearGradient></defs>`,W+=`<path d="${H}" fill="url(#lg${h})"/>`,W+=`<path d="${G}" stroke="${a}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`}if(L.length>=2){const G=L.map((H,F)=>`${F?"L":"M"}${H.x.toFixed(1)},${H.y.toFixed(1)}`).join(" ");W+=`<path d="${G}" stroke="${V}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`}if(W+=D.map(G=>{const H=c>0&&G.idx<c;return c>0&&G.idx===c?`<circle cx="${G.x.toFixed(1)}" cy="${G.y.toFixed(1)}" r="4" fill="#000" stroke="${a}" stroke-width="3"/>`:`<circle cx="${G.x.toFixed(1)}" cy="${G.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${H?V:a}" stroke-width="2" opacity="${H?.85:1}"/>`}).join(""),W+=D.map(G=>{const F=c>0&&G.idx<c?V:a;return`<text x="${G.x.toFixed(1)}" y="${Math.max(G.y-7,12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${F}" font-family="${Xt}">${G.v.toFixed(1)}</text>`}).join(""),c>0&&s){const G=j[c];W+=`<line x1="${G.toFixed(1)}" y1="${(u.t+y).toFixed(1)}" x2="${G.toFixed(1)}" y2="${(u.t+m+y).toFixed(1)}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`;const H=G>o*.7,F=(H?u.t+m+1:u.t+8)+p;W+=`<text x="${(H?G-5:G+5).toFixed(1)}" y="${F.toFixed(1)}" text-anchor="${H?"end":"start"}" font-size="9" fill="#64748B" font-family="${Xt}">${s}</text>`}return W+=t.map((G,H)=>`<text x="${j[H].toFixed(1)}" y="${u.t+m+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${Xt}">${e[H]||""}</text>`).join(""),W+="</svg>",W}function Ae(t,e){return xn[t]||Ho[e%Ho.length]}function vn(t,e,o,r,a={}){const i=Object.keys(t);if(!i.length||!e.length)return"";const c=a.fadeBeforeIdx!=null?a.fadeBeforeIdx:-1,s=a.baselineLabel||"";let p=1/0,y=-1/0;if(i.forEach(x=>(t[x]||[]).forEach(M=>{M!=null&&(M<p&&(p=M),M>y&&(y=M))})),!isFinite(p))return"";const h=Math.max((y-p)*.15,2);p=Math.max(0,p-h),y=Math.min(100,y+h);const u=y-p||1,d=e.length,m=8,k=8,b=r-m-k,v="#64748B";let w="";for(let x=0;x<=4;x++){const M=m+x/4*b;w+=`<line x1="0" y1="${M.toFixed(1)}" x2="${o}" y2="${M.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`}if(i.forEach((x,M)=>{const j=t[x]||[],D=Ae(x,M),W=x==="LG",L=W?2.5:1.5,_=W?1:.7,V=[];if(j.forEach((I,A)=>{if(I==null)return;const z=(A+.5)/d*o,K=m+(1-(I-p)/u)*b;V.push({x:z,y:K,v:I,idx:A})}),!V.length)return;const G=c>0?V.filter(I=>I.idx<c):[],H=c>0?V.filter(I=>I.idx>=c):V;function F(I,A,z,K){if(I.length>=2){const X=I.map((Z,f)=>`${f?"L":"M"}${Z.x.toFixed(1)},${Z.y.toFixed(1)}`).join(" ");w+=`<path d="${X}" stroke="${A}" fill="none" stroke-width="${L}" stroke-linecap="round" stroke-linejoin="round" opacity="${z}"/>`}I.forEach(X=>{K&&X.idx===c||(w+=`<circle cx="${X.x.toFixed(1)}" cy="${X.y.toFixed(1)}" r="${W?3.5:2.5}" fill="#fff" stroke="${A}" stroke-width="${W?2:1.5}" opacity="${z}"/>`)})}if(F(G,v,.85,!1),F(H,D,_,W&&c>0),W&&c>0){const I=V.find(A=>A.idx===c);I&&(w+=`<circle cx="${I.x.toFixed(1)}" cy="${I.y.toFixed(1)}" r="4.5" fill="#000" stroke="${D}" stroke-width="3"/>`)}}),c>0&&s){const x=(c+.5)/d*o;w+=`<line x1="${x.toFixed(1)}" y1="${m}" x2="${x.toFixed(1)}" y2="${m+b}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`;const M=x>o*.7;w+=`<text x="${(M?x-5:x+5).toFixed(1)}" y="${(m+12).toFixed(1)}" text-anchor="${M?"end":"start"}" font-size="11" fill="#64748B" font-family="${Xt}">${s}</text>`}return`<svg viewBox="0 0 ${o} ${r}" width="100%" height="${r}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${w}</svg>`}function fi({lang:t,weeklyAll:e,products:o,productsCnty:r,ulMap:a,monthlyVis:i,total:c,meta:s,wLabels:p}){const y={monthlyVis:i};return`
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
${(()=>{const h=u=>JSON.stringify(u).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _weeklyAll=${e?h(e):"{}"};
var _products=${h(o.map(u=>({id:u.id,bu:u.bu,kr:u.kr,en:u.en||u.kr,category:u.category||"",date:u.date||"",status:u.status,score:u.score||0,prev:u.prev||0,vsComp:u.vsComp||0,compName:u.compName||"",compRatio:u.compRatio||0,allScores:u.allScores||{},monthlyScores:u.monthlyScores||[]})))};
var _productsCnty=${h(r||[])};
var _unlaunchedMap=${h(a)};
var _PROD_TO_UL=${h(Le)};
function _isUnlaunched(cnty,prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();return!!_unlaunchedMap[cnty+'|'+code]}
function _unlaunchedCntys(prodId){var code=_PROD_TO_UL[prodId]||prodId.toUpperCase();var r=[];Object.keys(_unlaunchedMap).forEach(function(k){if(k.endsWith('|'+code))r.push(k.split('|')[0])});return r}
var _monthlyVis=${h((y==null?void 0:y.monthlyVis)||[])};
var _total=${h(c)};
var _meta={period:${h(s.period||"")},reportNo:${h(s.reportNo||"")},totalInsight:${h(s.totalInsight||"")}};
var _wLabels=${h(p)};`})()}
${(()=>{const h=u=>JSON.stringify(u).replace(/<\//g,"<\\/").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029");return`var _lang='${t}';
var _BRAND_COLORS=${h(xn)};
var _FALLBACK=['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0'];
var _RED='${ne}';
var _FONT=${h(Xt)};
var _COMP='${ue}';
var _REGIONS=${h(Object.fromEntries(Object.entries(ro).map(([u,d])=>[u,d.countries])))};`})()}
var _REGION_LABELS=${JSON.stringify(Object.fromEntries(Object.entries(ro).map(([h,u])=>[h,t==="en"?u.labelEn:u.label]))).replace(/<\//g,"<\\/")};
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
var _TREND_BC=${ho};

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
`}const mi=["audio","rac","aircare"];function gi(t){const e=typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"";return mi.includes(String(e).toLowerCase())}function yi(t){const e=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase();return e==="audio"?13:e==="rac"||e==="aircare"?16:0}function ze(t,e){if(!gi(t)||!e)return-1;const o=yi(t);if(o>0){const r=e.findIndex(a=>{const i=String(a||"").trim().match(/^W?(\d+)$/i);return i&&parseInt(i[1],10)===o});if(r>=0)return r}return e.findIndex(r=>{const a=String(r||"").trim();return/^Apr(il)?$/i.test(a)||a==="4월"})}const Ge={ko:{title:"*Baseline 재조정 (4월)",audio:"-Audio : 오디오 신제품 Sound Suite의 브랜드 전략 및 핵심 경쟁력 고려하여 기존 DAFC 토픽 외 Speaker Set, Spatial Sound, Connectivity 등 고객들이 주로 질문할 주요 USP 관점의 프롬프트 추가함",racair:"-RAC/Aircare : 사업 중요도에 따라서 국가별 Prompt를 재분배 함(브라질, 멕시코, 베트남, 인도 확대 / 미국, 영국, 독일, 호주 축소). 제조사 브랜드가 노출되지 않는 Prompt를 중심으로 삭제 함 (브랜드 노출수 Avg 0.2개 Prompt)"},en:{title:"*Baseline reset (April)",audio:"-Audio: Considering the brand strategy and core competitiveness of the new Sound Suite, added prompts from key USP perspectives (Speaker Set, Spatial Sound, Connectivity, etc.) frequently asked by customers, beyond existing DAFC topics",racair:"-RAC/Aircare: Redistributed prompts by country based on business priority (expanded: Brazil, Mexico, Vietnam, India / reduced: US, UK, Germany, Australia). Removed prompts where manufacturer brand was not exposed (avg 0.2 brand mentions per prompt)"}};function bi(t){const e=Ge[t]||Ge.ko;return`<p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">${e.title}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.audio}</p>
<p style="margin:2px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:400">${e.racair}</p>`}function wn(t,e){const o=String(typeof t=="string"?t:(t==null?void 0:t.id)||(t==null?void 0:t.category)||"").toLowerCase(),r=Ge[e]||Ge.ko;return o==="audio"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${r.audio}</p>`:o==="rac"||o==="aircare"?`<p style="margin:6px 0 0;font-size:11px;color:#64748B;line-height:1.5">${r.racair}</p>`:""}function xi(t,e,o,r,a,i,c){if(!e||!Object.keys(e).length)return"";const p=["MS","HS","ES"].map(y=>{const h=t.filter(d=>d.bu===y);if(!h.length)return"";const u=h.map(d=>{var G,H;const m=((G=e[d.id])==null?void 0:G.Total)||{},k=Object.keys(m).sort((F,I)=>{var K,X;if(F==="LG")return-1;if(I==="LG")return 1;const A=((K=m[F])==null?void 0:K[m[F].length-1])||0;return(((X=m[I])==null?void 0:X[m[I].length-1])||0)-A});if(!k.length)return"";const b=fo(d.status,a),v=(H=m.LG)==null?void 0:H[m.LG.length-1],w=k.map((F,I)=>{const A=Ae(F,I),z=F==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${A};opacity:${z?1:.7}"></i><span style="font-size:13px;color:${z?"#1A1A1A":"#94A3B8"};font-weight:${z?700:400}">${F}</span></span>`}).join(""),x=o.length,M=`<colgroup><col style="width:${ho}px">${o.map(()=>"<col>").join("")}</colgroup>`,j=ze(d,o),D=`<tr><td style="padding:0;border:0"></td><td colspan="${x}" style="padding:8px 0;border:0">${vn(m,o,x*80,180,{fadeBeforeIdx:j,baselineLabel:j>0?"*Baseline 재설정":""})}</td></tr>`,W=`<tr><td style="padding:0;border:0"></td><td colspan="${x}" style="padding:4px 0 6px;border:0">${w}</td></tr>`,L=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${o.map(F=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${F}</th>`).join("")}</tr>`,_=k.map((F,I)=>{const A=Ae(F,I),z=F==="LG",K=o.map((X,Z)=>{var Q;const f=(Q=m[F])==null?void 0:Q[Z];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${f!=null?z?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${z?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${f!=null?f.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${z?"#FFF8F9":I%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${z?700:500};color:${A};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${A};margin-right:4px;vertical-align:0"></i>${F}</td>${K}</tr>`}).join(""),V=mo(d.id||d.category,i);return`<div class="trend-row${V?" is-unlaunched":""}" data-prodid="${d.id||d.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${ne};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${go(d,i)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${V?"#F1F5F9":b.bg};color:${V?"#64748B":b.color};border:1px solid ${V?"#CBD5E1":b.border}">${V?a==="en"?"Unlaunched":"미출시":b.label}</span>
          ${v!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${v.toFixed(1)}%</span>`:""}
          ${d.compName?`<span style="font-size:14px;color:#94A3B8">vs ${d.compName} ${d.compRatio!=null&&d.compRatio!==""?Math.round(d.compRatio):""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Xt}">${M}<tbody>${D}${W}${L}${_}</tbody></table></div>
        ${wn(d,a)}
      </div>`}).join("");return u?`<div class="bu-group" data-bu="${y}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${y}</span></div>
      ${u}
    </div>`:""}).join("");return p.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${a==="en"?"Weekly Competitor Trend":"주간 경쟁사 트렌드"}</div>
      <span class="legend">${c||""} &nbsp;|&nbsp; ${o[0]}–${o[o.length-1]} (${o.length}${a==="en"?" weeks":"주"})</span>
    </div>
    <div class="section-body">${p}</div>
  </div>`:""}function vi(t,e,o,r,a,i){if(!e||!e.length)return"";const c=["MS","HS","ES"],s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function y(m){const k=String(m||""),b=k.match(/(\d{1,2})월/);if(b)return parseInt(b[1])-1;const v=k.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(v)return p[v[1].toLowerCase()];const w=k.match(/\d{4}[-\/](\d{1,2})/);return w?parseInt(w[1])-1:-1}const h=[0,1,2,3,4,5,6,7,8,9,10,11],u=s.slice(),d=c.map(m=>{const k=t.filter(v=>v.bu===m);if(!k.length)return"";const b=k.map(v=>{const w=v.monthlyScores||[];let x={};if(w.length>=2){const z=new Set;if(w.forEach(K=>{K.allScores&&Object.keys(K.allScores).forEach(X=>z.add(X))}),z.forEach(K=>{x[K]=h.map(X=>{var f;const Z=w.find(Q=>y(Q.date)===X);return((f=Z==null?void 0:Z.allScores)==null?void 0:f[K])??null})}),!z.size&&(x.LG=h.map(K=>{const X=w.find(Z=>y(Z.date)===K);return X?X.score:null}),v.vsComp>0)){const K=h.map(X=>{const Z=w.find(f=>y(f.date)===X);return(Z==null?void 0:Z.comp)??null});K.some(X=>X!=null)&&(x[v.compName||"Comp"]=K)}}else{const z=e.filter(f=>f.division===m&&(f.country==="TOTAL"||f.country==="TTL")),K={};z.forEach(f=>{const Q=y(f.date);Q>=0&&(K[Q]=f)});const X=h.map(f=>{var Q;return((Q=K[f])==null?void 0:Q.lg)||null}),Z=h.map(f=>{var Q;return((Q=K[f])==null?void 0:Q.comp)||null});x={LG:X},Z.some(f=>f!=null&&f>0)&&(x.Samsung=Z)}const M=Object.keys(x).sort((z,K)=>{if(z==="LG")return-1;if(K==="LG")return 1;const X=(x[z]||[]).filter(f=>f!=null).pop()||0;return((x[K]||[]).filter(f=>f!=null).pop()||0)-X});if(!M.length)return"";const j=fo(v.status,r),D=(x.LG||[]).filter(z=>z!=null).pop(),W=M.map((z,K)=>{const X=Ae(z,K),Z=z==="LG";return`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:12px"><i style="display:inline-block;width:10px;height:3px;border-radius:1px;background:${X};opacity:${Z?1:.7}"></i><span style="font-size:13px;color:${Z?"#1A1A1A":"#94A3B8"};font-weight:${Z?700:400}">${z}</span></span>`}).join(""),L=u.length,_=`<colgroup><col style="width:${ho}px">${u.map(()=>"<col>").join("")}</colgroup>`,V=ze(v,u),G=`<tr><td style="padding:0;border:0"></td><td colspan="${L}" style="padding:8px 0;border:0">${vn(x,u,L*80,180,{fadeBeforeIdx:V,baselineLabel:V>0?"*Baseline 재설정":""})}</td></tr>`,H=`<tr><td style="padding:0;border:0"></td><td colspan="${L}" style="padding:4px 0 6px;border:0">${W}</td></tr>`,F=`<tr style="border-top:1px solid #E8EDF2"><th style="text-align:left;padding:5px 6px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">Brand</th>${u.map(z=>`<th style="text-align:center;padding:5px 2px;font-size:14px;color:#94A3B8;font-weight:600;border-bottom:1px solid #F1F5F9">${z}</th>`).join("")}</tr>`,I=M.map((z,K)=>{const X=Ae(z,K),Z=z==="LG",f=u.map((Q,U)=>{var T;const gt=(T=x[z])==null?void 0:T[U];return`<td style="text-align:center;padding:5px 2px;font-size:14px;color:${gt!=null?Z?"#1A1A1A":"#475569":"#CBD5E1"};font-weight:${Z?700:400};border-bottom:1px solid #F8FAFC;font-variant-numeric:tabular-nums">${gt!=null?gt.toFixed(1):"—"}</td>`}).join("");return`<tr style="background:${Z?"#FFF8F9":K%2===0?"#fff":"#FAFBFC"}"><td style="padding:5px 6px;font-size:13px;font-weight:${Z?700:500};color:${X};border-bottom:1px solid #F8FAFC;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><i style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${X};margin-right:4px;vertical-align:0"></i>${z}</td>${f}</tr>`}).join(""),A=mo(v.id||v.category,a);return`<div class="trend-row${A?" is-unlaunched":""}" data-prodid="${v.id||v.category}" style="margin-bottom:24px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="width:4px;height:22px;border-radius:4px;background:${ne};flex-shrink:0"></span>
          <span style="font-size:20px;font-weight:700;color:#1A1A1A">${go(v,a)}</span>
          <span class="trend-status-badge" style="font-size:14px;font-weight:700;padding:2px 8px;border-radius:10px;background:${A?"#F1F5F9":j.bg};color:${A?"#64748B":j.color};border:1px solid ${A?"#CBD5E1":j.border}">${A?r==="en"?"Unlaunched":"미출시":j.label}</span>
          ${D!=null?`<span style="font-size:16px;font-weight:700;color:#1A1A1A">LG ${D.toFixed(1)}%</span>`:""}
          ${v.compName?`<span style="font-size:14px;color:#94A3B8">vs ${v.compName} ${v.compRatio!=null&&v.compRatio!==""?Math.round(v.compRatio):""}%</span>`:""}
        </div>
        <div style="border:1px solid #E8EDF2;border-radius:10px;overflow:hidden"><table style="width:100%;border-collapse:collapse;table-layout:fixed;font-family:${Xt}">${_}<tbody>${G}${H}${F}${I}</tbody></table></div>
        ${wn(v,r)}
      </div>`}).join("");return b?`<div class="bu-group" data-bu="${m}" style="margin-bottom:20px">
      <div class="bu-header"><span class="bu-label">${m}</span></div>
      ${b}
    </div>`:""}).join("");return d.trim()?`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${r==="en"?"Monthly Trend":"월간 트렌드"}</div>
      <span class="legend">${i||""} &nbsp;|&nbsp; ${u[0]}–${u[u.length-1]} (${u.length}${r==="en"?" months":"개월"})</span>
    </div>
    <div class="section-body">${d}</div>
  </div>`:""}function Cn(){return""}function Wo(t,e,o,r,a){const i=+(t.score-t.prev).toFixed(1),c=t.vsComp||0,s=+(t.score-c).toFixed(1),p=i>0?"▲":i<0?"▼":"─",y=i>0?"#22C55E":i<0?"#EF4444":"#94A3B8",h=c>0?Math.round(t.score/c*100):null,u=h==null?"#94A3B8":h>=100?"#22C55E":h>=80?"#FBBF24":"#EF4444";return`<div class="hero" id="hero-section"${a==="weekly"?' data-period="weekly"':' data-period="monthly"'}>
    <div class="hero-top">
      <div><span class="hero-brand">LG ELECTRONICS</span></div>
      <div class="hero-ctx" id="hero-ctx">
        <span class="hero-ctx-badge">${e.period||""}</span>
        <span class="hero-ctx-badge">${r==="en"?"All Divisions":"전체 본부"}</span>
        <span class="hero-ctx-badge">${r==="en"?"All Products":"전체 제품"}</span>
        <span class="hero-ctx-badge">${r==="en"?"All Countries":"전체 국가"}</span>
      </div>
    </div>
    <div class="hero-body">
      <div class="hero-left">
        <div class="hero-label">LG GEO Visibility %</div>
        ${h!=null?`<div class="hero-compratio">
          <span class="hero-compratio-cap">${r==="en"?"Comp. Ratio":"경쟁비"}</span>
          <span class="hero-compratio-val" style="color:${u}">${h}%</span>
          <span class="hero-compratio-sub">${r==="en"?"vs Samsung":"삼성 대비"}</span>
        </div>`:""}
        <div class="hero-score-row">
          <span class="hero-score">${t.score}</span><span class="hero-pct">%</span>
          <span class="hero-delta" style="color:${y}">${p} ${Math.abs(i).toFixed(1)}%p</span>
          <span class="hero-mom">MoM</span>
        </div>
        <div class="hero-gauge">
          <div class="hero-gauge-track">
            <div class="hero-gauge-bar" style="width:${Math.min(t.score,100)}%;background:${ne}"></div>
          </div>
          ${c>0?`<div class="hero-gauge-track" style="margin-top:6px">
            <div class="hero-gauge-bar" style="width:${Math.min(c,100)}%;background:${ue}"></div>
          </div>`:""}
          <div class="hero-legend">
            <span><i style="background:${ne}"></i> LG ${t.score}%</span>
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
  </div>`}function Te(t,e){const o=Le[t]||(t||"").toUpperCase();return Object.keys(e||{}).filter(r=>r.endsWith("|"+o)).map(r=>r.split("|")[0])}function mo(t,e){return si.every(o=>{const r=Le[t]||(t||"").toUpperCase();return(e||{})[`${o}|${r}`]})}function go(t,e){return Te(t.id||t.category,e).length?`${t.kr}*`:t.kr}function Ko(t,e,o,r,a,i,c,s,p){if(!t.length)return"";const h=["MS","HS","ES"].map(u=>{const d=t.filter(k=>k.bu===u);if(!d.length)return"";const m=d.map(k=>{var at,bt;const b=k.weekly||[],v=b.filter(ht=>ht!=null),w=k.weeklyScore||(v.length>0?v[v.length-1]:k.score),x=k.monthlyScore||k.score,M=w,j=((at=s==null?void 0:s[k.id])==null?void 0:at.Total)||((bt=s==null?void 0:s[k.id])==null?void 0:bt.TTL)||{};let D=0;Object.entries(j).forEach(([ht,pt])=>{if(ht==="LG"||ht==="lg")return;const N=Array.isArray(pt)&&pt.length?pt[pt.length-1]:0;N>D&&(D=N)});const W=k.vsComp||0,L=D>0?w/D*100:W>0?w/W*100:100,_=W>0?x/W*100:100,V=Math.round(L),G=Math.round(_),H=V,F=L>=100?"lead":L>=80?"behind":"critical",I=fo(F,r),A=v.length>=1?v[v.length-1]:null,z=v.length>=2?v[v.length-2]:null,K=A!=null&&z!=null?+(A-z).toFixed(1):null,X=K>0?"▲":K<0?"▼":"─",Z=K>0?"#22C55E":K<0?"#EF4444":"#94A3B8",f=F==="critical"?"#BE123C":F==="behind"?"#D97706":"#15803D",Q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],U={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};function gt(ht){const pt=String(ht||""),N=pt.match(/(\d{1,2})월/);if(N)return parseInt(N[1])-1;const et=pt.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(et)return U[et[1].toLowerCase()];const xt=pt.match(/\d{4}[-\/](\d{1,2})/);return xt?parseInt(xt[1])-1:-1}let T=k.monthlyScores||[];if(T.length<2&&c.length>0){const ht=c.filter(N=>N.division===k.bu&&(N.country==="TOTAL"||N.country==="TTL")),pt={};ht.forEach(N=>{const et=gt(N.date);et>=0&&(pt[et]={date:N.date,score:N.lg,comp:N.comp})}),T=Object.keys(pt).sort((N,et)=>N-et).map(N=>pt[N])}const C=T.length>0?T.map(ht=>{const pt=gt(ht.date);return pt>=0?Q[pt]:ht.date}):["M-3","M-2","M-1","M0"],S=T.length>0?T.map(ht=>ht.score):[null,null,null,k.score],O=T.length>=2?+(T[T.length-1].score-T[T.length-2].score).toFixed(1):null,P=O>0?"▲":O<0?"▼":"─",$=O>0?"#22C55E":O<0?"#EF4444":"#94A3B8",mt=H,St=mt>=100?"#15803D":mt>=80?"#D97706":"#BE123C",ut=k.weeklyPrev||(v.length>=5?v[v.length-5]:v[0]||0),Ct=w&&ut?+(w-ut).toFixed(1):null,wt=x&&(k.monthlyPrev||k.prev)?+(x-(k.monthlyPrev||k.prev)).toFixed(1):null,Ft=Te(k.id||k.category,i),R=mo(k.id||k.category,i),lt=R?{border:"#CBD5E1",bg:"#F1F5F9",color:"#64748B",label:r==="en"?"Unlaunched":"미출시"}:I;return`<div class="prod-card${R?" is-unlaunched":""}" data-prodid="${k.id||k.category}" data-ws="${w.toFixed(1)}" data-ms="${x.toFixed(1)}" data-wr="${V}" data-mr="${G}" data-wmom="${Ct??""}" data-mmom="${wt??""}" style="border-color:${lt.border}">
        <div class="prod-head">
          <span class="prod-name">${go(k,i)}</span>
          ${Ft.length>0?`<span class="prod-ul-note" style="display:block;font-size:11px;color:#94A3B8;margin-top:1px">* ${r==="en"?"Not launched countries":"제품 미출시 국가"}</span>`:""}
          <span class="prod-badge" style="background:${lt.bg};color:${lt.color};border-color:${lt.border}">${lt.label}</span>
        </div>
        <div class="prod-score-row">
          <span class="prod-score">${M.toFixed(1)}<small>%</small></span>
          <span class="prod-delta prod-wow" style="color:${Z}">${K!=null?`WoW ${X} ${Math.abs(K).toFixed(1)}%p`:"WoW —"}</span>
          <span class="prod-delta prod-mom" style="display:none;color:${$}">${O==null?"MoM —":`MoM ${P} ${Math.abs(O).toFixed(1)}%p`}</span>
        </div>
        <div class="prod-chart">
          <div class="trend-weekly">${(()=>{const ht=a.slice(-10),pt=ze(k,ht),N=String(k.id||"").toLowerCase(),et=N==="aircare"?30:N==="rac"?20:0;return Vo(b.slice(-10),ht,300,90,f,{fadeBeforeIdx:pt,baselineLabel:pt>0?"*Baseline 재설정":"",labelOffsetY:et})})()}</div>
          <div class="trend-monthly" style="display:none">${(()=>{const ht=ze(k,C),N=String(k.id||"").toLowerCase()==="audio";return Vo(S,C,300,90,f,{fadeBeforeIdx:ht,baselineLabel:ht>0?"*Baseline 재설정":"",labelOffsetY:N?-60:0})})()}</div>
        </div>
        <div class="prod-comp">
          <span class="prod-comp-name">${r==="en"?`vs ${k.compName}`:`${k.compName} ${o.vsComp}`}</span>
          <div class="prod-comp-bar-wrap">
            <div class="prod-comp-bar" style="width:${Math.min(mt,120)}%;background:${St}"></div>
          </div>
          <span class="prod-comp-pct" style="color:${St}">${mt}%</span>
        </div>
      </div>`}).join("");return`<div class="bu-group" data-bu="${u}">
      <div class="bu-header"><span class="bu-label">${u}</span><span class="bu-count">${d.length}${o.categories}</span></div>
      <div class="prod-grid">${m}</div>
    </div>`}).join("");return`<div class="section-card">
    <div class="section-header">
      <div class="section-title">${o.productTitle}</div>
      <span class="legend">${p||""}${p?" &nbsp;|&nbsp; ":""}<i style="background:#15803D"></i>${o.legendLead} <i style="background:#D97706"></i>${o.legendBehind} <i style="background:#BE123C"></i>${o.legendCritical}</span>
    </div>
    ${Cn(e.productInsight,e.showProductInsight,e.productHowToRead,e.showProductHowToRead)}
    <div class="section-body">${h}${(()=>{const u=t.filter(d=>Te(d.id||d.category,i).length>0).map(d=>`${(d.id||"").toLowerCase()==="audio"||d.kr==="오디오"?"Audio-Sound Suite":d.kr}: ${Te(d.id||d.category,i).map(m=>ui(m,r)).join(", ")} ${r==="en"?"not launched":"미출시"}`);return(u.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${u.join(" / ")}</p>`:"")+bi(r)})()}</div>
  </div>`}function qo(t,e,o,r){const i={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"}[t.product]||String(t.product||"").toLowerCase(),c=Le[i]||(i||"").toUpperCase(),s=r&&r[`${t.country}|${c}`],p=pi(t.score,t.compScore),y=s?"#94A3B8":p==="lead"?"#15803D":p==="behind"?"#D97706":"#BE123C",h=+(t.score-t.compScore).toFixed(1),u=s?"#64748B":h>=0?"#15803D":"#BE123C",d=130,m=["TCL","HISENSE","HAIER"];let k="",b=0;t.allScores&&Object.entries(t.allScores).forEach(([_,V])=>{const G=String(_).toUpperCase();m.some(F=>G.includes(F))&&V>b&&(k=_,b=V)});const v=Math.max(e,b),w=s?1:t.score,x=Math.max(3,Math.round(w/v*d)),M=t.compScore>0?Math.max(3,Math.round(t.compScore/v*d)):0,j=b>0?Math.max(3,Math.round(b/v*d)):0,D="#9333EA",W=s?"—":t.score.toFixed(1),L=s?"—":`${h>=0?"+":""}${h}%p`;return`<div class="vbar-item${s?" is-unlaunched":""}" data-product="${t.product}" data-country="${t.country}" data-prodid="${i}">
    <div class="vbar-cols">
      <div class="vbar-col-wrap">
        <span class="vbar-val" style="color:${y}">${W}</span>
        <div class="vbar-col" style="height:${x}px;background:${y}"></div>
        <span class="vbar-col-name">LG</span>
      </div>
      ${t.compScore>0?`<div class="vbar-col-wrap">
        <span class="vbar-val comp-val" style="color:${ue}">${t.compScore.toFixed(1)}</span>
        <div class="vbar-col" style="height:${M}px;background:${ue}"></div>
        <span class="vbar-col-name">${t.compName.toUpperCase()==="SAMSUNG"?"SS":t.compName}</span>
      </div>`:""}
      ${b>0?`<div class="vbar-col-wrap cbrand-bar">
        <span class="vbar-val" style="color:${D}">${b.toFixed(1)}</span>
        <div class="vbar-col" style="height:${j}px;background:${D}"></div>
        <span class="vbar-col-name" style="color:${D}">${k.toUpperCase()}</span>
      </div>`:""}
    </div>
    <span class="vbar-gap" style="color:${u}">${L}</span>
    <span class="vbar-label">${o}</span>
  </div>`}function Jo(t,e,o,r,a,i){if(!t||!t.length)return"";const c=new Map;t.forEach(m=>{c.has(m.product)||c.set(m.product,[]),c.get(m.product).push(m)});const s=e.cntyProductFilter||{},p=[...c.entries()].filter(([m])=>s[m]!==!1).map(([m,k])=>{const b=Math.max(...k.map(w=>Math.max(w.score,w.compScore)),1),v=k.map(w=>qo(w,b,io(w.country),a)).join("");return`<div class="cnty-product" data-group-product="${m}"><div class="bu-header"><span class="bu-label">${m}</span></div><div class="vbar-chart">${v}</div></div>`}).join(""),y=new Map;t.forEach(m=>{y.has(m.country)||y.set(m.country,[]),y.get(m.country).push(m)});const h=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"],d=h.filter(m=>y.has(m)).concat([...y.keys()].filter(m=>!h.includes(m))).map(m=>{const k=y.get(m);if(!k)return"";const b=Math.max(...k.map(w=>Math.max(w.score,w.compScore)),1),v=k.map(w=>qo(w,b,w.product,a)).join("");return`<div class="cnty-product" data-group-country="${m}"><div class="bu-header"><span class="bu-label">${io(m)}</span></div><div class="vbar-chart">${v}</div></div>`}).join("");return`<div class="section-card cnty-section">
    <div class="section-header">
      <div class="section-title cnty-section-title">${o.cntyTitle}</div>
      <div class="section-header-right">
        ${i?`<span class="legend">${i}</span>`:""}
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
    ${Cn(e.cntyInsight,e.showCntyInsight,e.cntyHowToRead,e.showCntyHowToRead)}
    <div class="section-body">
      <div class="cnty-view-country">${d}</div>
      <div class="cnty-view-product" style="display:none">${p}</div>
      ${(()=>{if(!a||!Object.keys(a).length)return"";const m={TV:"tv",모니터:"monitor",오디오:"audio",세탁기:"washer",냉장고:"fridge",식기세척기:"dw",청소기:"vacuum",Cooking:"cooking",RAC:"rac",Aircare:"aircare"},b=[...new Set(t.map(v=>v.product))].map(v=>{const w=m[v]||String(v).toLowerCase(),x=Te(w,a),M=w==="audio"?"Audio-Sound Suite":v;return x.length?`${M}: ${x.join(", ")} ${r==="en"?"not launched":"미출시"}`:null}).filter(Boolean);return b.length?`<p style="margin:12px 0 0;font-size:12px;color:#1A1A1A;line-height:1.6;font-weight:500">* ${b.join(" / ")}</p>`:""})()}
    </div>
  </div>`}const Yo={ko:[{term:"GEO (Generative Engine Optimization)",def:"생성형 AI 검색 엔진(예: ChatGPT, Gemini, Perplexity 등)에서 자사 브랜드 및 제품이 더 잘 노출·추천되도록 콘텐츠를 최적화하는 전략."},{term:"Visibility (가시성)",def:"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."},{term:"Visibility — 국가별",def:"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."},{term:"Citation (인용)",def:"Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다."},{term:"Citation — 닷컴",def:"닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다."},{term:"Readability (가독성)",def:"콘텐츠가 AI 엔진에 의해 얼마나 쉽게 파싱·이해되는지를 평가하는 지표. 구조화된 데이터, 명확한 문장 구조 등이 영향을 미친다."},{term:"KPI (Key Performance Indicator)",def:"핵심 성과 지표. GEO에서는 Visibility, Citation Rate, Readability Score 등이 해당된다."},{term:"BU (Business Unit)",def:"사업부 단위. MS, HS, ES 등으로 구분된다."},{term:"Stakeholder (유관조직)",def:"GEO 개선 활동에 참여하는 조직 단위. 예: MS, HS, ES, PR, 브랜드 등."},{term:"달성률",def:"해당 월의 실적을 목표로 나눈 백분율. (실적 ÷ 목표) × 100."},{term:"누적 달성률",def:"연초부터 해당 월까지의 누적 실적을 누적 목표로 나눈 백분율."},{term:"연간 진척률",def:"연초부터 현재까지의 누적 실적을 연간 총 목표로 나눈 백분율."},{term:"신호등 체계",def:"100% 이상 = 선도(녹색), 80~100% = 추격(주황), 80% 미만 = 취약(빨강). 경쟁사 대비 상대 점수 기준으로 색상 분류."}],en:[{term:"GEO (Generative Engine Optimization)",def:"A strategy to optimize content so that brands and products are better surfaced and recommended by generative AI search engines (e.g., ChatGPT, Gemini, Perplexity)."},{term:"Visibility",def:"GEO Visibility Score quantifies how often LG products are mentioned/recommended by generative AI engines (ChatGPT, Gemini, etc.) on a 0–100% scale. MoM shows month-over-month change. Competitor comparison is calculated as (LG Score / Top Brand Score) × 100%. ≥100% = Lead, ≥80% = Behind, <80% = Critical."},{term:"Visibility — by Country",def:"Country-level GEO Visibility measures how often AI engines mention/recommend LG for each product category in each market (US, UK, DE, etc.). Bar colors indicate relative scores vs competitors: green (Lead), orange (Behind), red (Critical). Values below show top competitor score and gap in %p."},{term:"Citation",def:"Citation Score quantifies the influence of external sources (review sites, media, etc.) referenced by AI when answering LG product queries. Higher scores indicate more frequent citation. Changes reflect month-over-month contribution shifts."},{term:"Citation — Dotcom",def:"Dotcom Citation measures how often AI cites LG/Samsung official site page types (TTL, PLP, PDP, etc.). TTL = total, PLP = category listing, PDP = product detail, Microsites = campaign page citation counts."},{term:"Readability",def:"A metric evaluating how easily content can be parsed and understood by AI engines. Influenced by structured data, clear sentence structure, etc."},{term:"KPI (Key Performance Indicator)",def:"Core performance metrics. In GEO, these include Visibility, Citation Rate, Readability Score, etc."},{term:"BU (Business Unit)",def:"Organizational division. Categorized as MS, HS, ES, etc."},{term:"Stakeholder",def:"An organizational unit participating in GEO improvement activities. E.g., MS, HS, ES, PR, Brand, etc."},{term:"Achievement Rate",def:"Monthly actual performance divided by target, expressed as a percentage. (Actual / Goal) x 100."},{term:"Cumulative Achievement Rate",def:"Year-to-date cumulative actual divided by cumulative goal, expressed as a percentage."},{term:"Annual Progress Rate",def:"Year-to-date cumulative actual divided by the total annual target, expressed as a percentage."},{term:"Traffic Light System",def:"≥100% = Lead (green), 80–100% = Behind (orange), <80% = Critical (red). Color-coded based on relative score vs competitor."}]};function wi(t){const e=Yo[t]||Yo.ko;return`<div style="max-width:840px;margin:32px auto;padding:0 40px">
    <h2 style="font-size:24px;font-weight:800;color:#1A1A1A;margin-bottom:6px">${t==="en"?"GEO Glossary":"GEO 용어 사전"}</h2>
    <p style="font-size:15px;color:#64748B;margin-bottom:28px">${t==="en"?"Key terms and definitions used across the GEO dashboards.":"GEO 대시보드 전반에서 사용되는 주요 용어와 정의입니다."}</p>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${e.map(a=>`<div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:16px 20px">
        <div style="font-size:16px;font-weight:700;color:#1A1A1A;margin-bottom:6px">${a.term}</div>
        <div style="font-size:15px;color:#64748B;line-height:1.7">${a.def}</div>
      </div>`).join("")}
    </div>
  </div>`}function Xo(t,e,o,r,a,i="weekly"){const c=i==="monthly",s=c?"prm":"pr";if(!t||!t.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No PR Visibility data available.":"PR Visibility 데이터가 없습니다."}</div>`;const p=["US","CA","UK","DE","ES","BR","MX","AU","VN","IN"];let y;c?y=e&&e.length?e.slice():[]:y=e&&e.length?e.slice(-12):[];const h=[...new Set(t.map(F=>F.topic))].filter(Boolean),u=[...new Set(t.map(F=>F.type))].filter(Boolean),d=[...new Set(t.map(F=>F.country))].filter(F=>F&&F!=="TTL"),m=p.filter(F=>d.includes(F)).concat(p.filter(F=>!d.includes(F))),k=JSON.stringify(t).replace(/</g,"\\u003c"),b=JSON.stringify(y),v=JSON.stringify(h),w=JSON.stringify(u),x=JSON.stringify(m),M=72;function j(F){const I={};return F&&String(F).split(`
`).forEach(A=>{const z=A.indexOf("=");if(z>0){const K=A.slice(0,z).trim(),X=A.slice(z+1).trim();K&&(I[K]=X)}}),I}const D=j(r==null?void 0:r.prTopicPromptsRaw),W=(a==null?void 0:a.prTopicList)||[],L={},_={};W.forEach(F=>{[F.topic,F.topicRow,F.oldTopic].filter(Boolean).map(A=>A.trim()).forEach(A=>{F.explanation&&!L[A]&&(L[A]=F.explanation),F.bu&&!_[A]&&(_[A]=F.bu)})});const G={...{TV:"OLED·QNED 등 TV 제품 라인업 관련","TV Platform":"webOS 등 스마트 TV 플랫폼·솔루션 관련",Audio:"오디오 제품군 전반",PC:"그램(gram) 노트북·모니터 등 IT 제품 관련",IT:"모니터·그램(gram) 노트북 등 IT 제품 관련"},...L,...j(r==null?void 0:r.prTopicDescsRaw)},H={};return h.forEach(F=>{const I=_[F];if(I)H[F]=I;else{const A=["Audio","Kitchen","Living","TV","TV Platform","IT","PC"];H[F]=A.some(z=>F.toLowerCase().includes(z.toLowerCase()))?"MS/HS":"CORP/ES/VS"}}),`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Xt}">
    <!-- 필터 바 -->
    <div id="${s}-filters" style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:16px;padding:10px 16px;background:#fff;border:1px solid #E8EDF2;border-radius:10px">
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Type":"유형"}</span>
        <div id="${s}-type-chips"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"Country":"국가"}</span>
        <div id="${s}-cnty-chips" style="display:flex;gap:4px;flex-wrap:wrap"></div>
      </div>
      <div style="width:1px;height:24px;background:#E8EDF2"></div>
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:18px;font-weight:700;color:#64748B">${o==="en"?"View":"보기"}</span>
        <div id="${s}-view-chips" style="display:flex;gap:4px"></div>
      </div>
    </div>
    <!-- NOTICE -->
    <div style="margin:0 0 24px;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
      <span style="display:block;font-size:14px;font-weight:700;color:${ne};text-transform:uppercase;margin-bottom:6px">NOTICE</span>
      <span style="font-size:15px;color:#fff;line-height:1.8">${(r==null?void 0:r.prNotice)||(o==="en"?'PR Visibility tracks how well "LG Electronics" is featured in AI search engine responses to queries related to our key business areas, product lines, and service topics. It monitors the visibility of our information versus competitors by major topic. For "Brand" type queries, items with Visibility below 100% indicate the need for GEO strategy review.':"PR Visibility 는 AI 검색 엔진 내 자사 주요 사업/제품군/서비스 토픽 관련 질의에 대한 답변에서 'LG전자'가 얼마나 잘 노출되는지를 추적합니다. 주요 토픽 별로 경쟁사 대비 자사 정보의 가시성을 모니터링 하며, '브랜드' 유형의 경우, Visibility 100% 미만 항목은 GEO 전략 검토가 필요함을 의미합니다.")}</span>
    </div>
    <!-- 상단 요약 매트릭스 -->
    <div class="section-card" style="margin-bottom:24px">
      <div class="section-header">
        <div class="section-title">${o==="en"?"PR Visibility Overview":"PR Visibility 현황"} <span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${e!=null&&e.length?e[e.length-1].toUpperCase():""} ${o==="en"?"data":"기준"}</span></div>
        <span class="legend"><i style="background:#15803D"></i>${o==="en"?"Lead ≥100%":"선도 ≥100%"} <i style="background:#D97706"></i>${o==="en"?"Behind ≥80%":"추격 ≥80%"} <i style="background:#BE123C"></i>${o==="en"?"Critical <80%":"취약 <80%"} <span style="color:#94A3B8;font-size:11px;margin-left:6px">${o==="en"?"() = vs #1 competitor":"() 는 1위 경쟁사 대비"}</span></span>
      </div>
      <div class="section-body" id="${s}-matrix"></div>
    </div>
    <!-- 토픽별 트렌드 -->
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${c?o==="en"?"Monthly Competitor Trend by Topic":"토픽별 월간 경쟁사 트렌드":o==="en"?"Weekly Competitor Trend by Topic":"토픽별 주간 경쟁사 트렌드"}</div>
        <span class="legend">${c?y.length?`${y[0]}–${y[y.length-1]} (${y.length}${o==="en"?" months":"개월"})`:"":y.length?`${y[0].toUpperCase()}–${y[y.length-1].toUpperCase()} (${y.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div class="section-body" id="${s}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${k},W=${b},TP=${v},TY=${w},CN=${x};
    var CW=${M};
    var TOPIC_CAT=${JSON.stringify(H)};
    var TOPIC_PROMPT=${JSON.stringify(D).replace(/</g,"\\u003c")};
    var TOPIC_DESC=${JSON.stringify(G).replace(/</g,"\\u003c")};
    var _prTopicList=${JSON.stringify(W).replace(/</g,"\\u003c")};
    var _CF=${JSON.stringify(_e)};
    function cf(c){return _CF[c]||_CF[c&&c.toUpperCase()]||c}
    var fType=TY[0]||'non-brand';
    var fCnty={};CN.forEach(function(c){fCnty[c]=true});
    var fView='together';
    var RED='${ne}',COMP='${ue}';
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
      var te=document.getElementById('${s}-type-chips');if(te)te.innerHTML=TY.map(function(t){return chip(t,fType===t,"_${s}SetType('"+t+"')")}).join(' ');
      var ce=document.getElementById('${s}-cnty-chips');if(!ce)return;
      var allOn=CN.every(function(c){return fCnty[c]});
      ce.innerHTML=chip('${o==="en"?"All":"전체"}',allOn,'_${s}CntyAll()')+' '+CN.map(function(c){return chip(cf(c),!!fCnty[c],"_${s}CntyTog('"+c+"')")}).join(' ');
      var ve=document.getElementById('${s}-view-chips');if(ve)ve.innerHTML=chip('${o==="en"?"By Country":"국가별 함께"}',fView==='together',"_${s}SetView('together')")+' '+chip('${o==="en"?"Total":"국가 Total"}',fView==='total',"_${s}SetView('total')");
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
      var el=document.getElementById('${s}-matrix');if(!el)return;
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
      var el=document.getElementById('${s}-sections');if(!el)return;
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
    window._${s}SetType=function(t){fType=t;renderAll()};
    window._${s}CntyTog=function(c){fCnty[c]=!fCnty[c];renderAll()};
    window._${s}CntyAll=function(){var on=CN.every(function(c){return fCnty[c]});CN.forEach(function(c){fCnty[c]=!on});renderAll()};
    window._${s}SetView=function(v){fView=v;renderAll()};
    renderAll();
  })();
  <\/script>`}function Zo(t,e,o,r,a,i){const c=(t||[]).filter(b=>!0);if(!c.length)return`<div style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 160px);color:#94A3B8;font-size:16px">${o==="en"?"No data available.":"데이터가 없습니다."}</div>`;const s=e&&e.length?e.slice(-12):[],y=[...new Set(c.map(b=>b.stakeholder))].filter(Boolean).map(b=>({stakeholder:b,topics:[...new Set(c.filter(v=>v.stakeholder===b).map(v=>v.topic))].filter(Boolean)})),h=72,u=JSON.stringify(c).replace(/</g,"\\u003c"),d=JSON.stringify(s),m=JSON.stringify(y),k="bp";return`<div style="max-width:1400px;margin:0 auto;padding:28px 40px;font-family:${Xt}">
    <div class="section-card">
      <div class="section-header">
        <div class="section-title">${a||(o==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검")}</div>
        <span class="legend">${s.length?`${s[0].toUpperCase()}–${s[s.length-1].toUpperCase()} (${s.length}${o==="en"?" weeks":"주"})`:""}</span>
      </div>
      <div style="margin:16px 28px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:10px">
        <span style="display:block;font-size:14px;font-weight:700;color:${ne};text-transform:uppercase;margin-bottom:6px">Dashboard Guide</span>
        <span style="font-size:15px;color:#fff;line-height:1.8">${(i==null?void 0:i.bpNotice)||(o==="en"?"Brand Prompts should always return 100% visibility. If a prompt falls below 100%, it indicates a potential issue — check for negative sentiment, incorrect brand association, or competitor hijacking in the AI response.":"Brand Prompt는 자사 브랜드명을 직접 포함한 질의이므로 Visibility가 항상 100%여야 정상입니다. 100% 미만인 경우 AI 응답에서 부정적 sentiment, 브랜드 오인식, 경쟁사 대체 추천 등의 이슈가 발생했을 수 있으므로 해당 프롬프트의 응답 내용을 확인해야 합니다.")}</span>
      </div>
      <div class="section-body" id="${k}-sections"></div>
    </div>
  </div>
  <script>
  (function(){
    var D=${u},W=${d},GROUPS=${m};
    var CW=${h},RED='${ne}';
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
  <\/script>`}function Ci(t,e,o,r,a,i,c,s,p,y,h,u,d,m){var bt,ht,pt;d!=null&&d.llmModel&&d.llmModel!=="Total"&&(o=cn(o,d.llmModel),c=dn(c,d.llmModel),e=pn(e,d.monthlyVis,d.llmModel),d.monthlyVis&&(d={...d,monthlyVis:Jn(d.monthlyVis,d.llmModel)})),o=(o||[]).map(N=>({...N,weekly:(N.weekly||[]).map(et=>et??0),monthly:(N.monthly||[]).map(et=>et??0)})),y&&typeof y=="object"&&Object.values(y).forEach(N=>{!N||typeof N!="object"||Object.values(N).forEach(et=>{!et||typeof et!="object"||Object.keys(et).forEach(xt=>{const Tt=et[xt];Array.isArray(Tt)&&(et[xt]=Tt.map(rt=>rt??0))})})});const k={aircare:"Xiaomi"};o=o.map(N=>{const et=k[(N.id||"").toLowerCase()];if(!et||!N.allScores)return N;const xt=Object.entries(N.allScores).find(([q])=>q.toLowerCase()===et.toLowerCase()&&q.toLowerCase()!=="lg");if(!xt)return N;const Tt=xt[1];if(!(Tt>0))return N;const rt=Math.round(N.score/Tt*100);return{...N,compName:xt[0],vsComp:Tt,compRatio:rt,status:rt>=100?"lead":rt>=80?"behind":"critical"}});const b=(d==null?void 0:d.visibilityOnly)||!1,v=(d==null?void 0:d.includeReadability)===!0,w=(m==null?void 0:m.unlaunchedMap)||{},M=`<iframe id="tracker-iframe" src="${`/p/progress-tracker-v2/?lang=${i}`}" style="width:100%;min-height:calc(100vh - 60px);border:none;background:#0A0F1E" title="Progress Tracker"></iframe>`,j=Ne[i]||Ne.ko;let D;if(p&&p.length)D=p.map(N=>String(N).toUpperCase().startsWith("W")?N.toUpperCase():N);else{const N=y?Math.max(...Object.values(y).flatMap(xt=>Object.values(xt).flatMap(Tt=>Object.values(Tt).map(rt=>(rt==null?void 0:rt.length)||0))),0):0,et=t.weekStart||Math.max(1,N-11);D=Array.from({length:Math.max(12,N)},(xt,Tt)=>`W${et+Tt}`)}const W=new Set;y&&Object.values(y).forEach(N=>Object.keys(N).forEach(et=>{et!=="Total"&&W.add(et)})),c&&c.forEach(N=>{N.country&&N.country!=="TTL"&&W.add(N.country)});const L=[...W].sort(),_=i==="en"?"All":"전체",V=["MS","HS","ES"],G=o.map(N=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="product" data-bu="${N.bu}" value="${N.id}" checked onchange="onFilterChange()"><span>${N.kr}</span></label>`).join(""),H=V.map(N=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="bu" value="${N}" checked onchange="onBuChange('${N}')"><span>${N}</span></label>`).join(""),F=L.map(N=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="country" value="${N}" checked onchange="onFilterChange()"><span>${io(N)}</span></label>`).join(""),I=Object.entries(ro).map(([N,et])=>`<label class="fl-chk-label"><input type="checkbox" class="fl-chk" data-filter="region" value="${N}" checked onchange="onRegionChange('${N}')"><span>${et.labelEn}</span></label>`).join(""),A=`<div class="fl-group"><div style="display:flex;gap:2px;background:#F1F5F9;border-radius:6px;padding:2px"><button class="lang-btn${i==="ko"?" active":""}" onclick="switchLang('ko')">KO</button><button class="lang-btn${i==="en"?" active":""}" onclick="switchLang('en')">EN</button></div></div><div class="fl-divider"></div>`,z=d!=null&&d.weeklyLabelsFull&&d.weeklyLabelsFull.length===D.length?d.weeklyLabelsFull:D,K=D.map((N,et)=>`<option value="${et}"${et===D.length-1?" selected":""}>${z[et]||N}</option>`).join(""),X=(((bt=o[0])==null?void 0:bt.monthlyScores)||[]).map(N=>{const et=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],xt=String(N.date).match(/(\d{1,2})월/),Tt=String(N.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return xt?et[parseInt(xt[1])-1]:Tt?Tt[1].charAt(0).toUpperCase()+Tt[1].slice(1).toLowerCase():N.date}),Z=X.map((N,et)=>`<option value="${et}"${et===X.length-1?" selected":""}>${N}</option>`).join(""),f=`padding:3px 8px;border-radius:6px;border:1px solid #CBD5E1;font-size:13px;background:#fff;cursor:pointer;font-family:${Xt}`,Q=new Set(["Total"]);(o||[]).forEach(N=>(N.monthlyScores||[]).forEach(et=>Object.keys(et.byLlm||{}).forEach(xt=>Q.add(xt)))),(c||[]).forEach(N=>(N.monthlyScores||[]).forEach(et=>Object.keys(et.byLlm||{}).forEach(xt=>Q.add(xt)))),((d==null?void 0:d.monthlyVis)||[]).forEach(N=>{N.llmModel&&Q.add(N.llmModel)});const U=["Total",...Array.from(Q).filter(N=>N!=="Total").sort((N,et)=>N.localeCompare(et))],gt=(d==null?void 0:d.llmModel)||"Total",T=U.map(N=>`<option value="${N}"${N===gt?" selected":""}>${N}</option>`).join(""),C=`<div class="filter-layer" id="filter-layer">
    <div class="fl-row">
      ${A}
      <div class="fl-group">
        <span class="fl-label">${i==="en"?"Period":"기간"}</span>
        <span class="fl-badge" id="period-badge" style="display:none">${t.period||"—"}</span>
        <span class="fl-badge" id="period-weekly-badge" style="background:#EFF6FF;color:#1D4ED8;border:1px solid #93C5FD">${D[D.length-1]} ${i==="en"?"data":"기준"}</span>
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${i==="en"?"View":"조회"}</span>
        <div class="trend-tabs" id="period-toggle">
          <button class="trend-tab active" onclick="switchPeriodPage('weekly')">${i==="en"?"Weekly":"주간"}</button>
          <button class="trend-tab" onclick="switchPeriodPage('monthly')">${i==="en"?"Monthly":"월간"}</button>
        </div>
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group" id="vis-week-select-group"${D.length>1?"":' style="display:none"'}>
        <span class="fl-label">${i==="en"?"Week":"주차"}</span>
        <select id="vis-week-select" onchange="switchVisWeek(parseInt(this.value))" style="${f}">${K}</select>
      </div>
      <div class="fl-group" id="vis-month-select-group" style="display:none">
        <span class="fl-label">${i==="en"?"Month":"월"}</span>
        <select id="vis-month-select" onchange="switchVisMonth(parseInt(this.value))" style="${f}"${X.length>0?"":" disabled"}>${Z||"<option>—</option>"}</select>
      </div>
      <div class="fl-group" id="vis-llm-select-group" style="display:none">
        <span class="fl-label">LLM Model</span>
        <select id="vis-llm-select" onchange="switchLlmModel(this.value)" style="${f};opacity:0.55;cursor:not-allowed" disabled>${T}</select>
      </div>
    </div>
    <div class="fl-row">
      <div class="fl-group">
        <span class="fl-label">${i==="en"?"Division":"본부"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="bu" checked onchange="toggleAll(this,'bu')"><span>${_}</span></label>
        ${H}
      </div>
      <div class="fl-divider"></div>
      <div class="fl-group">
        <span class="fl-label">${i==="en"?"Product":"제품"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="product" checked onchange="toggleAll(this,'product')"><span>${_}</span></label>
        ${G}
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
        <span class="fl-label">${i==="en"?"Country":"국가"}</span>
        <label class="fl-chk-label fl-all-label"><input type="checkbox" class="fl-chk-all" data-target="country" checked onchange="toggleAll(this,'country')"><span>${_}</span></label>
        ${F}
      </div>
    </div>
  </div>`,S=t.showNotice&&t.noticeText?`<div class="notice-box"><div class="notice-title">${i==="en"?"NOTICE":"공지사항"}</div><div class="notice-text">${di(t.noticeText)}</div></div>`:"",O=[S,t.showTotal!==!1?Wo(e,t,j,i,"weekly"):""].join(""),P=[S,t.showTotal!==!1?Wo(e,t,j,i,"monthly"):""].join(""),$=[];if(y&&Object.keys(y).length){const N=oo;Object.entries(y).forEach(([et,xt])=>{const Tt=o.find(q=>q.id===et),rt=(Tt==null?void 0:Tt.kr)||N[et]||et;Object.entries(xt).forEach(([q,dt])=>{if(q==="Total"||q==="TTL"||q==="TOTAL")return;const $t=dt.LG||dt.lg||[],Pt=$t.length>0?$t[$t.length-1]:0;if(Pt<=0)return;let Dt="",Wt=0;Object.entries(dt).forEach(([Vt,Kt])=>{if(Vt==="LG"||Vt==="lg")return;const qt=Array.isArray(Kt)&&Kt.length?Kt[Kt.length-1]:0;qt>Wt&&(Wt=qt,Dt=Vt)});const zt=+(Pt-Wt).toFixed(1),Zt={};Object.entries(dt).forEach(([Vt,Kt])=>{if(Array.isArray(Kt)&&Kt.length){const qt=Kt[Kt.length-1];qt!=null&&(Zt[Vt]=qt)}}),$.push({product:rt,country:q,score:Pt,compName:Dt,compScore:Wt,gap:zt,allScores:Zt})})})}const mt=((ht=d==null?void 0:d.weeklyLabelsFull)==null?void 0:ht[d.weeklyLabelsFull.length-1])||D[D.length-1]||"",St=mt?`<span style="font-size:12px;font-weight:600;color:#3B82F6;background:#EFF6FF;padding:2px 8px;border-radius:6px;border:1px solid #93C5FD">${mt} ${i==="en"?"data":"기준"}</span>`:"",ut=[O,t.showProducts!==!1?Ko(o,t,j,i,D,w,(d==null?void 0:d.monthlyVis)||[],y,St):"",`<div id="trend-container">${xi(o,y,D,j,i,w,St)}</div>`,t.showCnty!==!1?Jo($,t,j,i,w,St):""].join(""),Ct=o.map(N=>{const et=N.monthlyScore||N.score,xt=N.monthlyPrev||N.prev,Tt=N.vsComp||0,rt=Tt>0?et/Tt*100:100;return{...N,score:et,prev:xt,weeklyScore:et,weeklyPrev:xt,monthlyScore:et,monthlyPrev:xt,weekly:(N.monthlyScores||[]).map(q=>q.score),status:rt>=100?"lead":rt>=80?"behind":"critical"}}),wt=(((pt=o[0])==null?void 0:pt.monthlyScores)||[]).map(N=>{const et=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],xt=String(N.date).match(/(\d{1,2})월/),Tt=String(N.date).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);return xt?et[parseInt(xt[1])-1]:Tt?Tt[1].charAt(0).toUpperCase()+Tt[1].slice(1).toLowerCase():N.date}),Ft=(d==null?void 0:d.monthlyVis)||[],R=t.period?`<span style="font-size:12px;font-weight:600;color:#7C3AED;background:#F5F3FF;padding:2px 8px;border-radius:6px;border:1px solid #C4B5FD">${t.period}</span>`:"",Y=[P,t.showProducts!==!1?Ko(Ct,t,j,i,wt.length?wt:["Feb","Mar"],w,Ft,{},R):"",`<div id="monthly-trend-container">${vi(Ct,Ft,j,i,w,R)}</div>`,t.showCnty!==!1?Jo(c,t,j,i,w,R):""].join(""),lt=`border:none;border-radius:6px;padding:6px 18px;font-size:14px;font-weight:700;cursor:pointer;font-family:${Xt}`,at=`
    <div style="max-width:1400px;margin:0 auto;padding:16px 40px 0">
      <div style="display:inline-flex;gap:2px;background:#1E293B;border-radius:8px;padding:3px">
        <button id="pr-period-w-btn" onclick="switchPRPeriod('weekly')" style="${lt};background:#fff;color:#0F172A">${i==="en"?"Weekly":"주간"}</button>
        <button id="pr-period-m-btn" onclick="switchPRPeriod('monthly')" style="${lt};background:transparent;color:#94A3B8">${i==="en"?"Monthly":"월간"}</button>
      </div>
    </div>
    <div id="pr-period-weekly">${Xo(m==null?void 0:m.weeklyPR,m==null?void 0:m.weeklyPRLabels,i,t,m)}</div>
    <div id="pr-period-monthly" style="display:none">${Xo(m==null?void 0:m.monthlyPR,m==null?void 0:m.monthlyPRLabels,i,t,m,"monthly")}</div>`;return`<!DOCTYPE html>
<html lang="${i==="en"?"en":"ko"}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.title||"GEO KPI Dashboard"} — ${t.period||""}</title>
<link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet"/>
<style>@font-face{font-family:'LGEIText';font-weight:100 300;font-style:normal;src:url('/font/LGEIText%20Light.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:400 500;font-style:normal;src:url('/font/LGEIText%20Regular.otf') format('opentype'),url('/font/LGEIText%20Regular.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:600;font-style:normal;src:url('/font/LGEIText%20SemiBold.ttf') format('truetype');font-display:swap}@font-face{font-family:'LGEIText';font-weight:700 900;font-style:normal;src:url('/font/LGEIText%20Bold.ttf') format('truetype');font-display:swap}${ai({FONT:Xt,RED:ne,COMP:ue})}</style>
</head>
<body>
${b?`
<div id="gnb-visibility" class="gnb-sub active" style="position:sticky;top:0;z-index:99">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${i==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${i==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="vis-sub-bu" class="vis-sub-panel">
  ${C.replace("top:86px","top:37px")}
  <div id="bu-weekly-content" class="dash-container">${ut}</div>
  <div id="bu-monthly-content" class="dash-container" style="display:none">${Y}</div>
</div>
<div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
  ${at}
</div>
<div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
  ${Zo(m==null?void 0:m.weeklyBrandPrompt,m==null?void 0:m.weeklyBrandPromptLabels,i,null,i==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
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
    <button class="lang-btn${i==="ko"?" active":""}" onclick="switchLang('ko')">KO</button>
    <button class="lang-btn${i==="en"?" active":""}" onclick="switchLang('en')">EN</button>
  </div>
</div>
<div id="gnb-visibility" class="gnb-sub active">
  <button class="gnb-sub-btn active" onclick="switchVisSub('bu')">${i==="en"?"Business Division":"사업본부"}</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('pr')">PR</button>
  <button class="gnb-sub-btn" onclick="switchVisSub('brandprompt')">${i==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검"}</button>
</div>
<div id="gnb-citation" class="gnb-sub">
  <button class="gnb-sub-btn active" onclick="switchCitSub('touchpoint')">${i==="en"?"Touch Points":"외부접점채널"}</button>
  <button class="gnb-sub-btn" onclick="switchCitSub('dotcom')">${i==="en"?"Dotcom":"닷컴"}</button>
  <button class="gnb-sub-btn" onclick="switchCitSub('llm-compare')">${i==="en"?"LLM Compare":"LLM 모델별 비교"}</button>
</div>
<div id="tab-visibility" class="tab-panel active">
  <div id="vis-sub-bu" class="vis-sub-panel active">
    ${C}
    <div id="bu-weekly-content" class="dash-container">${ut}</div>
    <div id="bu-monthly-content" class="dash-container" style="display:none">${Y}</div>
  </div>
  <div id="vis-sub-pr" class="vis-sub-panel" style="display:none">
    ${at}
  </div>
  <div id="vis-sub-brandprompt" class="vis-sub-panel" style="display:none">
    ${Zo(m==null?void 0:m.weeklyBrandPrompt,m==null?void 0:m.weeklyBrandPromptLabels,i,null,i==="en"?"Brand Prompt Anomaly Check":"Brand Prompt 이상 점검",t)}
  </div>
</div>
<div id="tab-citation" class="tab-panel">
  <div id="cit-sub-touchpoint">
    <iframe id="cit-iframe-tp" src="/p/${i==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=touchpoint" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Touch Points"></iframe>
  </div>
  <div id="cit-sub-dotcom" style="display:none">
    <iframe id="cit-iframe-dc" data-src="/p/${i==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=dotcom" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - Dotcom"></iframe>
  </div>
  <div id="cit-sub-llm-compare" style="display:none">
    <iframe id="cit-iframe-llm" data-src="/p/${i==="en"?"GEO-Citation-Dashboard-EN":"GEO-Citation-Dashboard-KO"}?tab=llm-compare" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Citation - LLM Compare"></iframe>
  </div>
</div>
${v?`<div id="tab-readability" class="tab-panel">
  <!--READABILITY_EMBED-->
  <iframe id="readability-iframe" data-src="/p/GEO-KPI-Dashboard-${i==="en"?"EN":"KO"}-readability" style="width:100%;min-height:calc(100vh - 100px);border:none;background:#F1F5F9" title="Readability"></iframe>
</div>`:""}
<div id="tab-progress" class="tab-panel">
  ${M}
</div>
<div id="tab-glossary" class="tab-panel">
  ${wi(i)}
</div>
`}
<div class="dash-footer">
  <span><strong>LG Electronics</strong> ${j.footer}</span>
  <span>© 2026 LG Electronics Inc. All Rights Reserved.</span>
</div>
<script>
${fi({lang:i,weeklyAll:y,products:o,productsCnty:c,ulMap:w,monthlyVis:d==null?void 0:d.monthlyVis,total:e,meta:t,wLabels:D})}
<\/script>
</body>
</html>`}function ki(t){const e=t.filter(p=>p.status==="lead"),o=t.filter(p=>p.status==="behind"),r=t.filter(p=>p.status==="critical"),a=[...t].sort((p,y)=>y.score-p.score)[0],i=[...t].sort((p,y)=>p.score-y.score)[0],c=(t.reduce((p,y)=>p+y.score,0)/t.length).toFixed(1),s=[];return s.push(`전체 ${t.length}개 카테고리 평균 가시성은 ${c}%이며, 선도 ${e.length}개·추격 ${o.length}개·취약 ${r.length}개로 분류됩니다.`),a&&s.push(`가장 높은 카테고리는 ${a.kr} ${a.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${i.kr} ${i.score.toFixed(1)}%로 상·하위 간 ${(a.score-i.score).toFixed(1)}%p의 편차가 존재합니다.`),r.length?s.push(`취약 카테고리(${r.map(p=>p.kr).join("·")})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`):o.length&&s.push(`추격 카테고리(${o.map(p=>p.kr).join("·")})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`),s.join(" ")}function Si(){return"GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다."}function Fi(){return"국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다."}const kn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Xe={year:2026,month:2,vol:3};function Sn(t){const e=String(t||"").trim();if(!e)return null;let o=null,r=null;const a=e.match(/(\d{4})/);if(a)o=parseInt(a[1]);else{const c=e.match(/(\d{2})년/);c&&(o=2e3+parseInt(c[1]))}const i=e.match(/(\d{1,2})\s*월/);if(i)r=parseInt(i[1]);else{const c=e.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(c)r=kn.findIndex(s=>s.toLowerCase()===c[1].toLowerCase())+1;else{const s=e.match(/\d{4}[-/](\d{1,2})/);s&&(r=parseInt(s[1]))}}return!o||!r||r<1||r>12?null:{year:o,month:r}}function ao(t){const e=Sn(t);if(!e)return null;const o=(e.year-Xe.year)*12+(e.month-Xe.month),r=Xe.vol+o;return r<1?null:`Vol.${String(r).padStart(2,"0")}`}function Ti(t){const e=Sn(t);return e?e.month===1?{year:e.year-1,month:12}:{year:e.year,month:e.month-1}:null}function Fn(t,e="en"){const o=Ti(t);return o?e==="ko"?`${o.year}년 ${o.month}월 기준`:`As of ${kn[o.month-1]} ${o.year}`:null}function Qo(t){const e={},o=ao(t);o&&(e.reportNo=o);const r=Fn(t,"en");return r&&(e.dateLine=r),e}const Ve=["title","dateLine","noticeText","totalInsight","reportType","productInsight","productHowToRead","citationInsight","citationHowToRead","dotcomInsight","dotcomHowToRead","todoText","todoNotice","kpiLogicText","cntyInsight","cntyHowToRead","citDomainInsight","citDomainHowToRead","citCntyInsight","citCntyHowToRead","citPrdInsight","citPrdHowToRead","period","team","reportNo","monthlyReportBody","highlightInsight","bumpInsight","hlChapterTitle","hlWeeklyTitle","hlModelTitle","hlBumpTitle","semiHighlightText"],Ei=["v2ExIntro2","v2Ex1T2","v2Ex1B2","v2Ex2T2","v2Ex2B2","v2Ex3T2","v2Ex3B2","v2T11Caption","v2CaseCaption","v2C1Title","v2C1Keep","v2C1Bko","v2C1Tko","v2C2Title4","v2C2Keep2","v2C2Bko4","v2C2Tko4","v2VisTblHtml8","todoV2Title","todoV2NoticeLabel","todoV2NoticeHtml","todoV2PerfTitle","todoV2ChBu","todoV2NewBu","todoV2FixBu","todoV2TechBu","todoV2NextSecTitle","todoV2NextTitle","todoV2NextHtml3"];Ve.push(...Ei);const Ai=["rd_h1","rd_intro","rd_introNotes","rd_summary","rd_areaIntro","rd_h2","rd_d1Title","rd_d1","rd_d1Notes","rd_d2Title","rd_d2","rd_d3Title","rd_d3","rd_d4Title","rd_d4"];Ve.push(...Ai);const Li=["v3Ex1T","v3Ex1B","v3Ex2T","v3Ex2B","v3ExIntro","v3Ex1T2","v3Ex1B2","v3Ex2T2","v3Ex2B2","v3Ex3T2","v3Ex3B2"];Ve.push(...Li);function $i(t,e){return t.startsWith("rd_")&&(typeof e=="string"||e==null)}function Ze(t,e){const o={...t};return Ve.forEach(r=>{o[r]=e==null?void 0:e[r]}),new Set([...Object.keys(t||{}),...Object.keys(e||{})]).forEach(r=>{$i(r,t==null?void 0:t[r])&&(o[r]=e==null?void 0:e[r])}),o}function Qe({label:t,value:e,options:o,onSelect:r,accent:a=It}){return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:8},children:[n.jsx("span",{style:{width:66,flexShrink:0,fontSize:11,color:"#64748B",fontFamily:E},children:t}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:o.map(i=>{const c=e===i.value;return n.jsx("button",{onClick:()=>r(i.value),title:i.hint||"",style:{padding:"3px 9px",borderRadius:4,border:"none",cursor:"pointer",background:c?i.accent||a:"#1E293B",color:c?"#FFFFFF":"#64748B",fontSize:10,fontWeight:700,fontFamily:E},children:i.label},i.value)})})]})}function Bi({label:t,items:e,meta:o,setMeta:r}){return n.jsxs("div",{style:{marginBottom:12},children:[n.jsx("p",{style:{margin:"0 0 6px 2px",fontSize:10,fontWeight:700,color:"#64748B",letterSpacing:.5,fontFamily:E},children:t}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:e.map(({key:a,label:i})=>n.jsx("button",{onClick:()=>r(c=>({...c,[a]:!c[a]})),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:o[a]?It:"#1E293B",color:o[a]?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:i},a))})]})}const tn=[{value:"",label:"표시 안 함",keys:[]},{value:"2026-06",label:"6월 하이라이트 인사이트",keys:["showInsightV2"]},{value:"2026-07",label:"7월 하이라이트",keys:["showHighlight","showReadability"]}],en=[{value:"",label:"표시 안 함",keys:[]},{value:"2026-08",label:"8월 Executive Summary",keys:["showInsightV3","showTotal","showTotalInsight"]}],Ii=["showInsightV3","showTotal","showTotalInsight"];function on(t,e){const o=t.find(r=>r.keys.length&&r.keys.every(a=>e[a]));return o?o.value:""}function nn({label:t,value:e,variants:o,allKeys:r,setMeta:a}){const i=r||[...new Set(o.flatMap(c=>c.keys))];return n.jsxs("div",{style:{marginBottom:12},children:[n.jsx("p",{style:{margin:"0 0 6px 2px",fontSize:10,fontWeight:700,color:"#64748B",letterSpacing:.5,fontFamily:E},children:t}),n.jsx("select",{value:e,onChange:c=>{const s=o.find(p=>p.value===c.target.value);a(p=>{const y={...p};return i.forEach(h=>{y[h]=!1}),((s==null?void 0:s.keys)||[]).forEach(h=>{y[h]=!0}),y})},style:{width:"100%",padding:"6px 8px",borderRadius:6,cursor:"pointer",background:"#1E293B",color:"#E2E8F0",border:"1px solid #334155",fontSize:11,fontWeight:700,fontFamily:E},children:o.map(c=>n.jsx("option",{value:c.value,children:c.label},c.value))})]})}const Ri=[{label:"비저빌리티",items:[{key:"showProducts",label:"제품별"},{key:"showCnty",label:"국가별"}]},{label:"사이테이션",items:[{key:"showCitations",label:"Citation"},{key:"showCitCnty",label:"Citation 국가별"},{key:"showCitPrd",label:"Citation 제품별"},{key:"showTouchPointsBump",label:"외부채널 범프차트"},{key:"showTouchPointsBumpChatGpt",label:"외부채널 모델별(3개)"},{key:"showDomainBumpModels",label:"도메인 모델별(3개)"},{key:"showLlmShare",label:"모델별 인용비중"}]},{label:"닷컴",items:[{key:"showDotcom",label:"닷컴"},{key:"showDotcomChatGpt",label:"닷컴 Chat-GPT"}]},{label:"Action Plan",items:[{key:"showTodo",label:"Action Plan"},{key:"showTodoV2",label:"액션 아이템 V2"}]}];function rn({children:t}){return n.jsx("p",{style:{margin:"14px 0 8px 2px",fontSize:10,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:t})}function ji(t,e){const o=/<body[^>]*>([\s\S]*)<\/body>/i,r=(e.match(o)||[])[1];if(!r)return console.warn("[mergeBilingualEmail] EN <body> 추출 실패 — KO 단독 발송"),t;const a=`
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0;background:#F1F5F9;">
    <tr><td align="center" style="padding:28px 16px;">
      <div style="border-top:2px dashed #CBD5E1;max-width:600px;margin:0 auto;padding-top:18px;font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif;font-size:12px;font-weight:700;color:#64748B;letter-spacing:2px;">&#9660;&nbsp;&nbsp;ENGLISH VERSION&nbsp;&nbsp;&#9660;</div>
    </td></tr>
  </table>`;return/<\/body>/i.test(t)?t.replace(/<\/body>/i,`${a}${r}</body>`):(console.warn("[mergeBilingualEmail] KO </body> 미발견 — 단순 연결"),t+a+r)}function Mi({mode:t,meta:e,setMeta:o,metaKo:r,setMetaKo:a,metaEn:i,setMetaEn:c,total:s,setTotal:p,products:y,setProducts:h,citations:u,setCitations:d,dotcom:m,setDotcom:k,productsCnty:b,setProductsCnty:v,citationsCnty:w,setCitationsCnty:x,resolved:M,previewLang:j,setPreviewLang:D,snapshots:W,setSnapshots:L,setWeeklyLabels:_,setWeeklyAll:V,weeklyLabels:G,weeklyAll:H,citationsByCnty:F,dotcomByCnty:I,generateHTML:A,publishEndpoint:z,setMonthlyVis:K,onSyncExtra:X,categoryStats:Z,extra:f,monthlyVis:Q,progressMonth:U,setProgressMonth:gt,progressDataMonth:T,editMode:C=!1,setEditMode:S,hidePublish:O=!1}){const P=ct.useRef({products:y,productsCnty:b,citations:u,citationsCnty:w,total:s,dotcom:m,extra:f});P.current={products:y,productsCnty:b,citations:u,citationsCnty:w,total:s,dotcom:m,extra:f};function $(){return P.current}const[mt,St]=ct.useState("https://docs.google.com/spreadsheets/d/1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y/edit"),[ut,Ct]=ct.useState(!1),[wt,Ft]=ct.useState(null),[R,Y]=ct.useState(""),[lt,at]=ct.useState(""),[bt,ht]=ct.useState(!1),[pt,N]=ct.useState(""),[et,xt]=ct.useState(!1),[Tt,rt]=ct.useState(!1),[q,dt]=ct.useState(!1),[$t,Pt]=ct.useState(!1),[Dt,Wt]=ct.useState(""),[zt,Zt]=ct.useState(!1),[Vt,Kt]=ct.useState(!0),[qt,fe]=ct.useState(""),[se,ke]=ct.useState(null),[de,xe]=ct.useState([]),jt=t==="newsletter",[ve,Tn]=ct.useState(()=>{const l=new Date;return`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}`});function We(){jt&&fetch("/api/publish").then(l=>l.ok?l.json():null).then(l=>{l&&Array.isArray(l.months)&&xe(l.months)}).catch(()=>{})}ct.useEffect(()=>{if(jt){We();return}fetch(z||(t==="dashboard"?"/api/publish-dashboard":"/api/publish")).then(g=>g.ok?g.json():null).then(ke).catch(()=>{})},[t,z,jt]);const En=(()=>{const l=new Set,g=new Date;for(let J=0;J<24;J++){const Lt=new Date(g.getFullYear(),g.getMonth()-J,1);l.add(`${Lt.getFullYear()}-${String(Lt.getMonth()+1).padStart(2,"0")}`)}for(const J of de)l.add(J.month);return ve&&l.add(ve),[...l].sort((J,Lt)=>Lt.localeCompare(J))})();function $e(l){const[g,J]=l.split("-");return`${g}년 ${parseInt(J,10)}월`}const[An,yo]=ct.useState(null);ct.useEffect(()=>{let l=!0;const g=()=>Bo(t).then(Lt=>{l&&yo(Lt)});g();const J=setInterval(g,6e4);return()=>{l=!1,clearInterval(J)}},[t]);function Ln(){Bo(t).then(yo)}async function $n(){if(!$t){Pt(!0),Wt("");try{const l=$(),g=we(l.products,l.productsCnty,l.citations,l.citationsCnty,"ko"),J=we(l.products,l.productsCnty,l.citations,l.citationsCnty,"en");let Lt,Jt,nt;if(t==="dashboard"){const it=Q||[],ft=l.extra||f||{};Lt=A(r,l.total,g.products,g.citations,l.dotcom,"ko",g.productsCnty,g.citationsCnty,G,H,F,I,it,ft),Jt=A(Ze(r,i),l.total,J.products,J.citations,l.dotcom,"en",J.productsCnty,J.citationsCnty,G,H,F,I,it,ft),nt=`${r.period||""} ${r.title||"KPI Dashboard"}`.trim()}else Lt=A(r,l.total,g.products,g.citations,m,"ko",g.productsCnty,g.citationsCnty,{weeklyLabels:G,weeklyAll:H,categoryStats:Z,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null}),Jt=A(Ze(r,i),l.total,J.products,J.citations,m,"en",J.productsCnty,J.citationsCnty,{weeklyLabels:G,weeklyAll:H,categoryStats:Z,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null}),nt=`${r.period||""} ${r.title||"Newsletter"}`.trim();const ee=z||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),B={title:nt,htmlKo:Lt,htmlEn:Jt};jt&&(B.month=ve);const Gt=await(await fetch(ee,{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify(B)})).json();if(!Gt.ok)throw new Error(Gt.error||"게시 실패");if(ke({...Gt,published:!0}),jt&&We(),t==="dashboard")try{const it=await De(t)||{},ft=l.extra||f||{};Io(t,{...it,meta:r,total:l.total,weeklyPR:ft.weeklyPR||it.weeklyPR,weeklyPRLabels:ft.weeklyPRLabels||it.weeklyPRLabels,monthlyPR:ft.monthlyPR||it.monthlyPR,monthlyPRLabels:ft.monthlyPRLabels||it.monthlyPRLabels,weeklyBrandPrompt:ft.weeklyBrandPrompt||it.weeklyBrandPrompt,weeklyBrandPromptLabels:ft.weeklyBrandPromptLabels||it.weeklyBrandPromptLabels})}catch{}const Ut=`${window.location.origin}${Gt.urls.ko}`,ot=`${window.location.origin}${Gt.urls.en}`;try{await navigator.clipboard.writeText(Ut+`
`+ot)}catch{}Wt(`KO: ${Ut}
EN: ${ot}`)}catch(l){Wt("ERROR:"+l.message)}finally{Pt(!1),setTimeout(()=>Wt(""),2e4)}}}async function Bn(){if(!zt){Zt(!0),fe("");try{const l=await Fr(Ci,we,{includeProgressTracker:Vt});fe(`통합 게시 완료!
KO: ${window.location.origin}${l.urls.ko}
EN: ${window.location.origin}${l.urls.en}`)}catch(l){fe("ERROR: "+l.message)}finally{Zt(!1),setTimeout(()=>fe(""),15e3)}}}async function bo(l){try{const g=z||(t==="dashboard"?"/api/publish-dashboard":"/api/publish"),J=jt?`${g}?month=${encodeURIComponent(l||ve)}`:g;(await(await fetch(J,{method:"DELETE"})).json()).ok&&(jt?We():ke(null))}catch{}}async function In(){if(j!=="en"){alert(`EN 탭에서만 AI 번역 기능을 사용할 수 있습니다.
상단에서 "뉴스레터미리보기 (EN)" 탭을 먼저 선택해주세요.`);return}rt(!0)}async function xo(l){rt(!1),dt(!0);const g=(l==null?void 0:l.products)??y,J=(l==null?void 0:l.productsCnty)??b,Lt=(l==null?void 0:l.citations)??u,Jt=(l==null?void 0:l.citationsCnty)??w;try{const nt=r,ee=[nt.title||"",nt.dateLine||"",nt.noticeText||"",nt.totalInsight||"",nt.reportType||"",nt.productInsight||"",nt.productHowToRead||"",nt.citationInsight||"",nt.citationHowToRead||"",nt.dotcomInsight||"",nt.dotcomHowToRead||"",nt.todoText||"",nt.todoNotice||"",nt.kpiLogicText||"",nt.cntyInsight||"",nt.cntyHowToRead||"",nt.citDomainInsight||"",nt.citDomainHowToRead||"",nt.citCntyInsight||"",nt.citCntyHowToRead||"",nt.citPrdInsight||"",nt.citPrdHowToRead||"",nt.period||"",nt.team||"",nt.reportNo||"",nt.monthlyReportBody||""],B=g.map(st=>st.kr||""),Qt=g.map(st=>st.compName||""),Gt=Lt.map(st=>st.category||""),Ut=[...new Set(J.map(st=>st.country||""))],ot=[...new Set(J.map(st=>st.product||""))],it=[...new Set(J.map(st=>st.compName||""))],ft=[...new Set(Jt.map(st=>st.cnty||"").filter(st=>st&&st!=="TTL"))],At=V2_TRANSLATE_FIELDS.filter(st=>nt[st]!=null&&String(nt[st]).trim()!==""),Bt=At.map(st=>String(nt[st])),Mt=[...ee,...B,...Qt,...Gt,...Ut,...ot,...it,...ft,...Bt].map(st=>st||" "),kt=await Er(Mt,{from:"ko",to:"en"});let yt=0;const re={...r,title:kt[yt++]||nt.title,dateLine:kt[yt++]||nt.dateLine,noticeText:kt[yt++]||nt.noticeText,totalInsight:kt[yt++]||nt.totalInsight,reportType:kt[yt++]||nt.reportType,productInsight:kt[yt++]||nt.productInsight,productHowToRead:kt[yt++]||nt.productHowToRead,citationInsight:kt[yt++]||nt.citationInsight,citationHowToRead:kt[yt++]||nt.citationHowToRead,dotcomInsight:kt[yt++]||nt.dotcomInsight,dotcomHowToRead:kt[yt++]||nt.dotcomHowToRead,todoText:kt[yt++]||nt.todoText,todoNotice:kt[yt++]||nt.todoNotice,kpiLogicText:kt[yt++]||nt.kpiLogicText,cntyInsight:kt[yt++]||nt.cntyInsight,cntyHowToRead:kt[yt++]||nt.cntyHowToRead,citDomainInsight:kt[yt++]||nt.citDomainInsight,citDomainHowToRead:kt[yt++]||nt.citDomainHowToRead,citCntyInsight:kt[yt++]||nt.citCntyInsight,citCntyHowToRead:kt[yt++]||nt.citCntyHowToRead,citPrdInsight:kt[yt++]||nt.citPrdInsight,citPrdHowToRead:kt[yt++]||nt.citPrdHowToRead,period:(yt++,nt.period),team:kt[yt++]||nt.team,reportNo:(yt++,nt.reportNo),monthlyReportBody:kt[yt++]||nt.monthlyReportBody},ie=st=>st&&st.replace(/\b\w/g,vt=>vt.toUpperCase()),te=st=>(st||"").replace(/samsung\s*(electronics)?/gi,"SS").replace(/삼성전자/g,"SS").replace(/삼성/g,"SS"),me={};g.forEach((st,vt)=>{me[st.id]={en:ie(kt[yt+vt]||st.kr),compNameEn:te(kt[yt+B.length+vt]||st.compName)}}),yt+=B.length+Qt.length;const Be={};Lt.forEach((st,vt)=>{Be[`${st.rank}_${st.source}`]=ie(kt[yt+vt]||st.category)}),yt+=Gt.length;const Se={};Ut.forEach((st,vt)=>{Se[st]=/^[A-Z]{2,3}$/.test(st)?st:kt[yt+vt]||st}),yt+=Ut.length;const Fe={};ot.forEach((st,vt)=>{Fe[st]=kt[yt+vt]||st}),yt+=ot.length;const vo={};it.forEach((st,vt)=>{vo[st]=kt[yt+vt]||st}),yt+=it.length;const wo={};ft.forEach((st,vt)=>{wo[st]=/^[A-Z]{2,3}$/.test(st)?st:kt[yt+vt]||st}),yt+=ft.length,At.forEach((st,vt)=>{re[st]=kt[yt+vt]||nt[st]}),c(re),h(st=>st.map(vt=>{var Co,ko;return{...vt,en:((Co=me[vt.id])==null?void 0:Co.en)||vt.en||vt.kr,compNameEn:((ko=me[vt.id])==null?void 0:ko.compNameEn)||vt.compNameEn||vt.compName}})),d(st=>st.map(vt=>({...vt,categoryEn:Be[`${vt.rank}_${vt.source}`]||vt.categoryEn||vt.category}))),v(st=>st.map(vt=>({...vt,countryEn:ie(Se[vt.country]||vt.country),productEn:ie(Fe[vt.product]||vt.product),compNameEn:te(vo[vt.compName]||vt.compName)}))),x(st=>st.map(vt=>({...vt,cntyEn:vt.cnty==="TTL"?"TTL":ie(wo[vt.cnty]||vt.cnty)}))),dt(!1)}catch(nt){alert("번역 오류: "+nt.message),dt(!1)}}async function Rn(){const l=A(e,s,M.products,M.citations,m,j,M.productsCnty,M.citationsCnty);try{await navigator.clipboard.writeText(l)}catch{const g=document.createElement("textarea");g.value=l,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g)}ht(!0),setTimeout(()=>ht(!1),2500)}async function jn(){await Nr(e,s,y,u,m)}async function Mn(){if(et!=="sending"){xt("sending");try{const l=$(),g=we(l.products,l.productsCnty,l.citations,l.citationsCnty,"ko"),J=we(l.products,l.productsCnty,l.citations,l.citationsCnty,"en"),Lt={weeklyLabels:G,weeklyAll:H,categoryStats:Z,unlaunchedMap:(f==null?void 0:f.unlaunchedMap)||{},productCardVersion:e.productCardVersion||"v1",trendMode:e.trendMode||"weekly",assetBase:typeof window<"u"?window.location.origin:"",citTouchPointsTrend:(f==null?void 0:f.citTouchPointsTrend)||null,citTrendMonths:(f==null?void 0:f.citTrendMonths)||[],citDomainTrend:(f==null?void 0:f.citDomainTrend)||null,citDomainMonths:(f==null?void 0:f.citDomainMonths)||[],citTouchPointsByLlm:(f==null?void 0:f.citTouchPointsByLlm)||null,citDomainByLlm:(f==null?void 0:f.citDomainByLlm)||null,citDomainByLlmTrend:(f==null?void 0:f.citDomainByLlmTrend)||null,dotcomByLlm:(f==null?void 0:f.dotcomByLlm)||null,readability:(f==null?void 0:f.readability)||null},Jt=Ze(r,i),nt=A(r,l.total,g.products,g.citations,l.dotcom,"ko",g.productsCnty,g.citationsCnty,Lt),ee=A(Jt,l.total,J.products,J.citations,l.dotcom,"en",J.productsCnty,J.citationsCnty,Lt),B=ji(nt,ee),Qt=`[LG GEO] ${r.title} · ${r.period} (KO/EN)`,Ut=await(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({to:pt.trim(),subject:Qt,html:B})})).json();if(!Ut.ok)throw new Error(Ut.error||"발송 실패");xt("ok"),setTimeout(()=>xt(!1),4e3)}catch(l){xt("error"),Y(l.message),setTimeout(()=>{xt(!1),Y("")},5e3)}}}async function Pn(){var J,Lt,Jt,nt,ee;if(ut)return;const l=ei(mt.trim());if(!l){Ft("error"),Y("올바른 Google Sheets URL을 입력하세요."),setTimeout(()=>Ft(null),3e3);return}Ct(!0),Ft(null),Y(""),at("");const g=[];try{const B=await ni(l,ot=>Y(ot));if(g.push(`[Sync] parsed keys: ${Object.keys(B).join(", ")||"(없음)"}`),B.meta&&g.push(`[Sync] meta keys: ${Object.keys(B.meta).join(", ")}`),B.productsPartial&&g.push(`[Sync] products: ${B.productsPartial.length}건`),g.push(`[Sync] citations: ${((J=B.citations)==null?void 0:J.length)??0}건`),g.push(`[Sync] citationsCnty: ${((Lt=B.citationsCnty)==null?void 0:Lt.length)??0}건`),g.push(`[Sync] dotcom: ${B.dotcom?"OK":"(없음)"}`),g.push(`[Sync] productsCnty: ${((Jt=B.productsCnty)==null?void 0:Jt.length)??0}건`),B.meta){const ot=yr;a(it=>{const ft={...it};for(const[At,Bt]of Object.entries(B.meta))ot.includes(At)&&it[At]||(ft[At]=Bt);return ft}),c(it=>({...it,period:B.meta.period,dateLine:B.meta.dateLine,reportNo:B.meta.reportNo}))}if(B.citations&&(d(B.citations),P.current={...P.current,citations:B.citations}),B.dotcom&&(k(ot=>({...ot,...B.dotcom})),P.current={...P.current,dotcom:{...P.current.dotcom,...B.dotcom}}),B.productsCnty&&(v(B.productsCnty),P.current={...P.current,productsCnty:B.productsCnty}),B.citationsCnty&&(x(B.citationsCnty),P.current={...P.current,citationsCnty:B.citationsCnty}),B.monthlyVis&&K&&K(B.monthlyVis),X){const ot={weeklyPR:B.weeklyPR||null,weeklyPRLabels:B.weeklyPRLabels||null,monthlyPR:B.monthlyPR||null,monthlyPRLabels:B.monthlyPRLabels||null,weeklyBrandPrompt:B.weeklyBrandPrompt||null,weeklyBrandPromptLabels:B.weeklyBrandPromptLabels||null,unlaunchedMap:B.unlaunchedMap||null,weeklyLabelsFull:B.weeklyLabelsFull||null,prTopicList:B.prTopicList||null,citTouchPointsTrend:B.citTouchPointsTrend||null,citTrendMonths:B.citTrendMonths||null,citDomainTrend:B.citDomainTrend||null,citDomainMonths:B.citDomainMonths||null,citTouchPointsByLlm:B.citTouchPointsByLlm||null,citDomainByLlm:B.citDomainByLlm||null,citDomainByLlmTrend:B.citDomainByLlmTrend||null,dotcomByLlm:B.dotcomByLlm||null};X(ot),P.current={...P.current,extra:{...P.current.extra,...ot}}}const Qt=B.weeklyLabels||((nt=B.meta)==null?void 0:nt.weeklyLabels);console.log("[SYNC] weeklyLabels:",Qt,"weeklyLabelsFull:",B.weeklyLabelsFull),Qt&&Qt.length&&_(Qt),B.weeklyAll&&V(ot=>({...ot,...B.weeklyAll})),console.log("[SYNC] parsed keys:",Object.keys(B));const Gt=B.weeklyMap?Object.keys(B.weeklyMap):[],Ut=((ee=B.productsPartial)==null?void 0:ee.map(ot=>ot.id))||[];if(console.log("[SYNC] weeklyMap keys:",Gt.length?Gt:"NONE"),console.log("[SYNC] productsPartial IDs:",Ut.length?Ut:"NONE"),Gt.length&&Ut.length){const ot=Ut.filter(ft=>!Gt.includes(ft)),it=Gt.filter(ft=>!Ut.includes(ft));ot.length&&console.warn("[SYNC] ⚠ 제품에 weekly 없음:",ot),it.length&&console.warn("[SYNC] ⚠ weekly에 제품 없음:",it),!ot.length&&!it.length&&console.log("[SYNC] ✓ 모든 제품-weekly ID 일치")}if(B.productsPartial){const ot=B.productsPartial.map(it=>{var Se;const ft=((Se=B.weeklyMap)==null?void 0:Se[it.id])||[],At=ft.filter(Fe=>Fe!=null&&Fe>0),Bt=it.score,Mt=it.prev||0,kt=it.vsComp>0?Math.round(Bt/it.vsComp*100):100,yt=At.length>0?At[At.length-1]:Bt,re=At.length>=2?At[At.length-2]:0,ie=Bt,te=Mt,me=kt,Be=Mt>0&&Mt!==Bt?[Mt,Bt]:[];return{...it,score:ie,prev:te,weekly:ft,monthly:Be,weeklyScore:yt,weeklyPrev:re,monthlyScore:Bt,monthlyPrev:Mt,compRatio:me,status:me>=100?"lead":me>=80?"behind":"critical"}});h(ot),P.current={...P.current,products:ot}}else B.weeklyMap&&h(ot=>ot.map(it=>{var At;const ft=(At=B.weeklyMap)==null?void 0:At[it.id];return ft?{...it,weekly:ft}:it}));if(B.total){const ot={...P.current.total,...B.total,...B.buTotals?{buTotals:B.buTotals}:{},...B.buTotalsPrev?{buTotalsPrev:B.buTotalsPrev}:{},...B.countryTotals?{countryTotals:B.countryTotals}:{},...B.countryTotalsPrev?{countryTotalsPrev:B.countryTotalsPrev}:{}};p(it=>({...it,...ot})),P.current={...P.current,total:ot}}{let ot=function(Mt){if(!Mt)return 0;const kt=String(Mt).trim(),yt=kt.match(/(\d{1,2})월/);if(yt){const te=parseInt(yt[1]);return te>=1&&te<=12?te:0}const re=kt.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);if(re)return At[re[1].toLowerCase()]||0;const ie=kt.match(/\d{4}[-\/](\d{1,2})/);if(ie){const te=parseInt(ie[1]);return te>=1&&te<=12?te:0}return 0};const it=new Date().getFullYear(),ft=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],At={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};let Bt=0;if(B.derivedPeriod){const Mt=ot(B.derivedPeriod);Mt>Bt&&(Bt=Mt)}if(B.citDerivedPeriod){const Mt=ot(B.citDerivedPeriod);Mt>Bt&&(Bt=Mt)}Bt>0&&Bt<=12&&(a(Mt=>({...Mt,period:`${it}년 ${Bt}월`})),c(Mt=>({...Mt,period:`${ft[Bt]} ${it}`})))}if(!B.total&&B.productsPartial&&B.productsPartial.length>0){const ot=B.productsPartial,it=+(ot.reduce((At,Bt)=>At+Bt.score,0)/ot.length).toFixed(1),ft=+(ot.reduce((At,Bt)=>At+(Bt.vsComp||0),0)/ot.length).toFixed(1);p(At=>({...At,score:it,vsComp:ft,rank:it>=ft?1:2}))}if(setTimeout(()=>{Io(t,{meta:B.meta||null,total:B.total?{...B.total,...B.buTotals?{buTotals:B.buTotals}:{},...B.buTotalsPrev?{buTotalsPrev:B.buTotalsPrev}:{},...B.countryTotals?{countryTotals:B.countryTotals}:{},...B.countryTotalsPrev?{countryTotalsPrev:B.countryTotalsPrev}:{}}:null,productsPartial:B.productsPartial||null,weeklyMap:B.weeklyMap||null,weeklyLabels:B.weeklyLabels||null,weeklyLabelsFull:B.weeklyLabelsFull||null,weeklyAll:B.weeklyAll||null,citations:B.citations||null,dotcom:B.dotcom||null,productsCnty:B.productsCnty||null,citationsCnty:B.citationsCnty||null,citationsByCnty:B.citationsByCnty||null,dotcomByCnty:B.dotcomByCnty||null,unlaunchedMap:B.unlaunchedMap||null,prTopicList:B.prTopicList||null,monthlyVis:B.monthlyVis||null,weeklyPR:B.weeklyPR||null,weeklyPRLabels:B.weeklyPRLabels||null,monthlyPR:B.monthlyPR||null,monthlyPRLabels:B.monthlyPRLabels||null,weeklyBrandPrompt:B.weeklyBrandPrompt||null,weeklyBrandPromptLabels:B.weeklyBrandPromptLabels||null,monthlyBrandPrompt:B.monthlyBrandPrompt||null,monthlyBrandPromptLabels:B.monthlyBrandPromptLabels||null,dotcomTrend:B.dotcomTrend||null,dotcomTrendMonths:B.dotcomTrendMonths||null,dotcomByLlm:B.dotcomByLlm||null}),setTimeout(Ln,250)},100),at(g.join(`
`)),Ft("ok"),Y(t==="dashboard"?"동기화 완료! EN 자동 번역 중...":"동기화 완료!"),t==="dashboard"){const ot={};B.productsPartial&&(ot.products=B.productsPartial.map(it=>{var yt;const ft=((yt=B.weeklyMap)==null?void 0:yt[it.id])||[],At=it.vsComp>0?it.score/it.vsComp*100:100,Bt=ft.find(re=>re!=null&&re>0),Mt=it.prev!=null&&it.prev>0?it.prev:Bt||0,kt=Mt>0?[Mt,it.score]:[];return{...it,prev:Mt,weekly:ft,monthly:kt,compRatio:Math.round(At),status:At>=100?"lead":At>=80?"behind":"critical"}})),B.productsCnty&&(ot.productsCnty=B.productsCnty),B.citations&&(ot.citations=B.citations),B.citationsCnty&&(ot.citationsCnty=B.citationsCnty);try{await xo(ot)}catch{}Y("동기화 + 번역 완료!")}}catch(B){g.push(`[ERROR] ${B.message}`),Ft("error"),Y(B.message),at(g.join(`
`))}finally{Ct(!1),setTimeout(()=>{Ft(null),Y("")},4e3)}}return n.jsxs("div",{style:{width:520,minWidth:520,borderRight:"1px solid #1E293B",background:"#0F172A",display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"16px 18px 14px",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:7,background:It,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{fontSize:11,fontWeight:900,color:"#FFFFFF",fontFamily:E},children:"LG"})}),n.jsxs("div",{children:[n.jsxs("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#FFFFFF",fontFamily:E},children:["GEO Builder ",n.jsxs("span",{style:{fontSize:11,fontWeight:400,color:"#64748B"},children:["v","3.1.9"]})]}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#475569",fontFamily:E},children:t==="dashboard"?"대시보드 생성기":"뉴스레터 생성기"})]})]}),n.jsx(ii,{...An||{}})]}),n.jsxs("div",{style:{padding:"16px 14px",flex:1,overflowY:"auto"},children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"구글 시트 동기화"}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#475569",fontFamily:E},children:"Google Sheets URL"}),n.jsx("input",{value:mt,onChange:l=>St(l.target.value),placeholder:"https://docs.google.com/spreadsheets/d/...",style:{...Et,fontSize:11,padding:"7px 9px",marginBottom:8,color:mt?"#E2E8F0":"#334155"}}),n.jsxs("button",{onClick:Pn,style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:ut?"wait":"pointer",background:ut?"#1E293B":It,fontSize:12,fontWeight:700,color:ut?"#94A3B8":"#FFFFFF",fontFamily:E,display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(So,{size:13,style:{animation:ut?"spin 1s linear infinite":"none"}}),ut?"동기화 중...":"구글 시트 동기화"]}),(wt||ut&&R)&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.6,background:wt==="ok"?"#14532D":wt==="error"?"#450A0A":"#1E293B",color:wt==="ok"?"#86EFAC":wt==="error"?"#FCA5A5":"#94A3B8",border:`1px solid ${wt==="ok"?"#22C55E33":wt==="error"?"#EF444433":"#334155"}`,marginBottom:8},children:R}),lt&&n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:10,fontFamily:"monospace",lineHeight:1.7,background:"#0F172A",color:"#94A3B8",border:"1px solid #1E293B",marginBottom:8,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:200,overflowY:"auto"},children:[lt,n.jsx("button",{onClick:()=>{navigator.clipboard.writeText(lt).then(()=>{const l=document.getElementById("vis-debug-copy-btn");l&&(l.textContent="복사됨!",setTimeout(()=>{l.textContent="로그 복사"},1500))})},id:"vis-debug-copy-btn",style:{display:"block",marginTop:6,padding:"4px 10px",borderRadius:5,border:"1px solid #334155",background:"#1E293B",color:"#94A3B8",fontSize:10,fontWeight:700,fontFamily:E,cursor:"pointer"},children:"로그 복사"})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:In,disabled:q,style:{width:"100%",padding:"9px 0",background:q?"#1E293B":"#4F46E5",border:"1px solid #6366F133",borderRadius:8,fontSize:11,fontWeight:700,color:"#E0E7FF",fontFamily:E,cursor:q?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12,opacity:q?.6:1},children:[n.jsx(Dn,{size:13})," ",q?"번역 중...":"AI 번역 (EN)"]}),Tt&&n.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{background:"#1E293B",border:"1px solid #334155",borderRadius:14,padding:"24px 28px",maxWidth:380,width:"90%",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:"#FFFFFF",fontFamily:E},children:"AI 번역 확인"}),n.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:"#94A3B8",lineHeight:1.6,fontFamily:E},children:["좌측 패널의 모든 텍스트를 영어로 번역하고,",n.jsx("br",{}),"영어 버전 스냅샷을 자동 저장합니다.",n.jsx("br",{}),"진행하시겠습니까?"]}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[n.jsx("button",{onClick:()=>rt(!1),style:{padding:"8px 20px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontSize:12,fontWeight:600,fontFamily:E,cursor:"pointer"},children:"아니오"}),n.jsx("button",{onClick:xo,style:{padding:"8px 20px",borderRadius:8,border:"none",background:"#4F46E5",color:"#FFFFFF",fontSize:12,fontWeight:700,fontFamily:E,cursor:"pointer"},children:"예, 번역하기"})]})]})})]}),n.jsxs("button",{onClick:jn,style:{width:"100%",padding:"9px 0",background:"#166534",border:"1px solid #22C55E33",borderRadius:8,fontSize:11,fontWeight:700,color:"#86EFAC",fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:12},children:[n.jsx(On,{size:12})," 구글 시트 템플릿 다운로드"]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[jt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"발행 월"}),n.jsx("select",{value:ve,onChange:l=>Tn(l.target.value),style:{width:"100%",padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:E,fontSize:11,fontWeight:700,cursor:"pointer"},children:En.map(l=>n.jsxs("option",{value:l,children:[l," · ",$e(l),de.find(g=>g.month===l)?" ✓ 게시됨":""]},l))})]}),jt&&gt&&n.jsxs("div",{style:{marginBottom:8},children:[n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["핵심 과제 진척 월 ",n.jsxs("span",{style:{color:"#475569"},children:["(기본: 데이터 월 = ",T||"—",")"]})]}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("select",{value:U||"",onChange:l=>gt(l.target.value||null),style:{flex:1,padding:"7px 9px",borderRadius:8,border:"1px solid #334155",background:"#0F172A",color:"#E2E8F0",fontFamily:E,fontSize:11,fontWeight:700,cursor:"pointer"},children:[n.jsxs("option",{value:"",children:["자동 (",T||"데이터 월",")"]}),["3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"].map(l=>n.jsx("option",{value:l,children:l},l))]}),U&&n.jsx("button",{onClick:()=>gt(null),title:"기본값(데이터 월)로 되돌리기",style:{padding:"7px 10px",borderRadius:8,border:"1px solid #334155",background:"transparent",color:"#94A3B8",fontFamily:E,fontSize:11,fontWeight:700,cursor:"pointer"},children:"↺"})]})]}),O?n.jsxs("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.7,background:"#1E293B",color:"#94A3B8",marginBottom:8},children:["게시는 ",n.jsx("b",{style:{color:"#CBD5E1"},children:"통합 대시보드 어드민"}),'의 "전체 게시" 버튼으로 일원화되었습니다. 매일 00시(KST)에 자동 새로고침·게시됩니다.']}):n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:$n,disabled:$t,style:{width:"100%",padding:"9px 0",background:$t?"#1E293B":"#7C3AED",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:$t?"#94A3B8":"#FFFFFF",fontFamily:E,cursor:$t?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8,transition:"all 0.2s"},children:[n.jsx(Fo,{size:12}),$t?"게시 중...":jt?`${$e(ve)} 게시 (KO + EN)`:"웹사이트 게시 (KO + EN)"]}),t==="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,fontSize:11,color:"#94A3B8",fontFamily:E,cursor:"pointer"},children:[n.jsx("input",{type:"checkbox",checked:Vt,onChange:l=>Kt(l.target.checked),style:{cursor:"pointer"}}),"Progress Tracker 포함"]}),n.jsxs("button",{onClick:Bn,disabled:zt,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,width:"100%",padding:"8px 12px",borderRadius:8,border:"none",background:zt?"#1E293B":"#166534",color:zt?"#94A3B8":"#86EFAC",fontSize:11,fontWeight:700,fontFamily:E,cursor:zt?"wait":"pointer",marginBottom:6},children:[n.jsx(Fo,{size:12}),zt?"통합 게시 중...":"통합 대시보드 게시"]}),qt&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.8,background:qt.startsWith("ERROR")?"#450A0A":"#14532D",color:qt.startsWith("ERROR")?"#FCA5A5":"#86EFAC",marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:qt.startsWith("ERROR:")?qt.slice(6):qt})]})]})]}),n.jsxs("button",{onClick:async()=>{const l={totalInsight:e.totalInsight||"",productInsight:e.productInsight||"",productHowToRead:e.productHowToRead||"",cntyInsight:e.cntyInsight||"",cntyHowToRead:e.cntyHowToRead||"",citationInsight:e.citationInsight||"",citationHowToRead:e.citationHowToRead||"",citDomainInsight:e.citDomainInsight||"",citDomainHowToRead:e.citDomainHowToRead||"",citCntyInsight:e.citCntyInsight||"",citPrdInsight:e.citPrdInsight||"",citPrdHowToRead:e.citPrdHowToRead||"",citCntyHowToRead:e.citCntyHowToRead||"",dotcomInsight:e.dotcomInsight||"",dotcomHowToRead:e.dotcomHowToRead||"",todoText:e.todoText||"",todoNotice:e.todoNotice||"",noticeText:e.noticeText||"",kpiLogicText:e.kpiLogicText||"",monthlyReportBody:e.monthlyReportBody||""};if(!Object.values(l).some(J=>J.trim())){alert("아카이빙할 인사이트 콘텐츠가 없습니다.");return}if(confirm(`"${e.period||"현재"}" 리포트를 AI 학습 데이터로 아카이빙하시겠습니까?`))try{const Lt=await(await fetch("/api/archives",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({period:e.period||"Unknown",insights:l})})).json();Lt.ok?alert("아카이빙 완료! AI 생성 시 학습 데이터로 활용됩니다."):alert("아카이빙 실패: "+(Lt.error||""))}catch(J){alert("아카이빙 실패: "+J.message)}},style:{width:"100%",padding:"9px 0",background:"transparent",border:"1px solid #334155",borderRadius:8,fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginBottom:8},children:[n.jsx(Nn,{size:12})," 완성본 아카이빙 (AI 학습)"]}),t!=="monthly-report"&&Dt&&n.jsx("div",{style:{padding:"8px 10px",borderRadius:7,fontSize:11,fontFamily:E,lineHeight:1.8,background:Dt.startsWith("ERROR:")?"#450A0A":"#14532D",color:Dt.startsWith("ERROR:")?"#FCA5A5":"#86EFAC",border:`1px solid ${Dt.startsWith("ERROR:")?"#EF444433":"#22C55E33"}`,marginBottom:8,wordBreak:"break-all",whiteSpace:"pre-line"},children:Dt.startsWith("ERROR:")?Dt.slice(6):n.jsxs("span",{style:{display:"flex",alignItems:"flex-start",gap:5},children:[n.jsx(Ke,{size:11,style:{marginTop:3,flexShrink:0}})," ",n.jsxs("span",{children:[Dt,n.jsx("br",{}),n.jsx("span",{style:{color:"#64748B"},children:"(복사됨)"})]})]})}),t!=="monthly-report"&&!jt&&(se==null?void 0:se.published)&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:E,textTransform:"uppercase",letterSpacing:.8},children:"게시 중"}),n.jsx("button",{onClick:()=>bo(),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:E,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:se.urls.ko},{label:"EN",url:se.urls.en}].map(({label:l,url:g})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:3},children:[n.jsxs("a",{href:g,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:11,color:"#A78BFA",fontFamily:E,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[l,": ",g]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${g}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(Ke,{size:10})})]},l)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:E},children:se.ts?new Date(se.ts).toLocaleString("ko-KR"):""})]}),jt&&de.length>0&&n.jsxs("div",{style:{background:"#1E293B",borderRadius:8,padding:"8px 10px",marginBottom:12},children:[n.jsx("div",{style:{marginBottom:6},children:n.jsxs("span",{style:{fontSize:10,fontWeight:700,color:"#64748B",fontFamily:E,textTransform:"uppercase",letterSpacing:.8},children:["게시된 월 (",de.length,")"]})}),de.map(l=>n.jsxs("div",{style:{borderTop:"1px solid #0F172A",paddingTop:6,marginTop:6},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:E},children:$e(l.month)}),n.jsx("button",{onClick:()=>{confirm(`${$e(l.month)} 게시본을 삭제할까요?`)&&bo(l.month)},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:10,fontFamily:E,fontWeight:600},children:"삭제"})]}),[{label:"KO",url:l.urls.ko},{label:"EN",url:l.urls.en}].map(({label:g,url:J})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:2},children:[n.jsxs("a",{href:J,target:"_blank",rel:"noopener noreferrer",style:{flex:1,fontSize:10,color:"#A78BFA",fontFamily:E,textDecoration:"none",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[g,": ",J]}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(`${window.location.origin}${J}`),title:"URL 복사",style:{padding:"2px 5px",borderRadius:4,border:"none",cursor:"pointer",background:"#334155",color:"#94A3B8",fontSize:10,display:"flex"},children:n.jsx(Ke,{size:10})})]},g)),n.jsx("span",{style:{fontSize:10,color:"#475569",fontFamily:E},children:l.ts?new Date(l.ts).toLocaleString("ko-KR"):""})]},l.month))]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[t!=="dashboard"&&!jt&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"헤더 편집"}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["리포트 유형 ",n.jsx("span",{style:{color:"#334155"},children:"(좌상단)"})]}),n.jsx("input",{value:e.reportType,onChange:l=>o(g=>({...g,reportType:l.target.value})),style:{...Et,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",gap:6,marginBottom:8},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["보고서 번호 ",n.jsx("span",{style:{color:"#334155"},children:"(자동)"})]}),n.jsx("input",{value:e.reportNo,onChange:l=>o(g=>({...g,reportNo:l.target.value})),style:{...Et}})]}),n.jsxs("div",{style:{flex:1.4},children:[n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["발행월 ",n.jsx("span",{style:{color:"#334155"},children:"(레드바)"})]}),n.jsx("input",{value:e.period,onChange:l=>{const g=l.target.value;o(J=>({...J,period:g,...Qo(g)})),c&&c(J=>({...J,period:g,...Qo(g)}))},style:{...Et}})]})]}),ao(e.period)&&n.jsxs("p",{style:{margin:"-4px 0 8px",fontSize:10.5,color:"#64748B",fontFamily:E,lineHeight:1.5},children:["자동 연동 — 보고서 번호 ",n.jsx("span",{style:{color:"#94A3B8",fontWeight:700},children:ao(e.period)})," · ","데이터 기준 ",n.jsx("span",{style:{color:"#94A3B8",fontWeight:700},children:Fn(e.period,"ko")})]}),n.jsx("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:"제목 텍스트"}),n.jsx("textarea",{value:e.title,onChange:l=>o(g=>({...g,title:l.target.value})),rows:4,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["팀명 ",n.jsx("span",{style:{color:"#334155"},children:"(우하단)"})]}),n.jsx("input",{value:e.team,onChange:l=>o(g=>({...g,team:l.target.value})),style:{...Et,marginBottom:8}}),n.jsxs("p",{style:{margin:"0 0 3px",fontSize:11,color:"#64748B",fontFamily:E},children:["기준 텍스트 ",n.jsx("span",{style:{color:"#334155"},children:"(팀명 아래)"})]}),n.jsx("input",{value:e.dateLine,onChange:l=>o(g=>({...g,dateLine:l.target.value})),style:{...Et,marginBottom:10}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Notice"}),n.jsx("button",{onClick:()=>o(l=>({...l,showNotice:!l.showNotice})),style:{background:e.showNotice?It:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showNotice?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showNotice&&!jt&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.noticeText,onChange:l=>o(g=>({...g,noticeText:l.target.value})),rows:4,placeholder:"Notice 내용을 입력하세요...",style:{...Et,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"KPI Logic"}),n.jsx("button",{onClick:()=>o(l=>({...l,showKpiLogic:!l.showKpiLogic})),style:{background:e.showKpiLogic?It:"#334155",border:"none",borderRadius:8,width:32,height:16,cursor:"pointer",position:"relative",padding:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e.showKpiLogic?17:3,width:12,height:12,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})})]}),e.showKpiLogic&&!jt&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{value:e.kpiLogicText,onChange:l=>o(g=>({...g,kpiLogicText:l.target.value})),rows:4,placeholder:"KPI Logic 내용을 입력하세요...",style:{...Et,marginBottom:4,resize:"vertical"}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})]})]})]}),n.jsxs("div",{style:{marginBottom:10},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"폰트 크기"}),n.jsxs("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:E,fontWeight:700},children:[e.titleFontSize,"px"]})]}),n.jsx("input",{type:"range",min:14,max:48,step:1,value:e.titleFontSize,onChange:l=>o(g=>({...g,titleFontSize:Number(l.target.value)})),style:{width:"100%",accentColor:It,cursor:"pointer"}})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E,flex:1},children:"제목 색상"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx("input",{type:"color",value:e.titleColor,onChange:l=>o(g=>({...g,titleColor:l.target.value})),style:{width:32,height:26,border:"1px solid #334155",borderRadius:5,background:"none",cursor:"pointer",padding:2}}),n.jsx("span",{style:{fontSize:11,color:"#475569",fontFamily:E},children:e.titleColor}),[["#1A1A1A","다크"],["#CF0652","LG 레드"],["#1D4ED8","블루"],["#FFFFFF","화이트"]].map(([l,g])=>n.jsx("button",{onClick:()=>o(J=>({...J,titleColor:l})),title:g,style:{width:16,height:16,borderRadius:"50%",background:l,border:e.titleColor===l?"2px solid #FFFFFF":"1px solid #334155",cursor:"pointer",padding:0,flexShrink:0}},l))]})]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}}),n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"섹션 표시"}),n.jsxs("div",{style:{marginBottom:16},children:[n.jsx(nn,{label:"익스큐티브 서머리",variants:en,allKeys:Ii,value:on(en,e),setMeta:o}),n.jsx(nn,{label:"하이라이트",variants:tn,value:on(tn,e),setMeta:o}),Ri.map(l=>n.jsx(Bi,{label:l.label,items:l.items,meta:e,setMeta:o},l.label))]}),(()=>{const l=ot=>String(ot||"").replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\.(com|net|org|io|co|kr|jp|us|uk|de|fr|cn|in|br)(\.[a-z]{2})?$/i,""),g=ot=>/brand/i.test(ot)&&/(manufacturer|메뉴팩|메뉴펙|제조)/i.test(ot)?"Brand":ot,J=Array.isArray(f==null?void 0:f.citTrendMonths)?f.citTrendMonths:[],Lt=J.length?J[J.length-1]:null,Jt=ot=>{if(!ot)return 0;if(Lt!=null&&ot[Lt]!=null)return Number(ot[Lt])||0;const it=Object.values(ot).map(Number).filter(ft=>!isNaN(ft));return it.length?it[it.length-1]:0},nt=[],ee=new Set,B=(ot,it,ft)=>{ot&&!ee.has(ot)&&(ee.add(ot),nt.push({value:ot,label:it,score:ft}))};if(f!=null&&f.citTouchPointsTrend&&Object.entries(f.citTouchPointsTrend).forEach(([ot,it])=>{const ft=g(ot);B(ft,ft,Jt(it))}),f!=null&&f.citDomainTrend){const ot=Object.entries(f.citDomainTrend).filter(([ft])=>ft.startsWith("TTL|"));(ot.length?ot:Object.entries(f.citDomainTrend)).forEach(([,ft])=>B(ft.domain,l(ft.domain),Jt(ft.months)))}if(!nt.length)return null;nt.sort((ot,it)=>it.score-ot.score);const Qt=nt.slice(0,10),Gt=Array.isArray(e.bumpHighlight)?e.bumpHighlight:[],Ut=ot=>o(it=>{const ft=Array.isArray(it.bumpHighlight)?it.bumpHighlight:[];return{...it,bumpHighlight:ft.includes(ot)?ft.filter(At=>At!==ot):[...ft,ot]}});return n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 8px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"범프차트 지적 요소 (색상 강조)"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:16},children:Qt.map(({value:ot,label:it})=>{const ft=Gt.includes(ot);return n.jsx("button",{onClick:()=>Ut(ot),style:{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",background:ft?It:"#1E293B",color:ft?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:it},ot)})})]})})(),e.showLlmShare!==!1&&n.jsxs(n.Fragment,{children:[n.jsx(rn,{children:"Citation"}),n.jsx(Qe,{label:"인용비중",value:e.llmShareTopN===5?5:10,options:[{value:5,label:"Top 5"},{value:10,label:"Top 10"}],onSelect:l=>o(g=>({...g,llmShareTopN:l}))})]}),n.jsx(rn,{children:"제품 카드"}),n.jsx(Qe,{label:"버전",value:e.productCardVersion||"v1",options:[{value:"v1",label:"V1 트렌드",hint:"점수 + MoM + 미니 트렌드"},{value:"v4",label:"V4 경합",hint:"V1 트렌드 + 경쟁비 0.05 이하는 검은색",accent:"#1A1A1A"}],onSelect:l=>o(g=>({...g,productCardVersion:l}))}),n.jsx(Qe,{label:"트렌드 기준",value:e.trendMode||"weekly",options:[{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"}],onSelect:l=>o(g=>({...g,trendMode:l})),accent:"#166534"}),n.jsx("p",{style:{margin:"0 0 10px 2px",fontSize:11,fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:1,fontFamily:E},children:"콘텐츠 편집"})]}),t==="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"월간 보고서 본문"}),n.jsxs("button",{onClick:async()=>{var l;try{o(J=>({...J,monthlyReportBody:"⏳ AI 생성 중..."}));const g=await Nt("monthlyReportBody",{products:$().products,productsCnty:$().productsCnty,total:$().total,citations:$().citations,todoText:e.todoText||"",period:e.period||"",unlaunchedMap:((l=$().extra)==null?void 0:l.unlaunchedMap)||{}},j);o(J=>({...J,monthlyReportBody:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,monthlyReportBody:`[AI 실패: ${g.message}]`}))}},title:"AI 보고서 본문 자동 생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.monthlyReportBody||"",onChange:l=>o(g=>({...g,monthlyReportBody:l.target.value})),rows:28,placeholder:"월간 보고서 본문을 입력하세요. 1./2./3. 형식 헤딩, 2.1/2.2 서브헤딩 지원...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:E},children:[n.jsx("code",{children:"1. 제목"})," → H2 · ",n.jsx("code",{children:"2.1 부제"})," → H3 · ",n.jsx("code",{children:"**텍스트**"})," → ",n.jsx("strong",{children:"볼드"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"증감 요인 분석 (Samsung 격차·MoM)"}),n.jsxs("button",{onClick:async()=>{var l;try{o(J=>({...J,monthlyDeltaAnalysis:"⏳ AI 분석 중..."}));const g=await Nt("monthlyDelta",{total:$().total,products:$().products,productsCnty:$().productsCnty,period:e.period||"",unlaunchedMap:((l=$().extra)==null?void 0:l.unlaunchedMap)||{}},j);o(J=>({...J,monthlyDeltaAnalysis:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,monthlyDeltaAnalysis:`[AI 실패: ${g.message}]`}))}},title:"경쟁사(Samsung) 대비 격차 증감 + 전월 대비 증감 요인 AI 분석",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 분석"]})]}),n.jsx("textarea",{value:e.monthlyDeltaAnalysis||"",onChange:l=>o(g=>({...g,monthlyDeltaAnalysis:l.target.value})),rows:16,placeholder:"Samsung 대비 격차 증감 + 전월 대비 증감 요인 분석. 'AI 분석' 버튼으로 자동 생성...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsx("p",{style:{margin:"0 0 14px",fontSize:11,color:"#475569",fontFamily:E},children:"경쟁사(Samsung) 대비 격차 증감과 전월 대비 증감에 영향을 준 수치를 리스트업·정리합니다."})]}),jt&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>S&&S(l=>!l),style:{width:"100%",padding:"10px 0",borderRadius:8,border:"none",cursor:"pointer",background:C?It:"#1E293B",color:C?"#FFFFFF":"#94A3B8",fontSize:12,fontWeight:700,fontFamily:E,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all 0.2s"},children:[n.jsx(_n,{size:13})," ",C?"편집 모드 켜짐 — 끄기":"편집 모드 켜기"]}),n.jsx("div",{style:{background:"#0F172A",border:"1px solid #1E293B",borderRadius:8,padding:"8px 10px",marginBottom:10},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#94A3B8",fontFamily:E,lineHeight:1.6},children:C?n.jsxs(n.Fragment,{children:["✏️ 미리보기에서 텍스트를 ",n.jsx("strong",{style:{color:"#E2E8F0"},children:"직접 클릭해 편집"})," (볼드·색·크기 적용된 상태 그대로).",n.jsx("br",{}),"바깥 클릭 = 저장 · Esc = 취소"]}):n.jsx(n.Fragment,{children:"편집 모드를 켜면 미리보기 텍스트를 직접 클릭해 편집할 수 있어요."})})}),[{label:"GEO 전략 인사이트",field:"totalInsight",type:"totalInsight",data:()=>{var l;return{products:$().products,productsCnty:$().productsCnty,total:$().total,todoText:e.todoText||"",unlaunchedMap:((l=$().extra)==null?void 0:l.unlaunchedMap)||{}}}},{label:"Highlight 인사이트",field:"highlightInsight",toggle:"showHighlightInsight",type:"highlight",data:()=>({products:$().products,weeklyAll:H})},{label:"Citation 범프 인사이트",field:"bumpInsight",toggle:"showBumpInsight",type:"bump",data:()=>({citTouchPointsTrend:f==null?void 0:f.citTouchPointsTrend,citDomainTrend:f==null?void 0:f.citDomainTrend,citTrendMonths:f==null?void 0:f.citTrendMonths,citDomainMonths:f==null?void 0:f.citDomainMonths})},{label:"제품 인사이트",field:"productInsight",toggle:"showProductInsight",type:"product",data:()=>({products:$().products,total:$().total})},{label:"제품 How to Read",field:"productHowToRead",toggle:"showProductHowToRead",type:"howToRead",data:()=>({section:"제품별 GEO Visibility"})},{label:"국가별 인사이트",field:"cntyInsight",toggle:"showCntyInsight",type:"cnty",data:()=>{var l;return{productsCnty:$().productsCnty,unlaunchedMap:((l=$().extra)==null?void 0:l.unlaunchedMap)||{}}}},{label:"국가별 How to Read",field:"cntyHowToRead",toggle:"showCntyHowToRead",type:"howToRead",data:()=>({section:"국가별 GEO Visibility"})},{label:"Citation 인사이트",field:"citationInsight",toggle:"showCitationInsight",type:"citation",data:()=>({citations:$().citations})},{label:"Citation How to Read",field:"citationHowToRead",toggle:"showCitationHowToRead",type:"howToRead",data:()=>({section:"Citation 도메인별 현황"})},{label:"제품별 Citation 인사이트",field:"citPrdInsight",toggle:"showCitPrdInsight",type:"citPrd",data:()=>({citationsCnty:$().citationsCnty})},{label:"제품별 Citation How to Read",field:"citPrdHowToRead",toggle:"showCitPrdHowToRead",type:"howToRead",data:()=>({section:"제품별 Citation"})},{label:"닷컴 인사이트",field:"dotcomInsight",toggle:"showDotcomInsight",type:"dotcom",data:()=>({dotcom:$().dotcom})},{label:"닷컴 How to Read",field:"dotcomHowToRead",toggle:"showDotcomHowToRead",type:"howToRead",data:()=>({section:"닷컴 Citation"})},{label:"Action Plan 인사이트",field:"todoText",type:"todo",data:()=>({products:$().products})}].map(l=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"4px 0"},children:[l.toggle?n.jsx("button",{onClick:()=>o(g=>({...g,[l.toggle]:!g[l.toggle]})),title:"표시 / 숨김",style:{background:e[l.toggle]?It:"#334155",border:"none",borderRadius:7,width:26,height:13,cursor:"pointer",position:"relative",padding:0,flexShrink:0,transition:"background 0.2s"},children:n.jsx("span",{style:{position:"absolute",top:2,left:e[l.toggle]?15:3,width:9,height:9,borderRadius:"50%",background:"#FFFFFF",transition:"left 0.2s"}})}):n.jsx("span",{style:{width:26,flexShrink:0}}),n.jsx("p",{style:{margin:0,flex:1,fontSize:11,color:"#94A3B8",fontFamily:E,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l.label}),n.jsxs("button",{onClick:async()=>{try{o(J=>({...J,[l.field]:"⏳ AI 생성 중..."}));const g=await Nt(l.type,l.data(),j);o(J=>({...J,[l.field]:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,[l.field]:`[AI 실패: ${g.message}]`}))}},title:`${l.label} AI 생성 (결과는 미리보기에 표시)`,style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:10,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3,flexShrink:0},children:[n.jsx(Ot,{size:9})," AI"]})]},l.field)),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0 16px"}})]}),t!=="monthly-report"&&t!=="dashboard"&&!jt&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"GEO 전략 인사이트"}),n.jsxs("button",{onClick:async()=>{var l;try{o(J=>({...J,totalInsight:"⏳ AI 생성 중..."}));const g=await Nt("totalInsight",{products:$().products,productsCnty:$().productsCnty,total:$().total,todoText:e.todoText||"",unlaunchedMap:((l=$().extra)==null?void 0:l.unlaunchedMap)||{}},j);o(J=>({...J,totalInsight:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,totalInsight:`[AI 실패: ${g.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]})]}),n.jsx("textarea",{value:e.totalInsight,onChange:l=>o(g=>({...g,totalInsight:l.target.value})),rows:12,placeholder:"전체 GEO 가시성 카드에 표시할 전략 인사이트를 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 10px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,productInsight:"⏳ AI 생성 중..."}));const l=await Nt("product",{products:$().products,total:$().total},j);o(g=>({...g,productInsight:l}))}catch(l){console.error("[AI]",l),o(g=>({...g,productInsight:`[AI 실패: ${l.message}]

`+ki($().products)}))}},title:"AI 인사이트 자동생성 (Claude)",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showProductInsight:!l.showProductInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductInsight?It:"#1E293B",color:e.showProductInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showProductInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productInsight,onChange:l=>o(g=>({...g,productInsight:l.target.value})),rows:12,placeholder:"제품 섹션 인사이트를 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품 섹션 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,productHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"제품별 GEO Visibility"},j);o(g=>({...g,productHowToRead:l}))}catch{o(l=>({...l,productHowToRead:Si()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showProductHowToRead:!l.showProductHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showProductHowToRead?It:"#1E293B",color:e.showProductHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showProductHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.productHowToRead,onChange:l=>o(g=>({...g,productHowToRead:l.target.value})),rows:4,placeholder:"제품 섹션 How to Read 설명을 입력하세요... (AI 생성 버튼으로 자동 작성 가능)",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 섹션 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{var l;try{o(J=>({...J,cntyInsight:"⏳ AI 생성 중..."}));const g=await Nt("cnty",{productsCnty:$().productsCnty,unlaunchedMap:((l=$().extra)==null?void 0:l.unlaunchedMap)||{}},j);o(J=>({...J,cntyInsight:g}))}catch(g){console.error("[AI]",g),o(J=>({...J,cntyInsight:`[AI 실패: ${g.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showCntyInsight:!l.showCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyInsight?It:"#1E293B",color:e.showCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyInsight,onChange:l=>o(g=>({...g,cntyInsight:l.target.value})),rows:8,placeholder:"국가별 섹션 인사이트를 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,cntyHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"국가별 GEO Visibility"},j);o(g=>({...g,cntyHowToRead:l}))}catch{o(l=>({...l,cntyHowToRead:Fi()}))}},title:"AI How to Read 자동생성",style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showCntyHowToRead:!l.showCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCntyHowToRead?It:"#1E293B",color:e.showCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.cntyHowToRead,onChange:l=>o(g=>({...g,cntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 How to Read 설명을 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"PR Visibility 안내 문구"}),n.jsx("textarea",{value:e.prNotice||"",onChange:l=>o(g=>({...g,prNotice:l.target.value})),rows:4,placeholder:"PR 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["PR 토픽별 설명 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=설명, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicDescsRaw||"",onChange:l=>o(g=>({...g,prTopicDescsRaw:l.target.value})),rows:6,placeholder:`TV=TV/디스플레이 관련 PR 토픽
Audio=사운드바/오디오 관련 PR 토픽`,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsxs("p",{style:{margin:"8px 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["PR 토픽별 대표 프롬프트 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(토픽=프롬프트, 줄 단위)"})]}),n.jsx("textarea",{value:e.prTopicPromptsRaw||"",onChange:l=>o(g=>({...g,prTopicPromptsRaw:l.target.value})),rows:6,placeholder:`TV=Best TV to buy in 2026
Audio=Best soundbar for home theater`,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8,fontSize:11}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"Brand Prompt 이상 점검 안내 문구"}),n.jsx("textarea",{value:e.bpNotice||"",onChange:l=>o(g=>({...g,bpNotice:l.target.value})),rows:4,placeholder:"Brand Prompt 이상 점검 페이지 상단에 표시될 안내 문구를 입력하세요. 비워두면 기본 문구가 사용됩니다.",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Citation 카테고리 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citationInsight:"⏳ AI 생성 중..."}));const l=await Nt("citation",{citations:$().citations},j);o(g=>({...g,citationInsight:l}))}catch(l){console.error("[AI]",l),o(g=>({...g,citationInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showCitationInsight:!l.showCitationInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationInsight?It:"#1E293B",color:e.showCitationInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitationInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationInsight,onChange:l=>o(g=>({...g,citationInsight:l.target.value})),rows:8,placeholder:"Citation 카테고리별 인사이트...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citationHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"Citation 도메인별 현황"},j);o(g=>({...g,citationHowToRead:l}))}catch{o(l=>({...l,citationHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showCitationHowToRead:!l.showCitationHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitationHowToRead?It:"#1E293B",color:e.showCitationHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitationHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citationHowToRead,onChange:l=>o(g=>({...g,citationHowToRead:l.target.value})),rows:4,placeholder:"Citation How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"도메인별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citDomainInsight:"⏳ AI 생성 중..."}));const l=await Nt("citDomain",{citationsCnty:$().citationsCnty},j);o(g=>({...g,citDomainInsight:l}))}catch(l){console.error("[AI]",l),o(g=>({...g,citDomainInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainInsight:!l.showCitDomainInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainInsight?It:"#1E293B",color:e.showCitDomainInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitDomainInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainInsight,onChange:l=>o(g=>({...g,citDomainInsight:l.target.value})),rows:8,placeholder:"도메인별 Citation 인사이트...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"도메인별 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citDomainHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"도메인별 Citation 현황"},j);o(g=>({...g,citDomainHowToRead:l}))}catch{o(l=>({...l,citDomainHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showCitDomainHowToRead:!l.showCitDomainHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitDomainHowToRead?It:"#1E293B",color:e.showCitDomainHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitDomainHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citDomainHowToRead,onChange:l=>o(g=>({...g,citDomainHowToRead:l.target.value})),rows:4,placeholder:"도메인별 How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citCntyInsight:"⏳ AI 생성 중..."}));const l=await Nt("citCnty",{citationsCnty:$().citationsCnty},j);o(g=>({...g,citCntyInsight:l}))}catch(l){console.error("[AI]",l),o(g=>({...g,citCntyInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyInsight:!l.showCitCntyInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyInsight?It:"#1E293B",color:e.showCitCntyInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitCntyInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyInsight,onChange:l=>o(g=>({...g,citCntyInsight:l.target.value})),rows:8,placeholder:"국가별 Citation 인사이트...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citCntyHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"국가별 Citation 도메인"},j);o(g=>({...g,citCntyHowToRead:l}))}catch{o(l=>({...l,citCntyHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showCitCntyHowToRead:!l.showCitCntyHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitCntyHowToRead?It:"#1E293B",color:e.showCitCntyHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitCntyHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citCntyHowToRead,onChange:l=>o(g=>({...g,citCntyHowToRead:l.target.value})),rows:4,placeholder:"국가별 Citation How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품별 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citPrdInsight:"⏳ AI 생성 중..."}));const l=await Nt("citPrd",{citationsCnty:$().citationsCnty},j);o(g=>({...g,citPrdInsight:l}))}catch(l){console.error("[AI]",l),o(g=>({...g,citPrdInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdInsight:!l.showCitPrdInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdInsight?It:"#1E293B",color:e.showCitPrdInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitPrdInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdInsight||"",onChange:l=>o(g=>({...g,citPrdInsight:l.target.value})),rows:8,placeholder:"제품별 Citation 인사이트 — 본부별 인용 패턴, 강점/약점 카테고리 등",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"제품별 Citation How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,citPrdHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"제품별 Citation"},j);o(g=>({...g,citPrdHowToRead:l}))}catch{o(l=>({...l,citPrdHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showCitPrdHowToRead:!l.showCitPrdHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showCitPrdHowToRead?It:"#1E293B",color:e.showCitPrdHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showCitPrdHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.citPrdHowToRead||"",onChange:l=>o(g=>({...g,citPrdHowToRead:l.target.value})),rows:4,placeholder:"제품별 Citation How to Read...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),b.length>0&&(()=>{const l=[...new Set(M.productsCnty.map(g=>g.product))];return n.jsxs("div",{style:{marginBottom:8},children:[n.jsx("p",{style:{margin:"0 0 6px",fontSize:11,color:"#64748B",fontFamily:E},children:"국가별 제품군 표시"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:l.map(g=>{const J=(e.cntyProductFilter||{})[g]!==!1;return n.jsx("button",{onClick:()=>o(Lt=>({...Lt,cntyProductFilter:{...Lt.cntyProductFilter||{},[g]:!J}})),style:{padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",background:J?"#166534":"#1E293B",color:J?"#86EFAC":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:g},g)})})]})})(),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"닷컴 Citation 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,dotcomInsight:"⏳ AI 생성 중..."}));const l=await Nt("dotcom",{dotcom:$().dotcom},j);o(g=>({...g,dotcomInsight:l}))}catch(l){console.error("[AI]",l),o(g=>({...g,dotcomInsight:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showDotcomInsight:!l.showDotcomInsight})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomInsight?It:"#1E293B",color:e.showDotcomInsight?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showDotcomInsight?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomInsight,onChange:l=>o(g=>({...g,dotcomInsight:l.target.value})),rows:8,placeholder:"닷컴 Citation 인사이트를 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"닷컴 How to Read"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,dotcomHowToRead:"⏳ AI 생성 중..."}));const l=await Nt("howToRead",{section:"닷컴 Citation"},j);o(g=>({...g,dotcomHowToRead:l}))}catch{o(g=>({...g,dotcomHowToRead:""}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showDotcomHowToRead:!l.showDotcomHowToRead})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showDotcomHowToRead?It:"#1E293B",color:e.showDotcomHowToRead?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showDotcomHowToRead?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.dotcomHowToRead,onChange:l=>o(g=>({...g,dotcomHowToRead:l.target.value})),rows:4,placeholder:"닷컴 How to Read 설명을 입력하세요...",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsx("div",{style:{height:1,background:"#1E293B",margin:"12px 0"}}),n.jsxs("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:["전사 핵심 과제 노티스 ",n.jsx("span",{style:{color:"#94A3B8"},children:"(다크 박스)"})]}),n.jsx("textarea",{value:e.todoNotice||"",onChange:l=>o(g=>({...g,todoNotice:l.target.value})),rows:3,placeholder:"전사 핵심 과제 노티스를 입력하세요 (비워두면 미표시)",style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:8}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:"Action Plan 인사이트"}),n.jsxs("div",{style:{display:"flex",gap:4},children:[n.jsxs("button",{onClick:async()=>{try{o(g=>({...g,todoText:"⏳ AI 생성 중..."}));const l=await Nt("todo",{products:$().products},j);o(g=>({...g,todoText:l}))}catch(l){console.error("[AI]",l),o(g=>({...g,todoText:`[AI 실패: ${l.message}]`}))}},style:{padding:"2px 6px",borderRadius:4,border:"none",cursor:"pointer",background:"#4F46E5",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:3},children:[n.jsx(Ot,{size:9})," AI 생성"]}),n.jsx("button",{onClick:()=>o(l=>({...l,showTodo:!l.showTodo})),style:{padding:"2px 8px",borderRadius:4,border:"none",cursor:"pointer",background:e.showTodo?It:"#1E293B",color:e.showTodo?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E},children:e.showTodo?"ON":"OFF"})]})]}),n.jsx("textarea",{value:e.todoText,onChange:l=>o(g=>({...g,todoText:l.target.value})),rows:12,placeholder:`Action Plan을 입력하세요...
예: - Citation Optimization 전략 수립
- 구조화 데이터 업데이트`,style:{...Et,resize:"vertical",lineHeight:1.6,marginBottom:4}}),n.jsxs("p",{style:{margin:"0 0 16px",fontSize:11,color:"#475569",fontFamily:E},children:["**텍스트** → ",n.jsx("strong",{children:"볼드"})," · 줄바꿈 지원"]}),n.jsx("div",{style:{height:1,background:"#1E293B",marginBottom:16}})]}),t!=="monthly-report"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:Rn,style:{width:"100%",padding:"9px 0",background:bt?"#14532D":"transparent",border:`1px solid ${bt?"#22C55E44":"#334155"}`,borderRadius:8,fontSize:11,fontWeight:600,color:bt?"#86EFAC":"#64748B",fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s",marginBottom:12},children:bt?n.jsxs(n.Fragment,{children:[n.jsx(to,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(sn,{size:12})," 이메일 HTML 복사"]})}),t!=="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{margin:"0 0 4px",fontSize:11,color:"#64748B",fontFamily:E},children:"수신 이메일 주소"}),n.jsx("input",{type:"email",value:pt,onChange:l=>N(l.target.value),placeholder:"recipient@example.com",style:{...Et,fontSize:11,marginBottom:8}}),n.jsx("button",{onClick:Mn,disabled:et==="sending"||!pt.trim(),style:{width:"100%",padding:"9px 0",borderRadius:8,border:"none",cursor:et==="sending"||!pt.trim()?"not-allowed":"pointer",background:et==="ok"?"#14532D":et==="error"?"#7F1D1D":et==="sending"?"#1E3A5F":pt.trim()?"#1D4ED8":"#1E293B",color:et==="ok"?"#86EFAC":et==="error"?"#FCA5A5":pt.trim()?"#FFFFFF":"#334155",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",justifyContent:"center",gap:5,transition:"all 0.2s"},children:et==="sending"?n.jsxs(n.Fragment,{children:[n.jsx(So,{size:12,style:{animation:"spin 1s linear infinite"}})," 발송 중..."]}):et==="ok"?n.jsxs(n.Fragment,{children:[n.jsx(to,{size:12})," 발송 완료!"]}):et==="error"?n.jsxs(n.Fragment,{children:[n.jsx(To,{size:12})," 발송 실패 — 다시 시도"]}):n.jsxs(n.Fragment,{children:[n.jsx(To,{size:12})," 메일 발송 (KO + EN)"]})})]})]})]}),n.jsx("div",{style:{padding:"10px 14px",borderTop:"1px solid #1E293B"},children:n.jsx("p",{style:{margin:0,fontSize:11,color:"#1E293B",fontFamily:E,lineHeight:1.6},children:"LG 스마트체 · Arial Narrow"})})]})}function Pi({value:t,onChange:e,products:o,productsCnty:r,monthlyVis:a,style:i}){const c=ln.useMemo(()=>qn(o,r,a),[o,r,a]);return!c.length||c.length===1&&c[0]==="Total"?null:n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#475569",...i},children:[n.jsx("span",{style:{fontWeight:600},children:"LLM Model"}),n.jsx("select",{value:t||"Total",onChange:s=>e(s.target.value),style:{padding:"4px 8px",borderRadius:6,border:"1px solid #CBD5E1",fontSize:13,background:"#fff",cursor:"pointer"},children:c.map(s=>n.jsx("option",{value:s,children:s},s))})]})}const ge="monthly-report",an="geo-monthly-report-cache";function Di({meta:t,total:e,products:o,citations:r,dotcom:a,productsCnty:i=[],citationsCnty:c=[],lang:s="ko",weeklyLabels:p,categoryStats:y,stakeholderStats:h,cntyKeys:u=null,llmModel:d,monthlyVis:m}){const k=ct.useRef(null),b=ct.useMemo(()=>co(t,e,o,r,a,s,i,c,{categoryStats:y,stakeholderStats:h,cntyKeys:u,llmModel:d,monthlyVis:m}),[t,e,o,r,a,s,i,c,p,u,d,m]);return ln.useEffect(()=>{const v=k.current;if(!v)return;const w=v.contentDocument||v.contentWindow.document;w.open(),w.write(b),w.close();const x=()=>{try{w.body.style.overflow="hidden",w.documentElement.style.overflow="hidden";const M=w.documentElement.scrollHeight;M&&(v.style.height=M+20+"px")}catch{}};setTimeout(x,150),setTimeout(x,400),setTimeout(x,1e3),setTimeout(x,2e3)},[b]),n.jsx("iframe",{ref:k,title:"newsletter-preview",scrolling:"no",style:{width:"100%",border:"none",minHeight:800,background:"#F1F5F9",overflow:"hidden"},sandbox:"allow-same-origin allow-scripts"})}function Oi({meta:t,total:e,products:o,citations:r,dotcom:a,productsCnty:i=[],citationsCnty:c=[],lang:s="ko",weeklyLabels:p,categoryStats:y,stakeholderStats:h,cntyKeys:u=null,llmModel:d,monthlyVis:m}){const[k,b]=ct.useState(!1),v=ct.useMemo(()=>co(t,e,o,r,a,s,i,c,{categoryStats:y,stakeholderStats:h,cntyKeys:u,llmModel:d,monthlyVis:m}),[t,e,o,r,a,s,i,c,p,y,u,d,m]);async function w(){try{await navigator.clipboard.writeText(v)}catch{const x=document.createElement("textarea");x.value=v,document.body.appendChild(x),x.select(),document.execCommand("copy"),document.body.removeChild(x)}b(!0),setTimeout(()=>b(!1),2500)}return n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{padding:"10px 22px",background:"#0F172A",borderBottom:"1px solid #1E293B",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[n.jsxs("div",{children:[n.jsx("span",{style:{fontSize:11,fontWeight:700,color:"#94A3B8",fontFamily:E},children:"이메일 HTML 코드"}),n.jsx("span",{style:{fontSize:11,color:"#334155",fontFamily:E,marginLeft:10},children:"table 기반 · 인라인 스타일 · 이메일 클라이언트 호환"})]}),n.jsx("button",{onClick:w,style:{padding:"6px 14px",borderRadius:7,border:"none",background:k?"#14532D":It,color:k?"#86EFAC":"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E,cursor:"pointer",display:"flex",alignItems:"center",gap:5,transition:"all 0.2s"},children:k?n.jsxs(n.Fragment,{children:[n.jsx(to,{size:12})," 복사됨!"]}):n.jsxs(n.Fragment,{children:[n.jsx(sn,{size:12})," HTML 복사"]})})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",background:"#0A0F1C"},children:n.jsx("pre",{style:{margin:0,padding:"20px 24px",fontSize:11,lineHeight:1.6,color:"#94A3B8",fontFamily:"'Consolas','Courier New',monospace",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:v})})]})}function Ni(){const t=ct.useRef(br(an)).current,[e,o]=ct.useState({...Ie,...(t==null?void 0:t.metaKo)??(t==null?void 0:t.meta)??{}}),[r,a]=ct.useState({...Ie,...(t==null?void 0:t.metaEn)??{}}),[i,c]=ct.useState((t==null?void 0:t.total)??pr),[s,p]=ct.useState((t==null?void 0:t.products)??ur),[y,h]=ct.useState((t==null?void 0:t.citations)??gr),[u,d]=ct.useState(t!=null&&t.dotcom&&t.dotcom.lg?t.dotcom:hr),[m,k]=ct.useState((t==null?void 0:t.productsCnty)??fr),[b,v]=ct.useState((t==null?void 0:t.citationsCnty)??mr),[w,x]=ct.useState((t==null?void 0:t.weeklyLabels)??null),[M,j]=ct.useState((t==null?void 0:t.weeklyAll)??{}),[D,W]=ct.useState(null),[L,_]=ct.useState(null),[V,G]=ct.useState("preview"),[H,F]=ct.useState("ko"),[I,A]=ct.useState("Total"),[z,K]=ct.useState((t==null?void 0:t.monthlyVis)??[]),[X,Z]=ct.useState([]),[f,Q]=ct.useState(""),[U,gt]=ct.useState(!1),[T,C]=ct.useState(""),[S,O]=ct.useState(null),[P,$]=ct.useState(!0),[mt,St]=ct.useState(()=>Array.isArray(t==null?void 0:t.selectedCountries)?t.selectedCountries:[]),ut=ct.useMemo(()=>{const rt=new Set;return(m||[]).forEach(q=>{q&&q.country&&!/^(ttl|total)$/i.test(q.country)&&rt.add(String(q.country).toUpperCase())}),Array.from(rt).sort()},[m]),Ct=mt.length>0?mt:null,wt=ct.useCallback(rt=>{St(q=>q.includes(rt)?q.filter(dt=>dt!==rt):[...q,rt])},[]),Ft=ct.useCallback(()=>St(ut),[ut]),R=ct.useCallback(()=>St([]),[]);ct.useEffect(()=>{let rt=!1;const q=Ir(e.period)||"3월";async function dt(){var $t,Pt,Dt;try{const Wt=await fetch("/api/tracker-snapshot-v2"),zt=Wt.ok?await Wt.json():null;if(zt!=null&&zt.ok&&((Dt=(Pt=($t=zt.data)==null?void 0:$t.quantitativeGoals)==null?void 0:Pt.rows)!=null&&Dt.length)){const Zt=jo(zt.data,q),Vt=Po(zt.data,q);if(Zt!=null&&Zt.length&&!rt){W(Zt),Vt!=null&&Vt.length&&_(Vt);return}}}catch{}try{const[{parseKPISheet:Wt},zt]=await Promise.all([eo(()=>import("./sheetParser-BGRKNm5Y.js"),[]),eo(()=>import("./xlsx-CaYOwpyI.js").then(jt=>jt.x),__vite__mapDeps([0,1]))]),Zt=`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,Vt=`/gsheets-proxy/spreadsheets/d/1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE/gviz/tq?sheet=${encodeURIComponent("파싱시트")}&tqx=out:csv;reqId:${Zt}&headers=1`,Kt=await fetch(Vt,{cache:"no-store"});if(!Kt.ok)return;const qt=await Kt.text(),fe=zt.read(qt,{type:"string"}),se=fe.Sheets[fe.SheetNames[0]],ke=zt.utils.sheet_to_json(se,{header:1,defval:""}),de=Wt(ke),xe=jo(de,q);if(xe!=null&&xe.length&&!rt){W(xe);const jt=Po(de,q);jt!=null&&jt.length&&_(jt)}}catch{}}return dt(),()=>{rt=!0}},[e.period]);const Y=H==="en"?r:e,lt=H==="en"?a:o,at=ct.useMemo(()=>we(s,m,y,b,H),[s,m,y,b,H]);ct.useEffect(()=>{vr(ge).then(Z)},[]);const bt=ct.useRef(null);function ht(rt,q=2e3){clearTimeout(bt.current),C(rt),bt.current=setTimeout(()=>C(""),q)}ct.useEffect(()=>()=>clearTimeout(bt.current),[]);const pt=ct.useRef(!1);ct.useEffect(()=>{let rt=!1;return De(ge).then(q=>{rt||!q||(pt.current=!0,q.meta&&o(dt=>({...dt,...q.meta})),q.total&&c(dt=>({...dt,...q.total})),q.citations&&h(q.citations),q.dotcom&&d(dt=>({...dt,...q.dotcom})),q.productsCnty&&k(q.productsCnty),q.citationsCnty&&v(q.citationsCnty),q.weeklyLabels&&x(q.weeklyLabels),q.weeklyAll&&j(dt=>({...dt,...q.weeklyAll})),q.monthlyVis&&K(q.monthlyVis),q.productsPartial?p(q.productsPartial.map(dt=>{var Dt;const $t=((Dt=q.weeklyMap)==null?void 0:Dt[dt.id])||[],Pt=dt.vsComp>0?dt.score/dt.vsComp*100:100;return{...dt,weekly:$t,monthly:[],compRatio:Math.round(Pt),status:Pt>=100?"lead":Pt>=80?"behind":"critical"}})):q.weeklyMap&&p(dt=>dt.map($t=>{var Dt;const Pt=(Dt=q.weeklyMap)==null?void 0:Dt[$t.id];return Pt?{...$t,weekly:Pt}:$t})))}),()=>{rt=!0}},[]),ct.useEffect(()=>{xr(an,{metaKo:e,metaEn:r,total:i,products:s,citations:y,dotcom:u,productsCnty:m,citationsCnty:b,weeklyLabels:w,weeklyAll:M,selectedCountries:mt})},[e,r,i,s,y,u,m,b,w,M,mt]);async function N(){if(!S)return;const q=await kr(ge,S,{metaKo:e,metaEn:r,total:i,products:s,citations:y,dotcom:u,productsCnty:m,citationsCnty:b,weeklyLabels:w,weeklyAll:M});q&&Z(q),ht(q?"저장 완료!":"저장 실패")}async function et(){var dt;const rt=f.trim()||`${Y.period||"Untitled"} — ${new Date().toLocaleString("ko-KR")}`,q=await Cr(ge,rt,{metaKo:e,metaEn:r,total:i,products:s,citations:y,dotcom:u,productsCnty:m,citationsCnty:b,weeklyLabels:w,weeklyAll:M});q&&(Z(q),Q(""),O(((dt=q[0])==null?void 0:dt.ts)||null)),ht(q?"새로 저장 완료!":"저장 실패")}async function xt(rt){const q=await wr(ge,rt.ts);if(!q||q.data==null){C("불러오기 실패 — 저장본을 찾을 수 없습니다");return}const dt=q.data;o({...Ie,...dt.metaKo||dt.meta||{}}),a({...Ie,...dt.metaEn||{}}),dt.total&&c(dt.total),dt.products&&p(dt.products),dt.citations&&h(dt.citations),dt.dotcom&&d(dt.dotcom),dt.productsCnty&&k(dt.productsCnty),dt.citationsCnty&&v(dt.citationsCnty),dt.weeklyLabels&&x(dt.weeklyLabels),dt.weeklyAll&&j(dt.weeklyAll),O(rt.ts),ht(`"${rt.name}" 불러옴`)}async function Tt(rt){const q=X[rt];if(!q)return;const dt=await Sr(ge,q.ts);dt&&Z(dt),S===q.ts&&O(null)}return n.jsxs("div",{style:{display:"flex",height:"100vh",background:"#0A0F1C",fontFamily:E},children:[P&&n.jsx(Mi,{mode:ge,meta:Y,setMeta:lt,metaKo:e,setMetaKo:o,metaEn:r,setMetaEn:a,total:i,setTotal:c,products:s,setProducts:p,citations:y,setCitations:h,dotcom:u,setDotcom:d,productsCnty:m,setProductsCnty:k,citationsCnty:b,setCitationsCnty:v,resolved:at,previewLang:H,setPreviewLang:F,snapshots:X,setSnapshots:Z,setWeeklyLabels:x,setWeeklyAll:j,weeklyLabels:w,weeklyAll:M,generateHTML:co}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[n.jsxs("div",{style:{height:48,borderBottom:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",gap:3,alignItems:"center"},children:[n.jsx("button",{onClick:()=>$(rt=>!rt),title:P?"패널 닫기":"패널 열기",style:{padding:"4px 6px",borderRadius:6,border:"none",cursor:"pointer",background:"transparent",color:"#94A3B8",display:"flex",alignItems:"center",marginRight:4},children:P?n.jsx(zn,{size:16}):n.jsx(Gn,{size:16})}),[{key:"preview-ko",tab:"preview",lang:"ko",label:"월간보고서 (KO)"},{key:"preview-en",tab:"preview",lang:"en",label:"월간보고서 (EN)"},{key:"code",tab:"code",lang:null,label:"HTML 내보내기"}].map(({key:rt,tab:q,lang:dt,label:$t})=>{const Pt=q==="code"?V==="code":V==="preview"&&H===dt;return n.jsx("button",{onClick:()=>{G(q),dt&&F(dt)},style:{padding:"5px 12px",borderRadius:7,border:"none",background:Pt?"#1E293B":"transparent",color:Pt?"#FFFFFF":"#475569",fontSize:11,fontWeight:Pt?700:500,fontFamily:E,cursor:"pointer"},children:$t},rt)})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[T&&n.jsx("span",{style:{fontSize:11,color:"#22C55E",fontFamily:E},children:T}),n.jsxs("button",{onClick:N,disabled:!S,title:S?"현재 버전에 덮어쓰기":"불러온 버전이 없습니다",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:S?"pointer":"default",background:S?"#1D4ED8":"#1E293B",color:S?"#FFFFFF":"#475569",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:4,opacity:S?1:.5},children:[n.jsx(Eo,{size:11})," 저장"]}),n.jsx("input",{value:f,onChange:rt=>Q(rt.target.value),placeholder:"버전 이름...",onKeyDown:rt=>rt.key==="Enter"&&et(),style:{width:120,background:"#1E293B",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",fontSize:11,color:"#E2E8F0",fontFamily:E,outline:"none"}}),n.jsxs("button",{onClick:et,title:"새 버전으로 저장",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:"#166534",color:"#86EFAC",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:4},children:[n.jsx(Eo,{size:11})," 새로 저장"]}),n.jsxs("div",{style:{position:"relative"},children:[n.jsxs("button",{onClick:()=>gt(!U),title:"저장된 버전 불러오기",style:{padding:"4px 10px",borderRadius:6,border:"none",cursor:"pointer",background:U?"#334155":"#1E293B",color:"#E2E8F0",fontSize:11,fontWeight:700,fontFamily:E,display:"flex",alignItems:"center",gap:4},children:[n.jsx(Un,{size:11})," 불러오기 ",X.length>0&&n.jsxs("span",{style:{fontSize:11,color:"#94A3B8"},children:["(",X.length,")"]})]}),U&&n.jsx("div",{style:{position:"absolute",top:32,right:0,width:320,maxHeight:360,overflowY:"auto",background:"#1E293B",border:"1px solid #334155",borderRadius:10,zIndex:100,padding:8,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},onClick:rt=>rt.stopPropagation(),children:X.length===0?n.jsx("p",{style:{margin:0,padding:12,fontSize:11,color:"#64748B",fontFamily:E,textAlign:"center"},children:"저장된 버전이 없습니다"}):X.map((rt,q)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"8px 10px",borderRadius:7,marginBottom:2,background:S===rt.ts?"#1E3A5F":"#0F172A",border:S===rt.ts?"1px solid #3B82F6":"1px solid transparent"},children:[n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("p",{style:{margin:0,fontSize:11,fontWeight:700,color:"#E2E8F0",fontFamily:E,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:rt.name}),n.jsx("p",{style:{margin:0,fontSize:11,color:"#64748B",fontFamily:E},children:new Date(rt.ts).toLocaleString("ko-KR")})]}),n.jsx("button",{onClick:()=>{xt(rt),gt(!1)},style:{padding:"3px 8px",borderRadius:5,border:"none",cursor:"pointer",background:"#166534",color:"#FFFFFF",fontSize:11,fontWeight:700,fontFamily:E},children:"적용"}),n.jsx("button",{onClick:()=>Tt(q),style:{padding:"3px 5px",borderRadius:5,border:"none",cursor:"pointer",background:"#7F1D1D",color:"#FCA5A5",fontSize:11,display:"flex"},children:n.jsx(Hn,{size:10})})]},rt.ts))})]})]})]}),ut.length>0&&n.jsxs("div",{style:{background:"#0F172A",borderBottom:"1px solid #1E293B",padding:"10px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[n.jsx("span",{style:{color:"#94A3B8",fontSize:12,fontWeight:600,marginRight:4},children:"국가 필터"}),ut.map(rt=>{const q=mt.includes(rt);return n.jsx("button",{onClick:()=>wt(rt),style:{padding:"4px 10px",borderRadius:6,border:"1px solid "+(q?"#22C55E":"#334155"),background:q?"#16A34A":"#1E293B",color:q?"#fff":"#CBD5E1",fontSize:12,fontWeight:600,cursor:"pointer"},children:rt},rt)}),n.jsx("button",{onClick:Ft,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#60A5FA",fontSize:12,cursor:"pointer"},children:"전체"}),n.jsx("button",{onClick:R,style:{padding:"4px 10px",borderRadius:6,border:"1px solid #334155",background:"#0F172A",color:"#94A3B8",fontSize:12,cursor:"pointer"},children:"해제"}),n.jsx("span",{style:{color:"#64748B",fontSize:11,marginLeft:"auto"},children:mt.length===0?"전체 국가":`${mt.length}개 선택`})]}),V==="preview"?n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"28px 36px",background:"linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)"},children:n.jsxs("div",{style:{maxWidth:960,margin:"0 auto"},children:[n.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12,padding:"6px 12px",background:"#F8FAFC",borderRadius:6},children:n.jsx(Pi,{value:I,onChange:A,products:at.products,productsCnty:at.productsCnty,monthlyVis:z})}),n.jsx(Di,{meta:Y,total:i,products:at.products,citations:at.citations,dotcom:u,productsCnty:at.productsCnty,citationsCnty:at.citationsCnty,lang:H,weeklyLabels:w,categoryStats:D,stakeholderStats:L,cntyKeys:Ct,llmModel:I,monthlyVis:z})]})}):n.jsx(Oi,{meta:Y,total:i,products:at.products,citations:at.citations,dotcom:u,productsCnty:at.productsCnty,citationsCnty:at.citationsCnty,lang:H,weeklyLabels:w,categoryStats:D,stakeholderStats:L,cntyKeys:Ct,llmModel:I,monthlyVis:z}),n.jsx("div",{style:{height:28,borderTop:"1px solid #1E293B",background:"rgba(15,23,42,0.95)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 16px",flexShrink:0},children:n.jsxs("span",{style:{fontSize:10,color:"#475569",fontFamily:E},children:["v","3.1.9"]})})]})]})}Vn.createRoot(document.getElementById("root")).render(n.jsx(Ni,{}));
