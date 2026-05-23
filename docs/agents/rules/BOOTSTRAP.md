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

## 디버깅 시나리오 사용법

본 시나리오들은 `.claude/skills/debug/SKILL.md` 가 호출. 사용자가 `"X 안 됨"` / `"이거 디버깅해줘"` 같이 요청하면:

1. Claude 가 증상으로 DEBUG-N 식별 (위 15 카테고리 중)
2. 해당 시나리오의 디버깅 순서 따름
3. **시나리오가 절대 아님** — 진행 중 더 나은 방법 발견 시 그 방식으로 진행
4. 해결 후 → 새 시나리오로 등재 가치 있으면 사용자에게 제안 (BOOTSTRAP DEBUG-N 추가)

