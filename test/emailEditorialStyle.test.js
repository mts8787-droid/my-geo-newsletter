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
    expect(out).toContain('background-color:#FFFFFF;')   // 맨 뒤 = 흰색 (제일 큰 박스가 베이지)
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

describe('applyEditorialStyle — 편집기 rgb 색 정규화 · Notice 연회색 (2026-11-23)', () => {
  it('rgb(…) 로 저장된 팔레트 색도 hex 와 같은 색으로 매핑 (KPI Logic 글자색 통일)', () => {
    const out = applyEditorialStyle('<span style="color:#475569;">a</span><span style="color: rgb(71, 85, 105);">b</span><span style="color: rgb(1, 2, 3);">c</span>')
    expect(out).toContain('color:#52514e;">a')
    expect(out).toContain('color: #52514e;">b')
    expect(out).toContain('rgb(1, 2, 3)')   // 팔레트 밖 색은 그대로
  })
  it('Notice 박스는 흰 카드 (베이지 컨테이너 위), 컨테이너는 베이지', () => {
    const out = applyEditorialStyle('<td style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:14px 20px;"><table style="table-layout:fixed;background:#FFFFFF;border-radius:16px;">')
    expect(out).toContain('background:#FFFFFF;border:1px solid #e6e5e0;')
    expect(out).toContain('table-layout:fixed;background:#f0ece4;border-radius:16px;')
  })
  it('붙여넣기로 딸려 온 글자 배경색(rgb)은 제거', () => {
    const out = applyEditorialStyle('<span style="font-weight:bold; background-color: rgb(255, 244, 247);">x</span>')
    expect(out).toBe('<span style="font-weight:bold; ">x</span>')
  })
})

describe('INSIGHT 연회색 · 소제목 빨간 막대 제거 · KPI Logic 크기 통일 (2026-11-23)', () => {
  it('INSIGHT 박스는 연회색 + 진한 보더, 소제목 막대 제거', () => {
    const out = applyEditorialStyle(
      '<table style="border-radius:8px;background:#FFF4F7;border:1px solid #F5CCD8;"></table>' +
      '<td width="4" style="background:#CF0652;border-radius:2px;font-size:0;line-height:0;">&nbsp;</td><td data-edit="rd_ccTitle" style="padding-left:8px;font-size:16px;">국가별 점수</td>' +
      '<span style="display:inline-block;width:3px;height:14px;background:#CF0652;border-radius:2px;vertical-align:middle;margin-right:7px;"></span><span>1. 외부 채널 관리</span>')
    expect(out).toContain('background:#f4f3ef;border:1px solid #dedcd5;')
    expect(out).toContain('<td data-fsb="1" data-edit="rd_ccTitle" style="padding-left:0;font-size:18px;">국가별 점수')
    expect(out).not.toContain('width:3px;height:14px')
  })
  it('KPI Logic 저장본의 줄별 px 크기는 제거, 평가표 pt 크기는 유지', async () => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    const h = generateEmailHTML({ showKpiLogic: true, kpiLogicText: '<b>A</b><br><span style="color: rgb(71, 85, 105); font-size: 16px;">B</span><span style="font-size:8.5pt">C</span>' },
      { score: 40 }, [], [], {}, 'ko', [], [], {})
    expect(h).toContain('<span style="color: #52514e; ">B</span>')
    expect(h).toContain('font-size:8.5pt')
  })
})
