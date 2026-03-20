import { useState, useEffect, useMemo } from 'react'
import { useSheetData } from './hooks/useSheetData'
import Header from './components/Header'
import SummaryCards from './components/SummaryCards'
import PerformanceCharts from './components/PerformanceCharts'
import StakeholderRanking from './components/StakeholderRanking'
import DetailTable from './components/DetailTable'
import { MONTHS } from './utils/constants'

function parseRate(v) {
  if (typeof v === 'string' && v.endsWith('%')) return parseFloat(v)
  if (typeof v === 'number') return v
  return null
}

function computeDashboard(data, month) {
  const goals = data.quantitativeGoals
  const actuals = data.quantitativeResults
  const rates = data.quantitativeRates

  // Zip rows by index (tables have 1:1 correspondence)
  const tasks = goals.rows.map((g, i) => {
    const a = actuals.rows[i] || {}
    const r = rates.rows[i] || {}
    return {
      stakeholder: g.stakeholder,
      task: g.task,
      pageType: g.pageType,
      detail: g.detail,
      goalAnnual: typeof g.annual === 'number' ? g.annual : 0,
      actualAnnual: typeof a.annual === 'number' ? a.annual : 0,
      goal: typeof g.monthly?.[month] === 'number' ? g.monthly[month] : 0,
      actual: typeof a.monthly?.[month] === 'number' ? a.monthly[month] : 0,
      rate: parseRate(r.monthly?.[month]),
      goalMonthly: g.monthly,
      actualMonthly: a.monthly,
      rateMonthly: r.monthly,
    }
  })

  // 이번 달 종합 달성률
  const validRates = tasks.map(t => t.rate).filter(r => r !== null)
  const avgRate = validRates.length ? validRates.reduce((s, r) => s + r, 0) / validRates.length : 0

  // 주의 필요 과제 수 (80% 미만)
  const warningCount = validRates.filter(r => r < 80).length

  // 누적 실적 합계 (선택된 월까지)
  const monthIdx = MONTHS.indexOf(month)
  let cumulativeActual = 0
  tasks.forEach(t => {
    for (let i = 0; i <= monthIdx; i++) {
      const v = t.actualMonthly?.[MONTHS[i]]
      if (typeof v === 'number') cumulativeActual += v
    }
  })

  // 월별 합계 (목표 vs 실적)
  const monthlyTotals = MONTHS.map(m => ({
    month: m,
    goal: tasks.reduce((s, t) => s + (typeof t.goalMonthly?.[m] === 'number' ? t.goalMonthly[m] : 0), 0),
    actual: tasks.reduce((s, t) => s + (typeof t.actualMonthly?.[m] === 'number' ? t.actualMonthly[m] : 0), 0),
  }))

  // 누적 진척도
  let cumActual = 0
  const cumulative = monthlyTotals.map(mt => {
    cumActual += mt.actual
    return { month: mt.month, cumulative: cumActual }
  })
  const annualTarget = tasks.reduce((s, t) => s + t.goalAnnual, 0)

  // 스테이크홀더별 성과
  const stakeholderNames = [...new Set(tasks.map(t => t.stakeholder))]
  const stakeholders = stakeholderNames.map(sh => {
    const shTasks = tasks.filter(t => t.stakeholder === sh)
    const shRates = shTasks.map(t => t.rate).filter(r => r !== null)
    const avg = shRates.length ? shRates.reduce((s, r) => s + r, 0) / shRates.length : 0
    return {
      name: sh,
      avgRate: Math.round(avg * 10) / 10,
      taskCount: shTasks.length,
      warnings: shRates.filter(r => r < 80).length,
    }
  }).sort((a, b) => b.avgRate - a.avgRate)

  // Totals row
  const totalsRate = parseRate(rates.totals?.monthly?.[month])

  return {
    tasks,
    avgRate: Math.round(avgRate * 10) / 10,
    totalsRate: totalsRate !== null ? Math.round(totalsRate * 10) / 10 : null,
    warningCount,
    cumulativeActual,
    monthlyTotals,
    cumulative,
    annualTarget,
    stakeholders,
  }
}

export default function App() {
  const { data, loading, error, load, refresh } = useSheetData()
  const [selectedMonth, setSelectedMonth] = useState('3월')

  useEffect(() => { load() }, [load])

  const dashboard = useMemo(() => {
    if (!data) return null
    return computeDashboard(data, selectedMonth)
  }, [data, selectedMonth])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header
        onRefresh={refresh}
        loading={loading}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      <main className="max-w-[1400px] mx-auto px-4 py-6 space-y-6">
        {error && (
          <div className="bg-red-900/20 border border-red-800/40 rounded-lg p-4 text-red-300 text-sm">
            {error}
          </div>
        )}

        {loading && !data && (
          <div className="flex items-center justify-center py-24">
            <div className="flex items-center gap-3 text-slate-500 text-sm">
              <div className="w-4 h-4 border-2 border-slate-600 border-t-slate-300 rounded-full animate-spin" />
              데이터를 불러오는 중...
            </div>
          </div>
        )}

        {dashboard && (
          <>
            <SummaryCards
              avgRate={dashboard.totalsRate ?? dashboard.avgRate}
              cumulativeActual={dashboard.cumulativeActual}
              warningCount={dashboard.warningCount}
              annualTarget={dashboard.annualTarget}
              month={selectedMonth}
            />

            <PerformanceCharts
              monthlyTotals={dashboard.monthlyTotals}
              cumulative={dashboard.cumulative}
              annualTarget={dashboard.annualTarget}
              selectedMonth={selectedMonth}
            />

            <StakeholderRanking
              stakeholders={dashboard.stakeholders}
              month={selectedMonth}
            />

            <DetailTable
              tasks={dashboard.tasks}
              month={selectedMonth}
            />
          </>
        )}
      </main>
    </div>
  )
}
