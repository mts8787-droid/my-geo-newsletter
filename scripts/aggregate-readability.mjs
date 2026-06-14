#!/usr/bin/env node
// 리더빌리티(GEO 어딧) 집계 스크립트 — 재실행 가능
// 입력: my-geo-audit/data/run_results/*.json (국가별 1회 어딧 전체, per-URL page_type + score breakdown)
// 출력: data/readability/<snapshot-date>.json (스냅샷) + data/readability/index.json (스냅샷 목록)
//
// 89M raw 를 인라인 불가 → 국가/카테고리/페이지타입/체크별 집계만 추출 (수 KB).
// 정기 재어딧 시 본 스크립트 재실행 → 날짜별 스냅샷 누적 (시계열 MoM 대비용).
//
// 사용: node scripts/aggregate-readability.mjs [--src <run_results 경로>] [--date <YYYY-MM-DD>]

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..')

function parseArgs() {
  const a = process.argv.slice(2)
  const out = {}
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '--src') out.src = a[++i]
    else if (a[i] === '--date') out.date = a[++i]
  }
  return out
}

const DEFAULT_SRC = '/Users/dubaba/my-geo-project/my-geo-audit/data/run_results'
const OUT_DIR = join(REPO_ROOT, 'data', 'readability')

// 카테고리 표시 순서 + 라벨
const CATEGORIES = ['performance', 'accessibility', 'seo', 'ai_readiness']
const CATEGORY_LABEL = {
  performance: 'Performance',
  accessibility: 'Accessibility',
  seo: 'SEO',
  ai_readiness: 'AI Readiness',
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
    pageTypes: {},      // ptId → { label, count, scoreSum, scoredCount }
    bots: {},           // botName → { blocked, total }
    tiers: {},          // csr tier → count
  }
}

// 단일 result 를 누적기에 반영
function accumulate(acc, result) {
  acc.urlCount++
  const score = result.score
  if (score && typeof score.total === 'number') {
    acc.scoredCount++
    acc.scoreSum += score.total
    const g = score.grade || 'Unknown'
    acc.grades[g] = (acc.grades[g] || 0) + 1
    const bd = score.breakdown || {}
    for (const cat of CATEGORIES) {
      const c = bd[cat]
      if (c && typeof c.points === 'number') {
        acc.catPointsSum[cat] += c.points
        acc.catPointsCnt[cat]++
      }
      const items = (c && c.items) || {}
      for (const [cid, it] of Object.entries(items)) {
        // na(true) 또는 pass===null → 미적용 (분모 제외)
        const applicable = !(it.na === true || it.pass === null || it.pass == null)
        if (!acc.checks[cid]) acc.checks[cid] = { label: it.label || cid, cat, pass: 0, applicable: 0 }
        if (applicable) {
          acc.checks[cid].applicable++
          if (it.pass === true) acc.checks[cid].pass++
        }
      }
    }
  }
  // 페이지타입별 점수
  const pt = result.page_type
  if (pt && pt.id) {
    if (!acc.pageTypes[pt.id]) acc.pageTypes[pt.id] = { label: pt.label || pt.id, count: 0, scoreSum: 0, scoredCount: 0 }
    const slot = acc.pageTypes[pt.id]
    slot.count++
    if (score && typeof score.total === 'number') {
      slot.scoreSum += score.total
      slot.scoredCount++
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

// 누적기 → 출력 형태 (rate/avg 계산은 UI 에서 — 여기선 합/카운트 보존 + 편의 avg)
function finalizeAcc(acc) {
  const categories = {}
  for (const cat of CATEGORIES) {
    categories[cat] = acc.catPointsCnt[cat] ? +(acc.catPointsSum[cat] / acc.catPointsCnt[cat]).toFixed(1) : null
  }
  const pageTypes = {}
  for (const [id, v] of Object.entries(acc.pageTypes)) {
    pageTypes[id] = {
      label: v.label,
      count: v.count,
      avgScore: v.scoredCount ? +(v.scoreSum / v.scoredCount).toFixed(1) : null,
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

  for (const fname of files) {
    const meta = parseFileName(fname)
    if (!meta) {
      console.warn(`[aggregate-readability] WARN: 파일명 패턴 불일치, skip — ${fname}`)
      continue
    }
    let data
    try {
      data = JSON.parse(readFileSync(join(SRC, fname), 'utf8'))
    } catch (e) {
      console.warn(`[aggregate-readability] WARN: JSON 파싱 실패, skip — ${fname}: ${e.message}`)
      continue
    }
    const acc = newAcc()
    const summary = Array.isArray(data.summary) ? data.summary : []
    for (const s of summary) {
      if (!s || !s.result) continue
      accumulate(acc, s.result)
      accumulate(overall, s.result)
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

  const kb = (JSON.stringify(snapshot).length / 1024).toFixed(1)
  console.log(`[aggregate-readability] ✓ 스냅샷 저장: ${outPath} (${kb} KB, ${Object.keys(countries).length}개국)`)
  console.log(`[aggregate-readability] ✓ 인덱스: ${indexPath} (${index.snapshots.length}개 스냅샷)`)
}

function mostCommon(arr) {
  if (!arr.length) return null
  const cnt = {}
  arr.forEach(x => { cnt[x] = (cnt[x] || 0) + 1 })
  return Object.entries(cnt).sort((a, b) => b[1] - a[1])[0][0]
}

main()
