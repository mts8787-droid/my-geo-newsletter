import React from 'react'
import { MONTHS } from '../utils/constants'

function cellColor(val, target) {
  if (typeof val !== 'number' || typeof target !== 'number' || target === 0) return ''
  const ratio = val / target
  if (ratio >= 1) return 'bg-emerald-500/15 text-emerald-400'
  if (ratio >= 0.7) return 'bg-yellow-500/15 text-yellow-400'
  return 'bg-red-500/15 text-red-400'
}

export function QuantitativeTable({ tasks }) {
  if (!tasks?.length) return null

  const headers = Object.keys(tasks[0])

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 overflow-x-auto">
      <h3 className="text-sm font-bold text-slate-200 mb-4">정량 과제 목표/현황</h3>
      <table className="w-full text-xs">
        <thead>
          <tr>
            {headers.map(h => (
              <th key={h} className="text-left text-slate-400 font-semibold px-3 py-2 border-b border-slate-700 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-700/30">
              {headers.map((h, j) => {
                const val = task[h]
                // Try to find color coding for number cells
                const isNumber = typeof val === 'number'
                // Find matching target column for this actual column
                let colorClass = ''
                if (isNumber && /달성|actual|현황/i.test(h)) {
                  const targetH = headers.find(th =>
                    th.replace(/달성|actual|현황/i, '목표').replace(/달성|actual|현황/i, 'target') === h.replace(/달성|actual|현황/i, '목표').replace(/달성|actual|현황/i, 'target') &&
                    /목표|target/i.test(th)
                  )
                  if (targetH && typeof task[targetH] === 'number') {
                    colorClass = cellColor(val, task[targetH])
                  }
                }

                return (
                  <td
                    key={j}
                    className={`px-3 py-2 text-slate-300 whitespace-nowrap ${colorClass}`}
                  >
                    {isNumber ? val.toLocaleString() : String(val || '')}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function QualitativeTable({ tasks }) {
  if (!tasks?.length) return null

  const headers = Object.keys(tasks[0])

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 overflow-x-auto">
      <h3 className="text-sm font-bold text-slate-200 mb-4">정성 과제</h3>
      <table className="w-full text-xs">
        <thead>
          <tr>
            {headers.map(h => (
              <th key={h} className="text-left text-slate-400 font-semibold px-3 py-2 border-b border-slate-700 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-700/30">
              {headers.map((h, j) => (
                <td key={j} className="px-3 py-2 text-slate-300 max-w-xs truncate">
                  {String(task[h] || '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
