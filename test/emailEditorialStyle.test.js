import { describe, it, expect } from 'vitest'
import { applyEditorialStyle } from '../src/emailEditorialStyle.js'

// 에디토리얼 스타일 (사용자 승인 시안 v2c, 2026-11-22)
const doc = (body) => `<body style="margin:0;padding:0;background-color:#F1F5F9;">${body}</body>`
const SAMPLE = doc(`
<p style="margin:8px 0 10px;font-size:30px;color:#1A1A1A;">타이틀</p>
<!-- ── 전체 GEO 가시성 지수 ── -->
<table style="background:#0F172A;border-radius:14px;"><tr><td style="font-size:13px;color:#FFFFFF;line-height:22px;">요약</td></tr></table>
<div data-edit="v3ExIntro" style="font-size:13px;">본문</div>
<!-- ══ 제품별 현황 (통합 카드) ══ -->
<td style="font-size:13px;color:#CF0652;">제품</td><div data-edit="productInsight" style="font-size:13px;"></div>
<!-- ══ 국가별 GEO Visibility ══ -->
<td style="font-size:12px;">국가</td>
<!-- ══ 외부접점채널 Citation (통합) ══ -->
<td style="font-size:14px;">인용</td><text font-size="11">x</text>
<!-- ══ 푸터 ══ -->`)

describe('applyEditorialStyle', () => {
  const out = applyEditorialStyle(SAMPLE)
  const part = (a, b) => out.slice(out.indexOf(a), b ? out.indexOf(b) : undefined)

  it('Exec Summary·Citation 등은 +2px, 제품별·국가별 카드는 원래 크기', () => {
    expect(part('전체 GEO', '제품별 현황')).toContain('font-size:15px;color:#0b0b0b;line-height:24px;')
    expect(part('제품별 현황', '외부접점')).toContain('font-size:13px;color:#a50034;')
    expect(part('국가별 GEO', '외부접점')).toContain('font-size:12px;')
    expect(part('외부접점')).toContain('font-size:16px;')
    expect(part('외부접점')).toContain('font-size="13"')
  })

  it('메인 타이틀은 +2 제외, 다크 Exec 카드는 라이트 카드로', () => {
    expect(out).toContain('margin:8px 0 10px;font-size:30px;color:#0b0b0b;')
    expect(out).not.toContain('#0F172A')
    expect(out).toContain('background:#fcfcfb;border:1px solid #e6e5e0;border-radius:10px;')
    expect(out).toContain('background-color:#FFFFFF;')
  })

  it('+2 구간의 편집 필드만 data-fsb (저장 시 -2 복원 대상)', () => {
    expect(out).toContain('data-fsb="1" data-edit="v3ExIntro"')
    expect(out).toContain(' data-edit="productInsight"')
    expect(out).not.toContain('data-fsb="1" data-edit="productInsight"')
  })

  it('색 매핑은 멱등 — 두 번 적용해도 색이 더 바뀌지 않는다', () => {
    const colors = s => (s.match(/#[0-9a-fA-F]{6}\b/g) || []).join(',')
    expect(colors(applyEditorialStyle(out))).toBe(colors(out))
  })
})

describe('generateEmailHTML — 에디토리얼 헤더', () => {
  it('키커·H1·리드·메타 라인, KO/EN 모두 편집 속성 유지', async () => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    for (const lang of ['ko', 'en']) {
      const h = generateEmailHTML({ title: 'T', team: 'Team', headerTag: 'Tag' }, { score: 40 }, [], [], {}, lang, [], [], { editable: true })
      expect(h).toContain('LG ELECTRONICS &nbsp;/&nbsp; <span data-fsb="1" data-edit="headerTag" data-edit-plain="1">Tag</span>')
      expect(h).toMatch(/margin:8px 0 10px;font-size:30px;[^"]*color:#0b0b0b;[^>]*><span data-fsb="1" data-edit="title"/)
      expect(h).toContain('data-edit="team" data-edit-plain="1">Team</span>')
      expect(h).not.toContain('#CF0652')
    }
  })
})
