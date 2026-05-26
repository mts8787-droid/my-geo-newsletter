---
name: data
description: '데이터 워크플로우 인덱스 — 신규 추가 / 회귀 진단 / 리팩터 3 sub-skill 분기. 데이터 작업 의도가 모호할 때 호출 (명확하면 sub-skill 직접). 트리거: "데이터 작업" / "데이터 어떻게" 같이 모호한 요청.'
---

# data (인덱스) — 데이터 워크플로우 분리

> 본 skill 은 **인덱스**. 실제 워크플로우는 성격별 3 sub-skill 에 있음.
> /skills 명령어로 호출 시 정밀 매칭을 위해 sub-skill 을 직접 사용 권장.

---

## sub-skills

| sub-skill | 담는 워크플로우 | 트리거 |
|---|---|---|
| **`data-add`** | 신규 시트 추가, 신규 카테고리 추가 (PROD_IDS) | "시트 추가", "카테고리 추가", "STYLER 같은 새 prodId" |
| **`data-debug`** | 회귀 디버깅 (TDD), 시트 동기화 verify-after-act | "MoM 부호 반전", "정렬 깨짐", "sync 결과 이상" |
| **`data-refactor`** | 거대 파서 분할, silent fallback 강화, 매핑 통합, ERROR CATCHING 적용 | "200줄 함수 분할", "silent return {}", "매핑 single source 통합" |

## 참조 Rule

- `.claude/rules/data.md` — 데이터 작업 토큰·invariant·ANTI-PATTERN (5단계 ERROR CATCHING 등)
- `CLAUDE.md` — 프로젝트 헌법
- Hook (`.claude/hooks/`) — 절대 금지 (시스템 차단)
