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

describe('대시보드 — HS 콘텐츠 탭', () => {
  it('i18n KO/EN 키가 일치하고 HS 키가 있다', () => {
    expect(Object.keys(T.ko).sort()).toEqual(Object.keys(T.en).sort())
    expect(T.en.tabHs).toBe('HS Content')
  })
  it('탭이 노출되고, 다른 탭에서는 유형·제품 필터가 비활성 + 참고 표시', async () => {
    const { doc } = await boot('ko')
    const tabs = [...doc.querySelectorAll('#rd-tabnav button')].map(b => b.getAttribute('data-tab'))
    expect(tabs).toEqual(['country', 'pagetype', 'hs', 'raw', 'criteria'])
    expect(doc.getElementById('rd-t2').disabled).toBe(true)
    expect(doc.getElementById('rd-pr').disabled).toBe(true)
    expect(doc.getElementById('rd-hs-note').style.display).not.toBe('none')
    expect(doc.getElementById('rd-hs-note').textContent).toBe('HS 콘텐츠 탭에서만 사용')
    // 국가 탭 hero 에 HS 흔적 한 줄
    expect(doc.getElementById('rd-panel').textContent).toContain('HS 콘텐츠')
  }, 30000)
  it('HS 탭 진입 — 필터 활성, 사이트 옵션이 시트 전수(감사 국가 먼저), 6개 섹션 렌더', async () => {
    const { doc } = await boot('ko', '#hs')
    expect(doc.getElementById('rd-t2').disabled).toBe(false)
    expect(doc.getElementById('rd-hs-note').style.display).toBe('none')
    expect([...doc.getElementById('rd-cc').options].map(o => o.value)).toEqual(['all', 'uk', 'sa'])
    expect([...doc.getElementById('rd-t2').options].map(o => o.value)).toEqual(['all', 'FAQ', 'buying guide'])
    const panel = doc.getElementById('rd-panel')
    expect(panel.querySelector('.hs-matrix')).not.toBeNull()
    expect(panel.textContent).toContain('콘텐츠 유형 × 제품 점수')
    expect(panel.textContent).toContain('HS-Others (감사 국가 밖)')
    expect(panel.querySelectorAll('.fails-table tbody tr').length).toBe(3)   // 미측정 포함 전수
    expect(panel.querySelector('.hero-score').textContent).toBe('75')          // (100+50)/2, 미측정 제외
  }, 30000)
  it('유형 필터 변경 → 해당 유형만 집계 (FAQ: 50점, URL 2건 중 측정 1건)', async () => {
    const { doc } = await boot('ko', '#hs')
    const sel = doc.getElementById('rd-t2'); sel.value = 'FAQ'
    sel.dispatchEvent(new doc.defaultView.Event('change'))
    await new Promise(r => setTimeout(r, 100))
    const panel = doc.getElementById('rd-panel')
    expect(panel.querySelector('.hero-score').textContent).toBe('50')
    expect(panel.querySelectorAll('.fails-table tbody tr').length).toBe(2)
    expect(panel.textContent).toContain('Citable Sentences')   // 실패 항목이 개선 항목 표에 (라벨은 체크리스트 사전 우선)
    expect(panel.textContent).toContain('0% (0/1)')
  }, 30000)
  it('EN — 탭·필터·섹션 문구가 영문', async () => {
    const { doc } = await boot('en', '#hs')
    expect([...doc.querySelectorAll('#rd-tabnav button')].map(b => b.textContent)).toContain('HS Content')
    expect(doc.getElementById('rd-panel').textContent).toContain('Score by Content Type × Product')
    expect(doc.getElementById('rd-hs-note').textContent).toBe('HS Content tab only')
  }, 30000)
})
