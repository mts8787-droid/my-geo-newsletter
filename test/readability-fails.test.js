// 개선 항목(FAIL) 수집 로직 단위 테스트 — collectFails / isFetchFailed.
// data.md §7.7 Test-Verify-Document Loop. aggregate-readability.mjs 는 직접 실행 시에만
// main() 을 돌리므로(import.meta.url 가드) import 해도 집계가 실행되지 않는다.
import { describe, it, expect } from 'vitest'
import { collectFails, collectChecks, isFetchFailed, applyScoringOverride } from '../scripts/aggregate-readability.mjs'

// score.breakdown 헬퍼 — 카테고리별 items 조립
const score = (items) => ({
  total: 60,
  breakdown: {
    performance: { items: {} },
    accessibility: { items: {} },
    seo: { items: items.seo || {} },
    ai_readiness: { items: items.ai || {} },
  },
})

describe('collectFails', () => {
  it('applicable 한 FAIL(pass===false, na!==true) 만 수집', () => {
    const s = score({
      seo: {
        seo_h1: { pass: false, na: false, label: '#16 H1', hint: 'H1 2개' },
        seo_title: { pass: true, label: '#12 Title' },          // pass → 제외
        seo_canonical: { pass: null, label: '#13 Canonical' },  // null → 제외
      },
      ai: {
        ai_faq_block: { pass: false, na: true, label: '#32 FAQ' }, // na → 제외
      },
    })
    const meta = {}
    const fails = collectFails(s, meta)
    expect(fails.map(f => f.id)).toEqual(['seo_h1'])
    expect(fails[0].hint).toBe('H1 2개')
    expect(meta.seo_h1).toEqual({ label: '#16 H1', cat: 'seo' })   // checkMeta 부수 채움
    expect(meta.seo_title).toBeUndefined()                          // pass 는 메타 미등록
  })

  it('hint 없으면 빈 문자열, item null 은 건너뜀', () => {
    const s = score({ seo: { seo_h1: { pass: false }, broken: null } })
    const fails = collectFails(s, {})
    expect(fails).toEqual([{ id: 'seo_h1', hint: '' }])
  })
})

describe('collectChecks', () => {
  it('applicable 한 PASS + FAIL 모두 수집 (na/null 만 제외), PASS 는 hint 없음', () => {
    const s = score({
      seo: {
        seo_h1: { pass: false, na: false, label: '#16 H1', hint: 'H1 2개' },  // FAIL → hint
        seo_title: { pass: true, label: '#12 Title' },                        // PASS → hint ''
        seo_canonical: { pass: null, label: '#13 Canonical' },                // null → 제외
      },
      ai: {
        ai_faq_block: { pass: false, na: true, label: '#32 FAQ' },            // na → 제외
      },
    })
    const meta = {}
    const checks = collectChecks(s, meta)
    expect(checks.map(c => c.id).sort()).toEqual(['seo_h1', 'seo_title'])
    const h1 = checks.find(c => c.id === 'seo_h1')
    const title = checks.find(c => c.id === 'seo_title')
    expect(h1).toEqual({ id: 'seo_h1', pass: false, hint: 'H1 2개' })
    expect(title).toEqual({ id: 'seo_title', pass: true, hint: '' })
    expect(meta.seo_title).toEqual({ label: '#12 Title', cat: 'seo' })  // PASS 도 메타 등록(필터 드롭다운용)
    expect(meta.seo_canonical).toBeUndefined()                          // na/null 은 미등록
  })
})

describe('isFetchFailed', () => {
  it('ai_status_200 이 FAIL 이면 fetch 실패로 판정(개선 목록 제외 대상)', () => {
    expect(isFetchFailed(score({ ai: { ai_status_200: { pass: false } } }))).toBe(true)
  })
  it('ai_status_200 통과/부재면 정상 페이지', () => {
    expect(isFetchFailed(score({ ai: { ai_status_200: { pass: true } } }))).toBe(false)
    expect(isFetchFailed(score({}))).toBe(false)
  })
})

// ── SCORING_OVERRIDE (대시보드 채점 재정의) ────────────────────────────────
// #1 TTFB 1800ms / #4 Cache-Control max-age 설정만 확인 / #8 Render Blocking 채점 제외.
const perfScore = (items) => ({
  total: 0,
  breakdown: {
    performance: { points: 0, max: 100, passed: 0, total: 0, items },
    accessibility: { points: 0, max: 100, passed: 0, total: 0, items: {} },
    seo: { points: 0, max: 100, passed: 0, total: 0, items: {} },
    ai_readiness: { points: 0, max: 100, passed: 0, total: 0, items: {} },
  },
})

describe('applyScoringOverride — #1 TTFB < 1800ms', () => {
  it('600~1800ms 는 원본 FAIL 이었어도 PASS 로 뒤집힌다', () => {
    const s = perfScore({ perf_ttfb: { label: '#1 TTFB < 600ms', pass: false, value: '873ms', hint: 'TTFB 873ms — 600ms 미만 필요' } })
    applyScoringOverride(s)
    const it = s.breakdown.performance.items.perf_ttfb
    expect(it.pass).toBe(true)
    expect(it.hint).toBeNull()
    expect(it.label).toBe('#1 TTFB < 1800ms')   // 라벨도 새 기준으로 표기
  })

  it('1800ms 이상은 FAIL 유지 + hint 가 새 임계값을 표기', () => {
    const s = perfScore({ perf_ttfb: { label: '#1 TTFB < 600ms', pass: false, value: '1949ms', hint: 'TTFB 1949ms — 600ms 미만 필요' } })
    applyScoringOverride(s)
    const it = s.breakdown.performance.items.perf_ttfb
    expect(it.pass).toBe(false)
    expect(it.hint).toBe('TTFB 1949ms — 1800ms 미만 필요')
  })

  it('측정 불가(value null) 는 원본 판정을 유지', () => {
    const s = perfScore({ perf_ttfb: { label: '#1 TTFB < 600ms', pass: false, value: null, hint: 'TTFB 측정 불가' } })
    applyScoringOverride(s)
    expect(s.breakdown.performance.items.perf_ttfb.pass).toBe(false)
  })
})

describe('applyScoringOverride — #4 Cache-Control', () => {
  it('no-cache/no-store 가 섞여도 max-age 가 설정돼 있으면 PASS (원본 FAIL 회귀 수리)', () => {
    const s = perfScore({ perf_cache_control: { pass: false, value: 'max-age=0, no-cache, no-store', hint: 'Cache-Control 부재 또는 no-store/no-cache.' } })
    applyScoringOverride(s)
    expect(s.breakdown.performance.items.perf_cache_control.pass).toBe(true)
  })

  it('max-age 디렉티브가 없으면 FAIL', () => {
    const s = perfScore({ perf_cache_control: { pass: false, value: 'no-cache, no-store', hint: '' } })
    applyScoringOverride(s)
    const it = s.breakdown.performance.items.perf_cache_control
    expect(it.pass).toBe(false)
    expect(it.hint).toBe('Cache-Control 에 max-age 디렉티브가 없습니다.')
  })

  it('헤더 자체가 없으면(value null) FAIL', () => {
    const s = perfScore({ perf_cache_control: { pass: false, value: null, hint: '' } })
    applyScoringOverride(s)
    expect(s.breakdown.performance.items.perf_cache_control.pass).toBe(false)
  })
})

describe('applyScoringOverride — #8 Render Blocking 채점 제외', () => {
  it('na:true 로 바뀌어 분모(applicable)에서도 빠진다', () => {
    const s = perfScore({
      perf_render_block: { pass: false, value: '3개', hint: 'head 내 blocking script 3개' },
      perf_compression: { pass: true, value: 'gzip', hint: null },
    })
    applyScoringOverride(s)
    expect(s.breakdown.performance.items.perf_render_block.na).toBe(true)
    expect(s.breakdown.performance.total).toBe(1)     // compression 만 적용
    expect(s.breakdown.performance.passed).toBe(1)
    expect(s.breakdown.performance.points).toBe(100)
    // collectChecks 도 na 항목을 제외 → 통과율 표/Raw 데이터에서 사라짐
    expect(collectChecks(s, {}).map(c => c.id)).toEqual(['perf_compression'])
  })
})

describe('applyScoringOverride — 총점 재계산', () => {
  it('전 카테고리 통과항목 합 / 적용항목 합 (analyzer.py 와 동일 산식) + 등급', () => {
    const s = perfScore({
      perf_ttfb: { pass: false, value: '900ms', hint: '' },            // → PASS (1800 기준)
      perf_cache_control: { pass: false, value: 'max-age=0, no-store', hint: '' },  // → PASS
      perf_render_block: { pass: false, value: '2개', hint: '' },      // → 제외
      perf_compression: { pass: true, value: 'gzip', hint: null },     // PASS
      perf_html_size: { pass: false, value: '1360.1KB', hint: '' },    // FAIL 유지
    })
    s.breakdown.seo.items = { seo_h1: { pass: true }, seo_title: { pass: false } }
    applyScoringOverride(s)
    expect(s.breakdown.performance.passed).toBe(3)
    expect(s.breakdown.performance.total).toBe(4)
    expect(s.breakdown.performance.points).toBe(75)
    expect(s.total).toBe(67)          // (3+1)/(4+2) = 66.67 → 67
    expect(s.grade).toBe('Need Improvement')
  })

  it('80점 이상은 Good, 60점 미만은 Poor', () => {
    const good = perfScore({ a: { pass: true }, b: { pass: true }, c: { pass: true }, d: { pass: true }, e: { pass: false } })
    applyScoringOverride(good)
    expect(good.total).toBe(80)
    expect(good.grade).toBe('Good')
    const poor = perfScore({ a: { pass: true }, b: { pass: false }, c: { pass: false } })
    applyScoringOverride(poor)
    expect(poor.total).toBe(33)
    expect(poor.grade).toBe('Poor')
  })
})
