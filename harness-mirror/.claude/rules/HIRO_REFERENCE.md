<!-- 자동 생성 미러 — 원본: .claude/rules/HIRO_REFERENCE.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# HIRO Reference Example — 본 저장소 구체 변수명·도메인 매핑

> 각 Rule 의 도메인 무관 패턴이 본 저장소 (가전 GEO KPI 영역) 에서 어떻게 구현되었는지의 매핑.
> Claude 가 본 저장소 작업 시 명시 참조. 다른 프로젝트 이식자도 본 파일 보면 본 저장소 매핑 이해 가능.

---

## data.md §5.5 — 카테고리 ID 매핑 (single source pattern)

### HIRO 본 저장소 — 가전 제품 글로벌 KPI 도메인

- **파일**: `src/categoryMap.js`
- **canonical id**: `PROD_IDS = ['tv','monitor','audio','washer','fridge','dw','vacuum','cooking','rac','aircare','styler']`
- **표시명**: `PROD_ID_TO_KR` / `PROD_ID_TO_EN`
- **외부 코드**: `PROD_ID_TO_UL_CODE` (예: `styler → 'STYLER'` — 미출시 시트 UL_CODE)
- **역매핑**: `RAW_TO_PROD_ID` / `RAW_TO_KR`
- **정규화**: `UL_CODE_NORMALIZE` (예: `'WASHING MACHINE' → 'WM'`)
- **invariant 헬퍼**: `assertCategoryMapInvariant()`
- **호환 alias**: `dashboard/dashboardConsts.js` 가 `export { PROD_ID_TO_UL_CODE as UL_PROD_MAP }` (기존 사용처 호환)
- **과거 회귀**: 매핑이 `excelUtils.js` + `dashboardConsts.js` + `emailTemplate.js` + `parseUnlaunched` 4곳에 분산 → STYLER 신규 추가 시 일부만 갱신되어 라벨 누락. 통합 후 재발 0.

---

## ai.md — Anthropic API 호출 / 응답 검증 / 비용 추적

### HIRO 본 저장소 — AI 호출 구체 위치·변수명·도메인 type

| 본문 항목 (도메인 무관) | HIRO 본 저장소 |
|---|---|
| AI 에이전트 모듈 | `src/shared/insightAgent.js` (Anthropic SDK 직접 호출) |
| 프롬프트 템플릿 | `src/shared/insightPrompts.js` |
| API 엔드포인트 | `routes/insight.js` (`/api/generate-insight`) |
| 관측 페이지 | `routes/observability.js` (`/admin/observability`) |
| 호출 로그 저장 | `lib/insight-runs.js` (JSONL 파일 — `insight_runs.jsonl`) |
| 분류 함수 | `classifyError()` (insightAgent.js) |
| 비용 단가 | `MODEL_PRICING` (lib/insight-runs.js) |
| AI 호출 진입 함수 | `insightAgent.callClaudeInsight(...)` |

**비즈니스 type 예시 (가전 GEO KPI 영역별)**: `'product'`, `'citation'`, `'monthly'`, `'weekly'`, `'visibility'`

**마커 매핑** (CLAUDE.md 리팩터링 마커 표 참조):
- `N3` — 외부 boundary 응답 검증 (Anthropic API 응답: 빈 본문 / 거절 / 길이 하한 미달 → `invalid_output` 분류)
- `C13` — Anthropic SDK 에러 분류 (`err.kind` 분기)

**§3.5 사용자 텍스트 보호 — 본 저장소 사례**:
- 사용자가 `"Q1 결과 발표"` 라고 적으면 AI 가 `"1분기 결과 발표"` 로 다듬는 것 금지 (어휘 의도 훼손)

**향후 (미구현)**: `.claude/skills/ai/SKILL.md` 신설 — AI 호출 워크플로우 step-by-step 형식

---

## 사용법

- **본 저장소 작업**: Claude 가 변수명 / 도메인 type 정보가 필요할 때 본 파일 명시 import. 본문 Rule 만으로 부족 시.
- **신규 Reference 추가**: 향후 Reference Example 필요하면 본 파일에 섹션 추가.
