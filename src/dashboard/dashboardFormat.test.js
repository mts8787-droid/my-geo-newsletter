import { describe, it, expect } from 'vitest'
import { statusInfo, fmt, mdBold, stripDomain, cntyStatus, cntyFullName } from './dashboardFormat.js'

describe('statusInfo', () => {
  it('lead → 녹색 라벨', () => {
    const r = statusInfo('lead', 'ko')
    expect(r.color).toBe('#15803D')
    expect(r.label).toBeTruthy()
  })

  it('behind → 노랑', () => {
    expect(statusInfo('behind', 'ko').color).toBe('#B45309')
  })

  it('critical → 빨강', () => {
    expect(statusInfo('critical', 'ko').color).toBe('#BE123C')
  })

  it('알 수 없는 상태 → fallback dash', () => {
    expect(statusInfo('???', 'ko').label).toBe('—')
  })

  it('lang=en도 작동', () => {
    expect(statusInfo('lead', 'en').color).toBe('#15803D')
  })
})

describe('fmt', () => {
  it('숫자 → 천 단위 콤마', () => {
    expect(fmt(1000)).toBe('1,000')
    expect(fmt(1234567)).toBe('1,234,567')
    expect(fmt(0)).toBe('0')
  })
})

describe('mdBold', () => {
  it('**bold** → <strong>', () => {
    expect(mdBold('일반 **굵게** 일반')).toBe('일반 <strong>굵게</strong> 일반')
  })

  it('\\n → <br>', () => {
    expect(mdBold('A\nB')).toBe('A<br>B')
    expect(mdBold('A\r\nB')).toBe('A<br>B')
  })

  it('null/undefined → 빈 문자열', () => {
    expect(mdBold(null)).toBe('')
    expect(mdBold(undefined)).toBe('')
  })

  it('여러 굵게 마크업 모두 변환', () => {
    expect(mdBold('**A** 그리고 **B**')).toBe('<strong>A</strong> 그리고 <strong>B</strong>')
  })
})

describe('stripDomain', () => {
  it.each([
    ['example.com', 'example'],
    ['lge.co.uk', 'lge'],
    ['shop.com.br', 'shop'],
    ['site.de', 'site'],
    ['x.org', 'x'],
  ])('%s → %s', (input, expected) => {
    expect(stripDomain(input)).toBe(expected)
  })

  it('알려지지 않은 TLD 유지', () => {
    expect(stripDomain('site.io')).toBe('site.io')
  })

  it('null → 빈 문자열', () => {
    expect(stripDomain(null)).toBe('')
  })
})

describe('cntyStatus', () => {
  it('경쟁사 0이면 lead', () => {
    expect(cntyStatus(50, 0)).toBe('lead')
  })

  it('자사 ≥ 경쟁사(100%) → lead', () => {
    expect(cntyStatus(50, 50)).toBe('lead')
    expect(cntyStatus(60, 50)).toBe('lead')
  })

  it('자사 80~99% → behind', () => {
    expect(cntyStatus(40, 50)).toBe('behind')  // 80%
    expect(cntyStatus(45, 50)).toBe('behind')  // 90%
  })

  it('자사 < 80% → critical', () => {
    expect(cntyStatus(30, 50)).toBe('critical')  // 60%
    expect(cntyStatus(0, 50)).toBe('critical')
  })
})

describe('cntyFullName', () => {
  it.each([
    ['US', 'USA'],
    ['DE', 'Germany'],
    ['UK', 'UK'],
    ['GB', 'UK'],
    ['BR', 'Brazil'],
    ['VN', 'Vietnam'],
  ])('%s → %s', (code, name) => {
    expect(cntyFullName(code)).toBe(name)
  })

  it('소문자 입력도 정상화', () => {
    expect(cntyFullName('de')).toBe('Germany')
  })

  it('알려지지 않은 코드 → 입력 그대로', () => {
    expect(cntyFullName('XX')).toBe('XX')
  })

  it('null → null로 (빈 문자열 아님)', () => {
    // String(null||'').toUpperCase() === '' → COUNTRY_FULL_NAME[''] undefined → fallback to input
    expect(cntyFullName(null)).toBe(null)
  })
})
