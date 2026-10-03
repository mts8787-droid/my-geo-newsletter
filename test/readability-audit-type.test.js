// 정기/비정기 어딧 구분 (auditType) — 기본 스냅샷 선정 + 탭 분리 UI (2026-10-03)
// 실데이터(data/readability) 기준: 2026-09-29 = adhoc(베네룩스), 나머지 = regular.
// 데이터 구성이 바뀌면(adhoc 0개 등) 해당 케이스는 skip 한다.
import { describe, it, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { loadLatest } from '../routes/readability.js'
import { renderReadabilityHTML } from '../scripts/render-readability.mjs'

const load = ch => loadLatest(ch)
const hasAdhoc = ({ snapshots }) => snapshots.some(s => (s.auditType || 'regular') === 'adhoc')

describe('loadLatest — auditType', () => {
  it('기본 스냅샷은 최신 정기 — 비정기가 더 최신이어도 얼굴이 되지 않는다', () => {
    const { snapshot, snapshots } = load('published')
    if (!snapshot || !hasAdhoc({ snapshots })) return   // adhoc 없으면 skip
    expect(snapshot.auditType || 'regular').toBe('regular')
    const newerAdhoc = snapshots.filter(s => s.auditType === 'adhoc' && s.date > snapshot.date)
    // 비정기가 더 최신인 데이터 구성에서만 의미 있는 검증
    if (newerAdhoc.length) expect(snapshot.auditType || 'regular').toBe('regular')
  })
  it('스냅샷 목록에 정기·비정기가 함께 (월 dedup 이 서로를 가리지 않음)', () => {
    const { snapshots } = load('staging')
    if (!hasAdhoc({ snapshots })) return
    const types = new Set(snapshots.map(s => s.auditType || 'regular'))
    expect(types.has('regular')).toBe(true)
    expect(types.has('adhoc')).toBe(true)
  })
})

describe('대시보드 — 정기/비정기 탭', () => {
  it('양쪽 구분이 있으면 탭 노출, 전환 시 해당 구분 스냅샷으로 교체된다', async () => {
    const { snapshot, index, snapshots } = load('staging')
    if (!snapshot || !hasAdhoc({ snapshots })) return
    const html = renderReadabilityHTML({ snapshot, index, snapshots, adminMode: true, lang: 'ko' })
    expect(html).toContain('rd-atype-wrap')
    expect(html).toContain('"auditType":"adhoc"')
    const dom = new JSDOM(html, { runScripts: 'dangerously', url: 'https://test.local/x' })
    await new Promise(r => setTimeout(r, 300))
    const doc = dom.window.document
    expect(doc.getElementById('rd-atype-wrap').style.display).not.toBe('none')
    // 초기 = 정기 (기본 스냅샷이 최신 정기)
    expect(doc.getElementById('rd-atype-regular').className).toContain('active')
    const ccBefore = [...doc.getElementById('rd-cc').options].map(o => o.value)
    doc.getElementById('rd-atype-adhoc').click()
    await new Promise(r => setTimeout(r, 150))
    const ccAfter = [...doc.getElementById('rd-cc').options].map(o => o.value)
    expect(doc.getElementById('rd-atype-adhoc').className).toContain('active')
    expect(ccAfter).not.toEqual(ccBefore)   // 비정기(부분 국가) 스냅샷으로 교체됨
  }, 30000)
})
