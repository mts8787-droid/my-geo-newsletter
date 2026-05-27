---
name: newsletter
description: "(인덱스) newsletter-make / newsletter-debug / newsletter-send 분기. 의도가 명확하면 sub-skill 직접 호출 권장."
---

# newsletter (인덱스) — 뉴스레터 워크플로우 분리

> 본 skill 은 **인덱스**. 실제 워크플로우는 성격별 3 sub-skill 에 있음.
> /skills 명령어로 호출 시 정밀 매칭을 위해 sub-skill 을 직접 사용 권장.

---

## sub-skills

| sub-skill | 담는 워크플로우 | 트리거 |
|---|---|---|
| **`newsletter-make`** | 신규 발행본 작성 (BOOTSTRAP-newsletter 시나리오 트리거), 기존에 새 섹션 추가 | "이번 달 뉴스레터", "5월호", "Q2 리포트", "새 섹션 추가" |
| **`newsletter-debug`** | 미출시 회귀, 이메일 클라이언트별 깨짐, iframe 미리보기 클립 | "Outlook 에서 깨짐", "미출시 색 잘못", "이메일에서 차트 안 보임" |
| **`newsletter-send`** | 발송 전 multi-client 검증, SMTP 발송, audit log | "발송 전 검증", "SMTP 설정", "수신자 발송" |

## 참조

- `.claude/rules/newsletter.md` — 뉴스레터 Rule (NEVER, KO/EN, 미출시, V1/V2/V3, 검증 체크리스트)
- `.claude/rules/BOOTSTRAP-newsletter.md` — 신규 발행본 작성 시나리오 (8 step, Claude 가 인터뷰)
- `.claude/rules/design.md` §5.2 / §C-10 / §C-21~C-23 — 디자인 매뉴얼
- `.claude/hooks/newsletter-guard.sh` — 자동 차단 (containerWidth / flex / overflow-x)
- `CLAUDE.md` — 프로젝트 헌법
