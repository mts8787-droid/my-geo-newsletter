// mode: 'newsletter' | 'dashboard'
// 서버 API는 mode별로 분리된 엔드포인트 사용

const JSON_HEADERS = { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' }

export function apiPaths(mode) {
  return {
    snapshots: `/api/${mode}/snapshots`,
    syncData: `/api/${mode}/sync-data`,
    publish: mode === 'dashboard' ? '/api/publish-dashboard' : mode === 'citation' ? '/api/publish-citation' : '/api/publish',
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

export async function fetchSyncData(mode) {
  try {
    const r = await fetch(apiPaths(mode).syncData)
    if (!r.ok) return null
    const j = await r.json()
    return j.ok ? j.data : null
  } catch (err) { console.warn('[API] fetchSyncData failed:', err.message); return null }
}

export async function publishCombinedDashboard(generateDashboardHTML, resolveDataForLang) {
  const d = await fetchSyncData('dashboard')
  if (!d) throw new Error('동기화 데이터가 없습니다. Visibility Editor에서 먼저 동기화해주세요.')
  const meta = d.meta || {}
  const total = d.total || {}
  const products = d.productsPartial ? d.productsPartial.map(p => {
    const weekly = d.weeklyMap?.[p.id] || []
    const ratio = p.vsComp > 0 ? (p.score / p.vsComp) * 100 : 100
    return { ...p, weekly, monthly: [], compRatio: Math.round(ratio), status: ratio >= 100 ? 'lead' : ratio >= 80 ? 'behind' : 'critical' }
  }) : []
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
  const htmlKo = generateDashboardHTML(meta, total, resolvedKo.products, resolvedKo.citations, dotcom, 'ko', resolvedKo.productsCnty, resolvedKo.citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty)
  const htmlEn = generateDashboardHTML({ ...meta, title: meta.title || 'GEO KPI Dashboard' }, total, resolvedEn.products, resolvedEn.citations, dotcom, 'en', resolvedEn.productsCnty, resolvedEn.citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty)
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
