// 사용자 편집 HTML(뉴스레터 Exec Summary 본문) 안의 **특정 문장**을 기준으로
// 블록(표 등)을 끼워 넣거나 문장을 색칠하는 헬퍼.
//
// 왜 필요한가 — 10월호(2026-10): 사용자가 Visibility 본문 3개 단락을 한 슬롯(v3Ex1B2)에
// 썼는데 "이 문장 아래에 표", "이 문장은 분홍색" 처럼 문장 단위 지시가 들어옴. 저장본은
// 서버(어드민)에만 있어 템플릿이 렌더 시점에 문장을 찾아 처리한다.
//
// 편집 모드 호환 — 끼워 넣은 블록/색칠 span 은 contenteditable 영역 안에 들어가므로
// 저장(blur) 시 사용자 HTML 에 함께 저장된다. 그래서 모든 산출물에 마커(data-blk / data-pk)
// 를 달고, 다음 렌더 때 `stripInserted` 로 먼저 걷어낸 뒤 다시 처리한다 (멱등).
//
// 제약: 블록 HTML 안에 <div> 를 쓰지 않는다 — 래퍼 div 를 lazy 정규식으로 걷어내기 때문.

const INLINE_TAGS = 'span|strong|b|em|i|u|font|a|sup|sub'

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// 문장 → 관대한 정규식: 공백은 공백/&nbsp;/인라인 태그 경계를 허용 (편집기가 span 을
// 쪼개 넣거나 nbsp 로 바꿔 저장하는 경우 대비).
function sentenceRe(sentence) {
  const gap = `(?:\\s|&nbsp;|<\\/?(?:${INLINE_TAGS})\\b[^>]*>)*`
  const body = String(sentence).trim().split(/\s+/).map(escapeRe).join(gap)
  return new RegExp(body)
}

// 문장 위치 — { start, end } (html 오프셋) 또는 null
export function findSentence(html, sentence) {
  const m = sentenceRe(sentence).exec(String(html || ''))
  return m ? { start: m.index, end: m.index + m[0].length } : null
}

// html[0:pos] 구간에서 아직 닫히지 않은 인라인 태그 스택 (여는 태그 원문 보존)
function openInlineTags(html) {
  const stack = []
  const re = new RegExp(`<(\\/?)(${INLINE_TAGS})\\b[^>]*>`, 'gi')
  let m
  while ((m = re.exec(html))) {
    if (m[1]) {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].name === m[2].toLowerCase()) { stack.splice(i, 1); break }
      }
    } else if (!/\/\s*>$/.test(m[0])) {
      stack.push({ name: m[2].toLowerCase(), open: m[0] })
    }
  }
  return stack
}

// 문장 바로 뒤에 블록 삽입. 문장 뒤 줄바꿈(<br> 최대 2개)은 블록의 여백이 대신하므로
// 삼키되, 개수를 data-br 에 적어 두어 stripInserted 가 원문 그대로 되돌릴 수 있게 한다.
// 문장이 인라인 태그(span 등) 안에서 끝나면 태그를 닫고 블록 뒤에 다시 연다 (블록을
// 인라인 안에 두지 않음 — 이메일 클라이언트 호환).
// 반환 { html, found }
export function insertAfterSentence(html, sentence, block, blockId, wrapAttrs = '') {
  const src = String(html || '')
  const hit = findSentence(src, sentence)
  if (!hit) return { html: src, found: false }
  const after = src.slice(hit.end)
  const brs = /^(?:\s|&nbsp;)*((?:<br\s*\/?>(?:\s|&nbsp;)*){0,2})/i.exec(after)
  const nBr = (brs[1].match(/<br/gi) || []).length
  const eaten = nBr ? brs[0].length : 0
  const wrapped = `<div data-blk="${blockId}" data-br="${nBr}"${wrapAttrs}>${block}</div>`
  const open = openInlineTags(src.slice(0, hit.end))
  const close = open.map(t => `</${t.name}>`).reverse().join('')
  const reopen = open.map(t => t.open).join('')
  return { html: src.slice(0, hit.end) + close + wrapped + reopen + after.slice(eaten), found: true }
}

// 문장을 색칠 — 문장 구간 안의 텍스트 런마다 <span data-pk style="color"> 로 감싼다
// (구간에 태그가 섞여 있어도 중첩이 깨지지 않음). 못 찾으면 원문 그대로.
export function colorizeSentence(html, sentence, color) {
  const src = String(html || '')
  const hit = findSentence(src, sentence)
  if (!hit) return src
  const seg = src.slice(hit.start, hit.end)
  const painted = seg.replace(/(^|>)([^<]+)(?=<|$)/g, (m, lead, text) =>
    /^(?:\s|&nbsp;)*$/.test(text) ? m : `${lead}<span data-pk="1" style="color:${color};">${text}</span>`)
  return src.slice(0, hit.start) + painted + src.slice(hit.end)
}

// 이전 렌더가 끼워 넣은 블록/색칠 span 제거 (편집기 저장본에 섞여 들어온 것 되돌리기).
// 블록이 삼켰던 <br> 은 data-br 개수만큼 복원 — 원문과 동일하게 돌아온다.
export function stripInserted(html) {
  return String(html || '')
    .replace(/<div\b[^>]*\bdata-blk="[^"]*"[^>]*>[\s\S]*?<\/div>/g, (m) => {
      const n = parseInt((/\bdata-br="(\d)"/.exec(m) || [])[1] || '0', 10)
      return '<br>'.repeat(n)
    })
    .replace(/<span\b[^>]*\bdata-pk="1"[^>]*>([^<]*)<\/span>/g, '$1')
}
