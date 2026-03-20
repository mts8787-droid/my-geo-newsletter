import { TrendingUp, AlertTriangle, BarChart3, Target } from 'lucide-react'

function fmt(n) { return Number(n).toLocaleString('en-US') }

function statusOf(rate) {
  if (rate >= 100) return { text: '#15803D', bg: '#ECFDF5', border: '#A7F3D0', bar: '#22C55E' }
  if (rate >= 80)  return { text: '#B45309', bg: '#FFFBEB', border: '#FDE68A', bar: '#F59E0B' }
  return { text: '#BE123C', bg: '#FFF1F2', border: '#FECDD3', bar: '#EF4444' }
}

export default function SummaryCards({ avgRate, cumulativeActual, cumulativeGoal, warningCount, annualTarget, month }) {
  const s = statusOf(avgRate)
  const progressPct = annualTarget > 0 ? Math.min((cumulativeActual / annualTarget) * 100, 100) : 0
  const cumRate = cumulativeGoal > 0 ? (cumulativeActual / cumulativeGoal) * 100 : 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 종합 달성률 */}
      <div className="rounded-xl p-5" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider">{month} 종합 달성률</span>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: s.border + '60' }}>
            <TrendingUp size={16} style={{ color: s.text }} />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black" style={{ color: s.text }}>{avgRate.toFixed(1)}</span>
          <span className="text-base text-[#94A3B8]">%</span>
        </div>
        <div className="mt-2 h-1.5 bg-white/60 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(avgRate, 100)}%`, background: s.bar }} />
        </div>
      </div>

      {/* 누적 실적 / 목표 */}
      <div className="rounded-xl p-5" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider">누적 실적 / 목표</span>
          <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
            <BarChart3 size={16} className="text-[#3B82F6]" />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-[#1E40AF]">{fmt(cumulativeActual)}</span>
          <span className="text-sm text-[#94A3B8]">/ {fmt(cumulativeGoal)}</span>
        </div>
        <p className="text-xs text-[#64748B] mt-1">~{month} 누적 달성률 {cumRate.toFixed(1)}%</p>
      </div>

      {/* 연간 진척률 */}
      <div className="rounded-xl p-5" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider">연간 진척률</span>
          <div className="w-8 h-8 rounded-lg bg-[#F5F3FF] flex items-center justify-center">
            <Target size={16} className="text-[#7C3AED]" />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-[#6D28D9]">{progressPct.toFixed(1)}</span>
          <span className="text-base text-[#94A3B8]">%</span>
        </div>
        <div className="mt-2 h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-[#7C3AED] transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="text-xs text-[#64748B] mt-1">{fmt(cumulativeActual)} / {fmt(annualTarget)}</p>
      </div>

      {/* 주의 필요 과제 */}
      {(() => {
        const w = warningCount > 0
        return (
          <div className="rounded-xl p-5" style={{
            background: w ? '#FFF1F2' : '#ECFDF5',
            border: `1px solid ${w ? '#FECDD3' : '#A7F3D0'}`,
          }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider">주의 필요 과제</span>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: w ? '#FECDD360' : '#A7F3D060' }}>
                <AlertTriangle size={16} style={{ color: w ? '#BE123C' : '#15803D' }} />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black" style={{ color: w ? '#BE123C' : '#15803D' }}>{warningCount}</span>
              <span className="text-sm text-[#94A3B8]">건</span>
            </div>
            <p className="text-xs text-[#64748B] mt-1">달성률 80% 미만</p>
          </div>
        )
      })()}
    </div>
  )
}
