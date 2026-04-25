import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import express from 'express'
import request from 'supertest'

// storage 모킹 — visibility/dashboard sync-data만 사용
const fakeSync = { visibility: null, dashboard: null }
vi.mock('../../lib/storage.js', () => ({
  readModeSyncData: vi.fn((mode) => fakeSync[mode]),
  writeModeSyncData: vi.fn((mode, data) => { fakeSync[mode] = data }),
}))

const { adminPagesRouter } = await import('../../routes/admin-pages.js')

function makeApp() {
  const app = express()
  app.use(express.json())
  app.use(adminPagesRouter)
  return app
}

beforeEach(() => {
  fakeSync.visibility = null
  fakeSync.dashboard = null
})

let originalFetch
beforeEach(() => { originalFetch = global.fetch })
afterEach(() => { global.fetch = originalFetch })

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

describe('/admin/de-prompts — 필터/dedup/sort', () => {
  function makePrompts(...rows) {
    return rows.map(([country, branded, category, topic, cej, prompt]) => ({
      country, branded, category, topic, cej, prompt, division: 'X', launched: 'Y',
    }))
  }

  it('DE + non-branded + 조합 dedup', async () => {
    fakeSync.visibility = {
      appendixPrompts: makePrompts(
        ['DE', 'NB', 'TV', 'OLED', 'Awareness', 'p1'],
        ['DE', 'nonbranded', 'TV', 'OLED', 'Awareness', 'p2 (dup combo)'],
        ['DE', 'NB', 'TV', 'OLED', 'Consideration', 'p3'],
        ['DE', 'NB', 'AC', 'Inverter', 'Awareness', 'p4'],
        ['US', 'NB', 'TV', 'OLED', 'Awareness', 'p5 (other country)'],
        ['DE', 'B', 'TV', 'OLED', 'Awareness', 'p6 (branded)'],
      ),
    }
    const res = await request(makeApp()).get('/admin/de-prompts')
    expect(res.status).toBe(200)
    expect(res.text).toContain('p1')          // 첫 NB 조합
    expect(res.text).not.toContain('p2 (dup combo)')   // 같은 (TV,OLED,Awareness) 중복
    expect(res.text).toContain('p3')          // 다른 CEJ
    expect(res.text).toContain('p4')          // 다른 category
    expect(res.text).not.toContain('p5 (other country)')
    expect(res.text).not.toContain('p6 (branded)')
    // 전체:6, DE:4, 조합:3
    expect(res.text).toMatch(/전체:.*?6/)
    expect(res.text).toMatch(/DE:.*?4/)
    expect(res.text).toMatch(/조합:.*?3/)
  })

  it('visibility 없으면 dashboard fallback', async () => {
    fakeSync.dashboard = {
      appendixPrompts: [{ country: 'DE', branded: 'NB', category: 'TV', topic: 'X', cej: 'A', prompt: 'fb1' }],
    }
    const res = await request(makeApp()).get('/admin/de-prompts')
    expect(res.text).toContain('fb1')
    expect(res.text).toContain('dashboard') // source 표기
  })

  it('데이터 없음 → 빈 메시지', async () => {
    const res = await request(makeApp()).get('/admin/de-prompts')
    expect(res.text).toContain('DE 프롬프트가 없습니다')
  })
})

describe('/admin/de-prompts.csv — CSV escaping', () => {
  it('쉼표·따옴표·개행 셀 → 따옴표 wrap + " 이스케이프', async () => {
    fakeSync.visibility = {
      appendixPrompts: [
        { country: 'DE', branded: 'NB', category: 'TV', topic: 'a,b', cej: 'c"d', prompt: 'line1\nline2', division: '', launched: '' },
      ],
    }
    const res = await request(makeApp()).get('/admin/de-prompts.csv')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/csv/)
    expect(res.headers['content-disposition']).toContain('de-prompts.csv')
    // BOM 포함
    expect(res.text.charCodeAt(0)).toBe(0xFEFF)
    // 쉼표 셀 → 따옴표 wrap
    expect(res.text).toContain('"a,b"')
    // 따옴표 → 이중 따옴표
    expect(res.text).toContain('"c""d"')
    // 개행 셀 → 따옴표 wrap
    expect(res.text).toContain('"line1\nline2"')
  })

  it('헤더 행 포함', async () => {
    fakeSync.visibility = { appendixPrompts: [] }
    const res = await request(makeApp()).get('/admin/de-prompts.csv')
    expect(res.text).toContain('Category,Topic,CEJ,Prompt')
  })
})

describe('/admin/de-prompts.xlsx — XLSX 응답', () => {
  it('200 + xlsx content-type + 비빈 buffer', async () => {
    fakeSync.visibility = {
      appendixPrompts: [{ country: 'DE', branded: 'NB', category: 'TV', topic: 'a', cej: 'b', prompt: 'p', division: '', launched: '' }],
    }
    const res = await request(makeApp()).get('/admin/de-prompts.xlsx').buffer().parse((res, cb) => {
      const chunks = []
      res.on('data', (c) => chunks.push(c))
      res.on('end', () => cb(null, Buffer.concat(chunks)))
    })
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/spreadsheetml/)
    expect(res.headers['content-disposition']).toContain('de-prompts.xlsx')
    expect(res.body.length).toBeGreaterThan(100)
    // XLSX는 ZIP 시그니처(PK) 시작
    expect(res.body[0]).toBe(0x50)
    expect(res.body[1]).toBe(0x4B)
  })
})

describe('POST /admin/de-prompts/sync-sheet — 시트 동기화', () => {
  it('유효하지 않은 sheet 입력 → 400', async () => {
    const res = await request(makeApp())
      .post('/admin/de-prompts/sync-sheet')
      .type('form').send({ sheet: 'not-a-url-or-id' })
    expect(res.status).toBe(400)
    expect(res.text).toContain('유효한')
  })

  it('full URL → sheet ID 추출 → 시트 동기화 → redirect', async () => {
    // CSV: country, prompts, branded, category, topic, cej, division, launched 등 헤더
    const csv = [
      'country,prompts,branded,category,topic,cej',
      'DE,Wie kaufe ich einen TV?,NB,TV,OLED,Awareness',
      'DE,Welcher OLED?,NB,TV,OLED,Consideration',
    ].join('\n')
    global.fetch = vi.fn(async () => ({
      ok: true, status: 200, text: async () => csv,
    }))
    const res = await request(makeApp())
      .post('/admin/de-prompts/sync-sheet')
      .type('form').send({
        sheet: 'https://docs.google.com/spreadsheets/d/ABC123_xyz-456/edit',
        tab: 'TestTab',
      })
    expect(res.status).toBe(302)
    expect(res.headers.location).toBe('/admin/de-prompts')
    expect(global.fetch).toHaveBeenCalledOnce()
    expect(global.fetch.mock.calls[0][0]).toContain('ABC123_xyz-456')
    expect(global.fetch.mock.calls[0][0]).toContain('sheet=TestTab')
    expect(fakeSync.visibility).toBeTruthy()
    expect(fakeSync.visibility.appendixPrompts).toBeInstanceOf(Array)
  })

  it('순수 ID(20자 이상)도 허용', async () => {
    global.fetch = vi.fn(async () => ({
      ok: true, status: 200, text: async () => 'country,prompts\nDE,test',
    }))
    const res = await request(makeApp())
      .post('/admin/de-prompts/sync-sheet')
      .type('form').send({ sheet: 'A'.repeat(25) })
    // 파싱 결과가 비어있을 수 있음 → 422 또는 302
    expect([302, 422]).toContain(res.status)
  })

  it('Google Sheets non-2xx → 동일 status 반환', async () => {
    global.fetch = vi.fn(async () => ({
      ok: false, status: 404, text: async () => 'not found',
    }))
    const res = await request(makeApp())
      .post('/admin/de-prompts/sync-sheet')
      .type('form').send({ sheet: 'https://docs.google.com/spreadsheets/d/AAA111_xx/edit' })
    expect(res.status).toBe(404)
    expect(res.text).toContain('Google Sheets')
  })

  it('네트워크 throw → 500', async () => {
    global.fetch = vi.fn(async () => { throw new Error('boom') })
    const res = await request(makeApp())
      .post('/admin/de-prompts/sync-sheet')
      .type('form').send({ sheet: 'https://docs.google.com/spreadsheets/d/AAA111_xx/edit' })
    expect(res.status).toBe(500)
    expect(res.text).toContain('동기화 실패')
  })
})
