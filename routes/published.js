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

// ─── /p/progress-tracker (정적 SPA + IP 체크) ────────────────────────────
publishedRouter.use('/p/progress-tracker', (req, res, next) => {
  if (!isIpAllowed(req)) return send403Page(res, 'simple')
  next()
})
publishedRouter.use('/p/progress-tracker', express.static(join(PROJECT_ROOT, 'dist-tracker')))
publishedRouter.get('/p/progress-tracker', (req, res) => {
  res.sendFile(join(PROJECT_ROOT, 'dist-tracker', 'tracker.html'))
})
publishedRouter.get('/p/progress-tracker/*', (req, res) => {
  res.sendFile(join(PROJECT_ROOT, 'dist-tracker', 'tracker.html'))
})

// ─── /p/:slug (게시된 HTML 단일 파일) ───────────────────────────────────
publishedRouter.get('/p/:slug', (req, res) => {
  if (!isIpAllowed(req)) return send403Page(res)
  const slug = req.params.slug
  // 경로 traversal 방어 (Appendix B S9)
  if (!/^[a-zA-Z0-9\-]+$/.test(slug)) return res.status(400).send('Invalid slug')
  const file = join(PUB_DIR, `${slug}.html`)
  if (!existsSync(file)) return res.status(404).send('Not found')
  res.set('Content-Type', 'text/html; charset=utf-8')
  res.send(readFileSync(file, 'utf-8'))
})
