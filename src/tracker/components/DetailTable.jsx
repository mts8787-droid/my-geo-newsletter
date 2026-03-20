import { useState } from 'react'
import { Filter, Sparkles } from 'lucide-react'
import { STAKEHOLDER_COLORS } from '../utils/constants'

function TrafficDot({ rate }) {
  if (rate === null) return <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
  if (rate >= 100) return (
    <span className="flex items-center gap-0.5">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
      {rate >= 150 && <Sparkles size={10} className="text-amber-400" />}
    </span>
  )
  if (rate >= 80) return <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
  return <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
}

function rateClass(rate) {
  if (rate === null) return 'text-slate-600'
  if (rate >= 100) return 'text-emerald-400 font-bold'
  if (rate >= 80) return 'text-amber-400 font-semibold'
  return 'text-red-400 font-bold'
}

function fmtRate(rate) {
  if (rate === null) return '—'
  return `${rate.toFixed(1)}%`
}

export default function DetailTable({ tasks, month }) {
  const [filter, setFilter] = useState('전체')
  const stakeholders = ['전체', ...new Set(tasks.map(t => t.stakeholder))]
  const filtered = filter === '전체' ? tasks : tasks.filter(t => t.stakeholder === filter)

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="text-sm font-bold text-white">상세 과제 현황</h3>
          <p className="text-[11px] text-slate-500 mt-0.5">{month} 기준 · {filtered.length}개 과제</p>
        </div>

        {/* Stakeholder filter */}
        <div className="flex items-center gap-2">
          <Filter size={12} className="text-slate-500" />
          <div className="flex gap-1 flex-wrap">
            {stakeholders.map(sh => {
              const isActive = filter === sh
              const color = sh === '전체' ? '#94A3B8' : (STAKEHOLDER_COLORS[sh] || '#94A3B8')
              return (
                <button
                  key={sh}
                  onClick={() => setFilter(sh)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                  style={isActive ? { backgroundColor: color + '28', color, border: `1px solid ${color}40` } : { border: '1px solid transparent' }}
                >
                  {sh}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-slate-800/50 text-[11px] text-slate-400 uppercase tracking-wider">
              <th className="px-3 py-2.5 text-left sticky left-0 z-10 bg-slate-800/90 backdrop-blur min-w-[80px]">
                Stakeholder
              </th>
              <th className="px-3 py-2.5 text-left min-w-[160px]">과제</th>
              <th className="px-3 py-2.5 text-left min-w-[90px]">Page Type</th>
              <th className="px-3 py-2.5 text-left min-w-[180px]">목표 상세</th>
              <th className="px-3 py-2.5 text-right min-w-[70px]">목표</th>
              <th className="px-3 py-2.5 text-right min-w-[70px]">실적</th>
              <th className="px-3 py-2.5 text-center min-w-[90px]">달성률</th>
              <th className="px-3 py-2.5 text-right min-w-[70px]">연간목표</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/40">
            {filtered.map((t, i) => {
              const color = STAKEHOLDER_COLORS[t.stakeholder] || '#94A3B8'
              return (
                <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-3 py-2 sticky left-0 z-10 bg-slate-900">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-[11px] font-bold whitespace-nowrap"
                      style={{ backgroundColor: color + '18', color, border: `1px solid ${color}30` }}
                    >
                      {t.stakeholder}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-slate-300 font-medium">{t.task}</td>
                  <td className="px-3 py-2 text-slate-400">{t.pageType}</td>
                  <td className="px-3 py-2 text-slate-300 max-w-[300px]">
                    <span className="block truncate" title={t.detail}>{t.detail}</span>
                  </td>
                  <td className="px-3 py-2 text-right text-slate-400 tabular-nums">
                    {typeof t.goal === 'number' && t.goal > 0 ? t.goal.toLocaleString() : '—'}
                  </td>
                  <td className="px-3 py-2 text-right text-slate-200 font-semibold tabular-nums">
                    {typeof t.actual === 'number' && t.actual > 0 ? t.actual.toLocaleString() : '—'}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center justify-center gap-1.5">
                      <TrafficDot rate={t.rate} />
                      <span className={`tabular-nums ${rateClass(t.rate)}`}>{fmtRate(t.rate)}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-right text-slate-500 tabular-nums">
                    {t.goalAnnual > 0 ? t.goalAnnual.toLocaleString() : '—'}
                  </td>
                </tr>
              )
            })}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-3 py-8 text-center text-slate-600 text-sm">
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
