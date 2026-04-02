import * as XLSX from 'xlsx-js-style'
import { SHEET_NAMES, parseSheetRows } from './excelUtils'

export function extractSheetId(url) {
  const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)
  return match ? match[1] : null
}

async function fetchSheet(sheetId, sheetName) {
  const rid = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`
  // sheet 파라미터를 &headers=1과 함께 전달 — gviz는 sheet 이름으로 탭 선택
  const url = `/gsheets-proxy/spreadsheets/d/${sheetId}/gviz/tq?sheet=${encodeURIComponent(sheetName)}&tqx=out:csv;reqId:${rid}&headers=1`
  // URL logged only in dev for debugging
  const res = await fetch(url, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache, no-store', 'Pragma': 'no-cache' },
  })
  if (!res.ok) throw new Error(
    `"${sheetName}" 시트를 가져올 수 없습니다 (HTTP ${res.status}).`
  )
  const csv = await res.text()
  const wb  = XLSX.read(csv, { type: 'string' })
  const ws  = wb.Sheets[wb.SheetNames[0]]
  return XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })
}

export async function syncFromGoogleSheets(sheetId, onProgress) {
  const names = Object.values(SHEET_NAMES)
  const result = {}

  onProgress?.(`${names.length}개 시트 병렬 로드 중...`)
  const fetched = await Promise.allSettled(
    names.map(name => fetchSheet(sheetId, name).then(rows => ({ name, rows })))
  )

  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    const entry = fetched[i]
    onProgress?.(`"${name}" 처리 중... (${i + 1}/${names.length})`)
    if (entry.status === 'rejected') {
      console.warn(`"${name}" 시트 건너뜀:`, entry.reason?.message)
      continue
    }
    try {
      const { rows } = entry.value
      const parsed = parseSheetRows(name, rows)
      console.log(`[SYNC] "${name}" parsed keys:`, Object.keys(parsed), rows.length + ' rows')
      // 스마트 병합: 배열은 합치고(단 weeklyLabels는 덮어쓰기), 객체는 병합, 나머지는 덮어쓰기
      for (const [key, val] of Object.entries(parsed)) {
        if (key === 'weeklyLabels') {
          if (!result[key]) result[key] = val
        } else if (Array.isArray(val) && Array.isArray(result[key])) {
          result[key] = [...result[key], ...val]
        } else if (val && typeof val === 'object' && !Array.isArray(val) &&
                   result[key] && typeof result[key] === 'object' && !Array.isArray(result[key])) {
          result[key] = { ...result[key], ...val }
        } else {
          result[key] = val
        }
      }
    } catch (err) {
      console.warn(`"${name}" 시트 처리 실패:`, err.message)
    }
  }

  return result
}
