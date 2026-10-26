import { describe, it, expect } from 'vitest'
import { findSentence, insertAfterSentence, colorizeSentence, colorizeLastParagraph, appendBlock, stripInserted } from '../src/shared/sentenceBlocks.js'

// 10월호 KO 게시본(2026-10-26) 1번 박스 본문 꼬리 — 편집기가 저장한 형태 그대로 (span/nbsp/br)
const SLOT1 = `<span style="color: rgb(255, 255, 255); font-weight: bold;">삼성 대비로는 여전히 약 23%p 앞서 있어 기존 비교 구조에서는 상대적 하락이 두드러지지 않았으나, LG가 전월 대비 0.9%p 하락하는 동안 Daikin(-0.5%p), Mitsubishi(+0.1%p), Midea(+0.1%p)는 상대적으로 안정적인 추이를 보였습니다.</span> 특히 GPT Search(-2.7%p)와 Gemini(-3.3%p)에서 하락이 두드러졌으며, 국가별로는 영국(-2.0%p), 호주(-1.9%p), 스페인(-1.8%p), 미국(-1.4%p)에서 하락폭이 크게 나타났습니다.<br><br>특히 GPT Search에서는 주요 경쟁사 대비 LG의 하락이 더욱 두드러졌습니다. 영국과 스페인에서 LG는 전월 대비 각각 6.9%p, 6.4%p 하락한 반면, Daikin과 Mitsubishi 등 주요 경쟁사는 상대적으로 작은 변화를 보였습니다. 이에 따라 LG는 두 국가 모두 7월까지 유지하던 1위에서 8월 2위, 9월 각각 4위와 3위로 내려갔습니다.<br><br>즉, 주요 국가에서 LG의 Visibility 하락이 경쟁사 대비 크게 나타나고 있으며, 특히 GPT Search에서는 경쟁 순위 하락으로까지 이어지고 있습니다. 이에 따라 에어컨 답변 원문 및 인용 출처를 추가 분석하여 원인을 파악하고 대응 방향을 구체화할 예정입니다.`
const A1 = '특히 GPT Search(-2.7%p)와 Gemini(-3.3%p)에서 하락이 두드러졌으며, 국가별로는 영국(-2.0%p), 호주(-1.9%p), 스페인(-1.8%p), 미국(-1.4%p)에서 하락폭이 크게 나타났습니다.'
const A2 = '이에 따라 LG는 두 국가 모두 7월까지 유지하던 1위에서 8월 2위, 9월 각각 4위와 3위로 내려갔습니다.'
const P1 = '즉, 주요 국가에서 LG의 Visibility 하락이 경쟁사 대비 크게 나타나고 있으며, 특히 GPT Search에서는 경쟁 순위 하락으로까지 이어지고 있습니다. 이에 따라 에어컨 답변 원문 및 인용 출처를 추가 분석하여 원인을 파악하고 대응 방향을 구체화할 예정입니다.'

describe('sentenceBlocks — 문장 기준 블록 삽입 / 색칠 (10월호 Exec Summary)', () => {
  it('findSentence: 괄호·%·&nbsp; 가 섞인 문장을 찾는다 (공백은 nbsp 허용)', () => {
    expect(findSentence(SLOT1, A1)).not.toBeNull()
    const nb = SLOT1.replace('국가별로는 영국', '국가별로는&nbsp;영국')
    expect(findSentence(nb, A1)).not.toBeNull()
    expect(findSentence(SLOT1, '없는 문장입니다.')).toBeNull()
  })

  it('insertAfterSentence: 문장 바로 뒤에 블록, 뒤따르는 <br><br> 는 블록이 대신한다', () => {
    const { html, found } = insertAfterSentence(SLOT1, A1, '<table><tr><td>T1</td></tr></table>', 'oct1')
    expect(found).toBe(true)
    const i = html.indexOf('하락폭이 크게 나타났습니다.')
    const j = html.indexOf('<div data-blk="oct1" data-br="2">')
    const k = html.indexOf('특히 GPT Search에서는')
    expect(i).toBeGreaterThan(0)
    expect(j).toBe(i + '하락폭이 크게 나타났습니다.'.length)
    expect(html.slice(html.indexOf('</div>', j) + 6, k)).toBe('')   // br 삼킴 (data-br=2 에 기록)
  })

  it('insertAfterSentence: 문장이 span 안에서 끝나면 span 을 닫고 블록 뒤에 다시 연다', () => {
    const src = '<span style="color:#fff;">앞 문장. 기준 문장입니다. 뒤 문장.</span>'
    const { html } = insertAfterSentence(src, '기준 문장입니다.', '<p>B</p>', 'x')
    expect(html).toBe('<span style="color:#fff;">앞 문장. 기준 문장입니다.</span><div data-blk="x" data-br="0"><p>B</p></div><span style="color:#fff;"> 뒤 문장.</span>')
  })

  it('insertAfterSentence: 못 찾으면 원문 그대로 + found=false', () => {
    const r = insertAfterSentence(SLOT1, '없는 문장.', '<p>B</p>', 'x')
    expect(r.found).toBe(false)
    expect(r.html).toBe(SLOT1)
  })

  it('colorizeSentence: 문장 텍스트를 data-pk span 으로 감싼다 (태그가 섞여도 런마다)', () => {
    const out = colorizeSentence(SLOT1, P1, '#FDA4AF')
    expect(out).toContain(`<span data-pk="1" style="color:#FDA4AF;">${P1}</span>`)
    const split = SLOT1.replace('이어지고 있습니다. 이에 따라', '이어지고 있습니다.</span><span> 이에 따라')
    const out2 = colorizeSentence(split, P1, '#FDA4AF')
    expect(out2.match(/data-pk="1"/g).length).toBe(2)
  })

  it('colorizeLastParagraph: <br><br> 뒤 마지막 문단만 색칠, 끝의 빈 줄은 제외, 문구가 달라도 동작', () => {
    const src = '<span style="color:#fff;">첫 문단.</span><br><br>둘째 <b>문단</b>입니다.<br><br>마지막 문단 첫 문장. 둘째 문장.<br><br>'
    const out = colorizeLastParagraph(src, '#FDA4AF')
    expect(out).toBe('<span style="color:#fff;">첫 문단.</span><br><br>둘째 <b>문단</b>입니다.<br><br><span data-pk="1" style="color:#FDA4AF;">마지막 문단 첫 문장. 둘째 문장.</span><br><br>')
    // 문단 안 단일 <br> 은 경계가 아니다
    const one = colorizeLastParagraph('A.<br><br>B 줄1<br>B 줄2', '#FDA4AF')
    expect(one).toBe('A.<br><br><span data-pk="1" style="color:#FDA4AF;">B 줄1</span><br><span data-pk="1" style="color:#FDA4AF;">B 줄2</span>')
    // <br> 이 전혀 없으면 전체
    expect(colorizeLastParagraph('한 문단뿐.', '#FDA4AF')).toBe('<span data-pk="1" style="color:#FDA4AF;">한 문단뿐.</span>')
    // 멱등 — 걷어내면 원문
    expect(stripInserted(out)).toBe(src)
  })

  it('appendBlock: 본문 맨 끝에 블록, 끝의 <br><br> 는 삼키고 data-br 에 기록, 열린 span 은 닫는다', () => {
    const out = appendBlock('앞 문단.<br><br><span style="color:#fff;">마지막 문단.</span><br><br>', '<p>T</p>', 'x', ' contenteditable="false"')
    expect(out).toBe('앞 문단.<br><br><span style="color:#fff;">마지막 문단.</span><div data-blk="x" data-br="2" contenteditable="false"><p>T</p></div>')
    expect(stripInserted(out)).toBe('앞 문단.<br><br><span style="color:#fff;">마지막 문단.</span><br><br>')
    expect(appendBlock('<span>열림', '<p>T</p>', 'y')).toBe('<span>열림</span><div data-blk="y" data-br="0"><p>T</p></div>')
  })

  it('stripInserted: 저장본에 섞여 들어온 블록·색칠을 걷어내면 원문으로 돌아온다 (멱등)', () => {
    let h = insertAfterSentence(SLOT1, A1, '<table><tr><td>T1</td></tr></table>', 'oct1', ' contenteditable="false"').html
    h = insertAfterSentence(h, A2, '<table><tr><td>T2</td></tr></table>', 'oct2').html
    h = colorizeSentence(h, P1, '#FDA4AF')
    // 편집기가 속성 순서를 바꿔 저장하는 경우도 허용
    const saved = h.replace('<div data-blk="oct1" data-br="2" contenteditable="false">', '<div contenteditable="false" data-blk="oct1" data-br="2">')
    expect(saved).not.toBe(h)
    const back = stripInserted(saved)
    expect(back).toBe(SLOT1)   // 삼켰던 <br><br> 까지 복원
    // 되돌린 뒤 다시 처리해도 블록은 1개씩
    const again = insertAfterSentence(back, A1, '<p>T1</p>', 'oct1').html
    expect(again.match(/data-blk="oct1"/g).length).toBe(1)
  })
})

// ─── 템플릿 통합 — 10월호 Exec Summary 1번 박스: 차트·답변 카드 삭제, 표 2개, 핑크 결론 ───
const SLOT3 = `국가별로는 스페인(87.6점), 멕시코(87.1점), 인도(86.7점) 순으로 높은 점수를 기록하였으며, 멕시코(+7.0점), 스페인(+6.6점), 브라질(+6.3점), 캐나다(+6.0점)에서 큰 폭의 개선이 나타났습니다. 트러블슈팅 SSR과 스키마 자동화가 함께 적용된 국가일수록 상승폭이 컸습니다.<br><br>향후에는 자동화 적용 범위와 콘텐츠 품질을 지속 점검하고, 상대적으로 점수가 낮은 스키마 마크업 및 고인용 콘텐츠 영역을 중심으로 추가 개선을 추진할 예정입니다.`
const P3 = '향후에는 자동화 적용 범위와 콘텐츠 품질을 지속 점검하고, 상대적으로 점수가 낮은 스키마 마크업 및 고인용 콘텐츠 영역을 중심으로 추가 개선을 추진할 예정입니다.'

describe('emailTemplate — 10월호 Exec Summary (사용자 지시 2026-10-26)', () => {
  const render = async (meta, lang = 'ko', options = {}) => {
    const { generateEmailHTML } = await import('../src/emailTemplate.js')
    return generateEmailHTML({ showInsightV3: true, ...meta }, { score: 42.0 }, [], [], {}, lang, [], [], options)
  }
  const idx = (h, s) => { const i = h.indexOf(s); expect(i, `missing: ${s.slice(0, 40)}`).toBeGreaterThan(-1); return i }

  it('Visibility 마지막 문단을 고쳐 저장해도 핑크 유지 + 표1 은 그 아래 (앵커 문장 회귀 재현, 2026-10-26)', async () => {
    const edited = SLOT1.replace(P1, '즉, 결론 문구를 사용자가 수정했습니다. 다음 호에서 원인 분석을 공유할 예정입니다.')
    const h = await render({ v3Ex1B2: edited })
    const pk = idx(h, '<span data-pk="1" style="color:#FDA4AF;">즉, 결론 문구를 사용자가 수정했습니다. 다음 호에서 원인 분석을 공유할 예정입니다.</span>')
    const t1 = idx(h, 'data-blk="oct1"')
    expect(pk).toBeLessThan(t1)
    expect(h.match(/data-blk="oct1"/g).length).toBe(1)
    // 앞 문단은 핑크가 아니다
    expect(h).not.toContain('<span data-pk="1" style="color:#FDA4AF;">특히 GPT Search에서는')
  })

  it('표1 은 핑크 결론 문장 아래(박스 맨 아래) — 표2(GPT Search) 는 없음 (사용자 지시 2026-10-26)', async () => {
    const h = await render({ v3Ex1B2: SLOT1, v3Ex3B2: SLOT3 })
    const a1 = idx(h, '하락폭이 크게 나타났습니다.')
    const mid = idx(h, '특히 GPT Search에서는 주요 경쟁사')
    const a2 = idx(h, '4위와 3위로 내려갔습니다.')
    const p1 = idx(h, `<span data-pk="1" style="color:#FDA4AF;">${P1}</span>`)
    const t1 = idx(h, 'data-blk="oct1"')
    // 순서: 본문 → 4위·3위 문장 → 핑크 결론 → 표1(박스 맨 아래)
    expect(a1 < mid && mid < a2 && a2 < p1 && p1 < t1).toBe(true)
    expect(h.slice(t1, t1 + 40)).toMatch(/^data-blk="oct1" data-br="0"/)   // 결론 문장이 끝이라 삼킨 br 없음
    expect(h).not.toContain('data-blk="oct2"')
    expect(h).not.toContain('Visibility 변화 – GPT Search')
    expect(h).not.toContain('1→2→4위')
    // 표 내용 + 제목 앞 붉은 막대 (표1./표2. 접두 없음)
    expect(h).not.toMatch(/표\s?[12]\./)
    const t1Head = h.slice(t1, t1 + 700)
    expect(t1Head).toContain('background:#CF0652')      // 붉은 막대
    expect(t1Head).toContain('에어컨 주요 브랜드 Visibility 변화 – Total')
    // Readability 마지막 문단 핑크 (문장 고정이 아니라 마지막 문단)
    expect(h).toContain(`<span data-pk="1" style="color:#FDA4AF;">${P3}</span>`)
    expect(h).not.toContain('<span data-pk="1" style="color:#FDA4AF;">국가별로는 스페인')
  })

  it('Readability 마지막 문단은 문구를 고쳐 저장해도 핑크 (문장 앵커가 아니라 문단 기준)', async () => {
    const edited = SLOT3.replace(P3, '향후 계획은 수정된 문장입니다. 두 번째 문장도 있습니다.')
    const h = await render({ v3Ex3B2: edited })
    expect(h).toContain('<span data-pk="1" style="color:#FDA4AF;">향후 계획은 수정된 문장입니다. 두 번째 문장도 있습니다.</span>')
  })

  it('옛 저장본에 표2 블록이 섞여 있어도 다음 렌더에서 걷어내고 다시 끼우지 않는다', async () => {
    const stale = insertAfterSentence(SLOT1, P1, '<table><tr><td>OLD T2</td></tr></table>', 'oct2').html
    const h = await render({ v3Ex1B2: stale })
    expect(h).not.toContain('data-blk="oct2"')
    expect(h).not.toContain('OLD T2')
    expect(h.match(/data-blk="oct1"/g).length).toBe(1)
  })

  it('기존 LLM 트렌드 차트·답변 예시 카드·Citation 출처 각주는 사라진다', async () => {
    const h = await render({ v3Ex1B2: SLOT1 })
    expect(h).not.toContain('/api/hl-chart')
    expect(h).not.toContain('[답변 예시]')
    expect(h).not.toContain('OpenAI Help Center')
  })

  it('편집 모드: 삽입 블록은 contenteditable=false (사용자 본문 저장 시 섞여도 다음 렌더에서 걷어냄)', async () => {
    const h = await render({ v3Ex1B2: SLOT1 }, 'ko', { editable: true })
    expect(h).toMatch(/<div data-blk="oct1" data-br="0" contenteditable="false">/)
    // 편집기 blur 가 저장하는 것 = 편집 span 의 innerHTML (블록·핑크 포함). 그걸 다시 넣어도 중복 생성 X
    const slotStart = h.indexOf('data-edit="v3Ex1B2"')
    const innerStart = h.indexOf('>', slotStart) + 1
    const innerEnd = h.indexOf('</span></div>', h.indexOf('data-blk="oct1"'))
    const saved = h.slice(innerStart, innerEnd)
    expect(saved).toContain('구체화할 예정입니다.')
    expect(saved.indexOf('data-blk="oct1"')).toBeGreaterThan(saved.indexOf('구체화할 예정입니다.'))   // 표 1 이 슬롯 끝
    const h2 = await render({ v3Ex1B2: saved }, 'ko', { editable: true })
    expect(h2.match(/data-blk="oct1"/g).length).toBe(1)
    expect(h2).not.toContain('data-blk="oct2"')
    expect(h2.match(new RegExp('data-pk="1" style="color:#FDA4AF;">' + '즉, 주요 국가에서', 'g')).length).toBe(1)
  })

  it('EN(앵커 문장 없음): 표 1 을 본문 끝에 이어 붙인다 — 깨지지 않음', async () => {
    const h = await render({}, 'en')
    expect(h).toContain('data-blk="oct1"')
    expect(h).toContain('AC Visibility change by major brand – Total')
    expect(h).not.toContain('data-blk="oct2"')
    expect(h).not.toContain('/api/hl-chart')
  })
})
