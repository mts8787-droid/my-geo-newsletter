# Skills — GEO Newsletter / Dashboard 코딩 지침

본 문서는 Andrej Karpathy 스타일의 **skill** — 코딩 에이전트(Claude Code 등)가 본 레포에서 작업할 때 따라야 할 가이드라인 모음.

각 skill 은 `WHEN`(트리거 조건) · `RULE`(규칙) · `WHY`(이유) · `HOW`(실행 방법) 구조.

---

## SKILL 01 — 날짜 파싱은 한국식 2자리 연도까지 지원

**WHEN**: 시트/CSV 의 date 컬럼을 파싱하거나 `parseMonthFromDate` 류 함수를 작성/수정할 때.

**RULE**: 다음 형식을 **모두** 지원하는 정규식 체인을 작성한다:
- `2026-04` (ISO)
- `26년 2월` (한국식, 2자리 연도)
- `Apr 2026` / `Apr 26` (영문)
- `4월` (연도 없음 — 단일 연도 데이터로 가정)
- `2026/04` (슬래시)

**WHY**: 본 레포의 Google Sheets 입력은 `26년 4월` 식 한국식 2자리 연도가 흔하다. 4자리 연도만 매칭하는 `(\d{4})` 정규식은 year=0 으로 fallback → 정렬이 month-of-year(1~12)만으로 됨 → 12월이 1월 다음에 옴 → MoM 부호 반전 등 광범위한 버그.

**HOW**:
```js
const ym4 = s.match(/(\d{4})/)
if (ym4) year = parseInt(ym4[1])
else {
  const ky2 = s.match(/(\d{2})년/)
  if (ky2) year = 2000 + parseInt(ky2[1])
  else {
    const ey2 = s.match(/\b(?:jan|feb|...)\w*\s+(\d{2})\b/i)
    if (ey2) year = 2000 + parseInt(ey2[1])
  }
}
```
year + month → `year * 12 + month` 형태로 정렬 키로 사용.

---

## SKILL 02 — 서버·클라이언트 동일 계산은 두 곳 모두 수정

**WHEN**: SVG 차트, MoM/WoW, 베이스라인, 필터 등 사용자 인터랙션에 의해 클라이언트가 재렌더링하는 로직을 변경할 때.

**RULE**: 서버측 함수(`svgLine`, `svgMultiLine` in `dashboardSvg.js`)를 수정하면, 동일 알고리즘의 클라이언트측 짝(`_miniSvg`, `_miniSvgNullAware` in `dashboardClient.js`)도 함께 수정한다.

**WHY**: 초기 페이지 로드는 서버 렌더링, 필터 변경 후 재렌더링은 클라이언트가 인라인 SVG 문자열 생성. 둘이 어긋나면 "필터 적용 전엔 정상, 적용 후 깨짐" 류 미묘한 버그.

**HOW**:
1. `dashboardSvg.js` 변경 시 `dashboardClient.js` 내 `_miniSvg`/`_miniSvgNullAware`에서 동일 함수명/시그니처 검색
2. 옵션 추가 시 두 함수 모두 동일 옵션 받도록 변경
3. 호출 사이트에서 같은 값 전달

---

## SKILL 03 — 베이스라인 리셋 제품은 `audio` / `rac` / `aircare`

**WHEN**: Audio · RAC · Aircare 관련 작업 시.

**RULE**:
- 베이스라인 주차: Audio=W13, RAC=W16, Aircare=W16
- 월간 베이스라인: 모두 Apr
- 베이스라인 이전 데이터는 회색(`#64748B`) 페이드, 이후는 원래 색
- Boundary 에서 라인 끊김 (bridge 없음)
- MoM 표기 숨김 (`prod-mom` 빈 문자열)
- 차트에 `*Baseline 재설정` 라벨 + dashed vertical line

라벨 위치 오프셋:
| 제품 | 모드 | labelOffsetY | lineOffsetY |
|---|---|---|---|
| Audio | 월간 | -60 | 0 |
| RAC | 주간 | +20 | 0 |
| Aircare | 주간 | +30 | 0 |
| 그 외 baseline | 기본 | 0 | 0 |

**WHY**: 4월 중 Prompt 재조정으로 시계열 비교 의미 없음. 차트 데이터/X축 라벨과 베이스라인 라벨 위치가 종종 겹쳐서 제품·모드별 미세 조정 필요.

**HOW**: `dashboardTemplate.js` 의 `isBaselineResetProduct(p)`, `_baselineWeekFor(p)`, `baselineIdxFor(p, labels)` 헬퍼 사용. 새 베이스라인 제품 추가 시 `BASELINE_RESET_PRODUCTS` 배열에 추가.

---

## SKILL 04 — 국가 필터 적용 시 monthlyScores 는 date 키로 매칭

**WHEN**: 국가 필터 변경에 따라 카드 score/MoM 재계산 시.

**RULE**: 국가별 `_productsCnty[].monthlyScores` 의 배열 인덱스로 직접 매칭하지 말고, **date 문자열**로 매칭해서 합산한다. 국가마다 monthlyScores 길이가 다를 수 있다 (USA = 12개월, BR = 3개월 등).

**WHY**: 국가 A 는 12개월 데이터, 국가 B 는 6개월 데이터일 때 `ms[ms.length-1]` 는 서로 다른 실제 월을 가리킴 → 잘못된 평균.

**HOW**:
```js
function _filteredMonthlySeries(prodId, countries) {
  // 1) 매칭되는 _productsCnty 항목들 수집
  // 2) date 문자열을 키로 sum/count 누적
  // 3) 첫 매칭 국가의 monthlyScores 순서(서버 정렬됨)를 canonical 정렬 기준으로 사용
}
```
참고: `dashboardClient.js` 의 `_filteredMonthlySeries` / `_filteredMomD`.

---

## SKILL 05 — SVG 라벨이 차트 콘텐츠와 겹칠 때

**WHEN**: 차트 안에 라벨/마커를 추가하는데 데이터 선/값과 겹칠 가능성이 있을 때.

**RULE**: 우선순위로 시도:
1. **위치 오프셋** — 차트 위/아래/X축 라벨 영역으로 이동 (`labelOffsetY` 옵션)
2. **viewBox 확장** — `viewBox` height 를 늘리고 `overflow:visible` 적용
3. **text-anchor 동적 전환** — 베이스라인이 오른쪽 끝에 가까우면 (`bx > w * 0.7`) `text-anchor="end"` 로 좌측 정렬
4. **흰 배경 박스** — `<rect fill="#fff" opacity="0.92">` 후 텍스트 (마지막 수단, 미관 저하)

**WHY**: 데이터 변동성 때문에 모든 케이스에 맞는 단일 위치는 없다. 제품/모드별 오프셋 옵션이 가장 robust.

**HOW**:
```js
const onRight = bx > w * 0.7
const labelY = (onRight ? pad.t + ch + 1 : pad.t + 8) + labelOffsetY
svg += `<text x="..." y="${labelY}" text-anchor="${onRight ? 'end' : 'start'}" ...>`
```

---

## SKILL 06 — 이메일 HTML 컨테이너 너비는 920~940px

**WHEN**: 뉴스레터 (`emailTemplate.js`) 의 `containerWidth` 변경 시.

**RULE**:
- 기본값 940px. 이상 확장하지 말 것.
- 뷰포트 1000px 기준 좌우 30px 그레이 여백 확보가 목표.
- `align="center"` + 외곽 `<td>` `padding:24px 0` (수평 패딩 0).
- `body` 에 `min-width` 설정 금지 — iframe 컨텍스트에서 가로 스크롤 없이 클립 발생.
- `overflow-x:hidden` 도 금지 — 우측 잘림 원인.

**WHY**: 980px 시도 → 사용자 뷰포트(약 1000px)에서 잘림. iframe 미리보기는 가로 스크롤 미지원 → min-width 도 역효과.

**HOW**: 변경 필요 시 사용자에게 뷰포트 크기 먼저 확인 (`window.innerWidth`).

---

## SKILL 07 — Anthropic SDK 는 streaming API 사용

**WHEN**: AI 인사이트 생성 등 응답 시간 5분 이상 가능한 호출.

**RULE**: `client.messages.create(...)` 가 아니라 `client.messages.stream(req).finalMessage()` 사용. 테스트 환경 호환을 위한 fallback 도 포함.

**WHY**: Anthropic API 는 5분 초과 non-streaming 요청에 `403 streaming required` 반환. `max_tokens` 큰 호출은 거의 모두 streaming 필요.

**HOW**: `insightAgent.js` 의 `callClaudeInsight` 패턴:
```js
try {
  const msg = await client.messages.stream(req).finalMessage()
  return msg
} catch (e) {
  // 테스트 mock fallback
  return await client.messages.create(req)
}
```

---

## SKILL 08 — 미출시 국가는 unlaunchedMap + 하드코딩 디폴트 병합

**WHEN**: 신호등 회색 처리 / "미출시" 각주 / unlaunched 시트 파서 작업 시.

**RULE**: `unlaunchedMap` 은 두 소스를 병합:
1. Google Sheets `unlaunched` 탭 (사용자 편집 가능)
2. `DEFAULT_UNLAUNCHED` 상수 (코드 하드코딩, 시트 누락 대비)

키 형식: `${country}|${UL_CODE}` (예: `BR|AV`).

**WHY**: 시트 데이터 누락 시 (예: Audio 미출시 정보가 시트에 안 들어와 있을 때) 코드가 fallback 제공해야 함.

**HOW**: `excelUtils.js` 의 `parseUnlaunched` 가 시트 파싱 결과 + DEFAULT_UNLAUNCHED 병합 후 반환. 새 미출시 정보 발견 시 시트에 추가 + DEFAULT_UNLAUNCHED 도 업데이트.

---

## SKILL 09 — Citation 트렌드는 country|domain 키로 재집계

**WHEN**: Citation Domain/Category 트렌드의 국가 필터 처리 시.

**RULE**: 서버는 `'TTL|*'` 와 `'${country}|*'` 두 종류 키로 사전 계산. 클라이언트는 필터 상태에 따라:
- 전체 국가: `'TTL|*'` 키 사용
- 부분 선택: 선택된 국가들의 `'${country}|*'` 값 합산해서 재집계

**WHY**: 클라이언트에서 원시 데이터로 매번 집계하면 느림 + 복잡. 서버 사전계산이 효율적.

**HOW**: `citationTemplate.js` 의 `_renderCitCatTrend` / `_renderCitDomTrend` 인라인 JS 참고. `applyFilter` 의 끝에서 호출.

---

## SKILL 10 — 사이드바 모드별 분기는 명시적 조건문

**WHEN**: `Sidebar.jsx` 변경 시.

**RULE**: 모드 분기는 `{mode !== 'monthly-report' && (<>...</>)}` 식 명시적 React fragment 사용. 모드는:
- `newsletter`
- `dashboard` (visibility)
- `monthly-report`
- `weekly-report`
- `citation` (별도 CitationSidebar.jsx)

**WHY**: 사이드바가 4개 모드에서 공유 → 한 모드에 필요한 입력이 다른 모드에서 노출되면 혼란.

**HOW**: 신규 텍스트 입력 추가 시 어떤 모드에 노출할지 명시. dashboard 모드는 Notice 외 텍스트 입력 모두 숨김 (사용자 요청).

---

## SKILL 11 — 게시(Publish) 후 정적 파일 재생성 필요

**WHEN**: 클라이언트 측 JS / SVG 로직 변경 후.

**RULE**: 사용자에게 **재동기화 + 재게시** 필요성 안내:
1. 사이드바 "구글 시트 동기화" 클릭 (코드 변경이 데이터 파싱에 영향 시)
2. 사이드바 "웹사이트 게시" 클릭 (모든 클라이언트 JS 변경 시)
3. 단순 페이지 새로고침으로는 반영 안 됨

**WHY**: `/p/...` 경로는 PUB_DIR 의 정적 HTML 서빙. 클라이언트 JS 는 게시 시점에 HTML 에 인라인됨.

**HOW**: 답변 마지막에 "재게시 후 확인 부탁드립니다" 등의 문구로 사용자 액션 트리거.

---

## SKILL 12 — 디버깅은 iframe 콘솔에서 자료 회신

**WHEN**: 어드민 페이지에서 대시보드 동작 디버깅 시.

**RULE**: 어드민 프리뷰는 iframe 으로 렌더링. 콘솔 명령은 iframe 컨텍스트에서 실행해야 `_productsCnty` / `_filteredMomD` 등 인라인 변수 접근 가능.

**WHY**: 사용자가 top frame 에서 명령 실행하면 `_productsCnty is not defined` 발생. 명령 결과 자료가 잘못된 컨텍스트.

**HOW**: 사용자에게 안내:
- F12 → Console 상단 드롭다운 → iframe 선택
- 또는 iframe 우클릭 → "이 프레임 검사"

진단 명령 패턴:
```js
// 1) 데이터 자체 확인
_productsCnty.find(r => r.country === 'US' && r.product === 'TV').monthlyScores

// 2) 함수 반환값 확인
_filteredMomD('tv', ['US'])

// 3) DOM 표시값 확인
document.querySelector('.prod-card[data-prodid="tv"] .prod-mom').textContent

// 4) 보이는 카드만 필터
[...document.querySelectorAll('.prod-card[data-prodid="tv"]')]
  .filter(c => c.offsetParent !== null)
```

---

## SKILL 13 — 작은 단위 반복, 한 번에 큰 변경 금지

**WHEN**: 위치/크기/색상 등 시각 조정 시.

**RULE**:
- 한 번 변경은 5~30px / 5~10% 단위로 제한
- 변경 후 즉시 사용자 검증 요청 (재게시 후 확인)
- 큰 변경(예: 100px 이동, 80% 단축)은 사용자가 명시 요청 시에만

**WHY**: 시각 조정은 정확한 정답이 없음 → 사용자 의도와 결과를 매 단계 동기화해야 함. 큰 변경 후 사용자가 "되돌려" 라고 하면 직전 상태 추적이 어려워짐.

**HOW**: 변경 후 답변에 "+20px 아래로 / -10% 자간 축소" 등 수치 명시. 의심 시 `AskUserQuestion` 으로 선택지 제시.

---

## SKILL 14 — 데이터 형식 불확실 시 사용자에게 한 행 요청

**WHEN**: 시트 컬럼 / API 응답 형식이 코드에서 모호할 때.

**RULE**: 추측하지 말고 사용자에게:
- "시트의 date 컬럼 값 형식 예시 한두 개 알려주세요"
- "응답 JSON 의 monthlyScores 첫 entry 구조 console.log 결과 공유"

**WHY**: 정규식/파서 한 줄 차이로 전체 시스템 정합성 깨짐. 추측보다 1줄 확인이 시간 절약.

**HOW**: 시각 자료 + 텍스트 자료 둘 다 받기:
- 스크린샷 (시각 컨텍스트)
- 콘솔 출력 (정확한 데이터)
- 시트 행 복사 (원본 형식)

---

## SKILL 15 — 정렬/포맷은 사용자 표현 그대로 따르되 일관성 유지

**WHEN**: 텍스트 콘텐츠 / 라벨 / 각주 작성 시.

**RULE**:
- 사용자 제공 문구는 **그대로** 사용. 임의로 다듬지 않음.
- 공백/쉼표 등 작은 형식 차이는 사용자 명시 시에만 변경
- 단, 명백한 오타(예: `Sound Suit` → `Sound Suite`)는 사용자 지시 후 일괄 치환

**WHY**: 사용자가 검토한 표현은 일관된 톤/맥락. AI 가 임의로 다듬으면 다른 부분과 불일치.

**HOW**: `replace_all: true` 로 한 번에 치환 + 검증 (`grep` 으로 잔존 확인).

---

## 메타 — 본 스킬 파일 활용

본 파일은 코딩 에이전트가 **새로운 GEO 관련 작업 시작 전 자동 참조**해야 함.

신규 SKILL 추가 트리거:
- 같은 종류 버그가 2회 이상 발생
- 사용자가 "이전에도 이거" 라고 언급
- 특정 패턴이 본 레포 외 다른 곳에서도 재사용 가능

스킬 제거 트리거:
- 더 이상 적용 안 되는 옛 구조 (DB 마이그레이션 등으로 폐기)
- 다른 스킬에 흡수됨
