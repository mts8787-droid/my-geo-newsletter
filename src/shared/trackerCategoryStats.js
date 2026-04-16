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

function taskKey(r) {
  // stakeholder + task + pageType + detail로 고유 식별 (동명 과제 구분)
  return `${r.stakeholder || ''}|${r.task || ''}|${r.pageType || ''}|${r.detail || ''}`
}

function buildLookup(rows) {
  const map = {}
  ;(rows || []).forEach(r => { if (r.stakeholder && r.task) map[taskKey(r)] = r })
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
  // 뉴스레터에서는 이전 달을 전달하므로, fallback도 이전 달 기준
  const prevM = currentMonth - 1
  const fallbackMonth = prevM >= 3 && prevM <= 12 ? `${prevM}월` : '3월'
  let targetMonth = month || data._month || fallbackMonth
  let monthIdx = MONTHS.indexOf(targetMonth)
  // 잘못된 월(MONTHS에 없음)은 명시적으로 3월로 클램프 (key까지 동기화)
  if (monthIdx < 0) {
    targetMonth = '3월'
    monthIdx = 0
  }

  const categoryNames = [...new Set(goalRows.map(g => g.taskCategory).filter(Boolean))]

  const prevMonth = monthIdx > 0 ? MONTHS[monthIdx - 1] : null

  return categoryNames.map(cat => {
    const catGoals = goalRows.filter(g => g.taskCategory === cat)
    let mAct = 0, mGoal = 0, cAct = 0, annualGoal = 0
    let pAct = 0, pGoal = 0
    catGoals.forEach(g => {
      const key = taskKey(g)
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
      targetMonth,
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

// ─── 조직(stakeholder)별 진척 집계 ─────────────────────────────────────────
const STAKEHOLDER_ORDER = ['MS', 'HS', 'ES', '고가혁', '브랜드', 'D2C', 'PR']
function stakeholderSortKey(name) {
  const idx = STAKEHOLDER_ORDER.indexOf(name)
  return idx >= 0 ? idx : 999
}

export function computeStakeholderStats(data, month) {
  if (!data?.quantitativeGoals?.rows) return null
  const goalRows = data.quantitativeGoals.rows
  const actualMap = buildLookup(data.quantitativeResults?.rows)
  const currentMonth = new Date().getMonth() + 1
  const prevM = currentMonth - 1
  const fallbackMonth = prevM >= 3 && prevM <= 12 ? `${prevM}월` : '3월'
  let targetMonth = month || data._month || fallbackMonth
  let monthIdx = MONTHS.indexOf(targetMonth)
  if (monthIdx < 0) { targetMonth = '3월'; monthIdx = 0 }

  const stakeholderNames = [...new Set(goalRows.map(g => g.stakeholder).filter(Boolean))]
  const prevMonth = monthIdx > 0 ? MONTHS[monthIdx - 1] : null

  return stakeholderNames.map(sh => {
    const shGoals = goalRows.filter(g => g.stakeholder === sh)
    let mAct = 0, mGoal = 0, cAct = 0, annualGoal = 0
    shGoals.forEach(g => {
      const key = taskKey(g)
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
      stakeholder: sh,
      taskCount: shGoals.length,
      targetMonth,
      monthRate,
      monthActual: mAct,
      monthGoal: mGoal,
      progressRate,
      cumActual: cAct,
      annualGoal,
    }
  }).sort((a, b) => stakeholderSortKey(a.stakeholder) - stakeholderSortKey(b.stakeholder))
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

// 뉴스레터 핵심 과제 진척: 항상 이전 달 (현재 4월이면 3월)
// MONTHS는 3월~12월이므로 3월이면 이전 달 없음 → 3월 유지
export function previousMonth(monthStr) {
  if (!monthStr) return null
  const m = String(monthStr).match(/(\d{1,2})월/)
  if (!m) return monthStr
  const num = parseInt(m[1])
  const prev = num - 1
  if (prev < 3) return '3월'  // tracker MONTHS는 3월부터 시작
  return `${prev}월`
}
