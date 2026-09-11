// Progress Tracker 스냅샷 사전 번역 (lib/tracker-i18n.js) — 수집·보존 검증
// 실제 번역 API 는 호출하지 않는다 (collect + 기존 번역 보존 경로만).
import { describe, it, expect } from 'vitest'
import { collectKoreanStrings, enrichSnapshotI18n } from '../lib/tracker-i18n.js'

describe('tracker-i18n — 한글 문자열 수집', () => {
  it('중첩 객체·배열에서 한글 문자열만 중복 없이 수집한다', () => {
    const snap = {
      quantitativeGoals: { rows: [
        { task: '콘텐츠 수정', detail: 'PDP FAQ 보강', stakeholder: 'MS', goal: 100 },
        { task: '콘텐츠 수정', detail: 'Summary Box 추가' },
      ]},
      _dashboard: { categoryStats: [{ category: '신규콘텐츠제작', rate: 88 }] },
      en: 'English only', num: 3,
    }
    const got = collectKoreanStrings(snap)
    expect(got).toContain('콘텐츠 수정')
    expect(got).toContain('PDP FAQ 보강')
    expect(got).toContain('신규콘텐츠제작')
    expect(got.filter(t => t === '콘텐츠 수정').length).toBe(1)  // 중복 제거
    expect(got).not.toContain('English only')                    // 한글 없는 문자열 제외
  })

  it('_i18n 자신은 순회에서 제외한다 (번역의 재번역 방지)', () => {
    const snap = { a: '한글 텍스트', _i18n: { en: { '이미번역된것': 'done' } } }
    const got = collectKoreanStrings(snap)
    expect(got).toEqual(['한글 텍스트'])
  })

  it('enrich 는 기존 번역을 보존하고 누락 0이면 no-op', async () => {
    const snap = { a: '한글', _i18n: { en: { '한글': 'Korean' } } }
    const r = await enrichSnapshotI18n(snap)   // missing 0 → 번역 API 미호출
    expect(r.added).toBe(0)
    expect(snap._i18n.en['한글']).toBe('Korean')
  })
})
