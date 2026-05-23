# 부트스트랩 가이드 (Bootstrap)

> 새 프로젝트에 본 하네스를 적용할 때 따라가는 순서. ZIP 풀기 → 도메인 정의 → 첫 빌드.
> 사용자가 `"이 하네스 적용해줘. 내 프로젝트는 ..."` 라고 요청하면 Claude 가 본 문서 + `onboard` 스킬을 따름.

---

## 0. 사전 준비 (5분)

```bash
# 1) ZIP 풀기 (대상 프로젝트 루트에서)
unzip harness-mirror-YYYY-MM-DD.zip

# 2) 훅 실행 권한
chmod +x .claude/hooks/*.sh

# 3) Claude Code 가 자동 로드 — 별도 등록 X
```

확인:
- `CLAUDE.md` 가 프로젝트 루트에 있나
- `.claude/settings.json` 의 `hooks` 필드 정상인지
- `.claude/rules/` · `.claude/skills/` · `.claude/agents/` 디렉토리 존재

---

## 1. 도메인 인터뷰 (Claude 가 사용자에게 질문)

**Claude 의 첫 액션**: 사용자에게 다음 6 질문 (한 번에 또는 단계별):

1. **프로젝트 도메인**: 어떤 비즈니스 영역? (예: 매출 / HR / 제품 사용량 / 마케팅 KPI / ...)
2. **데이터 소스**: 어디서 데이터 가져오나? (Google Sheets / 자체 API / BigQuery / 정적 JSON / ...)
3. **카테고리 / 분류**: 데이터의 주요 그룹? (예: 제품군, 부서, 채널, 지역, ...)
4. **시각 단위**: 시간 (일/주/월/분기) + 그룹 (국가/제품/팀)
5. **KPI 종류**: 측정하는 지표? (점수%, 카운트, 비율, 비용$)
6. **이메일 발송 여부**: 뉴스레터 / 리포트 메일 보내나? (table-layout 호환 필요 여부)

사용자 답변을 메모 → step 2 부터 사용.

---

## 2. 도메인 파일 생성 — `src/categoryMap.js` (또는 동등 single source)

본 레포에서는 `categoryMap.js` 가 다음을 정의:
- `PROD_IDS` — canonical id 목록
- `PROD_ID_TO_KR / EN / UL_CODE / BU` — 표시명 / 영문 / 코드 / 그룹

**새 프로젝트 적용**:
1. 도메인에 맞게 이름 변경 (`PROD_IDS` → `CATEGORY_IDS` 또는 `DEPT_IDS` 등)
2. step 1 의 카테고리 답변을 그대로 매핑
3. 추가 매핑 필요 시 (예: 한글/영문/약어 → id 역매핑)
4. `assertCategoryMapInvariant()` 같은 invariant 함수 신설 — 신규 id 추가 시 모든 매핑 갱신 강제

```js
// 예시: 매출 대시보드
export const REGION_IDS = ['kr', 'us', 'eu', 'jp', 'cn']
export const REGION_TO_KR = { kr: '한국', us: '미국', eu: '유럽', jp: '일본', cn: '중국' }
export const REGION_TO_EN = { kr: 'KR', us: 'US', eu: 'EU', jp: 'JP', cn: 'CN' }
```

---

## 3. 데이터 모델 정의 — `src/excelUtils.js` (또는 동등 파서)

본 레포 구조:
- `SHEET_NAMES` 상수 (탭 이름 목록)
- `parseSheetRows` 라우터 (`switch` 로 탭별 파서 호출)
- `parseXxx` 함수 각각 (헤더 자동 탐지 → row 처리 → 결과 객체)
- 5단계 ERROR CATCHING (DETECT / CLASSIFY / CAPTURE / RECOVER / SURFACE)
- 공통 헬퍼 (`assertRows`, `findHeaderIdx`, `_logWarn`, `forEachRowSafe`)

**새 프로젝트 적용**:
1. 데이터 소스 시트별로 `SHEET_NAMES` 등재
2. 각 시트의 헤더 구조 명시 (예: "Country / Date / Category / KPI1 / KPI2")
3. `parseXxx` 함수 작성 — `.claude/skills/data/SKILL.md` 의 "신규 시트 추가" 워크플로우 8 step 따름
4. invariant 자동 검증 (`assertCategoryMapInvariant` 같은)

---

## 4. 디자인 토큰 변경 — `src/dashboard/dashboardConsts.js`

본 레포 토큰:
- `FONT = "'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif"` (LG 브랜드 폰트)
- `RED = '#CF0652'` (LG 브랜드)
- `COMP = '#94A3B8'` (경쟁사 회색)
- `BRAND_COLORS = { LG: RED, Samsung: '#3B82F6', ... }` (특정 브랜드 색)
- `STATUS` 토큰 (lead / behind / critical)

**새 프로젝트 적용**:
1. `FONT` 를 새 브랜드 폰트로 (또는 시스템 폰트로 fallback)
2. `RED` 를 새 브랜드 primary 색으로
3. `BRAND_COLORS` 를 새 도메인 그룹 색상 (`{ Apple: '#000', Google: '#4285F4', ... }`)
4. `STATUS` 토큰은 그대로 유지 (lead/behind/critical 의미는 도메인 무관)
5. `docs/agents/CHART_LIBRARY.html` 의 SVG 미니어처에서도 토큰 사용 확인

---

## 5. 외부 시스템 자격 증명 — `.env`

본 레포 환경 변수:
- `ADMIN_PASSWORD` — 어드민 페이지 로그인
- `ANTHROPIC_API_KEY` — AI 인사이트 생성 (사용 안 하면 생략)
- `SMTP_USER / SMTP_PASS` — 이메일 발송 (사용 안 하면 생략)
- `GOOGLE_SHEETS_PROXY` (있으면) — gviz/tq csv proxy URL

**새 프로젝트 적용**:
1. `.env.example` 작성 — 필요한 env 명세
2. `.env` (실제 값) 는 `.gitignore` 에 등재
3. 사용 안 하는 시스템 env 제거 (예: SMTP 안 쓰면 `routes/email.js` 제거)
4. AI 사용 시 — `.claude/rules/ai.md` 의 N3 검증·비용 추적·observability 자동 적용

---

## 6. 비즈니스 fact 등록

본 레포 `DEFAULT_UNLAUNCHED = { 'BR|AV': true, ... }` 같이 시트 무관 비즈니스 fact.

**새 프로젝트 적용**:
1. 도메인에 맞는 fact 식별 — 사용자에게 질문:
   - "데이터에 없어도 항상 적용되어야 할 룰이 있나요?" (예: "특정 채널은 항상 제외", "특정 제품은 미출시")
2. 적절한 파일에 `DEFAULT_XXX` 객체 정의 (예: `parseUnlaunched` 안)
3. 파서 시작 시 디폴트 spread → 시트 데이터로 추가 / 덮어쓰기 (§5.8 패턴)

---

## 7. 첫 빌드 + 검증

```bash
npm install
npm test          # 모든 invariant 통과 확인
npm run build     # 빌드 산출물 생성
npm start         # 서버 시작 → /admin 로그인 → 대시보드 확인
```

검증 체크리스트:
- [ ] `categoryMap` invariant 통과 (테스트)
- [ ] `parseSheetRows` 가 새 시트 모두 처리 (verifySyncResult 통과)
- [ ] 어드민 페이지 로드 (3단 메뉴 정상)
- [ ] `/admin/harness` 페이지 — 본인의 룰/훅/스킬 노출 확인
- [ ] `/admin/chart-library` — 차트 분류 코드 + 토큰 적용 확인
- [ ] 훅 동작 (`.claude/hooks/syntax-check.sh` + `block-dist.sh`)

---

## 8. 반복 / 확장

신규 작업마다:
- 시트 추가 → `.claude/skills/data/SKILL.md` "신규 시트 추가" 워크플로우
- 카테고리 추가 → "신규 카테고리 추가" 워크플로우
- 차트 추가 → `"L-1 그려줘"` 같은 분류 코드 호출 (`.claude/skills/design/SKILL.md`)
- 회귀 발견 → "회귀 디버깅 (TDD)" 워크플로우

---

## 도메인 예시 3개 (참고)

### 예시 A: 매출 대시보드

- **도메인**: 지역별 / 제품별 / 분기별 매출
- **카테고리**: `REGION_IDS = ['kr', 'us', 'eu', 'jp']`
- **시각 단위**: 분기 (Q1~Q4)
- **KPI**: 매출 ($), 성장률 (%), 신규 고객 수
- **차트 사용**:
  - `L-1` 매출 시계열 (분기별 라인)
  - `M-1` 매출 bar + 성장률 line
  - `D-1` 지역별 매출 비중 (도넛)
  - `V-1` 분기 × 지역 그룹 막대

### 예시 B: HR 대시보드

- **도메인**: 부서별 / 직급별 KPI
- **카테고리**: `DEPT_IDS = ['eng', 'sales', 'marketing', 'hr', 'ops']`
- **시각 단위**: 월
- **KPI**: 만족도 점수 (%), 이직률 (%), 신규 채용 수
- **차트 사용**:
  - `L-5` 만족도 트렌드 + 기준점 fade (정책 변경 시점)
  - `R-1` 부서별 다차원 metric 비교 (만족도/협업/성장 등)
  - `BU-2` 4분면 (impact × effort)

### 예시 C: 제품 사용량 대시보드

- **도메인**: 기능별 / 사용자 세그먼트별 사용량
- **카테고리**: `FEATURE_IDS = ['search', 'export', 'share', 'edit', 'view']`
- **시각 단위**: 주
- **KPI**: 사용 횟수, 리텐션 (%), 평균 세션 시간
- **차트 사용**:
  - `L-7` 다중 라인 (기능별 사용량)
  - `B-1` 세그먼트별 누적 (Free / Pro / Enterprise)
  - `BP-1` 인기 기능 순위 변화 (월별 범프)
  - `HB-1` Top 10 가장 많이 쓰인 기능

각 예시는 본 하네스의 일반 패턴 + 도메인 특화 부분만 다른 형태.

---

## 트러블슈팅

| 증상 | 원인 | 해결 |
|---|---|---|
| Claude 가 룰 안 읽음 | `.claude/` 디렉토리 누락 / 다른 위치 | 프로젝트 루트에 있는지 확인 |
| 훅이 실행 안 됨 | `chmod +x` 안 했음 | `chmod +x .claude/hooks/*.sh` |
| `categoryMap invariant` 테스트 실패 | 신규 id 추가 시 매핑 일부 누락 | 4종 매핑 (KR/EN/UL/BU) 모두 등재 |
| 어드민 페이지 안 보임 | `ADMIN_PASSWORD` env 미설정 | `.env` 에 `ADMIN_PASSWORD=xxx` |
| 차트 안 그려짐 | 토큰 (FONT/RED 등) 미정의 | `dashboardConsts.js` 토큰 정의 확인 |
| 이메일 짤림 | `containerWidth > 940` | 940 이하로 (`design.md` NEVER 룰) |

자세한 룰: `.claude/rules/data.md` · `design.md` · `ai.md` · `CLAUDE.md`
