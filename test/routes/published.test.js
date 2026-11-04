import { describe, it, expect, beforeEach, afterAll, vi } from 'vitest'
import express from 'express'
import request from 'supertest'
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'

// 임시 PUB_DIR — 실제 fs 사용
const TMP_ROOT = mkdtempSync(join(tmpdir(), 'published-test-'))
const TMP_PUB = join(TMP_ROOT, 'pub')
const TMP_DATA = join(TMP_ROOT, 'data')
mkdirSync(TMP_PUB, { recursive: true })
mkdirSync(TMP_DATA, { recursive: true })

vi.mock('../../lib/storage.js', () => ({
  PUB_DIR: TMP_PUB,
  DATA_DIR: TMP_DATA,
  readIpAllowlist: vi.fn(() => [...fakeAllowlist]),
}))

const fakeAllowlist = []

const { publishedRouter } = await import('../../routes/published.js')
const { IP_ALLOWLIST_OFF } = await import('../../lib/network.js')

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
    // v2 트래커 본 레포 통합 후 same-origin → frame-src 'self'만 허용
    expect(res.headers['content-security-policy']).toContain("frame-src 'self'")
    expect(res.headers['content-security-policy']).not.toContain('geo-progress-tracker-v2.onrender.com')
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

  // IP_ALLOWLIST_OFF(임시 전면 허용, 2026-09-28) 동안 skip — lib/network.js 스위치 false 복구 시 자동 재활성
  it.skipIf(IP_ALLOWLIST_OFF)('IP allowlist 차단 → 403 페이지', async () => {
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

describe('GET /p/:slug — 지난 호 리다이렉트', () => {
  // 7월→8월 리다이렉트는 해제됨 (사용자 지시 2026-09-16) — 7월호는 직접 접속된다.
  it.each([
    ['GEO-Monthly-Report-KO-2026-07', 'GEO-Monthly-Report-KO-2026-08'],
    ['GEO-Monthly-Report-EN-2026-07', 'GEO-Monthly-Report-EN-2026-08'],
  ])('%s 는 리다이렉트 없이 200 (8월호가 있어도)', async (from, to) => {
    writeFileSync(join(TMP_PUB, `${from}.html`), '<html><body>7월</body></html>')
    writeFileSync(join(TMP_PUB, `${to}.html`), '<html><body>8월</body></html>')
    const res = await request(makeApp()).get(`/p/${from}`)
    expect(res.status).toBe(200)
    expect(res.text).toContain('7월')
  })

  it('대상 월이 아직 미게시면 리다이렉트하지 않고 원래 호를 그대로 준다', async () => {
    const from = 'GEO-Monthly-Report-KO-2026-07'
    writeFileSync(join(TMP_PUB, `${from}.html`), '<html><body>7월</body></html>')
    rmSync(join(TMP_PUB, 'GEO-Monthly-Report-KO-2026-08.html'), { force: true })
    const res = await request(makeApp()).get(`/p/${from}`)
    expect(res.status).toBe(200)
    expect(res.text).toContain('7월')
  })

  it('리다이렉트 대상이 아닌 월은 영향 없음', async () => {
    writeFileSync(join(TMP_PUB, 'GEO-Monthly-Report-KO-2026-06.html'), '<html><body>6월</body></html>')
    const res = await request(makeApp()).get('/p/GEO-Monthly-Report-KO-2026-06')
    expect(res.status).toBe(200)
    expect(res.text).toContain('6월')
  })
})

describe('GET /p/GEO-Readability-Criteria.md (검수 기준 MD 다운로드, 2026-11-05)', () => {
  it('KO — Markdown 첨부 + 항목 상세 불릿 포함, /p/:slug 에 먹히지 않음', async () => {
    const res = await request(makeApp()).get('/p/GEO-Readability-Criteria.md')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/markdown/)
    expect(res.headers['content-disposition']).toMatch(/attachment; filename="GEO-Readability-Criteria-KO-\d{4}-\d{2}-\d{2}\.md"/)
    expect(res.text).toContain('# GEO Agent Readability 검수 기준')
    expect(res.text).toContain('- **판정 파라미터**')
  })
  it('EN — ?lang=en 이면 영문 Markdown', async () => {
    const res = await request(makeApp()).get('/p/GEO-Readability-Criteria.md?lang=en')
    expect(res.status).toBe(200)
    expect(res.headers['content-disposition']).toContain('-EN-')
    expect(res.text).toContain('# GEO Agent Readability audit criteria')
  })
  it('검수 기준 페이지 머리에 MD 다운로드 버튼', async () => {
    const res = await request(makeApp()).get('/p/GEO-Readability-Criteria?lang=en')
    expect(res.text).toContain('href="/p/GEO-Readability-Criteria.md?lang=en" download')
  })
})
