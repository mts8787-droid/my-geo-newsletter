// ─── 이메일 호환 HTML 생성기 ─────────────────────────────────────────────────
// 규칙: table 기반 레이아웃, 인라인 스타일, 외부 폰트 없음, flex/grid 없음

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

// unlaunchedMap 조회용 코드 매핑 (id → 시트의 ulCode)
const UL_PROD_CODE = { tv:'TV', monitor:'IT', audio:'AV', washer:'WM', fridge:'REF', dw:'DW', vacuum:'VC', cooking:'COOKING', rac:'RAC', aircare:'AIRCARE' }
// 국가별 섹션에서 한글/영문 제품명을 id로 역매핑
const PROD_NAME_TO_ID = { 'TV':'tv', '모니터':'monitor', 'Monitor':'monitor', '오디오':'audio', 'Audio':'audio', '세탁기':'washer', 'Washer':'washer', '냉장고':'fridge', 'Refrigerator':'fridge', 'Fridge':'fridge', '식기세척기':'dw', 'Dishwasher':'dw', '청소기':'vacuum', 'Vacuum':'vacuum', 'VC':'vacuum', 'Cooking':'cooking', 'RAC':'rac', 'Aircare':'aircare' }
function isUnlaunched(unlaunchedMap, country, prodId) {
  if (!unlaunchedMap) return false
  const code = UL_PROD_CODE[(prodId || '').toLowerCase()] || (prodId || '').toUpperCase()
  return !!unlaunchedMap[`${country}|${code}`]
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

// ─── 삼성 → SS 치환 ─────────────────────────────────────────────────────────
function ssName(name) {
  if (!name) return ''
  return escapeHtml(name.replace(/삼성전자/g, 'SS').replace(/삼성/g, 'SS').replace(/Samsung/gi, 'SS'))
}

function delta(score, prev) { return +(score - prev).toFixed(1) }

function deltaHtml(d, size = 15, mom = false) {
  if (d === 0) return `<span style="color:#94A3B8;font-size:${size}px;">─</span>`
  const arrow = d > 0 ? '▲' : '▼'
  const color = d > 0 ? '#16A34A' : '#DC2626'
  const prefix = mom ? 'MoM ' : ''
  return `<span style="color:${color};font-size:${size}px;font-weight:700;">${prefix}${arrow} ${Math.abs(d).toFixed(1)}%p</span>`
}

// ─── 주간 트렌드 바 차트 (이메일 호환, 제품별 상대 스케일) ────────────────────
function weeklyTrendHtml(weekly, color, globalMax, globalMin, weeklyLabels) {
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

  const bars = weekly.map((v, i) => {
    if (v == null) return ''
    const h = Math.round(((v - localMin) / range) * MAX_H) + 4
    const spacer = MAX_H - h
    return `<td style="vertical-align:bottom;text-align:center;padding:0 2px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
        <tr><td style="font-size:10px;font-weight:700;color:${color};font-family:${EM_FONT};padding-bottom:1px;">${v.toFixed(1)}</td></tr>
        ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td width="10" height="${h}" style="background:${color};font-size:0;line-height:0;">&nbsp;</td></tr>
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

  // 모드에 따른 점수 선택
  const activeScore = useMonthly ? (p.monthlyScore || p.score) : (p.weeklyScore || p.score)
  const activePrev = useMonthly ? (p.monthlyPrev || p.prev || 0) : (p.weeklyPrev || 0)
  const activeComp = p.vsComp || 0
  const curRatio = activeComp > 0 ? Math.round(activeScore / activeComp * 100) : 100
  const ratioColor = curRatio >= 100 ? '#15803D' : curRatio >= 80 ? '#E8910C' : '#BE123C'
  const activeStatus = curRatio >= 100 ? 'lead' : curRatio >= 80 ? 'behind' : 'critical'
  const st = statusInfo(activeStatus, lang)

  const d = delta(activeScore, activePrev)
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
  const momColor = d > 0 ? '#16A34A' : d < 0 ? '#DC2626' : '#94A3B8'
  const momArrow = d > 0 ? '▲' : d < 0 ? '▼' : ''
  const momStr = activePrev > 0
    ? `<span style="font-size:12px;font-weight:700;color:${momColor};font-family:${EM_FONT};">${momArrow}${Math.abs(d).toFixed(1)}%p</span>`
    : `<span style="font-size:12px;color:#94A3B8;font-family:${EM_FONT};">—</span>`

  // 월간 트렌드: monthlyScores에서 구성
  const ms = p.monthlyScores || []
  const MNAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const msLabels = ms.map(m => { const em = String(m.date).match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i); const km = String(m.date).match(/(\d{1,2})월/); return em ? em[1] : km ? MNAMES[parseInt(km[1])-1] : '' })
  const msData = ms.map(m => m.score)
  const msMax = msData.length ? Math.max(...msData) : 100
  const msMin = msData.length ? Math.min(...msData.filter(v => v > 0)) : 0

  // 트렌드 모드에 따라 선택
  const trendGraph = useMonthly
    ? weeklyTrendHtml(msData, sparkColor, msMax, msMin, msLabels)
    : weeklyTrendHtml(trendArr, sparkColor, globalMax, globalMin, trimmedLabels)
  const trendCell = showTrendTabs
    ? `<div class="trend-weekly">${weeklyTrendHtml(trendArr, sparkColor, globalMax, globalMin, trimmedLabels)}</div><div class="trend-monthly" style="display:none;">${weeklyTrendHtml(msData, sparkColor, msMax, msMin, msLabels)}</div>`
    : trendGraph

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
              <td align="right" style="vertical-align:middle;white-space:nowrap;">
                <span style="font-size:13px;font-weight:700;color:${ratioColor};font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.5px' : '0'};">${escapeHtml(p.compName || 'Samsung')} ${lang === 'en' ? 'vs' : '대비'} ${curRatio}%${ratioDelta}</span>
                &nbsp;<span style="display:inline-block;background:${st.bg};color:${st.color};border:1px solid ${st.border};border-radius:6px;padding:0px 5px;font-size:10px;font-weight:700;line-height:16px;font-family:${EM_FONT};vertical-align:middle;">${st.label}</span>
                ${activePrev > 0 ? `<div style="margin-top:2px;font-size:10px;color:#94A3B8;font-family:${EM_FONT};text-align:right;">${lang === 'en' ? 'MoM' : '전월대비'} <span style="color:${momColor};font-weight:700;">${momArrow}${Math.abs(d).toFixed(1)}%p</span></div>` : ''}
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
                <span style="font-size:22px;font-weight:900;color:#1A1A1A;">${activeScore.toFixed(1)}</span><span style="font-size:12px;color:#94A3B8;">%</span>
                &nbsp;${momStr}
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
  const d = delta(p.score, p.prev)
  const curRatio = p.compRatio || Math.round(p.vsComp > 0 ? (p.score / p.vsComp) * 100 : 100)
  const ratioColor = curRatio >= 100 ? '#15803D' : curRatio >= 80 ? '#E8910C' : '#BE123C'
  const momColor = d > 0 ? '#16A34A' : d < 0 ? '#DC2626' : '#94A3B8'
  const momArrow = d > 0 ? '▲' : d < 0 ? '▼' : ''
  const momStr = p.prev != null && p.prev > 0
    ? `<span style="font-size:11px;font-weight:700;color:${momColor};">${momArrow}${Math.abs(d).toFixed(1)}%p</span>`
    : ''
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
    if (!r || r.score <= 0) return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%;">
        ${BAR_H > 0 ? `<tr><td height="${BAR_H}" style="font-size:0;">&nbsp;</td></tr>` : ''}
        <tr><td style="font-size:10px;color:#CBD5E1;font-family:${EM_FONT};text-align:center;">—</td></tr>
        <tr><td style="font-size:8px;color:${unlaunched ? '#CBD5E1' : '#94A3B8'};font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${cntyLabel2Line(c, lang)}</td></tr>
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
        <tr><td style="font-size:10px;font-weight:700;color:${labelColor};font-family:${EM_FONT};text-align:center;padding-top:1px;">${r.score.toFixed(0)}</td></tr>
        <tr><td style="font-size:8px;font-weight:700;color:${labelColor};font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${cntyLabel2Line(c, lang)}</td></tr>
        <tr><td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};text-align:center;">${compTxt}</td></tr>
      </table>
    </td>`
  }).join('')

  return `
  <td width="33%" style="padding:3px;vertical-align:top;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border:2px solid ${st.border};border-radius:8px;background:#FFFFFF;font-family:${EM_FONT};">
      <tr>
        <td style="padding:5px 6px 3px;white-space:nowrap;overflow:hidden;">
          <span style="font-size:14px;font-weight:900;color:#1A1A1A;font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.9px' : '-0.5px'};">${escapeHtml(prodName)}</span>
          <span style="font-size:18px;font-weight:900;color:#1A1A1A;font-family:${EM_FONT};">${p.score.toFixed(1)}<span style="font-size:11px;color:#94A3B8;">%</span></span>${momStr ? `&nbsp;${momStr}` : ''}
          <span style="float:right;white-space:nowrap;"><span style="font-size:13px;font-weight:700;color:${ratioColor};font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.5px' : '0'};">${escapeHtml(compShort(mainCompName) || 'SS')} ${curRatio}%</span>&nbsp;<span style="display:inline-block;background:${st.bg};color:${st.color};border:1px solid ${st.border};border-radius:5px;padding:0px 4px;font-size:10px;font-weight:700;line-height:15px;font-family:${EM_FONT};vertical-align:middle;">${st.label}</span>${p.prev != null && p.prev > 0 ? `<div style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};text-align:right;margin-top:1px;">${lang === 'en' ? 'MoM' : '전월대비'} <span style="color:${momColor};font-weight:700;">${momArrow}${Math.abs(d).toFixed(1)}%p</span></div>` : ''}</span>
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
  const d = delta(p.score, p.prev)
  // 지정 경쟁사 우선, 없으면 기존 1위 경쟁사
  const prefComp = getPreferredComp(p.id, p.allScores)
  const mainCompName = prefComp ? prefComp.name : (p.compName || 'Samsung')
  const mainCompScore = prefComp ? prefComp.score : (p.vsComp || 0)
  const curRatio = mainCompScore > 0 ? Math.round(p.score / mainCompScore * 100) : 100
  const ratioColor = curRatio >= 100 ? '#15803D' : curRatio >= 80 ? '#E8910C' : '#BE123C'
  const momColor = d > 0 ? '#16A34A' : d < 0 ? '#DC2626' : '#94A3B8'
  const momArrow = d > 0 ? '▲' : d < 0 ? '▼' : ''
  const momStr = p.prev != null && p.prev > 0
    ? `<span style="font-size:12px;font-weight:700;color:${momColor};">${momArrow}${Math.abs(d).toFixed(1)}%p</span>`
    : ''
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
    if (!r || r.score <= 0) return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%;">
        <tr><td height="${BAR_H}" style="font-size:0;">&nbsp;</td></tr>
        <tr><td style="font-size:10px;color:#CBD5E1;text-align:center;">—</td></tr>
        <tr><td style="font-size:8px;color:${unlaunched ? '#CBD5E1' : '#94A3B8'};font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${cntyLabel2Line(c, lang)}</td></tr>
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
        <tr><td style="font-size:10px;font-weight:700;color:${labelColor};font-family:${EM_FONT};text-align:center;padding-top:1px;">${r.score.toFixed(0)}</td></tr>
        <tr><td style="font-size:8px;font-weight:700;color:${labelColor};font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${cntyLabel2Line(c, lang)}</td></tr>
        <tr><td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};text-align:center;white-space:nowrap;letter-spacing:-0.5px;">${compShort(cCompName)}<br/>${cCompScore > 0 ? cRatio + '%' : ''}</td></tr>
      </table>
    </td>`
  }).join('')

  return `
  <td width="33%" style="padding:3px;vertical-align:top;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border:2px solid ${st.border};border-radius:8px;background:#FFFFFF;font-family:${EM_FONT};">
      <tr>
        <td style="padding:5px 6px 3px;white-space:nowrap;overflow:hidden;">
          <span style="font-size:14px;font-weight:900;color:#1A1A1A;font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.9px' : '-0.5px'};">${escapeHtml(prodName)}</span>
          <span style="font-size:18px;font-weight:900;color:#1A1A1A;font-family:${EM_FONT};">${p.score.toFixed(1)}<span style="font-size:11px;color:#94A3B8;">%</span></span>${momStr ? `&nbsp;${momStr}` : ''}
          <span style="float:right;white-space:nowrap;"><span style="font-size:13px;font-weight:700;color:${ratioColor};font-family:${EM_FONT};letter-spacing:${lang === 'en' ? '-0.5px' : '0'};">${compShort(mainCompName)} ${curRatio}%</span>&nbsp;<span style="display:inline-block;background:${st.bg};color:${st.color};border:1px solid ${st.border};border-radius:5px;padding:0px 4px;font-size:10px;font-weight:700;line-height:15px;font-family:${EM_FONT};vertical-align:middle;">${st.label}</span></span>
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
// ─── 카드 범례 (HS 마지막 빈 칸 — 고정 높이로 다른 카드와 정확 일치) ──
function productCardLegendHtml(lang = 'ko') {
  const t = lang === 'en' ? {
    name: 'Sample',
    lblName: 'Category',
    lblScore: 'LG Visibility',
    lblMom: 'MoM',
    lblRight: 'vs Top-1 / Status',
    legendTitle: 'Country bars',
    lblBars: 'Visibility',
    lblCnty: 'Country',
    lblRatio: 'vs Comp',
  } : {
    name: '예시',
    lblName: '카테고리명',
    lblScore: '전체 LG Visibility',
    lblMom: '전월대비',
    lblRight: '1위 경쟁사 대비 · 신호등',
    legendTitle: '국가별 막대',
    lblBars: 'Visibility',
    lblCnty: '국가명',
    lblRatio: '경쟁비',
  }
  // 모든 색상 회색 톤
  const grayBorder = '#CBD5E1'
  const grayMid    = '#94A3B8'
  const grayDark   = '#64748B'
  const grayBarBg  = '#94A3B8'
  const badge = { bg: '#F1F5F9', border: '#CBD5E1', color: '#64748B', label: 'Status' }
  // 막대 7개 — 회색 + 국가 풀네임 (cntyLabel 사용: KO 미국/캐나다/.. EN United States/..)
  const exCntys = [
    { code: 'US', score: 48, ratio: 115 },
    { code: 'CA', score: 44, ratio: 108 },
    { code: 'UK', score: 40, ratio: 95 },
    { code: 'DE', score: 32, ratio: 75 },
    { code: 'BR', score: 45, ratio: 110 },
    { code: 'IN', score: 38, ratio: 88 },
    { code: 'AU', score: 35, ratio: 82 },
  ]
  const BAR_H = 18 // 막대 축소 — 고정 높이 카드 내에서 헤더 라벨 행 공간 확보
  const maxEx = 50
  const cntyBars = exCntys.map(c => {
    const h = Math.max(3, Math.round(c.score / maxEx * BAR_H))
    const spacer = BAR_H - h
    return `<td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="width:100%;">
        ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td height="${h}" style="font-size:0;line-height:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="14" height="${h}" style="background:${grayBarBg};border-radius:2px 2px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td style="font-size:10px;font-weight:700;color:${grayDark};font-family:${EM_FONT};text-align:center;padding-top:1px;line-height:1.1;">${c.score}</td></tr>
        <tr><td style="font-size:8px;font-weight:700;color:${grayDark};font-family:${EM_FONT};text-align:center;line-height:1.1;letter-spacing:-0.3px;">${escapeHtml(cntyLabel(c.code, lang))}</td></tr>
        <tr><td style="font-size:10px;color:${grayMid};font-family:${EM_FONT};text-align:center;line-height:1.1;">${c.ratio}%</td></tr>
      </table>
    </td>`
  }).join('')
  // 좌측 3슬롯 — 막대 영역 row 구조와 정렬
  const explainBlock = `<td colspan="3" valign="bottom" style="padding:0 6px 0 2px;width:30%;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr><td height="${BAR_H}" style="font-size:9px;font-weight:700;color:${grayDark};font-family:${EM_FONT};line-height:1.1;vertical-align:bottom;">${escapeHtml(t.legendTitle)}</td></tr>
      <tr><td style="font-size:9px;color:${grayMid};font-family:${EM_FONT};line-height:1.1;padding-top:1px;">${escapeHtml(t.lblBars)}</td></tr>
      <tr><td style="font-size:9px;color:${grayMid};font-family:${EM_FONT};line-height:1.1;">${escapeHtml(t.lblCnty)}</td></tr>
      <tr><td style="font-size:9px;color:${grayMid};font-family:${EM_FONT};line-height:1.1;">${escapeHtml(t.lblRatio)}</td></tr>
    </table>
  </td>`
  // 카드 inner 테이블 — 고정 높이 (V3 카드 자연 높이와 동일하게 강제)
  const CARD_H = 108
  return `<td width="33%" style="padding:3px;vertical-align:top;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" height="${CARD_H}" style="border:2px solid ${grayBorder};border-radius:8px;background:#FFFFFF;font-family:${EM_FONT};height:${CARD_H}px;">
      <tr>
        <td style="padding:5px 6px 3px;white-space:nowrap;overflow:hidden;">
          <span style="font-size:14px;font-weight:900;color:${grayDark};font-family:${EM_FONT};letter-spacing:-0.5px;">${escapeHtml(t.name)}</span>
          <span style="font-size:18px;font-weight:900;color:${grayDark};font-family:${EM_FONT};">42.5<span style="font-size:11px;color:${grayMid};">%</span></span>
          &nbsp;<span style="font-size:12px;font-weight:700;color:${grayDark};font-family:${EM_FONT};">▲1.2%p</span>
          <span style="float:right;white-space:nowrap;"><span style="font-size:13px;font-weight:700;color:${grayDark};font-family:${EM_FONT};">SS 105%</span>&nbsp;<span style="display:inline-block;background:${badge.bg};color:${badge.color};border:1px solid ${badge.border};border-radius:5px;padding:0px 4px;font-size:10px;font-weight:700;line-height:15px;font-family:${EM_FONT};vertical-align:middle;">${escapeHtml(badge.label)}</span></span>
        </td>
      </tr>
      <tr>
        <td style="padding:0 6px 3px;white-space:nowrap;overflow:hidden;font-size:8px;color:${grayMid};font-family:${EM_FONT};line-height:1.1;">
          ${escapeHtml(t.lblName)} · ${escapeHtml(t.lblScore)} · ${escapeHtml(t.lblMom)}
          <span style="float:right;">${escapeHtml(t.lblRight)}</span>
        </td>
      </tr>
      <tr>
        <td valign="bottom" style="padding:2px 4px 6px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
            <tr>${explainBlock}${cntyBars}</tr>
          </table>
        </td>
      </tr>
    </table>
  </td>`
}

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

  // HS BU 마지막 빈 칸에 카드 범례 (각 수치 의미 설명) 삽입
  if (buKey === 'HS' && rows.length > 0) {
    const lastRow = rows[rows.length - 1]
    const emptyIdx = lastRow.findIndex(p => p === null)
    if (emptyIdx >= 0) lastRow[emptyIdx] = '__LEGEND__'
  }

  const rowsHtml = rows.map(row => `
    <tr>
      ${row.map(p => {
        if (p === '__LEGEND__') return productCardLegendHtml(lang)
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
function insightBlockHtml(insight, showInsight, howToRead, showHowToRead, lang = 'ko') {
  const t = T[lang] || T.ko
  let html = ''
  if (showInsight && insight) {
    html += `
    <tr>
      <td style="padding:10px 16px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-radius:8px;background:#FFF4F7;border:1px solid #F5CCD8;">
          <tr>
            <td style="padding:10px 14px;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};">${t.insight}</p>
              <p style="margin:0;font-size:14px;color:#1A1A1A;line-height:22px;font-family:${EM_FONT};">${mdBold(insight)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
  }
  if (showHowToRead && howToRead) {
    html += `
    <tr>
      <td style="padding:0 16px 10px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-radius:8px;background:#F8FAFC;border:1px solid #E2E8F0;">
          <tr>
            <td style="padding:10px 14px;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#64748B;font-family:${EM_FONT};">${t.howToRead}</p>
              <p style="margin:0;font-size:14px;color:#475569;line-height:22px;font-family:${EM_FONT};">${mdBold(howToRead)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
  }
  return html
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
        <tr><td style="font-size:13px;font-weight:800;color:${barColor};font-family:${EM_FONT};padding-top:3px;white-space:nowrap;overflow:hidden;">${r.score.toFixed(1)}</td></tr>
        <tr><td style="font-size:12px;color:#475569;font-family:${EM_FONT};padding-top:2px;white-space:nowrap;overflow:hidden;">${escapeHtml(r.country)}</td></tr>
        <tr><td style="font-size:11px;color:#94A3B8;font-family:${EM_FONT};padding-top:2px;white-space:nowrap;overflow:hidden;">${ssName(r.compName)} ${r.compScore.toFixed(1)}</td></tr>
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
    const barColor = unlaunched ? '#94A3B8' : baseBarColor
    const labelColor = unlaunched ? '#94A3B8' : baseBarColor
    const barH = Math.max(Math.round((r.score / maxScore) * BAR_MAX), 3)
    const spacerH = BAR_MAX - barH
    const ratio = r.compScore > 0 ? Math.round(r.score / r.compScore * 100) : 100

    return `<td width="${colWidth}%" style="vertical-align:bottom;text-align:center;padding:0 1px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;table-layout:fixed;width:100%;">
        ${spacerH > 0 ? `<tr><td height="${spacerH}" style="font-size:0;line-height:0;">&nbsp;</td></tr>` : ''}
        <tr><td height="${barH}" style="font-size:0;line-height:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="18" height="${barH}" style="background:${barColor};border-radius:3px 3px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
        <tr><td height="16" style="height:16px;font-size:11px;font-weight:800;color:${labelColor};font-family:${EM_FONT};padding-top:2px;white-space:nowrap;line-height:14px;">${r.score.toFixed(1)}</td></tr>
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
                    ${insightBlockHtml(meta.cntyInsight, meta.showCntyInsight, meta.cntyHowToRead, meta.showCntyHowToRead, lang)}
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
  const ttlRows = citationsCnty.filter(r => r.cnty === 'TTL').sort((a, b) => a.rank - b.rank).slice(0, domTopN)
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
    if (!cntyMap.has(row.cnty)) cntyMap.set(row.cnty, [])
    cntyMap.get(row.cnty).push(row)
  })

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
  const rankBg = isTop3 ? CIT_GREEN : '#F1F5F9'
  const rankColor = isTop3 ? '#FFFFFF' : '#94A3B8'
  const barColor = isTop3 ? CIT_GREEN : '#475569'
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
          <span style="font-size:11px;color:#94A3B8;font-family:${EM_FONT};">&nbsp;(${ratioStr})</span>
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

function dotcomSectionHtml(dotcom, meta, lang = 'ko') {
  if (!dotcom || !dotcom.lg) return ''
  const t = T[lang] || T.ko
  const lg = dotcom.lg, sam = dotcom.samsung || {}
  const allCols = ['TTL', ...DC_DETAIL_COLS]
  const cols = allCols.filter(c => (lg[c] || 0) > 0 || (sam[c] || 0) > 0)
  const maxVal = Math.max(...cols.map(c => Math.max(lg[c] || 0, sam[c] || 0)), 1)
  const BAR_MAX = 80
  const bw = 36

  const ttlCol = cols.includes('TTL') ? 'TTL' : null
  const detailCols = cols.filter(c => c !== 'TTL')
  // TTL과 상세는 각각 독립 비율
  const ttlMax = ttlCol ? Math.max(lg['TTL'] || 0, sam['TTL'] || 0, 1) : 1
  const detailMax = Math.max(...detailCols.map(c => Math.max(lg[c] || 0, sam[c] || 0)), 1)

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

    return `<td style="vertical-align:bottom;text-align:center;padding:0 3px;">
      <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;width:100%;">
        <tr><td style="vertical-align:bottom;text-align:center;">
          <table border="0" cellpadding="0" cellspacing="0" align="center"><tr>
            <td style="vertical-align:bottom;text-align:center;padding:0 1px;">
              <table border="0" cellpadding="0" cellspacing="0" align="center">
                <tr><td style="font-size:13px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};text-align:center;padding-bottom:1px;">${fmtMan(lv, lang)}</td></tr>
                ${spacerL > 0 ? `<tr><td height="${spacerL}" style="font-size:0;">&nbsp;</td></tr>` : ''}
                <tr><td height="${lh}" style="font-size:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="${bw}" height="${lh}" style="background:${EM_RED};border-radius:3px 3px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
              </table>
            </td>
            ${hasSam ? `<td style="vertical-align:bottom;text-align:center;padding:0 1px;">
              <table border="0" cellpadding="0" cellspacing="0" align="center">
                <tr><td style="font-size:13px;font-weight:600;color:#94A3B8;font-family:${EM_FONT};text-align:center;padding-bottom:1px;">${fmtMan(sv, lang)}</td></tr>
                ${spacerS > 0 ? `<tr><td height="${spacerS}" style="font-size:0;">&nbsp;</td></tr>` : ''}
                <tr><td height="${sh}" style="font-size:0;"><table border="0" cellpadding="0" cellspacing="0" align="center"><tr><td width="${bw}" height="${sh}" style="background:#94A3B8;border-radius:3px 3px 0 0;font-size:0;">&nbsp;</td></tr></table></td></tr>
              </table>
            </td>` : ''}
          </tr></table>
        </td></tr>
        <tr><td style="font-size:${isTTL ? '14' : '13'}px;font-weight:700;color:#475569;font-family:${EM_FONT};padding-top:4px;text-align:center;white-space:nowrap;">${isTTL ? 'Total' : col}</td></tr>
        ${hasSam ? `<tr><td style="font-size:12px;font-weight:700;color:${gapColor};font-family:${EM_FONT};padding-top:2px;text-align:center;">${gapTxt}</td></tr>` : ''}
        ${isExp ? `<tr><td style="font-size:11px;color:#94A3B8;font-family:${EM_FONT};padding-top:1px;text-align:center;">LG Only</td></tr>` : ''}
      </table>
    </td>`
  }

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
                            </tr></table>
                          </td>
                        </tr></table>
                      </td>
                    </tr>
                    ${insightBlockHtml(meta.dotcomInsight, meta.showDotcomInsight, meta.dotcomHowToRead, meta.showDotcomHowToRead, lang)}
                    ${chartHtml}
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
  const PRD_KR = { tv:'TV', monitor:'모니터', audio:'오디오', fridge:'냉장고', washer:'세탁기', cooking:'Cooking', dw:'식기세척기', vacuum:'청소기', rac:'RAC', aircare:'Aircare' }
  const PRD_EN = { tv:'TV', monitor:'Monitor', audio:'Audio', fridge:'Refrigerator', washer:'Washer', cooking:'Cooking', dw:'Dishwasher', vacuum:'VC', rac:'RAC', aircare:'Aircare' }
  const PRD_BU = { tv:'MS', monitor:'MS', audio:'MS', fridge:'HS', washer:'HS', cooking:'HS', dw:'HS', vacuum:'HS', rac:'ES', aircare:'ES' }
  const PRD_ORDER_IDX = { tv:0, monitor:1, audio:2, washer:3, fridge:4, dw:5, vacuum:6, cooking:7, rac:8, aircare:9 }
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
  const insightHtml = insightBlockHtml(meta.citPrdInsight, meta.showCitPrdInsight, meta.citPrdHowToRead, meta.showCitPrdHowToRead, lang)
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
        <tr><td style="padding:8px 4px 0;font-size:10px;color:#64748B;font-family:${EM_FONT};line-height:1.5;font-style:italic;">* ${footnoteText}</td></tr>
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
    ? { title: 'Key Task Progress', monthly: monthLabel, prev: 'Last Month', progress: 'YTD Progress' }
    : { title: '핵심 과제 진척 사항', monthly: monthLabel, prev: '전월', progress: '연간 진척율' }
  function statusColor(rate) {
    if (rate >= 80) return { bg: '#F0FDF4', border: '#BBF7D0', bar: '#16A34A', text: '#15803D' }
    if (rate >= 50) return { bg: '#FFFBEB', border: '#FDE68A', bar: '#D97706', text: '#B45309' }
    return { bg: '#FEF2F2', border: '#FECACA', bar: '#DC2626', text: '#BE123C' }
  }
  const cards = categoryStats.map(c => {
    const ms = statusColor(c.monthRate || 0)
    const ps = statusColor(c.progressRate || 0)
    const prevMonthRate = c.prevMonthRate
    const hasPrev = prevMonthRate != null && prevMonthRate > 0
    const delta = hasPrev ? +((c.monthRate || 0) - prevMonthRate).toFixed(1) : null
    const deltaColor = delta == null ? '#94A3B8' : delta > 0 ? '#16A34A' : delta < 0 ? '#DC2626' : '#94A3B8'
    const deltaArrow = delta == null ? '' : delta > 0 ? '▲' : delta < 0 ? '▼' : '─'
    return `<td width="50%" valign="top" style="padding:6px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFFFFF;border:1.5px solid #E8EDF2;border-radius:10px;">
        <tr><td style="padding:12px 14px;">
          <p style="margin:0 0 10px;font-size:14px;font-weight:800;color:#1A1A1A;font-family:${EM_FONT};">${escapeHtml(categoryLabel(c.category, lang, c.categoryEn))}</p>
          <!-- 이번 월 -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:4px;">
            <tr>
              <td style="font-size:11px;color:#64748B;font-family:${EM_FONT};">${t.monthly} <span style="color:#94A3B8;">(${fmtN(c.monthActual)}/${fmtN(c.monthGoal)})</span></td>
              <td align="right" style="font-size:13px;font-weight:700;color:${ms.text};font-family:${EM_FONT};">${(c.monthRate || 0).toFixed(0)}%${hasPrev ? ` <span style="font-size:10px;font-weight:700;color:${deltaColor};">${deltaArrow}${Math.abs(delta).toFixed(0)}%p</span>` : ''}</td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#F1F5F9;border-radius:3px;margin-bottom:6px;">
            <tr><td height="6" style="font-size:0;line-height:0;">
              <table border="0" cellpadding="0" cellspacing="0" width="${Math.min(Math.round(c.monthRate || 0), 100)}%" style="background:${ms.bar};border-radius:3px;">
                <tr><td height="6" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td></tr>
          </table>
          ${hasPrev ? `
          <!-- 전월 -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:8px;">
            <tr>
              <td style="font-size:10px;color:#94A3B8;font-family:${EM_FONT};">${t.prev}</td>
              <td align="right" style="font-size:11px;font-weight:600;color:#64748B;font-family:${EM_FONT};">${prevMonthRate.toFixed(0)}%</td>
            </tr>
          </table>` : '<div style="height:8px"></div>'}
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
    <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom:12px;"><tr>
      <td width="3" style="background:${EM_RED};border-radius:2px;">&nbsp;</td>
      <td style="padding-left:8px;font-size:16px;font-weight:800;color:#0F172A;font-family:${EM_FONT};">${t.title}</td>
    </tr></table>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">${rows.join('')}</table>
  </div>`
}

function dashboardLinkButtonHtml(lang) {
  const base = 'https://my-geo-newsletter.onrender.com'
  const langSuffix = lang === 'en' ? '-EN' : '-KO'
  const url = `${base}/p/GEO-KPI-Dashboard${langSuffix}`
  const label = lang === 'en' ? 'Open Integrated Dashboard' : '통합 대시보드 바로가기'
  return `
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:16px;">
    <tr><td align="center">
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:48px;v-text-anchor:middle;width:100%;" arcsize="18%" strokecolor="${EM_RED}" fillcolor="${EM_RED}">
        <w:anchorlock/>
        <center style="color:#FFFFFF;font-family:'LGEIText','LG Smart',Arial,sans-serif;font-size:15px;font-weight:700;">${label}</center>
      </v:roundrect>
      <![endif]-->
      <!--[if !mso]><!-- -->
      <a href="${url}" target="_blank" rel="noopener" style="display:block;background:${EM_RED};border:1px solid ${EM_RED};border-radius:8px;color:#FFFFFF;font-family:${EM_FONT};font-size:15px;font-weight:700;line-height:48px;text-align:center;text-decoration:none;width:100%;">${label}</a>
      <!--<![endif]-->
    </td></tr>
  </table>`
}

// ─── 메인 생성 함수 ───────────────────────────────────────────────────────────
export { escapeHtml }

export function generateEmailHTML(meta, total, products, citations, dotcom = {}, lang = 'ko', productsCnty = [], citationsCnty = [], options = {}) {
  const { containerWidth = 920, showTrendTabs = false, weeklyLabels, categoryStats = null, unlaunchedMap = {}, productCardVersion = 'v1', trendMode = 'weekly' } = options
  const t = T[lang] || T.ko
  total = total || { score: 0, prev: 0, vsComp: 0, rank: 1, totalBrands: 12 }
  products = products || []
  const UL_PROD_MAP = { tv:'TV', monitor:'IT', audio:'AV', washer:'WM', fridge:'REF', dw:'DW', vacuum:'VC', cooking:'COOKING', rac:'RAC', aircare:'AIRCARE' }
  function getULCntys(prodId) {
    const code = UL_PROD_MAP[prodId] || (prodId || '').toUpperCase()
    return Object.keys(unlaunchedMap).filter(k => k.endsWith('|' + code)).map(k => k.split('|')[0])
  }
  // 영문본 제품명 매핑 (p.id 또는 p.kr 기준)
  const PROD_EN_NAME = {
    tv: 'TV', monitor: 'Monitor', audio: 'Audio',
    fridge: 'REF', washer: 'Washer', cooking: 'Cooking',
    dw: 'DW', vacuum: 'VC', rac: 'RAC', aircare: 'Aircare',
  }
  const PROD_EN_BY_KR = {
    'TV': 'TV', '모니터': 'Monitor', '오디오': 'Audio',
    '냉장고': 'REF', '세탁기': 'Washer', 'Cooking': 'Cooking',
    '식기세척기': 'DW', '청소기': 'VC', 'RAC': 'RAC', 'Aircare': 'Aircare',
  }
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
      const displayName = lang === 'en'
        ? (PROD_EN_NAME[(p.id || '').toLowerCase()] || PROD_EN_BY_KR[p.kr] || p.kr)
        : p.kr
      const cntys = getULCntys(p.id || p.category).map(c => cntyLabel(c, lang)).join(', ')
      return `${displayName} : ${cntys}`
    })
  const ulIntro = lang === 'en'
    ? 'Unlaunched countries are shown in gray status'
    : '제품 미출시 국가는 신호등 회색으로 표기함'
  const productFootnoteHtml = ulFootnoteParts.length
    ? `<p style="margin:12px 16px 0;font-size:11px;color:#64748B;font-family:${EM_FONT};line-height:1.6;">* ${ulIntro} (${ulFootnoteParts.join(' / ')})</p>`
    : ''

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
<body style="margin:0;padding:0;background-color:#F1F5F9;overflow-x:hidden;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:${EM_FONT};">

<table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F1F5F9;">
  <tr>
    <td align="center" style="padding:24px 12px;">

      <!-- 메인 컨테이너 -->
      <table border="0" cellpadding="0" cellspacing="0" width="${containerWidth}" style="width:${containerWidth}px;max-width:${containerWidth}px;table-layout:fixed;background:#FFFFFF;border-radius:16px;font-family:${EM_FONT};">

        <!-- ══ 헤더 상단 레드 바 ══ -->
        <tr>
          <td style="background:${EM_RED};padding:10px 16px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:15px;font-weight:700;color:#FFCCD8;font-family:${EM_FONT};">LG ELECTRONICS</td>
                <td align="right" style="font-size:14px;color:#FFB0C0;font-family:${EM_FONT};">${escapeHtml(meta.reportNo)} · ${escapeHtml(meta.period)}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ══ 헤더 타이틀 ══ -->
        <tr>
          <td style="background:#FFFFFF;padding:26px 28px 16px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:14px;color:#94A3B8;font-family:${EM_FONT};font-weight:400;">${escapeHtml(meta.reportType || (lang === 'en' ? 'GEO Monthly Performance Report' : 'GEO 월간 성과 분석 리포트'))}</td>
                <td align="right" style="font-size:14px;color:#94A3B8;font-family:${EM_FONT};font-weight:400;">${escapeHtml(meta.team)}</td>
              </tr>
            </table>
            <p style="margin:16px 0 10px;text-align:center;line-height:1.2;">
              <span style="font-size:${meta.titleFontSize || 24}px;font-weight:700;color:${meta.titleColor || '#1A1A1A'};font-family:${EM_FONT};">${escapeHtml(meta.title || (lang === 'en' ? 'Generative AI Engine Visibility Performance Analysis' : '생성형 AI 엔진 가시성(Visibility) 성과 분석'))}</span>
            </p>
            <p style="margin:0;text-align:center;">
              <span style="font-size:18px;color:#475569;font-family:${EM_FONT};font-weight:400;">${escapeHtml(meta.dateLine || (lang === 'en' ? 'As of ' + meta.period : meta.period + ' 기준'))}</span>
            </p>
            ${meta.showNotice && meta.noticeText ? `
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr><td height="14" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr>
                <td style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:14px 20px;">
                  <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};">${t.notice}</p>
                  <p style="margin:0;font-size:14px;color:#1A1A1A;font-family:${EM_FONT};line-height:21px;">${mdBold(meta.noticeText)}</p>
                </td>
              </tr>
            </table>` : ''}
            ${meta.showKpiLogic && meta.kpiLogicText ? `
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr><td height="14" style="font-size:0;line-height:0;">&nbsp;</td></tr>
              <tr>
                <td style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:14px 20px;">
                  <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#64748B;font-family:${EM_FONT};">${t.kpiLogic}</p>
                  <p style="margin:0;font-size:14px;color:#475569;font-family:${EM_FONT};line-height:22px;">${mdBold(meta.kpiLogicText)}</p>
                </td>
              </tr>
            </table>` : ''}
          </td>
        </tr>
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
                        ${meta.totalInsight ? `
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr><td height="16" style="font-size:0;line-height:0;">&nbsp;</td></tr>
                          <tr>
                            <td style="padding:14px 16px;background:#1E0F18;border:1px solid #3D1528;border-radius:10px;">
                              <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:${EM_RED};text-transform:uppercase;font-family:${EM_FONT};">INSIGHT</p>
                              <p style="margin:0;font-size:15px;color:#FFFFFF;line-height:24px;font-family:${EM_FONT};">${mdBold(meta.totalInsight)}</p>
                            </td>
                          </tr>
                        </table>` : ''}
                        <!-- 대시보드 바로가기 버튼은 Action Plan 섹션 아래로 이동됨 -->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

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
                    ${insightBlockHtml(meta.productInsight, meta.showProductInsight, meta.productHowToRead, meta.showProductHowToRead, lang)}
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
                    ${insightBlockHtml(meta.citationInsight, meta.showCitationInsight, meta.citationHowToRead, meta.showCitationHowToRead, lang)}
                    <tr>
                      <td style="padding:16px 12px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
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

              ${meta.showDotcom !== false ? dotcomSectionHtml(dotcom, meta, lang) : ''}

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
                        ${meta.todoNotice ? `
                        <!-- 1. 전사 핵심 과제 노티스 -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#FFF4F7;border:1px solid #F5CCD8;border-radius:10px;margin-bottom:16px;">
                          <tr><td style="padding:14px 16px;">
                            <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:${EM_RED};font-family:${EM_FONT};text-transform:uppercase;">${lang === 'en' ? 'Key Initiative' : '전사 핵심 과제'}</p>
                            <p style="margin:0;font-size:14px;color:#1A1A1A;line-height:22px;font-family:${EM_FONT};">${mdBold(meta.todoNotice)}</p>
                          </td></tr>
                        </table>` : ''}
                        ${meta.todoText ? `
                        <!-- 2. 인사이트 -->
                        <p style="margin:0 0 16px;font-size:14px;color:#1A1A1A;line-height:22px;font-family:${EM_FONT};">${mdBold(meta.todoText)}</p>` : ''}
                        <!-- 3. 핵심 과제 진척 사항 -->
                        ${categoryCardsHtml(categoryStats, lang, meta)}
                        ${dashboardLinkButtonHtml(lang)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>` : ''}

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
</body>
</html>`
}
