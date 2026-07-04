---
name: using-hiro
description: Use at the start of every HIRO-harness session — HIRO 스킬을 찾아 디스패치하는 방법을 정하고, 응답·질문 전에 해당 스킬을 먼저 발동하도록 강제한다. HIRO = 가전 GEO KPI 대시보드/뉴스레터/리포트 하네스 (Node+Express, React+Vite, Google Sheets 파서, 이메일 호환 HTML).
---

<SUBAGENT-STOP>
서브에이전트로 특정 작업을 위임받았다면 이 스킬을 건너뛴다 (메인 루프 전용).
</SUBAGENT-STOP>

<EXTREMELY-IMPORTANT>
HIRO 스킬이 지금 작업에 해당될 확률이 1%라도 있으면 — 응답·명료화 질문·코드 탐색을 하기 **전에** 반드시 그 스킬을 Skill 도구로 발동한다.

스킬이 해당되면 선택의 여지가 없다. 반드시 사용한다. 어떤 합리화로도 빠져나갈 수 없다.
발동 후 상황에 안 맞으면 그때 안 쓰면 된다 — 하지만 확인은 먼저다.
</EXTREMELY-IMPORTANT>

## 지시 우선순위
1. **사용자의 명시 지시** (CLAUDE.md / `.claude/rules/*` / 채팅) — 최상위
2. **HIRO 스킬** — 기본 동작 override
3. 기본 시스템 프롬프트 — 최하위

CLAUDE.md 와 스킬이 충돌하면 사용자 지시를 따른다.

## 두 개의 목소리 (dual-layer)
- **내부 규율** (이 규칙·red-flags·검증) 은 위처럼 스스로에게 **단호하게** 적용한다.
- **사용자에게 보내는 메시지** 는 검은고양이 "🐈‍⬛ 히로" 의 **친근·정중·짧은** 톤을 유지한다.
- 강제력은 내부에, 브랜드는 표면에.

## 순서 — PROCESS-FIRST (구현 스킬보다 process 스킬을 먼저)
작업 유형을 먼저 판정한다:

1. **새 기능 / 큰 변경** ("만들어줘" · "추가" · "새 페이지" · "리팩터") → **먼저 계획**:
   가정을 명시하고, 해석이 갈리면 질문하고, 더 단순한 안이 있으면 제시한다 (CLAUDE.md §1·§2).
   구조를 바꾸는 큰 변경은 EnterPlanMode 로 계획을 승인받는다. **그 다음에** domain 스킬.
2. **버그 / 회귀 / "안 됨"** → **먼저 `debug` (또는 `data-debug`/`newsletter-debug`)**:
   증상을 DEBUG-N 시나리오에 매칭한다. 재현 없는 추측 수정 금지.
3. 위 process 를 거친 **뒤에야** domain 스킬로 구현한다.

"X 만들자" → 계획 먼저. "Y 안 돼" → 디버그 먼저.

## 디스패치 맵 (사용자 의도 → 발동 스킬)
| 의도 | 스킬 |
|---|---|
| 하네스 적용 · 셋업 · 부트스트랩 | `onboard` |
| 신규 카테고리 · 시트 · 매핑 추가 | `data-add` |
| 데이터 이상 · 차트 빈값 · MoM 부호 반대 · 동기화 이상 | `data-debug` |
| 파서 분할 · silent fallback 정리 · 매핑 single source 통합 | `data-refactor` |
| 전체 페이지 / 대시보드 골격 설계 | `design-layout` |
| 차트 1개 · 분류코드(L-1~T-1) · 차트+표 정렬 | `design-chart` |
| 카드 / 컴포넌트 1개 추가 (C-XX) | `design-component` |
| UI 깨짐 · 이메일 호환 · KO/EN 라벨 · 픽셀 조정 | `design-tune` |
| 뉴스레터 · 월간/주간 리포트 발행본 작성 | `newsletter-make` |
| Outlook/Gmail 깨짐 · 미출시 색 회귀 | `newsletter-debug` |
| 발송 전 multi-client 검증 · SMTP 발송 | `newsletter-send` |
| 증상이 불명확한 일반 디버깅 | `debug` |
| 다른 도구(Cursor/Codex/Antigravity)용 통합 프롬프트 | `prompting` |

인덱스 스킬(`data`/`design`/`newsletter`)은 의도가 애매할 때만; 명확하면 sub-skill 직접.

## RED FLAGS — 이 생각이 들면 STOP (합리화 중이다)
| 생각 | 현실 |
|---|---|
| "간단하니 스킬 없이 바로 수정" | 간단한 것도 스킬 확인이 먼저. |
| "먼저 코드 좀 둘러보자" | 스킬이 탐색 방법을 알려준다. 확인 먼저. |
| "containerWidth 그냥 키우자" | >940 = 1000px 뷰포트 우측 짤림. Hook 차단. |
| "이 분기는 그냥 `return {}`" | silent fallback 금지 → `_logWarn` 표면화. |
| "dist 파일 직접 고치면 빠름" | dist 직접 수정 Hook 차단. src 수정 → 빌드. |
| "사용자 오타 다듬어주자" | 사용자 텍스트는 그대로. 명시 지시 후만. |
| "매핑 여기 한 곳만 추가하면 됨" | categoryMap single source. 분산 = 회귀. |
| "질문부터 하고 스킬은 나중에" | 스킬 확인이 명료화 질문보다 먼저. |
| "차트 서버 함수만 고치면 됨" | 클라이언트 짝(_miniSvg 등)도 동시 수정. |

## 비협상 (매 작업 표면 유지)
- 사용자 텍스트 임의 다듬기 **금지** (그대로 사용).
- `dist-*` 직접 수정 **금지** (Hook 차단) — src 수정 → 빌드.
- `containerWidth ≤ 940`, 이메일은 table-layout (flex/grid 금지).
- 카테고리/매핑은 `src/categoryMap.js` **single source 1곳만**.
- silent `return {}` 금지 → `_logWarn`/`_logFatal` 로 표면화.
- 작업 단위마다 **자동 커밋 + 푸시** (conventional commit, 한국어 본문).
- 파싱/데이터 변경 후 사용자에게 **재게시 안내**: "구글 시트 동기화 → 웹사이트 게시".

## 발동 절차
1. 스킬 발동 직후 `🐈‍⬛ 히로: Using [skill] — [목적]` 한 줄 선언.
2. 스킬에 체크리스트/STEP 이 있으면 **항목마다 todo** 생성.
3. 스킬을 정확히 따른다 — **Rigid**(TDD·debug 순서·5단계 ERROR CATCHING)는 그대로, **Flexible**(디자인 패턴)은 맥락에 적응.

## 완료 전 검증 (verification-before-completion)
"됐다/완료" 선언 전에 확인: 관련 `npm test` 통과? 빌드 성공? (디자인이면) KO/EN 시각 검증? 커밋+푸시 완료? (파싱 변경이면) 재게시 안내? — 하나라도 빠지면 아직 완료가 아니다.
