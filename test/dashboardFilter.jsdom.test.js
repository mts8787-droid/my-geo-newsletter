// 대시보드 임베디드 클라이언트 — 필터 조작 무예외 + Hero 반응 (jsdom 통합)
// 회귀 (2026-09-15→17): 미출시 제외 패치가 updateMonthlyProductScores 안에서 선언 전
// 변수(prodId, var 호이스팅)를 참조 → 국가 필터 변경마다 TypeError → 월간 카드·트렌드
// 갱신 중단, 사용자 체감 "상단 수치가 필터에 안 바뀜". 빌드가 못 잡는 문자열 임베드
// 클라라 jsdom 으로 실제 이벤트 경로를 돌려 검증한다.
import { describe, it, expect } from 'vitest'
import fs from 'fs'
import { JSDOM } from 'jsdom'

const load = async () => {
  const { generateDashboardHTML } = await import('../src/dashboard/dashboardTemplate.js')
  // 실데이터가 있으면 사용, 없으면(CI) 최소 픽스처
  let d = {}
  try { d = JSON.parse(fs.readFileSync(new URL('../data/dashboard-sync-data.json', import.meta.url), 'utf8')) } catch {}
  const products = (d.productsPartial || [
    { id: 'tv', kr: 'TV', bu: 'MS', score: 87, prev: 85, vsComp: 88, compName: 'SAMSUNG' },
    { id: 'audio', kr: '오디오', bu: 'MS', score: 29, prev: 30, vsComp: 55, compName: 'Sonos' },
  ]).map(p => ({ ...p, weekly: (d.weeklyMap || {})[p.id] || [80, 81], monthly: [], compRatio: 100, status: 'lead', monthlyScores: p.monthlyScores }))
  const extra = { unlaunchedMap: d.unlaunchedMap || { 'VN|AV': true }, weeklyPR: d.weeklyPR || [], weeklyPRLabels: d.weeklyPRLabels || [], monthlyPR: d.monthlyPR || [], monthlyPRLabels: d.monthlyPRLabels || [], weeklyBrandPrompt: [], weeklyBrandPromptLabels: [], prTopicList: [], weeklyLabelsFull: [] }
  const html = generateDashboardHTML(d.meta || {}, d.total || { score: 43 }, products, [], {}, 'ko',
    d.productsCnty || [], [], d.weeklyLabels || ['W1', 'W2'], d.weeklyAll || {}, {}, {}, { monthlyVis: d.monthlyVis || [] }, extra)
  const dom = new JSDOM(html, { runScripts: 'dangerously', url: 'https://test.local/p/x' })
  const errs = []
  dom.window.addEventListener('error', e => errs.push(e.message))
  await new Promise(r => setTimeout(r, 300))
  return { dom, errs }
}

describe('대시보드 필터 — 임베디드 클라이언트 (jsdom)', () => {
  it('국가·제품 체크박스 토글 시 JS 예외가 없어야 한다', async () => {
    const { dom, errs } = await load()
    const w = dom.window, doc = w.document
    const boxes = [...doc.querySelectorAll('input[type="checkbox"]')]
      .filter(b => /^(US|CA|UK|DE|ES|BR|MX|IN|AU|VN|tv|monitor|audio|washer|fridge|dw|vacuum|cooking|rac|aircare)$/.test(b.value || ''))
    expect(boxes.length).toBeGreaterThan(0)
    for (const b of boxes) {
      b.checked = !b.checked
      b.dispatchEvent(new w.Event('change', { bubbles: true }))
    }
    await new Promise(r => setTimeout(r, 200))
    expect(errs, 'JS 에러: ' + errs.slice(0, 3).join(' | ')).toEqual([])
  }, 30000)

  it('국가 필터를 좁히면 Hero 수치가 변한다 (실데이터 있을 때)', async () => {
    const { dom } = await load()
    const w = dom.window, doc = w.document
    const hero = () => [...doc.querySelectorAll('.hero-score')].map(e => e.textContent).join('/')
    const before = hero()
    const cn = [...doc.querySelectorAll('input[type="checkbox"]')].filter(b => /^(CA|UK|DE|ES|BR|MX|IN|AU|VN)$/.test(b.value || ''))
    if (cn.length < 5) return   // CI 최소 픽스처 — 국가 데이터 없으면 skip
    cn.forEach(b => { b.checked = false; b.dispatchEvent(new w.Event('change', { bubbles: true })) })
    await new Promise(r => setTimeout(r, 200))
    expect(hero()).not.toBe(before)
  }, 30000)
})
