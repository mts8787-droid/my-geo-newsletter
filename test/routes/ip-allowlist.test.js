import { describe, it, expect, beforeEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

const fake = { list: [] }
vi.mock('../../lib/storage.js', () => ({
  readIpAllowlist: vi.fn(() => [...fake.list]),
  writeIpAllowlist: vi.fn((l) => { fake.list = [...l] }),
}))
vi.mock('../../lib/network.js', () => ({
  getRealIp: vi.fn(() => '192.168.1.10'),
}))

const { ipRouter } = await import('../../routes/ip-allowlist.js')

function makeApp() {
  const app = express()
  app.use(express.json())
  app.use(ipRouter)
  return app
}

beforeEach(() => { fake.list = [] })

describe('IP Allowlist router', () => {
  it('GET 빈 목록', async () => {
    const r = await request(makeApp()).get('/api/ip-allowlist')
    expect(r.status).toBe(200)
    expect(r.body).toEqual([])
  })

  it('POST 정상 CIDR', async () => {
    const r = await request(makeApp())
      .post('/api/ip-allowlist')
      .send({ cidr: '10.0.0.0/8', label: '사내' })
    expect(r.status).toBe(200)
    expect(r.body.list).toHaveLength(1)
    expect(r.body.list[0].cidr).toBe('10.0.0.0/8')
    expect(r.body.list[0].id).toMatch(/^[a-f0-9]{16}$/)
  })

  it('POST 단일 IP (서브넷 없음)', async () => {
    const r = await request(makeApp()).post('/api/ip-allowlist').send({ cidr: '10.0.0.1' })
    expect(r.status).toBe(200)
  })

  it('POST 잘못된 CIDR 형식 → 400 (Zod)', async () => {
    const r = await request(makeApp()).post('/api/ip-allowlist').send({ cidr: 'abc' })
    expect(r.status).toBe(400)
  })

  it('POST 옥텟 256 → 400 (라우트 추가 검증)', async () => {
    const r = await request(makeApp()).post('/api/ip-allowlist').send({ cidr: '300.0.0.1' })
    expect(r.status).toBe(400)
  })

  it('POST 비트 33 → 400', async () => {
    const r = await request(makeApp()).post('/api/ip-allowlist').send({ cidr: '10.0.0.0/33' })
    expect(r.status).toBe(400)
  })

  it('DELETE — id로 삭제', async () => {
    fake.list = [{ id: 'a', cidr: '10.0.0.0/8' }, { id: 'b', cidr: '192.168.0.0/16' }]
    const r = await request(makeApp()).delete('/api/ip-allowlist/a')
    expect(r.body.list).toHaveLength(1)
    expect(r.body.list[0].id).toBe('b')
  })

  it('GET /api/my-ip — 호출자 IP 반환 (모킹)', async () => {
    const r = await request(makeApp()).get('/api/my-ip')
    expect(r.body).toEqual({ ip: '192.168.1.10' })
  })
})
