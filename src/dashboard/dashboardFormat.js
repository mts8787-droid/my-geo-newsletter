// N1 — dashboardTemplate.js에서 분리된 순수 포맷 헬퍼 (테스트 대상)
import { T, COUNTRY_FULL_NAME } from './dashboardConsts.js'

export function statusInfo(s, lang) {
  const t = T[lang] || T.ko
  if (s === 'lead')     return { bg: '#ECFDF5', border: '#A7F3D0', color: '#15803D', label: t.lead }
  if (s === 'behind')   return { bg: '#FFFBEB', border: '#FDE68A', color: '#B45309', label: t.behind }
  if (s === 'critical') return { bg: '#FFF1F2', border: '#FECDD3', color: '#BE123C', label: t.critical }
  return { bg: '#F8FAFC', border: '#E2E8F0', color: '#475569', label: '—' }
}

export function fmt(n) { return Number(n).toLocaleString('en-US') }

export function mdBold(text) {
  return (text || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\r?\n/g, '<br>')
}

export function stripDomain(d) {
  return (d || '').replace(/\.(com|org|net|co\.uk|com\.br|com\.au|com\.vn|com\.mx|co\.kr|de|es|fr|ca|in|vn)$/i, '')
}

// 국가 단위 상태 (자사 vs 경쟁사 비율)
export function cntyStatus(sc, comp) {
  if (comp <= 0) return 'lead'
  const r = sc / comp * 100
  return r >= 100 ? 'lead' : r >= 80 ? 'behind' : 'critical'
}

export function cntyFullName(c) {
  const k = String(c || '').trim().toUpperCase()
  return COUNTRY_FULL_NAME[k] || c
}
