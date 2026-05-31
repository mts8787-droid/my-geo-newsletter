<!-- 자동 생성 미러 — 원본: .claude/rules/newsletter.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# 뉴스레터 Rule (Newsletter Rules)

> 본 저장소의 뉴스레터 / 월간·주간 리포트 / 이메일 호환 HTML 작업 Rule. **참조용 매뉴얼**.
> 실제 워크플로우 (step-by-step) 는 `.claude/skills/newsletter/SKILL.md` (Skill) 참조.
> Rule은 Claude Code 가 권고로 따름 (~80%). 100% 강제는 Hook (`.claude/hooks/newsletter-guard.sh`) 영역.

---

## 1. PROJECT CONTEXT (NEWSLETTER)

본 저장소의 뉴스레터는 **이메일 클라이언트 호환 HTML** (Outlook 2007+ / Gmail / Apple Mail / mobile clients). 모던 CSS 다수 미지원 → table-layout 기반.

- **출력 경로**: `/p/GEO-Monthly-Report-{KO|EN}` + 월별 suffix / `/p/GEO-Weekly-Report-{KO|EN}` (PUB_DIR 정적 HTML)
- **어드민**: `/admin/newsletter` (React + iframe srcdoc 미리보기)
- **발송**: `routes/email.js` (SMTP — 사용 시 .env 의 SMTP_USER/SMTP_PASS 필요)

### 1.1 FILE LAYOUT (NEWSLETTER-RELEVANT)

```
src/
  emailTemplate.js         # 본문 — V1/V2/V3 제품 카드 + weeklyTrendHtml + countryCardHtml + isUnlaunched
  newsletter/App.jsx       # 어드민 SPA (React)
  monthly-report/
    App.jsx                # 월간 리포트 어드민
    monthlyTemplate.js     # 정적 HTML 생성기
  weekly-report/
    App.jsx                # 주간 리포트 어드민
    weeklyTemplate.js      # 정적 HTML 생성기
  shared/api.js            # publish 시 extra 조립
routes/
  email.js                 # SMTP 발송 (옵션)
  publish.js · published.js
```

---

## 2. COMMANDS (본 저장소 npm scripts — 이식자는 본인 scripts 로 대체)

| 목적 | 명령 |
|---|---|
| 어드민 (개발) | `npm run dev:newsletter` / `npm run dev:monthly` / `npm run dev:weekly` |
| 빌드 (단일) | `npm run build:newsletter` / `npm run build:monthly` / `npm run build:weekly` |
| 빌드 (전체) | `npm run build` |

---

## 3. NEVER RULES (이메일 호환 핵심)

본 저장소의 뉴스레터에서 절대 위반 금지. Hook (`newsletter-guard.sh`) 가 일부 자동 차단.

```
NEVER  containerWidth > 940           → 1000px 뷰포트 우측 짤림 (Hook 차단)
NEVER  display:flex / display:grid    → Outlook 미지원, 깨짐 (Hook 차단)
NEVER  overflow-x:hidden / min-width  → iframe 미리보기 클립 (Hook 차단)
NEVER  외부 CSS 클래스                  → 인라인 style 만 (Gmail 이 <style> 제거)
NEVER  align="center" 변경            → 사용자 명시 외 금지
NEVER  외부 폰트만 (fallback 없이)        → font-family 마지막에 시스템 fallback 필수
NEVER  SVG 만 (이메일에서)                → SVG 미지원 클라이언트 대비 table-layout 막대 그래프
NEVER  base64 이미지 100KB 초과         → Gmail 트림 / 다른 클라이언트 속도 저하
NEVER  사용자 텍스트 임의 다듬기          → 사용자 입력 그대로 (오타 포함, 명시 지시 후만 수정)
NEVER  KO 만 / EN 만 빌드             → 양 언어 동시 생성 (publishCombinedDashboard)
```

---

## 4. NEWSLETTER DIRECTIVES

### 4.1 컨테이너 너비

- `containerWidth = 940` 고정. 940 초과 시 1000px 뷰포트에서 우측 잘림.
- 외곽 td `padding:24px 0`, `align="center"` 유지.

### 4.2 Table-Layout 강제

- 모든 레이아웃은 `<table cellpadding="0" cellspacing="0" border="0">` 기반.
- `width` 는 인라인 style (CSS class 불가 — Gmail 제거).
- 컬럼 정의는 `<table style="table-layout:fixed"><colgroup>...</colgroup></table>` 으로 폭 강제.
- 카드 그리드도 table 의 `<tr>` 안에 카드들 배치 (flex 금지).

### 4.3 인라인 스타일 (No CSS Class)

- `class="prod-card"` 등 외부 클래스 참조 X.
- 모든 스타일은 인라인 (`style="background:#fff;..."`).
- 예외: `<style>` 태그 사용 가능하지만 Gmail 일부 버전 strip — 인라인을 우선 보장.

### 4.4 SVG 미지원 클라이언트 호환

- Outlook 2007~2019 는 SVG 렌더 X.
- 대안: **`weeklyTrendHtml`** 같은 table-layout 막대 그래프 (`background-color` + `width %`) 또는 정적 PNG (호스팅 URL).
- `emailTemplate.js` 의 `weeklyTrendHtml(weekly, color, gMax, gMin, labels, fadeBeforeIdx)` 가 SVG 없이 막대 트렌드 구현.

### 4.5 미출시 처리 (회색 + 라벨 '—')

특정 국가에서 특정 prodId 미출시 시:
- `isUnlaunched(unlaunchedMap, country, prodId)` 가 boolean 반환
- 막대 색: `#94A3B8` (회색)
- 라벨: `—` (em dash)
- 데이터 (`country|UL_CODE`) 는 `src/categoryMap.js` single source 의 `PROD_ID_TO_UL_CODE` 매핑 사용

```js
import { isUnlaunched } from './emailTemplate.js'
// emailTemplate 내부 헬퍼 — categoryMap.js 의 매핑을 사용
const unlaunched = isUnlaunched(unlaunchedMap, c, p.id)
const barColor = unlaunched ? '#94A3B8' : baseBarColor
const valueLabel = unlaunched ? '—' : value.toFixed(1)
```

### 4.6 KO / EN 양 언어 (Lang Toggle)

- `lang = 'ko' | 'en'` 파라미터로 분기
- 텍스트: `T[lang] || T.ko` 패턴
- 자간 (`letter-spacing`): 영문 `-0.9px ~ -1px` (좁은 셀에서 압축)
- 한글 `-0.5px`
- 영문 약어 권장 (좁은 셀): `Refrigerator → REF`, `Dishwasher → DW`, `Vacuum → VC`
- Subsidiary 풀네임 필요한 곳 (Executive Summary 등): `COUNTRY_OFFICIAL_NAME_EN` 사용

### 4.7 카드 버전 (V1 / V2 / V3 / V4...)

| 버전 | 함수 | 특징 |
|---|---|---|
| **V1** | `productCardV1Html` (기본 분기) | 점수 + MoM + 미니 트렌드 바 (C-10) |
| **V2** | `productCardV2Html` | 10그룹 막대 (각 그룹 width 10%, 14px 바) |
| **V3** | `productCardV3Html` | 그룹별 1위 비교 (그룹 status 색 + SS/ratio%) |

분기: `options.productCardVersion = 'v3'` 등으로 generateNewsletterHTML 호출.

신규 V4 추가 시 `.claude/skills/design-component/SKILL.md` 의 "뉴스레터 카드 변형 추가" 워크플로우 따름.

### 4.8 Preheader (이메일 미리보기 텍스트)

이메일 클라이언트의 inbox 목록에서 제목 옆에 표시되는 첫 줄.
- `<body>` 시작 직후 `<div style="display:none;font-size:1px;line-height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all">preheader 텍스트</div>` 패턴
- 길이: 50~110자 권장 (모바일 클라이언트 잘림 고려)

### 4.9 Footer (발송자 메타 / unsubscribe)

법적·기능적 필수 영역:
- 발송자 정보 (회사명 / 주소 — 마케팅 이메일은 의무, 내부 리포트는 옵션)
- unsubscribe 링크 (외부 발송 시)
- 발행 정보 (월 / 주차 / 게시일)

### 4.10 SMTP 발송 (옵션)

`routes/email.js` (있는 경우):
- 자격증명: `.env` 의 `SMTP_USER` / `SMTP_PASS` (gitignore 강제)
- TLS 사용
- 보낸 사람 도메인 SPF/DKIM 설정 권장
- 발송 후 `insight_runs` 또는 별도 audit log 에 기록 (`.claude/rules/data.md §7.3` 패턴)

---

## 5. VERIFICATION (시각 검증 체크리스트)

발송 전 반드시:
- [ ] KO / EN 양 모드 시각 확인
- [ ] 어드민 iframe 미리보기 (모달 안)
- [ ] 빌드 후 정적 HTML (브라우저 직접 열기)
- [ ] 모바일 가로 폭 (360~414px) 가독성
- [ ] 다크모드 (Apple Mail / Outlook 다크) — 배경/텍스트 색 invert 호환
- [ ] containerWidth 940 이하 (Hook 자동 차단되지만 수동 확인)
- [ ] 미출시 국가 회색 + `—` 라벨
- [ ] 사용자 텍스트 그대로 (다듬지 않음)
- [ ] 이미지 URL 외부 호스팅 (또는 base64 100KB 이하)
- [ ] preheader 텍스트 50~110자
- [ ] footer 정보 (월/주차 / 게시일) 정확
- [ ] (옵션) Litmus / Email on Acid 같은 도구로 multi-client 테스트

---

## 6. ANTI-PATTERNS (NEWSLETTER)

```
NEVER  containerWidth > 940 → Hook 차단 + 우측 짤림
NEVER  display:flex / display:grid → Outlook 깨짐 (Hook 차단)
NEVER  overflow-x:hidden / body min-width → iframe 미리보기 클립 (Hook 차단)
NEVER  CSS class 참조 (외부 stylesheet) → Gmail 제거 → 인라인 style 만
NEVER  align="center" 변경 → 사용자 명시 외 금지
NEVER  사용자 텍스트 임의 다듬기 → 그대로 사용
NEVER  미출시 막대 컬러 (회색 아님) → #94A3B8 + 라벨 '—' 일관
NEVER  KO 만 빌드 (EN 누락) → 양 언어 동시 생성
NEVER  SVG 만 (이메일에서) → table-layout 막대 (weeklyTrendHtml) 또는 정적 PNG
NEVER  외부 폰트만 (fallback 없이) → 시스템 fallback 필수 ('LGEIText','LG Smart','Arial Narrow',Arial,sans-serif)
NEVER  base64 이미지 100KB 초과 → Gmail 트림 → 외부 호스팅
NEVER  preheader 텍스트 없음 → inbox 미리보기 텍스트 깨짐
NEVER  footer 누락 (발행 정보 없음) → 발신자 / 시점 정보 필수
```

---

## 7. RELATED RULES

- `.claude/rules/design.md` §5.2 (newsletter containerWidth), §C-21~C-23 (V1/V2/V3 카드 정의), §C-10 (미니 트렌드 바), §4.4 (Typography KO/EN)
- `.claude/rules/data.md` §5.5 (categoryMap.js single source — UL_CODE), §5.8 (DEFAULT_UNLAUNCHED 병합)
- `CLAUDE.md` — 프로젝트 헌법 (NEVER Rule 표)
- `.claude/hooks/README.md` — newsletter-guard.sh 동작

---


---

**For Adopters (이식자 참고)**: 같은 가전 산업 내 영업·매출·전략·마케팅·R&D 등 다른 직무 도메인 적용 가이드 (핵심 패턴 + 부트스트랩 사용법) → `.claude/rules/HIRO_REFERENCE.md` (For Adopters 통합 섹션).
