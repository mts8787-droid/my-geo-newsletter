// ─── Highlight 주간 라인차트 PNG — /api/hl-chart ─────────────────────────────
// Outlook 등 인라인 SVG 미지원 이메일 클라이언트용. d(base64url) → SVG → PNG 래스터화.
import { Router } from 'express'
import { createHash } from 'crypto'
import { Resvg } from '@resvg/resvg-js'
import { hlLineChartSvg, decodeChart } from '../src/shared/hlChart.js'
import { logFor } from '../lib/logger.js'

const log = logFor('hl-chart')
export const hlChartRouter = Router()

// 프로세스 내 LRU (미리보기 재렌더 시 재래스터화 방지)
const CACHE_MAX = 200
const cache = new Map() // d → Buffer

hlChartRouter.get('/api/hl-chart', (req, res) => {
  const d = req.query.d
  if (typeof d !== 'string' || !d) return res.status(400).end()
  try {
    let png = cache.get(d)
    if (!png) {
      const { series, labels, w, h, mark } = decodeChart(d)
      const svg = hlLineChartSvg(series, labels, w, h, mark)
      if (!svg) return res.status(400).end()
      // 2x 스케일로 선명하게 렌더 (레티나/확대 대비)
      png = new Resvg(svg, { font: { loadSystemFonts: true }, fitTo: { mode: 'width', value: w * 2 } }).render().asPng()
      cache.set(d, png)
      if (cache.size > CACHE_MAX) cache.delete(cache.keys().next().value)
    }
    const etag = '"' + createHash('sha1').update(d).digest('hex').slice(0, 16) + '"'
    if (req.headers['if-none-match'] === etag) return res.status(304).end()
    res.set('Content-Type', 'image/png')
    res.set('Cache-Control', 'public, max-age=31536000, immutable')
    res.set('ETag', etag)
    res.send(png)
  } catch (e) {
    log.warn({ err: e.message }, 'hl-chart render failed')
    res.status(400).end()
  }
})
