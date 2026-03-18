import React from 'react'
import { STAKEHOLDER_COLORS } from '../utils/constants'

export default function StakeholderCard({ name, data }) {
  const color = STAKEHOLDER_COLORS[name] || '#64748B'

  // data is an object with month keys like { '1월 목표': 10, '1월 달성': 8, ... }
  // Extract monthly target/actual pairs
  const months = []
  const keys = Object.keys(data)
  for (let m = 1; m <= 12; m++) {
    const monthLabel = `${m}월`
    const targetKey = keys.find(k => k.includes(monthLabel) && /목표|target/i.test(k))
    const actualKey = keys.find(k => k.includes(monthLabel) && /달성|actual|현황/i.test(k))
    if (targetKey || actualKey) {
      months.push({
        month: monthLabel,
        target: typeof data[targetKey] === 'number' ? data[targetKey] : 0,
        actual: typeof data[actualKey] === 'number' ? data[actualKey] : 0,
      })
    }
  }

  // Overall progress
  const totalTarget = months.reduce((s, m) => s + m.target, 0)
  const totalActual = months.reduce((s, m) => s + m.actual, 0)
  const pct = totalTarget > 0 ? Math.round((totalActual / totalTarget) * 100) : 0

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
          <span className="text-sm font-bold text-slate-200">{name}</span>
        </div>
        <span className="text-lg font-bold" style={{ color }}>
          {pct}%
        </span>
      </div>

      {/* Mini bar chart */}
      <div className="flex items-end gap-1 h-10">
        {months.map((m, i) => {
          const h = m.target > 0 ? (m.actual / m.target) * 100 : 0
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5" title={`${m.month}: ${m.actual}/${m.target}`}>
              <div className="w-full rounded-sm relative" style={{ height: '100%', minHeight: 4 }}>
                <div
                  className="absolute bottom-0 w-full rounded-sm transition-all"
                  style={{
                    height: `${Math.min(h, 100)}%`,
                    background: h >= 100 ? '#10B981' : color,
                    opacity: h > 0 ? 1 : 0.2,
                    minHeight: h > 0 ? 3 : 0,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-between mt-2 text-[10px] text-slate-500">
        <span>{totalActual} / {totalTarget}</span>
        <span>{months.length}개월</span>
      </div>
    </div>
  )
}
