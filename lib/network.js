// ─── IP 추출·CIDR 매칭·화이트리스트 검증 ─────────────────────────────────────
import { readIpAllowlist } from './storage.js'

export function extractIPv4(ip) {
  if (!ip) return null
  if (ip.startsWith('::ffff:')) return ip.slice(7)
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) return ip
  return null
}

export function ipToNum(ip) {
  return ip.split('.').reduce((sum, octet) => (sum << 8) + parseInt(octet), 0) >>> 0
}

export function ipMatchesCidr(ip, cidr) {
  const ipv4 = extractIPv4(ip)
  if (!ipv4) return false
  const [range, bitsStr] = cidr.split('/')
  const rangeIpv4 = extractIPv4(range)
  if (!rangeIpv4) return false
  const bits = bitsStr ? parseInt(bitsStr) : 32
  if (bits === 0) return true
  const mask = (~0 << (32 - bits)) >>> 0
  return (ipToNum(ipv4) & mask) === (ipToNum(rangeIpv4) & mask)
}

export function getRealIp(req) {
  return req.headers['cf-connecting-ip'] || req.headers['x-real-ip'] || req.ip
}

// 임시 전면 허용 스위치 — true 면 허용 목록(data/ip-allowlist.json)은 그대로 두고 검사만 통과.
// 2026-09-28 잠시 해제 → 복구 → 2026-10-01 재해제 → 2026-11-06 복구 (사용자 지시). 관련 테스트는 it.skipIf 로 연동.
export const IP_ALLOWLIST_OFF = false

// 외부 공개 경로 — 뉴스레터(월간 리포트 허브 + 월별 발행본)는 IP 무관하게 연다 (2026-11-13 사용자 지시).
// 대시보드·내부용 리포트(GEO-Monthly-Report-Internal-*)·기타 /p/* 는 계속 허용 목록 검사.
const PUBLIC_PATH_RE = /^\/p\/GEO-Monthly-Report-(KO|EN)(-\d{4}-(0[1-9]|1[0-2]))?\/?$/
export const isPublicPath = path => PUBLIC_PATH_RE.test(String(path || ''))

export function isIpAllowed(req) {
  if (IP_ALLOWLIST_OFF) return true
  if (isPublicPath(req.path)) return true
  const list = readIpAllowlist()
  if (list.length === 0) return true
  const ip = getRealIp(req)
  return list.some(entry => ipMatchesCidr(ip, entry.cidr))
}
