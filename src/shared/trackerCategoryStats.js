// ─── Tracker raw data → categoryStats 계산 (newsletter용) ───────────────────
// progress-tracker가 publish한 raw data 또는 _dashboard 우선 사용
// ⚠ tracker의 MONTHS는 한글 ['3월','4월',...,'12월'] (3월 시작!)
const MONTHS = ['3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']

// 카테고리 표시 순서
const CATEGORY_ORDER = ['콘텐츠수정', '신규콘텐츠제작', '외부채널관리', '닷컴기술개선']
function categorySortKey(name) {
  const idx = CATEGORY_ORDER.indexOf(name)
  return idx >= 0 ? idx : 999
}

function buildLookup(rows) {
  const map = {}
  ;(rows || []).forEach(r => { if (r.stakeholder && r.task) map[`${r.stakeholder}|${r.task}`] = r })
  return map
}

export function computeCategoryStats(data, month) {
  // raw data에서 항상 직접 계산 (특정 월 기준)
  // _dashboard는 publish 시점의 month라서 신뢰 못함
  if (!data?.quantitativeGoals?.rows) {
    // raw data 없으면 _dashboard fallback (정렬만 적용)
    if (data?._dashboard?.categoryStats?.length) {
      return [...data._dashboard.categoryStats].sort((a, b) => categorySortKey(a.category) - categorySortKey(b.category))
    }
    return null
  }

  const goalRows = data.quantitativeGoals.rows
  const actualMap = buildLookup(data.quantitativeResults?.rows)
  // tracker MONTHS는 3월부터 시작이므로 idx 0이 3월
  const currentMonth = new Date().getMonth() + 1  // 1~12
  const fallbackMonth = currentMonth >= 3 && currentMonth <= 12 ? `${currentMonth}월` : '3월'
  const targetMonth = month || data._month || fallbackMonth
  const monthIdx = Math.max(0, MONTHS.indexOf(targetMonth))

  const categoryNames = [...new Set(goalRows.map(g => g.taskCategory).filter(Boolean))]

  const prevMonth = monthIdx > 0 ? MONTHS[monthIdx - 1] : null

  return categoryNames.map(cat => {
    const catGoals = goalRows.filter(g => g.taskCategory === cat)
    let mAct = 0, mGoal = 0, cAct = 0, annualGoal = 0
    let pAct = 0, pGoal = 0
    catGoals.forEach(g => {
      const key = `${g.stakeholder}|${g.task}`
      const a = actualMap[key] || {}
      const gv = typeof g.monthly?.[targetMonth] === 'number' ? g.monthly[targetMonth] : 0
      const av = typeof a.monthly?.[targetMonth] === 'number' ? a.monthly[targetMonth] : 0
      mGoal += gv
      mAct += av
      // 이전 월
      if (prevMonth) {
        const pgv = typeof g.monthly?.[prevMonth] === 'number' ? g.monthly[prevMonth] : 0
        const pav = typeof a.monthly?.[prevMonth] === 'number' ? a.monthly[prevMonth] : 0
        pGoal += pgv
        pAct += pav
      }
      for (let i = 0; i <= monthIdx; i++) {
        const m = MONTHS[i]
        if (typeof a.monthly?.[m] === 'number') cAct += a.monthly[m]
      }
      MONTHS.forEach(m => {
        if (typeof g.monthly?.[m] === 'number') annualGoal += g.monthly[m]
      })
    })
    const monthRate = mGoal > 0 ? Math.round((mAct / mGoal) * 1000) / 10 : 0
    const prevMonthRate = pGoal > 0 ? Math.round((pAct / pGoal) * 1000) / 10 : 0
    const progressRate = annualGoal > 0 ? Math.round((cAct / annualGoal) * 1000) / 10 : 0
    return {
      category: cat,
      taskCount: catGoals.length,
      monthRate,
      prevMonthRate,
      prevMonth,
      progressRate,
      monthActual: mAct,
      monthGoal: mGoal,
      cumActual: cAct,
      annualGoal,
    }
  }).sort((a, b) => categorySortKey(a.category) - categorySortKey(b.category))
}

// meta.period에서 월 추출 (tracker MONTHS 형식 = '3월', '4월', ...)
// 예: "2026년 3월" → "3월", "Mar 2026" → "3월"
export function extractMonthFromPeriod(period) {
  if (!period) return null
  const krMatch = String(period).match(/(\d{1,2})월/)
  if (krMatch) return `${parseInt(krMatch[1])}월`
  const enToNum = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 }
  const enMatch = String(period).match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
  if (enMatch) return `${enToNum[enMatch[1].toLowerCase()]}월`
  return null
}
