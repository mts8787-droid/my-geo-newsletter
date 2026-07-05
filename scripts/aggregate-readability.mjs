#!/usr/bin/env node
// 리더빌리티(GEO 어딧) 집계 스크립트 — 재실행 가능
// 입력: my-geo-audit/data/run_results/*.json (국가별 1회 어딧 전체, per-URL page_type + score breakdown)
// 출력: data/readability/<snapshot-date>.json (스냅샷) + data/readability/index.json (스냅샷 목록)
//
// 89M raw 를 인라인 불가 → 국가/카테고리/페이지타입/체크별 집계만 추출 (수 KB).
// 정기 재어딧 시 본 스크립트 재실행 → 날짜별 스냅샷 누적 (시계열 MoM 대비용).
//
// 사용: node scripts/aggregate-readability.mjs [--src <run_results 경로>] [--date <YYYY-MM-DD>]

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, rmSync, statSync } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'
import { PROD_IDS } from '../src/categoryMap.js'
import { CC_NAME } from './readability-cc.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..')

function parseArgs() {
  const a = process.argv.slice(2)
  const out = {}
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '--src') out.src = a[++i]
    else if (a[i] === '--date') out.date = a[++i]
    else if (a[i] === '--report') out.report = a[++i]
  }
  return out
}

const DEFAULT_SRC = '/Users/dubaba/my-geo-project/my-geo-audit/data/run_results'
const OUT_DIR = join(REPO_ROOT, 'data', 'readability')
// 해석 리포트(감점 사유 종합) 원본 — 집계 시 OUT_DIR 로 사본 복사 (대시보드 "해석 리포트" 탭이 서빙).
// 배포본은 외부 audit 경로가 없으니 커밋되는 OUT_DIR 사본이 필요. --report 또는 env 로 재정의.
const DEFAULT_REPORT_SRC = process.env.AUDIT_REPORT_PATH ||
  '/Users/dubaba/my-geo-project/my-geo-audit/reports/audit_report.txt'

// 페이지타입별 최대 표본 수 — US(5788) 같은 대형 크롤이 집계를 압도하는 것 방지.
// 100 을 제품군(11종) 에 균등 분배 (제품군당 floor(100/11)=9) + 잔여 용량은 초과분/미분류로 채움.
const SAMPLE_PER_PT = 100

// URL → 제품군(prodId) 추론. lg.com 카테고리 슬러그 키워드 매칭 (우선순위 순서 — 첫 매칭 채택).
// 매칭 안 되면 null = 제품군 없는 페이지 (newsroom/press/about/promotion 등).
// tv 를 먼저 검사 — 복합 슬러그(tv-audio-video-accessories, tv-home-theater-accessories) 의 선두 토큰 우선.
const PROD_GROUP_URL_RULES = [
  [/(?:^|[/-])(?:tvs?|projectors?|home-video|home-theater|webos|oled-tv|qned|nanocell)(?:[/-]|$)/, 'tv'],
  [/(?:monitors?|laptops?|tablets?|gram|computer|copilot|\bpc\b)/, 'monitor'],
  [/(?:refrigerator|fridge|freezer|kimchi)/, 'fridge'],
  [/dishwasher/, 'dw'],
  [/styler/, 'styler'],
  [/(?:washer|dryer|laundry)/, 'washer'],
  [/vacuum/, 'vacuum'],
  [/(?:cooking|kitchen|cooktop|oven|microwave|burner|\brange\b|dishdrawer)/, 'cooking'],
  [/(?:air-care|air-purifier|dehumidifier|aircare|puricare)/, 'aircare'],
  [/(?:air-conditioner|residential-hvac|\bhvac\b|home-electrification|heat-pump)/, 'rac'],
  [/(?:soundbar|sound-bar|speaker|headphone|earbud|home-audio|subwoofer|sound-suite|xboom|\baudio\b)/, 'audio'],
]

function inferProdGroup(url) {
  const u = String(url || '').toLowerCase()
  for (const [re, id] of PROD_GROUP_URL_RULES) {
    if (re.test(u)) return id
  }
  return null
}

function byUrl(a, b) { return a.url < b.url ? -1 : a.url > b.url ? 1 : 0 }

// 단일 페이지타입 list 표본 추출 — 제품군 균등 분배.
function samplePageTypeList(list) {
  const byGroup = {}   // prodId → items
  const ungrouped = []
  for (const it of list) {
    const g = inferProdGroup(it.url)
    if (g) (byGroup[g] = byGroup[g] || []).push(it)
    else ungrouped.push(it)
  }
  // 제품군 없는 페이지타입 (newsroom/press 등) → 단순 cap (URL 정렬 후 앞 N — 결정적)
  if (Object.keys(byGroup).length === 0) {
    return [...list].sort(byUrl).slice(0, SAMPLE_PER_PT)
  }
  // 11 제품군 균등 분배: 기본 quota = floor(100/11)=9
  const baseQuota = Math.floor(SAMPLE_PER_PT / PROD_IDS.length)
  const selected = []
  const leftovers = []
  for (const g of PROD_IDS) {
    const arr = (byGroup[g] || []).slice().sort(byUrl)
    selected.push(...arr.slice(0, baseQuota))
    leftovers.push(...arr.slice(baseQuota))
  }
  // 남은 용량(100 - selected) 은 초과분 + 미분류로 채움 (URL 정렬, 결정적) — 미달 제품군 quota 낭비 방지
  leftovers.push(...ungrouped)
  leftovers.sort(byUrl)
  const remaining = SAMPLE_PER_PT - selected.length
  if (remaining > 0) selected.push(...leftovers.slice(0, remaining))
  return selected
}

// 페이지타입별 표본 추출 — items: [{ result, url, rpt }] (excluded 제거 후, 단일 국가).
function sampleByPageType(items) {
  const byPt = {}
  for (const it of items) {
    const pid = it.rpt ? it.rpt.id : '(none)'
    ;(byPt[pid] = byPt[pid] || []).push(it)
  }
  const selected = []
  for (const list of Object.values(byPt)) {
    if (list.length <= SAMPLE_PER_PT) { selected.push(...list); continue }
    selected.push(...samplePageTypeList(list))
  }
  return selected
}

// 카테고리 표시 순서 + 라벨
const CATEGORIES = ['performance', 'accessibility', 'seo', 'ai_readiness']
const CATEGORY_LABEL = {
  performance: 'Performance',
  accessibility: 'Accessibility',
  seo: 'SEO',
  ai_readiness: 'AI Readiness',
}

// 점수 집계에서 완전 제외할 페이지타입 (분류불가/홈페이지) — 점수·카테고리·체크·페이지타입행 모두 제외
const EXCLUDED_PT = { unknown: 1, home: 1 }
// 페이지타입 통합 — about(회사)/content(콘텐츠매거진) → newsroom(뉴스룸) 으로 병합
const PT_MERGE = { about: 'newsroom', content: 'newsroom' }
// 통합/병합 결과 페이지타입의 표준 라벨 (병합 시 라벨 일관성)
const PT_LABEL = { newsroom: '뉴스룸/Press', lg_experience: 'LG Experience' }

// 페이지타입 정규화 — lg-experience 분리 + 병합 적용 + 제외 여부 판정. { id, label, excluded } 또는 null
function resolvePt(pt, url) {
  if (!pt || !pt.id) return null
  // content(콘텐츠/매거진) 으로 분류된 /lg-experience/ 또는 /experience/ (US 경로) URL 은 별도 lg_experience 타입으로 분리
  if (pt.id === 'content' && url && /\/(?:lg-)?experience(\/|\?|$)/i.test(url)) {
    return { id: 'lg_experience', label: PT_LABEL.lg_experience, excluded: false }
  }
  const id = PT_MERGE[pt.id] || pt.id
  if (EXCLUDED_PT[id]) return { id, label: pt.label || id, excluded: true }
  return { id, label: PT_LABEL[id] || pt.label || id, excluded: false }
}

// 국가코드 → 표시명 (CSV 다운로드 국가 컬럼용) — 공유 single source (render 와 동일).

// CSV 셀 이스케이프 (쉼표/따옴표/개행 포함 시 따옴표 감싸기)
function csvCell(v) {
  const s = v == null ? '' : String(v)
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s
}

// 파일명에서 국가코드 + 날짜 + runId 추출: <cc>_<YYYY-MM-DD>_run_<id>.json
function parseFileName(name) {
  const m = name.match(/^([a-z]{2})_(\d{4}-\d{2}-\d{2})_run_([0-9a-f]+)\.json$/i)
  if (!m) return null
  return { cc: m[1].toLowerCase(), date: m[2], runId: m[3] }
}

// 빈 누적기
function newAcc() {
  return {
    urlCount: 0,        // summary 항목 수
    scoredCount: 0,     // score 있는 URL 수
    scoreSum: 0,        // score.total 합 (scoredCount 분모)
    grades: {},         // grade → count
    catPointsSum: { performance: 0, accessibility: 0, seo: 0, ai_readiness: 0 },
    catPointsCnt: { performance: 0, accessibility: 0, seo: 0, ai_readiness: 0 },
    checks: {},         // checkId → { label, cat, pass, applicable }
    pageTypes: {},      // ptId → { label, count, scoreSum, scoredCount, ...체크 bins }
    bots: {},           // botName → { blocked, total }
    tiers: {},          // csr tier → count
  }
}

// 체크/카테고리 누적용 빈 bins (scope-level 과 pageType-level 공용)
function newCheckBins() {
  return {
    catPointsSum: { performance: 0, accessibility: 0, seo: 0, ai_readiness: 0 },
    catPointsCnt: { performance: 0, accessibility: 0, seo: 0, ai_readiness: 0 },
    checks: {},
  }
}

// score.breakdown 을 target(.catPointsSum/.catPointsCnt/.checks)에 반영 — scope/pageType 공용
function accumulateChecks(target, score) {
  const bd = score.breakdown || {}
  for (const cat of CATEGORIES) {
    const c = bd[cat]
    if (c && typeof c.points === 'number') {
      target.catPointsSum[cat] += c.points
      target.catPointsCnt[cat]++
    }
    const items = (c && c.items) || {}
    for (const [cid, it] of Object.entries(items)) {
      // na(true) 또는 pass===null → 미적용 (분모 제외)
      const applicable = !(it.na === true || it.pass === null || it.pass == null)
      if (!target.checks[cid]) target.checks[cid] = { label: it.label || cid, cat, pass: 0, applicable: 0 }
      if (applicable) {
        target.checks[cid].applicable++
        if (it.pass === true) target.checks[cid].pass++
      }
    }
  }
}

// 단일 result 를 누적기에 반영
function accumulate(acc, result, url) {
  // 분류불가(unknown)/홈페이지(home) 는 점수 집계에서 완전 제외 — 어떤 항목에도 기여 X
  const rpt = resolvePt(result.page_type, url)
  if (rpt && rpt.excluded) return
  acc.urlCount++
  const score = result.score
  const scored = score && typeof score.total === 'number'
  if (scored) {
    acc.scoredCount++
    acc.scoreSum += score.total
    const g = score.grade || 'Unknown'
    acc.grades[g] = (acc.grades[g] || 0) + 1
    accumulateChecks(acc, score)
  }
  // 페이지타입별 점수 + 체크/카테고리 (페이지타입 분해 통과율용) — 병합 id/라벨 사용
  if (rpt) {
    if (!acc.pageTypes[rpt.id]) acc.pageTypes[rpt.id] = { label: rpt.label, count: 0, scoreSum: 0, scoredCount: 0, ...newCheckBins() }
    const slot = acc.pageTypes[rpt.id]
    slot.count++
    if (scored) {
      slot.scoreSum += score.total
      slot.scoredCount++
      accumulateChecks(slot, score)
    }
  }
  // AI 봇 차단 (robots.txt)
  const rb = result.robots_txt
  if (rb && rb.bots) {
    for (const [bot, info] of Object.entries(rb.bots)) {
      if (!acc.bots[bot]) acc.bots[bot] = { blocked: 0, total: 0 }
      acc.bots[bot].total++
      if (info && info.blocked === true) acc.bots[bot].blocked++
    }
  }
  // CSR/SSR tier
  const cr = result.csr_ratio
  if (cr && cr.tier) acc.tiers[cr.tier] = (acc.tiers[cr.tier] || 0) + 1
}

// bins(.catPointsSum/.catPointsCnt) → 카테고리 평균 points (scope/pageType 공용)
function finalizeCategories(bin) {
  const out = {}
  for (const cat of CATEGORIES) {
    out[cat] = (bin.catPointsCnt && bin.catPointsCnt[cat]) ? +(bin.catPointsSum[cat] / bin.catPointsCnt[cat]).toFixed(1) : null
  }
  return out
}

// 누적기 → 출력 형태 (rate/avg 계산은 UI 에서 — 여기선 합/카운트 보존 + 편의 avg)
function finalizeAcc(acc) {
  const categories = finalizeCategories(acc)
  const pageTypes = {}
  for (const [id, v] of Object.entries(acc.pageTypes)) {
    pageTypes[id] = {
      label: v.label,
      count: v.count,
      avgScore: v.scoredCount ? +(v.scoreSum / v.scoredCount).toFixed(1) : null,
      categories: finalizeCategories(v),
      checks: v.checks || {},
    }
  }
  return {
    urlCount: acc.urlCount,
    scoredCount: acc.scoredCount,
    avgScore: acc.scoredCount ? +(acc.scoreSum / acc.scoredCount).toFixed(1) : null,
    grades: acc.grades,
    categories,
    checks: acc.checks,
    pageTypes,
    bots: acc.bots,
    tiers: acc.tiers,
  }
}

// per-URL 실패(FAIL) 항목 추출 — 개선 리포트(국가×페이지타입×항목 조합 필터)용.
// applicable 한 pass===false 만 수집. checkMeta(id→{label,cat}) 를 부수적으로 채움 (필터 드롭다운 메타).
export function collectFails(score, checkMeta) {
  const out = []
  const bd = score.breakdown || {}
  for (const cat of CATEGORIES) {
    const items = (bd[cat] && bd[cat].items) || {}
    for (const [id, it] of Object.entries(items)) {
      // applicable 한 FAIL 만: pass===false 자체가 na/null 을 이미 배제 → na!==true 만 추가 확인.
      if (it && it.pass === false && it.na !== true) {
        if (!checkMeta[id]) checkMeta[id] = { label: it.label || id, cat }
        out.push({ id, hint: it.hint || '' })
      }
    }
  }
  return out
}

// fetch 실패(비-200) 페이지 판정 — ai_status_200 이 FAIL 이면 전 체크가 'HTML 파싱 실패'로
// cascade-FAIL 하므로 개선 대상이 아님(gen_audit_report.py fetch_state 와 동일 취지). 개선 목록에서 제외.
export function isFetchFailed(score) {
  const it = ((score.breakdown || {}).ai_readiness || {}).items || {}
  const s = it.ai_status_200
  return !!(s && s.pass === false)
}

function main() {
  const args = parseArgs()
  const SRC = args.src || DEFAULT_SRC
  if (!existsSync(SRC)) {
    console.error(`[aggregate-readability] FATAL: 소스 경로 없음 — ${SRC}`)
    console.error('  --src <경로> 로 run_results 디렉토리를 지정하세요.')
    process.exit(1)
  }
  const files = readdirSync(SRC).filter(f => f.endsWith('.json'))
  if (!files.length) {
    console.error(`[aggregate-readability] FATAL: ${SRC} 에 .json 파일 없음`)
    process.exit(1)
  }

  const countries = {}
  const overall = newAcc()
  const fileDates = []
  const urlRows = []  // CSV 다운로드용 per-URL 행: { url, country, pt, score }
  // 개선 리포트(조합 필터)용 — 페이지별 FAIL 행 + 필터 메타 (전수 기준, 샘플링 전)
  const failRows = []
  const checkMeta = {}
  const ptLabelMap = {}

  // 국가별 최신 run 만 선택 — run_results 에 같은 국가의 여러 날짜 run 이 공존하면
  // (예: br_2026-06-13 + br_2026-06-14) 최신 날짜 하나만 집계. 과거 run 이
  // overall/CSV 에 이중 계상되던 버그 방지 (countries[cc] 는 덮어쓰기라 최신만 남는데
  // overall/urlRows 는 모든 파일을 누적했었음 → 다중 날짜 국가만 inflate).
  const latestByCc = {}
  for (const fname of files) {
    const meta = parseFileName(fname)
    if (!meta) {
      console.warn(`[aggregate-readability] WARN: 파일명 패턴 불일치, skip — ${fname}`)
      continue
    }
    const prev = latestByCc[meta.cc]
    if (!prev || meta.date >= prev.meta.date) {
      if (prev) console.log(`[aggregate-readability] ${meta.cc}: 과거 run 제외 (${prev.meta.date}/${prev.meta.runId}) → 최신 채택 (${meta.date}/${meta.runId})`)
      latestByCc[meta.cc] = { fname, meta }
    } else {
      console.log(`[aggregate-readability] ${meta.cc}: 과거 run 제외 (${meta.date}/${meta.runId}) — 최신 유지 (${prev.meta.date}/${prev.meta.runId})`)
    }
  }

  for (const { fname, meta } of Object.values(latestByCc)) {
    let data
    try {
      data = JSON.parse(readFileSync(join(SRC, fname), 'utf8'))
    } catch (e) {
      console.warn(`[aggregate-readability] WARN: JSON 파싱 실패, skip — ${fname}: ${e.message}`)
      continue
    }
    const acc = newAcc()
    const summary = Array.isArray(data.summary) ? data.summary : []
    // 표본 추출 전 — excluded(분류불가/홈페이지) 제거 + 페이지타입 해석
    const items = []
    for (const s of summary) {
      if (!s || !s.result) continue
      const url = s.url || s.result.url
      const rpt = resolvePt(s.result.page_type, url)
      if (rpt && rpt.excluded) continue
      items.push({ result: s.result, url, rpt })
    }
    // 개선 리포트(조합 필터)용 — 전수 페이지의 실패 항목 수집 (샘플링 전, 최대 커버리지).
    // per-row try/catch (data.md §6.3) — 손상된 breakdown 한 건이 전체 집계를 멈추지 않게.
    let failSkip = 0, fetchFailSkip = 0
    for (const it of items) {
      try {
        const sc = it.result.score
        if (!sc || typeof sc.total !== 'number') { failSkip++; continue }
        if (isFetchFailed(sc)) { fetchFailSkip++; continue }  // 비-200 페이지는 개선 대상 아님
        const fails = collectFails(sc, checkMeta)
        if (!fails.length) continue
        const ptId = it.rpt ? it.rpt.id : '(none)'
        // 라벨 등록 — 페이지타입 미해석(rpt null) 행은 '미분류' 로 표기(UI 에 raw '(none)' 노출 방지).
        if (!ptLabelMap[ptId]) ptLabelMap[ptId] = it.rpt ? it.rpt.label : '미분류'
        failRows.push({ cc: meta.cc, pt: ptId, url: it.url || '', score: sc.total, fails })
      } catch (e) {
        failSkip++
        console.warn(`[aggregate-readability] WARN: ${meta.cc} FAIL 수집 skip — ${e.message}`, { url: it.url })
      }
    }
    if (failSkip || fetchFailSkip) {
      console.log(`[aggregate-readability] ${meta.cc}: FAIL 수집 skip ${failSkip} (미채점/손상) + fetch실패 제외 ${fetchFailSkip}`)
    }
    // 페이지타입별 max SAMPLE_PER_PT 표본 (제품군 균등 분배) — 집계 + CSV 모두 동일 표본 사용
    const selected = sampleByPageType(items)
    if (selected.length < items.length) {
      console.log(`[aggregate-readability] ${meta.cc}: 표본 추출 ${items.length} → ${selected.length} (페이지타입별 max ${SAMPLE_PER_PT}, 제품군 균등 분배)`)
    }
    for (const it of selected) {
      accumulate(acc, it.result, it.url)
      accumulate(overall, it.result, it.url)
      urlRows.push({
        url: it.url || '',
        country: CC_NAME[meta.cc] || meta.cc.toUpperCase(),
        pt: it.rpt ? it.rpt.label : '',
        score: (it.result.score && typeof it.result.score.total === 'number') ? it.result.score.total : '',
      })
    }
    fileDates.push(meta.date)
    countries[meta.cc] = {
      auditedAt: meta.date,
      runId: meta.runId,
      ...finalizeAcc(acc),
    }
    console.log(`[aggregate-readability] ${meta.cc} (${meta.date}): ${acc.scoredCount}/${acc.urlCount} URL, avg ${countries[meta.cc].avgScore}`)
  }

  // 스냅샷 날짜 = 인자 우선, 없으면 최빈 파일 날짜
  const snapshotDate = args.date || mostCommon(fileDates) || new Date().toISOString().slice(0, 10)

  const snapshot = {
    date: snapshotDate,
    generatedAt: new Date().toISOString(),
    source: basename(SRC),
    categoryLabels: CATEGORY_LABEL,
    countries,
    overall: finalizeAcc(overall),
  }

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })
  const outPath = join(OUT_DIR, `${snapshotDate}.json`)
  writeFileSync(outPath, JSON.stringify(snapshot, null, 2))

  // 인덱스 갱신 (스냅샷 목록 — 시계열 대비용)
  const indexPath = join(OUT_DIR, 'index.json')
  let index = { snapshots: [] }
  if (existsSync(indexPath)) {
    try { index = JSON.parse(readFileSync(indexPath, 'utf8')) } catch { index = { snapshots: [] } }
  }
  const entry = {
    date: snapshotDate,
    generatedAt: snapshot.generatedAt,
    countries: Object.keys(countries).sort(),
    overallAvg: snapshot.overall.avgScore,
    urlCount: snapshot.overall.urlCount,
  }
  index.snapshots = (index.snapshots || []).filter(s => s.date !== snapshotDate)
  index.snapshots.push(entry)
  index.snapshots.sort((a, b) => (a.date < b.date ? -1 : 1))
  writeFileSync(indexPath, JSON.stringify(index, null, 2))

  // 검수 URL 목록 CSV (url, country, page_type, score) — 어드민 다운로드용
  const csvPath = join(OUT_DIR, `urls-${snapshotDate}.csv`)
  const csvLines = ['url,country,page_type,score']
  for (const row of urlRows) {
    csvLines.push([csvCell(row.url), csvCell(row.country), csvCell(row.pt), csvCell(row.score)].join(','))
  }
  // UTF-8 BOM 선두 — Excel(특히 한국어 로캘)이 CP949 로 오인해 한글 깨지는 것 방지
  writeFileSync(csvPath, '﻿' + csvLines.join('\n') + '\n')

  // 개선 리포트(조합 필터 — 국가×페이지타입×항목) 데이터 — 페이지별 FAIL 만.
  // hint 문자열 인터닝(중복 제거) — 동일 사유가 수천 건 반복 → 파일/전송 크기 대폭 축소.
  const hintIndex = new Map()
  const hints = []
  const internHint = (h) => {
    let i = hintIndex.get(h)
    if (i === undefined) { i = hints.length; hints.push(h); hintIndex.set(h, i) }
    return i
  }
  const failsRowsOut = failRows.map(r => ({
    cc: r.cc, pt: r.pt, url: r.url, score: r.score,
    f: r.fails.map(x => [x.id, internHint(x.hint)]),  // [checkId, hintIndex]
  }))
  const failsPath = join(OUT_DIR, `fails-${snapshotDate}.json`)
  const failsDoc = {
    date: snapshotDate,
    generatedAt: snapshot.generatedAt,
    countries: Object.keys(countries).sort(),
    ccName: Object.fromEntries(Object.keys(countries).map(cc => [cc, CC_NAME[cc] || cc.toUpperCase()])),
    pageTypes: ptLabelMap,
    checks: checkMeta,
    hints,        // 인터닝된 hint 사전 (f[][1] 가 인덱스)
    rows: failsRowsOut,
  }
  const failsJson = JSON.stringify(failsDoc)
  writeFileSync(failsPath, failsJson)
  // fails-*.json 은 최신 날짜 1개만 유지 (개선 대상 현재값만 의미 — 시계열 가치 없음, ~3MB 라 git 비대 방지).
  // 주의: snapshotDate 가 아니라 존재하는 fails 파일 중 '최신 날짜' 를 유지 → 과거 --date 로 backfill 해도
  // 이미 있는 더 최신 fails 를 지우지 않음(latestFailsFile 이 최신 서빙 유지).
  const failsFiles = readdirSync(OUT_DIR).filter(f => /^fails-\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort()
  const keepFails = failsFiles[failsFiles.length - 1]  // 사전순 마지막 = 최신 날짜
  for (const fn of failsFiles) {
    if (fn !== keepFails) {
      rmSync(join(OUT_DIR, fn))
      console.log(`[aggregate-readability] 과거 fails 제거: ${fn} (유지: ${keepFails})`)
    }
  }

  const kb = (JSON.stringify(snapshot).length / 1024).toFixed(1)
  const fkb = (failsJson.length / 1024).toFixed(1)
  console.log(`[aggregate-readability] ✓ 스냅샷 저장: ${outPath} (${kb} KB, ${Object.keys(countries).length}개국)`)
  console.log(`[aggregate-readability] ✓ 개선 항목(FAIL): ${failsPath} (${fkb} KB, ${failRows.length} pages)`)
  console.log(`[aggregate-readability] ✓ 인덱스: ${indexPath} (${index.snapshots.length}개 스냅샷)`)
  console.log(`[aggregate-readability] ✓ URL CSV: ${csvPath} (${urlRows.length}개 URL)`)

  // 해석 리포트 사본 갱신 — 원본 있으면 OUT_DIR 로 복사 (없으면 warn, 집계는 성공 유지)
  const reportSrc = args.report || DEFAULT_REPORT_SRC
  const reportDst = join(OUT_DIR, 'audit_report.txt')
  if (existsSync(reportSrc)) {
    copyFileSync(reportSrc, reportDst)
    const rkb = (statSync(reportDst).size / 1024).toFixed(1)
    console.log(`[aggregate-readability] ✓ 해석 리포트 사본: ${reportDst} (${rkb} KB) ← ${reportSrc}`)
  } else {
    console.warn(`[aggregate-readability] WARN: 해석 리포트 원본 없음, 사본 유지 — ${reportSrc} (--report 또는 AUDIT_REPORT_PATH 로 지정)`)
  }
}

function mostCommon(arr) {
  if (!arr.length) return null
  const cnt = {}
  arr.forEach(x => { cnt[x] = (cnt[x] || 0) + 1 })
  return Object.entries(cnt).sort((a, b) => b[1] - a[1])[0][0]
}

// 직접 실행 시에만 집계 수행 — import(테스트 등) 시 자동 실행 방지.
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main()
