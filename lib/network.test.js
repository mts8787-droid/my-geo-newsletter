import { describe, it, expect, vi, beforeEach } from 'vitest'

// readIpAllowlist 모킹 — isIpAllowed 격리 검증
const fakeAllowlist = []
vi.mock('./storage.js', () => ({
  readIpAllowlist: vi.fn(() => [...fakeAllowlist]),
}))

const { extractIPv4, ipToNum, ipMatchesCidr, getRealIp, isIpAllowed } = await import('./network.js')

beforeEach(() => {
  fakeAllowlist.length = 0
})

describe('extractIPv4', () => {
  it('IPv4 그대로 반환', () => {
    expect(extractIPv4('192.168.0.1')).toBe('192.168.0.1')
    expect(extractIPv4('1.2.3.4')).toBe('1.2.3.4')
  })

  it('IPv4-mapped IPv6 (::ffff:) 제거 후 반환', () => {
    expect(extractIPv4('::ffff:127.0.0.1')).toBe('127.0.0.1')
  })

  it('순수 IPv6는 null', () => {
    expect(extractIPv4('::1')).toBe(null)
    expect(extractIPv4('2001:db8::1')).toBe(null)
  })

  it('빈/누락 입력 → null', () => {
    expect(extractIPv4(null)).toBe(null)
    expect(extractIPv4(undefined)).toBe(null)
    expect(extractIPv4('')).toBe(null)
  })
})

describe('ipToNum', () => {
  it('알려진 IPv4 → 정수', () => {
    expect(ipToNum('0.0.0.0')).toBe(0)
    expect(ipToNum('255.255.255.255')).toBe(0xFFFFFFFF)
    expect(ipToNum('192.168.0.1')).toBe(0xC0A80001)
  })
})

describe('ipMatchesCidr', () => {
  it('/32 단일 IP 매칭', () => {
    expect(ipMatchesCidr('1.2.3.4', '1.2.3.4/32')).toBe(true)
    expect(ipMatchesCidr('1.2.3.5', '1.2.3.4/32')).toBe(false)
  })

  it('/24 서브넷 매칭', () => {
    expect(ipMatchesCidr('192.168.1.10', '192.168.1.0/24')).toBe(true)
    expect(ipMatchesCidr('192.168.1.255', '192.168.1.0/24')).toBe(true)
    expect(ipMatchesCidr('192.168.2.1', '192.168.1.0/24')).toBe(false)
  })

  it('/16 더 넓은 서브넷', () => {
    expect(ipMatchesCidr('10.0.5.20', '10.0.0.0/16')).toBe(true)
    expect(ipMatchesCidr('10.1.0.1', '10.0.0.0/16')).toBe(false)
  })

  it('/0 모든 IP 매칭', () => {
    expect(ipMatchesCidr('1.2.3.4', '0.0.0.0/0')).toBe(true)
    expect(ipMatchesCidr('255.255.255.255', '0.0.0.0/0')).toBe(true)
  })

  it('비트 길이 누락 시 /32 처리', () => {
    expect(ipMatchesCidr('1.2.3.4', '1.2.3.4')).toBe(true)
    expect(ipMatchesCidr('1.2.3.5', '1.2.3.4')).toBe(false)
  })

  it('IPv6 등 비IPv4 → false', () => {
    expect(ipMatchesCidr('::1', '0.0.0.0/0')).toBe(false)
    expect(ipMatchesCidr(null, '0.0.0.0/0')).toBe(false)
  })

  it('IPv4-mapped IPv6도 정상 매칭', () => {
    expect(ipMatchesCidr('::ffff:192.168.1.10', '192.168.1.0/24')).toBe(true)
  })
})

describe('getRealIp', () => {
  it('cf-connecting-ip 우선', () => {
    const req = { headers: { 'cf-connecting-ip': '1.1.1.1', 'x-real-ip': '2.2.2.2' }, ip: '3.3.3.3' }
    expect(getRealIp(req)).toBe('1.1.1.1')
  })

  it('cf-connecting-ip 없으면 x-real-ip', () => {
    const req = { headers: { 'x-real-ip': '2.2.2.2' }, ip: '3.3.3.3' }
    expect(getRealIp(req)).toBe('2.2.2.2')
  })

  it('헤더 없으면 req.ip', () => {
    const req = { headers: {}, ip: '3.3.3.3' }
    expect(getRealIp(req)).toBe('3.3.3.3')
  })
})

describe('isIpAllowed', () => {
  it('빈 화이트리스트 → 모두 허용', () => {
    const req = { headers: {}, ip: '8.8.8.8' }
    expect(isIpAllowed(req)).toBe(true)
  })

  it('매칭되는 CIDR 항목 → 허용', () => {
    fakeAllowlist.push({ cidr: '192.168.1.0/24' })
    const req = { headers: {}, ip: '192.168.1.50' }
    expect(isIpAllowed(req)).toBe(true)
  })

  it('매칭 안 되는 IP → 거부', () => {
    fakeAllowlist.push({ cidr: '192.168.1.0/24' })
    const req = { headers: {}, ip: '10.0.0.1' }
    expect(isIpAllowed(req)).toBe(false)
  })

  it('여러 CIDR 중 하나만 매칭되어도 허용', () => {
    fakeAllowlist.push({ cidr: '192.168.1.0/24' }, { cidr: '10.0.0.0/8' })
    const req = { headers: {}, ip: '10.5.5.5' }
    expect(isIpAllowed(req)).toBe(true)
  })
})
