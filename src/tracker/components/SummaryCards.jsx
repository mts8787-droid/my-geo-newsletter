import { TrendingUp, AlertTriangle, BarChart3, Target } from 'lucide-react'

function fmt(n) {
  return Number(n).toLocaleString('en-US')
}

function rateColor(rate) {
  if (rate >= 100) return { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-500', bar: '#22C55E' }
  if (rate >= 80) return { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-500', bar: '#F59E0B' }
  return { text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-500', bar: '#EF4444' }
}

export default function SummaryCards({ avgRate, cumulativeActual, cumulativeGoal, warningCount, annualTarget, month }) {
  const rc = rateColor(avgRate)
  const progressPct = annualTarget > 0 ? Math.min((cumulativeActual / annualTarget) * 100, 100) : 0
  const cumRate = cumulativeGoal > 0 ? (cumulativeActual / cumulativeGoal) * 100 : 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 종합 달성률 */}
      <div className={`rounded-xl border ${rc.border} ${rc.bg} p-5`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{month} 종합 달성률</span>
          <div className={`w-9 h-9 rounded-lg ${rc.bg} flex items-center justify-center`}>
            <TrendingUp size={18} className={rc.icon} />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-black ${rc.text}`}>{avgRate.toFixed(1)}</span>
          <span className="text-xl text-gray-400">%</span>
        </div>
        <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(avgRate, 100)}%`, background: rc.bar }}
          />
        </div>
      </div>

      {/* 누적 실적 vs 목표 */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">누적 실적 / 목표</span>
          <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
            <BarChart3 size={18} className="text-blue-500" />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-blue-600">{fmt(cumulativeActual)}</span>
          <span className="text-lg text-gray-400">/ {fmt(cumulativeGoal)}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          ~{month} 누적 달성률 {cumRate.toFixed(1)}%
        </p>
      </div>

      {/* 연간 진척률 */}
      <div className="rounded-xl border border-violet-200 bg-violet-50 p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">연간 진척률</span>
          <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center">
            <Target size={18} className="text-violet-500" />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-violet-600">{progressPct.toFixed(1)}</span>
          <span className="text-xl text-gray-400">%</span>
        </div>
        <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-violet-500 transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="text-sm text-gray-500 mt-1">{fmt(cumulativeActual)} / {fmt(annualTarget)}</p>
      </div>

      {/* 주의 필요 과제 */}
      <div className={`rounded-xl border p-5 ${warningCount > 0 ? 'border-red-200 bg-red-50' : 'border-emerald-200 bg-emerald-50'}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">주의 필요 과제</span>
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${warningCount > 0 ? 'bg-red-100' : 'bg-emerald-100'}`}>
            <AlertTriangle size={18} className={warningCount > 0 ? 'text-red-500' : 'text-emerald-500'} />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-black ${warningCount > 0 ? 'text-red-600' : 'text-emerald-600'}`}>{warningCount}</span>
          <span className="text-lg text-gray-400">건</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">달성률 80% 미만</p>
      </div>
    </div>
  )
}
