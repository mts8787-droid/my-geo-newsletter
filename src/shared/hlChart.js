// Highlight 주간 라인차트 — SVG 빌더 + URL 인코딩/디코딩.
// emailTemplate(=img src 생성) 과 routes/hl-chart(=PNG 래스터화) 가 공유.

function escapeXml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// 주간 꺾은선(라인) 차트 SVG 문자열. series: [{ name, color, data:[값|null...] }]
// mark: 세로 점선을 그릴 라벨 인덱스 (없으면 -1)
export function hlLineChartSvg(series, labels, w = 500, h = 152, mark = -1) {
  const padL = 30, padR = 12, padT = 12, padB = 24
  const cw = w - padL - padR, ch = h - padT - padB
  const all = series.flatMap(s => (s.data || []).filter(v => v != null))
  if (!all.length) return ''
  let mn = Math.min(...all), mx = Math.max(...all)
  const pd = Math.max((mx - mn) * 0.12, 1); mn -= pd; mx += pd
  const rng = mx - mn || 1
  const N = labels.length
  const X = i => padL + (N > 1 ? cw * i / (N - 1) : cw / 2)
  const Y = v => padT + ch * (1 - (v - mn) / rng)
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="display:block;width:100%;max-width:${w}px;height:auto;">`
  svg += `<rect x="0" y="0" width="${w}" height="${h}" fill="#FFFFFF"/>`
  for (let g = 0; g <= 3; g++) { const yy = (padT + ch * g / 3).toFixed(1); svg += `<line x1="${padL}" y1="${yy}" x2="${w - padR}" y2="${yy}" stroke="#EEF0F3" stroke-width="1"/>` }
  if (mark >= 0 && mark < N) { const mxx = X(mark).toFixed(1); svg += `<line x1="${mxx}" y1="${padT}" x2="${mxx}" y2="${(padT + ch).toFixed(1)}" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3,3"/>` }
  svg += `<text x="${padL - 5}" y="${(padT + 4).toFixed(1)}" text-anchor="end" font-size="9" fill="#94A3B8" font-family="sans-serif">${Math.round(mx)}</text>`
  svg += `<text x="${padL - 5}" y="${(padT + ch).toFixed(1)}" text-anchor="end" font-size="9" fill="#94A3B8" font-family="sans-serif">${Math.round(mn)}</text>`
  labels.forEach((l, i) => { svg += `<text x="${X(i).toFixed(1)}" y="${(h - 8).toFixed(1)}" text-anchor="middle" font-size="9" fill="#94A3B8" font-family="sans-serif">${escapeXml(l)}</text>` })
  series.forEach(s => {
    const data = s.data || []
    let d = '', started = false
    data.forEach((v, i) => { if (v == null) { started = false; return } d += (started ? ' L' : 'M') + X(i).toFixed(1) + ',' + Y(v).toFixed(1); started = true })
    const isLG = s.name === 'LG'
    if (d) svg += `<path d="${d}" fill="none" stroke="${s.color}" stroke-width="${isLG ? 2.6 : 1.6}" stroke-linejoin="round" stroke-linecap="round"/>`
    data.forEach((v, i) => { if (v != null) svg += `<circle cx="${X(i).toFixed(1)}" cy="${Y(v).toFixed(1)}" r="${isLG ? 3 : 2.3}" fill="${s.color}"/>` })
  })
  // 값 레이블 — W20(mark)·마지막 주차만. 1위(값 큰)는 포인트 위, 최하위는 그래프 아래(x축 라벨 위)로 확실히 내림.
  const labelIdxs = [...new Set([mark >= 0 && mark < N ? mark : null, N - 1].filter(i => i != null && i >= 0))]
  const GAP = 13, top = padT + 7, bottomY = padT + ch + 8  // 그래프 하단선 아래 (x축 라벨 위)
  labelIdxs.forEach(idx => {
    const items = series.map(s => ({ color: s.color, v: s.data ? s.data[idx] : null })).filter(x => x.v != null)
      .map(x => ({ ...x, py: Y(x.v) })).sort((a, b) => a.py - b.py)  // 위(값 큰)→아래(값 작은)
    const n = items.length
    if (!n) return
    // 최하위 라벨은 그래프 아래 고정, 나머지는 포인트 위
    items.forEach((it, i) => { it.ly = (n >= 2 && i === n - 1) ? bottomY : it.py - 5 })
    // 상단 라벨들(하단 고정 제외)만 최소 간격 유지
    for (let i = 1; i < n - 1; i++) if (items[i].ly - items[i - 1].ly < GAP) items[i].ly = items[i - 1].ly + GAP
    // 상단 그룹 상단 경계 클램프
    if (items[0].ly < top) { const d = top - items[0].ly; for (let i = 0; i < (n >= 2 ? n - 1 : n); i++) items[i].ly += d }
    const tx = (X(idx) - 4).toFixed(1)
    items.forEach(it => { svg += `<text x="${tx}" y="${it.ly.toFixed(1)}" text-anchor="end" font-size="9" font-weight="700" fill="${it.color}" font-family="sans-serif">${it.v.toFixed(1)}</text>` })
  })
  svg += `</svg>`
  return svg
}

// base64url — URL 안전 (+/= 치환). Node/브라우저 공용.
function b64urlEncode(str) {
  const b64 = typeof btoa === 'function' ? btoa(unescape(encodeURIComponent(str))) : Buffer.from(str, 'utf-8').toString('base64')
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
function b64urlDecode(s) {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/')
  return typeof atob === 'function' ? decodeURIComponent(escape(atob(b64))) : Buffer.from(b64, 'base64').toString('utf-8')
}

// 렌더 로직(레이블 배치 등)이 바뀔 때마다 +1 → d 값이 달라져 브라우저 immutable·서버 LRU 캐시 자동 무효화.
export const CHART_REV = 2

// 차트 데이터를 URL 파라미터(d)로 인코딩. 값은 소수1자리로 압축.
export function encodeChart({ series, labels, w = 500, h = 152, mark = -1 }) {
  const compact = {
    v: CHART_REV,
    w, h,
    m: Number.isInteger(mark) ? mark : -1,
    l: labels.map(String),
    s: (series || []).map(x => ({
      n: String(x.name),
      c: String(x.color),
      d: (x.data || []).map(v => v == null ? null : Math.round(Number(v) * 10) / 10),
    })),
  }
  return b64urlEncode(JSON.stringify(compact))
}

const HEX = /^#[0-9a-fA-F]{3,8}$/
// d → { series, labels, w, h } 검증. 불량이면 throw.
export function decodeChart(d) {
  if (typeof d !== 'string' || d.length > 8000) throw new Error('bad d')
  const o = JSON.parse(b64urlDecode(d))
  const w = Math.min(Math.max(Number(o.w) || 500, 100), 800)
  const h = Math.min(Math.max(Number(o.h) || 152, 60), 400)
  const labels = Array.isArray(o.l) ? o.l.slice(0, 40).map(x => String(x).slice(0, 12)) : []
  const series = (Array.isArray(o.s) ? o.s : []).slice(0, 8).map(x => {
    const color = HEX.test(x && x.c) ? x.c : '#64748B'
    const data = (Array.isArray(x && x.d) ? x.d : []).slice(0, 40).map(v => {
      if (v == null) return null
      const n = Number(v)
      return Number.isFinite(n) ? n : null
    })
    return { name: String((x && x.n) || '').slice(0, 24), color, data }
  })
  if (!series.length) throw new Error('empty series')
  const mark = (Number.isInteger(o.m) && o.m >= 0 && o.m < labels.length) ? o.m : -1
  return { series, labels, w, h, mark }
}
