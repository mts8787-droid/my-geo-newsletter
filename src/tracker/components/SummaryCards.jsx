import { TrendingUp, AlertTriangle, BarChart3, Target } from 'lucide-react'

function fmt(n) {
  return Number(n).toLocaleString('en-US')
}

function rateColor(rate) {
  if (rate >= 100) return { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: 'text-emerald-500' }
  if (rate >= 80) return { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: 'text-amber-500' }
  return { text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20', icon: 'text-red-500' }
}

export default function SummaryCards({ avgRate, cumulativeActual, warningCount, annualTarget, month }) {
  const rc = rateColor(avgRate)
  const progressPct = annualTarget > 0 ? Math.min((cumulativeActual / annualTarget) * 100, 100) : 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 종합 달성률 */}
      <div className={`rounded-xl border ${rc.border} ${rc.bg} p-5`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{month} 종합 달성률</span>
          <div className={`w-8 h-8 rounded-lg ${rc.bg} flex items-center justify-center`}>
            <TrendingUp size={16} className={rc.icon} />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl font-black ${rc.text}`}>{avgRate.toFixed(1)}</span>
          <span className="text-lg text-slate-500">%</span>
        </div>
        <div className="mt-2 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(avgRate, 100)}%`, background: avgRate >= 100 ? '#22C55E' : avgRate >= 80 ? '#F59E0B' : '#EF4444' }}
          />
        </div>
      </div>

      {/* 누적 실적 */}
      <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">누적 실적 합계</span>
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <BarChart3 size={16} className="text-blue-500" />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-blue-400">{fmt(cumulativeActual)}</span>
          <span className="text-sm text-slate-500">URLs</span>
        </div>
        <p className="text-[11px] text-slate-500 mt-1">~{month} 누적</p>
      </div>

      {/* 연간 진척률 */}
      <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">연간 진척률</span>
          <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
            <Target size={16} className="text-violet-500" />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-violet-400">{progressPct.toFixed(1)}</span>
          <span className="text-lg text-slate-500">%</span>
        </div>
        <div className="mt-2 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-violet-500 transition-all duration-500" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="text-[11px] text-slate-500 mt-1">{fmt(cumulativeActual)} / {fmt(annualTarget)}</p>
      </div>

      {/* 주의 필요 과제 */}
      <div className={`rounded-xl border p-5 ${warningCount > 0 ? 'border-red-500/20 bg-red-500/10' : 'border-emerald-500/20 bg-emerald-500/10'}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">주의 필요 과제</span>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${warningCount > 0 ? 'bg-red-500/10' : 'bg-emerald-500/10'}`}>
            <AlertTriangle size={16} className={warningCount > 0 ? 'text-red-500' : 'text-emerald-500'} />
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl font-black ${warningCount > 0 ? 'text-red-400' : 'text-emerald-400'}`}>{warningCount}</span>
          <span className="text-sm text-slate-500">건</span>
        </div>
        <p className="text-[11px] text-slate-500 mt-1">달성률 80% 미만</p>
      </div>
    </div>
  )
}
