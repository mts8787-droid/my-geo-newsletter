// Chart Library HTML 생성기 — 14 차트 양식 + 1 직교 패턴 카탈로그
// 서버 라우트 (routes/chart-library.js) + sync-harness 정적 미러 (docs/agents/CHART_LIBRARY.html) 양쪽에서 사용.

// ─── SVG 예시용 색상 토큰 (CHART_CATALOG 보다 먼저 — TDZ 회피) ────────────
const W = 220, H = 80
const BG = '#0F172A'
const RED = '#CF0652'
const BLUE = '#60A5FA'
const GREEN = '#4ADE80'
const GRAY = '#64748B'

// ─── 차트 분류 정의 ──────────────────────────────────────────────────────────
// 분류 코드: L (Line), B (Bar), M (Mixed/Combo), D (Doughnut), R (Radar), BU (Bubble), T (Tooltip)
// 각 코드는 design.md §5.11~5.14 의 양식과 매핑.

export const CHART_CATALOG = [
  // ─── L: Line (7종) ─────────────────────────────────────────────────────────
  { code: 'L-1', category: 'line', name: 'Basic Line', desc: '기본 직선 라인 — 가장 단순. 카드 미니 트렌드의 기본.', usage: '대시보드 카드 미니 트렌드 (svgLine)', svg: svgBasic() },
  { code: 'L-2', category: 'line', name: 'Interpolation (곡선)', desc: 'Q/C Bezier 곡선 연결. 본 레포 미사용 (시각 일관성 위해 직선만).', usage: '미사용', svg: svgInterpolation() },
  { code: 'L-3', category: 'line', name: 'Multi-axis', desc: '좌/우 Y축 분리 — 단위 다른 두 series.', usage: '미사용 (도입 후보: KPI % + 호출 수)', svg: svgMultiAxis() },
  { code: 'L-4', category: 'line', name: 'Point Styling', desc: '점 모양 / 크기 / 색 커스터마이즈. 베이스라인 시작점만 사용.', usage: '베이스라인 시작점 (검정 fill + 컬러 stroke)', svg: svgPointStyle() },
  { code: 'L-5', category: 'line', name: 'Segments', desc: '구간별 다른 시각 (색 / 두께 / dash). fadeBeforeIdx 가 이 컨셉.', usage: '베이스라인 fade (pre 회색 / post 컬러)', svg: svgSegments() },
  { code: 'L-6', category: 'line', name: 'Stepped', desc: '계단형 (직각 연결). step-change 데이터 시 적합.', usage: '미사용 (도입 후보: 분기 데이터, 정책 변경 시점)', svg: svgStepped() },
  { code: 'L-7', category: 'line', name: 'Styling', desc: '색 / 두께 / dash 패턴. dashed 베이스라인 수직선 / 비교군 회색.', usage: 'dashed 베이스라인, 비교군 라인 회색', svg: svgStyling() },

  // ─── B: Bar (2종 — 스택) ──────────────────────────────────────────────────
  { code: 'B-1', category: 'bar', name: 'Stacked Bar', desc: '단일 스택 — 카테고리당 1 컬럼 누적 (part-to-whole).', usage: '미사용 (도입 후보: BU별 누적, Citation type 누적)', svg: svgStackedBar() },
  { code: 'B-2', category: 'bar', name: 'Stacked Groups', desc: '카테고리당 N stack 가로 나란히 (그룹 간 비교).', usage: '미사용 (도입 후보: KR vs EN, LG vs Samsung 누적)', svg: svgStackedGroups() },

  // ─── M: Mixed / Combo (2종) ──────────────────────────────────────────────
  { code: 'M-1', category: 'mixed', name: 'Combo Bar+Line', desc: 'Bar (절댓값) + Line (추세) 단일 Y축. 도입 후보: KPI 값 + 증가율.', usage: '미사용', svg: svgComboBarLine() },
  { code: 'M-2', category: 'mixed', name: 'Stacked Bar+Line', desc: '누적 막대 + 합계 추세 라인 overlay. 도입 후보: BU 누적 + 평균 추세.', usage: '미사용', svg: svgStackedComboLine() },

  // ─── D: Doughnut (1) ─────────────────────────────────────────────────────
  { code: 'D-1', category: 'doughnut', name: 'Doughnut', desc: 'cutout 비중 시각화. 5 슬라이스 이하. 도입 후보: observability type 분포.', usage: '미사용', svg: svgDoughnut() },

  // ─── R: Radar (1) ────────────────────────────────────────────────────────
  { code: 'R-1', category: 'radar', name: 'Radar (skip points)', desc: 'polar 다차원 metric 비교. 8 axis 이하 / 3 dataset 이하.', usage: '미사용 (도입 후보: 카테고리별 8 metric 비교)', svg: svgRadar() },

  // ─── BU: Bubble (1) ──────────────────────────────────────────────────────
  { code: 'BU-1', category: 'bubble', name: 'Bubble', desc: 'X / Y / radius 3차원. 본 레포 4분면 점도표 (C-15) 는 단순화 형태.', usage: '미사용 (4분면 C-15 만)', svg: svgBubble() },

  // ─── T: Tooltip (직교 — 모든 차트에) ──────────────────────────────────────
  { code: 'T-1', category: 'tooltip', name: 'Tooltip (직교 패턴)', desc: '모든 차트와 엮어 사용. <title> 또는 Custom DOM. 차트 양식과 직교.', usage: '향후 차트별 hover 정보 표시', svg: svgTooltip() },
]

const CATEGORY_LABELS = {
  line:     { label: 'L — 라인 차트', color: '#60A5FA', desc: 'Line — 시계열 / 트렌드' },
  bar:      { label: 'B — 바 차트',    color: '#F472B6', desc: 'Bar — 카테고리 비교 / 누적' },
  mixed:    { label: 'M — 콤보 차트', color: '#A78BFA', desc: 'Mixed — Bar + Line 결합' },
  doughnut: { label: 'D — 도넛 차트', color: '#FBBF24', desc: 'Doughnut — 비중 / 점유율' },
  radar:    { label: 'R — 레이더 차트', color: '#4ADE80', desc: 'Radar — 다차원 metric' },
  bubble:   { label: 'BU — 버블 차트', color: '#22D3EE', desc: 'Bubble — 3변수 (X/Y/r)' },
  tooltip:  { label: 'T — 툴팁 (직교)', color: '#FCA5A5', desc: 'Tooltip — 모든 차트에 추가 가능' },
}

// ─── 예시 SVG 함수 ────────────────────────────────────────────────────────
function svgFrame(inner) {
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:${W}px;background:${BG};border-radius:6px">${inner}</svg>`
}

function svgBasic() {
  return svgFrame(`
    <path d="M 10 60 L 50 40 L 90 50 L 130 30 L 170 35 L 210 20" stroke="${RED}" stroke-width="1.5" fill="none"/>
    <circle cx="10" cy="60" r="2.5" fill="${RED}"/>
    <circle cx="50" cy="40" r="2.5" fill="${RED}"/>
    <circle cx="90" cy="50" r="2.5" fill="${RED}"/>
    <circle cx="130" cy="30" r="2.5" fill="${RED}"/>
    <circle cx="170" cy="35" r="2.5" fill="${RED}"/>
    <circle cx="210" cy="20" r="2.5" fill="${RED}"/>
  `)
}

function svgInterpolation() {
  return svgFrame(`
    <path d="M 10 60 Q 30 30 50 40 T 90 50 T 130 30 T 170 35 T 210 20" stroke="${RED}" stroke-width="1.5" fill="none"/>
    <circle cx="10" cy="60" r="2.5" fill="${RED}"/>
    <circle cx="90" cy="50" r="2.5" fill="${RED}"/>
    <circle cx="170" cy="35" r="2.5" fill="${RED}"/>
    <circle cx="210" cy="20" r="2.5" fill="${RED}"/>
  `)
}

function svgMultiAxis() {
  return svgFrame(`
    <text x="2" y="14" font-size="8" fill="${BLUE}" font-family="Arial">%</text>
    <text x="208" y="14" font-size="8" fill="${RED}" font-family="Arial" text-anchor="start">N</text>
    <path d="M 14 55 L 54 40 L 94 45 L 134 30 L 174 38 L 210 25" stroke="${BLUE}" stroke-width="1.5" fill="none"/>
    <path d="M 14 30 L 54 50 L 94 35 L 134 60 L 174 45 L 210 55" stroke="${RED}" stroke-width="1.5" fill="none" stroke-dasharray="3,3"/>
  `)
}

function svgPointStyle() {
  return svgFrame(`
    <path d="M 10 60 L 50 40 L 90 50 L 130 30 L 170 35 L 210 20" stroke="${RED}" stroke-width="1.5" fill="none"/>
    <circle cx="10" cy="60" r="2.5" fill="${RED}"/>
    <circle cx="50" cy="40" r="2.5" fill="${RED}"/>
    <circle cx="90" cy="50" r="4" fill="#000" stroke="${RED}" stroke-width="2"/>
    <circle cx="130" cy="30" r="2.5" fill="${RED}"/>
    <rect x="167" y="32" width="6" height="6" fill="${RED}"/>
    <polygon points="210,15 205,24 215,24" fill="${RED}"/>
  `)
}

function svgSegments() {
  return svgFrame(`
    <path d="M 10 60 L 50 50 L 90 55" stroke="${GRAY}" stroke-width="1.5" opacity="0.85" fill="none"/>
    <circle cx="10" cy="60" r="2.5" fill="${GRAY}" opacity="0.85"/>
    <circle cx="50" cy="50" r="2.5" fill="${GRAY}" opacity="0.85"/>
    <line x1="110" y1="10" x2="110" y2="70" stroke="${GRAY}" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="113" y="20" font-size="7" fill="${GRAY}" font-family="Arial">*Baseline</text>
    <path d="M 110 40 L 150 30 L 190 35 L 210 20" stroke="${RED}" stroke-width="1.5" fill="none"/>
    <circle cx="110" cy="40" r="4" fill="#000" stroke="${RED}" stroke-width="2"/>
    <circle cx="150" cy="30" r="2.5" fill="${RED}"/>
    <circle cx="190" cy="35" r="2.5" fill="${RED}"/>
    <circle cx="210" cy="20" r="2.5" fill="${RED}"/>
  `)
}

function svgStepped() {
  return svgFrame(`
    <path d="M 10 60 H 50 V 40 H 90 V 50 H 130 V 30 H 170 V 35 H 210" stroke="${RED}" stroke-width="1.5" fill="none"/>
    <circle cx="10" cy="60" r="2.5" fill="${RED}"/>
    <circle cx="50" cy="40" r="2.5" fill="${RED}"/>
    <circle cx="90" cy="50" r="2.5" fill="${RED}"/>
    <circle cx="130" cy="30" r="2.5" fill="${RED}"/>
    <circle cx="170" cy="35" r="2.5" fill="${RED}"/>
  `)
}

function svgStyling() {
  return svgFrame(`
    <path d="M 10 60 L 50 40 L 90 50 L 130 30 L 170 35 L 210 20" stroke="${RED}" stroke-width="2" fill="none"/>
    <path d="M 10 70 L 50 55 L 90 60 L 130 50 L 170 52 L 210 40" stroke="${BLUE}" stroke-width="1.5" stroke-dasharray="3,3" fill="none"/>
    <path d="M 10 45 L 50 35 L 90 38 L 130 28 L 170 25 L 210 18" stroke="${GRAY}" stroke-width="1" opacity="0.85" fill="none"/>
  `)
}

function svgStackedBar() {
  let s = ''
  const data = [[30,15,12], [25,20,15], [20,25,18], [35,18,10], [22,22,20], [28,18,12], [30,20,15]]
  data.forEach((cat, i) => {
    const x = 14 + i * 28
    let y = 70
    const colors = [RED, BLUE, GREEN]
    cat.forEach((h, j) => {
      y -= h * 0.7
      s += `<rect x="${x}" y="${y}" width="20" height="${h * 0.7}" fill="${colors[j]}"/>`
    })
  })
  return svgFrame(s)
}

function svgStackedGroups() {
  let s = ''
  const groups = [
    { data: [[20,15], [25,12], [18,10], [22,14], [16,18], [20,12], [24,15]], colors: [RED, '#F472B6'], xOff: 0 },
    { data: [[18], [22], [15], [25], [20], [16], [22]],                       colors: [BLUE], xOff: 10 },
  ]
  groups.forEach(g => {
    g.data.forEach((cat, i) => {
      const x = 12 + i * 28 + g.xOff
      let y = 70
      cat.forEach((h, j) => {
        y -= h * 0.9
        s += `<rect x="${x}" y="${y}" width="8" height="${h * 0.9}" fill="${g.colors[j]}"/>`
      })
    })
  })
  return svgFrame(s)
}

function svgComboBarLine() {
  let s = ''
  const data = [40, 50, 35, 55, 60, 45, 65]
  data.forEach((v, i) => {
    const x = 14 + i * 28
    const h = v * 0.7
    s += `<rect x="${x}" y="${70 - h}" width="18" height="${h}" fill="${BLUE}" opacity="0.8"/>`
  })
  s += `<path d="M 23 35 L 51 28 L 79 38 L 107 25 L 135 22 L 163 30 L 191 18" stroke="${RED}" stroke-width="2" fill="none"/>`
  data.forEach((_, i) => s += `<circle cx="${23 + i * 28}" cy="${[35,28,38,25,22,30,18][i]}" r="2.5" fill="${RED}"/>`)
  return svgFrame(s)
}

function svgStackedComboLine() {
  let s = ''
  const data = [[20,15], [25,18], [18,20], [28,15], [22,22], [20,18], [25,20]]
  data.forEach((cat, i) => {
    const x = 14 + i * 28
    let y = 70
    const colors = [RED, BLUE]
    cat.forEach((h, j) => {
      y -= h * 0.7
      s += `<rect x="${x}" y="${y}" width="18" height="${h * 0.7}" fill="${colors[j]}" opacity="0.8"/>`
    })
  })
  const totals = data.map(c => c.reduce((a,b)=>a+b,0))
  const lineY = totals.map(t => 70 - t * 0.7 - 5)
  let path = `M 23 ${lineY[0]}`
  lineY.forEach((y, i) => { if (i > 0) path += ` L ${23 + i * 28} ${y}` })
  s += `<path d="${path}" stroke="${GREEN}" stroke-width="2" fill="none"/>`
  lineY.forEach((y, i) => s += `<circle cx="${23 + i * 28}" cy="${y}" r="2.5" fill="${GREEN}"/>`)
  return svgFrame(s)
}

function svgDoughnut() {
  // SVG arc path 5 슬라이스
  const cx = W / 2, cy = H / 2, r = 30, ir = 16
  const slices = [
    { val: 30, color: RED },
    { val: 25, color: BLUE },
    { val: 20, color: GREEN },
    { val: 15, color: '#FBBF24' },
    { val: 10, color: '#A78BFA' },
  ]
  let acc = 0
  let s = ''
  slices.forEach(slice => {
    const start = (acc / 100) * Math.PI * 2 - Math.PI / 2
    acc += slice.val
    const end = (acc / 100) * Math.PI * 2 - Math.PI / 2
    const x0 = cx + r * Math.cos(start), y0 = cy + r * Math.sin(start)
    const x1 = cx + r * Math.cos(end),   y1 = cy + r * Math.sin(end)
    const ix0 = cx + ir * Math.cos(start), iy0 = cy + ir * Math.sin(start)
    const ix1 = cx + ir * Math.cos(end),   iy1 = cy + ir * Math.sin(end)
    const large = (end - start) > Math.PI ? 1 : 0
    s += `<path d="M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} L ${ix1.toFixed(1)} ${iy1.toFixed(1)} A ${ir} ${ir} 0 ${large} 0 ${ix0.toFixed(1)} ${iy0.toFixed(1)} Z" fill="${slice.color}"/>`
  })
  return svgFrame(s)
}

function svgRadar() {
  const cx = W / 2, cy = H / 2, r = 30
  const axes = 6
  // 그리드
  let s = ''
  for (let lvl = 1; lvl <= 3; lvl++) {
    const lr = (r / 3) * lvl
    let pts = ''
    for (let i = 0; i < axes; i++) {
      const a = (i / axes) * Math.PI * 2 - Math.PI / 2
      pts += `${(cx + lr * Math.cos(a)).toFixed(1)},${(cy + lr * Math.sin(a)).toFixed(1)} `
    }
    s += `<polygon points="${pts}" fill="none" stroke="${GRAY}" stroke-width="0.5" opacity="0.4"/>`
  }
  // 축
  for (let i = 0; i < axes; i++) {
    const a = (i / axes) * Math.PI * 2 - Math.PI / 2
    s += `<line x1="${cx}" y1="${cy}" x2="${(cx + r * Math.cos(a)).toFixed(1)}" y2="${(cy + r * Math.sin(a)).toFixed(1)}" stroke="${GRAY}" stroke-width="0.5" opacity="0.4"/>`
  }
  // 데이터 (1개)
  const data = [0.8, 0.6, 0.9, 0.5, 0.7, 0.85]
  let dPts = ''
  data.forEach((v, i) => {
    const a = (i / axes) * Math.PI * 2 - Math.PI / 2
    dPts += `${(cx + r * v * Math.cos(a)).toFixed(1)},${(cy + r * v * Math.sin(a)).toFixed(1)} `
  })
  s += `<polygon points="${dPts}" fill="${RED}" fill-opacity="0.3" stroke="${RED}" stroke-width="1.5"/>`
  return svgFrame(s)
}

function svgBubble() {
  const bubbles = [
    { x: 40, y: 50, r: 8, c: RED },
    { x: 80, y: 30, r: 14, c: BLUE },
    { x: 120, y: 45, r: 6, c: GREEN },
    { x: 160, y: 25, r: 11, c: '#FBBF24' },
    { x: 195, y: 55, r: 9, c: '#A78BFA' },
  ]
  return svgFrame(bubbles.map(b =>
    `<circle cx="${b.x}" cy="${b.y}" r="${b.r}" fill="${b.c}" opacity="0.5" stroke="${b.c}" stroke-width="1.5"/>`
  ).join(''))
}

function svgTooltip() {
  return svgFrame(`
    <path d="M 10 60 L 50 40 L 90 50 L 130 30 L 170 35 L 210 20" stroke="${RED}" stroke-width="1.5" fill="none"/>
    <circle cx="130" cy="30" r="3.5" fill="${RED}" stroke="#fff" stroke-width="1"/>
    <rect x="140" y="10" width="60" height="22" rx="4" fill="#1E293B" stroke="#334155"/>
    <text x="145" y="20" font-size="6" fill="#F8FAFC" font-family="Arial">Mar 2026</text>
    <text x="145" y="28" font-size="6" fill="#CBD5E1" font-family="Arial">LG: 85.5%</text>
    <line x1="130" y1="33" x2="140" y2="22" stroke="#334155" stroke-width="0.5"/>
  `)
}

// ─── 페이지 HTML 생성 ────────────────────────────────────────────────────────
function escHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

export function renderChartLibraryHTML({ adminMode = false } = {}) {
  // 카테고리별 그룹
  const grouped = {}
  for (const item of CHART_CATALOG) {
    if (!grouped[item.category]) grouped[item.category] = []
    grouped[item.category].push(item)
  }

  const sectionsHtml = Object.keys(CATEGORY_LABELS).map(cat => {
    const items = grouped[cat] || []
    if (!items.length) return ''
    const meta = CATEGORY_LABELS[cat]
    const cards = items.map(it => `
      <div class="chart-card">
        <div class="chart-code" style="color:${meta.color}">${escHtml(it.code)}</div>
        <div class="chart-name">${escHtml(it.name)}</div>
        <div class="chart-svg">${it.svg}</div>
        <div class="chart-desc">${escHtml(it.desc)}</div>
        <div class="chart-usage"><strong>사용:</strong> ${escHtml(it.usage)}</div>
        <div class="chart-cmd">스킬 호출 예시: <code>"${escHtml(it.code)} 차트 그려줘"</code></div>
      </div>
    `).join('')
    return `<div class="section">
      <h2 class="section-title" style="border-color:${meta.color}">${escHtml(meta.label)}</h2>
      <p class="section-desc">${escHtml(meta.desc)}</p>
      <div class="chart-grid">${cards}</div>
    </div>`
  }).join('')

  const topBar = adminMode
    ? '<div class="top"><a class="back" href="/admin/">← 관리자</a><a class="back" href="/admin/harness" style="margin-left:14px">→ Harness Mirror</a></div>'
    : '<div class="top"><span style="font-size:11px;color:#64748B">정적 미러 — /admin/chart-library 의 그 시점 스냅샷</span></div>'

  return `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Chart Library — 14 차트 양식 분류 카탈로그</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0F172A;color:#E2E8F0;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:28px 32px;line-height:1.6;max-width:1400px;margin:0 auto}
.top{display:flex;align-items:center;margin-bottom:18px;flex-wrap:wrap;gap:12px}
.back{color:#CF0652;text-decoration:none;font-size:13px}
h1{font-size:26px;color:#F8FAFC;margin-bottom:6px}
.sub{font-size:13px;color:#64748B;margin-bottom:24px}
.intro{background:#1E293B;border:1px solid #334155;border-radius:12px;padding:18px 22px;margin-bottom:24px;font-size:13px;color:#CBD5E1}
.intro strong{color:#F8FAFC}
.intro code{background:#0F172A;color:#F8C4D7;padding:2px 8px;border-radius:4px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px}
.section{margin-bottom:28px}
.section-title{font-size:18px;font-weight:700;color:#F8FAFC;border-left:3px solid;padding-left:12px;margin-bottom:6px}
.section-desc{font-size:12px;color:#94A3B8;margin-bottom:14px;padding-left:15px}
.chart-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}
.chart-card{background:#1E293B;border:1px solid #334155;border-radius:10px;padding:14px 16px;transition:border-color .15s}
.chart-card:hover{border-color:#CF0652}
.chart-code{font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;font-family:ui-monospace,Menlo,Consolas,monospace}
.chart-name{font-size:14px;font-weight:700;color:#F8FAFC;margin-bottom:10px}
.chart-svg{margin-bottom:10px}
.chart-desc{font-size:12px;color:#CBD5E1;margin-bottom:8px;line-height:1.5}
.chart-usage{font-size:11px;color:#94A3B8;margin-bottom:6px}
.chart-usage strong{color:#CBD5E1}
.chart-cmd{font-size:10px;color:#64748B;border-top:1px solid #334155;padding-top:6px;margin-top:6px}
.chart-cmd code{background:#0F172A;color:#F8C4D7;padding:1px 6px;border-radius:3px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:10px}
</style></head><body>

${topBar}

<h1>Chart Library — 차트 분류 카탈로그</h1>
<p class="sub">14 차트 양식 + 1 직교 패턴 (툴팁) — 분류 코드 + 예시 SVG + 본 레포 사용 위치</p>

<div class="intro">
  <p><strong>분류 코드 체계</strong> — 스킬에서 차트 호출 시 사용:</p>
  <p style="margin-top:8px;font-size:12px">
    <code>L-1 ~ L-7</code> 라인 ·
    <code>B-1, B-2</code> 바 ·
    <code>M-1, M-2</code> 콤보 ·
    <code>D-1</code> 도넛 ·
    <code>R-1</code> 레이더 ·
    <code>BU-1</code> 버블 ·
    <code>T-1</code> 툴팁 (직교)
  </p>
  <p style="margin-top:10px;font-size:12px">사용 예시: <code>"L-1 차트 그려줘"</code> · <code>"B-2 그룹 스택 사용"</code> · <code>"M-1 콤보 차트 + T-1 툴팁"</code></p>
  <p style="margin-top:10px;font-size:11px;color:#94A3B8">상세 SVG 패턴 · 데이터 shape · ANTI-PATTERN 은 <code>.claude/rules/design.md</code> §5.11 ~ §5.14 참조.</p>
</div>

${sectionsHtml}

</body></html>`
}
