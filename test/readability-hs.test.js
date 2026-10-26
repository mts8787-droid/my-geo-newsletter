// HS 콘텐츠 탭 (HS 디지털컨텐츠팀 URL 시트 전수, 2026-10-26) — 집계 헬퍼 + 대시보드 탭/필터.
// data.md §7.7 Test-Verify-Document Loop.
import { describe, it, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { normalizeHsKey, parseHsSheet, hsSheetHit, buildHsRecord } from '../scripts/aggregate-readability.mjs'
import { renderReadabilityHTML } from '../scripts/render-readability.mjs'
import { T } from '../src/shared/readabilityI18n.js'

const SHEET = [
  'url,key,cc,seg,page_type,content_type1,content_type2,product,product_raw,live_date',
  'https://www.lg.com/uk/washing-machines/guide/,https://www.lg.com/uk/washing-machines/guide,uk,uk,buying_guide,buying guide,buying guide,WM,WM (F/L),2026-07-05',
  'https://www.lg.com/sa_en/refrigerators/faq/,https://www.lg.com/sa_en/refrigerators/faq,sa,sa_en,microsite,Microsite,FAQ,REF,"ref, common",2026-09-30',
].join('\n')

describe('HS 시트 매칭', () => {
  it('URL 키 정규화 — 프로토콜·www·끝 슬래시·쿼리 무시, 소문자', () => {
    expect(normalizeHsKey('https://www.lg.com/UK/Washing-Machines/guide/?x=1#top')).toBe('lg.com/uk/washing-machines/guide')
    expect(normalizeHsKey('http://lg.com/uk/a')).toBe('lg.com/uk/a')
  })
  it('시트 파싱 — 따옴표 셀 처리, key 기준 사전', () => {
    const m = parseHsSheet('﻿' + SHEET)
    expect(m.size).toBe(2)
    const sa = m.get('lg.com/sa_en/refrigerators/faq')
    expect(sa).toMatchObject({ cc: 'sa', seg: 'sa_en', pt: 'microsite', t2: 'FAQ', pr: 'REF', ld: '2026-09-30' })
  })
  it('run 페이지 매칭 — 요청 URL · 결과 URL · 리다이렉트 도착 URL 순', () => {
    const m = parseHsSheet(SHEET)
    expect(hsSheetHit(m, { url: 'https://www.lg.com/uk/washing-machines/guide/', result: {} }).rec.cc).toBe('uk')
    expect(hsSheetHit(m, { url: 'https://www.lg.com/uk/old', result: { redirect: { final_url: 'https://www.lg.com/sa_en/refrigerators/faq' } } }).rec.cc).toBe('sa')
    expect(hsSheetHit(m, { url: 'https://www.lg.com/uk/other', result: {} })).toBeNull()
    expect(hsSheetHit(null, { url: 'x', result: {} })).toBeNull()
  })
  it('레코드 — 적용 체크·실패 체크 보존, 미측정은 상태만', () => {
    const rec = { url: 'https://www.lg.com/uk/g', cc: 'uk', seg: 'uk', pt: 'buying_guide', t2: 'buying guide', pr: 'WM', ld: '2026-07-05' }
    const score = { total: 80, breakdown: { seo: { items: { seo_h1: { pass: true }, seo_title: { pass: false }, seo_robots_hdr: { pass: true, na: true } } }, citable_content: { items: { ai_citable: { pass: null } } } } }
    const ok = buildHsRecord(rec, { score }, { id: 'buying_guide' }, true)
    expect(ok).toMatchObject({ u: rec.url, cc: 'uk', pt: 'buying_guide', t2: 'buying guide', pr: 'WM', st: 'ok', s: 80 })
    expect(ok._app).toEqual(['seo_h1', 'seo_title'])   // na·null 제외
    expect(ok._fail).toEqual(['seo_title'])
    const err = buildHsRecord(rec, { score: { total: 34 } }, null, false)
    expect(err.st).toBe('error'); expect(err.s).toBeNull(); expect(err.pt).toBe('buying_guide')
  })
})

// 가짜 스냅샷 — 국가 1 + HS 블록(측정 2 · 미측정 1)
const CHECKS = { seo_h1: { label: '#16 H1', cat: 'seo', pass: 1, applicable: 1 }, ai_citable: { label: '#36 Citable', cat: 'geo_content', pass: 0, applicable: 1 } }
const scope = () => ({ urlCount: 1, scoredCount: 1, avgScore: 70, grades: {}, categories: { seo: 100, geo_content: 0 }, checks: CHECKS, pageTypes: { pdp: { label: 'PDP', count: 1, avgScore: 70, categories: { seo: 100 }, checks: CHECKS } }, bots: {}, tiers: {} })
const snap = {
  channel: 'staging', auditType: 'regular', date: '2026-10-24', categoryLabels: { seo: 'Basic SEO', geo_content: '고인용 콘텐츠' },
  countries: { uk: { auditedAt: '2026-10-24', runId: 'x', ...scope() } },
  overall: scope(),
  hs: {
    sheet: 'hs_contents.csv', total: 3, measured: 2, avgScore: 75, auditCountries: ['uk'], sites: { uk: 'UK', sa: 'Saudi Arabia' },
    checkIds: ['seo_h1', 'ai_citable'],
    urls: [
      { u: 'https://www.lg.com/uk/g1', cc: 'uk', seg: 'uk', pt: 'buying_guide', t2: 'buying guide', pr: 'WM', ld: '2026-09-01', st: 'ok', s: 100, na: [], f: [] },
      { u: 'https://www.lg.com/sa_en/f1', cc: 'sa', seg: 'sa_en', pt: 'microsite', t2: 'FAQ', pr: 'REF', ld: '2026-03-01', st: 'ok', s: 50, na: [], f: [1] },
      { u: 'https://www.lg.com/sa_en/f2', cc: 'sa', seg: 'sa_en', pt: 'microsite', t2: 'FAQ', pr: 'REF', ld: '', st: 'unmeasured', s: null, na: [], f: [] },
    ],
  },
}
const index = { snapshots: [{ date: '2026-10-24', channel: 'staging', auditType: 'regular', countries: ['uk'] }] }
const boot = async (lang, hash) => {
  const html = renderReadabilityHTML({ snapshot: snap, index, snapshots: [snap], adminMode: false, lang })
  const dom = new JSDOM(html, { runScripts: 'dangerously', url: 'https://test.local/x' + (hash || '') })
  await new Promise(r => setTimeout(r, 200))
  return { html, doc: dom.window.document }
}

describe('대시보드 — 상단 GNB(Global Total / HS) + 공통 4탭 + 측정항목 필터 (2026-10-26)', () => {
  it('i18n KO/EN 키가 일치하고 GNB·항목 필터·HS 키가 있다', () => {
    expect(Object.keys(T.ko).sort()).toEqual(Object.keys(T.en).sort())
    expect(T.ko.scopeGlobal).toBe('Global Total')
    expect(T.en.scopeHs).toBe('HS')
    expect(T.en.fItems).toBe('Items')
  })
  it('GNB 는 Global Total / HS, 탭은 4개 공통 — Global 에서는 유형·제품 필터 비활성 + 참고 표시', async () => {
    const { doc } = await boot('ko')
    expect([...doc.querySelectorAll('#rd-scopenav button')].map(b => b.getAttribute('data-scope'))).toEqual(['global', 'hs'])
    expect(doc.querySelector('#rd-scopenav button.active').textContent).toBe('Global Total')
    expect([...doc.querySelectorAll('#rd-tabnav button')].map(b => b.getAttribute('data-tab'))).toEqual(['country', 'pagetype', 'raw', 'criteria'])
    expect(doc.getElementById('rd-t2').disabled).toBe(true)
    expect(doc.getElementById('rd-pr').disabled).toBe(true)
    expect(doc.getElementById('rd-hs-note').style.display).not.toBe('none')
    expect(doc.getElementById('rd-hs-note').textContent).toBe('HS 에서만 사용')
    // 국가 탭 hero 에 HS 흔적 한 줄
    expect(doc.getElementById('rd-panel').textContent).toContain('HS 콘텐츠')
    // 측정항목 필터 버튼 — 기본 전체
    expect(doc.getElementById('rd-items-btn').textContent).toBe('전체 항목')
  }, 30000)
  it('#hs — HS 범위 국가별: 필터 활성, 사이트 옵션 시트 전수(감사 국가 먼저), 사이트별·영역·개선항목·신규 섹션', async () => {
    const { doc } = await boot('ko', '#hs')
    expect(doc.querySelector('#rd-scopenav button.active').getAttribute('data-scope')).toBe('hs')
    expect(doc.querySelector('#rd-tabnav button.active').getAttribute('data-tab')).toBe('country')
    expect(doc.getElementById('rd-t2').disabled).toBe(false)
    expect(doc.getElementById('rd-hs-note').style.display).toBe('none')
    expect([...doc.getElementById('rd-cc').options].map(o => o.value)).toEqual(['all', 'uk', 'sa'])
    expect([...doc.getElementById('rd-t2').options].map(o => o.value)).toEqual(['all', 'FAQ', 'buying guide'])
    const panel = doc.getElementById('rd-panel')
    expect(panel.querySelector('.hero-score').textContent).toBe('75')          // (100+50)/2, 미측정 제외
    expect(panel.textContent).toContain('① 사이트별 점수')
    expect(panel.textContent).toContain('HS-Others (감사 국가 밖)')
    expect(panel.textContent).toContain('③ 개선 항목')
    expect(panel.querySelector('.hs-matrix')).toBeNull()                           // 히트맵은 페이지타입별 탭
  }, 30000)
  it('#hs/pagetype — 페이지타입별 막대 + 콘텐츠 유형×제품 히트맵', async () => {
    const { doc } = await boot('ko', '#hs/pagetype')
    const panel = doc.getElementById('rd-panel')
    expect(panel.textContent).toContain('① 페이지타입별 점수')
    expect(panel.querySelector('.hs-matrix')).not.toBeNull()
    expect(panel.textContent).toContain('콘텐츠 유형 × 제품 점수')
  }, 30000)
  it('#hs/raw — URL 전수 표(미측정 포함) + 항목·결과 필터', async () => {
    const { doc } = await boot('ko', '#hs/raw')
    const panel = doc.getElementById('rd-panel')
    expect(panel.querySelectorAll('.fails-table tbody tr').length).toBe(3)
    // 항목 선택 → 그 항목이 적용된 측정 URL 만, 결과 열 PASS/FAIL
    const fc = doc.getElementById('rd-hs-fcheck')
    fc.value = snap.hs.checkIds[1]; fc.dispatchEvent(new doc.defaultView.Event('change'))
    await new Promise(r => setTimeout(r, 100))
    const rows = [...doc.querySelectorAll('#rd-panel .fails-table tbody tr')]
    expect(rows.length).toBe(2)
    expect(rows.map(r => r.querySelector('.rd-fail, .rd-pass').textContent).sort()).toEqual(['FAIL', 'PASS'])
    const fp = doc.getElementById('rd-hs-fpf')
    fp.value = 'fail'; fp.dispatchEvent(new doc.defaultView.Event('change'))
    await new Promise(r => setTimeout(r, 100))
    expect(doc.querySelectorAll('#rd-panel .fails-table tbody tr').length).toBe(1)
  }, 30000)
  it('유형 필터 변경 → 해당 유형만 집계 (FAQ: 50점, 개선 항목에 실패 항목)', async () => {
    const { doc } = await boot('ko', '#hs')
    const sel = doc.getElementById('rd-t2'); sel.value = 'FAQ'
    sel.dispatchEvent(new doc.defaultView.Event('change'))
    await new Promise(r => setTimeout(r, 100))
    const panel = doc.getElementById('rd-panel')
    expect(panel.querySelector('.hero-score').textContent).toBe('50')
    expect(panel.textContent).toContain('Citable Sentences')   // 실패 항목이 개선 항목 표에 (라벨은 체크리스트 사전 우선)
    expect(panel.textContent).toContain('0% (0/1)')
  }, 30000)
  it('측정항목 체크박스 — 영역 그룹 해제 시 안내 문구 + 항목별 섹션에서 제외, 점수는 그대로', async () => {
    const { doc } = await boot('ko', '#hs')
    const pop = doc.getElementById('rd-items-pop')
    const ids = [...pop.querySelectorAll('input[data-id]')].map(b => b.getAttribute('data-id'))
    expect(ids).toContain(snap.hs.checkIds[1])
    // 실패 항목(checkIds[1]) 하나만 해제
    const box = pop.querySelector('input[data-id="' + snap.hs.checkIds[1] + '"]')
    box.checked = false; box.dispatchEvent(new doc.defaultView.Event('change', { bubbles: true }))
    await new Promise(r => setTimeout(r, 100))
    const panel = doc.getElementById('rd-panel')
    expect(doc.getElementById('rd-items-btn').textContent).toBe((ids.length - 1) + '/' + ids.length + '개 항목')
    expect(panel.textContent).toContain('측정항목 ' + (ids.length - 1) + '/' + ids.length + '개 선택')
    expect(panel.querySelector('.hero-score').textContent).toBe('75')   // 점수는 전체 항목 기준 유지
    expect(panel.textContent).not.toContain('0% (0/1)')                 // 개선 항목에서 제외
    // Global 범위로 돌아가도 선택 유지 — 국가별 탭 영역 카드에서 그 항목이 빠진다
    doc.querySelector('#rd-scopenav button[data-scope="global"]').click()
    await new Promise(r => setTimeout(r, 100))
    expect(doc.getElementById('rd-panel').textContent).toContain('측정항목 ' + (ids.length - 1))
  }, 30000)
  it('EN — GNB·탭·필터·섹션 문구가 영문', async () => {
    const { doc } = await boot('en', '#hs/pagetype')
    expect([...doc.querySelectorAll('#rd-scopenav button')].map(b => b.textContent)).toEqual(['Global Total', 'HS'])
    expect(doc.getElementById('rd-panel').textContent).toContain('Score by Content Type × Product')
    expect(doc.getElementById('rd-panel').textContent).toContain('Score by Page Type')
    expect(doc.getElementById('rd-hs-note').textContent).toBe('HS only')
    expect(doc.getElementById('rd-items-btn').textContent).toBe('All items')
  }, 30000)
})
