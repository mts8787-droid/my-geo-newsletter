// ─── 통합 게시 엔진 (Unified Publish) ────────────────────────────────────────
// 시트 동기화 → 3개 대시보드(KPI 통합·Visibility·Citation) HTML 서버 렌더 → 일괄 게시.
// 브라우저 어드민의 개별 게시(각 SPA 가 HTML 을 만들어 POST)를 대체한다 (2026-08-30).
//
// 데이터 출처 3층 (조사 결과 — 어느 한 층만으로는 게시본을 재현할 수 없다):
//   [1] fresh 시트 파싱      — syncFromGoogleSheets (시트 파생 수치 전부)
//   [2] 기존 sync-data       — 사용자 편집 meta 텍스트(META_TEXT_KEYS)·토글
//   [3] 최신 스냅샷          — metaEn(EN 번역) + products[].en 같은 EN 번역 필드
//                              (sync-data 에는 저장되지 않는다)
//
// 서버 내부 실행이므로 self HTTP 호출 금지(auth/CSRF/rate-limit) — storage 직접 호출.

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import {
  DATA_DIR,
  readModeSyncData, writeModeSyncData,
  listModeSnapshots, readModeSnapshot,
} from './storage.js'
import { CHANNELS, publishChannel, writeReadabilityEmbed } from './publish-core.js'
import { logFor } from './logger.js'
import { syncFromGoogleSheets, extractSheetId } from '../src/googleSheetsUtils.js'
import { resolveDataForLang } from '../src/shared/utils.js'
import { mergeEnMeta } from '../src/shared/enMeta.js'
import { META_TEXT_KEYS } from '../src/shared/constants.js'
import { generateDashboardHTML, generateVisibilityHTML } from '../src/dashboard/dashboardTemplate.js'
import { generateCitationHTML } from '../src/citation/citationTemplate.js'

const log = logFor('republish')

// ─── 설정 파일 ───────────────────────────────────────────────────────────────
// { sheetId, includeReadability } — 수동 게시 시 sheetUrl 로 갱신, 자동(cron)은 저장값 사용.
const CONFIG_FILE = () => join(DATA_DIR, 'publish-config.json')
const META_FILE = () => join(DATA_DIR, 'unified-publish-meta.json')
// 최초 seed — 어드민 UI 의 기존 기본값과 동일 (src/shared/Sidebar.jsx gsUrl)
const DEFAULT_SHEET_ID = '1v4V7ZsHNFXXqbAWqvyVkgNIeXx188hSZ9l7FDsRYy2Y'

export function readPublishConfig() {
  try { return { sheetId: DEFAULT_SHEET_ID, includeReadability: true, ...JSON.parse(readFileSync(CONFIG_FILE(), 'utf-8')) } }
  catch { return { sheetId: DEFAULT_SHEET_ID, includeReadability: true } }
}
export function writePublishConfig(cfg) {
  writeFileSync(CONFIG_FILE(), JSON.stringify(cfg, null, 2))
}
export function readUnifiedPublishMeta() {
  try { return JSON.parse(readFileSync(META_FILE(), 'utf-8')) } catch { return null }
}

// ─── [2] sync-data 갱신 — 사용자 텍스트 보존 병합 ──────────────────────────────
// 시트 구조 필드(period/dateLine/reportNo 등)는 덮어쓰고, META_TEXT_KEYS(인사이트·공지 등
// 사용자 작성 본문)는 기존 값이 있으면 유지 — Sidebar.handleGsSync 의 textKeys 병합과 동일 의미.
function mergeMetaPreservingText(prevMeta, sheetMeta) {
  const merged = { ...(prevMeta || {}) }
  for (const [k, v] of Object.entries(sheetMeta || {})) {
    if (META_TEXT_KEYS.includes(k)) {
      if (!merged[k]) merged[k] = v
    } else {
      merged[k] = v
    }
  }
  return merged
}

// 브라우저 Sidebar.handleGsSync(dashboard) 가 저장하는 시트 파생 키 목록과 동일.
const DASH_SYNC_KEYS = [
  'total', 'productsPartial', 'weeklyMap', 'weeklyLabels', 'weeklyLabelsFull', 'weeklyAll',
  'citations', 'dotcom', 'productsCnty', 'citationsCnty', 'citationsByCnty', 'dotcomByCnty',
  'unlaunchedMap', 'prTopicList', 'monthlyVis',
  'weeklyPR', 'weeklyPRLabels', 'monthlyPR', 'monthlyPRLabels',
  'weeklyBrandPrompt', 'weeklyBrandPromptLabels', 'monthlyBrandPrompt', 'monthlyBrandPromptLabels',
  'dotcomTrend', 'dotcomTrendMonths', 'dotcomByLlm',
]
// CitationSidebar.handleGsSync 가 저장하는 키 목록과 동일.
const CIT_SYNC_KEYS = [
  'citations', 'citationsByCnty', 'citationsByPrd', 'dotcom', 'dotcomByCnty', 'citationsCnty',
  'citTouchPointsTrend', 'citTrendMonths', 'citDomainTrend', 'citDomainMonths',
  'dotcomTrend', 'dotcomTrendMonths', 'dotcomByLlm', 'citTouchPointsByLlm', 'citDomainByLlm',
  'citDomainByLlmTrend', 'citDerivedPeriod',
]

function pickParsed(parsed, keys) {
  const out = {}
  for (const k of keys) if (parsed[k] != null) out[k] = parsed[k]
  return out
}

// Sidebar.handleGsSync 의 total 폴백 — 시트에 total 이 없으면 productsPartial 평균으로 생성.
function totalFallback(parsed) {
  if (parsed.total || !parsed.productsPartial?.length) return parsed.total || null
  const pp = parsed.productsPartial
  const lgAvg = +(pp.reduce((s, p) => s + p.score, 0) / pp.length).toFixed(1)
  const compAvg = +(pp.reduce((s, p) => s + (p.vsComp || 0), 0) / pp.length).toFixed(1)
  return { score: lgAvg, vsComp: compAvg, rank: lgAvg >= compAvg ? 1 : 2 }
}

export function updateSyncDataFromParsed(parsed) {
  const now = Date.now()
  // dashboard (visibility SPA 도 이 파일을 쓴다 — mode=dashboard)
  const prevDash = readModeSyncData('dashboard') || {}
  const dashNext = {
    ...prevDash,
    ...pickParsed(parsed, DASH_SYNC_KEYS),
    meta: mergeMetaPreservingText(prevDash.meta, parsed.meta),
    savedAt: now,
  }
  const tf = totalFallback(parsed)
  if (tf) {
    dashNext.total = {
      ...tf,
      ...(parsed.buTotals ? { buTotals: parsed.buTotals } : {}),
      ...(parsed.buTotalsPrev ? { buTotalsPrev: parsed.buTotalsPrev } : {}),
      ...(parsed.countryTotals ? { countryTotals: parsed.countryTotals } : {}),
      ...(parsed.countryTotalsPrev ? { countryTotalsPrev: parsed.countryTotalsPrev } : {}),
    }
  }
  writeModeSyncData('dashboard', dashNext)

  // citation
  const prevCit = readModeSyncData('citation') || {}
  const citNext = {
    ...prevCit,
    ...pickParsed(parsed, CIT_SYNC_KEYS),
    meta: mergeMetaPreservingText(prevCit.meta, parsed.meta),
    savedAt: now,
  }
  writeModeSyncData('citation', citNext)
  return { dash: dashNext, cit: citNext }
}

// ─── [3] 최신 스냅샷의 EN 번역 필드 오버레이 ───────────────────────────────────
// metaEn 과 *En 필드(AI 번역 산출물)는 스냅샷에만 있다. fresh 데이터에 키 매칭으로 복사.
function latestSnapshotData(mode) {
  try {
    const [latest] = listModeSnapshots(mode)
    if (!latest) return null
    return readModeSnapshot(mode, latest.ts)?.data || null
  } catch (e) {
    log.warn({ mode, err: e.message }, 'snapshot read failed')
    return null
  }
}

function overlayEnByKey(freshArr, snapArr, keyOf, enFields) {
  if (!Array.isArray(freshArr) || !Array.isArray(snapArr) || !snapArr.length) return freshArr
  const byKey = new Map(snapArr.map(x => [keyOf(x), x]))
  return freshArr.map(x => {
    const snap = byKey.get(keyOf(x))
    if (!snap) return x
    const out = { ...x }
    for (const f of enFields) if (out[f] == null && snap[f] != null) out[f] = snap[f]
    return out
  })
}

// ─── visibility SPA 파생 로직 이식 (src/visibility/App.jsx) ──────────────────
// ① meta.period 최신 월 재계산 — citDerivedPeriod / productsPartial[].date / monthlyVis[].date 스캔
const EN_MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export function recomputePeriod(d) {
  let bestMonth = 0
  const scan = s => {
    if (!s) return
    const km = String(s).match(/(\d{1,2})월/)
    if (km) { const n = parseInt(km[1]); if (n > bestMonth) bestMonth = n }
    const em = String(s).match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)
    if (em) {
      const ci = EN_MONTHS.findIndex(m => m && m.toLowerCase() === em[1].toLowerCase())
      if (ci > bestMonth) bestMonth = ci
    }
  }
  scan(d.citDerivedPeriod)
  ;(d.productsPartial || []).forEach(p => scan(p.date))
  ;(d.monthlyVis || []).forEach(r => scan(r.date))
  if (!bestMonth) return null
  return `${EN_MONTHS[bestMonth]} ${new Date().getFullYear()}`
}

// ② productsPartial + weeklyMap → products 파생 (weeklyScore/monthlyScore/compRatio/status)
export function deriveProducts(d) {
  if (!d.productsPartial?.length) return d.products || []
  return d.productsPartial.map(p => {
    const weekly = d.weeklyMap?.[p.id] || []
    const validW = weekly.filter(v => v != null && v > 0)
    const monthlyScore = p.monthlyScore || p.score
    const monthlyPrev = p.monthlyPrev || p.prev || 0
    const weeklyScore = p.weeklyScore || (validW.length > 0 ? validW[validW.length - 1] : monthlyScore)
    const weeklyPrev = p.weeklyPrev || (validW.length >= 5 ? validW[validW.length - 5] : (validW[0] || 0))
    const ratio = p.vsComp > 0 ? Math.round(monthlyScore / p.vsComp * 100) : 100
    const monthly = monthlyPrev > 0 && monthlyPrev !== monthlyScore ? [monthlyPrev, monthlyScore] : []
    return {
      ...p, weekly, monthly, weeklyScore, weeklyPrev, monthlyScore, monthlyPrev,
      compRatio: ratio, status: ratio >= 100 ? 'lead' : ratio >= 80 ? 'behind' : 'critical',
    }
  })
}

// ─── 렌더 입력 조립 ──────────────────────────────────────────────────────────
export function assembleDashboardData() {
  const d = readModeSyncData('dashboard') || {}
  if (!Object.keys(d).length) throw new Error('dashboard sync-data 가 없습니다. 먼저 시트 동기화가 필요합니다.')
  const snap = latestSnapshotData('dashboard')

  const period = recomputePeriod(d)
  const metaKo = { ...(d.meta || {}) }
  if (period) metaKo.period = period
  // 스냅샷에 EN 번역이 없으면(신규 환경 등) mergeEnMeta 가 텍스트를 undefined 로 덮으므로
  // KO meta 폴백 — 기존 통합 게시(publishCombinedDashboard)의 동작과 동일.
  const hasMetaEn = Object.keys(snap?.metaEn || {}).length > 0
  const metaEn = { ...(snap?.metaEn || {}) }
  if (period) metaEn.period = period

  let products = deriveProducts(d)
  let productsCnty = d.productsCnty || []
  let citations = d.citations || []
  let citationsCnty = d.citationsCnty || []
  if (snap) {
    products = overlayEnByKey(products, snap.products, x => x.id, ['en', 'compNameEn'])
    productsCnty = overlayEnByKey(productsCnty, snap.productsCnty, x => `${x.country}|${x.product}`, ['countryEn', 'productEn', 'compNameEn'])
    citations = overlayEnByKey(citations, snap.citations, x => x.category, ['categoryEn'])
    citationsCnty = overlayEnByKey(citationsCnty, snap.citationsCnty, x => x.cnty, ['cntyEn'])
  }

  const extra = {
    weeklyPR: d.weeklyPR || [],
    weeklyPRLabels: d.weeklyPRLabels || [],
    monthlyPR: d.monthlyPR || [],
    monthlyPRLabels: d.monthlyPRLabels || [],
    weeklyBrandPrompt: d.weeklyBrandPrompt || [],
    weeklyBrandPromptLabels: d.weeklyBrandPromptLabels || [],
    unlaunchedMap: d.unlaunchedMap || {},
    prTopicList: d.prTopicList || [],
    weeklyLabelsFull: d.weeklyLabelsFull || [],
  }
  return {
    metaKo, metaEn,
    total: d.total || {},
    products, productsCnty, citations, citationsCnty,
    dotcom: d.dotcom || {},
    weeklyLabels: d.weeklyLabels || null,
    weeklyAll: d.weeklyAll || {},
    citationsByCnty: d.citationsByCnty || {},
    dotcomByCnty: d.dotcomByCnty || {},
    monthlyVis: d.monthlyVis || [],
    extra,
    hasMetaEn,
  }
}

export function assembleCitationData() {
  const d = readModeSyncData('citation') || {}
  if (!Object.keys(d).length) throw new Error('citation sync-data 가 없습니다. 먼저 시트 동기화가 필요합니다.')
  const snap = latestSnapshotData('citation')

  // citation 어드민의 사용자 편집 텍스트는 스냅샷에만 남는다 — 단 스냅샷을 통째로
  // base 삼으면 안 된다: 운영에서 3월 옛 스냅샷의 낡은 토글·period 가 fresh 시트
  // 데이터를 덮어 범프차트가 사라지고 제목이 'Mar 2026' 으로 나왔다 (2026-09-02).
  // 스냅샷에서는 사용자 텍스트(META_TEXT_KEYS)와 metaEn 만 가져온다.
  const metaKo = { ...(d.meta || {}), ...pickUserText(snap?.metaKo) }
  const metaEn = snap?.metaEn || {}

  let citations = d.citations || []
  let citationsCnty = d.citationsCnty || []
  if (snap) {
    citations = overlayEnByKey(citations, snap.citations, x => x.category, ['categoryEn'])
    citationsCnty = overlayEnByKey(citationsCnty, snap.citationsCnty, x => x.cnty, ['cntyEn'])
  }
  const trendData = {
    citTouchPointsTrend: d.citTouchPointsTrend || null,
    citTrendMonths: d.citTrendMonths || [],
    citDomainTrend: d.citDomainTrend || null,
    citDomainMonths: d.citDomainMonths || [],
    dotcomTrend: d.dotcomTrend || null,
    dotcomTrendMonths: d.dotcomTrendMonths || [],
    dotcomByLlm: d.dotcomByLlm || null,
    citTouchPointsByLlm: d.citTouchPointsByLlm || null,
    citDomainByLlm: d.citDomainByLlm || null,
  }
  return {
    metaKo, metaEn, citations, citationsCnty,
    dotcom: d.dotcom || {},
    citationsByCnty: d.citationsByCnty || {},
    dotcomByCnty: d.dotcomByCnty || {},
    citationsByPrd: d.citationsByPrd || {},
    trendData,
  }
}

// 스냅샷 metaKo 의 사용자 텍스트 키만 뽑기 — 시트 meta 가 나중에 덮은 것을 되살린다.
function pickUserText(snapMeta) {
  const out = {}
  if (!snapMeta) return out
  for (const k of META_TEXT_KEYS) if (snapMeta[k]) out[k] = snapMeta[k]
  return out
}

// ─── 렌더 + 게시 ─────────────────────────────────────────────────────────────
function publishDashboardChannels({ includeReadability }) {
  const a = assembleDashboardData()
  const resolvedKo = resolveDataForLang(a.products, a.productsCnty, a.citations, a.citationsCnty, 'ko')
  const resolvedEn = resolveDataForLang(a.products, a.productsCnty, a.citations, a.citationsCnty, 'en')
  const metaEnMerged = a.hasMetaEn ? mergeEnMeta(a.metaKo, a.metaEn) : { ...a.metaKo }

  // ⚠ 메모리: 채널당 KO+EN 2~5MB 문자열이 생성된다 (512MB 인스턴스).
  //   각 채널을 블록 스코프에 가둬 게시(write) 직후 GC 대상이 되게 한다 — 4채널 동시 보유 금지.
  let combo, vis
  {
    // ① 통합 대시보드 (탭 5개 — Visibility 인라인 + Citation/Readability iframe)
    const opts = { monthlyVis: a.monthlyVis, includeReadability }
    const comboKo = generateDashboardHTML(a.metaKo, a.total, resolvedKo.products, resolvedKo.citations, a.dotcom, 'ko',
      resolvedKo.productsCnty, resolvedKo.citationsCnty, a.weeklyLabels, a.weeklyAll, a.citationsByCnty, a.dotcomByCnty, opts, a.extra)
    const comboEn = generateDashboardHTML({ ...metaEnMerged, title: metaEnMerged.title || 'GEO KPI Dashboard' }, a.total,
      resolvedEn.products, resolvedEn.citations, a.dotcom, 'en',
      resolvedEn.productsCnty, resolvedEn.citationsCnty, a.weeklyLabels, a.weeklyAll, a.citationsByCnty, a.dotcomByCnty, opts, a.extra)
    const comboTitle = `${a.metaKo.period || ''} ${a.metaKo.title || 'KPI Dashboard'}`.trim()
    combo = publishChannel(CHANNELS.dashboard, { htmlKo: comboKo, htmlEn: comboEn, title: comboTitle })
    // Readability 임베드는 publishChannel 이 마커 감지로 처리하지만, 마커 유무와 무관하게 항상 최신화
    if (includeReadability) writeReadabilityEmbed(CHANNELS.dashboard)
  }
  {
    // ② Visibility 독립본
    const visKo = generateVisibilityHTML(a.metaKo, a.total, resolvedKo.products, resolvedKo.citations, a.dotcom, 'ko',
      resolvedKo.productsCnty, resolvedKo.citationsCnty, a.weeklyLabels, a.weeklyAll, a.citationsByCnty, a.dotcomByCnty, a.monthlyVis, a.extra)
    const visEn = generateVisibilityHTML(metaEnMerged, a.total, resolvedEn.products, resolvedEn.citations, a.dotcom, 'en',
      resolvedEn.productsCnty, resolvedEn.citationsCnty, a.weeklyLabels, a.weeklyAll, a.citationsByCnty, a.dotcomByCnty, a.monthlyVis, a.extra)
    const visTitle = `${a.metaKo.period || ''} Visibility Dashboard`.trim()
    vis = publishChannel(CHANNELS.visibility, { htmlKo: visKo, htmlEn: visEn, title: visTitle })
  }

  return { dashboard: combo, visibility: vis }
}

function publishCitationChannel() {
  const c = assembleCitationData()
  const resolvedKo = resolveDataForLang([], [], c.citations, c.citationsCnty, 'ko')
  const resolvedEn = resolveDataForLang([], [], c.citations, c.citationsCnty, 'en')
  // CitationSidebar.handlePublish 재현 — EN 은 metaEn 원본 (mergeEnMeta 미사용이 기존 동작)
  const metaEn = Object.keys(c.metaEn).length ? c.metaEn : c.metaKo
  const htmlKo = generateCitationHTML(c.metaKo, null, [], resolvedKo.citations, c.dotcom, 'ko', [],
    resolvedKo.citationsCnty, c.trendData, c.citationsByCnty, c.dotcomByCnty, c.citationsByPrd)
  const htmlEn = generateCitationHTML(metaEn, null, [], resolvedEn.citations, c.dotcom, 'en', [],
    resolvedEn.citationsCnty, c.trendData, c.citationsByCnty, c.dotcomByCnty, c.citationsByPrd)
  const title = `${c.metaKo.period || ''} Citation Dashboard`.trim()
  return publishChannel(CHANNELS.citation, { htmlKo, htmlEn, title })
}

// ─── 메인 진입점 ─────────────────────────────────────────────────────────────
// trigger: 'manual'(어드민 버튼) | 'cron'(매일 00시 KST) | 'test'
// opts.sync=false 면 시트 fetch 생략 (테스트·수동 재게시용 — 저장된 sync-data 로만 렌더)
let _running = false  // 모듈 레벨 가드 — 수동(라우트)·cron·catch-up 이 겹치면 메모리 스파이크 2배 (512MB 인스턴스 OOM)
export async function runUnifiedPublish({ sheetUrl, trigger = 'manual', sync = true } = {}) {
  if (_running) throw new Error('통합 게시가 이미 실행 중입니다')
  _running = true
  try {
    return await _runUnifiedPublish({ sheetUrl, trigger, sync })
  } finally {
    _running = false
  }
}

async function _runUnifiedPublish({ sheetUrl, trigger, sync }) {
  const startedAt = Date.now()
  const cfg = readPublishConfig()
  if (sheetUrl) {
    const id = extractSheetId(sheetUrl) || (/^[a-zA-Z0-9-_]{20,}$/.test(sheetUrl) ? sheetUrl : null)
    if (!id) throw new Error('유효한 구글 시트 URL 이 아닙니다')
    if (id !== cfg.sheetId) { cfg.sheetId = id; writePublishConfig(cfg) }
  }

  const result = { ts: startedAt, trigger, sheetId: cfg.sheetId, ok: true, channels: {}, errors: [],
    // 배포 버전 스탬프 — 스케줄러가 "코드가 바뀌었는데 게시본이 옛 코드" 를 감지해 재게시 (셀프힐)
    codeVersion: process.env.RENDER_GIT_COMMIT || null }

  // [1] SYNC + [2] MERGE — 실패 시 저장된 sync-data 로 렌더는 계속 (표면화 후 진행)
  if (sync) {
    try {
      const parsed = await syncFromGoogleSheets(cfg.sheetId)
      updateSyncDataFromParsed(parsed)
      result.syncIssues = parsed._syncIssues || []
      log.info({ trigger, keys: Object.keys(parsed).length, issues: result.syncIssues.length }, 'sheet sync done')
    } catch (e) {
      result.errors.push({ step: 'sync', error: e.message })
      log.error({ trigger, err: e.message }, 'sheet sync failed — 저장된 sync-data 로 렌더 계속')
    }
  }

  // [4][5] RENDER + PUBLISH — 채널별 격리 (하나 실패해도 나머지 계속)
  try {
    Object.assign(result.channels, publishDashboardChannels({ includeReadability: cfg.includeReadability !== false }))
  } catch (e) {
    result.errors.push({ step: 'dashboard', error: e.message })
    log.error({ trigger, err: e.message, stack: e.stack?.split('\n')[1] }, 'dashboard/visibility publish failed')
  }
  try {
    result.channels.citation = publishCitationChannel()
  } catch (e) {
    result.errors.push({ step: 'citation', error: e.message })
    log.error({ trigger, err: e.message, stack: e.stack?.split('\n')[1] }, 'citation publish failed')
  }

  result.ok = result.errors.length === 0
  result.durationMs = Date.now() - startedAt

  // [6] RECORD
  try { writeFileSync(META_FILE(), JSON.stringify(result, null, 2)) } catch (e) {
    log.warn({ err: e.message }, 'unified-publish-meta write failed')
  }
  log.info({ trigger, ok: result.ok, channels: Object.keys(result.channels), errors: result.errors.length, durationMs: result.durationMs }, 'unified publish done')
  return result
}
