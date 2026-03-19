import React from 'react'
import ProgressRing from './ProgressRing'
import { Loader2, AlertCircle } from 'lucide-react'

function SectionTable({ title, headerRow, dataRows }) {
  // Filter out empty columns within this section
  const colIndices = []
  for (let c = 0; c < headerRow.length; c++) {
    const headerFilled = headerRow[c] && headerRow[c].trim() !== ''
    const dataFilled = dataRows.some(r => r[c] !== '' && r[c] !== undefined && r[c] !== null)
    if (headerFilled || dataFilled) colIndices.push(c)
  }

  if (colIndices.length === 0) return null

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 overflow-x-auto">
      {title && <h3 className="text-sm font-bold text-slate-200 mb-3">{title}</h3>}
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            {colIndices.map(c => (
              <th key={c} className="text-left text-slate-400 font-semibold px-2 py-1.5 border-b border-slate-700 whitespace-nowrap">
                {headerRow[c] || ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, i) => (
            <tr key={i} className="border-b border-slate-700/40 hover:bg-slate-700/20">
              {colIndices.map(c => {
                const val = row[c]
                const isNum = typeof val === 'number'
                return (
                  <td key={c} className={`px-2 py-1.5 whitespace-nowrap ${isNum ? 'text-slate-200 tabular-nums' : 'text-slate-400'}`}>
                    {val === '' || val === undefined || val === null ? '-' : isNum ? val.toLocaleString() : String(val)}
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

export default function OverviewDashboard({ data, loading, error }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin text-slate-500" size={32} />
        <span className="ml-3 text-slate-400 text-sm">Overview 데이터 로딩 중...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-red-400 gap-2">
        <AlertCircle size={20} />
        <span className="text-sm">{error}</span>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-500 text-sm">
        데이터를 불러오려면 새로고침 버튼을 누르세요
      </div>
    )
  }

  const { totalProgress, sections } = data

  return (
    <div className="space-y-6">
      {/* Total Progress Rings */}
      {(totalProgress.total > 0 || totalProgress.quantitative > 0 || totalProgress.qualitative > 0) && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-sm font-bold text-slate-200 mb-5">Total Progress</h3>
          <div className="flex justify-center gap-10 flex-wrap">
            <ProgressRing value={totalProgress.total} label="전체" color="#CF0652" />
            <ProgressRing value={totalProgress.quantitative} label="정량" color="#3B82F6" />
            <ProgressRing value={totalProgress.qualitative} label="정성" color="#10B981" />
          </div>
        </div>
      )}

      {/* Sections as raw tables */}
      {sections.map((sec, i) => (
        <SectionTable
          key={i}
          title={sec.title}
          headerRow={sec.headerRow}
          dataRows={sec.dataRows}
        />
      ))}

      {/* Fallback: if no sections detected, show raw rows */}
      {sections.length === 0 && data.raw && data.raw.length > 0 && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
          <h3 className="text-sm font-bold text-slate-200 mb-3">Raw Data</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <tbody>
                {data.raw.slice(0, 30).map((row, i) => (
                  <tr key={i} className="border-b border-slate-700/40">
                    <td className="px-2 py-1 text-slate-600 w-8">{i + 1}</td>
                    {row.map((cell, j) => (
                      <td key={j} className="px-2 py-1 text-slate-400 whitespace-nowrap max-w-[200px] truncate">
                        {cell === '' ? <span className="text-slate-700">-</span> : String(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
