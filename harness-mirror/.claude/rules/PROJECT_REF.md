<!-- 자동 생성 미러 — 원본: .claude/rules/PROJECT_REF.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# 프로젝트 참조 (PROJECT_REF) — 본 저장소 인프라 / 마커 / 문서

> CLAUDE.md 에서 분리된 보조 참조. Claude 가 가끔 필요할 때 명시 import (인프라 작업·마커 검색·문서 위치 확인 등).
> 매번 자동 로드 X — 토큰 절약 위해.

---

## 참조 문서 (Reference Docs)

Skill 이 아닌 인프라/스키마/배포 문서는 `docs/` 에 그대로:

- `docs/ADMIN_PLAN.md` — 시스템 기획서
- `docs/GCP_INFRA.md` — GCP 인프라 구성
- `docs/CLOUD_RUN_JOB.md` — Cloud Run Job 배포 절차
- `docs/BIGQUERY_SCHEMA.md` — BigQuery 스키마 계약
- `docs/prd-data-connection.html` — data-prd 페이지

---

## 리팩터링 마커 (코드 주석 컨벤션)

코드 주석에 `N1`, `N2`, `N3`, `C12 step1~3` 같은 마커가 등장. 의미:

| 마커 | 의미 | 사례 |
|---|---|---|
| **N1** | 순수 함수 분리 (테스트 가능 영역) | `dashboardTemplate.js` → `dashboardSvg.js` / `dashboardFormat.js` 추출 |
| **N2** | 무거운 패키지 동적 로드 (지연 로드) | `XLSX` (~870KB) → `loadXlsx()` 호출 시점에만 로드 |
| **N3** | 외부 boundary 응답 검증 | Anthropic API 응답 — 빈 본문 / 거절 / 길이 하한 미달 → `invalid_output` 분류 거부 |
| **C-XX** | 컴포넌트 카탈로그 번호 (디자인) | `C-01` Hero, `C-12` 베이스라인 마커 등 (`.claude/rules/design.md` 참조) |
| **C12 step1~3** | 리팩터링 단계 표기 (분리·이전 작업) | `dashboardTemplate.js` 의 인라인 스크립트 분리 (CSS → dashboardStyles.js, consts → dashboardConsts.js, client JS → dashboardClient.js) |
| **C13** | Anthropic SDK 에러 분류 | `insightAgent.js` 의 `err.kind` 분류 |
| **C16** | sync meta 신선도 조회 | `routes/sync.js` 의 가벼운 응답 (배지 · 자동 갱신용) |
| **SEC[숫자]** | 보안 보강 단계 | `SEC5` CSRF 보호 (`server.js`) |

신규 마커 추가 시 본 표에 등재. 코드 주석으로만 두지 말 것.

---

## 사용법

- **Claude 가 본 저장소 작업 시**: 코드 주석에 마커 발견 / 인프라 문서 참조 필요할 때 본 파일 명시 import.
- **매 turn 자동 로드 X** — CLAUDE.md 에 한 줄 ref 만 (토큰 절약 ~400/turn).
- **신규 마커 / 신규 인프라 문서 추가 시**: 본 파일에 등재 (CLAUDE.md 본문에 등재 X).
