// ─── 이메일 호환 HTML 생성기 ─────────────────────────────────────────────────
// 규칙: table 기반 레이아웃, 인라인 스타일, 외부 폰트 없음, flex/grid 없음
import { PROD_ID_TO_UL_CODE as UL_PROD_MAP, PROD_ID_TO_UL_CODE, PROD_ID_TO_KR, PROD_ID_TO_EN, PROD_ID_TO_BU, PROD_ID_TO_ORDER, NAME_TO_PROD_ID } from './categoryMap.js'
import { resolveProductsByLlm, resolveProductsCntyByLlm, resolveTotalByLlm } from './shared/llmModel.js'
import { _logWarn } from './sheetParserUtils.js'
import { dcColLabel } from './shared/constants.js'
import { mergeCitDomainRows, isTtlLlmVal } from './shared/citDomainAgg.js'

const EM_RED  = '#CF0652'
// Citation 차트 전용 — 짙은 녹색 계열 (LG_RED 와 구분)
const CIT_GREEN      = '#15803D'  // primary (Top3 등)
const CIT_GREEN_DARK = '#166534'  // accent (도메인 막대 등)
const EM_DARK = '#A0003E'
const EM_FONT = "'LGEIText','LG Smart', 'Arial Narrow', Arial, sans-serif"

const CNTY_KR = {
  US: '미국', CA: '캐나다', UK: '영국', GB: '영국',
  DE: '독일', ES: '스페인', FR: '프랑스', IT: '이탈리아',
  BR: '브라질', MX: '멕시코', IN: '인도', AU: '호주',
  VN: '베트남', JP: '일본', KR: '한국', CN: '중국',
  TTL: '전체', TOTAL: '전체', GLOBAL: '전체',
}
const CNTY_EN = {
  US: 'USA', CA: 'Canada', UK: 'UK', GB: 'UK',
  DE: 'Germany', ES: 'Spain', FR: 'France', IT: 'Italy',
  BR: 'Brazil', MX: 'Mexico', IN: 'India', AU: 'AU',
  VN: 'Vietnam', JP: 'Japan', KR: 'Korea', CN: 'China',
  TTL: 'Total', TOTAL: 'Total', GLOBAL: 'Total',
}
// 2줄 표기용 (짧은 이름은 &nbsp;로 높이 정렬) — 좁은 셀에 맞춰 약어 사용
const CNTY_EN_2LINE = {
  US: 'USA', CA: 'Canada', UK: 'UK', GB: 'UK',
  DE: 'Germany', ES: 'Spain', BR: 'Brazil', MX: 'Mexico',
  AU: 'AU', VN: 'Vietnam', IN: 'India',
}
function cntyKr(c) {
  const k = String(c || '').trim().toUpperCase()
  return CNTY_KR[k] || c
}
function cntyEn(c) {
  const k = String(c || '').trim().toUpperCase()
  return CNTY_EN[k] || c
}
function cntyLabel(c, lang) {
  return lang === 'en' ? cntyEn(c) : cntyKr(c)
}
function cntyLabel2Line(c, lang) {
  const k = String(c || '').trim().toUpperCase()
  if (lang === 'en') return CNTY_EN_2LINE[k] || (CNTY_EN[k] || c) + '<br/>&nbsp;'
  return CNTY_KR[k] || c
}

// 제품명 라벨 — 단일 라인 우선 (긴 이름만 2줄로 자연 wrap)
const PROD_LABEL_KR = {
  'TV': 'TV', '모니터': '모니터', '오디오': '오디오',
  '세탁기': '세탁기', '냉장고': '냉장고',
  '식기세척기': '식기<br/>세척기', '식세기': '식기<br/>세척기',
  '청소기': '청소기', 'Cooking': 'Cooking',
  'RAC': 'RAC', 'Aircare': 'Aircare',
}
const PROD_LABEL_EN = {
  'TV': 'TV', '모니터': 'Monitor', '오디오': 'Audio',
  '세탁기': 'Washer', '냉장고': 'REF',
  '식기세척기': 'DW', '식세기': 'DW',
  '청소기': 'Vacuum', 'Cooking': 'Cooking',
  'RAC': 'RAC', 'Aircare': 'Air<br/>care',
}
function prodLabel2Line(name, lang) {
  const map = lang === 'en' ? PROD_LABEL_EN : PROD_LABEL_KR
  return map[name] || escapeHtml(String(name || ''))
}

// unlaunchedMap 조회용 + 역매핑: src/categoryMap.js single source
const UL_PROD_CODE = PROD_ID_TO_UL_CODE
const PROD_NAME_TO_ID = NAME_TO_PROD_ID
function isUnlaunched(unlaunchedMap, country, prodId) {
  if (!unlaunchedMap) return false
  const code = UL_PROD_CODE[(prodId || '').toLowerCase()] || (prodId || '').toUpperCase()
  return !!unlaunchedMap[`${country}|${code}`]
}

// 오디오: W13/Apr 베이스라인 (boundary 회색 연결)
// RAC/Aircare: W16 베이스라인 (boundary 끊김), 월간은 Apr 공통
const BASELINE_RESET_PRODUCTS = ['audio', 'rac', 'aircare']
function isBaselineResetProduct(p) {
  const id = typeof p === 'string' ? p : (p?.id || p?.category || '')
  return BASELINE_RESET_PRODUCTS.includes(String(id).toLowerCase())
}
function baselineWeekForProd(p) {
  const id = String(typeof p === 'string' ? p : (p?.id || p?.category || '')).toLowerCase()
  if (id === 'audio') return 13
  if (id === 'rac' || id === 'aircare') return 16
  return 0
}
function baselineIdxIn(labels, p) {
  if (!labels) return -1
  const wk = p ? baselineWeekForProd(p) : 0
  if (wk > 0) {
    const wkIdx = labels.findIndex(l => {
      const m = String(l || '').trim().match(/^W?(\d+)$/i)
      return m && parseInt(m[1], 10) === wk
    })
    if (wkIdx >= 0) return wkIdx
  }
  return labels.findIndex(l => {
    const s = String(l || '').trim()
    return /^Apr(il)?$/i.test(s) || s === '4월'
  })
}

// Key Task Progress 카테고리 영문
const CATEGORY_EN = {
  '콘텐츠수정': 'Content Revision',
  '신규콘텐츠제작': 'New Content Production',
  '외부채널관리': 'External Channel Mgmt',
  '닷컴기술개선': 'Dotcom Tech Improvement',
}
function categoryLabel(name, lang, customEn) {
  if (lang !== 'en') return name
  // 우선순위: 런타임 AI 번역 결과 → 정적 사전 → 원본
  if (customEn) return customEn
  // 공백/띄어쓰기 변형에 모두 대응 (예: "콘텐츠 수정" / "콘텐츠수정")
  const key = String(name || '').replace(/\s+/g, '')
  return CATEGORY_EN[key] || CATEGORY_EN[name] || name
}

// ─── HTML Sanitization (XSS 방지) ──────────────────────────────────────────
function escapeHtml(str) {
  if (typeof str !== 'string') return String(str ?? '')
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// ─── 다국어 번역 ─────────────────────────────────────────────────────────────
const T = {
  ko: {
    lead: '선도', behind: '추격', critical: '취약', normal: '보통',
    weekTrend: '주간 트렌드',
    monthTrend: '월별 트렌드',
    weeklyTab: '주별',
    monthlyTab: '월별',
    vsComp: '대비',
    categories: '개 카테고리',
    productTitle: '제품별 GEO Visibility 현황',
    legendLead: '선도 ≥100%', legendBehind: '추격 ≥80%', legendCritical: '취약 <80%',
    lgBasis: 'LG/1위 기준',
    cntyTitle: '국가별 GEO Visibility 현황',
    cntyComp: '1위 경쟁사',
    citationTitle: '도메인 카테고리별 Citation 현황',
    citationDomainTitle: '도메인별 Citation 현황',
    llmShareTitle: '모델별 인용 비중',
    citCountVBarTitle: '전월 대비 모델별 Citation 인용수',
    citScopeAll: '전체 채널',
    citScopeCommunity: '커뮤니티 채널',
    citScopeReddit: 'Reddit',
    citationCntyTitle: '국가별 Citation 도메인',
    touchPointTitle: '외부접점채널 Citation',
    citationLegend: 'Citation Score 건수 (비중)',
    dotcomTitle: '닷컴 Citation (경쟁사대비)',
    dotcomTTL: 'TTL (전체)',
    dotcomLgOnly: '— (LG only)',
    dotcomLgWin: 'LG 우위',
    dotcomSsWin: 'SS 우위',
    dotcomNone: '없음',
    insight: 'INSIGHT',
    howToRead: 'HOW TO READ',
    notice: 'Notice',
    kpiLogic: 'KPI Logic',
    geoInsight: 'Executive Summary',
    todoTitle: 'Action Plan',
    footer: '해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀',
  },
  en: {
    lead: 'Lead', behind: 'Behind', critical: 'Critical', normal: 'Normal',
    weekTrend: 'Weekly Trend',
    monthTrend: 'Monthly Trend',
    weeklyTab: 'Weekly',
    monthlyTab: 'Monthly',
    vsComp: 'vs',
    categories: ' Categories',
    productTitle: 'GEO Visibility by Product',
    legendLead: 'Lead ≥100%', legendBehind: 'Behind ≥80%', legendCritical: 'Critical <80%',
    lgBasis: 'LG/Top 1 Basis',
    cntyTitle: 'GEO Visibility by Country',
    cntyComp: 'Top 1 Competitor',
    citationTitle: 'Citation by Domain Category',
    citationDomainTitle: 'Citation by Domain',
    llmShareTitle: 'Citation Share by Model',
    citCountVBarTitle: 'Citation Count by Model (MoM)',
    citScopeAll: 'All Channels',
    citScopeCommunity: 'Community Channels',
    citScopeReddit: 'Reddit',
    citationCntyTitle: 'Citation Domain by Country',
    touchPointTitle: 'Touch Points Citation',
    citationLegend: 'Citation Score Count (Ratio)',
    dotcomTitle: 'Dotcom Citation (vs Competitor)',
    dotcomTTL: 'TTL (Total)',
    dotcomLgOnly: '— (LG only)',
    dotcomLgWin: 'LG Leads',
    dotcomSsWin: 'SS Leads',
    dotcomNone: 'None',
    insight: 'INSIGHT',
    howToRead: 'HOW TO READ',
    notice: 'Notice',
    kpiLogic: 'KPI Logic',
    geoInsight: 'Executive Summary',
    todoTitle: 'Action Plan',
    footer: 'Overseas Sales HQ · D2C Overseas Sales Group · D2C Marketing · D2C Digital Marketing Team',
  },
}

function statusInfo(status, lang = 'ko') {
  const t = T[lang] || T.ko
  if (status === 'lead')     return { bg: '#F0FDF4', border: '#BBF7D0', color: '#15803D', label: t.lead }
  if (status === 'behind')   return { bg: '#FFFBEB', border: '#FDE68A', color: '#B45309', label: t.behind }
  if (status === 'critical') return { bg: '#FFF1F2', border: '#FECDD3', color: '#BE123C', label: t.critical }
  return                            { bg: '#F8FAFC', border: '#E2E8F0', color: '#475569', label: t.normal }
}

function fmt(n) {
  return Number(n).toLocaleString('en-US')
}

// 수치(건수) 표기 — 언어별:
//   ko: '00만' 또는 '0.X만'   en: '00K' (천) / '0.XK' (천) / '0.XM' (백만 이상)
function fmtMan(n, lang) {
  if (n == null || isNaN(n)) return '—'
  const v = Number(n)
  if (v === 0) return '0'
  const sign = v < 0 ? '-' : ''
  const abs = Math.abs(v)
  if (lang === 'en') {
    if (abs >= 1_000_000) {
      const m = abs / 1_000_000
      return sign + (m >= 10 ? Math.round(m) : m.toFixed(1)) + 'M'
    }
    if (abs >= 1_000) {
      const k = abs / 1_000
      return sign + (k >= 10 ? Math.round(k) : k.toFixed(1)) + 'K'
    }
    return sign + abs.toString()
  }
  // ko (default)
  const man = abs / 10000
  if (man >= 1) return sign + Math.round(man).toLocaleString('en-US') + '만'
  return sign + man.toFixed(1) + '만'
}

function mdBold(text) {
  return escapeHtml(text || '')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\r\n/g, '<br>')
    .replace(/\n/g, '<br>')
}

// ─── 텍스트 리포트 가독성 렌더러 ─────────────────────────────────────────────
// mdBold 확장판 — 문단(빈 줄)·불릿(-/•/·)·콜아웃(▶/※) 구조를 살려 렌더.
// 이메일 호환: 인라인 스타일만 사용 (hanging indent 는 padding+text-indent).
function renderReportText(text, opts = {}) {
  const { size = 14, lh = 24, color = '#1A1A1A', accent = EM_RED } = opts
  const raw = String(text || '')
  if (!raw.trim()) return ''
  const base = `font-size:${size}px;color:${color};line-height:${lh}px;font-family:${EM_FONT};`
  const inline = s => escapeHtml(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  const paras = raw.replace(/\r\n/g, '\n').split(/\n{2,}/)
  const rendered = paras.map(para => {
    const parts = para.split('\n').map(line => {
      const t = line.trim()
      const bullet = t.match(/^[-•·]\s+(.*)$/)
      if (bullet) return `<span style="display:block;padding-left:14px;text-indent:-14px;">•&nbsp;${inline(bullet[1])}</span>`
      const callout = t.match(/^([▶※])\s*(.*)$/)
      if (callout) return `<span style="display:block;font-weight:700;color:${accent};">${callout[1]} ${inline(callout[2])}</span>`
      return inline(line)
    })
    let html = ''
    parts.forEach((p, i) => {
      const isBlock = p.startsWith('<span style="display:block')
      const prevBlock = i > 0 && parts[i - 1].startsWith('<span style="display:block')
      if (i > 0 && !isBlock && !prevBlock) html += '<br>'
      html += p
    })
    return html
  })
  return rendered.map((h, i) => `<p style="margin:0 0 ${i < rendered.length - 1 ? 10 : 0}px;${base}">${h}</p>`).join('')
}

// 사용자 편집 HTML 정화 (어드민 자체 편집이지만 script/on*/외부태그 방어)
function sanitizeUserHtml(html) {
  return String(html || '')
    .replace(/<\s*(script|style|iframe|object|embed|link|meta)[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
    .replace(/<\s*(script|style|iframe|object|embed|link|meta)\b[^>]*>/gi, '')
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/\son\w+\s*=\s*'[^']*'/gi, '')
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, '')
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"')
}

// 편집으로 서식이 입혀진 필드는 HTML 로 저장됨 → 태그가 있으면 그대로(정화) 렌더, 없으면 raw 텍스트 렌더
function renderMaybeHtml(value, opts = {}) {
  const raw = String(value || '')
  if (!raw.trim()) return ''
  const looksHtml = /<\/?(p|div|span|strong|b|u|font|br|em|i|table|tr|td|th)\b/i.test(raw)
  if (!looksHtml) return renderReportText(raw, opts)
  const { size = 14, lh = 24, color = '#1A1A1A' } = opts
  // 붙여넣은 표(평가항목·항목수·평가내용 등)는 워드/시트에서 고정 폭 속성을 달고 오는 경우가 많아
  // 컨테이너보다 좁게 렌더되며 우측에 빈 여백이 남는다 → 폭 속성을 걷어내고 100% 로 강제.
  const widened = sanitizeUserHtml(raw)
    .replace(/<table\b([^>]*)>/gi, (m, attrs) => {
      const cleaned = attrs.replace(/\swidth\s*=\s*(["'])[^"']*\1/gi, '')
        .replace(/width\s*:\s*[^;"']+;?/gi, '')
      return `<table${cleaned} width="100%" style="width:100%;border-collapse:collapse;table-layout:auto;">`
    })
  return `<div style="font-size:${size}px;color:${color};line-height:${lh}px;font-family:${EM_FONT};">${widened}</div>`
}

// ─── 인라인 편집 (editable) 모드 — 어드민 미리보기 전용 ──────────────────────
// options.editable(=좌측 패널 '편집 모드' 토글) 로 활성. 게시/복사/발송 경로는 미지정 → 아티팩트 0.
// v3: 스타일 적용 상태 WYSIWYG 편집 + 상단바 서식 도구(execCommand). 블록은 HTML 저장, 헤더는 plain.
let _ED = false          // editable 모드 플래그

// editable 일 때만 data-edit 속성 반환 (인라인 헤더 span — 서식 없이 plain 저장)
function edAttr(field) {
  return _ED ? ` data-edit="${field}" data-edit-plain="1"` : ''
}

// editable 일 때만 data-edit 속성 반환 (rich HTML 블록 — 서식 포함 저장). 기존 스타일 요소에 직접 부착용.
function edRich(field) {
  return _ED ? ` data-edit="${field}"` : ''
}

// 편집 가능 텍스트 블록 — 렌더 결과를 감싸는 div (raw 없으면 placeholder). 서식 편집 → HTML 저장.
function edBlock(field, raw, opts = {}) {
  const ph = opts.ph || (opts.lang === 'en' ? 'Click to edit...' : '클릭하여 입력...')
  const attr = (_ED && field) ? ` data-edit="${field}"${!raw ? ` data-ph="${escapeHtml(ph)}"` : ''}` : ''
  const style = opts.wrapStyle ? ` style="${opts.wrapStyle}"` : ''
  const body = raw ? renderMaybeHtml(raw, opts) : ''
  return `<div${attr}${style}>${body}</div>`
}

// 에디터 스타일 + 스크립트 (editable 일 때만 </body> 직전 삽입)
// 블록: 서식 적용된 HTML 그대로 편집 → blur 시 정화 HTML 저장 / 헤더: plain 텍스트 저장
// 부모(상단바 도구)에서 postMessage({type:'format',cmd,value}) → 선택 영역에 execCommand
function edScriptHtml() {
  if (!_ED) return ''
  return `
<style>
[data-edit]{outline:1px dashed rgba(207,6,82,0.35);outline-offset:3px;border-radius:3px;transition:outline .12s;cursor:text;}
[data-edit]:hover{outline:1px dashed rgba(207,6,82,0.7);}
[data-edit]:focus{outline:2px solid #CF0652;outline-offset:3px;background:rgba(207,6,82,0.04);}
[data-edit]:empty:before{content:attr(data-ph);color:#94A3B8;font-style:italic;}
</style>
<script>
(function(){
  function clean(h){
    return String(h||'')
      .replace(/<\\s*(script|style)[\\s\\S]*?<\\s*\\/\\s*\\1\\s*>/gi,'')
      .replace(/\\son\\w+\\s*=\\s*"[^"]*"/gi,'')
      .replace(/(<br>\\s*)+$/i,'').trim();
  }
  var orig='';
  document.querySelectorAll('[data-edit]').forEach(function(el){
    el.setAttribute('contenteditable','true');
    el.addEventListener('focus',function(){orig=el.innerHTML;});
    el.addEventListener('keydown',function(e){
      if(e.key==='Escape'){e.preventDefault();el.innerHTML=orig;el.blur();}
    });
    el.addEventListener('blur',function(){
      if(el.innerHTML===orig)return;
      var f=el.getAttribute('data-edit');
      var plain=el.hasAttribute('data-edit-plain');
      var v=plain?(el.innerText||'').replace(/\\u00a0/g,' ').trim():clean(el.innerHTML);
      try{window.parent.postMessage({type:'editMeta',field:f,value:v},'*');}catch(e){}
    });
  });
  // 상단바 서식 도구 → 현재 편집 중인 선택 영역에 execCommand (부모 버튼이 mousedown preventDefault 로
  // iframe 포커스/선택을 유지시켜 줌 → 저장은 blur 에서). styleWithCSS 로 인라인 스타일 출력(이메일 호환).
  window.addEventListener('message',function(e){
    var d=e.data; if(!d||d.type!=='format')return;
    try{
      if(d.cmd==='fontSizePx'){
        // 임의 px 크기 — fontSize 는 1~7 단계뿐이라 7 적용 후 px 로 치환.
        // 주의: styleWithCSS=true 면 <font size=7> 대신 span(font-size:xxx-large≈48px)이 생겨
        // 치환 대상을 못 찾고 특대로 깨짐 → px 적용 동안만 styleWithCSS 끔.
        document.execCommand('styleWithCSS',false,false);
        document.execCommand('fontSize',false,'7');
        document.querySelectorAll('font[size="7"]').forEach(function(f){f.removeAttribute('size');f.style.fontSize=d.value+'px';});
        // 브라우저별 방어: span(xxx-large) 형태로 생성된 경우도 px 로 치환
        document.querySelectorAll('span[style*="xxx-large"]').forEach(function(sp){sp.style.fontSize=d.value+'px';});
        document.execCommand('styleWithCSS',false,true);
      } else {
        document.execCommand('styleWithCSS',false,true);
        document.execCommand(d.cmd,false,d.value);
      }
    }catch(err){}
  });
})();
</script>`
}

// ─── 삼성 → SS 치환 ─────────────────────────────────────────────────────────
function ssName(name) {
  if (!name) return ''
  return escapeHtml(name.replace(/삼성전자/g, 'SS').replace(/삼성/g, 'SS').replace(/Samsung/gi, 'SS'))
}

function delta(score, prev) { return +(score - prev).toFixed(1) }

// ─── 기간 스탯 (위클리 / 먼슬리) ──────────────────────────────────────────────
// score = 해당 모드의 최신 값, prev = 같은 시리즈의 직전 유효값.
// prev 를 인덱스 고정 (validWeekly[length-5]) 으로 잡으면 유효 주차가 5개 미만일 때
// 자기 자신을 가리켜 delta 가 항상 0.0%p 가 됨 (TV 0.0%p 회귀).
// → 마지막 두 유효값으로 산출 (dashboardTemplate.js 의 WoW/MoM 계산과 동일 패턴).
// prev 없으면 null → 호출부가 '—' 렌더 (0.0%p 로 위장 금지).
function periodStats(p, mode = 'weekly') {
  if (mode === 'monthly') {
    const ms = (p.monthlyScores || []).filter(m => m && m.score != null && m.score > 0)
    const score = p.monthlyScore != null ? p.monthlyScore
      : (ms.length ? ms[ms.length - 1].score : (p.score || 0))
    const prevRaw = ms.length >= 2 ? ms[ms.length - 2].score
      : (p.monthlyPrev != null ? p.monthlyPrev : p.prev)
    return { mode: 'monthly', label: 'MoM', score: score || 0, prev: prevRaw > 0 ? prevRaw : null }
  }
  const vw = (p.weekly || []).filter(v => v != null && v > 0)
  const score = vw.length ? vw[vw.length - 1]
    : (p.weeklyScore != null ? p.weeklyScore : (p.score || 0))
  // 유효 주차 2개 미만이면 p.weeklyPrev 폴백 — 단 score 와 같은 값이면 (자기 자신) 폐기
  const prevRaw = vw.length >= 2 ? vw[vw.length - 2]
    : (p.weeklyPrev > 0 && p.weeklyPrev !== score ? p.weeklyPrev : null)
  return { mode: 'weekly', label: 'WoW', score: score || 0, prev: prevRaw > 0 ? prevRaw : null }
}

// 기간 배지 — 카드의 수치가 주간인지 월간인지 표기
function periodBadgeHtml(mode, lang) {
  const txt = mode === 'monthly' ? (lang === 'en' ? 'Monthly' : '월간') : (lang === 'en' ? 'Weekly' : '주간')
  return `<span style="display:inline-block;background:#F1F5F9;color:#64748B;border:1px solid #E2E8F0;border-radius:4px;padding:0 4px;font-size:9px;font-weight:700;line-height:14px;font-family:${EM_FONT};letter-spacing:0;vertical-align:middle;">${txt}</span>`
}

// WoW / MoM 델타 (라벨 포함) — prev 없으면 '—'
function periodDeltaHtml(stat, size = 12) {
  if (stat.prev == null) {
    return `<span style="font-size:${size}px;color:#94A3B8;font-family:${EM_FONT};">${stat.label} —</span>`
  }
  const d = delta(stat.score, stat.prev)
  const color = d > 0 ? '#16A34A' : d < 0 ? '#DC2626' : '#94A3B8'
  const arrow = d > 0 ? '▲' : d < 0 ? '▼' : '─'
  return `<span style="font-size:${size}px;font-weight:700;color:${color};font-family:${EM_FONT};">${stat.label} ${arrow}${Math.abs(d).toFixed(1)}%p</span>`
}

function deltaHtml(d, size = 15, mom = false) {
  if (d === 0) return `<span style="color:#94A3B8;font-size:${size}px;">─</span>`
  const arrow = d > 0 ? '▲' : '▼'
  const color = d > 0 ? '#16A34A' : '#DC2626'
  const prefix = mom ? 'MoM ' : ''
  return `<span style="color:${color};font-size:${size}px;font-weight:700;">${prefix}${arrow} ${Math.abs(d).toFixed(1)}%p</span>`
}

// ─── 주간 트렌드 바 차트 (이메일 호환, 제품별 상대 스케일) ────────────────────
function weeklyTrendHtml(weekly, color, globalMax, globalMin, weeklyLabels, fadeBeforeIdx = -1) {
  if (!weekly || weekly.length === 0) return ''
  // 제품 자체 min/max 사용 → 작은 증감도 바 높낮이에 반영
  const valid = weekly.filter(v => v != null)
  const localMin = valid.length ? Math.min(...valid) : 0
  const localMax = valid.length ? Math.max(...valid) : 1
  const range = localMax - localMin || 1
  const MAX_H = 24
  // 실제 주차 라벨 사용 (weeklyLabels에서 데이터 길이만큼 뒤에서 가져옴)
  const fallback = weekly.map((_, i) => `W${i + 1}`)
  const labels = weeklyLabels && weeklyLabels.length >= weekly.length
    ? weeklyLabels.slice(weeklyLabels.length - weekly.length)
    : fallback
  const FADE = '#64748B'

  const bars = weekly.map((v, i) => {
    if (v == null) return ''
    const h = Math.round(((v - localMin) / range) * MAX_H) + 4
    const spacer = MAX_H - h
    const isPre = fadeBeforeIdx > 0 && i < fadeBeforeIdx
    const barCol = isPre ? FADE : color
    const valCol = isPre ? FADE : color
    return `<td style="vertical-align:bottom;text-align:center;padding:0 2px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
        <tr><td style="font-size:10px;font-weight:700;color:${valCol};font-family:${EM_FONT};padding-bottom:1px;">${v.toFixed(1)}</td></tr>
        ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td width="10" height="${h}" style="background:${barCol};font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};padding-top:2px;">${labels[i] || ''}</td></tr>
      </table>
    </td>`
  }).join('')

  return `<!--[if mso]><table border="0" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" style="display:inline-table;">
    <tr>${bars}</tr>
  </table>
  <!--[if mso]></td></tr></table><![endif]-->`
}

// ─── 월별 트렌드 바 차트 (대시보드용, 균일 최대 높이) ─────────────────────────
function monthlyTrendHtml(monthly, color, globalMax, globalMin) {
  if (!monthly || monthly.length === 0) return ''
  const range = globalMax - globalMin || 1
  const MAX_H = 24
  const cnt = monthly.length
  const labels = cnt <= 4
    ? ['M-3', 'M-2', 'M-1', 'M0'].slice(-cnt)
    : monthly.map((_, i) => `M${i + 1}`)

  const bars = monthly.map((v, i) => {
    const h = Math.round(((v - globalMin) / range) * MAX_H) + 4
    const spacer = MAX_H - h
    return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
        ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td width="10" height="${h}" style="background:${color};font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td style="font-size:11px;color:#94A3B8;font-family:${EM_FONT};padding-top:2px;">${labels[i] || ''}</td></tr>
      </table>
    </td>`
  }).join('')

  return `<!--[if mso]><table border="0" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" style="display:inline-table;">
    <tr>${bars}</tr>
  </table>
  <!--[if mso]></td></tr></table><![endif]-->`
}

// ─── 제품 카드 (이메일용) ──────────────────────────────────────────────────────
function productCardHtml(p, globalMax, globalMin, lang = 'ko', opts = {}) {
  const t   = T[lang] || T.ko
  const { showTrendTabs = false, monthlyGlobalMax = 100, monthlyGlobalMin = 0, weeklyLabels } = opts
  const useMonthly = opts.trendMode === 'monthly'

  // 모드에 따른 점수 선택 — periodStats 가 마지막 두 유효값으로 prev 산출 (0.0%p 회귀 방지)
  const wStat = periodStats(p, 'weekly')
  const mStat = periodStats(p, 'monthly')
  const activeStat = useMonthly ? mStat : wStat
  const activeScore = activeStat.score
  const activePrev = activeStat.prev || 0
  const activeComp = p.vsComp || 0
  const curRatio = activeComp > 0 ? Math.round(activeScore / activeComp * 100) : 100
  const ratioColor = curRatio >= 100 ? '#15803D' : curRatio >= 80 ? '#E8910C' : '#BE123C'
  const activeStatus = curRatio >= 100 ? 'lead' : curRatio >= 80 ? 'behind' : 'critical'
  const st = statusInfo(activeStatus, lang)

  const sparkColor = activeStatus === 'critical' ? '#BE123C' : activeStatus === 'behind' ? '#E8910C' : '#15803D'

  const TREND_WEEKS = 8
  const fullWeekly = p.weekly || []
  const trendArr = fullWeekly.slice(-TREND_WEEKS)
  const trimmedLabels = weeklyLabels && weeklyLabels.length >= TREND_WEEKS ? weeklyLabels.slice(-TREND_WEEKS) : weeklyLabels

  let ratioDelta = ''
  if (activePrev > 0 && activeComp > 0) {
    const prevRatio = Math.round(activePrev / activeComp * 100)
    const rd = curRatio - prevRatio
    if (rd !== 0) ratioDelta = ` <span style="font-size:10px;color:${rd > 0 ? '#16A34A' : '#DC2626'};">${rd > 0 ? '+' : ''}${rd}%p</span>`
  }
  const _isBaseReset = isBaselineResetProduct(p)

  // 월간 트렌드: monthlyScores에서 구성
  const ms = p.monthlyScores || []
  const MNAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const msLabels = ms.map(m => { const em = String(m.date).match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i); const km = String(m.date).match(/(\d{1,2})월/); return em ? em[1] : km ? MNAMES[parseInt(km[1])-1] : '' })
  const msData = ms.map(m => m.score)
  const msMax = msData.length ? Math.max(...msData) : 100
  const msMin = msData.length ? Math.min(...msData.filter(v => v > 0)) : 0

  // 베이스라인 리셋 제품: 제품별 W (오디오 W13, RAC/Aircare W16) / 월 Apr 미만 회색 페이드
  const _wFadeIdx = _isBaseReset ? baselineIdxIn(trimmedLabels, p) : -1
  const _mFadeIdx = _isBaseReset ? baselineIdxIn(msLabels, p) : -1

  // 트렌드 모드에 따라 선택
  const trendGraph = useMonthly
    ? weeklyTrendHtml(msData, sparkColor, msMax, msMin, msLabels, _mFadeIdx)
    : weeklyTrendHtml(trendArr, sparkColor, globalMax, globalMin, trimmedLabels, _wFadeIdx)
  const trendCell = showTrendTabs
    ? `<div class="trend-weekly">${weeklyTrendHtml(trendArr, sparkColor, globalMax, globalMin, trimmedLabels, _wFadeIdx)}</div><div class="trend-monthly" style="display:none;">${weeklyTrendHtml(msData, sparkColor, msMax, msMin, msLabels, _mFadeIdx)}</div>`
    : trendGraph

  // 기간 표기 (주간/월간) + WoW/MoM 델타.
  // 탭 모드(showTrendTabs)에서는 두 벌 렌더 → 기존 switchTrend() 가 .trend-weekly/.trend-monthly 토글
  const _scoreNum = s => `<span style="font-size:22px;font-weight:900;color:#1A1A1A;">${s.score.toFixed(1)}</span><span style="font-size:12px;color:#94A3B8;">%</span>`
  const _deltaDivStyle = 'clear:both;margin-top:2px;font-size:10px;color:#94A3B8;font-family:' + EM_FONT + ';text-align:right;'
  const scoreBlock = showTrendTabs
    ? `<span class="trend-weekly">${_scoreNum(wStat)}</span><span class="trend-monthly" style="display:none;">${_scoreNum(mStat)}</span>`
    : _scoreNum(activeStat)
  const badgeBlock = showTrendTabs
    ? `<span class="trend-weekly">${periodBadgeHtml('weekly', lang)}</span><span class="trend-monthly" style="display:none;">${periodBadgeHtml('monthly', lang)}</span>`
    : periodBadgeHtml(activeStat.mode, lang)
  const deltaBlock = showTrendTabs
    ? `<div class="trend-weekly" style="${_deltaDivStyle}">${periodDeltaHtml(wStat, 10)}</div><div class="trend-monthly" style="display:none;${_deltaDivStyle}">${periodDeltaHtml(mStat, 10)}</div>`
    : `<div style="${_deltaDivStyle}">${periodDeltaHtml(activeStat, 10)}</div>`

  return `
  <td width="33%" style="padding:3px;vertical-align:top;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border:2px solid ${st.border};border-radius:8px;background:#FFFFFF;font-family:${EM_FONT};">
      <tr>
        <td style="padding:6px 8px 4px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="vertical-align:middle;">
                <span style="font-size:12px;font-weight:900;color:#1A1A1A;vertical-align:middle;font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.55px' : '-0.3px'};">${escapeHtml(opts.prodNameFn ? opts.prodNameFn(p) : p.kr)}</span>
              </td>
              <td align="right" style="vertical-align:middle;">
                <table border="0" cellpadding="0" cellspacing="0" align="right" style="float:right;"><tr>
                  <td style="vertical-align:middle;white-space:nowrap;"><span style="font-size:13px;font-weight:700;color:${ratioColor};font-family:${EM_FONT};letter-spacing:-1px;">${escapeHtml(p.compName || 'Samsung')} ${lang === 'en' ? 'vs' : '대비'} ${curRatio}%${ratioDelta}</span></td>
                  <td style="vertical-align:middle;white-space:nowrap;padding-left:4px;"><span style="display:inline-block;background:${st.bg};color:${st.color};border:1px solid ${st.border};border-radius:6px;padding:0px 5px;font-size:10px;font-weight:700;line-height:16px;font-family:${EM_FONT};">${st.label}</span></td>
                </tr></table>
                ${deltaBlock}
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:2px 8px 6px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="vertical-align:middle;">
                ${scoreBlock}
                &nbsp;${badgeBlock}
              </td>
              <td align="right" style="vertical-align:middle;">
                ${trendCell}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>`
}

// ─── 제품 카드 V2 (10국 Visibility 바 차트) ─────────────────────────────────────
function productCardV2Html(p, lang = 'ko', opts = {}) {
  const st = statusInfo(p.status, lang)
  const showTrendTabs = opts.showTrendTabs === true
  const useMonthly = opts.trendMode === 'monthly'
  // 주간/월간 모드별 점수·직전값 (periodStats — 마지막 두 유효값으로 prev 산출)
  const wStat = periodStats(p, 'weekly')
  const mStat = periodStats(p, 'monthly')
  const activeStat = useMonthly ? mStat : wStat
  const curRatio = p.compRatio || Math.round(p.vsComp > 0 ? (p.score / p.vsComp) * 100 : 100)
  const ratioColor = curRatio >= 100 ? '#15803D' : curRatio >= 80 ? '#E8910C' : '#BE123C'
  const _scoreNum = s => `<span style="font-size:18px;font-weight:900;color:#1A1A1A;font-family:${EM_FONT};">${s.score.toFixed(1)}<span style="font-size:11px;color:#94A3B8;">%</span></span>`
  const _deltaDivStyle = 'clear:both;font-size:10px;color:#94A3B8;font-family:' + EM_FONT + ';text-align:right;margin-top:1px;'
  const scoreBlock = showTrendTabs
    ? `<span class="trend-weekly">${_scoreNum(wStat)}</span><span class="trend-monthly" style="display:none;">${_scoreNum(mStat)}</span>`
    : _scoreNum(activeStat)
  const badgeBlock = showTrendTabs
    ? `<span class="trend-weekly">${periodBadgeHtml('weekly', lang)}</span><span class="trend-monthly" style="display:none;">${periodBadgeHtml('monthly', lang)}</span>`
    : periodBadgeHtml(activeStat.mode, lang)
  const deltaBlock = showTrendTabs
    ? `<div class="trend-weekly" style="${_deltaDivStyle}">${periodDeltaHtml(wStat, 10)}</div><div class="trend-monthly" style="display:none;${_deltaDivStyle}">${periodDeltaHtml(mStat, 10)}</div>`
    : `<div style="${_deltaDivStyle}">${periodDeltaHtml(activeStat, 10)}</div>`
  const prodName = opts.prodNameFn ? opts.prodNameFn(p) : p.kr

  // 10국 데이터
  const cntyData = (opts.productsCnty || []).filter(r => {
    const prodId = (p.id || '').toLowerCase()
    const rProd = (r.product || '').toLowerCase()
    return rProd === prodId || rProd === (p.category || '').toLowerCase() || rProd === (p.kr || '').toLowerCase()
  })
  const ALL_COUNTRIES = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN']
  const cntyMap = {}
  cntyData.forEach(r => { cntyMap[r.country] = r })
  const maxCnty = Math.max(...ALL_COUNTRIES.map(c => cntyMap[c]?.score || 0), 1)
  const BAR_H = 32
  const ulMap = opts.unlaunchedMap || {}

  // 순서: 그래프 → 점수 → 국가명 → 경쟁비
  const countryBars = ALL_COUNTRIES.map(c => {
    const r = cntyMap[c]
    const unlaunched = isUnlaunched(ulMap, c, p.id)
    // 해당 제품이 그 국가에 미출시면 가는 회색 막대(약 1%)와 '—' 라벨로 정렬 유지
    if (unlaunched) {
      const ulBarH = 2
      const ulSpacer = BAR_H - ulBarH
      return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%;">
        <tr><td height="${ulSpacer}" style="font-size:0;">&nbsp;</td></tr>
        <tr><td height="${ulBarH}" style="font-size:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="16" height="${ulBarH}" style="background:#94A3B8;border-radius:2px 2px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td style="font-size:10px;font-weight:700;color:#94A3B8;font-family:${EM_FONT};text-align:center;padding-top:1px;">—</td></tr>
        <tr><td style="font-size:8px;font-weight:700;color:#94A3B8;font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${cntyLabel2Line(c, lang)}</td></tr>
        <tr><td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};text-align:center;">—</td></tr>
      </table>
    </td>`
    }
    if (!r || r.score <= 0) return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%;">
        ${BAR_H > 0 ? `<tr><td height="${BAR_H}" style="font-size:0;">&nbsp;</td></tr>` : ''}
        <tr><td style="font-size:10px;color:#CBD5E1;font-family:${EM_FONT};text-align:center;">—</td></tr>
        <tr><td style="font-size:8px;color:#94A3B8;font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${cntyLabel2Line(c, lang)}</td></tr>
        <tr><td style="font-size:10px;color:#CBD5E1;font-family:${EM_FONT};text-align:center;">—</td></tr>
      </table>
    </td>`
    const cRatio = r.compScore > 0 ? Math.round(r.score / r.compScore * 100) : 100
    const cStatus = cRatio >= 100 ? 'lead' : cRatio >= 80 ? 'behind' : 'critical'
    const baseBarColor = cStatus === 'lead' ? '#15803D' : cStatus === 'behind' ? '#E8910C' : '#BE123C'
    const barColor = unlaunched ? '#94A3B8' : baseBarColor
    const labelColor = unlaunched ? '#94A3B8' : baseBarColor
    const barH = Math.max(3, Math.round(r.score / maxCnty * BAR_H))
    const spacer = BAR_H - barH
    const compTxt = r.compScore > 0 ? `${cRatio}%` : ''
    return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%;">
        ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;">&nbsp;</td></tr>` : ''}
        <tr><td height="${barH}" style="font-size:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="16" height="${barH}" style="background:${barColor};border-radius:2px 2px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td style="font-size:10px;font-weight:700;color:${labelColor};font-family:${EM_FONT};text-align:center;padding-top:1px;">${r.score != null ? r.score.toFixed(0) : '—'}</td></tr>
        <tr><td style="font-size:8px;font-weight:700;color:${labelColor};font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${cntyLabel2Line(c, lang)}</td></tr>
        <tr><td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};text-align:center;">${compTxt}</td></tr>
      </table>
    </td>`
  }).join('')

  return `
  <td width="33%" style="padding:3px;vertical-align:top;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border:2px solid ${st.border};border-radius:8px;background:#FFFFFF;font-family:${EM_FONT};">
      <tr>
        <td style="padding:5px 6px 3px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="vertical-align:middle;white-space:nowrap;">
                <span style="font-size:14px;font-weight:900;color:#1A1A1A;font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.9px' : '-0.5px'};">${escapeHtml(prodName)}</span>
                ${scoreBlock}&nbsp;${badgeBlock}
              </td>
              <td align="right" style="vertical-align:middle;">
                <table border="0" cellpadding="0" cellspacing="0" align="right" style="float:right;"><tr>
                  <td style="vertical-align:middle;white-space:nowrap;"><span style="font-size:13px;font-weight:700;color:${ratioColor};font-family:${EM_FONT};letter-spacing:-1px;">${escapeHtml(compShort(p.compName || 'Samsung') || 'SS')} ${curRatio}%</span></td>
                  <td style="vertical-align:middle;white-space:nowrap;padding-left:4px;"><span style="display:inline-block;background:${st.bg};color:${st.color};border:1px solid ${st.border};border-radius:5px;padding:0px 4px;font-size:10px;font-weight:700;line-height:15px;font-family:${EM_FONT};">${st.label}</span></td>
                </tr></table>${deltaBlock}
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:2px 4px 6px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
            <tr>${countryBars}</tr>
          </table>
        </td>
      </tr>
    </table>
  </td>`
}

// ─── 제품별 기본 비교 경쟁사 ──────────────────────────────────────────────────
// 기본은 1위 경쟁사(자사 제외 최고 비저빌리티) 자동 선정.
// 여기 항목 추가 시 해당 제품 카드 상단의 'SS XX%' 비교 대상이 고정됨.
const PREFERRED_COMP = {
  aircare: 'Xiaomi',
}
function getPreferredComp(prodId, allScores) {
  const pref = PREFERRED_COMP[(prodId || '').toLowerCase()]
  if (!pref || !allScores) return null
  // 대소문자 무시 매칭
  const match = Object.entries(allScores).find(([k]) => k.toLowerCase() === pref.toLowerCase() && k.toLowerCase() !== 'lg')
  return match ? { name: match[0], score: match[1] } : null
}
function compShort(name) { if (!name) return ''; return name.replace(/Samsung/gi,'SS').replace(/삼성/g,'SS').slice(0,6) }

// ─── 제품 카드 V3 (국가별 + 지정 경쟁사 비교) ──────────────────────────────────
function productCardV3Html(p, lang = 'ko', opts = {}) {
  const st = statusInfo(p.status, lang)
  // 지정 경쟁사 우선, 없으면 기존 1위 경쟁사
  const prefComp = getPreferredComp(p.id, p.allScores)
  const mainCompName = prefComp ? prefComp.name : (p.compName || 'Samsung')
  const mainCompScore = prefComp ? prefComp.score : (p.vsComp || 0)
  const curRatio = mainCompScore > 0 ? Math.round(p.score / mainCompScore * 100) : 100
  const ratioColor = curRatio >= 100 ? '#15803D' : curRatio >= 80 ? '#E8910C' : '#BE123C'
  const showTrendTabs = opts.showTrendTabs === true
  const useMonthly = opts.trendMode === 'monthly'
  // 주간/월간 모드별 점수·직전값 (periodStats — 마지막 두 유효값으로 prev 산출)
  const wStat = periodStats(p, 'weekly')
  const mStat = periodStats(p, 'monthly')
  const activeStat = useMonthly ? mStat : wStat
  const _scoreNum = s => `<span style="font-size:18px;font-weight:900;color:#1A1A1A;font-family:${EM_FONT};letter-spacing:-1.8px;">${s.score.toFixed(1)}<span style="font-size:11px;color:#94A3B8;letter-spacing:-1.1px;">%</span></span>`
  const _deltaDivStyle = 'clear:both;font-size:10px;color:#94A3B8;font-family:' + EM_FONT + ';text-align:right;margin-top:1px;'
  const scoreBlock = showTrendTabs
    ? `<span class="trend-weekly">${_scoreNum(wStat)}</span><span class="trend-monthly" style="display:none;">${_scoreNum(mStat)}</span>`
    : _scoreNum(activeStat)
  const badgeBlock = showTrendTabs
    ? `<span class="trend-weekly">${periodBadgeHtml('weekly', lang)}</span><span class="trend-monthly" style="display:none;">${periodBadgeHtml('monthly', lang)}</span>`
    : periodBadgeHtml(activeStat.mode, lang)
  const deltaBlock = showTrendTabs
    ? `<div class="trend-weekly" style="${_deltaDivStyle}">${periodDeltaHtml(wStat, 10)}</div><div class="trend-monthly" style="display:none;${_deltaDivStyle}">${periodDeltaHtml(mStat, 10)}</div>`
    : `<div style="${_deltaDivStyle}">${periodDeltaHtml(activeStat, 10)}</div>`
  const prodName = opts.prodNameFn ? opts.prodNameFn(p) : p.kr

  const cntyData = (opts.productsCnty || []).filter(r => {
    const prodId = (p.id || '').toLowerCase()
    const rProd = (r.product || '').toLowerCase()
    return rProd === prodId || rProd === (p.category || '').toLowerCase() || rProd === (p.kr || '').toLowerCase()
  })
  const ALL_COUNTRIES = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN']
  const cntyMap = {}
  cntyData.forEach(r => { cntyMap[r.country] = r })
  const maxCnty = Math.max(...ALL_COUNTRIES.map(c => cntyMap[c]?.score || 0), 1)
  const BAR_H = 28
  const ulMap = opts.unlaunchedMap || {}

  const countryBars = ALL_COUNTRIES.map(c => {
    const r = cntyMap[c]
    const unlaunched = isUnlaunched(ulMap, c, p.id)
    // 해당 제품이 그 국가에 미출시면 가는 회색 막대(약 1%)와 '—' 라벨로 정렬 유지
    if (unlaunched) {
      const ulBarH = 2
      const ulSpacer = BAR_H - ulBarH
      return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%;">
        <tr><td height="${ulSpacer}" style="font-size:0;">&nbsp;</td></tr>
        <tr><td height="${ulBarH}" style="font-size:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="16" height="${ulBarH}" style="background:#94A3B8;border-radius:2px 2px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td style="font-size:10px;font-weight:700;color:#94A3B8;font-family:${EM_FONT};text-align:center;padding-top:1px;">—</td></tr>
        <tr><td style="font-size:8px;font-weight:700;color:#94A3B8;font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${cntyLabel2Line(c, lang)}</td></tr>
        <tr><td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};text-align:center;white-space:nowrap;letter-spacing:-0.5px;">—<br/>—</td></tr>
      </table>
    </td>`
    }
    if (!r || r.score <= 0) return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%;">
        <tr><td height="${BAR_H}" style="font-size:0;">&nbsp;</td></tr>
        <tr><td style="font-size:10px;color:#CBD5E1;text-align:center;">—</td></tr>
        <tr><td style="font-size:8px;color:#94A3B8;font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${cntyLabel2Line(c, lang)}</td></tr>
        <tr><td style="font-size:0;height:10px;">&nbsp;</td></tr>
      </table>
    </td>`
    // 국가별 막대는 항상 해당 국가의 1위 경쟁사와 비교 (PREFERRED_COMP 무시)
    // — 카드 상단의 mainComp(고정 브랜드, 예: Aircare→Xiaomi)와 별개 운영
    const cCompName = r.compName || ''
    const cCompScore = r.compScore || 0
    const cRatio = cCompScore > 0 ? Math.round(r.score / cCompScore * 100) : 100
    const cStatus = cRatio >= 100 ? 'lead' : cRatio >= 80 ? 'behind' : 'critical'
    const baseBarColor = cStatus === 'lead' ? '#15803D' : cStatus === 'behind' ? '#E8910C' : '#BE123C'
    const barColor = unlaunched ? '#94A3B8' : baseBarColor
    const labelColor = unlaunched ? '#94A3B8' : baseBarColor
    const barH = Math.max(3, Math.round(r.score / maxCnty * BAR_H))
    const spacer = BAR_H - barH
    return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%;">
        ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;">&nbsp;</td></tr>` : ''}
        <tr><td height="${barH}" style="font-size:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="16" height="${barH}" style="background:${barColor};border-radius:2px 2px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td style="font-size:10px;font-weight:700;color:${labelColor};font-family:${EM_FONT};text-align:center;padding-top:1px;">${r.score != null ? r.score.toFixed(0) : '—'}</td></tr>
        <tr><td style="font-size:8px;font-weight:700;color:${labelColor};font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${cntyLabel2Line(c, lang)}</td></tr>
        <tr><td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};text-align:center;white-space:nowrap;letter-spacing:-0.5px;">${compShort(cCompName)}<br/>${cCompScore > 0 ? cRatio + '%' : ''}</td></tr>
      </table>
    </td>`
  }).join('')

  return `
  <td width="33%" style="padding:3px;vertical-align:top;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border:2px solid ${st.border};border-radius:8px;background:#FFFFFF;font-family:${EM_FONT};">
      <tr>
        <td style="padding:5px 6px 3px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="vertical-align:middle;white-space:nowrap;">
                <span style="font-size:14px;font-weight:900;color:#1A1A1A;font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.9px' : '-0.5px'};">${escapeHtml(prodName)}</span>
                ${scoreBlock}&nbsp;${badgeBlock}
              </td>
              <td align="right" style="vertical-align:middle;">
                <table border="0" cellpadding="0" cellspacing="0" align="right" style="float:right;"><tr>
                  <td style="vertical-align:middle;white-space:nowrap;"><span style="font-size:13px;font-weight:700;color:${ratioColor};font-family:${EM_FONT};letter-spacing:-1.3px;">${compShort(mainCompName)} ${curRatio}%</span></td>
                  <td style="vertical-align:middle;white-space:nowrap;padding-left:4px;"><span style="display:inline-block;background:${st.bg};color:${st.color};border:1px solid ${st.border};border-radius:5px;padding:0px 4px;font-size:10px;font-weight:700;line-height:15px;font-family:${EM_FONT};">${st.label}</span></td>
                </tr></table>${deltaBlock}
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:2px 4px 6px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
            <tr>${countryBars}</tr>
          </table>
        </td>
      </tr>
    </table>
  </td>`
}

// ─── BU 섹션 ──────────────────────────────────────────────────────────────────
function buSectionHtml(buKey, buProducts, globalMax, globalMin, lang = 'ko', opts = {}) {
  const t = T[lang] || T.ko
  const buTotal = (opts.buTotals || {})[buKey]
  const rows = []
  for (let i = 0; i < buProducts.length; i += 3) {
    const rowProducts = buProducts.slice(i, i + 3)
    while (rowProducts.length < 3) rowProducts.push(null)
    rows.push(rowProducts)
  }

  const cardVersion = opts.productCardVersion || 'v1'
  const cardFn = cardVersion === 'v3' ? productCardV3Html
    : cardVersion === 'v2' ? productCardV2Html : null

  const rowsHtml = rows.map(row => `
    <tr>
      ${row.map(p => {
        if (p === null) return '<td width="33%" style="padding:5px;"></td>'
        return cardFn ? cardFn(p, lang, opts) : productCardHtml(p, globalMax, globalMin, lang, opts)
      }).join('')}
    </tr>`).join('')

  // BU 경쟁비 계산
  const buRatio = buTotal && buTotal.comp > 0 ? Math.round(buTotal.lg / buTotal.comp * 100) : null
  const buRatioColor = buRatio ? (buRatio >= 100 ? '#15803D' : buRatio >= 80 ? '#E8910C' : '#BE123C') : '#94A3B8'
  const buScoreHtml = buRatio
    ? `<span style="font-size:14px;font-weight:700;color:${buRatioColor};font-family:${EM_FONT};">vs SS ${buRatio}%</span><span style="font-size:13px;color:#94A3B8;font-family:${EM_FONT};"> · ${buProducts.length}${t.categories}</span>`
    : `<span style="font-size:14px;color:#94A3B8;font-family:${EM_FONT};">${buProducts.length}${t.categories}</span>`

  return `
  <!-- ${buKey} BU 헤더 -->
  <tr>
    <td style="padding:8px 0 6px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="background:#F1F5F9;border-radius:7px;padding:7px 12px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:17px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(buKey)}</td>
                <td align="right">${buScoreHtml}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- ${buKey} 제품 카드 -->
  <tr>
    <td style="padding-bottom:8px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        ${rowsHtml}
      </table>
    </td>
  </tr>`
}

// ─── Insight / HowToRead 블록 (이메일용) ────────────────────────────────────
// fields: { insight: 'productInsight', howToRead: 'productHowToRead' } — editable 모드 인라인 편집 매핑
function insightBlockHtml(insight, showInsight, howToRead, showHowToRead, lang = 'ko', fields = {}) {
  const t = T[lang] || T.ko
  let html = ''
  if (showInsight && (insight || (_ED && fields.insight))) {
    html += `
    <tr>
      <td style="padding:10px 16px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-radius:8px;background:#FFF4F7;border:1px solid #F5CCD8;">
          <tr>
            <td style="padding:12px 16px;">
              <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};letter-spacing:0.5px;">${t.insight}</p>
              ${edBlock(fields.insight, insight, { size: 13, lh: 22, color: '#1A1A1A', accent: EM_RED, lang })}
            </td>
          </tr>
        </table>
      </td>
    </tr>`
  }
  if (showHowToRead && (howToRead || (_ED && fields.howToRead))) {
    html += `
    <tr>
      <td style="padding:0 16px 10px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-radius:8px;background:#F8FAFC;border:1px solid #E2E8F0;">
          <tr>
            <td style="padding:12px 16px;">
              <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#64748B;font-family:${EM_FONT};letter-spacing:0.5px;">${t.howToRead}</p>
              ${edBlock(fields.howToRead, howToRead, { size: 13, lh: 22, color: '#475569', accent: '#64748B', lang })}
            </td>
          </tr>
        </table>
      </td>
    </tr>`
  }
  return html
}

// ─── 6월 인사이트 V2 (CEO 보고서 기반) ─────────────────────────────────────────
// 소스: "2026년 6월 글로벌 GEO Visibility 등락 CEO 보고서" — Executive Summary + §1 + §2 (사용자 텍스트 그대로).
// 토글: meta.showInsightV2 (Sidebar '6월 인사이트 V2'). 기존 totalInsight 블록(V1)과 독립 온오프.
// 배치: 최상단 EXECUTIVE SUMMARY 검은 박스(V1 위치) 안에 exec 요약이 들어가고,
//       본문(표·패턴·실증)은 같은 섹션 카드 안에 이어짐 → { execHtml, bodyHtml } 반환.
// 이메일 호환: table-layout only / 인라인 style / flex·grid 금지 (newsletter-guard).
// 편집 모드(_ED): 모든 텍스트(제목·산문·표·원문 인용 포함)를 data-edit 인라인 편집 → 저장값(meta.v2*)이 기본을 덮어씀.
function insightV2Parts(meta = {}, lang = 'ko', products = []) {
  const M = meta || {}
  const MONO = "'Courier New',Courier,monospace"
  const dC = s => String(s).indexOf('+') === 0 ? '#16A34A' : '#DC2626'
  const term = s => `<span style="font-family:${MONO};font-weight:700;background:#F1F5F9;border-radius:4px;padding:0 4px;">${s}</span>`
  const termDark = s => `<span style="font-family:${MONO};font-weight:700;background:#1E2433;border-radius:4px;padding:0 4px;color:#FDA4AF;">${s}</span>`
  // 편집 가능 산문: 저장값 우선, 없으면 기본 문구 — data-edit 는 _ED 에서만 부착.
  const ed = (field, def) => `<span${edRich(field)}>${M[field] != null ? M[field] : def}</span>`
  // 블록(표 등) 통째 편집 — div 래퍼 (span 안에 table 은 비정상 HTML)
  const edWrap = (field, def) => `<div${edRich(field)}>${M[field] != null ? M[field] : def}</div>`
  // KO/EN 기본 문구 — EN 미리보기·발송에서 자동 영문 (편집값은 그대로, 미편집 시 언어별 기본)
  const L = (ko, en) => lang === 'en' ? en : ko

  // ── [수치 테이블 V2] Visibility 5→6월 대조 — 사용자 제공 데이터 그대로 (좌: TV·RAC / 우: 냉장고·세탁기) ──
  // Outlook 행 높이 어긋남 방지: nowrap(줄바꿈 금지) + line-height 고정(mso-line-height-rule:exactly)
  // + th/td height 속성 — 행 높이를 픽셀 단위로 고정
  const thS = `padding:5px 0;font-size:13px;font-weight:700;color:#475569;background:#F8FAFC;border-bottom:2px solid ${EM_RED};text-align:center;font-family:${EM_FONT};letter-spacing:-0.3px;white-space:nowrap;line-height:20px;mso-line-height-rule:exactly;`
  const tdS = `padding:3px 0;font-size:13px;color:#1A1A1A;border-bottom:1px solid #F1F5F9;text-align:center;font-family:${EM_FONT};letter-spacing:-0.3px;white-space:nowrap;line-height:20px;mso-line-height-rule:exactly;`
  const brandC = b => /^lg/i.test(b) ? EM_RED : /samsung/i.test(b) ? '#3B82F6' : '#64748B'
  const visL = [
    ['TV', 'SAMSUNG', '90.0%', '88.8%', '-1.2%p'],
    ['TV', 'LG', '87.4%', '87.3%', '-0.2%p'],
    ['RAC', 'LG', '44.8%', '43.0%', '-1.8%p'],
    ['RAC', 'SAMSUNG', '18.4%', '17.1%', '-1.2%p'],
  ]
  const visR = [
    ['냉장고', 'LG', '43.9%', '41.4%', '-2.5%p'],
    ['냉장고', 'SAMSUNG', '44.2%', '41.3%', '-2.9%p'],
    ['세탁기', 'LG', '39.9%', '38.3%', '-1.6%p'],
    ['세탁기', 'SAMSUNG', '34.9%', '32.8%', '-2.1%p'],
  ]
  const prdEnMap = { 'TV': 'TV', 'RAC': 'RAC', '냉장고': 'Refrigerator', '세탁기': 'Washer' }
  // ── Outlook(Word 엔진) 정렬 최종안: 좌우를 "하나의 표(10컬럼)" 로 통합 ──
  // 두 표로 나누면 Word 가 폭·행높이를 표마다 따로 계산해 어긋남 (폭 % 무시·padding 폭 가산·내용별 행높이).
  // 단일 표 = 같은 <tr> 공유 → 행 높이 자동 일치, width 100% → 다른 박스와 동일 너비, 넘침 없음.
  const VIS_COL_PCT = ['8%', '12%', '10%', '10%', '10%']  // 제품군/브랜드/5월/6월/변동 ×2 = 100%
  const midDiv = 'border-left:2px solid #E8EDF2;'  // 좌우 구분 세로선 (우측 절반 첫 컬럼)
  // rTL/rTR: 표 전체의 좌상/우상 라운드 — 헤더 배경이 외곽 라운드 밖으로 각지게 삐져나오는 것 방지
  const visHeadCells = (div, rTL = '', rTR = '') => `
        <th height="30" width="${VIS_COL_PCT[0]}" style="${thS}${div}${rTL}">${L('제품군', 'Product')}</th>
        <th height="30" width="${VIS_COL_PCT[1]}" style="${thS}text-align:left;padding-left:8px;">${L('브랜드', 'Brand')}</th>
        <th height="30" width="${VIS_COL_PCT[2]}" style="${thS}">${L('5월 Visibility', 'May Vis.')}</th>
        <th height="30" width="${VIS_COL_PCT[3]}" style="${thS}">${L('6월 Visibility', 'Jun Vis.')}</th>
        <th height="30" width="${VIS_COL_PCT[4]}" style="${thS}${rTR}">${L('변동(%p)', 'Δ (%p)')}</th>`
  // bb: 마지막 행 border-bottom 제거(외곽 라운드 위에 가로선 보이는 것 방지), rBL/rBR: 좌하/우하 라운드
  const visRowCells = (r, groupTop, div, bb = '', rBL = '', rBR = '') => `
        <td height="26" style="${tdS}${groupTop}${div}${bb}${rBL}font-weight:700;">${L(r[0], prdEnMap[r[0]] || r[0])}</td>
        <td height="26" style="${tdS}${groupTop}${bb}text-align:left;padding-left:8px;font-weight:800;color:${brandC(r[1])};">${r[1]}</td>
        <td height="26" style="${tdS}${groupTop}${bb}">${r[2]}</td>
        <td height="26" style="${tdS}${groupTop}${bb}font-weight:700;">${r[3]}</td>
        <td height="26" style="${tdS}${groupTop}${bb}${rBR}font-weight:800;color:${dC(r[4])};">${r[4]}</td>`
  const visTblHtml = `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100%;table-layout:fixed;border-collapse:separate;border-spacing:0;background:#FFFFFF;border:1px solid #E8EDF2;border-radius:10px;">
      <tr>${visHeadCells('', 'border-top-left-radius:9px;')}${visHeadCells(midDiv, '', 'border-top-right-radius:9px;')}</tr>
      ${visL.map((rL, i) => {
        const rR = visR[i]
        const gtL = i > 0 && rL[0] !== visL[i - 1][0] ? 'border-top:2px solid #E8EDF2;' : ''
        const gtR = i > 0 && rR[0] !== visR[i - 1][0] ? 'border-top:2px solid #E8EDF2;' : ''
        const isLast = i === visL.length - 1
        const bb = isLast ? 'border-bottom:0;' : ''
        return `<tr${i % 2 === 0 ? ' style="background:#FAFBFC;"' : ''}>${visRowCells(rL, gtL, '', bb, isLast ? 'border-bottom-left-radius:9px;' : '')}${visRowCells(rR, gtR, midDiv, bb, '', isLast ? 'border-bottom-right-radius:9px;' : '')}</tr>`
      }).join('')}
    </table>`

  // ── [실증 예시] 원문 대조 2건 (무삭제 원문 + 번역 그대로) ──
  const quoteBox = (label, labelColor, enF, en, koF, ko) => `
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;margin-top:8px;">
      <tr>
        <td style="padding:10px 14px;background:#F8FAFC;border:1px solid #E8EDF2;border-left:3px solid ${labelColor};border-radius:8px;word-break:break-word;">
          <p style="margin:0 0 6px;font-size:10px;font-weight:800;color:${labelColor};font-family:${EM_FONT};letter-spacing:1px;">${label}</p>
          <p style="margin:0 0 8px;font-size:13px;color:#334155;line-height:20px;font-family:${MONO};word-break:break-word;overflow-wrap:anywhere;">${ed(enF, en)}</p>
          <p style="margin:0;font-size:13px;color:#64748B;line-height:20px;font-family:${EM_FONT};letter-spacing:-0.3px;">${ed(koF, ko)}</p>
        </td>
      </tr>
    </table>`
  const cases = [
    { titleF: 'v2C1Title', title: L('[실증 예시 1] 세탁기·건조기 / WM 카테고리 (UK 영국) - "가장 조용한 세탁건조기 추천"', '[Case 1] Washer·Dryer / WM Category (UK) - "Best quiet washer-dryer recommendation"'),
      descF: 'v2C1Desc', desc: '5월 Baseline에서는 삼성과 LG가 유통망 가격대와 함께 나란히 추천되었으나, 6월 Target 답변에서는 <strong>삼성전자 제품 추천이 본문에서 빠지고 LG전자만 다이렉트 드라이브 모터 기술이 인용되며 추천이 유지</strong>된 대조 사례입니다.',
      insF: 'v2C1Insight', pF: 'v2C1Prompt', bEnF: 'v2C1Ben', bKoF: 'v2C1Bko', tEnF: 'v2C1Ten', tKoF: 'v2C1Tko',
      keepF: 'v2C1Keep', keep: L('LG전자는 리테일 추천과 함께 기술 스펙 설명이 등장하는 사례가 있어, 서술이 스펙 중심으로 바뀐 뒤에도 본문에 남는 경우가 관찰되었습니다.', 'LG cases often pair retail recommendations with technical spec descriptions, so LG tended to remain in the body even after answers shifted to spec-centric wording.'),
      prompt: 'What is the best quiet washer dryer combo?',
      b_en: 'If your top priority is a quiet, reliable washer-dryer combo in the UK, the sweet spot is usually a model with an inverter/direct-drive motor, good anti-vibration control, and a spin noise level under about 72 dB. Independent guides and user reviews consistently point toward Bosch, Samsung (Ecobubble series at £649 on Currys), LG (Direct Drive Series at £699 on Argos), and Miele as the quietest premium options available.',
      b_ko: L('영국에서 조용하고 신뢰할 수 있는 세탁 건조기 콤보가 최우선 순위라면, 인버터/다이렉트 드라이브 모터, 우수한 진동 방지 제어 및 72dB 미만의 탈수 소음 수준을 갖춘 모델이 이상적입니다. 독립 가이드 및 사용자 리뷰는 지속적으로 보쉬, 삼성(Currys에서 649파운드에 판매되는 에코버블 시리즈), LG(Argos에서 699파운드에 판매되는 다이렉트 드라이브 시리즈) 및 밀레를 사용 가능한 가장 조용한 프리미엄 옵션으로 꼽습니다.', 'Interpretation: For the UK, the ideal quiet washer-dryer combo has an inverter/direct-drive motor, good anti-vibration control, and spin noise under ~72 dB. Independent guides and user reviews consistently point to Bosch, Samsung (Ecobubble, £649 at Currys), LG (Direct Drive, £699 at Argos), and Miele as the quietest premium options.'),
      t_en: 'If your top priority is quiet operation, focus on machines with low spin noise (ideally under 72 dB), an inverter/direct-drive motor, and strong vibration control. In the UK market, Miele, AEG, and some LG models are generally regarded as the quietest premium options.<br/><br/>### Best Value Quiet Option: LG Direct Drive Washer-Dryer<br/>LG\'s Direct Drive models are frequently praised for low vibration and quiet operation thanks to the motor being attached directly to the drum.',
      t_ko: L('조용한 작동이 최우선 과제라면 탈수 소음이 적고(이상적으로는 72dB 미만), 인버터/다이렉트 드라이브 모터 및 강력한 진동 제어 기능을 갖춘 세탁기에 집중하십시오. 영국 시장에서는 밀레, AEG 및 일부 LG 모델이 일반적으로 가장 조용한 프리미엄 옵션으로 간주됩니다.<br/><br/>### 가성비 우수 조용한 옵션: LG 다이렉트 드라이브 세탁건조기<br/>LG의 다이렉트 드라이브(Direct Drive) 모델은 모터가 드럼에 직접 부착되어 진동이 적고 조용하게 작동한다는 점에서 자주 찬사를 받습니다.', 'Interpretation: If quiet operation is the top priority, focus on machines with low spin noise (ideally under 72 dB), an inverter/direct-drive motor, and strong vibration control. In the UK, Miele, AEG, and some LG models are generally regarded as the quietest premium options.<br/><br/>### Best value quiet option: LG Direct Drive washer-dryer<br/>Frequently praised for low vibration and quiet operation thanks to the motor attached directly to the drum.'),
      insight: '5월 Baseline에 함께 노출되었던 <strong>삼성 브랜드명과 에코버블(Ecobubble) 라인업 명칭이 6월 Target 답변에서는 사라졌습니다.</strong> 반면 LG전자는 <strong>Direct Drive</strong> 스펙 서술을 근거로 추천 목록에 남아 노출이 이어졌습니다.' },
    { titleF: 'v2C2Title4', title: L('[답변 예시 2] Styler (UK) — "제품 직접 비교에서 자사 기술 스펙 중심의 답변 노출로 변경"', '[Case 2] Styler (UK) — "Shift to answers centered on our own tech specs instead of direct product comparison"'),
      pF: 'v2C2Prompt4', bEnF: 'v2C2Ben4', bKoF: 'v2C2Bko4', tEnF: 'v2C2Ten4', tKoF: 'v2C2Tko4',
      keepF: 'v2C2Keep2', keep: L(`(강화) 5월에는 LG Styler와 Samsung AirDresser를 나열하고 직접 비교하는 답변이었으나, 6월에는 경쟁사(Samsung AirDresser)가 답변에서 빠지고 자사 제품 단독 추천으로 바뀜. 특히 5월에 없던 자사 고유 기술명 TrueSteam이 6월에 새롭게 등장하며, 소음·성능을 기술 스펙(무빙 행어, 탈취·건조·살균 기능) 중심으로 서술하는 형태로 답변 구조가 변경됨.`, `(Strengthened) In May the answer listed and directly compared LG Styler and Samsung AirDresser; in June the competitor (Samsung AirDresser) dropped out and only our product was recommended. Notably, the LG-coined term TrueSteam newly appeared in June, with noise/performance described around tech specs (moving hanger, deodorize·dry·sanitize).`),
      promptRaw: '"What is the best quiet steam closet?"',
      b_en: `"The consensus leans toward the LG Styler range rather than the Samsung AirDresser. The LG models generally run with softer vibration-based steaming and lower perceived noise. Best overall (quietest + most refined): LG Styler S3WF WiFi-enabled — £1,159.00 · AO.com. Typically reported around 50–55 dB in real-world use, quieter than most AirDresser models. Better wrinkle smoothing thanks to LG's moving hanger system. App control via ThinQ / Samsung's SmartThings integration on Samsung side."`,
      b_ko: L(`여론은 삼성 에어드레서보다 LG 스타일러 쪽으로 기운다. LG 모델은 대체로 더 부드러운 진동 기반 스티밍으로 체감 소음이 낮다. 종합 최고(가장 조용하고 가장 정교함) — LG 스타일러 S3WF WiFi 모델 · £1,159.00 · AO.com. 실사용 시 약 50–55 dB 수준으로 보고되며 대부분의 에어드레서 모델보다 조용하다. LG의 무빙 행어 시스템 덕분에 주름 완화 성능이 더 낫다. 앱 제어는 ThinQ(삼성 측은 SmartThings 연동).`, `Interpretation: Opinion leans toward the LG Styler over the Samsung AirDresser — softer vibration-based steaming and lower perceived noise. Best overall: LG Styler S3WF WiFi (£1,159.00 · AO.com), ~50–55 dB in real use, better wrinkle smoothing via LG's moving hanger system; app control via ThinQ (SmartThings on the Samsung side).`),
      t_en: `"Best overall quiet steam closet: LG Styler Steam Closet. The LG Styler is widely considered the most complete 'steam closet' system for home use. Uses TrueSteam technology to refresh, deodorize, and reduce wrinkles. Gentle moving hanger system reduces fabric noise and improves steam coverage. Can run cycles while you're in the same room without being disruptive. Also includes drying + sanitizing functions, not just steaming."`,
      t_ko: L(`종합 최고의 조용한 스팀 클로젯 — LG 스타일러 스팀 클로젯. LG 스타일러는 가정용으로 가장 완성도 높은 '스팀 클로젯' 시스템으로 널리 평가된다. TrueSteam(트루스팀) 기술을 사용해 리프레시·탈취·주름 완화를 수행한다. 부드러운 무빙 행어 시스템이 옷감 소음을 줄이고 스팀 도달 범위를 개선한다. 같은 공간에 있어도 방해되지 않게 사이클을 돌릴 수 있다. 단순 스티밍뿐 아니라 건조 + 살균 기능까지 포함한다.`, `Interpretation: Best overall quiet steam closet — LG Styler. Widely considered the most complete home 'steam closet': TrueSteam refreshes, deodorizes and reduces wrinkles; the gentle moving hanger cuts fabric noise and improves steam coverage; runs without disruption in the same room; includes drying + sanitizing beyond steaming.`) },
  ]
  const caseCardArr = cases.map(cs => `
    <tr>
      <td style="padding-bottom:12px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;background:#FFFFFF;border:1px solid #E8EDF2;border-radius:10px;">
          <tr>
            <td style="padding:14px 16px 4px;word-break:break-word;">
              ${/* 설명·분석 Insight 박스 삭제 (사용자 지시) — 제목 → 자사 노출 유지 → 프롬프트 → 원문 인용 */''}
              <p style="margin:0 0 8px;font-size:14px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};letter-spacing:-0.5px;">${ed(cs.titleF, cs.title)}</p>
              ${cs.keep ? `<p style="margin:0 0 8px;font-size:13px;color:#334155;line-height:21px;font-family:${EM_FONT};letter-spacing:-0.3px;"><strong style="color:${EM_RED};">${L('자사 노출 유지', 'LG Exposure Retention')}</strong>: ${ed(cs.keepF, cs.keep)}</p>` : ''}
              <p style="margin:0;font-size:13px;color:#334155;font-family:${EM_FONT};"><strong>Prompt</strong>: ${ed(cs.pF, term(cs.promptRaw || `"${cs.prompt}"`))}</p>
              ${quoteBox(L('5월 원문 · 번역', 'MAY — ORIGINAL · INTERPRETATION'), '#64748B', cs.bEnF, cs.b_en, cs.bKoF, cs.b_ko)}
              ${quoteBox(L('6월 원문 · 번역', 'JUNE — ORIGINAL · INTERPRETATION'), EM_RED, cs.tEnF, cs.t_en, cs.tKoF, cs.t_ko)}
              <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td height="14" style="font-size:0;line-height:0;">&nbsp;</td></tr></table>
            </td>
          </tr>
        </table>
      </td>
    </tr>`)

  // ── Executive Summary 4개 항목 — title/body 편집 가능(v2Exec*) ──
  const execItem = (titleF, title, bodyF, body) => `
    <tr>
      <td style="padding-bottom:8px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#1E293B;border:1px solid #334155;border-radius:8px;">
          <tr>
            <td style="padding:12px 16px;">
              <p style="margin:0 0 6px;font-size:13px;font-weight:800;color:#FFFFFF;line-height:20px;font-family:${EM_FONT};letter-spacing:-0.3px;">${ed(titleF, title)}</p>
              <p style="margin:0;font-size:13px;color:#CBD5E1;line-height:21px;font-family:${EM_FONT};letter-spacing:-0.3px;">${ed(bodyF, body)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`

  // ── [A] EXECUTIVE SUMMARY — 1~3 항목 + 항목 아래 표·답변 예시 통합 (사용자 전체 반영본) ──


  // 항목 본문 (사용자 제공 전체 반영본 그대로 · 저장본 공통 적용 위해 필드 버전업 v2Ex*2)
  const ex1Ko = `주요 제품군의 브랜드 Visibility가 동반 하락한 가운데, <strong style="color:#FFFFFF;">삼성 -2.0%p(40.2%→38.2%)</strong>, <strong style="color:#FFFFFF;">LG -1.5%p(44.8%→43.3%)</strong>로 삼성의 하락 폭이 더 컸습니다.<br/><br/>하락은 노출이 높은 상위 브랜드에 집중됐고, 저노출 브랜드는 오히려 소폭 상승하거나 방어됐습니다. TV의 하이센스(+0.93%p)·TCL(+0.35%p), 에어컨의 Midea(+0.31%p)가 상승했고, 에어컨의 저노출 브랜드 삼성(-1.22%p)은 선도 브랜드 LG(-1.84%p)보다 덜 하락했습니다. 즉 노출이 큰 대형 브랜드일수록 하락 폭이 컸으며, 에어컨에서 LG 하락이 상대적으로 큰 것도 LG가 압도적 선도 브랜드(경쟁비 126%)이기 때문입니다.`
  const ex1En = `While brand Visibility fell together across key product lines, <strong style="color:#FFFFFF;">Samsung -2.0%p (40.2%→38.2%)</strong> and <strong style="color:#FFFFFF;">LG -1.5%p (44.8%→43.3%)</strong> — a larger drop for Samsung.<br/><br/>The decline concentrated in high-exposure brands while low-exposure brands edged up or held: Hisense (+0.93%p) and TCL (+0.35%p) in TV and Midea (+0.31%p) in AC rose, and in AC the low-exposure Samsung (-1.22%p) fell less than the leading LG (-1.84%p). The larger a brand's exposure, the bigger the drop — LG's relatively large AC decline reflects its dominant leadership (comp ratio 126%).`
  const ex2Ko = `AI 답변이 스펙 설명 중심으로 옮겨가면서, LG의 독자 기술 상표어는 작동 원리를 설명하는 문맥에서 인용돼 노출이 유지된 반면, 삼성의 명칭은 마케팅 라인업으로 분류돼 제외되는 경향이 나타났습니다.<br/><strong style="color:#FFFFFF;">TV</strong>: LG ${termDark('Brightness Booster')} (스펙 기술어) vs 삼성 ${termDark('The Frame')} / ${termDark('Neo QLED')} (마케팅 라인업)<br/><strong style="color:#FFFFFF;">냉장고</strong>: LG ${termDark('Inverter Linear')} (리니어 압축 스펙) vs 삼성 ${termDark('Bespoke')} (디자인 라인업)<br/><strong style="color:#FFFFFF;">세탁기</strong>: LG ${termDark('Direct-Drive')} / ${termDark('TrueSteam')} (직결 모터/스팀 스펙) vs 삼성 ${termDark('Bespoke AI')} / ${termDark('Ecobubble')} (마케팅 라인업)<br/><strong style="color:#FFFFFF;">에어컨</strong>: LG ${termDark('Dual Inverter')} (듀얼 인버터 스펙) vs 삼성 ${termDark('WindFree')} (마케팅 라인업)<br/><br/>답변 형태도 바뀌었습니다. 5월에는 여러 브랜드를 직접 추천했으나, 6월에는 소수 브랜드와 사용 시나리오 중심 서술로 전환됐습니다. 실제로 5월에 함께 추천되던 삼성이 6월 이후 목록에서 빠지고 LG만 노출이 유지되는 사례가 확인되며, 이는 5월 20주차부터 이어져 온 흐름입니다.<br/><br/><span style="color:#FDA4AF;">다만 브랜드명 언급이 줄었을 뿐, 개별 제품의 스펙·기능 설명은 그대로 유지되고 있습니다. 특히 LG가 명명한 기술어(Brightness Booster·Inverter Linear·Direct-Drive·Dual Inverter 등)가 AI의 기술 분류 언어로 정착된 경우, 브랜드 Visibility에는 잡히지 않아도 실질적 기술 인지도(Tech Presence)는 유지됩니다. 즉 Visibility 하락이 곧 브랜드 존재감 하락을 의미하지 않으며, 향후 기술어 기반 노출을 별도 지표로 관리할 필요가 있습니다.</span>`
  const ex2En = `As AI answers shifted toward spec-centric descriptions, LG's proprietary technical terms kept being cited in contexts explaining how features work, while Samsung's names tended to be classified as marketing lineups and excluded.<br/><strong style="color:#FFFFFF;">TV</strong>: LG ${termDark('Brightness Booster')} (spec term) vs Samsung ${termDark('The Frame')} / ${termDark('Neo QLED')} (marketing lineup)<br/><strong style="color:#FFFFFF;">Refrigerator</strong>: LG ${termDark('Inverter Linear')} (linear compressor spec) vs Samsung ${termDark('Bespoke')} (design lineup)<br/><strong style="color:#FFFFFF;">Washer</strong>: LG ${termDark('Direct-Drive')} / ${termDark('TrueSteam')} (direct-drive motor/steam spec) vs Samsung ${termDark('Bespoke AI')} / ${termDark('Ecobubble')} (marketing lineup)<br/><strong style="color:#FFFFFF;">Air Conditioner</strong>: LG ${termDark('Dual Inverter')} (dual inverter spec) vs Samsung ${termDark('WindFree')} (marketing lineup)<br/><br/>Answer style changed too: in May many brands were directly recommended; from June, responses shifted to fewer brands with usage-scenario narratives. Samsung, recommended alongside LG in May, dropped out from June while only LG kept its exposure — a trend continuing since week 20 of May.<br/><br/><span style="color:#FDA4AF;">However, only brand mentions decreased — spec and feature descriptions for individual products remain intact. Where LG-coined terms (Brightness Booster, Inverter Linear, Direct-Drive, Dual Inverter, etc.) have settled in as the AI's technical classification language, substantive tech recognition (Tech Presence) is maintained even if it does not register in brand Visibility. A Visibility drop therefore does not mean a drop in brand presence, and term-based exposure should be managed as a separate metric going forward.</span>`
  const ex3Ko = `AI가 스펙을 설명할 때 인용하는 독자 기술 상표어와 서드파티 독립 평가 매체(Rtings, Tom's Guide 등)의 노출 지면을 넓히는 GEO 전략을 지속 수행하고자 합니다. 닷컴은 이미 공신력 있는 제품 스펙 정보를 축적한 만큼, 각 제품 기능·스펙에 사용 맥락을 반영한 콘텐츠 생산을 지속할 예정입니다.`
  const ex3En = `We will continue the GEO strategy of expanding exposure through proprietary technical terms that AI cites when explaining specs and independent third-party review media (Rtings, Tom's Guide, etc.). As the dotcom has already accumulated authoritative spec information, we will keep producing content that reflects usage context for each product feature and spec.`
  const cap1Ko = `주요 제품에서  경쟁사 하락 폭이 크게 나타남. 변경된 LLM 답변 알고리즘 환경에서 삼성전자의 마케팅 키워드가 상대적으로 넓은 범위로 제외됨`
  const cap1En = `Competitor declines were pronounced in key products — under the changed LLM answer algorithm, Samsung marketing keywords were excluded over a relatively wide range.`
  const cap2Ko = `답변 알고리즘 변경에 따라, 다 브랜드의 다양한 제품을 직접적으로 언급하는 형태에서, 소수 브랜드 언급 및 사용 시나리오 형태로 답변 형태 변경`
  const cap2En = `With the answer-algorithm change, responses shifted from directly naming diverse products across many brands to mentioning few brands with usage scenarios.`
  const capP = `margin:2px 2px 8px;font-size:13px;color:#E2E8F0;line-height:20px;font-family:${EM_FONT};letter-spacing:-0.3px;word-break:break-word;`

  const execHtml = `
                              <p style="margin:0 0 12px;font-size:13px;color:#E2E8F0;line-height:22px;font-family:${EM_FONT};letter-spacing:-0.3px;">${ed('v2ExIntro2', L(`2026년 6월, AI 검색(Gemini·ChatGPT 등)의 답변 기조가 브랜드 직접 추천·마케팅 문구 인용에서 제품 스펙·사용 시나리오 등 기능 중심 서술로 전환되면서, 4대 핵심 가전(TV·냉장고·세탁기·에어컨)의 브랜드 노출이 주요 브랜드 공통으로 하락했습니다. 이러한 환경 변화 속에서도 세탁기(LG 38.3%, 경쟁비 117%, -1.6%p)와 에어컨(LG 43.0%, 경쟁비 126%, -1.8%p)은 확실한 우위를, TV(LG 87.3%, 경쟁비 98%, -0.2%p)와 냉장고(LG 41.4%, 경쟁비 100%, -2.5%p)는 삼성과 접전 수준을 유지했습니다. 특히 삼성의 하락 폭이 더 커, 양사 통합 가시성 격차는 <strong>5월 +4.6%p(LG 44.8% vs 삼성 40.2%)에서 6월 +5.1%p(LG 43.3% vs 삼성 38.2%)로 오히려 확대(+0.5%p)</strong>됐습니다.<br/><br/>이에 본 보고에서는 이러한 하락이 어떤 브랜드에 집중되었는지(1. 현상), 답변 방식 변화가 브랜드별 노출에 어떻게 다르게 작용했는지(2. 원인·답변 분석), 그리고 이에 대한 대응 방향(3. 대응)을 순차적으로 상세히 분석하고자 합니다.`, `In June 2026, as AI search (Gemini, ChatGPT, etc.) shifted from direct brand recommendations and marketing-copy citations to function-centric narratives (specs and usage scenarios), brand exposure fell across major brands for the four key appliances (TV, refrigerator, washer, AC). Even so, Washer (LG 38.3%, comp ratio 117%, -1.6%p) and AC (LG 43.0%, 126%, -1.8%p) kept a clear lead, while TV (LG 87.3%, 98%, -0.2%p) and Refrigerator (LG 41.4%, 100%, -2.5%p) stayed neck-and-neck with Samsung. With Samsung falling more, <strong>the combined visibility gap widened from +4.6%p in May (LG 44.8% vs Samsung 40.2%) to +5.1%p in June (LG 43.3% vs Samsung 38.2%) — up +0.5%p</strong>.<br/><br/>This report analyzes, in order, where the decline concentrated (1. Summary), how the change in answer style affected brands differently (2. Cause & Answer Analysis), and our response (3. Direction).`))}
                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
                                ${execItem('v2Ex1T2', L('1. 현상 요약 — 상위 노출 브랜드 중심 동반 하락, 저노출 브랜드는 소폭 상승 (TV·세탁기·냉장고·에어컨 상세 분석)', '1. Summary — Declines concentrated in high-exposure brands; low-exposure brands edged up (TV·Washer·Refrigerator·AC detail)'), 'v2Ex1B2', L(ex1Ko, ex1En))}
                                <tr><td style="padding:0 0 10px;">
                                  <p style="${capP}">${ed('v2T11Caption', L(cap1Ko, cap1En))}</p>
                                  ${edWrap('v2VisTblHtml8', visTblHtml)}
                                </td></tr>
                                ${execItem('v2Ex2T2', L('2. 원인 및 답변 분석 — 기술 스펙어는 인용 유지, 마케팅 라인업은 제외 (답변 형태도 시나리오 중심으로 변화)', '2. Cause & answer analysis — Spec terms kept cited, marketing lineups excluded (answers also shifted to scenario-centric)'), 'v2Ex2B2', L(ex2Ko, ex2En))}
                                <tr><td style="padding:0 0 2px;">
                                  <p style="${capP}">${ed('v2CaseCaption', L(cap2Ko, cap2En))}</p>
                                </td></tr>
                                ${caseCardArr[0] || ''}
                                ${caseCardArr[1] || ''}
                                ${execItem('v2Ex3T2', L('3. 대응 방향 — 독자 기술 스펙 콘텐츠 강화 및 외부 접점 채널 다변화 지속', '3. Direction — Keep strengthening proprietary spec content and diversifying external touchpoint channels'), 'v2Ex3B2', L(ex3Ko, ex3En))}
                              </table>`

  // 표·답변 예시가 exec 박스 안으로 통합됨 — 하단 별도 섹션 없음
  const bodyHtml = ''

  return { execHtml, bodyHtml }
}

// ─── 액션 아이템 V2 — 4개 실행 영역별 [실적 수치(트래커 연동) + 조직별 활동] + 7월 예정 ──
// 토글: meta.showTodoV2. 6월 주요 실적을 영역(외부채널/신규제작/콘텐츠수정/닷컴기술)별로,
// 각 영역 안에 조직(MS/HS/ES/글로벌컴/브랜드/고가혁/D2C)별 활동과 실적 수치(Progress
// Tracker categoryStats)가 이어지도록 정리. 내용은 사용자 제공 텍스트 그대로(OO건 등
// placeholder 포함 — 편집모드에서 채움). 수치는 라이브(편집 제외 — 트래커 얼라인 보장).
function actionItemsV2SectionHtml(meta = {}, lang = 'ko', categoryStats = null) {
  const M = meta || {}
  const L = (ko, en) => lang === 'en' ? en : ko
  const edT = (field, def) => `<span${edRich(field)}>${M[field] != null ? M[field] : def}</span>`
  const edWrapT = (field, def) => `<div${edRich(field)}>${M[field] != null ? M[field] : def}</div>`
  const gCol = r => r >= 100 ? '#15803D' : r >= 80 ? '#D97706' : '#BE123C'
  const fmtN = n => Number(n || 0).toLocaleString('en-US')
  const bar = (label, rate, actual, goal) => `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;"><tr>
      <td style="font-size:10px;color:#64748B;font-family:${EM_FONT};white-space:nowrap;padding-right:6px;" width="70">${label}</td>
      <td><table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F1F5F9;border-radius:3px;"><tr>
        <td width="${Math.max(2, Math.min(Math.round(rate || 0), 100))}%" style="height:7px;background:${gCol(rate || 0)};border-radius:3px;font-size:0;line-height:0;">&nbsp;</td>
        <td style="font-size:0;line-height:0;">&nbsp;</td>
      </tr></table></td>
      <td align="right" style="font-size:12px;font-weight:800;color:${gCol(rate || 0)};font-family:${EM_FONT};white-space:nowrap;padding-left:7px;" width="40">${(rate || 0).toFixed(0)}%</td>
      <td align="right" style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};white-space:nowrap;padding-left:5px;" width="80">(${fmtN(actual)}/${fmtN(goal)})</td>
    </tr></table>`
  const norm = v => String(v || '').replace(/\s+/g, '')
  const findStat = key => (categoryStats || []).find(c => norm(c.category) === key)
  const anyStat = (categoryStats || [])[0]
  const gMonth = (anyStat && anyStat.targetMonth) || L('이번 월', 'This Month')

  // ── 4개 실행 영역 × 조직별 6월 실적 (사용자 제공 텍스트 그대로 — OO건/00건 placeholder 포함) ──
  const cats = [
    { key: '외부채널관리', ko: '1. 외부 채널 관리', en: '1. External Channel Ops', f: 'todoV2ChBu',
      rows: [
        { org: 'MS', orgEn: 'MS',
          ko: 'Reddit — Megathread, 체험단 등 신규 콘텐츠 10건 제작<br/>Wikipedia — AI TV, Dynamic QNED Color, Hyper Mini LED 관련 6건 업데이트',
          en: 'Reddit — 10 new contents incl. Megathread & tester program<br/>Wikipedia — 6 updates on AI TV, Dynamic QNED Color, Hyper Mini LED' },
        { org: 'HS', orgEn: 'HS',
          ko: 'LinkedIn — B2B GEO 컨텐츠 OO건 발행<br/>News — 신소재, 쿠킹/빌트인 관련 컨텐츠 00건 발행<br/>Social — Instagram GEO 대응 카드섹션/전문가 컨텐츠 00건 게시, Youtube 인플루언서 제품리뷰/전문가 컨텐츠 00건 발행',
          en: 'LinkedIn — OO B2B GEO contents<br/>News — 00 contents on new materials, cooking/built-in<br/>Social — 00 Instagram GEO card sections/expert contents, 00 YouTube influencer reviews/expert contents' },
        { org: '글로벌컴', orgEn: 'GlobalComm',
          ko: 'LinkedIn — Corp / C-level 링크드인 콘텐츠 32건 발행<br/>News — 뉴스룸 GEO 최적화 보도자료 15건 발행, PRISM AI 기반 High Quality 기사 8000건 이상 발행 완료',
          en: 'LinkedIn — 32 Corp/C-level contents<br/>News — 15 GEO-optimized newsroom releases, 8,000+ PRISM AI high-quality articles published' },
        { org: '브랜드', orgEn: 'Brand',
          ko: 'Wikipedia — 브랜드 토픽 및 기술영어 영문페이지 10건 개편',
          en: 'Wikipedia — 10 English pages revamped (brand topics & technical terms)' },
      ] },
    { key: '신규콘텐츠제작', ko: '2. 신규 콘텐츠 제작', en: '2. New Content', f: 'todoV2NewBu',
      rows: [
        { org: 'HS', orgEn: 'HS',
          ko: '신규 Micosite Contents 발행 및 FAQ 추가 21건 진행',
          en: '21 new microsite contents & added FAQs in progress' },
        { org: 'ES', orgEn: 'ES',
          ko: 'AI Air Microsite 컨텐츠 4건 / PDP FAQ 10건 / Microsite FAQ 4건 신규 제작',
          en: '4 AI Air microsite contents / 10 PDP FAQs / 4 microsite FAQs newly created' },
      ] },
    { key: '콘텐츠수정', ko: '3. 기존 콘텐츠 수정', en: '3. Content Fix', f: 'todoV2FixBu',
      rows: [
        { org: 'MS', orgEn: 'MS',
          ko: 'PLP FAQ 제작 20건',
          en: '20 PLP FAQs created' },
        { org: '고가혁', orgEn: 'CVI',
          ko: 'Support Video Contents 스키마 마크업 및 구조화된 컨텐츠 적용 10건 개선',
          en: '10 support video contents improved with schema markup & structured content' },
      ] },
    { key: '닷컴기술개선', ko: '4. 닷컴 기술 개선', en: '4. Dotcom Tech Fix', f: 'todoV2TechBu',
      rows: [
        { org: 'D2C', orgEn: 'D2C',
          ko: '스키마 마크업 자동화 통합가이드 제작 및 검토를 진행으로 기술개선 하반기로 일정 재조정',
          en: 'Building & reviewing the integrated schema-markup automation guide — tech fix rescheduled to H2' },
      ] },
  ]
  const tdB = `padding:7px 10px;font-size:13px;color:#334155;border-bottom:1px solid #F1F5F9;vertical-align:top;font-family:${EM_FONT};letter-spacing:-0.3px;line-height:20px;word-break:break-word;`
  const buTable = c => `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;border-collapse:collapse;">
      ${c.rows.map((r, i) => `<tr${i % 2 === 0 ? ' style="background:#FAFBFC;"' : ''}>
        <td width="78" style="${tdB}text-align:center;font-weight:800;color:#475569;background:#F8FAFC;border-right:2px solid #E8EDF2;white-space:nowrap;${i === c.rows.length - 1 ? 'border-bottom:none;' : ''}">${L(r.org, r.orgEn)}</td>
        <td style="${tdB}${i === c.rows.length - 1 ? 'border-bottom:none;' : ''}">${L(r.ko, r.en)}</td>
      </tr>`).join('')}
    </table>`

  const catBlocks = cats.map(c => {
    const st = findStat(c.key)
    const metrics = st
      ? `${bar(L(`${gMonth} 달성률`, gMonth), st.monthRate, st.monthActual, st.monthGoal)}
         <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td height="3" style="font-size:0;line-height:0;">&nbsp;</td></tr></table>
         ${bar(L('연간 진척율', 'YTD'), st.progressRate, st.cumActual, st.annualGoal)}`
      : `<p style="margin:0;font-size:11px;color:#94A3B8;font-family:${EM_FONT};text-align:right;">${L('트래커 미동기 — 실적 수치 없음', 'Tracker not synced')}</p>`
    return `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;border:1px solid #E8EDF2;border-radius:10px;margin-bottom:14px;">
      <tr>
        <td style="padding:12px 14px 10px;background:#F8FAFC;border-bottom:1px solid #E8EDF2;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;"><tr>
            <td style="vertical-align:middle;" width="36%">
              <span style="display:inline-block;width:3px;height:14px;background:${EM_RED};border-radius:2px;vertical-align:middle;margin-right:7px;"></span><span style="font-size:14px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};vertical-align:middle;">${L(c.ko, c.en)}</span>
            </td>
            <td style="vertical-align:middle;">${metrics}</td>
          </tr></table>
        </td>
      </tr>
      <tr>
        <td style="padding:4px 0 0;">
          ${edWrapT(c.f, buTable(c))}
        </td>
      </tr>
    </table>`
  }).join('')

  // ── 전사 핵심 과제 기본 문구 (사용자 제공 텍스트 그대로 — 붉은 박스 본문) ──
  const noticeP1 = `margin:0 0 8px;font-size:13px;color:#1A1A1A;line-height:21px;font-family:${EM_FONT};letter-spacing:-0.3px;`
  const noticeP2 = `margin:0;font-size:13px;color:#1A1A1A;line-height:21px;font-family:${EM_FONT};letter-spacing:-0.3px;`
  const noticeKo = `<p style="${noticeP1}">GEO 개선을 위한 핵심 과제를 선정하여 각 담당 조직별로 개선 작업 진행 중이며, D2C에서 전사변화관리를 지원하기 위한 역할 수행 중</p>` +
    `<p style="${noticeP2}">• (핵심 과제1) 신규 콘텐츠 생성 : 신규 제품 FAQ 및 기술에 대한 신규 콘텐츠, GEO 고려한 Support 콘텐츠 제작 (사업본부/고가혁)<br/>• (핵심 과제2) 기존 콘텐츠 수정 : 닷컴 PDP, Summary Box, FAQ의 Agent 기반 자동 최적화(D2C) 및 콘텐츠 직접 수정(사업본부/고가혁)<br/>• (핵심 과제3) 닷컴 기술 개선 : 제품리뷰 및 Support Page의 데이터 라벨링을 통한 AI의 콘텐츠 인식 수치 제고 (D2C/고가혁)<br/>• (핵심 과제4) 외부 채널 관리 : 고인용 채널 별 Action Item 선정 및 진행 주체별로 월별 진척 목표 수립 진행 (각 조직별)<br/>• 전사변화 관리 : 핵심 KPI/ Stakeholders 별 진척도 대시보드 기반 추적, GEO Committee 를 통한 주요 진행 방향 협의 및 교육 진행(D2C)</p>`
  const noticeEn = `<p style="${noticeP1}">Key GEO improvement initiatives are underway by owning org, with D2C supporting company-wide change management.</p>` +
    `<p style="${noticeP2}">• (Initiative 1) New content creation: new product FAQs & tech contents, GEO-aware support contents (BUs/CVI)<br/>• (Initiative 2) Content fix: Agent-based auto optimization of dotcom PDP, Summary Box, FAQ (D2C) & direct fixes (BUs/CVI)<br/>• (Initiative 3) Dotcom tech fix: data labeling on product reviews & Support Pages to raise AI content recognition (D2C/CVI)<br/>• (Initiative 4) External channel ops: Action Items per high-citation channel with monthly targets per owner (each org)<br/>• Change management: KPI/stakeholder progress tracking via dashboard, alignment & training via GEO Committee (D2C)</p>`

  // ── 7월 진행 예정사항 — 조직별 정리 (선·색 없는 표, 조직명 강조 / 사용자 제공 텍스트 그대로) ──
  const nOrg = `vertical-align:top;padding:0 8px 14px 0;font-size:13px;font-weight:800;color:${EM_RED};font-family:${EM_FONT};letter-spacing:-0.3px;white-space:nowrap;`
  const nTxt = `vertical-align:top;padding:0 0 14px;font-size:13px;color:#334155;line-height:20px;font-family:${EM_FONT};letter-spacing:-0.3px;word-break:break-word;`
  const nRow = (org, body) => `<tr><td width="64" style="${nOrg}">${org}</td><td style="${nTxt}">${body}</td></tr>`
  const nextKo = `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;border-collapse:collapse;">
    ${nRow('ES', `RAC - 바잉가이드(용량(BTU), 제품 유형,사용 환경 및 주요 기능 등 구매여정 기반 정보성 인용 영역 확대) 및 아티클 4개 주제(에너지 효율, 에너지 절약, 스마트 컨트롤, 청소/관리 방법) 제작 진행 중<br/>Aircare - 바잉가이드(공간 크기, 오염 유형, 생활 패턴 등 구매여정 기반 정보성 인용 영역 확대) 및 아티클 4개 주제(필터, PM 2.5(먼지 유형), 청소/관리, 펫케어) 제작 진행 중`)}
    ${nRow('MS', `TV: 레딧 Micro RGB, Reflection Free 체험단 리뷰 및 닷컴 AI TV FAQ 업데이트 (진행 중), Wikipedia LG Shield 등록(완료).<br/>모니터: 레딧 1000Hz 게이밍모니터 관련 discussion 컨텐츠 3건 및 GX9, G9 체험단 리뷰 발행 (완료), Wikipedia 고화질(5K2K, 6K) 모니터 등록 예정.`)}
    ${nRow('D2C', `• 신규 Chat GPT 및 AI MAX 신규 광고 상품에 대한 PoC 준비 진행 중 (상품의 마케팅 효과성 및 운영 목적에 대한 각 본부별 협업으로 진행 중)<br/>• AI 기반의 LLM 모델 최적화 자동 진딘 및 콘텐츠 수정 Agent의 Global PoC 진행 중<br/>&nbsp;&nbsp;: 영국 대상 Gemini / ChatGPT 답변 반영 확인 및 성과 모니터링 진행 완료(Visibility 개선 확인), 추가 국가로 전략국가 9개국 확산 검토 중(미국제외)<br/>• 스키마 마크업 자동화 통합가이드 제작 완료  및 최종 개발 요건 검토(총 9종)<br/>• 제품 Review 영역의 Server-Side-Rendering 글로벌 Roll-Out (AI가 읽을 수있는 형태로 Review 데이터 변경)`)}
    ${nRow('글로벌컴', `• 전사 핵심 사업 과제 별 기업 내러티브 구성 및 컨텐츠/활동 기획:<br/>&nbsp;&nbsp;- AI DC 냉각솔루션: Visiblity 향상 위한 CEO 칼럼 및 파트너십 보도자료 배포, 외부 리서치 프로젝트 추진 중 (w/ ES본부), DCW Asia 연계 미디어 활동 기획 중<br/>&nbsp;&nbsp;- 스마트팩토리: 버티컬 별 사례 (반도체편) 기획 기사 제작 중<br/>&nbsp;&nbsp;- Physical AI/로보틱스: 데이터 팩토리 개소 연계 CEO 칼럼 제작 중<br/>• IFA 2026 행사 연계 보도자료 제작 및 법인 미디어 활동 기획 지원<br/>• 인도 IPO 1주년 연계 미디어 대상 활동 기획 지원<br/>• 본사 뉴스룸 개선 및 미국 뉴스룸 플랫폼 재정비 지원 진행 중`)}
  </table>`
  const nextEn = `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;border-collapse:collapse;">
    ${nRow('ES', `RAC - Buying guide (expand informative citation areas along the purchase journey: capacity (BTU), product type, usage environment, key features) & 4 article topics (energy efficiency, energy saving, smart control, cleaning/maintenance) in progress<br/>Aircare - Buying guide (room size, pollution type, lifestyle patterns) & 4 article topics (filters, PM 2.5 (dust types), cleaning/maintenance, pet care) in progress`)}
    ${nRow('MS', `TV: Reddit Micro RGB & Reflection Free tester reviews and dotcom AI TV FAQ update (in progress); Wikipedia LG Shield registered (done).<br/>Monitor: 3 Reddit discussions on 1000Hz gaming monitors & GX9/G9 tester reviews published (done); Wikipedia high-res (5K2K, 6K) monitor registration planned.`)}
    ${nRow('D2C', `• Preparing PoC for new ChatGPT & AI MAX ad products (cross-BU collaboration on marketing effectiveness & operating purpose)<br/>• Global PoC of the AI-based LLM-optimization auto-diagnosis & content-fix Agent in progress<br/>&nbsp;&nbsp;: UK Gemini/ChatGPT answer reflection & performance monitoring done (Visibility improvement confirmed); expansion to 9 strategic countries under review (excl. US)<br/>• Integrated schema-markup automation guide completed & final dev-requirement review (9 types total)<br/>• Global roll-out of Server-Side-Rendering for the product Review area (making review data AI-readable)`)}
    ${nRow('Global Comm', `• Building corporate narratives and planning content/activities for key company-wide business tasks:<br/>&nbsp;&nbsp;- AI DC cooling solutions: CEO column & partnership press releases to lift Visibility, external research project underway (w/ ES division), DCW Asia-linked media activities in planning<br/>&nbsp;&nbsp;- Smart factory: feature article on vertical cases (semiconductor edition) in production<br/>&nbsp;&nbsp;- Physical AI/robotics: CEO column tied to the Data Factory opening in production<br/>• IFA 2026 press releases & subsidiary media activity planning support<br/>• Media activity planning support for the India IPO 1st anniversary<br/>• HQ newsroom improvement & US newsroom platform re-organization support in progress`)}
  </table>`
  const nextBlock = `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;border:1px solid #E8EDF2;border-radius:10px;margin-bottom:8px;">
      <tr><td style="padding:12px 14px 10px;background:#F8FAFC;border-bottom:1px solid #E8EDF2;">
        <span style="display:inline-block;width:3px;height:14px;background:${EM_RED};border-radius:2px;vertical-align:middle;margin-right:7px;"></span><span style="font-size:14px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};vertical-align:middle;">${edT('todoV2NextTitle', L('조직별 주요 진행 예정 사항', 'Key Planned Items by Org'))}</span>
      </td></tr>
      <tr><td style="padding:12px 14px;word-break:break-word;">
        ${edWrapT('todoV2NextHtml3', L(nextKo, nextEn))}
      </td></tr>
    </table>`

  // ── 대시보드 바로가기 — 풀폭 붉은 박스 (Outlook 호환: td bgcolor + block 링크) ──
  const dashUrl = `https://my-geo-newsletter.onrender.com/p/GEO-KPI-Dashboard${lang === 'en' ? '-EN' : '-KO'}`
  const dashBanner = `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;margin:14px 0 8px;"><tr>
      <td bgcolor="${EM_RED}" align="center" style="border-radius:10px;">
        <a href="${dashUrl}" target="_blank" rel="noopener" style="display:block;padding:15px 10px;color:#FFFFFF;font-family:${EM_FONT};font-size:15px;font-weight:800;text-decoration:none;letter-spacing:0.3px;">${L('GEO 대시보드 바로가기', 'Open the GEO Dashboard')}</a>
      </td></tr></table>`

  return `<!-- ══ 액션 아이템 V2 (6월 주요 실적 + 7월 예정) ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0"><tr>
                          <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                          <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${edT('todoV2Title', 'Action Plan')}</td>
                        </tr></table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:18px 16px 10px;">
                        ${/* 전사 핵심 과제 — 기존 붉은 박스 그대로 (사용자 제공 텍스트) */''}
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFF4F7;border:1px solid #F5CCD8;border-radius:10px;margin-bottom:16px;">
                          <tr><td style="padding:14px 16px;word-break:break-word;">
                            <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};text-transform:uppercase;letter-spacing:0.5px;">${edT('todoV2NoticeLabel', L('전사 핵심 과제', 'Key Initiative'))}</p>
                            ${edWrapT('todoV2NoticeHtml', L(noticeKo, noticeEn))}
                          </td></tr>
                        </table>
                        <p style="margin:0 0 12px;font-size:15px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};">${edT('todoV2PerfTitle', L('◼️ 6월 주요 실적', '◼️ June Highlights'))}</p>
                        ${catBlocks}
                        <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td height="8" style="font-size:0;line-height:0;">&nbsp;</td></tr></table>
                        <p style="margin:0 0 12px;font-size:15px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};">${edT('todoV2NextSecTitle', L('◼️ 7월 진행 예정사항', '◼️ Planned for July'))}</p>
                        ${nextBlock}
                        ${dashBanner}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`
}

// ─── 국가별 Visibility ────────────────────────────────────────────────────────
function cntyStatus(score, compScore) {
  if (compScore <= 0) return 'lead'
  const ratio = score / compScore * 100
  if (ratio >= 100) return 'lead'
  if (ratio >= 80)  return 'behind'
  return 'critical'
}

function countryProductSectionHtml(productName, rows, lang) {
  const t = T[lang] || T.ko
  const maxScore = Math.max(...rows.map(r => Math.max(r.score, r.compScore)), 1)
  const BAR_MAX = 44

  const statuses      = rows.map(r => cntyStatus(r.score, r.compScore))
  const leadCount     = statuses.filter(s => s === 'lead').length
  const behindCount   = statuses.filter(s => s === 'behind').length
  const criticalCount = statuses.filter(s => s === 'critical').length

  const summaryParts = []
  if (leadCount)     summaryParts.push(`<span style="color:#15803D;font-weight:700;font-family:${EM_FONT};">${t.lead} ${leadCount}</span>`)
  if (behindCount)   summaryParts.push(`<span style="color:#E8910C;font-weight:700;font-family:${EM_FONT};">${t.behind} ${behindCount}</span>`)
  if (criticalCount) summaryParts.push(`<span style="color:#BE123C;font-weight:700;font-family:${EM_FONT};">${t.critical} ${criticalCount}</span>`)

  const colWidth = Math.floor(100 / rows.length)

  // 세로 바 컬럼들
  const barCols = rows.map(r => {
    const status   = cntyStatus(r.score, r.compScore)
    const barColor = status === 'lead' ? '#15803D' : status === 'behind' ? '#E8910C' : '#BE123C'
    const barH     = Math.max(Math.round((r.score / maxScore) * BAR_MAX), 3)
    const spacerH  = BAR_MAX - barH
    const ratio    = r.compScore > 0 ? Math.round((r.score / r.compScore) * 100) : 100
    const gapColor = ratio >= 100 ? '#15803D' : ratio >= 80 ? '#E8910C' : '#BE123C'
    const gapStr   = ratio + '%'

    return `<td width="${colWidth}%" style="vertical-align:bottom;text-align:center;padding:0 1px;overflow:hidden;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;table-layout:fixed;width:100%;">
        ${spacerH > 0 ? `<tr><td height="${spacerH}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td height="${barH}" style="font-size:0;line-height:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="26" height="${barH}" style="background:${barColor};border-radius:3px 3px 0 0;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td style="font-size:13px;font-weight:800;color:${barColor};font-family:${EM_FONT};padding-top:3px;white-space:nowrap;overflow:hidden;">${r.score != null ? r.score.toFixed(1) : '—'}</td></tr>
        <tr><td style="font-size:12px;color:#475569;font-family:${EM_FONT};padding-top:2px;white-space:nowrap;overflow:hidden;">${escapeHtml(r.country)}</td></tr>
        <tr><td style="font-size:11px;color:#94A3B8;font-family:${EM_FONT};padding-top:2px;white-space:nowrap;overflow:hidden;">${ssName(r.compName)} ${r.compScore != null ? r.compScore.toFixed(1) : '—'}</td></tr>
        <tr><td style="font-size:11px;font-weight:700;color:${gapColor};font-family:${EM_FONT};padding-top:1px;white-space:nowrap;overflow:hidden;">${gapStr}</td></tr>
      </table>
    </td>`
  }).join('')

  return `
  <tr>
    <td style="padding:8px 0 4px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="background:#F1F5F9;border-radius:7px;padding:7px 12px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:16px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(productName)}</td>
                <td align="right" style="font-size:13px;">
                  ${summaryParts.join(`<span style="color:#CBD5E1;font-family:${EM_FONT};"> &nbsp;·&nbsp; </span>`)}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 4px 12px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
        <tr>${barCols}</tr>
      </table>
    </td>
  </tr>`
}

function countryCardHtml(cntyCode, rows, lang, countryTotals, unlaunchedMap = {}) {
  const maxScore = Math.max(...rows.map(r => Math.max(r.score, r.compScore)), 1)
  const BAR_MAX = 28
  const colWidth = Math.floor(100 / rows.length)
  const ct = countryTotals?.[cntyCode]
  const ctScore = ct ? ct.lg.toFixed(1) + '%' : ''

  const barCols = rows.map(r => {
    const status = cntyStatus(r.score, r.compScore)
    const baseBarColor = status === 'lead' ? '#15803D' : status === 'behind' ? '#E8910C' : '#BE123C'
    const prodId = PROD_NAME_TO_ID[r.product] || (r.product || '').toLowerCase()
    const unlaunched = isUnlaunched(unlaunchedMap, cntyCode, prodId)
    // 미출시 셀: 가는 회색 막대(약 1%) + 모든 라벨 '—'로 정렬 유지
    if (unlaunched) {
      const ulBarH = 2
      const ulSpacer = BAR_MAX - ulBarH
      return `<td width="${colWidth}%" style="vertical-align:bottom;text-align:center;padding:0 1px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;table-layout:fixed;width:100%;">
        <tr><td height="${ulSpacer}" style="font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td height="${ulBarH}" style="font-size:0;line-height:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="18" height="${ulBarH}" style="background:#94A3B8;border-radius:3px 3px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td height="16" style="height:16px;font-size:11px;font-weight:800;color:#94A3B8;font-family:${EM_FONT};padding-top:2px;white-space:nowrap;line-height:14px;">—</td></tr>
        <tr><td style="font-size:10px;font-weight:700;color:#94A3B8;font-family:${EM_FONT};padding:1px 0 0;line-height:11px;letter-spacing:-0.3px;vertical-align:top;">${prodLabel2Line(r.product, lang)}</td></tr>
        <tr><td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};padding:2px 0 0;white-space:nowrap;line-height:13px;vertical-align:top;">—<br/>—</td></tr>
      </table>
    </td>`
    }
    const barColor = baseBarColor
    const labelColor = baseBarColor
    const barH = Math.max(Math.round((r.score / maxScore) * BAR_MAX), 3)
    const spacerH = BAR_MAX - barH
    const ratio = r.compScore > 0 ? Math.round(r.score / r.compScore * 100) : 100

    return `<td width="${colWidth}%" style="vertical-align:bottom;text-align:center;padding:0 1px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;table-layout:fixed;width:100%;">
        ${spacerH > 0 ? `<tr><td height="${spacerH}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td height="${barH}" style="font-size:0;line-height:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="18" height="${barH}" style="background:${barColor};border-radius:3px 3px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td height="16" style="height:16px;font-size:11px;font-weight:800;color:${labelColor};font-family:${EM_FONT};padding-top:2px;white-space:nowrap;line-height:14px;">${r.score != null ? r.score.toFixed(1) : '—'}</td></tr>
        <tr><td style="font-size:10px;font-weight:700;color:${labelColor};font-family:${EM_FONT};padding:1px 0 0;line-height:11px;letter-spacing:-0.3px;vertical-align:top;">${prodLabel2Line(r.product, lang)}</td></tr>
        <tr><td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};padding:2px 0 0;white-space:nowrap;line-height:13px;vertical-align:top;">${ssName(r.compName)}<br/>${ratio}%</td></tr>
      </table>
    </td>`
  }).join('')

  return `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F8FAFC;border:1px solid #E8EDF2;border-radius:8px;">
    <tr><td style="padding:5px 10px;border-bottom:1px solid #F1F5F9;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
        <td style="font-size:13px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(cntyLabel(cntyCode, lang))}</td>
        ${ctScore ? `<td align="right" style="font-size:12px;font-weight:700;color:#64748B;font-family:${EM_FONT};">TTL ${ctScore}</td>` : ''}
      </tr></table>
    </td></tr>
    <tr><td style="padding:4px 4px 6px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;"><tr>${barCols}</tr></table></td></tr>
  </table>`
}

function countryVisibilitySectionHtml(productsCnty, meta, lang, total, unlaunchedMap = {}) {
  if (!productsCnty || !productsCnty.length) return ''
  const t = T[lang] || T.ko
  const countryTotals = total?.countryTotals || {}

  // 국가별로 그룹핑
  const cntyMap = new Map()
  productsCnty.forEach(row => {
    if (!cntyMap.has(row.country)) cntyMap.set(row.country, [])
    cntyMap.get(row.country).push(row)
  })

  const CNTY_ORDER = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN']
  const countries = CNTY_ORDER.filter(c => cntyMap.has(c)).concat([...cntyMap.keys()].filter(c => !CNTY_ORDER.includes(c)))
  const cards = countries.map(cnty => countryCardHtml(cnty, cntyMap.get(cnty), lang, countryTotals, unlaunchedMap))

  // 2개씩 한 행에 배치
  let pairRows = ''
  for (let i = 0; i < cards.length; i += 2) {
    const left = cards[i]
    const right = cards[i + 1] || ''
    pairRows += `<tr>
      <td width="50%" style="vertical-align:top;padding:0 4px 10px 0;">${left}</td>
      <td width="50%" style="vertical-align:top;padding:0 0 10px 4px;">${right}</td>
    </tr>`
  }

  return `
              <!-- ══ 국가별 GEO Visibility ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:16px 12px 12px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0"><tr>
                          <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                          <td style="padding-left:8px;font-size:16px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.cntyTitle}</td>
                        </tr></table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.cntyInsight, meta.showCntyInsight, meta.cntyHowToRead, meta.showCntyHowToRead, lang, { insight: 'cntyInsight', howToRead: 'cntyHowToRead' })}
                    <tr>
                      <td style="padding:12px 10px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          ${pairRows}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`
}

// ─── 도메인 표시명 (TLD 제거) ─────────────────────────────────────────────────
const DOMAIN_ALIAS = {
  'timesofindia.indiatimes': 'indiatimes',
}
function stripDomain(domain) {
  const d = (domain || '').replace(/\.(com|org|net|co\.uk|com\.br|com\.au|com\.vn|com\.mx|co\.kr|de|es|fr|ca|in|vn)$/i, '')
  return DOMAIN_ALIAS[d.toLowerCase()] || d
}

// ─── 도메인별 Citation 국가 서브섹션 (가로 바) ─────────────────────────────────
function citationDomainCntyRowsHtml(cntyRows, domTopN, lang) {
  if (!cntyRows.length) return ''
  const maxScore = Math.max(...cntyRows.map(r => r.citations), 1)
  const totalCit = cntyRows.reduce((s, r) => s + r.citations, 0)
  const fmtN = n => Number(n).toLocaleString('en-US')

  return cntyRows.slice(0, domTopN).map((c, i, arr) => {
    const ratio = totalCit > 0 ? +((c.citations / totalCit) * 100).toFixed(1) : 0
    return citUnifiedRow(c.rank, stripDomain(c.domain), c.citations, ratio, maxScore, i === arr.length - 1, lang)
  }).join('')
}

// ─── 도메인별 Citation (TTL + 국가별 CSS-only 탭) ───────────────────────────
// returns { html, css } — css는 <head>에 삽입
function citationDomainSectionHtml(citationsCnty, meta, lang, citations) {
  if (!citationsCnty || !citationsCnty.length) return { html: '', css: '' }
  const t = T[lang] || T.ko

  const domTopN = meta.citDomainTopN || 10
  // 도메인 단위 병합 필수 — 같은 도메인이 type/prd 차이로 복수 행 (rtings 2회 노출 회귀).
  // 병합 규칙 = excelUtils.js citDomainTrend 와 동일 (shared/citDomainAgg.js single source).
  const ttlRows = mergeCitDomainRows(
    citationsCnty.filter(r => r.cnty === 'TTL' && isTtlLlmVal(r.llm))
  ).slice(0, domTopN)
  if (!ttlRows.length) return { html: '', css: '' }

  {
    const ttlHtml = citationDomainCntyRowsHtml(ttlRows, domTopN, lang)
    return { css: '', html: true, innerHtml: ttlHtml }
  }
}

// ─── 국가별 Citation 도메인 (세로 막대 차트) ─────────────────────────────────
function citationCntyCountryHtml(cntyCode, rows, lang) {
  const maxScore = Math.max(...rows.map(r => r.citations), 1)
  const BAR_MAX = 44
  const fmtN = n => Number(n).toLocaleString('en-US')
  const colWidth = Math.floor(100 / rows.length)

  const barCols = rows.map(r => {
    const barH = Math.max(Math.round((r.citations / maxScore) * BAR_MAX), 3)
    const spacerH = BAR_MAX - barH
    const domainShort = stripDomain(r.domain)

    return `<td width="${colWidth}%" style="vertical-align:top;text-align:center;padding:0 1px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;table-layout:fixed;width:100%;">
        ${spacerH > 0 ? `<tr><td height="${spacerH}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td height="${barH}" style="font-size:0;line-height:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="22" height="${barH}" style="background:${CIT_GREEN};border-radius:3px 3px 0 0;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td style="font-size:13px;font-weight:800;color:${CIT_GREEN};font-family:${EM_FONT};padding-top:3px;white-space:nowrap;">${fmtMan(r.citations, lang)}</td></tr>
        <tr><td style="font-size:13px;color:#1A1A1A;font-family:${EM_FONT};padding-top:2px;word-break:break-all;font-weight:600;">${domainShort}</td></tr>
        <tr><td style="font-size:13px;color:#94A3B8;font-family:${EM_FONT};padding-top:1px;word-break:break-all;">${r.type}</td></tr>
      </table>
    </td>`
  }).join('')

  return `
  <tr>
    <td style="padding:8px 0 4px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="background:#F1F5F9;border-radius:7px;padding:7px 12px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:16px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(cntyLabel(cntyCode, lang))}</td>
                <td align="right" style="font-size:13px;color:#94A3B8;font-family:${EM_FONT};">Top ${rows.length}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 4px 12px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
        <tr>${barCols}</tr>
      </table>
    </td>
  </tr>`
}

function citationCntyTableHtml(citationsCnty, lang) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const BOLD_DOMAINS = ['reddit', 'youtube']
  function isBold(name) { return BOLD_DOMAINS.some(b => name.toLowerCase().includes(b)) }

  const cntyMap = new Map()
  citationsCnty.forEach(row => {
    if (row.cnty === 'TTL') return
    if (!isTtlLlmVal(row.llm)) return
    if (!cntyMap.has(row.cnty)) cntyMap.set(row.cnty, [])
    cntyMap.get(row.cnty).push(row)
  })
  // 국가별로도 도메인 단위 병합 — 같은 도메인이 type/prd 차이로 한 국가 안에 중복 노출 방지
  cntyMap.forEach((rows, cnty) => cntyMap.set(cnty, mergeCitDomainRows(rows)))

  const _CO = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN']
  const countries = _CO.filter(c => cntyMap.has(c)).concat([...cntyMap.keys()].filter(c => !_CO.includes(c)))
  if (!countries.length) return ''

  const RANK_COUNT = 10
  const rankHeaders = Array.from({length: RANK_COUNT}, (_, i) =>
    `<td style="padding:6px 2px;text-align:center;font-size:11px;font-weight:700;color:#64748B;font-family:${EM_FONT};border-bottom:2px solid #E8EDF2;">#${i+1}</td>`
  ).join('')

  const EXCLUDE_DOMAINS = ['translate.google']
  const countryRows = countries.map(cnty => {
    const filtered = [...cntyMap.get(cnty)].filter(r => !EXCLUDE_DOMAINS.some(ex => r.domain.toLowerCase().includes(ex)))
    const sorted = filtered.sort((a, b) => b.citations - a.citations)
    const topN = sorted.slice(0, RANK_COUNT)
    const cells = Array.from({length: RANK_COUNT}, (_, i) => {
      const r = topN[i]
      if (!r) return `<td style="padding:3px 1px;text-align:center;font-size:10px;color:#CBD5E1;font-family:${EM_FONT};border-bottom:1px solid #F1F5F9;">—</td>`
      const name = stripDomain(r.domain)
      const bold = isBold(name)
      return `<td style="padding:3px 1px;text-align:center;font-size:12px;color:#1A1A1A;font-family:${EM_FONT};border-bottom:1px solid #F1F5F9;white-space:nowrap;">${bold ? '<b>' : ''}${escapeHtml(name)}${bold ? '</b>' : ''}<br/><span style="font-size:10px;color:#94A3B8;font-weight:700;">${fmtMan(r.citations, lang)}</span></td>`
    }).join('')
    return `<tr><td style="padding:5px 8px;font-size:12px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};border-bottom:1px solid #F1F5F9;white-space:nowrap;">${escapeHtml(cntyLabel(cnty, lang))}</td>${cells}</tr>`
  }).join('')

  return `<tr><td>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
                          <tr>
                            <td style="padding:6px 8px;font-size:12px;font-weight:700;color:#64748B;font-family:${EM_FONT};border-bottom:2px solid #E8EDF2;white-space:nowrap;">${lang === 'en' ? 'Country' : '국가'}</td>
                            ${rankHeaders}
                          </tr>
                          ${countryRows}
                        </table>
                      </td></tr>`
}

// ─── Citation 통합 행 (카테고리 + 도메인 공용) ────────────────────────────────
function citUnifiedRow(rank, label, score, ratio, maxScore, isLast, lang) {
  const isTop3 = rank <= 3
  // 회색 강등 제거 — 상위 3위는 붉은색, 그 외는 푸른색으로 구분 (사용자 지시 2026-08-27)
  const rankBg = isTop3 ? EM_RED : '#2563EB'
  const rankColor = '#FFFFFF'
  const barColor = isTop3 ? EM_RED : '#2563EB'
  const barPct = Math.min(Math.round((score / maxScore) * 55), 55)
  const ratioStr = ratio > 0 ? ratio.toFixed(1) + '%' : ''

  return `<tr style="${isLast ? '' : 'border-bottom:1px solid #F1F5F9;'}">
    <td width="18" style="padding:5px 0 5px 4px;vertical-align:middle;text-align:center;">
      <table border="0" cellpadding="0" cellspacing="0"><tr><td width="18" height="18" style="background:${rankBg};color:${rankColor};border-radius:3px;font-size:11px;font-weight:800;text-align:center;line-height:18px;font-family:${EM_FONT};">${rank}</td></tr></table>
    </td>
    <td width="80" style="padding:5px 4px;vertical-align:middle;font-size:12px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};white-space:nowrap;overflow:hidden;">${escapeHtml(label)}</td>
    <td style="padding:5px 4px;vertical-align:middle;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
        <td width="${barPct}%" style="background:${barColor};border-radius:4px;height:16px;font-size:0;">&nbsp;</td>
        <td style="padding-left:6px;white-space:nowrap;vertical-align:middle;">
          <span style="font-size:12px;font-weight:700;color:${barColor};font-family:${EM_FONT};">${fmtMan(score, lang)}</span>
          <span style="font-size:11px;color:${barColor};font-family:${EM_FONT};">&nbsp;(${ratioStr})</span>
        </td>
      </tr></table>
    </td>
  </tr>`
}

function citationRowHtml(c, isLast, maxScore, lang) {
  return citUnifiedRow(c.rank, c.source, c.score, c.ratio || 0, maxScore, isLast, lang)
}

// ─── 닷컴 Citation 비교 차트 ──────────────────────────────────────────────────
const DC_DETAIL_COLS = ['PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience']
const DC_SAM_COLS    = ['PLP','Microsites','PDP','Newsroom','Support','Buying-guide']

function fmtK(n) { return n >= 1000 ? Math.round(n / 1000) + 'K' : fmt(n) }

// 닷컴 차트 본문 행(소제목 + 막대 그래프) — 카드 헤더/인사이트는 호출자(dotcomCombinedSectionHtml)가 1회만 렌더.
// subtitle 로 같은 카드 안에 여러 차트(전체 / Chat-GPT 모델)를 소제목 구분해 누적 배치.
function _dotcomChartRows(dotcom, meta, lang = 'ko', subtitle = '') {
  if (!dotcom || !dotcom.lg) return null
  const lg = dotcom.lg, sam = dotcom.samsung || {}
  const allCols = ['TTL', ...DC_DETAIL_COLS]
  const cols = allCols.filter(c => (lg[c] || 0) > 0 || (sam[c] || 0) > 0)
  const BAR_MAX = 80
  const bw = 36
  // 컬럼별 회색 강등을 없애고 브랜드 색상으로 통일 (사용자 지시 2026-08-27) —
  // LG 는 전 컬럼 붉은색, 삼성은 전 컬럼 푸른색. MoM 박스 강조도 제거하고 숫자만 남긴다.
  const EM_BLUE = '#2563EB'

  const ttlCol = cols.includes('TTL') ? 'TTL' : null
  const detailCols = cols.filter(c => c !== 'TTL')
  // TTL과 상세는 각각 독립 비율
  const ttlMax = ttlCol ? Math.max(lg['TTL'] || 0, sam['TTL'] || 0, 1) : 1
  const detailMax = Math.max(...detailCols.map(c => Math.max(lg[c] || 0, sam[c] || 0)), 1)

  // ── MoM — 직전 데이터 월 탐색 (byMonth 우선, 없으면 byCntyByMonth 국가 합산) ──
  const MONTHS_EN_DC = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let prevLg = null, prevSam = null
  {
    const byM = dotcom.byMonth || {}
    const byCM = dotcom.byCntyByMonth || {}
    const hasM = m => !!byM[m] || !!(byCM[m] && Object.keys(byCM[m]).length > 0)
    const dataFor = m => {
      if (byM[m]) return { lg: byM[m].lg || {}, samsung: byM[m].samsung || {} }
      if (byCM[m] && Object.keys(byCM[m]).length) {
        const aLg = {}, aSam = {}
        Object.values(byCM[m]).forEach(d => {
          Object.entries(d.lg || {}).forEach(([k, v]) => { aLg[k] = (aLg[k] || 0) + v })
          Object.entries(d.samsung || {}).forEach(([k, v]) => { aSam[k] = (aSam[k] || 0) + v })
        })
        return { lg: aLg, samsung: aSam }
      }
      return null
    }
    // 현재 월: meta.period 우선 ('5월' / 'May' 형식), 없거나 데이터 없으면 최신 데이터 월
    let curM = null
    const p = String(meta.period || '')
    const km = p.match(/(\d{1,2})월/)
    if (km) curM = MONTHS_EN_DC[parseInt(km[1]) - 1]
    if (!curM) {
      const em = p.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i)
      if (em) curM = em[1].charAt(0).toUpperCase() + em[1].slice(1).toLowerCase()
    }
    if (!curM || !hasM(curM)) {
      curM = null
      for (let i = MONTHS_EN_DC.length - 1; i >= 0; i--) {
        if (hasM(MONTHS_EN_DC[i])) { curM = MONTHS_EN_DC[i]; break }
      }
    }
    if (curM) {
      const ci = MONTHS_EN_DC.indexOf(curM)
      for (let i = ci - 1; i >= 0; i--) {
        if (hasM(MONTHS_EN_DC[i])) {
          const d = dataFor(MONTHS_EN_DC[i])
          if (d) { prevLg = d.lg; prevSam = d.samsung }
          break
        }
      }
    }
  }
  const hasMom = !!prevLg
  // MoM: 색상 전부 제거(회색). emphBox=true (PLP/Support 의 LG MoM) 일 때만 붉은/초록 테두리 박스 강조.
  // MoM — 박스·배경 없이 숫자만. 색은 해당 브랜드 색을 따른다 (회색 미사용).
  function momRow(cur, pv, color) {
    if (pv == null) return ''
    const d = cur - pv
    const txt = `(${d > 0 ? '+' : ''}${fmtMan(d, lang)})`
    return `<tr><td style="font-size:10px;font-weight:600;color:${color};font-family:${EM_FONT};text-align:center;padding-bottom:1px;white-space:nowrap;">${txt}</td></tr>`
  }

  function makeBarCol(col, localMax) {
    const lv = lg[col] || 0, sv = sam[col] || 0
    const lh = Math.max(2, Math.round(lv / localMax * BAR_MAX))
    const sh = Math.max(2, Math.round(sv / localMax * BAR_MAX))
    const hasSam = col !== 'Experience' && sv > 0
    const isExp = col === 'Experience'
    const spacerL = BAR_MAX - lh, spacerS = BAR_MAX - sh
    const diff = lv - sv
    const gapColor = diff >= 0 ? '#15803D' : '#BE123C'
    const gapTxt = diff > 0 ? `+${fmtMan(diff, lang)}` : diff < 0 ? `-${fmtMan(Math.abs(diff), lang)}` : '0'
    const isTTL = col === 'TTL'
    const lgColor = EM_RED
    const samColor = EM_BLUE

    return `<td style="vertical-align:bottom;text-align:center;padding:0 3px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;width:100%;">
        <tr><td style="vertical-align:bottom;text-align:center;">
          <table border="0" cellpadding="0" cellspacing="0" align="center"><tr>
            <td style="vertical-align:bottom;text-align:center;padding:0 1px;">
              <table border="0" cellpadding="0" cellspacing="0" align="center">
                <tr><td style="font-size:13px;font-weight:700;color:${lgColor};font-family:${EM_FONT};text-align:center;padding-bottom:1px;">${fmtMan(lv, lang)}</td></tr>
                ${hasMom ? momRow(lv, prevLg[col] != null ? prevLg[col] : null, lgColor) : ''}
                ${spacerL > 0 ? `<tr><td height="${spacerL}" style="font-size:0;">&nbsp;</td></tr>` : ''}
                <tr><td height="${lh}" style="font-size:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="${bw}" height="${lh}" style="background:${lgColor};border-radius:3px 3px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
              </table>
            </td>
            ${hasSam ? `<td style="vertical-align:bottom;text-align:center;padding:0 1px;">
              <table border="0" cellpadding="0" cellspacing="0" align="center">
                <tr><td style="font-size:13px;font-weight:600;color:${samColor};font-family:${EM_FONT};text-align:center;padding-bottom:1px;">${fmtMan(sv, lang)}</td></tr>
                ${hasMom ? momRow(sv, prevSam && prevSam[col] != null ? prevSam[col] : null, samColor) : ''}
                ${spacerS > 0 ? `<tr><td height="${spacerS}" style="font-size:0;">&nbsp;</td></tr>` : ''}
                <tr><td height="${sh}" style="font-size:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="${bw}" height="${sh}" style="background:${samColor};border-radius:3px 3px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
              </table>
            </td>` : ''}
          </tr></table>
        </td></tr>
        <tr><td style="font-size:${isTTL ? '14' : '13'}px;font-weight:700;color:#475569;font-family:${EM_FONT};padding-top:4px;text-align:center;white-space:nowrap;">${isTTL ? 'Total' : dcColLabel(col)}</td></tr>
        ${hasSam ? `<tr><td style="font-size:12px;font-weight:700;color:${gapColor};font-family:${EM_FONT};padding-top:2px;text-align:center;">${gapTxt}</td></tr>` : ''}
        ${isExp ? `<tr><td style="font-size:11px;color:#94A3B8;font-family:${EM_FONT};padding-top:1px;text-align:center;">LG Only</td></tr>` : ''}
      </table>
    </td>`
  }

  // 소제목 행 (전체 / Chat-GPT 구분) — 한 카드 안에서 차트 그룹 구분
  const subtitleRow = subtitle ? `<tr><td style="padding:12px 12px 0;">
    <table border="0" cellpadding="0" cellspacing="0"><tr>
      <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
      <td style="padding-left:7px;font-size:13px;font-weight:700;color:#475569;font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.5px' : '-0.3px'};">${subtitle}</td>
    </tr></table>
  </td></tr>` : ''

  // TTL + 세로 실선 + 페이지별 — 한 행에 배치
  const chartHtml = `<tr><td style="padding:10px 6px 14px;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
      ${ttlCol ? `<td width="14%" style="vertical-align:bottom;padding:0 2px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;"><tr>${makeBarCol('TTL', ttlMax)}</tr></table>
      </td>
      <td width="1" style="vertical-align:top;padding:0;">
        <table border="0" cellpadding="0" cellspacing="0" height="${BAR_MAX + 30}"><tr><td width="2" style="background:#E8EDF2;font-size:0;">&nbsp;</td></tr></table>
      </td>` : ''}
      <td style="vertical-align:bottom;padding:0 2px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;"><tr>${detailCols.map(c => makeBarCol(c, detailMax)).join('')}</tr></table>
      </td>
    </tr></table>
  </td></tr>`

  return { rows: subtitleRow + chartHtml, hasMom }
}

// dotcomByLlm[search-gpt] 의 dotcomTrend(TTL-only) → byMonth 변환 후 _dotcomChartRows 재사용.
// 카드 헤더 없이 본문 행({rows,hasMom})만 반환 — 닷컴 카드 안에 'Chat-GPT' 소제목으로 합류.
function _dotcomChatGptChartRows(dotcomByLlm, meta, lang = 'ko') {
  if (!dotcomByLlm || typeof dotcomByLlm !== 'object') return _logWarn('_dotcomChatGptChartRows', 'dotcomByLlm 없음 (null/미동기화)', {}), null
  // 모델 키 동적 탐색 (시트 라벨 자유) — Total/All 제외 후 search-gpt 우선. 매칭 실패 시 첫 비-Total 모델 폴백.
  const keys = Object.keys(dotcomByLlm).filter(k => !/^(total|all)$/i.test(k))
  if (!keys.length) return _logWarn('_dotcomChatGptChartRows', '비-Total 모델 키 없음', { keys: Object.keys(dotcomByLlm) }), null
  const searchKey = keys.find(k => /search.*gpt|searchgpt/i.test(k)) || keys.find(k => /search/i.test(k))
  const modelKey = searchKey || keys[0]
  if (!searchKey) _logWarn('_dotcomChatGptChartRows', 'search-gpt 라벨 미매칭 → 첫 모델로 폴백', { keys, used: modelKey })
  const picked = dotcomByLlm[modelKey]
  if (!picked) return _logWarn('_dotcomChatGptChartRows', '모델 dotcom 데이터 없음', { modelKey }), null

  // dotcomTrend { pageType: { month: {lg, samsung} } } → byMonth { month: { lg:{pageType}, samsung:{pageType} } }
  const MONTHS_DC = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const byMonth = {}
  Object.entries(picked.dotcomTrend || {}).forEach(([pageType, months]) => {
    Object.entries(months || {}).forEach(([month, vals]) => {
      if (!byMonth[month]) byMonth[month] = { lg: {}, samsung: {} }
      if (vals && vals.lg != null) byMonth[month].lg[pageType] = vals.lg
      if (vals && vals.samsung != null) byMonth[month].samsung[pageType] = vals.samsung
    })
  })

  // 막대는 모델 자체의 최신 트렌드 월로 구성 — 전역 bestPair(Total 최신월)와 모델 최신월이
  // 다를 수 있어(예: Total 은 5월까지 있으나 GPT5.5 breakdown 은 4월까지) picked.lg(전역
  // bestPair 기반)를 신뢰하면 빈 막대가 됨. 모델 트렌드의 최신월을 써 막대·MoM 정렬.
  let latestM = null
  for (let i = MONTHS_DC.length - 1; i >= 0; i--) {
    if (byMonth[MONTHS_DC[i]]) { latestM = MONTHS_DC[i]; break }
  }
  const barLg = latestM ? byMonth[latestM].lg : (picked.lg || {})
  const barSam = latestM ? byMonth[latestM].samsung : (picked.samsung || {})
  if (!Object.keys(barLg).length) return _logWarn('_dotcomChatGptChartRows', '모델 막대 데이터 없음', { modelKey, latestM, trendMonths: Object.keys(byMonth) }), null

  const modelDotcom = { lg: barLg, samsung: barSam, byMonth, byCntyByMonth: {} }
  return _dotcomChartRows(modelDotcom, meta, lang, 'Chat-GPT')
}

// 닷컴 Citation 통합 카드 — 전체(Total) + Chat-GPT(search-gpt) 를 한 카드에 소제목으로 합침.
// Chat-GPT 소절은 meta.showDotcomChatGpt 토글로 ON/OFF.
function dotcomCombinedSectionHtml(dotcom, dotcomByLlm, meta, lang = 'ko') {
  const t = T[lang] || T.ko
  const mainSubtitle = lang === 'en' ? 'Total — Geminai, Chat-GPT, Perplexcity' : 'Total - Geminai, Chat-GPT, Perplexcity'
  const main = _dotcomChartRows(dotcom, meta, lang, mainSubtitle)
  if (!main) return ''
  const chat = meta.showDotcomChatGpt !== false ? _dotcomChatGptChartRows(dotcomByLlm, meta, lang) : null
  const hasMom = main.hasMom || (chat && chat.hasMom)

  return `
              <!-- ══ 닷컴 Citation (경쟁사대비) ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:16px 12px 12px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
                          <td style="vertical-align:middle;">
                            <table border="0" cellpadding="0" cellspacing="0"><tr>
                              <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                              <td style="padding-left:8px;font-size:16px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.dotcomTitle}</td>
                            </tr></table>
                          </td>
                          <td align="right" style="vertical-align:middle;">
                            <table border="0" cellpadding="0" cellspacing="0" align="right"><tr>
                              <td width="10" height="10" style="background:${EM_RED};border-radius:2px;font-size:0;">&nbsp;</td>
                              <td style="padding:0 6px 0 3px;font-size:12px;color:#94A3B8;font-family:${EM_FONT};">LG</td>
                              <td width="10" height="10" style="background:#94A3B8;border-radius:2px;font-size:0;">&nbsp;</td>
                              <td style="padding-left:3px;font-size:12px;color:#94A3B8;font-family:${EM_FONT};">SS</td>
                              ${hasMom ? `<td style="padding-left:8px;font-size:12px;color:#94A3B8;font-family:${EM_FONT};">( ):MoM</td>` : ''}
                            </tr></table>
                          </td>
                        </tr></table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.dotcomInsight, meta.showDotcomInsight, meta.dotcomHowToRead, meta.showDotcomHowToRead, lang, { insight: 'dotcomInsight', howToRead: 'dotcomHowToRead' })}
                    ${main.rows}
                    ${chat ? chat.rows : ''}
                  </table>
                </td>
              </tr>`
}

// ─── 범프차트 (월간 트렌드) — 이메일/Outlook 호환 ──────────────────────────────
// SVG 는 Outlook(2007~2019) 미렌더 → table-layout rank-grid 로 대체.
// rank-grid: 행=순위(#1..#N), 열=월. 각 셀은 그 시점·순위 항목의 컬러 pill.
//   같은 색을 열 따라 훑으면 순위 이동(범프)이 보임. 하단 실수치 테이블이 범례 겸 정확값.
// 두 테이블이 동일 colgroup(table-layout:fixed) 공유 → 월 X좌표 정렬 (§5.16).
const TP_BUMP_COLORS = ['#CF0652', '#1D4ED8', '#059669', '#D97706', '#7C3AED', '#DB2777', '#0D9488', '#EA580C', '#4F46E5', '#DC2626', '#0891B2', '#65A30D']
const TP_TREND_12M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const TP_BUMP_MAX = 10
const TP_TREND_RECENT = 4  // 최근 4개월 (TTL 범프 grid 용)

// 도메인 라벨에서 TLD 제거 (잘라내기 X — 하단 테이블은 전체 표기, pill 만 emPill 로 단축)
function emStripDomain(d) {
  return String(d || '').replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\.(com|net|org|io|co|kr|jp|us|uk|de|fr|cn|in|br)(\.[a-z]{2})?$/i, '')
}
// 정규화만 (전체 이름 유지) — 하단 실수치 테이블 라벨용
function emShortName(name) {
  return String(name || '')
}
// rank-grid pill 전용 단축 (좁은 셀 — 7자 제한). 하단 테이블에는 미적용.
function emPill(text) {
  const s = String(text || '')
  return s.length > 8 ? s.slice(0, 7) + '…' : s
}
// hex 색상을 흰색과 섞어 밝은 음영(틴트) hex 반환 — 이메일 호환(solid hex, rgba/투명 X).
function _emTint(hex, ratio = 0.85) {
  const m = /^#?([0-9a-fA-F]{6})$/.exec(String(hex || ''))
  if (!m) return '#F1F5F9'
  const n = parseInt(m[1], 16)
  const mix = c => Math.round(c + (255 - c) * ratio)
  const toHex = c => c.toString(16).padStart(2, '0')
  return `#${toHex(mix((n >> 16) & 255))}${toHex(mix((n >> 8) & 255))}${toHex(mix(n & 255))}`
}

// 범프 grid + 실수치 테이블 생성 (카드 외곽 없음) — TTL 서브타이틀 stacked 재사용용. 데이터 없으면 null.
//   trend: { itemName: { monthLabel: value } } 형태로 정규화된 객체
function _bumpGridTable(trend, headerLabel, lang, opts = {}) {
  if (!trend) return null
  const months12 = TP_TREND_12M
  const entries = Object.entries(trend)
  if (!entries.length) return null

  // 데이터 있는 월만 → 최근 4개월 (Feb 제외 — 사용자 요청)
  const monthsWithData = months12.filter(m => m !== 'Feb' && entries.some(([, d]) => (d[m] || 0) > 0))
  const months = monthsWithData.slice(-TP_TREND_RECENT)
  if (!months.length) return null

  const lastDataMonth = months[months.length - 1]
  const topEntries = [...entries]
    .sort((a, b) => (b[1][lastDataMonth] || 0) - (a[1][lastDataMonth] || 0))
    .slice(0, TP_BUMP_MAX)

  // 월별 순위 계산
  const rankings = {}
  months.forEach(m => {
    topEntries.map(([name, data]) => ({ name, score: data[m] || 0 }))
      .filter(e => e.score > 0)
      .sort((a, b) => b.score - a.score)
      .forEach((e, i) => {
        if (!rankings[e.name]) rankings[e.name] = {}
        rankings[e.name][m] = i + 1
      })
  })

  const names = topEntries.map(([n]) => n).filter(n => rankings[n])
  if (!names.length) return null
  // 기본 회색 — opts.highlight 에 든 항목만 컬러 ('지적 요소만 색')
  const highlight = Array.isArray(opts.highlight) ? opts.highlight : []
  const BUMP_GRAY = '#94A3B8'
  const colorOf = name => highlight.includes(name)
    ? TP_BUMP_COLORS[names.indexOf(name) % TP_BUMP_COLORS.length]
    : BUMP_GRAY
  const shortFn = opts.shortFn || emShortName

  const maxRank = Math.min(names.length, TP_BUMP_MAX)
  // rankByMonth[m][r] = 그 달의 r위 항목명
  const rankByMonth = {}
  months.forEach(m => {
    rankByMonth[m] = {}
    names.forEach(n => { const r = rankings[n]?.[m]; if (r != null) rankByMonth[m][r] = n })
  })

  // 두 테이블 공유 colgroup — 월 X좌표 정렬 (§5.16). 좌우배치라 라벨 컬럼 축소
  const colGroup = `<colgroup><col style="width:128px;"/>${months.map(() => '<col/>').join('')}</colgroup>`
  const monthThStyle = `font-size:12px;font-weight:800;color:#475569;font-family:${EM_FONT};padding:5px 1px;text-align:center;border-bottom:2px solid #E8EDF2;white-space:nowrap;`
  const cornerStyle = `font-size:11px;font-weight:700;color:#94A3B8;font-family:${EM_FONT};padding:5px 2px;text-align:left;border-bottom:2px solid #E8EDF2;white-space:nowrap;`

  // ── rank-grid (행=순위, 열=월) ──
  let grid = `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;border-collapse:collapse;">${colGroup}`
  grid += `<tr><td style="${cornerStyle}">${lang === 'ko' ? '순위' : 'Rank'}</td>${months.map(m => `<td style="${monthThStyle}">${m}</td>`).join('')}</tr>`
  for (let r = 1; r <= maxRank; r++) {
    grid += `<tr><td style="font-size:11px;font-weight:800;color:#64748B;font-family:${EM_FONT};padding:3px 2px;text-align:left;border-bottom:1px solid #F1F5F9;white-space:nowrap;">#${r}</td>`
    months.forEach(m => {
      const n = rankByMonth[m][r]
      const cellStyle = `padding:3px 1px;text-align:center;border-bottom:1px solid #F1F5F9;`
      if (!n) { grid += `<td style="${cellStyle}"><span style="color:#E2E8F0;font-size:11px;">·</span></td>`; return }
      const c = colorOf(n)
      grid += `<td style="${cellStyle}"><span style="display:inline-block;background:${c};color:#FFFFFF;border-radius:5px;padding:2px 4px;font-size:11px;font-weight:700;font-family:${EM_FONT};white-space:nowrap;">${emPill(shortFn(n))}</span></td>`
    })
    grid += '</tr>'
  }
  grid += '</table>'

  // ── 하단 실수치 테이블 (범례 겸) — 순위(#N) 미표기 ──
  const thStyle = `font-size:11px;font-weight:700;color:#64748B;font-family:${EM_FONT};padding:5px 1px;text-align:center;border-bottom:1px solid #E8EDF2;white-space:nowrap;`
  let table = `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;border-collapse:collapse;">${colGroup}`
  table += `<tr><td style="${thStyle}text-align:left;">${headerLabel}</td>${months.map(m => `<td style="${thStyle}">${m}</td>`).join('')}</tr>`
  names.forEach(name => {
    const color = colorOf(name)
    const tint = _emTint(color)
    table += `<tr><td style="font-size:11px;font-family:${EM_FONT};padding:4px 1px;border-bottom:1px solid #F1F5F9;white-space:normal;word-break:break-word;line-height:1.25;"><span style="display:inline-block;background:${tint};color:${color};border-radius:4px;padding:1px 6px;font-weight:700;">${shortFn(name)}</span></td>`
    months.forEach(m => {
      const val = trend[name]?.[m]
      const rank = rankings[name]?.[m]
      table += `<td style="font-size:11px;font-family:${EM_FONT};padding:4px 1px;text-align:center;border-bottom:1px solid #F1F5F9;white-space:nowrap;">${val != null && rank != null
        ? `<span style="font-weight:700;color:#334155;">${fmtMan(val, lang)}</span>`
        : '<span style="color:#CBD5E1;">—</span>'}</td>`
    })
    table += '</tr>'
  })
  table += '</table>'

  return { grid, table, count: names.length }
}

// MoM 셀: 전월(pre) → 당월(cur) 변화. pre 없음 NEW(파랑) / 동일 ─ 0(회색) / 증감 화살표+값+퍼센트.
//   pre 가 null 이면 전월 데이터 자체 부재 (월 1개뿐) → NEW 처리.
function _momCell(cur, pre, lang) {
  const has = v => v != null && v > 0
  if (!has(cur)) return '<span style="color:#CBD5E1;">—</span>'
  if (pre == null || !has(pre)) return '<span style="color:#2563EB;font-weight:700;">NEW</span>'
  const diff = +(cur - pre).toFixed(1)
  if (diff === 0) return '<span style="color:#94A3B8;font-weight:600;">&#8211; 0</span>'
  const up = diff > 0
  const arrow = up ? '&#9650;' : '&#9660;'
  const color = up ? '#16A34A' : '#DC2626'
  const sign = up ? '+' : ''
  const pct = pre > 0 ? Math.round((diff / pre) * 100) : 0
  return `<span style="color:${color};font-weight:700;">${arrow} ${sign}${fmtMan(diff, lang)}</span> <span style="color:#94A3B8;font-size:11px;">(${sign}${pct}%)</span>`
}

// 전월 vs 당월 2개월 MoM 비교 표 (Top 10, 당월값 내림차순). 데이터 없으면 null.
//   trend: { itemName: { monthLabel: value } } 형태로 정규화된 객체
//   컬럼: 라벨 | 전월 | 당월 | MoM
function _bumpMomTable(trend, headerLabel, lang, opts = {}) {
  const tag = opts.tag || headerLabel
  if (!trend) { console.warn(`[_bumpMomTable] ${tag}: trend 없음 (null)`); return null }
  const entries = Object.entries(trend)
  if (!entries.length) { console.warn(`[_bumpMomTable] ${tag}: 항목 0개`); return null }
  const monthsWithData = TP_TREND_12M.filter(m => m !== 'Feb' && entries.some(([, d]) => (d[m] || 0) > 0))
  if (!monthsWithData.length) {
    console.warn(`[_bumpMomTable] ${tag}: 값>0 인 월 없음 (월 키가 Jan~Dec 아님?)`, { 항목수: entries.length, 첫항목월키: Object.keys(entries[0][1] || {}) })
    return null
  }
  const latest = monthsWithData[monthsWithData.length - 1]
  const prev = monthsWithData.length >= 2 ? monthsWithData[monthsWithData.length - 2] : null

  const topEntries = entries
    .map(([name, d]) => ({ name, cur: d[latest] || 0, pre: prev ? (d[prev] || 0) : 0 }))
    .filter(e => e.cur > 0)
    .sort((a, b) => b.cur - a.cur)
    .slice(0, TP_BUMP_MAX)
  if (!topEntries.length) { console.warn(`[_bumpMomTable] ${tag}: 당월(${latest}) 값>0 항목 없음`); return null }

  const shortFn = opts.shortFn || emShortName
  const highlight = Array.isArray(opts.highlight) ? opts.highlight : []
  const dotColor = name => highlight.includes(name)
    ? TP_BUMP_COLORS[topEntries.findIndex(e => e.name === name) % TP_BUMP_COLORS.length]
    : '#94A3B8'

  const colGroup = `<colgroup><col/><col style="width:42px;"/><col style="width:42px;"/><col style="width:104px;"/></colgroup>`
  const thStyle = `font-size:11px;font-weight:700;color:#64748B;font-family:${EM_FONT};padding:5px 2px;text-align:center;border-bottom:2px solid #E8EDF2;white-space:nowrap;`
  const tdBase = `font-size:11px;font-family:${EM_FONT};padding:4px 2px;border-bottom:1px solid #F1F5F9;`
  let table = `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;border-collapse:collapse;">${colGroup}`
  table += `<tr><td style="${thStyle}text-align:left;">${headerLabel}</td><td style="${thStyle}">${prev || '&#8211;'}</td><td style="${thStyle}">${latest}</td><td style="${thStyle}">MoM</td></tr>`
  topEntries.forEach(e => {
    const c = dotColor(e.name)
    const isHl = highlight.includes(e.name)
    const rowBg = isHl ? 'background:#ECFDF5;' : ''
    table += '<tr>'
    const tint = _emTint(c)
    table += `<td style="${tdBase}${rowBg}white-space:normal;word-break:break-word;line-height:1.25;"><span style="display:inline-block;background:${tint};color:${c};border-radius:4px;padding:1px 6px;font-weight:700;">${shortFn(e.name)}</span></td>`
    table += `<td style="${tdBase}${rowBg}text-align:center;white-space:nowrap;color:#94A3B8;">${prev ? fmtMan(e.pre, lang) : '&#8211;'}</td>`
    table += `<td style="${tdBase}${rowBg}text-align:center;white-space:nowrap;font-weight:700;color:#334155;">${fmtMan(e.cur, lang)}</td>`
    table += `<td style="${tdBase}${rowBg}text-align:center;white-space:nowrap;">${_momCell(e.cur, prev ? e.pre : null, lang)}</td>`
    table += '</tr>'
  })
  table += '</table>'
  return { table, count: topEntries.length, latest, prev }
}

// 두 범프 카드를 좌우배치 (50%/50%) 로 묶는 행. 한쪽만 있으면 단독 full-width.
function bumpChartsRowHtml(touchCard, domainCard) {
  const cards = [touchCard, domainCard].filter(Boolean)
  if (!cards.length) return ''
  if (cards.length === 1) {
    return `
              <tr><td style="padding-bottom:28px;">${cards[0]}</td></tr>`
  }
  return `
              <!-- ══ Citation 범프차트 좌우배치 (외부채널 + 도메인) ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
                    <td width="50%" style="vertical-align:top;padding-right:6px;">${cards[0]}</td>
                    <td width="50%" style="vertical-align:top;padding-left:6px;">${cards[1]}</td>
                  </tr></table>
                </td>
              </tr>`
}

// Brand/Manufacturer 카테고리명을 'Brand' 로 단축 + 충돌 시 월값 병합 (TTL/Chat-GPT 공통)
function _renameTouchChannels(src) {
  const renamed = {}
  Object.entries(src || {}).forEach(([name, months]) => {
    const key = /brand/i.test(name) && /(manufacturer|메뉴팩|메뉴펙|제조)/i.test(name) ? 'Brand' : name
    if (!renamed[key]) { renamed[key] = { ...months }; return }
    Object.entries(months || {}).forEach(([m, v]) => {
      renamed[key][m] = (renamed[key][m] || 0) + (v || 0)
    })
  })
  return renamed
}


// 범프 섹션들을 한 카드에 stacked (TTL 범프 grid + 모델별 MoM 표). sections: [{label, count, html}]
//   titleSuffix: 카드 제목 우측 보조 라벨 (TTL 범프 = 월간 트렌드 기준).
function _momSectionsCard(titleText, titleSuffix, sections, lang) {
  if (!sections.length) return ''
  const subtitleRow = (label, count) => `<tr>
                      <td style="padding:11px 10px 2px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
                          <td style="vertical-align:middle;">
                            <table border="0" cellpadding="0" cellspacing="0"><tr>
                              <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                              <td style="padding-left:6px;font-size:13px;font-weight:700;color:#334155;font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.5px' : '-0.3px'};">${label}</td>
                            </tr></table>
                          </td>
                          <td align="right" style="vertical-align:middle;font-size:10px;color:#94A3B8;font-family:${EM_FONT};white-space:nowrap;">Top ${count}</td>
                        </tr></table>
                      </td>
                    </tr>`
  const body = sections.map(s => `${subtitleRow(s.label, s.count)}
                    <tr><td style="padding:6px 10px 12px;">${s.html}</td></tr>`).join('')
  return `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:13px 10px 10px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0"><tr>
                          <td style="font-size:14px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};letter-spacing:-0.5px;">${titleText} — ${titleSuffix}</td>
                        </tr></table>
                      </td>
                    </tr>
                    ${body}
                  </table>`
}

// 범프 grid 결과(grid+table)를 한 셀 html 로 합침 (TTL 섹션용) — 사이 6px 스페이서
function _gridSectionHtml(gt) {
  return `${gt.grid}<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td style="height:6px;line-height:6px;font-size:1px;">&nbsp;</td></tr></table>${gt.table}`
}

// 외부채널 범프 — TTL 은 범프차트(rank-grid), 모델별은 전월 vs 당월 MoM 표 (한 카드 stacked)
//   citTouchPointsTrend(TTL): { name: { monthLabel: value } } / citTouchPointsByLlm: { llm: { channel: { month } } }
function touchPointsBumpCombinedHtml(citTouchPointsTrend, citTrendMonths, citTouchPointsByLlm, meta, lang = 'ko') {
  console.warn('[touchPointsBump] 진입 — 수신 데이터', {
    TTLtrend키수: citTouchPointsTrend ? Object.keys(citTouchPointsTrend).length : '(null)',
    월목록: citTrendMonths,
    모델별키: citTouchPointsByLlm ? Object.keys(citTouchPointsByLlm) : '(null)',
  })
  if (!citTouchPointsTrend || !citTrendMonths || !citTrendMonths.length) {
    console.warn('[touchPointsBump] EARLY RETURN — TTL trend/월목록 없음 → 섹션 전체 미렌더', { hasTrend: !!citTouchPointsTrend, monthsLen: citTrendMonths?.length })
    return ''
  }
  const t = T[lang] || T.ko
  const chLabel = lang === 'ko' ? '채널' : 'Channel'
  const sections = []
  // TTL — 범프차트 (rank-grid + 실수치 테이블)
  const ttl = _bumpGridTable(_renameTouchChannels(citTouchPointsTrend), chLabel, lang, { highlight: meta.bumpHighlight })
  if (ttl) sections.push({ label: 'TTL', count: ttl.count, html: _gridSectionHtml(ttl) })
  // 모델별 — 전월 vs 당월 MoM 표 (Total/All 제외, 고정 순서 ChatGPT → Perplexity → Gemini → 기타)
  if (meta.showTouchPointsBumpChatGpt !== false && citTouchPointsByLlm && typeof citTouchPointsByLlm === 'object') {
    const llmKeys = Object.keys(citTouchPointsByLlm).filter(k => !/^(total|all)$/i.test(k))
    console.warn(`[touchPointsBump] 모델별 수신 키 ${Object.keys(citTouchPointsByLlm).length}개 → 필터 후 ${llmKeys.length}개`, { 전체키: Object.keys(citTouchPointsByLlm), 모델키: llmKeys })
    llmKeys
      .sort((a, b) => _llmFixedIdx(a) - _llmFixedIdx(b))
      .forEach(k => {
        const mom = _bumpMomTable(_renameTouchChannels(citTouchPointsByLlm[k]), chLabel, lang, { highlight: meta.bumpHighlight, tag: `외부채널/${k}` })
        if (mom) sections.push({ label: _llmDisplayName(k), count: mom.count, html: mom.table })
      })
  } else {
    console.warn('[touchPointsBump] 모델별 섹션 skip', { showFlag: meta.showTouchPointsBumpChatGpt, hasByLlm: !!citTouchPointsByLlm, type: typeof citTouchPointsByLlm })
  }
  console.warn(`[touchPointsBump] 최종 섹션 ${sections.length}개`, { 섹션라벨: sections.map(s => s.label) })
  return _momSectionsCard(t.touchPointTitle, t.monthTrend, sections, lang)
}

// 도메인 범프 → 전월 vs 당월 MoM 표 (TTL + 모든 LLM 모델)
//   citDomainTrend: { 'cnty|domain': { cnty, domain, type, months:{label:val} } } (TTL)
//   citDomainByLlmTrend: { llm: { domain: { month: value } } } (모델별)
function domainBumpSectionHtml(citDomainTrend, citDomainMonths, citDomainByLlmTrend, meta, lang = 'ko') {
  console.warn('[domainBump] 진입 — 수신 데이터', {
    TTLtrend키수: citDomainTrend ? Object.keys(citDomainTrend).length : '(null)',
    월목록: citDomainMonths,
    모델별키: citDomainByLlmTrend ? Object.keys(citDomainByLlmTrend) : '(null)',
  })
  if (!citDomainTrend || !citDomainMonths || !citDomainMonths.length) {
    console.warn('[domainBump] EARLY RETURN — TTL trend/월목록 없음 → 섹션 전체 미렌더', { hasTrend: !!citDomainTrend, monthsLen: citDomainMonths?.length })
    return ''
  }
  const t = T[lang] || T.ko
  const domLabel = lang === 'ko' ? '도메인' : 'Domain'

  // TTL 국가의 도메인만 사용
  let rows = Object.entries(citDomainTrend)
    .filter(([key]) => key.startsWith('TTL|'))
    .map(([, val]) => ({ domain: val.domain, months: val.months || {} }))

  // TTL 비면 country-aggregated 폴백 (citationTemplate citDomainBumpChartHtml 패턴)
  if (!rows.length || !rows.some(r => Object.values(r.months).some(v => v > 0))) {
    const agg = {}
    Object.entries(citDomainTrend).forEach(([key, val]) => {
      if (key.startsWith('TTL|')) return
      const k = val.domain
      if (!agg[k]) agg[k] = { domain: val.domain, months: {} }
      Object.entries(val.months || {}).forEach(([m, v]) => { agg[k].months[m] = (agg[k].months[m] || 0) + (v || 0) })
    })
    rows = Object.values(agg)
  }

  // TTL trend → { domain: { monthLabel: value } } 정규화
  const ttlTrend = {}
  rows.forEach(r => { ttlTrend[r.domain] = r.months })

  const sections = []
  // TTL — 범프차트 (rank-grid + 실수치 테이블)
  const ttl = _bumpGridTable(ttlTrend, domLabel, lang, { shortFn: emStripDomain, highlight: meta.bumpHighlight })
  if (ttl) sections.push({ label: 'TTL', count: ttl.count, html: _gridSectionHtml(ttl) })
  // 모델별 — 전월 vs 당월 MoM 표 (Total/All 제외) — citDomainByLlmTrend 있을 때만 (파서 v3 + LLM Model 컬럼)
  if (meta.showDomainBumpModels !== false && citDomainByLlmTrend && typeof citDomainByLlmTrend === 'object') {
    const llmKeys = Object.keys(citDomainByLlmTrend).filter(k => !/^(total|all)$/i.test(k))
    console.warn(`[domainBump] 모델별 수신 키 ${Object.keys(citDomainByLlmTrend).length}개 → 필터 후 ${llmKeys.length}개`, { 전체키: Object.keys(citDomainByLlmTrend), 모델키: llmKeys })
    llmKeys
      .sort((a, b) => _llmFixedIdx(a) - _llmFixedIdx(b))
      .forEach(k => {
        const mom = _bumpMomTable(citDomainByLlmTrend[k], domLabel, lang, { shortFn: emStripDomain, highlight: meta.bumpHighlight, tag: `도메인/${k}` })
        if (mom) sections.push({ label: _llmDisplayName(k), count: mom.count, html: mom.table })
      })
  } else {
    console.warn('[domainBump] 모델별 섹션 skip', { hasByLlmTrend: !!citDomainByLlmTrend, type: typeof citDomainByLlmTrend })
  }
  console.warn(`[domainBump] 최종 섹션 ${sections.length}개`, { 섹션라벨: sections.map(s => s.label) })
  return _momSectionsCard(t.citationDomainTitle, t.monthTrend, sections, lang)
}

// ─── LLM 모델별 인용비중 (100% 누적 가로 막대, 랭킹 1→topN) ────────────────────
const EM_LLM_COLORS = ['#CF0652', '#1D4ED8', '#059669', '#D97706', '#7C3AED', '#DB2777', '#0D9488', '#EA580C', '#4F46E5', '#DC2626', '#0891B2', '#65A30D']

// citTouchPointsByLlm { llm: { channel: { month: sum } } } → { channel: { llm: latestValue } }
function _llmShareFromTouch(byLlm, months) {
  if (!byLlm || !months || !months.length) return null
  const out = {}
  Object.entries(byLlm).forEach(([llm, byChannel]) => {
    if (llm === 'Total') return
    Object.entries(byChannel || {}).forEach(([channel, monthVals]) => {
      let v = 0
      for (let j = months.length - 1; j >= 0; j--) {
        const mv = monthVals[months[j]]
        if (mv > 0) { v = mv; break }
      }
      if (v <= 0) return
      const key = /brand/i.test(channel) && /(manufacturer|메뉴팩|메뉴펙|제조)/i.test(channel) ? 'Brand' : channel
      if (!out[key]) out[key] = {}
      out[key][llm] = (out[key][llm] || 0) + v
    })
  })
  return Object.keys(out).length ? out : null
}

// citDomainByLlm { llm: { domain: value } } → { domain: { llm: value } }
function _llmShareFromDomain(byLlm) {
  if (!byLlm) return null
  const out = {}
  Object.entries(byLlm).forEach(([llm, byDom]) => {
    if (llm === 'Total') return
    Object.entries(byDom || {}).forEach(([domain, v]) => {
      if (v <= 0) return
      if (!out[domain]) out[domain] = {}
      out[domain][llm] = (out[domain][llm] || 0) + v
    })
  })
  return Object.keys(out).length ? out : null
}

// 등장하는 LLM 모델 → 색상 고정 매핑 (두 블록 공통 범례용)
// 필수 순서/색상: ChatGPT 초록 → Perplexity 주황 → Gemini 빨강. 그 외 모델은 팔레트 fallback.
const EM_LLM_FIXED = [
  { test: /chat\s*gpt|gpt|openai/i,           color: '#059669', label: 'ChatGPT' },    // 초록
  { test: /perplexity/i,                      color: '#D97706', label: 'Perplexity' }, // 주황
  { test: /gemini|google|flash|bard|2\.5/i,   color: '#DC2626', label: 'Gemini' },     // 빨강
]
// 모델 raw 키 → 고정 순서 index (막대 세그먼트 좌→우 정렬용)
function _llmFixedIdx(llm) {
  for (let i = 0; i < EM_LLM_FIXED.length; i++) if (EM_LLM_FIXED[i].test.test(llm)) return i
  return EM_LLM_FIXED.length
}
// 모델 raw 키 → 표시명 (예: '2.5flash' → 'Gemini')
function _llmDisplayName(llm) {
  const f = EM_LLM_FIXED.find(x => x.test.test(llm))
  return f ? f.label : llm
}
function _llmColorMap(...itemMaps) {
  const models = new Set()
  itemMaps.filter(Boolean).forEach(m => {
    Object.values(m).forEach(byLlm => Object.keys(byLlm).forEach(llm => models.add(llm)))
  })
  const all = [...models]
  const map = {}
  // 1) 고정 모델을 필수 순서대로 먼저 등록 (범례 순서 = 삽입 순서)
  EM_LLM_FIXED.forEach(({ test, color }) => {
    all.forEach(llm => { if (!map[llm] && test.test(llm)) map[llm] = color })
  })
  // 2) 그 외 모델은 팔레트 fallback
  let i = 0
  all.forEach(llm => { if (!map[llm]) map[llm] = EM_LLM_COLORS[i++ % EM_LLM_COLORS.length] })
  return map
}

// 100% 누적 가로 막대 블록 (랭킹 1→topN). itemMap: { item: { llm: value } }
function _llmShareBarsHtml(itemMap, llmColorMap, topN, labelFn) {
  if (!itemMap) return ''
  const rows = Object.entries(itemMap).map(([item, byLlm]) => {
    const total = Object.values(byLlm).reduce((s, v) => s + (v || 0), 0)
    return { item, byLlm, total }
  }).filter(r => r.total > 0).sort((a, b) => b.total - a.total).slice(0, topN)
  if (!rows.length) return ''
  return rows.map((r, i) => {
    const segs = Object.entries(r.byLlm).filter(([, v]) => v > 0).sort((a, b) => _llmFixedIdx(a[0]) - _llmFixedIdx(b[0]) || b[1] - a[1])
    const cells = segs.map(([llm, v]) => {
      const pct = (v / r.total * 100)
      const color = llmColorMap[llm] || '#94A3B8'
      return `<td width="${pct.toFixed(1)}%" style="background:${color};height:16px;font-size:0;line-height:0;mso-line-height-rule:exactly;">&nbsp;</td>`
    }).join('')
    const label = labelFn ? labelFn(r.item) : r.item
    return `
                                      <tr>
                                        <td style="padding:3px 0;">
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
                                            <td width="16" style="font-size:11px;font-weight:700;color:#94A3B8;font-family:${EM_FONT};vertical-align:middle;">${i + 1}</td>
                                            <td width="38%" style="font-size:11px;font-weight:600;color:#1A1A1A;font-family:${EM_FONT};vertical-align:middle;padding-right:6px;letter-spacing:-0.3px;word-break:break-all;">${escapeHtml(label)}</td>
                                            <td style="vertical-align:middle;">
                                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;border-radius:3px;overflow:hidden;"><tr>${cells}</tr></table>
                                            </td>
                                          </tr></table>
                                        </td>
                                      </tr>`
  }).join('')
}

// LLM 모델 범례 (색상 칩 + 모델명)
function _llmLegendHtml(llmColorMap) {
  const entries = Object.entries(llmColorMap)
  if (!entries.length) return ''
  const chips = entries.map(([llm, color]) => `
                                  <td style="padding:0 8px 0 0;white-space:nowrap;vertical-align:middle;">
                                    <table border="0" cellpadding="0" cellspacing="0" style="display:inline-table;"><tr>
                                      <td width="10" style="background:${color};border-radius:2px;height:10px;font-size:0;line-height:0;">&nbsp;</td>
                                      <td style="padding-left:4px;font-size:10px;color:#64748B;font-family:${EM_FONT};white-space:nowrap;">${escapeHtml(_llmDisplayName(llm))}</td>
                                    </tr></table>
                                  </td>`).join('')
  return `<table border="0" cellpadding="0" cellspacing="0"><tr>${chips}</tr></table>`
}

// LLM 모델별 인용비중 섹션 (citation 영역 상단) — 카테고리 도메인 + 도메인 2열
function llmCitationShareSectionHtml(citTouchPointsByLlm, citTrendMonths, citDomainByLlm, citDomainMonths, meta, lang = 'ko') {
  if (meta.showLlmShare === false) return ''
  const t = T[lang] || T.ko
  const touchMap = _llmShareFromTouch(citTouchPointsByLlm, citTrendMonths)
  const domainMap = _llmShareFromDomain(citDomainByLlm)
  if (!touchMap && !domainMap) return ''
  const topN = (meta.llmShareTopN === 5) ? 5 : 10
  const colorMap = _llmColorMap(touchMap, domainMap)
  const touchBars = touchMap ? _llmShareBarsHtml(touchMap, colorMap, topN, null) : ''
  const domainBars = domainMap ? _llmShareBarsHtml(domainMap, colorMap, topN, emStripDomain) : ''
  if (!touchBars && !domainBars) return ''
  const subTitleTouch = lang === 'ko' ? '카테고리 도메인' : 'Domain Category'
  const subTitleDomain = lang === 'ko' ? '도메인' : 'Domain'
  return `
                          <!-- ══ LLM 모델별 인용비중 (100% 누적 가로 막대, 랭킹 1→${topN}) ══ -->
                          <tr>
                            <td style="padding-bottom:16px;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr><td style="font-size:14px;font-weight:700;color:#0F172A;font-family:${EM_FONT};padding-bottom:8px;border-bottom:1px solid #E8EDF2;">${t.llmShareTitle}</td></tr>
                                <tr><td align="right" style="padding:8px 0;">${_llmLegendHtml(colorMap)}</td></tr>
                                <tr>
                                  <td>
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
                                      ${touchBars ? `<td width="50%" style="vertical-align:top;padding-right:6px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                          <tr><td style="font-size:12px;font-weight:700;color:#475569;font-family:${EM_FONT};padding-bottom:6px;">${subTitleTouch}</td></tr>
                                          ${touchBars}
                                        </table>
                                      </td>` : ''}
                                      ${domainBars ? `<td width="50%" style="vertical-align:top;padding-left:6px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                          <tr><td style="font-size:12px;font-weight:700;color:#475569;font-family:${EM_FONT};padding-bottom:6px;">${subTitleDomain}</td></tr>
                                          ${domainBars}
                                        </table>
                                      </td>` : ''}
                                    </tr></table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>`
}

// ─── 전월 대비 모델별 Citation 인용수 (채널 스코프 3종 × 모델 3개 세로 막대) ──
// 채널 스코프별로 묶고 그 안에 모델 3개(ChatGPT/Gemini/Perplexity) 막대.
//   전체 채널 / 커뮤니티 채널 → byLlm (citTouchPointsByLlm) { llm: { channel: { month: sum } } }
//   레딧 도메인              → citDomainByLlmTrend { llm: { domain: { month: sum } } }
// 왼쪽 막대=전월(회색), 오른쪽 막대=당월(레드). 모델명 아래에 전월비(MoM) 표기.
function citCountByModelVBarHtml(byLlm, citTrendMonths, meta, lang = 'ko', citDomainByLlmTrend = null, citDomainMonths = []) {
  if (meta.showCitCountVBar === false) return ''
  const t = T[lang] || T.ko
  if (!byLlm || typeof byLlm !== 'object') {
    console.warn('[citCountVBar] byLlm 없음 → skip', { hasByLlm: !!byLlm })
    return ''
  }

  // 사용자 지정 순서: ChatGPT(GPT) → Gemini → Perplexity
  const modelSpecs = [
    { test: /chat\s*gpt|gpt|openai/i, label: 'ChatGPT' },
    { test: /gemini|google|flash|bard|2\.5/i, label: 'Gemini' },
    { test: /perplexity/i, label: 'Perplexity' },
  ]
  const channelKeys = Object.keys(byLlm).filter(k => !/^(total|all)$/i.test(k))
  const domainKeys = (citDomainByLlmTrend && typeof citDomainByLlmTrend === 'object')
    ? Object.keys(citDomainByLlmTrend).filter(k => !/^(total|all)$/i.test(k)) : []

  // 채널 합산 — chanFilter null=전체, regex=매칭 채널만 → { month: sumOverChannels }
  function chanMonthSums(llmKey, chanFilter) {
    const byChannel = byLlm[llmKey] || {}
    const acc = {}
    Object.entries(byChannel).forEach(([channel, monthVals]) => {
      if (chanFilter && !chanFilter.test(channel)) return
      Object.entries(monthVals || {}).forEach(([m, v]) => { acc[m] = (acc[m] || 0) + (Number(v) || 0) })
    })
    return acc
  }
  // 레딧 도메인 합산 → { month: sumOverRedditDomains }
  function redditMonthSums(llmKey) {
    const byDomain = (citDomainByLlmTrend && citDomainByLlmTrend[llmKey]) || {}
    const acc = {}
    Object.entries(byDomain).forEach(([domain, monthVals]) => {
      if (!/reddit|레딧/i.test(domain)) return
      Object.entries(monthVals || {}).forEach(([m, v]) => { acc[m] = (acc[m] || 0) + (Number(v) || 0) })
    })
    return acc
  }

  const scopeDefs = [
    { label: t.citScopeAll, resolve: spec => { const k = channelKeys.find(c => spec.test.test(c)); return k ? chanMonthSums(k, null) : {} } },
    { label: t.citScopeCommunity, resolve: spec => { const k = channelKeys.find(c => spec.test.test(c)); return k ? chanMonthSums(k, /communit|커뮤니티/i) : {} } },
    { label: t.citScopeReddit, resolve: spec => { const k = domainKeys.find(d => spec.test.test(d)); return k ? redditMonthSums(k) : {} } },
  ]

  // 스코프×모델 월합 계산
  const scopeData = scopeDefs.map(sc => ({
    label: sc.label,
    models: modelSpecs.map(spec => ({ label: spec.label, sums: sc.resolve(spec) })),
  }))

  // 전 스코프 통합 월 존재 판단 → 단일 latest/prev (범례 일관)
  const allSums = scopeData.flatMap(s => s.models.map(m => m.sums))
  const monthsWithData = TP_TREND_12M.filter(m => allSums.some(s => (s[m] || 0) > 0))
  if (!monthsWithData.length) {
    console.warn('[citCountVBar] 데이터 월 없음 → skip', { scopeLabels: scopeDefs.map(s => s.label), hasDomainTrend: !!citDomainByLlmTrend })
    return ''
  }
  const latest = monthsWithData[monthsWithData.length - 1]          // 당월 (예: May)
  const prev = monthsWithData.length >= 2 ? monthsWithData[monthsWithData.length - 2] : null  // 전월 (예: Apr)
  const hasPrev = prev != null

  // 스코프별 막대값 + localMax (스코프 내부 상대 스케일)
  scopeData.forEach(sc => {
    sc.bars = sc.models.map(m => ({ label: m.label, cur: m.sums[latest] || 0, pre: prev ? (m.sums[prev] || 0) : 0 }))
    sc.localMax = Math.max(...sc.bars.map(b => Math.max(b.cur, b.pre)), 1)
    if (!sc.bars.some(b => b.cur > 0 || b.pre > 0)) {
      console.warn('[citCountVBar] 스코프 데이터 비어있음 → 빈 막대 렌더', { scope: sc.label })
    }
  })

  const BAR_MAX = 70, bw = 16
  const APR_COLOR = '#94A3B8', MAY_COLOR = EM_RED

  function monLabel(m) {
    if (!m) return ''
    const idx = TP_TREND_12M.indexOf(m)
    if (idx < 0) return m
    return lang === 'en' ? m : `${idx + 1}월`
  }
  function momLine(cur, pv) {
    if (pv == null) return ''
    const d = cur - pv
    const c = d > 0 ? '#15803D' : d < 0 ? '#BE123C' : '#94A3B8'
    return `<tr><td style="font-size:9px;font-weight:600;color:${c};font-family:${EM_FONT};text-align:center;white-space:nowrap;padding-top:1px;">(${d > 0 ? '+' : ''}${fmtMan(d, lang)})</td></tr>`
  }

  function makeBarCol(b, localMax) {
    const pv = b.pre, cv = b.cur
    const ph = Math.max(2, Math.round(pv / localMax * BAR_MAX))
    const ch = Math.max(2, Math.round(cv / localMax * BAR_MAX))
    const spacerP = BAR_MAX - ph, spacerC = BAR_MAX - ch
    return `<td style="vertical-align:bottom;text-align:center;padding:0 2px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
        <tr><td style="vertical-align:bottom;text-align:center;">
          <table border="0" cellpadding="0" cellspacing="0" align="center"><tr>
            ${hasPrev ? `<td style="vertical-align:bottom;text-align:center;padding:0 1px;">
              <table border="0" cellpadding="0" cellspacing="0" align="center">
                <tr><td style="font-size:11px;font-weight:600;color:#94A3B8;font-family:${EM_FONT};text-align:center;padding-bottom:1px;white-space:nowrap;">${fmtMan(pv, lang)}</td></tr>
                ${spacerP > 0 ? `<tr><td height="${spacerP}" style="font-size:0;">&nbsp;</td></tr>` : ''}
                <tr><td height="${ph}" style="font-size:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="${bw}" height="${ph}" style="background:${APR_COLOR};border-radius:3px 3px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
              </table>
            </td>` : ''}
            <td style="vertical-align:bottom;text-align:center;padding:0 1px;">
              <table border="0" cellpadding="0" cellspacing="0" align="center">
                <tr><td style="font-size:11px;font-weight:700;color:${MAY_COLOR};font-family:${EM_FONT};text-align:center;padding-bottom:1px;white-space:nowrap;">${fmtMan(cv, lang)}</td></tr>
                ${spacerC > 0 ? `<tr><td height="${spacerC}" style="font-size:0;">&nbsp;</td></tr>` : ''}
                <tr><td height="${ch}" style="font-size:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="${bw}" height="${ch}" style="background:${MAY_COLOR};border-radius:3px 3px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
              </table>
            </td>
          </tr></table>
        </td></tr>
        <tr><td style="font-size:11px;font-weight:700;color:#475569;font-family:${EM_FONT};padding-top:4px;text-align:center;white-space:nowrap;">${b.label}</td></tr>
        ${hasPrev ? momLine(cv, pv) : ''}
      </table>
    </td>`
  }

  function makeScopeCell(sc) {
    return `<td width="33%" style="vertical-align:top;padding:0 4px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr><td style="font-size:12px;font-weight:700;color:#0F172A;font-family:${EM_FONT};text-align:center;padding-bottom:8px;letter-spacing:${lang === 'en' ? '-0.5px' : '-0.3px'};">${sc.label}</td></tr>
        <tr><td style="vertical-align:bottom;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;"><tr>${sc.bars.map(b => makeBarCol(b, sc.localMax)).join('')}</tr></table>
        </td></tr>
      </table>
    </td>`
  }

  // 범례 (전월 회색 / 당월 레드)
  const legend = `<table border="0" cellpadding="0" cellspacing="0" align="center"><tr>
    ${hasPrev ? `<td style="padding:0 6px;"><table border="0" cellpadding="0" cellspacing="0"><tr>
      <td width="10" height="10" style="background:${APR_COLOR};border-radius:2px;font-size:0;">&nbsp;</td>
      <td style="padding-left:4px;font-size:11px;font-weight:600;color:#64748B;font-family:${EM_FONT};white-space:nowrap;">${monLabel(prev)}</td>
    </tr></table></td>` : ''}
    <td style="padding:0 6px;"><table border="0" cellpadding="0" cellspacing="0"><tr>
      <td width="10" height="10" style="background:${MAY_COLOR};border-radius:2px;font-size:0;">&nbsp;</td>
      <td style="padding-left:4px;font-size:11px;font-weight:600;color:#64748B;font-family:${EM_FONT};white-space:nowrap;">${monLabel(latest)}</td>
    </tr></table></td>
  </tr></table>`

  const divider = `<td width="1" style="vertical-align:middle;padding:0;"><table border="0" cellpadding="0" cellspacing="0" height="${BAR_MAX + 60}"><tr><td width="2" style="background:#E8EDF2;font-size:0;">&nbsp;</td></tr></table></td>`

  return `<tr>
    <td style="padding:14px 12px 4px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border:1px solid #E8EDF2;border-radius:12px;">
        <tr><td style="padding:12px 12px 2px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
            <td style="vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0"><tr>
              <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
              <td style="padding-left:7px;font-size:14px;font-weight:700;color:#0F172A;font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.5px' : '-0.3px'};">${t.citCountVBarTitle}</td>
            </tr></table></td>
            <td style="vertical-align:middle;text-align:right;">${legend}</td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:8px 6px 14px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
            ${scopeData.map((sc, i) => (i > 0 ? divider : '') + makeScopeCell(sc)).join('')}
          </tr></table>
        </td></tr>
      </table>
    </td>
  </tr>`
}

// ─── 제품별 Citation (Top 3 카테고리 + Top 3 도메인, 본부별 그룹핑 + 막대) ──
function citationByProductHtml(citationsCnty, meta, lang) {
  if (meta.showCitPrd === false) return ''
  if (!citationsCnty || !citationsCnty.length) return ''
  const isPrdSpec = p => p && String(p).toUpperCase() !== 'TTL' && String(p).toUpperCase() !== 'TOTAL'
  // PRD 코드 → 표준 id / 표시명 / 본부 매핑
  const PRD_CODE_TO_ID = {
    TV: 'tv', IT: 'monitor', MONITOR: 'monitor', AV: 'audio', AUDIO: 'audio',
    REF: 'fridge', REFRIGERATOR: 'fridge', WM: 'washer', WASHER: 'washer',
    DW: 'dw', DISHWASHER: 'dw', VC: 'vacuum', VACUUM: 'vacuum',
    COOKING: 'cooking', COOK: 'cooking', RAC: 'rac', AIRCARE: 'aircare', AIRCARE_: 'aircare',
  }
  // src/categoryMap.js single source 사용
  const PRD_KR = PROD_ID_TO_KR
  const PRD_EN = PROD_ID_TO_EN
  const PRD_BU = PROD_ID_TO_BU
  const PRD_ORDER_IDX = PROD_ID_TO_ORDER
  const prdId = code => PRD_CODE_TO_ID[String(code || '').toUpperCase()] || String(code || '').toLowerCase()
  const prdName = code => {
    const id = prdId(code)
    return (lang === 'en' ? PRD_EN[id] : PRD_KR[id]) || code
  }
  const prdBu = code => PRD_BU[prdId(code)] || ''
  // 제품별 그룹핑
  const prdGroups = {}
  citationsCnty.forEach(r => {
    if (!isPrdSpec(r.prd)) return
    if (!isTtlLlmVal(r.llm)) return   // LLM 모델별 행 제외 — 합계에 이중 계상 방지
    if (!prdGroups[r.prd]) prdGroups[r.prd] = []
    prdGroups[r.prd].push(r)
  })
  const prdKeys = Object.keys(prdGroups)
  if (!prdKeys.length) return ''
  const t = lang === 'en'
    ? { title: 'Citation by Product', topCategories: 'Top 3 Categories', topDomains: 'Top 3 Domains', noData: 'No data', buLabels: { MS: 'MS', HS: 'HS', ES: 'ES', etc: 'Other' } }
    : { title: '제품별 Citation', topCategories: 'Top 3 카테고리', topDomains: 'Top 3 도메인', noData: '데이터 없음', buLabels: { MS: 'MS', HS: 'HS', ES: 'ES', etc: '기타' } }
  // 본부별 묶기
  const byBu = { MS: [], HS: [], ES: [], etc: [] }
  prdKeys.forEach(prd => {
    const bu = prdBu(prd)
    byBu[bu in byBu ? bu : 'etc'].push(prd)
  })
  Object.keys(byBu).forEach(bu => {
    byBu[bu].sort((a, b) => {
      const ai = PRD_ORDER_IDX[prdId(a)]; const bi = PRD_ORDER_IDX[prdId(b)]
      return (ai != null ? ai : 999) - (bi != null ? bi : 999)
    })
  })
  // 막대 가로 시각화 (이메일 호환 — 중첩 table) · 짙은 녹색 계열
  const BAR_COLORS = { cat: CIT_GREEN, dom: CIT_GREEN_DARK }
  function barRow(label, displayValue, pctWidth, color) {
    const w = Math.max(2, Math.min(Math.round(pctWidth), 100))
    return `<tr>
      <td style="font-size:11px;color:#475569;padding:3px 6px 3px 0;font-family:${EM_FONT};white-space:nowrap;max-width:100px;overflow:hidden;text-overflow:ellipsis;line-height:1.3;">${escapeHtml(label)}</td>
      <td style="padding:3px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F1F5F9;border-radius:3px;">
          <tr><td height="7" style="font-size:0;line-height:0;">
            <table border="0" cellpadding="0" cellspacing="0" width="${w}%" style="background:${color};border-radius:3px;">
              <tr><td height="7" style="font-size:0;line-height:0;">&nbsp;</td></tr>
            </table>
          </td></tr>
        </table>
      </td>
      <td align="right" style="font-size:11px;font-weight:700;color:#1A1A1A;padding:3px 0 3px 6px;font-family:${EM_FONT};white-space:nowrap;line-height:1.3;">${displayValue}</td>
    </tr>`
  }
  function emptyRow() {
    return `<tr><td colspan="3" style="font-size:11px;color:#94A3B8;padding:3px 0;font-family:${EM_FONT};line-height:1.3;">${t.noData}</td></tr>`
  }
  function prdCardHtml(prd) {
    const rows = prdGroups[prd]
    // 제품 전체 citation 합계 — 카테고리 비중 분모
    const totalForCat = rows.reduce((s, r) => s + (r.citations || 0), 0) || 1
    // Top 3 카테고리
    const catMap = {}
    rows.forEach(r => {
      const cat = r.type || 'Unknown'
      catMap[cat] = (catMap[cat] || 0) + (r.citations || 0)
    })
    const topCats = Object.entries(catMap).sort((a, b) => b[1] - a[1]).slice(0, 3)
    // 도메인 비중 분모 — 도메인이 있는 행의 citation 합계
    const totalForDom = rows.reduce((s, r) => s + (r.domain ? (r.citations || 0) : 0), 0) || 1
    // Top 3 도메인
    const domMap = {}
    rows.forEach(r => {
      const dom = r.domain || ''
      if (!dom) return
      domMap[dom] = (domMap[dom] || 0) + (r.citations || 0)
    })
    const topDoms = Object.entries(domMap).sort((a, b) => b[1] - a[1]).slice(0, 3)
    const catRows = topCats.length
      ? topCats.map(([n, v]) => {
          const pct = (v / totalForCat) * 100
          return barRow(n, pct.toFixed(1) + '%', pct, BAR_COLORS.cat)
        }).join('')
      : emptyRow()
    const domRows = topDoms.length
      ? topDoms.map(([n, v]) => {
          const pct = (v / totalForDom) * 100
          return barRow(n, pct.toFixed(1) + '%', pct, BAR_COLORS.dom)
        }).join('')
      : emptyRow()
    return `<td width="33%" valign="top" style="padding:4px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border:1.5px solid #E8EDF2;border-radius:8px;">
        <tr><td style="padding:9px 11px;">
          <p style="margin:0 0 6px;font-size:13px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};line-height:1.3;">${escapeHtml(prdName(prd))}</p>
          <p style="margin:0 0 3px;font-size:10px;font-weight:700;color:#64748B;font-family:${EM_FONT};text-transform:uppercase;letter-spacing:0.4px;line-height:1.3;">${t.topCategories}</p>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:7px;table-layout:fixed;">${catRows}</table>
          <p style="margin:0 0 3px;font-size:10px;font-weight:700;color:#64748B;font-family:${EM_FONT};text-transform:uppercase;letter-spacing:0.4px;line-height:1.3;">${t.topDomains}</p>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">${domRows}</table>
        </td></tr>
      </table>
    </td>`
  }
  // 본부별 섹션 — 각 본부에 3-column grid
  const BU_ORDER = ['MS', 'HS', 'ES', 'etc']
  const buSections = BU_ORDER.filter(bu => byBu[bu]?.length).map(bu => {
    const cards = byBu[bu].map(prdCardHtml)
    const gridRows = []
    for (let i = 0; i < cards.length; i += 3) {
      const trio = cards.slice(i, i + 3)
      while (trio.length < 3) trio.push('<td width="33%" style="padding:5px;"></td>')
      gridRows.push(`<tr>${trio.join('')}</tr>`)
    }
    return `<tr>
      <td style="padding:6px 0 2px;">
        <table border="0" cellpadding="0" cellspacing="0"><tr>
          <td width="3" style="background:${CIT_GREEN};border-radius:2px;">&nbsp;</td>
          <td style="padding-left:6px;font-size:12px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};line-height:1.2;">${t.buLabels[bu]}</td>
        </tr></table>
      </td>
    </tr>
    <tr><td><table border="0" cellpadding="0" cellspacing="0" width="100%">${gridRows.join('')}</table></td></tr>`
  }).join('')
  if (!buSections) return ''
  // 인사이트 블록 (citPrdInsight) — 헤더 바로 아래 삽입
  const insightHtml = insightBlockHtml(meta.citPrdInsight, meta.showCitPrdInsight, meta.citPrdHowToRead, meta.showCitPrdHowToRead, lang, { insight: 'citPrdInsight', howToRead: 'citPrdHowToRead' })
  // 비중 분석 각주
  const footnoteText = lang === 'en'
    ? 'Citation counts by product use different prompt counts per product, so they are analyzed as ratios.'
    : '제품별 싸이테이션 수의 경우 제품별 측정 프롬프트 수가 상이하여 비중으로 분석함'
  return `<tr>
    <td style="padding-top:12px;border-top:2px solid #E8EDF2;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr><td style="font-size:14px;font-weight:700;color:#0F172A;font-family:${EM_FONT};padding:8px 0;">${t.title}</td></tr>
        ${insightHtml}
        ${buSections}
        <tr><td style="padding:8px 4px 0;font-size:12px;font-weight:700;color:#000000;font-family:${EM_FONT};line-height:1.5;font-style:italic;">* ${footnoteText}</td></tr>
      </table>
    </td>
  </tr>`
}

// ─── Category Cards (Progress Tracker 진척율) ──────────────────────────────
function categoryCardsHtml(categoryStats, lang, meta) {
  if (!categoryStats || !categoryStats.length) {
    return `<div style="margin-bottom:14px;padding:14px 16px;background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;font-size:12px;color:#92400E;font-family:${EM_FONT};">${lang === 'en' ? 'Progress Tracker data not available.' : 'Progress Tracker 데이터가 없습니다.'}</div>`
  }
  // 월 라벨: categoryStats[0].targetMonth 우선 사용 (가장 정확), 없으면 meta.period에서 추출
  const enMonthNames = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  let monthLabel = lang === 'en' ? 'This Month' : '이번 월'
  const firstStat = categoryStats[0]
  if (firstStat?.targetMonth) {
    // targetMonth는 "3월" 형식
    monthLabel = firstStat.targetMonth
    if (lang === 'en') {
      const num = parseInt(firstStat.targetMonth)
      if (num >= 1 && num <= 12) monthLabel = enMonthNames[num]
    }
  } else if (meta?.period) {
    const krMatch = String(meta.period).match(/(\d{1,2})월/)
    const enMatch = String(meta.period).match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
    if (krMatch) monthLabel = lang === 'en' ? (enMatch ? enMatch[1] : `${krMatch[1]}월`) : `${krMatch[1]}월`
    else if (enMatch) monthLabel = lang === 'en' ? enMatch[1] : `${enMonthNames.indexOf(enMatch[1].charAt(0).toUpperCase() + enMatch[1].slice(1).toLowerCase()) || ''}월`
  }
  const fmtN = n => Number(n).toLocaleString('en-US')
  const t = lang === 'en'
    ? { title: 'Key Task Progress', monthly: monthLabel, progress: 'YTD Progress' }
    : { title: '핵심 과제 진척 사항', monthly: monthLabel, progress: '연간 진척율' }
  // 신호등 범례 (우측 상단): 초록 100%↑ / 주황 80%↑ / 빨강 80%↓
  const legendItems = lang === 'en'
    ? [['#16A34A', '≥100%'], ['#D97706', '≥80%'], ['#DC2626', '<80%']]
    : [['#16A34A', '100% 이상'], ['#D97706', '80% 이상'], ['#DC2626', '80% 미만']]
  const legendHtml = legendItems.map(([col, lbl]) => `
        <td style="padding:0 0 0 10px;white-space:nowrap;vertical-align:middle;">
          <table border="0" cellpadding="0" cellspacing="0" style="display:inline-table;"><tr>
            <td width="9" style="background:${col};border-radius:50%;height:9px;font-size:0;line-height:0;">&nbsp;</td>
            <td style="padding-left:4px;font-size:10px;color:#64748B;font-family:${EM_FONT};">${lbl}</td>
          </tr></table>
        </td>`).join('')
  // 신호등: 100% 이상 초록 / 80% 이상 주황 / 80% 미만 빨강
  function statusColor(rate) {
    if (rate >= 100) return { bg: '#F0FDF4', border: '#BBF7D0', bar: '#16A34A', text: '#15803D' }
    if (rate >= 80) return { bg: '#FFFBEB', border: '#FDE68A', bar: '#D97706', text: '#B45309' }
    return { bg: '#FEF2F2', border: '#FECACA', bar: '#DC2626', text: '#BE123C' }
  }
  const cards = categoryStats.map(c => {
    const ms = statusColor(c.monthRate || 0)
    const ps = statusColor(c.progressRate || 0)
    return `<td width="50%" valign="top" style="padding:6px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border:1.5px solid #E8EDF2;border-radius:10px;">
        <tr><td style="padding:12px 14px;">
          <p style="margin:0 0 10px;font-size:14px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(categoryLabel(c.category, lang, c.categoryEn))}</p>
          <!-- 이번 월 -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:4px;">
            <tr>
              <td style="font-size:11px;color:#64748B;font-family:${EM_FONT};">${t.monthly} <span style="color:#94A3B8;">(${fmtN(c.monthActual)}/${fmtN(c.monthGoal)})</span></td>
              <td align="right" style="font-size:13px;font-weight:700;color:${ms.text};font-family:${EM_FONT};">${(c.monthRate || 0).toFixed(0)}%</td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F1F5F9;border-radius:3px;margin-bottom:6px;">
            <tr><td height="6" style="font-size:0;line-height:0;">
              <table border="0" cellpadding="0" cellspacing="0" width="${Math.min(Math.round(c.monthRate || 0), 100)}%" style="background:${ms.bar};border-radius:3px;">
                <tr><td height="6" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td></tr>
          </table>
          <div style="height:8px"></div>
          <!-- 진척율 -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:4px;">
            <tr>
              <td style="font-size:11px;color:#64748B;font-family:${EM_FONT};">${t.progress} <span style="color:#94A3B8;">(${fmtN(c.cumActual)}/${fmtN(c.annualGoal)})</span></td>
              <td align="right" style="font-size:13px;font-weight:700;color:${ps.text};font-family:${EM_FONT};">${(c.progressRate || 0).toFixed(0)}%</td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F1F5F9;border-radius:3px;">
            <tr><td height="6" style="font-size:0;line-height:0;">
              <table border="0" cellpadding="0" cellspacing="0" width="${Math.min(Math.round(c.progressRate || 0), 100)}%" style="background:${ps.bar};border-radius:3px;">
                <tr><td height="6" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td>`
  })
  // 2열 그리드
  const rows = []
  for (let i = 0; i < cards.length; i += 2) {
    const pair = cards.slice(i, i + 2)
    while (pair.length < 2) pair.push('<td width="50%" style="padding:6px;"></td>')
    rows.push(`<tr>${pair.join('')}</tr>`)
  }
  return `
  <div style="margin-bottom:18px;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:12px;"><tr>
      <td valign="middle">
        <table border="0" cellpadding="0" cellspacing="0"><tr>
          <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
          <td style="padding-left:8px;font-size:16px;font-weight:800;color:#0F172A;font-family:${EM_FONT};">${t.title}</td>
        </tr></table>
      </td>
      <td align="right" valign="middle">
        <table border="0" cellpadding="0" cellspacing="0"><tr>${legendHtml}</tr></table>
      </td>
    </tr></table>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">${rows.join('')}</table>
  </div>`
}

function dashboardLinkButtonHtml(lang) {
  const base = 'https://my-geo-newsletter.onrender.com'
  const langSuffix = lang === 'en' ? '-EN' : '-KO'
  const url = `${base}/p/GEO-KPI-Dashboard${langSuffix}`
  const label = lang === 'en' ? 'Open Integrated Dashboard' : '통합 대시보드 바로가기'
  const btnW = lang === 'en' ? 260 : 240
  return `
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:16px;">
    <tr><td align="center">
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:48px;v-text-anchor:middle;width:${btnW}px;" arcsize="18%" strokecolor="${EM_RED}" fillcolor="${EM_RED}">
        <w:anchorlock/>
        <center style="color:#FFFFFF;font-family:'LGEIText','LG Smart',Arial,sans-serif;font-size:15px;font-weight:700;">${label}</center>
      </v:roundrect>
      <![endif]-->
      <!--[if !mso]><!-- -->
      <a href="${url}" target="_blank" rel="noopener" style="display:inline-block;background:${EM_RED};border:1px solid ${EM_RED};border-radius:8px;color:#FFFFFF;font-family:${EM_FONT};font-size:15px;font-weight:700;line-height:48px;text-align:center;text-decoration:none;padding:0 28px;white-space:nowrap;">${label}</a>
      <!--<![endif]-->
    </td></tr>
  </table>`
}

// ─── 메인 생성 함수 ───────────────────────────────────────────────────────────
export { escapeHtml }

// ─── 제품군 × 모델 전월 대비 상세 (모델별 Visibility 증감) ────────────────────
// products[].monthlyScores[].byLlm 에서 카테고리×모델 MoM 델타 산출 → 다이버징 바 + 히트맵.
// 이메일 호환: canvas 대신 table-layout (막대 = background 폭, 히트맵 = 셀 bgcolor).
// ─── 하이라이트 챕터 — Readability · 모델 증감 · Citation 범프차트 ─────────────
// '주요 제품 주차별 트랜드' 는 2026-08-27 삭제 (사용자 지시). 주간 꺾은선 PNG 임베드와
// 전용 상수(HL_PRODS/HL_COMP_COLORS)도 함께 제거. weeklyAll/weeklyLabels/assetBase 는
// 호출부 시그니처 호환을 위해 남겨둔다.
function highlightInsightSectionHtml(products, weeklyAll, weeklyLabels, meta, lang = 'ko', assetBase = '', bumpData = {}, readability = null) {
  // 모델 증감 (LLM 모델별 제품 Visibility - 주요 경쟁사) — Highlight 챕터에 포함
  const modelContent = meta.showModelDelta !== false ? modelDeltaContentHtml(products, meta, lang) : ''
  const insightBox = meta.showHighlightInsight && (meta.highlightInsight || _ED) ? `
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:14px;border-radius:8px;background:#FFF4F7;border:1px solid #F5CCD8;">
                          <tr><td style="padding:12px 16px;">
                            ${edBlock('highlightInsight', meta.highlightInsight, { size: 13, lh: 22, color: '#1A1A1A', accent: EM_RED, lang })}
                          </td></tr>
                        </table>` : ''
  // '주요 제품 주차별 트랜드' 영역 삭제 (사용자 지시 2026-08-27) — 소제목·주간 꺾은선 차트 모두 제거.
  // 인사이트 박스(meta.highlightInsight)는 유지 — 챕터 도입부 코멘트로 계속 쓰인다.
  const weeklyArea = insightBox || ''
  // Citation Top10 카테고리·도메인 범프차트 영역 — Highlight 챕터에 포함
  const { citTouchPointsTrend, citTrendMonths, citTouchPointsByLlm, citDomainTrend, citDomainMonths, citDomainByLlmTrend } = bumpData || {}
  const touchCard = meta.showTouchPointsBump !== false ? touchPointsBumpCombinedHtml(citTouchPointsTrend, citTrendMonths, citTouchPointsByLlm, meta, lang) : ''
  const domainCard = meta.showDomainBump !== false ? domainBumpSectionHtml(citDomainTrend, citDomainMonths, citDomainByLlmTrend, meta, lang) : ''
  const bumpCards = [touchCard, domainCard].filter(Boolean)
  const bumpChartsHtml = bumpCards.length ? `<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>${bumpCards.map(c => `<td width="${Math.round(100 / bumpCards.length)}%" valign="top" style="padding:0 6px;">${c}</td>`).join('')}</tr></table>` : ''
  const bumpInsightBox = meta.showBumpInsight && (meta.bumpInsight || _ED) ? `
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:4px;border-radius:8px;background:#FFF4F7;border:1px solid #F5CCD8;">
                            <tr><td style="padding:12px 16px;">
                              ${edBlock('bumpInsight', meta.bumpInsight, { size: 13, lh: 22, color: '#1A1A1A', accent: EM_RED, lang })}
                            </td></tr>
                          </table>` : ''
  const bumpTitle = lang === 'en' ? 'Citation Top 10 Category·Domain (Bump)' : 'Citation Top10 카테고리·도메인 범프차트'
  const bumpArea = (bumpChartsHtml || bumpInsightBox) ? `
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:16px;border-top:1px solid #EEF0F3;"><tr><td style="padding-top:14px;">
                          <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom:10px;"><tr>
                            <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                            <td style="padding-left:8px;font-size:16px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};"><span${edAttr('hlBumpTitle')}>${escapeHtml(meta.hlBumpTitle || bumpTitle)}</span></td>
                          </tr></table>
                          ${bumpInsightBox}
                          ${bumpChartsHtml}
                        </td></tr></table>` : ''
  // Readability Highlight — 별도 카드가 아니라 본 챕터 안에 같은 디자인으로 편입 (2026-08)
  const rdArea = (meta.showReadability && readability) ? readabilityHighlightHtml(readability, meta, lang) : ''
  if (!weeklyArea && !modelContent && !bumpArea && !rdArea) return ''  // 표시할 콘텐츠 없으면 챕터 미렌더
  const _mm = String(meta.period || '').match(/(\d{1,2})\s*월/)
  const chapterTitle = (_mm ? _mm[1] + '월 ' : '') + (lang === 'en' ? 'Highlights' : '하이라이트')
  return `
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0"><tr>
                          <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                          <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};"><span${edAttr('hlChapterTitle')}>${escapeHtml(meta.hlChapterTitle || chapterTitle)}</span></td>
                        </tr></table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 18px;">
                        ${rdArea}
                        ${weeklyArea}
                        ${modelContent}
                        ${bumpArea}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`
}

const MODEL_ORDER = ['ChatGPT', 'ChatGPT Search', 'GPT Search', 'Perplexity', 'Gemini', 'Google', 'Google AI Overview', 'Copilot', 'Claude']
// 콘텐츠 전용 빌더 (외곽 카드 없음) — Highlight Insight 챕터 내부에 임베드.
const MODEL_EXCLUDE = /bosch|보쉬|sony|소니/i  // 주요 경쟁사 선정에서 제외
function modelDeltaContentHtml(products, meta, lang = 'ko') {
  products = products || []
  const prodName = p => { const id = (p.id || '').toLowerCase(); return lang === 'en' ? (PROD_ID_TO_EN[id] || p.kr || p.id) : (p.kr || PROD_ID_TO_EN[id] || p.id) }

  // 모델 집합 (byLlm 키 합집합, Total 제외)
  const modelSet = new Set()
  products.forEach(p => {
    const ms = p.monthlyScores || []; if (ms.length < 2) return
    const lb = ms[ms.length - 1].byLlm || {}, pb = ms[ms.length - 2].byLlm || {}
    Object.keys(lb).forEach(m => { if (m !== 'Total' && m !== 'TOTAL' && m !== 'All' && pb[m]) modelSet.add(m) })
  })
  if (!modelSet.size) return ''
  const models = [...modelSet].sort((a, b) => { const ia = MODEL_ORDER.indexOf(a), ib = MODEL_ORDER.indexOf(b); return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.localeCompare(b) })

  // 주요 경쟁사 2개 — 최신월 allScores 합산 상위 2 (비-LG)
  const compTot = {}
  products.forEach(p => { const ms = p.monthlyScores || []; if (!ms.length) return; const as = ms[ms.length - 1].allScores || {}; Object.keys(as).forEach(b => { if (b === 'LG' || MODEL_EXCLUDE.test(b)) return; compTot[b] = (compTot[b] || 0) + (Number(as[b]) || 0) }) })
  const majorComps = Object.keys(compTot).sort((a, b) => compTot[b] - compTot[a]).slice(0, 1)  // LG + 상위 1개(삼성)만
  const brands = ['LG', ...majorComps]

  // 브랜드별 카테고리 × 모델 Δ (byLlm[model].allScores[brand] 전월 대비)
  const brandData = brands.map(brand => {
    const rows = []
    products.forEach(p => {
      const ms = p.monthlyScores || []; if (ms.length < 2) return
      const lb = ms[ms.length - 1].byLlm || {}, pb = ms[ms.length - 2].byLlm || {}
      const deltas = {}; let has = false
      models.forEach(m => {
        const ln = lb[m] && lb[m].allScores ? lb[m].allScores[brand] : null
        const pn = pb[m] && pb[m].allScores ? pb[m].allScores[brand] : null
        if (ln != null && pn != null) { deltas[m] = +(ln - pn).toFixed(1); has = true }
      })
      if (has) rows.push({ name: prodName(p), deltas })
    })
    const avg = {}; models.forEach(m => { const v = rows.map(r => r.deltas[m]).filter(x => x != null); avg[m] = v.length ? +(v.reduce((a, b) => a + b, 0) / v.length).toFixed(1) : null })
    return { brand, rows, avg }
  }).filter(b => b.rows.length)
  if (!brandData.length) return ''

  // 공통 색 스케일 (브랜드 간 동일 기준)
  const allV = brandData.flatMap(b => b.rows.flatMap(r => models.map(m => r.deltas[m]))).filter(x => x != null)
  const sc = Math.max(5, ...allV.map(Math.abs))
  const mix = (r, g, b, a) => { const h = x => Math.round(255 - (255 - x) * a).toString(16).padStart(2, '0'); return '#' + h(r) + h(g) + h(b) }
  const heat = v => { const t = Math.max(-1, Math.min(1, v / sc)); return t >= 0 ? mix(42, 120, 214, 0.12 + t * 0.55) : mix(227, 73, 72, 0.12 + (-t) * 0.6) }
  // 타이트 셀 (padding·line-height 축소)
  const cell = v => { if (v == null) return `<td style="padding:3px 5px;border:1px solid #e5e4de;color:#c9c8c2;font-family:${EM_FONT};line-height:1.3;">–</td>`; const bg = heat(v), col = Math.abs(v) >= sc * 0.6 ? '#FFFFFF' : '#333333'; return `<td bgcolor="${bg}" style="padding:3px 5px;border:1px solid #e5e4de;background:${bg};color:${col};font-size:11px;font-weight:700;font-family:${EM_FONT};text-align:center;line-height:1.3;">${v > 0 ? '+' : ''}${v.toFixed(1)}</td>` }
  const th = m => `<th style="padding:4px 5px;border:1px solid #e5e4de;background:#f6f5f2;font-size:10px;font-weight:600;color:#555;font-family:${EM_FONT};line-height:1.2;">${escapeHtml(m)}</th>`
  const heatTable = ({ brand, rows, avg }) => {
    const bodyRows = rows.map(r => `<tr><td style="padding:3px 8px;border:1px solid #e5e4de;background:#f6f5f2;font-size:11px;font-weight:700;color:#111;font-family:${EM_FONT};text-align:left;line-height:1.3;">${escapeHtml(r.name)}</td>${models.map(m => cell(r.deltas[m])).join('')}</tr>`).join('')
    const avgRow = `<tr><td style="padding:3px 8px;border:1px solid #cfcec8;background:#eceae4;font-size:11px;font-weight:800;color:#111;font-family:${EM_FONT};text-align:left;line-height:1.3;">${lang === 'en' ? 'Avg' : '평균'}</td>${models.map(m => cell(avg[m])).join('')}</tr>`
    const bColor = brand === 'LG' ? EM_RED : '#475569'
    return `
                        <p style="margin:14px 0 5px;font-size:13px;font-weight:800;color:${bColor};font-family:${EM_FONT};">${brand === 'LG' ? 'LG' : escapeHtml(brand)}</p>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                          <thead><tr><th style="padding:4px 8px;border:1px solid #e5e4de;background:#f6f5f2;font-size:10px;color:#555;font-family:${EM_FONT};"></th>${models.map(th).join('')}</tr></thead>
                          <tbody>${bodyRows}${avgRow}</tbody>
                        </table>`
  }

  // 비교 월 라벨 (전월 vs 최신월) — 데이터에서 자동 도출
  const monthLabel = raw => {
    const s = String(raw || '').trim()
    const km = s.match(/(\d{1,2})월/); if (km) return km[1] + '월'
    const map = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 }
    const en = s.match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i)
    if (en) return lang === 'en' ? s : map[en[1].toLowerCase()] + '월'
    const iso = s.match(/\d{4}[-\/](\d{1,2})/); if (iso) return lang === 'en' ? s : parseInt(iso[1]) + '월'
    return s
  }
  const _mref = products.find(p => (p.monthlyScores || []).length >= 2)
  const _md = _mref ? _mref.monthlyScores.slice(-2).map(x => monthLabel(x.date)) : null
  const monthRange = _md ? `${_md[0]} vs ${_md[1]}` : ''
  const title = (lang === 'en' ? 'LLM Product Visibility by Model - Key Competitors' : 'LLM 모델별 제품 Visibility - 주요 경쟁사') + (monthRange ? ` (${monthRange})` : '')
  // 외곽 카드 없이 콘텐츠만 반환 (Highlight Insight 챕터에 임베드)
  return `
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:16px;border-top:1px solid #EEF0F3;"><tr><td style="padding-top:14px;">
                          <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom:10px;"><tr>
                            <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                            <td style="padding-left:8px;font-size:16px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};"><span${edAttr('hlModelTitle')}>${escapeHtml(meta.hlModelTitle || title)}</span></td>
                          </tr></table>
                          ${meta.showModelDeltaInsight && (meta.modelDeltaInsight || _ED) ? `
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:4px;border-radius:8px;background:#FFF4F7;border:1px solid #F5CCD8;">
                            <tr><td style="padding:12px 16px;">
                              ${edBlock('modelDeltaInsight', meta.modelDeltaInsight, { size: 13, lh: 22, color: '#1A1A1A', accent: EM_RED, lang })}
                            </td></tr>
                          </table>` : ''}
                          ${brandData.map(heatTable).join('')}
                        </td></tr></table>`
}

// ─── 제품별 경쟁비 증감 (전월 대비) ──────────────────────────────────────────
// products[].monthlyScores 의 최신/전월 (score, comp) 로 경쟁비(LG/경쟁×100) 전월 대비 Δ 산출.
// 다이버징 바 (개선=초록 / 악화=빨강, 중앙 0축) + 현재 경쟁비. 이메일 호환 table-layout.
function compRatioDeltaSectionHtml(products, meta, lang = 'ko') {
  products = products || []
  const prodName = p => { const id = (p.id || '').toLowerCase(); return lang === 'en' ? (PROD_ID_TO_EN[id] || p.kr || p.id) : (p.kr || PROD_ID_TO_EN[id] || p.id) }
  const rows = []
  products.forEach(p => {
    const ms = p.monthlyScores || []
    if (ms.length < 2) return
    const L = ms[ms.length - 1], P = ms[ms.length - 2]
    const rn = (L && L.comp > 0 && L.score != null) ? Math.round(L.score / L.comp * 100) : null
    const rp = (P && P.comp > 0 && P.score != null) ? Math.round(P.score / P.comp * 100) : null
    if (rn == null || rp == null) return
    rows.push({ name: prodName(p), now: rn, d: rn - rp })
  })
  if (!rows.length) return ''
  const dmax = Math.max(1, ...rows.map(r => Math.abs(r.d)))
  const HALF = 120, UP = '#16A34A', DOWN = '#DC2626'
  const barRows = rows.map(r => {
    const v = r.d, neg = v < 0, color = v === 0 ? '#94A3B8' : neg ? DOWN : UP, w = Math.round(Math.abs(v) / dmax * HALF)
    const rColor = r.now >= 100 ? '#15803D' : r.now >= 80 ? '#B45309' : '#BE123C'
    return `<tr>
      <td align="right" width="96" style="font-size:12px;color:#555;font-family:${EM_FONT};padding:5px 8px 5px 0;white-space:nowrap;">${escapeHtml(r.name)}</td>
      <td width="50" align="right" style="font-size:12px;font-weight:700;color:${rColor};font-family:${EM_FONT};padding:5px 10px 5px 0;white-space:nowrap;">${r.now}%</td>
      <td width="${HALF}" align="right" style="padding:0;">${neg && w > 0 ? `<table border="0" cellpadding="0" cellspacing="0" align="right" style="width:${w}px;"><tr><td height="16" style="background:${color};border-radius:3px 0 0 3px;font-size:0;line-height:0;">&nbsp;</td></tr></table>` : ''}</td>
      <td width="2" style="background:#c9c8c2;font-size:0;line-height:0;">&nbsp;</td>
      <td width="${HALF}" align="left" style="padding:0;">${!neg && w > 0 ? `<table border="0" cellpadding="0" cellspacing="0" align="left" style="width:${w}px;"><tr><td height="16" style="background:${color};border-radius:0 3px 3px 0;font-size:0;line-height:0;">&nbsp;</td></tr></table>` : ''}</td>
      <td width="56" style="font-size:12px;font-weight:700;color:${color};font-family:${EM_FONT};padding:5px 0 5px 8px;white-space:nowrap;">${v > 0 ? '+' : ''}${v}%p</td>
    </tr>`
  }).join('')

  // 모델별 경쟁비 Δ (카테고리 × 모델 히트맵) — byLlm[model].comp 로 모델별 경쟁비 산출
  const modelSet = new Set()
  const catRows = []
  products.forEach(p => {
    const ms = p.monthlyScores || []
    if (ms.length < 2) return
    const lb = ms[ms.length - 1].byLlm || {}, pb = ms[ms.length - 2].byLlm || {}
    const deltas = {}; let has = false
    Object.keys(lb).forEach(m => {
      if (m === 'Total' || m === 'TOTAL' || m === 'All') return
      const L = lb[m], P = pb[m]
      if (L && P && L.comp > 0 && P.comp > 0 && L.score != null && P.score != null) {
        deltas[m] = Math.round(L.score / L.comp * 100 - P.score / P.comp * 100); modelSet.add(m); has = true
      }
    })
    if (has) catRows.push({ name: prodName(p), deltas })
  })
  const crModels = [...modelSet].sort((a, b) => { const ia = MODEL_ORDER.indexOf(a), ib = MODEL_ORDER.indexOf(b); return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.localeCompare(b) })
  const crAvg = {}; crModels.forEach(m => { const v = catRows.map(r => r.deltas[m]).filter(x => x != null); crAvg[m] = v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null })
  let heatmapHtml = ''
  if (crModels.length && catRows.length) {
    const allV = catRows.flatMap(r => crModels.map(m => r.deltas[m])).filter(x => x != null)
    const sc = Math.max(6, ...allV.map(Math.abs))
    const mix = (r, g, b, a) => { const h = x => Math.round(255 - (255 - x) * a).toString(16).padStart(2, '0'); return '#' + h(r) + h(g) + h(b) }
    const heat = v => { const t = Math.max(-1, Math.min(1, v / sc)); return t >= 0 ? mix(22, 163, 74, 0.12 + t * 0.55) : mix(220, 38, 38, 0.12 + (-t) * 0.6) }
    const cell = v => { if (v == null) return `<td style="padding:8px 6px;border:1px solid #e5e4de;color:#c9c8c2;font-family:${EM_FONT};">–</td>`; const bg = heat(v), col = Math.abs(v) >= sc * 0.6 ? '#FFFFFF' : '#333333'; return `<td bgcolor="${bg}" style="padding:8px 6px;border:1px solid #e5e4de;background:${bg};color:${col};font-size:12px;font-weight:700;font-family:${EM_FONT};text-align:center;">${v > 0 ? '+' : ''}${v}</td>` }
    const th = m => `<th style="padding:8px 6px;border:1px solid #e5e4de;background:#f6f5f2;font-size:11px;font-weight:600;color:#555;font-family:${EM_FONT};">${escapeHtml(m)}</th>`
    const brows = catRows.map(r => `<tr><td style="padding:8px 10px;border:1px solid #e5e4de;background:#f6f5f2;font-size:12px;font-weight:700;color:#111;font-family:${EM_FONT};text-align:left;">${escapeHtml(r.name)}</td>${crModels.map(m => cell(r.deltas[m])).join('')}</tr>`).join('')
    const arow = `<tr><td style="padding:8px 10px;border:1px solid #cfcec8;background:#eceae4;font-size:12px;font-weight:800;color:#111;font-family:${EM_FONT};text-align:left;">${lang === 'en' ? 'Avg' : '평균'}</td>${crModels.map(m => cell(crAvg[m])).join('')}</tr>`
    const subT = lang === 'en' ? 'By model (Δ%p)' : '모델별 경쟁비 증감 (Δ%p)'
    heatmapHtml = `
                        <p style="margin:20px 0 8px;font-size:13px;font-weight:700;color:#475569;font-family:${EM_FONT};">${subT}</p>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                          <thead><tr><th style="padding:8px 10px;border:1px solid #e5e4de;background:#f6f5f2;"></th>${crModels.map(th).join('')}</tr></thead>
                          <tbody>${brows}${arow}</tbody>
                        </table>`
  }

  const title = lang === 'en' ? 'Competitor Ratio MoM by Category (Δ%p)' : '제품별 경쟁비 증감 (전월 대비, Δ%p)'
  const noteDefault = lang === 'en' ? 'MoM change of competitor ratio (LG / #1 competitor × 100) by category.' : '카테고리별 경쟁비(LG / 1위 경쟁사 × 100)의 전월 대비 증감입니다. 초록=개선 / 빨강=악화.'
  return `
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0"><tr>
                          <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                          <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${title}</td>
                        </tr></table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:16px 18px;">
                        ${edBlock('compRatioDeltaNote', meta.compRatioDeltaNote, { size: 13, lh: 21, color: '#555555', ph: noteDefault, lang })}
                        ${heatmapHtml ? `<p style="margin:16px 0 8px;font-size:13px;font-weight:700;color:#475569;font-family:${EM_FONT};">${lang === 'en' ? 'Overall (Δ%p)' : '전체 경쟁비 증감 (Δ%p)'}</p>` : ''}
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:10px;">
                          ${barRows}
                        </table>
                        ${heatmapHtml}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`
}


// ─── Readability Highlight 섹션 (8월호 신설) ─────────────────────────────────
// 구성: ① Readability란? 박스(별도 영역) ② 국가별·페이지타입별 점수 ③ 6개 영역 점수
//       ④ 영역별 상세 4개 문단.  이메일 호환 table-layout — flex/grid 미사용.
// 데이터: options.readability (뉴스레터 어드민이 /api/readability-summary 로 받아 주입).
//        본문 문안은 meta 로 편집 가능하며, 기본값은 사용자 제공 원문 그대로 사용한다.
const RD_CAT_ORDER = ['performance', 'geo_platform', 'accessibility', 'seo', 'geo_schema', 'geo_content']
const RD_CAT_DESC = {
  performance: '페이지 응답 및 정보 제공 속도',
  geo_platform: 'AI 크롤러가 원문을 가져갈 수 있는 기술 환경',
  accessibility: '사람과 AI가 문서 구조를 읽어낼 수 체계',
  seo: '제목·페이지 주제 설명 등 검색되기위한 기본 정보',
  geo_schema: '제품·FAQ·이미지 등 정보의 종류와 관계를 알려주는 구조화 데이터',
  geo_content: 'AI가 인용할만한 서술의 존재',
}
const RD_CC_KO = { au: '호주', br: '브라질', ca: '캐나다', de: '독일', es: '스페인', in: '인도', mx: '멕시코', uk: '영국', us: '미국', vn: '베트남' }
const RD_CC_EN = { au: 'Australia', br: 'Brazil', ca: 'Canada', de: 'Germany', es: 'Spain', in: 'India', mx: 'Mexico', uk: 'UK', us: 'USA', vn: 'Vietnam' }

// 점수 → 색 (대시보드 STATUS 토큰과 동일 기준)
function rdColor(v) {
  return v == null ? '#94A3B8' : v >= 90 ? '#15803D' : v >= 60 ? '#B45309' : '#BE123C'
}

// 가로 막대 한 줄 — table-layout (이메일 호환)
// 막대 한 줄 — table-layout. opts.sub 는 라벨과 같은 줄에 이어 붙인다(높이 절감).
function rdBarRow(label, value, max, opts = {}) {
  const w = max > 0 ? Math.max(2, Math.min(100, (value / max) * 100)).toFixed(1) : 0
  const color = opts.color || rdColor(value)
  const pad = opts.pad != null ? opts.pad : 3
  const barH = opts.barH || 9
  const sub = opts.sub
    ? `<span style="font-size:10.5px;font-weight:400;color:#94A3B8;font-family:${EM_FONT};">&nbsp;&nbsp;${escapeHtml(opts.sub)}</span>`
    : ''
  return `<tr>
    <td style="padding:${pad}px 10px ${pad}px 0;vertical-align:middle;width:${opts.labelW || 150}px;">
      <span style="font-size:11.5px;font-weight:700;color:#1A1A1A;line-height:1.35;font-family:${EM_FONT};">${escapeHtml(label)}</span>${sub}
    </td>
    <td style="padding:${pad}px 10px ${pad}px 0;vertical-align:middle;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#F1F5F9;border-radius:3px;">
        <tr><td width="${w}%" height="${barH}" style="background:${color};border-radius:3px;font-size:0;line-height:0;">&nbsp;</td><td>&nbsp;</td></tr>
      </table>
    </td>
    <td align="right" style="padding:${pad}px 0;vertical-align:middle;width:46px;font-size:12px;font-weight:800;color:${color};font-family:${EM_FONT};">${value == null ? '—' : value}</td>
  </tr>`
}

// 소제목 (I 표기)
function rdHeading(text, field) {
  return `<p style="margin:0 0 12px;font-size:17px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};letter-spacing:-0.4px;">
    <span style="color:${EM_RED};">I</span> <span${field ? edAttr(field) : ''}>${escapeHtml(text)}</span></p>`
}

// 본문 문단 (줄바꿈 유지, **볼드** 지원)
function rdPara(text, opts = {}) {
  if (!text && !opts.field) return ''
  const html = escapeHtml(text || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\r?\n/g, '<br>')
  // opts.field 가 있으면 편집모드에서 인라인 수정 가능 (meta.rd_* 로 저장)
  return `<p${opts.field ? edRich(opts.field) : ''} style="margin:0 0 ${opts.gap || 10}px;font-size:13px;color:#334155;line-height:1.75;font-family:${EM_FONT};letter-spacing:-0.2px;">${html}</p>`
}

// 각주 (* 로 시작하는 용어 설명)
// 각주는 여러 줄이라 한 덩어리로 편집 (줄바꿈 유지).
// opts.plain — 배경/여백 없이 텍스트만. 이미 색이 있는 박스 안에 들어갈 때 사용
// (Readability란 박스 안의 각주가 흰 박스로 겹쳐 보이던 문제).
function rdFootnotes(lines, field, opts = {}) {
  if (!lines || !lines.length) return ''
  const box = opts.plain ? 'margin:2px 0 0;' : 'margin:2px 0 14px;padding:10px 12px;background:#F8FAFC;border-radius:6px;'
  return `<div${field ? edRich(field) : ''} style="${box}">
    ${lines.map(l => `<div style="font-size:11px;color:#64748B;line-height:1.65;font-family:${EM_FONT};">${escapeHtml(l)}</div>`).join('')}
  </div>`
}



// 스키마마크업 경쟁사 비교 — 항목별 LG.com / SS.com 세로 2열 막대 (독일 기준).
// 이메일 호환: SVG·flex 미사용, <td height> 로 막대 높이를 표현하는 table-layout.
// 값은 meta.rd_schemaCompare 로 덮어쓸 수 있다 (기본값은 사용자 제공 표).
const RD_SCHEMA_COMPARE = [
  { name: 'FAQ Page', lg: 18, ss: 33 },
  { name: 'Product', lg: 0, ss: 64 },
  { name: 'VideoObject', lg: 0, ss: 3 },
  { name: 'ImageObject', lg: 0, ss: 0 },
  { name: 'Article', lg: 0, ss: 0 },
  { name: 'HowTo', lg: 0, ss: 0 },
  { name: 'CollectionPage', lg: 58, ss: 0 },
  { name: 'BreadcrumbList', lg: 88, ss: 73 },
]
const RD_LG_COLOR = '#CF0652'
const RD_SS_COLOR = '#64748B'

function rdSchemaCompareHtml(meta = {}, lang = 'ko') {
  const rows = Array.isArray(meta.rd_schemaCompare) && meta.rd_schemaCompare.length
    ? meta.rd_schemaCompare : RD_SCHEMA_COMPARE
  const H = 84                                   // 막대 최대 높이(px)
  const max = Math.max(...rows.map(r => Math.max(r.lg || 0, r.ss || 0)), 1)
  const bar = (v, color) => {
    const h = v > 0 ? Math.max(3, Math.round((v / max) * H)) : 0
    // 0 은 막대 없이 바닥선만 — "측정했는데 0" 과 "막대 잘림" 을 구분
    return `<table cellpadding="0" cellspacing="0" border="0" align="center"><tr>
      <td align="center" style="font-size:9.5px;font-weight:800;color:${v > 0 ? color : '#CBD5E1'};line-height:1.2;padding-bottom:2px;font-family:${EM_FONT};">${v}</td>
    </tr><tr>
      <td width="16" height="${h}" style="background:${h ? color : 'transparent'};border-radius:2px 2px 0 0;font-size:0;line-height:0;">&nbsp;</td>
    </tr></table>`
  }
  const cols = rows.map(r => `<td valign="bottom" align="center" style="padding:0 3px;">
      <table cellpadding="0" cellspacing="0" border="0" align="center"><tr>
        <td valign="bottom" style="padding-right:2px;">${bar(r.lg || 0, RD_LG_COLOR)}</td>
        <td valign="bottom">${bar(r.ss || 0, RD_SS_COLOR)}</td>
      </tr></table>
      <div style="margin-top:5px;font-size:9px;color:#475569;line-height:1.3;letter-spacing:-0.3px;font-family:${EM_FONT};">${escapeHtml(r.name)}</div>
    </td>`).join('')

  const legend = `<table cellpadding="0" cellspacing="0" border="0" align="center"><tr>
      <td width="9" height="9" style="background:${RD_LG_COLOR};border-radius:2px;font-size:0;line-height:0;">&nbsp;</td>
      <td style="padding:0 12px 0 5px;font-size:10.5px;font-weight:700;color:#475569;font-family:${EM_FONT};">LG.com</td>
      <td width="9" height="9" style="background:${RD_SS_COLOR};border-radius:2px;font-size:0;line-height:0;">&nbsp;</td>
      <td style="padding-left:5px;font-size:10.5px;font-weight:700;color:#475569;font-family:${EM_FONT};">SS.com</td>
    </tr></table>`

  return `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#FAFBFC;border:1px solid #E8EDF2;border-radius:10px;margin:2px 0 16px;">
    <tr><td style="padding:12px 14px 10px;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
        <td style="font-size:11.5px;font-weight:800;color:#475569;font-family:${EM_FONT};">${lang === 'en' ? 'Schema adoption vs. competitor (Germany, %)' : '스키마 적용률 경쟁사 비교 (독일, %)'}</td>
        <td align="right">${legend}</td>
      </tr></table>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:10px;"><tr>${cols}</tr></table>
    </td></tr>
  </table>`
}

// 본 섹션의 기본 문안 — 사용자 제공 원문 그대로. meta 로 덮어쓸 수 있다.
const RD_TEXT = {
  intro: 'Readability는 AI 관점에서의 가독성을 뜻하며, 웹페이지의 콘텐츠가 AI가 읽고 활용하기 좋은 상태인지 평가하는 지표입니다. ‘26년 7월부터 LG.com의 Readability 현황을 파악하기 위해 10개 전략 국가의 8개 주요 페이지 유형, 총 5,438개 페이지를 평가했습니다. Readability 점수는 전체 평가항목 중 기준을 충족한 항목의 비율(%)을 100점 기준으로 환산한 점수입니다. 평가는 사이트 성능, AI 웹접근성, Basic SEO 적합도, 스키마마크업, 고인용 콘텐츠, AI Crawlability의 6개 영역, 총 37개 체크리스트를 기준으로 진행했습니다.',
  introNotes: [
    '*전략 10개국가 : 독일, 영국, 호주, 브라질, 베트남, 스페인, 미국, 멕시코, 인도, 캐나다',
    '*8개 페이지 유형 : PDP(제품 상세 페이지), PLP (제품 카테고리 페이지), Microsite, Newsroom, Buying Guide, LG Experience, Support, Support-Trouble Shooting',
  ],
  summary: '7월 LG.com의 전체적인 Readability 점수는 77.5점을 기록했으며, 국가별로는 브라질이 79.1점으로 가장 높았고, 가장 점수가 낮은 인도가 74.4점으로 편차가 크지 않은 상황입니다.\n페이지 타입별로도 Support 80.1점, Buying Guide 73.4점으로 유사한 분포를 보이고 있습니다.',
  areaIntro: '반면 평가 영역별로는 점수 차이가 뚜렷하게 나타났습니다.\n사이트 성능 98.5점 (페이지 응답 및 정보 제공 속도), AI Crawlability 96.8점 (AI 크롤러가 원문을 가져갈 수 있는 기술 환경), 웹접근성 90.2점 (사람과 AI가 문서 구조를 읽어낼 수 체계), Basic SEO 88.8점 (제목·페이지 주제 설명 등 검색되기위한 기본 정보)으로 비교적 양호했습니다.\n반면, 스키마마크업 35.5점 (제품·FAQ·이미지 등 정보의 종류와 관계를 알려주는 구조화 데이터), 고인용 콘텐츠 29.7점 (AI가 인용할만한 서술의 존재)은 상대적으로 낮았습니다.',
  d1Title: '사이트 성능과 AI Crawlability는 전반적으로 우수하나, 초기 HTML 내 텍스트 제공 비중 보완 필요',
  d1: '사이트 성능 영역은 98.5점으로 가장 높은 점수를 기록하여 LG.com의 빠르고 안정적인 페이지 전달 수준을 확인할 수 있었습니다.\nAI Crawlability 또한 96.8점으로 상대적으로 높지만, JS HTML Text Ratio(Javascript 렌더링 후 텍스트 대비 초기 HTML Text Count 비중이 60% 이상) 충족률은 82.1%였습니다.\n특히 Support-Trouble Shooting 페이지는 37.4%, PDP는 58.8%로 낮아, 일부 주요 콘텐츠가 페이지를 처음 불러오는 시점에는 포함되지 않고 화면이 열린 후 추가로 불러와지는 방식(CSR)으로 제공되고 있었습니다.\n사용자가 최종 화면에서 콘텐츠를 확인하는 데는 문제가 없을 수 있지만, 페이지를 처음 전달받은 상태를 중심으로 정보를 수집하는 일부 AI는 주요 내용을 충분히 확인하지 못할 가능성이 있습니다.\n때문에 현재 고객가치혁신 및 D2C에서는 Support 페이지와 PDP내 주요 정보가 페이지를 처음 불러오는 시점부터 포함되도록 SSR 방식으로 전환하는 작업을 추진 중입니다.',
  d1Notes: [
    '*초기 HTML : 웹페이지에 접속했을 때 서버가 가장 먼저 전달하는 기본 페이지 정보로, JavaScript 실행 전에도 AI가 확인할 수 있는 내용',
    '*Javascript 렌더링 : 페이지가 열린 뒤 JavaScript가 실행되면서 정보를 추가로 불러와 화면에 표시하는 방식',
    '*Client-Side Rendering(CSR) : 서버가 기본적인 페이지 틀을 먼저 전달하고, 사용자의 브라우저에서 JavaScript를 실행해 주요 콘텐츠를 불러오고 화면을 완성하는 방식',
    '*Server-Side Rendering(SSR) : 서버에서 주요 콘텐츠가 포함된 HTML을 미리 생성해 전달하는 방식',
  ],
  d2Title: 'Basic SEO와 웹접근성은 전반적으로 양호하나, 기본적인 페이지 구조의 일관성 보완 필요',
  d2: '웹접근성은 90.2점으로 높았지만, 제목과 소제목이 순서에 맞게 구성됐는지를 확인하는 Heading Hierarchy 충족률은 68.2%로 상대적으로 낮았습니다.\nAI가 페이지의 주제와 세부 내용을 보다 명확하게 구분할 수 있도록, 페이지 유형별 제목 구조를 표준화할 필요가 있습니다.\nBasic SEO 영역 역시 전체 점수는 88.8점으로 양호하지만, 페이지의 제목인 H1이 정확하게 1개만 존재하는 비율은 74%, Meta Description 충족률은 84.8%로 개선 여지가 확인됐습니다.\n특히 Newsroom 페이지에서 H1과 Meta Description 누락이 반복적으로 나타나(H1 충족률 46.4%, Meta Description 충족률 34.4%), 개별 콘텐츠보다는 페이지 템플릿이나 콘텐츠 발행 과정에서 기본 정보가 자동으로 적용되도록 개선할 필요가 있습니다.\nSitemap 충족률도 77.6%로 지속적인 최신화 작업이 필요합니다.',
  d3Title: '스키마마크업은 페이지 타입과 콘텐츠에 맞춘 최적화가 필요',
  d3: '스키마 영역은 35.5점으로 상대적으로 낮게 나타났습니다. Schema는 AI가 FAQ·제품·이미지·영상·사용방법 등 정보의 종류를 구분할 수 있게 해주는 정해진 형식으로, 페이지 유형과 콘텐츠 특성에 맞춰 주요 Schema의 적용 범위를 확대할 필요가 있습니다.\n상세 현황 파악을 위해 독일 LG.com과 Samsung.com 확인해보았을 때, PDP의 핵심 스키마인 Product(LG 0%, SS 64%) 스키마는 경쟁사 대비 충족률이 낮았고, PLP의 경우 특히 FAQPage 스키마 적용률 격차가 크게 나타났습니다(LG 13%, SS 71%). 이 외에도 VideoObject, ImageObject, HowTo, Article 모두 주요 스키마로 전 페이지 타입에 걸쳐 개선이 필요한 상황입니다. 이에 D2C에서 추진 중인 Schema 자동화를 통해, 국가와 페이지별로 개별 대응하기 보다 주요 Schema가 일관되게 생성, 적용되는 구조를 마련하는 중입니다.',
  d4Title: '고인용 콘텐츠는 AI 답변에 적합한 콘텐츠 형식 확대와 작성자 정보 보완 필요',
  d4: '콘텐츠 영역은 29.7점으로 전체 평가 영역 중 가장 낮았습니다. AI가 질문에 대한 직접적인 답변으로 활용하기 쉬운 FAQ Block, Summary Box, Definition Paragraph 등의 콘텐츠가 충분하지 않아 보완이 필요한 상황이며, 현재 FAQ Block을 중심으로 각 사업본부 및 고객가치혁신의 주요 개선 과제로 추진 중입니다.\n한편, Citable Sentence(숫자, 연도, 통계, 연구 키워드 포함 문장)의 경우 전체 충족률은 57.2%였습니다. 독일, 스페인, 호주, 캐나다의 경우 충족률 80% 이상인 반면, 나머지 국가에서는 상대적으로 낮게 나타나 국가별 편차가 큰 상황입니다. 7월 독일 사이트를 비교해본 결과, LG.com의 Citable Sentence 충족률은 86.1%로 Samsung.com의 19.4%보다 크게 높아, LG 콘텐츠의 경쟁 우위 요소로 확인되었습니다. 향후 인도, 멕시코, 베트남, 미국 등 상대적으로 충족률이 낮은 국가에서도 Citable Sentence 확대를 통해 경쟁 우위 요소를 강화할 필요가 있습니다.\n콘텐츠의 작성자/출처/날짜 정보 충족률 또한 42.3%로 낮게 나타났습니다. 이는 AI가 콘텐츠의 신뢰성과 최신성을 판단하는 데 참고할 수 있는 요소인 만큼, 정보성 콘텐츠를 중심으로 보완이 필요합니다. 다만 해당 요소의 중요도가 높은 Newsroom의 경우 충족률이 78.8%로 비교적 양호했습니다.',
}

// Readability Highlight 섹션 본체
function readabilityHighlightHtml(rd, meta = {}, lang = 'ko', contentWidth = 848) {
  if (!rd) return ''
  const tx = (k) => (meta[`rd_${k}`] != null && meta[`rd_${k}`] !== '') ? meta[`rd_${k}`] : RD_TEXT[k]
  const CCN = lang === 'en' ? RD_CC_EN : RD_CC_KO

  // ① Readability란? — 별도 박스로 영역 구분
  const introBox = `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#FEF2F4;border:1px solid #FECDD3;border-radius:10px;margin:0 0 22px;">
    <tr><td style="padding:16px 20px;">
      ${rdPara(tx('intro'), { gap: 8, field: 'rd_intro' })}
      ${rdFootnotes(meta.rd_introNotes || RD_TEXT.introNotes, 'rd_introNotes', { plain: true })}
    </td></tr>
  </table>`

  // ② 국가별 · 페이지타입별 점수 (둘 다 — 팀장님 피드백)
  const ccRows = (rd.countries || []).map(c => rdBarRow(CCN[c.cc] || c.cc.toUpperCase(), c.avgScore, 100, { labelW: 62, pad: 2, barH: 8 })).join('')
  const ptRows = Object.entries(rd.pageTypes || {})
    .map(([id, v]) => ({ id, label: v.label, avg: v.avgScore }))
    .sort((a, b) => b.avg - a.avg)
    .map(p => rdBarRow(p.label, p.avg, 100, { labelW: 118, pad: 2, barH: 8 })).join('')
  const half = Math.floor(contentWidth / 2) - 8
  const scoreTables = `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 18px;">
    <tr>
      <td width="${half}" valign="top" style="padding-right:16px;">
        <p style="margin:0 0 8px;font-size:12px;font-weight:800;color:#475569;font-family:${EM_FONT};">${lang === 'en' ? 'By Country' : '국가별 점수'}</p>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">${ccRows}</table>
      </td>
      <td width="${half}" valign="top">
        <p style="margin:0 0 8px;font-size:12px;font-weight:800;color:#475569;font-family:${EM_FONT};">${lang === 'en' ? 'By Page Type' : '페이지 타입별 점수'}</p>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">${ptRows}</table>
      </td>
    </tr>
  </table>`

  // ③ 6개 영역 점수 — 원본 이미지 대체 (크기 이슈로 HTML 로 재작성)
  // 라벨 칸을 넓혀 설명을 같은 줄에 붙이고, 그만큼 막대를 줄인다 (높이·폭 동시 절감)
  const catRows = RD_CAT_ORDER.filter(k => rd.categories && rd.categories[k] != null)
    .map(k => rdBarRow((rd.categoryLabels || {})[k] || k, rd.categories[k], 100,
      { labelW: 440, sub: RD_CAT_DESC[k], pad: 3, barH: 9 })).join('')
  const catTable = `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#F8FAFC;border:1px solid #E8EDF2;border-radius:10px;margin:0 0 18px;">
    <tr><td style="padding:12px 16px;">
      <p style="margin:0 0 10px;font-size:12px;font-weight:800;color:#475569;font-family:${EM_FONT};">${lang === 'en' ? 'By Area' : '평가 영역별 점수'}</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">${catRows}</table>
    </td></tr>
  </table>`

  // ④ 영역별 상세
  const detail = [
    ['d1Title', 'd1', RD_TEXT.d1Notes],
    ['d2Title', 'd2', null],
    ['d3Title', 'd3', null],
    ['d4Title', 'd4', null],
  ].map(([tk, bk, notes]) => `
    <p${edRich('rd_' + tk)} style="margin:0 0 8px;font-size:13px;font-weight:800;color:${EM_RED};line-height:1.6;font-family:${EM_FONT};letter-spacing:-0.3px;">${escapeHtml(tx(tk))}</p>
    ${rdPara(tx(bk), { gap: (notes || bk === 'd3') ? 6 : 20, field: 'rd_' + bk })}
    ${bk === 'd3' ? rdSchemaCompareHtml(meta, lang) : ''}
    ${notes ? rdFootnotes(meta.rd_d1Notes || notes, 'rd_d1Notes') : ''}`).join('')

  // 외곽 카드 없이 콘텐츠만 반환 — 상위 Highlight 챕터 카드 안에 임베드된다.
  return `${rdHeading(lang === 'en' ? 'What is Readability?' : 'Readability란?', 'rd_h1')}
      ${introBox}
      ${rdPara(tx('summary'), { gap: 14, field: 'rd_summary' })}
      ${scoreTables}
      ${rdPara(tx('areaIntro'), { gap: 14, field: 'rd_areaIntro' })}
      ${catTable}
      ${rdHeading(lang === 'en' ? 'Detailed status and improvement direction by area' : '영역별 상세 Readability 현황 및 개선 방향', 'rd_h2')}
      ${detail}`
}

// ─── 반기 요약(하이라이트) 섹션 — 반기 리포트 상단에만 삽입 ────────────────────
// 전체 점수 + 삼성 격차 + 상승/하락 주도 카테고리 + (편집 가능) 반기 코멘트. table-layout.
function semiHighlightHtml(meta, total, products, lang = 'ko') {
  const L2 = lang === 'en'
    ? { hl: 'Semi-Annual Highlights', overall: 'Total GEO Visibility', gap: 'Gap vs Samsung', ss: 'Samsung', vs: 'vs', rising: 'Top Risers', falling: 'Top Decliners', none: '—' }
    : { hl: '반기 하이라이트', overall: '전체 GEO Visibility', gap: '삼성 대비 격차', ss: 'Samsung', vs: '대비', rising: '상승 주도', falling: '하락 주도', none: '—' }
  total = total || {}
  const compAvg = total.vsComp || 0
  const gap = +((total.score || 0) - compAvg).toFixed(1)
  const ratio = compAvg > 0 ? Math.round((total.score || 0) / compAvg * 100) : 100
  const signal = ratio >= 100 ? '#22C55E' : ratio >= 80 ? '#F59E0B' : '#EF4444'
  const d = (total.prev != null && total.prev !== 0) ? +((total.score || 0) - total.prev).toFixed(1) : null
  const prodName = p => { const id = (p.id || '').toLowerCase(); return lang === 'en' ? (PROD_ID_TO_EN[id] || p.kr || id) : (PROD_ID_TO_KR[id] || p.kr || id) }
  const movers = (products || []).filter(p => p.prev != null && p.score != null && p.prev !== 0).map(p => ({ name: prodName(p), d: +(p.score - p.prev).toFixed(1) }))
  const risers = movers.filter(x => x.d > 0).sort((a, b) => b.d - a.d).slice(0, 3)
  const fallers = movers.filter(x => x.d < 0).sort((a, b) => a.d - b.d).slice(0, 3)
  const moverRows = (arr, color) => arr.length
    ? arr.map(x => `<tr><td style="padding:3px 0;font-size:13px;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(x.name)}</td><td align="right" style="padding:3px 0;font-size:13px;font-weight:700;color:${color};font-family:${EM_FONT};">${x.d > 0 ? '+' : ''}${x.d.toFixed(1)}%p</td></tr>`).join('')
    : `<tr><td style="padding:3px 0;font-size:12px;color:#94A3B8;font-family:${EM_FONT};">${L2.none}</td></tr>`
  return `
        <tr>
          <td style="background:#FFFFFF;padding:12px 28px 4px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr><td style="padding-bottom:10px;">
                <table border="0" cellpadding="0" cellspacing="0"><tr>
                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                  <td style="padding-left:8px;font-size:18px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${L2.hl}</td>
                </tr></table>
              </td></tr>
              <tr><td>
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#0F172A;border-radius:14px;"><tr>
                  <td style="padding:20px 22px;border-top:4px solid ${signal};border-radius:14px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
                      <td style="vertical-align:bottom;">
                        <span style="font-size:12px;color:#94A3B8;font-family:${EM_FONT};">${L2.overall}</span><br/>
                        <span style="font-size:44px;font-weight:900;color:#FFFFFF;font-family:${EM_FONT};">${total.score != null ? total.score : '—'}</span><span style="font-size:18px;color:#94A3B8;font-family:${EM_FONT};"> %</span>
                        ${d != null ? `&nbsp;&nbsp;${deltaHtml(d, 15)}` : ''}
                      </td>
                      <td align="right" style="vertical-align:bottom;">
                        ${compAvg > 0 ? `<span style="font-size:15px;color:#3B82F6;font-weight:800;font-family:${EM_FONT};">${L2.ss} ${compAvg}%</span><br/>
                        <span style="font-size:15px;font-weight:800;color:${signal};font-family:${EM_FONT};">${L2.gap} ${gap > 0 ? '+' : ''}${gap}%p (${L2.vs} ${ratio}%)</span>` : ''}
                      </td>
                    </tr></table>
                    ${(meta.semiHighlightText || _ED) ? `<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td style="padding-top:12px;">${edBlock('semiHighlightText', meta.semiHighlightText, { size: 14, lh: 24, color: '#E2E8F0', accent: '#FF9EBB', lang })}</td></tr></table>` : ''}
                  </td>
                </tr></table>
              </td></tr>
              <tr><td style="padding-top:12px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
                  <td width="50%" style="vertical-align:top;padding-right:8px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;"><tr><td style="padding:12px 16px;">
                      <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#15803D;font-family:${EM_FONT};">▲ ${L2.rising}</p>
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">${moverRows(risers, '#16A34A')}</table>
                    </td></tr></table>
                  </td>
                  <td width="50%" style="vertical-align:top;padding-left:8px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFF1F2;border:1px solid #FECDD3;border-radius:12px;"><tr><td style="padding:12px 16px;">
                      <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#BE123C;font-family:${EM_FONT};">▼ ${L2.falling}</p>
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">${moverRows(fallers, '#DC2626')}</table>
                    </td></tr></table>
                  </td>
                </tr></table>
              </td></tr>
            </table>
          </td>
        </tr>`
}

// ─── 반기 레터 (Semi-Annual Letter) ─────────────────────────────────────────
// 반기 리포트 = 월간 리포트 전체 레이아웃(제품별·국가별·Citation·Action Plan 등 모든 기능
// 동일) + 상단 반기 요약(하이라이트) 섹션. 트렌드는 월간(반기 6개월) 트렌드로 표시.
export function generateSemiAnnualEmailHTML(meta, total, products, citations, dotcom = {}, lang = 'ko', productsCnty = [], citationsCnty = [], options = {}) {
  _ED = !!options.editable   // 반기 요약의 edBlock 이 올바른 editable 상태 사용 (generateEmailHTML 이 뒤에서 재설정)
  const semiMeta = {
    ...meta,
    reportType: meta.reportType || (lang === 'en' ? 'GEO Semi-Annual Performance Report' : 'GEO 반기 성과 분석 리포트'),
  }
  // 반기 요약은 LLM 필터 반영된 값으로 계산
  let hp = products, ht = total
  if (options.llmModel && options.llmModel !== 'Total') {
    hp = resolveProductsByLlm(products, options.llmModel)
    ht = resolveTotalByLlm(total, options.monthlyVis, options.llmModel)
  }
  const prependHtml = semiHighlightHtml(semiMeta, ht, hp, lang)
  // trendMode 를 monthly 로 고정 → 반기(6개월) 트렌드. 그 외 옵션·기능은 월간과 동일.
  return generateEmailHTML(semiMeta, total, products, citations, dotcom, lang, productsCnty, citationsCnty, { ...options, trendMode: 'monthly', prependHtml })
}

export function generateEmailHTML(meta, total, products, citations, dotcom = {}, lang = 'ko', productsCnty = [], citationsCnty = [], options = {}) {
  const { containerWidth = 940, showTrendTabs = false, weeklyLabels, weeklyAll = {}, categoryStats = null, unlaunchedMap: ulInput = {}, productCardVersion = 'v1', trendMode = 'weekly', llmModel, monthlyVis, citTouchPointsTrend = null, citTrendMonths = [], citDomainTrend = null, citDomainMonths = [], citTouchPointsByLlm = null, citDomainByLlm = null, citDomainByLlmTrend = null, dotcomByLlm = null, prependHtml = '', assetBase = '', readability = null } = options
  // 인라인 편집 모드 (어드민 미리보기 전용) — 게시/복사/발송 경로는 editable 미지정 → 항상 false 로 리셋
  _ED = !!options.editable
  // LLM Model 필터 (2026-06) — 선택 모델로 products/productsCnty/total 재계산
  if (llmModel && llmModel !== 'Total') {
    products = resolveProductsByLlm(products, llmModel)
    productsCnty = resolveProductsCntyByLlm(productsCnty, llmModel)
    total = resolveTotalByLlm(total, monthlyVis, llmModel)
  }
  // 뉴스레터 전용 미출시 오버라이드: Aircare 멕시코 미출시
  const unlaunchedMap = { ...ulInput, 'MX|AIRCARE': true }
  const t = T[lang] || T.ko
  total = total || { score: 0, prev: 0, vsComp: 0, rank: 1, totalBrands: 12 }
  products = products || []
  // UL_PROD_MAP 은 src/categoryMap.js (single source) 에서 모듈 상단에 import.
  function getULCntys(prodId) {
    const code = UL_PROD_MAP[prodId] || (prodId || '').toUpperCase()
    return Object.keys(unlaunchedMap).filter(k => k.endsWith('|' + code)).map(k => k.split('|')[0])
  }
  // 영문본 제품명 매핑 (p.id 또는 p.kr 기준) — src/categoryMap.js single source
  const PROD_EN_NAME = PROD_ID_TO_EN
  // KR/EN 양쪽 키 모두 영문 매핑 (한글 카드 라벨 + 영문 카드 라벨 둘 다 lookup 가능)
  const PROD_EN_BY_KR = Object.fromEntries(
    Object.keys(PROD_ID_TO_KR).flatMap(id => [
      [PROD_ID_TO_KR[id], PROD_ID_TO_EN[id]],
      [PROD_ID_TO_EN[id], PROD_ID_TO_EN[id]],
    ])
  )
  function prodNameUL(p) {
    const baseName = lang === 'en'
      ? (PROD_EN_NAME[(p.id || '').toLowerCase()] || PROD_EN_BY_KR[p.kr] || p.kr)
      : p.kr
    const c = getULCntys(p.id || p.category)
    return c.length ? `${baseName}*` : baseName
  }
  citations = citations || []
  const totalDelta = delta(total.score, total.prev)
  const scoreBarW  = Math.round(total.score || 0)

  // 삼성전자 전체 GEO 점수 (total 시트의 vsComp)
  const compAvg = total.vsComp || 0
  const lgVsComp = +(total.score - compAvg).toFixed(1)
  // 전체 신호등: LG/경쟁사 비율 기준
  const totalRatio = compAvg > 0 ? Math.round((total.score / compAvg) * 100) : 100
  const totalSignal = totalRatio >= 100 ? '#22C55E' : totalRatio >= 80 ? '#F59E0B' : '#EF4444'

  // 주간 트렌드 전역 min/max 계산 (모든 제품 동일 스케일)
  const allWeekly = products.flatMap(p => p.weekly || [])
  const globalMax = allWeekly.length ? Math.max(...allWeekly) : 100
  const globalMin = allWeekly.length ? Math.min(...allWeekly) : 0

  // 월별 트렌드 전역 min/max 계산
  const allMonthly = products.flatMap(p => p.monthly || (p.prev ? [p.prev, p.score] : []))
  const monthlyGlobalMax = allMonthly.length ? Math.max(...allMonthly) : 100
  const monthlyGlobalMin = allMonthly.length ? Math.min(...allMonthly) : 0

  const buTotals = total.buTotals || {}
  const trendOpts = { showTrendTabs, monthlyGlobalMax, monthlyGlobalMin, weeklyLabels, buTotals, prodNameFn: prodNameUL, productCardVersion, productsCnty, trendMode, unlaunchedMap }

  const BU_ORDER = ['MS', 'HS', 'ES']
  const buSections = BU_ORDER.map(buKey => {
    const buProducts = products.filter(p => p.bu === buKey)
    return buProducts.length ? buSectionHtml(buKey, buProducts, globalMax, globalMin, lang, trendOpts) : ''
  }).join('')

  // 제품별 섹션 하단 각주: 미출시 국가
  const ulFootnoteParts = products
    .filter(p => getULCntys(p.id || p.category).length > 0)
    .map(p => {
      const isAudio = (p.id || '').toLowerCase() === 'audio' || p.kr === '오디오'
      const displayName = isAudio
        ? 'Audio-Sound Suite'
        : lang === 'en'
          ? (PROD_EN_NAME[(p.id || '').toLowerCase()] || PROD_EN_BY_KR[p.kr] || p.kr)
          : p.kr
      const cntys = getULCntys(p.id || p.category).map(c => cntyLabel(c, lang)).join(',')
      return `${displayName} : ${cntys}`
    })
  const ulIntro = lang === 'en'
    ? 'Unlaunched countries are shown in gray status'
    : '제품 미출시 국가는 신호등 회색 표기'
  const ulLine = ulFootnoteParts.length
    ? `<p style="margin:12px 16px 0;font-size:13px;font-weight:700;color:#000000;font-family:${EM_FONT};line-height:1.6;">* ${ulIntro}(${ulFootnoteParts.join(' / ')})</p>`
    : ''
  const productFootnoteHtml = ulLine

  const citTopN = meta.citationTopN || 10
  const citationList = (citations || []).slice(0, citTopN)
  const citMaxScore = citationList.length ? Math.max(...citationList.map(c => c.score)) : 100
  const citationRows = citationList.map((c, i) => citationRowHtml(c, i === citationList.length - 1, citMaxScore, lang)).join('')

  // 도메인별 Citation 섹션
  const citDomainResult = meta.showCitDomain !== false
    ? citationDomainSectionHtml(citationsCnty, meta, lang, citations)
    : { html: '', css: '' }

  // 국가별 Citation 도메인 (내부 테이블만)
  const citationCntyInnerHtml = citationCntyTableHtml(citationsCnty, lang)

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LG GEO Newsletter ${escapeHtml(meta.period)}</title>
  <link href="https://fonts.cdnfonts.com/css/lg-smart" rel="stylesheet" />
  <!--[if mso]>
  <style type="text/css">
    table { border-collapse: collapse; }
    td { font-family: 'LGEIText','LG Smart', Arial, sans-serif; }
  </style>
  <![endif]-->
  ${citDomainResult.css ? `<style type="text/css">${citDomainResult.css}</style>` : ''}
  <style type="text/css">
    @font-face { font-family: 'LGEIText'; font-weight: 100 300; font-style: normal; src: url('/font/LGEIText%20Light.ttf') format('truetype'); font-display: swap; }
    @font-face { font-family: 'LGEIText'; font-weight: 400 500; font-style: normal; src: url('/font/LGEIText%20Regular.otf') format('opentype'), url('/font/LGEIText%20Regular.ttf') format('truetype'); font-display: swap; }
    @font-face { font-family: 'LGEIText'; font-weight: 600; font-style: normal; src: url('/font/LGEIText%20SemiBold.ttf') format('truetype'); font-display: swap; }
    @font-face { font-family: 'LGEIText'; font-weight: 700 900; font-style: normal; src: url('/font/LGEIText%20Bold.ttf') format('truetype'); font-display: swap; }
    html, body { overflow-x: hidden !important; max-width: 100vw; }
    body * { max-width: 100%; }
    table { table-layout: auto; }
    td, th { word-wrap: break-word; overflow-wrap: break-word; }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:${EM_FONT};">

<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F1F5F9;">
  <tr>
    <td align="center" style="padding:24px 0;">

      <!-- 메인 컨테이너 -->
      <table border="0" cellpadding="0" cellspacing="0" width="${containerWidth}" style="width:${containerWidth}px;max-width:${containerWidth}px;table-layout:fixed;background:#FFFFFF;border-radius:16px;font-family:${EM_FONT};">

        <!-- ══ 헤더 상단 레드 바 ══ -->
        <tr>
          <td style="background:${EM_RED};padding:10px 16px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:15px;font-weight:700;color:#FFCCD8;font-family:${EM_FONT};">LG ELECTRONICS</td>
                <td align="right" style="font-size:14px;color:#FFB0C0;font-family:${EM_FONT};"><span${edAttr('reportNo', meta.reportNo)}>${escapeHtml(meta.reportNo)}</span> · <span${edAttr('period', meta.period)}>${escapeHtml(meta.period)}</span></td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ══ 헤더 타이틀 ══ -->
        <tr>
          <td style="background:#FFFFFF;padding:26px 28px 16px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:14px;color:#94A3B8;font-family:${EM_FONT};font-weight:400;"><span${edAttr('reportType', meta.reportType)}>${escapeHtml(meta.reportType || (lang === 'en' ? 'GEO Monthly Performance Report' : 'GEO 월간 성과 분석 리포트'))}</span></td>
                <td align="right" style="font-size:14px;color:#94A3B8;font-family:${EM_FONT};font-weight:400;"><span${edAttr('team', meta.team)}>${escapeHtml(meta.team)}</span></td>
              </tr>
            </table>
            <p style="margin:16px 0 10px;text-align:center;line-height:1.2;">
              <span${edAttr('title', meta.title)} style="font-size:${meta.titleFontSize || 24}px;font-weight:700;color:${meta.titleColor || '#1A1A1A'};font-family:${EM_FONT};">${escapeHtml(meta.title || (lang === 'en' ? 'Generative AI Engine Visibility Performance Analysis' : '생성형 AI 엔진 가시성(Visibility) 성과 분석'))}</span>
            </p>
            <p style="margin:0;text-align:center;">
              <span${edAttr('dateLine', meta.dateLine)} style="font-size:18px;color:#475569;font-family:${EM_FONT};font-weight:400;">${escapeHtml(meta.dateLine || (lang === 'en' ? 'As of ' + meta.period : meta.period + ' 기준'))}</span>
            </p>
            ${meta.showNotice && (meta.noticeText || _ED) ? `
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr><td height="14" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr>
                <td style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:14px 20px;">
                  <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};letter-spacing:0.5px;">${t.notice}</p>
                  ${edBlock('noticeText', meta.noticeText, { size: 14, lh: 23, color: '#1A1A1A', lang })}
                </td>
              </tr>
            </table>` : ''}
            ${meta.showKpiLogic && (meta.kpiLogicText || _ED) ? `
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr><td height="14" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr>
                <td style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:12px 10px;">
                  <p style="margin:0 0 6px;padding-left:6px;font-size:13px;font-weight:700;color:#64748B;font-family:${EM_FONT};letter-spacing:0.5px;">${t.kpiLogic}</p>
                  ${edBlock('kpiLogicText', meta.kpiLogicText, { size: 14, lh: 24, color: '#475569', accent: '#64748B', lang })}
                </td>
              </tr>
            </table>` : ''}
          </td>
        </tr>
        ${prependHtml || ''}
        <!-- 구분선 (직선) -->
        <tr>
          <td style="background:#FFFFFF;padding:24px 28px 0;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td height="2" style="background:${EM_RED};font-size:0;line-height:0;">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ══ 본문 ══ -->
        <tr>
          <td style="background:#F8FAFC;padding:28px 28px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">

              ${meta.showTotal !== false ? `<!-- ── 전체 GEO 가시성 지수 ── -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#0F172A;border-radius:14px;">
                    <tr>
                      <td style="padding:24px 24px 22px;border-top:4px solid ${totalSignal};border-radius:14px;">
                        <!-- Executive Summary 제목 -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:16px;">
                          <tr>
                            <td style="padding:10px 16px;background:linear-gradient(135deg,${EM_RED},#A0003E);border-radius:8px;">
                              <span style="font-size:20px;font-weight:900;color:#FFFFFF;text-transform:uppercase;letter-spacing:2px;font-family:${EM_FONT};">${t.geoInsight}</span>
                            </td>
                          </tr>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="font-size:24px;font-weight:700;color:#FFFFFF;text-transform:uppercase;font-family:${EM_FONT};">LG GEO Visibility %</td>
                            <td align="right" style="font-size:14px;color:#94A3B8;font-family:${EM_FONT};">Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>Subsidiary : USA, Canada, UK, Germany, Spain, Brazil, Mexico, AU, Vietnam, India</td>
                          </tr>
                        </table>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:bottom;">
                              <span style="font-size:52px;font-weight:900;color:#FFFFFF;font-family:${EM_FONT};">${total.score}</span>
                              <span style="font-size:22px;color:#94A3B8;font-family:${EM_FONT};"> %</span>
                              &nbsp;&nbsp;${total.prev ? deltaHtml(totalDelta, 16) : `<span style="color:#94A3B8;font-size:18px;">—</span>`}
                              <span style="font-size:15px;color:#64748B;font-family:${EM_FONT};"> MoM</span>
                            </td>
                            <td align="right" style="vertical-align:bottom;padding-bottom:8px;">
                              ${compAvg > 0 ? `<span style="font-size:18px;color:#3B82F6;font-weight:800;font-family:${EM_FONT};">SAMSUNG ${compAvg}%</span>
                              <span style="font-size:14px;color:#64748B;font-family:${EM_FONT};">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                              <span style="font-size:18px;font-weight:800;color:${totalRatio >= 100 ? '#16A34A' : totalRatio >= 80 ? '#E8910C' : '#DC2626'};font-family:${EM_FONT};">${lang === 'en' ? 'vs' : '대비'} ${totalRatio}%</span>` : ''}
                            </td>
                          </tr>
                        </table>
                        <!-- 게이지 바 -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr><td height="14" colspan="2" style="font-size:0;line-height:0;">&nbsp;</td></tr>
                          <tr>
                            <td style="font-size:13px;color:#64748B;font-family:${EM_FONT};">0%</td>
                            <td align="right" style="font-size:13px;color:#64748B;font-family:${EM_FONT};">100%</td>
                          </tr>
                          <!-- LG 바 -->
                          <tr>
                            <td colspan="2" style="padding-top:4px;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#1E2433;border-radius:8px;">
                                <tr>
                                  <td style="padding:0;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="${scoreBarW}%" style="width:${scoreBarW}%;max-width:${scoreBarW}%;">
                                      <tr>
                                        <td height="10" style="background:${EM_RED};border-radius:8px;height:10px;font-size:0;line-height:0;">&nbsp;</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          ${compAvg > 0 ? `<!-- Samsung 바 -->
                          <tr>
                            <td colspan="2" style="padding-top:5px;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#1E2433;border-radius:8px;">
                                <tr>
                                  <td style="padding:0;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="${Math.round(compAvg)}%" style="width:${Math.round(compAvg)}%;max-width:${Math.round(compAvg)}%;">
                                      <tr>
                                        <td height="10" style="background:#3B82F6;border-radius:8px;height:10px;font-size:0;line-height:0;">&nbsp;</td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>` : ''}
                          <!-- 범례 -->
                          <tr>
                            <td colspan="2" style="padding-top:8px;">
                              <table border="0" cellpadding="0" cellspacing="0"><tr>
                                <td width="10" height="10" style="background:${EM_RED};border-radius:5px;font-size:0;">&nbsp;</td>
                                <td style="padding-left:5px;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">LG ${total.score}%</td>
                                ${compAvg > 0 ? `<td style="padding-left:14px;" width="10" height="10"><table border="0" cellpadding="0" cellspacing="0"><tr><td width="10" height="10" style="background:#3B82F6;border-radius:5px;font-size:0;">&nbsp;</td></tr></table></td>
                                <td style="padding-left:5px;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">SS ${compAvg}%</td>` : ''}
                                <td style="padding-left:14px;" width="2" height="10"><table border="0" cellpadding="0" cellspacing="0"><tr><td width="2" height="10" style="background:#475569;border-radius:2px;font-size:0;">&nbsp;</td></tr></table></td>
                                <td style="padding-left:5px;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">prev ${total.prev}%</td>
                              </tr></table>
                            </td>
                          </tr>
                        </table>
                        ${((meta.showTotalInsight !== false && (meta.totalInsight || _ED)) || meta.showInsightV2) ? `
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr><td height="16" style="font-size:0;line-height:0;">&nbsp;</td></tr>
                          <tr>
                            <td style="padding:16px 18px;background:#1E0F18;border:1px solid #3D1528;border-radius:10px;">
                              ${(meta.showTotalInsight !== false && (meta.totalInsight || _ED)) ? edBlock('totalInsight', meta.totalInsight, { size: 13, lh: 22, color: '#FFFFFF', accent: '#FF9EBB', lang }) : ''}
                              ${(meta.showTotalInsight !== false && (meta.totalInsight || _ED)) && meta.showInsightV2 ? '<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td height="14" style="font-size:0;line-height:0;">&nbsp;</td></tr></table>' : ''}
                              ${meta.showInsightV2 ? insightV2Parts(meta, lang, products).execHtml : ''}
                            </td>
                          </tr>
                        </table>` : ''}
                        ${meta.showInsightV2 ? insightV2Parts(meta, lang, products).bodyHtml : ''}
                        <!-- 대시보드 바로가기 버튼은 Action Plan 섹션 아래로 이동됨 -->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

              ${meta.showTotal === false && meta.showInsightV2 ? `<!-- V2 폴백 — 전체 지수 섹션이 꺼진 경우 독립 렌더 (검은 박스부터 바로) -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:18px 16px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="padding:16px 18px;background:#1E0F18;border:1px solid #3D1528;border-radius:10px;">
                              ${insightV2Parts(meta, lang, products).execHtml}
                            </td>
                          </tr>
                        </table>
                        ${insightV2Parts(meta, lang, products).bodyHtml}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

              ${meta.showHighlight !== false ? highlightInsightSectionHtml(products, weeklyAll, weeklyLabels, meta, lang, assetBase, { citTouchPointsTrend, citTrendMonths, citTouchPointsByLlm, citDomainTrend, citDomainMonths, citDomainByLlmTrend }, readability) : ''}

              ${meta.showProducts !== false ? `<!-- ══ 제품별 현황 (통합 카드) ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align:middle;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                                  <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.productTitle}</td>
                                </tr>
                              </table>
                            </td>
                            <td align="right" style="vertical-align:middle;font-size:13px;color:#94A3B8;font-family:${EM_FONT};">
                              ${t.lgBasis} &nbsp;
                              <span style="color:#15803D;">●</span> ${t.legendLead} &nbsp;
                              <span style="color:#E8910C;">●</span> ${t.legendBehind} &nbsp;
                              <span style="color:#BE123C;">●</span> ${t.legendCritical}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.productInsight, meta.showProductInsight, meta.productHowToRead, meta.showProductHowToRead, lang, { insight: 'productInsight', howToRead: 'productHowToRead' })}
                    ${showTrendTabs ? `<tr>
                      <td style="padding:12px 28px 0;">
                        <div class="trend-tab-bar" style="display:inline-flex;gap:0;background:#F1F5F9;border-radius:8px;padding:3px;">
                          <button class="trend-tab-btn active" onclick="switchTrend('weekly')" style="padding:5px 16px;border-radius:6px;border:none;font-size:14px;font-weight:700;font-family:${EM_FONT};cursor:pointer;background:${EM_RED};color:#FFFFFF;transition:all .15s;">${t.weeklyTab}</button>
                          <button class="trend-tab-btn" onclick="switchTrend('monthly')" style="padding:5px 16px;border-radius:6px;border:none;font-size:14px;font-weight:700;font-family:${EM_FONT};cursor:pointer;background:transparent;color:#64748B;transition:all .15s;">${t.monthlyTab}</button>
                        </div>
                      </td>
                    </tr>` : ''}
                    <tr>
                      <td style="padding:20px 16px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          ${buSections}
                        </table>
                        ${productFootnoteHtml}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

              ${meta.showCompRatioDelta !== false ? compRatioDeltaSectionHtml(products, meta, lang) : ''}

              ${meta.showCnty !== false ? countryVisibilitySectionHtml(productsCnty, meta, lang, total, unlaunchedMap) : ''}

              ${meta.showCitations !== false || citDomainResult.innerHtml ? `<!-- ══ 외부접점채널 Citation (통합) ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:16px 12px 12px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0"><tr>
                          <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                          <td style="padding-left:8px;font-size:18px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.touchPointTitle}</td>
                        </tr></table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.citationInsight, meta.showCitationInsight, meta.citationHowToRead, meta.showCitationHowToRead, lang, { insight: 'citationInsight', howToRead: 'citationHowToRead' })}
                    ${citCountByModelVBarHtml(citTouchPointsByLlm, citTrendMonths, meta, lang, citDomainByLlmTrend, citDomainMonths)}
                    <tr>
                      <td style="padding:16px 12px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          ${llmCitationShareSectionHtml(citTouchPointsByLlm, citTrendMonths, citDomainByLlm, citDomainMonths, meta, lang)}
                          ${meta.showCitations !== false ? `
                          <!-- 도메인 카테고리별 + 도메인별 (가로 2열) -->
                          <tr>
                            <td style="padding-bottom:16px;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
                                <td width="50%" style="vertical-align:top;padding-right:6px;">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr><td style="font-size:14px;font-weight:700;color:#0F172A;font-family:${EM_FONT};padding-bottom:8px;border-bottom:1px solid #E8EDF2;">${t.citationTitle}</td></tr>
                                    <tr><td style="padding-top:8px;"><table border="0" cellpadding="0" cellspacing="0" width="100%">${citationRows}</table></td></tr>
                                  </table>
                                </td>
                                ${citDomainResult.innerHtml ? `<td width="50%" style="vertical-align:top;padding-left:6px;">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr><td style="font-size:14px;font-weight:700;color:#0F172A;font-family:${EM_FONT};padding-bottom:8px;border-bottom:1px solid #E8EDF2;">${t.citationDomainTitle}</td></tr>
                                    <tr><td style="padding-top:8px;"><table border="0" cellpadding="0" cellspacing="0" width="100%">${citDomainResult.innerHtml}</table></td></tr>
                                  </table>
                                </td>` : ''}
                              </tr></table>
                            </td>
                          </tr>` : ''}
                          ${meta.showCitCnty !== false && citationCntyInnerHtml ? `
                          <!-- 국가별 Citation 도메인 -->
                          <tr>
                            <td style="padding-top:12px;border-top:2px solid #E8EDF2;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr><td style="font-size:14px;font-weight:700;color:#0F172A;font-family:${EM_FONT};padding:8px 0;">${t.citationCntyTitle}</td></tr>
                                ${citationCntyInnerHtml}
                              </table>
                            </td>
                          </tr>` : ''}
                          <!-- 제품별 Citation (Top 3 카테고리 + 도메인) -->
                          ${citationByProductHtml(citationsCnty, meta, lang)}
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

              ${meta.showDotcom !== false ? dotcomCombinedSectionHtml(dotcom, dotcomByLlm, meta, lang) : ''}

              ${meta.showTodo ? `
              <!-- ══ Action Plan (3영역: 노티스 + 인사이트 + 핵심과제 진척) ══ -->
              <tr>
                <td style="padding-bottom:28px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border-radius:16px;border:2px solid #E8EDF2;">
                    <tr>
                      <td style="padding:22px 16px 18px;background:#FAFBFC;border-bottom:1px solid #F1F5F9;">
                        <table border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
                            <td style="padding-left:8px;font-size:19px;font-weight:700;color:#1A1A1A;font-family:${EM_FONT};">${t.todoTitle}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 16px;">
                        ${(meta.todoNotice || _ED) ? `
                        <!-- 1. 전사 핵심 과제 노티스 -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFF4F7;border:1px solid #F5CCD8;border-radius:10px;margin-bottom:16px;">
                          <tr><td style="padding:14px 16px;">
                            <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};text-transform:uppercase;letter-spacing:0.5px;">${lang === 'en' ? 'Key Initiative' : '전사 핵심 과제'}</p>
                            ${edBlock('todoNotice', meta.todoNotice, { size: 13, lh: 22, color: '#1A1A1A', lang })}
                          </td></tr>
                        </table>` : ''}
                        ${(meta.todoText || _ED) ? `
                        <!-- 2. 인사이트 -->
                        ${edBlock('todoText', meta.todoText, { size: 13, lh: 22, color: '#1A1A1A', lang, wrapStyle: 'margin:0 0 16px;' })}` : ''}
                        <!-- 3. 핵심 과제 진척 사항 -->
                        ${categoryCardsHtml(categoryStats, lang, meta)}
                        ${dashboardLinkButtonHtml(lang)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

              ${meta.showTodoV2 ? actionItemsV2SectionHtml(meta, lang, categoryStats) : ''}

            </table>
          </td>
        </tr>

        <!-- ══ 푸터 ══ -->
        <tr>
          <td style="background:#1A1A1A;padding:16px 28px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td>
                  <p style="margin:0;font-size:13px;font-weight:700;color:#FFFFFF;font-family:${EM_FONT};">LG Electronics &nbsp;<span style="font-weight:400;color:#94A3B8;">${t.footer}</span></p>
                  <p style="margin:4px 0 0;font-size:11px;color:#64748B;font-family:${EM_FONT};">SEO/GEO PIC : Taesung Moon <a href="mailto:ts.moon@lge.com" style="color:#94A3B8;text-decoration:none;">ts.moon@lge.com</a> &nbsp;|&nbsp; Hyunseo Chung <a href="mailto:hs0902.chung@lge.com" style="color:#94A3B8;text-decoration:none;">hs0902.chung@lge.com</a></p>
                </td>
                <td align="right" style="vertical-align:top;">
                  <p style="margin:0;font-size:11px;color:#FFFFFF;font-family:${EM_FONT};">© 2026 LG Electronics Inc. All Rights Reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

<script>function switchTrend(m){document.querySelectorAll('.trend-weekly').forEach(function(e){e.style.display=m==='weekly'?'':'none'});document.querySelectorAll('.trend-monthly').forEach(function(e){e.style.display=m==='monthly'?'':'none'});document.querySelectorAll('.trend-tab-btn').forEach(function(b){b.style.background=b.getAttribute('onclick').indexOf(m)>=0?'#CF0652':'transparent';b.style.color=b.getAttribute('onclick').indexOf(m)>=0?'#fff':'#64748B'})}</script>
${edScriptHtml()}
</body>
</html>`
}
