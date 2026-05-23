<!-- 자동 생성 미러 — 원본: .claude/skills/design-tune/SKILL.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# design-tune — 디자인 호환·미세조정·회귀 워크플로우

> 이메일 호환 / 다국어 라벨 / UI 회귀 디버깅.
> 참조 Rule: `.claude/rules/design.md` §5.2 (newsletter 너비), §4.4 (typography KO/EN), §6 ANTI-PATTERN.

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
3. CLAUDE.md NEVER Rule 모두 통과:
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
6. CLAUDE.md NEVER Rule: 사용자 텍스트 임의 다듬기 금지 — 사용자가 준 정확한 문구 그대로
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
5. CLAUDE.md NEVER Rule 위반 검토:
   a. containerWidth > 940
   b. body overflow-x:hidden / min-width
   c. SVG 미지원 클라이언트 (이메일에서 차트 안 나옴)
6. 수정 후 KO/EN 양쪽 + 어드민 프리뷰 + (가능하면) 실제 이메일 클라이언트 검증
```
