import { useState, useEffect, useMemo } from 'react'
import { useSheetData } from './hooks/useSheetData'
import Header from './components/Header'
import SummaryCards from './components/SummaryCards'
import PerformanceCharts from './components/PerformanceCharts'
import StakeholderRanking from './components/StakeholderRanking'
import DetailTable from './components/DetailTable'
import { MONTHS } from './utils/constants'

// /p/progress-tracker/ → 게시된 읽기전용 모드
const IS_PUBLIC = window.location.pathname.startsWith('/p/')

function parseRate(v) {
  if (typeof v === 'string' && v.endsWith('%')) return parseFloat(v)
  if (typeof v === 'number') return v
  return null
}

function computeDashboard(data, month) {
  const goals = data.quantitativeGoals
  const actuals = data.quantitativeResults
  const rates = data.quantitativeRates

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

  const validRates = tasks.map(t => t.rate).filter(r => r !== null)
  const avgRate = validRates.length ? validRates.reduce((s, r) => s + r, 0) / validRates.length : 0
  const warningCount = validRates.filter(r => r < 80).length

  const monthIdx = MONTHS.indexOf(month)
  let cumulativeActual = 0
  tasks.forEach(t => {
    for (let i = 0; i <= monthIdx; i++) {
      const v = t.actualMonthly?.[MONTHS[i]]
      if (typeof v === 'number') cumulativeActual += v
    }
  })

  const monthlyTotals = MONTHS.map(m => ({
    month: m,
    goal: tasks.reduce((s, t) => s + (typeof t.goalMonthly?.[m] === 'number' ? t.goalMonthly[m] : 0), 0),
    actual: tasks.reduce((s, t) => s + (typeof t.actualMonthly?.[m] === 'number' ? t.actualMonthly[m] : 0), 0),
  }))

  let cumActual = 0
  const cumulative = monthlyTotals.map(mt => {
    cumActual += mt.actual
    return { month: mt.month, cumulative: cumActual }
  })
  const annualTarget = tasks.reduce((s, t) => s + t.goalAnnual, 0)

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
  const { data, loading, error, load, refresh } = useSheetData(IS_PUBLIC ? 'snapshot' : 'live')
  const [selectedMonth, setSelectedMonth] = useState('3월')

  useEffect(() => { load() }, [load])

  const dashboard = useMemo(() => {
    if (!data) return null
    return computeDashboard(data, selectedMonth)
  }, [data, selectedMonth])

  // 게시 기능 (관리자 전용)
  const [publishing, setPublishing] = useState(false)
  const [publishInfo, setPublishInfo] = useState(null)

  useEffect(() => {
    if (IS_PUBLIC) return
    fetch('/api/publish-tracker').then(r => r.ok ? r.json() : null).then(setPublishInfo).catch(() => {})
  }, [])

  async function handlePublish() {
    if (!data || publishing) return
    setPublishing(true)
    try {
      const res = await fetch('/api/publish-tracker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      })
      const j = await res.json()
      if (!j.ok) throw new Error(j.error || '게시 실패')
      setPublishInfo({ published: true, ...j })
    } catch (err) {
      alert('게시 실패: ' + err.message)
    } finally {
      setPublishing(false)
    }
  }

  async function handleUnpublish() {
    try {
      await fetch('/api/publish-tracker', { method: 'DELETE' })
      setPublishInfo(null)
    } catch {}
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header
        onRefresh={IS_PUBLIC ? null : refresh}
        loading={loading}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        isPublic={IS_PUBLIC}
        onPublish={handlePublish}
        publishing={publishing}
        publishInfo={publishInfo}
        onUnpublish={handleUnpublish}
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
