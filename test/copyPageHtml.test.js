import { describe, it, expect } from 'vitest'
import { mergeBilingualEmail, buildCopyPageHtml } from '../src/shared/copyPageHtml.js'

const KO = '<html><head><style>.a{}</style></head><body bgcolor="#F1F5F9"><p>국문 본문</p></body></html>'
const EN = '<html><head></head><body><p>English body</p></body></html>'

describe('mergeBilingualEmail', () => {
  it('KO 본문 뒤에 구분선 + EN 본문을 삽입한다', () => {
    const out = mergeBilingualEmail(KO, EN)
    expect(out).toContain('국문 본문')
    expect(out).toContain('ENGLISH VERSION')
    expect(out).toContain('English body')
    expect(out.indexOf('국문 본문')).toBeLessThan(out.indexOf('English body'))
    expect(out.match(/<\/body>/gi)).toHaveLength(1)
  })

  it('EN body 추출 실패 시 KO 단독 반환', () => {
    expect(mergeBilingualEmail(KO, '<html>no body tag</html>')).toBe(KO)
  })
})

describe('buildCopyPageHtml', () => {
  const page = buildCopyPageHtml(mergeBilingualEmail(KO, EN), '10월 뉴스레터')

  it('복사 버튼 바 + mailwrap 에 합본 본문을 담는다', () => {
    expect(page).toContain('id="copybtn"')
    expect(page).toContain('전체 선택 + 복사')
    expect(page).toContain('id="mailwrap"')
    expect(page).toContain('국문 본문')
    expect(page).toContain('English body')
  })

  it('원본 head(스타일)와 제목을 보존한다', () => {
    expect(page).toContain('<style>.a{}</style>')
    expect(page).toContain('<title>10월 뉴스레터 — 복사용</title>')
  })

  it('차트 임베드 + 선택/복사 스크립트 포함', () => {
    expect(page).toContain('/api/hl-chart')
    expect(page).toContain('selectNodeContents')
    expect(page).toContain("execCommand('copy')")
  })
})
