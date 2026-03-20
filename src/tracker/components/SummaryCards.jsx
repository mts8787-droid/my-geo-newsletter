import { TrendingUp, AlertTriangle, BarChart3, Target } from 'lucide-react'

function fmt(n) {
  return Number(n).toLocaleString('en-US')
}

/* Dashboard-aligned status colors */
function rateStyle(rate) {
  if (rate >= 100) return { text: '#15803D', bg: '#ECFDF5', border: '#A7F3D0', bar: '#22C55E' }
  if (rate >= 80)  return { text: '#B45309', bg: '#FFFBEB', border: '#FDE68A', bar: '#F59E0B' }
  return { text: '#BE123C', bg: '#FFF1F2', border: '#FECDD3', bar: '#EF4444' }
}

export default function SummaryCards({ avgRate, cumulativeActual, cumulativeGoal, warningCount, annualTarget, month }) {
  const rc = rateStyle(avgRate)
  const progressPct = annualTarget > 0 ? Math.min((cumulativeActual / annualTarget) * 100, 100) : 0
  const cumRate = cumulativeGoal > 0 ? (cumulativeActual / cumulativeGoal) * 100 : 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 종합 달성률 */}
      <div className="rounded-xl p-5" style={{ background: rc.bg, border: `1px solid ${rc.border}` }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-[#475569] uppercase tracking-wider">{month} 종합 달성률</span>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: rc.border + '60' }}>
            <TrendingUp size={18} style={{ color: rc.text }} />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black" style={{ color: rc.text }}>{avgRate.toFixed(1)}</span>
          <span className="text-xl text-[#94A3B8]">%</span>
        </div>
        <div className="mt-2 h-2 bg-white/60 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(avgRate, 100)}%`, background: rc.bar }}
          />
        </div>
      </div>

      {/* 누적 실적 vs 목표 */}
      <div className="rounded-xl border border-[#E8EDF2] bg-[#F8FAFC] p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-[#475569] uppercase tracking-wider">누적 실적 / 목표</span>
          <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
            <BarChart3 size={18} className="text-blue-500" />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-[#1E40AF]">{fmt(cumulativeActual)}</span>
          <span className="text-lg text-[#94A3B8]">/ {fmt(cumulativeGoal)}</span>
        </div>
        <p className="text-sm text-[#64748B] mt-1">
          ~{month} 누적 달성률 {cumRate.toFixed(1)}%
        </p>
      </div>

      {/* 연간 진척률 */}
      <div className="rounded-xl border border-[#E8EDF2] bg-[#F8FAFC] p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-[#475569] uppercase tracking-wider">연간 진척률</span>
          <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center">
            <Target size={18} className="text-violet-500" />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-[#6D28D9]">{progressPct.toFixed(1)}</span>
          <span className="text-xl text-[#94A3B8]">%</span>
        </div>
        <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-violet-500 transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="text-sm text-[#64748B] mt-1">{fmt(cumulativeActual)} / {fmt(annualTarget)}</p>
      </div>

      {/* 주의 필요 과제 */}
      <div className="rounded-xl p-5" style={{
        background: warningCount > 0 ? '#FFF1F2' : '#ECFDF5',
        border: `1px solid ${warningCount > 0 ? '#FECDD3' : '#A7F3D0'}`,
      }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-[#475569] uppercase tracking-wider">주의 필요 과제</span>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{
            background: warningCount > 0 ? '#FECDD360' : '#A7F3D060',
          }}>
            <AlertTriangle size={18} style={{ color: warningCount > 0 ? '#BE123C' : '#15803D' }} />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black" style={{ color: warningCount > 0 ? '#BE123C' : '#15803D' }}>{warningCount}</span>
          <span className="text-lg text-[#94A3B8]">건</span>
        </div>
        <p className="text-sm text-[#64748B] mt-1">달성률 80% 미만</p>
      </div>
    </div>
  )
}
