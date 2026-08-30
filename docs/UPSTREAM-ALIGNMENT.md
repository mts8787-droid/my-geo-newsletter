# 상류(my-geo-audit) 반영 요청 — Readability 채점 기준 정렬

> 작성 2026-08-30. 대상 저장소: `my-geo-project/my-geo-audit`
> 목적: 하류(`my-geo-newsletter`)가 집계 단계에서 걸어둔 보정을 상류에 반영해,
> **크롤 결과 그대로 = 대시보드 = 뉴스레터 본문** 이 되도록 만든다.
>
> 반영이 끝나면 하류의 보정 코드를 삭제할 수 있다 (각 항목에 "삭제 가능 코드" 명시).

---

## 배경

하류는 `scripts/aggregate-readability.mjs` 에서 크롤 결과를 다시 판정한다(SCORING_OVERRIDE).
지금까지는 상류보다 먼저 결정된 기준을 반영하기 위한 임시 조치였는데,
2026-08-30 런부터 상류가 상당수를 자체 구현하면서 **중복·불일치 구간**이 생겼다.

**이미 상류가 흡수해 하류 보정이 불필요해진 것** (요청 없음, 확인만)

| 항목 | 상류 현재 상태 |
|---|---|
| 카테고리 6분류 | `schema_markup` / `citable_content` / `ai_crawlability` 로 분리 완료 |
| #34 페이지타입 게이트 | `applies_to_page_types: [newsroom, press_media, buying_guide, experience]` |
| #5 HTML < 100KB | `enabled: false` |
| #8 Render Blocking | `enabled: false` |
| #1 TTFB | `psi_metric`, `max_value: 600` |
| #4 Cache-Control | `header_max_age_min`, `min_seconds: 0` |

---

## 요청 1 — `ai_summary_ssr` 채점 제외

**파일** `scoring_config.json` (+ `scoring_config.default.json`)

```diff
  { "id": "ai_summary_ssr",
-   "enabled": true,
+   "enabled": false,
```

**사유**
- `#35 Summary Box (콘텐츠)` 와 **같은 것을 두 번 센다**. #35 는 요약 박스 존재를, 이 항목은 그것이 SSR 로 왔는지를 본다.
- 판정이 CSS 클래스명 문자열 매칭(`[class*='summary']`, `[class*='overview']`)이라 `summary-banner` 같은 무관한 클래스도 통과시킨다 — 오탐.

**삭제 가능 코드(하류)** `DISABLED_CHECKS` 의 `ai_summary_ssr`

---

## 요청 2 — `ai_schema_website` 채점 제외

```diff
  { "id": "ai_schema_website",
-   "enabled": true,
+   "enabled": false,
    "applies_to_page_types": ["home"],
```

**사유**
- `home` 페이지 전용인데, 하류는 `home` 을 KPI 집계 범위에서 제외한다(아래 "하류 유지" 참조).
- 결과적으로 분모가 0 이 되어 통과율 표에 `—` 만 남고, "측정했는데 데이터 없음"으로 오해를 부른다.
- 실질 점수 영향 0 — **표시 정리 목적**.

**삭제 가능 코드(하류)** `DISABLED_CHECKS` 의 `ai_schema_website`

---

## 요청 3 — #17 Indexing 허용을 OR 단일 항목으로

현재 상류는 두 항목이 **각각 독립 채점**된다.

| id | 룰 |
|---|---|
| `seo_robots` | `css_attr_not_contains` — `meta[name=robots]` 에 `noindex` 없음 |
| `seo_robots_hdr` | `header_no_value` — `X-Robots-Tag` 에 `noindex` 없음 |

**문제** — 색인 허용 여부는 **하나의 사실**이다. 사이트가 meta 로만 선언하고 헤더를 안 쓰면
(정상적인 구성) 헤더 항목에서 감점된다. 두 항목이 같은 것을 두 번 세기도 한다.

**요청** — 둘을 합쳐 "둘 중 하나라도 색인 허용이면 통과" 인 단일 항목으로.

```jsonc
// 방안 A (권장) — 새 rule type 신설
{ "id": "seo_indexable",
  "name": "#17 Indexing 허용 (meta robots 또는 X-Robots-Tag)",
  "spec_id": "#17",
  "rule": { "type": "noindex_absent",
            "params": { "selector": "meta[name='robots' i]", "header": "x-robots-tag", "token": "noindex" } } }
// seo_robots / seo_robots_hdr 는 enabled:false

// 방안 B — seo_robots_hdr 만 enabled:false 로 끄고 seo_robots 유지
//   구현은 간단하나 "헤더로만 noindex 를 건 페이지"를 놓친다
```

**참고** — 하류는 이미 OR 로 묶어 채점 중이며 현재 통과율 **100%** 다.
상류 반영 시 항목 수가 **39 → 38** 로 하류와 일치한다.

**삭제 가능 코드(하류)** `OR_GROUPS`, `ABSORBED_CHECKS`

---

## 요청 4 — PSI 수집을 크롤 파이프라인에 편입

상류 `perf_ttfb` 는 이미 `psi_metric` 이지만, PSI 미수집이면 전 페이지가 `na` 로 빠진다.

```
현재 hint: "PSI 미수집 — psi_collect.py 로 수집 후 평가됩니다."
```

**요청** — 크롤 종료 후 PSI 수집이 자동으로 이어지도록 파이프라인에 편입.

**사유** — 크롤러 자체 TTFB 는 실측 대비 6~200배 부풀려져 있었다
(1,536 URL 대조: 크롤러 기준 통과 12.4% vs PSI 기준 97.7%). 현재 하류는
직전 달 PSI 파일로 대신 채점 중이라 신선도가 떨어진다.

**삭제 가능 코드(하류)** `RECHECK.perf_ttfb` 의 크롤러 폴백 분기
(단, 아래 "하류 유지" 의 셀 대표값 보정은 남는다)

---

## 요청 5 — 재크롤 (설정 변경 없음)

`#4 Cache-Control` 은 **상류 룰이 이미 맞다**. 다만 8/30 런이 옛 룰로 돌아
저장된 판정이 낡았다.

```
옛 룰: no-cache / no-store 가 보이면 max-age 값을 보지 않고 즉시 FAIL
현재 룰: max-age 디렉티브가 있으면 통과 (min_seconds: 0)
```

8/30 데이터에서 **1,123건** 이 어긋난다 (대부분 `max-age=0, no-cache, no-store`).
현재 하류가 저장된 헤더 문자열로 재판정해 메우고 있다
(상류 `gen_dashboard_data.py` 도 같은 백필을 한다).

**요청** — 다음 크롤은 현재 룰로 수집.

**삭제 가능 코드(하류)** `RECHECK.perf_cache_control`

---

## 하류에 남기는 것 (상류 변경 요청 아님)

채점 룰이 아니라 **KPI 집계 범위** 결정이라 하류에 두는 것이 맞다.

| 항목 | 내용 | 사유 |
|---|---|---|
| `EXCLUDED_PT` | `unknown` · `home` · `business` · `promotion` 집계 제외 | B2B·프로모션은 GEO KPI 대상 아님. `unknown` 은 분류 실패분 |
| 비-200 제외 | `ai_status_200` FAIL 페이지 전체 제외 | 404 셸이 다른 항목을 cascade-FAIL 시켜 지표를 왜곡 |
| TTFB 셀 대표값 보정 | PSI 미측정 URL 을 `국가 × 페이지타입` 중앙값으로 보정 | PSI 수집이 전수가 아닐 때의 표본 보정 |

---

## 반영 후 하류에서 지울 코드

`scripts/aggregate-readability.mjs`

```
DISABLED_CHECKS       → ai_summary_ssr, ai_schema_website 제거 (요청 1·2)
                        perf_html_size, perf_render_block 은 재크롤 후 제거
OR_GROUPS             → 통째 삭제 (요청 3)
ABSORBED_CHECKS       → 통째 삭제 (요청 3)
RECHECK.perf_cache_control → 삭제 (요청 5)
RECHECK.perf_ttfb     → 크롤러 폴백 분기만 삭제 (요청 4)
EDITORIAL_PT          → 전 국가 신포맷 전환 후 삭제
PT_SCOPED_CHECKS      → 동일
SRC_CATEGORIES        → 구포맷 키(ai_readiness) 제거
```

지운 뒤 `npm test` 의 "38항목 체계 고정" 테스트가 통과해야 한다
(`test/mergeEnMeta.test.js`).
