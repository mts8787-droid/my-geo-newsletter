---
name: data-refactor
description: '데이터 파서·매핑·로깅 코드 품질 작업 (거대 파서 분할, silent fallback → _logWarn 강화, 분산 매핑 single source 통합). 기존 코드 품질·일관성 작업이 필요할 때 호출 (새 기능 추가 X). 트리거: "이 파서 분할" / "categoryMap 통합" / "silent fallback 정리" 같은 요청.'
---

# data-refactor — 데이터 코드 품질·리팩터 워크플로우

> 신규 추가가 아닌 기존 데이터 코드의 분할·통합·로깅 강화.
> 참조 Rule: `.claude/rules/data.md` §5.5 (매핑 single source), §6 (ERROR CATCHING), §8 ANTI-PATTERN.

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
