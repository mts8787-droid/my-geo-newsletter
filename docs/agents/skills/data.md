<!-- 자동 생성 미러 — 원본: .claude/skills/data/SKILL.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# 데이터 하네스 워크플로우 (Skills)

> Claude Code 가 데이터 작업을 할 때 따라야 할 **순차 워크플로우 모음**.
> 본 파일은 "이걸 할 때는 1) → 2) → 3) ..." 형태의 step-by-step.
> 각 step 이 참조하는 **룰·매뉴얼·invariant·ANTI-PATTERN 은 `.claude/rules/data.md`**.
> 절대 금지는 훅 (`.claude/hooks/`), 프로젝트 헌법은 `CLAUDE.md`.

---

## skill: 신규 시트 추가

새로운 Google Sheets 탭이 추가되어서 본 레포의 데이터 모델에 통합할 때.

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

---

## skill: 회귀 디버깅 (TDD)

데이터 손상·정렬 깨짐·MoM 부호 반전 등 회귀 발견 시.

```
1. 재현 fixture 작성 — 문제 데이터를 최소 형태로 추출 (rows 배열 1-5개)
2. src/excelUtils.test.js 에 실패하는 테스트 1개 추가:
   a. describe / it 블록
   b. parseSheetRows(SHEET_NAMES.X, fixture) 호출
   c. 기대값 expect — 현재는 실패해야 정상 (회귀 재현 증명)
3. npm test -- --run src/excelUtils.test.js — 새 테스트가 실패하는지 확인
4. 원인 파악 → .claude/rules/data.md §6 ERROR CATCHING 5단계 흐름 따라 진단:
   a. [1] DETECT — 입력 어디서 망가졌나
   b. [3] CAPTURE — rowIdx / raw / parsed / expected 로그
5. 코드 수정 — surgical (영향 최소)
6. 테스트 통과 확인 + 전체 npm test (회귀 없음)
7. 빌드 확인 (npm run build)
```

---

## skill: 거대 파서 분할 (테스트 우선)

200줄 이상의 거대 파서 (parseWeekly 같은) 를 helper 로 분할할 때.

```
1. 분할 전 통합 테스트 fixture 작성 — 각 mode/분기마다 1개씩 (3-6 테스트)
2. npm test — 새 fixture 가 현재 코드에서 통과하는지 확인 (baseline)
3. 함수의 분기를 helper 로 추출:
   a. 각 분기를 _extractXxx 함수로
   b. 공통 인자는 ctx 객체로 묶어 전달
   c. mutation 패턴 (weeklyMap 등) 유지, 재할당 필요한 변수는 return value 로
4. 본체에서 ctx 만들어 helper 호출 (if/else if 패턴)
5. const → let 변경 필요 시 confirm (helper 가 새 배열 반환하는 경우)
6. npm test — 모든 테스트 통과 확인 (baseline 회귀 X)
7. 빌드 확인
```

---

## skill: silent fallback 강화

`if (...) return {}` 같은 silent 분기를 발견하면.

```
1. 발견된 위치마다 _logWarn(scope, msg, ctx) 으로 교체:
   a. scope: 함수명 (또는 함수명:mode)
   b. msg: 사람이 읽을 분기 사유 (예: 'header not found', 'no TOTAL row')
   c. ctx: 재현 컨텍스트 (firstRows, header, missing fields)
2. import 추가: import { _logWarn } from './sheetParserUtils.js'
3. _logWarn 의 반환값은 {} — 호출자는 그대로 return _logWarn(...) 가능
4. 테스트 추가 — silent 케이스 fixture 가 빈 객체 반환 + console.warn 호출 검증
5. .claude/rules/data.md §8 ANTI-PATTERN ('silent fail') 위반 안 함 확인
```

---

## skill: 매핑 통합 (single source)

동일한 매핑이 여러 파일에 분산되어 있을 때.

```
1. grep 으로 잔여 매핑 검색:
   grep -rn "tv:\s*'TV'\|monitor:\s*'IT'" --include="*.js" --include="*.jsx" src/
2. 발견된 곳마다:
   a. 모듈 import 가능한 환경 (ES module) → src/categoryMap.js import
   b. 모듈 import 불가 (인라인 string template) → JSON.stringify(PROD_ID_TO_UL_CODE) 등으로 build 시점 generate
3. 로컬 정의 제거 → import
4. invariant 자동 검증 (assertCategoryMapInvariant) 통과 확인
5. grep 으로 잔여 0건 확인
6. 테스트 + 빌드
```

---

## skill: 시트 동기화 verify-after-act

syncFromGoogleSheets 호출 직후 invariant 자동 검증.

```
1. src/googleSheetsUtils.js 의 syncFromGoogleSheets 종료 직전:
   result._syncIssues = verifySyncResult(result, 'syncFromGoogleSheets')
2. localStorage 에 진단 기록 저장 (최근 10건):
   try { localStorage.setItem('syncDiagnostics', JSON.stringify(records)) } catch
3. verifySyncResult 가 검증하는 invariant (.claude/rules/data.md §7.4):
   a. products / productsPartial 둘 다 비면 issue
   b. productsCnty 빈 배열이면 issue
   c. unlaunchedMap DEFAULT 누락 (BR|AV) 이면 issue
   d. weeklyLabels 자동 생성 (W1,W2,...) 만 남으면 issue
4. /admin/observability 페이지의 Sync Health 섹션이 localStorage 읽어 표시
```

---

## skill: 거대 파서에 ERROR CATCHING 적용

기존 파서에 5단계 ERROR CATCHING 패턴 (.claude/rules/data.md §6) 을 점진 적용.

```
1. [1] DETECT — 진입부에 assertRows 가드 (라우터에서 처리되면 생략 가능)
2. [2] CLASSIFY — _logFatal / _logWarn / _logInfo 로 레벨 통일
3. [3] CAPTURE — per-row warn 시 { rowIdx, raw, parsed, expected } 포함
4. [4] RECOVER — DEFAULT 병합 / null fallback / skip 패턴 명시
5. [5] SURFACE — console.error/warn/log 일관 사용
6. forEachRowSafe 헬퍼로 row-level try/catch 격리 (옵션, 시그니처 호환 시)
7. 종료 시 카운트 로그 — 'decision=merged / matchedRows N / skipCount M / 총행 T'
```
