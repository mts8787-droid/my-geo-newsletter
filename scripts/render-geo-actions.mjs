// GEO 액션아이템 실행 대시보드 렌더러 — 셸 HTML + 데이터 + 클라이언트 JS 를 한 페이지로 조립.
// 셸·클라이언트는 src/geo-actions/ 의 정적 파일. 템플릿 리터럴 대신 자리표시자 치환을 써서
// 인라인 스크립트 안의 `${…}` 가 외부에서 보간되는 함정(design.md §6.1)을 피한다.
//   {{FONT}}          ← FONT 토큰 (dashboardConsts.js 단일 출처)
//   /*{{FONTS}}*/     ← @font-face 블록 (/font 정적 경로)
//   {{DATA}}          ← window.GEO_DATA (+ 서버 모드면 GEO_PROGRESS / GEO_PROGRESS_API)
//   {{APP}}           ← geoActionsClient.js
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { FONT } from '../src/dashboard/dashboardConsts.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC = join(__dirname, '..', 'src', 'geo-actions')

// render-readability.mjs 와 같은 @font-face 패턴 (design.md §4.4 — 공통 헬퍼 없음, 블록 복사)
const FONT_FACE_CSS = `
@font-face { font-family: 'LGEIText'; font-weight: 400 500; font-style: normal; src: url('/font/LGEIText%20Regular.otf') format('opentype'), url('/font/LGEIText%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LGEIText'; font-weight: 600; font-style: normal; src: url('/font/LGEIText%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LGEIText'; font-weight: 700 900; font-style: normal; src: url('/font/LGEIText%20Bold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 400; font-style: normal; src: url('/font/LG%20Smart%20Regular.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 600; font-style: normal; src: url('/font/LG%20Smart%20SemiBold.ttf') format('truetype'); font-display: swap; }
@font-face { font-family: 'LG Smart'; font-weight: 700; font-style: normal; src: url('/font/LG%20Smart%20Bold.ttf') format('truetype'); font-display: swap; }
`

// <script> 안에 넣는 JSON — `</script>` 조기 종료·U+2028 문제 방지
export function safeJson(v) {
  return JSON.stringify(v).replace(/</g, '\\u003c').replace(/[\u2028\u2029]/g, c => '\\u' + c.charCodeAt(0).toString(16))
}

/**
 * @param {object} data      geo_actions JSON (meta·dims·activities·topics·rows·groups·…)
 * @param {object} [opts]
 * @param {object} [opts.progress]     서버 저장 진척 { [rowId]: {s,m,t} } — 있으면 서버 모드
 * @param {string} [opts.progressApi]  진척 저장 API 경로 (서버 모드)
 * @param {boolean} [opts.readOnly]    공개 게시본 — progress 를 보여주기만 함 (입력 UI 숨김)
 * @param {string} [opts.fontFaceCss]  @font-face 블록 대체 (아티팩트는 data URI 서브셋)
 */
export function renderGeoActionsHTML(data, opts = {}) {
  const shell = readFileSync(join(SRC, 'geoActionsShell.html'), 'utf8')
  const app = readFileSync(join(SRC, 'geoActionsClient.js'), 'utf8')
  let dataTag = `<script>window.GEO_DATA=${safeJson(data)};`
  if (opts.progressApi) dataTag += `window.GEO_PROGRESS_API=${safeJson(opts.progressApi)};window.GEO_PROGRESS=${safeJson(opts.progress || {})};`
  else if (opts.readOnly) dataTag += `window.GEO_READONLY=true;window.GEO_PROGRESS=${safeJson(opts.progress || {})};`
  dataTag += '</script>'
  const page = shell
    .split('{{FONT}}').join(FONT)
    .split('/*{{FONTS}}*/').join(opts.fontFaceCss ?? FONT_FACE_CSS)
    .split('{{DATA}}').join(dataTag)
    .split('{{APP}}').join(app)
  // 셸은 아티팩트 계약(문서 골격 없음)으로 작성 — 서버에서는 완전한 문서로 감싼다
  if (opts.bare) return page
  return '<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body style="margin:0">' + page + '</body></html>'
}
