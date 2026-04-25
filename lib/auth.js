// ─── 관리자 인증 (세션·CSRF) ─────────────────────────────────────────────────
import crypto from 'crypto'

if (!process.env.ADMIN_PASSWORD) {
  console.error('⚠️  ADMIN_PASSWORD 환경 변수가 설정되지 않았습니다. 서버를 시작할 수 없습니다.')
  process.exit(1)
}
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

// 메모리 기반 세션 저장소 (멀티 인스턴스 시 Redis로 교체 — Appendix C K12)
export const activeSessions = new Set()

export function getSessionToken(req) {
  const cookie = req.headers.cookie
  if (!cookie) return null
  const match = cookie.split(';').map(c => c.trim()).find(c => c.startsWith('admin_token='))
  return match ? match.split('=')[1] : null
}

export function createSessionToken() {
  const token = crypto.randomBytes(32).toString('hex')
  activeSessions.add(token)
  return token
}

export function revokeSessionToken(token) {
  if (token) activeSessions.delete(token)
}

export function isAuthenticated(req) {
  const token = getSessionToken(req)
  return !!(token && activeSessions.has(token))
}
