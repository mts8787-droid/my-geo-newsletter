// 발행월 → 표기월(데이터월)·Vol 번호·데이터 기준 자동 연동.
//
// 확정 규칙 (사용자 2026-09-18 — 8/27 규칙 대체):
//   · 사이드바에서 고르는 것은 **발행월** (예: Sep 2026)
//   · 화면 표기·meta.period 는 **데이터월 = 발행월 전월** (예: Aug 2026)
//     — 헤더(Vol.NN · Aug 2026)·데이터 기준·트래커 진척월 등 모든 파생이 이 값 기준
//   · Vol 은 데이터월 기준: **Jul 2026(데이터) = Vol.05**, 매월 +1 (7월호 실측 기준점)
//
// 이 모듈이 Vol·dateLine 의 단일 소스. meta 시트에서 끌어오지 않는다.

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Vol 기준점 — 데이터월 Jul 2026 = Vol.05 (2026-07 호 헤더 실측)
const VOL_BASE = { year: 2026, month: 7, vol: 5 }

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

function fmtEn({ year, month }) { return `${MONTHS_EN[month - 1]} ${year}` }
function minusOne({ year, month }) { return month === 1 ? { year: year - 1, month: 12 } : { year, month: month - 1 } }

// 발행월 → 표기월(데이터월 = 전월) 문자열. 예: 'Sep 2026' → 'Aug 2026'
export function dataPeriodOf(pubPeriod) {
  const p = parsePeriod(pubPeriod)
  if (!p) return null
  return fmtEn(minusOne(p))
}

// 데이터월 → 'Vol.06' (Jul 2026 = Vol.05 기준 매월 +1). 기준 이전이면 Vol.01 하한.
export function volFor(dataPeriod) {
  const p = parsePeriod(dataPeriod)
  if (!p) return null
  const diff = (p.year - VOL_BASE.year) * 12 + (p.month - VOL_BASE.month)
  const vol = VOL_BASE.vol + diff
  if (vol < 1) return null
  return `Vol.${String(vol).padStart(2, '0')}`
}

// 데이터월 → 'As of Aug 2026' (EN) / '2026년 8월 기준' (KO)
// (meta.period 가 이미 데이터월이므로 그 달 그대로 표기 — 전월 계산 없음)
export function dateLineFor(dataPeriod, lang = 'en') {
  const p = parsePeriod(dataPeriod)
  if (!p) return null
  return lang === 'ko'
    ? `${p.year}년 ${p.month}월 기준`
    : `As of ${MONTHS_EN[p.month - 1]} ${p.year}`
}

// 데이터월 기준 자동 필드 묶음 — 값을 못 구하면 해당 키를 생략(기존 값 보존).
export function derivedMetaFor(dataPeriod) {
  const out = {}
  const vol = volFor(dataPeriod)
  if (vol) out.reportNo = vol
  const dl = dateLineFor(dataPeriod, 'en')
  if (dl) out.dateLine = dl
  return out
}

// 발행월 입력 → 저장할 meta 묶음 전체 (표기월 + Vol + 데이터 기준)
// 예: 'Sep 2026' → { period: 'Aug 2026', reportNo: 'Vol.06', dateLine: 'As of Aug 2026' }
export function metaForPubMonth(pubPeriod) {
  const dp = dataPeriodOf(pubPeriod)
  if (!dp) return null
  return { period: dp, ...derivedMetaFor(dp) }
}

// meta.period(데이터월) → 발행월 표기 (입력창 표시용 역변환). 예: 'Aug 2026' → 'Sep 2026'
export function pubPeriodOf(dataPeriod) {
  const p = parsePeriod(dataPeriod)
  if (!p) return null
  const next = p.month === 12 ? { year: p.year + 1, month: 1 } : { year: p.year, month: p.month + 1 }
  return fmtEn(next)
}
