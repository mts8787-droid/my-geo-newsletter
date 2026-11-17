import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { translateHint, localizeChecksDoc, untranslatedHints } from '../src/shared/readabilityHintEn.js'

const DIR = join(process.cwd(), 'data/readability')
const files = readdirSync(DIR).filter(f => /^checks-\d{4}-\d{2}-\d{2}\.json$/.test(f))

describe('readability Raw 데이터 EN 변환', () => {
  it('정형 문구 + 모델 제외 사유 번역', () => {
    expect(translateHint('인용 가능 문장 2개 — 5개 이상 필요 (모델 제외 사유: 질문, 내비게이션 텍스트)'))
      .toBe('Citable sentences: 2 — 5 or more required (excluded by model: question, navigation text)')
    expect(translateHint("9개 요소에 'alt' 속성이 없습니다.")).toBe("9 elements are missing the 'alt' attribute.")
    expect(translateHint('')).toBe('')
  })

  it('사전에 없는 사유는 단어 치환 근사 (원문 삭제 X)', () => {
    expect(translateHint('정의문 0건 — 1건 이상 필요 (모델 제외 사유: 신규 마케팅 문구)'))
      .toBe('Definition sentences: 0 — 1 or more required (excluded by model: 신규 marketing text)')
  })

  it('KO 요청은 원본 그대로', () => {
    const doc = { hints: ['질문'], pageTypes: { plp: '제품 카테고리 (PLP)' } }
    expect(localizeChecksDoc(doc, 'ko')).toBe(doc)
  })

  it.each(files)('%s — 번역 후 한글은 검출 키워드 목록만 남는다', (f) => {
    const doc = JSON.parse(readFileSync(join(DIR, f), 'utf8'))
    const left = untranslatedHints(doc.hints)
    expect(left.filter(h => !h.startsWith('No element containing the keywords ('))).toEqual([])
    const en = localizeChecksDoc(doc, 'en')
    expect(Object.values(en.pageTypes).filter(v => /[가-힣]/.test(v))).toEqual([])
    expect(Object.values(en.checks).filter(c => /[가-힣]/.test(c.label)).map(c => c.label)).toEqual([])
  })
})
