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

export function isIpAllowed(req) {
  const list = readIpAllowlist()
  if (list.length === 0) return true
  const ip = getRealIp(req)
  return list.some(entry => ipMatchesCidr(ip, entry.cidr))
}
