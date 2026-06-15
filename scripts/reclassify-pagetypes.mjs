#!/usr/bin/env node
// run_results json 의 page_type=unknown 행을 url_pattern 으로 재분류 (원본 미보존 변환 복구용).
//
// 배경: batch_audit → run_results 변환 시 meta_template/body_class 가 유실되어 page_type 이
//   전부 'unknown' (matched_by="batch_audit 결과 변환 — 원본 미보존") 으로 들어오는 경우가 있음.
//   점수(score)는 정상이므로, audit 저장소의 page_types.json url_pattern 규칙으로 page_type 만
//   복구. meta_template/body_class 는 복구 불가 → url_pattern 단독 매칭 (원본 audit 의
//   matched_by=url_pattern 폴백과 동일 방식).
//
// 사용: node scripts/reclassify-pagetypes.mjs <run.json> [--page-types <page_types.json>] [--dry]
//   기본 page_types.json: /Users/dubaba/my-geo-project/my-geo-audit/page_types.json
//
// 동작: id==='unknown' 행만 재분류. 매칭 실패 시 unknown 유지. 원본은 .bak_reclassify 로 백업.

import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'fs'

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const ptArgIdx = args.indexOf('--page-types')
const PT_PATH = ptArgIdx >= 0 ? args[ptArgIdx + 1] : '/Users/dubaba/my-geo-project/my-geo-audit/page_types.json'
const ptValue = ptArgIdx >= 0 ? args[ptArgIdx + 1] : null
const runPath = args.find(a => !a.startsWith('--') && a !== ptValue)

if (!runPath) {
  console.error('[reclassify] FATAL: run.json 경로 필요 — node scripts/reclassify-pagetypes.mjs <run.json>')
  process.exit(1)
}
if (!existsSync(runPath)) {
  console.error(`[reclassify] FATAL: run 파일 없음 — ${runPath}`)
  process.exit(1)
}
if (!existsSync(PT_PATH)) {
  console.error(`[reclassify] FATAL: page_types.json 없음 — ${PT_PATH}`)
  process.exit(1)
}

const cfg = JSON.parse(readFileSync(PT_PATH, 'utf8'))
// page_types 배열 순서 = 우선순위 (첫 매칭 타입 결정). url_pattern 있는 타입만 컴파일.
const compiled = (cfg.page_types || [])
  .filter(t => t.detection && Array.isArray(t.detection.url_pattern))
  .map(t => ({ id: t.id, label: t.label, res: t.detection.url_pattern.map(p => new RegExp(p, 'i')) }))

function classify(url) {
  for (const t of compiled) {
    for (const re of t.res) {
      if (re.test(url)) return t
    }
  }
  return null
}

const run = JSON.parse(readFileSync(runPath, 'utf8'))
const rows = run.summary
if (!Array.isArray(rows)) {
  console.error('[reclassify] FATAL: run.summary 배열 아님')
  process.exit(1)
}

let reclassified = 0, stillUnknown = 0, untouched = 0
const distBefore = {}, distAfter = {}
for (const r of rows) {
  const pt = r?.result?.page_type
  const url = r.url || r?.result?.url || ''
  const beforeId = pt?.id || '(none)'
  distBefore[beforeId] = (distBefore[beforeId] || 0) + 1
  if (pt && pt.id === 'unknown') {
    const m = classify(url)
    if (m) {
      pt.id = m.id
      pt.label = m.label
      pt.matched_by = 'url_pattern (reclassified)'
      reclassified++
    } else {
      stillUnknown++
    }
  } else {
    untouched++
  }
  const afterId = r?.result?.page_type?.id || '(none)'
  distAfter[afterId] = (distAfter[afterId] || 0) + 1
}

console.log(`[reclassify] 대상: ${runPath}`)
console.log(`[reclassify] 행 ${rows.length} — 재분류 ${reclassified} / unknown 유지 ${stillUnknown} / 기존 ${untouched}`)
console.log('[reclassify] before:', JSON.stringify(distBefore))
console.log('[reclassify] after :', JSON.stringify(distAfter))

if (dry) {
  console.log('[reclassify] --dry 모드 — 파일 미수정')
  process.exit(0)
}

const bak = `${runPath}.bak_reclassify`
if (!existsSync(bak)) {
  copyFileSync(runPath, bak)
  console.log(`[reclassify] 백업 생성 — ${bak}`)
} else {
  console.log(`[reclassify] 백업 이미 존재 — ${bak} (덮어쓰지 않음)`)
}
writeFileSync(runPath, JSON.stringify(run))
console.log('[reclassify] 완료 — page_type 복구 후 저장')
