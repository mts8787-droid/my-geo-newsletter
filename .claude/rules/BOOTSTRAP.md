# 부트스트랩 시나리오 (Bootstrap Scenario)

> **이 파일은 Claude 가 따라가는 시나리오** — 사람이 직접 읽는 가이드 아님.
> 사람용 참조 자료 (도메인 예시·트러블슈팅·검증 체크리스트) 는 `docs/agents/HUMAN_GUIDE.md` 참조.
> 트리거: 사용자가 `"이 하네스 적용해줘"` / `"내 프로젝트에 셋업해줘"` 같이 요청 → `.claude/skills/onboard/SKILL.md` 가 본 시나리오 따름.

---

## STEP 0 — 환경 확인 + 백업 (Claude 액션)

```
[Claude 가 검증]:
- 프로젝트 루트에 CLAUDE.md 존재
- .claude/ 디렉토리 + 그 안에 settings.json / hooks/ / rules/ / skills/ / agents/
- docs/agents/ 디렉토리

[Claude 가 사용자에게 안내]:
- "ZIP 압축 푸셨나요? .claude/hooks/*.sh 에 실행 권한 (chmod +x) 부여하셨나요?"
- 필요시 명령어 제시: `chmod +x .claude/hooks/*.sh`

[Claude 가 사용자에게 백업 안내 — TECHNIQUE-5]:
- "본격 적용 전 백업해두시면 좋아요:
  · 회사 외부 정보 / 오픈소스 → GitHub (git init + push)
  · 회사 내부 정보 → 로컬 (cp -r 또는 zip 후 외장 디스크 / 회사 NAS)
  · 회사 정책 불명 시 사용자에게 확인"
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
[Claude 가 사용자에게 요청 — TECHNIQUE-3 (원본 데이터 직접 공유)]:
"각 데이터 소스의 실제 데이터를 공유해주세요. 데이터 소스 종류별:

A) 엑셀/Sheets: 헤더 행 + 데이터 1~5행을 그대로 복사·붙여넣기 (탭/콤마 구분 OK)
B) DB: 테이블 스키마 (CREATE TABLE 또는 컬럼 명세) + 샘플 row 1~3개
C) API: endpoint URL + 응답 예시 JSON + 사용 파라미터 + 공식 문서 URL

회사 내부 데이터면 민감 정보 마스킹 후 공유.

[Claude 가 추가 요청 — TECHNIQUE-6 (스키마 사전 학습)]:
"데이터 객체 1개의 전체 키 구조 (JSON.stringify), 배열 길이/정렬, null 가능 여부,
필수/옵셔널, 단위 (% / 정수 / $) 도 함께 알려주시면 어떤 차트 분류 코드 (L-1~T-1)
가 적합한지 즉시 매칭 가능합니다."

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

## STEP 4-PRE — 디자인 시작 전 레이아웃 공유 (Claude 액션)

```
[Claude 가 사용자에게 안내 — TECHNIQUE-4 활용]:
"디자인 토큰 / 차트 작업 전에 의도하는 레이아웃을 공유해주세요. 깨짐·틀어짐 방지.
다음 중 가장 편한 방식:

A) 손그림 스케치 사진 (종이/태블릿) → 채팅에 붙여넣기
B) Claude 디자인 또는 다른 LLM 과 상의한 HTML/SVG 초안 → 채팅에 텍스트로
C) 짧은 부분 소스코드 직접 작성 → 시각 의도만 표현

(웹앱 Claude 서비스 채팅이면 스크린샷 가능. 터미널 CLI 는 텍스트만.)"

[Claude 가 사용자 공유 자료 분석 후]:
- 본 프로젝트 토큰 (FONT/RED/BRAND_COLORS) 으로 매핑
- C-XX 컴포넌트 카탈로그 / L-1~T-1 차트 분류 매칭
- 정확한 SVG / HTML 작성 → 사용자 검증 요청
```

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

---

# 디버깅 시나리오 모음 (Debug Scenarios)

> 본 프로젝트의 886+ 커밋 분석 결과. 디버깅 / 수정 패턴 15 카테고리.
> `.claude/skills/debug/SKILL.md` 가 본 시나리오들을 호출 — 사용자 증상에 맞는 시나리오 찾아 진행.
> 시나리오를 참고하다가 **더 나은 방법 발견 시 그 방식으로 진행 가능** (시나리오는 가이드, 절대 아님).

---

## DEBUG-1: 베이스라인 / 라벨 위치 미세 조정 (디자인)

**증상**: 차트의 베이스라인 마커 라벨이 다른 요소와 겹침 / 잘림 / 위치 어색

**원인**:
- 라벨 오프셋 (`labelOffsetY`, `lineOffsetY`) 부적절
- 흰 배경 박스가 차트 데이터 가림
- 카테고리/모드별 (월간 vs 주간) 차이 미반영

**디버깅 순서**:
```
1. labelOffsetY / lineOffsetY 옵션 확인 (svgLine / svgMultiLine 호출처)
2. 5~30px 단위로 조정 — 100px+ 한 번에 변경 금지 (NEVER 룰)
3. bx > w * 0.7 (오른쪽 끝 가까움) 시 onRight 모드 — 라벨 좌측 정렬
4. 흰 배경 박스 발견 시 제거 (NEVER) — X축 영역에 직접 배치
5. 카테고리별 (Audio/RAC/Aircare 등) 다른 오프셋 필요 시 baselineWeekFor() 같은 helper 로 분기
6. 서버 SVG + 클라이언트 짝 (dashboardSvg.js + dashboardClient.js) 동시 수정
```
**관련 룰**: `.claude/rules/design.md` §5.3 베이스라인 마커 / §4.3 Fade / §C-12

---

## DEBUG-2: 컨테이너 너비 / iframe 클립 (디자인 — 이메일/뉴스레터)

**증상**: 뉴스레터 우측 짤림 / iframe 안 콘텐츠 클립 / 좌우 여백 불일치

**원인**:
- `containerWidth > 940` (1000px 뷰포트에서 우측 짤림)
- `body { overflow-x:hidden }` 또는 `min-width` 추가됨 (iframe 클립)
- `align="center"` 변경됨

**디버깅 순서**:
```
1. emailTemplate.js 의 containerWidth 확인 — 940 이하인지
2. iframe 부모 컨테이너의 overflow-x:hidden / min-width 검색 → 제거
3. align="center" 사용자 명시 외 변경 안 했는지 확인 (NEVER)
4. 외곽 td padding 좌우 0 + 좌측 8px 고정 패턴 시도
5. 5~30px 단위로 조정 (920 ↔ 940 ↔ 980 같은 반복)
```
**관련 룰**: design.md §5.2 / NEVER 룰 (containerWidth, overflow-x, align)

---

## DEBUG-3: 날짜 파싱 정렬 깨짐 (데이터)

**증상**: 월간 트렌드 정렬이 시간순 X / MoM 부호 반전 / 최신월이 끝이 아님

**원인**:
- `parseMonthFromDate` 가 한국식 2자리 ('26년 2월') 또는 ISO ('2026-01') 인식 X
- `(\d{4})` 만 매칭 → 한국식 누락

**디버깅 순서**:
```
1. 시트의 date 컬럼 raw 값 1~2개 사용자에게 확인 ("어떤 형식이에요?")
2. parseMonthFromDate(s) 호출 결과 console.log — 정렬 키 정확한지
3. 누락 형식 (예: '26년 2월', '2026-01') 정규식 추가
4. 단위 테스트 추가 — 실패하는 테스트 먼저 → 코드 수정
5. monthlyScores 시간순 정렬 invariant 검증
```
**관련 룰**: data.md §5.1 / §5.6 / NEVER 룰 ((\d{4}) 만 매칭)

---

## DEBUG-4: MoM 계산 정합성 (데이터)

**증상**: MoM (월간 변화) 부호 반대 / 국가 필터 시 반영 X / 값 이상

**원인**:
- `monthlyScores` 배열 순서가 시간순 X (정렬 누락)
- 배열 인덱스로 비교 → 카테고리별 length 다를 때 잘못된 월
- 국가 필터 적용 안 됨

**디버깅 순서**:
```
1. `_productsCnty.find(...).monthlyScores.map(m => m.date)` 콘솔 출력 → 시간순 확인
2. parseProductCnty 의 entries.sort(parseMonthFromDate) 호출 확인
3. 배열 끝 (length-1) = 시간순 최신 가정 정확한지 검증
4. 국가 필터 헬퍼 (_filteredMonthlySeries 등) — date 키로 byDate 누적 (인덱스 X)
5. MoM 부호 = (latest - prev) / prev — prev=0 edge case 처리
```
**관련 룰**: data.md §5.6 / §5.7

---

## DEBUG-5: 좁은 셀 짤림 / 텍스트 잘림 (디자인)

**증상**: vbar 컬럼 라벨 (`vbar-col-name`) 또는 카드 범례에서 텍스트 잘림

**원인**:
- `overflow:hidden` 으로 클립
- 영문 풀네임이 좁은 셀에 안 들어감
- letter-spacing 부족

**디버깅 순서**:
```
1. CSS overflow 속성 확인 → visible 로 변경 (NEVER 룰 overflow:hidden)
2. 폰트 11px → 10px 축소 시도
3. letter-spacing -0.6px ~ -0.9px 강화
4. 영문 모드 약어화 (Refrigerator → REF, Dishwasher → DW, Vacuum → VC)
5. table-layout: fixed 인 경우 width 명시
```
**관련 룰**: design.md §4.4 / NEVER 룰 (overflow:hidden 좁은 셀, 영문 풀네임)

---

## DEBUG-6: 미출시 / DEFAULT 처리 (데이터 + 디자인)

**증상**: 특정 국가에서 특정 제품 미출시 회색 처리 X / 라벨 '—' 안 됨

**원인**:
- `unlaunchedMap` 에 해당 키 없음
- 카테고리 매핑 (UL_CODE) 누락 (예: STYLER 누락 회귀)
- `DEFAULT_UNLAUNCHED` 비즈니스 fact 미등록

**디버깅 순서**:
```
1. iframe 콘솔에서 `_unlaunchedMap` 확인 — 해당 키 ('XX|YY') 있나
2. UL_CODE 정확한지 (categoryMap.js 의 PROD_ID_TO_UL_CODE) — 모든 prodId 매핑됐는지
3. DEFAULT_UNLAUNCHED 에 비즈니스 fact 등재 — BR|AV 같이
4. parseUnlaunched 가 시트 데이터로 추가 안 함 (silent skip) 검사 — _logWarn 통과 확인
5. _isUnlaunched(cnty, prodId) 클라이언트 함수 동작 검증
6. 미출시 셀 디자인 — 회색 막대 + 모든 라벨 '—' 표기
```
**관련 룰**: data.md §5.5 / §5.8 / NEVER 룰 (카테고리 매핑 분산)

---

## DEBUG-7: AI 인사이트 호출 실패 (AI)

**증상**: AI 인사이트 호출 403 / timeout / 빈 응답 / 거절 응답

**원인**:
- `max_tokens > 4096` non-streaming 호출 → 403
- N3 invalid_output (빈 본문 / 거절 / 길이 하한)
- API key 미설정 또는 모델 deprecated

**디버깅 순서**:
```
1. /admin/observability 에서 최근 실패 kind 확인 (invalid_output / overloaded / rate_limit / auth / network)
2. invalid_output 이면 응답 본문 검증 (insightAgent.js N3 분류)
3. max_tokens 큰 경우 — streaming API 사용 (client.messages.stream().finalMessage())
4. ANTHROPIC_API_KEY env 확인
5. 모델 ID 최신인지 (claude-opus-4-7, claude-sonnet-4-6, claude-haiku-4-5)
6. 비용 추적 — insight_runs.jsonl 에 기록 확인
```
**관련 룰**: ai.md §3.1~3.3 / NEVER 룰 (max_tokens > 4096 non-streaming)

---

## DEBUG-8: 시트 동기화 에러 (데이터 — 외부 boundary)

**증상**: Google Sheets 동기화 실패 — 403 / 400 / "permission denied"

**원인**:
- 서비스 계정 미설정 / 권한 없음
- batchGet API 의존
- 시트 ID / 탭 이름 불일치

**디버깅 순서**:
```
1. 에러 메시지 actionable 한국어로 표시되는지 — 사용자가 무엇을 해야 할지 명확
2. 서비스 계정 IAM 권한 확인 (Sheets API 접근)
3. 시트 ID 정확한지 — URL 에서 추출 (extractSheetId)
4. SHEET_NAMES 의 탭 이름이 실제 시트 탭과 일치하는지
5. gviz/tq csv proxy URL 정확한지 (production / development)
6. 시트 권한 — '링크 있는 사용자' 보기 권한 또는 서비스 계정 share
```
**관련 룰**: data.md §4.1 / data-puller 서브에이전트 위임 가능

---

## DEBUG-9: Citation 도메인 layout 변경 (데이터)

**증상**: Citation 도메인 시트 구조 바뀜 — 'All view' 데이터 없음 / PRD-specific 잘못 집계

**원인**:
- 시트 layout v3 (월별 반복 블록) 미인식
- PRD-specific 행을 TTL 집계에 포함 (또는 반대)
- 월 라벨 표기 다양 ('Apr 2026' / '4월' / 'April') 정규화 안 됨

**디버깅 순서**:
```
1. 시트 첫 5행 raw 확인 — v1 / v2 / v3 어떤 layout 인지
2. monthBlocks.length >= 2 면 v3 (월별 Region/Domain/Type/Value 블록 반복)
3. TTL 집계 = strict TTL 행만 (또는 부분 국가 선택 시 By Country 합산)
4. PRD-specific 행은 TTL 에서 제외
5. 월 라벨 canonical 정규화 (canonMonthDom) — 'Apr 2026' / '4월' → 'Apr'
6. 'All view' 에서 TTL 비면 per-country 합산 폴백
```
**관련 룰**: data.md §5.7 / parseCitDomain (excelUtils.js)

---

## DEBUG-10: 카드 범례 / 카드 디자인 일치 (디자인)

**증상**: 카드 범례가 실제 카드 (V3 등) 와 디자인 불일치 / 높이 안 맞음

**원인**:
- inline 구조 vs flex/grid 혼용
- 막대 7개 + 설명 3슬롯 배치 깨짐
- 카드 크기 / 폰트 / 자간 불일치

**디버깅 순서**:
```
1. 실제 카드 (V1/V2/V3) 의 HTML 구조 그대로 복사
2. 범례에 값 + 라벨 (V3 inline) — 한 줄에
3. 회색 보더로 카드 외곽 통일
4. 막대 축소 + 상단 폰트 축소로 V3 행열 일치
5. 카드 높이 통일 — fixed height 또는 stretch
6. KO/EN 양쪽 검증
```
**관련 룰**: design.md §C-21~C-23 (V1/V2/V3) / §5.10 vbar

---

## DEBUG-11: 필터 시 차트 갱신 안 됨 (디자인 + 데이터)

**증상**: 월 / 국가 / 카테고리 필터 변경 시 트렌드 차트 / 미니차트 갱신 X

**원인**:
- `filterTrend` 의 `data-prodid` 속성 누락 → row 매칭 실패 (트렌드 사라짐 회귀)
- 클라이언트 짝 함수 (_miniSvg, _trendMultiSvg) 미수정
- truncate 인덱스 (_curWeekIdx / _curMonthIdxIn12) 안 갱신

**디버깅 순서**:
```
1. .trend-row 의 data-prodid 속성 존재 확인 → row 매칭 키
2. _curWeekIdx / _curMonthIdxIn12 변수 갱신되는지
3. 서버 SVG (svgMultiLine) 변경 후 클라이언트 짝 (_trendMultiSvg) 동시 수정
4. truncate 시 viewBox 축소 X — mask 적용
5. 미니차트도 truncate 동작 — 카드 미니 트렌드 (svgLine ↔ _miniSvg)
6. Hero summary 카드도 필터 반영
```
**관련 룰**: design.md §5.7 truncate / §5.8 서버↔클라 짝 / NEVER 룰 (data-prodid 누락)

---

## DEBUG-12: 다국어 / 약어 처리 (디자인 — KO/EN)

**증상**: 영문 모드에서 카드/표 텍스트 잘림 / Subsidiary 약자 표시 어색

**원인**:
- 영문 풀네임이 좁은 셀에 안 들어감
- Subsidiary 가 약자 (US/UK) 라 Executive Summary 같은 곳에서 풀네임 필요
- 영문 letter-spacing -1px 부족

**디버깅 순서**:
```
1. 카드 / 셀 width 와 텍스트 길이 비교
2. 영문 약어화 — Refrigerator → REF, Dishwasher → DW, Vacuum → VC
3. Subsidiary 풀네임 필요 시 COUNTRY_OFFICIAL_NAME_EN 에서 변환
4. lang === 'en' 자간 -1px 추가
5. T[lang] || T.ko 패턴으로 fallback
6. KO/EN 둘 다 시각 검증
```
**관련 룰**: design.md §4.4 (영문 자간 압축, 좁은 셀 약어)

---

## DEBUG-13: 카테고리 매핑 회귀 (데이터)

**증상**: 신규 카테고리 (예: STYLER) 추가 후 미출시 매칭 X / 한글 표시 X

**원인**:
- 카테고리 매핑이 여러 파일에 분산 — 일부만 갱신됨 (STYLER 누락 회귀 패턴)
- `assertCategoryMapInvariant` 통과 X

**디버깅 순서**:
```
1. grep -rn "tv:.*'TV'" src/ — 인라인 매핑 잔여 검색 (single source 외)
2. categoryMap.js 의 PROD_IDS 에 신규 id 등재됐는지
3. 4종 매핑 (KR/EN/UL_CODE/BU) 모두 등재 — 빠진 거 있나
4. NAME_TO_PROD_ID (역매핑) 도 갱신
5. npm test — assertCategoryMapInvariant 통과 확인
6. 다른 파일에 인라인 매핑 발견 시 categoryMap.js import 로 통합
```
**관련 룰**: data.md §5.5 / NEVER 룰 (카테고리 매핑 분산)

---

## DEBUG-14: 거대 함수 분할 (코드 정리)

**증상**: 함수 200줄+ 거대 / 분기 복잡 / 회귀 위험

**원인**:
- 한 함수에 여러 시트 포맷 / 모드 분기
- 분리 없이 누적 변경

**디버깅 순서**:
```
1. 분할 전 통합 테스트 fixture 작성 — 각 분기마다 1개씩 (3~6 테스트)
2. npm test — 새 fixture 가 현재 코드에서 통과 확인 (baseline)
3. 각 분기를 _extractXxx 함수로 추출 — ctx 객체로 인자 전달
4. mutation 패턴 유지 (weeklyMap 등) — 재할당 필요한 변수는 return value
5. const → let 변경 필요 시 명시 (helper 가 새 배열 반환)
6. npm test — baseline 회귀 X 확인
```
**관련 룰**: skills/data/SKILL.md "거대 파서 분할" 워크플로우

---

## DEBUG-15: silent fallback (데이터)

**증상**: 시트 일부 비었는데 sync 정상 진행 / 디버깅 어려움 / 어떤 시트 깨졌는지 모름

**원인**:
- `if (...) return {}` silent — warn 없음
- console.warn / log 미달
- 사용자가 알기 어려움

**디버깅 순서**:
```
1. grep -n "return {}" src/excelUtils.js — silent fallback 위치 검색
2. 각 위치에 _logWarn(scope, msg, ctx) 추가 — ctx 에 sample / expectedKeys 같은 컨텍스트
3. parseSheetRows 라우터에 assertRows 가드 + try/catch 격리 (한 시트 throw 가 전체 sync 멈추지 않게)
4. verifySyncResult 가 sync 후 invariant 검증 (products 빈 / DEFAULT 누락 / weeklyLabels 자동 생성)
5. /admin/observability 의 Sync Health 섹션 — localStorage syncDiagnostics 확인
```
**관련 룰**: data.md §5.10 / NEVER 룰 (silent return {})

---

## DEBUG-16: 필터 작동 안 함 / 필터 후 차트 사라짐·갱신 X

**증상**: 월/국가/제품 필터 변경해도 차트 갱신 X / 필터 후 트렌드 사라짐 / 일부 카드만 반영

**원인** (본 레포 30+ 필터 관련 fix 분석):
- `data-prodid` 속성 누락 → row 매칭 실패 (트렌드 사라짐 근본 원인)
- 클라이언트 짝 함수 미수정 (서버 SVG 변경 시 _miniSvg / _trendMultiSvg 동시 수정 필요)
- 일부 카드만 필터 반영 (Hero summary / 미니차트 누락)
- null 요소 처리 안 함 — weekly / 경쟁사 배열에 null 있을 때
- truncate 인덱스 (`_curWeekIdx` / `_curMonthIdxIn12`) 안 갱신
- 데이터 없을 때 Total 폴백 안 함
- 드롭다운 옵션 자체에서 누락 (예: TTL 없는 달)

**디버깅 순서**:
```
1. data-prodid 속성 검증:
   - DOM 의 .trend-row 같은 row 에 data-prodid 속성 있는지 (필터 매칭 키)
   - filterTrend 같은 함수가 id 로 row 찾는지

2. 클라이언트 짝 함수 일치성:
   - 서버 SVG (dashboardSvg.js) 변경 → 클라 (_miniSvg / _trendMultiSvg) 동시 수정?
   - filterTrend 호출 후 SVG 재생성 코드 확인

3. 필터 영향 카드 모두 검증:
   - Hero summary 카드
   - 카드 미니차트
   - 큰 트렌드 차트
   - vbar / hbar
   - 국가별 / 제품별 섹션
   각각 필터 변경 시 재계산 함수 호출하는지

4. null 처리:
   - 배열에 null 요소 있을 때 _miniSvgNullAware 같은 null-aware 함수 사용
   - null vs 0 명확히 구분 (선 끊김 vs 0 점)

5. truncate 인덱스 갱신:
   - _curWeekIdx 같은 전역 변수
   - 월/주차 드롭다운 변경 시 갱신되고 재렌더 트리거

6. 드롭다운 옵션 자체 검증:
   - TTL 없는 달도 옵션에 포함됐는지 (강제 추가)
   - 빈 데이터 month 도 선택 가능 — 빈 화면이라도 렌더

7. Total 폴백:
   - 특정 국가 선택 시 그 국가 데이터 없으면 Total 평균으로 폴백
   - 또는 명시적 "데이터 없음" 메시지

8. 필터 state 격리 확인 — TECHNIQUE-14 참조:
   - 페이지 분리 시 다른 SPA 와 state 공유 X
   - GNB 탭과 필터 레이어 충돌 X
```

**관련 룰**: design.md §5.7 truncate / §5.8 서버↔클라 짝 / NEVER 룰 (data-prodid 누락)
**관련 TECHNIQUE**: TECHNIQUE-14 (헤더·필터 꼬임 방지) / TECHNIQUE-1, 2 (디버깅 로그)

---

## 디버깅 시나리오 사용법

본 시나리오들은 `.claude/skills/debug/SKILL.md` 가 호출. 사용자가 `"X 안 됨"` / `"이거 디버깅해줘"` 같이 요청하면:

1. Claude 가 증상으로 DEBUG-N 식별 (위 15 카테고리 중)
2. 해당 시나리오의 디버깅 순서 따름
3. **시나리오가 절대 아님** — 진행 중 더 나은 방법 발견 시 그 방식으로 진행
4. 해결 후 → 새 시나리오로 등재 가치 있으면 사용자에게 제안 (BOOTSTRAP DEBUG-N 추가)

---

# 효과적 디버깅·협업 기법 (TECHNIQUES)

> 본 프로젝트 사용자가 실제 사용해서 효과 본 기법 7가지. 시나리오 진행 중 Claude 가 막히거나 추가 정보 필요할 때 활용.

---

## TECHNIQUE-1: 임시 로그 창 (데이터 디버깅)

**상황**: 데이터 오류 / 파싱 결과 의심 / 시트 동기화 후 어떤 값이 들어왔는지 확인 필요

**Claude 의 액션**:
```
1. 임시 로그 표시 영역 생성 — 어드민 페이지에 <pre id="debug-log"> 추가 (일회성)
2. 파싱 직후 핵심 데이터를 그 영역에 dump:
   document.getElementById('debug-log').textContent = JSON.stringify(data, null, 2)
3. 사용자에게 안내: "어드민 페이지 새로고침 → 동기화 → 표시되는 로그 텍스트를
   복사해서 채팅에 붙여주세요"
4. 사용자가 복사 붙이면 그 raw 데이터를 분석해서 원인 진단
5. 해결 후 임시 영역 제거 (또는 toggle 로 hidden)
```

**언제**: DEBUG-3 (날짜 파싱) / DEBUG-4 (MoM) / DEBUG-6 (미출시) / DEBUG-8 (sync) / DEBUG-9 (Citation) / DEBUG-15 (silent fallback)

---

## TECHNIQUE-2: Chrome 콘솔 로그 + 데이터 복사

**상황**: TECHNIQUE-1 의 임시 창 만들기 부담될 때 / 이미 console.log 로 출력 중

**Claude 의 액션** (Chrome 콘솔 여는 법부터 상세히):
```
1. Chrome 콘솔 여는 법 사용자에게 안내:
   · Windows/Linux: Ctrl + Shift + J (또는 F12 → Console 탭)
   · Mac: Cmd + Option + J (또는 F12 → Console 탭)
   · 또는 페이지 우클릭 → "검사" → Console 탭

2. 콘솔에 디버그 변수 노출 — dashboardClient.js 같은 인라인 JS 에서:
   window._debug = { parsedData, monthlyVis, unlaunchedMap, ... }
   또는 기존 _productsCnty / _unlaunchedMap 같은 전역 노출 활용

3. 사용자에게 콘솔 명령 안내:
   "콘솔에서 다음 명령 실행 후 결과 복사해주세요:"
   · `JSON.stringify(_productsCnty.find(r => r.country === 'US'), null, 2)`
   · `_unlaunchedMap`
   · `_filteredMonthlySeries('tv', ['US'])`

4. 사용자가 결과 복사 붙이면 분석
5. 콘솔 명령 history 도 활용 (위 화살표 → 이전 명령)
```

**언제**: 데이터 디버깅 전반. Chrome 콘솔 처음 여는 사용자에게는 1번 안내 필수.

---

## TECHNIQUE-3: 원본 데이터 직접 공유

**상황**: 사용자 시트 / DB / API 의 실제 데이터를 Claude 가 모르는데 추측만으로 진단 불가

**Claude 가 사용자에게 요청할 것** (데이터 소스 종류별):

### A) 엑셀 / Google Sheets
```
"문제가 되는 시트의 헤더 행 + 데이터 1~5행을 그대로 복사해서 붙여주세요.
탭 구분 또는 콤마 구분 텍스트로 OK."

예시 형식:
| Country | Date     | Category | LG  | Samsung |
| US      | Mar 2026 | TV       | 85  | 90      |
| UK      | Mar 2026 | TV       | 82  | 88      |
```

### B) 데이터베이스
```
"테이블 스키마를 알려주세요:
- 테이블명
- CREATE TABLE 문 또는 컬럼 명세 (이름·타입·null 여부)
- 샘플 row 1~3개 (id · 주요 컬럼만)"
```

### C) API
```
"API 명세 공유해주세요:
- endpoint URL (인증 정보 제외)
- 응답 예시 JSON (실제 호출 결과 1개)
- 사용 가능한 query 파라미터
- rate limit / pagination 패턴
공식 문서 URL 도 가능."
```

**Claude 가 안내**: "회사 내부 데이터면 민감 정보 마스킹 후 공유"

---

## TECHNIQUE-4: 디자인 레이아웃 스케치 + 스크린샷 (디자인 작업 시작 전)

**상황**: 새 컴포넌트 / 차트 / 카드 디자인 작업 — 깨짐·틀어짐 방지

**Claude 가 사용자에게 안내**:
```
"디자인 작업 시작 전에 다음 중 하나를 공유해주세요 (가장 편한 방식):

1. 손그림 레이아웃 스케치:
   · 종이에 그리고 사진 찍어서 채팅에 붙여넣기
   · 또는 iPad / 태블릿 그림판
   · 박스 위치 + 라벨 + 대략 비율만 OK

2. Claude 디자인 (claude.ai/design) 또는 다른 LLM 으로 미리 작성한 소스코드:
   · 사용자가 의도하는 형태를 LLM 과 상의해서 HTML/SVG 초안 작성
   · 그 소스 그대로 채팅에 붙여넣기 → 본인 프로젝트 토큰 (FONT/RED/...) 으로 맞춰서 적용

3. 부분 소스코드 작성:
   · 사용자가 직접 짧은 HTML/SVG 로 의도 표현
   · 정확한 픽셀 / 색상 / 폰트 X — 구조 + 시각 의도만

⚠ 스크린샷은 웹앱 Claude 서비스 채팅에서만 붙여넣기 가능 (터미널 CLI 는 텍스트만).
   터미널 CLI 사용자는 1·3번 + 텍스트 설명으로 대체."
```

**Claude 의 액션 후**:
- 사용자 공유한 자료 분석 → 본 프로젝트 토큰 / 컴포넌트 카탈로그 (C-XX) / 차트 분류 코드 (L-1 등) 와 매핑
- 정확한 SVG / HTML 작성 → 사용자 검증 요청

**언제**: 신규 디자인 작업의 첫 단계 (STEP 4-PRE 디자인 시작 전 항상)

---

## TECHNIQUE-5: 백업 + 정리 안내

**상황**: 큰 변경 (리팩터링·디자인 전환·데이터 모델 변경) 시작 전 / 사용자가 회귀 위험 알기 어려울 때

**Claude 의 액션**:
```
1. 사용자에게 백업 안내:
   "변경 전 백업해두시면 좋아요. 두 가지 옵션:

   A) 회사 외부 정보 / 오픈소스: 깃허브 사용 권장
      · git init (이미 있으면 패스)
      · git remote add origin <github URL>
      · git push (현재 main 백업)
      · branch 만들고 거기서 실험: git checkout -b feature/xxx

   B) 회사 내부 정보 (외부 git 금지): 로컬 백업
      · 프로젝트 폴더 복사: cp -r my-project my-project-backup-YYYYMMDD
      · 또는 zip: zip -r backup-YYYYMMDD.zip my-project
      · 외장 디스크 / 회사 NAS 등 본인 백업 계획 수립"

2. 큰 변경 후 검증 시 백업 본에서 실패 케이스 재현 가능
3. 회사 정책 모르면 사용자에게 확인 "이 코드 외부 git 가능한가요?"
```

**언제**: 부트스트랩 STEP 0 직후 (적용 전 백업) · 디버깅 시 큰 변경 (DEBUG-14 분할 등) 직전

---

## TECHNIQUE-6: 데이터 스키마 사전 학습 (그래프 그리기 전)

**상황**: 그래프 / 차트 작업 — 데이터 shape 모르고 그리려고 시도 → 회귀

**Claude 가 사용자에게 요청**:
```
"그래프 그리기 전에 데이터 스키마를 먼저 보여주세요:

1. 데이터 객체 1개의 전체 키 구조 (JSON.stringify 또는 키 목록):
   { date: '2026-03', country: 'US', score: 85, ... }

2. 배열인 경우 길이 / 정렬 순서 / null 값 가능 여부

3. 필수 vs 옵셔널 필드 구분

4. 단위 (% / 정수 / $)

이걸 미리 알면 어떤 차트 분류 코드 (L-1 ~ T-1) 가 적합한지 즉시 매칭 가능.
스키마 모르고 그리면 차트 깨지거나 의미 왜곡 위험."
```

**Claude 의 사후 액션**:
- 스키마 기반으로 데이터 shape (canonical) 등재 — `.claude/rules/data.md` §3
- 차트 분류 코드 매핑 (예: 시계열 → L-1, 비중 → D-1)
- ANTI-PATTERN 검토 (null vs 0, 시간순 정렬 등)

**언제**: 신규 차트 추가 시 항상 / DEBUG-11 (필터 시 차트 갱신) 디버깅 시

---

## TECHNIQUE-7: 컴포넌트 이름 + 픽셀 단위 명령 (디자인 미세 조정)

**상황**: "위쪽 카드 좀 더 작게" 같이 모호한 디자인 명령 → 정확한 변경 어려움

**Claude 가 사용자에게 안내**:
```
"디자인 미세 조정 전에 다음 두 가지 준비:

1. 컴포넌트 이름 합의 — Claude 가 사용자에게 카드 / 차트 / 라벨 이름 제안:
   '맨 위 빨간 박스: Hero 카드 (C-01)'
   '국가별 막대: vbar (C-05)'
   '카드 안 작은 차트: 미니 트렌드 (C-03 의 일부)'
   '베이스라인 라벨: 시점 분기 라벨 (C-12)'

2. 픽셀 단위 명령:
   '이 카드 폰트 -2px' (안 됨: '좀 작게')
   'vbar 라벨 위로 +10px' (안 됨: '위로')
   'Hero 카드 padding +5px / 좌우 +20px' (안 됨: '여백 더')

⚠ 한 번에 100px+ 변경 금지 (NEVER 룰) — 5~30px 단위 반복.
⚠ 모호한 명령 ('좀 더') 시 Claude 가 단위 명확화 질문."
```

**Claude 의 사후 액션**:
- 컴포넌트 이름 → `.claude/rules/design.md` 의 C-XX 카탈로그 매핑
- 픽셀 단위 변경 → labelOffsetY / lineOffsetY / padding 같은 옵션 정확 적용
- 답변에 정확한 수치 명시 ("+10px 아래로 / -2px 폰트")

**언제**: 디자인 미세 조정 작업 전반 (DEBUG-1 베이스라인 / DEBUG-2 컨테이너 / DEBUG-5 좁은 셀 / DEBUG-10 카드 범례)

---

## TECHNIQUE-8: 점진적 변경 + 회귀 검증 사이클

**상황**: 큰 리팩터링 / 거대 함수 분할 / 매핑 통합 같이 회귀 위험 큰 변경

**Claude 의 액션**:
```
1. 변경을 작은 phase 로 분할 (예: Phase A/B/C/D/E/F/G)
2. 각 phase 마다:
   a. 변경 적용
   b. npm test 즉시 실행 → 회귀 없는지 확인
   c. build 검증 (필요 시)
   d. phase 단위 커밋 (의미 명확)
3. 회귀 발견 시 → 그 phase 만 되돌리고 다른 접근
4. 마지막에 통합 검증 (전체 test + build + 시각 확인)

본 세션 사례:
- parseWeekly 232줄 분할 시: 통합 테스트 6개 fixture 먼저 (baseline) → 3 helper 추출 → 회귀 X 확인
- 매핑 통합 6 phase: 단일 소스 → 헬퍼 → import 전환 → silent fallback → 검증 → 미러
```

**언제**: 200줄+ 함수 분할 / single source 통합 / silent fallback 일괄 처리 / 큰 인프라 변경

---

## TECHNIQUE-9: 잔여 패턴 grep 회귀 방지

**상황**: 매핑 통합 / 토큰 통합 / 인라인 정의 제거 — "다 통합했나?" 의 검증

**Claude 의 액션**:
```
1. 회귀 위험 패턴 정의 (예: 인라인 매핑 `tv: 'TV', monitor:`)
2. grep -rn 으로 src/ 전체 검색:
   grep -rn "tv:\s*'TV'\|monitor:\s*'IT'" --include="*.js" --include="*.jsx" src/
3. 발견된 곳 모두 통합 (single source import 로)
4. 다시 grep — 잔여 0건 확인 (회귀 방지)
5. 신규 위치 발견 시 (예: 이메일 인라인 string) 적합한 통합 방식 선택
6. 패턴을 ANTI-PATTERN 으로 등재 (.claude/rules/data.md NEVER)

본 세션 사례:
- STYLER 누락 회귀 — 매핑이 8 곳 분산 → grep 으로 모든 위치 식별 → 통합 → 잔여 0 달성
- "tv:.*'TV'" grep 결과 0 — 회귀 차단 검증
```

**언제**: single source 통합 직후 / 신규 prefix 추가 후 / 토큰 적용 통합

---

## TECHNIQUE-10: invariant 런타임 + 테스트 자동 검증

**상황**: 신규 카테고리 / 매핑 / 토큰 추가 시 — 사람 수동 검증 부담 / 일부 누락 위험

**Claude 의 액션**:
```
1. invariant 함수 작성 (예: assertCategoryMapInvariant):
   - 매핑 4종 (KR/EN/CODE/BU) 의 키가 모두 PROD_IDS 와 일치
   - UL_CODE_NORMALIZE 결과값 ⊆ PROD_ID_TO_UL_CODE 값 집합
   - 위반 시 throw new Error('xxx 누락')

2. 두 곳에서 자동 검증:
   a. 모듈 로드 시 — 런타임에서 즉시 (사용자 환경에서 발견)
   b. 테스트에서 — npm test 가 강제 (CI / 개발 단계에서 차단)

3. 신규 추가 시 4종 중 하나만 빠져도 invariant 위반 → 자동 차단
4. invariant 메시지에 구체적 정보 (어떤 키 누락) → 사용자 즉시 알 수 있게

본 세션 사례:
- categoryMap.js 의 assertCategoryMapInvariant — PROD_IDS 의 모든 id 가 4 종 매핑에
  등재되어 있는지 검증. STYLER 누락 같은 회귀 차단.
```

**언제**: 매핑 / 토큰 / 설정 같이 "동시 갱신" 필요한 데이터 (single source 강제)

---

## TECHNIQUE-11: 서브에이전트 도메인 진단 위임 (read-only)

**상황**: 특정 영역 (예: 데이터 파이프라인) 의 정합성 / 회귀 위험 점검 — 메인이 모두 직접 하면 부담

**Claude 의 액션**:
```
1. read-only 서브에이전트 정의 (.claude/agents/<name>.md):
   - description: "X 영역의 shape·정합성·누락 조사·보고 전담"
   - tools: Read, Bash, Grep, Glob (Edit 권한 없음 — 진단만)

2. 메인이 서브에이전트에 위임:
   "data-puller 야, parseUnlaunched 가 5단계 ERROR CATCHING 따르는지 점검해줘"

3. 서브에이전트가 진단 보고 (구체적 라인 인용 + 위반 항목 + 우선순위)

4. 메인이 보고 검증 + 코드 수정 (서브에이전트는 진단만)

5. 사용자 입장 — Claude 와 한 명만 대화. 내부적으로 메인+서브 분담.

본 세션 사례:
- data-puller 가 parseUnlaunched ERROR CATCHING 5단계 점검 → 메인이 검증 + 수정
- 메인이 직접 검증한 결과로 보고 (메인은 일 안 한다는 인상 X)
```

**언제**: 큰 영역 진단 / 회귀 위험 점검 / 다른 시각 필요할 때 (메인 + 서브 분담)

---

## TECHNIQUE-13: 페이지 분리 + 통합 관리자 패턴

**상황**: 디자인 요소 너무 복잡 / 한 페이지에 데이터 여러 종류 / 단일 SPA 비대

**Claude 의 액션**:
```
1. 영역별 SPA 분리 검토:
   - 대시보드 (실시간 KPI) — dashboard SPA
   - 뉴스레터 (이메일 호환) — newsletter SPA
   - 트래커 (정성 KPI) — tracker SPA
   - 분야별 (Visibility / Citation 등) — 각 SPA
2. 각 SPA 의 책임 명확:
   - 자체 데이터 모델 / 필터 / 차트
   - 다른 SPA 와 state 공유 X (URL / localStorage 외)
3. 통합 관리자 어드민 UI 별도:
   - 어드민 메뉴 (3단 그리드 — 게시·인프라·하네스)
   - 각 SPA 의 진입점 카드
   - 공통 인프라 (인증·observability·하네스 미러)
4. 빌드 분리:
   - vite.<spa>.config.js 각각
   - dist-<spa> 별도
5. 시트 / 데이터 모듈은 공통화:
   - excelUtils.js 의 parseSheetRows 라우터는 모든 SPA 공유
   - sheetTabsForMode 로 SPA 별 필요 탭만 fetch

본 세션 사례:
- 본 레포 7 SPA: dashboard, visibility, citation, tracker-v2, newsletter,
  monthly-report, weekly-report — 각 vite config 분리
- /admin/ 메뉴가 통합 관리자 (3단 그리드)
- 공통: excelUtils.js · categoryMap.js · sheetParserUtils.js
```

**언제**: 한 화면 / 한 페이지에 모듈이 5+ / 데이터 종류 3+ / 디자인 복잡도 한계 초과

---

## TECHNIQUE-14: 헤더·필터 조합 꼬임 방지 (페이지 분리 시)

**상황**: 여러 SPA / 페이지 분리 후 필터·헤더 동기화 깨짐 — 한 페이지의 필터가 다른 페이지 영향

**Claude 의 액션**:
```
1. 필터 state 격리:
   - 각 SPA 마다 독립 state (React useState / useReducer)
   - URL 파라미터 또는 localStorage 로만 외부와 통신
   - 다른 SPA 의 state 에 직접 접근 X

2. 필터 변경 시 영향 범위 명시:
   - "필터 X 가 어느 컴포넌트 / 차트에 영향 주는지" 코드 주석 명시
   - 영향받는 컴포넌트는 'data-prodid' 같은 매칭 키 필수

3. 헤더 / GNB 와 필터 레이어 분리:
   - GNB 탭 (Weekly/Monthly 같은 큰 모드) 은 페이지 전환
   - 필터 레이어는 같은 페이지 안의 좁히기만 (모드 전환 X)
   - 둘이 한 영역에 섞이면 충돌 (본 레포 'GNB 탭 / 필터 레이어 분리' fix 참조)

4. 필터 적용 결과 검증:
   - 필터 변경 → 어느 컴포넌트가 재렌더 / 어느 게 그대로
   - data-prodid 매칭 / row 식별 키 일관 사용
   - 미니차트 + 트렌드 + Hero summary 모두 동일 필터 반영

5. 페이지간 공통 헬퍼:
   - 필터 적용 함수 (_filteredMonthlySeries 같은) 공통 모듈로 분리
   - 모든 SPA 가 import — 동일 로직 보장

본 세션 / 본 레포 사례:
- GNB 사업본부 탭 + 필터 레이어 동시 존재 시 충돌 → "필터 레이어에서 Weekly/Monthly
  토글 제거, GNB 탭으로 대체" fix
- _filteredMonthlySeries / _filteredMomD 같은 공통 헬퍼 — 모든 카드에 동일 적용
```

**언제**: 페이지 분리 직후 / GNB·필터 같이 다중 레이어 도입 시 / 필터 동기화 문제 의심 시

---

## TECHNIQUE-15: 데이터 완전 틀어짐 — 원본 헤더 변경 + 빈셀 검증

**상황**: 데이터 동기화 후 모든 차트 빈 화면 / 잘못된 값 / "왜 안 보이지?" — 원본 시트 구조 변경 의심

**Claude 의 액션**:
```
1. 사용자에게 원본 헤더 변경 확인 요청:
   "데이터가 갑자기 틀어졌으면 원본 시트의 헤더 (첫 행) 가 변경됐을 가능성이 큽니다.
   다음 확인 부탁드립니다:
   - 마지막으로 정상 작동했을 때와 비교해 시트 헤더 (컬럼 이름) 가 바뀌었나요?
   - 컬럼 순서가 바뀌었나요?
   - 새 컬럼이 추가됐나요? 기존 컬럼이 삭제됐나요?
   - 탭 이름 (시트 이름) 이 바뀌었나요?"

2. 헤더 포함 데이터 복사 요청 — TECHNIQUE-3 활용:
   "시트의 헤더 행 + 데이터 첫 3~5행을 그대로 복사해서 채팅에 붙여주세요.
   탭/콤마 구분 텍스트로:
   | Country | Date | Category | KPI1 | KPI2 |
   | US | Mar 2026 | TV | 85 | 90 |"

3. 빈셀 / null 값 확인:
   "데이터에 빈셀 (빈 칸) 또는 명시적 null / N/A / '-' / '미측정' 같은 값이 있나요?
   특정 행 / 열에 그런 케이스 있는지 알려주세요. (이게 0 과 다르게 처리되어야 함)"

4. 빈셀 / null 처리 정책 결정 (data.md §5.3 참조):
   - 빈 셀 → null (데이터 없음)
   - '-' / '–' / '—' → null
   - 'NA' / 'N/A' → null
   - '0' / 0 → 0 (실제 측정값)
   - 차트 렌더 시 null → 점 미렌더 (선 끊김) — _miniSvgNullAware 활용
   - 평균 계산 시 null 제외 (count 분모 조정)

5. 헤더 매핑 갱신:
   - findHeaderIdx 의 정규식 동의어 추가 (예: 'launched|launch|status|출시여부')
   - 새 헤더 이름 시트에 등장 시 정규식 확장
   - 동의어 매핑은 _logInfo 로 로그 출력 (어떤 헤더 인식했는지)

6. 검증:
   - 임시 로그 창 (TECHNIQUE-1) 으로 파싱 결과 확인
   - verifySyncResult 로 invariant 통과 확인
   - 시각 검증 — 모든 차트 데이터 정상

본 레포 사례:
- "도메인 시트 v3 레이아웃 (월별 반복 블록) 지원" — 원본 시트 구조 변경 대응
- "Citation 도메인 layout 변경" 시리즈 — 헤더 추가 (PRD 컬럼) 대응
- null vs 0 구분 — pctOrNull 함수로 빈 셀 보존
```

**언제**: 모든 차트 갑자기 안 보임 / 시트 동기화 정상인데 값 이상 / 사용자가 "데이터 완전 틀어졌어" 보고

---

## TECHNIQUE-12: 본질 변경 + 산출물 분리 커밋

**상황**: 코드 + 빌드 산출물 (dist) 동시 변경 — 한 커밋에 묶으면 의미 흐림

**Claude 의 액션**:
```
1. 본질 변경 먼저 커밋:
   - src/ + routes/ + .claude/ + docs/ 등 사람이 작성한 변경
   - 의미 있는 commit 메시지 (feat / fix / refactor / docs)

2. dist-* 같은 빌드 산출물 별도 커밋:
   - chore(dist): ... 같은 형식
   - "본질 변경 abc1234 반영" 같이 참조

3. 효과:
   - git log 에서 의미 있는 변경 식별 쉬움 (chore dist 제외)
   - revert 시 본질 변경만 되돌리기 가능 (산출물은 다음 빌드에서 재생성)
   - PR 리뷰 시 산출물 변경 페이지 스크롤 부담 X

본 세션 사례:
- "feat(harness): X" → 본질 커밋
- "chore(dist): 빌드 산출물 — X 반영" → 산출물 커밋
- 두 커밋 분리로 git log 가독성 ↑
```

**언제**: 빌드 산출물이 git 추적 대상 / 매 코드 변경 시 dist 갱신되는 패턴

---

## TECHNIQUES 사용법

`.claude/skills/debug/SKILL.md` 의 워크플로우가 본 TECHNIQUES 자동 호출.

- 데이터 디버깅 (DEBUG-3, 4, 6, 8, 9, 15) → TECHNIQUE-1 또는 -2 활용
- 디자인 작업 시작 → TECHNIQUE-4 (스케치) 우선
- 디자인 미세 조정 → TECHNIQUE-7 (이름 + 픽셀)
- 그래프 추가 → TECHNIQUE-6 (스키마 사전 학습)
- 큰 변경 전 → TECHNIQUE-5 (백업)
- 외부 데이터 모를 때 → TECHNIQUE-3 (원본 공유)

