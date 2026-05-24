<!-- 자동 생성 미러 — 원본: .claude/skills/newsletter-debug/SKILL.md
     수정은 원본에서. 본 파일은 npm run sync:harness 또는 prebuild 시 자동 갱신. -->

# newsletter-debug — 뉴스레터 회귀·디버깅 워크플로우

> 이메일 클라이언트별 깨짐 / 미출시 처리 회귀 / iframe 미리보기 클립 등.
> 참조: `.claude/rules/newsletter.md` §6 ANTI-PATTERN, `.claude/rules/design.md` ANTI-PATTERN.

---

## skill: 미출시 국가 처리 회귀

특정 국가에서 특정 prodId 가 미출시인데 정상 막대로 / 출시인데 회색으로.

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

## skill: 이메일 클라이언트별 깨짐 디버깅

Outlook / Gmail / Apple Mail / mobile clients 에서 깨짐 / 짤림 / 정렬 어긋남.

```
1. [어느 클라이언트 / 어느 케이스인지 명확화]
   ├─ Outlook 2007~2019 (워드 엔진) — flex/grid 미지원, SVG 미지원
   ├─ Outlook 365 Web — 모던 CSS 부분 지원
   ├─ Gmail Web / iOS — <style> 일부 strip
   ├─ Apple Mail (iOS/macOS) — 대부분 정상 (모던)
   └─ 어떤 섹션 / 카드 / 차트가 문제?

2. [NEVER Rule 검토 — .claude/rules/newsletter.md §3]
   ├─ containerWidth > 940? → newsletter-guard.sh hook 이 자동 차단
   ├─ display:flex / display:grid? → table-layout 으로 변환
   ├─ overflow-x:hidden / min-width? → 제거
   ├─ CSS class 참조? → 인라인 style 로 전환
   ├─ 외부 폰트 fallback 없음? → 시스템 fallback 추가
   └─ SVG (Outlook 에서 깨짐)? → weeklyTrendHtml 같은 table-layout 막대로 변환

3. [영향 범위 좁힘]
   ├─ 특정 카드 (V1/V2/V3) 만 깨지는지
   ├─ 특정 카테고리 / 국가만 깨지는지
   ├─ KO 만 / EN 만 깨지는지
   └─ 특정 데이터 (큰 값 / 작은 값 / null) 에서만 깨지는지

4. [디자인 토큰 위반 검사]
   ├─ 하드코딩 색상 / 폰트 추가됐는지 git diff
   ├─ FONT / RED / COMP / BRAND_COLORS 외 색상 사용 안 함
   └─ letter-spacing (KO -0.5px / EN -0.9~-1px) 일관

5. [수정 후 시각 검증]
   ├─ 어드민 iframe 미리보기 KO/EN
   ├─ 빌드 후 정적 HTML
   ├─ 실제 이메일 클라이언트 (Gmail + Outlook + Apple Mail 셋 최소)
   └─ 통과 후 newsletter-send skill 의 발송 워크플로우

6. [패턴 등재]
   ├─ 발견한 깨짐 패턴 → .claude/rules/newsletter.md §6 ANTI-PATTERN
   ├─ 반복되면 newsletter-guard.sh 에 검출 케이스 추가
   └─ BOOTSTRAP-newsletter STEP 6 (본문 작성) 에 사전 검증 추가
```

---

## skill: iframe 미리보기 클립 디버깅

어드민 페이지의 iframe srcdoc 미리보기에서 콘텐츠가 좌우 잘림.

```
1. [부모 컨테이너 검사]
   ├─ iframe 의 부모 div / section 에 overflow-x:hidden 있나
   ├─ body 에 min-width 있나
   ├─ container 너비가 srcdoc 본문 너비보다 작은가
   └─ newsletter-guard.sh 가 자동 검출 (admin 카테고리)

2. [iframe srcdoc 콘텐츠 자체는 의도된 패턴]
   ├─ emailTemplate.js 의 html, body { overflow-x: hidden !important } 는 정상 (이메일 본문 자체 보호)
   ├─ 본 케이스는 hook 검사 제외 (false positive 방지)
   └─ 부모 컨테이너만 점검

3. [iframe height / width 동적 조정]
   ├─ onLoad 후 contentDocument.body.scrollHeight 측정
   ├─ width 는 부모와 일치 (overflow-x 가 없어도 부모 가로 폭에 맞춰져야)
   └─ KO/EN 토글 시 iframe key 강제 재마운트

4. [수정 + 검증]
   ├─ 부모 컨테이너 overflow-x:hidden 제거
   ├─ src/newsletter/App.jsx 등 어드민 React 코드 수정 시 newsletter-guard.sh 자동 검증
   └─ KO/EN 양 모드 미리보기 정상 표시
```
