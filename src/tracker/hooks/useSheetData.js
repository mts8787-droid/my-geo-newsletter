import { useState, useCallback } from 'react'
import * as XLSX from 'xlsx'
import { SHEET_ID, SHEET_GID, CACHE_TTL } from '../utils/constants'
import { parseKPISheet } from '../utils/sheetParser'

const CACHE_KEY = 'tracker_kpi_v2'

function getCached() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { ts, data } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) {
      localStorage.removeItem(CACHE_KEY)
      return null
    }
    return data
  } catch {
    return null
  }
}

function setCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }))
  } catch (e) {
    console.warn('[useSheetData] cache save failed (localStorage full?):', e.message)
  }
}

async function fetchSheet() {
  // 1차: export?format=csv (수식 결과값 포함)
  // 2차 fallback: gviz/tq (수식 못 읽는 경우 있음)
  const exportUrl = `/gsheets-proxy/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}&_t=${Date.now()}`
  let csv
  let method = 'export'

  try {
    const res = await fetch(exportUrl, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store', Pragma: 'no-cache' },
    })
    if (!res.ok) throw new Error(`export HTTP ${res.status}`)
    csv = await res.text()
  } catch (e) {
    console.warn('[fetchSheet] export endpoint failed, falling back to gviz:', e.message)
    method = 'gviz'
    const rid = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    const gvizUrl = `/gsheets-proxy/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv;reqId:${rid}&gid=${SHEET_GID}`
    const res = await fetch(gvizUrl, {
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store', Pragma: 'no-cache' },
    })
    if (!res.ok) throw new Error(`시트를 가져올 수 없습니다 (HTTP ${res.status})`)
    csv = await res.text()
  }

  // DEBUG: CSV 마지막 15줄 저장
  const csvLines = csv.split('\n')
  window.__DEBUG_CSV_TAIL = csvLines.slice(-15).map((line, i) => `[${csvLines.length - 15 + i}] ${line}`)
  window.__DEBUG_CSV_TOTAL_LINES = csvLines.length
  window.__DEBUG_CSV_METHOD = method
  console.log(`[DEBUG] CSV method: ${method}, total lines: ${csvLines.length}`)
  console.log('[DEBUG] CSV last 15 lines:', window.__DEBUG_CSV_TAIL)

  const wb = XLSX.read(csv, { type: 'string' })
  const ws = wb.Sheets[wb.SheetNames[0]]
  return XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })
}

async function fetchSnapshot() {
  const res = await fetch('/api/tracker-snapshot')
  if (!res.ok) throw new Error('게시된 데이터가 없습니다')
  const j = await res.json()
  if (!j.ok || !j.data) throw new Error('게시된 데이터가 없습니다')
  return j.data
}

/**
 * @param {'live'|'snapshot'} mode
 *   live     — Google Sheets에서 실시간 데이터 로드 (관리자 모드)
 *   snapshot — 서버에 게시된 스냅샷 로드 (공개 모드)
 */
export function useSheetData(mode = 'live') {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const load = useCallback(async (skipCache = false) => {
    if (mode === 'live' && !skipCache) {
      const cached = getCached()
      if (cached) { setData(cached); return }
    }

    setLoading(true)
    setError(null)

    try {
      if (mode === 'snapshot') {
        const snapshot = await fetchSnapshot()
        setData(snapshot)
      } else {
        const rows = await fetchSheet()
        const parsed = parseKPISheet(rows)
        setData(parsed)
        setCache(parsed)
      }
    } catch (err) {
      console.error('[useSheetData] error:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [mode])

  const refresh = useCallback(() => {
    localStorage.removeItem(CACHE_KEY)
    load(true)
  }, [load])

  return { data, loading, error, load, refresh }
}
