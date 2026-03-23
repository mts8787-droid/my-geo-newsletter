import { STAKEHOLDER_COLORS } from '../utils/constants'

function fmt(n) { return Number(n).toLocaleString('en-US') }

function statusOf(rate) {
  if (rate >= 100) return { text: '#15803D', bg: '#ECFDF5', border: '#A7F3D0', bar: '#15803D', label: '달성', dot: '#15803D' }
  if (rate >= 80)  return { text: '#D97706', bg: '#FFFBEB', border: '#FDE68A', bar: '#D97706', label: '추격', dot: '#D97706' }
  return { text: '#BE123C', bg: '#FFF1F2', border: '#FECDD3', bar: '#BE123C', label: '취약', dot: '#BE123C' }
}

export default function SummaryCards({ avgRate, cumulativeActual, cumulativeGoal, monthActual, monthGoal, warningCount, annualTarget, month, selectedSH }) {
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
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 14px', borderRadius: 6, fontSize: 21, fontWeight: 700, background: shColor + '18', color: '#111827', border: `1px solid ${shColor}30` }}>
            {shLabel}
          </span>
        ) : (
          <span style={{ fontSize: 21, fontWeight: 700, color: '#111827' }}>전체 Stakeholders</span>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 16, height: 16, borderRadius: '50%', background: s.dot, display: 'inline-block', boxShadow: `0 0 10px ${s.dot}55` }} />
          <span style={{ fontSize: 23, fontWeight: 800, color: s.text }}>{s.label}</span>
          <span style={{ fontSize: 21, color: '#64748B' }}>({avgRate.toFixed(1)}%)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 월 달성률 */}
        <div className="rounded-xl p-5" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>{month} 달성률</span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: s.dot, display: 'inline-block', boxShadow: `0 0 6px ${s.dot}55` }} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black" style={{ color: s.text }}>{avgRate.toFixed(1)}</span>
            <span style={{ fontSize: 21, color: '#94A3B8' }}>%</span>
          </div>
          <div style={{ marginTop: 8, height: 6, background: 'rgba(255,255,255,0.6)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 3, width: `${Math.min(avgRate, 100)}%`, background: s.bar, transition: 'width 0.5s' }} />
          </div>
          <p style={{ fontSize: 17, color: '#64748B', marginTop: 4 }}>{fmt(monthActual)} / {fmt(monthGoal)}</p>
        </div>

        {/* 누적 실적 / 목표 — 신호등 적용 */}
        {(() => {
          const cs = statusOf(cumRate)
          return (
            <div className="rounded-xl p-5" style={{ background: cs.bg, border: `1px solid ${cs.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>누적 달성률</span>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: cs.dot, display: 'inline-block', boxShadow: `0 0 6px ${cs.dot}55` }} />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black" style={{ color: cs.text }}>{cumRate.toFixed(1)}</span>
                <span style={{ fontSize: 21, color: '#94A3B8' }}>%</span>
              </div>
              <div style={{ marginTop: 8, height: 6, background: 'rgba(255,255,255,0.6)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 3, background: cs.bar, width: `${Math.min(cumRate, 100)}%`, transition: 'width 0.5s' }} />
              </div>
              <p style={{ fontSize: 17, color: '#64748B', marginTop: 4 }}>{fmt(cumulativeActual)} / {fmt(cumulativeGoal)}</p>
            </div>
          )
        })()}

        {/* 연간 진척률 */}
        {(() => {
          const ps = statusOf(progressPct)
          return (
            <div className="rounded-xl p-5" style={{ background: ps.bg, border: `1px solid ${ps.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>연간 진척률</span>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: ps.dot, display: 'inline-block', boxShadow: `0 0 6px ${ps.dot}55` }} />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black" style={{ color: ps.text }}>{progressPct.toFixed(1)}</span>
                <span style={{ fontSize: 21, color: '#94A3B8' }}>%</span>
              </div>
              <div style={{ marginTop: 8, height: 6, background: 'rgba(255,255,255,0.6)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 3, background: ps.bar, width: `${progressPct}%`, transition: 'width 0.5s' }} />
              </div>
              <p style={{ fontSize: 17, color: '#64748B', marginTop: 4 }}>{fmt(cumulativeActual)} / {fmt(annualTarget)}</p>
            </div>
          )
        })()}

        {/* 주의 필요 과제 */}
        {(() => {
          const w = warningCount > 0
          const wDot = w ? '#BE123C' : '#15803D'
          return (
            <div className="rounded-xl p-5" style={{
              background: w ? '#FFF1F2' : '#ECFDF5',
              border: `1px solid ${w ? '#FECDD3' : '#A7F3D0'}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>주의 필요 과제</span>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: wDot, display: 'inline-block', boxShadow: `0 0 6px ${wDot}55` }} />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black" style={{ color: w ? '#BE123C' : '#15803D' }}>{warningCount}</span>
                <span style={{ fontSize: 19, color: '#94A3B8' }}>건</span>
              </div>
              <p style={{ fontSize: 17, color: '#64748B', marginTop: 4 }}>달성률 80% 미만</p>
            </div>
          )
        })()}
      </div>
    </div>
  )
}
