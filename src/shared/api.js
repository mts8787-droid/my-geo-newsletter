// mode: 'newsletter' | 'dashboard'
// 서버 API는 mode별로 분리된 엔드포인트 사용

const JSON_HEADERS = { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }

export function apiPaths(mode) {
  return {
    snapshots: `/api/${mode}/snapshots`,
    syncData: `/api/${mode}/sync-data`,
    publish: mode === 'dashboard' ? '/api/publish-dashboard' : mode === 'citation' ? '/api/publish-citation' : mode === 'monthly-report' ? '/api/publish-monthly-report' : '/api/publish',
  }
}

export async function fetchSnapshots(mode) {
  try {
    const r = await fetch(apiPaths(mode).snapshots)
    return r.ok ? await r.json() : []
  } catch (err) { console.warn('[API] fetchSnapshots failed:', err.message); return [] }
}

export async function postSnapshot(mode, name, data) {
  try {
    const r = await fetch(apiPaths(mode).snapshots, {
      method: 'POST', headers: JSON_HEADERS,
      body: JSON.stringify({ name, data }),
    })
    if (!r.ok) { console.warn('[API] postSnapshot:', r.status); return null }
    const j = await r.json()
    return j.ok ? j.snapshots : null
  } catch (err) { console.warn('[API] postSnapshot failed:', err.message); return null }
}

export async function updateSnapshot(mode, ts, data) {
  try {
    const r = await fetch(`${apiPaths(mode).snapshots}/${ts}`, {
      method: 'PUT', headers: JSON_HEADERS,
      body: JSON.stringify({ data }),
    })
    if (!r.ok) { console.warn('[API] updateSnapshot:', r.status); return null }
    const j = await r.json()
    return j.ok ? j.snapshots : null
  } catch (err) { console.warn('[API] updateSnapshot failed:', err.message); return null }
}

export async function deleteSnapshot(mode, ts) {
  try {
    const r = await fetch(`${apiPaths(mode).snapshots}/${ts}`, { method: 'DELETE' })
    if (!r.ok) { console.warn('[API] deleteSnapshot:', r.status); return null }
    const j = await r.json()
    return j.ok ? j.snapshots : null
  } catch (err) { console.warn('[API] deleteSnapshot failed:', err.message); return null }
}

export async function generateAIInsight(type, data, lang = 'ko', rules = '') {
  try {
    const r = await fetch('/api/generate-insight', {
      method: 'POST', headers: JSON_HEADERS,
      body: JSON.stringify({ type, data, lang, rules }),
    })
    if (!r.ok) { const j = await r.json().catch(() => ({})); throw new Error(j.error || `HTTP ${r.status}`) }
    const j = await r.json()
    if (!j.ok) throw new Error(j.error || 'AI 생성 실패')
    return j.insight
  } catch (err) { console.error('[API] generateAIInsight failed:', err.message); throw err }
}

export async function fetchSyncData(mode) {
  try {
    const r = await fetch(apiPaths(mode).syncData)
    if (!r.ok) return null
    const j = await r.json()
    return j.ok ? j.data : null
  } catch (err) { console.warn('[API] fetchSyncData failed:', err.message); return null }
}

export async function publishCombinedDashboard(generateDashboardHTML, resolveDataForLang, options = {}) {
  const { includeProgressTracker = false, trackerVersion = 'v1', includePromptList = false } = options
  // dashboard + visibility sync 데이터 병합 (양쪽에서 최선의 데이터 확보)
  const [dDash, dVis] = await Promise.all([
    fetchSyncData('dashboard').catch(() => null),
    fetchSyncData('visibility').catch(() => null),
  ])
  // visibility sync를 기본으로, dashboard sync로 보충 (visibility의 meta/인사이트가 최신)
  const d = { ...(dDash || {}), ...(dVis || {}) }
  // dashboard에만 있는 데이터 보충 (visibility에 없는 필드)
  if (dDash) {
    const dashOnlyKeys = ['weeklyPR','weeklyPRLabels','weeklyBrandPrompt','weeklyBrandPromptLabels','appendixPrompts','unlaunchedMap']
    dashOnlyKeys.forEach(k => { if (!d[k] && dDash[k]) d[k] = dDash[k] })
  }
  // meta는 visibility 우선 + dashboard 보충 (인사이트/period는 visibility가 최신)
  if (dVis?.meta && dDash?.meta) {
    d.meta = { ...(dDash.meta || {}), ...(dVis.meta || {}) }
  }
  if (!d || !Object.keys(d).length) throw new Error('동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.')
  const meta = d.meta || {}
  const total = d.total || {}

  // 서버 meta.period가 이전 월일 수 있으므로 데이터에서 최신 월 재감지
  const enNames = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  let bestMonth = 0
  if (d.citDerivedPeriod) {
    const cm = String(d.citDerivedPeriod).match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
    if (cm) { const ci = enNames.findIndex(m => m && m.toLowerCase() === cm[1].toLowerCase()); if (ci > bestMonth) bestMonth = ci }
  }
  if (d.productsPartial?.length) {
    d.productsPartial.forEach(p => {
      if (p.date) {
        const km = String(p.date).match(/(\d{1,2})월/); if (km) { const n = parseInt(km[1]); if (n > bestMonth) bestMonth = n }
        const em = String(p.date).match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
        if (em) { const ci = enNames.findIndex(m => m && m.toLowerCase() === em[1].toLowerCase()); if (ci > bestMonth) bestMonth = ci }
      }
    })
  }
  if (d.monthlyVis?.length) {
    d.monthlyVis.forEach(r => {
      if (r.date) {
        const km = String(r.date).match(/(\d{1,2})월/); if (km) { const n = parseInt(km[1]); if (n > bestMonth) bestMonth = n }
        const em = String(r.date).match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
        if (em) { const ci = enNames.findIndex(m => m && m.toLowerCase() === em[1].toLowerCase()); if (ci > bestMonth) bestMonth = ci }
      }
    })
  }
  if (bestMonth > 0) {
    const yr = new Date().getFullYear()
    meta.period = `${enNames[bestMonth]} ${yr}`
  }
  // productsPartial 우선, 없으면 products(에디터 state) 폴백
  const rawProducts = d.productsPartial || d.products || []
  const products = rawProducts.map(p => {
    const weekly = p.weekly || d.weeklyMap?.[p.id] || []
    const ratio = p.vsComp > 0 ? (p.score / p.vsComp) * 100 : 100
    return { ...p, weekly, monthly: p.monthly || [], compRatio: p.compRatio || Math.round(ratio), status: p.status || (ratio >= 100 ? 'lead' : ratio >= 80 ? 'behind' : 'critical') }
  })
  const citations = d.citations || []
  const dotcom = d.dotcom || {}
  const productsCnty = d.productsCnty || []
  const citationsCnty = d.citationsCnty || []
  const weeklyLabels = d.weeklyLabels || null
  const weeklyAll = d.weeklyAll || {}
  const citationsByCnty = d.citationsByCnty || {}
  const dotcomByCnty = d.dotcomByCnty || {}
  const resolvedKo = resolveDataForLang(products, productsCnty, citations, citationsCnty, 'ko')
  const resolvedEn = resolveDataForLang(products, productsCnty, citations, citationsCnty, 'en')
  const extra = {
    appendixPrompts: d.appendixPrompts || [],
    weeklyPR: d.weeklyPR || [],
    weeklyPRLabels: d.weeklyPRLabels || [],
    weeklyBrandPrompt: d.weeklyBrandPrompt || [],
    weeklyBrandPromptLabels: d.weeklyBrandPromptLabels || [],
    unlaunchedMap: d.unlaunchedMap || {},
  }
  const opts = { monthlyVis: d.monthlyVis || [], includeProgressTracker, trackerVersion, includePromptList }
  const htmlKo = generateDashboardHTML(meta, total, resolvedKo.products, resolvedKo.citations, dotcom, 'ko', resolvedKo.productsCnty, resolvedKo.citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, opts, extra)
  const htmlEn = generateDashboardHTML({ ...meta, title: meta.title || 'GEO KPI Dashboard' }, total, resolvedEn.products, resolvedEn.citations, dotcom, 'en', resolvedEn.productsCnty, resolvedEn.citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, opts, extra)
  const title = `${meta.period || ''} ${meta.title || 'KPI Dashboard'}`.trim()
  const res = await fetch('/api/publish-dashboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
    body: JSON.stringify({ title, htmlKo, htmlEn }),
  })
  const result = await res.json()
  if (!result.ok) throw new Error(result.error || '게시 실패')
  return result
}

export async function saveSyncData(mode, data) {
  try {
    const r = await fetch(apiPaths(mode).syncData, {
      method: 'POST', headers: JSON_HEADERS,
      body: JSON.stringify({ data }),
    })
    if (!r.ok) console.warn('[API] saveSyncData:', r.status)
  } catch (err) { console.warn('[API] saveSyncData failed:', err.message) }
}
