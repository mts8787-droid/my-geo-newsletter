// GEO 액션아이템 대시보드 — 라우트(페이지·진척 API) + 렌더된 페이지 실동작(jsdom) 검증. 임시 DATA_DIR 사용.
import { describe, it, expect, afterAll } from 'vitest'
import express from 'express'
import request from 'supertest'
import { JSDOM } from 'jsdom'
import { mkdtempSync, rmSync, existsSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'

const TMP = mkdtempSync(join(tmpdir(), 'geo-actions-'))
process.env.DATA_DIR = TMP
const { geoActionsRouter, loadGeoActions } = await import('../../routes/geo-actions.js')
const { renderGeoActionsHTML } = await import('../../scripts/render-geo-actions.mjs')
afterAll(() => rmSync(TMP, { recursive: true, force: true }))

function makeApp() {
  const app = express()
  app.use(express.json())
  app.use(geoActionsRouter)
  return app
}
const src = loadGeoActions()
const firstId = src.data.rows[0].id

describe('데이터 (엑셀 v21 변환본)', () => {
  it('최신 파일 로드 + 규모', () => {
    expect(src.file).toMatch(/^geo_actions_v\d+\.json$/)
    expect(src.data.activities).toHaveLength(55)
    expect(src.data.groups).toHaveLength(229)
    expect(src.data.rows).toHaveLength(426)
    expect(src.data.groups.reduce((n, g) => n + g.points, 0)).toBe(348) // 국가별 관리포인트
    expect(src.data.dims.axes.map(a => a.code)).toEqual(['①', '②', '③', '④'])
  })
  it('엑셀 요약 시트 대조 항목 모두 일치', () => {
    const bad = src.data.checks.filter(c => !c.ok)
    expect(bad).toEqual([])
  })
  it('세부과제 묶음 ↔ 국가 실행 건 정합 (모든 행이 정확히 한 묶음에 속함)', () => {
    const seen = new Map()
    src.data.groups.forEach(g => g.rows.forEach(id => seen.set(id, (seen.get(id) || 0) + 1)))
    expect(seen.size).toBe(426)
    expect([...seen.values()].every(n => n === 1)).toBe(true)
  })
})

describe('GET /admin/geo-actions', () => {
  it('200 + 완전한 HTML + 서버 진척 API 주입', async () => {
    const res = await request(makeApp()).get('/admin/geo-actions')
    expect(res.status).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/html/)
    expect(res.text).toMatch(/^<!doctype html>/)
    expect(res.text).toContain('GEO 액션아이템 실행 대시보드')
    expect(res.text).toContain('window.GEO_PROGRESS_API="/api/geo-actions/progress"')
    expect(res.text).toContain("url('/font/LGEIText%20Bold.ttf')")
    expect(res.text).not.toContain('{{')
  })
})

describe('진척 API', () => {
  it('PUT → 저장, GET → 반영', async () => {
    const app = makeApp()
    const put = await request(app).put('/api/geo-actions/progress').send({ items: [{ id: firstId, s: '진행', m: '착수 회의 완료' }] })
    expect(put.status).toBe(200)
    expect(put.body.ok).toBe(true)
    expect(existsSync(join(TMP, 'geo-actions-progress.json'))).toBe(true)
    const get = await request(app).get('/api/geo-actions/progress')
    expect(get.body.progress[firstId]).toMatchObject({ s: '진행', m: '착수 회의 완료' })
  })
  it('미착수 + 빈 메모 = 삭제', async () => {
    const app = makeApp()
    await request(app).put('/api/geo-actions/progress').send({ items: [{ id: firstId, s: '미착수', m: '' }] })
    const get = await request(app).get('/api/geo-actions/progress')
    expect(get.body.progress[firstId]).toBeUndefined()
  })
  it.each([
    [{ items: [] }, 'items'],
    [{ items: [{ id: 'NOPE-1', s: '완료' }] }, '알 수 없는'],
    [{ items: [{ id: firstId, s: 'done' }] }, '진척 값'],
    [{ items: [{ id: firstId, s: '완료', m: 'x'.repeat(501) }] }, '메모'],
  ])('잘못된 입력 → 400 (%#)', async (body, msg) => {
    const res = await request(makeApp()).put('/api/geo-actions/progress').send(body)
    expect(res.status).toBe(400)
    expect(res.body.error).toContain(msg)
  })
})

describe('렌더된 페이지 실동작 (jsdom)', () => {
  function open(opts, url = 'https://geo.test/admin/geo-actions?view=home') {
    const errors = []
    const html = renderGeoActionsHTML(src.data, opts)
    const dom = new JSDOM(html, { runScripts: 'dangerously', url, beforeParse(w) {
      w.scrollTo = () => {}
      w.addEventListener('error', e => errors.push(e.message))
      w.fetch = (u, init) => { (w.__calls = w.__calls || []).push({ u, init }); return Promise.resolve({ ok: true, json: () => Promise.resolve({ ok: true }) }) }
    } })
    return { d: dom.window.document, w: dom.window, errors }
  }
  it('한눈에 → 주제 클릭 → 할 일 목록·브리핑', () => {
    const { d, errors } = open({})
    expect(d.querySelectorAll('.tile')).toHaveLength(21)
    expect(d.querySelectorAll('.ph')).toHaveLength(4)
    expect(d.querySelectorAll('.ax')).toHaveLength(4)
    expect(d.querySelector('.say').textContent).toContain('229개 세부과제')
    d.querySelector('[data-go-topic="TV|B. 시청 환경 대응 성능"]').click()
    expect(d.querySelector('.brief')).not.toBeNull()
    expect(d.querySelectorAll('.task').length).toBe(src.data.groups.filter(g => g.tkey === 'TV|B. 시청 환경 대응 성능').length)
    d.querySelector('#fReset').click()
    expect(d.querySelectorAll('.task')).toHaveLength(229)
    expect(errors).toEqual([])
  })
  it('한눈에 → 개선 영역 클릭 → 그 영역 할 일만', () => {
    const { d, errors } = open({})
    d.querySelector('[data-go-axis="④"]').click()
    expect(d.querySelectorAll('.task')).toHaveLength(src.data.groups.filter(g => g.axis === '④').length)
    expect(d.querySelector('.resbar').textContent).toContain('관리포인트')
    expect(errors).toEqual([])
  })
  it('서버 모드: 초기 진척 표시 + 상태 변경 시 PUT 호출', async () => {
    const { d, w, errors } = open({ progressApi: '/api/geo-actions/progress', progress: {} }, 'https://geo.test/admin/geo-actions?view=tasks')
    const btn = d.querySelector('[data-cyc]')
    const id = btn.dataset.cyc
    btn.click()
    expect(d.querySelector(`[data-cyc="${id}"]`).className).toContain('s-진행')
    await new Promise(r => setTimeout(r, 450))
    const call = (w.__calls || []).find(c => c.u === '/api/geo-actions/progress')
    expect(call.init.method).toBe('PUT')
    expect(call.init.headers['X-Requested-With']).toBeTruthy()
    expect(JSON.parse(call.init.body).items).toEqual([{ id, s: '진행', m: '' }])
    expect(errors).toEqual([])
  })
  it('공개본(읽기 전용): 진척 표시만, 입력 버튼·불러오기 없음', () => {
    const progress = { [src.data.rows[0].id]: { s: '완료', m: '', t: '' } }
    const { d, errors } = open({ readOnly: true, progress }, 'https://geo.test/p/GEO-Action-Items?view=tasks')
    expect(d.querySelectorAll('[data-cyc]')).toHaveLength(0)
    expect(d.querySelector('#progFile').closest('label').hidden).toBe(true)
    expect(d.querySelectorAll('.task .st.s-완료').length).toBeGreaterThan(0)
    d.querySelector('.task').click()
    expect(d.querySelectorAll('#dBody .sseg')).toHaveLength(0)
    expect(d.querySelector('#dBody').textContent).toContain('읽기 전용')
    expect(errors).toEqual([])
  })
  it('진척 화면: 시점·영역·제품·조직·국가 막대 (v21 은 측정 과제 없음 → 목표 표 없음)', () => {
    const { d, errors } = open({}, 'https://geo.test/admin/geo-actions?view=track')
    expect(d.querySelectorAll('.sb').length).toBeGreaterThan(20)
    expect(d.querySelectorAll('tr.link')).toHaveLength(0)
    expect(d.querySelector('#main').textContent).not.toContain('성과')
    expect(errors).toEqual([])
  })
})
