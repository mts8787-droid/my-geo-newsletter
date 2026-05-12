// ─── AI 인사이트 생성용 프롬프트 빌더 ─────────────────────────────────────────
// server.js와 vite dev plugin에서 공유

function buProductSummary(products) {
  const buMap = {}
  products.forEach(p => {
    const bu = p.bu || 'etc'
    if (!buMap[bu]) buMap[bu] = []
    buMap[bu].push(p)
  })
  return Object.entries(buMap).map(([bu, prods]) => {
    const lines = prods.map(p => {
      const mom = p.prev ? `MoM: ${(p.score - p.prev) > 0 ? '+' : ''}${(p.score - p.prev).toFixed(1)}%p (전월 ${p.prev}%)` : 'MoM: 전월 데이터 없음'
      return `  - ${p.kr}: ${p.score}% (경쟁사 대비 ${p.compRatio || '—'}%, 상태: ${p.status}, ${mom})`
    }).join('\n')
    return `[${bu}본부]\n${lines}`
  }).join('\n')
}

function countrySummary(productsCnty) {
  if (!productsCnty || !productsCnty.length) return ''
  const cntyMap = {}
  productsCnty.forEach(r => {
    if (!cntyMap[r.country]) cntyMap[r.country] = []
    cntyMap[r.country].push(r)
  })
  return Object.entries(cntyMap).map(([cnty, rows]) => {
    const avg = rows.length ? +(rows.reduce((s, r) => s + r.score, 0) / rows.length).toFixed(1) : 0
    const top = rows.sort((a, b) => b.score - a.score)[0]
    const bottom = rows.sort((a, b) => a.score - b.score)[0]
    return `${cnty}: 평균 ${avg}% (최고: ${top?.product} ${top?.score}%, 최저: ${bottom?.product} ${bottom?.score}%)`
  }).join('\n')
}

export function buildInsightPrompt(type, data) {
  if (type === 'product') {
    const products = data.products || []
    const t = data.total || {}
    const prevDelta = t.prev && t.prev !== t.score ? ` (전월 ${t.prev}%, ${(t.score - t.prev) > 0 ? '+' : ''}${(t.score - t.prev).toFixed(1)}%p)` : ''
    const compPrevDelta = t.prev && t.vsComp ? ` (전월 경쟁비 ${Math.round((t.prev / t.vsComp) * 100)}%)` : ''
    const countryTotals = t.countryTotals || {}
    const cntyLines = Object.entries(countryTotals).map(([c, v]) => `[공식수치] ${c} LG = ${v.lg}% / 경쟁 = ${v.comp}%`).join('\n')

    return `아래는 제품별 GEO Visibility 현황입니다. 모든 본부(MS/HS/ES)와 국가를 포함하여 분석하세요.

※ 아래 [공식수치]는 시트 원본값입니다. 이 값을 그대로 인용하세요. 절대 새로 계산하지 마세요.
[공식수치] 전체 LG Visibility = ${t.score ?? '—'}%${prevDelta}
[공식수치] 전체 경쟁사(Samsung) Visibility = ${t.vsComp ?? '—'}%${compPrevDelta}
${t.buTotals ? Object.entries(t.buTotals).map(([bu, v]) => `[공식수치] ${bu}본부 LG = ${v.lg}% / 경쟁 = ${v.comp}%`).join('\n') : ''}
${cntyLines ? `\n국가별 전체:\n${cntyLines}` : ''}

본부별 제품 상세:
${buProductSummary(products)}

[필수: 모든 본부(MS, HS, ES)를 빠짐없이 분석할 것]
[필수: 주요 수치에 전월 대비 증감을 반드시 포함 — 예: "42.7%(전월 대비 +1.2%p)"]
[주의: 전체 수치는 위의 "전체 LG Visibility" 값을 사용. 제품별 평균으로 계산하지 말 것]`
  }

  if (type === 'citation') {
    const citations = data.citations || []
    const total = citations.reduce((s, c) => s + c.score, 0)
    const list = citations.slice(0, 10).map((c, i) =>
      `${i + 1}. ${c.source} (${c.category || ''}) — ${c.score}건 (${total > 0 ? ((c.score / total) * 100).toFixed(1) : 0}%)`
    ).join('\n')
    return `[섹션: 도메인 카테고리별 Citation 현황]
이 섹션에는 Retail, Review, SNS, Community 등 도메인 카테고리별 Citation 건수와 비중을 보여주는 수평 바 차트가 있습니다.
인사이트는 이 차트 아래에 삽입됩니다. 기준 템플릿의 포맷을 따라 수치만 교체하세요.

[공식수치] 전체 Citation: ${total}건
카테고리별:
${list}`
  }

  if (type === 'dotcom') {
    const lg = (data.dotcom || {}).lg || {}, sam = (data.dotcom || {}).samsung || {}
    const cols = Object.keys(lg).filter(k => k !== 'TTL')
    const comparison = cols.map(k =>
      `${k}: LG ${lg[k] || 0}건 vs SS ${sam[k] || 0}건 (${(lg[k] || 0) > (sam[k] || 0) ? 'LG우위' : (sam[k] || 0) > (lg[k] || 0) ? 'SS우위' : '동일'})`
    ).join('\n')
    return `[섹션: 닷컴 Citation (경쟁사대비)]
이 섹션에는 LG vs Samsung 공식 사이트의 페이지 유형별(TTL, PLP, PDP, Newsroom, Support 등) Citation 건수를 비교하는 테이블이 있습니다.
인사이트는 이 테이블 아래에 삽입됩니다. 기준 템플릿의 포맷을 따라 수치만 교체하세요.

[공식수치] 전체: LG ${lg.TTL || 0}건 vs SS ${sam.TTL || 0}건
페이지 유형별:
${comparison}`
  }

  if (type === 'cnty') {
    const cntyMap = {}
    ;(data.productsCnty || []).forEach(r => {
      if (!cntyMap[r.country]) cntyMap[r.country] = []
      cntyMap[r.country].push(r)
    })
    const list = Object.entries(cntyMap).map(([cnty, rows]) => {
      const lines = rows.map(r => {
        const ratio = r.compScore > 0 ? Math.round((r.score / r.compScore) * 100) : '—'
        return `  [공식수치] ${r.product}: LG ${r.score}% vs ${r.compName || '경쟁'} ${r.compScore || '—'}% (경쟁비: ${ratio}%)`
      }).join('\n')
      return `[${cnty}]\n${lines}`
    }).join('\n')
    return `[섹션: 국가별 GEO Visibility 현황]
모든 국가(US,CA,UK,DE,ES,BR,MX,AU,VN,IN)의 데이터를 빠짐없이 분석하세요.

※ 아래 수치는 시트 원본값입니다. 이 값만 사용하세요. 절대 다른 수치를 만들지 마세요.

${list}

[필수: 모든 국가를 포함하여 분석할 것]
[필수: 경쟁비, 점수 등 수치는 위 [공식수치]만 사용]`
  }

  if (type === 'citDomain') {
    const list = (data.citationsCnty || []).filter(r => r.cnty === 'TTL').slice(0, 10).map((r, i) =>
      `${i + 1}. ${r.domain} (${r.type || ''}) — ${r.citations}건`
    ).join('\n')
    return `[섹션: 도메인별 Citation 현황]
이 섹션에는 개별 도메인(Reddit, Youtube, lg.com, Amazon 등)별 Citation 건수를 보여주는 막대 차트가 있습니다.
인사이트는 이 차트 아래에 삽입됩니다. 기준 템플릿의 포맷을 따라 수치만 교체하세요.

도메인별 Top 10:
${list}`
  }

  if (type === 'citCnty') {
    const cntyMap = {}
    ;(data.citationsCnty || []).filter(r => r.cnty !== 'TTL').forEach(r => {
      if (!cntyMap[r.cnty]) cntyMap[r.cnty] = []
      cntyMap[r.cnty].push(r)
    })
    const summary = Object.entries(cntyMap).map(([cnty, rows]) => {
      const total = rows.reduce((s, r) => s + r.citations, 0)
      const top3 = rows.sort((a, b) => b.citations - a.citations).slice(0, 3)
      return `${cnty}: 전체 ${total}건 — 1위 ${top3[0]?.domain}(${top3[0]?.citations}건), 2위 ${top3[1]?.domain || ''}(${top3[1]?.citations || ''}건), 3위 ${top3[2]?.domain || ''}(${top3[2]?.citations || ''}건)`
    }).join('\n')
    return `[섹션: 국가별 Citation 도메인]
이 섹션에는 국가별로 Top 10 인용 도메인을 보여주는 막대 차트가 있습니다.
영어권은 Reddit/Review 중심, 비영어권은 Youtube/리테일 중심 패턴이 특징입니다.
인사이트는 이 차트 아래에 삽입됩니다. 기준 템플릿의 포맷을 따라 수치만 교체하세요.

국가별 상위 도메인:
${summary}

[분석 포인트: 국가별 인용 패턴 차이, 주요 시장별 핵심 도메인, 국가별 최적화 전략]`
  }

  if (type === 'citPrd') {
    const PRD_KR = { TV:'TV', IT:'모니터', MONITOR:'모니터', AV:'오디오', AUDIO:'오디오', REF:'냉장고', WM:'세탁기', DW:'식기세척기', VC:'청소기', COOKING:'Cooking', RAC:'RAC', AIRCARE:'Aircare' }
    const PRD_BU = { TV:'MS', IT:'MS', MONITOR:'MS', AV:'MS', AUDIO:'MS', REF:'HS', WM:'HS', DW:'HS', VC:'HS', COOKING:'HS', RAC:'ES', AIRCARE:'ES' }
    const isPrdSpec = p => p && String(p).toUpperCase() !== 'TTL' && String(p).toUpperCase() !== 'TOTAL'
    const prdGroups = {}
    ;(data.citationsCnty || []).forEach(r => {
      if (!isPrdSpec(r.prd)) return
      if (!prdGroups[r.prd]) prdGroups[r.prd] = []
      prdGroups[r.prd].push(r)
    })
    const buGroups = { MS: [], HS: [], ES: [], etc: [] }
    Object.entries(prdGroups).forEach(([prd, rows]) => {
      const code = String(prd).toUpperCase()
      const bu = PRD_BU[code] || 'etc'
      const name = PRD_KR[code] || prd
      // 제품별 분모: 카테고리는 전체 citation 합계, 도메인은 도메인 보유 행 합계
      const totalForCat = rows.reduce((s, r) => s + (r.citations || 0), 0) || 1
      const totalForDom = rows.reduce((s, r) => s + (r.domain ? (r.citations || 0) : 0), 0) || 1
      // Top 3 카테고리·도메인 산출 — 비중(%)으로 표시 (절대 건수 X)
      const catMap = {}; rows.forEach(r => { const c = r.type || '기타'; catMap[c] = (catMap[c] || 0) + (r.citations || 0) })
      const top3Cat = Object.entries(catMap).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([n, v]) => `${n}(${(v / totalForCat * 100).toFixed(1)}%)`).join(', ')
      const domMap = {}; rows.forEach(r => { if (r.domain) domMap[r.domain] = (domMap[r.domain] || 0) + (r.citations || 0) })
      const top3Dom = Object.entries(domMap).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([n, v]) => `${n}(${(v / totalForDom * 100).toFixed(1)}%)`).join(', ')
      buGroups[bu].push(`  - ${name}: Top3 카테고리 [${top3Cat}] / Top3 도메인 [${top3Dom}]`)
    })
    const summary = Object.entries(buGroups).filter(([, arr]) => arr.length).map(([bu, arr]) => `[${bu}본부]\n${arr.join('\n')}`).join('\n')
    return `[섹션: 제품별 Citation — 본부별 그룹핑, 각 제품 Top 3 카테고리·도메인]
이 섹션은 제품별로 Citation 의 강한 카테고리·도메인을 보여줍니다. 본부(MS/HS/ES)별로 묶여있고, 각 제품 카드에 Top 3 카테고리 + Top 3 도메인 막대그래프가 표시됩니다.

⚠ 중요 — 제품별 측정 프롬프트 수가 상이하므로 절대 건수 비교는 무의미합니다.
모든 수치는 **비중(%)** 으로만 표시되며, 인사이트도 반드시 **비중 기반**으로 작성하세요.

본부·제품별 핵심 인용 채널 (괄호 안 수치 = 제품 내 비중%):
${summary}

[분석 포인트: 본부별 인용 패턴 차이(MS=콘텐츠 중심? / HS=Retail 중심? / ES=전문 채널?), 제품별 강점 카테고리/도메인, 약점 제품의 보완 전략]
[필수: 모든 본부(MS/HS/ES)를 빠짐없이 언급]
[필수: 구체적 제품명·도메인명을 인용]
[필수: 수치는 반드시 비중(%)으로 표현 — '~건' 등 절대 건수 표현 사용 금지]
[필수: 제품 간 단순 건수 비교 금지 — 비중·구성·집중도 관점으로만 비교]`
  }

  if (type === 'totalInsight') {
    const products = data.products || []
    const productsCnty = data.productsCnty || []
    const t = data.total || {}
    const leads = products.filter(p => p.status === 'lead')
    const criticals = products.filter(p => p.status === 'critical')
    const behinds = products.filter(p => p.status === 'behind')
    const prevDelta = t.prev && t.prev !== t.score ? `(전월 ${t.prev}%, ${(t.score - t.prev) > 0 ? '+' : ''}${(t.score - t.prev).toFixed(1)}%p)` : ''
    const countryTotals = t.countryTotals || {}
    const cntyLines = Object.entries(countryTotals).map(([c, v]) => `[공식수치] ${c} LG = ${v.lg}% / 경쟁 = ${v.comp}%`).join('\n')

    return `[섹션: Executive Summary — 전체 GEO Visibility 카드]
이 섹션은 전체 LG Visibility 점수, 경쟁사 대비 Gap, 본부별(MS/HS/ES) 수치가 포함된 다크 배경 히어로 카드입니다.
모든 본부(MS/HS/ES)와 주요 국가를 포함하여 분석하세요. 기준 템플릿의 수치만 교체하세요.

※ 아래 [공식수치]는 시트 TTL 원본값입니다. 절대 새로 계산하지 마세요.
[공식수치] 전체 LG Visibility = ${t.score ?? '—'}% ${prevDelta}
[공식수치] 전체 경쟁사(Samsung) Visibility = ${t.vsComp ?? '—'}%
${t.buTotals ? Object.entries(t.buTotals).map(([bu, v]) => `[공식수치] ${bu}본부 LG = ${v.lg}% / 경쟁 = ${v.comp}%`).join('\n') : ''}
${cntyLines ? `\n국가별 전체:\n${cntyLines}` : ''}

본부별 제품 상세:
${buProductSummary(products)}

선도(≥100%): ${leads.map(p => `${p.kr}(${p.score}%)`).join(', ') || '없음'}
추격(≥80%): ${behinds.map(p => `${p.kr}(${p.score}%)`).join(', ') || '없음'}
취약(<80%): ${criticals.map(p => `${p.kr}(${p.score}%)`).join(', ') || '없음'}

${countrySummary(productsCnty) ? `국가별 제품 요약:\n${countrySummary(productsCnty)}` : ''}

${data.todoText ? `\n액션아이템 (인사이트 마지막에 1~2줄로 요약 포함):\n${data.todoText}` : ''}

[필수: 모든 본부(MS, HS, ES)를 빠짐없이 분석할 것]
[필수: 주요 수치에 전월 대비 증감을 반드시 포함 — 예: "42.7%(전월 대비 +1.2%p)"]
[필수: 인사이트 마지막에 위 액션아이템의 핵심 1~2개를 한 줄로 요약 추가]
[주의: 전체 수치는 "전체 LG Visibility" 값 사용. 제품별 평균이 아님]`
  }

  if (type === 'monthlyReportBody') {
    const products = data.products || []
    const productsCnty = data.productsCnty || []
    const citations = data.citations || []
    const t = data.total || {}
    const period = data.period || ''
    const todoText = data.todoText || ''
    const prevDelta = t.prev && t.prev !== t.score ? `(전월 ${t.prev}%, ${(t.score - t.prev) > 0 ? '+' : ''}${(t.score - t.prev).toFixed(1)}%p)` : ''
    const countryTotals = t.countryTotals || {}
    const cntyLines = Object.entries(countryTotals).map(([c, v]) => `[공식수치] ${c} LG = ${v.lg}% / 경쟁 = ${v.comp}%`).join('\n')
    const citTotal = citations.reduce((s, c) => s + (c.score || 0), 0)
    const citTop = citations.slice(0, 5).map((c, i) => `${i + 1}. ${c.source} (${c.category || ''}) — ${c.score}건 (${citTotal > 0 ? ((c.score / citTotal) * 100).toFixed(1) : 0}%)`).join('\n')
    return `[섹션: GEO 월간 보고서 본문 — 임원/스테이크홀더 대상 종합 보고서]
아래 3개 섹션 구조로 ${period || '이번 달'} GEO 성과 종합 보고서를 작성하세요. 각 섹션은 번호로 구분하고, 2번 섹션은 2.1/2.2/2.3 하위 섹션을 포함합니다.

[필수 구조]
1. GEO 최적화의 중요성 및 방향성 정의 (도입부 — LLM 시대 마케팅 패러다임 변화, Brand Visibility/Citation/Readability KPI 정의)
2. ${period || '이번 달'} 실적 리뷰 - AI 노출 및 인용 현황
   2.1 글로벌 성과 요약 (전체 Visibility, 경쟁사 대비, 주요 카테고리 요약)
   2.2 지역별 세부 현황 (북미·유럽·중남미·아시아 권역별 — 강점/약점 카테고리)
   2.3 Citation(인용) 분석 (Retail/Review 비중, 영어권/비영어권 핵심 채널)
3. 향후 추진 방향 및 Action Items (①~⑤ 번호 매김, 각 항목 1~2문장 설명)

※ 아래 [공식수치]는 시트 원본값입니다. 절대 새로 계산하지 마세요.
[공식수치] 전체 LG Visibility = ${t.score ?? '—'}% ${prevDelta}
[공식수치] 전체 경쟁사(Samsung) Visibility = ${t.vsComp ?? '—'}%
${t.buTotals ? Object.entries(t.buTotals).map(([bu, v]) => `[공식수치] ${bu}본부 LG = ${v.lg}% / 경쟁 = ${v.comp}%`).join('\n') : ''}
${cntyLines ? `\n국가별 전체:\n${cntyLines}` : ''}

본부별 제품 상세:
${buProductSummary(products)}

${countrySummary(productsCnty) ? `국가별 제품 요약:\n${countrySummary(productsCnty)}` : ''}

${citTop ? `Citation Top 5:\n[공식수치] 전체 Citation: ${citTotal}건\n${citTop}` : ''}

${todoText ? `\n기존 Action Plan 메모 (3번 섹션 작성 시 참고):\n${todoText}` : ''}

[필수: 모든 권역(북미/유럽/중남미/아시아) 빠짐없이 포함]
[필수: 1·2·3 번호 매김 헤딩, 2.1·2.2·2.3 서브 헤딩 형식 준수]
[필수: 3번 섹션 액션 아이템은 ①②③④⑤ 원형 숫자로 시작]
[주의: 임원 보고용 톤 — 객관적·구체적 수치 인용]`
  }

  if (type === 'howToRead') {
    const section = data.section || 'general'
    return `"${section}" 섹션의 How to Read(읽는 법) 가이드를 작성해주세요.

GEO(Generative Engine Optimization)는 생성형 AI 엔진(ChatGPT, Gemini, Perplexity 등)에서 LG 브랜드가 언급/추천되는 빈도를 측정하는 지표입니다.

[작성 포인트: 해당 섹션의 주요 지표가 무엇인지, 수치를 어떻게 해석하는지, 선도/추격/취약 기준, 실무에서 어떻게 활용하는지를 2~3문장으로 간결하게]`
  }

  if (type === 'todo') {
    const products = data.products || []
    const criticals = products.filter(p => p.status === 'critical')
    const behinds = products.filter(p => p.status === 'behind')
    return `아래 GEO Visibility 데이터를 기반으로 Action Plan을 작성해주세요.

취약 카테고리: ${criticals.map(p => `${p.kr} ${p.score}%`).join(', ') || '없음'}
추격 카테고리: ${behinds.map(p => `${p.kr} ${p.score}%`).join(', ') || '없음'}

[작성 형식: 마크다운 불릿 리스트(- )로 3~5개 구체적 액션 아이템. 각 항목은 담당 영역과 기대 효과 포함]`
  }

  return `아래 데이터를 분석하여 인사이트를 작성해주세요:\n${JSON.stringify(data).slice(0, 2000)}`
}
