<!-- 자동 생성 미러 — 원본: .claude/skills/design-component/SKILL.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# design-component — 시각 컴포넌트 추가 워크플로우

> 새로운 카드 / 카드 변형 / 미리보기 같은 시각 단위 추가.
> 참조 Rule: `.claude/rules/design.md` §7 (컴포넌트 카탈로그 C-01~C-24), §C-21~C-23 (V1/V2/V3 카드).

---

## skill: 신규 컴포넌트 (C-XX) 추가

새로운 카드/차트/테이블 시각 컴포넌트를 추가할 때.

```
1. .claude/rules/design.md 의 컴포넌트 카탈로그 (C-01~C-24) 확인 — 다음 C-번호 할당
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

## skill: 뉴스레터 카드 변형 추가

emailTemplate.js 의 V1/V2/V3 외 새 카드 버전 (V4 등) 추가.

```
1. .claude/rules/design.md 의 V1/V2/V3 정의 확인 — 어떤 차별점인지
2. src/emailTemplate.js 에 새 함수 (예: productCardV4) 추가
3. 제약 준수 (CLAUDE.md NEVER Rule):
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

## skill: iframe srcdoc 미리보기 추가

어드민 페이지에서 게시 HTML 의 미리보기를 iframe srcdoc 으로 보여줄 때.

```
1. generateXxxHTML 함수가 이미 반환하는 string 사용
2. 어드민 React 컴포넌트에 <iframe srcdoc={html} /> 추가
3. iframe 의 부모 컨테이너에 overflow-x: hidden / min-width 절대 금지
   (CLAUDE.md NEVER Rule: iframe 안 콘텐츠가 클립됨)
4. 적절한 iframe height 설정 — onLoad 후 contentDocument.body.scrollHeight 측정 후 동적 적용
5. KO/EN 토글 시 iframe key 강제 재마운트 (srcdoc 캐시 회피)
6. styles 의 폰트 / 색상 토큰 일관성 확인
```
