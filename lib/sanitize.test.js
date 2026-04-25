import { describe, it, expect } from 'vitest'
import { sanitizeHtml } from './sanitize.js'

describe('sanitizeHtml — XSS 차단', () => {
  it('<script> 태그 제거', () => {
    const html = '<p>안녕</p><script>alert(1)</script><p>끝</p>'
    const out = sanitizeHtml(html)
    expect(out).not.toContain('<script')
    expect(out).not.toContain('alert(1)')
    expect(out).toContain('안녕')
    expect(out).toContain('끝')
  })

  it('on* 인라인 이벤트 핸들러 제거', () => {
    const out = sanitizeHtml('<img src="x" onerror="alert(1)">')
    expect(out).not.toMatch(/onerror=/i)
    expect(out).toContain('src="x"')
  })

  it('<a onclick> 제거하되 href는 유지', () => {
    const out = sanitizeHtml('<a href="https://lge.com" onclick="x()">click</a>')
    expect(out).toContain('href="https://lge.com"')
    expect(out).not.toMatch(/onclick=/i)
  })

  it('javascript: URL 제거', () => {
    const out = sanitizeHtml('<a href="javascript:alert(1)">x</a>')
    expect(out).not.toMatch(/javascript:/i)
  })

  it('style 안의 javascript: / expression() 제거', () => {
    const out1 = sanitizeHtml('<div style="background:url(javascript:x)">x</div>')
    expect(out1).not.toMatch(/javascript:/i)
    const out2 = sanitizeHtml('<div style="width:expression(alert(1))">x</div>')
    expect(out2).not.toMatch(/expression\(/i)
  })

  it('일반 인라인 style은 유지 (게시 템플릿 보존)', () => {
    const out = sanitizeHtml('<table style="border-collapse:collapse"><tr><td style="padding:8px">x</td></tr></table>')
    expect(out).toContain('border-collapse:collapse')
    expect(out).toContain('padding:8px')
  })

  it('SVG 태그·속성 유지 (대시보드 차트용)', () => {
    const out = sanitizeHtml('<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40"/></svg>')
    expect(out).toContain('<svg')
    expect(out).toMatch(/viewBox="0 0 100 100"/i)
    expect(out).toContain('<circle')
  })

  it('비문자열 입력 → 빈 문자열', () => {
    expect(sanitizeHtml(null)).toBe('')
    expect(sanitizeHtml(undefined)).toBe('')
    expect(sanitizeHtml(42)).toBe('')
  })

  it('빈 문자열은 그대로', () => {
    expect(sanitizeHtml('')).toBe('')
  })
})
