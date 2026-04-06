// ─── AI 인사이트 생성용 프롬프트 빌더 ─────────────────────────────────────────
// server.js와 vite dev plugin에서 공유

export function buildInsightPrompt(type, data) {
  if (type === 'product') {
    const products = data.products || []
    const t = data.total || {}
    const prevDelta = t.prev && t.prev !== t.score ? ` (전월 ${t.prev}%, ${(t.score - t.prev) > 0 ? '+' : ''}${(t.score - t.prev).toFixed(1)}%p)` : ''
    const compPrevDelta = t.prev && t.vsComp ? ` (전월 경쟁비 ${Math.round((t.prev / t.vsComp) * 100)}%)` : ''
    const summary = products.map(p => {
      const w = p.weekly || []
      const wow = w.length >= 2 ? (w[w.length - 1] - w[w.length - 2]).toFixed(1) + '%p' : '—'
      const mom = p.prev ? `MoM: ${(p.score - p.prev) > 0 ? '+' : ''}${(p.score - p.prev).toFixed(1)}%p (전월 ${p.prev}%)` : 'MoM: 전월 데이터 없음'
      return `${p.kr}: ${p.score}% (경쟁사 대비 ${p.compRatio || '—'}%, 상태: ${p.status}, WoW: ${wow}, ${mom})`
    }).join('\n')
    return `아래는 제품별 GEO Visibility 현황입니다. 기준 템플릿의 수치만 교체하세요.

※ 아래 [공식수치]는 시트 원본값입니다. 이 값을 그대로 인용하세요. 절대 새로 계산하지 마세요.
[공식수치] 전체 LG Visibility = ${t.score ?? '—'}%${prevDelta}
[공식수치] 전체 경쟁사(Samsung) Visibility = ${t.vsComp ?? '—'}%${compPrevDelta}
${t.buTotals ? Object.entries(t.buTotals).map(([bu, v]) => `[공식수치] ${bu}본부 LG = ${v.lg}% / 경쟁 = ${v.comp}%`).join('\n') : ''}

제품별 상세 (전월 대비 증감 포함):
${summary}

[주의: 전체 수치는 위의 "전체 LG Visibility" 값을 사용. 제품별 평균으로 계산하지 말 것]
[필수: 주요 수치에 전월 대비 증감을 반드시 포함 — 예: "42.7%(전월 대비 +1.2%p)"]`
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
    const list = (data.productsCnty || []).slice(0, 30).map(r =>
      `${r.country} — ${r.product}: LG ${r.score}% vs 경쟁 ${r.compScore || '—'}% (경쟁비: ${r.compScore > 0 ? Math.round((r.score / r.compScore) * 100) : '—'}%)`
    ).join('\n')
    return `[섹션: 국가별 GEO Visibility 현황]
이 섹션에는 제품별로 10개 국가(US,CA,UK,DE,ES,BR,MX,IN,AU,VN)의 LG vs 경쟁사 Visibility를 보여주는 막대 차트가 있습니다.
경쟁비(%)는 LG/경쟁사*100으로 100% 이상이면 선도, 80% 미만이면 취약입니다.
인사이트는 이 차트 위에 삽입됩니다. 기준 템플릿의 포맷을 따라 수치만 교체하세요.

국가별 데이터:
${list}`
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

  if (type === 'totalInsight') {
    const products = data.products || []
    const t = data.total || {}
    const leads = products.filter(p => p.status === 'lead')
    const criticals = products.filter(p => p.status === 'critical')
    const behinds = products.filter(p => p.status === 'behind')
    const prevDelta = t.prev && t.prev !== t.score ? `(전월 ${t.prev}%, ${(t.score - t.prev) > 0 ? '+' : ''}${(t.score - t.prev).toFixed(1)}%p)` : ''
    return `[섹션: Executive Summary — 전체 GEO Visibility 카드]
이 섹션은 전체 LG Visibility 점수, 경쟁사 대비 Gap, 본부별 미니카드가 포함된 다크 배경 히어로 카드입니다.
기준 템플릿의 수치만 교체하세요.

※ 아래 [공식수치]는 시트 TTL 원본값입니다. 절대 새로 계산하지 마세요.
[공식수치] 전체 LG Visibility = ${t.score ?? '—'}% ${prevDelta}
[공식수치] 전체 경쟁사(Samsung) Visibility = ${t.vsComp ?? '—'}%
${t.buTotals ? Object.entries(t.buTotals).map(([bu, v]) => `[공식수치] ${bu}본부 LG = ${v.lg}% / 경쟁 = ${v.comp}%`).join('\n') : ''}

제품별 (전월 대비 포함):
${products.map(p => {
      const mom = p.prev ? `전월 ${p.prev}% → ${(p.score - p.prev) > 0 ? '+' : ''}${(p.score - p.prev).toFixed(1)}%p` : ''
      return `${p.kr}: ${p.score}% (경쟁비 ${p.compRatio || '—'}%, ${p.status})${mom ? ' [' + mom + ']' : ''}`
    }).join('\n')}

선도(≥100%): ${leads.map(p => `${p.kr}(${p.score}%)`).join(', ') || '없음'}
추격(≥80%): ${behinds.map(p => `${p.kr}(${p.score}%)`).join(', ') || '없음'}
취약(<80%): ${criticals.map(p => `${p.kr}(${p.score}%)`).join(', ') || '없음'}

[필수: 주요 수치에 전월 대비 증감을 반드시 포함 — 예: "42.7%(전월 대비 +1.2%p)"]
[주의: 전체 수치는 "전체 LG Visibility" 값 사용. 제품별 평균이 아님]`
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
