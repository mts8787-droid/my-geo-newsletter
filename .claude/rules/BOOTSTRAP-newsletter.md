# 뉴스레터 부트스트랩 시나리오 (Newsletter Bootstrap Scenario)

> **이 파일은 Claude 가 따라가는 시나리오** — 사람이 직접 읽는 가이드 아님.
> 트리거: 사용자가 `"이번 달 뉴스레터 만들어줘"` / `"5월호 뉴스레터"` / `"Q2 리포트 작성"` 같이 요청 →
> `.claude/skills/newsletter-make/SKILL.md` 의 "신규 발행본 작성" 워크플로우가 본 시나리오 호출.
> 참조 Rule: `.claude/rules/newsletter.md` (NEVER, 검증 체크리스트), `.claude/rules/design.md` §5.2 / §C-21~C-23.

---

## STEP 0 — 환경 확인 (Claude 액션)

```
[Claude 가 검증]:
- src/emailTemplate.js 존재
- src/monthly-report/monthlyTemplate.js · src/weekly-report/weeklyTemplate.js 존재
- /admin/newsletter 또는 해당 어드민 페이지 접근 가능
- 최근 시트 동기화 상태 — _syncIssues 가 없거나 알려진 항목만

[Claude 가 사용자에게 안내]:
"뉴스레터 작성 전 데이터 확인:
 1) Google Sheets 동기화가 최근인가요? (어드민 '구글 시트 동기화' 시점)
 2) 시트에 빠진 카테고리·국가 없나요? (data-debug 의 sync verify-after-act)
 데이터 이상 의심 시 → data-debug skill 먼저 진행 권장."
```

---

## STEP 1 — 발행 종류 인터뷰 (Claude 액션)

```
[Claude 가 사용자에게 한 번에 4 질문]:

1. 어떤 종류의 뉴스레터인가요?
   A) 월간 리포트 (Monthly Report) — src/monthly-report/monthlyTemplate.js
   B) 주간 리포트 (Weekly Report) — src/weekly-report/weeklyTemplate.js
   C) 정기 뉴스레터 (이벤트성 / 이슈) — src/emailTemplate.js + src/newsletter/App.jsx
   D) 기타 (사용자 명시)

2. 기간:
   - 월간이면 어느 월? (예: 2026년 5월)
   - 주간이면 어느 주? (예: 2026 W21)
   - 정기면 발행일 / 시점

3. 어드민 페이지 사용 여부:
   A) /admin/<해당-페이지> 에서 옵션 토글하면서 작성 (대화형)
   B) 코드로 직접 옵션 객체 만들어 호출 (자동화)

4. 발송까지 진행할지 / 게시만 할지:
   A) 게시만 (URL 생성) — /p/GEO-...-{KO|EN}
   B) 게시 + SMTP 발송 (routes/email.js)
   C) 미정 — 일단 게시, 나중에 결정

[Claude 가 답변을 메모로 기록]
```

---

## STEP 2 — 데이터 범위 / 카테고리 인터뷰 (Claude 액션)

```
[Claude 가 사용자에게 한 번에 3 질문]:

1. 다룰 카테고리는 어떤 prodId 들?
   (전체 / 부분 — 예: TV·Monitor·Audio 만)
   참조: src/categoryMap.js 의 PROD_IDS

2. 다룰 국가는?
   (TTL / 부분 — 예: KR·US·UK·JP 만)

3. 비교 대상 (compName)?
   (기본: src/categoryMap.js 의 BRAND_COLORS 매핑)
   특정 경쟁사 비교 강조하고 싶은지

[Claude 의 사후 액션]:
- 사용자 답변에서 카테고리·국가 필터 옵션 작성
- 시트의 카테고리·국가 라인업과 실제 시트 데이터 비교 (gap 발견 시 사용자에게 보고)
```

---

## STEP 3 — 카드 버전 / 섹션 구성 (Claude 액션)

```
[Claude 가 사용자에게 한 번에 3 질문]:

1. 제품 카드 버전:
   A) V1 (productCardV1Html) — 점수 + MoM + 미니 트렌드 바 (단순)
   B) V2 (productCardV2Html) — 10그룹 막대 (각 그룹 width 10%, 14px)
   C) V3 (productCardV3Html) — 그룹별 1위 비교 (status 색 + SS/ratio%)
   (V1/V2/V3 정의: .claude/rules/design.md §C-21~C-23)

2. 추가 섹션 (선택 — 복수 가능):
   - [ ] Hero (큰 점수 + MoM + Gap)
   - [ ] Executive Summary (텍스트 + 핵심 수치)
   - [ ] 베이스라인 차트 (시점 분기 강조)
   - [ ] By Country 표
   - [ ] Top N 가로 막대 (vbar)
   - [ ] 각주 / 출처
   - [ ] 기타

3. 미출시 처리 정책:
   A) 회색 막대 + '—' 라벨 (기본 — .claude/rules/newsletter.md §4.5)
   B) 카드 자체 숨김 (특정 국가에서)
   C) 별도 fallback 디자인

[Claude 의 사후 액션]:
- options 객체 작성 ({ productCardVersion, sections, unlaunchedHandling })
- 어드민 페이지의 토글과 매핑 확인
```

---

## STEP 4 — KO / EN 텍스트 (Claude 액션)

```
[Claude 가 사용자에게 한 번에 3 질문]:

1. KO / EN 어느 언어 발행?
   A) KO 만
   B) EN 만
   C) 양쪽 동시 (권장 — publishCombinedDashboard)

2. 사용자가 직접 작성한 텍스트:
   - 제목 (월간/주간 정보)
   - Preheader (50~110자, inbox 미리보기)
   - Hero / Executive Summary 본문
   - 각주
   ⚠ Claude 가 임의 다듬기 금지 — 사용자 텍스트 그대로

3. 사용자가 텍스트 작성 안 한 경우:
   - Claude 가 데이터 기반 초안 작성 (사용자가 후속 수정)
   - 데이터 인사이트는 AI 인사이트 호출 (insightAgent.js) — N3 응답 검증

[Claude 의 안전 규칙]:
- 사용자 명시 텍스트는 그대로 사용 (오타 포함, 명시 지시 후만 수정)
- 영문 자간 -1px (좁은 셀 압축)
- 영문 약어 사용 (Refrigerator → REF 등 — 좁은 셀)
- Subsidiary 풀네임 필요한 곳 (Executive Summary 등)
```

---

## STEP 5 — Preheader / Footer 메타 (Claude 액션)

```
[Claude 가 사용자에게 한 번에 4 질문]:

1. Preheader (inbox 미리보기 텍스트):
   - 사용자 명시 또는 데이터 기반 초안 작성
   - 50~110자 (모바일 잘림 고려)
   - <body> 직후 hidden div 패턴

2. Footer:
   - 발행 정보 (월 / 주차 / 게시일) 형식 확인
   - 발송자 메타 (회사 / 부서)
   - 외부 발송 시 unsubscribe 링크 필수

3. 이미지·로고 사용 여부:
   A) 없음 (텍스트·SVG·table-layout 만)
   B) base64 인라인 (100KB 이하 / Gmail 트림 한계)
   C) 외부 호스팅 URL (CDN / 안정적 호스팅)

4. (이메일 발송 시) 보낸 사람·받는 사람 정보:
   - SMTP 발신자 도메인 / 표시 이름
   - 수신자 목록 (어드민 UI 또는 .env)

[Claude 의 안내]:
"외부 호스팅 이미지면 CDN 안정성 확인 — Gmail / Outlook 에서 image proxy 통과해야 함"
```

---

## STEP 6 — 본문 작성 + Hook 통과 (Claude 액션)

```
[Claude 의 작성 액션]:
1. options 객체 완성 + generateXxxHTML 호출 / 또는 어드민 페이지에서 토글
2. 본문 작성 시 NEVER Rule 자동 통과:
   - containerWidth = 940 (Hook 차단 trigger)
   - table-layout 기반 (flex / grid 금지)
   - 인라인 style 만
   - 미출시 회색 + '—'
   - KO / EN 양 모드 일관
3. 사용자 명시 텍스트 그대로 삽입 (다듬기 X)
4. emailTemplate.js / monthlyTemplate.js / weeklyTemplate.js 수정 시
   newsletter-guard.sh hook 자동 검증 (PostToolUse)
   → containerWidth > 940 / display:flex/grid 자동 차단

[Claude 의 보고]:
"본문 작성 완료. 다음 step (시각 검증) 진행 전 사용자 확인 필요."
```

---

## STEP 7 — 시각 검증 (사용자 + Claude 협업)

```
[Claude 가 사용자에게 안내]:
".claude/rules/newsletter.md §5 의 체크리스트 따라 검증:

1) 어드민 iframe 미리보기:
   - /admin/newsletter (또는 monthly/weekly) → 미리보기 모달
   - KO / EN 토글하면서 시각 확인
   - 깨짐 / 짤림 / 정렬 어긋남 보고

2) 빌드 후 정적 HTML:
   - npm run build → dist-newsletter/ 등
   - 또는 게시 (/p/GEO-...-KO 등) 후 브라우저 직접 열람
   - Chrome / Safari / Firefox 각각 확인

3) 모바일 가로 폭 (360~414px) 가독성

4) (가능하면) 실제 이메일 클라이언트:
   - Gmail Web / Gmail iOS / Outlook 2016+ / Apple Mail
   - 본인 이메일로 테스트 발송"

[Claude 가 도울 수 있는 것]:
- newsletter-guard.sh Hook 통과 확인 (자동)
- HTML diff 분석 (이전 발행본과 비교)
- 사용자 보고된 깨짐 → newsletter-debug skill 위임
```

---

## STEP 8 — 게시 / 발송 (Claude 액션)

```
[게시 (STEP 1.4 의 A 또는 C 선택 시)]:
1. /admin/<해당-페이지> "웹사이트 게시" 클릭 (사용자가)
   또는 publishCombinedDashboard / generateMonthlyReportHTML 직접 호출 (Claude 가)
2. PUB_DIR 정적 HTML 생성 — /p/GEO-Monthly-Report-{KO|EN}/2026-05 등
3. 사용자에게 게시 URL 안내

[SMTP 발송 (STEP 1.4 의 B 선택 시)]:
1. .env 의 SMTP_USER / SMTP_PASS 확인 (없으면 사용자에게 요청)
2. 본인 이메일로 1건 먼저 테스트 발송 (전체 발송 전)
3. Gmail / Outlook / Apple Mail 각각 정상 표시 확인
4. 통과 후 routes/email.js 호출로 전체 발송
5. 발송 결과 (성공 / 실패 / bounce) 영구 기록 — insight_runs 또는 별도 audit
   (.claude/rules/data.md §7.3 boundary 기록 패턴)

[Claude 의 사후 보고]:
"뉴스레터 발행 완료.
 - 게시 URL: /p/GEO-Monthly-Report-KO/2026-05 / /p/...EN/2026-05
 - 발송 (수신자 N명): 성공 N-x / 실패 x
 - 다음 호 작성 시 본 시나리오 재호출"
```

---

## 시나리오 종료 조건

- STEP 7 의 모든 검증 체크리스트 통과 (사용자 확인)
- STEP 8 의 게시 (필요 시 발송) 완료
- newsletter-guard.sh hook 위반 0건

미완료 시:
- 실패 step 으로 복귀 — Claude 가 사용자에게 다시 질문
- 깨짐 발견 시 → `newsletter-debug` skill 위임
- 발송 실패 시 → `newsletter-send` skill 의 트러블슈팅 진행

---

## 회귀 / 사용자 피드백 등재

발송 후 사용자가 보고한 깨짐 / 클라이언트별 호환 이슈는:
- `.claude/rules/newsletter.md` §6 ANTI-PATTERN 에 패턴 등재
- 반복되면 `.claude/hooks/newsletter-guard.sh` 에 검출 케이스 추가
- 본 BOOTSTRAP 시나리오의 해당 step 에 사전 검증 추가
