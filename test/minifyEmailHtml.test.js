import { describe, it, expect } from 'vitest'
import { minifyEmailHtml } from '../src/shared/minifyEmailHtml.js'

describe('minifyEmailHtml', () => {
  it('줄바꿈+들여쓰기를 공백 1개로 접는다', () => {
    const html = '<table>\n    <tr>\n      <td style="color:#111">점수</td>\n    </tr>\n  </table>'
    expect(minifyEmailHtml(html)).toBe('<table> <tr> <td style="color:#111">점수</td> </tr> </table>')
  })

  it('Outlook 조건부 주석을 보존한다', () => {
    const html = '<!--[if mso]>\n  <table><tr><td>mso</td></tr></table>\n<![endif]-->'
    const out = minifyEmailHtml(html)
    expect(out).toContain('<!--[if mso]>')
    expect(out).toContain('<![endif]-->')
    expect(out).toContain('<td>mso</td>')
  })

  it('한 줄 안의 공백·텍스트는 그대로 둔다 (렌더링 불변)', () => {
    const html = '<span>LG 38.3%</span> <span>삼성 32.7%</span>'
    expect(minifyEmailHtml(html)).toBe(html)
  })

  it('null/undefined 입력은 빈 문자열', () => {
    expect(minifyEmailHtml(null)).toBe('')
    expect(minifyEmailHtml(undefined)).toBe('')
  })

  it('실제 템플릿 출력에서 크기가 줄어든다', async () => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    const { INIT_META, INIT_TOTAL, INIT_PRODUCTS, INIT_DOTCOM, INIT_PRODUCTS_CNTY, INIT_CITATIONS_CNTY, INIT_CITATIONS } = await import('../src/shared/constants.js')
    const html = generateEmailHTML(INIT_META, INIT_TOTAL, INIT_PRODUCTS, INIT_CITATIONS, INIT_DOTCOM, 'ko', INIT_PRODUCTS_CNTY, INIT_CITATIONS_CNTY, {})
    const min = minifyEmailHtml(html)
    expect(min.length).toBeLessThan(html.length)
    expect(min).not.toContain('\n')
  })
})
