import * as XLSX from 'xlsx'
import { SHEET_NAMES, parseSheetRows } from './excelUtils'

// 시트 이름 → GID 매핑 (gviz name 파라미터가 안 먹히는 시트용)
const SHEET_GIDS = {
  'Products_CNTY': '1897422935',
}

export function extractSheetId(url) {
  const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)
  return match ? match[1] : null
}

async function fetchSheet(sheetId, sheetName) {
  const rid = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`
  const gid = SHEET_GIDS[sheetName]
  const sheetParam = gid ? `gid=${gid}` : `sheet=${encodeURIComponent(sheetName)}`
  const url = `/gsheets-proxy/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv;reqId:${rid}&${sheetParam}`
  const res = await fetch(url, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache, no-store', 'Pragma': 'no-cache' },
  })
  if (!res.ok) throw new Error(
    `"${sheetName}" 시트를 가져올 수 없습니다 (HTTP ${res.status}).\n` +
    `공유 설정이 "링크가 있는 모든 사용자 - 뷰어" 인지 확인하세요.`
  )
  const csv = await res.text()
  const wb  = XLSX.read(csv, { type: 'string' })
  const ws  = wb.Sheets[wb.SheetNames[0]]
  // gviz는 빈 행을 건너뛰고 설명 텍스트를 첫 셀에 합쳐서 내보냄 → slice(1) 로 건너뜀
  return XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' }).slice(1)
}

export async function syncFromGoogleSheets(sheetId, onProgress) {
  const names = Object.values(SHEET_NAMES)
  const result = {}

  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    onProgress?.(`"${name}" 시트 불러오는 중... (${i + 1}/${names.length})`)
    const rows   = await fetchSheet(sheetId, name)
    const parsed = parseSheetRows(name, rows)
    Object.assign(result, parsed)
  }

  return result
}
