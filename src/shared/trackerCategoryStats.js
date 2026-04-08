// ─── Tracker raw data → categoryStats 계산 (newsletter용) ───────────────────
// progress-tracker가 publish한 raw data 또는 _dashboard 우선 사용
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function buildLookup(rows) {
  const map = {}
  ;(rows || []).forEach(r => { if (r.stakeholder && r.task) map[`${r.stakeholder}|${r.task}`] = r })
  return map
}

export function computeCategoryStats(data, month) {
  // 1순위: 새 형식의 _dashboard.categoryStats (이미 계산됨)
  if (data?._dashboard?.categoryStats?.length) {
    return data._dashboard.categoryStats
  }
  // 2순위: raw data에서 직접 계산
  if (!data?.quantitativeGoals?.rows) return null

  const goalRows = data.quantitativeGoals.rows
  const actualMap = buildLookup(data.quantitativeResults?.rows)
  const targetMonth = month || data._month || MONTHS[new Date().getMonth()]
  const monthIdx = Math.max(0, MONTHS.indexOf(targetMonth))

  const categoryNames = [...new Set(goalRows.map(g => g.taskCategory).filter(Boolean))]

  return categoryNames.map(cat => {
    const catGoals = goalRows.filter(g => g.taskCategory === cat)
    let mAct = 0, mGoal = 0, cAct = 0, annualGoal = 0
    catGoals.forEach(g => {
      const key = `${g.stakeholder}|${g.task}`
      const a = actualMap[key] || {}
      const gv = typeof g.monthly?.[targetMonth] === 'number' ? g.monthly[targetMonth] : 0
      const av = typeof a.monthly?.[targetMonth] === 'number' ? a.monthly[targetMonth] : 0
      mGoal += gv
      mAct += av
      for (let i = 0; i <= monthIdx; i++) {
        const m = MONTHS[i]
        if (typeof a.monthly?.[m] === 'number') cAct += a.monthly[m]
      }
      MONTHS.forEach(m => {
        if (typeof g.monthly?.[m] === 'number') annualGoal += g.monthly[m]
      })
    })
    const monthRate = mGoal > 0 ? Math.round((mAct / mGoal) * 1000) / 10 : 0
    const progressRate = annualGoal > 0 ? Math.round((cAct / annualGoal) * 1000) / 10 : 0
    return {
      category: cat,
      taskCount: catGoals.length,
      monthRate,
      progressRate,
      monthActual: mAct,
      monthGoal: mGoal,
      cumActual: cAct,
      annualGoal,
    }
  })
}
