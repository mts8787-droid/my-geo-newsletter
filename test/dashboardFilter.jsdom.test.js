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

  // 회귀 (2026-09-21): 월간+국가별 보기에서 최상단 전체 점수가 선택 월과 무관하게 최신 월로 고정.
  // 원인 — calcFilteredDataCB 국가 분기가 countryTotals(최신월)·r.score(최신월)만 사용, _curMonthIdxIn12 미반영.
  it('단일 국가 + 월 드롭다운 변경 시 Hero 가 선택 월의 국가 TTL 값을 보여야 한다 (실데이터)', async () => {
    const { dom } = await load()
    const w = dom.window, doc = w.document
    // 실데이터의 US 월별 TTL 필요 — 없으면(CI 최소 픽스처) skip
    if (!Array.isArray(w._monthlyVis)) return
    const usRows = w._monthlyVis.filter(r => r.country === 'US' &&
      ['TOTAL', 'TTL', ''].includes(String(r.division || '').toUpperCase()) &&
      ['TOTAL', 'ALL'].includes(String(r.llmModel || 'Total').toUpperCase()))
    if (usRows.length < 2) return
    // US 단일 국가 선택
    const cn = [...doc.querySelectorAll('input[data-filter="country"]')]
    if (!cn.length) return
    cn.forEach(b => { b.checked = b.value === 'US'; b.dispatchEvent(new w.Event('change', { bubbles: true })) })
    await new Promise(r => setTimeout(r, 200))
    // 최신이 아닌 월 하나 선택 (드롭다운 텍스트는 3-letter 영문으로 정규화됨)
    const sel = doc.getElementById('vis-month-select')
    if (!sel || sel.options.length < 2) return
    const MN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const latestOpt = sel.options[sel.options.length - 1]
    const pickOpt = [...sel.options].find(o => o.textContent !== latestOpt.textContent)
    sel.value = pickOpt.value
    w.switchVisMonth(parseInt(pickOpt.value))
    await new Promise(r => setTimeout(r, 200))
    // 기대값 — 선택 월의 US TTL lg
    const mi = MN.indexOf(pickOpt.textContent)
    const expected = usRows.find(r => {
      const km = String(r.date).match(/(\d{1,2})월/)
      return km && parseInt(km[1]) - 1 === mi
    })
    if (!expected) return
    const monthlyHero = [...doc.querySelectorAll('#hero-section, .hero')]
      .find(h => (h.getAttribute('data-period') || 'monthly') === 'monthly')
    const scoreEl = monthlyHero && monthlyHero.querySelector('.hero-score')
    expect(scoreEl && scoreEl.textContent).toBe((+expected.lg).toFixed(1))
  }, 30000)
})
