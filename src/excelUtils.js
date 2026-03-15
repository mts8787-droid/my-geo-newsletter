import * as XLSX from 'xlsx'

export const SHEET_NAMES = {
  meta:        'meta',
  total:       'total',
  products:    'products',
  weekly:      'weekly',
  citations:   'citations',
  dotcom:      'dotcom',
}

export const DOTCOM_LG_COLS   = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience']
export const DOTCOM_SAM_COLS  = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide']

export function downloadTemplate(meta, total, products, citations, dotcom = {}) {
  const wb = XLSX.utils.book_new()

  // ── meta ──────────────────────────────────────────────────────────────────
  const wsMeta = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] 리포트 기본 정보 시트'],
    ['※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요.'],
    [''],
    ['key', 'value', '설명'],
    ['period',            meta.period,            '보고서 기간 (예: 2026년 3월)'],
    ['team',              meta.team,              '담당 팀명'],
    ['reportNo',          meta.reportNo,          '보고서 번호 (예: Vol.03)'],
    ['reportType',        meta.reportType,        '리포트 유형 (예: GEO 월간 성과 분석 리포트)'],
    ['title',             meta.title,             '리포트 제목'],
    ['titleFontSize',     meta.titleFontSize,     '제목 폰트 크기 (숫자, 예: 24)'],
    ['titleColor',        meta.titleColor,        '제목 색상 (HEX, 예: #1A1A1A)'],
    ['dateLine',          meta.dateLine,          '기준 텍스트 (예: 2026년 3월 기준)'],
    ['showNotice',        meta.showNotice ? 'Y' : 'N', 'Notice 표시 여부 (Y/N)'],
    ['noticeText',        meta.noticeText,        'Notice 내용'],
    ['totalInsight',      meta.totalInsight,      'GEO 전략 인사이트'],
    ['productInsight',    meta.productInsight,    '제품별 GEO 인사이트'],
    ['showProductInsight', meta.showProductInsight ? 'Y' : 'N', '제품별 인사이트 표시 (Y/N)'],
    ['productHowToRead',  meta.productHowToRead,  '제품별 읽는 법'],
    ['showProductHowToRead', meta.showProductHowToRead ? 'Y' : 'N', '제품별 읽는 법 표시 (Y/N)'],
    ['citationInsight',   meta.citationInsight,   'Citation 인사이트'],
    ['showCitationInsight', meta.showCitationInsight ? 'Y' : 'N', 'Citation 인사이트 표시 (Y/N)'],
    ['citationHowToRead', meta.citationHowToRead, 'Citation 읽는 법'],
    ['showCitationHowToRead', meta.showCitationHowToRead ? 'Y' : 'N', 'Citation 읽는 법 표시 (Y/N)'],
    ['dotcomInsight',     meta.dotcomInsight,     '닷컴 Citation 인사이트'],
    ['showDotcomInsight', meta.showDotcomInsight ? 'Y' : 'N', '닷컴 인사이트 표시 (Y/N)'],
    ['dotcomHowToRead',   meta.dotcomHowToRead,   '닷컴 읽는 법'],
    ['showDotcomHowToRead', meta.showDotcomHowToRead ? 'Y' : 'N', '닷컴 읽는 법 표시 (Y/N)'],
  ])
  wsMeta['!cols'] = [{ wch: 24 }, { wch: 50 }, { wch: 40 }]
  XLSX.utils.book_append_sheet(wb, wsMeta, SHEET_NAMES.meta)

  // ── total ─────────────────────────────────────────────────────────────────
  const wsTotal = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] 전체 GEO 가시성 지수 시트'],
    ['※ key 열은 수정하지 마세요. value 열(B열)만 수정하세요. 숫자만 입력.'],
    [''],
    ['key', 'value', '설명'],
    ['score',       total.score,       '이번 달 전체 GEO 점수 (0~100, 소수점 가능)'],
    ['prev',        total.prev,        '전월 GEO 점수 — 전월 대비 증감 자동 계산'],
    ['rank',        total.rank,        '전체 브랜드 중 LG전자 순위 (정수)'],
    ['totalBrands', total.totalBrands, '비교 대상 전체 브랜드 수 (정수)'],
  ])
  wsTotal['!cols'] = [{ wch: 14 }, { wch: 10 }, { wch: 44 }]
  XLSX.utils.book_append_sheet(wb, wsTotal, SHEET_NAMES.total)

  // ── products ──────────────────────────────────────────────────────────────
  const wsProducts = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] 제품별 데이터 시트'],
    ['※ id·bu·kr 열은 수정하지 마세요. score·prev·vsComp·compName 열만 수정하세요.'],
    ['  score: 이번달 GEO 점수(%)  |  prev: 전월 점수(%)  |  vsComp: 경쟁사 가시성 점수(%)  |  compName: 비교 경쟁사명'],
    [''],
    ['id', 'bu', 'kr', 'score', 'prev', 'vsComp', 'compName'],
    ...products.map(p => [p.id, p.bu, p.kr, p.score, p.prev, p.vsComp, p.compName]),
  ])
  wsProducts['!cols'] = [{ wch: 10 }, { wch: 6 }, { wch: 12 }, { wch: 8 }, { wch: 8 }, { wch: 10 }, { wch: 12 }]
  XLSX.utils.book_append_sheet(wb, wsProducts, SHEET_NAMES.products)

  // ── weekly ────────────────────────────────────────────────────────────────
  const wsWeekly = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] 주간 트렌드 데이터 시트 (4주)'],
    ['※ id·kr 열은 수정하지 마세요. W1~W4 열에 주차별 GEO 점수를 입력하세요.'],
    ['  W1이 가장 오래된 주, W4이 이번 달 최신 주입니다.'],
    [''],
    ['id', 'kr', 'W1', 'W2', 'W3', 'W4'],
    ...products.map(p => [p.id, p.kr, ...p.weekly]),
  ])
  wsWeekly['!cols'] = [{ wch: 10 }, { wch: 12 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 }, { wch: 8 }]
  XLSX.utils.book_append_sheet(wb, wsWeekly, SHEET_NAMES.weekly)

  // ── citations ─────────────────────────────────────────────────────────────
  const wsCitations = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] AI Citation 현황 시트'],
    ['※ 생성형 AI가 LG 제품을 언급할 때 인용하는 출처(Source)와 그 기여 점수를 입력하세요.'],
    ['  rank: 순위(정수)  |  source: 출처명(사이트/매체명)  |  category: 관련 제품 카테고리'],
    ['  score: Citation 건수  |  delta: 전월 대비 증감(%p, 음수=하락)  |  ratio: 비율(%)'],
    [''],
    ['rank', 'source', 'category', 'score', 'delta', 'ratio'],
    ...citations.map(c => [c.rank, c.source, c.category, c.score, c.delta, c.ratio ?? 0]),
  ])
  wsCitations['!cols'] = [{ wch: 6 }, { wch: 18 }, { wch: 12 }, { wch: 8 }, { wch: 8 }]
  XLSX.utils.book_append_sheet(wb, wsCitations, SHEET_NAMES.citations)

  // ── dotcom ───────────────────────────────────────────────────────────────
  const lg = dotcom?.lg || {}; const sam = dotcom?.samsung || {}
  const wsDotcom = XLSX.utils.aoa_to_sheet([
    ['[GEO Newsletter] 닷컴 Citation (경쟁사대비) 시트'],
    ['※ LG 8개 열 / Samsung 7개 열에 Citation 수를 입력하세요.'],
    [''],
    [...DOTCOM_LG_COLS.map(c => `LG_${c}`), ...DOTCOM_SAM_COLS.map(c => `Samsung_${c}`)],
    [...DOTCOM_LG_COLS.map(c => lg[c] ?? 0), ...DOTCOM_SAM_COLS.map(c => sam[c] ?? 0)],
  ])
  wsDotcom['!cols'] = Array(15).fill({ wch: 14 })
  XLSX.utils.book_append_sheet(wb, wsDotcom, SHEET_NAMES.dotcom)

  XLSX.writeFile(wb, 'GEO_Newsletter_템플릿.xlsx')
}

// ─── 파싱 공통 (Excel & Google Sheets 양쪽에서 재사용) ─────────────────────────
export function parseSheetRows(sheetName, rows) {
  if (sheetName === 'meta') {
    const obj = {}
    const allowedKeys = ['period','team','reportNo','reportType','title','titleFontSize','titleColor','dateLine']
    const numKeys = ['titleFontSize']
    rows.forEach(r => {
      if (!r[0] || String(r[0]).startsWith('[') || String(r[0]).startsWith('※') || r[0] === 'key') return
      const k = String(r[0])
      if (!allowedKeys.includes(k)) return
      const v = r[1] ?? ''
      if (numKeys.includes(k)) obj[k] = parseInt(v) || 24
      else obj[k] = String(v)
    })
    return Object.keys(obj).length ? { meta: obj } : {}
  }
  if (sheetName === 'total') {
    const obj = {}
    rows.forEach(r => {
      if (!r[0] || String(r[0]).startsWith('[') || String(r[0]).startsWith('※') || r[0] === 'key') return
      const k = String(r[0])
      if (k === 'rank' || k === 'totalBrands') { obj[k] = parseInt(r[1]) || 0 }
      else { const n = parseFloat(r[1]) || 0; obj[k] = (k === 'score' || k === 'prev') && Math.abs(n) < 1 ? +(n * 100).toFixed(2) : n }
    })
    return Object.keys(obj).length ? { total: obj } : {}
  }
  if (sheetName === 'products') {
    const data = rows.filter(r => r[0] && r[0] !== 'id' && !String(r[0]).startsWith('[') && !String(r[0]).startsWith('※') && !String(r[0]).startsWith(' '))
    if (!data.length) return {}
    // 구글시트 %셀은 0.45 형태로 내보냄 → ×100 변환 (1 미만이면 % 소수로 판단)
    const pct = v => { const n = parseFloat(v) || 0; return Math.abs(n) < 1 ? +(n * 100).toFixed(2) : n }
    return { productsPartial: data.map(r => ({
      id: String(r[0]), bu: String(r[1]), kr: String(r[2]),
      score: pct(r[3]), prev: pct(r[4]),
      vsComp: pct(r[5]), compName: String(r[6] || ''),
    })) }
  }
  if (sheetName === 'weekly') {
    const data = rows.filter(r => r[0] && r[0] !== 'id' && !String(r[0]).startsWith('[') && !String(r[0]).startsWith('※') && !String(r[0]).startsWith(' '))
    if (!data.length) return {}
    const weeklyMap = {}
    const pct = v => { const n = parseFloat(v) || 0; return Math.abs(n) < 1 ? +(n * 100).toFixed(2) : n }
    data.forEach(r => { weeklyMap[String(r[0])] = [r[2],r[3],r[4],r[5]].map(pct) })
    return { weeklyMap }
  }
  if (sheetName === 'citations') {
    const data = rows.filter(r => r[0] !== '' && r[0] !== 'rank' && !String(r[0]).startsWith('[') && !String(r[0]).startsWith('※') && !String(r[0]).startsWith(' '))
    if (!data.length) return {}
    return { citations: data.map(r => ({
      rank:     parseInt(r[0])    || 0,
      source:   String(r[1]      || ''),
      category: String(r[2]      || ''),
      score:    parseFloat(String(r[3] || '').replace(/,/g, '')) || 0,
      delta:    String(r[4] || '-') === '-' ? 0 : parseFloat(r[4]) || 0,
      ratio:    (() => { const n = parseFloat(String(r[5] || '').replace('%', '')) || 0; return Math.abs(n) < 1 ? +(n * 100).toFixed(2) : n })(),
    })) }
  }
  if (sheetName === 'dotcom') {
    // 헤더 행 찾기: "LG_TTL"이 포함된 행
    const headerIdx = rows.findIndex(r => r.some(cell => String(cell).includes('LG_TTL') || String(cell).includes('TTL')))
    if (headerIdx < 0) return {}
    const data = rows.slice(headerIdx + 1).filter(r => r.some(cell => cell !== '' && cell != null && !String(cell).startsWith('[') && !String(cell).startsWith('※')))
    if (!data.length) return {}
    const r = data[0]
    const lg = {}; DOTCOM_LG_COLS.forEach((c, i) => {
      const raw = String(r[i] ?? '').replace(/,/g, '')
      lg[c] = parseFloat(raw) || 0
    })
    const samsung = {}; DOTCOM_SAM_COLS.forEach((c, i) => {
      const raw = String(r[DOTCOM_LG_COLS.length + i] ?? '').replace(/,/g, '')
      samsung[c] = parseFloat(raw) || 0
    })
    return { dotcom: { lg, samsung } }
  }
  return {}
}
