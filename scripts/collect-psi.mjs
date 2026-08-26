#!/usr/bin/env node
// PageSpeed Insights (Lighthouse) TTFB 수집 — 재실행/재개 가능
//
// 왜: 어딧 크롤러의 자체 TTFB 측정값이 동시 크롤 큐잉에 오염돼 실제보다 6~200배
//     크게 잡혔다 (2026-08-26 확인: UK 크롤러 1088ms vs PSI Lab 11ms).
//     TTFB 는 PSI 의 server-response-time 을 정본으로 쓴다.
//
// 입력: data/readability/checks-<date>.json 의 rows[].url (채점 대상 전수)
// 출력: data/readability/psi-<date>.json  { url: { lab, crux, cruxOrigin, at } }
//
// 사용:
//   node scripts/collect-psi.mjs                          # 최신 checks 기준 전수
//   node scripts/collect-psi.mjs --limit 20               # 앞 20건만 (검증용)
//   node scripts/collect-psi.mjs --concurrency 20
//   node scripts/collect-psi.mjs --date 2026-07-31
//
// 재개: 출력 파일에 이미 있는 URL 은 건너뛴다 (중단 후 같은 명령 재실행하면 이어서 진행).
// 키:   .env 의 PSI_API_KEY (gitignore 대상 — 절대 커밋 금지)

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { _logInfo, _logWarn } from '../src/sheetParserUtils.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..')
const DATA_DIR = join(REPO_ROOT, 'data', 'readability')
const ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'

function parseArgs() {
  const a = process.argv.slice(2), out = {}
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '--limit') out.limit = parseInt(a[++i])
    else if (a[i] === '--concurrency') out.concurrency = parseInt(a[++i])
    else if (a[i] === '--date') out.date = a[++i]
    else if (a[i] === '--strategy') out.strategy = a[++i]
    else if (a[i] === '--sample') out.sample = parseInt(a[++i])
  }
  return out
}

// .env 에서 키 로드 (dotenv 의존 없이) — 값에 = 가 들어가도 첫 = 만 분리
function loadKey() {
  if (process.env.PSI_API_KEY) return process.env.PSI_API_KEY
  const envPath = join(REPO_ROOT, '.env')
  if (!existsSync(envPath)) return null
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const i = t.indexOf('=')
    if (i > 0 && t.slice(0, i).trim() === 'PSI_API_KEY') return t.slice(i + 1).trim()
  }
  return null
}

function latestChecksDate() {
  const f = readdirSync(DATA_DIR).filter(x => /^checks-\d{4}-\d{2}-\d{2}\.json$/.test(x)).sort()
  return f.length ? f[f.length - 1].slice(7, 17) : null
}

const sleep = ms => new Promise(r => setTimeout(r, ms))

// 저장 스키마 버전 — 필드가 늘어나면 올린다. 재개 시 이 버전 미만인 항목은 다시 받는다
// (같은 호출로 이미 오는 값을 나중에 추가하려면 전수 재수집이 필요해지므로, 처음부터 다 담는다).
export const PSI_SCHEMA_VERSION = 2

// PSI 1건 호출 → 성능 지표 추출. 실패 시 { err } 반환 (throw 하지 않음 — 한 건이 전체를 멈추지 않게)
async function fetchPsi(url, key, strategy) {
  const q = `${ENDPOINT}?url=${encodeURIComponent(url)}&strategy=${strategy}&category=performance&key=${key}`
  const res = await fetch(q)
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    const e = new Error(`HTTP ${res.status}`)
    e.status = res.status
    e.body = body.slice(0, 200)
    throw e
  }
  const d = await res.json()
  const A = d.lighthouseResult?.audits || {}
  const num = k => typeof A[k]?.numericValue === 'number' ? Math.round(A[k].numericValue) : null
  const le = d.loadingExperience?.metrics || {}
  const oe = d.originLoadingExperience?.metrics || {}
  const cx = k => le[k]?.percentile ?? null
  return {
    v: PSI_SCHEMA_VERSION,
    // ── 채점 정본 ──
    lab: num('server-response-time'),                        // #1 TTFB (server-response-time, ms)
    // ── 코어 웹 바이탈 (lab) — scoring_config 의 #9 LCP / #10 CLS / #11 INP 가
    //    'PSI API 의존' 사유로 비활성 상태다. 활성화 시 재수집 없이 바로 쓰도록 지금 저장.
    lcp: num('largest-contentful-paint'),
    cls: typeof A['cumulative-layout-shift']?.numericValue === 'number'
      ? +A['cumulative-layout-shift'].numericValue.toFixed(3) : null,   // CLS 는 0~1 소수라 반올림 금지
    tbt: num('total-blocking-time'),                         // INP 의 lab 대용 지표
    fcp: num('first-contentful-paint'),
    si: num('speed-index'),
    tti: num('interactive'),
    perfScore: typeof d.lighthouseResult?.categories?.performance?.score === 'number'
      ? Math.round(d.lighthouseResult.categories.performance.score * 100) : null,
    // ── CrUX 실사용자 (참고) ──
    crux: cx('EXPERIMENTAL_TIME_TO_FIRST_BYTE'),             // 이 URL 의 실사용자 TTFB
    cruxLcp: cx('LARGEST_CONTENTFUL_PAINT_MS'),
    cruxCls: cx('CUMULATIVE_LAYOUT_SHIFT_SCORE'),
    cruxInp: cx('INTERACTION_TO_NEXT_PAINT') ?? cx('EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT'),
    cruxFallback: !!d.loadingExperience?.origin_fallback,     // true = URL 데이터 없어 도메인값 대체
    cruxOrigin: oe.EXPERIMENTAL_TIME_TO_FIRST_BYTE?.percentile ?? null,
    at: new Date().toISOString(),
  }
}

// 429/5xx 는 지수 백오프 재시도, 4xx(429 제외) 는 즉시 포기 (URL 문제 — 재시도 무의미).
//
// PSI 는 동시 요청이 많으면 429 대신 500 "Unable to process request. Please wait a while"
// 를 돌려준다 (2026-08-26 실측: 병렬 40 에서 500 이 134건 / 429 가 28건). 즉 500 도
// 사실상 레이트리밋 신호라 넉넉히 기다렸다 재시도해야 한다. 지터를 섞어 워커들이
// 같은 시점에 몰려 재시도하는 것(thundering herd)도 방지.
async function fetchWithRetry(url, key, strategy, maxTry = 6) {
  let wait = 10000
  for (let t = 1; t <= maxTry; t++) {
    try {
      return await fetchPsi(url, key, strategy)
    } catch (e) {
      const retriable = e.status === 429 || e.status >= 500 || e.status === undefined
      if (!retriable || t === maxTry) return { err: e.message, errBody: e.body, at: new Date().toISOString() }
      await sleep(wait + Math.floor(Math.random() * 5000))
      wait = Math.min(wait * 2, 120000)
    }
  }
}

async function main() {
  const args = parseArgs()
  const key = loadKey()
  if (!key) {
    console.error('[collect-psi] FATAL: PSI_API_KEY 없음 — .env 에 PSI_API_KEY=... 를 넣으세요 (.gitignore 대상)')
    process.exit(1)
  }
  const date = args.date || latestChecksDate()
  if (!date) {
    console.error('[collect-psi] FATAL: checks-<date>.json 없음 — node scripts/aggregate-readability.mjs 먼저 실행')
    process.exit(1)
  }
  const strategy = args.strategy || 'mobile'
  const concurrency = args.concurrency || 12   // 실측상 12 이하에서 500/429 거의 없음 (40 은 44% 실패)

  const outPath = join(DATA_DIR, `psi-${date}.json`)
  let store = { date, strategy, generatedAt: null, results: {} }
  if (existsSync(outPath)) {
    try {
      store = JSON.parse(readFileSync(outPath, 'utf8'))
      store.results = store.results || {}
    } catch { /* 손상 시 새로 시작 */ }
  }

  const checksPath = join(DATA_DIR, `checks-${date}.json`)
  if (!existsSync(checksPath)) {
    console.error(`[collect-psi] FATAL: ${checksPath} 없음`)
    process.exit(1)
  }
  const checks = JSON.parse(readFileSync(checksPath, 'utf8'))
  let urls = [...new Set((checks.rows || []).map(r => r.url).filter(Boolean))]
  let mode = 'full'

  // --sample N : 국가×페이지타입당 최대 N건만 측정 (1차 추출용).
  // PSI 가 초당 처리량이 낮아(실측 ~180건/시간) 전수는 20시간대라, 국가·타입별 비교에
  // 필요한 만큼만 뽑는다. 이미 측정된 URL 을 각 셀에서 우선 채택해 재측정을 피한다.
  if (args.sample > 0) {
    mode = `sample:${args.sample}`
    const meta = new Map((checks.rows || []).map(r => [r.url, { cc: r.cc, pt: r.pt }]))
    const cells = {}
    for (const u of urls) {
      const m = meta.get(u); if (!m) continue
      const k = `${m.cc}|${m.pt}`
      ;(cells[k] = cells[k] || []).push(u)
    }
    const already = new Set(Object.entries(store.results || {})
      .filter(([, v]) => v && !v.err && v.lab != null && (v.v || 1) >= PSI_SCHEMA_VERSION).map(([k]) => k))
    const picked = []
    for (const k of Object.keys(cells).sort()) {
      // 측정 완료분 우선 + 나머지는 URL 정렬 순 (결정적)
      const arr = cells[k].slice().sort((a, b) => {
        const da = already.has(a) ? 0 : 1, db = already.has(b) ? 0 : 1
        return da !== db ? da - db : (a < b ? -1 : a > b ? 1 : 0)
      })
      picked.push(...arr.slice(0, args.sample))
    }
    urls = picked
    _logInfo('collect-psi', `표본 모드 — 국가×페이지타입당 최대 ${args.sample}건 → 대상 ${urls.length} (셀 ${Object.keys(cells).length}개)`)
  }


  // 재개 — 이미 성공한 URL 은 건너뜀 (err 만 있는 건 재시도 대상)
  const done = new Set(Object.entries(store.results)
    .filter(([, v]) => v && !v.err && (v.v || 1) >= PSI_SCHEMA_VERSION).map(([k]) => k))
  const stale = Object.values(store.results).filter(v => v && !v.err && (v.v || 1) < PSI_SCHEMA_VERSION).length
  if (stale) _logInfo('collect-psi', `구 스키마(v<${PSI_SCHEMA_VERSION}) ${stale}건 재수집 대상`)
  const todo = urls.filter(u => !done.has(u))
  if (args.limit) todo.length = Math.min(todo.length, args.limit)

  _logInfo('collect-psi', `대상 ${urls.length} URL | 완료 ${done.size} | 이번 실행 ${todo.length} | 병렬 ${concurrency} | strategy=${strategy}`)
  if (!todo.length) {
    save()
    _logInfo('collect-psi', `남은 URL 없음 — complete=${store.complete} (${store.coverage.ok}/${store.coverage.total})`)
    return
  }

  const t0 = Date.now()
  let ok = 0, fail = 0, idx = 0, sinceSave = 0

  // complete: 대상 URL 을 전부 커버했는지. 부분 수집분으로 집계가 돌아가면 #1 통과율이
  // 표본 20건 같은 소수 기준이 되어 오해를 부르므로, 집계는 이 플래그가 true 일 때만 PSI 를 쓴다.
  const markComplete = () => {
    const good = new Set(Object.entries(store.results)
      .filter(([, v]) => v && !v.err && v.lab != null && (v.v || 1) >= PSI_SCHEMA_VERSION).map(([k]) => k))
    store.complete = urls.every(u => good.has(u))
    store.mode = mode
    store.coverage = { total: urls.length, ok: urls.filter(u => good.has(u)).length, stored: good.size }
    return store.complete
  }
  const save = () => {
    store.generatedAt = new Date().toISOString()
    markComplete()
    writeFileSync(outPath, JSON.stringify(store))
  }

  async function worker() {
    while (idx < todo.length) {
      const url = todo[idx++]
      const r = await fetchWithRetry(url, key, strategy)
      store.results[url] = r
      if (r.err) { fail++; _logWarn('collect-psi', `실패 — ${r.err}`, { url }) } else ok++
      // 25건마다 중간 저장 — 중단돼도 진행분 보존
      if (++sinceSave >= 25) { sinceSave = 0; save() }
      const n = ok + fail
      if (n % 100 === 0) {
        const el = (Date.now() - t0) / 1000
        const eta = Math.round((todo.length - n) * (el / n) / 60)
        _logInfo('collect-psi', `${n}/${todo.length} (성공 ${ok} 실패 ${fail}) | 경과 ${Math.round(el / 60)}분 | 남은 예상 ${eta}분`)
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, todo.length) }, worker))
  save()
  const min = ((Date.now() - t0) / 60000).toFixed(1)
  _logInfo('collect-psi', `✓ 완료 — 성공 ${ok} / 실패 ${fail} / ${min}분 → ${outPath}`)
  if (!store.complete) {
    _logWarn('collect-psi', `커버리지 미완 ${store.coverage.ok}/${store.coverage.total} — 집계는 PSI 를 쓰지 않고 크롤러 값으로 폴백한다. 같은 명령을 다시 실행하면 실패분만 이어서 재시도.`)
  }

  // 요약 통계 (분포 확인용)
  const labs = Object.values(store.results).filter(v => v && !v.err && v.lab != null).map(v => v.lab).sort((a, b) => a - b)
  if (labs.length) {
    const q = p => labs[Math.floor((labs.length - 1) * p)]
    _logInfo('collect-psi', `PSI Lab TTFB — 중앙값 ${q(.5)}ms / p75 ${q(.75)}ms / p90 ${q(.9)}ms / 최대 ${labs[labs.length - 1]}ms`)
    for (const th of [600, 1000, 1800]) {
      const n = labs.filter(x => x < th).length
      _logInfo('collect-psi', `  < ${th}ms 통과: ${n}/${labs.length} (${(n / labs.length * 100).toFixed(1)}%)`)
    }
  }
}

// 직접 실행 시에만 수집 — import(테스트 등) 시 자동 실행 방지 (aggregate-readability.mjs 와 동일 가드)
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main().catch(e => { console.error('[collect-psi] FATAL:', e); process.exit(1) })
}

export { fetchPsi, loadKey }
