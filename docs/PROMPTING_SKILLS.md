# Dashboard / Newsletter — 빌딩 PRD + 컴포넌트 스킬

본 문서는 데이터/도메인 불문, **대시보드와 뉴스레터를 만드는 일반적인 PRD 및 그래프 컴포넌트 라이브러리**.

데이터는 일반 카테고리 (계열 1~5, 항목 A~F 등) 기준으로 기술하고, 도메인 특이값(예: LG/Samsung, 국가, 제품군)은 사용자가 자유롭게 매핑.

## 목차

- [Part 0 — 디자인 토큰 (색상·폰트·간격)](#part-0--디자인-토큰-색상폰트간격)
- [Part 1 — 일반 PRD: 대시보드/뉴스레터 빌딩](#part-1--일반-prd-대시보드뉴스레터-빌딩)
- [Part 2 — 컴포넌트 라이브러리 (HTML 코드 포함)](#part-2--컴포넌트-라이브러리)

---

# Part 0 — 디자인 토큰

## 0.1 색상 팔레트 (최대 5색 계열)

데이터 카테고리가 5개 이하인 경우 사용. 그 이상은 fallback 회색 순환.

```js
const CATEGORY_COLORS = {
  cat1: '#CF0652',  // 강조 (메인 시리즈, 자사 등)
  cat2: '#3B82F6',  // 비교 시리즈 1
  cat3: '#059669',  // 비교 시리즈 2
  cat4: '#D97706',  // 비교 시리즈 3
  cat5: '#7C3AED',  // 비교 시리즈 4
}
const FALLBACK_COLORS = ['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0']
```

매핑 함수:
```js
function colorOf(name, idx) {
  return CATEGORY_COLORS[name] || FALLBACK_COLORS[idx % FALLBACK_COLORS.length]
}
```

## 0.2 상태 토큰 (Status)

비율 기준 3단계 (예: 자사/경쟁 비율, 진행률, KPI 달성도).

```js
const STATUS_COLORS = {
  lead    : { bg:'#ECFDF5', border:'#A7F3D0', color:'#15803D', label:'Lead' },
  behind  : { bg:'#FFFBEB', border:'#FDE68A', color:'#B45309', label:'Behind' },
  critical: { bg:'#FFF1F2', border:'#FECDD3', color:'#BE123C', label:'Critical' },
  neutral : { bg:'#F8FAFC', border:'#E2E8F0', color:'#475569', label:'—' },
}

function statusOf(ratio) {
  if (ratio >= 100) return STATUS_COLORS.lead
  if (ratio >= 80)  return STATUS_COLORS.behind
  if (ratio < 80)   return STATUS_COLORS.critical
  return STATUS_COLORS.neutral
}
```

## 0.3 페이드(Fade) 색

시간축 분할 / baseline reset / 비활성 영역 표기용.

```js
const FADE = '#64748B'           // 진한 회색 (선/마커)
const FADE_OPACITY = 0.85         // 페이드 영역 opacity
const FADE_LIGHT = '#CBD5E1'      // 옅은 회색 (글자/grid)
```

## 0.4 폰트 / 간격

```css
/* Font */
font-family: 'LGEIText','LG Smart','Arial Narrow', Arial, sans-serif;

/* 폰트 사이즈 위계 */
--font-xs:   10px;  /* 라벨, 각주 */
--font-sm:   12px;  /* 본문 */
--font-base: 14px;  /* 카드 텍스트 */
--font-md:   18px;  /* 카드 점수 */
--font-lg:   22px;  /* 섹션 타이틀 */
--font-xl:   60px;  /* Hero 점수 */

/* 자간(letter-spacing) — 좁은 셀에서 텍스트 짤림 방지 */
.tight-en { letter-spacing: -0.9px }  /* 영문 14px */
.tight-ko { letter-spacing: -0.5px }  /* 한글 14px */
.tight-num{ letter-spacing: -1.8px }  /* 숫자 18px+ */

/* 패딩/간격 */
--gap-xs: 3px;
--gap-sm: 6px;
--gap-md: 12px;
--gap-lg: 24px;
```

## 0.5 일반 데이터 인터페이스

본 문서 전체에서 사용하는 데이터 shape 가정:

```js
// 단일 시리즈 (시간축)
{ labels: ['T1','T2','T3','T4'], data: [12, 15, 18, 14] }

// 다중 시리즈
{
  labels: ['T1','T2','T3'],
  series: {
    cat1: [12, 15, 18],
    cat2: [10, 11, 13],
    cat3: [8, 9, 11],
  }
}

// 카드 데이터
{
  id: 'a',
  label: '항목 A',
  score: 88.1,
  prev: 88.9,
  comp: 87.2,         // 비교 대상 점수
  compName: '계열2',
  status: 'lead' | 'behind' | 'critical',
  weekly: [80, 82, 85, 88],   // 시간축 데이터
  monthly: [{ date:'2026-04', score:88.1 }, ...],
}

// 랭킹 (범프차트)
{
  months: ['2025-12','2026-01','2026-02','2026-03','2026-04'],
  rankings: {
    'item1': { '2025-12':1, '2026-01':2, '2026-02':1, ... },
    'item2': { ... },
  }
}
```

---

# Part 1 — 일반 PRD: 대시보드/뉴스레터 빌딩

## 1.1 제품 정의

**대상 사용자**: 데이터를 정기 모니터링하는 운영자, 의사결정자.

**핵심 가치**:
- 한 화면에서 카테고리별 KPI 상태(신호등)·시간 추이·비교 점수 파악
- 동기화(원본 데이터) → 게시(고정 HTML) 분리 → 열람자는 안정적 URL
- 필터(국가/카테고리/기간) 로 동적 재집계

## 1.2 시스템 구성

```
[원본 데이터 소스]
    ↓ 동기화 버튼
[파서] excelUtils.js 등 — 시트 → JS 객체
    ↓ 어드민 (사이드바 편집)
[React 상태]
    ↓ 게시 버튼
[정적 HTML 생성기] generateXxxHTML(data, lang, opts)
    ↓ 파일 저장 (PUB_DIR)
[공개 URL] /p/SLUG-{KO|EN}
    ↑ 클라이언트 인라인 JS 가 필터 재렌더
```

## 1.3 필수 컴포넌트 목록

| 컴포넌트 | 용도 | Part 2 ID |
|---|---|---|
| Hero 카드 | 상단 메인 KPI | C-01 |
| 안내 박스 (Notice / KPI Logic) | 상단 컨텍스트 | C-02 |
| 카테고리 카드 (Product Card) | 카테고리별 KPI 한 장 카드 | C-03, C-04 |
| 막대 그래프 (Bar Chart) | 그룹화 막대 비교 | C-05 |
| 가로 막대 (Horizontal Bar) | Top N 순위 | C-06 |
| 단일 라인 차트 (Mini) | 작은 추이 (카드 내부) | C-07 |
| 다중 라인 차트 | 시리즈 여러 개 비교 | C-08 |
| 범프 차트 (Bump Chart) | 순위 변동 | C-09 |
| 미니 트렌드 바 | 메일 호환 막대 차트 | C-10 |
| 신호등 / 뱃지 | 상태 표시 | C-11 |
| 베이스라인 마커 | 시점 분기 | C-12 |
| 각주 (Footnote) | 데이터 보조 설명 | C-13 |

## 1.4 필터 / 인터랙션

표준 필터 4종 (선택적):
- **카테고리 그룹 필터** (예: 본부/부서 그룹) — 다중 선택, 전체/개별 토글
- **하위 카테고리 필터** (예: 제품군) — 다중
- **지역/기관 필터** (예: 사업장/팀) — 다중
- **기간 토글** (예: 주간/월간)

필터 변경 → `onFilterChange()` 호출 → 모든 시각화 컴포넌트 재집계:
- 카드 점수/MoM/WoW 재계산
- 막대 그래프 합산
- 라인 차트 시리즈 평균
- 범프 차트 랭킹 재계산

## 1.5 데이터 흐름 RULE

1. **서버 사전계산**: 자주 쓰이는 합계(예: 전체·카테고리별)는 서버에서 미리.
2. **원자료 보존**: 필터 재집계에 필요한 원자료(예: `_rawByGroup`)는 클라이언트 글로벌에 노출.
3. **동일 알고리즘**: 서버·클라이언트가 같은 알고리즘으로 렌더링 (svgLine ↔ _miniSvg).
4. **모드 분기**: 주간/월간 등 모드 변경은 컨테이너 토글 + onFilterChange.

## 1.6 게시 / 캐싱

- 정적 HTML 파일 (`PUB_DIR`) 로 게시 — CDN/캐싱 친화적.
- 동기화/게시 분리 — 데이터 갱신과 콘텐츠 확정 시점 분리.
- 게시 후 단순 새로고침으로 반영되지 않음 — 사용자에게 "재게시" 안내.

---

# Part 2 — 컴포넌트 라이브러리

각 컴포넌트는:
- **WHAT**: 무엇을 보여주는지
- **DATA**: 데이터 shape
- **HTML**: HTML/SVG 코드 (변수 치환 가능)
- **VARIATIONS**: 변형/옵션

## C-01 — Hero 카드 (상단 메인 KPI)

**WHAT**: 페이지 최상단의 큰 점수 + delta + 비교 그룹 점수.

**DATA**:
```js
{
  title: '전체 KPI %',
  score: 41.9,
  delta: 1.2,             // MoM 등
  compName: '비교 계열',
  compScore: 45.2,
  gap: -3.3,
  modelLine: 'Model: A, B, C',
  scopeLine: 'Scope: G1, G2, G3, ...',
}
```

**HTML**:
```html
<div class="hero" style="background:#0F172A;color:#E2E8F0;padding:32px;border-radius:16px">
  <div class="hero-title" style="font-size:14px;color:#94A3B8;letter-spacing:2px;text-transform:uppercase">${title}</div>
  <div class="hero-score-row" style="display:flex;align-items:baseline;gap:12px;margin:8px 0">
    <span style="font-size:60px;font-weight:900;color:#fff">${score.toFixed(1)}</span>
    <span style="font-size:24px;color:#94A3B8">%</span>
    <span style="font-size:18px;color:${dColor}">${dArrow} ${Math.abs(delta).toFixed(1)}%p</span>
    <span style="font-size:14px;color:#94A3B8">MoM</span>
  </div>
  <div class="hero-comp" style="display:flex;gap:12px;margin-top:8px">
    <span style="color:#94A3B8">${compName}</span>
    <span>${compScore}%</span>
    <span style="color:${gapColor}">Gap ${gap >= 0 ? '+' : ''}${gap}%p</span>
  </div>
  <div class="hero-info" style="font-size:12px;color:#94A3B8;margin-top:16px;line-height:1.5">
    ${modelLine}<br/>${scopeLine}
  </div>
</div>
```

**VARIATIONS**:
- 비교 그룹 없을 때: `hero-comp` 생략
- 다국어: 라벨 `MoM` / `전월비` 등 lang 토글

## C-02 — 안내 박스 (Notice / KPI Logic)

**WHAT**: 상단 컨텍스트 안내 박스. 토글로 표시/숨김.

**DATA**:
```js
{ title:'Notice', text:'**굵게**도 가능한 안내 텍스트', show:true }
```

**HTML**:
```html
<div class="notice-box" style="background:#FEF2F4;border:1px solid #FECDD3;border-radius:10px;padding:14px 18px;margin-bottom:16px">
  <div style="font-size:11px;font-weight:700;color:#BE123C;letter-spacing:1px;margin-bottom:4px">${title}</div>
  <div style="font-size:13px;color:#1A1A1A;line-height:1.6">${mdBold(text)}</div>
</div>
```

**VARIATIONS**:
- Notice (빨강 계열) / KPI Logic (회색 계열) / Info (파랑 계열)
- mdBold: `**text**` → `<strong>` 변환 + 줄바꿈

```js
function mdBold(t) {
  return (t || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\r?\n/g, '<br>')
}
```

## C-03 — 카테고리 카드 (간단)

**WHAT**: 한 카테고리의 점수 + delta + 상태 뱃지 + 미니 차트.

**DATA**:
```js
{ id:'a', label:'항목 A', score:88.1, prev:88.9, comp:87.2,
  compName:'계열2', status:'lead', weekly:[80,82,85,88,...], labels:[...] }
```

**HTML**:
```html
<div class="card" style="border:2px solid ${st.border};border-radius:8px;background:#fff;padding:12px;width:33%">
  <!-- 헤더 -->
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
    <span style="font-size:14px;font-weight:900;letter-spacing:-0.5px">${label}</span>
    <span style="background:${st.bg};color:${st.color};border:1px solid ${st.border};
      border-radius:5px;padding:0 4px;font-size:10px;font-weight:700">${st.label}</span>
  </div>
  <!-- 점수 -->
  <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:8px">
    <span style="font-size:22px;font-weight:900;letter-spacing:-1.8px">${score.toFixed(1)}</span>
    <span style="font-size:11px;color:#94A3B8">%</span>
    <span style="font-size:12px;font-weight:700;color:${deltaColor};letter-spacing:-1.2px">
      ${deltaArrow}${Math.abs(score - prev).toFixed(1)}%p
    </span>
  </div>
  <!-- 비교 -->
  <div style="font-size:11px;color:#64748B">
    ${compName} 대비 <span style="color:${ratioColor};font-weight:700">${ratio}%</span>
  </div>
  <!-- 미니 차트 (C-07 svgLine 삽입) -->
  <div style="margin-top:8px">${svgLine(weekly, labels, 300, 90, sparkColor)}</div>
</div>
```

`st` = `statusOf(ratio)` 결과. `sparkColor` = status 색 (lead 녹색 / behind 주황 / critical 빨강).

## C-04 — 카테고리 카드 (그룹 막대형)

**WHAT**: 한 카테고리 안에 여러 그룹(N개)을 막대로 비교.

**DATA**:
```js
{ id:'a', label:'항목 A', score:55.9, status:'critical',
  groups: [
    { name:'G1', score:60.2, comp:65.0 },
    { name:'G2', score:58.5, comp:62.1 },
    ... (최대 10개)
  ] }
```

**HTML 핵심 부분**:
```html
<div class="card" style="...">
  <!-- 헤더 + 점수 (C-03 와 동일) -->
  ...
  <!-- 그룹별 막대 -->
  <table style="width:100%;table-layout:fixed">
    <tr>
      ${groups.map(g => `
        <td style="vertical-align:bottom;text-align:center;padding:0 1px">
          <table align="center">
            <tr><td style="font-size:10px;font-weight:700;color:${barColor}">${g.score.toFixed(0)}</td></tr>
            <tr><td width="16" height="${barH}px" style="background:${barColor};border-radius:2px 2px 0 0"></td></tr>
            <tr><td style="font-size:8px;color:#94A3B8;letter-spacing:-0.3px">${g.name}</td></tr>
            <tr><td style="font-size:10px;color:#94A3B8">${compShort(g.comp)}</td></tr>
          </table>
        </td>
      `).join('')}
    </tr>
  </table>
</div>
```

**RULE**: 막대 너비 16px, 컬럼명 폰트 8px + 좁은 letter-spacing, 막대 색 = status 색.

## C-05 — 막대 그래프 (그룹 비교 vbar)

**WHAT**: 여러 항목 × 여러 그룹의 막대 비교. 각 항목마다 2~3개 막대 (예: cat1, cat2, cat3).

**DATA**:
```js
{
  items: [
    { id:'a', label:'A', values: { cat1:87, cat2:90, cat3:42 } },
    { id:'b', label:'B', values: { cat1:55, cat2:50, cat3:60 } },
    ...
  ]
}
```

**HTML 핵심**:
```html
<div class="vbar-group" style="display:flex;gap:24px">
  ${items.map(item => {
    const localMax = Math.max(...Object.values(item.values))
    return `
    <div class="vbar-item" data-id="${item.id}">
      <div class="vbar-cols" style="display:flex;gap:3px;width:100%;align-items:flex-end;justify-content:center">
        ${Object.entries(item.values).map(([name, v], i) => {
          const color = colorOf(name, i)
          const hPx = Math.max(3, Math.round(v / localMax * 130))
          return `
            <div class="vbar-col-wrap" style="flex:0 0 26px;display:flex;flex-direction:column;align-items:center">
              <span class="vbar-val" style="font-size:11px;font-weight:700;color:${color}">${v.toFixed(1)}</span>
              <div class="vbar-col" style="width:100%;height:${hPx}px;background:${color};border-radius:4px 4px 0 0"></div>
              <span class="vbar-col-name" style="font-size:10px;color:#94A3B8;margin-top:3px;
                white-space:nowrap;width:26px;text-align:center;overflow:visible;letter-spacing:-0.6px">
                ${name}
              </span>
            </div>
          `
        }).join('')}
      </div>
      <span style="font-size:15px;font-weight:600;color:#475569;margin-top:4px;text-align:center">
        ${item.label}
      </span>
    </div>
  `}).join('')}
</div>
```

**RULE**:
- 컬럼 너비 26px (flex:0 0 26px)
- 컬럼 사이 gap 3px
- 컬럼명 overflow:visible (긴 이름 짤림 방지)
- 막대 최대 높이 130px, 최소 3px
- 색상: `colorOf(name, idx)` — 시리즈명 매칭, fallback 회색 순환

## C-06 — 가로 막대 (Top N 순위)

**WHAT**: Top N 항목을 가로 막대로 점수 비교.

**DATA**:
```js
{ items: [
  { name:'item1', value:1234, ratio:0.45 },
  { name:'item2', value:980,  ratio:0.36 },
  ... (Top 10)
] }
```

**HTML**:
```html
<div class="hbar-list">
  ${items.map((it, i) => {
    const color = i === 0 ? '#15803D' : i < 3 ? '#22C55E' : '#94A3B8'
    const wPct = (it.value / maxValue * 100).toFixed(1)
    return `
      <div class="hbar-row" style="display:flex;align-items:center;gap:8px;padding:5px 0">
        <span style="width:120px;font-size:13px;font-weight:600;color:#1A1A1A">${it.name}</span>
        <div style="flex:1;background:#F1F5F9;border-radius:4px;height:18px;position:relative">
          <div style="width:${wPct}%;height:100%;background:${color};border-radius:4px"></div>
        </div>
        <span style="width:80px;text-align:right;font-size:12px;font-weight:700;color:${color}">
          ${it.value.toLocaleString()} (${(it.ratio*100).toFixed(1)}%)
        </span>
      </div>
    `
  }).join('')}
</div>
```

## C-07 — 단일 라인 차트 (Mini)

**WHAT**: 카드 안의 작은 추이 차트 (300×90 정도).

**DATA**: `{ data: [v1, v2, ...], labels: [...], color: '#CF0652' }`

**SVG**:
```js
function svgLine(data, labels, w, h, color, opts = {}) {
  const fadeBeforeIdx = opts.fadeBeforeIdx ?? -1
  const baselineLabel = opts.baselineLabel || ''
  const labelOffsetY = opts.labelOffsetY || 0
  const pad = { t: 18, r: 10, b: 20, l: 10 }
  const cw = w - pad.l - pad.r, ch = h - pad.t - pad.b
  const valid = data.filter(v => v != null)
  const mn = Math.min(...valid) - 1, mx = Math.max(...valid) + 1, rng = mx - mn || 1
  const N = data.length, divisor = N > 1 ? N - 1 : 1
  const allX = data.map((_, i) => pad.l + (i / divisor) * cw)
  const pts = []
  data.forEach((v, i) => { if (v != null) pts.push({ x: allX[i], y: pad.t + (1 - (v - mn) / rng) * ch, v, idx: i }) })
  const prePts = fadeBeforeIdx > 0 ? pts.filter(p => p.idx < fadeBeforeIdx) : []
  const postPts = fadeBeforeIdx > 0 ? pts.filter(p => p.idx >= fadeBeforeIdx) : pts
  const FADE = '#64748B'

  let svg = `<svg viewBox="0 0 ${w} ${h+12}" width="100%" height="${h+12}" style="display:block;overflow:visible">`
  // Area + Line (post)
  if (postPts.length >= 2) {
    const line = postPts.map((p,i) => `${i?'L':'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
    const area = line + ` L${postPts[postPts.length-1].x.toFixed(1)},${pad.t+ch} L${postPts[0].x.toFixed(1)},${pad.t+ch} Z`
    svg += `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0.03"/></linearGradient></defs>`
    svg += `<path d="${area}" fill="url(#g)"/>`
    svg += `<path d="${line}" stroke="${color}" fill="none" stroke-width="2" stroke-linecap="round"/>`
  }
  // Pre-baseline (gray)
  if (prePts.length >= 2) {
    const pline = prePts.map((p,i) => `${i?'L':'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
    svg += `<path d="${pline}" stroke="${FADE}" fill="none" stroke-width="2" opacity="0.85"/>`
  }
  // Circles
  svg += pts.map(p => {
    const isPre = fadeBeforeIdx > 0 && p.idx < fadeBeforeIdx
    const isBaseStart = fadeBeforeIdx > 0 && p.idx === fadeBeforeIdx
    if (isBaseStart) return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="#000" stroke="${color}" stroke-width="3"/>`
    return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${isPre?FADE:color}" stroke-width="2" opacity="${isPre?0.85:1}"/>`
  }).join('')
  // Value labels
  svg += pts.map(p => {
    const isPre = fadeBeforeIdx > 0 && p.idx < fadeBeforeIdx
    return `<text x="${p.x.toFixed(1)}" y="${Math.max(p.y-7, 12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${isPre?FADE:color}">${p.v.toFixed(1)}</text>`
  }).join('')
  // Baseline marker
  if (fadeBeforeIdx > 0 && baselineLabel) {
    const bx = allX[fadeBeforeIdx]
    svg += `<line x1="${bx}" y1="${pad.t}" x2="${bx}" y2="${pad.t+ch}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`
    const onRight = bx > w * 0.7
    const labelY = (onRight ? pad.t + ch + 1 : pad.t + 8) + labelOffsetY
    svg += `<text x="${onRight ? bx-5 : bx+5}" y="${labelY}" text-anchor="${onRight?'end':'start'}" font-size="9" fill="#64748B">${baselineLabel}</text>`
  }
  // X-axis labels
  svg += data.map((_, i) => `<text x="${allX[i].toFixed(1)}" y="${pad.t+ch+14}" text-anchor="middle" font-size="12" fill="#94A3B8">${labels[i]||''}</text>`).join('')
  svg += '</svg>'
  return svg
}
```

**옵션**:
- `fadeBeforeIdx`: 이전 데이터 회색 페이드
- `baselineLabel`: 베이스라인 위치에 dashed line + 라벨
- `labelOffsetY` / `lineOffsetY`: 위치 미세 조정

## C-08 — 다중 라인 차트 (svgMultiLine)

**WHAT**: 여러 시리즈의 시간 추이 비교 (큰 차트, 300×180 등).

**DATA**: `brandData = { cat1:[12,15,18,...], cat2:[10,11,13,...], cat3:[...] }`, `labels = ['T1','T2',...]`

**SVG 핵심**:
```js
function svgMultiLine(brandData, labels, w, h, opts = {}) {
  const fadeBeforeIdx = opts.fadeBeforeIdx ?? -1
  const baselineLabel = opts.baselineLabel || ''
  const brands = Object.keys(brandData)
  let mn = Infinity, mx = -Infinity
  brands.forEach(b => (brandData[b] || []).forEach(v => { if (v!=null) { if (v<mn) mn=v; if (v>mx) mx=v } }))
  const pad = Math.max((mx-mn) * 0.15, 2)
  mn = Math.max(0, mn-pad); mx = Math.min(100, mx+pad)
  const rng = mx-mn || 1, N = labels.length
  const pt = 8, pb = 8, ch = h - pt - pb
  const FADE = '#64748B'
  let g = ''
  // 그리드
  for (let i=0; i<=4; i++) {
    const y = pt + (i/4)*ch
    g += `<line x1="0" y1="${y.toFixed(1)}" x2="${w}" y2="${y.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`
  }
  // 시리즈별
  brands.forEach((b, bi) => {
    const color = colorOf(b, bi)
    const isMain = bi === 0    // 첫번째 시리즈가 메인
    const sw = isMain ? 2.5 : 1.5
    const opacity = isMain ? 1 : 0.7
    const pts = []
    ;(brandData[b] || []).forEach((v, i) => {
      if (v == null) return
      const x = ((i+0.5)/N) * w
      const y = pt + (1 - (v-mn)/rng) * ch
      pts.push({x, y, v, idx: i})
    })
    if (!pts.length) return
    const prePts = fadeBeforeIdx > 0 ? pts.filter(p => p.idx < fadeBeforeIdx) : []
    const postPts = fadeBeforeIdx > 0 ? pts.filter(p => p.idx >= fadeBeforeIdx) : pts
    const drawSeg = (segPts, segColor, segOp, skipBase) => {
      if (segPts.length >= 2) {
        const d = segPts.map((p,i) => `${i?'L':'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
        g += `<path d="${d}" stroke="${segColor}" fill="none" stroke-width="${sw}" stroke-linecap="round" opacity="${segOp}"/>`
      }
      segPts.forEach(p => {
        if (skipBase && p.idx === fadeBeforeIdx) return
        g += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${isMain?3.5:2.5}" fill="#fff" stroke="${segColor}" stroke-width="${isMain?2:1.5}" opacity="${segOp}"/>`
      })
    }
    drawSeg(prePts, FADE, 0.85, false)
    drawSeg(postPts, color, opacity, isMain && fadeBeforeIdx > 0)
    // Baseline 시작점 마커 (메인만)
    if (isMain && fadeBeforeIdx > 0) {
      const bp = pts.find(p => p.idx === fadeBeforeIdx)
      if (bp) g += `<circle cx="${bp.x.toFixed(1)}" cy="${bp.y.toFixed(1)}" r="4.5" fill="#000" stroke="${color}" stroke-width="3"/>`
    }
  })
  // Baseline dashed + 라벨
  if (fadeBeforeIdx > 0 && baselineLabel) {
    const bx = ((fadeBeforeIdx+0.5)/N) * w
    g += `<line x1="${bx.toFixed(1)}" y1="${pt}" x2="${bx.toFixed(1)}" y2="${pt+ch}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`
    const onRight = bx > w*0.7
    g += `<text x="${onRight?bx-5:bx+5}" y="${pt+12}" text-anchor="${onRight?'end':'start'}" font-size="11" fill="#64748B">${baselineLabel}</text>`
  }
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none" style="display:block">${g}</svg>`
}
```

**RULE**:
- 메인 시리즈 (index 0): stroke 2.5, opacity 1, circle r 3.5
- 비교 시리즈: stroke 1.5, opacity 0.7, circle r 2.5
- X 라벨은 외부 테이블 헤더가 대체 (preserveAspectRatio="none")

## C-09 — 범프 차트 (Bump Chart)

**WHAT**: 시간별 Top N 순위 변동을 리본으로 시각화.

**DATA**:
```js
{
  months: ['M1','M2','M3','M4','M5'],
  rankings: {
    'item1': { 'M1':1, 'M2':2, 'M3':1, 'M4':1, 'M5':2 },
    'item2': { 'M1':2, 'M2':1, 'M3':3, 'M4':2, 'M5':1 },
    'item3': { 'M1':3, 'M2':3, 'M3':2, 'M4':3, 'M5':3 },
  },
  maxRank: 10,
}
```

**SVG (핵심)**:
```js
function bumpChartSvg(names, rankings, months, maxRank = 10, labelFn) {
  const ROW_H = 52, EXT_L = 80, EXT_R = 20
  const W = Math.max(months.length * 200, 600) + EXT_L + EXT_R
  const padT = 0, padB = 30
  const H = maxRank * ROW_H + padT + padB
  const padL = 10 + EXT_L, padR = 10 + EXT_R
  const chartW = W - padL - padR, chartH = H - padT - padB
  const ribbonW = ROW_H * 0.38, RND = ribbonW
  const COLORS = ['#CF0652','#1D4ED8','#059669','#D97706','#7C3AED',
                  '#DB2777','#0D9488','#EA580C','#4F46E5','#DC2626','#0891B2','#65A30D']

  let svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" style="display:block">`

  const sortedNames = [...names].sort((a, b) => {
    const lastM = months[months.length-1]
    return (rankings[b]?.[lastM] || 999) - (rankings[a]?.[lastM] || 999)
  })

  sortedNames.forEach(name => {
    const color = COLORS[names.indexOf(name) % COLORS.length]
    const points = []
    months.forEach((m, i) => {
      const rank = rankings[name]?.[m]
      if (rank != null && rank <= maxRank) {
        const x = padL + (i / Math.max(months.length-1, 1)) * chartW
        const y = padT + ((rank - 0.5) / maxRank) * chartH
        points.push({ x, y, rank, month: m })
      }
    })
    if (points.length < 1) return
    const first = points[0], last = points[points.length-1]
    const leftX = first.x - EXT_L, rightX = last.x + EXT_R
    const extPts = [{x: leftX+RND, y: first.y}, ...points, {x: rightX-RND, y: last.y}]
    let upper = '', lower = ''
    for (let i=0; i<extPts.length; i++) {
      const p = extPts[i]
      if (i === 0) {
        upper += `M${p.x-RND},${p.y} A${RND},${ribbonW} 0 0,1 ${p.x},${p.y-ribbonW}`
        lower = `L${p.x},${p.y+ribbonW} A${RND},${ribbonW} 0 0,1 ${p.x-RND},${p.y}`
      } else {
        const prev = extPts[i-1]
        const cx = (prev.x + p.x) / 2
        upper += ` C${cx},${prev.y-ribbonW} ${cx},${p.y-ribbonW} ${p.x},${p.y-ribbonW}`
        lower = ` C${cx},${p.y+ribbonW} ${cx},${prev.y+ribbonW} ${prev.x},${prev.y+ribbonW}` + lower
      }
    }
    const lastExt = extPts[extPts.length-1]
    const ribbonPath = upper +
      ` A${RND},${ribbonW} 0 0,1 ${lastExt.x+RND},${lastExt.y}` +
      ` A${RND},${ribbonW} 0 0,1 ${lastExt.x},${lastExt.y+ribbonW}` +
      lower + ' Z'
    svg += `<path d="${ribbonPath}" fill="${color}" opacity="0.6" stroke="${color}" stroke-width="0.5" stroke-opacity="0.3"/>`
  })

  // 라벨 (각 시점에)
  names.forEach(name => {
    const label = labelFn ? labelFn(name) : name
    months.forEach((m, i) => {
      const rank = rankings[name]?.[m]
      if (rank == null || rank > maxRank) return
      const x = padL + (i / Math.max(months.length-1, 1)) * chartW
      const y = padT + ((rank - 0.5) / maxRank) * chartH
      svg += `<text x="${x}" y="${y+8}" text-anchor="middle" fill="#0F172A" font-size="22" font-weight="700">${label}</text>`
    })
  })

  svg += '</svg>'
  return svg
}
```

**RULE**:
- 둥근 양 끝 + C-bezier 보간 (부드러운 리본)
- 라벨 시점마다 표시 (검정 22px, weight 700)
- 색상 12색 고정 팔레트 (브랜드와 별개)
- 최대 N개(maxRank) 한정

## C-10 — 미니 트렌드 바 (메일 호환)

**WHAT**: 이메일 HTML 호환 (table-based) 막대 차트. SVG 안 통하는 메일 클라이언트용.

**DATA**: `{ data: [80,82,85,88,...], labels:['W1','W2',...], color:'#15803D' }`

**HTML (table-based)**:
```html
<table border="0" cellpadding="0" cellspacing="0" style="display:inline-table">
  <tr>
    ${data.map((v, i) => {
      if (v == null) return ''
      const h = Math.round(((v - localMin) / range) * 24) + 4
      const spacer = 24 - h
      const isPre = fadeBeforeIdx > 0 && i < fadeBeforeIdx
      const barColor = isPre ? '#64748B' : color
      return `
        <td style="vertical-align:bottom;text-align:center;padding:0 2px">
          <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto">
            <tr><td style="font-size:10px;font-weight:700;color:${barColor};padding-bottom:1px">${v.toFixed(1)}</td></tr>
            ${spacer > 0 ? `<tr><td height="${spacer}" style="font-size:0;line-height:0">&nbsp;</td></tr>` : ''}
            <tr><td width="10" height="${h}" style="background:${barColor};font-size:0;line-height:0">&nbsp;</td></tr>
            <tr><td style="font-size:10px;color:#94A3B8;padding-top:2px">${labels[i] || ''}</td></tr>
          </table>
        </td>
      `
    }).join('')}
  </tr>
</table>
```

**RULE**:
- 막대 너비 10px, 최대 높이 24px (메일에서 작게)
- 자체 min/max 기반 스케일 (작은 변화도 표현)
- 베이스라인 이전 회색 페이드 지원

## C-11 — 신호등 / 뱃지

**HTML (badge)**:
```html
<span style="display:inline-block;background:${st.bg};color:${st.color};
  border:1px solid ${st.border};border-radius:5px;
  padding:0px 4px;font-size:10px;font-weight:700;line-height:15px">
  ${st.label}
</span>
```

**HTML (카드 테두리 + 점수 색)**:
```html
<table style="border:2px solid ${st.border};border-radius:8px">
  <span style="color:${st.color};font-weight:700">${score}%</span>
</table>
```

`st = statusOf(ratio)` (Part 0.2).

## C-12 — 베이스라인 마커

**WHAT**: 특정 시점에서 데이터 정의 변경/리셋이 있었음을 표시.

**3 요소 한 세트**:

### (a) Fade pre-segment
이전 데이터를 회색(`#64748B`)으로 페이드 + opacity 0.85.

### (b) Baseline start point
시작점 특수 마커:
```html
<circle r="4" fill="#000" stroke="${color}" stroke-width="3"/>
```

### (c) Dashed vertical + 라벨
```html
<line x1="${bx}" y1="${chartTop}" x2="${bx}" y2="${chartBottom}"
  stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>
<text x="${onRight ? bx-5 : bx+5}" y="${labelY}"
  text-anchor="${onRight ? 'end' : 'start'}"
  font-size="9" fill="#64748B">${'*Baseline reset'}</text>
```

**RULE**: 베이스라인 X 좌표가 차트 너비의 70% 초과면 (`bx > w * 0.7`) 좌측 정렬, 아니면 우측. `labelOffsetY` 옵션으로 미세 조정.

## C-14 — Composed 차트 (Bar + Line)

**WHAT**: 막대(실적) + 라인(목표) 합성. 월별 진척 현황 시각화 (Progress Tracker 스타일).

**DATA**:
```js
{ data: [
  { month:'M1', actual: 800, goal: 1000 },
  { month:'M2', actual: 950, goal: 1100 },
  ...
]}
```

**HTML/SVG 구조**: Recharts 의 `ComposedChart` (React 환경) 또는 직접 SVG:
- 막대: `<rect>` 막대, `fill: #CF0652`, radius top 4px
- 라인: `<path>` stroke, 라인 위 dots `<circle r="3.5" fill="#fff" stroke="#111827" stroke-width="2"/>`
- X 그리드 점선 `stroke-dasharray="3 3"`
- 범례: 상단, 원형 마커 (iconType="circle")

**RULE**:
- 막대 max-width 32~36px
- Y축 1000+ 시 `1.0k` 형식으로 단축
- 범례 폰트 16px (가독성)

## C-15 — Summary Metric Card (4-Grid)

**WHAT**: 페이지 상단 4개 핵심 메트릭 카드 (월 달성률, 연 진척, 달성 과제 수, 미달 과제 수).

**DATA**:
```js
{ label:'월 달성률 (4월)', value:'92.5', unit:'%',
  sub:'1,234 / 1,334', status:'lead', barRate:92.5 }
```

**HTML**:
```html
<div style="background:${st.bg};border:1px solid ${st.border};border-radius:12px;padding:12px;position:relative">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
    <span style="font-size:13px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:0.3px">${label}</span>
    <span style="width:10px;height:10px;border-radius:50%;background:${st.dot};box-shadow:0 0 6px ${st.dot}55"></span>
  </div>
  <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:4px">
    <span style="font-size:28px;font-weight:900;color:${st.color};line-height:1;font-variant-numeric:tabular-nums">${value}</span>
    <span style="font-size:15px;color:#94A3B8;font-weight:600">${unit}</span>
  </div>
  <div style="height:4px;background:rgba(15,23,42,0.08);border-radius:3px;overflow:hidden;margin-bottom:4px">
    <div style="width:${barRate}%;height:100%;background:${st.bar}"></div>
  </div>
  <div style="font-size:12px;color:#64748B">${sub}</div>
</div>
```

**RULE**:
- 4개 카드 한 줄 (모바일에선 2x2)
- 상단 라벨 + 우상단 dot
- 큰 숫자 (28px, weight 900) + 단위
- 하단 진행률 바 (rate 적용)
- 보조 라벨 (실적/목표 등)

## C-16 — KPI 테이블 (정량)

**WHAT**: 카테고리 × 항목별 정량 데이터 테이블. 월별 누적 합계 + 달성률.

**DATA**:
```js
{ rows: [
  { stakeholder:'팀A', category:'시스템', goal:1000, actual:850, rate:85.0 },
  ...
], totals: { goal, actual, rate } }
```

**HTML**:
```html
<table style="width:100%;border-collapse:collapse;font-size:13px;font-family:${FONT}">
  <thead>
    <tr style="background:#F8FAFC;border-bottom:2px solid #CF0652">
      <th style="padding:10px 12px;text-align:left;color:#475569;font-weight:700">담당</th>
      <th>카테고리</th>
      <th style="text-align:right">목표</th>
      <th style="text-align:right">실적</th>
      <th style="text-align:right">달성률</th>
    </tr>
  </thead>
  <tbody>
    ${rows.map((r, i) => `
      <tr style="border-bottom:1px solid #F1F5F9;${i % 2 === 0 ? 'background:#FAFBFC' : ''}">
        <td style="padding:8px 12px">${r.stakeholder}</td>
        <td>${r.category}</td>
        <td style="text-align:right;font-variant-numeric:tabular-nums">${fmt(r.goal)}</td>
        <td style="text-align:right;font-variant-numeric:tabular-nums;color:#1A1A1A;font-weight:600">${fmt(r.actual)}</td>
        <td style="text-align:right;font-weight:700;color:${rateColor(r.rate)}">${r.rate.toFixed(1)}%</td>
      </tr>
    `).join('')}
    <tr style="background:#1E293B;color:#fff;font-weight:700">
      <td style="padding:10px 12px" colspan="2">합계</td>
      <td style="text-align:right">${fmt(totals.goal)}</td>
      <td style="text-align:right">${fmt(totals.actual)}</td>
      <td style="text-align:right">${totals.rate.toFixed(1)}%</td>
    </tr>
  </tbody>
</table>
```

**RULE**:
- 헤더: 좌측 정렬 라벨, 우측 정렬 숫자 (`text-align:right` + `tabular-nums`)
- 짝수 행 옅은 회색 배경
- 합계 행: 짙은 색 배경, 흰 글자
- 달성률: `lead/behind/critical` 색상

## C-17 — Qualitative 테이블 (정성)

**WHAT**: 진척 단계(Status) 표 형태 — 시작/진행/완료 등 단계별 dot 마커.

**DATA**:
```js
{ rows: [
  { category:'카테고리1', goal:'목표 문장', status:'진행', responsible:'팀A' },
  ...
]}
```

**상태 dot**:
```js
function statusDot(status) {
  if (status === '완료') return { color:'#15803D', label:'완료' }
  if (status === '진행') return { color:'#D97706', label:'진행' }
  if (status === '계획') return { color:'#94A3B8', label:'계획' }
  return { color:'#94A3B8', label:'-' }
}
```

**HTML**:
```html
<table style="...">
  <thead>...</thead>
  <tbody>
    ${rows.map(r => {
      const s = statusDot(r.status)
      return `<tr>
        <td>${r.category}</td>
        <td style="font-size:13px;line-height:1.5">${r.goal}</td>
        <td><span style="display:inline-flex;align-items:center;gap:6px">
          <span style="width:8px;height:8px;border-radius:50%;background:${s.color}"></span>
          ${s.label}
        </span></td>
        <td>${r.responsible}</td>
      </tr>`
    }).join('')}
  </tbody>
</table>
```

## C-18 — Category Card (카테고리 점수 카드)

**WHAT**: 카테고리별 KPI 한 줄 카드 (작은 카드들이 가로 나열).

**DATA**: `{ id, name, score, target, status }`

**HTML**:
```html
<div style="background:#fff;border:1px solid #E2E8F0;border-left:4px solid ${st.color};
  border-radius:8px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;
  cursor:pointer;transition:transform .15s">
  <div>
    <div style="font-size:12px;color:#64748B;margin-bottom:2px">${name}</div>
    <div style="font-size:20px;font-weight:900;color:#1A1A1A">${score.toFixed(1)}<span style="font-size:13px;color:#94A3B8">%</span></div>
  </div>
  <div style="text-align:right">
    <div style="font-size:11px;color:#94A3B8">목표</div>
    <div style="font-size:14px;font-weight:700;color:${st.color}">${target}%</div>
  </div>
</div>
```

## C-19 — 파이 차트 (Pie Chart)

**WHAT**: 비율 분포 시각화 (전체 100% 중 시리즈별 점유율).

**DATA**: `{ slices: [{ name:'cat1', value:35 }, { name:'cat2', value:25 }, ...] }`

**SVG**:
```js
function pieChartSvg(slices, w = 240, h = 240, opts = {}) {
  const cx = w / 2, cy = h / 2
  const r = Math.min(w, h) / 2 - 20
  const total = slices.reduce((s, x) => s + x.value, 0)
  let acc = 0
  const COLORS = ['#CF0652','#3B82F6','#059669','#D97706','#7C3AED','#94A3B8']

  let svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="display:block">`
  slices.forEach((s, i) => {
    const a0 = (acc / total) * 2 * Math.PI - Math.PI / 2
    const a1 = ((acc + s.value) / total) * 2 * Math.PI - Math.PI / 2
    acc += s.value
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0)
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1)
    const large = (a1 - a0) > Math.PI ? 1 : 0
    const color = COLORS[i % COLORS.length]
    svg += `<path d="M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${large} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z"
      fill="${color}" stroke="#fff" stroke-width="2"/>`
    // 라벨 (각도 중간에)
    const am = (a0 + a1) / 2
    const lx = cx + (r * 0.65) * Math.cos(am)
    const ly = cy + (r * 0.65) * Math.sin(am)
    const pct = ((s.value / total) * 100).toFixed(0)
    if (pct > 5) {
      svg += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">${pct}%</text>`
    }
  })
  svg += '</svg>'
  return svg
}
```

**RULE**:
- 최대 5~6 슬라이스 권장
- 5% 이하 슬라이스는 라벨 생략 (혹은 외부 라벨)
- 흰색 stroke 로 슬라이스 구분
- 외부에 범례 (legend)

## C-20 — 4분면 점도표 (Quadrant Scatter)

**WHAT**: X축·Y축 2지표 기준 항목을 사분면에 배치. 우상 = 우수, 좌하 = 부진 등.

**DATA**: `{ items: [{ name, x, y, size?, group? }, ...] }`

**SVG**:
```js
function quadrantSvg(items, w = 400, h = 320, opts = {}) {
  const padL = 40, padR = 20, padT = 20, padB = 40
  const cw = w - padL - padR, ch = h - padT - padB
  const xMid = padL + cw / 2, yMid = padT + ch / 2
  const xMin = opts.xMin ?? 0, xMax = opts.xMax ?? 100
  const yMin = opts.yMin ?? 0, yMax = opts.yMax ?? 100
  const COLORS = ['#CF0652','#3B82F6','#059669','#D97706','#7C3AED']

  let svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" style="display:block">`
  // 사분면 라벨/영역 배경
  svg += `<rect x="${xMid}" y="${padT}" width="${cw/2}" height="${ch/2}" fill="#ECFDF5"/>`  // 우상 (lead)
  svg += `<rect x="${padL}" y="${yMid}" width="${cw/2}" height="${ch/2}" fill="#FFF1F2"/>`   // 좌하 (critical)
  // 축
  svg += `<line x1="${padL}" y1="${yMid}" x2="${padL + cw}" y2="${yMid}" stroke="#94A3B8" stroke-width="1"/>`
  svg += `<line x1="${xMid}" y1="${padT}" x2="${xMid}" y2="${padT + ch}" stroke="#94A3B8" stroke-width="1"/>`
  // 외곽
  svg += `<rect x="${padL}" y="${padT}" width="${cw}" height="${ch}" fill="none" stroke="#E2E8F0"/>`
  // 사분면 라벨
  svg += `<text x="${padL + cw - 8}" y="${padT + 14}" text-anchor="end" font-size="10" fill="#15803D" font-weight="700">우수</text>`
  svg += `<text x="${padL + 8}" y="${padT + ch - 6}" font-size="10" fill="#BE123C" font-weight="700">부진</text>`
  // 점 + 라벨
  items.forEach((it, i) => {
    const x = padL + ((it.x - xMin) / (xMax - xMin)) * cw
    const y = padT + (1 - (it.y - yMin) / (yMax - yMin)) * ch
    const color = COLORS[(it.group ?? i) % COLORS.length]
    const r = it.size ?? 6
    svg += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${color}" opacity="0.7" stroke="#fff" stroke-width="2"/>`
    svg += `<text x="${x.toFixed(1)}" y="${(y - r - 4).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="600" fill="#1A1A1A">${it.name}</text>`
  })
  // 축 라벨
  svg += `<text x="${padL + cw / 2}" y="${h - 8}" text-anchor="middle" font-size="12" fill="#475569">${opts.xLabel || 'X'}</text>`
  svg += `<text x="14" y="${padT + ch / 2}" text-anchor="middle" font-size="12" fill="#475569" transform="rotate(-90, 14, ${padT + ch / 2})">${opts.yLabel || 'Y'}</text>`
  svg += '</svg>'
  return svg
}
```

**RULE**:
- 우상 사분면(우수): 옅은 녹색 배경 `#ECFDF5`
- 좌하 사분면(부진): 옅은 빨강 배경 `#FFF1F2`
- 가운데 십자 축
- 점 크기로 추가 차원(예: 규모) 표현 가능
- 라벨은 점 위쪽에 배치, 겹침 방지 시 외부 라벨 처리

## C-21 — 제품 카드 V1 (Newsletter, 트렌드 바 포함)

**WHAT**: 점수 + MoM + 미니 트렌드 바 + 비교 라벨.

**HTML**:
```html
<td width="33%" style="padding:3px;vertical-align:top">
  <table border="0" cellpadding="0" cellspacing="0" width="100%"
    style="border:2px solid ${st.border};border-radius:8px;background:#fff">
    <!-- 헤더 (제품명 + vs 경쟁비 + status badge + MoM) -->
    <tr><td style="padding:6px 8px 4px">
      <table width="100%"><tr>
        <td style="vertical-align:middle">
          <span style="font-size:12px;font-weight:900;letter-spacing:-0.5px">${name}</span>
        </td>
        <td align="right">
          <span style="font-size:13px;font-weight:700;color:${ratioColor};letter-spacing:-1px">
            ${compName} 대비 ${ratio}%
          </span>
          <span style="background:${st.bg};color:${st.color};border:1px solid ${st.border};
            border-radius:6px;padding:0 5px;font-size:10px;font-weight:700">${st.label}</span>
        </td>
      </tr></table>
    </td></tr>
    <!-- 점수 + 트렌드 바 -->
    <tr><td style="padding:2px 8px 6px">
      <table width="100%"><tr>
        <td style="vertical-align:middle">
          <span style="font-size:22px;font-weight:900">${score.toFixed(1)}</span>
          <span style="font-size:12px;color:#94A3B8">%</span>
          &nbsp;<span style="font-size:12px;font-weight:700;color:${momColor}">${momArrow}${momAbs}%p</span>
        </td>
        <td align="right">${miniTrendBars}</td>  <!-- C-10 -->
      </tr></table>
    </td></tr>
  </table>
</td>
```

**RULE**:
- 3열(33% width) — 한 행에 3장
- 테두리 색 = status
- 좌측 점수, 우측 트렌드 바
- 메일 호환 table 레이아웃

## C-22 — 제품 카드 V2 (Newsletter, 10국 Visibility 막대)

**WHAT**: 카테고리 카드 + 10개 그룹(국가) 막대 (cat1 vs cat2 비교).

**HTML 핵심**:
```html
<td width="33%" style="...">
  <table style="...">
    <!-- 헤더 (제품명 + 점수 + status) -->
    <tr><td>...</td></tr>
    <!-- 10개 막대 (그룹별 2단) -->
    <tr><td>
      <table width="100%" style="table-layout:fixed">
        <tr>
          ${groups.map(g => `
            <td style="vertical-align:bottom;text-align:center;padding:0 1px;width:10%">
              <table align="center">
                <tr><td style="font-size:10px;font-weight:700;color:${barColor}">${g.lg}</td></tr>
                <tr><td width="14" height="${hPx}" style="background:${barColor}">&nbsp;</td></tr>
                <tr><td style="font-size:8px;color:#94A3B8">${g.name}</td></tr>
                <tr><td style="font-size:10px;color:#94A3B8">${g.comp}</td></tr>
              </table>
            </td>
          `).join('')}
        </tr>
      </table>
    </td></tr>
  </table>
</td>
```

**RULE**: 10국 (또는 그룹 N개) 각 10% width, 막대 14px.

## C-23 — 제품 카드 V3 (Newsletter, 국가 막대 + 1위 경쟁사 비교)

**WHAT**: V2 와 비슷하나 각 그룹별 1위 경쟁사 점수/비율을 함께 표시.

**HTML 핵심**:
```html
<!-- 상단: 제품명 + 점수 + 메인 비교(고정 또는 자동 1위) + status -->
<!-- 본문 막대: 각 국가별 LG 막대 + 그 국가의 1위 경쟁사 표시 -->
${groups.map(g => `
  <td>
    <table align="center">
      <tr><td><div style="height:${spacer}px"></div></td></tr>
      <tr><td width="16" height="${barH}" style="background:${cStatusColor};border-radius:2px 2px 0 0">&nbsp;</td></tr>
      <tr><td style="font-size:10px;font-weight:700;color:${cStatusColor}">${g.score.toFixed(0)}</td></tr>
      <tr><td style="font-size:8px;font-weight:700;color:${cStatusColor};line-height:1.1">${g.name}</td></tr>
      <tr><td style="font-size:10px;color:#94A3B8">${compShort(g.compName)}<br/>${g.compRatio}%</td></tr>
    </table>
  </td>
`).join('')}
```

**RULE**: 각 막대 색은 해당 국가의 자체 status (lead/behind/critical) 기준. 메인 헤더의 비교 경쟁사와 별개.

## C-13 — 각주 (Footnote)

3가지 패턴:

### (a) 자동 생성 (제외 항목 안내)
```js
const excludedNotes = items.filter(i => i.excluded?.length > 0)
  .map(i => `${i.label} : ${i.excluded.join(',')}`)  // 콤마 뒤 공백 X (사용자 요청)
const html = excludedNotes.length
  ? `<p style="margin:12px 0 0;font-size:11px;color:#64748B;line-height:1.6">
       * 제외 항목 (${excludedNotes.join(' / ')})
     </p>`
  : ''
```

### (b) 고정 안내 문구 (베이스라인 등)
```js
function baselineNoteHtml() {
  return `
    <p style="margin:8px 0 0;font-size:12px;color:#1A1A1A;font-weight:500">*Baseline 재조정</p>
    <p style="margin:2px 0 0;font-size:12px;color:#1A1A1A">-항목A : ...</p>
    <p style="margin:2px 0 0;font-size:12px;color:#1A1A1A">-항목B/C : ...</p>
  `
}
```

### (c) 인라인 (행마다 해당 항목만)
범프 차트나 다중 라인 차트에서 각 행 끝에 그 항목 안내만:
```js
function notePerItem(item) {
  if (item.id === 'a') return `<p style="...">${itemANote}</p>`
  if (item.id === 'b' || item.id === 'c') return `<p style="...">${itemBCNote}</p>`
  return ''
}
```

---

## 메타 — 본 문서 활용

본 문서는 **데이터/도메인 불문 일반 빌딩 스킬**.

새 대시보드를 만들 때:
1. Part 0 디자인 토큰 선언 (색상 팔레트, 폰트, 간격)
2. Part 1 PRD 점검 (사용자/데이터 흐름/필터/게시)
3. Part 2 컴포넌트 골라서 데이터 매핑

도메인 특이값(LG/삼성/국가/제품 등)은 모두 사용자 데이터로 치환 가능. 본 문서는 **컴포넌트와 패턴** 만 다룬다.
