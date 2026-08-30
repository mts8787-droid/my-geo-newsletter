// Readability 대시보드 i18n — 집안 패턴(dashboardConsts.T)과 동일하게 { ko, en } 사전.
// 사용: const t = T[lang] || T.ko  ·  t.heroTitle
//
// 서버 렌더와 클라이언트 인라인 스크립트가 같은 사전을 쓴다 —
// 클라는 import 를 못 하므로 서버가 __RD.i18n 으로 주입한다 (design.md §5.8 서버↔클라 짝).

export const T = {
  ko: {
    // ── 페이지 골격
    pageTitle: 'Readability — GEO 어딧',
    backAdmin: '← 어드민',
    howToRead: 'How to Read',
    docHeading: 'Readability - Dot Com Audit',
    // How to Read 본문 — {n} 은 평가 페이지 수 (스냅샷에서 주입)
    htrP1: (n) => `<strong>Readability</strong>는 <strong>AI 관점에서의 가독성</strong>을 뜻하며, 웹페이지의 콘텐츠가 AI가 읽고 활용하기 좋은 상태인지 평가하는 지표입니다. ‘26년 6월부터 LG.com의 Readability 현황을 파악하기 위해 <strong>10개 전략 국가</strong>의 주요 페이지 유형, 총 <strong id="htr-urlcount">${n}개 페이지</strong>를 평가했습니다(<span class="htr-em">매월 마지막 주차 진행</span>). 10개 국가 사이트에 더해 <strong>글로벌 대표 사이트(lg.com/global)</strong>를 별도 사이트로 포함했습니다.`,
    htrP2: '<strong>Readability 점수</strong>는 <strong>전체 평가항목 중 기준을 충족한 항목의 비율(%)을 100점 기준으로 환산</strong>한 점수입니다. 평가는 사이트 성능, AI 웹접근성, Basic SEO 적합도, 스키마마크업, 고인용 콘텐츠, AI Crawlability의 <strong>6개 영역, 총 38개 체크리스트</strong>를 기준으로 진행했습니다. 각 항목의 정의와 판정 기준은 <strong>검수 기준 탭</strong>과 대시보드 내 <strong>항목별 간략 설명</strong>에서 확인하실 수 있습니다.',
    htrP3: '각 국가·페이지 담당 부서에서는 <strong>국가별 / 페이지 타입별 탭</strong>을 통해 담당 범위의 검수 결과를 확인하실 수 있습니다. 각 탭에서 <span class="htr-step">(1) 전체 점수</span> <span class="htr-step">(2) 세부 항목별 점수</span> <span class="htr-step">(3) 시급 개선 항목</span> 을 순서대로 살펴보시면, 현재 보완이 필요한 영역을 파악하고 <strong>개선 과제를 도출하여 업무에 활용</strong>하실 수 있습니다.',
    // ── 탭
    tabCountry: '국가별', tabPageType: '페이지 타입별', tabRaw: 'Raw 데이터', tabCriteria: '검수 기준',
    // ── 필터
    fMonth: '측정 월', fCountry: '국가', fPageType: '페이지 타입', fCheck: '항목', fResult: '결과',
    allCountries: '전체 국가', allPageTypes: '전체 페이지 타입', allChecks: '전체 항목', allResults: '전체',
    // ── 섹션 제목
    secCountryScore: '국가별 종합 점수 비교',
    secCountryScoreFiltered: '국가별 점수 비교',
    secPageTypeScore: '페이지타입별 점수',
    secCheckRate: '체크별 통과율',
    secUrgent: '시급 개선 항목',
    secRaw: 'Raw 데이터 (페이지별 체크 PASS/FAIL) — 국가 · 타입 · 항목 · 결과 조합',
    // ── 표 머리
    thItem: '항목', thDef: '정의', thPass: 'Pass 기준', thRate: '통과율',
    thCountry: '국가', thType: '타입', thUrl: 'URL', thResult: '결과',
    colScore: '점수', colPages: '페이지수',
    // ── 개선 가이드 라벨
    gWhat: '점검 내용', gWhy: '리스크', gWhere: '담당 영역', gAct: '조치 사항',
    gNow: '현재 위치', gNote: '참고', gPin: '선행', gGap: '미통과',
    // ── 다운로드
    dlTitle: '검수 URL 다운로드',
    dlSub: (d) => `측정일 ${d} 기준 어딧 대상 전체 URL (URL · 국가 · 페이지타입 · 점수)`,
    dlCsv: 'CSV 다운로드', dlCsvAll: 'CSV 전체 다운로드',
    criteriaHead: (c, n) => `검수 기준 — ${c}개 카테고리 ${n}개 항목 (통과율은 위 탭에서 확인)`,
    // ── 안내 · 상태
    loading: '불러오는 중…',
    noData: '조건에 맞는 데이터가 없습니다.',
    noDataCond: '해당 조건에 데이터가 없습니다.',
    rawLoadFail: 'Raw 데이터를 불러오지 못했습니다: ',
    measuredAt: '측정일',
    sampleNote: (n) => `표본 ${n} URL — 표본이 적은 페이지타입은 통과율 변동이 큽니다.`,
    urgentNote: (max, n) => `통과율 ${max}% 미만 ${n}개 — 낮은 순. 필터를 바꾸면 해당 국가·페이지타입에 맞는 조치로 바뀝니다.`,
    urgentNone: (max) => `이 조건에서는 통과율 ${max}% 미만 항목이 없습니다.`,
    rowsShown: (n) => `${n}건 표시 (전체는 CSV)`,
    // ── 자동 해석
    aDiffHigh: (base, r, d) => `${base} ${r}% 대비 +${d}%p 높습니다.`,
    aDiffLow: (base, r, d) => `${base} ${r}% 대비 ${d}%p 낮습니다.`,
    aBaseAll: '전체 평균', aBasePt: (p) => `${p} 전체 평균`,
    aTop: (p) => `${p}전 사이트 중 1위입니다. 다른 사이트가 참고할 기준점이 됩니다.`,
    aBottom: (p, pos, best, br) => `${p}전 사이트 중 최하위입니다 (${pos}). 최고인 ${best}(${br}%) 의 구성 방식을 확인해 볼 수 있습니다.`,
    aMid: (p, pos, best, br, worst, wr) => `${p}${pos} — 최고 ${best} ${br}% / 최저 ${worst} ${wr}%.`,
    aPos: (i, n) => `${i}위 / ${n}개 사이트`,
    aPtBottom: (n, best, br) => `이 사이트의 ${n}개 페이지타입 중 이 타입이 가장 낮습니다. 같은 사이트의 ${best}(${br}%) 와 비교해 보면 원인이 좁혀집니다.`,
    aPtMid: (i, n, best, br) => `이 사이트 내 ${i}위 / ${n}개 타입 — 최고는 ${best} ${br}%.`,
    // 클라이언트용 템플릿 — {max} {n} {name} {type} 자리표시자를 클라가 치환
    tplUrgentNote: '통과율 {max}% 미만 {n}개 — 낮은 순. 필터를 바꾸면 해당 국가·페이지타입에 맞는 조치로 바뀝니다.',
    tplUrgentNone: '이 조건에서는 통과율 {max}% 미만 항목이 없습니다.',
    tplSecUrgent: '시급 개선 항목 ({scope} · {type})',
    tplSecCheckRate: '체크별 통과율 ({scope} · {type})',
    tplSample: '표본 {n} URL — 표본이 적은 페이지타입은 통과율 변동이 큽니다.',
    tplDiffHigh: '{base} {r}% 대비 +{d}%p 높습니다.',
    tplDiffLow: '{base} {r}% 대비 -{d}%p 낮습니다.',
    tplBaseAll: '전체 평균', tplBasePt: '{p} 전체 평균',
    tplTop: '{p}전 사이트 중 1위입니다. 다른 사이트가 참고할 기준점이 됩니다.',
    tplBottom: '{p}전 사이트 중 최하위입니다 ({pos}). 최고인 {best}({br}%) 의 구성 방식을 확인해 볼 수 있습니다.',
    tplMid: '{p}{pos} — 최고 {best} {br}% / 최저 {worst} {wr}%.',
    tplPos: '{i}위 / {n}개 사이트',
    tplPtBottom: '이 사이트의 {n}개 페이지타입 중 이 타입이 가장 낮습니다. 같은 사이트의 {best}({br}%) 와 비교해 보면 원인이 좁혀집니다.',
    tplPtMid: '이 사이트 내 {i}위 / {n}개 타입 — 최고는 {best} {br}%.',
    tplPtBasis: '{p} 기준 ',
    scopeAll: '전체', scopeAllPt: '전체 타입',
  },
  en: {
    pageTitle: 'Readability — GEO Audit',
    backAdmin: '← Admin',
    howToRead: 'How to Read',
    docHeading: 'Readability - Dot Com Audit',
    htrP1: (n) => `<strong>Readability</strong> measures <strong>how readable a page is from an AI's point of view</strong> — whether the content is in a state AI can read and make use of. Since June 2026 we have been assessing LG.com's Readability across the major page types in <strong>10 strategic countries</strong>, covering <strong id="htr-urlcount">${n} pages</strong> in total (<span class="htr-em">run in the last week of each month</span>). Alongside the 10 country sites, the <strong>global flagship site (lg.com/global)</strong> is included as its own site.`,
    htrP2: 'The <strong>Readability score</strong> is <strong>the share of checklist items meeting the bar, normalised to a 100-point scale</strong>. The assessment covers <strong>6 areas and 38 checklist items in total</strong> — Site Performance, AI Accessibility, Basic SEO, Schema Markup, Citable Content, and AI Crawlability. Definitions and pass criteria for each item are on the <strong>Criteria tab</strong> and in the <strong>per-item notes</strong> on this dashboard.',
    htrP3: 'Teams owning a country or page type can review their own scope through the <strong>By Country / By Page Type tabs</strong>. Working through <span class="htr-step">(1) the overall score</span> <span class="htr-step">(2) scores by item</span> <span class="htr-step">(3) urgent items</span> in order shows where attention is needed and <strong>turns it into improvement tasks you can act on</strong>.',
    tabCountry: 'By Country', tabPageType: 'By Page Type', tabRaw: 'Raw Data', tabCriteria: 'Criteria',
    fMonth: 'Month', fCountry: 'Country', fPageType: 'Page Type', fCheck: 'Item', fResult: 'Result',
    allCountries: 'All countries', allPageTypes: 'All page types', allChecks: 'All items', allResults: 'All',
    secCountryScore: 'Overall Score by Site',
    secCountryScoreFiltered: 'Score by Site',
    secPageTypeScore: 'Score by Page Type',
    secCheckRate: 'Pass Rate by Item',
    secUrgent: 'Urgent Items',
    secRaw: 'Raw Data (per-page PASS/FAIL) — Country · Type · Item · Result',
    thItem: 'Item', thDef: 'Definition', thPass: 'Pass criteria', thRate: 'Pass rate',
    thCountry: 'Country', thType: 'Type', thUrl: 'URL', thResult: 'Result',
    colScore: 'Score', colPages: 'Pages',
    gWhat: 'What it checks', gWhy: 'Risk', gWhere: 'Owner area', gAct: 'Action',
    gNow: 'Where it stands', gNote: 'Note', gPin: 'BLOCKER', gGap: 'failing',
    dlTitle: 'Download audited URLs',
    dlSub: (d) => `All audited URLs as of ${d} (URL · country · page type · score)`,
    dlCsv: 'Download CSV', dlCsvAll: 'Download full CSV',
    criteriaHead: (c, n) => `Criteria — ${n} items across ${c} categories (pass rates on the tabs above)`,
    loading: 'Loading…',
    noData: 'No data matches these filters.',
    noDataCond: 'No data for this selection.',
    rawLoadFail: 'Could not load raw data: ',
    measuredAt: 'Measured',
    sampleNote: (n) => `Sample of ${n} URLs — page types with small samples show volatile pass rates.`,
    urgentNote: (max, n) => `${n} items below ${max}% — lowest first. Changing the filters updates the guidance for that country and page type.`,
    urgentNone: (max) => `No items below ${max}% for this selection.`,
    rowsShown: (n) => `Showing ${n} rows (full set in CSV)`,
    aDiffHigh: (base, r, d) => `${d}%p above the ${base} of ${r}%.`,
    aDiffLow: (base, r, d) => `${String(d).replace('-', '')}%p below the ${base} of ${r}%.`,
    aBaseAll: 'overall average', aBasePt: (p) => `${p} average`,
    aTop: (p) => `${p}Highest of all sites — a reference point for the others.`,
    aBottom: (p, pos, best, br) => `${p}Lowest of all sites (${pos}). Worth reviewing how ${best} (${br}%) is set up.`,
    aMid: (p, pos, best, br, worst, wr) => `${p}${pos} — highest ${best} ${br}% / lowest ${worst} ${wr}%.`,
    aPos: (i, n) => `${i} of ${n} sites`,
    aPtBottom: (n, best, br) => `Lowest of this site's ${n} page types. Comparing with ${best} (${br}%) on the same site narrows down the cause.`,
    aPtMid: (i, n, best, br) => `${i} of ${n} page types on this site — highest is ${best} ${br}%.`,
    tplUrgentNote: '{n} items below {max}% — lowest first. Changing the filters updates the guidance for that country and page type.',
    tplUrgentNone: 'No items below {max}% for this selection.',
    tplSecUrgent: 'Urgent Items ({scope} · {type})',
    tplSecCheckRate: 'Pass Rate by Item ({scope} · {type})',
    tplSample: 'Sample of {n} URLs — page types with small samples show volatile pass rates.',
    tplDiffHigh: '{d}%p above the {base} of {r}%.',
    tplDiffLow: '{d}%p below the {base} of {r}%.',
    tplBaseAll: 'overall average', tplBasePt: '{p} average',
    tplTop: '{p}Highest of all sites — a reference point for the others.',
    tplBottom: '{p}Lowest of all sites ({pos}). Worth reviewing how {best} ({br}%) is set up.',
    tplMid: '{p}{pos} — highest {best} {br}% / lowest {worst} {wr}%.',
    tplPos: '{i} of {n} sites',
    tplPtBottom: "Lowest of this site's {n} page types. Comparing with {best} ({br}%) on the same site narrows down the cause.",
    tplPtMid: '{i} of {n} page types on this site — highest is {best} {br}%.',
    tplPtBasis: 'For {p}, ',
    scopeAll: 'All', scopeAllPt: 'All types',
  },
}

// 문자열만 추린 사전 — 클라이언트 주입용 (함수는 직렬화가 안 되므로 서버에서 미리 문자열화하거나
// 클라가 같은 로직을 갖는다. 여기서는 함수도 포함해 서버 렌더에서만 호출하고,
// 클라에는 toClientDict 로 함수 제외 사전을 넘긴다.)
export function toClientDict(lang) {
  const t = T[lang] || T.ko
  const out = {}
  Object.entries(t).forEach(([k, v]) => { if (typeof v !== 'function') out[k] = v })
  return out
}
