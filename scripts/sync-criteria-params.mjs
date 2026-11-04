#!/usr/bin/env node
// 검수 기준 '판정 파라미터 · 적용 대상' 동기화 — 상류 my-geo-audit/scoring_config.json 원문을
// src/shared/readabilityCriteriaParams.js 로 굽는다 (사용자 요청 2026-11-05 "검수기준 더 자세히").
//
// 왜 굽는가 — 검수 기준 페이지는 Render 에서 요청 시 렌더되는데 상류 저장소는 배포되지 않는다.
// 손으로 옮겨 적으면 상류 키워드·임계값이 바뀔 때 어긋나므로, 원문을 그대로 복사하는 생성 파일로 둔다.
// 상류 scoring_config 가 바뀌면: node scripts/sync-criteria-params.mjs
//
// 담는 것 (활성 항목만): rule type · params · applies_to_page_types · applies_when(rule/selector/na_hint) · note

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { _logWarn, _logInfo } from '../src/sheetParserUtils.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SRC = process.argv[2] || join(ROOT, '..', 'my-geo-audit', 'scoring_config.json')
const OUT = join(ROOT, 'src', 'shared', 'readabilityCriteriaParams.js')

export function extractParams(cfg) {
  const out = {}
  for (const [cat, v] of Object.entries(cfg || {})) {
    if (!v || !Array.isArray(v.criteria)) continue
    for (const c of v.criteria) {
      if (!c || !c.id || c.enabled === false) continue
      const w = c.applies_when || null
      out[c.id] = {
        cat,
        name: c.name || '',
        type: (c.rule && c.rule.type) || '',
        params: (c.rule && c.rule.params) || {},
        pageTypes: Array.isArray(c.applies_to_page_types) ? c.applies_to_page_types : null,
        when: w ? {
          type: (w.rule && w.rule.type) || (w.selector ? 'css_exists' : ''),
          params: (w.rule && w.rule.params) || (w.selector ? { selector: w.selector } : {}),
          naHint: w.na_hint || '',
        } : null,
        note: c.note || '',
      }
    }
  }
  return out
}

function main() {
  if (!existsSync(SRC)) {
    _logWarn('sync-criteria-params', `상류 scoring_config 없음 — ${SRC} (기존 파일 유지)`)
    process.exit(1)
  }
  const params = extractParams(JSON.parse(readFileSync(SRC, 'utf8')))
  const n = Object.keys(params).length
  if (!n) { _logWarn('sync-criteria-params', '활성 항목 0건 — 구조 변경 의심, 기존 파일 유지'); process.exit(1) }
  const body = `// ⚠ 생성 파일 — 직접 수정 금지. node scripts/sync-criteria-params.mjs 로 다시 만든다.
// 출처: my-geo-audit/scoring_config.json (활성 항목 ${n}개 · 원문 그대로)
export const CRITERIA_PARAMS = ${JSON.stringify(params, null, 2)}
`
  writeFileSync(OUT, body)
  _logInfo('sync-criteria-params', `✓ ${OUT} — 항목 ${n}개`)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main()
