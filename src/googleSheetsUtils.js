// N2 — XLSX는 fetchSheet 호출 시에만 필요 → 동적 로드
import { loadXlsx } from './shared/loadXlsx.js'
import { SHEET_NAMES, parseSheetRows } from './excelUtils'
import { PROD_ID_TO_KR, PROD_ID_TO_BU } from './categoryMap.js'
import { verifySyncResult } from './sheetParserUtils.js'

export function extractSheetId(url) {
  const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)
  return match ? match[1] : null
}

async function fetchSheet(sheetId, sheetName) {
  const rid = `${Date.now()}_${Math.random().toString(36).slice(2,8)}`
  // sheet 파라미터를 &headers=1과 함께 전달 — gviz는 sheet 이름으로 탭 선택
  const url = `/gsheets-proxy/spreadsheets/d/${sheetId}/gviz/tq?sheet=${encodeURIComponent(sheetName)}&tqx=out:csv;reqId:${rid}&headers=1`
  // URL logged only in dev for debugging
  const res = await fetch(url, {
    cache: 'no-store',
    headers: { 'Cache-Control': 'no-cache, no-store', 'Pragma': 'no-cache' },
  })
  if (!res.ok) throw new Error(
    `"${sheetName}" 시트를 가져올 수 없습니다 (HTTP ${res.status}).`
  )
  const csv = await res.text()
  const XLSX = await loadXlsx()
  const wb  = XLSX.read(csv, { type: 'string' })
  const ws  = wb.Sheets[wb.SheetNames[0]]
  return XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })
}

export async function syncFromGoogleSheets(sheetId, onProgress) {
  const names = Object.values(SHEET_NAMES)
  const result = {}

  onProgress?.(`${names.length}개 시트 병렬 로드 중...`)
  const fetched = await Promise.allSettled(
    names.map(name => fetchSheet(sheetId, name).then(rows => ({ name, rows })))
  )

  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    const entry = fetched[i]
    onProgress?.(`"${name}" 처리 중... (${i + 1}/${names.length})`)
    if (entry.status === 'rejected') {
      console.warn(`"${name}" 시트 건너뜀:`, entry.reason?.message)
      continue
    }
    try {
      const { rows } = entry.value
      const parsed = parseSheetRows(name, rows)
      // 스마트 병합: 배열은 합치고(단 weeklyLabels는 덮어쓰기), 객체는 병합, 나머지는 덮어쓰기
      for (const [key, val] of Object.entries(parsed)) {
        if (key === 'weeklyLabels' || key === 'weeklyLabelsFull') {
          if (!result[key]) result[key] = val
        } else if (Array.isArray(val) && Array.isArray(result[key])) {
          result[key] = [...result[key], ...val]
        } else if (val && typeof val === 'object' && !Array.isArray(val) &&
                   result[key] && typeof result[key] === 'object' && !Array.isArray(result[key])) {
          result[key] = { ...result[key], ...val }
        } else {
          result[key] = val
        }
      }
    } catch (err) {
      console.warn(`"${name}" 시트 처리 실패:`, err.message)
    }
  }

  // ── 폴백: productsPartial이 없으면 weeklyAll + weeklyMap에서 자동 생성 ──
  if (!result.productsPartial && result.weeklyAll && result.weeklyMap) {
    console.log('[SYNC] productsPartial 없음 → weeklyAll에서 자동 생성')
    // 카테고리 매핑은 src/categoryMap.js single source — 로컬 재정의 금지 (STYLER 누락 회귀 방지)
    const productsPartial = []
    for (const [id, byCountry] of Object.entries(result.weeklyAll)) {
      const total = byCountry['Total'] || byCountry['TTL'] || {}
      const lgArr = total['LG'] || total['lg'] || []
      const brands = Object.entries(total).filter(([b]) => b !== 'LG' && b !== 'lg')
      // 최신 주차 값 사용
      const score = lgArr.length ? lgArr[lgArr.length - 1] : 0
      const prev = lgArr.length >= 5 ? lgArr[0] : 0
      // 최고 경쟁사 찾기
      let topCompName = '', topCompScore = 0
      for (const [brand, arr] of brands) {
        const last = arr.length ? arr[arr.length - 1] : 0
        if (last > topCompScore) { topCompScore = last; topCompName = brand }
      }
      if (score > 0) {
        productsPartial.push({
          id, bu: PROD_ID_TO_BU[id] || 'HS', kr: PROD_ID_TO_KR[id] || id,
          category: id, date: result.meta?.period || '',
          score, prev, vsComp: topCompScore, compName: topCompName,
          allScores: { LG: score, ...(topCompName ? { [topCompName]: topCompScore } : {}) },
        })
      }
    }
    if (productsPartial.length) {
      result.productsPartial = productsPartial
      console.log(`[SYNC] weeklyAll에서 ${productsPartial.length}개 제품 생성:`, productsPartial.map(p => `${p.id}=${p.score}`).join(', '))
    }

    // productsCnty도 없으면 weeklyAll 국가별 데이터에서 생성
    if (!result.productsCnty) {
      const productsCnty = []
      for (const [id, byCountry] of Object.entries(result.weeklyAll)) {
        const category = PROD_ID_TO_KR[id] || id
        for (const [cnty, brands] of Object.entries(byCountry)) {
          if (cnty === 'Total' || cnty === 'TTL') continue
          const lgArr = brands['LG'] || brands['lg'] || []
          const lgScore = lgArr.length ? lgArr[lgArr.length - 1] : 0
          if (lgScore <= 0) continue
          // weekly 첫 주를 prev로 사용 (월 데이터 없을 때 폴백)
          const lgPrev = lgArr.length >= 2 ? lgArr[0] : 0
          let topCompName = '', topCompScore = 0
          // 모든 브랜드의 최신 점수 → allScores 맵
          const allScores = { LG: lgScore }
          for (const [brand, arr] of Object.entries(brands)) {
            if (brand === 'LG' || brand === 'lg') continue
            const last = arr.length ? arr[arr.length - 1] : 0
            allScores[brand] = last
            if (last > topCompScore) { topCompScore = last; topCompName = brand }
          }
          const gap = +(lgScore - topCompScore).toFixed(1)
          productsCnty.push({ product: category, country: cnty, score: lgScore, prev: lgPrev, compName: topCompName, compScore: topCompScore, gap, allScores })
        }
      }
      if (productsCnty.length) {
        result.productsCnty = productsCnty
        console.log(`[SYNC] weeklyAll에서 productsCnty ${productsCnty.length}건 생성`)
      }
    }
  }

  // weeklyLabels 폴백: auto-generated(W1,W2,..)이면 PR/BrandPrompt 라벨로 대체
  if (result.weeklyLabels && result.weeklyLabels.length) {
    const isAutoGenerated = result.weeklyLabels.every((l, i) => l === `W${i + 1}`)
    if (isAutoGenerated) {
      // weeklyPRLabels에서 w-라벨 추출 (PR 시트는 헤더 파싱이 정상 작동)
      const prLabels = (result.weeklyPRLabels || result.weeklyBrandPromptLabels || [])
        .map(l => String(l).split(/\n/)[0].trim().toUpperCase())
        .filter(l => /^W\d+/.test(l))
      if (prLabels.length >= 2) {
        console.log('[SYNC] weeklyLabels W1,W2... → PR 라벨로 대체:', prLabels)
        result.weeklyLabels = prLabels
        // Full 라벨도 PR에서 추출
        const prLabelsFull = (result.weeklyPRLabels || result.weeklyBrandPromptLabels || [])
          .map(l => { const p = String(l).split(/\n/); return p[0].trim().toUpperCase() + (p[1] ? p[1].trim() : '') })
          .filter(l => /^W\d+/.test(l))
        if (prLabelsFull.length) result.weeklyLabelsFull = prLabelsFull
      }
    }
  }

  // Verify-After-Act — invariant 검증 (SKILL.md §7.4)
  // issues 는 console.warn 으로 surface. UI 알림으로 노출하려면 caller 가 result._syncIssues 활용.
  result._syncIssues = verifySyncResult(result, 'syncFromGoogleSheets')

  return result
}
