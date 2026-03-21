import * as XLSX from 'xlsx'
import { SHEET_NAMES, parseSheetRows } from './excelUtils'

export function extractSheetId(url) {
  const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)
  return match ? match[1] : null
}

async function fetchSheet(sheetId, sheetName) {
  const rid = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`
  // sheet 파라미터를 &headers=1과 함께 전달 — gviz는 sheet 이름으로 탭 선택
  const url = `/gsheets-proxy/spreadsheets/d/${sheetId}/gviz/tq?sheet=${encodeURIComponent(sheetName)}&tqx=out:csv;reqId:${rid}&headers=1`
  console.log(`[fetchSheet] "${sheetName}" → URL:`, url)
  const res = await fetch(url, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache, no-store', 'Pragma': 'no-cache' },
  })
  if (!res.ok) throw new Error(
    `"${sheetName}" 시트를 가져올 수 없습니다 (HTTP ${res.status}).`
  )
  const csv = await res.text()
  console.log(`[fetchSheet] "${sheetName}" CSV (first 300):`, csv.slice(0, 300))
  const wb  = XLSX.read(csv, { type: 'string' })
  const ws  = wb.Sheets[wb.SheetNames[0]]
  return XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })
}

export async function syncFromGoogleSheets(sheetId, onProgress) {
  const names = Object.values(SHEET_NAMES)
  const result = {}

  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    onProgress?.(`"${name}" 시트 불러오는 중... (${i + 1}/${names.length})`)
    try {
      const rows   = await fetchSheet(sheetId, name)
      console.log(`[sync] "${name}" → ${rows.length} rows, first:`, JSON.stringify(rows[0]?.slice(0, 6)))
      const parsed = parseSheetRows(name, rows)
      console.log(`[sync] "${name}" → parsed keys:`, Object.keys(parsed))
      // 스마트 병합: 배열은 합치고, 객체는 병합, 나머지는 덮어쓰기
      for (const [key, val] of Object.entries(parsed)) {
        if (Array.isArray(val) && Array.isArray(result[key])) {
          result[key] = [...result[key], ...val]
        } else if (val && typeof val === 'object' && !Array.isArray(val) &&
                   result[key] && typeof result[key] === 'object' && !Array.isArray(result[key])) {
          result[key] = { ...result[key], ...val }
        } else {
          result[key] = val
        }
      }
    } catch (err) {
      console.warn(`"${name}" 시트 건너뜀:`, err.message)
    }
  }

  return result
}
