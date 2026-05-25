# Skill 사용 가이드 (Skills Usage Guide)

> Claude Code 의 Skill 시스템을 본 저장소에서 어떻게 호출·조합·확장하는지.
> 시나리오 사용법 (BOOTSTRAP) 은 `HUMAN_GUIDE.md`, 전체 하네스 개요는 `HARNESS.html` 참조.

---

## 1. Skill 이 뭔가요?

특정 작업을 **step-by-step 으로 진행하는 워크플로우 매뉴얼**. 원본은 `.claude/skills/<name>/SKILL.md` 파일이고, 각 파일 위쪽 YAML frontmatter 의 `description` 에 적힌 **트리거 조건** 으로 Claude 가 자동 매칭.

```yaml
---
name: newsletter-make
description: 뉴스레터 / 월간·주간 리포트 신규 발행본 작성 워크플로우. 사용자가 "이번 달 뉴스레터", "5월호 뉴스레터", "Q2 리포트 작성", "주간 리포트" 같이 신규 발행본 요청 시 트리거.
---
```

이 frontmatter 가 핵심. **description 안의 자연어 문구·예시 표현** 이 매칭 키.

---

## 2. 슬래시 명령 (`/skills <name>`) vs 자연어 호출

### 2.1 자연어 호출 — 일반적
```
사용자: "5월호 뉴스레터 만들어줘"
→ Claude 가 description 매칭 자동 판단 → newsletter-make 로드
```

장점: 자연스럽다. 사용자가 스킬 이름 몰라도 됨.
단점: 매칭 실패 가능성 (description 부정확 / 비슷한 스킬 여러 개 / 모호한 발화).

### 2.2 슬래시 명령 — 정밀 호출
```
사용자: "/skills newsletter-make"
사용자: "/skills newsletter-make 로 5월호 뉴스레터 만들어줘"
```

장점: 100% 정확. 매칭 의심 X.
단점: 스킬 이름 알아야 함 (목록은 `/skills` 만 입력 시 표시).

### 2.3 언제 어느 쪽?

| 상황 | 추천 |
|---|---|
| 일상 작업 ("뉴스레터 만들어줘") | 자연어 |
| 인덱스 스킬 우회 (sub-skill 직접) | 슬래시 (예: `/skills data-add`) |
| 모호한 요청 ("디버깅 좀") | 슬래시로 명시 (debug? data-debug? newsletter-debug?) |
| 스킬 없이 일반 LLM 진행 원할 때 | 자연어 (스킬 매칭 안 되어도 OK) |
| Claude 가 엉뚱한 스킬 골랐을 때 | "아니, /skills X 로 다시" 재호출 |

---

## 3. 인덱스 스킬 → sub-skill 조합

본 저장소는 영역별 스킬을 **인덱스 + sub-skill** 구조로 정리 (자동 매칭 정밀도 향상 + 사람 가독성).

### 3.1 현재 구조

| 영역 | 인덱스 | sub-skills |
|---|---|---|
| **데이터** | `data` | `data-add` / `data-debug` / `data-refactor` |
| **디자인** | `design` | `design-layout` / `design-chart` / `design-component` / `design-tune` |
| **뉴스레터** | `newsletter` | `newsletter-make` / `newsletter-debug` / `newsletter-send` |

### 3.2 인덱스 스킬의 역할

인덱스 스킬 (예: `data`) 의 description 은:
> "(인덱스) 데이터 워크플로우는 성격별 3개 skill 로 분리됨. 신규 추가 → data-add / 회귀·진단 → data-debug / 코드 품질·리팩터 → data-refactor. ..."

목적:
- 사용자가 "데이터 작업" 같이 두루뭉술 요청 시 인덱스가 잡혀서 **sub-skill 선택 안내**
- 또는 Claude 가 직접 sub-skill 로 분기 (description 안의 분기 규칙 따라)

### 3.3 호출 패턴

```
사용자: "데이터 작업 좀 도와줘"
→ data (인덱스) 매칭 → Claude 가 "어떤 작업이세요? 신규 추가 / 회귀 진단 / 리팩터 중?" 질문
→ 사용자: "회귀 진단"
→ data-debug 로드

vs (더 빠른 길)

사용자: "/skills data-debug"
→ 바로 data-debug 워크플로우 시작
```

권장: **자주 하는 작업이면 sub-skill 이름 외워서 슬래시로 직접 호출** — 인덱스 거치는 한 라운드 절약.

---

## 4. 스킬 강제 호출 / 매칭 실패 대처

### 4.1 매칭 안 되면 무슨 일?

Claude 가 일반 LLM 으로 작업. 스킬의 step-by-step 워크플로우·invariant 검증·표준 도구 사용 안 함 → **품질 떨어짐**.

### 4.2 강제 호출 방법

| 방법 | 사용 시점 |
|---|---|
| `"○○ 스킬로 △△해줘"` | 가장 자연스럽고 강제력 ↑ |
| `"/skills <name>"` | 슬래시 명령 — 100% 명시 |
| `"<name> SKILL.md 따라서"` | SKILL 파일 직접 지칭 — 본문 읽도록 강제 |
| `"@.claude/skills/<name>/SKILL.md 읽고"` | 파일 멘션 — Claude 가 명시적으로 본문 로드 |

### 4.3 Claude 가 엉뚱한 스킬 골랐을 때

```
사용자: "차트 그려줘"
Claude: [잘못 매칭 — design-component 사용 시작]

사용자: "아니, /skills design-chart 로 진행해줘"
Claude: [design-chart 재로드]
```

또는 사전 방지:
```
사용자: "design-chart 스킬로 L-1 라인 차트 그려줘"
→ 처음부터 명시 → 매칭 실패 0
```

### 4.4 스킬이 아예 매칭 안 되는 발화 — frontmatter 갱신 신호

같은 발화로 반복 매칭 실패면:
- 해당 SKILL.md 의 description 에 그 표현 추가
- 또는 새 스킬이 필요한 신호 (기존 스킬 description 범위 밖)

---

## 5. 새 스킬 만들기 — frontmatter 작성법

### 5.1 폴더 / 파일 구조

```
.claude/skills/<my-skill>/SKILL.md
```

폴더명 = `<my-skill>` (kebab-case). 파일명 고정 `SKILL.md`.

### 5.2 최소 frontmatter

```yaml
---
name: <my-skill>
description: <트리거 조건 한 줄 — 사용자 발화 예시 + 워크플로우 요약 + 참조 Rule>
---

# <my-skill> — 한 줄 제목

> 본 스킬의 목적 + 참조 Rule (`.claude/rules/X.md`) 명시.

## 1. 트리거 / 적용 시점
...

## 2. 워크플로우 (step-by-step)
1. ...
2. ...

## 3. 검증 / 산출물
...

## 4. ANTI-PATTERN (선택)
...
```

### 5.3 description 작성 체크리스트

- [ ] **트리거 발화 직접 포함** (예: `"X 안 됨" / "fix" 요청 시 트리거`)
- [ ] **언제 X (경계)** 도 명시 (예: `신규 추가는 data-add — 회귀만 본 skill`)
- [ ] **참조 Rule** 명시 (예: `.claude/rules/data.md §6 ERROR CATCHING 참조`)
- [ ] **인덱스 분기 안내** (인덱스 스킬인 경우)
- [ ] **너무 짧으면 매칭 실패 / 너무 길면 토큰 낭비** — 100~250자 권장

### 5.4 본문 작성 가이드

- **Step-by-step 명령 조합**: "1) 시트 확인 → 2) 매핑 추가 → 3) invariant 검증" 같이 sequential
- **Rule / invariant 정의는 본문에 X** — 별도 `.claude/rules/*.md` 에 분리하고 본문은 참조만
- **검증 step 명시**: 각 step 후 어떻게 검증할지 (테스트 / build / grep)
- **ANTI-PATTERN 등재** (선택): 자주 발생하는 실수 — 본 저장소에서는 별도 Rule 파일에 정리

### 5.5 신규 스킬 추가 후 갱신할 곳

신규 스킬 만들었으면 다음 4 곳도 함께 갱신:

1. **인덱스 스킬 description** — 예: `data` 인덱스에 "신규 추가 → data-add" 같이 sub-skill 항목 등재
2. **`harness-mirror/docs/HARNESS.html` Skill 표** — `scripts/sync-harness.mjs` 의 HARNESS_HTML 안 카테고리 표에 row 추가
3. **`/admin/harness` 페이지 메뉴** — `routes/admin-pages.js` 의 어드민 링크 추가
4. **`/hiro` 페이지 카드 표** — `routes/harness.js` 의 HARNESS_COMPONENTS 배열에 entry 추가

### 5.6 빠른 예시 — 새 스킬 만들기

```yaml
---
name: monitoring-setup
description: 모니터링 / observability 셋업 워크플로우 — 사용자가 "모니터링 설정", "obs 셋업", "Grafana 연결", "메트릭 추가" 같이 요청 시 트리거. boundary_calls 테이블 + Grafana 대시보드 + 알림 임계값까지 step-by-step. Rule·임계값은 .claude/rules/observability.md 참조.
---

# monitoring-setup — observability 셋업

> AI 호출·외부 API 호출 등 boundary 의 metric 수집·시각화·알림 셋업.
> 참조 Rule: `.claude/rules/observability.md` (스키마·임계값·SLO).

## 1. 트리거
사용자가 "모니터링 설정" / "Grafana 연결" / "메트릭 추가" 요청 시.

## 2. 워크플로우
1. boundary_calls 테이블 스키마 확인 (.claude/rules/observability.md §2)
2. ...
```

저장 → `chmod +x` 필요 X (md 파일이라 실행권한 무관) → Claude Code 재시작 시 자동 인지 (또는 대화 새로고침).

---

## 6. 본 저장소의 모든 스킬 카탈로그

`HARNESS.html` 의 "Skill — 영역별 카테고리" 섹션 참조. 한 줄 요약:

| 영역 | 스킬 | 한 줄 |
|---|---|---|
| 🗂 데이터 | `data` · `data-add` · `data-debug` · `data-refactor` | 시트·카테고리·회귀·리팩터 |
| 🎨 디자인 | `design` · `design-layout` · `design-chart` · `design-component` · `design-tune` | 전체 페이지 레이아웃·차트·컴포넌트·튜닝 |
| 📧 뉴스레터 | `newsletter` · `newsletter-make` · `newsletter-debug` · `newsletter-send` | 신규 발행 / 회귀 디버깅 / SMTP 발송 |
| 🔧 공통·메타 | `onboard` · `debug` · `prompting` | 하네스 적용 / 일반 디버깅 / 다른 도구용 통합 프롬프트 |

---

## 7. FAQ

**Q. 스킬 새로 만들었는데 Claude 가 못 찾아요.**
- A. Claude Code 재시작 (대화 새로 시작). frontmatter 가 첫 줄 `---` 부터 정확히 시작하는지 확인. `name` 이 폴더명과 일치하는지 확인.

**Q. `/skills` 명령으로 목록 보기는?**
- A. `/skills` 입력 시 사용 가능한 스킬 + description 표시. 매칭 안 되어도 본 명령으로 직접 호출 가능.

**Q. 같은 작업을 여러 스킬이 다룰 수 있나요?**
- A. 가능. Claude 가 description 가장 유사한 것 선택. 사용자가 명시 호출 (`/skills <name>`) 로 강제 가능.

**Q. Skill 본문 (워크플로우) 도 항상 로드되나요?**
- A. NO. 초기에는 frontmatter 만. 매칭된 스킬의 본문만 그 시점에 로드. → Skill 많이 만들어도 토큰 비용 적음.

**Q. Skill 과 Rule, Hook 의 차이?**
- A. `HARNESS.html` 의 4 종류 표 참조. **Skill = 워크플로우**, **Rule = 토큰·invariant 정의 (참조용)**, **Hook = 자동 차단 (시스템 강제)**, **Sub-Agent = 보조 일꾼 (위임 시 활성)**.

**Q. 인덱스 스킬은 꼭 있어야 하나요?**
- A. 아니요. 영역에 sub-skill 1~2 개면 인덱스 없이 직접. 3+ 개면 인덱스로 분기 정리 권장 (매칭 정밀도 + 사람 가독성).

---

## 8. 관련 문서

- `HARNESS.html` / `HARNESS.md` — 4 개념 (Rule/Hook/Skill/Sub-Agent) 전체 개요
- `HUMAN_GUIDE.md` — BOOTSTRAP 시나리오 사용법 (신규 적용 / 디버깅 / TECHNIQUES)
- `CHART_LIBRARY.html` — 차트 분류 코드 (L-1 ~ T-1) 카탈로그
- 각 `.claude/skills/<name>/SKILL.md` — 개별 스킬 본문
- `.claude/rules/*.md` — 각 스킬이 참조하는 Rule 매뉴얼
