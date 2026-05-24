---
name: data-add
description: 데이터 모델에 무언가를 신규로 "추가" 할 때 — Google Sheets 신규 탭(시트) 추가, PROD_IDS 에 신규 카테고리(예: 'styler') 추가. parseSheetRows 라우터 등록 / categoryMap.js single source 갱신 / 4종 매핑 + invariant 자동 검증 / 통합 테스트 작성까지의 step-by-step. Rule·매뉴얼·invariant·ANTI-PATTERN 은 .claude/rules/data.md 참조.
---

# data-add — 데이터 신규 추가 워크플로우

> 새로운 데이터 단위 (Google Sheets 탭 / 카테고리 prodId) 를 본 저장소에 통합할 때.
> 참조 Rule: `.claude/rules/data.md` §4.2 (신규 시트), §5.5 (카테고리 매핑 single source).

---

## skill: 신규 시트 추가

새로운 Google Sheets 탭이 추가되어서 본 저장소의 데이터 모델에 통합할 때.

```
1. src/excelUtils.js 의 SHEET_NAMES 상수에 새 탭 이름 등록
2. parseSheetRows 라우터에 새 분기 추가 — 해당 sheetName 일 때 parseXxx 호출
3. parseXxx 함수 작성:
   a. 진입부: .claude/rules/data.md §6.2 [1] DETECT — 보통 assertRows 라우터 가드가 처리하므로 생략 가능
   b. 헤더 탐지: findHeaderIdx (AND 매칭) 또는 rows.findIndex (OR/복잡 분기)
   c. 헤더 없으면 _logWarn(scope, 'header not found', { firstRows }) 후 return {}
   d. 데이터 row 처리: 헤더 다음 행부터 forEach
   e. row-level 손상은 try/catch 또는 forEachRowSafe 로 격리 + warn
   f. 종료 시 _logInfo 로 카운트 출력 (matchedRows / skipCount / 디폴트)
4. src/shared/sheetTabsForMode.js 에 모드별 노출 결정 (dashboard/visibility/citation/tracker 중 어디서 fetch 할지)
5. App.jsx state 에 결과 반영 (newsletter/visibility 등 caller)
6. publishCombinedDashboard 의 extra 객체에 전달
7. generateXxxHTML 에서 활용 (대시보드 / 뉴스레터 / 이메일)
8. 통합 테스트 1개 이상 추가 — src/excelUtils.test.js 에 fixture + parseSheetRows 통한 호출
9. invariant 자동 검증 통과 확인 (npm test 의 categoryMap invariant 등)
10. .claude/rules/data.md §4.2 (신규 시트 추가 절차) 참고
```

---

## skill: 신규 카테고리 추가

`PROD_IDS` 에 새 prodId (예: `'styler'`) 를 추가할 때.

```
1. src/categoryMap.js 의 PROD_IDS 배열 끝에 prodId 추가
2. 4종 매핑 모두 갱신:
   a. PROD_ID_TO_KR (한글 표시명)
   b. PROD_ID_TO_EN (영문 표시명)
   c. PROD_ID_TO_UL_CODE (미출시 시트 UL_CODE)
   d. PROD_ID_TO_BU (Business Unit — MS/HS/ES)
3. (옵션) NAME_TO_PROD_ID 에 한/영/약어 역매핑 추가 — 시트 raw 입력 흡수용
4. (옵션) UL_CODE_NORMALIZE 에 미출시 시트 raw 표기 → UL_CODE 매핑 추가
5. npm test — assertCategoryMapInvariant 가 자동 검증:
   a. UL_CODE_NORMALIZE 결과값 ⊆ PROD_ID_TO_UL_CODE 값 집합
   b. PROD_IDS 의 모든 id 가 4종 매핑에 정의됨
6. PROD_ID_TO_ORDER 는 자동 (PROD_IDS 인덱스 기반) — 손댈 필요 없음
7. UI 검증 (옵션): /admin/<해당 모드> 에서 새 카테고리 카드가 노출되는지 확인
```

**주의**: 다른 파일에 매핑을 인라인 정의하지 말 것. 본 프로젝트는 STYLER 누락 회귀로 8 곳 분산 → 1곳 통합한 이력 있음.
