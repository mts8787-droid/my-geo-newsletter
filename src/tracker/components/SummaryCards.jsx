import { TrendingUp, AlertTriangle, BarChart3, Target } from 'lucide-react'
import { STAKEHOLDER_COLORS } from '../utils/constants'

function fmt(n) { return Number(n).toLocaleString('en-US') }

function statusOf(rate) {
  if (rate >= 100) return { text: '#15803D', bg: '#ECFDF5', border: '#A7F3D0', bar: '#22C55E', label: '달성', dot: '#22C55E' }
  if (rate >= 80)  return { text: '#B45309', bg: '#FFFBEB', border: '#FDE68A', bar: '#F59E0B', label: '추격', dot: '#F59E0B' }
  return { text: '#BE123C', bg: '#FFF1F2', border: '#FECDD3', bar: '#EF4444', label: '취약', dot: '#EF4444' }
}

export default function SummaryCards({ avgRate, cumulativeActual, cumulativeGoal, warningCount, annualTarget, month, selectedSH }) {
  const s = statusOf(avgRate)
  const progressPct = annualTarget > 0 ? Math.min((cumulativeActual / annualTarget) * 100, 100) : 0
  const cumRate = cumulativeGoal > 0 ? (cumulativeActual / cumulativeGoal) * 100 : 0
  const shColor = selectedSH !== '전체' ? (STAKEHOLDER_COLORS[selectedSH] || '#64748B') : null
  const shLabel = selectedSH !== '전체' ? selectedSH : null

  return (
    <div>
      {/* Stakeholder indicator + Traffic light status bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        {shLabel ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 14px', borderRadius: 6, fontSize: 16, fontWeight: 700, background: shColor + '18', color: shColor, border: `1px solid ${shColor}30` }}>
            {shLabel}
          </span>
        ) : (
          <span style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>전체 Stakeholders</span>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 16, height: 16, borderRadius: '50%', background: s.dot, display: 'inline-block', boxShadow: `0 0 10px ${s.dot}55` }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: s.text }}>{s.label}</span>
          <span style={{ fontSize: 16, color: '#64748B' }}>({avgRate.toFixed(1)}%)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 종합 달성률 */}
        <div className="rounded-xl p-5" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ width: 3, height: 14, borderRadius: 8, background: '#CF0652', flexShrink: 0, display: 'inline-block' }} /><span style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginLeft: 6 }}>{month} 종합 달성률</span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: s.dot, display: 'inline-block', boxShadow: `0 0 6px ${s.dot}55` }} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black" style={{ color: s.text }}>{avgRate.toFixed(1)}</span>
            <span style={{ fontSize: 16, color: '#94A3B8' }}>%</span>
          </div>
          <div style={{ marginTop: 8, height: 6, background: 'rgba(255,255,255,0.6)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 3, width: `${Math.min(avgRate, 100)}%`, background: s.bar, transition: 'width 0.5s' }} />
          </div>
        </div>

        {/* 누적 실적 / 목표 */}
        <div className="rounded-xl p-5" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ width: 3, height: 14, borderRadius: 8, background: '#CF0652', flexShrink: 0, display: 'inline-block' }} /><span style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginLeft: 6 }}>누적 실적 / 목표</span>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BarChart3 size={14} color="#3B82F6" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black" style={{ color: '#1E40AF' }}>{fmt(cumulativeActual)}</span>
            <span style={{ fontSize: 14, color: '#94A3B8' }}>/ {fmt(cumulativeGoal)}</span>
          </div>
          <p style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>~{month} 누적 달성률 {cumRate.toFixed(1)}%</p>
        </div>

        {/* 연간 진척률 */}
        <div className="rounded-xl p-5" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ width: 3, height: 14, borderRadius: 8, background: '#CF0652', flexShrink: 0, display: 'inline-block' }} /><span style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginLeft: 6 }}>연간 진척률</span>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Target size={14} color="#7C3AED" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black" style={{ color: '#6D28D9' }}>{progressPct.toFixed(1)}</span>
            <span style={{ fontSize: 16, color: '#94A3B8' }}>%</span>
          </div>
          <div style={{ marginTop: 8, height: 6, background: '#F1F5F9', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 3, background: '#7C3AED', width: `${progressPct}%`, transition: 'width 0.5s' }} />
          </div>
          <p style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>{fmt(cumulativeActual)} / {fmt(annualTarget)}</p>
        </div>

        {/* 주의 필요 과제 */}
        {(() => {
          const w = warningCount > 0
          const wDot = w ? '#EF4444' : '#22C55E'
          return (
            <div className="rounded-xl p-5" style={{
              background: w ? '#FFF1F2' : '#ECFDF5',
              border: `1px solid ${w ? '#FECDD3' : '#A7F3D0'}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ width: 3, height: 14, borderRadius: 8, background: '#CF0652', flexShrink: 0, display: 'inline-block' }} /><span style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginLeft: 6 }}>주의 필요 과제</span>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: wDot, display: 'inline-block', boxShadow: `0 0 6px ${wDot}55` }} />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black" style={{ color: w ? '#BE123C' : '#15803D' }}>{warningCount}</span>
                <span style={{ fontSize: 14, color: '#94A3B8' }}>건</span>
              </div>
              <p style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>달성률 80% 미만</p>
            </div>
          )
        })()}
      </div>
    </div>
  )
}
