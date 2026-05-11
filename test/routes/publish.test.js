import { describe, it, expect, beforeEach, afterAll, vi } from 'vitest'
import express from 'express'
import request from 'supertest'
import { mkdtempSync, rmSync, existsSync, readFileSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'

// 임시 DATA_DIR/PUB_DIR — 실제 fs 사용, 테스트 종료 시 정리
const TMP_ROOT = mkdtempSync(join(tmpdir(), 'pub-test-'))
const TMP_DATA = join(TMP_ROOT, 'data')
const TMP_PUB = join(TMP_ROOT, 'pub')
import { mkdirSync } from 'fs'
mkdirSync(TMP_DATA, { recursive: true })
mkdirSync(TMP_PUB, { recursive: true })

vi.mock('../../lib/storage.js', () => ({
  DATA_DIR: TMP_DATA,
  PUB_DIR: TMP_PUB,
}))

const { publishRouter, CHANNELS } = await import('../../routes/publish.js')

function makeApp() {
  const app = express()
  app.use(express.json({ limit: '10mb' }))
  app.use(publishRouter)
  return app
}

function cleanFiles() {
  for (const ch of Object.values(CHANNELS)) {
    for (const p of [join(TMP_PUB, `${ch.koSlug}.html`), join(TMP_PUB, `${ch.enSlug}.html`), ch.metaFile]) {
      try { rmSync(p) } catch {}
    }
  }
  try { rmSync(join(TMP_DATA, 'tracker-v2-snapshot.json')) } catch {}
  try { rmSync(join(TMP_DATA, 'tracker-v2-meta.json')) } catch {}
}

beforeEach(cleanFiles)
afterAll(() => { try { rmSync(TMP_ROOT, { recursive: true, force: true }) } catch {} })

describe('publishRouter — 4채널 CRUD (단일 페이지)', () => {
  const channels = [
    // newsletter 는 월별 발행 모드 — 별도 테스트 블록으로 분리
    { path: '/api/publish-dashboard', key: 'dashboard' },
    { path: '/api/publish-citation', key: 'citation' },
    { path: '/api/publish-monthly-report', key: 'monthly-report' },
    { path: '/api/publish-visibility', key: 'visibility' },
  ]

  for (const { path, key } of channels) {
    describe(`${path} (${key})`, () => {
      it('POST → KO/EN HTML + meta 파일 생성', async () => {
        const res = await request(makeApp()).post(path).send({
          htmlKo: '<html><body>한글</body></html>',
          htmlEn: '<html><body>English</body></html>',
          title: 'Test Title',
        })
        expect(res.status).toBe(200)
        expect(res.body.ok).toBe(true)
        expect(res.body.urls.ko).toBe(`/p/${CHANNELS[key].koSlug}`)
        expect(res.body.urls.en).toBe(`/p/${CHANNELS[key].enSlug}`)
        expect(existsSync(join(TMP_PUB, `${CHANNELS[key].koSlug}.html`))).toBe(true)
        expect(existsSync(join(TMP_PUB, `${CHANNELS[key].enSlug}.html`))).toBe(true)
        expect(existsSync(CHANNELS[key].metaFile)).toBe(true)
      })

      it('POST → htmlKo 누락 시 400 (Zod)', async () => {
        const res = await request(makeApp()).post(path).send({ htmlEn: '<html></html>' })
        expect(res.status).toBe(400)
      })

      it('GET 게시 전 → published:false', async () => {
        const res = await request(makeApp()).get(path)
        expect(res.status).toBe(200)
        expect(res.body.published).toBe(false)
      })

      it('POST → GET → published:true + meta 반영', async () => {
        await request(makeApp()).post(path).send({
          htmlKo: '<html>x</html>',
          htmlEn: '<html>y</html>',
          title: 'Hello',
        })
        const res = await request(makeApp()).get(path)
        expect(res.body.published).toBe(true)
        expect(res.body.title).toBe('Hello')
        expect(res.body.ts).toBeTypeOf('number')
      })

      it('DELETE → 파일·meta 제거', async () => {
        await request(makeApp()).post(path).send({
          htmlKo: '<html>x</html>',
          htmlEn: '<html>y</html>',
        })
        const del = await request(makeApp()).delete(path)
        expect(del.status).toBe(200)
        expect(del.body.ok).toBe(true)
        expect(existsSync(join(TMP_PUB, `${CHANNELS[key].koSlug}.html`))).toBe(false)
        expect(existsSync(CHANNELS[key].metaFile)).toBe(false)
      })
    })
  }
})

describe('newsletter — 월별 발행 (/api/publish)', () => {
  const M = '2026-05'
  const M2 = '2026-04'
  const slugKo = m => `${CHANNELS.newsletter.koSlug}-${m}`
  const slugEn = m => `${CHANNELS.newsletter.enSlug}-${m}`

  function cleanMonths(...months) {
    for (const m of months) {
      try { rmSync(join(TMP_PUB, `${slugKo(m)}.html`)) } catch {}
      try { rmSync(join(TMP_PUB, `${slugEn(m)}.html`)) } catch {}
    }
  }
  beforeEach(() => cleanMonths(M, M2))

  it('POST month=YYYY-MM → 월별 슬러그로 KO/EN 저장 + meta.months 누적', async () => {
    const res = await request(makeApp()).post('/api/publish').send({
      htmlKo: '<html><body>한글</body></html>',
      htmlEn: '<html><body>English</body></html>',
      title: 'May 2026',
      month: M,
    })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.month).toBe(M)
    expect(res.body.urls.ko).toBe(`/p/${slugKo(M)}`)
    expect(existsSync(join(TMP_PUB, `${slugKo(M)}.html`))).toBe(true)
    const meta = JSON.parse(readFileSync(CHANNELS.newsletter.metaFile, 'utf-8'))
    expect(meta.months[M]).toMatchObject({ title: 'May 2026' })
  })

  it('POST month 누락 시 400', async () => {
    const res = await request(makeApp()).post('/api/publish').send({
      htmlKo: '<html>x</html>', htmlEn: '<html>y</html>',
    })
    expect(res.status).toBe(400)
  })

  it('POST month 형식 오류 시 400 (Zod)', async () => {
    const res = await request(makeApp()).post('/api/publish').send({
      htmlKo: '<html>x</html>', htmlEn: '<html>y</html>', month: '2026-13',
    })
    expect(res.status).toBe(400)
  })

  it('GET (no query) → 게시된 모든 월 목록 반환 (최신 월 먼저)', async () => {
    await request(makeApp()).post('/api/publish').send({
      htmlKo: '<html>4월</html>', htmlEn: '<html>Apr</html>', title: 'Apr', month: M2,
    })
    await request(makeApp()).post('/api/publish').send({
      htmlKo: '<html>5월</html>', htmlEn: '<html>May</html>', title: 'May', month: M,
    })
    const res = await request(makeApp()).get('/api/publish')
    expect(res.status).toBe(200)
    expect(res.body.months).toHaveLength(2)
    expect(res.body.months[0].month).toBe(M)
    expect(res.body.months[0].published).toBe(true)
    expect(res.body.months[1].month).toBe(M2)
  })

  it('GET ?month=YYYY-MM → 특정 월 상태', async () => {
    await request(makeApp()).post('/api/publish').send({
      htmlKo: '<html>x</html>', htmlEn: '<html>y</html>', title: 'May', month: M,
    })
    const res = await request(makeApp()).get(`/api/publish?month=${M}`)
    expect(res.body.published).toBe(true)
    expect(res.body.title).toBe('May')
    expect(res.body.urls.ko).toBe(`/p/${slugKo(M)}`)
  })

  it('DELETE ?month=YYYY-MM → 해당 월만 삭제', async () => {
    await request(makeApp()).post('/api/publish').send({
      htmlKo: '<html>4</html>', htmlEn: '<html>4</html>', month: M2,
    })
    await request(makeApp()).post('/api/publish').send({
      htmlKo: '<html>5</html>', htmlEn: '<html>5</html>', month: M,
    })
    const del = await request(makeApp()).delete(`/api/publish?month=${M}`)
    expect(del.status).toBe(200)
    expect(del.body.ok).toBe(true)
    expect(existsSync(join(TMP_PUB, `${slugKo(M)}.html`))).toBe(false)
    expect(existsSync(join(TMP_PUB, `${slugKo(M2)}.html`))).toBe(true)
    const meta = JSON.parse(readFileSync(CHANNELS.newsletter.metaFile, 'utf-8'))
    expect(meta.months[M]).toBeUndefined()
    expect(meta.months[M2]).toBeDefined()
  })

  it('DELETE month 누락 시 400', async () => {
    const res = await request(makeApp()).delete('/api/publish')
    expect(res.status).toBe(400)
  })

  it('lang-bar 가 월별 슬러그로 삽입된다', async () => {
    await request(makeApp()).post('/api/publish').send({
      htmlKo: '<html><body><h1>본문</h1></body></html>',
      htmlEn: '<html><body><h1>body</h1></body></html>',
      month: M,
    })
    const koContent = readFileSync(join(TMP_PUB, `${slugKo(M)}.html`), 'utf-8')
    expect(koContent).toContain('한국어')
    expect(koContent).toContain('English')
    expect(koContent).toContain('/p/' + slugKo(M))
  })

  it('dashboard 등 다른 채널은 lang-bar 미주입', async () => {
    await request(makeApp()).post('/api/publish-dashboard').send({
      htmlKo: '<html><body>X</body></html>',
      htmlEn: '<html><body>Y</body></html>',
    })
    const koContent = readFileSync(join(TMP_PUB, `${CHANNELS.dashboard.koSlug}.html`), 'utf-8')
    expect(koContent).not.toContain('한국어')
  })
})

describe('GET /api/publish-history', () => {
  it('newsletter/dashboard/citation 3종만 포함', async () => {
    const res = await request(makeApp()).get('/api/publish-history')
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('newsletter')
    expect(res.body).toHaveProperty('dashboard')
    expect(res.body).toHaveProperty('citation')
    expect(res.body).not.toHaveProperty('monthly-report')
    expect(res.body).not.toHaveProperty('visibility')
  })

  it('미게시 채널은 null', async () => {
    const res = await request(makeApp()).get('/api/publish-history')
    expect(res.body.newsletter).toBe(null)
  })

  it('게시된 채널은 meta + published:true', async () => {
    await request(makeApp()).post('/api/publish-citation').send({
      htmlKo: '<html>x</html>', htmlEn: '<html>y</html>', title: 'Citation',
    })
    const res = await request(makeApp()).get('/api/publish-history')
    expect(res.body.citation).toMatchObject({ title: 'Citation', published: true })
  })
})

describe('progress-tracker publish (v2 only — geo-progress-tracker-v2 통합)', () => {
  it('POST → v2 스냅샷 + meta 저장', async () => {
    const res = await request(makeApp()).post('/api/publish-tracker-v2').send({
      data: { foo: 1, bar: 2 },
      dashboard: { categoryStats: [{ a: 1 }] },
      month: '2026-05',
    })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.url).toBe('/p/progress-tracker-v2/')
    expect(res.body.title).toBe('GEO KPI Progress Tracker v2')
    expect(existsSync(join(TMP_DATA, 'tracker-v2-snapshot.json'))).toBe(true)
    expect(existsSync(join(TMP_DATA, 'tracker-v2-meta.json'))).toBe(true)
  })

  it('POST → data 누락 시 400', async () => {
    const res = await request(makeApp()).post('/api/publish-tracker-v2').send({ dashboard: {} })
    expect(res.status).toBe(400)
  })

  it('GET 게시 전 → published:false', async () => {
    const res = await request(makeApp()).get('/api/publish-tracker-v2')
    expect(res.body.published).toBe(false)
    expect(res.body.url).toBe('/p/progress-tracker-v2/')
  })

  it('POST → GET → published:true + meta', async () => {
    await request(makeApp()).post('/api/publish-tracker-v2').send({ data: { x: 1 } })
    const res = await request(makeApp()).get('/api/publish-tracker-v2')
    expect(res.body.published).toBe(true)
    expect(res.body.title).toBe('GEO KPI Progress Tracker v2')
  })

  it('GET /api/tracker-snapshot-v2 게시 후 데이터 반환', async () => {
    await request(makeApp()).post('/api/publish-tracker-v2').send({
      data: { metric: 99 },
      dashboard: {},
      month: '2026-05',
    })
    const res = await request(makeApp()).get('/api/tracker-snapshot-v2')
    expect(res.body.ok).toBe(true)
    expect(res.body.data.metric).toBe(99)
    expect(res.body.data._month).toBe('2026-05')
  })

  it('DELETE → 스냅샷·meta 제거', async () => {
    await request(makeApp()).post('/api/publish-tracker-v2').send({ data: { x: 1 } })
    const del = await request(makeApp()).delete('/api/publish-tracker-v2')
    expect(del.body.ok).toBe(true)
    expect(existsSync(join(TMP_DATA, 'tracker-v2-snapshot.json'))).toBe(false)
    expect(existsSync(join(TMP_DATA, 'tracker-v2-meta.json'))).toBe(false)
  })

  it('GET /api/tracker-snapshot-v2 데이터 없으면 ok:false', async () => {
    const res = await request(makeApp()).get('/api/tracker-snapshot-v2')
    expect(res.body.ok).toBe(false)
    expect(res.body.data).toBe(null)
  })

})
