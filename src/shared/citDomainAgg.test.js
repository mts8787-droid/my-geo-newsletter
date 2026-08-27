import { describe, it, expect } from 'vitest'
import { mergeCitDomainRows, isTtlPrdVal, isTtlLlmVal, isTtlCntyVal } from './citDomainAgg.js'

// 회귀 배경: parseCitDomain v3 는 (cnty|domain|type|prd|llm) 조합마다 1행을 낸다.
// 렌더 직전 도메인 단위 병합을 빼먹으면 같은 도메인이 2회 노출되고 (rtings 2번),
// ratio 분모까지 부풀려져 모든 % 가 틀어진다.

describe('isTtlPrdVal', () => {
  it('빈 값 / TTL / TOTAL 은 TTL 로 판정', () => {
    expect(isTtlPrdVal(undefined)).toBe(true)
    expect(isTtlPrdVal(null)).toBe(true)
    expect(isTtlPrdVal('')).toBe(true)
    expect(isTtlPrdVal(' ttl ')).toBe(true)
    expect(isTtlPrdVal('Total')).toBe(true)
  })
  it('PRD-specific 코드는 TTL 아님', () => {
    expect(isTtlPrdVal('TV')).toBe(false)
    expect(isTtlPrdVal('REF')).toBe(false)
  })
})

describe('isTtlLlmVal', () => {
  it('llm 필드가 없으면 TTL 취급 (result 행에 llm 미포함)', () => {
    expect(isTtlLlmVal(undefined)).toBe(true)
  })
  it('total / all / ttl 은 TTL', () => {
    expect(isTtlLlmVal('Total')).toBe(true)
    expect(isTtlLlmVal('ALL')).toBe(true)
  })
  it('모델별 값은 TTL 아님', () => {
    expect(isTtlLlmVal('ChatGPT')).toBe(false)
    expect(isTtlLlmVal('Gemini')).toBe(false)
  })
})

describe('isTtlCntyVal', () => {
  it('TTL / Global / 전체 류 판정', () => {
    expect(isTtlCntyVal('TTL')).toBe(true)
    expect(isTtlCntyVal('global')).toBe(true)
    expect(isTtlCntyVal('전체')).toBe(true)
    expect(isTtlCntyVal('US')).toBe(false)
  })
})

describe('mergeCitDomainRows', () => {
  it('type 표기가 다른 복수 TTL 행을 도메인 단위로 합산 — 중복 노출 방지 (rtings 회귀)', () => {
    const rows = [
      { cnty: 'TTL', domain: 'rtings', type: 'Review', prd: 'TTL', citations: 30 },
      { cnty: 'TTL', domain: 'rtings', type: 'review', prd: 'TTL', citations: 70 },
      { cnty: 'TTL', domain: 'cnet', type: 'Media', prd: 'TTL', citations: 50 },
    ]
    const out = mergeCitDomainRows(rows)
    expect(out).toHaveLength(2)
    expect(out.filter(r => r.domain === 'rtings')).toHaveLength(1)
    expect(out[0]).toMatchObject({ domain: 'rtings', citations: 100, rank: 1 })
    expect(out[1]).toMatchObject({ domain: 'cnet', citations: 50, rank: 2 })
  })

  it('최대 기여 행의 type 을 대표 type 으로 채택', () => {
    const out = mergeCitDomainRows([
      { cnty: 'TTL', domain: 'rtings', type: 'Media', prd: 'TTL', citations: 10 },
      { cnty: 'TTL', domain: 'rtings', type: 'Review', prd: 'TTL', citations: 90 },
    ])
    expect(out[0].type).toBe('Review')
  })

  it('TTL 행이 있으면 PRD-specific 행은 합산에서 제외 — 이중 계상 방지', () => {
    const out = mergeCitDomainRows([
      { cnty: 'TTL', domain: 'rtings', type: 'Review', prd: 'TTL', citations: 100 },
      { cnty: 'TTL', domain: 'rtings', type: 'Review', prd: 'TV', citations: 60 },
      { cnty: 'TTL', domain: 'rtings', type: 'Review', prd: 'REF', citations: 40 },
    ])
    expect(out).toHaveLength(1)
    expect(out[0].citations).toBe(100)
  })

  it('TTL 행이 없으면 PRD-specific 행 합산으로 폴백', () => {
    const out = mergeCitDomainRows([
      { cnty: 'US', domain: 'rtings', type: 'Review', prd: 'TV', citations: 60 },
      { cnty: 'US', domain: 'rtings', type: 'Review', prd: 'REF', citations: 40 },
    ])
    expect(out).toHaveLength(1)
    expect(out[0].citations).toBe(100)
  })

  it('citations 내림차순 정렬 + rank 재부여 (파서의 stale rank 무시)', () => {
    const out = mergeCitDomainRows([
      { cnty: 'TTL', domain: 'a', prd: 'TTL', citations: 10, rank: 1 },
      { cnty: 'TTL', domain: 'b', prd: 'TTL', citations: 50, rank: 2 },
      { cnty: 'TTL', domain: 'c', prd: 'TTL', citations: 30, rank: 3 },
    ])
    expect(out.map(r => r.domain)).toEqual(['b', 'c', 'a'])
    expect(out.map(r => r.rank)).toEqual([1, 2, 3])
  })

  it('동점이면 도메인명 사전순 — 렌더 순서 안정 (비결정 출력 방지)', () => {
    const out = mergeCitDomainRows([
      { cnty: 'TTL', domain: 'zeta', prd: 'TTL', citations: 10 },
      { cnty: 'TTL', domain: 'alpha', prd: 'TTL', citations: 10 },
    ])
    expect(out.map(r => r.domain)).toEqual(['alpha', 'zeta'])
  })

  it('citations 0 / 음수 / 도메인 없는 행은 제외', () => {
    const out = mergeCitDomainRows([
      { cnty: 'TTL', domain: 'a', prd: 'TTL', citations: 0 },
      { cnty: 'TTL', domain: '', prd: 'TTL', citations: 50 },
      { cnty: 'TTL', domain: 'b', prd: 'TTL', citations: 20 },
      null,
    ])
    expect(out).toHaveLength(1)
    expect(out[0].domain).toBe('b')
  })

  it('빈 입력 / null 입력은 빈 배열', () => {
    expect(mergeCitDomainRows([])).toEqual([])
    expect(mergeCitDomainRows(null)).toEqual([])
    expect(mergeCitDomainRows(undefined)).toEqual([])
  })

  it('입력 배열을 in-place 변형하지 않음 (호출자 cntyMap 오염 방지)', () => {
    const rows = [
      { cnty: 'TTL', domain: 'a', prd: 'TTL', citations: 10 },
      { cnty: 'TTL', domain: 'b', prd: 'TTL', citations: 50 },
    ]
    mergeCitDomainRows(rows)
    expect(rows.map(r => r.domain)).toEqual(['a', 'b'])
  })
})
