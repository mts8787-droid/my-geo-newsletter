import { describe, it, expect } from 'vitest'
import express from 'express'
import request from 'supertest'

const { adminPagesRouter } = await import('../../routes/admin-pages.js')

function makeApp() {
  const app = express()
  app.use(express.json())
  app.use(adminPagesRouter)
  return app
}

describe('/admin/ — 단순 HTML 라우트', () => {
  it.each([
    ['/admin/', 'Admin Dashboard'],
    ['/admin/ip-manager', 'IP Access Manager'],
    ['/admin/archives', '학습 데이터'],
    ['/admin/ai-settings', 'AI Settings'],
  ])('%s → 200 + HTML', async (path, contains) => {
    const res = await request(makeApp()).get(path)
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/html/)
    expect(res.text).toContain(contains)
  })
})

describe('/admin/plan, /admin/infra (마크다운 렌더 페이지)', () => {
  it('/admin/plan → 200 + marked·mermaid 스크립트 포함', async () => {
    const res = await request(makeApp()).get('/admin/plan')
    expect(res.status).toBe(200)
    expect(res.text).toContain('marked')
    expect(res.text).toContain('mermaid')
  })

  it('/admin/plan.md → 200 + 다운로드 헤더', async () => {
    const res = await request(makeApp()).get('/admin/plan.md')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/markdown/)
    expect(res.headers['content-disposition']).toContain('ADMIN_PLAN.md')
  })

  it('/admin/infra → 200 + 마크다운 본문 임베드', async () => {
    const res = await request(makeApp()).get('/admin/infra')
    expect(res.status).toBe(200)
    expect(res.text).toContain('marked')
  })

  it('/admin/infra.md → 200 + 다운로드 헤더', async () => {
    const res = await request(makeApp()).get('/admin/infra.md')
    expect(res.status).toBe(200)
    expect(res.headers['content-disposition']).toContain('GCP_INFRA.md')
  })
})
