import { describe, it, expect, beforeEach, afterAll, vi } from 'vitest'
import express from 'express'
import request from 'supertest'
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'

const TMP_ROOT = mkdtempSync(join(tmpdir(), 'landing-test-'))
const TMP_DATA = join(TMP_ROOT, 'data')
const TMP_PUB = join(TMP_ROOT, 'pub')
mkdirSync(TMP_DATA, { recursive: true })
mkdirSync(TMP_PUB, { recursive: true })

const fakeAllowlist = []
vi.mock('../../lib/storage.js', () => ({
  DATA_DIR: TMP_DATA,
  PUB_DIR: TMP_PUB,
  readIpAllowlist: vi.fn(() => [...fakeAllowlist]),
}))

// landing.js → publish.js → storage.js 의존성 체인 — publish 모듈이 mocked storage로 로드
const { landingRouter } = await import('../../routes/landing.js')
const { CHANNELS } = await import('../../routes/publish.js')

function makeApp() {
  const app = express()
  app.set('trust proxy', 1)
  app.use(landingRouter)
  return app
}

beforeEach(() => {
  fakeAllowlist.length = 0
  // newsletter meta 정리
  try { rmSync(CHANNELS.newsletter.metaFile) } catch {}
})
afterAll(() => { try { rmSync(TMP_ROOT, { recursive: true, force: true }) } catch {} })

describe('GET /', () => {
  it('IP 허용 → 안내 HTML 반환 (채널 슬러그 링크 포함)', async () => {
    const res = await request(makeApp()).get('/')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/html/)
    expect(res.text).toContain('LG Electronics')
    expect(res.text).toContain('Newsletter')
    expect(res.text).toContain('Dashboard')
    expect(res.text).toContain('Citation')
    expect(res.text).toContain(`/p/${CHANNELS.newsletter.koSlug}`)
    expect(res.text).toContain(`/p/${CHANNELS.newsletter.enSlug}`)
    expect(res.text).toContain(`/p/${CHANNELS.dashboard.koSlug}`)
    expect(res.text).toContain(`/p/${CHANNELS.citation.koSlug}`)
  })

  it('IP 화이트리스트 차단 → 403 페이지', async () => {
    fakeAllowlist.push({ cidr: '99.99.99.99/32' })
    const res = await request(makeApp()).get('/')
    expect(res.status).toBe(403)
    expect(res.text).toContain('403')
    expect(res.text).toContain('접근이 허용되지 않은')
  })

  it('newsletter meta 존재 → 제목·날짜 본문에 반영', async () => {
    writeFileSync(CHANNELS.newsletter.metaFile, JSON.stringify({
      title: 'GEO Monthly Report — 2026-04',
      ts: new Date('2026-04-15').getTime(),
    }))
    const res = await request(makeApp()).get('/')
    expect(res.text).toContain('GEO Monthly Report — 2026-04')
    expect(res.text).toMatch(/2026.*4.*15/) // 날짜 형식이 ko-KR localized
  })

  it('newsletter meta 없음 → 기본 제목', async () => {
    const res = await request(makeApp()).get('/')
    expect(res.text).toContain('GEO Monthly Report')
  })
})
