---
name: data-debug
description: 데이터 회귀 / 정렬 깨짐 / MoM 부호 반전 / 동기화 결과 이상 등의 디버깅 워크플로우. 재현 fixture 우선 작성 (TDD), 시트 동기화 후 verify-after-act invariant 검증, .claude/rules/data.md §6 ERROR CATCHING 5단계 흐름 적용. 데이터가 갑자기 비거나 잘못된 값일 때 트리거.
---

# data-debug — 데이터 회귀·진단 워크플로우

> 데이터 손상·정렬 깨짐·MoM 부호 반전·sync 결과 이상 등의 디버깅.
> 참조 Rule: `.claude/rules/data.md` §6 (ERROR CATCHING 5단계), §7.4 (Verify-After-Act).

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
