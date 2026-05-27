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

---

# For Adopters — 이식자 참고 (5 Rule + CLAUDE.md 통합)

본 저장소는 가전 GEO KPI 영역 (LG / Samsung / Whirlpool 같은 가전 브랜드 비교) 이라 변수명·예시가 가전 + 글로벌 색깔이지만, **패턴 자체는 같은 가전 산업 내 영업·매출·전략·마케팅·R&D 등 다른 직무 도메인에도 그대로 적용**. 부트스트랩 (`/onboard`) 시작하면 🐈‍⬛ 히로가 데이터 보고 자동 적응 — **변수명·코드 한 줄 안 봐도 됨**.

## 같은 가전 산업 내 다른 직무 도메인 예시 (공통 — data.md / design.md / newsletter.md / ai.md 모두)

| 직무 도메인 | 카테고리 차원 | 측정값 | 활용 Rule |
|---|---|---|---|
| **영업** | 지역 / 채널 / 제품군 | 매출액 / 점유율 | data / design / newsletter |
| **매출** | 분기 / 본부 / 사업부 | 매출액 / 성장률 | data / design / newsletter |
| **전략** | 시장 / 경쟁사 / 시점 | 점유율 / 추세 | data / design / ai |
| **마케팅** | 캠페인 / 매체 / 기간 | 노출 / 클릭 / 전환 | data / design / newsletter / ai |
| **R&D** | 제품 / 단계 / 분기 | 출시 / 비용 / 효율 | data / design / newsletter |

## data.md — 데이터 작업 핵심 패턴 (이름 자유)

1. **single source 매핑 파일** — 카테고리·분류 1곳에만 정의 (§5.5)
2. **5단계 ERROR CATCHING** — DETECT → CLASSIFY → CAPTURE → RECOVER → SURFACE (§6)
3. **invariant 자동 검증** — 모든 파이프라인 단계에 검증 함수 1개 (§7.4)
4. **silent fallback 금지** — 구조화된 로그 헬퍼로 표면화 (§5.10)
5. **시간순 정렬 유지** — 시계열 데이터는 항상 정렬 후 저장 (§5.6)
6. **null vs 0 구분** — 빈 셀 / "NA" / "-" 는 null, 실측 0 과 분리 (§5.3)

## design.md — 디자인 시스템 핵심 패턴

1. **디자인 토큰** — Brand 색상 / 상태 색상 (Lead/Behind/Critical) / 폰트 / 자간 / 스페이싱 (§4)
2. **차트 분류 코드** (L-1~T-1) — 21개 양식 + 어느 데이터 shape 에 어떤 차트가 맞는지 (§5.15)
3. **컴포넌트 카탈로그** (C-01~C-23) — Hero / 카드 / vbar / 트렌드 / 범프 / 테이블
4. **서버↔클라이언트 짝 동기** — 필터 변경 시 같은 차트 두 곳 일관 (§5.8)
5. **이메일 호환 제약** — table-layout / 인라인 style / containerWidth 안전 최대치 (§5.2)
6. **차트 + 표 결합 X 좌표 정렬** — 차트 점과 표 컬럼이 항상 일치 (§5.16, C-24)

**도메인 적용 예**: 영업 대시보드 → `BRAND_COLORS` → `CHANNEL_COLORS` / 마케팅 → `CAMPAIGN_COLORS` + 베이스라인 마커는 캠페인 시작 시점 / 전략 → 차트 분류 코드 그대로 호출.

## newsletter.md — 이메일 호환 / 뉴스레터 핵심 패턴

1. **table-layout 기반** — flex / grid 금지 (Outlook 깨짐)
2. **containerWidth 940 이하** — 우측 짤림 방지
3. **인라인 style 만** — 외부 CSS class 금지 (Gmail 제거)
4. **이미지** — 외부 호스팅 URL 또는 base64 (100KB 이하)
5. **preheader + footer** — inbox 미리보기 50~110자 + 발송자 메타 + unsubscribe
6. **미출시 / 부재 처리** — 회색 + '—' 라벨 (값 없는 셀 일관 표시)
7. **KO / EN 양 언어** — 다국어 발행 시 letter-spacing 조정 (영문 -1px)

**도메인 적용 예**: 영업 월간/분기 매출 리포트 / 마케팅 캠페인 결과 메일 / 전략 본부 정기 트렌드 알림 / R&D 신제품 출시 안내 / 사업본부별 KPI 주간 메일.

## ai.md — Anthropic API 호출 / 응답 검증 / 비용 추적 핵심 패턴

1. **Streaming 강제** — `max_tokens > 4096` 인 경우 streaming (§3.1)
2. **응답 검증** — 빈 본문 / 거절 / 길이 하한 검사 (§3.2)
3. **에러 분류** — `err.kind` 로 `invalid_output` / `overloaded` / `rate_limit` / `auth` / `network` (§3.3)
4. **호출 로그 영구 저장** — 모든 호출 ts·type·tokens·cost 기록 (§3.4)
5. **사용자 텍스트 보호** — AI 가 임의 다듬기 / 정정 / 보강 금지 (§3.5)
6. **프롬프트 캐싱** — 긴 시스템 프롬프트 + 반복 호출 시 입력 토큰 90% 절감 (§3.6)

**도메인 적용 예**: 영업 매출 인사이트 / 마케팅 캠페인 성과 분석 (긴 입력 streaming + 캐싱) / 전략 경쟁사 분석 / R&D 사용자 피드백 분석 (사용자 원문 보호).

## CLAUDE.md — 본 헌법

### 그대로 사용 가능 (도메인 무관)
- **하네스 4 개념 구조** — Rule / Hook / Skill / Sub-Agent (모든 프로젝트 동일)
- **자동화 Rule** — 변경 후 자동 커밋 + 푸시 + Conventional Commits
- **3-tier Boundaries** — Never (🔒 Hook 강제) / Always (패턴 권고) / Ask First (사용자 확인)
- **참조 Rule 매뉴얼** — `.claude/rules/{data,design,newsletter,ai}.md` 의 핵심 패턴

### 본 저장소 특정 (본인 프로젝트에 맞게 바꿔야 — Claude 가 부트스트랩 시 자동 변환)
- **스택** — Express / Vite / React (본인 스택으로)
- **디렉토리 맵** — `src/dashboard`, `src/citation` 등 (본인 페이지 구조로)
- **명령** — `npm run dev:dashboard` 등 (본인 npm scripts 로)
- **리팩터링 마커** (N1 / N2 / N3 / C-XX / SEC[숫자]) — 본 저장소 컨벤션 (참고만)
- **NEVER 의 일부** — `containerWidth > 940`, `categoryMap.js` 등 본 저장소 특정

## 부트스트랩 사용법 (비개발자 — 공통)

`/onboard` 시작 → 🐈‍⬛ 히로가:

1. 도메인 인터뷰 (2 질문 — 어떤 직무 도메인 / 이메일 발송 여부)
2. **"시각화하고 싶은 데이터의 헤더 + 1~5행 보여주세요"** 요청
3. 받은 데이터 분석 → 도메인 자동 추론 → 본 Rule 들의 패턴을 본인 도메인에 자동 적용
4. CLAUDE.md / 디렉토리 맵 / 명령 / 디자인 토큰 본인 것으로 자동 변환

→ **변수명·코드 한 줄 안 봐도 됨. 데이터만 보여주면 끝.**

---

## 사용법

- **본 저장소 작업**: Claude 가 변수명 / 도메인 type 정보가 필요할 때 본 파일 명시 import. 본문 Rule 만으로 부족 시.
- **다른 프로젝트 이식자**: 부트스트랩 시 한 번 보면 HIRO 본 저장소 매핑 이해 가능. 본인 도메인 매핑으로 대체.
- **신규 Reference 추가**: 향후 Reference Example 필요하면 본 파일에 섹션 추가.
