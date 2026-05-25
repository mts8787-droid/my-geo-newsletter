---
name: design-layout
description: 전체 대시보드 / 페이지의 시각 레이아웃 설계 워크플로우 — 사용자가 "대시보드 레이아웃 짜줘", "전체 페이지 구성", "어떻게 배치할까", "신규 페이지 레이아웃", "섹션 구성" 같이 요청 시 트리거. 부트스트랩 (STEP 3) 에서 받은 시트 스키마 (categoryMap.js / excelUtils.js / RAW_TO_PROD_ID) 우선 참조해서 데이터 shape 기반 자동 레이아웃 추천. 스키마 부재 / 새 페이지면 TECHNIQUE-4 호출로 사용자에게 손그림·HTML 초안·스케치 요청. Rule·페이지 골격·반응형 매핑은 .claude/rules/design.md §5.17 참조.
---

# design-layout — 전체 페이지 레이아웃 설계 워크플로우

> 단일 컴포넌트가 아닌 **페이지 전체 골격** 을 설계할 때.
> 참조 Rule: `.claude/rules/design.md` §5.17 (페이지 레이아웃 표준 패턴), §5.16 (차트+표 X 좌표 정렬), §C-01~C-24 (컴포넌트 카탈로그).
> 관련 스킬: `design-chart` (개별 차트 그리기), `design-component` (신규 컴포넌트 추가).

---

## 1. 트리거 / 적용 시점

사용자가 다음과 같이 요청할 때:
- "대시보드 레이아웃 짜줘" / "전체 페이지 구성"
- "신규 페이지 만들 건데 어떻게 배치할까"
- "월간 리포트 섹션 순서 정해줘"
- "이 데이터로 대시보드 만들면 어떤 모양?"
- "모바일 / 데스크탑 양쪽 동작하는 페이지 레이아웃"

**언제 X**:
- 단일 차트 그리기 → `design-chart`
- 신규 컴포넌트 (C-XX) 추가 → `design-component`
- 기존 페이지 깨짐 디버깅 → `design-tune`
- 신규 뉴스레터 발행본 → `newsletter-make` (뉴스레터는 별도 워크플로우)

---

## 2. 워크플로우 (step-by-step)

### STEP 1 — 데이터 스키마 우선 참조 (부트스트랩 결과)

신규 페이지 레이아웃 짜기 전에 **이미 있는 데이터** 부터 확인. 부트스트랩 STEP 3 (`.claude/rules/BOOTSTRAP.md` STEP 3) 에서 사용자가 공유한 시트 스키마는 다음 위치에 흡수되어 있음:

```bash
# 1) 카테고리 / 분류 ID 목록 — single source
cat src/categoryMap.js | head -30
# → PROD_IDS, PROD_ID_TO_KR, PROD_ID_TO_EN 확인

# 2) 시트 탭 이름 + 파서 목록 (어떤 데이터 종류 있나)
grep -E "^export const SHEET_NAMES|^function parse" src/excelUtils.js | head -20

# 3) 모드별 노출 (어떤 페이지가 어떤 시트 사용)
cat src/shared/sheetTabsForMode.js

# 4) React state 의 키 (publish 시 어떤 데이터 전달)
grep -E "products|productsCnty|weekly|monthly|citations" src/shared/api.js | head -10
```

검증할 것:
- [ ] 카테고리 (PROD_IDS) 가 몇 개? (영역 그룹 / 막대 차트 / 카드 그리드 수 결정)
- [ ] 국가 / 지역 차원 있나? (필터 / 그룹 차트)
- [ ] 시계열 있나? (트렌드 차트 위치)
- [ ] 비교군 (자사 vs 경쟁사) 있나? (Hero 카드 / vbar)
- [ ] 미출시 / null 처리 데이터 있나? (회색 처리 위치)

### STEP 2 — 스키마 부재 시 사용자에게 요청

위 grep 결과가 비어 있거나 (신규 프로젝트) 새 페이지면 **TECHNIQUE-4 활용** (`.claude/rules/BOOTSTRAP.md` TECHNIQUE-4).

```
[🐈‍⬛ 히로 (Claude) 가 사용자에게]:
"전체 페이지 레이아웃 짜기 전에 어떤 모양으로 가고 싶은지 공유해주세요.
가장 편한 방식 선택:

A) 손그림 스케치 사진 (종이/태블릿) → 채팅에 붙여넣기
   · 박스 위치 + 라벨 + 대략 비율만 OK

B) Claude 디자인 또는 다른 LLM 으로 미리 작성한 HTML/SVG 초안
   · 시각 의도만 표현 — 본 프로젝트 토큰으로 다시 매핑

C) 부분 소스코드 + 텍스트 설명
   · 어떤 섹션 (Hero / KPI / 트렌드 / 카드 그리드 / Top N / 각주) 을 어떤 순서로

또는 비슷한 기존 페이지 참고:
  · 대시보드: src/dashboard/dashboardTemplate.js
  · Citation: src/citation/citationTemplate.js
  · 월간 리포트: src/monthly-report/monthlyTemplate.js
  · 주간 리포트: src/weekly-report/weeklyTemplate.js"
```

스케치 받은 후 → 본 저장소 토큰·컴포넌트 카탈로그 (C-01~C-24) 매핑.

### STEP 3 — 페이지 골격 결정 (.claude/rules/design.md §5.17 표준 패턴)

표준 8 섹션 중 프로젝트에 필요한 것 선택 (위→아래 순서):

| 섹션 | 컴포넌트 | 데이터 요건 |
|---|---|---|
| 1) **Hero** | C-01 큰 점수 + MoM + Gap | 단일 KPI (자사 점수 + 비교군) |
| 2) **Notice / Executive Summary** | C-02 알림 박스 / 자유 텍스트 | 사용자 명시 텍스트 또는 AI 인사이트 |
| 3) **KPI 4-grid** | C-15 Summary Metric 4 개 | 4 개 핵심 metric (% / 정수 / 비율) |
| 4) **필터 / 네비** | dropdown / 토글 / 탭 | 국가·제품·시점 선택 차원 있을 때 |
| 5) **메인 트렌드** | C-07 svgLine 또는 C-08 svgMultiLine | 시계열 (월 / 주차) |
| 6) **그룹 비교** | C-05 vbar / C-06 가로 막대 Top N / C-19 도넛 | 카테고리·국가·브랜드 N 차원 |
| 7) **카드 그리드** | C-03 / C-04 / C-21~C-23 (V1/V2/V3 뉴스레터) | 카테고리별 상세 (각 카테고리당 1 카드) |
| 8) **각주 / 출처** | C-13 footnote | 미출시·예외·기준일 명시 |

각 섹션의 데이터 요건 충족 여부 → 시트 스키마 (STEP 1) 와 매칭. 충족 X 섹션은 제외.

### STEP 4 — 차트 분류 코드 매핑

각 섹션의 시각 단위에 **분류 코드 (L-1 ~ T-1)** 부여 — `harness-mirror/docs/CHART_LIBRARY.html` 참조:

| 데이터 shape | 추천 코드 |
|---|---|
| 시계열 시계열 단일 | L-1 (Basic Line) |
| 시계열 다중 시리즈 | L-5 (Segments fade for baseline) 또는 svgMultiLine |
| 카테고리별 N 그룹 막대 | V-1 (vbar) |
| Top N 가로 막대 | HB-1 |
| 비중 / 점유율 | D-1 (Doughnut) 또는 D-2 (Pie) |
| 순위 변화 | BP-1 (Bump Chart) |
| 다차원 metric | R-1 (Radar) |
| 4분면 (X/Y) | BU-2 (Quadrant) |

각 차트의 detail (옵션 / 컬러 / 베이스라인 등) 은 `design-chart` 스킬로 위임.

### STEP 5 — 그리드 시스템 결정 (반응형)

`.claude/rules/design.md` §5.17 의 표준 그리드:

```
데스크탑 (≥ 1100px):
- container max-width: 1100~1400px, padding: 28px 32px
- KPI 4-grid: grid-template-columns: repeat(4, 1fr)
- 카드 그리드: repeat(auto-fit, minmax(280px, 1fr))

태블릿 (≤ 780px):
- padding: 16px 14px
- KPI grid: repeat(2, 1fr)
- 카드 그리드: minmax(240px, 1fr)

모바일 (≤ 480px):
- padding: 12px 10px
- 모든 grid: 1fr (single column)
- 4컬럼 table: display:block + overflow-x:auto (가로 스크롤)
- CTA 버튼: width:100% (full-width tap)
```

(자세한 모바일 패턴은 본 저장소의 기존 페이지 — `routes/harness.js` `/hiro`, `harness-mirror/docs/HARNESS.html` 의 @media 블록 참조)

### STEP 6 — 코드 구조 매핑 (HTML 생성기 + 클라이언트 짝)

본 저장소의 페이지 구조 표준:

```
src/<page>/
  <page>Template.js     # HTML 생성기 (서버 측 — 정적 HTML 첫 렌더)
  <page>Client.js       # 인라인 클라이언트 JS (필터 시 동적 재렌더)
  <page>Svg.js          # SVG 헬퍼 (서버 + 클라 짝 함수)
  <page>Format.js       # 포맷 헬퍼 (statusInfo, mdBold 등)
  <page>Consts.js       # FONT, RED, COMP, BRAND_COLORS, T(i18n)
  <page>Styles.js       # CSS-in-JS
```

신규 페이지 만들 때 본 패턴 따름:
- `<page>Template.js` 가 `generate<Page>HTML(options)` 함수 export
- options 객체에 lang (KO/EN), products, productsCnty, weekly, monthly 등 데이터
- container 너비 / 그리드는 §5.17 그대로 사용
- 서버 SVG ↔ 클라이언트 짝 함수 매칭 (§5.8)

### STEP 7 — 검증 체크리스트

```
[ ] STEP 1 의 시트 스키마 → STEP 3 의 섹션 매핑 결과 사용자 확인
[ ] 차트 분류 코드 (L/V/HB/...) 각 섹션에 부여
[ ] 데스크탑 / 태블릿 / 모바일 3 breakpoint 그리드 정의
[ ] HTML 생성기 + 클라이언트 짝 파일 구조 결정 (5 파일)
[ ] 라이트 / 다크 테마 모두 토큰 사용 (BRAND_COLORS, STATUS — 하드코딩 X)
[ ] 빌드 산출물 확인 (npm run build)
[ ] /admin/<page> 라우트 등록 (routes/admin-pages.js)
[ ] 어드민 메뉴 카드 등재
```

---

## 3. 데이터 스키마 누락 시 — TECHNIQUE-4 상세

`.claude/rules/BOOTSTRAP.md` TECHNIQUE-4 의 흐름을 본 스킬 안에서 그대로 호출:

```
[🐈‍⬛ 히로 안내]
"전체 페이지 레이아웃 짜기 전에 의도하는 형태를 공유해주세요. 깨짐·틀어짐 방지.

1. 손그림 스케치 사진 (종이/태블릿) → 채팅에 붙여넣기
2. Claude 디자인 또는 다른 LLM 으로 미리 작성한 HTML/SVG 초안
3. 부분 소스코드 + 텍스트 설명 — '어떤 섹션 어떤 순서' 만 적어도 OK

(웹앱 Claude 서비스 채팅이면 스크린샷 가능. 터미널 CLI 는 텍스트만.)
   터미널 CLI 사용자는 1·3번 + 텍스트 설명으로 대체."

[Claude 의 액션 후]
- 사용자 공유한 자료 분석
- 본 프로젝트 토큰 (FONT/RED/BRAND_COLORS) 으로 매핑
- C-01 ~ C-24 컴포넌트 카탈로그 매칭
- L-1 ~ T-1 차트 분류 코드 매칭
- 정확한 HTML/SVG 작성 → 사용자 검증 요청
```

---

## 4. 후속 작업

페이지 레이아웃 결정 후 실제 컴포넌트 / 차트 작성은 sub-skill 위임:

- **개별 차트 작성** → `design-chart` (분류 코드별 SVG 패턴)
- **신규 컴포넌트** (C-25, C-26...) → `design-component`
- **이메일 호환 변환** (뉴스레터 발행) → `newsletter-make` + `design-tune`
- **반응형 미세 조정** → `design-tune` (특정 카드 깨짐 등)

---

## 5. ANTI-PATTERN

```
NEVER  데이터 스키마 안 보고 레이아웃부터 그리기 → 데이터 shape 안 맞아 회귀
NEVER  단일 컴포넌트 추가 작업에 본 스킬 사용 → design-component 가 적합
NEVER  뉴스레터 / 이메일 호환 페이지에 본 스킬 단독 사용 → newsletter-make 가 BOOTSTRAP-newsletter 시나리오 트리거
NEVER  컬러 / 폰트 하드코딩 → BRAND_COLORS / STATUS / FONT 토큰만
NEVER  데스크탑 only 설계 → 항상 3 breakpoint (≥1100 / ≤780 / ≤480) 미디어 쿼리 동시 정의
NEVER  서버 SVG 만 작성, 클라이언트 짝 누락 → 필터 시 차트 깨짐 (§5.8)
NEVER  스케치 / 스키마 없이 추측으로 진행 → 사용자 의도와 mismatch
```

---

## 6. 참조

- `.claude/rules/design.md` §5.17 (페이지 레이아웃 표준 패턴) · §C-01~C-24 (컴포넌트 카탈로그)
- `.claude/rules/BOOTSTRAP.md` TECHNIQUE-4 (디자인 레이아웃 스케치 요청)
- `harness-mirror/docs/CHART_LIBRARY.html` (분류 코드 L-1~T-1 카탈로그)
- `src/categoryMap.js` (데이터 스키마 — 부트스트랩 STEP 3 결과)
- `src/excelUtils.js` (시트 → 데이터 변환 — 어떤 데이터 종류 있는지)
- 기존 페이지 참고: `src/dashboard/dashboardTemplate.js`, `src/citation/citationTemplate.js`
