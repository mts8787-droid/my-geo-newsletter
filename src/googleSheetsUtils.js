import * as XLSX from 'xlsx-js-style'
import { SHEET_NAMES, parseSheetRows } from './excelUtils'

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
        if (key === 'weeklyLabels') {
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
    const ID_KR = { tv: 'TV', monitor: '모니터', audio: '오디오', washer: '세탁기', fridge: '냉장고', dw: '식기세척기', vacuum: '청소기', cooking: 'Cooking', rac: 'RAC', aircare: 'Aircare' }
    const ID_BU = { tv: 'MS', monitor: 'MS', audio: 'MS', washer: 'HS', fridge: 'HS', dw: 'HS', vacuum: 'HS', cooking: 'HS', rac: 'ES', aircare: 'ES' }
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
          id, bu: ID_BU[id] || 'HS', kr: ID_KR[id] || id,
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
        const category = ID_KR[id] || id
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

  return result
}
