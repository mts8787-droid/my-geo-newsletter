import { DOTCOM_SAM_COLS } from './constants.js'

export function generateProductInsight(products) {
  const fmtN = n => Number(n).toLocaleString('en-US')
  const leads    = products.filter(p => p.status === 'lead')
  const behinds  = products.filter(p => p.status === 'behind')
  const criticals = products.filter(p => p.status === 'critical')
  const best     = [...products].sort((a, b) => b.score - a.score)[0]
  const worst    = [...products].sort((a, b) => a.score - b.score)[0]
  const avgScore = (products.reduce((s, p) => s + p.score, 0) / products.length).toFixed(1)

  const lines = []
  lines.push(`전체 ${products.length}개 카테고리 평균 가시성은 ${avgScore}%이며, 선도 ${leads.length}개·추격 ${behinds.length}개·취약 ${criticals.length}개로 분류됩니다.`)
  if (best) lines.push(`가장 높은 카테고리는 ${best.kr} ${best.score.toFixed(1)}%이고, 가장 낮은 카테고리는 ${worst.kr} ${worst.score.toFixed(1)}%로 상·하위 간 ${(best.score - worst.score).toFixed(1)}%p의 편차가 존재합니다.`)
  if (criticals.length) lines.push(`취약 카테고리(${criticals.map(p => p.kr).join('·')})는 경쟁사 대비 80% 미만으로 가시성 격차가 두드러지는 영역입니다.`)
  else if (behinds.length) lines.push(`추격 카테고리(${behinds.map(p => p.kr).join('·')})는 80~100% 구간으로 경쟁사와 근접한 수준입니다.`)
  return lines.join(' ')
}

export function generateCitationInsight(citations) {
  if (!citations.length) return ''
  const fmtN = n => Number(n).toLocaleString('en-US')
  const top3    = citations.slice(0, 3)
  const total   = citations.reduce((s, c) => s + c.score, 0)
  const top3Sum = top3.reduce((s, c) => s + c.score, 0)
  const top3Pct = total > 0 ? ((top3Sum / total) * 100).toFixed(1) : 0

  const lines = []
  lines.push(`전체 Citation ${fmtN(total)}건 중 상위 3개 도메인(${top3.map(c => c.source).join(', ')})이 ${fmtN(top3Sum)}건으로 전체의 ${top3Pct}%를 차지합니다.`)
  lines.push(`1위 ${top3[0].source}는 ${fmtN(top3[0].score)}건(${top3[0].ratio ? top3[0].ratio.toFixed(1) + '%' : ''})으로 가장 높은 인용 비중을 보이며, ${top3[1].source} ${fmtN(top3[1].score)}건, ${top3[2].source} ${fmtN(top3[2].score)}건이 뒤를 잇고 있습니다.`)
  const lower = citations.slice(-3)
  if (lower.length) lines.push(`하위 도메인(${lower.map(c => c.source).join('·')})은 각각 ${lower.map(c => fmtN(c.score) + '건').join(', ')}으로 상위권 대비 인용 빈도가 낮은 구간입니다.`)
  return lines.join(' ')
}

export function generateProductHowToRead() {
  return 'GEO 가시성 점수는 생성형 AI 엔진(ChatGPT, Gemini 등)에서 해당 카테고리 관련 질문 시 LG 제품이 언급·추천되는 빈도를 0~100%로 수치화한 지표입니다. MoM은 전월 대비 증감이며, 경쟁사 대비는 (LG 점수 / 1위 브랜드 점수) × 100%로 산출합니다. 100% 이상=선도, 80% 이상=추격, 80% 미만=취약입니다.'
}

export function generateCitationHowToRead() {
  return 'Citation Score는 생성형 AI가 LG 제품 관련 답변 시 참조하는 외부 출처(리뷰 사이트, 미디어 등)의 영향력을 점수화한 지표입니다. 점수가 높을수록 해당 출처가 AI 답변에 자주 인용되며, 증감은 전월 대비 기여도 변화를 나타냅니다.'
}

export function generateDotcomInsight(dotcom) {
  if (!dotcom || !dotcom.lg) return ''
  const lg = dotcom.lg, sam = dotcom.samsung
  const fmtN = n => Number(n).toLocaleString('en-US')
  const lines = []

  const ttlDiff = lg.TTL - sam.TTL
  const ttlRatio = sam.TTL > 0 ? ((lg.TTL / sam.TTL) * 100).toFixed(0) : 100
  lines.push(`LG 닷컴 전체 Citation ${fmtN(lg.TTL)}건, SS ${fmtN(sam.TTL)}건으로 LG가 SS 대비 ${ttlRatio}% 수준(${ttlDiff > 0 ? '+' : ''}${fmtN(ttlDiff)}건)입니다.`)

  const lgWins = DOTCOM_SAM_COLS.filter(c => (lg[c] || 0) > (sam[c] || 0))
  const samWins = DOTCOM_SAM_COLS.filter(c => (sam[c] || 0) > (lg[c] || 0))
  if (lgWins.length) lines.push(`LG 우위 영역은 ${lgWins.join(', ')} ${lgWins.length}개입니다.`)
  if (samWins.length) lines.push(`SS 우위 영역은 ${samWins.join(', ')} ${samWins.length}개로, 해당 페이지 유형에서 SS의 인용 빈도가 LG보다 높게 나타납니다.`)

  const allCols = DOTCOM_SAM_COLS.filter(c => c !== 'TTL')
  const maxLgGap = allCols.sort((a, b) => ((lg[b]||0) - (sam[b]||0)) - ((lg[a]||0) - (sam[a]||0)))[0]
  if (maxLgGap && (lg[maxLgGap]||0) > (sam[maxLgGap]||0)) lines.push(`LG가 가장 큰 차이를 보이는 영역은 ${maxLgGap}(LG ${fmtN(lg[maxLgGap])}건 vs SS ${fmtN(sam[maxLgGap])}건)입니다.`)
  return lines.join(' ')
}

export function generateDotcomHowToRead() {
  return '닷컴 Citation은 생성형 AI가 답변 시 LG·Samsung 공식 사이트의 각 페이지 유형(TTL, PLP, PDP 등)을 인용하는 빈도를 나타냅니다. TTL은 전체 합계, PLP는 카테고리 목록, PDP는 제품 상세, Microsites는 캠페인 페이지 인용 수입니다.'
}

export function generateCntyHowToRead() {
  return '국가별 GEO 가시성은 각 법인(미국, 영국, 독일 등)에서 생성형 AI 엔진이 해당 제품 카테고리 질문 시 LG를 언급·추천하는 비율입니다. 막대 색상은 경쟁사 대비 상대 점수를 나타내며, 녹색(선도)·주황(추격)·빨강(취약)으로 구분됩니다. 하단 수치는 1위 경쟁사 점수와 LG와의 격차(%p)입니다.'
}

export function generateCitDomainInsight(citationsCnty) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const fmtN = n => Number(n).toLocaleString('en-US')
  const ttlRows = citationsCnty.filter(r => r.cnty === 'TTL').sort((a, b) => a.rank - b.rank)
  if (!ttlRows.length) return ''
  const total = ttlRows.reduce((s, r) => s + r.citations, 0)
  const top3 = ttlRows.slice(0, 3)
  const top3Sum = top3.reduce((s, r) => s + r.citations, 0)
  const top3Pct = total > 0 ? ((top3Sum / total) * 100).toFixed(1) : 0
  const lines = []
  lines.push(`전체 도메인 Citation ${fmtN(total)}건 중 상위 3개 도메인(${top3.map(r => r.domain).join(', ')})이 ${fmtN(top3Sum)}건으로 전체의 ${top3Pct}%를 차지합니다.`)
  lines.push(`1위 ${top3[0].domain}은(는) ${fmtN(top3[0].citations)}건으로 가장 높은 인용 빈도를 보이며, ${top3[1].domain} ${fmtN(top3[1].citations)}건, ${top3[2].domain} ${fmtN(top3[2].citations)}건이 뒤를 잇고 있습니다.`)
  return lines.join(' ')
}

export function generateCitDomainHowToRead() {
  return '도메인별 Citation은 생성형 AI가 LG 관련 답변 시 인용하는 외부 도메인(웹사이트)의 빈도를 나타냅니다. 도메인 유형(Review, Media, Retailer 등)에 따라 AI 답변 내 인용 패턴을 파악할 수 있으며, 비중(%)은 전체 Citation 대비 해당 도메인의 기여도를 의미합니다.'
}

export function generateCitCntyInsight(citationsCnty) {
  if (!citationsCnty || !citationsCnty.length) return ''
  const fmtN = n => Number(n).toLocaleString('en-US')
  const cntyMap = new Map()
  citationsCnty.filter(r => r.cnty !== 'TTL').forEach(r => {
    if (!cntyMap.has(r.cnty)) cntyMap.set(r.cnty, [])
    cntyMap.get(r.cnty).push(r)
  })
  const cntySums = [...cntyMap.entries()].map(([cnty, rows]) => ({
    cnty, total: rows.reduce((s, r) => s + r.citations, 0), top: rows.sort((a, b) => b.citations - a.citations)[0]
  })).sort((a, b) => b.total - a.total)
  if (!cntySums.length) return ''
  const lines = []
  const topCnty = cntySums[0]
  const botCnty = cntySums[cntySums.length - 1]
  lines.push(`${cntySums.length}개 국가 중 Citation이 가장 많은 국가는 ${topCnty.cnty}(${fmtN(topCnty.total)}건)이며, 가장 적은 국가는 ${botCnty.cnty}(${fmtN(botCnty.total)}건)입니다.`)
  lines.push(`${topCnty.cnty}에서는 ${topCnty.top.domain}이(가) ${fmtN(topCnty.top.citations)}건으로 1위를 차지하고 있습니다.`)
  return lines.join(' ')
}

export function generateCitCntyHowToRead() {
  return '국가별 Citation 도메인은 각 국가에서 생성형 AI가 LG 관련 답변 시 가장 많이 인용하는 도메인 Top 10을 보여줍니다. 국가별로 인용 패턴이 다르므로, 각 시장에 맞는 Citation Optimization 전략 수립에 활용할 수 있습니다.'
}
