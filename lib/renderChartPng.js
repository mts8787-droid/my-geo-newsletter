// Highlight 주간 라인차트 d(base64url) → PNG Buffer. hl-chart 라우트 + 이메일 CID 첨부 공용.
// 메모리 절약: loadSystemFonts(시스템 폰트 전체 로드 — 512MB 플랜 OOM 유발) 대신 번들 폰트 1개만 로드.
import { Resvg } from '@resvg/resvg-js'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { hlLineChartSvg, decodeChart } from '../src/shared/hlChart.js'

// 차트 텍스트(값 라벨·주차·브랜드명)용 단일 폰트 — 한/영/숫자 커버. 시스템 폰트 스캔 회피.
const FONT_PATH = join(dirname(fileURLToPath(import.meta.url)), '..', 'font', 'LG Smart Regular.ttf')

// d(base64url) → PNG Buffer. 불량 d 는 decodeChart 가 throw → 호출자가 처리.
export function renderChartPng(d) {
  const { series, labels, w, h, mark } = decodeChart(d)
  const svg = hlLineChartSvg(series, labels, w, h, mark)
  if (!svg) return null
  return new Resvg(svg, {
    font: { fontFiles: [FONT_PATH], loadSystemFonts: false, defaultFontFamily: 'LG Smart' },
    fitTo: { mode: 'width', value: w * 2 },  // 2x — 레티나/확대 대비 선명도
  }).render().asPng()
}
