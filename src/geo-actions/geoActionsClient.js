"use strict";
(function boot(){
  const D = window.GEO_DATA;
  if(!D){ document.getElementById("main").innerHTML = '<div class="card empty">데이터를 읽지 못함</div>'; return; }
  App(D);
})();

function App(D){
const $ = (s,el=document)=>el.querySelector(s);
const $$ = (s,el=document)=>[...el.querySelectorAll(s)];
const esc = v => String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt = n => (n??0).toLocaleString("ko-KR");
const DIM = D.dims, C = DIM.countries, CN = DIM.countryNames;
const PRODS = ["TV","냉장고","세탁기","에어컨"];
const TIMINGS = DIM.timings;                       // 선행 · 1차 · 2차 · 중장기 · 상시
const PHASE_DESC = {"선행":"다른 과제의 전제 조건을 먼저 갖춤","1차":"자체 실행 — 원천·lg.com·피드","2차":"외부 채널 협업 — 리뷰·리테일·매체","중장기":"제품·조직·투자 변경","상시":"정기 모니터링"};
const ACT = Object.fromEntries(D.activities.map(a=>[a.aid,a]));
const TOP = Object.fromEntries(D.topics.map(t=>[t.tkey,t]));
const GRP = Object.fromEntries(D.groups.map(g=>[g.gkey,g]));
const ROW = Object.fromEntries(D.rows.map(r=>[r.id,r]));
const who = r => r.ownerGroup==="법인" ? "법인 "+r.ownerSub : r.owner;
D.rows.forEach(r=>{ r._q=[r.id,r.task,ACT[r.aid].name,r.topic,r.owner,r.collab.join(" "),r.output,r.precond,r.note,r.countryRaw].join(" ").toLowerCase(); });
D.groups.forEach(g=>{ const rs=g.rows.map(id=>ROW[id]); g.org=rs[0].ownerGroup; g.whos=[...new Set(rs.map(who))]; });
const DEPS = {}; D.groups.forEach(g=>g.blockers.forEach(b=>{(DEPS[b]=DEPS[b]||[]).push(g.gkey)}));
const shortTopic = t => t.replace(/^([A-Z]|P\d)\.\s*/,"$1. ").replace(/\s*\(.*\)$/,"");

/* ── 진척 상태 ──
   서버 게시본(/admin/geo-actions): window.GEO_PROGRESS_API 가 있으면 팀 공용 진척을 서버에 저장.
   아티팩트·내려받은 파일: 브라우저 저장(localStorage, 실패 시 메모리). 키·CSV 형식은 이전 판과 동일. */
const API = window.GEO_PROGRESS_API || null;
const SAVE_NOTE = API ? "팀 공용 — 서버에 저장됨" : "이 브라우저에만 저장됨";
const PKEY = "geo-dash-progress-v1";
let PROG = {}, storageOk = true;
if(API) PROG = window.GEO_PROGRESS || {};
else { try{ PROG = JSON.parse(localStorage.getItem(PKEY)||"{}")||{}; }catch(e){ storageOk=false; PROG={}; } }
const dirty = new Set(); let flushT = null;
function saveProg(ids){
  if(!API){ try{ localStorage.setItem(PKEY, JSON.stringify(PROG)); storageOk=true; }catch(e){ storageOk=false; } return; }
  (ids||[]).forEach(id=>dirty.add(id)); clearTimeout(flushT); flushT=setTimeout(flushProg,400); }
function flushProg(){
  const ids=[...dirty]; dirty.clear(); if(!ids.length) return;
  const items=ids.map(id=>({id, s:stOf(id), m:(PROG[id]||{}).m||""}));
  fetch(API,{method:"PUT",credentials:"same-origin",headers:{"Content-Type":"application/json","X-Requested-With":"fetch"},body:JSON.stringify({items})})
    .then(r=>r.json().then(j=>{ if(!r.ok||!j.ok) throw new Error(j.error||("HTTP "+r.status)); }))
    .catch(e=>{ ids.forEach(id=>dirty.add(id)); toast(`서버 저장 실패 — ${e.message}. 잠시 후 다시 바꾸면 함께 저장함`); }); }
const stOf = id => (PROG[id]&&PROG[id].s)||"미착수";
function setProg(id, patch){ const p=PROG[id]||{s:"미착수",m:""}; Object.assign(p,patch,{t:new Date().toISOString().slice(0,16).replace("T"," ")}); if(p.s==="미착수"&&!p.m) delete PROG[id]; else PROG[id]=p; saveProg([id]); }
function gStatus(g){ const ss=g.rows.map(stOf); if(ss.every(s=>s==="완료")) return "완료"; if(ss.some(s=>s!=="미착수")) return "진행"; return "미착수"; }
function tally(ids){ const o={d:0,p:0,n:ids.length}; ids.forEach(id=>{ const s=stOf(id); if(s==="완료") o.d++; else if(s==="진행") o.p++; }); return o; }
const pbar = t => `<div class="pbar"><i class="d" style="width:${t.n?t.d/t.n*100:0}%"></i><i class="p" style="width:${t.n?t.p/t.n*100:0}%"></i></div>`;
const pctTxt = t => t.n ? Math.round(t.d/t.n*100)+"%" : "-";

/* ── 화면 상태 (주소창 반영) ── */
const VIEWS = [["home","한눈에","무엇을·왜·언제·누가"],["tasks","할 일","과제 찾기·진척 입력"],["track","진척·성과","완료율·목표·기준"]];
const FK = ["product","timing","org","country","status","topic","q","ready"];
const S = {view:"home", f:{}, by:"timing", sel:""};
(function readUrl(){ let u; try{ u=new URLSearchParams(location.search); }catch(e){ u=new URLSearchParams(); }
  if(VIEWS.some(v=>v[0]===u.get("view"))) S.view=u.get("view");
  FK.forEach(k=>{ if(u.get(k)) S.f[k]=u.get(k); });
  if(["timing","topic","org"].includes(u.get("by"))) S.by=u.get("by");
  if(u.get("sel")&&GRP[u.get("sel")]) S.sel=u.get("sel"); })();
function writeUrl(){ const u=new URLSearchParams(); u.set("view",S.view);
  if(S.view==="tasks"){ FK.forEach(k=>{ if(S.f[k]) u.set(k,S.f[k]); }); if(S.by!=="timing") u.set("by",S.by); }
  if(S.sel) u.set("sel",S.sel);
  try{ history.replaceState(null,"","?"+u.toString()); }catch(e){ /* 샌드박스에서 주소 변경 불가 — 화면 상태만 유지 */ } }

/* ── 필터 ── */
function orgMatch(r,v){
  if(v.startsWith("g:")) return r.ownerGroup===v.slice(2);
  if(v.startsWith("r:")) return r.ownerGroup==="법인" && r.ownerSub===v.slice(2);
  if(v.startsWith("o:")) return r.owner===v.slice(2);
  return true; }
function rowPass(r,f=S.f){
  if(f.product && r.product!==f.product) return false;
  if(f.timing && r.timing!==f.timing) return false;
  if(f.org && !orgMatch(r,f.org)) return false;
  if(f.country && !r.countries.includes(f.country)) return false;
  if(f.topic && r.tkey!==f.topic) return false;
  if(f.q){ const w=f.q.toLowerCase().split(/\s+/).filter(Boolean); if(!w.every(x=>r._q.includes(x))) return false; }
  return true; }
const pending = g => g.blockers.filter(b=>gStatus(GRP[b])!=="완료");
function groupPass(g,f=S.f){
  if(f.status && gStatus(g)!==f.status) return false;
  if(f.ready && (gStatus(g)==="완료" || pending(g).length)) return false;
  return true; }
function filteredGroups(){ const m=new Map();
  D.rows.forEach(r=>{ if(!rowPass(r)) return; if(!m.has(r.gkey)) m.set(r.gkey,[]); m.get(r.gkey).push(r); });
  return [...m.entries()].map(([k,rows])=>({g:GRP[k],rows})).filter(x=>groupPass(x.g)); }
function goTasks(f){ S.view="tasks"; S.f=Object.assign({},f); render(); window.scrollTo(0,0); }

/* ── 공통 UI ── */
const tip=$("#tip");
document.addEventListener("mousemove",e=>{ const t=e.target.closest("[data-tip]"); if(!t){ tip.style.display="none"; return; }
  tip.textContent=t.dataset.tip; tip.style.display="block";
  tip.style.left=Math.min(e.clientX+14,innerWidth-tip.offsetWidth-8)+"px"; tip.style.top=Math.min(e.clientY+14,innerHeight-tip.offsetHeight-8)+"px"; });
function toast(msg){ let el=$("#toast"); if(!el){ el=document.createElement("div"); el.id="toast"; el.className="toast"; document.body.appendChild(el); }
  el.textContent=msg; el.hidden=false; clearTimeout(el._t); el._t=setTimeout(()=>el.hidden=true,4000); }
const today=()=>new Date().toISOString().slice(0,10);
function csvDownload(name, header, lines){
  const q=v=>{ v=v==null?"":String(v); return /[",\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v; };
  const txt="﻿"+[header,...lines].map(l=>l.map(q).join(",")).join("\r\n");
  if(window.claude && typeof window.claude.use==="function"){
    window.claude.use("downloads").then(dl=>{ if(!dl) throw new Error("no"); return dl.save({filename:name,data:txt}); })
      .then(()=>toast(`${name} 저장함`)).catch(()=>toast("파일 저장이 취소되었거나 이 화면에서 지원되지 않음"));
    return; }
  try{ const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([txt],{type:"text/csv;charset=utf-8"})); a.download=name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),2000); toast(`${name} 저장을 요청함`); }
  catch(e){ toast("이 화면에서는 파일 저장이 막혀 있음"); } }
function parseCsv(txt){ txt=txt.replace(/^﻿/,""); const out=[]; let row=[],f="",q=false;
  for(let i=0;i<txt.length;i++){ const c=txt[i];
    if(q){ if(c==='"'){ if(txt[i+1]==='"'){f+='"';i++;} else q=false; } else f+=c; }
    else if(c==='"') q=true; else if(c===","){row.push(f);f="";} else if(c==="\n"){row.push(f);out.push(row);row=[];f="";} else if(c!=="\r") f+=c; }
  if(f||row.length){row.push(f);out.push(row);} return out; }
function gapInfo(t){ const s=t.gap||""; const m=s.match(/[−\-+]\d+(?:\.\d+)?%p/); const neg=/부정/.test(s);
  const v=m?Math.abs(parseFloat(m[0].replace("−","-"))):null;
  return {txt:s, big:m?m[0]:s, neg, cls: neg?"neg": v==null?"s1": v>=50?"s3": v>=30?"s2":"s1"}; }

/* ── 상단 탭 ── */
function renderNav(){ $("#nav").innerHTML = VIEWS.map(([k,b,s])=>`<button data-v="${k}" ${S.view===k?'aria-current="page"':""}><b>${b}</b><span>${s}</span></button>`).join("");
  $$("#nav button").forEach(b=>b.onclick=()=>{ S.view=b.dataset.v; render(); window.scrollTo(0,0); }); }

/* ═════════ 한눈에 ═════════ */
function viewHome(){
  const allIds=D.rows.map(r=>r.id), T=tally(allIds);
  const prodTopics=D.topics.filter(t=>!t.common).length;
  const R=62, CIRC=2*Math.PI*R, dLen=T.d/T.n*CIRC, pLen=T.p/T.n*CIRC;
  let h=`<section class="sec"><div class="intro"><div>
    <div class="kick">이 대시보드가 답하는 것</div>
    <p class="say">AI 답변에서 LG가 경쟁사에 밀리는 <b>${PRODS.length}개 제품 · 열세 주제 ${prodTopics}개</b>와 공통 과제 ${D.topics.length-prodTopics}개를 개선하기 위해, <b>${fmt(D.groups.length)}개 세부과제</b>를 <b>${C.length}개국</b>에서 <b>${fmt(D.rows.length)}건</b>으로 나눠 실행함.</p>
    <div class="nums"><div><b class="num">${D.activities.length}</b><span>Activity (과제 묶음)</span></div><div><b class="num">${fmt(D.groups.length)}</b><span>세부과제 (할 일)</span></div><div><b class="num">${fmt(D.rows.length)}</b><span>국가 실행 건</span></div><div><b class="num">${C.length}</b><span>대상 국가</span></div></div>
  </div><div class="ring">
    <svg viewBox="0 0 160 160" role="img" aria-label="완료율 ${pctTxt(T)}"><circle cx="80" cy="80" r="${R}" fill="none" stroke="var(--hero-line)" stroke-width="14"/>
      <circle cx="80" cy="80" r="${R}" fill="none" stroke="var(--done)" stroke-width="14" stroke-dasharray="${dLen} ${CIRC}" transform="rotate(-90 80 80)"/>
      <circle cx="80" cy="80" r="${R}" fill="none" stroke="var(--doing)" stroke-width="14" stroke-dasharray="${pLen} ${CIRC}" stroke-dashoffset="${-dLen}" transform="rotate(-90 80 80)"/>
      <text x="80" y="80" text-anchor="middle" font-size="34" font-weight="700" fill="var(--hero-num)" letter-spacing="-1.5">${pctTxt(T)}</text>
      <text x="80" y="102" text-anchor="middle" font-size="12" fill="var(--hero-ink-2)">완료 (국가 실행 건)</text></svg>
    <div class="lg"><span><i class="dot" style="background:var(--done)"></i>완료 ${fmt(T.d)}</span><span><i class="dot" style="background:var(--doing)"></i>진행 ${fmt(T.p)}</span><span><i class="dot" style="background:var(--hero-line)"></i>미착수 ${fmt(T.n-T.d-T.p)}</span></div>
  </div></div></section>`;

  // 언제 — 실행 순서
  const phases=TIMINGS.filter(t=>t!=="상시");
  h+=`<section class="sec"><div class="sec-h"><span class="q">언제</span><h2>실행 순서</h2><p>왼쪽부터 차례로 진행함. 단계를 누르면 그 시점의 할 일 목록으로 이동함.</p></div><div class="road">`;
  phases.forEach((tm,i)=>{ const gs=D.groups.filter(g=>g.timing===tm); const ids=gs.flatMap(g=>g.rows); const t=tally(ids);
    const byOrg={}; ids.forEach(id=>{ const k=ROW[id].ownerGroup; byOrg[k]=(byOrg[k]||0)+1; });
    const top3=Object.entries(byOrg).sort((a,b)=>b[1]-a[1]).slice(0,3);
    const waiting=gs.filter(g=>pending(g).length).length;
    h+=`<button class="ph ${i===0?"first":""}" data-go-timing="${tm}"><div class="no">STEP ${i+1}</div><h3>${tm}</h3><div class="desc">${PHASE_DESC[tm]}</div>
      <div class="big num">${fmt(gs.length)}<small>세부과제</small></div><div class="sub">국가 실행 ${fmt(ids.length)}건 · 완료 ${pctTxt(t)}</div>${pbar(t)}
      <ul>${top3.map(([k,v])=>`<li><span>${esc(k)}</span><span class="num">${fmt(v)}건</span></li>`).join("")}</ul>
      ${waiting?`<div class="warn">앞 과제 완료를 기다리는 세부과제 ${waiting}개</div>`:""}</button>`; });
  const ag=D.groups.filter(g=>g.timing==="상시");
  h+=`</div><button class="always" data-go-timing="상시"><b>상시</b><span>${PHASE_DESC["상시"]} — 세부과제 ${ag.length}개, 전 기간 동안 반복</span></button></section>`;

  // 왜 — 열세 주제 지도
  h+=`<section class="sec"><div class="sec-h"><span class="q">왜</span><h2>열세 주제와 Gap</h2><p>제품별로 AI 답변에서 밀리는 주제임. 왼쪽 띠 색이 진할수록 Gap이 큼. 주제를 누르면 해당 주제의 할 일과 목표를 봄.</p></div><div class="tmap">`;
  const tileOf = t=>{ const gi=gapInfo(t); const gs=D.groups.filter(g=>g.tkey===t.tkey); const tt=tally(gs.flatMap(g=>g.rows));
    return `<button class="tile ${t.common?"s1":gi.cls}" data-go-topic="${esc(t.tkey)}" ${gi.txt?`data-tip="${esc(gi.txt)}"`:""}>
      <span class="tn">${esc(shortTopic(t.topic))}</span>
      ${t.common?`<span class="tc">${esc(ACT[t.aids[0]].purpose)}</span>`:`<span class="tg num" ${gi.big.length>10?'style="font-size:14px;letter-spacing:-.3px"':""}>${esc(gi.big)}<small>${gi.neg?"부정률":"Gap"}</small></span><span class="tc">원인: ${esc(t.causeText||"-")}</span>`}
      <span class="tf"><span>세부과제 ${gs.length}</span><span>완료 ${pctTxt(tt)}</span></span>${pbar(tt)}</button>`; };
  PRODS.forEach(p=>{ const ts=D.topics.filter(t=>t.product===p);
    h+=`<div class="trow"><div class="tlab"><b>${esc(p)}</b><span>열세 주제 ${ts.length}개</span></div><div class="tiles">${ts.map(tileOf).join("")}</div></div>`; });
  const cs=D.topics.filter(t=>t.common);
  h+=`<div class="trow"><div class="tlab"><b>공통</b><span>4개 제품 공통</span></div><div class="tiles">${cs.map(tileOf).join("")}</div></div></div>
    <div class="legend"><span><i style="background:var(--crit)"></i>Gap 50%p 이상 · 부정률 열세</span><span><i style="background:var(--behind)"></i>30~50%p</span><span><i style="background:var(--ink-4)"></i>30%p 미만</span><span>Gap 표기는 엑셀 원문 그대로 (− = 경쟁사 대비 열세)</span></div></section>`;

  // 누가 / 어디서
  const orgRows={}; D.rows.forEach(r=>{ orgRows[r.ownerGroup]=(orgRows[r.ownerGroup]||0)+1; });
  const orgG={}; D.groups.forEach(g=>{ orgG[g.org]=(orgG[g.org]||0)+1; });
  const orgs=DIM.ownerGroups.filter(o=>orgRows[o]).sort((a,b)=>orgRows[b]-orgRows[a]); const mx=Math.max(...orgs.map(o=>orgRows[o]));
  h+=`<section class="sec two"><div><div class="sec-h"><span class="q">누가</span><h2>주관 조직</h2><p>막대 = 맡은 국가 실행 건수. 누르면 그 조직의 할 일만 봄.</p></div><div class="card hb">`+
    orgs.map(o=>`<button data-go-org="g:${esc(o)}"><span class="nm">${esc(o)}</span><span class="track"><span class="fill ${o==="사업본부"?"src":""}" style="display:block;width:${orgRows[o]/mx*100}%"></span></span><span class="v num"><b>${fmt(orgRows[o])}</b>건 · ${Math.round(orgRows[o]/D.rows.length*100)}%</span></button>`).join("")+
    `<p class="hint" style="margin:8px 4px 0">법인 = 국가별 현지화·게시·리뷰·PR 담당. 사업본부 = 원천 근거(상품기획·품질·개발)·글로벌 콘텐츠.</p></div></div>`;
  h+=`<div><div class="sec-h"><span class="q">어디서</span><h2>대상 국가</h2><p>국가별 실행 건수와 완료율. 누르면 그 국가의 할 일만 봄.</p></div><div class="ctry">`+
    C.map(c=>{ const ids=D.rows.filter(r=>r.countries.includes(c)).map(r=>r.id); const t=tally(ids);
      const comp=PRODS.filter(p=>D.competitors[p]&&D.competitors[p][c]).map(p=>`${p} ${D.competitors[p][c]}`).join(" · ");
      return `<button class="ct" data-go-country="${c}" data-tip="1위 경쟁사 — ${esc(comp)}"><span class="rg">${esc(DIM.regions[c])}</span><span class="cc">${c}</span><span class="cn">${esc(CN[c])}</span><div class="cv"><b class="num">${fmt(ids.length)}</b>건 · 완료 ${pctTxt(t)}</div>${pbar(t)}</button>`; }).join("")+
    `</div><p class="hint" style="margin-top:8px">본사 공통 과제는 10개국 모두에 포함해 셈. 국가 위에 마우스를 올리면 제품별 1위 경쟁사가 보임.</p></div></section>`;
  $("#main").innerHTML=h;
  $$("[data-go-timing]").forEach(b=>b.onclick=()=>goTasks({timing:b.dataset.goTiming}));
  $$("[data-go-topic]").forEach(b=>b.onclick=()=>{ S.by="timing"; goTasks({topic:b.dataset.goTopic}); });
  $$("[data-go-org]").forEach(b=>b.onclick=()=>goTasks({org:b.dataset.goOrg}));
  $$("[data-go-country]").forEach(b=>b.onclick=()=>goTasks({country:b.dataset.goCountry}));
}

/* ═════════ 할 일 ═════════ */
function orgOptions(){
  const owners={}; D.rows.forEach(r=>{ if(r.ownerGroup!=="법인") (owners[r.ownerGroup]=owners[r.ownerGroup]||new Set()).add(r.owner); });
  let o='<option value="">전체 조직</option>';
  DIM.ownerGroups.forEach(g=>{ o+=`<optgroup label="${esc(g)}"><option value="g:${esc(g)}">${esc(g)} 전체</option>`;
    if(g==="법인") DIM.corpRoles.forEach(s=>o+=`<option value="r:${esc(s)}">법인 · ${esc(s)}</option>`);
    else { const l=[...(owners[g]||[])].sort(); if(l.length>1) l.forEach(x=>o+=`<option value="o:${esc(x)}">${esc(x)}</option>`); }
    o+="</optgroup>"; });
  return o; }
function chipRow(label,key,vals,lab=v=>v,countFn){
  return `<div class="frow"><b>${label}</b><div class="chips"><button class="chip" data-fk="${key}" data-fv="" aria-pressed="${!S.f[key]}">전체</button>${
    vals.map(v=>`<button class="chip" data-fk="${key}" data-fv="${esc(v)}" aria-pressed="${S.f[key]===v}">${esc(lab(v))}${countFn?`<small>${countFn(v)}</small>`:""}</button>`).join("")}</div></div>`; }
function needLine(g){
  const pd=pending(g);
  if(g.blockers.length && !pd.length) return `<div class="need ok"><i>시작 가능</i><span>먼저 끝나야 하는 과제 ${g.blockers.length}개 모두 완료</span></div>`;
  if(pd.length){ const b=GRP[pd[0]]; return `<div class="need"><i>선행 대기</i><span>${esc(b.gid)} ${esc(b.task.slice(0,48))}${b.task.length>48?"…":""}${pd.length>1?` 외 ${pd.length-1}개`:""} 완료 후</span></div>`; }
  if(g.precond) return `<div class="need"><i>조건</i><span>${esc(g.precond)}</span></div>`;
  return ""; }
function card(x){
  const g=x.g, st=gStatus(g), rows=g.rows.map(id=>ROW[id]);
  const multi=rows.length>1, done=rows.filter(r=>stOf(r.id)==="완료").length;
  const ctry = g.scope==="hq" ? (g.countries.length===C.length?`<span>본사 · 10개국 공통</span>`:`<span>본사 · ${g.countries.map(c=>`<span class="cc">${c}</span>`).join("")}</span>`)
    : `<span>${rows.map(r=>{ const s=stOf(r.id); return `<span class="cc ${s==="완료"?"d":s==="진행"?"p":""}">${esc(r.countries[0]||r.countryRaw)}</span>`; }).join("")}</span>`;
  const unlock=(DEPS[g.gkey]||[]).length;
  const gb=g.gubun==="조건부 QW"?"g-cond":"";
  return `<article class="task ${st==="완료"?"is-done":""}" data-g="${esc(g.gkey)}">
    ${multi?`<span class="st multi s-${st}" data-tip="${rows.length}건 중 ${done}건 완료">${st==="완료"?"":done+"/"+rows.length}</span>`:`<button class="st s-${st}" data-cyc="${esc(rows[0].id)}" aria-label="진척: ${st} — 눌러서 바꾸기" data-tip="${st} · 누르면 다음 상태로"></button>`}
    <div><div class="ttl">${esc(g.task)}</div>
      <div class="tmeta"><span>담당 <b>${esc(g.whos.join(" · "))}</b></span>${ctry}<span>산출물 <b>${esc(g.output||"-")}</b></span>${unlock?`<span>끝나면 <b>${unlock}개</b> 과제가 시작 가능</span>`:""}</div>
      ${needLine(g)}</div>
    <div class="tags"><span class="pill t-${esc(g.timing)}">${esc(g.timing)}</span><span class="pill ${gb}">${esc(g.gubun)}</span><span class="pill prod">${esc(g.product)} · ${esc(shortTopic(g.topic).split(".")[0])}</span></div>
  </article>`; }
function topicBrief(t){
  const gi=gapInfo(t); const a=ACT[t.aids[0]];
  const tg=[]; const seen=new Set(); D.rows.forEach(r=>{ if(r.tkey===t.tkey&&r.target&&!seen.has(r.target.goal)){ seen.add(r.target.goal); tg.push({...r.target,gkey:r.gkey}); } });
  const cf=D.confirmed.filter(c=>c.tkey===t.tkey);
  const comp = D.competitors[t.product] ? (()=>{ const by={}; t.countries.forEach(c=>{ const x=D.competitors[t.product][c]; if(x)(by[x]=by[x]||[]).push(c); }); return Object.entries(by).sort((a,b)=>b[1].length-a[1].length).map(([k,v])=>`${k} (${v.length===10?"10개국":v.join("·")})`).join(", "); })() : "";
  return `<div class="brief"><div><div class="kick">${esc(t.product)} 열세 주제</div><h3>${esc(t.topic)}</h3>
    <dl>${gi.txt?`<dt>Gap</dt><dd><b style="color:var(--crit)">${esc(gi.txt)}</b></dd>`:""}<dt>원인</dt><dd>${esc(t.causeText||a.purpose)}</dd>${comp?`<dt>1위 경쟁사</dt><dd>${esc(comp)}</dd>`:""}
    <dt>대상 국가</dt><dd>${t.countries.length===10?"10개국":t.countries.join(" · ")}</dd>
    <dt>Activity</dt><dd>${t.aids.map(id=>esc(ACT[id].name.replace(/^.*—\s*/,""))).join(" → ")}</dd></dl>
    ${cf.length?`<details style="margin-top:8px"><summary class="hint" style="cursor:pointer">확인 완료(가정) 항목 ${cf.length}건</summary><ul style="margin:6px 0 0;padding-left:18px;font-size:12.5px">${cf.map(c=>`<li>${esc(c.item)} <span class="muted">→ ${esc(c.next)}</span></li>`).join("")}</ul></details>`:""}</div>
    <div><div class="kick" style="color:var(--ink-3)">성과 목표◇</div>${tg.length?tg.map(x=>`<div class="goal">${x.current?`<span class="from num">${esc(x.current)}</span><span class="muted">→</span><span class="to num">${esc(x.target)}</span>`:`<span>${esc(x.target)}</span>`}<span class="due">${esc(x.due)}</span></div>`).join("")+`<p class="hint" style="margin-top:6px">미달 시: ${esc(tg[0].fallback)}</p>`:`<p class="hint">등록된 목표 없음</p>`}</div></div>`; }
function viewTasks(){
  const xs=filteredGroups(); const ids=xs.flatMap(x=>x.rows.map(r=>r.id)); const T=tally(ids);
  const orgSel=`<select class="fsel ${S.f.org?"on":""}" id="fOrg">${orgOptions()}</select>`;
  let h=`<div class="fpanel">
    ${chipRow("제품","product",["공통",...PRODS])}
    ${chipRow("시점","timing",TIMINGS)}
    ${chipRow("국가","country",C)}
    <div class="frow"><b>담당</b><div class="chips">${orgSel}
      <span class="seg" role="group" aria-label="진척 상태">${["","미착수","진행","완료"].map(s=>`<button data-fk="status" data-fv="${s}" aria-pressed="${(S.f.status||"")===s}">${s||"모든 상태"}</button>`).join("")}</span>
      <label class="ftoggle"><input type="checkbox" id="fReady" ${S.f.ready?"checked":""}>지금 시작할 수 있는 것만</label></div></div>
    <div class="frow"><b>검색</b><div class="chips"><input type="search" class="fsearch" id="fQ" placeholder="과제·조직·산출물 검색" value="${esc(S.f.q||"")}"></div></div>
  </div>`;
  const act=[]; if(S.f.topic){ const t=TOP[S.f.topic]; act.push(["topic",`${t.product} · ${shortTopic(t.topic)}`]); }
  h+=`<div class="resbar"><span class="cnt">세부과제 <b class="num">${fmt(xs.length)}</b>개 · 국가 실행 <b class="num">${fmt(ids.length)}</b>건 · 완료 ${pctTxt(T)}</span>
    <span class="active-f">${S.f.topic?`<span class="af">주제: ${esc(act[0][1])}<button data-clear="topic" aria-label="주제 해제">×</button></span>`:""}${Object.keys(S.f).length?`<button class="btn sm" id="fReset">조건 모두 해제</button>`:""}</span>
    <span class="spacer"></span><span class="hint">묶어 보기</span>
    <span class="seg" role="group" aria-label="묶어 보기">${[["timing","시점"],["topic","주제"],["org","담당 조직"]].map(([k,l])=>`<button data-by="${k}" aria-pressed="${S.by===k}">${l}</button>`).join("")}</span>
    <button class="btn sm" id="btnCsv">CSV</button></div>`;
  if(S.f.topic && TOP[S.f.topic]) h+=topicBrief(TOP[S.f.topic]);
  // 묶기
  const tOrd=g=>TIMINGS.indexOf(g.timing);
  const keyOf = S.by==="timing" ? x=>x.g.timing : S.by==="topic" ? x=>x.g.tkey : x=>x.g.org;
  const order = S.by==="timing" ? TIMINGS : S.by==="topic" ? D.topics.map(t=>t.tkey) : DIM.ownerGroups;
  const label = S.by==="timing" ? k=>`${k} <span class="c">${PHASE_DESC[k]}</span>` : S.by==="topic" ? k=>`${esc(TOP[k].product)} · ${esc(TOP[k].topic)}` : k=>esc(k);
  const buckets={}; xs.forEach(x=>{ (buckets[keyOf(x)]=buckets[keyOf(x)]||[]).push(x); });
  const keys=order.filter(k=>buckets[k]);
  if(!keys.length) h+=`<div class="card empty">조건에 맞는 과제 없음 — 조건을 해제해 보기</div>`;
  keys.forEach(k=>{ const list=buckets[k].sort((a,b)=>tOrd(a.g)-tOrd(b.g)||a.g.gid.localeCompare(b.g.gid,"ko",{numeric:true}));
    const t=tally(list.flatMap(x=>x.rows.map(r=>r.id)));
    h+=`<section class="grp"><div class="grp-h"><h3>${label(k)}</h3><span class="c">${list.length}개</span>${pbar(t)}<span class="pct">${pctTxt(t)}</span></div><div class="list">${list.map(card).join("")}</div></section>`; });
  $("#main").innerHTML=h;
  // 바인딩
  $$("[data-fk]").forEach(b=>b.onclick=()=>{ const k=b.dataset.fk, v=b.dataset.fv; if(v) S.f[k]=v; else delete S.f[k]; render(); });
  const so=$("#fOrg"); so.value=S.f.org||""; so.onchange=()=>{ if(so.value) S.f.org=so.value; else delete S.f.org; render(); };
  $("#fReady").onchange=e=>{ if(e.target.checked) S.f.ready="1"; else delete S.f.ready; render(); };
  const q=$("#fQ"); q.oninput=()=>{ clearTimeout(q._t); q._t=setTimeout(()=>{ if(q.value.trim()) S.f.q=q.value.trim(); else delete S.f.q; const p=q.selectionStart; render(); const n=$("#fQ"); n.focus(); n.setSelectionRange(p,p); },250); };
  $$("[data-clear]").forEach(b=>b.onclick=()=>{ delete S.f[b.dataset.clear]; render(); });
  const rs=$("#fReset"); if(rs) rs.onclick=()=>{ S.f={}; render(); };
  $$("[data-by]").forEach(b=>b.onclick=()=>{ S.by=b.dataset.by; render(); });
  $("#btnCsv").onclick=()=>exportRows(xs.flatMap(x=>x.rows),"GEO_할일_필터결과");
  $$(".task").forEach(el=>el.onclick=e=>{ const c=e.target.closest("[data-cyc]");
    if(c){ e.stopPropagation(); const id=c.dataset.cyc; const nx={"미착수":"진행","진행":"완료","완료":"미착수"}[stOf(id)]; setProg(id,{s:nx}); refresh(); return; }
    openGroup(el.dataset.g); });
}
function exportRows(rows,name){
  const H=["세부과제 ID","세부과제 묶음","Activity ID","Activity","제품","열세 주제","단계","세부과제","대상 국가","실행 범위","영역","주관","주관 그룹","협업","구분","선행 조건","시점","산출물","목표","기한","미달 시 후속","비고","진척","메모"];
  csvDownload(`${name}_${today()}.csv`,H,rows.map(r=>[r.id,GRP[r.gkey].gid,r.aid,ACT[r.aid].name,r.product,r.topic,r.step,r.task,r.countryRaw,r.scope==="country"?"국가":"본사",r.area,r.owner,r.ownerGroup,r.collab.join(" / "),r.gubun,r.precond,r.timing,r.output,r.target?r.target.goal:"",r.target?r.target.due:"",r.target?r.target.fallback:"",r.note,stOf(r.id),(PROG[r.id]||{}).m||""])); }

/* ═════════ 진척·성과 ═════════ */
function viewTrack(){
  const sbar=(label,ids,go)=>{ const t=tally(ids); return `<div class="sb" ${go?`role="button" tabindex="0" style="cursor:pointer" data-go='${esc(JSON.stringify(go))}'`:""}><span>${esc(label)}</span><span class="track"><i style="width:${t.n?t.d/t.n*100:0}%;background:var(--done)"></i><i style="width:${t.n?t.p/t.n*100:0}%;background:var(--doing)"></i></span><span class="v num"><b>${pctTxt(t)}</b> · ${fmt(t.d)}/${fmt(t.n)}</span></div>`; };
  const idsBy=fn=>D.rows.filter(fn).map(r=>r.id);
  let h=`<section class="sec"><div class="sec-h"><span class="q">진척</span><h2>얼마나 진행됐나</h2><p>국가 실행 건 기준 완료율. <i class="dot" style="background:var(--done)"></i>완료 <i class="dot" style="background:var(--doing)"></i>진행 — 막대를 누르면 해당 할 일로 이동함. 진척은 ${API?"서버에 저장되어 같은 주소로 접속한 모든 사람에게 같게 보임":"이 브라우저에만 저장되므로 공유하려면 상단 '진척 내보내기' CSV를 전달함"}.</p></div>
    <div class="two"><div class="card"><h3 style="margin:0 0 10px;font-size:15px">시점별</h3><div class="sbars">${TIMINGS.map(t=>sbar(t,idsBy(r=>r.timing===t),{timing:t})).join("")}</div>
      <h3 style="margin:18px 0 10px;font-size:15px">제품별</h3><div class="sbars">${["공통",...PRODS].map(p=>sbar(p,idsBy(r=>r.product===p),{product:p})).join("")}</div></div>
    <div class="card"><h3 style="margin:0 0 10px;font-size:15px">주관 조직별</h3><div class="sbars">${DIM.ownerGroups.filter(o=>D.rows.some(r=>r.ownerGroup===o)).map(o=>sbar(o,idsBy(r=>r.ownerGroup===o),{org:"g:"+o})).join("")}</div>
      <h3 style="margin:18px 0 10px;font-size:15px">국가별</h3><div class="sbars">${C.map(c=>sbar(`${c} ${CN[c]}`,idsBy(r=>r.countries.includes(c)),{country:c})).join("")}</div></div></div></section>`;
  // 목표
  const goals=[]; const seen=new Set(); D.rows.forEach(r=>{ if(!r.target) return; const k=r.tkey+"|"+r.target.goal; if(seen.has(k)) return; seen.add(k); goals.push({r,t:r.target}); });
  h+=`<section class="sec"><div class="sec-h"><span class="q">성과</span><h2>어떻게 측정하나</h2><p>측정·환류(S11) 과제에 붙은 목표임. 시점·목표◇는 유관부서 협의 전 제안값. 행을 누르면 측정 과제 상세를 엶.</p></div>
    <div class="tbl-wrap"><table><thead><tr><th>제품</th><th>열세 주제</th><th>현재 → 목표</th><th>목표 원문</th><th>기한</th><th>미달 시 후속</th></tr></thead><tbody>${
    goals.map(({r,t})=>`<tr class="link" data-g="${esc(r.gkey)}"><td>${esc(r.product)}</td><td>${esc(shortTopic(r.topic))}</td><td class="num" style="white-space:nowrap">${t.current?`<b style="color:var(--crit)">${esc(t.current)}</b> → <b style="color:var(--lead)">${esc(t.target)}</b>`:"-"}</td><td>${esc(t.goal)}</td><td style="white-space:nowrap">${esc(t.due)}</td><td>${esc(t.fallback)}</td></tr>`).join("")}</tbody></table></div></section>`;
  // 기준·출처
  const bad=D.checks.filter(c=>!c.ok);
  h+=`<section class="sec two"><details class="card"><summary>용어와 기준</summary><dl class="crit">${D.criteria.map(c=>`<dt>${esc(c.item)}</dt><dd>${esc(c.rule)}</dd>`).join("")}</dl></details>
    <div class="card"><h3 style="margin:0 0 8px;font-size:15px">데이터 출처 <span class="ok-badge ${bad.length?"bad":""}">엑셀 요약 시트 대조 ${D.checks.length-bad.length}/${D.checks.length} 일치</span></h3>
      <p class="hint" style="margin:0">${esc(D.meta.source.split("/").pop())} · 원본 수정 ${esc(D.meta.sourceMtime)} · 변환 ${esc(D.meta.generatedAt)}</p>
      <p style="font-size:12.5px;color:var(--ink-2);margin:10px 0 0">${esc(D.meta.summaryNote.split("|")[0])}</p>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:12px"><button class="btn sm" id="btnAll">전체 과제 CSV</button></div>
      ${bad.length?`<p class="hint" style="color:var(--crit)">불일치: ${bad.map(c=>esc(c.name)).join(", ")}</p>`:""}</div></section>`;
  $("#main").innerHTML=h;
  $$("[data-go]").forEach(el=>{ const go=()=>goTasks(JSON.parse(el.dataset.go)); el.onclick=go; el.onkeydown=e=>{ if(e.key==="Enter") go(); }; });
  $$("tr.link").forEach(tr=>tr.onclick=()=>openGroup(tr.dataset.g));
  $("#btnAll").onclick=()=>exportRows(D.rows,"GEO_액션아이템_전체");
}

/* ═════════ 상세 패널 ═════════ */
const drawer=$("#drawer"), scrim=$("#scrim");
function closeDrawer(){ drawer.classList.remove("open"); scrim.classList.remove("open"); S.sel=""; writeUrl(); }
$("#dClose").onclick=closeDrawer; scrim.onclick=closeDrawer;
document.addEventListener("keydown",e=>{ if(e.key==="Escape"&&drawer.classList.contains("open")) closeDrawer(); });
const sseg=(id)=>`<span class="sseg" data-pid="${esc(id)}">${["미착수","진행","완료"].map(s=>`<button class="v-${s}" data-s="${s}" aria-pressed="${stOf(id)===s}">${s}</button>`).join("")}</span>`;
function lnk(k){ const g=GRP[k]; const s=gStatus(g); return `<button class="lnk" data-open="${esc(k)}"><span class="sx s-${s}"></span><span><b>${esc(g.gid)}</b> ${esc(g.task)}</span></button>`; }
function openGroup(gkey){
  const g=GRP[gkey]; if(!g) return; S.sel=gkey; writeUrl();
  const rows=g.rows.map(id=>ROW[id]), r0=rows[0], a=ACT[g.aid], t=TOP[g.tkey], gi=gapInfo(t);
  const down=DEPS[gkey]||[];
  $("#dHead").innerHTML=`<div class="kick">${esc(g.product)} · ${esc(shortTopic(g.topic))} · ${esc(g.gid)}</div><h3>${esc(g.task)}</h3>`;
  let h=`<div class="facts">
    <div class="fact"><div class="k">누가 (주관)</div><div class="v">${esc(g.whos.join(" · "))}</div></div>
    <div class="fact"><div class="k">함께 (협업)</div><div class="v">${esc([...new Set(rows.flatMap(r=>r.collab))].join(" · ")||"-")}</div></div>
    <div class="fact"><div class="k">언제</div><div class="v">${esc(g.timing)} · ${esc(g.gubun)}</div></div>
    <div class="fact"><div class="k">어디서</div><div class="v">${g.scope==="hq"?"본사 · ":""}${g.countries.length===C.length?"10개국":esc(g.countries.join(" · "))}</div></div>
    <div class="fact"><div class="k">무엇을 남기나 (산출물)</div><div class="v">${esc(g.output||"-")}</div></div>
    <div class="fact"><div class="k">단계 · 영역</div><div class="v">${esc(g.step)} · ${esc(g.area)}${r0.channel?" · "+esc(r0.channel):""}</div></div></div>
    <h4>왜 하는 일인가</h4><p>${esc(a.purpose)}</p><p class="hint" style="margin-top:4px">${esc(a.name)}${gi.txt?` · ${esc(gi.txt)}`:""}</p>`;
  if(g.blockers.length) h+=`<h4>먼저 끝나야 하는 과제 (${g.blockers.length - pending(g).length}/${g.blockers.length} 완료)</h4>${g.blockers.map(lnk).join("")}`;
  if(g.precond) h+=`<h4>선행 조건 (원문)</h4><p>${esc(g.precond)}</p>`;
  if(down.length) h+=`<h4>이 과제가 끝나면 시작할 수 있는 과제 (${down.length})</h4>${down.map(lnk).join("")}`;
  if(r0.target) h+=`<h4>목표◇</h4><p>${esc(r0.target.goal)}</p><p class="hint" style="margin-top:4px">기한 ${esc(r0.target.due)} · 미달 시 ${esc(r0.target.fallback)}</p>`;
  if(g.note) h+=`<h4>비고</h4><p>${esc(g.note)}</p>`;
  h+=`<h4>진척 입력 <span class="hint" style="font-weight:400">— ${SAVE_NOTE}</span></h4>`;
  if(rows.length>1) h+=`<div class="allset">한꺼번에 ${["미착수","진행","완료"].map(s=>`<button class="btn sm" data-all="${s}">모두 ${s}</button>`).join("")}</div>`;
  h+=rows.map(r=>{ const p=PROG[r.id]||{}; const c=r.scope==="country"?r.countries[0]:"본사";
    return `<div class="prow"><span class="pc">${esc(c)}${r.scope==="country"?`<small>${esc(CN[c]||"")}</small>`:""}</span>${sseg(r.id)}<input class="memo" data-memo="${esc(r.id)}" placeholder="메모" value="${esc(p.m||"")}" ${p.t?`title="갱신 ${esc(p.t)}"`:""}></div>`; }).join("");
  h+=`<p class="hint" style="margin-top:10px">${esc(r0.id)}${rows.length>1?` 외 ${rows.length-1}건`:""}${storageOk?"":" · 브라우저 저장소를 쓸 수 없어 이 창을 닫으면 사라짐"}</p>`;
  $("#dBody").innerHTML=h; $("#dBody").scrollTop=0;
  drawer.classList.add("open"); scrim.classList.add("open");
  $$("#dBody .sseg button").forEach(b=>b.onclick=()=>{ setProg(b.closest(".sseg").dataset.pid,{s:b.dataset.s}); refresh(); });
  $$("#dBody [data-all]").forEach(b=>b.onclick=()=>{ rows.forEach(r=>setProg(r.id,{s:b.dataset.all})); refresh(); });
  $$("#dBody [data-memo]").forEach(m=>m.onchange=()=>setProg(m.dataset.memo,{m:m.value}));
  $$("#dBody [data-open]").forEach(b=>b.onclick=()=>openGroup(b.dataset.open));
}
function refresh(){ const y=window.scrollY; render(); window.scrollTo(0,y); if(S.sel) { const st=$("#dBody").scrollTop; openGroup(S.sel); $("#dBody").scrollTop=st; } }

/* ── 진척 CSV ── */
$("#btnProgExp").onclick=()=>csvDownload(`GEO_진척상태_${today()}.csv`,["세부과제 ID","진척","메모","갱신"],D.rows.map(r=>[r.id,stOf(r.id),(PROG[r.id]||{}).m||"",(PROG[r.id]||{}).t||""]));
$("#progFile").onchange=e=>{ const f=e.target.files[0]; if(!f) return; const rd=new FileReader();
  rd.onload=()=>{ const rows=parseCsv(rd.result); const h=rows.shift()||[]; const iId=h.indexOf("세부과제 ID"), iS=h.indexOf("진척"), iM=h.indexOf("메모"), iT=h.indexOf("갱신");
    if(iId<0||iS<0){ toast("CSV 머리글에 '세부과제 ID'·'진척' 열이 필요함"); return; }
    let n=0, skip=0; const got=[]; rows.forEach(r=>{ const id=r[iId]; if(!ROW[id]){ if(id) skip++; return; } const s=["미착수","진행","완료"].includes(r[iS])?r[iS]:"미착수"; const mm=iM>=0?r[iM]:"";
      if(s==="미착수"&&!mm) delete PROG[id]; else PROG[id]={s,m:mm,t:(iT>=0&&r[iT])||new Date().toISOString().slice(0,16).replace("T"," ")}; got.push(id); n++; });
    saveProg(got); toast(`진척 ${n}건 반영${skip?` · 원본에 없는 ID ${skip}건 제외`:""}${storageOk?"":" · 브라우저 저장소를 쓸 수 없어 이 창에서만 유지됨"}`); refresh(); };
  rd.readAsText(f,"utf-8"); e.target.value=""; };
$("#metaLine").textContent=`원본 ${D.meta.source.split("/").pop()} · 변환 ${D.meta.generatedAt} · 시점·목표◇ = 유관부서 협의 전 제안값`;

function render(){ renderNav(); ({home:viewHome,tasks:viewTasks,track:viewTrack})[S.view](); writeUrl(); }
render();
if(S.sel) openGroup(S.sel);
}
