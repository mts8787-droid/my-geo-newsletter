// ─── 구조화 로그 (pino) — Appendix C K13 ─────────────────────────────────
// 운영 환경: JSON Lines (Cloud Logging이 자동 파싱)
// 개발 환경: 사람이 읽기 쉬운 단축 포맷 (선택, 별도 의존 없이 transport 미사용)
import pino from 'pino'

const isProd = process.env.NODE_ENV === 'production'
const level = process.env.LOG_LEVEL || (isProd ? 'info' : 'debug')

export const logger = pino({
  level,
  base: { app: 'geo-newsletter', env: process.env.NODE_ENV || 'dev' },
  timestamp: pino.stdTimeFunctions.isoTime,
  // 민감 정보 자동 마스킹
  redact: {
    paths: [
      'password', 'apiKey', 'token',
      'req.headers.authorization', 'req.headers.cookie',
    ],
    censor: '[REDACTED]',
  },
})

// 모듈별 child logger 헬퍼 (예: logFor('insight'))
export function logFor(module) {
  return logger.child({ module })
}
