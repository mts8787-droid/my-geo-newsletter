// 경쟁비 표기 single source — 뉴스레터 카드 / 인사이트 본문 / AI 프롬프트 공통.
//
// 표기 규칙 (사용자 결정 2026-08-27):
//   · Visibility 점수 → % 를 붙인다        (예: 38.3%)
//   · 경쟁비          → % 없이 배수로 쓴다  (예: 1.2)
//
// 소수 1자리가 기본. 다만 0.1 미만은 1자리로 쓰면 전부 '0.0' 으로 뭉개져
// 의미가 사라지므로 (청소기 8% → 0.1 / 1% → 0.0) 2자리로 내린다.
//
// ⚠ 표기 변경은 이 파일에서만. 다른 곳에 포맷 하드코딩 금지.

// 배수(ratio) → 표기 문자열. 1.17 → '1.2', 0.08 → '0.08'
export function fmtRatio(x) {
  if (x == null || !isFinite(x)) return '—'
  return x < 0.1 ? x.toFixed(2) : x.toFixed(1)
}

// 자사 점수 · 경쟁사 점수 → 경쟁비 표기. compScore 0/누락이면 비교 불가.
export function compRatioStr(score, compScore) {
  const c = Number(compScore) || 0
  if (c <= 0 || score == null) return '—'
  return fmtRatio(Number(score) / c)
}

// percent 로 저장된 경쟁비(117) → 배수 표기('1.2'). 레거시 데이터·프롬프트용.
export function pctToRatioStr(pct) {
  if (pct == null || !isFinite(pct)) return '—'
  return fmtRatio(Number(pct) / 100)
}
