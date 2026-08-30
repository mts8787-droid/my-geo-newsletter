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
  it('경쟁비 관련 %p 꼬리표는 더 이상 붙지 않는다', async () => {
    const html = await render(mk(24.0, 40.0), 'v1')
    expect(html).not.toMatch(/\([\d.]+\)\s*<span[^>]*>[+-]\d+%p/)
  })
  it('경쟁비 0.03 → 경합 배지 + 검은색', async () => {
    const html = await render(mk(1.2, 40.0), 'v4')
    expect(html).toContain('경합')
    expect(html).toContain('#1A1A1A')
  })
  it('경계값 0.05 는 포함, 0.06 은 제외', async () => {
    expect(await render(mk(2.0, 40.0), 'v4')).toContain('경합')   // 0.050
    expect(await render(mk(2.4, 40.0), 'v4')).not.toContain('경합') // 0.060
  })
  it('V1 은 경합 표기를 하지 않는다 (V4 전용)', async () => {
    expect(await render(mk(1.2, 40.0), 'v1')).not.toContain('경합')
  })
  it('EN 은 Tie 로 표기', async () => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    const html = generateEmailHTML({}, { score: 40 }, [mk(1.2, 40.0)], [], {}, 'en', [], [],
      { productCardVersion: 'v4', unlaunchedMap: {} })
    expect(html).toContain('Tie')
  })
})

describe('SECTION_GROUPS — 섹션 표시 토글 영역 분류', () => {
  const ALL = ['showProducts', 'showCnty', 'showCitations', 'showCitCnty', 'showCitPrd',
    'showTouchPointsBump', 'showTouchPointsBumpChatGpt', 'showDomainBumpModels', 'showLlmShare',
    'showDotcom', 'showDotcomChatGpt', 'showTodo', 'showTodoV2']
  const load = async () => (await import('../src/shared/Sidebar.jsx')).SECTION_GROUPS
  it('토글이 하나도 유실·중복되지 않는다', async () => {
    const keys = (await load()).flatMap(g => g.items.map(i => i.key))
    expect(new Set(keys).size).toBe(keys.length)
    expect(keys.sort()).toEqual([...ALL].sort())
  })
  it('제품 카드 계열은 비저빌리티에 모인다 (GEO 지수는 Exec Summary 로 이관)', async () => {
    const g = (await load()).find(x => x.label === '비저빌리티')
    expect(g.items.map(i => i.key)).toEqual(['showProducts', 'showCnty'])
  })
  it('월별 변형은 드롭다운으로 — 토글 그리드에 남아있지 않다', async () => {
    const keys = (await load()).flatMap(g => g.items.map(i => i.key))
    for (const k of ['showTotal', 'showTotalInsight', 'showInsightV2', 'showInsightV3',
      'showHighlight', 'showReadability']) expect(keys).not.toContain(k)
  })
  it('7월 하이라이트는 Highlight + Readability 를 함께 켠다', async () => {
    const { HIGHLIGHT_VARIANTS } = await import('../src/shared/Sidebar.jsx')
    const jul = HIGHLIGHT_VARIANTS.find(v => v.value === '2026-07')
    expect(jul.keys.sort()).toEqual(['showHighlight', 'showReadability'])
    expect(jul.label).toBe('7월 하이라이트')
  })
  it('8월 Executive Summary 가 GEO 지수를 흡수한다', async () => {
    const { EXEC_VARIANTS } = await import('../src/shared/Sidebar.jsx')
    const aug = EXEC_VARIANTS.find(v => v.value === '2026-08')
    expect(aug.keys).toContain('showInsightV3')
    expect(aug.keys).toContain('showTotal')
    // 번호 항목 위 자유 텍스트(totalInsight) 도 같이 살아나야 한다
    expect(aug.keys).toContain('showTotalInsight')
  })
  it('8월 선택 시 번호 항목 위 텍스트 블록이 렌더된다', async () => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    const { EXEC_VARIANTS } = await import('../src/shared/Sidebar.jsx')
    const meta = { totalInsight: '상반기 GEO 성과 요약 문장입니다.' }
    EXEC_VARIANTS.find(v => v.value === '2026-08').keys.forEach(k => { meta[k] = true })
    const html = generateEmailHTML(meta, { score: 43 }, [], [], {}, 'ko', [], [], { unlaunchedMap: {} })
    expect(html).toContain('상반기 GEO 성과 요약 문장입니다.')
  })
  it('범프차트 계열은 사이테이션에 모인다', async () => {
    const keys = (await load()).find(x => x.label === '사이테이션').items.map(i => i.key)
    expect(keys).toContain('showTouchPointsBump')
    expect(keys).toContain('showTouchPointsBumpChatGpt')
    expect(keys).toContain('showDomainBumpModels')
  })
})

describe('MoM — score·prev 계열 일치', () => {
  const render = async (p) => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    return generateEmailHTML({}, { score: 40 }, [p], [], {}, 'ko', [], [],
      { productCardVersion: 'v1', trendMode: 'monthly', unlaunchedMap: {} })
  }
  const tv = extra => ({
    id: 'tv', bu: 'MS', kr: 'TV', label: 'TV', score: 87.3, prev: 87.5,
    vsComp: 89.1, compName: 'Samsung', status: 'behind', weekly: [], ...extra,
  })
  it('monthlyScores 인접 두 달로 MoM 을 낸다 (요약값과 어긋나도)', async () => {
    // 시트 요약값(monthlyPrev)이 3개월 전 값으로 잘못 들어온 상황
    const html = await render(tv({
      monthlyScores: [
        { date: '26년 5월', score: 80.0 },
        { date: '26년 6월', score: 88.1 },
        { date: '26년 7월', score: 87.3 },
      ],
      monthlyScore: 87.3, monthlyPrev: 80.0,
    }))
    const mom = html.replace(/<[^>]+>/g, ' ').match(/MoM\s*[▲▼]?\s*[\d.]+%p/)
    expect(mom).not.toBeNull()
    expect(mom[0]).toMatch(/0\.8%p/)   // 87.3 - 88.1 = -0.8 (인접 월)
    expect(mom[0]).not.toMatch(/7\.3%p/) // 87.3 - 80.0 = +7.3 (건너뛴 월) 이면 오류
  })
  it('유효 월이 1개뿐이면 요약값 쌍으로 폴백', async () => {
    const html = await render(tv({
      monthlyScores: [{ date: '26년 7월', score: 87.3 }],
      monthlyScore: 87.3, monthlyPrev: 87.5,
    }))
    expect(html).toContain('MoM')
  })
})

describe('MoM 반올림 — 표시값 기준', () => {
  it('TV 87.2 vs 87.25 → ▼0.1%p (음수 0 아님)', async () => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    const p = { id: 'tv', bu: 'MS', kr: 'TV', label: 'TV', score: 87.2, prev: 87.25,
      vsComp: 88.4, compName: 'Samsung', status: 'behind', weekly: [],
      monthlyScores: [{ date: '26년 6월', score: 87.25 }, { date: '26년 7월', score: 87.2 }],
      monthlyScore: 87.2, monthlyPrev: 87.25 }
    const html = generateEmailHTML({}, { score: 43 }, [p], [], {}, 'ko', [], [],
      { productCardVersion: 'v1', trendMode: 'monthly', unlaunchedMap: {} })
    const mom = html.replace(/<[^>]+>/g, ' ').match(/MoM\s*([─▲▼])\s*([\d.]+)%p/)
    expect(mom[1]).toBe('▼')
    expect(mom[2]).toBe('0.1')
  })
})

describe('Readability 채점 항목 — 38항목 체계 고정', () => {
  // 스냅샷 경로는 파일 기준 절대경로로 — cwd 에 의존하면 실행 위치에 따라 깨진다
  const loadSnap = async () => {
    const fs = await import('fs')
    const { fileURLToPath } = await import('url')
    const { dirname, join } = await import('path')
    const root = join(dirname(fileURLToPath(import.meta.url)), '..')
    return JSON.parse(fs.readFileSync(join(root, 'data/readability/2026-08-30.json'), 'utf8'))
  }
  it('제외 4건이 스냅샷에 없고 총 38항목이다', async () => {
    const snap = await loadSnap()
    const ids = Object.keys(snap.overall.checks)
    for (const k of ['perf_html_size', 'perf_render_block', 'ai_summary_ssr', 'ai_schema_website'])
      expect(ids).not.toContain(k)
    expect(ids.length).toBe(38)
  })
  it('제외 페이지타입이 집계에 없다', async () => {
    const snap = await loadSnap()
    const pts = Object.keys(snap.overall.pageTypes)
    for (const k of ['unknown', 'home', 'business', 'promotion']) expect(pts).not.toContain(k)
  })
})

// A안 — 대시보드(스냅샷)와 뉴스레터 본문 수치가 항상 같아야 한다 (사용자 결정 2026-08-30).
// 새 스냅샷이 들어오면 이 테스트가 먼저 깨져서 본문 갱신 누락을 잡는다.
describe('뉴스레터 본문 ↔ 최신 스냅샷 수치 일치', () => {
  const load = async () => {
    const fs = await import('fs')
    const { fileURLToPath } = await import('url')
    const { dirname, join } = await import('path')
    const root = join(dirname(fileURLToPath(import.meta.url)), '..')
    const idx = JSON.parse(fs.readFileSync(join(root, 'data/readability/index.json'), 'utf8'))
    const latest = idx.snapshots[idx.snapshots.length - 1].date
    const snap = JSON.parse(fs.readFileSync(join(root, `data/readability/${latest}.json`), 'utf8'))
    const src = fs.readFileSync(join(root, 'src/emailTemplate.js'), 'utf8')
    const body = src.slice(src.indexOf('const RD_TEXT ='), src.indexOf('// Readability Highlight 섹션 본체'))
    return { snap, body, latest }
  }
  it('총점이 본문에 그대로 인용돼 있다', async () => {
    const { snap, body } = await load()
    expect(body).toContain(String(snap.overall.avgScore))
  })
  it('6개 영역 점수가 모두 본문에 인용돼 있다', async () => {
    const { snap, body } = await load()
    const missing = Object.entries(snap.overall.categories)
      .filter(([, v]) => !body.includes(v.toFixed(1)) && !body.includes(String(v)))
      .map(([k, v]) => `${k}=${v}`)
    expect(missing).toEqual([])
  })
  it('평가 페이지 수가 본문에 인용돼 있다', async () => {
    const { snap, body } = await load()
    expect(body).toContain(snap.overall.urlCount.toLocaleString('en-US'))
  })
})

describe('개선 가이드 — 체크 × 페이지타입', () => {
  const load = async () => {
    const fs = await import('fs')
    const { fileURLToPath } = await import('url')
    const { dirname, join } = await import('path')
    const root = join(dirname(fileURLToPath(import.meta.url)), '..')
    const idx = JSON.parse(fs.readFileSync(join(root, 'data/readability/index.json'), 'utf8'))
    const d = idx.snapshots[idx.snapshots.length - 1].date
    return JSON.parse(fs.readFileSync(join(root, `data/readability/${d}.json`), 'utf8'))
  }
  it('스냅샷의 모든 체크에 가이드가 있다', async () => {
    const { GUIDE } = await import('../src/shared/readabilityGuide.js')
    const snap = await load()
    const missing = Object.keys(snap.overall.checks).filter(c => !GUIDE[c])
    expect(missing).toEqual([])
  })
  it('가이드에 스냅샷에 없는 체크가 없다', async () => {
    const { GUIDE } = await import('../src/shared/readabilityGuide.js')
    const snap = await load()
    const ids = Object.keys(snap.overall.checks)
    expect(Object.keys(GUIDE).filter(c => !ids.includes(c))).toEqual([])
  })
  it('모든 항목이 what·why·where·action 을 갖는다', async () => {
    const { GUIDE } = await import('../src/shared/readabilityGuide.js')
    const bad = Object.entries(GUIDE)
      .filter(([, g]) => !g.what || !g.why || !g.where || !g.action).map(([k]) => k)
    expect(bad).toEqual([])
  })
  it('6개 평가 영역 설명이 모두 있다', async () => {
    const { CATEGORY_GUIDE } = await import('../src/shared/readabilityGuide.js')
    const snap = await load()
    const cats = [...new Set(Object.values(snap.overall.checks).map(c => c.cat))]
    expect(cats.filter(c => !CATEGORY_GUIDE[c])).toEqual([])
    expect(Object.values(CATEGORY_GUIDE).filter(g => !g.what || !g.why)).toEqual([])
  })
  it('페이지타입 오버라이드가 어디/조치를 바꾼다', async () => {
    const { guideFor, GUIDE } = await import('../src/shared/readabilityGuide.js')
    const pdp = guideFor('ai_ssr_ratio', 'pdp')
    expect(pdp.action).not.toBe(GUIDE.ai_ssr_ratio.action)
    expect(pdp.where).not.toBe(GUIDE.ai_ssr_ratio.where)
    // 오버라이드 없는 타입은 기본값
    expect(guideFor('ai_ssr_ratio', 'plp').action).toBe(GUIDE.ai_ssr_ratio.action)
    expect(guideFor('없는체크', 'pdp')).toBeNull()
  })
  it('byPt 키가 실제 페이지타입 id 여야 한다', async () => {
    const { GUIDE, PT_LABEL } = await import('../src/shared/readabilityGuide.js')
    const bad = []
    Object.entries(GUIDE).forEach(([cid, g]) =>
      Object.keys(g.byPt || {}).forEach(pt => { if (!PT_LABEL[pt]) bad.push(`${cid}.${pt}`) }))
    expect(bad).toEqual([])
  })
})

describe('개선 가이드 — 필터 조건부 문장', () => {
  const G = async () => await import('../src/shared/readabilityGuide.js')
  it('국가 조건(cc)에 맞을 때만 문장이 나온다', async () => {
    const { guideFor, GUIDE } = await G()
    const only = GUIDE.ai_schema_product.notes.find(n => n.cc && n.cc.includes('us')).text
    expect(guideFor('ai_schema_product', 'pdp', 'us').notes).toContain(only)
    expect(guideFor('ai_schema_product', 'pdp', 'de').notes).not.toContain(only)
  })
  it('제외 조건(ccNot)은 해당 국가에서만 숨는다', async () => {
    const { guideFor, GUIDE } = await G()
    // 문구가 바뀌어도 깨지지 않도록 ccNot 노트 본문을 정의에서 직접 가져와 비교
    const excl = GUIDE.ai_schema_product.notes.find(n => n.ccNot).text
    expect(guideFor('ai_schema_product', 'pdp', 'de').notes).toContain(excl)
    expect(guideFor('ai_schema_product', 'pdp', 'us').notes).not.toContain(excl)
  })
  it('국가 미선택(전체)이면 cc·ccNot 문장 모두 숨는다', async () => {
    const { guideFor, GUIDE } = await G()
    const n = guideFor('ai_schema_product', 'pdp', null).notes
    GUIDE.ai_schema_product.notes.filter(x => x.cc || x.ccNot)
      .forEach(x => expect(n).not.toContain(x.text))
  })
  it('페이지타입 조건(pt)도 독립적으로 걸린다', async () => {
    const { guideFor } = await G()
    expect(guideFor('ai_schema_product', 'pdp', 'de').notes.join(' ')).toContain('소문자 product')
    expect(guideFor('ai_schema_product', null, 'de').notes.join(' ')).not.toContain('소문자 product')
  })
  it('byCc 가 있으면 base 를, byPt 가 있으면 byCc 를 이긴다', async () => {
    const { guideFor, GUIDE } = await G()
    expect(guideFor('ai_ssr_ratio', 'pdp', 'us').action).toBe(GUIDE.ai_ssr_ratio.byPt.pdp.action)
    expect(guideFor('ai_ssr_ratio', null, 'us').action).toBe(GUIDE.ai_ssr_ratio.action)
  })
  it('notes 의 cc·ccNot·pt 키가 실제 코드여야 한다', async () => {
    const { GUIDE, PT_LABEL } = await G()
    const { CC_NAME } = await import('../scripts/readability-cc.mjs')
    const bad = []
    Object.entries(GUIDE).forEach(([cid, g]) => (g.notes || []).forEach((n, i) => {
      ;[...(n.cc || []), ...(n.ccNot || [])].forEach(c => { if (!CC_NAME[c]) bad.push(`${cid}.notes[${i}].cc=${c}`) })
      ;(n.pt || []).forEach(p => { if (!PT_LABEL[p]) bad.push(`${cid}.notes[${i}].pt=${p}`) })
      if (!n.text) bad.push(`${cid}.notes[${i}] text 없음`)
    }))
    expect(bad).toEqual([])
  })
})

describe('개선 가이드 — 실측 수치 하드코딩 금지', () => {
  // 통과율 같은 실측치를 문구에 박으면 데이터 갱신 때마다 어긋난다.
  // 현재 수치는 대시보드 autoNotes 가 스냅샷에서 계산해 '현재 위치' 줄로 보여준다.
  // what 은 기준값(예: "60% 이상")을 담으므로 검사 대상에서 제외.
  it('action·notes 에 % 수치가 없다', async () => {
    const { GUIDE } = await import('../src/shared/readabilityGuide.js')
    const bad = []
    Object.entries(GUIDE).forEach(([cid, g]) => {
      const texts = [g.action, ...Object.values(g.byPt || {}).map(o => o.action),
        ...Object.values(g.byCc || {}).map(o => o.action),
        ...(g.notes || []).map(n => n.text)].filter(Boolean)
      texts.forEach(t => { if (/\d+(\.\d+)?%/.test(t)) bad.push(`${cid}: ${t.slice(0, 40)}`) })
    })
    expect(bad).toEqual([])
  })
})

describe('대시보드 클라이언트 — 스코프 회귀 방지', () => {
  // 클라이언트 스크립트는 문자열로 임베드돼 빌드가 잡아주지 못한다.
  // renderGuideSection 이 renderCategoryCards 안에 중첩된 stripParens 를 호출해
  // 국가별·페이지타입별 탭이 통째로 열리지 않는 회귀가 있었다 (2026-08-30).
  it('클라이언트 최상위 함수가 다른 함수 안에 중첩된 헬퍼를 부르지 않는다', async () => {
    const fs = await import('fs')
    const { fileURLToPath } = await import('url')
    const { dirname, join } = await import('path')
    const root = join(dirname(fileURLToPath(import.meta.url)), '..')
    const src = fs.readFileSync(join(root, 'scripts/render-readability.mjs'), 'utf8')
    const cli = src.slice(src.indexOf('function readabilityClient()'))
    // 최상위(들여쓰기 2칸) 함수들을 본문째로 자른다
    const tops = [...cli.matchAll(/^ {2}function (\w+)\s*\([\s\S]*?\n {2}\}/gm)]
      .map(m => ({ name: m[1], body: m[0] }))
    // 각 최상위 함수 안에 중첩된(4칸 이상) 헬퍼 이름 수집 → 소유자 기록
    const owner = {}
    tops.forEach(t => {
      ;[...t.body.matchAll(/^ {4,}function (\w+)\s*\(/gm)].forEach(m => { owner[m[1]] = t.name })
    })
    // 소유자가 아닌 다른 최상위 함수가 그 헬퍼를 호출하면 ReferenceError
    const bad = []
    tops.forEach(t => {
      Object.entries(owner).forEach(([helper, own]) => {
        if (own === t.name) return
        if (new RegExp('\\b' + helper + '\\s*\\(').test(t.body)) bad.push(`${t.name} → ${helper} (정의: ${own} 내부)`)
      })
    })
    expect(bad).toEqual([])
  })
})
