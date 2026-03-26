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

export async function saveSyncData(mode, data) {
  try {
    const r = await fetch(apiPaths(mode).syncData, {
      method: 'POST', headers: JSON_HEADERS,
      body: JSON.stringify({ data }),
    })
    if (!r.ok) console.warn('[API] saveSyncData:', r.status)
  } catch (err) { console.warn('[API] saveSyncData failed:', err.message) }
}
