---
name: onboard
description: 새 프로젝트에 본 하네스를 적용할 때 사용. 사용자가 "이 하네스 적용해줘" / "내 프로젝트에 셋업해줘" 같이 요청하면 본 Skill 사용. 프로젝트(도메인) 인터뷰 → 프로젝트 파일 생성 → 데이터 모델 → 디자인 토큰 → 외부 시스템 → 빌드 검증 8 step 워크플로우.
---

# Onboard — 새 프로젝트 하네스 적용 워크플로우

> 사용자가 ZIP 받아서 다른 프로젝트에 적용 요청 시 본 Skill 사용.
> Rule 매뉴얼: `.claude/rules/BOOTSTRAP.md` 참조.

---

## skill: 하네스 적용 (부트스트랩)

```
1. 사전 확인:
   · CLAUDE.md / AGENTS.md / .claude/ / harness-mirror/ 디렉토리 모두 프로젝트 루트에 있나
   · chmod +x .claude/hooks/*.sh 실행됐나
   · npm install / package.json 확인

2. 프로젝트(도메인) 인터뷰 — 사용자에게 6 질문 (한 번에 또는 단계별):
   a) "프로젝트는? (예: 매출 / HR / 제품 사용량 / 마케팅 KPI / ...)"
   b) "데이터 소스는? (Google Sheets / 자체 API / BigQuery / 정적 JSON)"
   c) "카테고리/분류는? (제품군 / 부서 / 채널 / 지역 / ...)"
   d) "시각 단위는? (일 / 주 / 월 / 분기 + 그룹: 국가/제품/팀)"
   e) "KPI 종류는? (점수% / 카운트 / 비율 / 비용$)"
   f) "이메일 발송 여부 (table-layout 호환 필요한가)?"

3. 프로젝트 파일 (categoryMap.js 또는 동등) 생성:
   · src/categoryMap.js 신설 (또는 변경)
   · CATEGORY_IDS (또는 프로젝트에 맞는 이름) 배열
   · ID_TO_KR / EN / UL_CODE / BU 4종 매핑
   · NAME_TO_ID 역매핑 (한/영 시트 입력 흡수)
   · assertCategoryMapInvariant() 헬퍼 — 4종 매핑 완전성 검증

4. 데이터 모델 정의 — parser 작성:
   · SHEET_NAMES 등재 (탭 이름 목록)
   · parseSheetRows 라우터에 분기 추가
   · 각 parseXxx 함수 — .claude/skills/data/SKILL.md "신규 시트 추가" 8 step 따름
   · 5단계 ERROR CATCHING 적용 (assertRows + findHeaderIdx + _logWarn + forEachRowSafe)

5. 디자인 토큰 — dashboardConsts.js:
   · FONT 변경 (사용자 브랜드 폰트 또는 시스템 fallback)
   · RED 변경 (사용자 primary 색)
   · BRAND_COLORS 객체 (사용자 프로젝트 그룹 색상)
   · STATUS 토큰 (lead/behind/critical) 그대로 유지

6. 외부 시스템 — .env:
   · .env.example 작성 (ADMIN_PASSWORD 필수, 그 외 옵셔널)
   · 사용 안 하는 시스템 env 제거 (예: SMTP 없으면 routes/email.js 제거)
   · AI 사용 시 ANTHROPIC_API_KEY 등재 + ai.md Rule 자동 적용

7. 비즈니스 fact 등록:
   · 사용자에게 "데이터 무관 항상 적용 Rule이 있나요?" 질문
   · 답변에 맞는 DEFAULT_XXX 객체 정의 (예: parseUnlaunched 안)
   · 파서 시작 시 디폴트 spread → 시트로 추가/덮어쓰기

8. 첫 빌드 + 검증:
   · npm install
   · npm test (invariant 자동 검증)
   · npm run build (산출물 생성)
   · npm start → /admin 로그인 → 대시보드 확인
   · 검증 체크리스트 (BOOTSTRAP.md §7) 항목별 통과 확인
```

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
