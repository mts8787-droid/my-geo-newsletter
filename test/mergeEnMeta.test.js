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

describe('제품 카드 V4 — 경합 표기 (경쟁비 ≤ 0.05)', () => {
  const mk = (score, comp) => ({
    id: 'dw', bu: 'HS', kr: '식기세척기', label: '식기세척기', score, prev: score,
    vsComp: comp, compName: 'Bosch', status: 'critical', weekly: [score], monthlyScores: [],
    cntyRows: [{ country: 'DE', score, compScore: comp, compName: 'Bosch' }],
  })
  const render = async (p, ver) => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    return generateEmailHTML({}, { score: 40 }, [p], [], {}, 'ko', [], [],
      { productCardVersion: ver, unlaunchedMap: {} })
  }
  it('경쟁비 0.03 → 경합 배지 + 검은색', async () => {
    const html = await render(mk(1.2, 40.0), 'v4')
    expect(html).toContain('경합')
    expect(html).toContain('#1A1A1A')
  })
  it('경계값 0.05 는 포함, 0.06 은 제외', async () => {
    expect(await render(mk(2.0, 40.0), 'v4')).toContain('경합')   // 0.050
    expect(await render(mk(2.4, 40.0), 'v4')).not.toContain('경합') // 0.060
  })
  it('V3 는 경합 표기를 하지 않는다 (V4 전용)', async () => {
    expect(await render(mk(1.2, 40.0), 'v3')).not.toContain('경합')
  })
  it('EN 은 Tie 로 표기', async () => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    const html = generateEmailHTML({}, { score: 40 }, [mk(1.2, 40.0)], [], {}, 'en', [], [],
      { productCardVersion: 'v4', unlaunchedMap: {} })
    expect(html).toContain('Tie')
  })
})

describe('SECTION_GROUPS — 섹션 표시 토글 영역 분류', () => {
  const ALL = ['showTotal', 'showTotalInsight', 'showInsightV2', 'showInsightV3', 'showHighlight',
    'showReadability', 'showProducts', 'showCnty', 'showCitations', 'showCitCnty', 'showCitPrd',
    'showTouchPointsBump', 'showTouchPointsBumpChatGpt', 'showDomainBumpModels', 'showLlmShare',
    'showDotcom', 'showDotcomChatGpt', 'showTodo', 'showTodoV2']
  const load = async () => (await import('../src/shared/Sidebar.jsx')).SECTION_GROUPS
  it('토글이 하나도 유실·중복되지 않는다', async () => {
    const keys = (await load()).flatMap(g => g.items.map(i => i.key))
    expect(new Set(keys).size).toBe(keys.length)
    expect(keys.sort()).toEqual([...ALL].sort())
  })
  it('제품 카드 계열은 비저빌리티에 모인다', async () => {
    const g = (await load()).find(x => x.label === '비저빌리티')
    expect(g.items.map(i => i.key)).toContain('showProducts')
    expect(g.items.map(i => i.key)).toContain('showCnty')
  })
  it('범프차트 계열은 사이테이션에 모인다', async () => {
    const keys = (await load()).find(x => x.label === '사이테이션').items.map(i => i.key)
    expect(keys).toContain('showTouchPointsBump')
    expect(keys).toContain('showTouchPointsBumpChatGpt')
    expect(keys).toContain('showDomainBumpModels')
  })
})
