// ─── AI 인사이트 생성용 프롬프트 빌더 ─────────────────────────────────────────
// server.js와 vite dev plugin에서 공유

export function buildInsightPrompt(type, data) {
  if (type === 'product') {
    const products = data.products || []
    const avg = products.length ? (products.reduce((s, p) => s + p.score, 0) / products.length).toFixed(1) : 0
    const summary = products.map(p => {
      const w = p.weekly || []
      const wow = w.length >= 2 ? (w[w.length - 1] - w[w.length - 2]).toFixed(1) + '%p' : '—'
      return `${p.kr}: ${p.score}% (경쟁사 대비 ${p.compRatio || '—'}%, 상태: ${p.status}, WoW: ${wow})`
    }).join('\n')
    return `아래는 제품별 GEO Visibility 현황입니다. 데이터를 분석하여 핵심 인사이트를 작성해주세요.

전체 평균: ${avg}%
제품별 상세:
${summary}

[분석 포인트: 상위/하위 카테고리 격차, 경쟁사 대비 취약 영역, 주간 추세 변화, 우선 개선 카테고리]`
  }

  if (type === 'citation') {
    const citations = data.citations || []
    const total = citations.reduce((s, c) => s + c.score, 0)
    const list = citations.slice(0, 10).map((c, i) =>
      `${i + 1}. ${c.source} — ${c.score}건 (${total > 0 ? ((c.score / total) * 100).toFixed(1) : 0}%)`
    ).join('\n')
    return `아래는 생성형 AI가 LG 관련 답변 시 인용하는 외부 도메인별 Citation 현황입니다.

전체 Citation: ${total}건
도메인별 순위:
${list}

[분석 포인트: 상위 도메인 집중도, 도메인 유형별 패턴(리뷰/미디어/리테일러), 인용 다변화 전략]`
  }

  if (type === 'dotcom') {
    const lg = (data.dotcom || {}).lg || {}, sam = (data.dotcom || {}).samsung || {}
    const cols = Object.keys(lg).filter(k => k !== 'TTL')
    const comparison = cols.map(k =>
      `${k}: LG ${lg[k] || 0}건 vs SS ${sam[k] || 0}건 (${(lg[k] || 0) > (sam[k] || 0) ? 'LG우위' : (sam[k] || 0) > (lg[k] || 0) ? 'SS우위' : '동일'})`
    ).join('\n')
    return `아래는 LG vs Samsung 공식 사이트의 생성형 AI Citation 비교입니다.

전체: LG ${lg.TTL || 0}건 vs SS ${sam.TTL || 0}건
페이지 유형별:
${comparison}

[분석 포인트: 전체 우위/열위, 페이지 유형별 강약점, 개선 우선순위]`
  }

  if (type === 'cnty') {
    const list = (data.productsCnty || []).slice(0, 20).map(r =>
      `${r.country} — ${r.product}: LG ${r.score}% vs 경쟁 ${r.compScore || '—'}% (Gap: ${r.gap || '—'}%p)`
    ).join('\n')
    return `아래는 국가별 제품 GEO Visibility 현황입니다.

${list}

[분석 포인트: 국가별 강약점, 특정 시장의 경쟁사 격차, 지역별 전략 시사점]`
  }

  if (type === 'citDomain') {
    const list = (data.citationsCnty || []).filter(r => r.cnty === 'TTL').slice(0, 10).map((r, i) =>
      `${i + 1}. ${r.domain} — ${r.citations}건`
    ).join('\n')
    return `아래는 도메인별 Citation 현황입니다.

${list}

[분석 포인트: 상위 도메인 특성, 도메인 유형 분포, 인용 최적화 전략]`
  }

  if (type === 'citCnty') {
    const cntyMap = {}
    ;(data.citationsCnty || []).filter(r => r.cnty !== 'TTL').forEach(r => {
      if (!cntyMap[r.cnty]) cntyMap[r.cnty] = []
      cntyMap[r.cnty].push(r)
    })
    const summary = Object.entries(cntyMap).map(([cnty, rows]) => {
      const total = rows.reduce((s, r) => s + r.citations, 0)
      const top = rows.sort((a, b) => b.citations - a.citations)[0]
      return `${cnty}: 전체 ${total}건, 1위 도메인 ${top?.domain} (${top?.citations}건)`
    }).join('\n')
    return `아래는 국가별 Citation 도메인 현황입니다.

${summary}

[분석 포인트: 국가별 인용 패턴 차이, 주요 시장별 핵심 도메인, 국가별 최적화 전략]`
  }

  if (type === 'totalInsight') {
    const products = data.products || []
    const avg = products.length ? (products.reduce((s, p) => s + p.score, 0) / products.length).toFixed(1) : 0
    const leads = products.filter(p => p.status === 'lead').length
    const criticals = products.filter(p => p.status === 'critical').length
    return `아래는 전체 GEO Visibility 현황입니다. Executive Summary 수준의 전략 인사이트를 작성해주세요.

전체 ${products.length}개 카테고리, 평균 가시성: ${avg}%
선도: ${leads}개, 취약: ${criticals}개
제품별: ${products.map(p => `${p.kr} ${p.score}%`).join(', ')}

[작성 포인트: 전체 가시성 수준 평가, 핵심 성과/리스크, 경쟁사 대비 전략 방향, 우선 액션 1~2개]`
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
