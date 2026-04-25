import { describe, it, expect, beforeEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

// google-translate-api-x 모킹
const translateMock = vi.fn()
vi.mock('google-translate-api-x', () => ({
  default: (...args) => translateMock(...args),
}))

const { translateRouter } = await import('../../routes/translate.js')

function makeApp() {
  const app = express()
  app.use(express.json({ limit: '5mb' }))
  app.use(translateRouter)
  return app
}

beforeEach(() => {
  translateMock.mockReset()
})

describe('POST /api/translate', () => {
  it('정상 번역 → translated 배열 반환', async () => {
    translateMock.mockResolvedValue([
      { text: 'Hello' }, { text: 'World' },
    ])
    const res = await request(makeApp()).post('/api/translate').send({
      texts: ['안녕', '세계'], from: 'ko', to: 'en',
    })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
    expect(res.body.translated).toEqual(['Hello', 'World'])
    expect(translateMock).toHaveBeenCalledOnce()
    expect(translateMock.mock.calls[0][1]).toEqual({ from: 'ko', to: 'en' })
  })

  it('단일 결과(객체) 반환도 배열로 처리', async () => {
    translateMock.mockResolvedValue({ text: 'Hello' })
    const res = await request(makeApp()).post('/api/translate').send({
      texts: ['안녕'], to: 'en',
    })
    expect(res.body.translated).toEqual(['Hello'])
  })

  it('from 미지정 시 기본값 ko 사용', async () => {
    translateMock.mockResolvedValue([{ text: 'A' }])
    await request(makeApp()).post('/api/translate').send({ texts: ['가'], to: 'en' })
    expect(translateMock.mock.calls[0][1].from).toBe('ko')
  })

  it('TRANSLATE_BATCH(20) 초과 시 배치 분할', async () => {
    // 25개 입력 → 20 + 5 두 번 호출
    translateMock.mockImplementation((batch) =>
      Promise.resolve(batch.map((t, i) => ({ text: `${t}-en` }))),
    )
    const texts = Array.from({ length: 25 }, (_, i) => `t${i}`)
    const res = await request(makeApp()).post('/api/translate').send({ texts, to: 'en' })
    expect(res.status).toBe(200)
    expect(res.body.translated).toHaveLength(25)
    expect(translateMock).toHaveBeenCalledTimes(2)
    expect(translateMock.mock.calls[0][0]).toHaveLength(20)
    expect(translateMock.mock.calls[1][0]).toHaveLength(5)
  })

  it('texts 빈 배열 → 400 (Zod)', async () => {
    const res = await request(makeApp()).post('/api/translate').send({ texts: [], to: 'en' })
    expect(res.status).toBe(400)
    expect(translateMock).not.toHaveBeenCalled()
  })

  it('to 누락 → 400', async () => {
    const res = await request(makeApp()).post('/api/translate').send({ texts: ['x'] })
    expect(res.status).toBe(400)
  })

  it('번역 라이브러리 throw → 500', async () => {
    translateMock.mockRejectedValue(new Error('rate limit'))
    const res = await request(makeApp()).post('/api/translate').send({
      texts: ['안녕'], to: 'en',
    })
    expect(res.status).toBe(500)
    expect(res.body.ok).toBe(false)
    expect(res.body.error).toContain('rate limit')
  })
})
