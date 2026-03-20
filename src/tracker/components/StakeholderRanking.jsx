import { Sparkles } from 'lucide-react'
import { STAKEHOLDER_COLORS } from '../utils/constants'

function TrafficLight({ rate }) {
  if (rate >= 100) return (
    <span className="flex items-center gap-1">
      <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
      {rate >= 150 && <Sparkles size={12} className="text-amber-400" />}
    </span>
  )
  if (rate >= 80) return <span className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
  return <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.4)]" />
}

function rateTextColor(rate) {
  if (rate >= 100) return 'text-emerald-400'
  if (rate >= 80) return 'text-amber-400'
  return 'text-red-400'
}

export default function StakeholderRanking({ stakeholders, month }) {
  const maxRate = Math.max(...stakeholders.map(s => s.avgRate), 100)

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-white">스테이크홀더별 달성률 랭킹</h3>
          <p className="text-[11px] text-slate-500 mt-0.5">{month} 기준 · 평균 달성률 순</p>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-slate-500">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> ≥100%</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> ≥80%</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> &lt;80%</span>
        </div>
      </div>

      <div className="p-5 space-y-3">
        {stakeholders.map((sh, i) => {
          const color = STAKEHOLDER_COLORS[sh.name] || '#94A3B8'
          const barWidth = Math.min((sh.avgRate / maxRate) * 100, 100)
          const barColor = sh.avgRate >= 100 ? '#22C55E' : sh.avgRate >= 80 ? '#F59E0B' : '#EF4444'

          return (
            <div key={sh.name} className="flex items-center gap-3">
              {/* Rank */}
              <span className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-black flex-shrink-0 ${
                i < 3 ? 'bg-[#CF0652] text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {i + 1}
              </span>

              {/* Stakeholder badge */}
              <span
                className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold whitespace-nowrap min-w-[56px] text-center flex-shrink-0"
                style={{ backgroundColor: color + '18', color, border: `1px solid ${color}30` }}
              >
                {sh.name}
              </span>

              {/* Bar */}
              <div className="flex-1 h-7 bg-slate-800/50 rounded-md overflow-hidden relative">
                <div
                  className="h-full rounded-md transition-all duration-700 ease-out"
                  style={{ width: `${barWidth}%`, background: `linear-gradient(90deg, ${barColor}CC, ${barColor})` }}
                />
                {/* 100% 마커 */}
                <div
                  className="absolute top-0 h-full w-px bg-slate-600"
                  style={{ left: `${Math.min(100 / maxRate * 100, 100)}%` }}
                />
              </div>

              {/* Rate + Traffic light */}
              <div className="flex items-center gap-2 flex-shrink-0 min-w-[90px] justify-end">
                <TrafficLight rate={sh.avgRate} />
                <span className={`text-sm font-black tabular-nums ${rateTextColor(sh.avgRate)}`}>
                  {sh.avgRate.toFixed(1)}%
                </span>
              </div>

              {/* Task count */}
              <span className="text-[10px] text-slate-500 flex-shrink-0 w-12 text-right">
                {sh.taskCount}건
                {sh.warnings > 0 && <span className="text-red-400 ml-0.5">({sh.warnings}⚠)</span>}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
