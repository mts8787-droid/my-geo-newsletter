import { STAKEHOLDER_COLORS } from '../utils/constants'

/* Dashboard-aligned status colors */
function statusStyle(rate) {
  if (rate >= 100) return { bg: '#ECFDF5', border: '#A7F3D0', color: '#15803D', dot: '#22C55E' }
  if (rate >= 80)  return { bg: '#FFFBEB', border: '#FDE68A', color: '#B45309', dot: '#F59E0B' }
  return { bg: '#FFF1F2', border: '#FECDD3', color: '#BE123C', dot: '#EF4444' }
}

function TrafficLight({ rate }) {
  const s = statusStyle(rate)
  return <span className="w-3.5 h-3.5 rounded-full inline-block flex-shrink-0" style={{ background: s.dot, boxShadow: `0 0 6px ${s.dot}66` }} />
}

function fmt(n) { return Number(n).toLocaleString('en-US') }

export default function StakeholderRanking({ stakeholders, month, selectedSH }) {
  const filtered = selectedSH === '전체' ? stakeholders : stakeholders.filter(s => s.name === selectedSH)
  const totalWarnings = filtered.reduce((s, sh) => s + sh.warnings, 0)
  const maxRate = Math.max(...filtered.map(s => Math.max(s.monthRate, s.cumRate)), 100)

  return (
    <div className="bg-white rounded-xl border border-[#E8EDF2] overflow-hidden shadow-sm">
      <div className="px-5 py-4 border-b border-[#E8EDF2] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-black">Stakeholders별 달성률</h3>
          {totalWarnings > 0 && (
            <span className="text-sm font-bold text-[#BE123C] bg-[#FFF1F2] border border-[#FECDD3] px-2 py-0.5 rounded">
              미달성 과제 {totalWarnings}건
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 text-xs text-[#64748B]">
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full" style={{ background: '#22C55E' }} /> ≥100%</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F59E0B' }} /> ≥80%</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full" style={{ background: '#EF4444' }} /> &lt;80%</span>
        </div>
      </div>

      {/* Column headers */}
      <div className="px-5 pt-3 pb-1 grid grid-cols-2 gap-4">
        <div className="text-sm font-bold text-[#475569] text-center">{month} 달성률</div>
        <div className="text-sm font-bold text-[#475569] text-center">누적 달성률</div>
      </div>

      <div className="px-5 pb-5 space-y-3">
        {filtered.map(sh => {
          const color = STAKEHOLDER_COLORS[sh.name] || '#94A3B8'
          const mSt = statusStyle(sh.monthRate)
          const cSt = statusStyle(sh.cumRate)
          const monthBarW = Math.min((sh.monthRate / maxRate) * 100, 100)
          const cumBarW = Math.min((sh.cumRate / maxRate) * 100, 100)

          return (
            <div key={sh.name}>
              {/* Stakeholder name + traffic light */}
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="inline-block px-2.5 py-0.5 rounded text-sm font-bold whitespace-nowrap"
                  style={{ backgroundColor: color + '18', color, border: `1px solid ${color}30` }}
                >
                  {sh.name}
                </span>
                <TrafficLight rate={sh.monthRate} />
                <span className="text-xs text-[#64748B]">
                  {sh.taskCount}건{sh.warnings > 0 && <span className="text-[#BE123C] ml-1">({sh.warnings} 주의)</span>}
                </span>
              </div>

              {/* Dual bar: left = month, right = cumulative */}
              <div className="grid grid-cols-2 gap-4">
                {/* Month rate */}
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-7 bg-[#F1F5F9] rounded-md overflow-hidden relative">
                      <div
                        className="h-full rounded-md transition-all duration-700 ease-out"
                        style={{ width: `${monthBarW}%`, background: mSt.dot }}
                      />
                      <div
                        className="absolute top-0 h-full w-px bg-[#CBD5E1]"
                        style={{ left: `${Math.min(100 / maxRate * 100, 100)}%` }}
                      />
                    </div>
                    <span className="text-base font-black tabular-nums min-w-[60px] text-right" style={{ color: mSt.color }}>
                      {sh.monthRate.toFixed(1)}%
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] mt-0.5 text-right pr-[68px]">
                    실적 {fmt(sh.monthActual)} / 목표 {fmt(sh.monthGoal)}
                  </p>
                </div>

                {/* Cumulative rate */}
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-7 bg-[#F1F5F9] rounded-md overflow-hidden relative">
                      <div
                        className="h-full rounded-md transition-all duration-700 ease-out"
                        style={{ width: `${cumBarW}%`, background: cSt.dot }}
                      />
                      <div
                        className="absolute top-0 h-full w-px bg-[#CBD5E1]"
                        style={{ left: `${Math.min(100 / maxRate * 100, 100)}%` }}
                      />
                    </div>
                    <span className="text-base font-black tabular-nums min-w-[60px] text-right" style={{ color: cSt.color }}>
                      {sh.cumRate.toFixed(1)}%
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] mt-0.5 text-right pr-[68px]">
                    실적 {fmt(sh.cumActual)} / 목표 {fmt(sh.cumGoal)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <p className="text-center text-[#94A3B8] py-4">해당 스테이크홀더가 없습니다.</p>
        )}
      </div>
    </div>
  )
}
