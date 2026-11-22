// 뉴스레터 편집기 불러오기 하한 (사용자 지시 2026-11-22)
// 에디토리얼 디자인 개편(emailEditorialStyle, 2026-11-22) 이후 편집기는 10월호(데이터월 2026년 10월)부터만 맞는다.
// 9월호 이전 저장본은 섹션 구조·저장 서식(하이라이트·카드·Exec Summary 슬롯 등)이 달라 불러오면 편집이 깨진다
// → 편집기 목록·자동 복원·캐시 복원에서 제외한다. 서버의 저장본 자체는 지우지 않는다.
import { parsePeriod } from './reportPeriod.js'

export const EDITOR_MIN_PERIOD = { year: 2026, month: 10 }

// meta.period (데이터월, 예: '2026년 10월' / 'Oct 2026') 가 하한 이상이면 true. 기간을 알 수 없으면 false.
export function isEditablePeriod(period) {
  const p = parsePeriod(period)
  if (!p) return false
  return p.year * 12 + p.month >= EDITOR_MIN_PERIOD.year * 12 + EDITOR_MIN_PERIOD.month
}
