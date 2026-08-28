import { describe, it, expect } from 'vitest'
import { mergeEnMeta } from '../src/shared/Sidebar.jsx'

describe('mergeEnMeta — 하이라이트 rd_* 동적 필드 EN 오버레이', () => {
  it('정적 목록에 없는 rd_* 라벨도 EN 값으로 덮인다', () => {
    const ko = { rd_lblCc_br: '브라질', rd_lblCat_seo: 'Basic SEO', title: '월간' }
    const en = { rd_lblCc_br: 'Brazil', title: 'Monthly' }
    const m = mergeEnMeta(ko, en)
    expect(m.rd_lblCc_br).toBe('Brazil')
    expect(m.title).toBe('Monthly')
  })
  it('EN 값이 없으면 undefined 로 두어 템플릿 EN 기본 문안이 나오게 한다', () => {
    const m = mergeEnMeta({ rd_lblPt_pdp: '제품 상세' }, {})
    expect(m.rd_lblPt_pdp).toBeUndefined()
  })
  it('구조 데이터(rd_schemaCompare)는 KO 것을 유지한다', () => {
    const rows = [{ name: 'FAQ Page', lg: 18, ss: 33 }]
    const m = mergeEnMeta({ rd_schemaCompare: rows }, {})
    expect(m.rd_schemaCompare).toBe(rows)
  })
})

describe('Readability Highlight — EN 기본 번역 내장', () => {
  it('meta 가 비어도 EN 렌더 결과에 한국어가 남지 않는다', async () => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    const rd = {
      countries: [{ cc: 'br', avgScore: 79.1 }, { cc: 'in', avgScore: 74.4 }],
      pageTypes: { support: { label: 'Support', avgScore: 80.1 } },
      categories: { performance: 98.5, geo_content: 29.7 },
      categoryLabels: { performance: '사이트 성능', geo_content: '고인용 콘텐츠' },
      overall: { avgScore: 77.5 },
    }
    const html = generateEmailHTML({ showReadability: true }, { score: 43.3 }, [], [], {}, 'en', [], [], { readability: rd })
    const body = html.replace(/<[^>]+>/g, ' ')
    expect(body).toMatch(/Readability/)
    expect(body.match(/[가-힣]/g)).toBeNull()
  })
})

describe('isEnTextField — EN 쓰기 라우팅', () => {
  it('번역 대상 텍스트는 true', async () => {
    const { isEnTextField } = await import('../src/shared/Sidebar.jsx')
    expect(isEnTextField('productInsight', 'x')).toBe(true)
    expect(isEnTextField('cntyInsight', 'x')).toBe(true)
    expect(isEnTextField('rd_lblCc_br', 'Brazil')).toBe(true)
  })
  it('토글·구조 설정은 false → KO 에 저장돼야 함', async () => {
    const { isEnTextField } = await import('../src/shared/Sidebar.jsx')
    expect(isEnTextField('showProductInsight', true)).toBe(false)
    expect(isEnTextField('showCntyInsight', false)).toBe(false)
    expect(isEnTextField('showReadability', true)).toBe(false)
    expect(isEnTextField('productCardVersion', 'v3')).toBe(false)
    expect(isEnTextField('rd_schemaCompare', [{ name: 'FAQ' }])).toBe(false)
  })
})
