import { describe, it, expect, beforeEach, afterAll, vi } from 'vitest'
import express from 'express'
import request from 'supertest'
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'

// 임시 PUB_DIR — 실제 fs 사용
const TMP_ROOT = mkdtempSync(join(tmpdir(), 'published-test-'))
const TMP_PUB = join(TMP_ROOT, 'pub')
mkdirSync(TMP_PUB, { recursive: true })

vi.mock('../../lib/storage.js', () => ({
  PUB_DIR: TMP_PUB,
  readIpAllowlist: vi.fn(() => [...fakeAllowlist]),
}))

const fakeAllowlist = []

const { publishedRouter } = await import('../../routes/published.js')

function makeApp() {
  const app = express()
  app.set('trust proxy', 1)
  app.use(publishedRouter)
  return app
}

beforeEach(() => {
  fakeAllowlist.length = 0  // 기본: allowlist 비어있음 → 모두 허용
})
afterAll(() => { try { rmSync(TMP_ROOT, { recursive: true, force: true }) } catch {} })

describe('GET /p/:slug', () => {
  it('정상 slug + 파일 존재 → HTML 본문 + CSP 헤더', async () => {
    writeFileSync(join(TMP_PUB, 'GEO-Test.html'), '<html><body>본문</body></html>')
    const res = await request(makeApp()).get('/p/GEO-Test')
    expect(res.status).toBe(200)
    expect(res.text).toContain('본문')
    expect(res.headers['content-type']).toMatch(/text\/html/)
    expect(res.headers['content-security-policy']).toContain("default-src 'self'")
    expect(res.headers['content-security-policy']).toContain("frame-ancestors 'self'")
    // Progress Tracker v2 iframe 임베드 허용 (통합 게시)
    expect(res.headers['content-security-policy']).toContain('frame-src')
    expect(res.headers['content-security-policy']).toContain('geo-progress-tracker-v2.onrender.com')
    expect(res.headers['x-content-type-options']).toBe('nosniff')
  })

  it('파일 없음 → 404', async () => {
    const res = await request(makeApp()).get('/p/Missing-Slug')
    expect(res.status).toBe(404)
    expect(res.text).toContain('Not found')
  })

  it('slug에 ".." 포함 → 400 (경로 traversal 차단)', async () => {
    const res = await request(makeApp()).get('/p/..%2Fetc%2Fpasswd')
    expect(res.status).toBe(400)
  })

  it('slug에 / 포함 (역슬래시·경로) → 400 또는 404', async () => {
    const res = await request(makeApp()).get('/p/abc%2Fetc')
    expect([400, 404]).toContain(res.status)
  })

  it('slug에 한글·특수문자 → 400', async () => {
    const res = await request(makeApp()).get('/p/' + encodeURIComponent('한글'))
    expect(res.status).toBe(400)
  })

  it('IP allowlist 차단 → 403 페이지', async () => {
    fakeAllowlist.push({ cidr: '99.99.99.99/32' }) // 127.0.0.1과 다름
    writeFileSync(join(TMP_PUB, 'GEO-Blocked.html'), '<html>x</html>')
    const res = await request(makeApp()).get('/p/GEO-Blocked')
    expect(res.status).toBe(403)
    expect(res.text).toContain('403')
  })

  it('IP allowlist 매칭 → 200', async () => {
    fakeAllowlist.push({ cidr: '127.0.0.1/32' })
    writeFileSync(join(TMP_PUB, 'GEO-Allowed.html'), '<html>ok</html>')
    const res = await request(makeApp()).get('/p/GEO-Allowed')
    expect(res.status).toBe(200)
  })
})
