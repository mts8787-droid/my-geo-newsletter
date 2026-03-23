import { useState, useEffect, useMemo } from 'react'
import { useSheetData } from './hooks/useSheetData'
import Header from './components/Header'
import SummaryCards from './components/SummaryCards'
import PerformanceCharts from './components/PerformanceCharts'
import StakeholderRanking from './components/StakeholderRanking'
import DetailTable from './components/DetailTable'
import QualitativeTable from './components/QualitativeTable'
import RawGoalTable from './components/RawGoalTable'
import { MONTHS } from './utils/constants'

const IS_PUBLIC = window.location.pathname.startsWith('/p/')

function parseRate(v) {
  if (typeof v === 'string' && v.endsWith('%')) return parseFloat(v)
  if (typeof v === 'number') return v
  return null
}

function buildLookup(rows) {
  const map = {}
  rows.forEach(r => { map[`${r.stakeholder}|${r.task}`] = r })
  return map
}

function computeDashboard(data, month, stakeholderFilter) {
  const goals = data.quantitativeGoals
  const actuals = data.quantitativeResults
  const rates = data.quantitativeRates
  const monthIdx = MONTHS.indexOf(month)

  const actualMap = buildLookup(actuals.rows)
  const rateMap = buildLookup(rates.rows)

  let tasks = goals.rows.map((g) => {
    const key = `${g.stakeholder}|${g.task}`
    const a = actualMap[key] || {}
    const r = rateMap[key] || {}
    const goal = typeof g.monthly?.[month] === 'number' ? g.monthly[month] : 0
    const actual = typeof a.monthly?.[month] === 'number' ? a.monthly[month] : 0
    // 달성률: 실적/목표에서 직접 계산 (표3 데이터는 폴백으로만 사용)
    const sheetRate = parseRate(r.monthly?.[month])
    const computedRate = goal > 0 ? Math.round((actual / goal) * 1000) / 10 : null
    return {
      stakeholder: g.stakeholder,
      task: g.task,
      pageType: g.pageType,
      detail: g.detail,
      goalAnnual: typeof g.annual === 'number' ? g.annual : 0,
      actualAnnual: typeof a.annual === 'number' ? a.annual : 0,
      goal,
      actual,
      rate: computedRate !== null ? computedRate : sheetRate,
      goalMonthly: g.monthly,
      actualMonthly: a.monthly,
      rateMonthly: r.monthly,
    }
  })

  // Stakeholder filter
  if (stakeholderFilter !== '전체') {
    tasks = tasks.filter(t => t.stakeholder === stakeholderFilter)
  }

  // 이번 달 종합 달성률 (가중 평균: 총 실적 / 총 목표)
  const totalMonthActual = tasks.reduce((s, t) => s + (typeof t.actual === 'number' ? t.actual : 0), 0)
  const totalMonthGoal = tasks.reduce((s, t) => s + (typeof t.goal === 'number' ? t.goal : 0), 0)
  const avgRate = totalMonthGoal > 0 ? (totalMonthActual / totalMonthGoal) * 100 : 0
  const validRates = tasks.map(t => t.rate).filter(r => r !== null)
  const warningCount = validRates.filter(r => r < 80).length

  // 누적 실적 + 누적 목표
  let cumulativeActual = 0, cumulativeGoal = 0
  tasks.forEach(t => {
    for (let i = 0; i <= monthIdx; i++) {
      const m = MONTHS[i]
      const av = t.actualMonthly?.[m]
      const gv = t.goalMonthly?.[m]
      if (typeof av === 'number') cumulativeActual += av
      if (typeof gv === 'number') cumulativeGoal += gv
    }
  })

  // 월별 합계
  const monthlyTotals = MONTHS.map(m => ({
    month: m,
    goal: tasks.reduce((s, t) => s + (typeof t.goalMonthly?.[m] === 'number' ? t.goalMonthly[m] : 0), 0),
    actual: tasks.reduce((s, t) => s + (typeof t.actualMonthly?.[m] === 'number' ? t.actualMonthly[m] : 0), 0),
  }))

  // 누적 진척 — 목표는 12월까지, 실적은 해당 월까지만
  let cumA = 0, cumG = 0
  const cumulative = MONTHS.map((m, idx) => {
    const mt = monthlyTotals.find(t => t.month === m)
    cumG += mt?.goal || 0
    if (idx <= monthIdx) {
      cumA += mt?.actual || 0
      return { month: m, cumActual: cumA, cumGoal: cumG }
    }
    return { month: m, cumActual: null, cumGoal: cumG }
  })

  const annualTarget = tasks.reduce((s, t) => s + t.goalAnnual, 0)

  // 스테이크홀더별 (항상 전체 기준으로 계산 — 필터 무관)
  const allTasks = goals.rows.map((g) => {
    const key = `${g.stakeholder}|${g.task}`
    const a = actualMap[key] || {}
    const r = rateMap[key] || {}
    const gv = typeof g.monthly?.[month] === 'number' ? g.monthly[month] : 0
    const av = typeof a.monthly?.[month] === 'number' ? a.monthly[month] : 0
    const sheetRate = parseRate(r.monthly?.[month])
    const computedRate = gv > 0 ? Math.round((av / gv) * 1000) / 10 : null
    return {
      stakeholder: g.stakeholder,
      task: g.task,
      rate: computedRate !== null ? computedRate : sheetRate,
      goalMonthly: g.monthly,
      actualMonthly: a.monthly,
    }
  })
  const shNames = [...new Set(allTasks.map(t => t.stakeholder))]
  const stakeholders = shNames.map(sh => {
    const shTasks = allTasks.filter(t => t.stakeholder === sh)

    // 해당 월 실적/목표 합계
    let monthAct = 0, monthGoalSh = 0
    const taskDetails = []
    shTasks.forEach(t => {
      const av = t.actualMonthly?.[month]
      const gv = t.goalMonthly?.[month]
      const actualVal = typeof av === 'number' ? av : 0
      const goalVal = typeof gv === 'number' ? gv : 0
      if (typeof av === 'number') monthAct += av
      if (typeof gv === 'number') monthGoalSh += gv
      taskDetails.push({
        task: t.task,
        monthActual: actualVal,
        monthGoal: goalVal,
        rate: t.rate,
      })
    })

    let cumAct = 0, cumGoalSh = 0
    shTasks.forEach(t => {
      for (let i = 0; i <= monthIdx; i++) {
        const m = MONTHS[i]
        const av = t.actualMonthly?.[m]
        const gv = t.goalMonthly?.[m]
        if (typeof av === 'number') cumAct += av
        if (typeof gv === 'number') cumGoalSh += gv
      }
    })
    const cumRate = cumGoalSh > 0 ? (cumAct / cumGoalSh) * 100 : (cumAct > 0 ? 100 : 0)

    const monthRate = monthGoalSh > 0 ? (monthAct / monthGoalSh) * 100 : (monthAct > 0 ? 100 : 0)
    return {
      name: sh,
      monthRate: Math.round(monthRate * 10) / 10,
      cumRate: Math.round(cumRate * 10) / 10,
      monthActual: monthAct,
      monthGoal: monthGoalSh,
      cumActual: cumAct,
      cumGoal: cumGoalSh,
      taskCount: shTasks.length,
      warnings: taskDetails.filter(td => td.rate !== null && td.rate < 80).length,
      taskDetails,
    }
  }).sort((a, b) => b.monthRate - a.monthRate)

  const totalsRate = parseRate(rates.totals?.monthly?.[month])
  const currentMT = monthlyTotals.find(t => t.month === month)
  const monthActual = currentMT?.actual || 0
  const monthGoal = currentMT?.goal || 0

  return {
    tasks,
    avgRate: Math.round(avgRate * 10) / 10,
    totalsRate: totalsRate !== null ? Math.round(totalsRate * 10) / 10 : null,
    warningCount,
    cumulativeActual,
    cumulativeGoal,
    monthActual,
    monthGoal,
    monthlyTotals,
    cumulative,
    annualTarget,
    stakeholders,
  }
}

export default function App() {
  const { data, loading, error, load, refresh } = useSheetData(IS_PUBLIC ? 'snapshot' : 'live')
  const [selectedMonth, setSelectedMonth] = useState('3월')
  const [selectedSH, setSelectedSH] = useState('전체')

  useEffect(() => { load() }, [load])

  const stakeholderList = useMemo(() => {
    if (!data) return []
    return [...new Set(data.quantitativeGoals.rows.map(r => r.stakeholder))]
  }, [data])

  const dashboard = useMemo(() => {
    if (!data) return null
    return computeDashboard(data, selectedMonth, selectedSH)
  }, [data, selectedMonth, selectedSH])

  // 게시 기능
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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header
        onRefresh={IS_PUBLIC ? null : refresh}
        loading={loading}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedSH={selectedSH}
        setSelectedSH={setSelectedSH}
        stakeholderList={stakeholderList}
        isPublic={IS_PUBLIC}
        onPublish={handlePublish}
        publishing={publishing}
        publishInfo={publishInfo}
        onUnpublish={handleUnpublish}
      />

      <main className="max-w-[1400px] mx-auto px-4 py-6 space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-[16px]">
            {error}
          </div>
        )}

        {loading && !data && (
          <div className="flex items-center justify-center py-24">
            <div className="flex items-center gap-3 text-gray-400 text-[16px]">
              <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
              데이터를 불러오는 중...
            </div>
          </div>
        )}

        {dashboard && (
          <>
            <SummaryCards
              avgRate={dashboard.avgRate}
              cumulativeActual={dashboard.cumulativeActual}
              cumulativeGoal={dashboard.cumulativeGoal}
              monthActual={dashboard.monthActual}
              monthGoal={dashboard.monthGoal}
              warningCount={dashboard.warningCount}
              annualTarget={dashboard.annualTarget}
              month={selectedMonth}
              selectedSH={selectedSH}
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
              selectedSH={selectedSH}
            />

            <DetailTable
              tasks={dashboard.tasks}
              month={selectedMonth}
            />

            {data && (
              <QualitativeTable
                goals={data.qualitativeGoals.rows}
                results={data.qualitativeResults.rows}
                selectedSH={selectedSH}
                month={selectedMonth}
                debugHeaders={data._debugHeaders?.qualitativeResults}
              />
            )}

            {data && (
              <RawGoalTable
                rows={data.quantitativeGoals.rows}
                selectedSH={selectedSH}
              />
            )}
          </>
        )}
      </main>
      <footer style={{ padding: '8px 16px', textAlign: 'right', borderTop: '1px solid #e2e8f0', flexShrink: 0 }}>
        <span style={{ fontSize: 15, color: '#94a3b8' }}>v{__APP_VERSION__}</span>
      </footer>
    </div>
  )
}
