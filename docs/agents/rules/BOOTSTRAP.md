<!-- 자동 생성 미러 — 원본: .claude/rules/BOOTSTRAP.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# 부트스트랩 시나리오 (Bootstrap Scenario)

> **이 파일은 Claude 가 따라가는 시나리오** — 사람이 직접 읽는 가이드 아님.
> 사람용 참조 자료 (도메인 예시·트러블슈팅·검증 체크리스트) 는 `docs/agents/HUMAN_GUIDE.md` 참조.
> 트리거: 사용자가 `"이 하네스 적용해줘"` / `"내 프로젝트에 셋업해줘"` 같이 요청 → `.claude/skills/onboard/SKILL.md` 가 본 시나리오 따름.

---

## STEP 0 — 환경 확인 (Claude 액션)

```
[Claude 가 검증]:
- 프로젝트 루트에 CLAUDE.md 존재
- .claude/ 디렉토리 + 그 안에 settings.json / hooks/ / rules/ / skills/ / agents/
- docs/agents/ 디렉토리

[Claude 가 사용자에게 안내]:
- "ZIP 압축 푸셨나요? .claude/hooks/*.sh 에 실행 권한 (chmod +x) 부여하셨나요?"
- 필요시 명령어 제시: `chmod +x .claude/hooks/*.sh`
```

---

## STEP 1 — 도메인 인터뷰 (Claude 액션)

```
[Claude 가 사용자에게 한 번에 6 질문 — 사용자가 답변할 때까지 다음 step 진행 X]:

1. 프로젝트 도메인은 어떤 영역인가요?
   (예: 매출 / HR / 제품 사용량 / 마케팅 KPI / 의료 / 교육 / ...)

2. 데이터 소스는 어디인가요?
   (Google Sheets / 자체 API / BigQuery / 정적 JSON / DB / ...)

3. 데이터의 주요 카테고리 / 분류는?
   (예: 제품군·부서·채널·지역·시간대 등 — 분류 ID 목록)

4. 시각 단위는?
   (시간: 일 / 주 / 월 / 분기 + 그룹: 국가 / 제품 / 팀)

5. KPI 종류는?
   (점수% / 카운트 / 비율 / 비용$ / 시간 / ...)

6. 이메일 발송이 필요한가요?
   (뉴스레터·리포트 메일 발송 시 table-layout 호환 필요)

[Claude 가 사용자 답변을 메모로 기록 — 이후 step 에서 그대로 사용]
```

---

## STEP 2 — 도메인 파일 생성 (Claude 액션)

```
[Claude 가 사용자에게 설명]:
"카테고리 / 분류의 단일 소스 파일을 만듭니다. 본 프로젝트는 src/categoryMap.js 라는
single source 패턴을 사용합니다. 도메인에 맞춰 다음 항목을 채울게요."

[Claude 가 작성]:
- src/<domain>Map.js (또는 src/categoryMap.js)
- 다음 항목 포함:
  · IDS — canonical id 목록 (step 1 답변 #3 그대로)
  · ID_TO_KR — 한글 표시명
  · ID_TO_EN — 영문 표시명
  · ID_TO_CODE — 약어 코드
  · ID_TO_GROUP — 상위 그룹 (선택)
  · NAME_TO_ID — 한/영/약어 역매핑
  · assertMapInvariant() — 4 매핑 완전성 검증 헬퍼

[Claude 가 사용자에게 검증 요청]:
"생성된 파일 확인해주세요. ID 목록·표시명·약어 모두 의도대로인가요?"
```

---

## STEP 3 — 데이터 모델 정의 (Claude 액션)

```
[Claude 가 사용자에게 질문]:
"각 데이터 소스 (시트 / API endpoint / 테이블) 의 컬럼 헤더를 알려주세요.
예: '시트 A: Country / Date / Category / KPI1 / KPI2' 형식으로."

[Claude 가 작성]:
- src/excelUtils.js (또는 동등 파서) 의 SHEET_NAMES 상수
- parseSheetRows 라우터 (switch 분기)
- 각 parseXxx 함수:
  · assertRows 진입 가드
  · findHeaderIdx (한/영 동의어 매칭)
  · _logWarn 으로 silent fail 방지
  · forEachRowSafe 로 row try/catch
  · 5단계 ERROR CATCHING (.claude/rules/data.md §6 참조)

[Claude 가 사용자에게 안내]:
"신규 시트 추가 시 .claude/skills/data/SKILL.md 의 '신규 시트 추가' 워크플로우
8 step 을 그대로 따르면 됩니다."
```

---

## STEP 4 — 디자인 토큰 (Claude 액션)

```
[Claude 가 사용자에게 질문]:
"브랜드 색상 / 폰트 / 그룹 (브랜드 / 카테고리) 색상 매핑을 알려주세요.
- Primary 색상 (강조용)
- 비교군 회색 (default)
- 그룹별 색상 (있다면)
- 폰트 (없으면 시스템 fallback)"

[Claude 가 작성]:
- src/dashboard/dashboardConsts.js (또는 동등 토큰 파일):
  · FONT (시스템 fallback 또는 사용자 폰트)
  · RED (사용자 primary)
  · COMP (default 비교군 회색)
  · BRAND_COLORS (사용자 그룹 색상)
  · STATUS (lead/behind/critical — 그대로 유지, 의미 도메인 무관)

[Claude 가 사용자에게 안내]:
"차트 라이브러리 (/admin/chart-library) 의 21 분류 코드 (L-1 ~ T-1) 가 이 토큰을
사용합니다. 신규 차트 추가 시 '\"L-1 그려줘\"' 같이 코드로 호출하면 자동으로 토큰
적용됩니다."
```

---

## STEP 5 — 외부 시스템 자격 증명 (Claude 액션)

```
[Claude 가 사용자에게 질문 — step 1 #2 답변 기반]:
"데이터 소스가 [X] 라고 하셨는데, 다음 자격 증명이 필요합니다:
- ADMIN_PASSWORD (어드민 로그인) — 필수
- [데이터 소스 별 자격 증명]
- AI 사용 시 ANTHROPIC_API_KEY
- 이메일 발송 시 SMTP_USER / SMTP_PASS"

[Claude 가 작성]:
- .env.example (위 자격 증명 명세)
- .gitignore 에 .env 등재 확인
- 사용 안 하는 시스템 routes 제거 (예: SMTP 안 쓰면 routes/email.js 제거)

[Claude 가 사용자에게 안내]:
"실제 값은 .env (gitignore) 에 본인이 작성하세요. AI 사용 시 .claude/rules/ai.md
의 N3 응답 검증·비용 추적 룰이 자동 적용됩니다."
```

---

## STEP 6 — 비즈니스 fact 등록 (Claude 액션)

```
[Claude 가 사용자에게 질문]:
"데이터에 없어도 항상 적용되어야 할 비즈니스 룰이 있나요?
예시:
- 특정 채널은 항상 제외
- 특정 제품은 미출시 (특정 국가에서)
- 특정 KPI 는 항상 N 이상이어야 함"

[Claude 가 사용자 답변 기반으로 작성]:
- 해당 parser 안에 DEFAULT_XXX 객체 정의
- 파서 진입부에서 디폴트 spread → 시트 데이터로 추가/덮어쓰기
- .claude/rules/data.md §5.8 패턴 그대로

[Claude 가 사용자에게 안내]:
"이 디폴트는 시트 무관 항상 적용됩니다. 시트가 비어있어도 비즈니스 fact 는 살아남아요."
```

---

## STEP 7 — 첫 빌드 + 검증 (Claude 액션)

```
[Claude 가 명령 실행 또는 사용자에게 명령 안내]:
- npm install
- npm test (invariant 자동 검증)
- npm run build (산출물 생성)
- npm start (서버 시작)

[Claude 가 사용자에게 검증 체크리스트 안내 — 사용자가 브라우저로 확인]:
"브라우저로 다음 항목 확인 부탁드립니다:
- /admin 로그인 가능
- 어드민 메뉴 3단 구조 (게시·인프라·하네스) 정상
- /admin/harness — 본 프로젝트 룰/훅/스킬 다 노출
- /admin/chart-library — 차트 분류 코드 + 본인 토큰 적용 확인
- 데이터 동기화 한 번 — verifySyncResult 결과 SyncHealth 에 표시"

[Claude 가 사용자에게 안내]:
"검증 체크리스트 더 자세한 항목은 docs/agents/HUMAN_GUIDE.md 참조."
```

---

## STEP 8 — 반복 / 확장 (Claude 액션 가이드)

```
[Claude 가 사용자에게 안내]:
"이후 신규 작업마다 해당 스킬 워크플로우를 따르세요:
- 시트 추가 → .claude/skills/data/SKILL.md '신규 시트 추가' (8 step)
- 카테고리 추가 → 동일 스킬 '신규 카테고리 추가' (7 step)
- 차트 추가 → '\"L-1 그려줘\"' 같은 분류 코드로 .claude/skills/design/SKILL.md
- 회귀 발견 → '회귀 디버깅 (TDD)' 6 step

자세한 룰/매뉴얼은 docs/agents/HUMAN_GUIDE.md 의 '도메인 예시' / '트러블슈팅' 참조."
```

---

## 시나리오 종료 조건

- STEP 7 의 모든 검증 체크리스트 통과
- 사용자가 첫 데이터 동기화 + 빌드 성공 보고
- /admin/harness 페이지에서 본 프로젝트 룰/훅/스킬 노출 확인

미완료 시:
- 실패 step 으로 복귀 — Claude 가 사용자에게 다시 질문
- 트러블슈팅 케이스 발견 시 docs/agents/HUMAN_GUIDE.md 의 표 참조 후 사용자 안내
