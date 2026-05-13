// N1 — dashboardTemplate.js에서 분리된 SVG 차트 생성기 (테스트 대상)
import { FONT, BRAND_COLORS, FALLBACK_COLORS } from './dashboardConsts.js'

// gradient·defs 충돌 방지용 카운터 (모듈 단위)
let _sid = 0

// 단일 색상 라인 차트 — null 값은 스킵, 라벨은 모든 위치에 표시
// opts.fadeBeforeIdx: 해당 인덱스 미만 데이터는 회색으로 페이드 + 연결선 끊김
// opts.baselineLabel: 베이스라인 시작점에 dashed vertical + 라벨 (예: '*Baseline 재설정')
export function svgLine(data, labels, w, h, color, opts = {}) {
  if (!data || !data.length) return `<svg width="${w}" height="${h}"></svg>`
  const fadeBeforeIdx = opts.fadeBeforeIdx != null ? opts.fadeBeforeIdx : -1
  const baselineLabel = opts.baselineLabel || ''
  const id = _sid++
  const pad = { t: 18, r: 10, b: 20, l: 10 }
  const cw = w - pad.l - pad.r, ch = h - pad.t - pad.b
  const valid = data.filter(v => v != null)
  if (!valid.length) {
    let svg = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" xmlns="http://www.w3.org/2000/svg" style="display:block;">`
    const N = data.length, divisor = N > 1 ? N - 1 : 1
    svg += data.map((_, i) => {
      const x = pad.l + (i / divisor) * cw
      return `<text x="${x.toFixed(1)}" y="${pad.t+ch+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${FONT}">${labels[i]||''}</text>`
    }).join('')
    svg += '</svg>'
    return svg
  }
  const mn = Math.min(...valid) - 1, mx = Math.max(...valid) + 1, rng = mx - mn || 1
  const N = data.length, divisor = N > 1 ? N - 1 : 1
  const allX = data.map((_, i) => pad.l + (i / divisor) * cw)
  const pts = []
  data.forEach((v, i) => { if (v != null) pts.push({ x: allX[i], y: pad.t + (1 - (v - mn) / rng) * ch, v, idx: i }) })
  let svg = `<svg viewBox="0 0 ${w} ${h+12}" width="100%" height="${h+12}" xmlns="http://www.w3.org/2000/svg" style="display:block;overflow:visible">`
  const prePts = fadeBeforeIdx > 0 ? pts.filter(p => p.idx < fadeBeforeIdx) : []
  const postPts = fadeBeforeIdx > 0 ? pts.filter(p => p.idx >= fadeBeforeIdx) : pts
  const FADE = '#64748B'
  if (postPts.length >= 2) {
    const line = postPts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
    const area = line + ` L${postPts[postPts.length-1].x.toFixed(1)},${pad.t+ch} L${postPts[0].x.toFixed(1)},${pad.t+ch} Z`
    svg += `<defs><linearGradient id="lg${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0.03"/>
    </linearGradient></defs>`
    svg += `<path d="${area}" fill="url(#lg${id})"/>`
    svg += `<path d="${line}" stroke="${color}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
  }
  if (prePts.length >= 2) {
    const line = prePts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
    svg += `<path d="${line}" stroke="${FADE}" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>`
  }
  svg += pts.map(p => {
    const isPre = fadeBeforeIdx > 0 && p.idx < fadeBeforeIdx
    const isBaseStart = fadeBeforeIdx > 0 && p.idx === fadeBeforeIdx
    if (isBaseStart) {
      // 베이스라인 시작점: 안쪽 검정 + 두꺼운 스트로크
      return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="#000" stroke="${color}" stroke-width="3"/>`
    }
    return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.5" fill="#fff" stroke="${isPre ? FADE : color}" stroke-width="2" opacity="${isPre ? 0.85 : 1}"/>`
  }).join('')
  svg += pts.map(p => {
    const isPre = fadeBeforeIdx > 0 && p.idx < fadeBeforeIdx
    const tcol = isPre ? FADE : color
    return `<text x="${p.x.toFixed(1)}" y="${Math.max(p.y - 7, 12)}" text-anchor="middle" font-size="12" font-weight="700" fill="${tcol}" font-family="${FONT}">${p.v.toFixed(1)}</text>`
  }).join('')
  // 베이스라인 dashed vertical + 라벨
  // onRight (RAC/Aircare W16): X축 라벨 아래로 내림 (그래프/데이터값과 안 겹치게)
  // onLeft (Audio W13): 차트 상단
  if (fadeBeforeIdx > 0 && baselineLabel) {
    const bx = allX[fadeBeforeIdx]
    svg += `<line x1="${bx.toFixed(1)}" y1="${pad.t}" x2="${bx.toFixed(1)}" y2="${pad.t+ch}" stroke="#64748B" stroke-width="1" stroke-dasharray="3,3"/>`
    const onRight = bx > w * 0.7
    const labelY = onRight ? pad.t + ch + 26 : pad.t + 8
    svg += `<text x="${(onRight ? bx-5 : bx+5).toFixed(1)}" y="${labelY.toFixed(1)}" text-anchor="${onRight ? 'end' : 'start'}" font-size="9" fill="#64748B" font-family="${FONT}">${baselineLabel}</text>`
  }
  svg += data.map((_, i) => `<text x="${allX[i].toFixed(1)}" y="${pad.t+ch+14}" text-anchor="middle" font-size="12" fill="#94A3B8" font-family="${FONT}">${labels[i]||''}</text>`).join('')
  svg += '</svg>'
  return svg
}

// 브랜드별 색상 — BRAND_COLORS 매칭 우선, 미정의 시 FALLBACK_COLORS 순환
export function brandColor(name, idx) {
  return BRAND_COLORS[name] || FALLBACK_COLORS[idx % FALLBACK_COLORS.length]
}

// 다중 브랜드 라인 차트 (X 라벨 없음 — 외부 테이블 헤더가 대체)
// opts.fadeBeforeIdx: 해당 인덱스 미만 데이터는 회색으로 페이드 + 연결선 끊김 (모든 브랜드)
// opts.baselineLabel: 베이스라인 위치에 dashed vertical + 라벨
export function svgMultiLine(brandData, labels, w, h, opts = {}) {
  const brands = Object.keys(brandData)
  if (!brands.length || !labels.length) return ''
  const fadeBeforeIdx = opts.fadeBeforeIdx != null ? opts.fadeBeforeIdx : -1
  const baselineLabel = opts.baselineLabel || ''
  let mn = Infinity, mx = -Infinity
  brands.forEach(b => (brandData[b] || []).forEach(v => { if (v != null) { if (v < mn) mn = v; if (v > mx) mx = v } }))
  if (!isFinite(mn)) return ''
  const pad = Math.max((mx - mn) * 0.15, 2)
  mn = Math.max(0, mn - pad); mx = Math.min(100, mx + pad)
  const rng = mx - mn || 1
  const N = labels.length
  const pt = 8, pb = 8, ch = h - pt - pb
  const FADE = '#64748B'
  let g = ''
  for (let i = 0; i <= 4; i++) {
    const y = pt + (i / 4) * ch
    g += `<line x1="0" y1="${y.toFixed(1)}" x2="${w}" y2="${y.toFixed(1)}" stroke="#E8EDF2" stroke-width="1"/>`
  }
  brands.forEach((b, bi) => {
    const vals = brandData[b] || []
    const color = brandColor(b, bi)
    const isLG = b === 'LG'
    const sw = isLG ? 2.5 : 1.5
    const opacity = isLG ? 1 : 0.7
    const pts = []
    vals.forEach((v, i) => {
      if (v == null) return
      const x = ((i + 0.5) / N) * w
      const y = pt + (1 - (v - mn) / rng) * ch
      pts.push({ x, y, v, idx: i })
    })
    if (!pts.length) return
    const prePts = fadeBeforeIdx > 0 ? pts.filter(p => p.idx < fadeBeforeIdx) : []
    const postPts = fadeBeforeIdx > 0 ? pts.filter(p => p.idx >= fadeBeforeIdx) : pts
    function drawSeg(segPts, segColor, segOp, skipBaseStart) {
      if (segPts.length >= 2) {
        const d = segPts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
        g += `<path d="${d}" stroke="${segColor}" fill="none" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" opacity="${segOp}"/>`
      }
      segPts.forEach(p => {
        if (skipBaseStart && p.idx === fadeBeforeIdx) return
        g += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${isLG ? 3.5 : 2.5}" fill="#fff" stroke="${segColor}" stroke-width="${isLG ? 2 : 1.5}" opacity="${segOp}"/>`
      })
    }
    drawSeg(prePts, FADE, 0.85, false)
    drawSeg(postPts, color, opacity, isLG && fadeBeforeIdx > 0)
    // 베이스라인 시작점 마커 (LG 만, 안쪽 검정 + 두꺼운 스트로크)
    if (isLG && fadeBeforeIdx > 0) {
      const bp = pts.find(p => p.idx === fadeBeforeIdx)
      if (bp) g += `<circle cx="${bp.x.toFixed(1)}" cy="${bp.y.toFixed(1)}" r="4.5" fill="#000" stroke="${color}" stroke-width="3"/>`
    }
  })
  // 베이스라인 dashed vertical + 라벨 (오른쪽 끝 가까우면 왼쪽 배치)
  if (fadeBeforeIdx > 0 && baselineLabel) {
    const bx = ((fadeBeforeIdx + 0.5) / N) * w
    g += `<line x1="${bx.toFixed(1)}" y1="${pt}" x2="${bx.toFixed(1)}" y2="${pt+ch}" stroke="#64748B" stroke-width="1" stroke-dasharray="4,3"/>`
    const onRight = bx > w * 0.7
    g += `<text x="${(onRight ? bx-5 : bx+5).toFixed(1)}" y="${(pt+12).toFixed(1)}" text-anchor="${onRight ? 'end' : 'start'}" font-size="11" fill="#64748B" font-family="${FONT}">${baselineLabel}</text>`
  }
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block">${g}</svg>`
}
