// 뉴스레터 에디토리얼 스타일 (2026-11-22, 사용자 승인 시안 v2c)
// generateEmailHTML 이 만든 HTML 에 레퍼런스(웜 뉴트럴·에디토리얼) 톤을 입힌다 — 내용은 그대로, 스타일만.
//   1) 색: 슬레이트 → 웜 뉴트럴, LG 레드 #CF0652 → #a50034, 시리즈색 → 레퍼런스 시리즈
//   2) 카드: 2px 보더·16px 라운드·레드 막대 → 1px 헤어라인·10px 라운드·텍스트 H2
//   3) Executive Summary: 다크 네이비 카드 → 라이트 figure 카드
//   4) 글자 +2px (메인 타이틀·제품별/국가별 카드 제외 — 카드는 +2 시 940 컨테이너를 16~37px 넘침)
// 헤더(키커·H1·리드·메타 라인)는 편집 속성(data-edit) 때문에 emailTemplate.js 소스에서 직접 그린다.
//
// 인라인 편집 주의: 화면에는 +2 된 크기가 보이므로, 편집 저장 시 그대로 저장하면 렌더마다 +2 가 누적된다.
// → +2 구간의 data-edit 요소에 data-fsb 를 달고, 에디터 스크립트(edScriptHtml)가 저장 직전 -2 로 되돌린다.

export const ED_ACCENT = '#a50034'
export const ED_T1 = '#0b0b0b'
export const ED_T2 = '#52514e'
export const ED_TM = '#86857f'
export const ED_RULE = '#e6e5e0'
export const ED_GRID = '#efeee9'
export const ED_SURF = '#fcfcfb'

const M = {
  exec: '<!-- ── 전체 GEO 가시성 지수 ── -->',
  prod: '<!-- ══ 제품별 현황 (통합 카드) ══ -->',
  cnty: '<!-- ══ 국가별 GEO Visibility ══ -->',
  cit: '<!-- ══ 외부접점채널 Citation (통합) ══ -->',
  dot: '<!-- ══ 닷컴 Citation (경쟁사대비) ══ -->',
  hl: '<!-- 하이라이트(닷컴 Readability) 챕터',
  todo: '<!-- ══ Action Plan',
  todoV2: '<!-- ══ 액션 아이템 V2',
  foot: '<!-- ══ 푸터 ══ -->',
}

// from 이후에 처음 나오는 마커 위치 (없으면 -1)
function firstAfter(s, from, keys) {
  const idx = keys.map(k => s.indexOf(M[k], from)).filter(i => i >= 0)
  return idx.length ? Math.min(...idx) : -1
}

const EXEC_COLORS = {
  '#FFFFFF': ED_T1, 'rgb(255, 255, 255)': ED_T1, '#94A3B8': ED_T2, '#64748B': ED_TM, '#CBD5E1': ED_T2, '#E2E8F0': ED_T2,
  '#1E2433': ED_GRID, '#1E293B': '#FFFFFF', '#334155': ED_RULE, '#475569': ED_TM,
  '#FDA4AF': ED_ACCENT, 'rgb(253, 164, 175)': ED_ACCENT,
  // 서두+3개 박스를 감싸는 바깥 박스 — 연핑크로 흰 박스들과 구분 (사용자 요청 2026-11-23)
  '#1E0F18': '#f9e8ed', '#3D1528': '#efc9d5',
}

const PALETTE = {
  '#CF0652': ED_ACCENT, '#A0003E': '#7d0027',
  '#1A1A1A': ED_T1, '#0F172A': ED_T1, '#1E293B': '#3b3a37', '#334155': '#3b3a37',
  '#475569': ED_T2, '#64748B': ED_TM, '#94A3B8': ED_TM,
  '#D9D9D9': '#c9c8c1', '#CBD5E1': '#c9c8c1', '#E2E8F0': ED_RULE, '#E8EDF2': ED_RULE,
  '#F1F5F9': ED_GRID, '#EFF1F4': ED_GRID, '#F8FAFC': ED_SURF, '#FAFBFC': ED_SURF, '#F4F4F4': '#f4f3ef',
  '#15803D': '#0f8a5f', '#16A34A': '#0f8a5f', '#22C55E': '#1baf7a', '#BBF7D0': '#c7ecd9', '#F0FDF4': '#eef8f3',
  // 추격(주황)이 취약(빨강)과 구분되도록 앰버로
  '#E8910C': '#e39b2b', '#D97706': '#e39b2b', '#B45309': '#c2541f', '#FDE68A': '#f6d9b5', '#FFFBEB': '#fdf6ec',
  '#BE123C': '#c2372b', '#DC2626': '#c2372b', '#FECDD3': '#f0d3dc', '#FFF1F2': '#fbf1f3', '#FDA4AF': '#e87ba4',
  '#FFF4F7': ED_SURF, '#F5CCD8': ED_RULE, '#FEF2F2': ED_SURF, '#FECACA': ED_RULE, '#FFCCD8': '#f0d3dc', '#FFB0C0': '#e87ba4',
  '#2563EB': '#2a78d6', '#3B82F6': '#2a78d6', '#1D4ED8': '#1f5fb0', '#DDE4F9': '#dce8f7', '#7C3AED': '#7d5bd0',
}

const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const bumpPx = (re) => (t) => t.replace(re, (m, p, n) => (parseFloat(n) < 8 ? m : `${p}${parseFloat(n) + 2}px`))
const TITLE_RE = /margin:8px 0 10px;font-size:(\d+)px;/g   // 메인 타이틀 (+2 제외)

export function bumpFontSizes(t) {
  const titles = []
  t = t.replace(TITLE_RE, m => { titles.push(m); return `@@EDTITLE${titles.length - 1}@@` })
  t = bumpPx(/(font-size:\s*)(\d+(?:\.\d+)?)px/g)(t)
  t = t.replace(/(font-size:\s*)small\b/g, '$115px')
  t = t.replace(/(font-size=")(\d+(?:\.\d+)?)(")/g, (m, a, n, b) => `${a}${parseFloat(n) + 2}${b}`)   // SVG 속성
  t = bumpPx(/(line-height:\s*)(\d+(?:\.\d+)?)px/g)(t)
  t = t.replace(/ data-edit="/g, ' data-fsb="1" data-edit="')   // 저장 시 -2 복원 대상 표시
  return t.replace(/@@EDTITLE(\d+)@@/g, (m, i) => titles[+i])
}

export function applyEditorialStyle(html) {
  let s = String(html || '')

  // ── 페이지 배경 → 흰 바탕 ──
  s = s.replace('<body style="margin:0;padding:0;background-color:#F1F5F9;', '<body style="margin:0;padding:0;background-color:#FFFFFF;')
  s = s.replace('width="100%" style="background-color:#F1F5F9;">', 'width="100%" style="background-color:#FFFFFF;">')
  // Notice: 핑크 박스 → surface-1 + 헤어라인
  s = s.replace('background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:14px 20px;',
    `background:${ED_SURF};border:1px solid ${ED_RULE};border-radius:10px;padding:16px 20px;`)
  // 구분선 2px 레드 → 1px 헤어라인
  s = s.replace(/<td height="2" style="background:#CF0652;font-size:0;line-height:0;">&nbsp;<\/td>/,
    `<td height="1" style="background:${ED_RULE};font-size:0;line-height:0;">&nbsp;</td>`)
  // 본문 회색 바탕 → 흰 바탕
  s = s.replace('<td style="background:#F8FAFC;padding:28px 28px;">', '<td style="background:#FFFFFF;padding:28px 28px;">')

  // ── Executive Summary: 다크 네이비 카드 → 라이트 figure 카드 ──
  const ea = s.indexOf(M.exec)
  if (ea >= 0) {
    let eb = firstAfter(s, ea + 1, ['prod', 'cnty', 'cit', 'dot', 'hl', 'todo', 'todoV2', 'foot'])
    if (eb < 0) eb = s.length
    let ex = s.slice(ea, eb)
    ex = ex.replace('style="background:#0F172A;border-radius:14px;"', `style="background:${ED_SURF};border:1px solid ${ED_RULE};border-radius:10px;"`)
    ex = ex.replace(/border-top:4px solid #[0-9A-Fa-f]{6};border-radius:14px;/, 'border-radius:10px;')
    ex = ex.replace('padding:10px 16px;background:linear-gradient(135deg,#CF0652,#A0003E);border-radius:8px;', 'padding:0 0 2px;')
    ex = ex.replace(/font-size:20px;font-weight:900;color:#FFFFFF;text-transform:uppercase;letter-spacing:2px;/g,
      `font-size:12px;font-weight:700;color:${ED_ACCENT};text-transform:uppercase;letter-spacing:0.08em;`)
    for (const [o, n] of Object.entries(EXEC_COLORS)) ex = ex.replace(new RegExp(escRe(o), 'gi'), n)
    s = s.slice(0, ea) + ex + s.slice(eb)
  } else {
    console.warn('[applyEditorialStyle] WARN: Executive Summary 마커 없음 — 라이트 카드 변환 생략', { showTotal: false })
  }

  // ── 섹션 카드·제목: 2px 보더/16px 라운드/레드 막대 → 1px 헤어라인/10px/텍스트 H2 ──
  s = s.replaceAll('border-radius:16px;border:2px solid #E8EDF2;', `border-radius:10px;border:1px solid ${ED_RULE};`)
  s = s.replaceAll('background:#FAFBFC;border-bottom:1px solid #F1F5F9;', `background:#FFFFFF;border-bottom:1px solid ${ED_RULE};`)
  s = s.replace(/<td width="3" style="background:#CF0652;border-radius:2px;">&nbsp;<\/td>\s*/g, '')
  s = s.replaceAll('padding-left:8px;font-size:19px;font-weight:700;', 'padding-left:0;font-size:18px;font-weight:800;letter-spacing:-0.01em;')
  // INSIGHT 핑크 박스 → surface-1
  s = s.replaceAll('background:#FFF4F7;border:1px solid #F5CCD8;', `background:${ED_SURF};border:1px solid ${ED_RULE};`)

  // ── 전역 팔레트 ──
  s = s.replace(/#[0-9a-fA-F]{6}\b/g, m => PALETTE[m.toUpperCase()] || m)

  // ── 글자 +2px — 제품별 현황 ~ 국가별 카드 구간은 원래 크기 유지 ──
  const ua = firstAfter(s, 0, ['prod', 'cnty'])
  if (ua < 0) return bumpFontSizes(s)
  let ub = firstAfter(s, ua + 1, ['cit', 'dot', 'hl', 'todo', 'todoV2', 'foot'])
  if (ub < 0) ub = s.length
  return bumpFontSizes(s.slice(0, ua)) + s.slice(ua, ub) + bumpFontSizes(s.slice(ub))
}
