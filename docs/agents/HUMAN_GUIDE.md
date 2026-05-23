# Human Guide — 사람용 참조 자료

> 본 문서는 **사람이 직접 읽는** 참조 자료. 도메인 예시 · 트러블슈팅 · 검증 체크리스트.
> Claude 가 따라가는 시나리오는 `.claude/rules/BOOTSTRAP.md`.
> 사용자가 `"이 하네스 적용해줘"` 하면 Claude 가 BOOTSTRAP 시나리오 진행 + 필요 시 본 문서의 자료 참조 안내.

---

## 사전 준비 체크리스트

```bash
# 1) ZIP 풀기 (대상 프로젝트 루트에서)
unzip harness-mirror-YYYY-MM-DD.zip

# 2) 훅 실행 권한
chmod +x .claude/hooks/*.sh
```

확인:
- [ ] `CLAUDE.md` 가 프로젝트 루트에 있나
- [ ] `.claude/settings.json` 의 `hooks` 필드 정상
- [ ] `.claude/rules/` · `.claude/skills/` · `.claude/agents/` 디렉토리 존재
- [ ] `docs/agents/` 미러 디렉토리 존재

---

## 도메인 예시 3개 — 본 하네스 적용 시 참고

본 하네스는 도메인 무관 일반 패턴. 다음 3 예시로 본인 도메인에 어떻게 적용할지 감 잡으세요.

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
| **차트 사용** | `L-5` 만족도 트렌드 + 기준점 fade · `R-1` 부서 다차원 비교 · `BU-2` 4분면 (impact × effort) |

### 예시 C: 제품 사용량 대시보드

| 항목 | 값 |
|---|---|
| **도메인** | 기능별 / 사용자 세그먼트별 사용량 |
| **카테고리** | `FEATURE_IDS = ['search', 'export', 'share', 'edit', 'view']` |
| **시각 단위** | 주 |
| **KPI** | 사용 횟수, 리텐션 (%), 평균 세션 시간 |
| **차트 사용** | `L-7` 다중 라인 기능별 · `B-1` 세그먼트 누적 · `BP-1` 기능 순위 변화 · `HB-1` Top 10 |

각 예시는 본 하네스의 일반 패턴 + 도메인 특화만 다른 형태. Claude 가 BOOTSTRAP 시나리오 진행 시 본인 도메인을 위 예시 중 하나에 매핑 가능.

---

## 검증 체크리스트 (BOOTSTRAP STEP 7 후 확인)

### 인프라
- [ ] `npm install` 성공
- [ ] `npm test` 통과 (categoryMap invariant 포함 — 모든 ID 가 4종 매핑에 등재)
- [ ] `npm run build` 성공 (산출물 생성)
- [ ] `npm start` → 서버 시작 → `/admin` 로그인 가능

### 어드민 UI
- [ ] 메뉴 3단 구조 (게시·콘텐츠 / 공통 인프라+DB / 하네스) 정상
- [ ] `/admin/harness` — 본 프로젝트 룰/훅/스킬/서브에이전트 모두 노출 (14+ 컴포넌트)
- [ ] `/admin/chart-library` — 21 분류 코드 (L-1~T-1) 카드 정상 + 본인 토큰 (브랜드 색상) 적용 확인
- [ ] `/admin/observability` — Sync Health 섹션 (verifySyncResult 결과 표시)

### 데이터 동기화
- [ ] 데이터 소스에서 첫 동기화 (`/admin/<mode>` 의 "데이터 동기화" 또는 동등 버튼)
- [ ] `verifySyncResult` 가 issues 0 (또는 의도된 케이스만)
- [ ] `localStorage.syncDiagnostics` 에 기록 — `/admin/observability` 의 Sync Health 표시

### 훅 동작
- [ ] `.claude/hooks/syntax-check.sh` — src/*.js 수정 시 신택스 검증 동작
- [ ] `.claude/hooks/block-dist.sh` — dist-* 직접 수정 시 차단

### Claude Code 연동
- [ ] Claude Code 가 `CLAUDE.md` 자동 로드 (헌법)
- [ ] `.claude/skills/<name>/SKILL.md` 의 frontmatter description 으로 Claude 가 트리거 시 로드
- [ ] `.claude/agents/data-puller.md` 위임 가능 (사용자가 "데이터 진단해줘" 같이 요청 시)

---

## 트러블슈팅

| 증상 | 원인 | 해결 |
|---|---|---|
| Claude 가 룰 안 읽음 | `.claude/` 디렉토리 누락 또는 잘못된 위치 | 프로젝트 루트에 있는지 확인 (하위 디렉토리 X) |
| 훅이 실행 안 됨 | `chmod +x` 안 했음 | `chmod +x .claude/hooks/*.sh` |
| `categoryMap invariant` 테스트 실패 | 신규 id 추가 시 매핑 일부 누락 | 4종 매핑 (KR/EN/CODE/GROUP) 모두 등재 확인 |
| 어드민 페이지 안 보임 | `ADMIN_PASSWORD` env 미설정 | `.env` 에 `ADMIN_PASSWORD=xxx` 추가 |
| 차트 안 그려짐 | 토큰 (FONT/RED 등) 미정의 또는 import 누락 | `dashboardConsts.js` 토큰 정의 확인 + import 경로 |
| 이메일 짤림 (우측 잘림) | `containerWidth > 940` | 940 이하로 (`.claude/rules/design.md` NEVER 룰) |
| iframe 안 차트 클립됨 | `body { overflow-x:hidden }` 또는 `min-width` 추가됨 | 두 속성 제거 (NEVER 룰) |
| Claude 가 dist-* 수정 시도 | block-dist.sh 가 차단 — 정상 동작 | 빌드 산출물 대신 src/ 원본 수정 |
| 색상 하드코딩 발견 | 토큰 (BRAND_COLORS/STATUS) 미사용 | `dashboardConsts.js` 에서 import 후 사용 |

---

## 자주 묻는 질문 (FAQ)

### Q. 본 하네스를 적용한 후 어디서부터 작업을 시작해야 하나요?
A. Claude 에게 다음 4 가지 패턴 중 하나로 요청:
- `"신규 시트 X 추가해줘"` → 데이터 스킬 워크플로우 자동 진행
- `"신규 카테고리 Y 추가"` → categoryMap 갱신 + invariant 검증
- `"L-1 차트 그려줘"` (또는 다른 분류 코드) → 디자인 스킬 진행
- `"이 회귀 디버깅 해줘"` → TDD 워크플로우

### Q. 본 하네스를 본인 도메인에 맞게 추상화하고 싶어요.
A. `.claude/skills/onboard/SKILL.md` 의 "도메인 추상화 검토" 워크플로우 5 step 참조.

### Q. 신규 룰 / 훅 / 스킬을 추가하려면?
A. `.claude/skills/onboard/SKILL.md` 의 "신규 하네스 추가" 워크플로우 5 step 참조.

### Q. 다른 프로젝트에 다시 적용하려면?
A. 본 프로젝트의 `/admin/harness` 에서 ZIP 다운로드 → 대상 프로젝트 루트에 풀기 → `chmod +x .claude/hooks/*.sh` → Claude 에게 `"이 하네스 적용해줘"`.

---

## 참고 문서

- 헌법 — `CLAUDE.md`
- 룰 매뉴얼 — `.claude/rules/data.md` · `design.md` · `ai.md`
- 스킬 워크플로우 — `.claude/skills/data/SKILL.md` · `design/SKILL.md` · `onboard/SKILL.md`
- 훅 — `.claude/hooks/README.md`
- 부트스트랩 시나리오 (Claude 용) — `.claude/rules/BOOTSTRAP.md`
- 전체 하네스 개요 — `docs/agents/HARNESS.md` / `HARNESS.html`
- 차트 라이브러리 — `/admin/chart-library` 또는 `docs/agents/CHART_LIBRARY.html`
