// 10월(2026-10-26) 상류 재채점 규칙 이식 — applyScoringOverride.
//   #36 트러블슈팅·PLP 3개 기준: 저장된 "모델 확인 N/…" 개수로 임계를 낮출 때만 재판정
//   #26·#27 리뷰 위젯 오탐: 저장 JSON-LD 원본에서 Review/Comment 하위 노드 제외 후 필수 필드 재판정
// data.md §7.7 Test-Verify-Document Loop.
import { describe, it, expect } from 'vitest'
import { applyScoringOverride } from '../scripts/aggregate-readability.mjs'

// 신포맷(6분류) breakdown — citable_content 가 있으면 상류 게이트 적용본으로 본다
const newScore = ({ content = {}, schema = {} } = {}) => ({
  total: 0,
  breakdown: {
    performance: { points: 0, max: 100, passed: 0, total: 0, items: {} },
    accessibility: { points: 0, max: 100, passed: 0, total: 0, items: {} },
    seo: { points: 0, max: 100, passed: 0, total: 0, items: {} },
    schema_markup: { points: 0, max: 100, passed: 0, total: 0, items: schema },
    citable_content: { points: 0, max: 100, passed: 0, total: 0, items: content },
    ai_crawlability: { points: 0, max: 100, passed: 0, total: 0, items: {} },
  },
})
const citable = (value, pass) => ({ ai_citable: { label: '#36 Citable Sentence ≥ 5개', pass, value, hint: pass ? null : 'x' } })

describe('applyScoringOverride — #36 트러블슈팅·PLP 3개 (모델 판정값 재판정)', () => {
  it('트러블슈팅: 모델 확인 3개면 저장 FAIL 을 PASS 로 뒤집는다', () => {
    const s = newScore({ content: citable('모델 확인 3/9 (정규식 후보 4/40문장)', false) })
    applyScoringOverride(s, { pt: 'support_troubleshoot', upstreamGated: true })
    const it = s.breakdown.citable_content.items.ai_citable
    expect(it.pass).toBe(true)
    expect(it.hint).toBeNull()
    expect(it.label).toBe('#36 Citable Sentence ≥ 5개 (트러블슈팅·PLP 3개)')
  })

  it('PLP: 모델 확인 2개는 3개 기준으로도 FAIL — hint 에 3개 기준 표기', () => {
    const s = newScore({ content: citable('모델 확인 2/5 (정규식 후보 5/30문장)', false) })
    applyScoringOverride(s, { pt: 'plp', upstreamGated: true })
    const it = s.breakdown.citable_content.items.ai_citable
    expect(it.pass).toBe(false)
    expect(it.hint).toBe('인용 가능 문장 2개 — 3개 이상 필요')
  })

  it('PDP(5개 기준): 모델 판정값은 조기 중단으로 잘려 있어 저장 pass 를 그대로 둔다', () => {
    const s = newScore({ content: citable('모델 확인 5/7 (정규식 후보 12/60문장)', true) })
    applyScoringOverride(s, { pt: 'pdp', upstreamGated: true })
    expect(s.breakdown.citable_content.items.ai_citable.pass).toBe(true)
    const f = newScore({ content: citable('모델 확인 4/20 (정규식 후보 20/60문장)', false) })
    applyScoringOverride(f, { pt: 'pdp', upstreamGated: true })
    expect(f.breakdown.citable_content.items.ai_citable.pass).toBe(false)
    expect(f.breakdown.citable_content.items.ai_citable.hint).toBe('x')   // 손대지 않음
  })

  it('구포맷("6/42 (14.3%)")은 타입별 임계로 재판정 — PLP 3개 통과, PDP 5개 미달', () => {
    const p = newScore({ content: citable('3/42 (7.1%)', false) })
    applyScoringOverride(p, { pt: 'plp', upstreamGated: true })
    expect(p.breakdown.citable_content.items.ai_citable.pass).toBe(true)
    const d = newScore({ content: citable('3/42 (7.1%)', false) })
    applyScoringOverride(d, { pt: 'pdp', upstreamGated: true })
    expect(d.breakdown.citable_content.items.ai_citable.pass).toBe(false)
    expect(d.breakdown.citable_content.items.ai_citable.hint).toBe('인용 가능 문장 3개 — 5개 이상 필요')
  })
})

const img = (pass) => ({ ai_schema_image: { label: '#26 Schema: ImageObject', pass, value: null, hint: pass ? null : '@type=\'ImageObject\' 노드 없음' } })
const vid = (pass) => ({ ai_schema_video: { label: '#27 Schema: VideoObject', pass, value: null, hint: null } })
const reviewWithImage = { '@context': 'https://schema.org/', review: [{ '@type': 'Review', reviewBody: 'nice',
  associatedMedia: [{ '@type': 'ImageObject', url: 'https://x/1.jpg', name: 'photo', description: 'customer photo' }] }] }
const productImage = { '@context': 'https://schema.org/', '@type': 'Product', image: { '@type': 'ImageObject', contentUrl: 'https://x/p.jpg', caption: 'OLED evo', description: 'front view' } }

describe('applyScoringOverride — #26·#27 리뷰 위젯 안 미디어 제외 (JSON-LD 원본 재판정)', () => {
  it('Review 안의 ImageObject 만 있으면 저장 PASS 를 FAIL 로 — 노드 없음', () => {
    const s = newScore({ schema: img(true) })
    applyScoringOverride(s, { pt: 'pdp', upstreamGated: true, jsonldRaw: [reviewWithImage] })
    const it = s.breakdown.schema_markup.items.ai_schema_image
    expect(it.pass).toBe(false)
    expect(it.hint).toBe("@type='ImageObject' 노드 없음")
  })

  it('페이지 콘텐츠 ImageObject(contentUrl·caption 대체 필드)는 통과', () => {
    const s = newScore({ schema: img(false) })
    applyScoringOverride(s, { pt: 'pdp', upstreamGated: true, jsonldRaw: [reviewWithImage, productImage] })
    expect(s.breakdown.schema_markup.items.ai_schema_image.pass).toBe(true)
  })

  it('필수 필드 누락은 FAIL + 누락 필드 hint', () => {
    const s = newScore({ schema: vid(true) })
    const v = { '@type': 'VideoObject', embedUrl: 'https://youtu.be/x', name: 'demo' }   // description·thumbnailUrl 없음
    applyScoringOverride(s, { pt: 'pdp', upstreamGated: true, jsonldRaw: [v] })
    const it = s.breakdown.schema_markup.items.ai_schema_video
    expect(it.pass).toBe(false)
    expect(it.hint).toBe('필수 필드 누락: description, thumbnailUrl')
  })

  it('JSON-LD 원본이 없는 구 run 은 저장 판정 유지 / N/A(pass null) 항목은 건드리지 않는다', () => {
    const s = newScore({ schema: img(true) })
    applyScoringOverride(s, { pt: 'pdp', upstreamGated: true })
    expect(s.breakdown.schema_markup.items.ai_schema_image.pass).toBe(true)
    const na = newScore({ schema: { ai_schema_image: { label: '#26', pass: null, value: null, hint: '본문 이미지 없음' } } })
    applyScoringOverride(na, { pt: 'pdp', upstreamGated: true, jsonldRaw: [productImage] })
    expect(na.breakdown.schema_markup.items.ai_schema_image.pass).toBeNull()
  })
})

// ─── 상류 7438161 (2026-10-26) — 사업부 삭제 요청 URL 제외 + #42 독일어 Soft 404 오탐 ───
import { softPhraseIs404, normalizeDeleteKey, parseDeleteUrls, applyScoringOverride as _apply42 } from '../scripts/aggregate-readability.mjs'
describe('상류 7438161 — 삭제 요청 URL · #42 Soft 404 문구 재판정', () => {
  it('#42: "nicht gefunden werden" 단독은 404 아님, "Seite … nicht gefunden werden" 은 404', () => {
    expect(softPhraseIs404('nicht gefunden werden')).toBe(false)
    expect(softPhraseIs404('Die Seite konnte nicht gefunden werden')).toBe(true)
    expect(softPhraseIs404('Seite nicht gefunden')).toBe(true)
    expect(softPhraseIs404('Page not found')).toBe(true)
  })
  it('#42: 저장 문구 FAIL 은 현재 패턴으로 재판정, 본문 길이 FAIL 은 유지', () => {
    const mk = (value) => ({ total: 0, breakdown: { citable_content: { items: {} }, ai_crawlability: { items: { ai_soft_404: { pass: false, value, hint: 'soft 404' } } } } })
    const a = _apply42(mk("HTTP 200 · 'nicht gefunden werden'"), { url: 'https://www.lg.com/de/x', pt: 'support_troubleshoot', upstreamGated: true })
    const b = _apply42(mk('본문 103자'), { url: 'https://www.lg.com/de/x', pt: 'support_troubleshoot', upstreamGated: true })
    const it42 = s => Object.values(s.breakdown).map(bd => bd.items && bd.items.ai_soft_404).find(Boolean)
    expect(it42(a).pass).toBe(true)
    expect(it42(b).pass).toBe(false)
  })
  it('삭제 요청 URL 키 — 상류 norm_key 와 동일 (www·끝 슬래시·쿼리·대소문자 무시)', () => {
    const set = parseDeleteUrls('url,requester,date\nhttps://www.lg.com/ca_en/support/X/,a,2026-10-26\n')
    expect(set.size).toBe(1)
    expect(set.has(normalizeDeleteKey('https://lg.com/ca_en/support/x?utm=1#top'))).toBe(true)
    expect(set.has(normalizeDeleteKey('https://www.lg.com/ca_en/support/y/'))).toBe(false)
    expect(parseDeleteUrls('foo,bar\n1,2')).toBeNull()
  })
})
