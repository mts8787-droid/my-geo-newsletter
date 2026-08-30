// WYSIWYG 라운드트립 회귀 테스트 (사용자 보고 2026-08-31)
// 편집모드 blur 는 innerHTML(엔티티 + <strong>)을 meta 에 저장하는데, 그걸 다시
// escapeHtml 하면 '&amp;' 와 '<strong>' 코드가 화면에 그대로 노출됐다.
import { describe, it, expect } from 'vitest'
import { rdRichHtml } from '../src/emailTemplate.js'

describe('rdRichHtml — edRich 필드 HTML 라운드트립', () => {
  it('편집 저장분(<strong> 태그)은 이스케이프하지 않고 그대로 렌더', () => {
    const saved = '핵심은 <strong>스키마 확대</strong>입니다'
    const out = rdRichHtml(saved)
    expect(out).toContain('<strong>스키마 확대</strong>')
    expect(out).not.toContain('&lt;strong&gt;')  // 회귀: 코드 노출
  })

  it('편집 저장분의 엔티티(&amp;)는 이중 이스케이프하지 않는다', () => {
    const saved = 'Press &amp; Media 페이지'   // innerHTML 저장 형태
    const out = rdRichHtml(saved)
    expect(out).toContain('&amp;')          // 그대로 (브라우저가 & 로 표시)
    expect(out).not.toContain('&amp;amp;')  // 회귀: 화면에 '&amp;' 노출
  })

  it('플레인 텍스트는 기존과 동일 — escape + **볼드** + 줄바꿈', () => {
    const typed = '점수 1 < 2 & **상승**\n다음 줄'
    const out = rdRichHtml(typed)
    expect(out).toContain('&lt;')                    // < 이스케이프
    expect(out).toContain('&amp;')                   // & 이스케이프
    expect(out).toContain('<strong>상승</strong>')   // 마크다운 볼드
    expect(out).toContain('<br>')                    // 줄바꿈
  })

  it('편집 저장분의 script 는 정화된다', () => {
    const saved = '본문 <strong>b</strong><script>alert(1)</script>'
    const out = rdRichHtml(saved)
    expect(out).toContain('<strong>b</strong>')
    expect(out).not.toContain('<script>')
  })

  it('빈 값 안전', () => {
    expect(rdRichHtml('')).toBe('')
    expect(rdRichHtml(null)).toBe('')
    expect(rdRichHtml(undefined)).toBe('')
  })
})
