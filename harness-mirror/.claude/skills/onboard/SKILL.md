---
name: onboard
description: '새 프로젝트에 HIRO 하네스 적용하는 8 step 부트스트랩 (인터뷰 → 도메인 파일 → 데이터 모델 → 디자인 토큰 → 외부 시스템 → 빌드 검증). 본 하네스를 다른 신규 프로젝트에 처음 셋업할 때 호출. 트리거: "이 하네스 적용해줘" / "내 프로젝트에 셋업해줘" / "HIRO 적용" / "부트스트랩 진행" 같은 요청.'
---

# Onboard — 새 프로젝트 하네스 적용 워크플로우

> 사용자가 ZIP 받아서 다른 프로젝트에 적용 요청 시 본 Skill 사용.
> Rule 매뉴얼 (시나리오 상세): `.claude/rules/BOOTSTRAP.md` 참조.
>
> **핵심 약속**: 사용자는 변수명·코드 한 줄 안 봐도 됨. **데이터만 보여주면** Claude 가 도메인 추론 + 파일 자동 생성.

---

## skill: 하네스 적용 (부트스트랩) — 데이터-주도

```
[STEP 0] 사전 확인:
  · CLAUDE.md / AGENTS.md / .claude/ / harness-mirror/ 디렉토리 프로젝트 루트에 있나
  · chmod +x .claude/hooks/*.sh 실행됐나 (실행 권한)
  · npm install / package.json 확인

[STEP 1] 도메인 의도 인터뷰 (Claude → 사용자, 2 질문만):
  🐈‍⬛ 히로:
    a) "어떤 분야의 대시보드 만들고 싶으세요? (예: 매출 / HR / 제품 사용량 /
       마케팅 KPI / 의료 / 교육 / 기타)"
    b) "이메일 발송 (월간/주간 리포트 메일) 도 필요한가요?"

  ↓ 사용자 답변

[STEP 2] 데이터 보여주기 (사용자 → Claude, 1 요청 — 핵심 step):
  🐈‍⬛ 히로:
    "시각화하고 싶은 데이터의 헤더 + 1~5행 그대로 복사해서 붙여주세요.
     - 엑셀/Sheets: 위 5행 복사 → 채팅에 붙여넣기
     - DB: 컬럼 명세 + 샘플 row 1-3개
     - API: endpoint + 응답 JSON 예시
     민감 정보는 마스킹 후 공유."

  ↓ 사용자가 데이터 붙여넣음

  Claude 자동 분석 (사용자 모르게):
    · 헤더 + 샘플 값 → 차원 분류 (카테고리 / 시간 / KPI / 비교)
    · 도메인 추론 (컬럼명 + 값 → 분야)
    · 차트 분류 코드 자동 매칭 (.claude/rules/design.md §5.15)
    · 데이터 정책 결정 (null / "-" / 단위 정규화)

  Claude → 사용자 추론 결과 확인:
    "데이터 분석했어요. 맞나요?
     - 도메인: <추론>
     - 카테고리: <차원별 unique 값>
     - 시간 단위: <감지>
     - KPI: <목록 + 단위>
     - 만들 차트: <분류 코드 목록>
     맞으면 '응' / 수정 필요하면 알려주세요."

[STEP 3] 자동 생성 (Claude → 파일):
  사용자 확인된 분석 결과 기반:
  · single source 매핑 파일 (categoryMap.js 또는 도메인 이름) 자동 생성
  · 데이터 파서 + 5단계 ERROR CATCHING 자동 적용
  · 차트 컴포넌트 (매칭된 분류 코드 — L-1, D-1, BP-1 등)
  · invariant 자동 검증 헬퍼 1개

  사용자에게 보고: 생성된 파일 목록 + 다음 STEP 안내.

[STEP 4-PRE] 디자인 시작 전 레이아웃 공유 (선택):
  대시보드 시각 의도 모호하면 TECHNIQUE-4 — 사용자에게 손그림/HTML 초안 요청.

[STEP 4] 디자인 토큰 (Claude → 사용자, 1 질문):
  🐈‍⬛ 히로:
    "회사 색상 / 폰트 알려주세요. 없으면 기본 사용.
     - Primary 색상 (강조용)
     - 비교군 회색 (default)
     - 그룹별 색상 (있다면)
     - 폰트 (없으면 시스템 fallback)"

  ↓ Claude 가 디자인 토큰 파일 자동 생성 (BRAND_COLORS / FONT / STATUS 등)

[STEP 5] 외부 시스템 자격증명 (Claude → 사용자, 필요시만):
  데이터 소스 / AI 사용 / 이메일 발송 여부에 따라:
  · ADMIN_PASSWORD (필수)
  · 데이터 소스별 자격증명 (Google Sheets API key / DB url / API token)
  · AI 사용 시 ANTHROPIC_API_KEY
  · 이메일 발송 시 SMTP_USER / SMTP_PASS

  Claude 가 .env.example 작성. 실제 값은 사용자가 .env 에 (gitignore).

[STEP 6] 비즈니스 fact (Claude → 사용자, 1 질문):
  🐈‍⬛ 히로:
    "데이터에 없어도 항상 적용되어야 할 규칙 있나요?
     예: 특정 채널 항상 제외 / 특정 카테고리 미출시 / KPI 임계값"

  ↓ Claude 가 DEFAULT_XXX 객체 자동 정의 (파서 시작 시 spread).

[STEP 7] 첫 빌드 + 검증:
  · npm install / npm test (invariant 자동 검증)
  · npm run build / npm start
  · /admin 로그인 → 어드민 메뉴 노출 확인
  · /admin/harness 페이지 — 본 프로젝트 Rule/Hook/Skill 등록 확인
  · 데이터 동기화 1회 — verifySyncResult 결과 확인

[STEP 8] 반복 / 확장 — 이후 작업은 해당 sub-skill 위임:
  · 시트 추가 → data-add skill
  · 카테고리 추가 → data-add skill
  · 차트 추가 → design-chart skill (L-1 등 분류 코드 호출)
  · 회귀 → debug skill (DEBUG-1~15 시나리오)
```

**비개발자에게 들리는 단어** (사용자가 인지할 표현):
- 데이터 / 헤더 / 행 / 도메인 / 카테고리 / KPI / 색상 / 폰트 / 차트 / 이메일

**비개발자에게 안 들리는 단어** (Claude 내부 처리 — 사용자 입에서 안 나옴):
- categoryMap.js / parseSheetRows / _logWarn / assertRows / IDS / ID_TO_CODE 등 변수명

→ 사용자는 일상어로 답만 하면 Claude 가 모든 코드 / 변수명 / 매핑 자동 처리.

---

## skill: 프로젝트(도메인) 추상화 검토

기존 사용자가 적용한 하네스를 본인 프로젝트에 맞게 추상화 / 일반화 필요 시.

```
1. CLAUDE.md NEVER Rule 검토 — 사용자 프로젝트에 맞는지
2. harness-mirror/ 의 미러 문서 — "LG", "Samsung", "GEO Visibility" 같은 본 저장소
   고유 용어가 사용자 프로젝트에 들어가지 않게
3. .claude/rules/ 의 토큰/invariant 가 일반화되어 있는지 (프로젝트 추상)
4. .claude/skills/ 의 워크플로우가 사용자 프로젝트에 맞게 step 조정 가능한지
5. routes/admin-pages.js 의 메뉴가 사용자 모드 (newsletter / dashboard / 등) 에 맞는지
```

---

## skill: 신규 하네스 추가 (현 사용자가 더 강력하게)

본 저장소의 하네스가 잘 정착된 후, 추가로 Rule/Hook/Skill을 보강할 때.

```
1. 발견: 코드 회귀 / 반복 실수 / 비효율 패턴 인지
2. 분류:
   · "따라야 할 규칙" → Rule (.claude/rules/ 적절 파일)
   · "절대 하면 안 되는 것" → Hook (.claude/hooks/ 스크립트 + settings.json 등록)
   · "순차 워크플로우" → Skill (.claude/skills/<name>/SKILL.md)
   · "특정 영역 분리 작업" → Sub-Agent (.claude/agents/<name>.md)
3. 작성 후 미러 자동 갱신 (npm run sync:harness 또는 npm run build)
4. /admin/harness 페이지에서 노출 확인
5. ZIP 다운로드 → 다음 적용 시 자동 포함
```
