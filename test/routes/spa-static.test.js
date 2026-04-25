// dist-* 디렉터리는 CI test 단계 이전이라 존재하지 않을 수 있어 제외하고,
// repo에 항상 포함되는 /font 경로만 검증
import { describe, it, expect } from 'vitest'
import express from 'express'
import request from 'supertest'

const { spaStaticRouter } = await import('../../routes/spa-static.js')

function makeApp() {
  const app = express()
  app.use(spaStaticRouter)
  return app
}

describe('GET /font/* — 폰트 정적 서빙', () => {
  it('존재하는 ttf → 200 + 1년 immutable 캐시 헤더', async () => {
    const res = await request(makeApp()).get('/font/LG%20Smart%20Bold.ttf')
    expect(res.status).toBe(200)
    expect(res.headers['cache-control']).toMatch(/max-age=31536000/)
    expect(res.headers['cache-control']).toMatch(/immutable/)
  })

  it('없는 폰트 → 404', async () => {
    const res = await request(makeApp()).get('/font/missing-font.ttf')
    expect(res.status).toBe(404)
  })

  it('경로 traversal (..%2F) → 차단', async () => {
    const res = await request(makeApp()).get('/font/..%2Fpackage.json')
    expect([400, 403, 404]).toContain(res.status)
    if (res.status === 200) throw new Error('path traversal not blocked!')
  })
})
