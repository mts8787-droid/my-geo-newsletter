import { MONTHS, STAKEHOLDERS } from './constants'

/**
 * Normalize cell value: trim strings, parse numbers
 */
function norm(v) {
  if (v === null || v === undefined || v === '') return ''
  if (typeof v === 'number') return v
  const s = String(v).trim()
  // Percentage: "45%" → 45
  if (/^-?\d+(\.\d+)?%$/.test(s)) return parseFloat(s)
  // Number with commas: "1,234" → 1234
  const n = s.replace(/,/g, '')
  if (/^-?\d+(\.\d+)?$/.test(n)) return parseFloat(n)
  return s
}

/**
 * Check if a row is mostly empty (section separator)
 */
function isEmptyRow(row) {
  return row.every(c => norm(c) === '')
}

/**
 * Check if a row looks like a section header (1-2 non-empty cells, first cell has text)
 */
function isSectionHeader(row) {
  const filled = row.filter(c => norm(c) !== '')
  return filled.length >= 1 && filled.length <= 2 && typeof norm(row[0]) === 'string' && norm(row[0]).length > 0
}

/**
 * Parse the Overview or HS sheet into structured sections.
 * These sheets have a pattern:
 *   Section Header Row
 *   Column Headers Row
 *   Data Rows...
 *   Empty Row(s)
 *   Next Section...
 */
export function parseProgressSheet(rows) {
  const result = {
    totalProgress: { total: 0, quantitative: 0, qualitative: 0 },
    stakeholders: [],
    annualProgress: [],
    monthlyAchievement: [],
    quantitativeTasks: [],
    qualitativeTasks: [],
    raw: rows,
  }

  if (!rows || rows.length === 0) return result

  let i = 0
  const len = rows.length

  // Helper: find the next non-empty row starting from index
  const skipEmpty = (from) => {
    while (from < len && isEmptyRow(rows[from])) from++
    return from
  }

  // Helper: collect data rows until empty row or section header
  const collectDataRows = (from, headerRow) => {
    const data = []
    let j = from
    while (j < len && !isEmptyRow(rows[j])) {
      const row = rows[j]
      // Stop if this looks like a new section header (no numbers, short text)
      if (j > from && isSectionHeader(row) && data.length > 0) break
      const obj = {}
      headerRow.forEach((h, idx) => {
        if (h) obj[h] = norm(row[idx])
      })
      data.push(obj)
      j++
    }
    return { data, nextIndex: j }
  }

  // Scan through the sheet looking for known section markers
  while (i < len) {
    i = skipEmpty(i)
    if (i >= len) break

    const row = rows[i]
    const firstCell = String(norm(row[0])).trim()

    // ─── Total Progress Section ───
    if (/진척률|진척율|progress/i.test(firstCell) && /전체|total|overall/i.test(firstCell)) {
      i++
      // Look for rows like: "전체 45%" or header + data pattern
      while (i < len && !isEmptyRow(rows[i])) {
        const r = rows[i]
        const label = String(norm(r[0])).trim()
        const val = norm(r[1])
        if (/전체|total/i.test(label)) result.totalProgress.total = typeof val === 'number' ? val : 0
        else if (/정량|quantit/i.test(label)) result.totalProgress.quantitative = typeof val === 'number' ? val : 0
        else if (/정성|qualit/i.test(label)) result.totalProgress.qualitative = typeof val === 'number' ? val : 0
        i++
      }
      continue
    }

    // ─── Stakeholder / Department Section ───
    if (/부서|담당|stakeholder|department/i.test(firstCell)) {
      i++
      i = skipEmpty(i)
      if (i >= len) break
      const headerRow = rows[i].map(c => String(norm(c)).trim())
      i++
      const { data, nextIndex } = collectDataRows(i, headerRow)
      result.stakeholders = data
      i = nextIndex
      continue
    }

    // ─── Annual Progress Section ───
    if (/연간|annual|yearly/i.test(firstCell) && /진척|progress/i.test(firstCell)) {
      i++
      i = skipEmpty(i)
      if (i >= len) break
      const headerRow = rows[i].map(c => String(norm(c)).trim())
      i++
      const { data, nextIndex } = collectDataRows(i, headerRow)
      result.annualProgress = data
      i = nextIndex
      continue
    }

    // ─── Monthly Achievement Section ───
    if (/월별|monthly/i.test(firstCell) && /달성|achieve/i.test(firstCell)) {
      i++
      i = skipEmpty(i)
      if (i >= len) break
      const headerRow = rows[i].map(c => String(norm(c)).trim())
      i++
      const { data, nextIndex } = collectDataRows(i, headerRow)
      result.monthlyAchievement = data
      i = nextIndex
      continue
    }

    // ─── Quantitative Tasks Section ───
    if (/정량|quantit/i.test(firstCell) && /과제|task/i.test(firstCell)) {
      i++
      i = skipEmpty(i)
      if (i >= len) break
      const headerRow = rows[i].map(c => String(norm(c)).trim())
      i++
      const { data, nextIndex } = collectDataRows(i, headerRow)
      result.quantitativeTasks = data
      i = nextIndex
      continue
    }

    // ─── Qualitative Tasks Section ───
    if (/정성|qualit/i.test(firstCell) && /과제|task/i.test(firstCell)) {
      i++
      i = skipEmpty(i)
      if (i >= len) break
      const headerRow = rows[i].map(c => String(norm(c)).trim())
      i++
      const { data, nextIndex } = collectDataRows(i, headerRow)
      result.qualitativeTasks = data
      i = nextIndex
      continue
    }

    // ─── Fallback: try to detect a table by checking if next row has headers ───
    // If first cell doesn't match known sections, try to parse as a generic table
    if (!isEmptyRow(row)) {
      // Check if this could be a header row (multiple string cells)
      const stringCells = row.filter(c => typeof norm(c) === 'string' && norm(c) !== '')
      if (stringCells.length >= 3) {
        // This might be a header row for an unlabeled section
        const headerRow = row.map(c => String(norm(c)).trim())
        i++
        const { data, nextIndex } = collectDataRows(i, headerRow)
        // Try to categorize based on column names
        const headerStr = headerRow.join(' ').toLowerCase()
        if (/목표.*달성|target.*actual/i.test(headerStr)) {
          if (headerStr.includes('부서') || headerStr.includes('담당') || STAKEHOLDERS.some(s => headerStr.includes(s.toLowerCase()))) {
            result.stakeholders = data
          } else {
            result.monthlyAchievement = data
          }
        } else if (/과제|task/i.test(headerStr)) {
          if (/정성|qualit/i.test(headerStr)) {
            result.qualitativeTasks = data
          } else {
            result.quantitativeTasks = data
          }
        }
        i = nextIndex
        continue
      }
    }

    i++
  }

  return result
}

/**
 * Parse HS 관리 sheet (flat data mart table).
 * First row = headers, rest = data rows.
 */
export function parseDataMartSheet(rows) {
  if (!rows || rows.length < 2) return { headers: [], data: [], summary: {} }

  // First row is the header
  const headers = rows[0].map(c => String(norm(c)).trim()).filter(h => h)
  const data = []

  for (let i = 1; i < rows.length; i++) {
    if (isEmptyRow(rows[i])) continue
    const obj = {}
    headers.forEach((h, idx) => {
      obj[h] = norm(rows[i][idx])
    })
    // Skip rows where all values are empty
    if (Object.values(obj).every(v => v === '')) continue
    data.push(obj)
  }

  // Compute summary
  const totalUrls = data.length
  const passField = headers.find(h => /^P[-\/]?F$|pass.*fail|결과|판정/i.test(h)) || 'P/F'
  const passCount = data.filter(r => /^P$|pass|통과|적합/i.test(String(r[passField]))).length
  const failCount = data.filter(r => /^F$|fail|미통과|부적합/i.test(String(r[passField]))).length
  const passRate = totalUrls > 0 ? Math.round((passCount / totalUrls) * 100) : 0

  // Collect unique values for filters
  const filterOptions = {}
  headers.forEach(h => {
    const unique = [...new Set(data.map(r => String(r[h] ?? '')).filter(v => v !== ''))]
    if (unique.length > 0 && unique.length <= 100) {
      filterOptions[h] = unique.sort()
    }
  })

  return {
    headers,
    data,
    summary: { totalUrls, passCount, failCount, passRate },
    filterOptions,
  }
}
