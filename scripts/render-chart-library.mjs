// Chart Library HTML 생성기 — 14 차트 양식 + 1 직교 패턴 카탈로그
// 서버 라우트 (routes/chart-library.js) + sync-harness 정적 미러 (docs/agents/CHART_LIBRARY.html) 양쪽에서 사용.

import { themeStyle, themeToggleButton } from '../lib/theme.js'

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
  { code: 'L-2', category: 'line', name: 'Interpolation (곡선)', desc: 'Q/C Bezier 곡선 연결. 본 저장소 미사용 (시각 일관성 위해 직선만).', usage: '미사용', svg: svgInterpolation() },
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

  // ─── V: Vertical Bar (본 저장소 — Chart.js 표준 외) ─────────────────────────
  { code: 'V-1', category: 'vbar', name: '그룹 막대 (vbar)', desc: '본 저장소 C-05. 카테고리당 N 개 막대 가로 나란히. _citVBar 헬퍼 + scale 파라미터.', usage: 'dashboard / citation 의 카테고리별 vbar (Reddit/YouTube 등)', svg: svgVbarGroup() },

  // ─── HB: Horizontal Bar (본 저장소 — Top N) ─────────────────────────────────
  { code: 'HB-1', category: 'hbar', name: '가로 막대 (Top N)', desc: '본 저장소 C-06. 도메인 / 채널 랭킹용. Top N 정렬 + 비중 표시.', usage: 'citation 의 도메인 Top N 랭킹', svg: svgHbarTopN() },

  // ─── BP: Bump (본 저장소 — 도메인 순위 변화) ────────────────────────────────
  { code: 'BP-1', category: 'bump', name: '범프 차트 (Bump)', desc: '본 저장소 C-09. 순위 변화 시각화. viewBox 비율 + linecap=round + 폰트 +3pt + 하단 여백 +20px.', usage: 'citation 의 카테고리 / 도메인 월별 랭킹 변화 (bumpChartSvg)', svg: svgBump() },

  // ─── MT: Mini Trend (본 저장소 — 이메일 호환) ───────────────────────────────
  { code: 'MT-1', category: 'mini', name: '미니 트렌드 바 (메일 호환)', desc: '본 저장소 C-10. SVG 미지원 클라이언트 (Outlook 등) 용 table-layout 기반.', usage: '뉴스레터 / 이메일 본문 (emailTemplate.js)', svg: svgMiniTrend() },

  // ─── D: Doughnut (1) + Pie (본 저장소) ─────────────────────────────────────
  { code: 'D-1', category: 'doughnut', name: 'Doughnut', desc: 'cutout 비중 시각화. 5 슬라이스 이하. 도입 후보: observability type 분포.', usage: '미사용', svg: svgDoughnut() },
  { code: 'D-2', category: 'doughnut', name: 'Pie (본 저장소 C-19)', desc: '본 저장소 C-19 — Doughnut 의 cutout 없는 변종. citation 비중 표시.', usage: 'citation 카테고리 비중 (cutout=0)', svg: svgPie() },

  // ─── R: Radar (1) ────────────────────────────────────────────────────────
  { code: 'R-1', category: 'radar', name: 'Radar (skip points)', desc: 'polar 다차원 metric 비교. 8 axis 이하 / 3 dataset 이하.', usage: '미사용 (도입 후보: 카테고리별 8 metric 비교)', svg: svgRadar() },

  // ─── BU: Bubble (1) + 4분면 (본 저장소) ────────────────────────────────────
  { code: 'BU-1', category: 'bubble', name: 'Bubble', desc: 'X / Y / radius 3차원.', usage: '미사용', svg: svgBubble() },
  { code: 'BU-2', category: 'bubble', name: '4분면 점도표 (본 저장소 C-20)', desc: '본 저장소 C-20 — Bubble 의 r 고정 단순화. X/Y 만으로 4 사분면 분류.', usage: 'tracker / KPI 분석 4사분면 (impact × effort 등)', svg: svgQuadrant() },

  // ─── T: Tooltip (직교 — 모든 차트에) ──────────────────────────────────────
  { code: 'T-1', category: 'tooltip', name: 'Tooltip (직교 패턴)', desc: '모든 차트와 엮어 사용. <title> 또는 Custom DOM. 차트 양식과 직교.', usage: '향후 차트별 hover 정보 표시', svg: svgTooltip() },
]

const CATEGORY_LABELS = {
  line:     { label: 'L — 라인 차트',         color: '#60A5FA', desc: 'Line — 시계열 / 트렌드' },
  bar:      { label: 'B — 바 차트 (스택)',     color: '#F472B6', desc: 'Bar — 카테고리 누적 (Chart.js 표준)' },
  vbar:     { label: 'V — 그룹 막대 (본 저장소)', color: '#EC4899', desc: 'Vbar — 카테고리당 N 개 막대 (그룹)' },
  hbar:     { label: 'HB — 가로 막대 (Top N)', color: '#DB2777', desc: 'Horizontal Bar — 랭킹 / Top N' },
  mixed:    { label: 'M — 콤보 차트',           color: '#A78BFA', desc: 'Mixed — Bar + Line 결합' },
  bump:     { label: 'BP — 범프 차트',          color: '#C084FC', desc: 'Bump — 순위 변화 시각화' },
  mini:     { label: 'MT — 미니 트렌드',        color: '#94A3B8', desc: 'Mini Trend — 이메일 호환 (table-layout)' },
  doughnut: { label: 'D — 도넛 / 파이',          color: '#FBBF24', desc: 'Doughnut / Pie — 비중 / 점유율' },
  radar:    { label: 'R — 레이더 차트',         color: '#4ADE80', desc: 'Radar — 다차원 metric' },
  bubble:   { label: 'BU — 버블 / 4분면',        color: '#22D3EE', desc: 'Bubble / Quadrant — 3변수 (X/Y/r) 또는 4사분면' },
  tooltip:  { label: 'T — 툴팁 (직교)',          color: '#FCA5A5', desc: 'Tooltip — 모든 차트에 추가 가능' },
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

function svgVbarGroup() {
  let s = ''
  const data = [[40,28,18], [35,30,22], [42,25,15], [38,32,25], [45,30,20], [40,35,18], [42,28,22]]
  data.forEach((cat, i) => {
    const x = 14 + i * 28
    const colors = [RED, BLUE, GREEN]
    cat.forEach((h, j) => {
      s += `<rect x="${x + j * 6}" y="${70 - h * 1.2}" width="5" height="${h * 1.2}" fill="${colors[j]}"/>`
    })
  })
  return svgFrame(s)
}

function svgHbarTopN() {
  let s = ''
  const data = [
    { label: 'reddit.com',   val: 92, color: RED },
    { label: 'youtube.com',  val: 78, color: BLUE },
    { label: 'twitter.com',  val: 65, color: GREEN },
    { label: 'medium.com',   val: 52, color: '#FBBF24' },
    { label: 'github.com',   val: 38, color: '#A78BFA' },
  ]
  data.forEach((d, i) => {
    const y = 10 + i * 12
    const w = d.val * 1.8
    s += `<text x="2" y="${y + 7}" font-size="7" fill="#94A3B8" font-family="Arial">${d.label}</text>`
    s += `<rect x="62" y="${y}" width="${w}" height="9" fill="${d.color}" opacity="0.85"/>`
    s += `<text x="${62 + w + 4}" y="${y + 7}" font-size="7" fill="#CBD5E1" font-family="Arial">${d.val}</text>`
  })
  return svgFrame(s)
}

function svgBump() {
  // 4 series, 5 months — 순위 변화
  const months = 5
  const ranks = [
    { color: RED,    seq: [1, 2, 1, 1, 1] },
    { color: BLUE,   seq: [2, 1, 3, 2, 3] },
    { color: GREEN,  seq: [3, 3, 2, 4, 2] },
    { color: '#FBBF24', seq: [4, 4, 4, 3, 4] },
  ]
  let s = ''
  // 그리드 라인
  for (let m = 0; m < months; m++) {
    const x = 20 + m * 45
    s += `<line x1="${x}" y1="10" x2="${x}" y2="70" stroke="${GRAY}" stroke-width="0.3" opacity="0.3"/>`
  }
  ranks.forEach(r => {
    let path = ''
    r.seq.forEach((rank, m) => {
      const x = 20 + m * 45
      const y = 15 + (rank - 1) * 14
      path += (m === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`)
      s += `<circle cx="${x}" cy="${y}" r="2.5" fill="${r.color}"/>`
    })
    s += `<path d="${path}" stroke="${r.color}" stroke-width="2" fill="none" stroke-linecap="round"/>`
  })
  return svgFrame(s)
}

function svgMiniTrend() {
  // 이메일 table-layout 호환 — 막대만으로 표현
  let s = ''
  const data = [55, 62, 58, 68, 72, 65, 75]
  data.forEach((v, i) => {
    const x = 14 + i * 28
    const h = v * 0.7
    s += `<rect x="${x}" y="${70 - h}" width="22" height="${h}" fill="${RED}" opacity="${0.4 + i * 0.1}"/>`
  })
  // 텍스트 라벨 (table cell 시뮬레이션)
  s += `<text x="${W / 2}" y="${H - 2}" font-size="7" fill="#64748B" font-family="Arial" text-anchor="middle">W22~W28 (이메일 table-layout 호환)</text>`
  return svgFrame(s)
}

function svgPie() {
  const cx = W / 2, cy = H / 2, r = 32
  const slices = [
    { val: 35, color: RED },
    { val: 25, color: BLUE },
    { val: 20, color: GREEN },
    { val: 12, color: '#FBBF24' },
    { val: 8,  color: '#A78BFA' },
  ]
  let acc = 0, s = ''
  slices.forEach(slice => {
    const start = (acc / 100) * Math.PI * 2 - Math.PI / 2
    acc += slice.val
    const end = (acc / 100) * Math.PI * 2 - Math.PI / 2
    const x0 = cx + r * Math.cos(start), y0 = cy + r * Math.sin(start)
    const x1 = cx + r * Math.cos(end),   y1 = cy + r * Math.sin(end)
    const large = (end - start) > Math.PI ? 1 : 0
    s += `<path d="M ${cx} ${cy} L ${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z" fill="${slice.color}"/>`
  })
  return svgFrame(s)
}

function svgQuadrant() {
  // 4사분면 점도표 — X/Y 축 + 점들 (r 고정)
  const cx = W / 2, cy = H / 2
  let s = ''
  // 축
  s += `<line x1="${cx}" y1="6" x2="${cx}" y2="${H - 6}" stroke="${GRAY}" stroke-width="0.5" opacity="0.5"/>`
  s += `<line x1="10" y1="${cy}" x2="${W - 10}" y2="${cy}" stroke="${GRAY}" stroke-width="0.5" opacity="0.5"/>`
  // 점들
  const points = [
    { x: 40,  y: 25, c: RED },     // Q2 (top-left)
    { x: 165, y: 20, c: BLUE },    // Q1 (top-right)
    { x: 55,  y: 60, c: GREEN },   // Q3 (bottom-left)
    { x: 175, y: 58, c: '#FBBF24' }, // Q4 (bottom-right)
    { x: 130, y: 35, c: '#A78BFA' },
  ]
  points.forEach(p => s += `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${p.c}" opacity="0.7" stroke="${p.c}" stroke-width="1"/>`)
  // 사분면 라벨
  s += `<text x="${W - 5}" y="14" font-size="6" fill="#64748B" font-family="Arial" text-anchor="end">Q1</text>`
  s += `<text x="14" y="14" font-size="6" fill="#64748B" font-family="Arial">Q2</text>`
  s += `<text x="14" y="${H - 4}" font-size="6" fill="#64748B" font-family="Arial">Q3</text>`
  s += `<text x="${W - 5}" y="${H - 4}" font-size="6" fill="#64748B" font-family="Arial" text-anchor="end">Q4</text>`
  return svgFrame(s)
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
        <div class="chart-cmd">Skill 호출 예시: <code>"${escHtml(it.code)} 차트 그려줘"</code></div>
      </div>
    `).join('')
    return `<div class="section">
      <h2 class="section-title" style="border-color:${meta.color}">${escHtml(meta.label)}</h2>
      <p class="section-desc">${escHtml(meta.desc)}</p>
      <div class="chart-grid">${cards}</div>
    </div>`
  }).join('')

  const topBar = adminMode
    ? '<div class="top"><a class="back" href="/hiro">← HIRO</a></div>'
    : '<div class="top"><span style="font-size:12px;color:#64748B">정적 미러 — /hiro/chart-library 의 그 시점 스냅샷</span></div>'

  return `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Chart Library — 14 차트 양식 분류 카탈로그</title>
${themeStyle()}
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg-primary);color:var(--text-primary);font-family:'LG Smart','Arial Narrow',Arial,sans-serif;padding:28px 32px;line-height:1.6;max-width:1400px;margin:0 auto;transition:background .2s,color .2s}
.top{display:flex;align-items:center;margin-bottom:18px;flex-wrap:wrap;gap:12px}
.back{color:var(--accent);text-decoration:none;font-size:14px}
h1{font-size:26px;color:var(--text-strong);margin-bottom:6px}
.sub{font-size:14px;color:var(--text-muted);margin-bottom:24px}
.intro{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:18px 22px;margin-bottom:24px;font-size:14px;color:var(--text-desc)}
.intro strong{color:var(--text-strong)}
.intro code{background:var(--bg-code);color:#F8C4D7;padding:2px 8px;border-radius:4px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px}
.section{margin-bottom:28px}
.section-title{font-size:18px;font-weight:700;color:var(--text-strong);border-left:3px solid;padding-left:12px;margin-bottom:6px}
.section-desc{font-size:13px;color:var(--text-sub);margin-bottom:14px;padding-left:15px}
.chart-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}
.chart-card{background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:14px 16px;transition:border-color .15s}
.chart-card:hover{border-color:var(--accent)}
.chart-code{font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;font-family:ui-monospace,Menlo,Consolas,monospace}
.chart-name{font-size:15px;font-weight:700;color:var(--text-strong);margin-bottom:10px}
.chart-svg{margin-bottom:10px}
.chart-desc{font-size:13px;color:var(--text-desc);margin-bottom:8px;line-height:1.5}
.chart-usage{font-size:12px;color:var(--text-sub);margin-bottom:6px}
.chart-usage strong{color:var(--text-desc)}
.chart-cmd{font-size:12px;color:var(--text-muted);border-top:1px solid var(--border);padding-top:6px;margin-top:6px}
.chart-cmd code{background:var(--bg-code);color:#F8C4D7;padding:1px 6px;border-radius:3px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px}
[data-theme="light"] .intro code,[data-theme="light"] .chart-cmd code{color:#BE123C}
[data-theme="light"] [style*="color:#F8FAFC"]{color:#0F172A !important}
[data-theme="light"] [style*="color:#CBD5E1"]{color:#334155 !important}
[data-theme="light"] [style*="color:#94A3B8"]{color:#475569 !important}
[data-theme="light"] [style*="color:#64748B"]{color:#475569 !important}
</style></head><body>
${adminMode ? themeToggleButton() : ''}

${topBar}

<h1>Chart Library — 차트 분류 카탈로그</h1>
<p class="sub">차트 양식별 분류 코드 + 예시 SVG + 사용 위치</p>

<div class="intro">
  <p style="font-size:15px;color:#F8FAFC;margin-bottom:10px"><strong>이 페이지가 뭔가요?</strong> Claude 한테 "이런 차트 그려줘" 라고 부탁할 때 헷갈리지 않게 <strong>차트 종류마다 짧은 코드 (예: <code>L-1</code>, <code>BP-1</code>)</strong> 를 붙여놓은 카탈로그입니다.</p>
  <p style="font-size:14px;color:#CBD5E1;margin-bottom:14px"><strong>왜 쓰나요?</strong> <code>"라인 차트 그려줘"</code> 라고만 하면 Claude 가 어떤 모양으로 그릴지 애매해요. <code>"L-1 라인 차트 그려줘"</code> 라고 하면 정확히 같은 양식으로 그립니다. 팀 내에서도 한 양식 = 한 코드.</p>
  <ul style="margin-left:22px;font-size:14px;color:#CBD5E1;line-height:1.9">
    <li><code>L</code> — 라인 (시계열 / 트렌드)</li>
    <li><code>B</code> — 바 스택 (누적 / part-to-whole)</li>
    <li><code>V</code> — 그룹 막대 vbar (카테고리별 N 개)</li>
    <li><code>HB</code> — 가로 막대 (Top N 랭킹)</li>
    <li><code>M</code> — 콤보 (Bar + Line 결합)</li>
    <li><code>BP</code> — 범프 (순위 변화)</li>
    <li><code>MT</code> — 미니 트렌드 (이메일 호환)</li>
    <li><code>D</code> — 도넛 / 파이 (비중)</li>
    <li><code>R</code> — 레이더 (다차원 metric)</li>
    <li><code>BU</code> — 버블 / 4분면 (X/Y 산점)</li>
    <li><code>T</code> — 툴팁 (직교 — 어느 차트에든 추가)</li>
  </ul>
  <p style="margin-top:14px;font-size:13px;color:#94A3B8">카테고리 뒤 숫자는 양식 번호 (같은 카테고리 안 변형 구분). 예: <code>L-1</code> 기본 라인 / <code>L-5</code> 베이스라인 fade 라인.</p>
</div>

${sectionsHtml}

</body></html>`
}
