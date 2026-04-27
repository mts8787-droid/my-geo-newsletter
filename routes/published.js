// ─── 게시본 공개 라우트 — /p/:slug, /p/progress-tracker ─────────────────
// IP 화이트리스트 검증을 통과한 클라이언트만 열람 가능
import { Router } from 'express'
import express from 'express'
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { PUB_DIR } from '../lib/storage.js'
import { isIpAllowed } from '../lib/network.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = join(__dirname, '..')

// ─── SEC2 — Content-Security-Policy (게시 HTML 전용) ──────────────────
// 게시 HTML은 인라인 style/script를 광범위 사용하므로 unsafe-inline 허용,
// 외부 도메인 화이트리스트:
//  - fonts.cdnfonts.com: LG Smart 웹폰트
//  - geo-progress-tracker-v2.onrender.com: Progress Tracker v2 iframe (통합 게시)
const PUBLISHED_CSP = [
  "default-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.cdnfonts.com",
  "font-src 'self' https://fonts.cdnfonts.com data:",
  "script-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  // iframe 임베드 — Progress Tracker v2 외부 호스트 명시 허용
  "frame-src 'self' https://geo-progress-tracker-v2.onrender.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ')

function setPublishedSecurityHeaders(res) {
  res.set('Content-Security-Policy', PUBLISHED_CSP)
  res.set('X-Content-Type-Options', 'nosniff')
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin')
}

// ─── 403 응답 본문 ─────────────────────────────────────────────────────
function send403Page(res, kind = 'full') {
  res.status(403)
  res.set('Content-Type', 'text/html; charset=utf-8')
  if (kind === 'simple') {
    return res.send('<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="background:#0F172A;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#64748B"><p>403 — Access Denied</p></body></html>')
  }
  res.send(`<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access Denied</title><style>*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:'LG Smart','Arial Narrow',Arial,sans-serif;color:#E2E8F0}.w{text-align:center;padding:40px 24px}h1{font-size:48px;font-weight:700;color:#334155;margin-bottom:16px}p{font-size:15px;color:#64748B}</style></head><body><div class="w"><h1>403</h1><p>접근이 허용되지 않은 IP입니다.</p></div></body></html>`)
}

export const publishedRouter = Router()

// ─── /p/progress-tracker (정적 SPA + IP 체크 + CSP) ─────────────────────
publishedRouter.use('/p/progress-tracker', (req, res, next) => {
  if (!isIpAllowed(req)) return send403Page(res, 'simple')
  setPublishedSecurityHeaders(res)
  next()
})
publishedRouter.use('/p/progress-tracker', express.static(join(PROJECT_ROOT, 'dist-tracker')))
publishedRouter.get('/p/progress-tracker', (req, res) => {
  res.sendFile(join(PROJECT_ROOT, 'dist-tracker', 'tracker.html'))
})
publishedRouter.get('/p/progress-tracker/*', (req, res) => {
  res.sendFile(join(PROJECT_ROOT, 'dist-tracker', 'tracker.html'))
})

// ─── /p/:slug (게시된 HTML 단일 파일 + CSP) ─────────────────────────────
publishedRouter.get('/p/:slug', (req, res) => {
  if (!isIpAllowed(req)) return send403Page(res)
  const slug = req.params.slug
  // 경로 traversal 방어 (Appendix B S9)
  if (!/^[a-zA-Z0-9\-]+$/.test(slug)) return res.status(400).send('Invalid slug')
  const file = join(PUB_DIR, `${slug}.html`)
  if (!existsSync(file)) return res.status(404).send('Not found')
  setPublishedSecurityHeaders(res)
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(readFileSync(file, 'utf-8'))
})
