import { STAKEHOLDER_COLORS } from '../utils/constants'

function TrafficLight({ rate }) {
  if (rate >= 100) return <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.4)] inline-block" />
  if (rate >= 80) return <span className="w-3.5 h-3.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.3)] inline-block" />
  return <span className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.3)] inline-block" />
}

function rateTextColor(rate) {
  if (rate >= 100) return 'text-emerald-600'
  if (rate >= 80) return 'text-amber-600'
  return 'text-red-600'
}

function barColor(rate) {
  if (rate >= 100) return '#22C55E'
  if (rate >= 80) return '#F59E0B'
  return '#EF4444'
}

export default function StakeholderRanking({ stakeholders, month }) {
  const maxRate = Math.max(...stakeholders.map(s => Math.max(s.monthRate, s.cumRate)), 100)

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">스테이크홀더별 달성률</h3>
          <p className="text-sm text-gray-400 mt-0.5">{month} 기준</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> ≥100%</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> ≥80%</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /> &lt;80%</span>
        </div>
      </div>

      {/* Column headers */}
      <div className="px-5 pt-3 pb-1 grid grid-cols-2 gap-4">
        <div className="text-sm font-bold text-gray-400 text-center">{month} 달성률</div>
        <div className="text-sm font-bold text-gray-400 text-center">누적 달성률</div>
      </div>

      <div className="px-5 pb-5 space-y-3">
        {stakeholders.map(sh => {
          const color = STAKEHOLDER_COLORS[sh.name] || '#94A3B8'
          const monthBarW = Math.min((sh.monthRate / maxRate) * 100, 100)
          const cumBarW = Math.min((sh.cumRate / maxRate) * 100, 100)

          return (
            <div key={sh.name}>
              {/* Stakeholder name + traffic lights */}
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="inline-block px-2.5 py-0.5 rounded text-sm font-bold whitespace-nowrap"
                  style={{ backgroundColor: color + '18', color, border: `1px solid ${color}30` }}
                >
                  {sh.name}
                </span>
                <TrafficLight rate={sh.monthRate} />
                <span className="text-xs text-gray-400">
                  {sh.taskCount}건{sh.warnings > 0 && <span className="text-red-500 ml-1">({sh.warnings} 주의)</span>}
                </span>
              </div>

              {/* Dual bar: left = month, right = cumulative */}
              <div className="grid grid-cols-2 gap-4">
                {/* Month rate */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-7 bg-gray-100 rounded-md overflow-hidden relative">
                    <div
                      className="h-full rounded-md transition-all duration-700 ease-out"
                      style={{ width: `${monthBarW}%`, background: barColor(sh.monthRate) }}
                    />
                    <div
                      className="absolute top-0 h-full w-px bg-gray-300"
                      style={{ left: `${Math.min(100 / maxRate * 100, 100)}%` }}
                    />
                  </div>
                  <span className={`text-base font-black tabular-nums min-w-[60px] text-right ${rateTextColor(sh.monthRate)}`}>
                    {sh.monthRate.toFixed(1)}%
                  </span>
                </div>

                {/* Cumulative rate */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-7 bg-gray-100 rounded-md overflow-hidden relative">
                    <div
                      className="h-full rounded-md transition-all duration-700 ease-out"
                      style={{ width: `${cumBarW}%`, background: barColor(sh.cumRate) }}
                    />
                    <div
                      className="absolute top-0 h-full w-px bg-gray-300"
                      style={{ left: `${Math.min(100 / maxRate * 100, 100)}%` }}
                    />
                  </div>
                  <span className={`text-base font-black tabular-nums min-w-[60px] text-right ${rateTextColor(sh.cumRate)}`}>
                    {sh.cumRate.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
