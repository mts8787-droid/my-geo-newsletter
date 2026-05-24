<!-- 자동 생성 미러 — 원본: .claude/skills/newsletter-make/SKILL.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# newsletter-make — 뉴스레터 작성 워크플로우

> 뉴스레터 / 월간·주간 리포트 신규 발행본 작성 + 기존에 새 섹션 추가.
> 참조: `.claude/rules/newsletter.md`, `.claude/rules/BOOTSTRAP-newsletter.md` (시나리오).
> Hook: `.claude/hooks/newsletter-guard.sh` (자동 차단).

---

## skill: 신규 뉴스레터 발행본 작성 (BOOTSTRAP 트리거)

사용자가 "이번 달 뉴스레터" / "5월호" / "Q2 리포트" / "주간 리포트" 같이 신규 발행본 요청 시 — 작업이 크고 인터뷰성이라 BOOTSTRAP 시나리오로 위임.

```
1. 사용자 요청 인식 → .claude/rules/BOOTSTRAP-newsletter.md 시나리오 따름

2. BOOTSTRAP 시나리오 8 step:
   STEP 0: 환경 확인 (시트 sync 최신, _syncIssues 검사)
   STEP 1: 발행 종류 인터뷰 (월간/주간/정기 + 기간 + 어드민 vs 코드 + 게시 vs 발송)
   STEP 2: 데이터 범위 (카테고리·국가·비교군)
   STEP 3: 카드 버전 (V1/V2/V3) + 섹션 구성
   STEP 4: KO/EN 텍스트 (사용자 명시 그대로)
   STEP 5: Preheader / Footer / 이미지
   STEP 6: 본문 작성 (Hook 자동 차단)
   STEP 7: 시각 검증 (KO/EN × 어드민 미리보기 × 빌드 정적 × 실제 클라이언트)
   STEP 8: 게시 / SMTP 발송

3. 발행 종료 조건:
   - 시각 검증 체크리스트 모두 통과
   - newsletter-guard.sh hook 위반 0건
   - 게시 URL 사용자 안내 (필요 시 발송 결과 보고)

4. 후속:
   - 깨짐 보고 시 → newsletter-debug skill
   - 발송 트러블 → newsletter-send skill
```

**왜 BOOTSTRAP 시나리오로 위임?**: 신규 발행본 작성은 4-5 라운드 인터뷰 + 본문 작성 + 검증의 큰 작업. step-by-step 시나리오로 사용자와 협업해야 컨텍스트 손실 없이 진행됨. `onboard` / `BOOTSTRAP.md` 와 동일 패턴.

---

## skill: 기존 뉴스레터에 새 섹션 추가

이미 게시된 발행본 또는 어드민에서 작성 중인 발행본에 새 섹션 (예: "Executive Summary", "베이스라인 분석", "Top 5 국가") 만 추가.

```
1. [섹션 종류 식별]
   ├─ 텍스트 + 카드 → emailTemplate.js 에 새 함수 (sectionFooHtml)
   ├─ 차트만 → weeklyTrendHtml 패턴 또는 정적 PNG 호스팅
   ├─ 표 (KPI 정량 / 정성) → table-layout 기반 새 함수
   └─ 카테고리 카드 그리드 → 기존 V1/V2/V3 카드 분기 활용

2. [위치 결정]
   ├─ Hero 직후 (Executive Summary 위치)
   ├─ 제품 카드 그리드 사이
   └─ Footer 직전 (각주 / 출처)

3. [구현]
   ├─ <table cellpadding="0" cellspacing="0" border="0" align="center">
   ├─ width="940" 명시 (containerWidth 와 일치)
   ├─ 내부 padding 은 외곽 td 의 padding 으로 (margin 미지원 클라이언트 있음)
   └─ 디자인 토큰 (FONT / RED / COMP / STATUS) 사용

4. [generateNewsletterHTML 호출처 갱신]
   ├─ 새 함수 호출 추가 (해당 위치에)
   ├─ options 에 신규 섹션 토글 추가 (사용자가 어드민에서 끌 수 있게)
   └─ KO / EN 양 모드 검증

5. [Hook 통과] — newsletter-guard.sh
   └─ containerWidth / display:flex|grid / overflow-x 자동 검사

6. [시각 검증 — 부분]
   ├─ 추가한 섹션만 KO / EN 확인
   ├─ 전체 발행본 시각 흐름 (위·아래 섹션과 톤·간격 일관)
   └─ 어드민 토글로 on/off 동작 확인
```
