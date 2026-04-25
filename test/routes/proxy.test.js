import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

const { proxyRouter } = await import('../../routes/proxy.js')

function makeApp() {
  const app = express()
  app.use(express.json())
  app.use(proxyRouter)
  return app
}

let originalFetch
beforeEach(() => { originalFetch = global.fetch })
afterEach(() => { global.fetch = originalFetch })

function mockFetch({ ok = true, status = 200, text = '', headers = {} } = {}) {
  global.fetch = vi.fn(async () => ({
    ok, status,
    headers: {
      get: (k) => headers[k.toLowerCase()] || headers[k] || null,
    },
    text: async () => text,
  }))
}

describe('GET /gsheets-proxy/*', () => {
  it('정상 요청 → docs.google.com 본문 그대로 반환', async () => {
    mockFetch({ text: 'a,b,c\n1,2,3', headers: { 'content-type': 'text/csv' } })
    const res = await request(makeApp()).get('/gsheets-proxy/spreadsheets/d/abc/export?format=csv')
    expect(res.status).toBe(200)
    expect(res.text).toBe('a,b,c\n1,2,3')
    expect(res.headers['content-type']).toMatch(/text\/csv/)
    expect(res.headers['cache-control']).toMatch(/no-store/)
    expect(global.fetch).toHaveBeenCalledOnce()
    expect(global.fetch.mock.calls[0][0]).toContain('https://docs.google.com')
  })

  it('업스트림 비정상 → 동일 status + 본문 반환', async () => {
    mockFetch({ ok: false, status: 404, text: 'Not Found' })
    const res = await request(makeApp()).get('/gsheets-proxy/spreadsheets/d/missing')
    expect(res.status).toBe(404)
    expect(res.text).toBe('Not Found')
  })

  it('네트워크 실패 → 502', async () => {
    global.fetch = vi.fn(async () => { throw new Error('ECONNRESET') })
    const res = await request(makeApp()).get('/gsheets-proxy/x')
    expect(res.status).toBe(502)
    expect(res.body.error).toContain('프록시')
  })

  it('content-type 누락 시 기본값 text/csv', async () => {
    mockFetch({ text: 'data' })
    const res = await request(makeApp()).get('/gsheets-proxy/foo')
    expect(res.headers['content-type']).toMatch(/text\/csv/)
  })
})

describe('POST /api/gsheet-export', () => {
  it('Apps Script URL → 200 + JSON 응답', async () => {
    mockFetch({ text: '{"ok":true,"rows":3}' })
    const res = await request(makeApp()).post('/api/gsheet-export').send({
      scriptUrl: 'https://script.google.com/macros/s/abc/exec',
      data: { foo: 'bar' },
    })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.rows).toBe(3)
    const fetchArgs = global.fetch.mock.calls[0]
    expect(fetchArgs[0]).toBe('https://script.google.com/macros/s/abc/exec')
    expect(fetchArgs[1].method).toBe('POST')
    expect(fetchArgs[1].body).toBe('{"foo":"bar"}')
  })

  it('script.googleusercontent.com도 허용', async () => {
    mockFetch({ text: '{"ok":true}' })
    const res = await request(makeApp()).post('/api/gsheet-export').send({
      scriptUrl: 'https://script.googleusercontent.com/macros/s/abc/exec',
      data: { x: 1 },
    })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
  })

  it('허용 외 origin → 403', async () => {
    mockFetch({ text: 'should not be called' })
    const res = await request(makeApp()).post('/api/gsheet-export').send({
      scriptUrl: 'https://evil.com/exec',
      data: {},
    })
    expect(res.status).toBe(403)
    expect(res.body.error).toContain('Apps Script')
    expect(global.fetch).not.toHaveBeenCalled()
  })

  it('유효하지 않은 URL → 400', async () => {
    const res = await request(makeApp()).post('/api/gsheet-export').send({
      scriptUrl: 'not-a-url',
      data: {},
    })
    expect(res.status).toBe(400)
    expect(res.body.error).toContain('URL')
  })

  it('scriptUrl/data 누락 → 400', async () => {
    const r1 = await request(makeApp()).post('/api/gsheet-export').send({ data: {} })
    const r2 = await request(makeApp()).post('/api/gsheet-export').send({
      scriptUrl: 'https://script.google.com/exec',
    })
    expect(r1.status).toBe(400)
    expect(r2.status).toBe(400)
  })

  it('JSON 파싱 실패 응답 → ok:false + 본문 echo', async () => {
    mockFetch({ text: '<html>error</html>' })
    const res = await request(makeApp()).post('/api/gsheet-export').send({
      scriptUrl: 'https://script.google.com/macros/s/abc/exec',
      data: { x: 1 },
    })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(false)
    expect(res.body.error).toContain('<html>')
  })

  it('네트워크 실패 → 500', async () => {
    global.fetch = vi.fn(async () => { throw new Error('boom') })
    const res = await request(makeApp()).post('/api/gsheet-export').send({
      scriptUrl: 'https://script.google.com/macros/s/abc/exec',
      data: { x: 1 },
    })
    expect(res.status).toBe(500)
    expect(res.body.ok).toBe(false)
  })
})
