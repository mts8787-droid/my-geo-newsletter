// 검수 기준 상세 — 불릿 구조 · 적용 대상/파라미터(상류 원문) · FAIL 예시 · Markdown (사용자 요청 2026-11-05
// "검수기준 더 자세히 / 판정조건 소스가 줄글이라 보기 힘들어 → 불릿·줄바꿈 / MD 다운로드").
import { describe, it, expect } from 'vitest'
import { loadRows, DOC_TO_CHECK, renderCriteriaHTML, renderCriteriaMarkdown, paramIdsFor, detailMarkdown } from '../scripts/render-criteria.mjs'
import { CRITERIA_DETAIL } from '../src/shared/readabilityCriteriaDetail.js'
import { CRITERIA_PARAMS } from '../src/shared/readabilityCriteriaParams.js'

const scored = () => loadRows().filter(r => r.no !== '예정' && (DOC_TO_CHECK[r.no] || []).length)
const isBullet = b => typeof b === 'string' ? b.trim().length > 0 : !!(b && b.li && Array.isArray(b.sub) && b.sub.length)

describe('검수 기준 상세 — 불릿 데이터', () => {
  it('채점 항목 전부 KO/EN 으로 src·logic·except·fail 불릿 배열을 갖는다', () => {
    const bad = []
    for (const r of scored()) {
      const d = CRITERIA_DETAIL[r.no]
      for (const l of ['ko', 'en']) for (const f of ['src', 'logic', 'except', 'fail']) {
        const a = d && d[l] && d[l][f]
        if (!Array.isArray(a) || !a.length || !a.every(isBullet)) bad.push(`${r.no}.${l}.${f}`)
      }
    }
    expect(bad).toEqual([])
  })
  it('채점 항목 전부 상류 scoring_config 파라미터가 있다 (#17 은 seo_indexable 로 연결)', () => {
    expect(scored().filter(r => !paramIdsFor(r.no).length).map(r => r.no)).toEqual([])
    expect(paramIdsFor('17')).toEqual(['seo_indexable'])
    expect(paramIdsFor('25')).toEqual(['ai_schema_product', 'ai_schema_offer'])
    expect(CRITERIA_PARAMS.ai_faq_block.params.class_need_question).toBe('accordion')
  })
})

describe('검수 기준 페이지 — 불릿 렌더', () => {
  const ko = renderCriteriaHTML({ rows: loadRows(), snapshot: null, withScores: false, lang: 'ko', mdHref: '/x.md' })
  it('라벨 블록 6종 + <ul> 불릿 + 하위 불릿', () => {
    for (const k of ['검수 대상', '판정 로직', '적용 대상 · N/A', '판정 파라미터', '예외 · 별도 조건', 'FAIL 예시 · 개선']) expect(ko).toContain(`<span class="d-k">${k}</span>`)
    expect(ko).toContain('<ul class="d-ul">')
    expect(ko).toMatch(/<li>세 경로 중 <b>하나라도<\/b> 충족<ul>/)   // #32 ①②③ → 하위 불릿
  })
  it('파라미터는 상류 원문 칩, 적용 대상은 페이지타입 라벨, 개선은 GUIDE action', () => {
    expect(ko).toContain('<code class="pv">accordion</code>')
    expect(ko).toContain('<span class="pt">제품 상세 (PDP)</span>')
    expect(ko).toContain('<b>개선</b> 페이지 주제와 직접 관련된 질문 3개 이상을 FAQ 형태로 추가합니다.')
  })
  it('MD 다운로드 버튼 (mdHref 가 있을 때만)', () => {
    expect(ko).toContain('<a class="md-dl" href="/x.md" download>MD 다운로드</a>')
    expect(renderCriteriaHTML({ rows: loadRows(), snapshot: null, withScores: false, lang: 'ko' })).not.toContain('class="md-dl"')
  })
})

describe('검수 기준 Markdown', () => {
  it('KO — 항목 상세가 중첩 불릿으로 들어간다', () => {
    const md = renderCriteriaMarkdown({ rows: loadRows(), generatedAt: '2026-11-05' })
    const i = md.indexOf('### #32 — ')
    const sec = md.slice(i, md.indexOf('\n### ', i + 5))
    expect(sec).toContain('- **판정 로직**\n  - 세 경로 중 **하나라도** 충족\n    - ① ')
    expect(sec).toContain('- **판정 파라미터**\n  - `ai_faq_block` · 룰 `class_id_contains`\n    - keywords: `faq`, ')
    expect(sec).toMatch(/- \*\*FAIL\*\* /)
    expect(md.replace(/`[^`\n]*`/g, '')).not.toMatch(/<\/?(?:ul|li|span|div|b)\b/)   // HTML 태그 잔존 없음 (코드 표기 제외)
    expect(sec).toContain('- **개선** 페이지 주제와 직접 관련된 질문 3개 이상을 FAQ 형태로 추가합니다.')
  })
  it('EN — 상류 원문 키워드(코드) 밖에는 한글이 없다', () => {
    const md = renderCriteriaMarkdown({ rows: loadRows(), generatedAt: '2026-11-05', lang: 'en' })
    expect(md.replace(/`[^`\n]*`/g, '').match(/[가-힣]+/g)).toBeNull()
    expect(detailMarkdown('1', 'en')[0]).toBe('- **Audit target**')
  })
})
