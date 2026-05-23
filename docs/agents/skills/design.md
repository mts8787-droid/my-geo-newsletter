<!-- 자동 생성 미러 — 원본: .claude/skills/design/SKILL.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# 디자인 하네스 워크플로우 (Skills)

> Claude Code 가 디자인/UI 작업을 할 때 따라야 할 **순차 워크플로우 모음**.
> 본 파일은 "이걸 할 때는 1) → 2) → 3) ..." 형태의 step-by-step.
> 각 step 이 참조하는 **디자인 토큰·컴포넌트 카탈로그(C-01~C-23)·SVG 패턴·이메일 호환 ANTI-PATTERN 은 `.claude/rules/design.md`**.
> 절대 금지는 훅 (`.claude/hooks/`), 프로젝트 헌법은 `CLAUDE.md`.

---

## skill: 차트 그리기 (분류 코드 L-1 ~ T-1)

사용자가 "L-1 차트 그려줘" / "B-2 그룹 스택 사용" / "M-1 + T-1 (콤보 + 툴팁)" 같이 분류 코드로 요청할 때.

```
1. 분류 코드 식별:
   - L — 라인 (시계열 / 트렌드) — L-1 ~ L-7
   - B — 바 스택 (누적) — B-1, B-2
   - V — 그룹 막대 vbar — V-1
   - HB — 가로 막대 Top N — HB-1
   - M — 콤보 (Bar + Line) — M-1, M-2
   - BP — 범프 (순위 변화) — BP-1
   - MT — 미니 트렌드 (이메일 호환) — MT-1
   - D — 도넛 / 파이 (비중) — D-1, D-2
   - R — 레이더 — R-1
   - BU — 버블 / 4분면 — BU-1, BU-2
   - T — 툴팁 (직교) — T-1
2. 카탈로그 조회:
   · `/admin/chart-library` (라이브) — 예시 SVG + 본 레포 사용 위치
   · `docs/agents/CHART_LIBRARY.html` (정적 미러)
   · `.claude/rules/design.md` §5.11~§5.14 — 상세 SVG 패턴 / 데이터 shape / ANTI-PATTERN
3. 데이터 shape 결정:
   · L-1: `[{label, data: [number]}, ...]`
   · BU-1: `[{x, y, r}, ...]`
   · D-1: `[{label, value, color}, ...]`
   · R-1: `{labels: [metrics], datasets: [{label, data: [v]}]}`
   · 외: 각 양식별 design.md §5.X 참조
4. 본 레포 토큰 적용:
   · 색상: BRAND_COLORS / STATUS / RED / COMP (`dashboardConsts.js`)
   · 폰트: FONT (`'LGEIText','LG Smart',...`)
   · letter-spacing: 한글 -0.5px, 영문 -0.9px (§4.4)
5. SVG 구현 (또는 본 레포 헬퍼 사용):
   · 단일 라인 (L-1) → svgLine() 활용
   · 다중 라인 (L-5 segments 포함) → svgMultiLine() — fadeBeforeIdx 옵션
   · 외 (D-1 / R-1 / BU-1) → 직접 SVG path / circle / polygon
6. 서버 SVG ↔ 클라이언트 짝 동시 작성 (필터 시 재렌더 필요한 경우):
   · 서버: dashboardSvg.js 또는 emailTemplate.js
   · 클라이언트: dashboardClient.js 의 _miniSvg / _trendMultiSvg
   · §5.8 짝 함수 매핑 표 참조
7. T-1 툴팁 추가 (옵션 — 사용자가 함께 요청 시):
   · 카드 미니 / vbar → <title> 엘리먼트
   · 큰 트렌드 / 범프 / 도넛 → Custom DOM tooltip
   · §5.13 참조
8. KO/EN i18n 라벨 (T 객체)
9. 시각 검증 — 어드민 프리뷰 (iframe srcdoc) 또는 dev server
10. 신규 차트 추가 시 → `/admin/chart-library` 페이지의 CHART_CATALOG (scripts/render-chart-library.mjs) 에 항목 추가
```

**ANTI-PATTERN**:
- 분류 코드 외 임의 변형 (예: "L-1 인데 곡선" — L-1 은 직선만, 곡선은 L-2)
- 토큰 무시 하드코딩 색상 (BRAND_COLORS 외)
- 서버만 SVG 갱신 후 클라이언트 짝 누락 → 필터 깨짐
- 한 차트에 여러 분류 섞기 (M-1 콤보처럼 명시 양식만)

## skill: 신규 컴포넌트 (C-XX) 추가

새로운 카드/차트/테이블 시각 컴포넌트를 추가할 때.

```
1. .claude/rules/design.md 의 컴포넌트 카탈로그 (C-01~C-23) 확인 — 다음 C-번호 할당
2. 어디서 쓰일지 결정:
   a. 대시보드 (서버 SVG 렌더) → src/dashboard/dashboardTemplate.js
   b. 이메일 / 뉴스레터 (table-layout) → src/emailTemplate.js
   c. 어드민 React (Recharts) → src/visibility/ 또는 newsletter/
3. 디자인 토큰 사용 — FONT / RED / COMP / BRAND_COLORS (src/dashboard/dashboardConsts.js)
   하드코딩 색상·폰트 금지 (.claude/rules/design.md ANTI-PATTERN)
4. Status / Typography / 컬러 팔레트는 .claude/rules/design.md 의 정의 따름
5. 컴포넌트 함수 작성:
   a. 서버 SVG: HTML string 반환 함수
   b. 이메일: <table> 기반 HTML (flex/grid 금지)
   c. React: 컴포넌트 함수
6. dashboardClient.js 의 인라인 JS 갱신 (필터 변경 시 재렌더 필요한 경우)
7. .claude/rules/design.md 의 컴포넌트 카탈로그에 C-XX 항목 등재 — 설명·예시·사용 위치
8. 어드민 프리뷰 (iframe srcdoc) 또는 dev server 로 시각 검증
9. KO/EN i18n 라벨 확인 (T 객체)
```

---

## skill: 신규 SVG 차트 패턴 추가

새로운 차트 종류 (예: heatmap, sankey) 가 필요할 때.

```
1. src/dashboard/dashboardSvg.js 에 헬퍼 함수 추가 (svgLine / svgMultiLine 패턴 참고)
2. viewBox 기반 반응형 + 100% width 보장
3. baseline marker / status dot / brand color 는 .claude/rules/design.md 의 SVG 패턴 따름
4. 클라이언트 인라인 JS (dashboardClient.js) 의 _miniSvg / _miniSvgNullAware 와 시각 일관성
5. null 값 처리 — break (선이 끊기게), 점도 안 찍힘 (.claude/rules/design.md null vs 0)
6. 사용처 (template) 에서 호출 + i18n 라벨
7. 이메일 호환 검토 — SVG 미지원 클라이언트 (Outlook 등) 에서 대체 (table-layout 또는 정적 PNG)
8. .claude/rules/design.md 의 SVG 패턴 섹션에 등재
```

---

## skill: 뉴스레터 카드 변형 추가

emailTemplate.js 의 V1/V2/V3 외 새 카드 버전 (V4 등) 추가.

```
1. .claude/rules/design.md 의 V1/V2/V3 정의 확인 — 어떤 차별점인지
2. src/emailTemplate.js 에 새 함수 (예: productCardV4) 추가
3. 제약 준수 (CLAUDE.md NEVER 룰):
   a. containerWidth ≤ 940 (우측 짤림 방지)
   b. body { overflow-x:hidden } 또는 min-width 금지 (iframe 클립)
   c. table-layout 기반 (flex/grid 금지)
   d. 외부 폰트 / SVG 미지원 클라이언트 호환
4. options.productCardVersion = 'v4' 분기 추가
5. unlaunchedMap 회색 처리 / 미출시 텍스트 호환
6. KO/EN 양쪽 검증
7. 어드민 프리뷰에 토글 추가 (선택)
8. .claude/rules/design.md 의 카드 카탈로그 갱신
```

---

## skill: 이메일 호환 변환

기존 SVG/flex 기반 컴포넌트를 이메일에서 사용할 수 있게 변환.

```
1. 원본 식별 — 어떤 SVG/flex 컴포넌트인지
2. emailTemplate.js 에 새 함수 작성 (table-layout 기반):
   a. <table cellpadding="0" cellspacing="0" border="0">
   b. width 인라인 스타일 (CSS class 불가)
   c. font-family 인라인
   d. SVG 대신 막대 그래프는 background-color + width % 트릭
3. CLAUDE.md NEVER 룰 모두 통과:
   a. containerWidth ≤ 940
   b. overflow-x:hidden / min-width 금지
4. Outlook / Gmail / Apple Mail 호환 확인 (가능하면 Litmus 같은 도구)
5. 다크모드 호환 (선택)
```

---

## skill: 다국어 (KO/EN) 라벨 추가

새 텍스트 라벨이 필요할 때.

```
1. src/dashboard/dashboardConsts.js 의 T 객체에 추가:
   T.ko.<key> = '한글 라벨'
   T.en.<key> = 'English label'
2. 사용처에서 t = T[lang] || T.ko 패턴으로 접근
3. 영문/한글 길이 차이 고려 — UI 깨짐 방지 (max-width 또는 ellipsis)
4. emailTemplate.js 도 별도 lang 처리 (PROD_EN_NAME / PROD_EN_BY_KR 등)
5. KO/EN 양쪽 시각 검증
6. CLAUDE.md NEVER 룰: 사용자 텍스트 임의 다듬기 금지 — 사용자가 준 정확한 문구 그대로
```

---

## skill: iframe srcdoc 미리보기 추가

어드민 페이지에서 게시 HTML 의 미리보기를 iframe srcdoc 으로 보여줄 때.

```
1. generateXxxHTML 함수가 이미 반환하는 string 사용
2. 어드민 React 컴포넌트에 <iframe srcdoc={html} /> 추가
3. iframe 의 부모 컨테이너에 overflow-x: hidden / min-width 절대 금지
   (CLAUDE.md NEVER 룰: iframe 안 콘텐츠가 클립됨)
4. 적절한 iframe height 설정 — onLoad 후 contentDocument.body.scrollHeight 측정 후 동적 적용
5. KO/EN 토글 시 iframe key 강제 재마운트 (srcdoc 캐시 회피)
6. styles 의 폰트 / 색상 토큰 일관성 확인
```

---

## skill: 회귀: UI 컴포넌트 깨짐 디버깅

대시보드/뉴스레터에서 카드 깨짐·차트 안 나옴·텍스트 클립 발생 시.

```
1. 어떤 컴포넌트 (C-XX) 인지 식별 — .claude/rules/design.md 의 카탈로그 매핑
2. 데이터 문제인지 시각 문제인지 분리:
   a. 데이터 문제 → 데이터 하네스 워크플로우 (회귀 디버깅 TDD) 로 위임
   b. 시각 문제 → 본 워크플로우 계속
3. 영향 범위 좁힘 — 특정 카테고리/국가/월 에서만 발생하는지
4. 토큰 위반 확인 — 하드코딩 색상/폰트 추가됐는지 git diff
5. CLAUDE.md NEVER 룰 위반 검토:
   a. containerWidth > 940
   b. body overflow-x:hidden / min-width
   c. SVG 미지원 클라이언트 (이메일에서 차트 안 나옴)
6. 수정 후 KO/EN 양쪽 + 어드민 프리뷰 + (가능하면) 실제 이메일 클라이언트 검증
```
