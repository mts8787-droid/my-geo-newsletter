# HIRO 한글 사전 — 스킬·룰·훅 이름 풀이

> 모든 스킬·룰·훅의 영어 이름 ↔ 한글 풀이 + 사용 예시 한 페이지 사전.
> 비개발자 진입 가이드 — 한 번 읽으면 됨. Claude 에게는 보통 자연어로 부탁 (`"뉴스레터 만들어줘"`) 하면 자동 매칭이라 이름 직접 칠 일은 거의 없음.

---

## 🚀 처음 시작

| 영어 이름 | 한글 풀이 | 언제 사용 |
|---|---|---|
| `onboard` | **처음 셋업** | 새 프로젝트에 HIRO 적용 — `"이 하네스 적용해줘"` 부탁 시 자동 호출 |
| `BOOTSTRAP.md` | 처음 시작 시나리오 | onboard 가 따라가는 8 step 매뉴얼 (사람은 직접 안 봄) |
| `BOOTSTRAP-newsletter.md` | 뉴스레터 시작 시나리오 | 신규 뉴스레터 작성 시 따라가는 8 step |

---

## 📊 데이터 작업 (data-*)

| 영어 이름 | 한글 풀이 | 언제 사용 (자연어 예) |
|---|---|---|
| `data` | (인덱스 — 분기) | `"데이터 작업"` 같이 모호 — sub-skill 자동 선택 |
| `data-add` | **데이터 신규 추가** | `"신규 카테고리 추가"` / `"STYLER 추가"` / `"새 시트 등록"` |
| `data-debug` | **데이터 오류 해결** | `"데이터 이상해"` / `"차트 안 보여"` / `"MoM 부호 반대"` |
| `data-refactor` | **데이터 코드 정리** | `"이 파서 분할"` / `"silent fallback 정리"` (개발자용) |
| `data.md` | 데이터 규칙 | 5단계 ERROR CATCHING, invariant, null vs 0 등 매뉴얼 |

---

## 🎨 디자인 작업 (design-*)

| 영어 이름 | 한글 풀이 | 언제 사용 (자연어 예) |
|---|---|---|
| `design` | (인덱스 — 분기) | `"디자인 작업"` 같이 모호 — sub-skill 자동 선택 |
| `design-layout` | **페이지 골격 설계** | `"대시보드 레이아웃"` / `"신규 페이지 만들어줘"` |
| `design-chart` | **차트 작업** | `"L-1 차트"` / `"BP-1 범프"` / `"차트 그려줘"` |
| `design-component` | **디자인 부품 추가** | `"새 카드 만들어줘"` / `"C-24 추가"` / `"뉴스레터 V4"` |
| `design-tune` | **디자인 미세 조정** | `"카드 깨졌어"` / `"폰트 1px 키워줘"` / `"EN 라벨 추가"` |
| `design.md` | 디자인 규칙 | 디자인 토큰, 차트 분류 코드 (L-1~T-1), 컴포넌트 카탈로그 (C-01~C-23) |

---

## 📧 뉴스레터 작업 (newsletter-*)

| 영어 이름 | 한글 풀이 | 언제 사용 (자연어 예) |
|---|---|---|
| `newsletter` | (인덱스 — 분기) | `"뉴스레터 작업"` 같이 모호 |
| `newsletter-make` | **뉴스레터 만들기** | `"이번 달 뉴스레터"` / `"5월호 뉴스레터"` / `"주간 리포트"` |
| `newsletter-debug` | **뉴스레터 오류 해결** | `"Outlook 에서 깨짐"` / `"Gmail 짤림"` / `"미출시 색 잘못"` |
| `newsletter-send` | **뉴스레터 보내기** | `"발송 전 검증해줘"` / `"SMTP 발송 설정"` |
| `newsletter.md` | 뉴스레터 규칙 | table-layout, containerWidth 940, KO/EN, 미출시 처리 |

---

## 🛠 일반 작업

| 영어 이름 | 한글 풀이 | 언제 사용 |
|---|---|---|
| `debug` | **오류 해결** (일반) | `"안 됨"` / `"오류"` / `"디버깅"` — 특정 영역 (data/design/newsletter) 명확하면 그쪽 sub-skill 우선 |
| `prompting` | **다른 도구용 프롬프트** | Cursor / Codex / Antigravity 등 다른 AI 도구에 본 저장소 컨텍스트 전달 (개발자용) |

---

## 🤖 AI 호출

| 영어 이름 | 한글 풀이 | 언제 사용 |
|---|---|---|
| `ai.md` | AI 호출 규칙 | Anthropic API 사용 시 — streaming, 응답 검증, 비용 추적, 캐싱 |

---

## 🔒 Hook (시스템 자동 차단 — 사람이 의식 X)

| 영어 이름 | 한글 풀이 | 언제 작동 |
|---|---|---|
| `block-dist.sh` | **빌드 산출물 보호** | `dist-*/` `dist/` 디렉토리 직접 수정 시도 시 자동 차단 |
| `newsletter-guard.sh` | **뉴스레터 호환 검사** | 뉴스레터 파일 수정 시 containerWidth>940 / display:flex 등 검출 시 차단 |
| `syntax-check.sh` | **JS 신택스 자동 검사** | `src/`/`routes/` 의 .js 수정 후 `node --check` — 실패 시 Claude 재시도 |
| `settings.json` | 훅 등록 설정 | 위 3 훅을 등록하는 JSON 파일 (시스템이 파싱) |
| `README.md` (hooks) | Hook 설명서 | 사람용 설명서 (각 훅의 트리거·동작·목적) |

---

## 📜 헌법 / 참조

| 영어 이름 | 한글 풀이 | 역할 |
|---|---|---|
| `CLAUDE.md` | **프로젝트 헌법** | Claude Code 가 매 turn 자동 로드 — 본 저장소의 헌법 |
| `AGENTS.md` | 에이전트 헌법 | OpenAI Codex / Antigravity 가 자동 로드 |
| `HIRO_REFERENCE.md` | 본 저장소 참조 + 이식자 가이드 | Claude 가 변수명 필요할 때 명시 import / 이식자가 부트스트랩 시 한 번 봄 |
| `PROJECT_REF.md` | 프로젝트 참조 (인프라/마커) | CLAUDE.md 에서 분리된 보조 — 마커 등장 / 인프라 작업 시 import |

---

## 🐈‍⬛ Sub-Agent

| 영어 이름 | 한글 풀이 | 언제 활성 |
|---|---|---|
| `data-puller` | **데이터 진단** (read-only) | Google Sheets 파싱 파이프라인의 shape·정합성·누락 조사·보고 — Claude 가 위임 시 활성 |

---

## 사용법 한 줄 요약

- **비개발자**: 위 영어 이름 외울 필요 X. Claude 에게 일상어로 부탁 — 알아서 매칭.
- **개발자 / 빠른 호출**: 슬래시 명령 (`/skills <영어이름>`) 으로 직접 호출 가능.
- **이름이 헷갈리면**: 본 문서 다시 보면 됨.

## 자주 묻는 (FAQ)

**Q. 영어 이름 그대로 둔 이유는?**
- Claude Skill 시스템이 영어 slug (kebab-case) 권장
- 슬래시 명령 한글 입력 (`/skills 데이터-추가`) 보다 영어가 빠름
- 자연어 호출 시에는 어차피 영어 이름 안 침 — `"뉴스레터 만들어줘"` 같이

**Q. 룰 (data.md / design.md 등) 도 사람이 봐야 하나요?**
- 보통은 안 봐도 됨. Claude 가 매 작업마다 읽고 적용.
- 본인이 특정 패턴 (예: 5단계 ERROR CATCHING) 이 궁금하면 직접 봐도 OK.

**Q. 부트스트랩 (BOOTSTRAP.md) 은 어떻게 시작?**
- `"이 하네스 적용해줘"` 같이 Claude 에게 부탁 → `onboard` 자동 호출 → 시나리오 따라 진행.

**Q. 자세한 사용 설명서는?**
- `harness-mirror/docs/HUMAN_GUIDE.md` (사람용 매뉴얼 — 트러블슈팅 / FAQ / 도메인 예시)
- `harness-mirror/docs/SKILLS_GUIDE.md` (스킬 시스템 작동 원리 — 새 스킬 만들기 등 개발자용)
