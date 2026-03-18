import React from 'react'
import ProgressRing from './ProgressRing'
import StakeholderCard from './StakeholderCard'
import { AnnualAreaChart, MonthlyBarChart } from './MonthlyChart'
import { QuantitativeTable, QualitativeTable } from './TaskTable'
import { STAKEHOLDERS, MONTHS } from '../utils/constants'
import { Loader2, AlertCircle } from 'lucide-react'

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

  const { totalProgress, stakeholders, annualProgress, monthlyAchievement, quantitativeTasks, qualitativeTasks } = data

  // Transform stakeholder data for cards
  const stakeholderCards = stakeholders.map(s => {
    const keys = Object.keys(s)
    const nameKey = keys.find(k => /부서|담당|이름|name|department/i.test(k)) || keys[0]
    const name = s[nameKey]
    return { name, data: s }
  })

  // Transform annual/monthly data for charts
  const annualChartData = annualProgress.map(row => {
    const keys = Object.keys(row)
    const monthKey = keys.find(k => /월|month/i.test(k)) || keys[0]
    const targetKey = keys.find(k => /목표|target/i.test(k))
    const actualKey = keys.find(k => /달성|actual/i.test(k))
    return {
      month: row[monthKey],
      target: typeof row[targetKey] === 'number' ? row[targetKey] : 0,
      actual: typeof row[actualKey] === 'number' ? row[actualKey] : 0,
    }
  })

  const monthlyChartData = monthlyAchievement.map(row => {
    const keys = Object.keys(row)
    const monthKey = keys.find(k => /월|month/i.test(k)) || keys[0]
    const targetKey = keys.find(k => /목표|target/i.test(k))
    const actualKey = keys.find(k => /달성|actual/i.test(k))
    return {
      month: row[monthKey],
      target: typeof row[targetKey] === 'number' ? row[targetKey] : 0,
      actual: typeof row[actualKey] === 'number' ? row[actualKey] : 0,
    }
  })

  return (
    <div className="space-y-6">
      {/* Total Progress Rings */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h3 className="text-sm font-bold text-slate-200 mb-5">Total Progress</h3>
        <div className="flex justify-center gap-10 flex-wrap">
          <ProgressRing value={totalProgress.total} label="전체" color="#CF0652" />
          <ProgressRing value={totalProgress.quantitative} label="정량" color="#3B82F6" />
          <ProgressRing value={totalProgress.qualitative} label="정성" color="#10B981" />
        </div>
      </div>

      {/* Stakeholder Cards */}
      {stakeholderCards.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-slate-200 mb-3">Stakeholder Progress</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {stakeholderCards.map((s, i) => (
              <StakeholderCard key={i} name={s.name} data={s.data} />
            ))}
          </div>
        </div>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AnnualAreaChart data={annualChartData} />
        <MonthlyBarChart data={monthlyChartData} />
      </div>

      {/* Task Tables */}
      <QuantitativeTable tasks={quantitativeTasks} />
      <QualitativeTable tasks={qualitativeTasks} />

      {/* Raw data debug (hidden by default) */}
      {data.raw && data.stakeholders.length === 0 && data.quantitativeTasks.length === 0 && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
          <h3 className="text-sm font-bold text-slate-200 mb-3">Raw Data (파서가 섹션을 감지하지 못함)</h3>
          <p className="text-xs text-slate-400 mb-3">
            시트 구조가 예상과 다릅니다. 아래는 원본 데이터의 처음 20행입니다.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <tbody>
                {data.raw.slice(0, 20).map((row, i) => (
                  <tr key={i} className="border-b border-slate-700/40">
                    <td className="px-2 py-1 text-slate-600">{i + 1}</td>
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
