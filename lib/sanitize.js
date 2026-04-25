// ─── HTML Sanitizer — sanitize-html 라이브러리 (C7) ─────────────────────────
// 게시 HTML은 풍부한 인라인 스타일·table 레이아웃이 필요하므로 모든 태그·속성을 허용하되,
// <script>, on*=, javascript:/data: URL은 차단해 XSS 방지
import sanitizeHtmlLib from 'sanitize-html'

const SANITIZE_OPTIONS = {
  allowedTags: false,
  allowedAttributes: false,
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  allowedSchemesAppliedToAttributes: ['href', 'src', 'cite', 'action'],
  allowProtocolRelative: false,
  disallowedTagsMode: 'discard',
  exclusiveFilter: (frame) => frame.tag === 'script',
  transformTags: {
    '*': (tagName, attribs) => {
      const cleaned = {}
      for (const [k, v] of Object.entries(attribs || {})) {
        if (/^on/i.test(k)) continue
        if (k === 'style' && /(javascript:|expression\()/i.test(v)) continue
        cleaned[k] = v
      }
      return { tagName, attribs: cleaned }
    },
  },
}

export function sanitizeHtml(html) {
  if (typeof html !== 'string') return ''
  return sanitizeHtmlLib(html, SANITIZE_OPTIONS)
}
