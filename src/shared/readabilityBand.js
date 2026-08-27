// Readability 신호등 single source — 대시보드 / 뉴스레터 / 검수기준 페이지 공통.
//
// 배경: 기준이 4벌로 분산돼 있었다 (대시보드 scoreColor ≥70, rateColor ≥80,
// 검수기준 band ≥90, 뉴스레터 rdColor ≥90). 같은 국가 점수가 화면마다 다른 색으로
// 나오는 회귀가 있어 하나로 통합 (사용자 결정 2026-08-27).
//
// 점수(총점·국가·영역·페이지타입)와 항목 통과율을 구분하지 않는다 —
// 영역 점수는 사실상 항목 통과율의 가중평균이라 같은 척도이기 때문.
//
// ⚠ 기준 변경은 이 파일에서만. 다른 곳에 임계값 하드코딩 금지.

export const RD_BAND = { good: 80, warn: 50 }

export const RD_BAND_COLOR = {
  good: '#15803D',   // STATUS lead
  warn: '#B45309',   // STATUS behind
  crit: '#BE123C',   // STATUS critical
  na:   '#94A3B8',   // 측정 없음
}

// 값(0~100) → 밴드 키
export function rdBandKey(v) {
  if (v == null) return 'na'
  if (v >= RD_BAND.good) return 'good'
  if (v >= RD_BAND.warn) return 'warn'
  return 'crit'
}

// 값(0~100) → 색상
export function rdBandColor(v) {
  return RD_BAND_COLOR[rdBandKey(v)]
}
