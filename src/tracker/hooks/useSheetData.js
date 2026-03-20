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
  } catch { /* localStorage full */ }
}

async function fetchSheet() {
  const rid = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  const url = `/gsheets-proxy/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv;reqId:${rid}&gid=${SHEET_GID}`
  const res = await fetch(url, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache, no-store', Pragma: 'no-cache' },
  })
  if (!res.ok) throw new Error(`시트를 가져올 수 없습니다 (HTTP ${res.status})`)
  const csv = await res.text()
  const wb = XLSX.read(csv, { type: 'string' })
  const ws = wb.Sheets[wb.SheetNames[0]]
  return XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })
}

export function useSheetData() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const load = useCallback(async (skipCache = false) => {
    if (!skipCache) {
      const cached = getCached()
      if (cached) { setData(cached); return }
    }

    setLoading(true)
    setError(null)

    try {
      const rows = await fetchSheet()
      const parsed = parseKPISheet(rows)
      setData(parsed)
      setCache(parsed)
    } catch (err) {
      console.error('[useSheetData] error:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const refresh = useCallback(() => {
    localStorage.removeItem(CACHE_KEY)
    load(true)
  }, [load])

  return { data, loading, error, load, refresh }
}
