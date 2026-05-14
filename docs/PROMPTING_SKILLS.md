# Skills — GEO Newsletter / Dashboard 디자인·차트·데이터 지침

본 문서는 Karpathy 스타일 **skill** — 코딩 에이전트(Claude Code / Cursor 등)가 본 레포에서 작업할 때 자동 참조하는 지침서.

## 목차

- [Part 0 — 공통 변수 / 상수](#part-0--공통-변수--상수)
- [Part 1 — 대시보드 메뉴 구조](#part-1--대시보드-메뉴-구조)
- [Part 2 — 컴포넌트별 디자인 스킬](#part-2--컴포넌트별-디자인-스킬)
- [Part 3 — 데이터 파싱 스킬](#part-3--데이터-파싱-스킬)

---

# Part 0 — 공통 변수 / 상수

본 레포 전반에 걸쳐 import 되는 공통 상수. 새 컴포넌트 작성 시 이 값들을 먼저 import 해서 일관성 유지.

## 0.1 색상 / 폰트

```js
// dashboardConsts.js
export const FONT = "'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif"
export const RED  = '#CF0652'    // LG 브랜드 레드
export const COMP = '#94A3B8'    // 경쟁사 공통 회색
```

| 이름 | 값 | 용도 |
|---|---|---|
| `FONT` | LGEIText → LG Smart → Arial Narrow → Arial fallback | 모든 텍스트 |
| `RED` | `#CF0652` | LG 헤더 / 강조 / 베이스라인 |
| `COMP` | `#94A3B8` | 1위 경쟁사 막대 (Samsung 등) |
| `FADE` (인라인) | `#64748B` | 베이스라인 이전 회색 페이드 |
| `EM_RED` | `#CF0652` | 이메일 HTML 전용 (동일) |

## 0.2 신호등 (statusInfo)

```js
// dashboardFormat.js — 자사/경쟁사 비율 기반
lead     : bg #ECFDF5 / border #A7F3D0 / color #15803D / label '선도'
behind   : bg #FFFBEB / border #FDE68A / color #B45309 / label '추격'
critical : bg #FFF1F2 / border #FECDD3 / color #BE123C / label '취약'
```

판정 함수: `cntyStatus(sc, comp)` → `lead` (≥100%) · `behind` (≥80%) · `critical` (<80%).

## 0.3 브랜드 색상

```js
// dashboardConsts.BRAND_COLORS
LG #CF0652 · Samsung #3B82F6 · Sony #7C3AED · Hisense #059669
TCL #D97706 · Asus #0EA5E9 · Dell #6366F1 · MSI #EF4444
JBL #F97316 · Bose #8B5CF6 · Bosch #14B8A6 · Whirlpool #06B6D4
Haier #22C55E · Miele #A855F7 · Dyson #EC4899 · Xiaomi #F59E0B
Shark #6B7280 · Daikin #2563EB · Mitsubishi #DC2626 · Media #10B981
Panasonic #0D9488 · Blueair #0284C7 · Philips #7C3AED
```

미정의 브랜드 → `FALLBACK_COLORS = ['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0']` 순환.

헬퍼: `brandColor(name, idx)` (dashboardSvg.js).

## 0.4 지역 / 국가

```js
REGIONS = {
  NA    : { ko: '북미',   en: 'North America',  countries: ['US','CA'] },
  EU    : { ko: '유럽',   en: 'Europe',         countries: ['UK','DE','ES'] },
  LATAM : { ko: '중남미', en: 'Latin America',  countries: ['BR','MX'] },
  APAC  : { ko: '아태',   en: 'Asia Pacific',   countries: ['AU','VN'] },
  IN    : { ko: '인도',   en: 'India',          countries: ['IN'] },
}
ALL_10_COUNTRIES = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN']
```

국가명 변환 함수:
- `cntyFullName(c)` → 짧은 풀네임 (`US → 'USA'`)
- `cntyOfficial(c, lang)` → 정식 풀네임 (`US → 'United States' / '미국'`)
  - 각주·문장용. 약자(SS, US) 대신 풀네임.

## 0.5 제품 매핑

```js
UL_PROD_MAP = {        // 미출시 시트 코드 매핑
  tv:'TV', monitor:'IT', audio:'AV', washer:'WM',
  fridge:'REF', dw:'DW', vacuum:'VC',
  cooking:'COOKING', rac:'RAC', aircare:'AIRCARE',
}
```

제품 id ↔ KR ↔ EN ↔ category 매핑은 emailTemplate.js `PROD_NAME_TO_ID`, `PROD_EN_NAME`, `PROD_EN_BY_KR` 등 참고.

## 0.6 베이스라인 리셋 제품 (4월 Prompt 재조정)

```js
BASELINE_RESET_PRODUCTS = ['audio', 'rac', 'aircare']

// 베이스라인 주차
_baselineWeekFor(audio)   → 13   // W13
_baselineWeekFor(rac)     → 16   // W16
_baselineWeekFor(aircare) → 16

// 월간 베이스라인: 모두 Apr
```

라벨 위치 오프셋:

| 제품 | 모드 | labelOffsetY | lineOffsetY |
|---|---|---|---|
| Audio | 월간 | -60 | 0 |
| RAC | 주간 | +20 | 0 |
| Aircare | 주간 | +30 | 0 |
| 그 외 baseline | 기본 | 0 | 0 |

---

# Part 1 — 대시보드 메뉴 구조

## 1.1 어드민 메뉴 (`/admin/`)

| 섹션 | 카드 | 경로 |
|---|---|---|
| 뉴스레터 관리 | Newsletter Generator | `/admin/newsletter` |
| 대시보드 관리 | Dashboard Viewer | `/admin/dashboard` |
| | Visibility Editor | `/admin/visibility` |
| | Citation Editor | `/admin/citation` |
| | Readability Editor (예정) | `/admin/readability` |
| | Progress Tracker | `/admin/progress-tracker-v2/` |
| 리포트 | Monthly Report | `/admin/monthly-report` |
| | Weekly Report | `/admin/weekly-report` |
| 공통 인프라 | Prompt List · IP Manager · AI Settings · Observability · Archives · 독일 프롬프트 | 각 admin 경로 |
| DB구축 | 시스템 기획서 · GCP 인프라 · Data Connection PRD · Cloud Run Job · BigQuery Schema | `/admin/plan` 등 |
| 스킬 | Prompting Skills (본 문서) | `/admin/prompting-skills` |

## 1.2 게시(공개) 페이지 (`/p/...`)

| 채널 | 경로 (KO / EN) |
|---|---|
| Newsletter Hub | `/p/GEO-Monthly-Report-KO`, `/p/GEO-Monthly-Report-EN` |
| Newsletter 월별 | `/p/GEO-Monthly-Report-KO-2026-04` (월 suffix) |
| Visibility/통합 Dashboard | `/p/GEO-KPI-Dashboard-KO`, `/p/GEO-KPI-Dashboard-EN` |
| Citation Dashboard | `/p/GEO-Citation-Dashboard-KO`, `/p/GEO-Citation-Dashboard-EN` |
| Progress Tracker v2 | `/p/progress-tracker-v2/` (SPA) |

## 1.3 대시보드 탭/섹션 (Visibility 모드)

```
Visibility / Citation / Readability / Progress / (Glossary)
├── BU (사업본부)
│   ├── Hero (전체 점수)
│   ├── Weekly Period Toggle (주간/월간)
│   ├── Filter Layer (Region · Country · BU · Product)
│   ├── 주간 콘텐츠 (bu-weekly-content)
│   │   ├── 제품 카드 (prod-card)
│   │   ├── 국가별 vbar
│   │   └── 주간 경쟁사 트렌드 (svgMultiLine)
│   └── 월간 콘텐츠 (bu-monthly-content)
│       └── 동일 구조 + 월간 데이터
├── PR (제품 PR Visibility)
└── Brand Prompt 이상 점검
```

## 1.4 Citation 탭

```
Touch Points 탭
├── 도메인 카테고리별 Bump Chart (서버 사전계산 + 클라이언트 재집계)
├── 도메인별 Bump Chart
├── 국가별 Citation 도메인 (테이블)
└── 제품별 Citation 비중 (Top3 카드)

Dotcom 탭
└── _dcVBar 막대 + LG/Samsung 라인 차트
```

## 1.5 각 에디터의 사이드바 구성 (`Sidebar.jsx`)

공통 (모든 모드):
- 구글 시트 동기화 (URL + 동기화 버튼 + 상태 표시)
- 시트 다운로드 (해당 대시보드 탭만 CSV ZIP)
- 발행 월 선택 (뉴스레터 전용)
- 핵심 과제 진척 월 선택 (뉴스레터 전용)
- 웹사이트 게시 (KO+EN 동시)
- 통합 대시보드 게시 (dashboard 모드 전용)
- 아카이빙 (학습 데이터)
- 게시 상태 표시
- 뉴스레터 월별 게시 목록

뉴스레터 모드 추가:
- 헤더 편집 (리포트 유형, 번호, 기간, 제목, 팀명, 기준)
- Notice / KPI Logic 토글 + 입력
- 폰트 크기 슬라이더 + 색상 피커
- 섹션 표시/숨김 토글
- 제품 카드 버전 선택 (V1 / V2 / V3)
- 콘텐츠 편집 (GEO 전략 인사이트, 제품별/국가별 인사이트, How to Read 등 ~20개)
- PR Visibility 안내, PR 토픽 설명, Brand Prompt 안내
- Citation 인사이트 (도메인 카테고리, 도메인별, 국가별, 제품별)
- 닷컴 인사이트
- Action Plan
- HTML 복사 / 메일 발송

Dashboard 모드:
- Notice 외 모든 텍스트 입력 숨김 (사용자 요청)
- 폰트/색상/섹션 토글/카드 버전 유지
- HTML 복사 버튼 유지, 메일 발송 숨김

Monthly Report / Weekly Report 모드:
- 월간 보고서 본문 (단순 textarea, 1./2.1 헤딩 지원)
- 헤더 편집/콘텐츠 편집 사이드바 거의 숨김

## 1.6 Citation 사이드바 (별도 `CitationSidebar.jsx`)

- 시트 동기화 (Citation 탭만)
- Citation 인사이트 (카테고리·도메인·국가·제품별)
- Citation 게시 (KO+EN)
- Citation 다운로드

---

# Part 2 — 컴포넌트별 디자인 스킬

## SKILL D-01 — 제품 카드 (Newsletter)

3개 버전 존재 (`emailTemplate.js`):

| 함수 | 용도 | 특징 |
|---|---|---|
| `productCardHtml` (V1) | 기본 카드 + 주간/월간 트렌드 바 | 좌측 점수, 우측 트렌드 바 차트, 하단 경쟁비 |
| `productCardV2Html` (V2) | 10국 Visibility 막대 차트 카드 | 10개 국가 막대, 점수 + 비교 |
| `productCardV3Html` (V3) | 최신 — 국가별 막대 + 상단 status | 가장 컴팩트, 메인 헤더 + 10국 막대 |

**공통 레이아웃**:
```html
<td width="33%" style="padding:3px;vertical-align:top;">
  <table border="2" solid ${st.border} radius:8px>
    <!-- 헤더: 제품명 + 점수 + 우측 status badge -->
    <!-- 컨텐츠: 막대/트렌드 -->
  </table>
</td>
```

**RULE**:
- 카드 너비는 33% (3장 한 줄)
- 테두리 색은 `statusInfo(p.status, lang).border`
- 상단 status badge 색: `bg / color / border` 3색 한 세트
- 자간(letter-spacing): `lang === 'en' ? -0.9px : -0.5px` (14px 폰트 기준)
- 경쟁사 브랜드명: 항상 `-1px` (lang 무관)

**예시 코드 (V3 상단)**:
```js
<span style="font-size:14px;font-weight:900;color:#1A1A1A;
  letter-spacing:${lang === 'en' ? '-0.9px' : '-0.5px'};">
  ${escapeHtml(prodName)}
</span>
<span style="font-size:18px;font-weight:900;letter-spacing:-1.8px;">
  ${p.score.toFixed(1)}<span style="font-size:11px;color:#94A3B8;
  letter-spacing:-1.1px;">%</span>
</span>
```

## SKILL D-02 — 제품 카드 (Dashboard)

`dashboardTemplate.js` 의 `productSectionHtml` 내 `<div class="prod-card">`.

**구조**:
```html
<div class="prod-card" data-prodid="tv" data-ws data-ms data-wr data-mr data-wmom data-mmom>
  <div class="prod-head">
    <span class="prod-name">TV*</span>
    <span class="prod-ul-note">*제품 미출시 국가</span>
    <span class="prod-badge">선도</span>
  </div>
  <div class="prod-score-row">
    <span class="prod-score">88.1%</span>
    <span class="prod-delta prod-wow">WoW ▲ 0.1%p</span>
    <span class="prod-delta prod-mom" style="display:none">MoM ▼ 0.8%p</span>
  </div>
  <div class="prod-chart">
    <div class="trend-weekly">{svgLine}</div>
    <div class="trend-monthly" style="display:none">{svgLine}</div>
  </div>
  <div class="prod-comp">
    <span>Samsung 대비</span>
    <div class="prod-comp-bar"></div>
    <span>95%</span>
  </div>
</div>
```

**data-* 속성 규약**:
- `data-ws` / `data-ms`: weekly/monthly score
- `data-wr` / `data-mr`: weekly/monthly ratio
- `data-wmom` / `data-mmom`: WoW/MoM 값 (서버 렌더 시점)
- `data-prodid`: 클라이언트 필터 매칭용

클라이언트 모드 전환(`switchPeriodMode`) 시 data-* 속성에서 값 읽어 prod-score, prod-mom 등 갱신.

## SKILL D-03 — 막대 그래프 (Visibility vbar)

`dashboardTemplate.js` 의 `cntyColHtml`.

**구조**:
```html
<div class="vbar-item" data-product data-country data-prodid>
  <div class="vbar-cols">
    <div class="vbar-col-wrap">  <!-- LG -->
      <span class="vbar-val">87.1</span>
      <div class="vbar-col" style="height:${hPx}px;background:${barColor}"></div>
      <span class="vbar-col-name">LG</span>
    </div>
    <div class="vbar-col-wrap">  <!-- Comp -->
      <span class="vbar-val comp-val">87.2</span>
      <div class="vbar-col" style="background:#94A3B8"></div>
      <span class="vbar-col-name">SS</span>
    </div>
    <div class="vbar-col-wrap cbrand-bar">  <!-- C-Brand -->
      <span class="vbar-val">42.3</span>
      <div class="vbar-col" style="background:#9333EA"></div>
      <span class="vbar-col-name">HISENSE</span>
    </div>
  </div>
  <span class="vbar-gap">+0.5%p</span>
  <span class="vbar-label">미국</span>
</div>
```

**RULE**:
- 컬럼 너비 26px (`flex:0 0 26px`)
- 컬럼 사이 gap 3px
- 컬럼명 폰트 10px + `letter-spacing:-0.6px` + `overflow:visible` (브랜드명 짤림 방지)
- 막대 너비: 컬럼 너비 100% (radius 4px 4px 0 0)
- 막대 색: lead(녹색) / behind(주황) / critical(빨강)
- C-브랜드 색: `#9333EA` (보라, 고정)
- Samsung 표기: `SAMSUNG` → `SS` 축약

**스케일**:
- 동일 그룹 max 기준 height 계산 (BAR_H = 130px)
- `Math.round(score / max * BAR_H)`, 최소 3px

## SKILL D-04 — 막대 그래프 (Citation _citVBar)

`citationTemplate.js` 의 `_citVBar` — Top N 도메인/카테고리 막대.

**특징**:
- 가로 막대 (좌측 라벨, 우측 값)
- 색상 우선: TopColor (예: `#15803D`) → 그 외 회색 단계
- scale 옵션으로 카드 높이 축소 (기본 1, 0.7 등)
- isRatio 옵션: 점수(%) 또는 비중(%) 표시

```js
_citVBar(cits, topN, isSmall, topColor, isRatio, scale)
```

**RULE**:
- 카드 안의 작은 막대(isSmall=true): font 11px, max-width 좁게
- 대형 카드: font 13~14px
- isRatio 시 첫 줄 라벨: `Citation Score 건수 (비중)` / `Score Count (Ratio)`

## SKILL D-05 — 범프 차트 (Bump Chart)

`citationTemplate.js` 의 `bumpChartSvg(names, rankings, months, maxRank, labelFn)`.

**용도**: 시간별 랭킹 변동 시각화 (도메인/카테고리 Top10 월별 순위).

**구조**:
- ROW_H = 52, ribbon 굵기 = ROW_H * 0.38
- 좌측 80px 라벨 공간, 우측 20px 여백
- 둥근 양끝 + 부드러운 C-bezier 보간
- 둥근 시작/끝 반지름 = ribbon 굵기

**RULE**:
- 색상: `BUMP_COLORS` 배열 (브랜드 색과 별개, 시각적 구분용)
  ```js
  ['#CF0652','#1D4ED8','#059669','#D97706','#7C3AED',
   '#DB2777','#0D9488','#EA580C','#4F46E5','#DC2626',
   '#0891B2','#65A30D']
  ```
- 라벨: 검은색(`#0F172A`), font-size 22, font-weight 700, 텍스트 가운데 정렬
- 리본 opacity 0.6, stroke 0.5px opacity 0.3
- 라벨 함수: `labelFn` (예: 도메인 → `stripDomain` 으로 `.com` 제거)
- 최대 N개 (BUMP_MAX = 10) 한정

**클라이언트 재집계 (필터 적용)**:
- `_drawCitTrendBump(prefix, byKey, typeOf, allSelected, enabled, scopeEl)`
- `_bumpChartSvgJS(...)` 가 서버 동일 알고리즘 인라인 구현

## SKILL D-06 — 선 그래프 단일 (svgLine)

`dashboardSvg.js` 의 `svgLine(data, labels, w, h, color, opts)`.

**용도**: 제품 카드 미니 차트 (주간 마지막 10주, 월간 4월 등).

**구조**:
- pad: top 18, right 10, bottom 20, left 10
- viewBox height = h + 12 (베이스라인 라벨 표시 공간 확보)
- `style="overflow:visible"` (라벨이 viewBox 밖에도 표시 가능)

**옵션**:
```js
opts = {
  fadeBeforeIdx: -1,        // 베이스라인 이전 회색 페이드
  baselineLabel: '',        // dashed vertical + 라벨 텍스트
  labelOffsetY: 0,          // 라벨 Y 오프셋 (제품·모드별)
  lineOffsetY: 0,           // 점선 Y 오프셋
}
```

**그리는 요소**:
1. Area path (그라데이션 fill) — 데이터 라인 아래
2. Line path — 데이터 연결선
3. Pre-baseline path — 회색 점선 (별도)
4. Circles — 각 데이터 포인트 (베이스라인 시작점은 검은 fill + 두꺼운 stroke)
5. Value text — 각 포인트 위 (font 12, bold)
6. Dashed vertical — 베이스라인 위치
7. Baseline label — `*Baseline 재설정` (font 9, 위치 onLeft/onRight 분기)
8. X-axis labels — `labels` 배열 (font 12, `#94A3B8`)

**RULE**:
- onRight = `bx > w * 0.7` 판정
- onRight 시 `text-anchor="end"` 로 좌측 정렬
- 베이스라인 시작점 마커: `r="4" fill="#000" stroke="${color}" stroke-width="3"`
- 라인 stroke-width 2, linecap/linejoin round

## SKILL D-07 — 선 그래프 다중 (svgMultiLine)

`dashboardSvg.js` 의 `svgMultiLine(brandData, labels, w, h, opts)`.

**용도**: 주간 12주 / 월간 12개월 경쟁사 트렌드 (큰 차트).

**구조**:
- pad top 8, bottom 8 (X 라벨 없음 — 테이블 헤더가 대체)
- y축 그리드 4단 (`stroke="#E8EDF2"`)
- 자동 스케일: `Math.max((mx-mn)*0.15, 2)` padding

**브랜드별 스타일**:
- LG: stroke-width 2.5, opacity 1, circle r 3.5
- 그 외: stroke-width 1.5, opacity 0.7, circle r 2.5

**옵션** (svgLine 과 동일):
```js
opts = { fadeBeforeIdx, baselineLabel }
```

**RULE**:
- pre/post 분리 후 각각 path 생성 (브랜드별 boundary 끊김)
- LG 만 베이스라인 마커 (검은 fill)
- 베이스라인 dashed vertical + 라벨 (차트 상단, font 11)

## SKILL D-08 — 미니 트렌드 바 (Newsletter)

`emailTemplate.js` 의 `weeklyTrendHtml(weekly, color, ..., fadeBeforeIdx)`.

**용도**: 뉴스레터 V1 카드의 주간/월간 트렌드 바 (8개 막대).

**구조**:
- 각 컬럼: 값 라벨(top) + 막대(bar) + 주차/월 라벨(bottom)
- 막대 너비 10px, 최대 높이 24px
- 자체 min/max 기반 height 계산 (작은 증감도 표현)

**RULE**:
- 베이스라인 이전: 막대 색 `#64748B` (회색)
- 베이스라인 이후: 원래 sparkColor (제품 status 기반)
- 값 라벨: font 10, weight 700, padding-bottom 1
- 주차 라벨: font 10, `#94A3B8`

## SKILL D-09a — Dotcom 막대 + 라인 (citation Dotcom 탭)

`citationTemplate.js` 의 `_dcVBar(dc, isSmall)` + `renderDotcom(dc)`.

**용도**: 닷컴 페이지 타입별 Citation (TTL · PLP · Microsites · PDP · Newsroom · Support · Buying-guide · Experience) — LG vs Samsung.

**구조**:
- 가로 그룹 막대 (페이지 타입별 컬럼)
- LG 행 + Samsung 행 (2단)
- 컬럼 = DC_COLS / DC_SAM 상수 기반
- 두 막대 (LG vs SS) 좌우 비교

```js
DC_COLS = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience']
DC_SAM  = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide']  // Samsung 은 Experience 없음
```

**RULE**:
- 상단 막대: LG `#CF0652`, 하단 막대: Samsung `#3B82F6`
- 컬럼 너비 균등 분할
- LG 우위 ↔ SS 우위 ↔ None 의 라벨 변환 (`dotcomLgWin` / `dotcomSsWin` / `dotcomNone`)

## SKILL D-09 — 신호등 / 뱃지 / 상태 표시

3종류 시각화:

### (a) 카드 상단 status badge
```html
<span style="display:inline-block;background:${st.bg};color:${st.color};
  border:1px solid ${st.border};border-radius:5px;
  padding:0px 4px;font-size:10px;font-weight:700;line-height:15px;">
  ${st.label}  <!-- 선도/추격/취약 -->
</span>
```

### (b) 카드 테두리
```html
<table style="border:2px solid ${st.border};border-radius:8px;...">
```

### (c) 점수/값 색상
- `lead` → `#15803D` (녹색)
- `behind` → `#E8910C` (주황)
- `critical` → `#BE123C` (빨강)

**RULE**: 항상 `statusInfo()` 헬퍼 사용. 직접 색상 하드코딩 금지.

## SKILL D-10 — 베이스라인 리셋 마커

3개 시각 요소가 한 세트:

### (a) Fade pre-segment
- 베이스라인 이전 데이터: 회색 `#64748B`, opacity 0.85
- pre/post 라인 path 분리 → boundary 끊김

### (b) Baseline start point
- 시작점만 특수 마커: `<circle r="4" fill="#000" stroke="${color}" stroke-width="3">`

### (c) Dashed vertical + label
- 점선: `stroke-dasharray="3,3" stroke="#64748B"`
- 라벨: `*Baseline 재설정` (font 9)
- 위치: onRight 시 좌측 정렬, 차트 안쪽 하단 (pt+ch+1)

## SKILL D-10a — Hero / 전체 점수 카드

`dashboardTemplate.js` 의 `heroHtml(total, meta, t, lang)`.

**용도**: 대시보드 최상단 "GEO Visibility" 큰 점수 카드.

**구조**:
```html
<div class="hero">
  <div class="hero-title">LG GEO VISIBILITY %</div>
  <div class="hero-score-row">
    <span class="hero-score">41.9</span><span class="hero-pct">%</span>
    <span class="hero-delta">▲ X.X%p</span>
    <span class="hero-mom">MoM</span>
  </div>
  <div class="hero-comp">
    <span class="hero-comp-label">SAMSUNG</span>
    <span class="hero-comp-score">45.2%</span>
    <span class="hero-comp-gap">Gap +X.X%p</span>
  </div>
  <div class="hero-info">
    Model : ChatGPT, ChatGPT Search, Gemini, Perplexity<br/>
    Subsidiary : US, CA, UK, DE, ES, BR, MX, AU, VN, IN
  </div>
</div>
```

**RULE**:
- 메인 점수: 60px+ 큰 폰트, 흰색
- MoM 라벨 색: ▲ 녹색 `#22C55E` / ▼ 빨강 `#EF4444` / ─ 회색 `#94A3B8`
- 배경: 짙은 카드 (검은색 계열)
- Gap 색: 양수 녹색, 음수 빨강

## SKILL D-10b — Notice / KPI Logic 박스

상단 안내 박스 2종 (사이드바 토글로 표시/숨김):

```html
<div class="notice-box">
  <div class="notice-title">NOTICE</div>
  <div class="notice-text">{mdBold(noticeText)}</div>
</div>

<div class="kpi-logic-box">
  <div class="kpi-logic-title">KPI Logic</div>
  <div class="kpi-logic-text">{mdBold(kpiLogicText)}</div>
</div>
```

**RULE**:
- `meta.showNotice` / `meta.showKpiLogic` 로 조건 렌더
- `mdBold(text)`: `**굵게**` → `<strong>`, 줄바꿈 → `<br>`
- 박스 배경: 옅은 회색/빨강 계열

## SKILL D-11 — 각주 (Footnote)

3종류:

### (a) 미출시 국가 안내 (자동 생성)
- `unlaunchedMap` 에서 자동 추출
- 형식: `* 제품 미출시 국가는 신호등 회색 표기(Audio-Sound Suite : 브라질,베트남,인도 / ...)`
- 콤마 뒤 공백 **없음** (사용자 요청)
- 'Audio' → 'Audio-Sound Suite' 자동 치환

### (b) 베이스라인 리셋 안내 (고정 문구)
```
*Baseline 재조정 (4월)
-Audio : ... USP 관점의 프롬프트 추가함
-RAC/Aircare : ... 국가별 Prompt 재분배 ...
```
함수: `baselineNoteFullHtml(lang)` / `baselineNotePerProductHtml(p, lang)`.

### (c) 트렌드 차트 인라인 각주
- 12주/12월 트렌드 섹션: 각 trend-row 끝에 **해당 제품만** 한 줄 안내
- 섹션 하단 통합 각주 X (제거됨)

**RULE**: 사용자 제공 문구는 그대로 사용. 임의 다듬기 금지.

## SKILL D-12 — 뉴스레터 컨테이너 너비

`emailTemplate.js`:

```js
const { containerWidth = 940, ... } = options
```

- 기본 940px (좌우 30px 그레이 여백 @ 뷰포트 1000)
- 940 이상 확장 금지 (우측 짤림)
- `align="center"` + 외곽 td `padding:24px 0`
- body `min-width` / `overflow-x:hidden` 금지

내부 폭은 `width="100%"` 기반 → containerWidth 변경 시 카드 자동 조정.

## SKILL D-13 — 사이드바 (Sidebar.jsx) 모드별 분기

4개 mode:
- `newsletter` · `dashboard` (visibility) · `monthly-report` · `weekly-report`

분기 패턴:
```jsx
{mode !== 'monthly-report' && (<>...</>)}
{mode === 'dashboard' && (<>...</>)}
{mode !== 'monthly-report' && mode !== 'dashboard' && (<>...</>)}
```

**RULE**: dashboard 모드는 Notice 외 모든 텍스트 입력 숨김 (사용자 요청). 신규 입력 추가 시 어느 모드에 노출할지 명시.

## SKILL D-14 — Iframe 프리뷰

어드민 페이지(`/admin/visibility` 등)는 React 앱이 게시 HTML 을 iframe `srcdoc` 으로 렌더링.

**디버깅 시**:
- F12 → Console 드롭다운 → iframe 선택
- 또는 iframe 우클릭 → "이 프레임 검사"

iframe 안 글로벌: `_productsCnty`, `_filteredMomD`, `_periodMode`, `_curMonthIdxIn12` 등.

## SKILL D-15 — 게시 후 정적 파일 재생성

코드 변경 → 사용자 액션 필요:
1. 사이드바 "구글 시트 동기화" (데이터 파싱 변경 시)
2. 사이드바 "웹사이트 게시" (클라이언트 JS / 렌더 변경 시)

단순 페이지 새로고침으로는 반영 안 됨. `/p/...` 경로는 PUB_DIR 정적 HTML.

**RULE**: 답변 마지막에 "재게시 후 확인 부탁드립니다" 안내 추가.

---

# Part 3 — 데이터 파싱 스킬

## SKILL P-01 — 날짜 파싱 (다국어/2자리 연도)

`excelUtils.js` 의 `parseMonthFromDate(dateStr)`.

지원 형식:
| 형식 | 예 | 처리 |
|---|---|---|
| 한국식 4자리+월 | `2026년 4월` | `(\d{4})` + `(\d{1,2})월` |
| 한국식 2자리+월 | `26년 4월` | `(\d{2})년` → year = 2000+YY |
| ISO | `2026-04` | `\d{4}[-/](\d{1,2})` |
| 영문 풀 | `April 2026` | `\b(jan\|feb\|...)` + `(\d{4})` |
| 영문 약 | `Apr 26` | `\b(jan\|...)\w*\s+(\d{2})\b` |
| 월만 | `4월` / `Apr` | year=0 (단일 연도 가정) |

반환: `year * 12 + month` (정렬 키)

**RULE**: 새 날짜 포맷 발견 시 위 정규식 체인에 추가. year=0 fallback 은 같은 연도 내 정렬에만 안전.

## SKILL P-02 — Google Sheets 동기화 흐름

```
시트 (사용자 편집)
  ↓ 사이드바 "구글 시트 동기화" 버튼
googleSheetsUtils.syncFromGoogleSheets()
  ↓ Sheets API batchGet (모드별 탭 목록)
sheetTabsForMode[mode] 로 필요 탭만 fetch
  ↓ 탭별 parse 함수
excelUtils.parseSheet(sheetName, rows)
  ↓ 결과 합산
{ products, productsCnty, citations, citationsCnty, dotcom, weeklyAll,
  monthlyVis, unlaunchedMap, appendixPrompts, weeklyPR, ... }
  ↓ 클라이언트 React state 저장
  ↓ "웹사이트 게시" 시 generateXxxHTML 호출
```

**RULE**: 신규 시트 추가 시:
1. `SHEET_NAMES` 에 등록
2. `parseSheet` switch 에 분기 추가
3. `sheetTabsForMode` 에 모드별 노출 결정
4. parsed 데이터를 어떤 React state 로 저장할지 결정

## SKILL P-03 — productsCnty 구조 (국가×제품×월)

각 entry:
```js
{
  product: 'TV',         // category 그대로
  country: 'US',         // 국가 코드
  date: '26년 4월',      // 최신 entry 의 date
  score: 88.1,           // 최신 LG 점수
  prev: 88.9,            // 직전 월 LG 점수
  vsComp: 90.9,          // 최신 1위 경쟁사 점수
  compName: 'Samsung',
  allScores: { LG: 88.1, Samsung: 90.9, ... },  // 최신 월 모든 브랜드
  monthlyScores: [
    { date: '26년 2월', score: 87.1, compScore: 87.2, compName, allScores },
    { date: '26년 3월', score: 88.9, ... },
    { date: '26년 4월', score: 88.1, ... },
  ],  // 시간순 정렬됨 (parseMonthFromDate)
}
```

**RULE**:
- 국가별 monthlyScores 길이가 다를 수 있음 (USA 12개월, BR 3개월 등)
- 합산 시 배열 인덱스 X, **date 매칭** 으로 (`_filteredMonthlySeries` 참고)
- 서버 정렬을 신뢰하되, 클라이언트 합산은 first matched country 의 date 순서를 canonical 로 사용

## SKILL P-04 — Citation 데이터 구조

```js
// 도메인 카테고리 트렌드
citTouchPointsTrend = {
  'Tech Reviews': { '24년 5월': 1234, '24년 6월': 1456, ... },
  'Forum': { ... },
  ...
}
citTouchPointsTrendByCnty = {
  'US|Tech Reviews': { ... },
  'BR|Forum': { ... },
  ...
}

// 도메인 트렌드
citDomainTrend = {
  'TTL|cnet.com': { domain: 'cnet.com', type: 'Tech', months: { '24년 5월': 234, ... } },
  'US|cnet.com': { ... },
  ...
}
```

**RULE**:
- `'TTL|*'` 키: 서버 사전 계산된 전체 합계
- `'${country}|*'` 키: 국가별 원자료
- 클라이언트 국가 필터: 선택된 countries 의 키들을 재집계

## SKILL P-05 — unlaunchedMap (미출시 정보)

`excelUtils.js` 의 `parseUnlaunched(rows)`.

키 형식: `${country}|${UL_CODE}` (예: `BR|AV` = 브라질 Audio 미출시).

소스 2개 병합:
1. Google Sheets `unlaunched` 탭 (사용자 편집)
2. `DEFAULT_UNLAUNCHED` 상수 (코드 하드코딩)

```js
const DEFAULT_UNLAUNCHED = {
  'BR|AV': true, 'VN|AV': true, 'IN|AV': true,  // Audio
}
```

**RULE**: 시트 파싱 결과 + DEFAULT 병합. 시트 누락 대비.

## SKILL P-06 — 서버·클라이언트 동일 계산

서버 (`*.js` template) 가 초기 렌더, 클라이언트 (`*.js` 인라인 script) 가 필터 재렌더.

**대응 페어**:
| 서버 함수 | 클라이언트 함수 |
|---|---|
| `svgLine` (dashboardSvg.js) | `_miniSvg` / `_miniSvgNullAware` (dashboardClient.js) |
| `svgMultiLine` | `_trendMultiSvg` 등 |
| `bumpChartSvg` | `_bumpChartSvgJS` (citationTemplate.js inline) |
| `mMomD` 계산 | `_filteredMomD` |
| `monthlyScores` 가공 | `_filteredMonthlySeries` |

**RULE**: 한 쪽 수정 시 다른 쪽도 동시 수정. 동일 알고리즘 보장.

## SKILL P-07 — Anthropic SDK Streaming

`insightAgent.js` 의 `callClaudeInsight`:
```js
try {
  const msg = await client.messages.stream(req).finalMessage()
  return msg
} catch (e) {
  return await client.messages.create(req)  // 테스트 mock fallback
}
```

**RULE**: 응답 시간 5분 초과 가능한 호출(=AI 인사이트, max_tokens 큼)은 항상 streaming. non-streaming 시 `403 streaming required`.

## SKILL P-08 — 출력 JSON·HTML 안전

서버 → 클라이언트 인라인 script 전달 시:
```js
const S = v => JSON.stringify(v)
  .replace(/<\//g, '<\\/')
  .replace(/ /g, '\\u2028')
  .replace(/ /g, '\\u2029')
```

`</script>` 탈출 + 라인 separator 이스케이프. `dashboardClient.js` line 555 참고.

## SKILL P-09 — 작은 단위 반복

시각 조정 / 위치 / 색상 변경 시:
- 단위: 5/10/25/30 px, 5~10%, 0.1~0.5 letter-spacing 단위
- 한 번 변경 → 사용자 검증 (재게시 후 확인)
- 큰 변경(100px+, 80%+)은 사용자 명시 시에만

**RULE**: 변경량을 답변에 수치로 명시 ("+20px", "-10% 자간"). 의심 시 `AskUserQuestion` 으로 선택지 제시.

## SKILL P-10 — 데이터 확인 콘솔 명령

iframe 콘솔에서 즉시 실행 가능한 진단 명령:

```js
// (1) productsCnty 원자료
_productsCnty.find(r => r.country === 'US' && r.product === 'TV').monthlyScores

// (2) 함수 반환값
_filteredMomD('tv', ['US'])
_filteredMonthlySeries('tv', ['US'])

// (3) DOM 표시값 (보이는 카드만)
[...document.querySelectorAll('.prod-card[data-prodid="tv"]')]
  .filter(c => c.offsetParent !== null)
  .map(c => ({
    parent: c.closest('[id]')?.id,
    score: c.querySelector('.prod-score')?.textContent,
    mom: c.querySelector('.prod-mom')?.textContent,
  }))

// (4) 모드 / 월 인덱스 상태
_periodMode  // 'weekly' | 'monthly'
_curMonthIdxIn12  // 0~11
```

**RULE**: 사용자가 "안 맞다" 보고 시 추측 전에 진단 명령 요청. 함수 반환값 vs DOM 값 비교로 "계산 정상, 표시 누락" vs "계산 자체 오류" 분리.

---

## 메타 — 스킬 추가/제거 규칙

**추가 트리거**:
- 같은 종류 버그 2회 이상 발생
- 사용자가 "이전에도 이거" 언급
- 다른 GEO 작업에서 재사용 가능한 패턴

**제거 트리거**:
- 더 이상 적용 안 되는 옛 구조
- 다른 스킬에 흡수됨

**참조 방법**:
- 새 작업 시작 전 본 문서 검색 → 해당 컴포넌트/데이터의 RULE 먼저 적용
- 모호 시 `AskUserQuestion` 으로 사용자 의도 확인
