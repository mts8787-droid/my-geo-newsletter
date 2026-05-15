# AGENT.md — Design / Graph / Table 컴포넌트 라이브러리

> 코딩 에이전트가 시각/UI 작업 시 참조하는 디자인 시스템 + 컴포넌트 패턴.
> 데이터 파싱/정제는 별도 `DATA_SKILLS.md` 참조.

---

## 1. PROJECT CONTEXT (DESIGN)

- **Stack**: Express + Vanilla SVG (서버 렌더), React + Recharts (Progress Tracker), 이메일 호환 HTML(table-based).
- **Architecture**:
  - 서버: 정적 HTML/SVG 문자열 생성기
  - 클라이언트: 동일 알고리즘의 인라인 JS 가 필터 변경 시 재렌더
  - 이메일: table-layout 기반 (SVG 미지원 클라이언트 호환)
- **Output**:
  - 대시보드: `/p/GEO-KPI-Dashboard-{KO|EN}` (PUB_DIR 정적 HTML)
  - 뉴스레터: `/p/GEO-Monthly-Report-{KO|EN}` + 월별 suffix
  - 어드민 프리뷰: React iframe srcdoc

## 2. COMMANDS

| 목적 | 명령 |
|---|---|
| 빌드 | `npx vite build --config vite.dashboard.config.js` |
| 테스트 | `npx vitest run` |
| 라우트 검증 | `node -e "import('./routes/admin-pages.js').then(()=>console.log('OK'))"` |

## 3. FILE LAYOUT (DESIGN-RELEVANT)

```
src/
  dashboard/
    dashboardTemplate.js   # HTML 생성기 (Hero, productSection, trendDetail 등)
    dashboardClient.js     # 인라인 클라이언트 JS (_miniSvg, _miniSvgNullAware)
    dashboardSvg.js        # svgLine / svgMultiLine / brandColor
    dashboardFormat.js     # statusInfo / mdBold / cntyOfficial
    dashboardConsts.js     # FONT / RED / COMP / BRAND_COLORS / T(i18n)
    dashboardStyles.js     # CSS-in-JS (.vbar, .prod-card, .hero 등)
  citation/
    citationTemplate.js    # bumpChartSvg + Citation 페이지
  emailTemplate.js         # 뉴스레터 V1/V2/V3 카드, weeklyTrendHtml
  tracker-v2/
    components/            # Recharts 기반 SummaryCards, PerformanceCharts, KPITable
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
font-xs   10px  (라벨, 각주)
font-sm   12px  (본문)
font-md   14px  (카드 텍스트)
font-lg   18px  (카드 점수)
font-xl   22px  (섹션 타이틀)
font-2xl  28px  (Metric 큰 숫자)
font-3xl  60px  (Hero 점수)

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

## 5. DESIGN DIRECTIVES

### 5.1 SVG Chart 변경

- **WHEN**: svgLine / svgMultiLine 시그니처/동작 변경 시.
- **DO**:
  - 서버 (`dashboardSvg.js`) + 클라이언트 (`dashboardClient.js` 의 `_miniSvg` / `_miniSvgNullAware`) **동시 수정**.
  - 옵션 객체: `{ fadeBeforeIdx, baselineLabel, labelOffsetY, lineOffsetY }`.
- **DON'T**: 서버만 변경 후 푸시. 필터 적용 시 차트 깨짐.

### 5.2 Newsletter 컨테이너 너비

- `containerWidth = 940` 고정. 이상 확장 금지 (1000px 뷰포트에서 우측 짤림).
- `align="center"` 유지, 외곽 td `padding:24px 0`.
- `body { min-width }` / `overflow-x:hidden` 금지 (iframe 클립).

### 5.3 베이스라인 마커 (시점 분기)

3 요소 한 세트:
1. **Pre 페이드**: 회색 `#64748B`, opacity 0.85
2. **시작점 마커**: `<circle r="4" fill="#000" stroke="${color}" stroke-width="3"/>`
3. **Dashed vertical + 라벨**: `stroke-dasharray="3,3"`, font 9, `*Baseline 재설정`

위치 RULE: `bx > w * 0.7` → onRight (좌측 정렬). `labelOffsetY` / `lineOffsetY` 옵션으로 카테고리·모드별 미세 조정.

### 5.4 사이드바 모드 분기 (`Sidebar.jsx`)

- 4개 mode: `newsletter` · `dashboard` · `monthly-report` · `weekly-report`
- 신규 텍스트 입력 추가 시 모드별 노출 명시:
  ```jsx
  {mode !== 'monthly-report' && mode !== 'dashboard' && (<>...</>)}
  ```
- `dashboard` 모드는 Notice 외 텍스트 입력 모두 숨김.

### 5.5 시각 조정 단위

- 한 번 변경: 5/10/25/30px, 5~10% 자간, 0.1~0.5px letter-spacing.
- 큰 변경(100px+, 80%+)은 사용자 명시 요청 시에만.
- 답변에 수치 명시 ("+20px 아래로", "-10% 자간").

### 5.6 텍스트 / 각주

- 사용자 제공 문구는 **그대로** 사용. 임의 다듬기 금지.
- 명백한 오타는 사용자 지시 후 일괄 치환 (`replace_all: true`).
- 미출시 각주 콤마 뒤 공백 없음.

## 6. ANTI-PATTERNS (DESIGN)

```
NEVER  대시보드 색상 하드코딩 → STATUS / BRAND_COLORS 사용
NEVER  서버 SVG 함수만 수정 → 클라이언트 짝(_miniSvg)도 동시 수정
NEVER  newsletter containerWidth > 940 → 우측 짤림
NEVER  body { overflow-x:hidden } / min-width 추가 → iframe 클립
NEVER  align="center" 변경 → 사용자 명시 금지
NEVER  사용자 텍스트 임의 다듬기 → 그대로 사용
NEVER  한 번에 100px+ 변경 → 5~30px 단위 반복
NEVER  카드 배경 검정/투명 → 항상 #fff (또는 status bg)
```

## 7. COMPONENT LIBRARY (HTML/SVG PATTERNS)

각 컴포넌트: WHAT / DATA / CODE / RULE.

### C-01 Hero 카드

```html
<div style="background:linear-gradient(135deg,#0F172A 0%,#1E293B 100%);color:#E2E8F0;padding:28px 32px;border-radius:16px;border:1px solid #334155">
  <div style="font-size:11px;color:#94A3B8;letter-spacing:3px;text-transform:uppercase;font-weight:700">${title}</div>
  <div style="display:flex;align-items:baseline;gap:14px;margin-top:8px">
    <span style="font-size:60px;font-weight:900;color:#fff;letter-spacing:-3px">${score.toFixed(1)}</span>
    <span style="font-size:22px;color:#94A3B8">%</span>
    <span style="font-size:15px;color:${dColor};font-weight:700">${dArrow} ${Math.abs(delta).toFixed(1)}%p</span>
    <span style="font-size:11px;color:#64748B;letter-spacing:1px">MoM</span>
  </div>
  <div style="display:flex;gap:14px;margin-top:12px;font-size:13px">
    <span style="color:#94A3B8">${compName}</span>
    <span style="color:#fff;font-weight:600">${compScore}%</span>
    <span style="color:${gapColor};font-weight:700">Gap ${gap >= 0 ? '+' : ''}${gap}%p</span>
  </div>
  <div style="font-size:11px;color:#94A3B8;line-height:1.7;margin-top:14px">
    ${modelLine}<br/>${scopeLine}
  </div>
</div>
```

### C-02 Notice / KPI Logic 박스

```html
<div style="background:#FEF2F4;border:1px solid #FECDD3;border-radius:10px;padding:16px 20px">
  <div style="font-size:11px;font-weight:700;color:#BE123C;letter-spacing:1.5px;margin-bottom:6px">NOTICE</div>
  <div style="font-size:13px;color:#1A1A1A;line-height:1.7">${mdBold(text)}</div>
</div>
```

```js
function mdBold(t) {
  return (t || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\r?\n/g, '<br>')
}
```

### C-03 카테고리 카드 (간단, 미니 차트 포함)

```html
<div style="border:2px solid ${st.border};border-radius:10px;background:#fff;padding:14px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
    <span style="font-size:15px;font-weight:900;color:#1A1A1A;letter-spacing:-0.5px">${label}</span>
    <span style="background:${st.bg};color:${st.color};border:1px solid ${st.border};
      border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700">${st.label}</span>
  </div>
  <div style="display:flex;align-items:baseline;gap:6px;margin-bottom:6px">
    <span style="font-size:26px;font-weight:900;letter-spacing:-1.5px">${score.toFixed(1)}</span>
    <span style="font-size:12px;color:#94A3B8">%</span>
    <span style="font-size:12px;font-weight:700;color:${dColor}">${dArrow}${Math.abs(delta).toFixed(1)}%p</span>
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
  <div style="display:flex;gap:3px;align-items:flex-end;justify-content:center;height:130px">
    ${Object.entries(values).map(([name, v], i) => {
      const color = colorOf(name, i)
      const hPx = Math.max(3, Math.round(v / localMax * 130))
      return `
        <div style="flex:0 0 26px;display:flex;flex-direction:column;align-items:center">
          <span style="font-size:11px;font-weight:700;color:${color}">${v.toFixed(1)}</span>
          <div style="width:100%;height:${hPx}px;background:${color};border-radius:4px 4px 0 0"></div>
          <span style="font-size:10px;color:#94A3B8;width:26px;text-align:center;
            overflow:visible;letter-spacing:-0.6px;white-space:nowrap;font-weight:600">${name}</span>
        </div>`
    }).join('')}
  </div>
  <span style="font-size:14px;font-weight:600;color:#475569;text-align:center;margin-top:6px">${label}</span>
</div>
```

**RULE**: `overflow:visible` 필수 (브랜드명 짤림 방지). 컬럼 폭 26px, 막대 max 130px.

### C-06 가로 막대 (Top N)

```html
${items.map((it, i) => {
  const color = i === 0 ? '#15803D' : i < 3 ? '#22C55E' : '#94A3B8'
  const w = (it.value / maxValue * 100).toFixed(1)
  return `
    <div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid #F1F5F9">
      <span style="width:24px;height:24px;border-radius:50%;background:${i===0?'#FEF3C7':'#F1F5F9'};
        color:${i===0?'#B45309':'#475569'};display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700">${i+1}</span>
      <span style="width:120px;font-size:13px;font-weight:600">${it.name}</span>
      <div style="flex:1;background:#F1F5F9;border-radius:4px;height:20px">
        <div style="width:${w}%;height:100%;background:${color};border-radius:4px"></div>
      </div>
      <span style="width:130px;text-align:right;font-weight:700;color:${color};font-variant-numeric:tabular-nums">
        ${it.value.toLocaleString()} (${(it.ratio*100).toFixed(1)}%)
      </span>
    </div>`
}).join('')}
```

### C-07 단일 라인 차트 (svgLine)

`dashboardSvg.js` 의 `svgLine(data, labels, w, h, color, opts)`.

핵심:
```js
opts = { fadeBeforeIdx, baselineLabel, labelOffsetY, lineOffsetY }
// viewBox height = h + 12, style "overflow:visible"
// 1) Area path (gradient fill)
// 2) Line path
// 3) Pre-baseline path (회색, opacity 0.85)
// 4) Circles (베이스라인 시작점 fill #000, stroke 3)
// 5) Value labels (font 12 bold)
// 6) Dashed vertical + baseline label
// 7) X-axis labels (font 12)
```

### C-08 다중 라인 차트 (svgMultiLine)

**RULE**:
- 메인 시리즈 (idx 0): stroke 2.5, opacity 1, r 3.5
- 비교 시리즈: stroke 1.5, opacity 0.7, r 2.5
- 4단 grid (`#E8EDF2`)
- X 라벨 없음 (외부 테이블 헤더가 대체)

### C-09 범프 차트 (Bump Chart)

`citationTemplate.js` 의 `bumpChartSvg(names, rankings, months, maxRank, labelFn)`.

- ROW_H = 52, ribbon 굵기 = 52 × 0.38
- 둥근 양 끝 + C-bezier 보간
- 12색 고정 팔레트 (`BUMP_COLORS`)
- 라벨: 검정 22px weight 700

### C-10 미니 트렌드 바 (메일 호환)

table-based, max-height 24px:
```html
<table border="0" cellpadding="0" cellspacing="0" style="display:inline-table">
  <tr>${data.map((v, i) => {
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
  }).join('')}</tr>
</table>
```

### C-11 신호등 / 뱃지

```html
<span style="background:${st.bg};color:${st.color};border:1px solid ${st.border};
  border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700">${st.label}</span>
```

### C-12 베이스라인 마커 (3요소)

```js
// (a) Pre fade
<path d="..." stroke="#64748B" opacity="0.85"/>
// (b) Baseline start point
<circle cx cy r="4" fill="#000" stroke="${color}" stroke-width="3"/>
// (c) Dashed vertical + 라벨
<line x1=bx y1=top x2=bx y2=bottom stroke="#64748B" stroke-dasharray="3,3"/>
<text x=${onRight?bx-5:bx+5} y=${labelY} text-anchor="${onRight?'end':'start'}"
  font-size="9" fill="#64748B">*Baseline reset</text>
```

### C-13 각주 (Footnote) 3종

```js
// (a) 자동 생성 (제외 항목) — 콤마 뒤 공백 없음
`* 제외 항목 (${parts.join(' / ')})`

// (b) 고정 안내 (베이스라인 등)
`<p style="font-size:12px;color:#1A1A1A;font-weight:500">*Baseline 재조정</p>
 <p>-항목 A : ...</p>`

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
<div style="background:${st.bg};border:1px solid ${st.border};border-radius:12px;padding:14px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
    <span style="font-size:11px;font-weight:700;color:#475569;letter-spacing:0.4px">${label}</span>
    <span style="width:10px;height:10px;border-radius:50%;background:${st.color};
      box-shadow:0 0 6px ${st.color}55"></span>
  </div>
  <div style="display:flex;align-items:baseline;gap:5px;margin-bottom:6px">
    <span style="font-size:30px;font-weight:900;color:${st.color}">${value}</span>
    <span style="font-size:14px;color:#94A3B8">${unit}</span>
  </div>
  <div style="height:4px;background:rgba(15,23,42,0.08);border-radius:3px;overflow:hidden;margin-bottom:6px">
    <div style="width:${barRate}%;height:100%;background:${st.color}"></div>
  </div>
  <div style="font-size:11px;color:#64748B;font-weight:500">${sub}</div>
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
    <tr style="background:#1E293B;color:#fff;font-weight:700">...합계...</tr>
  </tbody>
</table>
```

**RULE**: 숫자 `text-align:right` + `font-variant-numeric:tabular-nums`. 합계 행 진한 배경.

### C-17 Qualitative 정성 테이블

상태 dot (완료 #15803D / 진행 #D97706 / 계획 #94A3B8) + 카테고리/목표/담당.

### C-18 Category Card (좌측 컬러 보더)

```html
<div style="border-left:5px solid ${st.color};border-radius:8px;padding:12px 16px;
  display:flex;justify-content:space-between;align-items:center">
  <div><div style="font-size:12px;color:#64748B">${name}</div>
    <div style="font-size:22px;font-weight:900">${score.toFixed(1)}%</div></div>
  <div style="text-align:right">
    <div style="font-size:10px;color:#94A3B8">목표</div>
    <div style="font-size:15px;font-weight:700;color:${st.color}">${target}%</div></div>
</div>
```

### C-19 파이 차트

```js
function pieChartSvg(slices, w=240, h=240) {
  const cx = w/2, cy = h/2, r = Math.min(w,h)/2 - 20
  const total = slices.reduce((s, x) => s + x.value, 0)
  let acc = 0, svg = `<svg viewBox="0 0 ${w} ${h}">`
  slices.forEach((s, i) => {
    const a0 = (acc/total) * 2*Math.PI - Math.PI/2
    const a1 = ((acc+s.value)/total) * 2*Math.PI - Math.PI/2
    acc += s.value
    const x0 = cx + r*Math.cos(a0), y0 = cy + r*Math.sin(a0)
    const x1 = cx + r*Math.cos(a1), y1 = cy + r*Math.sin(a1)
    const large = (a1-a0) > Math.PI ? 1 : 0
    svg += `<path d="M${cx},${cy} L${x0},${y0} A${r},${r} 0 ${large} 1 ${x1},${y1} Z"
      fill="${colorOf(s.name, i)}" stroke="#fff" stroke-width="2"/>`
    if (s.value/total >= 0.05) {
      const am = (a0+a1)/2
      svg += `<text x="${cx + r*0.65*Math.cos(am)}" y="${cy + r*0.65*Math.sin(am)}"
        text-anchor="middle" font-size="13" font-weight="700" fill="#fff">${((s.value/total)*100).toFixed(0)}%</text>`
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
  let svg = `<svg viewBox="0 0 ${w} ${h}">`
  svg += `<rect x="${xMid}" y="${padT}" width="${cw/2}" height="${ch/2}" fill="#ECFDF5"/>`  // 우상 우수
  svg += `<rect x="${padL}" y="${yMid}" width="${cw/2}" height="${ch/2}" fill="#FFF1F2"/>`   // 좌하 부진
  svg += `<line x1="${padL}" y1="${yMid}" x2="${padL+cw}" y2="${yMid}" stroke="#94A3B8"/>`
  svg += `<line x1="${xMid}" y1="${padT}" x2="${xMid}" y2="${padT+ch}" stroke="#94A3B8"/>`
  items.forEach((it, i) => {
    const x = padL + (it.x/100) * cw, y = padT + (1 - it.y/100) * ch
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
- **V2**: 10그룹 막대 (각 그룹 width 10%, 14px 바).
- **V3**: 각 그룹별 1위 비교 (그룹별 status 색 + SS/ratio%).

공통:
- 카드 width 305px (33% of 940 컨테이너)
- 테두리 색 = `statusInfo(p.status, lang).border`
- 자간: 영문 14px `-0.9px` / 한글 14px `-0.5px` / 숫자 18px+ `-1.8px`
- 경쟁사 브랜드명 자간 항상 `-1px`

## 8. META

도메인 무관. 신규 컴포넌트 추가 시 C-XX 번호 부여 + WHAT/DATA/CODE/RULE 4단 구조 유지.
