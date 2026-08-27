// 발행월(period) → 리포트 Vol 번호 · 데이터 기준(dateLine) 자동 연동.
//
// 기준점: Feb 2026 = Vol.03, 이후 매월 +1 (사용자 확인 2026-08-27).
// 데이터 기준: 발행월의 전월 — 8월호가 7월 측정분을 담는 현재 발행 방식과 일치.
//
// 이 모듈이 Vol·dateLine 의 단일 소스. meta 시트에서 끌어오지 않는다.

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Vol 기준점 — Feb 2026 이 Vol.03
const VOL_BASE = { year: 2026, month: 2, vol: 3 }

// 'Aug 2026' / '2026년 8월' / '2026-08' 등 → { year, month } | null
export function parsePeriod(period) {
  const s = String(period || '').trim()
  if (!s) return null
  let year = null, month = null
  const y4 = s.match(/(\d{4})/)
  if (y4) year = parseInt(y4[1])
  else {
    const y2 = s.match(/(\d{2})년/)
    if (y2) year = 2000 + parseInt(y2[1])
  }
  const km = s.match(/(\d{1,2})\s*월/)
  if (km) month = parseInt(km[1])
  else {
    const em = s.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i)
    if (em) month = MONTHS_EN.findIndex(m => m.toLowerCase() === em[1].toLowerCase()) + 1
    else {
      const iso = s.match(/\d{4}[-/](\d{1,2})/)
      if (iso) month = parseInt(iso[1])
    }
  }
  if (!year || !month || month < 1 || month > 12) return null
  return { year, month }
}

// 발행월 → 'Vol.09' (기준점부터 월 단위 +1). 기준점 이전이면 Vol.01 하한.
export function volFor(period) {
  const p = parsePeriod(period)
  if (!p) return null
  const diff = (p.year - VOL_BASE.year) * 12 + (p.month - VOL_BASE.month)
  const vol = VOL_BASE.vol + diff
  if (vol < 1) return null
  return `Vol.${String(vol).padStart(2, '0')}`
}

// 발행월 → 데이터 기준(전월) { year, month }
export function dataMonthFor(period) {
  const p = parsePeriod(period)
  if (!p) return null
  return p.month === 1 ? { year: p.year - 1, month: 12 } : { year: p.year, month: p.month - 1 }
}

// 발행월 → 'As of Jul 2026' (EN) / '2026년 7월 기준' (KO)
export function dateLineFor(period, lang = 'en') {
  const d = dataMonthFor(period)
  if (!d) return null
  return lang === 'ko'
    ? `${d.year}년 ${d.month}월 기준`
    : `As of ${MONTHS_EN[d.month - 1]} ${d.year}`
}

// 발행월 기준 자동 필드 묶음 — 값을 못 구하면 해당 키를 생략(기존 값 보존).
export function derivedMetaFor(period) {
  const out = {}
  const vol = volFor(period)
  if (vol) out.reportNo = vol
  const dl = dateLineFor(period, 'en')
  if (dl) out.dateLine = dl
  return out
}
