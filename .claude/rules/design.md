# 디자인 룰 (Design Rules)

> 본 프로젝트의 디자인 시스템·컴포넌트 카탈로그 (C-01~C-23)·SVG 패턴·이메일 호환 ANTI-PATTERN. **참조용 매뉴얼**.
> 실제 작업 워크플로우 (step-by-step) 는 `.claude/skills/design/SKILL.md` (스킬) 참조.
> 룰은 Claude Code 가 권고로 따름 (~80%). 100% 강제는 훅 (`.claude/hooks/`) 영역.

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

**영문 모드 자간 추가 압축** (`lang === 'en'`):
- 영문 제품명: 자간 -1px (좁은 셀 정렬 — 한글보다 길어서 압축 필요)
- 경쟁사 브랜드명: 자간 -1px (KO/EN 모두 — `Whirlpool`, `Mitsubishi` 같이 긴 이름)
- KO 모드는 letter-spacing 0 또는 위 기본값

**좁은 셀에서 짤림 방지 패턴**:
- `.vbar-col-name` 같이 vbar 컬럼 라벨 영역: `overflow: visible` 필수 (clip 금지)
- 폰트 크기 11 → 10 + letter-spacing 강화로 길이 압축
- 영문 약어 사용 (예: `Refrigerator → REF`, `Dishwasher → DW`, `Vacuum → VC`) — 시각 일관 + 좁은 셀 호환

**각주 / 인라인 텍스트**:
- 미출시 국가 나열의 콤마/콜론 뒤에 **non-breaking space** (`&#x00A0;`) 사용 — 콤마+공백이 줄바꿈으로 분리되는 것 방지
- Subsidiary 표기는 약자 → 풀네임 (`US, UK` → `United States, United Kingdom`) — Executive Summary 같이 풀네임이 필요한 곳

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

### 5.3 베이스라인 마커 (시점 분기) — 3 요소 한 세트

베이스라인 = 분석 기준점 (예: 새 측정 도구 도입 시점, 정책 변경 등). 이전 데이터는 시각적으로 분리.

#### 3 시각 요소
1. **Pre 페이드**: 회색 `#64748B`, opacity 0.85 — 베이스라인 이전 데이터는 회색
2. **시작점 마커**: `<circle r="4" fill="#000" stroke="${color}" stroke-width="3"/>` — 베이스라인 첫 점에 검정 fill + 컬러 stroke
3. **Dashed vertical + 라벨**: `stroke-dasharray="3,3"`, font 9, `*Baseline 재설정` — 수직선 + 라벨

#### 베이스라인 처리 3 규칙 (commit `baa42ab`)

```
[1] Bridge 제거 — Pre 와 Post 를 잇는 연결선 그리지 않음
    · prePts / postPts 두 path 로 분리
    · 베이스라인 시작점 (fadeBeforeIdx 인덱스) 은 postPts 의 첫 점 — pre 와 잇지 않음
[2] 모든 브랜드 line break 적용 — LG 뿐 아니라 경쟁사 라인도 같은 시점에 끊김
    · svgMultiLine 의 fadeBeforeIdx 가 모든 series 에 동시 적용
    · 한 카테고리만 끊고 다른 건 잇는 것 → 시각 혼란
[3] 라벨은 X축 영역에 (차트 데이터와 안 겹치게)
    · 차트 안쪽 하단 또는 X축 아래
    · 흰 배경 박스 금지 — 라벨 위치 자체로 분리
```

#### 위치 자동 (좌/우)
- `bx > w * 0.7` (오른쪽 끝 가까움) → `onRight` 모드 (라벨 좌측 정렬, text-anchor=end)
- 그 외 → 오른쪽 정렬 (text-anchor=start)
- 카테고리·모드별 미세 조정: `labelOffsetY` / `lineOffsetY` 옵션

### 5.7 그래프 truncate (필터 시점 잘라내기)

월/주차 필터 적용 시 차트 데이터를 잘라내되 **배경 가로선은 유지** (차트 영역 변경 X 시각 안정).

#### 적용 패턴 (`dashboardClient.js`)
```js
// 필터 인덱스 변수
var _curWeekIdx = -1         // 마지막 주 = 전체
var _curMonthIdxIn12 = -1    // 0=Jan, 11=Dec

// truncate 함수가 _curWeekIdx 까지만 라인/포인트 렌더
_trendMultiSvg(brandData, labels, w, h, { truncateAfter: _curWeekIdx })
_truncateTrendTable('#trend-container', _wLabels.length, _curWeekIdx)
```

#### RULE
- 배경 가로선·X축 라벨은 **전체 범위 유지** — 차트 폭 안정
- 라인·포인트만 `_curWeekIdx + 1` 까지 렌더
- 미니 차트도 동일 truncate (제품 카드의 작은 트렌드)
- 트렌드 차트 truncate 시 svg 의 `viewBox` 유지 — 새로 그리지 말고 mask 적용

#### ANTI-PATTERN
- truncate 시 `viewBox` 자체 축소 → 차트 영역이 줄어들면서 다른 카드와 정렬 깨짐
- 배경 가로선까지 잘라내기 → 차트 영역 변경으로 보임

### 5.8 서버 SVG ↔ 클라이언트 짝 동기 (반드시 두 곳)

서버 측 SVG 생성 (`dashboardSvg.js`) 과 클라이언트 측 인라인 JS (`dashboardClient.js`) 가 **같은 차트를 두 번 구현**. 필터 변경 시 클라이언트가 재렌더 — 두 코드가 일치해야 함.

#### 짝 함수 매핑

| 서버 (dashboardSvg.js) | 클라이언트 (dashboardClient.js) | 용도 |
|---|---|---|
| `svgLine(data, labels, w, h, color, opts)` | `_miniSvg(...)` | 단일 라인 (제품 카드 미니 트렌드) |
| `svgMultiLine(brandData, labels, w, h, opts)` | `_trendMultiSvg(...)` | 다중 라인 (트렌드 섹션 큰 차트) |
| - | `_miniSvgNullAware(...)` | null 값에서 선 끊기 (week 미입력 데이터) |

#### RULE
- 서버 SVG 함수 시그니처/동작 변경 → 클라이언트 짝도 **동시 수정**
- 옵션 객체 일치: `{ fadeBeforeIdx, baselineLabel, labelOffsetY, lineOffsetY, truncateAfter }`
- 베이스라인·페이드·truncate 모두 두 곳에서 같은 결과

#### filterTrend DOM 업데이트
필터 변경 시 클라이언트가 `.trend-row` DOM 을 새 SVG 로 교체. **`data-prodid` 속성 필수** — row 매칭 키.

```js
// dashboardClient.js
function filterTrend(prodIds, cntyKeys) {
  _trendContainer.querySelectorAll('.trend-row').forEach(row => {
    const id = row.dataset.prodid    // ← data-prodid 속성으로 매칭
    if (!id) return
    row.innerHTML = _trendMultiSvgRow(id, ...)
  })
}
```

**ANTI-PATTERN**: `data-prodid` 누락 → 필터 변경 시 트렌드 사라짐 회귀 (commit `84cf45a`).

### 5.9 범프 차트 (Bump Chart) — Citation 도메인 랭킹

순위 변화를 시각화 (1위 → 3위 → 1위 같은 흐름). `bumpChartSvg(names, rankings, months, maxRank, labelFn)`.

#### 디자인 RULE
- **height 고정 X** — `viewBox` 비율로 자동 조정 (commit `a8a170c`)
- 폰트 +3pt 보강 (작으면 라벨 가독성 떨어짐)
- 라벨 색상: **검정** (#000) — 회색 배경에서 대비 확보
- 리본 양끝 둥글게 — `stroke-linecap="round"`
- 여백: 차트 양옆 / 상하 최소 (라벨이 영역 안에 들어오게)
- 하단 여백 +20px (라벨 잘림 방지)

#### 적용 위치
- `citationTemplate.js` 의 `citCategoryBumpChartHtml` / `citDomainBumpChartHtml`
- 클라이언트 측: `_bumpChartSvgJS` (필터 시 재렌더용)

### 5.11 라인 차트 양식 7종 (Chart.js 표준 매핑 + 본 레포 SVG 패턴)

Chart.js 의 `docs/samples/line` 디렉토리 기준 7가지 양식. 본 레포의 `dashboardSvg.js` 의 svgLine / svgMultiLine 으로 구현 시 가이드.

#### 1) Basic Line (`line`)
가장 단순한 직선 라인. **본 레포 기본** — `svgLine(data, labels, w, h, color, opts={})`.
- 직선 path: `M x0 y0 L x1 y1 L x2 y2 ...`
- 점: `<circle r="3" fill="${color}"/>`
- 사용처: 카드 미니 트렌드 (svgLine), 모든 트렌드 차트의 기본

#### 2) Interpolation (`interpolation`)
데이터 포인트를 **곡선**으로 연결 (catmull-rom / bezier / cubic spline).
- SVG 구현: `Q` (quadratic Bezier) 또는 `C` (cubic Bezier) path command
  ```
  M x0 y0 Q cx cy x1 y1 ...   // Quadratic
  M x0 y0 C c1x c1y c2x c2y x1 y1 ...   // Cubic
  ```
- **본 레포 RULE**: 시각 일관성 위해 트렌드 차트 **직선만 사용** (Chart.js 가 보여줘도 본 레포는 단순한 직선이 KPI 변화 추적에 더 정확). 곡선 적용 시 시각 왜곡 가능 (보간된 점이 실제 값처럼 보임).
- **언제 곡선 사용 OK**: 데이터가 연속 측정 (sensor data 등) + 정확한 값보다 추세가 중요한 경우만.

#### 3) Multi-axis (`multi-axis`)
단위 다른 두 series 를 같은 차트에 (좌/우 Y축 분리).
- 예: LG 점수 (%) + Anthropic 호출 수 (정수)
- SVG 구현: viewBox 좌측 = primary Y축 (%), 우측 = secondary Y축 (count)
  ```svg
  <text x="0" y="..." text-anchor="end">100%</text>   <!-- left Y -->
  <text x="${w}" y="..." text-anchor="start">500</text>  <!-- right Y -->
  ```
- **본 레포 현재**: 단일 Y축만. 신규 차트가 단위 섞인 경우 svgMultiLine 의 옵션으로 확장 권장.
- **언제 사용**: KPI + 비교 metric 동시 표시 (예: visibility 점수 % + monthly 호출 수)

#### 4) Point Styling (`point-styling`)
데이터 포인트 마커 커스터마이즈 (크기 / 모양 / 색).
- 본 레포 현재:
  - 일반 점: `<circle r="3" fill="${color}"/>`
  - 베이스라인 시작점: `<circle r="4" fill="#000" stroke="${color}" stroke-width="3"/>` (강조)
- 추가 패턴 (필요 시):
  ```svg
  <!-- 사각형 -->
  <rect x="${x-3}" y="${y-3}" width="6" height="6" fill="${color}"/>
  <!-- 삼각형 -->
  <polygon points="${x},${y-4} ${x-4},${y+3} ${x+4},${y+3}" fill="${color}"/>
  <!-- 별/X 표시 등은 SVG path 로 -->
  ```
- **본 레포 RULE**: 점 모양 일관 — 한 차트에 다른 모양 섞기 X. **베이스라인 시작점만 예외**.

#### 5) Segments (`segments`)
한 라인을 구간별로 다른 색·두께·dash 적용.
- **본 레포 패턴**: `fadeBeforeIdx` 가 이 컨셉 — pre = 회색 (`#64748B`, opacity 0.85) + post = 컬러
  - svgLine / svgMultiLine 둘 다 지원
- SVG 구현: 두 path 로 분리 (§5.3 [1] Bridge 제거 룰)
  ```svg
  <path d="M ... (pre points)" stroke="#64748B" opacity="0.85"/>
  <path d="M ... (post points)" stroke="${color}"/>
  ```
- 확장 가능성: 예측 구간 (dashed) vs 실측 구간 (solid) 분기

#### 6) Stepped Line (`stepped`)
점과 점을 **직각**으로 연결 (계단형). KPI 가 step-change 인 경우 적합.
- SVG path: `M x0 y0 L x1 y0 L x1 y1 L x2 y1 ...` (수평 → 수직 반복)
- 또는 `H` (horizontal) / `V` (vertical) command:
  ```
  M x0 y0 H x1 V y1 H x2 V y2 ...
  ```
- **본 레포 현재 사용 X** — 현재 KPI 는 연속 측정. 정책·시점 변경 같은 step-change 데이터면 적합.
- **언제 사용 OK**: 분기별 데이터 (Q1/Q2/Q3/Q4), 정책 변경 시점, 버전 릴리즈 KPI 등 — 직선 보간이 의미 왜곡인 경우

#### 7) Styling (`styling`)
색·두께·dash 패턴·linecap 등 라인 자체 시각 속성.
- 본 레포 현재:
  - stroke-width: 1.5 (기본), 2 (베이스라인 마커)
  - stroke-dasharray: solid 기본, dashed `"3,3"` (베이스라인 수직선)
  - stroke-linecap: 기본 (butt)
- 표준 패턴:
  | 용도 | stroke-dasharray | stroke-width |
  |---|---|---|
  | 실측 | `none` (solid) | 1.5 |
  | 예측 / 보간 | `"3,3"` | 1.5 |
  | 베이스라인 수직 | `"3,3"` | 1 |
  | 강조 (선택된 카테고리) | `none` | 2 |
  | 비교군 (회색) | `none`, opacity 0.85 | 1 |

#### 본 레포의 라인 차트 양식 적용 매트릭스

| 양식 | 본 레포 사용 위치 |
|---|---|
| Basic | 카드 미니 트렌드 (svgLine), 모든 트렌드 차트의 기본 |
| Interpolation | 미사용 (시각 일관성 위해 직선) |
| Multi-axis | 미사용 (현재 단일 Y축) — 신규 KPI + 호출 수 추가 시 후보 |
| Point Styling | 베이스라인 시작점 (검정 fill + 컬러 stroke 4px) 만 강조 |
| Segments | `fadeBeforeIdx` — pre 회색 / post 컬러 (베이스라인) |
| Stepped | 미사용 — step-change 데이터 추가 시 후보 |
| Styling | dashed (3,3) 베이스라인, stroke-width 1.5/2 |

#### ANTI-PATTERN (Chart.js 매핑)
- 한 차트에 곡선 + 직선 섞기 → 시각 일관성 깨짐
- 점 모양 카테고리마다 다르게 → 베이스라인 시작점만 예외
- Multi-axis 도입 시 좌/우 Y축 라벨 색상 동일 → 좌측 검정 / 우측 컬러로 매칭
- Stepped 와 직선 비교군 동시 표시 → 단위 / 의미 혼동

### 5.12 다른 차트 양식 5종 (Chart.js 표준 + 본 레포 SVG 매핑)

Chart.js 의 `docs/samples/other-charts/` 5 종. 본 레포는 일부 사용 중·일부 미사용. 미사용 양식도 도입 후보 명시.

#### 1) Bubble Chart (3차원: X / Y / radius)
3 변수 동시 시각화 — X = 변수1, Y = 변수2, 반지름 = 변수3.

- **데이터 shape**: `[{x, y, r}, ...]`
- **SVG 구현**:
  ```svg
  <circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="0.6" stroke="${color}"/>
  ```
- **본 레포 유사**: 4분면 점도표 (C-15) — 반지름 고정 (단순화 bubble). 진짜 bubble (가변 r) 미사용.
- **도입 후보**: 카테고리별 (가격 vs 점수 vs 시장규모) 같은 3 변수 비교 시.
- **RULE**: r 범위 5~15px (시각 인지 한계). 너무 작으면 안 보이고 크면 차트 영역 잠식.

#### 2) Combo Chart — Bar + Line (단일 Y축)
막대 (절댓값) + 라인 (추세/비율) 동시 표시. 같은 Y축 공유.

- **데이터 shape**: `[{ type: 'bar', data: [...] }, { type: 'line', data: [...] }]`
- **SVG 구현**:
  ```svg
  <!-- Bar 시리즈 -->
  <rect x="${x}" y="${barY}" width="${barW}" height="${barH}" fill="${barColor}"/>
  <!-- Line 시리즈 (svgLine 활용) -->
  <path d="M ${x0} ${y0} L ${x1} ${y1} ..." stroke="${lineColor}" fill="none"/>
  ```
- **본 레포 미사용**.
- **도입 후보**: KPI 절대값 막대 (월간 점수) + 증가율 라인 (MoM %). 또는 호출 수 막대 + 비용 라인.
- **RULE**: 막대와 라인 색상 명확히 구분. 라인이 막대 위로 (z-index). 같은 Y축이므로 단위 통일 (둘 다 % 또는 둘 다 정수).

#### 3) Doughnut Chart — 비중 / 점유율
파이 + 가운데 cutout. 카테고리 비중 시각화.

- **데이터 shape**: `[{ label, value, color }, ...]`
- **SVG 구현**:
  ```svg
  <!-- SVG path 의 arc 명령 (A) 으로 sector 그림 -->
  <path d="M cx cy L x0 y0 A r r 0 0 1 x1 y1 Z" fill="${color}"/>
  <!-- cutout: 작은 원 fill="background" 로 가운데 비움 -->
  <circle cx="${cx}" cy="${cy}" r="${innerR}" fill="${bgColor}"/>
  ```
- **본 레포 미사용** — 비중 표시는 vbar (`_citVBar`) 사용 중.
- **도입 후보**: 어드민 페이지의 인사이트 호출 type 분포 (observability) / dotcom 카테고리별 비중.
- **Pie vs Doughnut**: cutout 만 차이 (40~60% 권장). 라벨 가운데 표시 가능한 doughnut 이 본 레포 디자인에 더 적합.
- **RULE**: 슬라이스 5개 이하 (그 이상은 가독성 떨어짐 — top N + Others 패턴).

#### 4) Stacked Bar + Line Combo — 누적 막대 + 라인 overlay
컴포넌트별 누적 (bar) + 합계 추세 (line) 동시.

- **데이터 shape**: `[{ stack: 'A', data: [...] }, { stack: 'A', data: [...] }, { type: 'line', data: [sum, ...] }]`
- **SVG 구현**:
  ```svg
  <!-- 누적 rect (아래부터 쌓기) -->
  <rect x="${x}" y="${y1}" height="${h1}" fill="${c1}"/>
  <rect x="${x}" y="${y1 - h2}" height="${h2}" fill="${c2}"/>
  <!-- 라인 overlay (합계) -->
  <path d="..." stroke="${total}" fill="none"/>
  ```
- **본 레포 미사용**.
- **도입 후보**: 분기별 인사이트 호출 type 누적 (bar) + 총 비용 추세 (line). 또는 BU별 visibility 누적 + 전체 평균 추세.
- **RULE**: 누적 stack 은 같은 카테고리 묶음만 (의미 있는 part-to-whole). 라인은 합계 / 평균만 (개별 series X — 시각 혼동).

#### 5) Radar Chart — 다차원 metric 비교
polar 축 (원형) 위에 여러 metric 표시. 카테고리 간 비교에 적합.

- **데이터 shape**: `{ labels: [...metrics], datasets: [{ label, data: [v1, v2, ...] }] }`
- **SVG 구현**:
  ```svg
  <!-- 축 (그리드) -->
  <polygon points="${axisPoints}" fill="none" stroke="${grid}"/>
  <!-- 데이터 시리즈 -->
  <polygon points="${dataPoints}" fill="${color}" opacity="0.3" stroke="${color}"/>
  ```
- **본 레포 미사용**.
- **도입 후보**: 카테고리별 (TV/모니터/오디오 등) 의 8 metric (visibility/citation/dotcom/SOV/share/...) 비교. 또는 국가별 종합 점수.
- **Null 값 처리** (skip-points): 해당 축은 origin (중심) 으로 — Chart.js 패턴. polygon path 끊기.
- **RULE**: metric 축 최대 8개 (그 이상은 라벨 겹침). 데이터셋 최대 3개 (겹치면 식별 어려움).

#### 5종 적용 매트릭스

| 양식 | 본 레포 사용 | 도입 후보 |
|---|---|---|
| Bubble | ❌ (4분면 점도표 C-15 가 단순화) | 3 변수 비교 (가격×점수×규모) |
| Combo Bar+Line | ❌ | KPI 값 (bar) + 증가율 (line) |
| Doughnut | ❌ | observability type 분포 / 카테고리 비중 |
| Stacked Bar+Line | ❌ | BU별 누적 + 평균 추세 |
| Radar | ❌ | 다차원 metric 비교 (8 metric × 카테고리) |

#### ANTI-PATTERN
- Bubble r 범위 5~15 외 → 작아서 안 보이거나 차트 잠식
- Combo bar+line 같은 Y축인데 단위 섞기 (% vs 정수) → 의미 혼동
- Doughnut 슬라이스 5개 초과 → top N + Others
- Stacked 에 의미 없는 series 묶기 → part-to-whole 관계만
- Radar metric 축 8개 초과 → 라벨 겹침
- 5종 모두 색상 하드코딩 → BRAND_COLORS / STATUS 토큰 사용

### 5.15 차트 분류 카탈로그

**분류 체계란?** 차트 양식마다 짧은 코드 (예: `L-1`, `BP-1`) 를 부여한 호출 시스템.

**왜 쓰나?** 스킬이 차트를 그릴 때 어떤 양식인지 명확히 지정 — `"L-1 형태로 라인 차트 만들어줘"` 같이 코드만 알려주면 정확한 양식으로 그려짐.

#### 카테고리 (11)

- **L** — 라인 (시계열 / 트렌드)
- **B** — 바 스택 (누적 / part-to-whole)
- **V** — 그룹 막대 vbar (카테고리별 N 개)
- **HB** — 가로 막대 (Top N 랭킹)
- **M** — 콤보 (Bar + Line 결합)
- **BP** — 범프 (순위 변화)
- **MT** — 미니 트렌드 (이메일 호환)
- **D** — 도넛 / 파이 (비중)
- **R** — 레이더 (다차원 metric)
- **BU** — 버블 / 4분면 (X/Y 산점)
- **T** — 툴팁 (직교 — 어느 차트에든 추가)

카테고리 뒤 숫자는 양식 번호. 예: `L-1` 기본 / `L-5` 베이스라인 fade.

#### 전체 코드 → 양식 → 위치

| 코드 | 양식 | 룰 §X | C-XX |
|---|---|---|---|
| **L-1** | Basic Line | §5.11 #1 | C-07 |
| **L-2** | Interpolation (곡선) | §5.11 #2 | - |
| **L-3** | Multi-axis | §5.11 #3 | - |
| **L-4** | Point Styling | §5.11 #4 | (베이스라인 시작점) |
| **L-5** | Segments (fade) | §5.11 #5 | C-08, C-12 |
| **L-6** | Stepped | §5.11 #6 | - |
| **L-7** | Styling | §5.11 #7 | (dashed 베이스라인) |
| **B-1** | Stacked Bar | §5.14 #1 | - |
| **B-2** | Stacked Groups | §5.14 #2 | - |
| **V-1** | 그룹 막대 (vbar) | §5.10 | C-05 |
| **HB-1** | 가로 막대 (Top N) | - | C-06 |
| **M-1** | Combo Bar+Line | §5.12 #2 | C-14 |
| **M-2** | Stacked Bar+Line | §5.12 #4 | - |
| **BP-1** | 범프 차트 | §5.9 | C-09 |
| **MT-1** | 미니 트렌드 (메일) | - | C-10 |
| **D-1** | Doughnut | §5.12 #3 | - |
| **D-2** | 파이 (cutout 없음) | - | C-19 |
| **R-1** | Radar (skip points) | §5.12 #5 | - |
| **BU-1** | Bubble (X/Y/r) | §5.12 #1 | - |
| **BU-2** | 4분면 점도표 | - | C-20 |
| **T-1** | Tooltip (직교) | §5.13 | - |

#### 사용 가이드

- 라이브 페이지: `/admin/chart-library` — 21 카드 (Chart.js 15 + 본 레포 6) + 카테고리 색상 라벨
- 정적 미러: `docs/agents/CHART_LIBRARY.html` — 브라우저 더블클릭, 인증 없이 열람
- 스킬: `.claude/skills/design/SKILL.md` 의 "차트 그리기 (분류 코드)" 워크플로우

#### 사용 명령 예시

- `"L-1 차트 그려줘"` → Basic Line 양식
- `"V-1 그룹 막대"` → 본 레포 vbar
- `"BP-1 범프"` → 순위 변화 차트
- `"M-1 + T-1"` → 콤보 + 툴팁
- `"D-2 파이"` → 비중 시각화

#### 카탈로그 갱신 — 신규 차트 추가 시
1. `scripts/render-chart-library.mjs` 의 `CHART_CATALOG` 에 항목 추가 (분류 코드 + 카테고리 + svg 함수)
2. 새 카테고리 신설 시 `CATEGORY_LABELS` 도 추가 (색상 라벨)
3. 본 §5.15 의 두 표 (Chart.js 표준 / 본 레포 실제) 에 등재
4. 본 §5.X (해당 카테고리 섹션 §5.11~5.14) 에 SVG 패턴 / 데이터 shape / ANTI-PATTERN 추가
5. `npm run sync:harness` 또는 `prebuild` 시 정적 미러 자동 갱신

**사용 가이드**:
- 라이브 페이지: `/admin/chart-library` — 어드민 인증 후 SVG 미니어처 + 코드 + 메타
- 정적 미러: `docs/agents/CHART_LIBRARY.html` — 브라우저 더블클릭, 인증 없이 열람
- 스킬: `.claude/skills/design/SKILL.md` 의 "차트 그리기 (분류 코드)" 워크플로우 (10 step)

**사용 명령 예시**:
- `"L-1 차트 그려줘"` → Basic Line 양식으로 데이터 시각화
- `"B-2 그룹 스택 사용"` → 카테고리당 N stack 가로 나란히
- `"M-1 콤보 + T-1 툴팁"` → Bar+Line 콤보에 hover 툴팁 추가

**카탈로그 갱신**: 신규 차트 양식 추가 시 `scripts/render-chart-library.mjs` 의 `CHART_CATALOG` 배열에 항목 추가 (`prebuild` 시 자동 미러).

### 5.14 스택 바 양식 2종 (Chart.js bar/stacked + stacked-groups)

#### 1) Stacked Bar — 단일 스택 (part-to-whole)

같은 카테고리 위에 여러 dataset 을 **누적**해서 part-to-whole 관계 시각화.

- **데이터 shape**: `[{ label, data: [v1, v2, ...] }, ...]` — 모든 dataset 이 같은 stack
- **축 설정**: x · y 둘 다 `stacked: true`
- **SVG 구현** (각 카테고리마다 누적 rect):
  ```svg
  <!-- 카테고리 x 의 누적 (아래부터 쌓기) -->
  <rect x="${x}" y="${baseY - h1}"          height="${h1}" fill="${c1}"/>  <!-- 1st -->
  <rect x="${x}" y="${baseY - h1 - h2}"     height="${h2}" fill="${c2}"/>  <!-- 2nd -->
  <rect x="${x}" y="${baseY - h1 - h2 - h3}" height="${h3}" fill="${c3}"/>  <!-- 3rd -->
  ```
- **본 레포 미사용**.
- **도입 후보**:
  - BU별 (MS/HS/ES) visibility 누적 (월간 카테고리당)
  - Citation type 누적 (Reddit/YouTube/Twitter — 월별)
- **RULE**: 누적 dataset 최대 5개 (그 이상은 색 구분 어려움). 합계가 의미 있는 part-to-whole 관계만 사용.

#### 2) Stacked Groups — 복수 스택 (그룹별 누적 + side-by-side)

한 카테고리 안에 **여러 stack 그룹** 을 나란히. 각 stack 은 자체 누적, 그룹 간 비교.

- **데이터 shape**: `[{ stack: 'A', label, data: [...] }, { stack: 'A', ... }, { stack: 'B', ... }]`
- **그룹 정의**: `stack` 프로퍼티로 묶음 (`'Stack 0'` / `'Stack 1'` ...)
- **SVG 구현** (카테고리당 N 개 stack — 가로로 나란히):
  ```svg
  <!-- 카테고리 x — Stack A (왼쪽) -->
  <rect x="${x}" y="${baseY - hA1}"        height="${hA1}" fill="${cA1}"/>
  <rect x="${x}" y="${baseY - hA1 - hA2}"  height="${hA2}" fill="${cA2}"/>
  <!-- 카테고리 x — Stack B (오른쪽) -->
  <rect x="${x + groupGap}" y="${baseY - hB1}" height="${hB1}" fill="${cB1}"/>
  ```
- **본 레포 미사용**.
- **도입 후보**:
  - 카테고리별 KR vs EN (각 언어가 한 stack, 카테고리당 두 stack 비교)
  - 월별 LG vs Samsung (각 브랜드가 한 stack, 그 안에 sub-dataset 누적)
- **단일 stacked vs stacked groups 차이**:
  - **단일**: 카테고리당 1 컬럼 — 전체 합 + 구성
  - **그룹**: 카테고리당 N 컬럼 — 그룹 간 비교 + 각 그룹 자체 구성
- **RULE**: 그룹 최대 3개 (그 이상은 컬럼 좁아져 가독성 떨어짐). 그룹 내 dataset 최대 5개.

#### 스택 양식 ANTI-PATTERN
- 스택 dataset 6개 이상 → 색 구분 어려움 (top 5 + Others)
- 그룹 4개 이상 → 컬럼 좁아짐 (대안: stacked + segmented 분리)
- 음수 + 양수 섞기 → 0 기준선 양쪽으로 누적 (시각 복잡) — 차라리 grouped (non-stacked) 권장
- 같은 색상 다른 stack 에 재사용 → 의미 혼동 (그룹별 색상 셋 분리)

#### Stacked Bar 도입 매트릭스

| 양식 | 본 레포 사용 | 도입 후보 |
|---|---|---|
| Stacked Bar (단일) | ❌ | BU 누적 / Citation type 누적 |
| Stacked Groups | ❌ | KR vs EN 비교 / LG vs Samsung 누적 비교 |

### 5.13 툴팁 (Tooltip) — 모든 차트와 엮어 사용

**툴팁은 독립 패턴** — 위 라인 차트 7종 (§5.11) / 다른 차트 5종 (§5.12) **어느 차트에든 추가 가능**. 차트 양식과 직교 (orthogonal).

**Chart.js 패턴** (callbacks):
```js
options.plugins.tooltip = {
  callbacks: {
    title: ([item]) => `${item.label} (${item.parsed.x})`,
    label: (item) => `${item.dataset.label}: ${item.formattedValue}`,
    footer: (items) => `합계: ${items.reduce((s, i) => s + i.parsed.y, 0)}`,
  },
  backgroundColor: '#1E293B',
  titleColor: '#F8FAFC',
  bodyColor: '#CBD5E1',
}
```

**본 레포 적용 패턴** (서버 SVG 차트 + 클라이언트 hover):

#### A) Server SVG — `<title>` 엘리먼트 (기본 브라우저 툴팁)
```svg
<circle cx="${x}" cy="${y}" r="3" fill="${color}">
  <title>${labels[i]}: ${data[i]}%</title>
</circle>
```
- 장점: 추가 JS 0, 접근성 OK
- 단점: 디자인 커스터마이즈 불가 (브라우저 기본 스타일)

#### B) Client-side custom tooltip — DOM `<div>` 동적 표시
```js
// dashboardClient.js 에 추가
function _attachTooltip(chartEl, dataFn) {
  const tip = document.createElement('div')
  tip.className = 'svg-tooltip'
  tip.style.cssText = 'position:absolute;background:#1E293B;color:#F8FAFC;padding:6px 10px;border-radius:6px;font-size:11px;pointer-events:none;display:none;z-index:1000'
  document.body.appendChild(tip)
  chartEl.addEventListener('mousemove', e => {
    const data = dataFn(e)
    if (data) {
      tip.innerHTML = data.label + '<br>' + data.value
      tip.style.left = (e.pageX + 10) + 'px'
      tip.style.top = (e.pageY - 30) + 'px'
      tip.style.display = 'block'
    }
  })
  chartEl.addEventListener('mouseleave', () => { tip.style.display = 'none' })
}
```
- 장점: 디자인 커스터마이즈 (다크 테마, 폰트, 다중 라인)
- 단점: DOM + JS 추가 비용

#### 본 레포 사용 가이드

| 차트 종류 | 권장 툴팁 방식 | 이유 |
|---|---|---|
| 카드 미니 트렌드 (svgLine) | `<title>` (기본) | 카드 안에서 hover — 단순 |
| 큰 트렌드 (svgMultiLine) | Custom DOM | 다중 series — 모든 값 동시 표시 |
| 범프 차트 (citation) | Custom DOM | 순위 변화 + 도메인 + 카운트 다중 정보 |
| vbar (citation) | `<title>` | 단일 값 표시 |
| 도넛 / 파이 (도입 시) | Custom DOM | 슬라이스 + 비중 + 절댓값 |

#### 툴팁 추가 워크플로우 (어느 차트에든)
```
1. 차트의 데이터 포인트 SVG 엘리먼트 식별 (circle / rect / polygon)
2. <title> 추가 (간단) 또는 mousemove 이벤트 (커스텀)
3. 표시 정보 결정 — 카테고리 / 값 / 변화율 / 비교군 등
4. 다중 series 면 footer 합계 / 평균 등 부가 정보
5. KO/EN i18n 라벨 (T 객체)
6. 다크 테마 일관 (#1E293B 배경, #F8FAFC 텍스트)
```

#### ANTI-PATTERN
- 차트 호버 시 툴팁이 차트 영역 밖으로 잘림 → `body` append + `position:fixed/absolute` 사용
- 툴팁이 마우스 이벤트 가로채기 → `pointer-events: none`
- 다중 series 의 툴팁이 series 마다 따로 → 한 hover 에 모든 series 값 동시 표시 (Chart.js mode: 'index')
- 툴팁 색상 차트와 같음 → 대비 확보 (배경 어둡게, 텍스트 밝게)

### 5.10 수직 막대 (vbar) — Citation 카테고리 / Dotcom

`_citVBar(cits, topN, isSmall, topColor, isRatio, scale)`.

#### scale 파라미터
- `scale = 0.7` 같이 카드 높이를 N% 로 축소 (제품별 카드는 큰 카드 70%)
- 안에 있는 모든 막대 높이가 비례 축소

#### TTL strict / 부분 국가 선택
- TTL (전체) 보기 모드: TTL 행만 사용 (다른 국가 합산 X)
- 부분 국가 선택 시: 상단 차트 = 선택된 국가의 By Country 카드 상위 N 합산 (commit `4c5061d`)

#### 컬럼명 짤림 방지
- `.vbar-col-name` 의 `overflow: visible` 필수
- 좁은 셀 ($brand$ 가 길면) 폰트 11→10 + letter-spacing 강화 + 영문 약어

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
NEVER  vbar 컬럼 라벨 overflow:hidden → 브랜드명 짤림 (overflow:visible 필수)
NEVER  베이스라인 라벨에 흰 배경 박스 → X축 영역에 직접 텍스트 배치 (`labelOffsetY` 조정)
NEVER  미출시 국가 나열 콤마 뒤 일반 공백 → 줄바꿈 분리 (non-breaking space `&#x00A0;`)
NEVER  영문 모드 좁은 셀에 풀네임 → 약어 사용 (Refrigerator→REF, Dishwasher→DW)
NEVER  flex/grid 를 이메일 HTML 에 사용 → table-layout 만 (Outlook 호환)
NEVER  베이스라인 시 pre/post 를 한 path 로 연결 → 두 path 로 분리 (bridge 제거)
NEVER  한 series 만 베이스라인 line break, 다른 series 는 연결 유지 → 모든 브랜드 동시 break
NEVER  truncate 시 차트 viewBox 자체 축소 → viewBox 유지, 라인/포인트만 truncate
NEVER  truncate 시 배경 가로선까지 잘라내기 → 전체 범위 유지 (차트 영역 안정)
NEVER  filterTrend 의 row 매칭에 data-prodid 속성 누락 → 필터 시 트렌드 사라짐 회귀
NEVER  서버 SVG (`svgLine`) 시그니처 변경 후 클라이언트 짝 (`_miniSvg`) 미수정 → 필터 결과 깨짐
NEVER  범프 차트에 height 고정 → viewBox 비율 자동 조정 사용
NEVER  범프 차트 라벨 회색 → 검정 (회색 배경에서 대비 확보)
NEVER  TTL 차트에 부분 국가 합산 → strict TTL 행만 사용 (또는 By Country 카드 상위 N 합)
NEVER  미니 차트 null 값을 0 으로 → _miniSvgNullAware 로 선 끊기 (null vs 0 구분)
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
