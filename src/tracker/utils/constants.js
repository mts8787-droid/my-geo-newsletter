export const SHEET_ID = '1lAzhlYJIjHVqDeywD3YMR1E9qf2LlDohFc0r6SAnVaE'
export const SHEET_GID = '1224836300'

export const MONTHS = ['3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']

export const STAKEHOLDERS = ['MS', 'HS', 'ES', '고가혁', '브랜드', 'D2C', 'PR']

export const STAKEHOLDER_COLORS = {
  'HS': '#CF0652',
  'MS': '#475569',
  'ES': '#10B981',
  'PR': '#F59E0B',
  '고가혁': '#8B5CF6',
  '브랜드': '#065F46',
  'D2C': '#92400E',
  'Total': '#94A3B8',
}

export const CACHE_TTL = 5 * 60 * 1000

// ─── 디자인 가이드 공통 상수 ─────────────────────────────────────────────────
export const SECTION_BAR = { width: 4, height: 22, borderRadius: 4, background: '#CF0652', flexShrink: 0 }

export function statusOf(rate) {
  if (rate === null) return { text: '#94A3B8', bg: '#F8FAFC', border: '#E2E8F0', bar: '#CBD5E1', dot: '#CBD5E1', label: 'none' }
  if (rate >= 100) return { text: '#15803D', bg: '#ECFDF5', border: '#A7F3D0', bar: '#15803D', dot: '#15803D', label: 'achieved' }
  if (rate >= 80)  return { text: '#D97706', bg: '#FFFBEB', border: '#FDE68A', bar: '#D97706', dot: '#D97706', label: 'inProgress' }
  return { text: '#BE123C', bg: '#FFF1F2', border: '#FECDD3', bar: '#BE123C', dot: '#BE123C', label: 'notAchieved' }
}

export function statusOfDark(rate) {
  if (rate >= 100) return { text: '#15803D', bg: '#132E20', border: '#15803D55', bar: '#22C55E', dot: '#22C55E', label: 'achieved' }
  if (rate >= 80)  return { text: '#D97706', bg: '#2A2210', border: '#D9770655', bar: '#FBBF24', dot: '#FBBF24', label: 'inProgress' }
  return { text: '#BE123C', bg: '#2A1018', border: '#BE123C55', bar: '#FB7185', dot: '#FB7185', label: 'notAchieved' }
}
