# 부트스트랩 사용법 (Bootstrap Usage Guide)

> **본 문서는 사람이 직접 읽는 사용 설명서.** `.claude/rules/BOOTSTRAP.md` 의 시나리오들을 어떻게 사용하는지 설명.
> BOOTSTRAP 시나리오는 Claude 가 따라가는 step-by-step. 본 문서는 사람이 그 시나리오를 어떻게 트리거하고 활용하는지 안내.

---

## 부트스트랩 시나리오 구조

`.claude/rules/BOOTSTRAP.md` 는 세 부분:

1. **신규 프로젝트 적용 시나리오** (STEP 0~8) — 새 프로젝트에 본 하네스 적용 시 Claude 가 진행
2. **디버깅 시나리오 모음** (DEBUG-1 ~ DEBUG-15) — 회귀·오류 발생 시 Claude 가 따라가는 패턴
3. **효과적 디버깅·협업 기법** (TECHNIQUE-1 ~ TECHNIQUE-7) — Claude 가 막히거나 정보 부족 시 활용

---

## 사용법 1: 신규 프로젝트 적용 시나리오

### 트리거
```
사용자 → Claude: "이 하네스 적용해줘. 내 프로젝트는 [도메인]"
```

`.claude/skills/onboard/SKILL.md` 가 자동 인식 → BOOTSTRAP 시나리오 STEP 0 부터 진행.

### Claude 가 자동 진행하는 8 STEP
| STEP | Claude 액션 | 사용자 액션 |
|---|---|---|
| 0. 환경 확인 | `.claude/` 디렉토리 검증 | ZIP 풀고 chmod 실행 |
| 1. 도메인 인터뷰 | 6 질문 (도메인/소스/카테고리/시각/KPI/이메일) | **6 질문 답변** |
| 2. 도메인 파일 | `categoryMap.js` 자동 생성 | 생성된 파일 확인 |
| 3. 데이터 모델 | `SHEET_NAMES` + parser 작성 | 시트 헤더 알려주기 |
| 4. 디자인 토큰 | `dashboardConsts.js` 갱신 | 브랜드 색상·폰트 알려주기 |
| 5. 외부 시스템 | `.env.example` 작성 | 자격 증명 본인 입력 |
| 6. 비즈니스 fact | `DEFAULT_XXX` 객체 정의 | "데이터 무관 룰" 알려주기 |
| 7. 첫 빌드 + 검증 | `npm test / build / start` | 브라우저로 확인 |
| 8. 반복 / 확장 | 후속 작업 패턴 안내 | 신규 작업 시 해당 스킬 사용 |

### 사용자가 알아야 할 것
- Claude 가 STEP 1 에서 멈추고 6 질문 — 답변할 때까지 다음으로 진행 X
- 도메인에 따라 STEP 5 (외부 시스템) 일부 생략 가능 (예: 이메일 안 보내면 SMTP 생략)
- STEP 7 검증 체크리스트는 본 문서 §검증 체크리스트 참조

---

## 사용법 2: 디버깅 시나리오 호출

### 트리거
```
사용자 → Claude: "X 안 됨" / "이거 디버깅해줘" / "fix" / "오류" / "회귀"
```

`.claude/skills/debug/SKILL.md` 가 자동 인식 → BOOTSTRAP 의 DEBUG-N 중 매칭 찾음.

### 15 디버깅 카테고리

| # | 영역 | 시나리오 명 |
|---|---|---|
| **DEBUG-1** | 디자인 | 베이스라인 / 라벨 위치 미세 조정 |
| **DEBUG-2** | 디자인 | 컨테이너 너비 / iframe 클립 |
| **DEBUG-3** | 데이터 | 날짜 파싱 정렬 깨짐 |
| **DEBUG-4** | 데이터 | MoM 계산 정합성 |
| **DEBUG-5** | 디자인 | 좁은 셀 짤림 |
| **DEBUG-6** | 데이터+디자인 | 미출시 / DEFAULT 처리 |
| **DEBUG-7** | AI | 인사이트 호출 실패 |
| **DEBUG-8** | 데이터 | 시트 동기화 에러 |
| **DEBUG-9** | 데이터 | Citation 도메인 layout |
| **DEBUG-10** | 디자인 | 카드 범례 / 디자인 일치 |
| **DEBUG-11** | 디자인+데이터 | 필터 시 차트 갱신 |
| **DEBUG-12** | 디자인 | 다국어 / 약어 |
| **DEBUG-13** | 데이터 | 카테고리 매핑 회귀 |
| **DEBUG-14** | 코드 | 거대 함수 분할 |
| **DEBUG-15** | 데이터 | silent fallback |

### Claude 의 진행 방식
1. 증상으로 15 카테고리 중 매칭
2. 해당 시나리오의 디버깅 순서 따름 (보통 5~6 step)
3. **시나리오는 가이드 — 더 나은 방법 발견 시 그 방식으로 진행 가능**
4. 해결 후 → 새 패턴이면 BOOTSTRAP 등재 제안

### 사용자가 도와줄 것
- 증상 명확히 보고 (어떤 화면에서 무엇이 안 되는지)
- Claude 가 진단 질문 하면 답변 (예: "시트 첫 5행 어떻게 생겼어요?")
- 수정 후 시각 검증 (KO/EN 양쪽)

---

## 사용법 3: 효과적 디버깅·협업 기법 (TECHNIQUES)

Claude 가 디버깅 / 디자인 / 데이터 작업 시 자동 활용하는 7 기법. 사용자가 적극적으로 도와줄 수 있는 패턴.

| # | 기법 | 언제 사용 | 사용자 액션 |
|---|---|---|---|
| **TECHNIQUE-1** | 임시 로그 창 (데이터) | 데이터 오류 / 파싱 결과 의심 | Claude 가 만든 임시 영역 텍스트 복사 → 채팅 붙여넣기 |
| **TECHNIQUE-2** | Chrome 콘솔 로그 + 복사 | console.log 출력 중 / 임시 창 부담 | Chrome 콘솔 (Cmd+Opt+J / F12) → 명령 실행 → 결과 복사 |
| **TECHNIQUE-3** | 원본 데이터 직접 공유 | 외부 데이터 (시트/DB/API) 모를 때 | 엑셀: 헤더+1~5행 복사 / DB: 스키마+샘플 / API: URL+응답 예시 |
| **TECHNIQUE-4** | 디자인 레이아웃 스케치 + 스크린샷 | 신규 디자인 작업 시작 | 손그림 사진 / Claude 디자인 초안 / 부분 소스코드 (웹앱 채팅) |
| **TECHNIQUE-5** | 백업 + 정리 안내 | 큰 변경 전 (리팩터링/디자인 전환) | 회사 외부: GitHub / 회사 내부: 로컬 cp -r 또는 zip |
| **TECHNIQUE-6** | 데이터 스키마 사전 학습 | 그래프 / 차트 작업 전 | 객체 키 구조 / 배열 길이/정렬 / null 여부 / 단위 공유 |
| **TECHNIQUE-7** | 컴포넌트 이름 + 픽셀 단위 명령 | 디자인 미세 조정 | "Hero 카드 padding +5px" 같은 명확한 명령 (모호한 "좀 더" X) |

### Claude 디자인 / 다른 LLM 활용 (TECHNIQUE-4 상세)
디자인 시작 전 다른 도구로 미리 초안 만들어서 가져오는 패턴:
- **claude.ai/design** (또는 다른 LLM) 으로 의도하는 형태 상의 → HTML/SVG 초안 → 본 채팅에 붙여넣기
- 본 프로젝트의 토큰 (FONT/RED) 으로 Claude 가 맞춰서 적용
- ⚠ 스크린샷은 **웹앱 Claude 서비스 채팅** 에서만 (터미널 CLI 는 텍스트만)

### Chrome 콘솔 처음 사용자 (TECHNIQUE-2 상세)
| OS | 단축키 | 대안 |
|---|---|---|
| Mac | Cmd + Option + J | F12 → Console 탭 |
| Windows / Linux | Ctrl + Shift + J | F12 → Console 탭 |
| 모든 OS | — | 페이지 우클릭 → "검사" → Console 탭 |

콘솔에서 자주 쓰는 명령:
```js
// 데이터 확인
_productsCnty.find(r => r.country === 'US')
_unlaunchedMap
_filteredMonthlySeries('tv', ['US'])

// JSON 정렬 출력
JSON.stringify(<data>, null, 2)
```

---

## 도메인 예시 — 부트스트랩 시 참고

본 하네스는 도메인 무관 일반 패턴. 다음 3 예시로 본인 도메인 매핑 시 감 잡기.

### 예시 A: 매출 대시보드

| 항목 | 값 |
|---|---|
| **도메인** | 지역별 / 제품별 / 분기별 매출 |
| **카테고리** | `REGION_IDS = ['kr', 'us', 'eu', 'jp']` |
| **시각 단위** | 분기 (Q1~Q4) |
| **KPI** | 매출 ($), 성장률 (%), 신규 고객 수 |
| **차트 사용** | `L-1` 매출 시계열 · `M-1` 매출 bar + 성장률 line · `D-1` 지역별 비중 · `V-1` 분기×지역 |

### 예시 B: HR 대시보드

| 항목 | 값 |
|---|---|
| **도메인** | 부서별 / 직급별 KPI |
| **카테고리** | `DEPT_IDS = ['eng', 'sales', 'marketing', 'hr', 'ops']` |
| **시각 단위** | 월 |
| **KPI** | 만족도 점수 (%), 이직률 (%), 신규 채용 수 |
| **차트 사용** | `L-5` 만족도 트렌드 + 기준점 fade · `R-1` 부서 다차원 비교 · `BU-2` 4분면 |

### 예시 C: 제품 사용량 대시보드

| 항목 | 값 |
|---|---|
| **도메인** | 기능별 / 사용자 세그먼트별 사용량 |
| **카테고리** | `FEATURE_IDS = ['search', 'export', 'share', 'edit', 'view']` |
| **시각 단위** | 주 |
| **KPI** | 사용 횟수, 리텐션 (%), 평균 세션 시간 |
| **차트 사용** | `L-7` 다중 라인 기능별 · `B-1` 세그먼트 누적 · `BP-1` 기능 순위 변화 · `HB-1` Top 10 |

---

## 검증 체크리스트 (STEP 7 후)

### 인프라
- [ ] `npm install` 성공
- [ ] `npm test` 통과 (categoryMap invariant 포함)
- [ ] `npm run build` 성공
- [ ] `npm start` → `/admin` 로그인 가능

### 어드민 UI
- [ ] 메뉴 3단 구조 정상
- [ ] `/admin/harness` — 본 프로젝트 룰/훅/스킬 노출
- [ ] `/admin/chart-library` — 21 분류 코드 + 본인 토큰 적용
- [ ] `/admin/observability` — Sync Health 섹션

### 데이터 동기화
- [ ] 첫 동기화 실행
- [ ] `verifySyncResult` issues 0 (또는 의도된 케이스)
- [ ] Sync Health 표시

### 훅 동작
- [ ] `syntax-check.sh` — src/*.js 수정 시 검증 동작
- [ ] `block-dist.sh` — dist-* 수정 시 차단

### Claude Code 연동
- [ ] `CLAUDE.md` 자동 로드
- [ ] 스킬 frontmatter 트리거 동작
- [ ] 서브에이전트 위임 가능

---

## 트러블슈팅

| 증상 | 원인 | 해결 |
|---|---|---|
| Claude 가 룰 안 읽음 | `.claude/` 디렉토리 잘못된 위치 | 프로젝트 루트에 있는지 확인 |
| 훅이 실행 안 됨 | `chmod +x` 안 했음 | `chmod +x .claude/hooks/*.sh` |
| `categoryMap invariant` 테스트 실패 | 신규 id 추가 시 매핑 일부 누락 | 4종 매핑 모두 등재 확인 |
| 어드민 페이지 안 보임 | `ADMIN_PASSWORD` env 미설정 | `.env` 에 `ADMIN_PASSWORD=xxx` |
| 차트 안 그려짐 | 토큰 미정의 또는 import 누락 | `dashboardConsts.js` 확인 |
| 이메일 우측 잘림 | `containerWidth > 940` | 940 이하 (NEVER 룰) |
| iframe 안 차트 클립 | `body { overflow-x:hidden }` 또는 `min-width` | 두 속성 제거 (NEVER 룰) |
| dist-* 수정 시도 시 차단 | `block-dist.sh` 정상 동작 | src/ 원본 수정 |
| 색상 하드코딩 발견 | 토큰 미사용 | `BRAND_COLORS / STATUS` import |

증상이 BOOTSTRAP 의 15 디버깅 카테고리 중 하나면 Claude 에게 그대로 보고 — 자동 처리.

---

## FAQ

### Q1. 본 하네스 적용 후 어디서부터 작업?
A. Claude 에게 다음 4 패턴 중 하나로 요청:
- `"신규 시트 X 추가해줘"` → 데이터 스킬
- `"신규 카테고리 Y 추가"` → categoryMap 갱신
- `"L-1 차트 그려줘"` 또는 다른 분류 코드 → 디자인 스킬
- `"이 회귀 디버깅 해줘"` → 디버깅 스킬 (DEBUG-N 매칭)

### Q2. 본 하네스를 본인 도메인에 추상화하려면?
A. `.claude/skills/onboard/SKILL.md` 의 "도메인 추상화 검토" 워크플로우.

### Q3. 신규 룰 / 훅 / 스킬 추가?
A. `.claude/skills/onboard/SKILL.md` 의 "신규 하네스 추가" 워크플로우.

### Q4. 다른 프로젝트에 다시 적용?
A. `/admin/harness` ZIP 다운로드 → 대상 프로젝트 루트에 풀고 `chmod` → Claude 에게 `"이 하네스 적용해줘"`.

### Q5. 디버깅 시나리오 (DEBUG-N) 외 증상 발견?
A. 일반 5단계 ERROR CATCHING 적용. 3회+ 반복되는 패턴이면 BOOTSTRAP 에 DEBUG-N+1 등재 가치 — Claude 가 제안할 것.

### Q6. 시나리오는 절대 따라야 하나?
A. 아니. **가이드일 뿐**. 시나리오 진행 중 더 나은 방법 발견 시 그 방식으로 진행. Claude 가 발견 시 사용자에게 보고.

---

## 참고 문서

- **헌법** — `CLAUDE.md`
- **부트스트랩 시나리오 (Claude 용)** — `.claude/rules/BOOTSTRAP.md`
- **룰 매뉴얼** — `.claude/rules/data.md` · `design.md` · `ai.md`
- **스킬 워크플로우** — `.claude/skills/data/SKILL.md` · `design/SKILL.md` · `onboard/SKILL.md` · `debug/SKILL.md`
- **훅** — `.claude/hooks/README.md`
- **차트 라이브러리** — `/admin/chart-library` · `docs/agents/CHART_LIBRARY.html`
- **하네스 개요** — `docs/agents/HARNESS.md` · `HARNESS.html`
