// LLM Model 필터 헬퍼 — Monthly Visibility 시트 E열 'LLM Model' (2026-06 추가) 대응.
// 파서 (excelUtils.js) 가 monthlyScores[].byLlm 에 모델별 데이터 보존 →
// 본 헬퍼가 어드민 LLM Model 선택 값에 따라 products/productsCnty 를 재계산.

export const LLM_TOTAL = 'Total'

// 데이터 스캔하여 가용 LLM Model 목록 추출. 'Total' 항상 첫번째.
export function getAvailableLlmModels(...sources) {
  const set = new Set([LLM_TOTAL])
  sources.forEach(src => {
    if (!src) return
    if (Array.isArray(src)) {
      // products / productsCnty / monthlyVis 등
      src.forEach(item => {
        if (item?.llmModel) set.add(item.llmModel)
        const ms = item?.monthlyScores || []
        ms.forEach(m => Object.keys(m?.byLlm || {}).forEach(k => set.add(k)))
      })
    } else if (typeof src === 'object') {
      // weeklyAll 같은 nested 구조는 향후 확장 시 추가
    }
  })
  // 'Total' 항상 맨 앞
  return [LLM_TOTAL, ...Array.from(set).filter(x => x !== LLM_TOTAL).sort((a, b) => a.localeCompare(b))]
}

// products[] / productsPartial[] 의 score/prev/vsComp 를 선택 LLM Model 기준으로 재계산.
// byLlm 에 해당 모델 데이터 없으면 기존 값 유지 (2,3월 Total 폴백).
export function resolveProductsByLlm(products, llmModel) {
  if (!Array.isArray(products) || !llmModel || llmModel === LLM_TOTAL) return products
  return products.map(p => {
    const ms = p?.monthlyScores || []
    if (!ms.length) return p
    const latest = ms[ms.length - 1]
    const prev = ms.length >= 2 ? ms[ms.length - 2] : null
    const latestLlm = latest?.byLlm?.[llmModel]
    const prevLlm = prev?.byLlm?.[llmModel]
    if (!latestLlm) return p
    return {
      ...p,
      score: latestLlm.score ?? p.score,
      prev: prevLlm?.score ?? p.prev,
      vsComp: latestLlm.comp ?? p.vsComp,
      allScores: latestLlm.allScores ?? p.allScores,
      monthlyScores: ms.map(m => {
        const byL = m?.byLlm?.[llmModel]
        return byL ? { ...m, score: byL.score, comp: byL.comp, allScores: byL.allScores } : m
      }),
    }
  })
}

// productsCnty[] (제품×국가) 의 score/compScore/compName 를 선택 LLM Model 기준 재계산.
export function resolveProductsCntyByLlm(productsCnty, llmModel) {
  if (!Array.isArray(productsCnty) || !llmModel || llmModel === LLM_TOTAL) return productsCnty
  return productsCnty.map(r => {
    const ms = r?.monthlyScores || []
    if (!ms.length) return r
    const latest = ms[ms.length - 1]
    const prev = ms.length >= 2 ? ms[ms.length - 2] : null
    const latestLlm = latest?.byLlm?.[llmModel]
    const prevLlm = prev?.byLlm?.[llmModel]
    if (!latestLlm) return r
    const newCompScore = latestLlm.compScore ?? r.compScore
    return {
      ...r,
      score: latestLlm.score ?? r.score,
      prev: prevLlm?.score ?? r.prev,
      compScore: newCompScore,
      compName: latestLlm.compName ?? r.compName,
      allScores: latestLlm.allScores ?? r.allScores,
      gap: +(((latestLlm.score ?? r.score) - newCompScore) || 0).toFixed(2),
      monthlyScores: ms.map(m => {
        const byL = m?.byLlm?.[llmModel]
        return byL ? { ...m, score: byL.score, compScore: byL.compScore, compName: byL.compName, allScores: byL.allScores } : m
      }),
    }
  })
}

// monthlyVis[] (parseVisSummary 결과) 의 행을 선택 LLM Model 로 필터.
// 같은 (date, country, division) 그룹에서 선택 모델 행 우선 → 없으면 Total 폴백.
export function filterMonthlyVisByLlm(monthlyVis, llmModel) {
  if (!Array.isArray(monthlyVis) || !llmModel || llmModel === LLM_TOTAL) {
    return (monthlyVis || []).filter(r => !r.llmModel || r.llmModel === LLM_TOTAL || r.llmModel === 'TOTAL' || r.llmModel === 'All')
  }
  const groups = {}
  monthlyVis.forEach(r => {
    const k = `${r.date}|${r.country}|${r.division}`
    if (!groups[k]) groups[k] = {}
    groups[k][r.llmModel] = r
  })
  const out = []
  Object.values(groups).forEach(g => {
    const picked = g[llmModel] || g[LLM_TOTAL] || g.TOTAL || g.All
    if (picked) out.push(picked)
  })
  return out
}

// total {score, prev, vsComp} 를 선택 LLM Model 기준 재계산.
// 입력: monthlyVis (LLM 모델별 행 모두 포함) + total 폴백
export function resolveTotalByLlm(total, monthlyVis, llmModel) {
  if (!llmModel || llmModel === LLM_TOTAL) return total
  if (!Array.isArray(monthlyVis) || !monthlyVis.length) return total
  // (country=TOTAL, division=TOTAL, llmModel=선택) 행 추출 — 시간순 정렬 후 latest/prev
  const totalRows = monthlyVis.filter(r =>
    (r.country === 'TOTAL' || r.country === 'TTL') &&
    (r.division === 'TOTAL' || r.division === 'TTL' || r.division === '') &&
    r.llmModel === llmModel
  )
  if (!totalRows.length) return total
  // parseMonthFromDate 같은 정렬 로직 — 본 모듈은 string sort 로 대체 (date 가 YYYY-MM 형식이면 정확).
  totalRows.sort((a, b) => String(a.date).localeCompare(String(b.date)))
  const latest = totalRows[totalRows.length - 1]
  const prev = totalRows.length >= 2 ? totalRows[totalRows.length - 2] : null
  return {
    ...total,
    score: latest.lg ?? total.score,
    prev: prev?.lg ?? total.prev,
    vsComp: latest.comp ?? total.vsComp,
  }
}

// 어드민 React 에서 한 번에 적용: { products, productsCnty, total, monthlyVis } → 재계산된 셋 반환
export function applyLlmFilter(data, llmModel) {
  if (!llmModel || llmModel === LLM_TOTAL) return data
  return {
    ...data,
    products: resolveProductsByLlm(data.products, llmModel),
    productsCnty: resolveProductsCntyByLlm(data.productsCnty, llmModel),
    monthlyVis: filterMonthlyVisByLlm(data.monthlyVis, llmModel),
    total: resolveTotalByLlm(data.total, data.monthlyVis, llmModel),
  }
}
