// mode: 'newsletter' | 'dashboard'
// 서버 API는 mode별로 분리된 엔드포인트 사용

export function apiPaths(mode) {
  return {
    snapshots: `/api/${mode}/snapshots`,
    syncData: `/api/${mode}/sync-data`,
    publish: mode === 'dashboard' ? '/api/publish-dashboard' : '/api/publish',
  }
}

export async function fetchSnapshots(mode) {
  try {
    const r = await fetch(apiPaths(mode).snapshots)
    return r.ok ? await r.json() : []
  } catch { return [] }
}

export async function postSnapshot(mode, name, data) {
  try {
    const r = await fetch(apiPaths(mode).snapshots, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, data }),
    })
    const j = await r.json()
    return j.ok ? j.snapshots : null
  } catch { return null }
}

export async function updateSnapshot(mode, ts, data) {
  try {
    const r = await fetch(`${apiPaths(mode).snapshots}/${ts}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })
    const j = await r.json()
    return j.ok ? j.snapshots : null
  } catch { return null }
}

export async function deleteSnapshot(mode, ts) {
  try {
    const r = await fetch(`${apiPaths(mode).snapshots}/${ts}`, { method: 'DELETE' })
    const j = await r.json()
    return j.ok ? j.snapshots : null
  } catch { return null }
}

export async function fetchSyncData(mode) {
  try {
    const r = await fetch(apiPaths(mode).syncData)
    if (!r.ok) return null
    const j = await r.json()
    return j.ok ? j.data : null
  } catch { return null }
}

export async function saveSyncData(mode, data) {
  try {
    await fetch(apiPaths(mode).syncData, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })
  } catch {}
}
