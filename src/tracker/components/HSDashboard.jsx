import React from 'react'
import ProgressRing from './ProgressRing'
import { AnnualAreaChart, MonthlyBarChart } from './MonthlyChart'
import { QuantitativeTable, QualitativeTable } from './TaskTable'
import { COLORS } from '../utils/constants'
import { Loader2, AlertCircle } from 'lucide-react'

const TASK_COLORS = ['#CF0652', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899']

export default function HSDashboard({ data, loading, error }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin text-slate-500" size={32} />
        <span className="ml-3 text-slate-400 text-sm">HS 데이터 로딩 중...</span>
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

  const { totalProgress, annualProgress, monthlyAchievement, quantitativeTasks, qualitativeTasks } = data

  // Extract per-task progress rings from quantitative tasks
  const taskRings = quantitativeTasks.map((task, idx) => {
    const keys = Object.keys(task)
    const nameKey = keys.find(k => /과제|task|이름|name/i.test(k)) || keys[0]
    const name = task[nameKey]

    // Calculate total target and actual across months
    let totalTarget = 0, totalActual = 0
    keys.forEach(k => {
      if (/목표|target/i.test(k) && typeof task[k] === 'number') totalTarget += task[k]
      if (/달성|actual|현황/i.test(k) && typeof task[k] === 'number') totalActual += task[k]
    })
    const pct = totalTarget > 0 ? Math.round((totalActual / totalTarget) * 100) : 0
    return { name: String(name), pct, color: TASK_COLORS[idx % TASK_COLORS.length] }
  })

  // Transform chart data
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
      {/* Total + Task Progress Rings */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h3 className="text-sm font-bold text-slate-200 mb-5">HS Progress</h3>
        <div className="flex justify-center gap-8 flex-wrap">
          <ProgressRing value={totalProgress.total} label="전체" color="#CF0652" size={160} />
          <ProgressRing value={totalProgress.quantitative} label="정량" color="#3B82F6" />
          <ProgressRing value={totalProgress.qualitative} label="정성" color="#10B981" />
        </div>
      </div>

      {/* Per-task progress rings */}
      {taskRings.length > 0 && (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-sm font-bold text-slate-200 mb-5">과제별 진척</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {taskRings.map((t, i) => (
              <ProgressRing key={i} value={t.pct} label={t.name} color={t.color} size={120} />
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

      {/* Raw data fallback */}
      {data.raw && data.quantitativeTasks.length === 0 && data.stakeholders.length === 0 && (
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
