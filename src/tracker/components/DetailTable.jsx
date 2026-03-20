import { Sparkles } from 'lucide-react'
import { STAKEHOLDER_COLORS } from '../utils/constants'

function TrafficDot({ rate }) {
  if (rate === null) return <span className="w-3 h-3 rounded-full bg-gray-300" />
  if (rate >= 100) return (
    <span className="flex items-center gap-0.5">
      <span className="w-3 h-3 rounded-full bg-emerald-500" />
      {rate >= 150 && <Sparkles size={12} className="text-amber-500" />}
    </span>
  )
  if (rate >= 80) return <span className="w-3 h-3 rounded-full bg-amber-500" />
  return <span className="w-3 h-3 rounded-full bg-red-500" />
}

function rateClass(rate) {
  if (rate === null) return 'text-gray-400'
  if (rate >= 100) return 'text-emerald-600 font-bold'
  if (rate >= 80) return 'text-amber-600 font-semibold'
  return 'text-red-600 font-bold'
}

function fmtRate(rate) {
  if (rate === null) return '\u2014'
  return `${rate.toFixed(1)}%`
}

export default function DetailTable({ tasks, month }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-5 py-4 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">상세 과제 현황</h3>
        <p className="text-sm text-gray-400 mt-0.5">{month} 기준 · {tasks.length}개 과제</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-sm text-gray-500 uppercase tracking-wider">
              <th className="px-3 py-3 text-left sticky left-0 z-10 bg-gray-50 min-w-[80px]">
                Stakeholder
              </th>
              <th className="px-3 py-3 text-left min-w-[160px]">과제</th>
              <th className="px-3 py-3 text-left min-w-[90px]">Page Type</th>
              <th className="px-3 py-3 text-left min-w-[180px]">목표 상세</th>
              <th className="px-3 py-3 text-right min-w-[70px]">목표</th>
              <th className="px-3 py-3 text-right min-w-[70px]">실적</th>
              <th className="px-3 py-3 text-center min-w-[100px]">달성률</th>
              <th className="px-3 py-3 text-right min-w-[70px]">연간목표</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tasks.map((t, i) => {
              const color = STAKEHOLDER_COLORS[t.stakeholder] || '#94A3B8'
              return (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-2.5 sticky left-0 z-10 bg-white">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-xs font-bold whitespace-nowrap"
                      style={{ backgroundColor: color + '18', color, border: `1px solid ${color}30` }}
                    >
                      {t.stakeholder}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-gray-900 font-medium">{t.task}</td>
                  <td className="px-3 py-2.5 text-gray-500">{t.pageType}</td>
                  <td className="px-3 py-2.5 text-gray-700 max-w-[300px]">
                    <span className="block truncate" title={t.detail}>{t.detail}</span>
                  </td>
                  <td className="px-3 py-2.5 text-right text-gray-500 tabular-nums">
                    {typeof t.goal === 'number' && t.goal > 0 ? t.goal.toLocaleString() : '\u2014'}
                  </td>
                  <td className="px-3 py-2.5 text-right text-gray-900 font-semibold tabular-nums">
                    {typeof t.actual === 'number' && t.actual > 0 ? t.actual.toLocaleString() : '\u2014'}
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center justify-center gap-1.5">
                      <TrafficDot rate={t.rate} />
                      <span className={`tabular-nums ${rateClass(t.rate)}`}>{fmtRate(t.rate)}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-right text-gray-400 tabular-nums">
                    {t.goalAnnual > 0 ? t.goalAnnual.toLocaleString() : '\u2014'}
                  </td>
                </tr>
              )
            })}

            {tasks.length === 0 && (
              <tr>
                <td colSpan={8} className="px-3 py-8 text-center text-gray-400 text-base">
                  해당 스테이크홀더의 과제가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
