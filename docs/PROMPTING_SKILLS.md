# AGENT.md — Dashboard / Newsletter Design System & Build Skills

> Agentic coding tool (Claude Code, Cursor, Codex) 가 본 레포에서 작업할 때 참조하는 시스템 프롬프트.
> 도메인/데이터 추상화 — 임의 데이터(계열 1~5, 항목 A~F 등)에 적용 가능.

---

## 1. PROJECT CONTEXT

- **Stack**: Node.js + Express, React + Vite (admin SPA), Vanilla JS+SVG (published HTML).
- **Architecture**: 동기화(외부 데이터 소스) → 어드민 편집 → 정적 HTML 게시 → 공개 URL 열람.
- **Tech invariants**:
  - SVG 차트는 서버 사이드 문자열 생성, 클라이언트 필터 변경 시 인라인 JS 가 동일 알고리즘으로 재렌더.
  - 이메일 호환 HTML 은 table-based 레이아웃 사용.
  - 게시 결과는 `PUB_DIR` 정적 파일 — 코드 변경은 재게시 필요.

## 2. COMMANDS

| 목적 | 명령 |
|---|---|
| 단위 테스트 | `npx vitest run` |
| 빌드 (대시보드) | `npx vite build --config vite.dashboard.config.js` |
| 빌드 (전체) | `npm run build` |
| 개발 서버 | `npm run dev` |
| 커밋 메시지 | conventional commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`) |

**변경 후 항상**: 테스트 → 커밋 → 푸시 → 사용자에게 "재게시" 안내.

## 3. FILE LAYOUT

```
src/
  dashboard/
    dashboardTemplate.js   # 대시보드 HTML 생성기
    dashboardClient.js     # 인라인 클라이언트 JS (필터 재렌더)
    dashboardSvg.js        # svgLine / svgMultiLine
    dashboardFormat.js     # statusInfo, mdBold, stripDomain, cntyOfficial
    dashboardConsts.js     # FONT, RED, COMP, BRAND_COLORS, REGIONS, T(i18n)
    dashboardStyles.js     # CSS-in-JS (.vbar, .prod-card, .hero 등)
  citation/
    citationTemplate.js    # Citation 페이지 + bumpChartSvg
    CitationSidebar.jsx
  emailTemplate.js         # 뉴스레터 (V1/V2/V3 카드, weeklyTrendHtml)
  tracker-v2/              # Progress Tracker (Recharts 기반 React SPA)
  shared/
    Sidebar.jsx            # 4개 모드 공유 사이드바
    insightAgent.js        # Anthropic SDK 호출
    constants.js
  excelUtils.js            # 시트 파서 (parseMonthFromDate 등)
routes/
  admin-pages.js           # /admin/* HTML 라우트
  publish.js               # 게시 (KO+EN)
  published.js             # /p/:slug 정적 HTML 서빙
docs/                      # 본 문서 + ADMIN_PLAN.md 등
```

## 4. DESIGN TOKENS (REQUIRED IMPORTS)

```js
import { FONT, RED, COMP, BRAND_COLORS, FALLBACK_COLORS, T } from 'dashboardConsts.js'
import { statusInfo, mdBold, cntyOfficial } from 'dashboardFormat.js'
```

### 4.1 Color Palette (5 categories max)

```js
CATEGORY_COLORS = {
  cat1: '#CF0652',  // 메인 시리즈 (자사 등)
  cat2: '#3B82F6',  // 비교 1
  cat3: '#059669',  // 비교 2
  cat4: '#D97706',  // 비교 3
  cat5: '#7C3AED',  // 비교 4
}
FALLBACK_COLORS = ['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0']
```

**RULE**: 시리즈 매핑은 항상 `BRAND_COLORS[name] || FALLBACK_COLORS[idx % len]` 패턴 (`brandColor(name, idx)` 헬퍼).

### 4.2 Status Tokens

```js
STATUS = {
  lead    : { bg:'#ECFDF5', border:'#A7F3D0', color:'#15803D', label:'Lead' },
  behind  : { bg:'#FFFBEB', border:'#FDE68A', color:'#B45309', label:'Behind' },
  critical: { bg:'#FFF1F2', border:'#FECDD3', color:'#BE123C', label:'Critical' },
  neutral : { bg:'#F8FAFC', border:'#E2E8F0', color:'#475569', label:'—' },
}
ratio >= 100 → lead | >= 80 → behind | < 80 → critical
```

**RULE**: 직접 색상 하드코딩 금지. 항상 `statusInfo(status, lang)` 사용.

### 4.3 Fade / Baseline

```js
FADE = '#64748B'           // 진한 회색 (선/마커)
FADE_OPACITY = 0.85
FADE_LIGHT = '#CBD5E1'     // 옅은 회색 (grid)
```

### 4.4 Typography

```
font-family : 'LGEIText','LG Smart','Arial Narrow', Arial, sans-serif
font-xs  10px  (라벨, 각주)
font-sm  12px  (본문)
font-md  14px  (카드 텍스트)
font-lg  18px  (카드 점수)
font-xl  22px  (섹션 타이틀)
font-2xl 28px  (Metric 큰 숫자)
font-3xl 60px  (Hero 점수)

letter-spacing :
  영문 14px: -0.9px
  한글 14px: -0.5px
  숫자 18px+: -1.8px
  좁은 컬럼명: -0.6px
```

### 4.5 Spacing

```
gap-xs 3px  | gap-sm 6px  | gap-md 12px | gap-lg 24px
border-radius card 8~12px | badge 5~6px | bar 4px top
```

## 5. DATA INTERFACES (CANONICAL)

본 레포 전체에서 가정하는 데이터 shape — 새 컴포넌트 작성 시 이 shape 부터 매핑.

```js
// 단일 시계열
{ labels: ['T1','T2','T3','T4'], data: [12, 15, 18, 14] }

// 다중 시계열
{
  labels: ['T1','T2','T3'],
  series: { cat1:[12,15,18], cat2:[10,11,13], cat3:[8,9,11] }
}

// 카드 아이템
{
  id: 'a', label: '항목 A',
  score: 88.1, prev: 88.9,
  comp: 87.2, compName: '계열2',
  status: 'lead' | 'behind' | 'critical',
  weekly: [80,82,85,88],
  monthly: [{ date:'2026-04', score:88.1 }, ...],
}

// 그룹 차트 아이템 (per item, multi-group bars)
{ id, label, values: { cat1:87, cat2:90, cat3:42 } }

// 랭킹 (Bump Chart)
{
  months: ['M1','M2','M3'],
  rankings: { item1:{M1:1, M2:2, M3:1}, item2:{...} },
}

// 국가/그룹별 monthly (필터 재집계용)
{
  product, country, score, prev, vsComp, compName,
  monthlyScores: [{ date, score, compScore, compName, allScores }]
}
```

## 6. DIRECTIVES — 작업별 RULE

### 6.1 SVG Chart 변경 (`dashboardSvg.js`)

- **WHEN**: svgLine / svgMultiLine 시그니처/동작 변경 시.
- **DO**:
  - 서버 (`dashboardSvg.js`) 와 클라이언트 (`dashboardClient.js` 의 `_miniSvg` / `_miniSvgNullAware`) 를 **동시에** 수정.
  - 옵션 추가 시 두 함수 모두 동일 시그니처 유지.
  - 옵션 객체: `{ fadeBeforeIdx, baselineLabel, labelOffsetY, lineOffsetY }`.
- **DON'T**: 서버만 변경 후 푸시. 클라이언트 필터 변경 시 차트가 깨짐.
- **VERIFY**: `npx vitest run` 후 사용자에게 iframe 콘솔에서 `_miniSvg` 확인 요청.

### 6.2 Newsletter 컨테이너 너비

- **WHEN**: `emailTemplate.js` 의 `containerWidth` 또는 외곽 padding 변경 요청.
- **DO**:
  - 기본값 940px 고정. 950~980 확장 시도 금지 (사용자 viewport 1000px 에서 우측 짤림).
  - `align="center"` 유지, 외곽 td `padding:24px 0`.
- **DON'T**:
  - `body { min-width }` 추가 (iframe 컨텍스트에서 클립).
  - `body { overflow-x:hidden }` (우측 잘림).
- **VERIFY**: 변경 후 사용자에게 `window.innerWidth` 확인 요청.

### 6.3 Anthropic SDK 호출

- **DO**:
  ```js
  try {
    const msg = await client.messages.stream(req).finalMessage()
    return msg
  } catch (e) {
    return await client.messages.create(req)  // 테스트 fallback
  }
  ```
- **WHY**: 5분 초과 non-streaming 호출은 `403 streaming required`.

### 6.4 데이터 날짜 파싱 (`parseMonthFromDate`)

- 지원해야 하는 형식:
  | 형식 | 예 |
  |---|---|
  | `2026-04` | ISO |
  | `26년 4월` | 한국식 2자리 연도 → `2000 + YY` |
  | `Apr 2026` / `Apr 26` | 영문 |
  | `4월` / `Apr` | 연도 없음 |
- 반환: `year * 12 + month` (정렬 키, year 없으면 month 만).
- **DON'T**: 4자리 연도(`\d{4}`) 만 매칭. 한국식 `(\d{2})년` 누락 시 sort 깨짐.

### 6.5 국가/그룹 필터 + 시계열 재집계

- **DO**: 국가별 `monthlyScores` 길이가 다를 수 있음 → **date 문자열 키 매칭**.
- **DON'T**: 배열 인덱스(`ms[ms.length-1]`) 로 직접 합산. 잘못된 월 비교 발생.
- **헬퍼**: `_filteredMonthlySeries(prodId, countries)` — 첫 매칭 entry 의 date 순서를 canonical 로 사용.

### 6.6 베이스라인 리셋 (특정 카테고리/시점)

- 일반화: "특정 카테고리의 특정 시점부터 데이터 정의가 바뀐 경우" 마킹.
- 3요소 한 세트:
  1. 이전 데이터 회색 페이드 (`#64748B` opacity 0.85)
  2. 시작점 마커: `<circle r="4" fill="#000" stroke="${color}" stroke-width="3"/>`
  3. dashed vertical + 라벨 (`stroke-dasharray="3,3"`)
- 카테고리·모드별 라벨 위치 차등 가능 — `labelOffsetY` / `lineOffsetY` 옵션.

### 6.7 사이드바 모드 분기 (`Sidebar.jsx`)

- 4개 mode: `newsletter` · `dashboard` · `monthly-report` · `weekly-report`
- 신규 텍스트 입력 추가 시 모드별 노출 명시:
  ```jsx
  {mode !== 'monthly-report' && mode !== 'dashboard' && (<>...</>)}
  ```
- `dashboard` 모드는 Notice 외 텍스트 입력 모두 숨김.

### 6.8 게시 워크플로우

- 코드 변경 → 사용자에게 두 단계 안내:
  1. 사이드바 "구글 시트 동기화" (파싱 로직 변경 시)
  2. 사이드바 "웹사이트 게시" (클라이언트 JS/렌더 변경 시)
- 단순 새로고침 무효 — `PUB_DIR` 정적 HTML.

### 6.9 디버깅 (iframe 컨텍스트)

- 어드민은 React + iframe 프리뷰 구조.
- 콘솔 명령 안내 시 항상: "iframe 우클릭 → 이 프레임 검사".
- iframe 내 글로벌: `_productsCnty`, `_filteredMomD`, `_periodMode`, `_curMonthIdxIn12`.

### 6.10 시각 조정 단위

- 한 번 변경: 5/10/25/30px, 5~10% 자간, 0.1~0.5px letter-spacing.
- 큰 변경(100px+, 80%+)은 사용자 명시 요청 시에만.
- 답변에 수치 명시 ("+20px 아래로", "-10% 자간").

### 6.11 텍스트 / 각주

- 사용자 제공 문구는 **그대로** 사용. 임의 다듬기 금지.
- 명백한 오타는 사용자 지시 후 일괄 치환 (`replace_all: true`).
- 미출시 각주 콤마 뒤 공백 없음 (사용자 요청).

## 7. COMPONENT LIBRARY (HTML/SVG PATTERNS)

각 컴포넌트: WHAT / DATA / CODE / RULE.

### C-01 Hero 카드

```html
<div style="background:#0F172A;color:#E2E8F0;padding:32px;border-radius:16px">
  <div style="font-size:14px;color:#94A3B8;letter-spacing:2px;text-transform:uppercase">${title}</div>
  <div style="display:flex;align-items:baseline;gap:12px;margin:8px 0">
    <span style="font-size:60px;font-weight:900;color:#fff">${score.toFixed(1)}</span>
    <span style="font-size:24px;color:#94A3B8">%</span>
    <span style="font-size:18px;color:${dColor}">${dArrow} ${Math.abs(delta).toFixed(1)}%p</span>
  </div>
  <div style="font-size:12px;color:#94A3B8;margin-top:16px">${modelLine}<br/>${scopeLine}</div>
</div>
```

### C-02 Notice / KPI Logic 박스

```html
<div style="background:#FEF2F4;border:1px solid #FECDD3;border-radius:10px;padding:14px 18px">
  <div style="font-size:11px;font-weight:700;color:#BE123C;letter-spacing:1px">NOTICE</div>
  <div style="font-size:13px;color:#1A1A1A;line-height:1.6">${mdBold(text)}</div>
</div>
```

```js
function mdBold(t) {
  return (t || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\r?\n/g, '<br>')
}
```

### C-03 카테고리 카드 (간단, 미니 차트 포함)

```html
<div style="border:2px solid ${st.border};border-radius:8px;background:#fff;padding:12px">
  <div style="display:flex;justify-content:space-between;align-items:center">
    <span style="font-size:14px;font-weight:900;letter-spacing:-0.5px">${label}</span>
    <span style="background:${st.bg};color:${st.color};border:1px solid ${st.border};
      border-radius:5px;padding:0 4px;font-size:10px;font-weight:700">${st.label}</span>
  </div>
  <div style="display:flex;align-items:baseline;gap:6px;margin:6px 0">
    <span style="font-size:22px;font-weight:900;letter-spacing:-1.8px">${score.toFixed(1)}</span>
    <span style="font-size:11px;color:#94A3B8">%</span>
    <span style="font-size:12px;font-weight:700;color:${deltaColor}">${deltaArrow}${Math.abs(score-prev).toFixed(1)}%p</span>
  </div>
  <div style="font-size:11px;color:#64748B">${compName} 대비 <span style="color:${ratioColor};font-weight:700">${ratio}%</span></div>
  <div style="margin-top:8px">${svgLine(weekly, labels, 300, 90, sparkColor)}</div>
</div>
```

### C-04 카테고리 카드 (그룹 막대형)

내부에 N(최대 10) 그룹 막대. 헤더(C-03 와 동일) + table-layout fixed 막대.

### C-05 그룹 막대 (vbar)

```html
<div class="vbar-item">
  <div class="vbar-cols" style="display:flex;gap:3px;align-items:flex-end">
    ${Object.entries(values).map(([name, v], i) => {
      const color = colorOf(name, i)
      const hPx = Math.max(3, Math.round(v / localMax * 130))
      return `
        <div style="flex:0 0 26px;display:flex;flex-direction:column;align-items:center">
          <span style="font-size:11px;font-weight:700;color:${color}">${v.toFixed(1)}</span>
          <div style="width:100%;height:${hPx}px;background:${color};border-radius:4px 4px 0 0"></div>
          <span style="font-size:10px;color:#94A3B8;width:26px;text-align:center;
            overflow:visible;letter-spacing:-0.6px;white-space:nowrap">${name}</span>
        </div>`
    }).join('')}
  </div>
  <span style="font-size:15px;font-weight:600;color:#475569">${label}</span>
</div>
```

**RULE**: `overflow:visible` 필수 (브랜드명 짤림 방지). 컬럼 폭 26px 고정, 막대 max 130px.

### C-06 가로 막대 (Top N)

```html
${items.map((it, i) => {
  const color = i === 0 ? '#15803D' : i < 3 ? '#22C55E' : '#94A3B8'
  const wPct = (it.value / maxValue * 100).toFixed(1)
  return `
    <div style="display:flex;align-items:center;gap:8px;padding:5px 0">
      <span style="width:120px;font-size:13px;font-weight:600">${it.name}</span>
      <div style="flex:1;background:#F1F5F9;border-radius:4px;height:18px">
        <div style="width:${wPct}%;height:100%;background:${color};border-radius:4px"></div>
      </div>
      <span style="width:80px;text-align:right;font-weight:700;color:${color}">${it.value.toLocaleString()}</span>
    </div>`
}).join('')}
```

### C-07 단일 라인 차트 (svgLine)

`dashboardSvg.js` 의 `svgLine(data, labels, w, h, color, opts)` 참조.

핵심 시그니처:
```js
function svgLine(data, labels, w, h, color, opts = {}) {
  // opts: { fadeBeforeIdx, baselineLabel, labelOffsetY, lineOffsetY }
  // viewBox height = h + 12, style "overflow:visible"
  // 1) Area path (gradient fill)
  // 2) Line path
  // 3) Pre-baseline path (회색, opacity 0.85)
  // 4) Circles (베이스라인 시작점은 fill #000, stroke 3)
  // 5) Value labels (font 12 bold)
  // 6) Dashed vertical + baseline label
  // 7) X-axis labels (font 12)
}
```

### C-08 다중 라인 차트 (svgMultiLine)

`dashboardSvg.js` 의 `svgMultiLine(brandData, labels, w, h, opts)`.

**RULE**:
- 메인 시리즈 (idx 0): stroke 2.5, opacity 1, r 3.5
- 비교 시리즈: stroke 1.5, opacity 0.7, r 2.5
- 4단 grid (`#E8EDF2`)
- X 라벨 없음 (외부 테이블 헤더가 대체)

### C-09 범프 차트 (Bump Chart)

`citationTemplate.js` 의 `bumpChartSvg(names, rankings, months, maxRank, labelFn)`.

**핵심**:
- ROW_H = 52, ribbon 굵기 = 52 × 0.38 = 19.76
- 둥근 양 끝 + C-bezier 보간
- 12색 고정 팔레트 (BUMP_COLORS, BRAND_COLORS 와 별개)
- 라벨: 검정 22px weight 700, 각 시점

### C-10 미니 트렌드 바 (메일 호환)

table-based, max-height 24px:
```html
<table border="0" cellpadding="0" cellspacing="0" style="display:inline-table">
  <tr>
    ${data.map((v, i) => {
      const h = Math.round(((v - localMin) / range) * 24) + 4
      const isPre = fadeBeforeIdx > 0 && i < fadeBeforeIdx
      const barColor = isPre ? '#64748B' : color
      return `<td style="vertical-align:bottom;padding:0 2px">
        <table align="center">
          <tr><td style="font-size:10px;font-weight:700;color:${barColor}">${v.toFixed(1)}</td></tr>
          <tr><td width="10" height="${h}" style="background:${barColor}">&nbsp;</td></tr>
          <tr><td style="font-size:10px;color:#94A3B8">${labels[i]||''}</td></tr>
        </table>
      </td>`
    }).join('')}
  </tr>
</table>
```

### C-11 신호등 / 뱃지

```html
<span style="background:${st.bg};color:${st.color};border:1px solid ${st.border};
  border-radius:5px;padding:0 4px;font-size:10px;font-weight:700">${st.label}</span>
```

### C-12 베이스라인 마커 (3요소)

```js
// (a) Fade pre-segment
<path d="..." stroke="#64748B" opacity="0.85"/>
// (b) Baseline start point
<circle cx cy r="4" fill="#000" stroke="${color}" stroke-width="3"/>
// (c) Dashed vertical + 라벨
<line x1=bx y1=top x2=bx y2=bottom stroke="#64748B" stroke-dasharray="3,3"/>
<text x=${onRight?bx-5:bx+5} y=${labelY} text-anchor="${onRight?'end':'start'}"
  font-size="9" fill="#64748B">*Baseline reset</text>
```

**RULE**: `bx > w * 0.7` → onRight (좌측 정렬).

### C-13 각주 (Footnote) 3종

```js
// (a) 자동 생성 (제외 항목)
`* 제외 항목 (${parts.join(' / ')})`  // 콤마 뒤 공백 없음

// (b) 고정 안내 (베이스라인 등)
`<p style="font-size:12px;color:#1A1A1A;font-weight:500">*Baseline 재조정</p>
 <p>-항목 A : ...</p>
 <p>-항목 B/C : ...</p>`

// (c) 인라인 (행마다 해당 항목만)
function notePerItem(item) {
  if (item.id === 'a') return `<p>${itemANote}</p>`
  return ''
}
```

### C-14 Composed 차트 (Bar + Line)

Recharts `<ComposedChart>` 또는 SVG 직접. 막대 max-width 32~36px, 라인 stroke `#111827` weight 2.

### C-15 Summary Metric 4-Grid

```html
<div style="background:${st.bg};border:1px solid ${st.border};border-radius:12px;padding:12px">
  <div style="display:flex;justify-content:space-between">
    <span style="font-size:11px;font-weight:700;color:#475569;letter-spacing:0.3px">${label}</span>
    <span style="width:10px;height:10px;border-radius:50%;background:${st.color};
      box-shadow:0 0 6px ${st.color}55"></span>
  </div>
  <div style="display:flex;align-items:baseline;gap:4px">
    <span style="font-size:28px;font-weight:900;color:${st.color}">${value}</span>
    <span style="font-size:13px;color:#94A3B8">${unit}</span>
  </div>
  <div style="height:4px;background:rgba(15,23,42,0.08);border-radius:3px;overflow:hidden">
    <div style="width:${barRate}%;height:100%;background:${st.color}"></div>
  </div>
  <div style="font-size:11px;color:#64748B">${sub}</div>
</div>
```

### C-16 KPI 정량 테이블

```html
<table style="width:100%;border-collapse:collapse;font-size:13px">
  <thead>
    <tr style="background:#F8FAFC;border-bottom:2px solid #CF0652">
      <th style="text-align:left">담당</th><th>카테고리</th>
      <th style="text-align:right">목표</th><th style="text-align:right">실적</th>
      <th style="text-align:right">달성률</th>
    </tr>
  </thead>
  <tbody>
    ${rows.map((r, i) => `
      <tr style="border-bottom:1px solid #F1F5F9;${i%2===0?'background:#FAFBFC':''}">
        <td>${r.stakeholder}</td><td>${r.category}</td>
        <td style="text-align:right;font-variant-numeric:tabular-nums">${fmt(r.goal)}</td>
        <td style="text-align:right;font-weight:600">${fmt(r.actual)}</td>
        <td style="text-align:right;font-weight:700;color:${rateColor(r.rate)}">${r.rate.toFixed(1)}%</td>
      </tr>`).join('')}
    <tr style="background:#1E293B;color:#fff;font-weight:700">...합계 행...</tr>
  </tbody>
</table>
```

**RULE**: 숫자 `text-align:right` + `font-variant-numeric:tabular-nums`. 합계 행은 진한 배경.

### C-17 Qualitative 정성 테이블

상태 dot (완료 #15803D / 진행 #D97706 / 계획 #94A3B8) + 카테고리/목표/담당.

### C-18 Category Card

```html
<div style="border-left:4px solid ${st.color};border-radius:8px;padding:10px 14px;
  display:flex;justify-content:space-between;align-items:center">
  <div><div style="font-size:12px;color:#64748B">${name}</div>
    <div style="font-size:20px;font-weight:900">${score.toFixed(1)}%</div></div>
  <div style="text-align:right">
    <div style="font-size:11px;color:#94A3B8">목표</div>
    <div style="font-size:14px;font-weight:700;color:${st.color}">${target}%</div></div>
</div>
```

### C-19 파이 차트

```js
function pieChartSvg(slices, w=240, h=240) {
  const cx = w/2, cy = h/2, r = Math.min(w,h)/2 - 20
  const total = slices.reduce((s, x) => s + x.value, 0)
  let acc = 0, svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}">`
  slices.forEach((s, i) => {
    const a0 = (acc/total) * 2 * Math.PI - Math.PI/2
    const a1 = ((acc + s.value)/total) * 2 * Math.PI - Math.PI/2
    acc += s.value
    const x0 = cx + r*Math.cos(a0), y0 = cy + r*Math.sin(a0)
    const x1 = cx + r*Math.cos(a1), y1 = cy + r*Math.sin(a1)
    const large = (a1-a0) > Math.PI ? 1 : 0
    svg += `<path d="M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)}
      A${r},${r} 0 ${large} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z"
      fill="${colorOf(s.name, i)}" stroke="#fff" stroke-width="2"/>`
    // 라벨 (5% 이상만)
    if (s.value/total >= 0.05) {
      const am = (a0+a1)/2
      const lx = cx + r*0.65*Math.cos(am), ly = cy + r*0.65*Math.sin(am)
      svg += `<text x="${lx}" y="${ly}" text-anchor="middle"
        font-size="13" font-weight="700" fill="#fff">${((s.value/total)*100).toFixed(0)}%</text>`
    }
  })
  return svg + '</svg>'
}
```

**RULE**: 최대 5~6 슬라이스. 5% 이하 라벨 생략. 외부 범례 권장.

### C-20 4분면 점도표

```js
function quadrantSvg(items, w=400, h=320, opts={}) {
  const padL=40, padR=20, padT=20, padB=40
  const cw=w-padL-padR, ch=h-padT-padB
  const xMid=padL+cw/2, yMid=padT+ch/2
  let svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}">`
  // 우상(우수): 옅은 녹색 / 좌하(부진): 옅은 빨강
  svg += `<rect x="${xMid}" y="${padT}" width="${cw/2}" height="${ch/2}" fill="#ECFDF5"/>`
  svg += `<rect x="${padL}" y="${yMid}" width="${cw/2}" height="${ch/2}" fill="#FFF1F2"/>`
  // 십자축
  svg += `<line x1="${padL}" y1="${yMid}" x2="${padL+cw}" y2="${yMid}" stroke="#94A3B8"/>`
  svg += `<line x1="${xMid}" y1="${padT}" x2="${xMid}" y2="${padT+ch}" stroke="#94A3B8"/>`
  // 점 + 라벨
  items.forEach((it, i) => {
    const x = padL + ((it.x - (opts.xMin||0))/((opts.xMax||100)-(opts.xMin||0))) * cw
    const y = padT + (1 - (it.y - (opts.yMin||0))/((opts.yMax||100)-(opts.yMin||0))) * ch
    svg += `<circle cx="${x}" cy="${y}" r="${it.size||6}"
      fill="${colorOf(it.group, i)}" opacity="0.7" stroke="#fff" stroke-width="2"/>`
    svg += `<text x="${x}" y="${y - (it.size||6) - 4}" text-anchor="middle"
      font-size="11" font-weight="600">${it.name}</text>`
  })
  return svg + '</svg>'
}
```

### C-21 / C-22 / C-23 — Newsletter 제품 카드 V1 / V2 / V3

- **V1**: 점수 + MoM + 미니 트렌드 바 (C-10 임베드).
- **V2**: 10그룹 막대 (각 그룹 width 10%).
- **V3**: 각 그룹별 1위 비교 (그룹별 status 색 + compShort + ratio%).

공통:
- 카드 width 33% (3장 한 행, 메일 호환 table)
- 테두리 색 = `statusInfo(p.status, lang).border`
- 자간: 영문 14px `-0.9px` / 한글 14px `-0.5px` / 숫자 18px+ `-1.8px`
- 경쟁사 브랜드명 자간: 항상 `-1px`

## 8. ANTI-PATTERNS (NEVER DO)

```
NEVER  대시보드 색상을 직접 하드코딩 → STATUS / BRAND_COLORS 사용
NEVER  서버 SVG 함수만 수정 후 푸시 → 클라이언트 짝도 동시 수정
NEVER  date 문자열 비교를 배열 인덱스로 대체 → date 매칭 필수
NEVER  newsletter containerWidth > 940 → 우측 짤림
NEVER  body { overflow-x:hidden } 또는 min-width 추가 → iframe 클립
NEVER  4자리 연도(\d{4}) 만 매칭 → '26년' 누락 → sort 깨짐
NEVER  Anthropic non-streaming 으로 max_tokens 큰 호출 → 403
NEVER  사용자 텍스트 임의 다듬기 → 그대로 사용
NEVER  콤마 뒤 공백 추가 (미출시 각주) → 사용자 요청
NEVER  한 번에 100px+ 변경 → 5~30px 단위 반복
NEVER  align="center" 변경 → 사용자 명시 금지
```

## 9. VERIFICATION & DEBUGGING

### 9.1 테스트 트리거

| 변경 영역 | 명령 |
|---|---|
| 코드 변경 후 | `npx vitest run` |
| 빌드 검증 | `npx vite build --config vite.dashboard.config.js` |
| 라우트 변경 | `node -e "import('./routes/admin-pages.js').then(()=>console.log('OK'))"` |

### 9.2 iframe 진단 명령 (사용자 요청용)

```js
// 데이터 원형
_productsCnty.find(r => r.country === 'US' && r.product === 'TV').monthlyScores

// 함수 반환값
_filteredMomD('tv', ['US'])
_filteredMonthlySeries('tv', ['US'])

// DOM 표시값 (보이는 카드만)
[...document.querySelectorAll('.prod-card[data-prodid="tv"]')]
  .filter(c => c.offsetParent !== null)
  .map(c => ({
    parent: c.closest('[id]')?.id,
    score: c.querySelector('.prod-score')?.textContent,
    mom: c.querySelector('.prod-mom')?.textContent,
  }))

// 모드/월
_periodMode             // 'weekly' | 'monthly'
_curMonthIdxIn12        // 0~11
```

### 9.3 사용자에게 안내할 표준 문구

- 모든 변경 후: "재게시 후 확인 부탁드립니다"
- 진단 필요 시: "iframe 우클릭 → 이 프레임 검사 후 다음 명령 실행"
- 의도 불명확 시: AskUserQuestion 으로 선택지 제시

## 10. META

이 문서는 **agentic coding tool 의 컨텍스트로 직접 주입** 가능. 새 기능 추가 시:

1. 기존 RULE / DIRECTIVE 와 충돌 여부 검토
2. 신규 컴포넌트는 §7 패턴 따름 (WHAT/DATA/CODE/RULE 구조)
3. ANTI-PATTERN 발견 시 §8 에 등록
4. 디자인 토큰 변경 시 §4 동기화

본 파일 자체는 도메인 무관 — LG/제품/국가 등 특정 값은 사용자 데이터로 치환 가능.
