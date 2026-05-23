<!-- 자동 생성 미러 — 원본: .claude/skills/newsletter/SKILL.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# newsletter — 뉴스레터 작업 워크플로우

> Claude Code 가 뉴스레터 / 월간·주간 리포트 / 이메일 호환 HTML 작업 시 따라야 할 step-by-step.
> 참조 Rule: `.claude/rules/newsletter.md`, `.claude/rules/design.md` §C-21~C-23 (V1/V2/V3 카드).
> 절대 금지는 Hook (`.claude/hooks/newsletter-guard.sh`).

---

## skill: 신규 뉴스레터 발행본 작성

사용자가 "이번 달 뉴스레터" / "5월호 뉴스레터" / "Q2 리포트" 같이 신규 발행본 요청 시.

```
1. [발행 종류 식별]
   ├─ 월간 리포트 → src/monthly-report/monthlyTemplate.js
   ├─ 주간 리포트 → src/weekly-report/weeklyTemplate.js
   └─ 정기 뉴스레터 → src/emailTemplate.js + src/newsletter/App.jsx

2. [데이터 준비]
   ├─ Google Sheets 동기화 (어드민 "구글 시트 동기화" 클릭) — 최신 데이터 확보
   ├─ 카테고리 / 국가 / 미출시 (unlaunchedMap) 모두 정상인지 확인
   └─ data-debug skill 의 verify-after-act 통과 확인

3. [본문 작성 — 이메일 호환]
   ├─ containerWidth = 940 고정 (NEVER 초과)
   ├─ table-layout 기반 (flex / grid 금지)
   ├─ 인라인 style 만 (외부 CSS class 금지)
   ├─ V1/V2/V3 카드 중 적절한 분기 선택 (options.productCardVersion)
   └─ 미니 트렌드 차트는 weeklyTrendHtml (SVG 없이 막대) 사용

4. [Preheader 작성 — inbox 미리보기]
   ├─ <body> 시작 직후 hidden div 패턴 추가
   ├─ 50~110자 권장 (모바일 잘림 고려)
   └─ 본문 제목과 다른 정보 (예: 핵심 수치 1개)

5. [Footer 작성]
   ├─ 발행 정보 (월 / 주차 / 게시일)
   ├─ 발송자 메타 (회사 / 부서)
   └─ unsubscribe 링크 (외부 발송 시 필수)

6. [KO / EN 양 언어 동시 생성]
   ├─ lang = 'ko' / 'en' 분기
   ├─ T[lang] || T.ko 패턴
   ├─ 영문 letter-spacing -1px (좁은 셀 압축)
   └─ 영문 약어 사용 (Refrigerator → REF 등)

7. [미출시 회색 처리]
   ├─ isUnlaunched(unlaunchedMap, country, prodId) 검사
   ├─ barColor = '#94A3B8' (회색)
   └─ 라벨 = '—' (em dash)

8. [시각 검증 — .claude/rules/newsletter.md §5]
   ├─ 어드민 iframe 미리보기
   ├─ KO / EN 양 모드
   ├─ 빌드 후 정적 HTML 브라우저 직접 열람
   ├─ 모바일 가로 폭 (360~414px) 가독성
   └─ Hook 통과 확인 (newsletter-guard.sh 자동 검증)

9. [게시 / 발송]
   ├─ /admin/newsletter 의 "웹사이트 게시" 클릭 → PUB_DIR 정적 HTML
   ├─ (옵션) /admin/email-send 또는 routes/email.js → SMTP 발송
   └─ 사용자에게 게시 URL 안내
```

---

## skill: 뉴스레터에 새 섹션 추가

기존 발행본에 신규 섹션 (예: "Executive Summary", "베이스라인 분석") 추가.

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

5. [시각 검증 + Hook 통과]
   └─ newsletter-guard.sh 가 자동으로 containerWidth / flex / overflow-x 검사
```

---

## skill: 이메일 호환 검증 (발송 전)

발송 직전 multi-client 호환 검증.

```
1. [어드민 iframe 미리보기] — 가장 빠른 1차 검증
   ├─ /admin/newsletter 의 미리보기 모달
   ├─ KO / EN 토글하면서 시각 확인
   └─ iframe 부모 컨테이너에 overflow-x:hidden / min-width 없는지 확인 (CLAUDE.md NEVER)

2. [정적 HTML 직접 열람]
   ├─ npm run build → dist-newsletter/
   ├─ 또는 /p/GEO-Monthly-Report-KO 등 PUB_DIR URL
   └─ 브라우저 (Chrome / Safari / Firefox) 각각 열어 차이 확인

3. [실제 이메일 클라이언트 — Litmus / Email on Acid]
   ├─ (가능하면) Litmus 같은 서비스로 multi-client 캡처
   ├─ 우선순위 클라이언트: Outlook 2007+ / Gmail Web / Apple Mail / Gmail iOS
   └─ 본인 이메일로 테스트 발송 — 최소 Gmail + Outlook + Apple Mail 셋

4. [체크리스트 — .claude/rules/newsletter.md §5]
   ├─ containerWidth ≤ 940
   ├─ display:flex / grid 없음
   ├─ overflow-x:hidden / min-width 없음
   ├─ 모든 style 인라인
   ├─ 외부 폰트 fallback 시스템 폰트 명시
   ├─ 이미지 base64 100KB 이하 또는 외부 호스팅
   ├─ preheader 50~110자
   ├─ footer 발행 정보
   ├─ 미출시 회색 + '—' 일관
   └─ KO / EN 양 모드 정상

5. [Hook 통과] — newsletter-guard.sh
   └─ Edit/Write 시점에 자동 검증되지만 수동 확인:
      grep -nE "containerWidth\s*=\s*([0-9]+)" src/emailTemplate.js | awk -F'=' '$2+0 > 940 {print "WARN:", $0}'
      grep -nE "display\s*:\s*(flex|grid)" src/emailTemplate.js
      grep -nE "overflow-x\s*:\s*hidden|min-width" src/emailTemplate.js

6. [회귀 방지]
   ├─ 발송 후 사용자 피드백 (이메일 클라이언트별 깨짐 보고) 즉시 기록
   ├─ 회귀 발견 시 .claude/rules/newsletter.md §6 ANTI-PATTERN 에 등재
   └─ 패턴이 반복되면 newsletter-guard.sh 에 검출 케이스 추가
```

---

## skill: 미출시 국가 처리 회귀 디버깅

특정 국가에서 특정 prodId 가 미출시인데 정상 막대로 그려질 때 / 또는 출시인데 회색으로 그려질 때.

```
1. [unlaunchedMap 확인]
   ├─ iframe 콘솔에서 _unlaunchedMap 출력
   ├─ ${country}|${UL_CODE} 키 있는지 (예: 'BR|AV', 'VN|AV')
   └─ DEFAULT_UNLAUNCHED 가 비즈니스 fact 다 포함하는지 (src/excelUtils.js parseUnlaunched)

2. [UL_CODE 일관성]
   ├─ src/categoryMap.js 의 PROD_ID_TO_UL_CODE 매핑 확인
   ├─ UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 값 집합에 포함
   └─ npm test 의 assertCategoryMapInvariant 통과 확인

3. [isUnlaunched 호출처]
   ├─ emailTemplate.js 의 productCardV2Html / V3Html 안의 호출 위치 검증
   ├─ country 코드 표기 일관 (US / USA 혼용 X)
   └─ p.id 가 PROD_IDS 의 canonical id 인지 (raw 표기 들어오면 RAW_TO_PROD_ID 정규화)

4. [디자인 일관성]
   ├─ barColor = unlaunched ? '#94A3B8' : baseBarColor
   ├─ valueLabel = unlaunched ? '—' : value.toFixed(1)
   └─ KO/EN 양 모드 모두 동일 처리

5. [회귀 방지 fixture]
   ├─ 새 미출시 케이스 발견 시 DEFAULT_UNLAUNCHED 에 등재 (비즈니스 fact 인 경우만)
   ├─ 통합 테스트 추가 (excelUtils.test.js)
   └─ 게시 후 재확인
```

---

## skill: SMTP 발송 (옵션)

뉴스레터를 SMTP 로 발송할 때.

```
1. [환경 확인]
   ├─ .env 에 SMTP_USER / SMTP_PASS 설정 확인
   ├─ TLS 포트 (587 또는 465) 사용
   └─ 보낸 사람 도메인 SPF/DKIM 설정 권장 (실제 발송 도메인)

2. [수신자 목록]
   ├─ 어드민 UI 또는 .env 의 수신자 리스트
   ├─ BCC / 또는 별도 transactional ID 추적
   └─ 외부 발송 시 unsubscribe 링크 필수

3. [발송 호출 — routes/email.js]
   ├─ HTML body = generateNewsletterHTML(...) 결과
   ├─ 제목 = `[GEO] {월} 뉴스레터` 같이 명확
   ├─ Preheader 가 HTML 첫 줄에 포함됐는지 확인
   └─ 발송 결과 (성공 / 실패 / bounce) 영구 기록 — .claude/rules/data.md §7.3 boundary 기록 패턴

4. [검증]
   ├─ 본인 이메일로 먼저 1건 테스트 발송 (실 수신자 X)
   ├─ Gmail / Outlook / Apple Mail 등에서 모두 정상 표시
   └─ 통과 후 전체 발송

5. [회귀 / 사고 대응]
   ├─ Bounce 율 높으면 SMTP 설정 / 수신자 리스트 정제
   ├─ 스팸 분류 시 발신 도메인 reputation 확인 (SPF/DKIM/DMARC)
   └─ 발송 사고 (잘못된 데이터 발송) — 즉시 후속 정정 발송 + 사과
```

---

## 참조

- `.claude/rules/newsletter.md` — 뉴스레터 Rule (NEVER, table-layout, KO/EN, 미출시, footer 등)
- `.claude/rules/design.md` §5.2 / §C-10 / §C-21~C-23 — newsletter containerWidth, 미니 트렌드 바, V1/V2/V3 카드
- `.claude/rules/data.md` §5.5 / §5.8 — categoryMap.js single source, DEFAULT_UNLAUNCHED
- `.claude/hooks/newsletter-guard.sh` — 자동 검증 (containerWidth > 940 / flex / overflow-x:hidden 차단)
