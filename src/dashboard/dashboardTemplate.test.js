// 회귀 방지: generateVisibilityHTML / generateDashboardHTML이 ReferenceError 없이 실행되는지 검증.
// (ESM 모듈 strict 모드에서 미선언 변수에 대한 할당은 즉시 throw — _sid 같은 dead reference 잡기)
import { describe, it, expect } from 'vitest'
import { generateVisibilityHTML, generateDashboardHTML } from './dashboardTemplate.js'

const meta = { period: '2026-04', reportNo: 'Vol.04', title: '테스트', dateLine: '2026년 4월 기준' }
const total = { score: 84.2, prev: 82.1, vsComp: 78.5, rank: 1, totalBrands: 12 }
const products = [
  { id: 'tv', bu: 'MS', kr: 'TV', en: 'TV', score: 85, prev: 82, vsComp: 78, status: 'lead', weekly: [80, 82, 85], monthly: [80, 82, 85] },
  { id: 'audio', bu: 'MS', kr: '오디오', en: 'Audio', score: 60, prev: 55, vsComp: 75, status: 'critical', weekly: [55, 58, 60], monthly: [55, 58, 60] },
]
const citations = [{ domain: 'lge.com', score: 50 }]
const dotcom = {}
const productsCnty = [{ product: 'TV', country: 'US', score: 90, compName: 'Samsung', compScore: 75, allScores: { LG: 90, Samsung: 75 } }]
const citationsCnty = []
const weeklyLabels = ['W14', 'W15', 'W16']
const weeklyAll = { tv: { Total: { LG: [80, 82, 85], Samsung: [70, 72, 75] } } }
const citationsByCnty = {}
const dotcomByCnty = {}
const monthlyVis = []
const extra = { unlaunchedMap: { 'AU|TV': true } }

describe('generateVisibilityHTML — 회귀 방지', () => {
  it('throw 없이 HTML 문자열 반환 (ko)', () => {
    expect(() => {
      const html = generateVisibilityHTML(meta, total, products, citations, dotcom, 'ko',
        productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, monthlyVis, extra)
      expect(html).toContain('<!DOCTYPE html>')
      expect(html).toContain('<script>')
      expect(html).toContain('</script>')
      expect(html).toContain('</html>')
    }).not.toThrow()
  })

  it('throw 없이 HTML 문자열 반환 (en)', () => {
    expect(() => {
      generateVisibilityHTML(meta, total, products, citations, dotcom, 'en',
        productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, monthlyVis, extra)
    }).not.toThrow()
  })
})

describe('generateDashboardHTML — 회귀 방지', () => {
  it('throw 없이 HTML 반환 (ko)', () => {
    expect(() => {
      const html = generateDashboardHTML(meta, total, products, citations, dotcom, 'ko',
        productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, { monthlyVis }, extra)
      expect(html).toContain('<!DOCTYPE html>')
      // 임베드 데이터 변수 모두 출현
      expect(html).toContain('var _curLang=')
      expect(html).toContain('var _weeklyAll=')
      expect(html).toContain('var _products=')
      expect(html).toContain('var _BRAND_COLORS=')
      // 핵심 클라이언트 함수 출현
      expect(html).toContain('function switchTab')
      expect(html).toContain('function onFilterChange')
    }).not.toThrow()
  })

  it('throw 없이 HTML 반환 (en)', () => {
    expect(() => {
      generateDashboardHTML(meta, total, products, citations, dotcom, 'en',
        productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, { monthlyVis }, extra)
    }).not.toThrow()
  })

  it('미선언 식별자 사용 없음 (스크립트 내 ReferenceError 차단)', () => {
    const html = generateDashboardHTML(meta, total, products, citations, dotcom, 'ko',
      productsCnty, citationsCnty, weeklyLabels, weeklyAll, citationsByCnty, dotcomByCnty, { monthlyVis }, extra)
    // _sid는 dashboardSvg.js의 모듈 카운터로 옮겨졌으므로 dashboardTemplate 본문에 노출되면 안 됨
    // (HTML 안에 _sid 참조가 있으면 브라우저에서 ReferenceError)
    // 단, 'lg{N}' 형식의 SVG defs ID는 정상 — 문자열로 직렬화된 결과
    const stmtMatches = html.match(/[^.\w]_sid\s*[=+]/g) || []
    expect(stmtMatches).toEqual([])
  })
})
