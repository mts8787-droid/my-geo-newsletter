import { MONTHS } from './constants'

/**
 * Normalize a cell value: trim whitespace, parse plain numbers.
 * Percentage strings like "253%" are kept as-is for display.
 */
function norm(v) {
  if (v === null || v === undefined || v === '') return ''
  if (typeof v === 'number') return v
  const s = String(v).trim()
  if (/^-?\d+(\.\d+)?%$/.test(s)) return s
  const n = s.replace(/,/g, '')
  if (/^-?\d+(\.\d+)?$/.test(n)) return parseFloat(n)
  return s
}

function isEmptyRow(row) {
  return !row || row.every(c => !c || String(c).trim() === '')
}

function parseQuantitativeRow(row) {
  const monthly = {}
  MONTHS.forEach((m, idx) => {
    monthly[m] = norm(row[6 + idx])
  })
  return {
    stakeholder: String(row[1] || '').trim(),
    task: String(row[2] || '').trim(),
    pageType: String(row[3] || '').trim(),
    detail: String(row[4] || '').trim(),
    annual: norm(row[5]),
    monthly,
  }
}

function parseQualitativeRow(row) {
  const monthly = {}
  MONTHS.forEach((m, idx) => {
    monthly[m] = norm(row[5 + idx])
  })
  return {
    stakeholder: String(row[1] || '').trim(),
    task: String(row[2] || '').trim(),
    pageType: String(row[3] || '').trim(),
    detail: String(row[4] || '').trim(),
    monthly,
    _raw: row.slice(0, 30).map(c => String(c ?? '')),
  }
}

/**
 * Parse the "파싱시트" containing 5 tables:
 *   표1. 정량과제 목표
 *   표2. 정량과제 실적
 *   표3. 정량과제 달성율
 *   표4. 정성과제 목표
 *   표5. 정성과제 달성여부
 *
 * Tables are separated by rows whose first cell starts with "표N."
 */
export function parseKPISheet(rawRows) {
  const result = {
    quantitativeGoals:   { rows: [], totals: null },
    quantitativeResults: { rows: [], totals: null },
    quantitativeRates:   { rows: [], totals: null },
    qualitativeGoals:    { rows: [] },
    qualitativeResults:  { rows: [] },
  }

  const TABLE_MAP = [
    { prefix: '표1.', key: 'quantitativeGoals' },
    { prefix: '표2.', key: 'quantitativeResults' },
    { prefix: '표3.', key: 'quantitativeRates' },
    { prefix: '표4.', key: 'qualitativeGoals' },
    { prefix: '표5.', key: 'qualitativeResults' },
  ]

  let currentKey = null

  for (let i = 0; i < rawRows.length; i++) {
    const row = rawRows[i]
    if (isEmptyRow(row)) continue

    const firstCell = String(row[0] || '').trim()

    // Detect table boundary
    const marker = TABLE_MAP.find(t => firstCell.startsWith(t.prefix))
    if (marker) {
      currentKey = marker.key
      continue
    }

    // Skip sub-header rows (e.g. "지표 구분", "Stakeholders", ...)
    // But save header for debug
    if (firstCell === '지표 구분') {
      if (currentKey && currentKey.startsWith('qualitative')) {
        result._debugHeaders = result._debugHeaders || {}
        result._debugHeaders[currentKey] = row.slice(0, 30).map(c => String(c ?? ''))
      }
      continue
    }

    if (!currentKey) continue

    const isQuantitative = currentKey.startsWith('quantitative')

    if (isQuantitative) {
      const parsed = parseQuantitativeRow(row)
      if (!parsed.stakeholder) continue
      if (parsed.stakeholder === 'Total') {
        result[currentKey].totals = parsed
      } else {
        result[currentKey].rows.push(parsed)
      }
    } else {
      // DEBUG: log first qualitative row to verify column positions
      if (result[currentKey].rows.length === 0) {
        console.log(`[DEBUG] ${currentKey} first data row:`, JSON.stringify(row.slice(0, 16)))
        console.log(`[DEBUG] row[5]="${row[5]}" row[6]="${row[6]}" row[7]="${row[7]}"`)
      }
      const parsed = parseQualitativeRow(row)
      if (!parsed.stakeholder) continue
      result[currentKey].rows.push(parsed)
    }
  }

  return result
}
