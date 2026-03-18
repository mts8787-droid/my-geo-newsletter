/**
 * Normalize cell value: trim strings, parse numbers/percentages
 */
function norm(v) {
  if (v === null || v === undefined || v === '') return ''
  if (typeof v === 'number') return v
  const s = String(v).trim()
  if (/^-?\d+(\.\d+)?%$/.test(s)) return parseFloat(s)
  const n = s.replace(/,/g, '')
  if (/^-?\d+(\.\d+)?$/.test(n)) return parseFloat(n)
  return s
}

function isEmptyRow(row) {
  return row.every(c => norm(c) === '')
}

/**
 * Remove columns that are entirely empty across all rows.
 * Returns { rows, keptIndices } where keptIndices maps new col → original col index.
 */
function stripEmptyColumns(rows) {
  if (!rows || rows.length === 0) return { rows: [], keptIndices: [] }

  const maxCols = Math.max(...rows.map(r => r.length))
  const keptIndices = []

  for (let c = 0; c < maxCols; c++) {
    const hasValue = rows.some(r => r[c] !== undefined && r[c] !== null && String(r[c]).trim() !== '')
    if (hasValue) keptIndices.push(c)
  }

  const cleaned = rows.map(r => keptIndices.map(c => r[c] ?? ''))
  return { rows: cleaned, keptIndices }
}

/**
 * Parse the Overview or HS sheet.
 *
 * Actual structure (from the real Google Sheet):
 *   Row 0:   Title + "0. 정량 과제 Summary"
 *   Rows 1-2:  구분 | 3월 | 연간 진척도 | ... | 구분 | 3월 | 4월 | ... | 12월
 *              (left: cumulative totals, right: monthly breakdown)
 *   Rows ~4-11:  Task descriptions / per-task lines
 *   Rows ~12-27: Stakeholder rows (HS, MS, ES, PR, 고가혁, 브랜드, D2C — 목표/현황 pairs)
 *   "연간 진척율" header
 *   Chart data rows
 *   "월별 달성률" header
 *   Chart data rows
 *   "정량 과제 목표" table (header + data)
 *   "정량 과제 현황" table (header + data)
 *   "정성 과제" section
 *
 * We return the stripped rows as-is so the dashboard can render raw tables,
 * plus we extract key aggregates where detectable.
 */
export function parseProgressSheet(rawRows) {
  const { rows } = stripEmptyColumns(rawRows)

  const result = {
    totalProgress: { total: 0, quantitative: 0, qualitative: 0 },
    sections: [],   // { title, headerRow, dataRows }
    raw: rows,
  }

  if (!rows || rows.length === 0) return result

  let i = 0
  const len = rows.length

  // Detect total progress from first few rows
  for (let r = 0; r < Math.min(5, len); r++) {
    const row = rows[r]
    for (let c = 0; c < row.length; c++) {
      const label = String(norm(row[c])).trim()
      const val = norm(row[c + 1])
      if (/^전체$/i.test(label) && typeof val === 'number') result.totalProgress.total = val
      else if (/^정량$/i.test(label) && typeof val === 'number') result.totalProgress.quantitative = val
      else if (/^정성$/i.test(label) && typeof val === 'number') result.totalProgress.qualitative = val
    }
  }

  // Now scan for section headers and build sections
  while (i < len) {
    // Skip empty rows
    while (i < len && isEmptyRow(rows[i])) i++
    if (i >= len) break

    const row = rows[i]
    const firstCell = String(norm(row[0])).trim()

    // Detect section headers: rows where first cell has a known keyword
    // and most other cells are empty
    const filledCount = row.filter(c => norm(c) !== '').length
    const isHeader = filledCount <= 3 && firstCell.length > 1 && (
      /진척|달성|과제|summary|progress|목표|현황|연간|월별|정량|정성|stakeholder/i.test(firstCell)
    )

    if (isHeader) {
      const title = firstCell
      i++
      // Skip empty rows after header
      while (i < len && isEmptyRow(rows[i])) i++
      if (i >= len) { result.sections.push({ title, headerRow: [], dataRows: [] }); break }

      // Next non-empty row = column headers
      const headerRow = rows[i].map(c => String(norm(c)).trim())
      i++

      // Collect data rows until next empty row or next section header
      const dataRows = []
      while (i < len) {
        if (isEmptyRow(rows[i])) break
        const r = rows[i]
        const fc = String(norm(r[0])).trim()
        const fc_filled = r.filter(c => norm(c) !== '').length
        // If this row looks like another section header, stop
        if (fc_filled <= 3 && fc.length > 1 && /진척|달성|과제|summary|progress|목표|현황|연간|월별|정량|정성/i.test(fc)) break
        dataRows.push(r.map(c => norm(c)))
        i++
      }

      result.sections.push({ title, headerRow, dataRows })
      continue
    }

    // Non-header row: could be the first table (summary) without explicit section title
    // Collect it as an unnamed section
    const headerRow = row.map(c => String(norm(c)).trim())
    const hasMultipleHeaders = headerRow.filter(h => h && typeof h === 'string' && h.length > 0).length >= 3
    if (hasMultipleHeaders) {
      i++
      const dataRows = []
      while (i < len && !isEmptyRow(rows[i])) {
        dataRows.push(rows[i].map(c => norm(c)))
        i++
      }
      result.sections.push({ title: '', headerRow, dataRows })
      continue
    }

    i++
  }

  return result
}

/**
 * Parse HS 관리 sheet — strip empty columns, keep as flat table.
 * The sheet has sub-sections (e.g. "1-4.구조화된 콘텐츠 작성" and "1-7.신규 콘텐츠 제작")
 * with their own sub-headers. We merge them into one flat table where possible.
 */
export function parseDataMartSheet(rawRows) {
  if (!rawRows || rawRows.length < 2) return { headers: [], data: [], summary: {}, filterOptions: {} }

  const { rows } = stripEmptyColumns(rawRows)

  // First row is the header
  const rawHeaders = rows[0].map(c => String(norm(c)).trim())

  // Deduplicate header names (append index for duplicates)
  const headerCount = {}
  const headers = rawHeaders.map(h => {
    if (!h) return ''
    headerCount[h] = (headerCount[h] || 0) + 1
    return headerCount[h] > 1 ? `${h}_${headerCount[h]}` : h
  }).filter(h => h)

  // Map header index for data extraction
  const headerIndices = []
  rawHeaders.forEach((h, idx) => { if (h) headerIndices.push(idx) })

  const data = []
  for (let i = 1; i < rows.length; i++) {
    if (isEmptyRow(rows[i])) continue
    const obj = {}
    headers.forEach((h, j) => {
      obj[h] = norm(rows[i][headerIndices[j]])
    })
    if (Object.values(obj).every(v => v === '')) continue
    data.push(obj)
  }

  // Summary
  const totalUrls = data.length
  const passField = headers.find(h => /^P[-\/]?F/i.test(h)) || 'P/F'
  const passCount = data.filter(r => /^P$|pass|통과|적합/i.test(String(r[passField]))).length
  const failCount = data.filter(r => /^F$|fail|미통과|부적합/i.test(String(r[passField]))).length
  const passRate = totalUrls > 0 ? Math.round((passCount / totalUrls) * 100) : 0

  // Filter options (columns with 2-50 unique values)
  const filterOptions = {}
  headers.forEach(h => {
    const unique = [...new Set(data.map(r => String(r[h] ?? '')).filter(v => v !== ''))]
    if (unique.length >= 2 && unique.length <= 50) {
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
