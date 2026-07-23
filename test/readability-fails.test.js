// 개선 항목(FAIL) 수집 로직 단위 테스트 — collectFails / isFetchFailed.
// data.md §7.7 Test-Verify-Document Loop. aggregate-readability.mjs 는 직접 실행 시에만
// main() 을 돌리므로(import.meta.url 가드) import 해도 집계가 실행되지 않는다.
import { describe, it, expect } from 'vitest'
import { collectFails, collectChecks, isFetchFailed } from '../scripts/aggregate-readability.mjs'

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
