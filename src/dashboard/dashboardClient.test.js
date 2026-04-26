import { describe, it, expect } from 'vitest'
import { buildDashboardClientScript } from './dashboardClient.js'

const BASE_OPTS = {
  lang: 'ko',
  weeklyAll: { tv: { Total: { LG: [80, 82, 85] } } },
  products: [{ id: 'tv', bu: 'MS', kr: 'TV', en: 'TV', score: 85, prev: 82, vsComp: 78, status: 'lead' }],
  productsCnty: [{ product: 'TV', country: 'US', score: 90, compName: 'Samsung', compScore: 75 }],
  ulMap: { 'AU|TV': true },
  monthlyVis: [],
  total: { score: 84.2, prev: 82.1, vsComp: 78.5, rank: 1, totalBrands: 12 },
  meta: { period: '2026-04', reportNo: 'Vol.04', totalInsight: '인사이트 본문' },
  wLabels: ['W14', 'W15', 'W16'],
}

describe('buildDashboardClientScript — 임베드 데이터 + 클라이언트 함수', () => {
  it('lang 인자가 _curLang에 주입된다', () => {
    expect(buildDashboardClientScript({ ...BASE_OPTS, lang: 'ko' })).toContain("_curLang='ko'")
    expect(buildDashboardClientScript({ ...BASE_OPTS, lang: 'en' })).toContain("_curLang='en'")
  })

  it('주요 임베드 데이터 변수가 모두 포함된다', () => {
    const s = buildDashboardClientScript(BASE_OPTS)
    expect(s).toContain('var _weeklyAll=')
    expect(s).toContain('var _products=')
    expect(s).toContain('var _productsCnty=')
    expect(s).toContain('var _unlaunchedMap=')
    expect(s).toContain('var _monthlyVis=')
    expect(s).toContain('var _total=')
    expect(s).toContain('var _meta=')
    expect(s).toContain('var _wLabels=')
    expect(s).toContain('var _BRAND_COLORS=')
    expect(s).toContain('var _REGIONS=')
    expect(s).toContain('var _REGION_LABELS=')
  })

  it('핵심 클라이언트 함수가 모두 정의된다', () => {
    const s = buildDashboardClientScript(BASE_OPTS)
    for (const fn of [
      'function switchLang',
      'function switchTab',
      'function switchCitSub',
      'function switchVisSub',
      'function switchPeriodMode',
      'function toggleInsights',
      'function onBuChange',
      'function onRegionChange',
      'function onFilterChange',
      'function applyCntyFilters',
      'function _isUnlaunched',
      'function _statusInfo',
      'function _trendMultiSvg',
    ]) {
      expect(s).toContain(fn)
    }
  })

  it('JSON에 </script> 시퀀스가 포함되어도 이스케이프된다', () => {
    const s = buildDashboardClientScript({
      ...BASE_OPTS,
      meta: { ...BASE_OPTS.meta, totalInsight: 'evil </script> injection' },
    })
    expect(s).not.toContain('evil </script>')
    expect(s).toContain('<\\/script>')
  })

  it('U+2028 / U+2029 라인 separator 이스케이프', () => {
    const s = buildDashboardClientScript({
      ...BASE_OPTS,
      meta: { ...BASE_OPTS.meta, totalInsight: 'A\u2028B\u2029C' },
    })
    expect(s).not.toMatch(/[\u2028\u2029]/)
    expect(s).toContain('\\u2028')
    expect(s).toContain('\\u2029')
  })

  it('weeklyAll falsy → 빈 객체 fallback', () => {
    const s = buildDashboardClientScript({ ...BASE_OPTS, weeklyAll: null })
    expect(s).toContain('var _weeklyAll={};')
  })

  it('productsCnty 미지정 → 빈 배열', () => {
    const s = buildDashboardClientScript({ ...BASE_OPTS, productsCnty: undefined })
    expect(s).toContain('var _productsCnty=[];')
  })

  it('en lang에서 _REGION_LABELS는 영문 라벨', () => {
    const s = buildDashboardClientScript({ ...BASE_OPTS, lang: 'en' })
    expect(s).toContain('North America')
    expect(s).toContain('Asia Pacific')
  })

  it('ko lang에서 _REGION_LABELS는 한글 라벨', () => {
    const s = buildDashboardClientScript({ ...BASE_OPTS, lang: 'ko' })
    expect(s).toContain('북미')
    expect(s).toContain('아태')
  })
})
