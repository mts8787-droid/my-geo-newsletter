import { useState, useEffect, useCallback } from 'react'
import * as XLSX from 'xlsx'
import { SHEET_ID, SHEET_NAMES, CACHE_TTL } from '../utils/constants'
import { parseProgressSheet, parseDataMartSheet } from '../utils/sheetParser'

const CACHE_PREFIX = 'tracker_cache_'

function getCached(key) {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key)
    if (!raw) return null
    const { ts, data } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) {
      localStorage.removeItem(CACHE_PREFIX + key)
      return null
    }
    return data
  } catch {
    return null
  }
}

function setCache(key, data) {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ ts: Date.now(), data }))
  } catch {
    // localStorage full — ignore
  }
}

async function fetchSheetCSV(sheetName) {
  const rid = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  const url = `/gsheets-proxy/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv;reqId:${rid}&sheet=${encodeURIComponent(sheetName)}`
  const res = await fetch(url, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache, no-store', Pragma: 'no-cache' },
  })
  if (!res.ok) throw new Error(`"${sheetName}" 시트를 가져올 수 없습니다 (HTTP ${res.status})`)
  const csv = await res.text()
  const wb = XLSX.read(csv, { type: 'string' })
  const ws = wb.Sheets[wb.SheetNames[0]]
  return XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' }).slice(1)
}

export function useSheetData() {
  const [overview, setOverview] = useState(null)
  const [hs, setHs] = useState(null)
  const [hsMgmt, setHsMgmt] = useState(null)
  const [loading, setLoading] = useState({ overview: false, hs: false, hsMgmt: false })
  const [errors, setErrors] = useState({ overview: null, hs: null, hsMgmt: null })

  const loadSheet = useCallback(async (key, sheetName, parser, setter) => {
    // Check cache first
    const cached = getCached(key)
    if (cached) {
      setter(cached)
      return
    }

    setLoading(prev => ({ ...prev, [key]: true }))
    setErrors(prev => ({ ...prev, [key]: null }))

    try {
      const rows = await fetchSheetCSV(sheetName)
      const parsed = parser(rows)
      setter(parsed)
      setCache(key, parsed)
    } catch (err) {
      console.error(`[useSheetData] ${key} error:`, err)
      setErrors(prev => ({ ...prev, [key]: err.message }))
    } finally {
      setLoading(prev => ({ ...prev, [key]: false }))
    }
  }, [])

  const loadOverview = useCallback(() => {
    loadSheet('overview', SHEET_NAMES.overview, parseProgressSheet, setOverview)
  }, [loadSheet])

  const loadHs = useCallback(() => {
    loadSheet('hs', SHEET_NAMES.hs, parseProgressSheet, setHs)
  }, [loadSheet])

  const loadHsMgmt = useCallback(() => {
    loadSheet('hsMgmt', SHEET_NAMES.hsMgmt, parseDataMartSheet, setHsMgmt)
  }, [loadSheet])

  const refresh = useCallback((key) => {
    // Clear cache and reload
    if (key) {
      localStorage.removeItem(CACHE_PREFIX + key)
    } else {
      Object.keys(SHEET_NAMES).forEach(k => localStorage.removeItem(CACHE_PREFIX + k))
    }
    if (!key || key === 'overview') loadOverview()
    if (!key || key === 'hs') loadHs()
    if (!key || key === 'hsMgmt') loadHsMgmt()
  }, [loadOverview, loadHs, loadHsMgmt])

  return {
    overview, hs, hsMgmt,
    loading, errors,
    loadOverview, loadHs, loadHsMgmt,
    refresh,
  }
}
