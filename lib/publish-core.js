// ─── Publish Core — 채널 정의 + 게시본 쓰기 (routes/publish.js 에서 분리) ───
// 분리 이유 (2026-08-30): 서버 통합 게시 엔진(lib/republish.mjs)이 라우트를 거치지 않고
// publishChannel() 을 직접 호출해야 하는데, routes/publish.js 에 두면
// publish.js ↔ republish.mjs 순환 import 가 생긴다. 코어를 lib 로 내려 단방향 유지.
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { DATA_DIR, PUB_DIR } from './storage.js'
import { logFor } from './logger.js'
import { loadLatest } from '../routes/readability.js'
import { renderReadabilityHTML } from '../scripts/render-readability.mjs'

const log = logFor('publish')

// ─── Readability 임베드 ──────────────────────────────────────────────────
// 웹 공개본 /p/GEO-Readability-Dashboard 는 routes/published.js 가 요청 시 렌더한다
// (게시 조작 없음). 여기서는 통합 대시보드 게시본이 iframe 으로 물고 갈
// /p/<slug>-readability 정적 페이지만 만든다.

// 최신 스냅샷으로 Readability HTML 생성 (게시용 — adminMode:false)
export function renderReadabilityPublic(lang = 'ko') {
  const { snapshot, index, snapshots } = loadLatest()
  if (!snapshot) return null
  return renderReadabilityHTML({ snapshot, index, snapshots, adminMode: false, lang, embed: true })
}

// 대시보드 "Readability 포함" 게시 시 — 통합 뷰어가 임베드할 페이지 생성.
// 게시본은 인증 게이트 밖(IP allowlist)이라 /admin/readability iframe 불가 →
// 동일출처 /p/<slug>-readability 로 별도 정적 페이지를 써서 대시보드 iframe 이 임베드.
// 우선순위: 별도 게시된 웹 게시본(GEO-Readability-Dashboard.html)을 복사 → 그게 곧 "웹 게시된 버전이
// 통합 뷰어에서 다시 게시되는" 형태. 별도 게시 전이면 최신 스냅샷으로 폴백 생성(하위호환).
export const READABILITY_MARKER = '<!--READABILITY_EMBED-->'
export function writeReadabilityEmbed(ch) {
  try {
    // 항상 최신 스냅샷으로 렌더 — 예전에는 별도 게시본(READABILITY_STANDALONE) 파일을
    // 우선 복사했는데, 그 파일은 게시 시점에 굳어 있어 어드민/게시본과 어긋났다.
    // /p/GEO-Readability-Dashboard 가 요청 시 렌더로 바뀐 뒤로는 굽는 의미도 없다.
    // KO/EN 을 각각 렌더 — 예전에는 한 번 렌더해 두 슬러그에 같은 파일을 써서
    // EN 대시보드의 Readability 탭이 한국어로 나왔다 (사용자 보고 2026-08-30).
    const koHtml = renderReadabilityPublic('ko')
    const enHtml = renderReadabilityPublic('en')
    if (!koHtml) {
      log.warn({ tag: ch.logTag }, 'readability embed: 스냅샷 없음')
      return
    }
    writeFileSync(join(PUB_DIR, `${ch.koSlug}-readability.html`), koHtml)
    writeFileSync(join(PUB_DIR, `${ch.enSlug}-readability.html`), enHtml)
    log.info({ tag: ch.logTag, koSlug: `${ch.koSlug}-readability` }, 'readability embed written')
  } catch (e) {
    log.warn({ tag: ch.logTag, err: e.message }, 'readability embed failed')
  }
}

// ─── 채널별 슬러그·메타 파일 매핑 ──────────────────────────────────────────
export const CHANNELS = {
  newsletter: {
    koSlug: 'GEO-Monthly-Report-KO',
    enSlug: 'GEO-Monthly-Report-EN',
    metaFile: join(DATA_DIR, 'publish-meta.json'),
    title: 'GEO Monthly Report',
    injectLangBar: true,
    logTag: 'PUBLISH',
    // 월별 발행 모드 — 각 월(YYYY-MM)이 별도 정적 페이지로 게시됨
    monthly: true,
  },
  dashboard: {
    koSlug: 'GEO-KPI-Dashboard-KO',
    enSlug: 'GEO-KPI-Dashboard-EN',
    metaFile: join(DATA_DIR, 'dashboard-meta.json'),
    title: 'GEO KPI Dashboard',
    logTag: 'PUBLISH-DASH',
  },
  citation: {
    koSlug: 'GEO-Citation-Dashboard-KO',
    enSlug: 'GEO-Citation-Dashboard-EN',
    metaFile: join(DATA_DIR, 'citation-meta.json'),
    title: 'GEO Citation Dashboard',
    logTag: 'PUBLISH-CIT',
  },
  'monthly-report': {
    koSlug: 'GEO-Monthly-Report-Internal-KO',
    enSlug: 'GEO-Monthly-Report-Internal-EN',
    metaFile: join(DATA_DIR, 'monthly-report-meta.json'),
    title: 'GEO Monthly Report',
    logTag: 'PUBLISH-MR',
  },
  visibility: {
    koSlug: 'GEO-Visibility-Dashboard-KO',
    enSlug: 'GEO-Visibility-Dashboard-EN',
    metaFile: join(DATA_DIR, 'visibility-meta.json'),
    title: 'GEO Visibility Dashboard',
    logTag: 'PUBLISH-VIS',
  },
}

// ─── 공통 언어 전환 바 (newsletter용) ─────────────────────────────────────
function makeLangBarHtml(activeLang, koSlug, enSlug) {
  const btn = (lang, label, href) => {
    const active = lang === activeLang
    return `<a href="${href}" style="display:inline-block;font-size:13px;text-decoration:none;padding:6px 18px;border-radius:20px;margin:0 4px;color:${active ? '#FFFFFF' : '#94A3B8'};font-weight:${active ? '700' : '500'};background:${active ? '#CF0652' : 'rgba(255,255,255,0.08)'};">${label}</a>`
  }
  return `<div style="background:#0F172A;padding:12px 0;text-align:center;font-family:'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif;">${btn('ko','한국어','/p/'+koSlug)}${btn('en','English','/p/'+enSlug)}</div>`
}
export function injectLangBar(html, lang, koSlug, enSlug) {
  const bar = makeLangBarHtml(lang, koSlug, enSlug)
  if (html.match(/<body[^>]*>/i)) return html.replace(/(<body[^>]*>)/i, `$1${bar}`)
  return bar + html
}

export function readMetaFile(metaPath) {
  try { return JSON.parse(readFileSync(metaPath, 'utf-8')) } catch { return null }
}


// 채널 게시본 쓰기 — 라우트 핸들러와 서버 통합 게시가 공유하는 단일 진입점.
// 반환: { ok, urls, title, ts } / 실패 시 throw (호출자가 채널별 try/catch)
export function publishChannel(ch, { htmlKo, htmlEn, title }) {
  const koPath = join(PUB_DIR, `${ch.koSlug}.html`)
  const enPath = join(PUB_DIR, `${ch.enSlug}.html`)
  const finalKo = ch.injectLangBar ? injectLangBar(htmlKo, 'ko', ch.koSlug, ch.enSlug) : htmlKo
  const finalEn = ch.injectLangBar ? injectLangBar(htmlEn, 'en', ch.koSlug, ch.enSlug) : htmlEn
  if (typeof finalKo === 'string' && finalKo.includes(READABILITY_MARKER)) writeReadabilityEmbed(ch)
  writeFileSync(koPath, finalKo)
  writeFileSync(enPath, finalEn)
  const meta = { title: title || ch.title, ts: Date.now() }
  writeFileSync(ch.metaFile, JSON.stringify(meta, null, 2))
  log.info({ tag: ch.logTag, title: meta.title, koSlug: ch.koSlug, enSlug: ch.enSlug }, 'published')
  return { ok: true, urls: { ko: `/p/${ch.koSlug}`, en: `/p/${ch.enSlug}` }, ...meta }
}
