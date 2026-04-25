import { describe, it, expect } from 'vitest'
import { svgLine, svgMultiLine, brandColor } from './dashboardSvg.js'

describe('brandColor', () => {
  it('LG는 정의된 브랜드 색상 (BRAND_COLORS)', () => {
    const c = brandColor('LG', 0)
    expect(c).toMatch(/^#[0-9A-Fa-f]{6}$/)
  })

  it('미정의 브랜드 → FALLBACK_COLORS 순환', () => {
    const c0 = brandColor('Unknown_X', 0)
    const c1 = brandColor('Unknown_Y', 1)
    expect(c0).toMatch(/^#[0-9A-Fa-f]{3,6}$/)
    expect(c1).toMatch(/^#[0-9A-Fa-f]{3,6}$/)
    expect(c0).not.toBe(c1)
  })
})

describe('svgLine', () => {
  it('빈 데이터 → 빈 svg', () => {
    const r = svgLine([], [], 100, 50, '#000')
    expect(r).toContain('<svg')
    expect(r).toContain('width="100"')
    expect(r).not.toContain('<path')
  })

  it('null/undefined data → 빈 svg', () => {
    expect(svgLine(null, [], 100, 50, '#000')).toContain('<svg')
    expect(svgLine(undefined, [], 100, 50, '#000')).toContain('<svg')
  })

  it('정상 데이터 → path + circle + 라벨 포함', () => {
    const r = svgLine([10, 20, 30], ['W1','W2','W3'], 200, 80, '#CF0652')
    expect(r).toContain('<svg')
    expect(r).toContain('<path')
    expect(r).toContain('<circle')
    expect(r).toContain('W1')
    expect(r).toContain('W3')
    expect(r).toContain('#CF0652')
  })

  it('모든 값이 null → 라벨만 표시 (path 없음)', () => {
    const r = svgLine([null, null, null], ['A','B','C'], 200, 80, '#000')
    expect(r).toContain('A')
    expect(r).toContain('C')
    expect(r).not.toContain('<path')
  })

  it('일부 null → 유효 포인트만 path 연결', () => {
    const r = svgLine([10, null, 30], ['A','B','C'], 200, 80, '#000')
    expect(r).toContain('<path')
    // 라벨은 모든 위치에 표시
    expect(r).toContain('A')
    expect(r).toContain('B')
    expect(r).toContain('C')
  })

  it('단일 데이터 포인트 → path 없음, circle만', () => {
    const r = svgLine([42], ['W1'], 100, 60, '#000')
    expect(r).toContain('<circle')
    expect(r).not.toContain('<path')
  })

  it('연속 호출 시 gradient ID 충돌 없음', () => {
    const a = svgLine([1, 2], ['x','y'], 100, 50, '#000')
    const b = svgLine([3, 4], ['x','y'], 100, 50, '#000')
    const idA = a.match(/id="lg(\d+)"/)?.[1]
    const idB = b.match(/id="lg(\d+)"/)?.[1]
    expect(idA).toBeDefined()
    expect(idB).toBeDefined()
    expect(idA).not.toBe(idB)
  })
})

describe('svgMultiLine', () => {
  it('빈 brandData → 빈 문자열', () => {
    expect(svgMultiLine({}, ['W1','W2'], 200, 60)).toBe('')
  })

  it('빈 라벨 → 빈 문자열', () => {
    expect(svgMultiLine({ LG: [10] }, [], 200, 60)).toBe('')
  })

  it('모든 값 null → 빈 문자열', () => {
    expect(svgMultiLine({ LG: [null, null] }, ['A','B'], 200, 60)).toBe('')
  })

  it('정상 다중 브랜드 → svg + 각 브랜드 line', () => {
    const r = svgMultiLine({ LG: [10, 20, 30], Samsung: [15, 25, 35] }, ['W1','W2','W3'], 300, 80)
    expect(r).toContain('<svg')
    // 두 개의 path (각 브랜드)
    const paths = r.match(/<path /g) || []
    expect(paths.length).toBeGreaterThanOrEqual(2)
  })

  it('LG는 더 굵은 stroke (2.5) + 더 큰 circle (3.5)', () => {
    const r = svgMultiLine({ LG: [10, 20, 30], Samsung: [15, 25, 35] }, ['W1','W2','W3'], 300, 80)
    expect(r).toContain('stroke-width="2.5"')
    expect(r).toContain('stroke-width="1.5"')
    expect(r).toMatch(/r="3\.5"/)
    expect(r).toMatch(/r="2\.5"/)
  })

  it('grid 라인 5개 (0~4 등분)', () => {
    const r = svgMultiLine({ LG: [10, 20] }, ['W1','W2'], 200, 60)
    const lines = r.match(/<line /g) || []
    expect(lines.length).toBe(5)
  })

  it('단일 데이터 포인트 → path 없이 circle만', () => {
    const r = svgMultiLine({ LG: [50] }, ['W1'], 100, 60)
    // path 없음, circle 1개
    expect(r).not.toMatch(/<path /)
    expect(r).toContain('<circle')
  })
})
