#!/usr/bin/env node
// Readability 일관성 감사 — 대시보드 · 뉴스레터 · 개선가이드가 같은 숫자와 표현을 쓰는지 점검.
//
//   node scripts/audit-readability-consistency.mjs
//
// 재집계·문구 수정 후 돌리면 어긋난 곳을 한 번에 찾는다.
// npm test 가 잡는 것(스냅샷↔뉴스레터 핵심 수치, 영역 설명 일치)보다 범위가 넓다 —
// 최고·최저 표현, 페이지타입 라벨, 금지 용어, 항목 수 표기까지 훑는다.

import fs from 'fs'
const R = c => (c && c.applicable) ? +(c.pass / c.applicable * 100).toFixed(1) : null
const idx = JSON.parse(fs.readFileSync('data/readability/index.json', 'utf8'))
const date = idx.snapshots[idx.snapshots.length - 1].date
const S = JSON.parse(fs.readFileSync(`data/readability/${date}.json`, 'utf8'))
const prevDate = idx.snapshots[idx.snapshots.length - 2].date
const P = JSON.parse(fs.readFileSync(`data/readability/${prevDate}.json`, 'utf8'))
const src = fs.readFileSync('src/emailTemplate.js', 'utf8')
const ko = src.slice(src.indexOf('const RD_TEXT ='), src.indexOf('const RD_TEXT_EN'))
const en = src.slice(src.indexOf('const RD_TEXT_EN'), src.indexOf('// Readability Highlight 섹션 본체'))
const dash = fs.readFileSync('scripts/render-readability.mjs', 'utf8')
// 대시보드는 **렌더 결과**로 검사한다 — 문구가 사전(readabilityI18n)으로 옮겨가도 따라감
const { renderReadabilityHTML } = await import('./render-readability.mjs')
const allSnaps = idx.snapshots.map(m => JSON.parse(fs.readFileSync(`data/readability/${m.date}.json`, 'utf8')))
const rd = lang => renderReadabilityHTML({ snapshot: S, index: idx, allSnapshots: allSnaps, adminMode: false, lang })
const dashKo = rd('ko'), dashEn = rd('en')

const fail = [], warn = []
const chk = (cond, msg) => { if (!cond) fail.push(msg) }
const chkW = (cond, msg) => { if (!cond) warn.push(msg) }

console.log(`대상 스냅샷 ${date} (직전 ${prevDate})\n`)

// ── 1. 뉴스레터가 인용한 핵심 수치
console.log('[1] 뉴스레터 핵심 수치')
const core = [
  ['총점', S.overall.avgScore],
  ['평가 페이지수', S.overall.urlCount.toLocaleString('en-US')],
]
Object.entries(S.overall.categories).forEach(([k, v]) => core.push([S.categoryLabels[k] || k, v]))
// ⚠ 경고로만 표면화 — 뉴스레터 본문 수치는 사람이 검수·유지 (사용자 지시 2026-08-31
//   "숫자 연동 자동으로 하지 마"). 이 감사는 검수용 diff 리포트 역할.
core.forEach(([lb, v]) => {
  const inKo = ko.includes(String(v)), inEn = en.includes(String(v))
  chkW(inKo, `KO 본문 수치 상이(검수 필요): ${lb} = ${v}`)
  chkW(inEn, `EN 본문 수치 상이(검수 필요): ${lb} = ${v}`)
  console.log(`  ${String(lb).padEnd(16)} ${String(v).padStart(8)}  KO ${inKo ? '✓' : '✗'}  EN ${inEn ? '✓' : '✗'}`)
})

// ── 2. 사이트/타입 최고·최저
console.log('\n[2] 최고·최저 표현')
const cs = Object.entries(S.countries).map(([c, v]) => [c, v.avgScore]).sort((a, b) => b[1] - a[1])
const nonGlobal = cs.filter(([c]) => c !== 'global')
const ps = Object.values(S.overall.pageTypes).map(p => [p.label, p.avgScore]).sort((a, b) => b[1] - a[1])
const pairs = [
  ['사이트 최고', cs[0][0].toUpperCase(), cs[0][1]],
  ['국가 최고', nonGlobal[0][0].toUpperCase(), nonGlobal[0][1]],
  ['국가 최저', nonGlobal[nonGlobal.length - 1][0].toUpperCase(), nonGlobal[nonGlobal.length - 1][1]],
  ['타입 최고', ps[0][0], ps[0][1]],
  ['타입 최저', ps[ps.length - 1][0], ps[ps.length - 1][1]],
]
pairs.forEach(([lb, name, v]) => {
  const hit = ko.includes(String(v))
  chkW(hit, `KO 에 ${lb}(${name} ${v}) 수치 없음`)
  console.log(`  ${lb.padEnd(10)} ${String(name).padEnd(20)} ${String(v).padStart(6)}  ${hit ? '✓' : '⚠'}`)
})

// ── 3. 페이지타입 라벨 일관성 (스냅샷 ↔ 가이드)
console.log('\n[3] 페이지타입 라벨 일관성')
const guide = fs.readFileSync('src/shared/readabilityGuide.js', 'utf8')
const gLabels = {}
;[...guide.matchAll(/(\w+):\s*'([^']+)'/g)].forEach(m => { gLabels[m[1]] = m[2] })
Object.entries(S.overall.pageTypes).forEach(([id, p]) => {
  const g = gLabels[id]
  const ok = !g || g === p.label
  chk(ok, `라벨 불일치: ${id} — 스냅샷 "${p.label}" vs 가이드 "${g}"`)
  console.log(`  ${id.padEnd(22)} ${String(p.label).padEnd(24)} ${ok ? '✓' : '✗ 가이드=' + g}`)
})

// ── 4. 용어 일관성
console.log('\n[4] 용어 점검')
// 주석(용어 원칙 블록)은 금지어를 설명하려고 그 단어를 쓸 수밖에 없으므로 제외
const strip = t => t.replace(/^\s*\/\/[^\n]*$/gm, '')
const guideC = strip(guide), dashC = strip(dash)
const banned = [
  ['꼬리표', [guideC, dashC]], ['구조화 데이터', [guideC]], ['JavaScript', [guideC]],
  ['SSR 전환', [guideC]], ['CMS', [guideC]], ['첫 응답 HTML', [guideC]],
  ['프레스앤미디어', [guideC, ko]], ['뉴스룸/Press', [guideC, ko]], ['마이크로사이트/캠페인', [guideC, ko]],
]
banned.forEach(([term, files]) => {
  const hit = files.some(f => f.includes(term))
  chk(!hit, `금지 용어 잔존: "${term}"`)
  console.log(`  ${term.padEnd(18)} ${hit ? '✗ 남음' : '✓'}`)
})

// ── 5. 항목 수 표기
console.log('\n[5] 항목·영역 수')
const nChecks = Object.keys(S.overall.checks).length
const nCats = Object.keys(S.overall.categories).length
const nPts = Object.keys(S.overall.pageTypes).length
const nSites = Object.keys(S.countries).length
;[[`${nChecks}개 체크리스트`, ko], [`${nChecks} checklist items`, en],
  [`${nCats}개 영역`, ko], [`${nPts}개 페이지 유형`, ko], [`${nPts} page types`, en]]
  .forEach(([t, body]) => { const hit = body.includes(t); chk(hit, `표기 없음: ${t}`); console.log(`  ${t.padEnd(24)} ${hit ? '✓' : '✗'}`) })
console.log(`  실제: 체크 ${nChecks} · 영역 ${nCats} · 타입 ${nPts} · 사이트 ${nSites}`)

// ── 6. 대시보드 How to Read 숫자
console.log('\n[6] 대시보드 How to Read')
// ⚠ 렌더러 소스가 아니라 **렌더 결과**를 본다 — 문구가 사전(readabilityI18n)으로 이동해도 따라간다
;[['37개 체크리스트', dashKo], ['6개 영역', dashKo], ['10개 전략 국가', dashKo], ["‘26년 6월부터", dashKo],
  ['37 checklist items', dashEn], ['10 strategic countries', dashEn], ['Since June 2026', dashEn]]
  .forEach(([t, body]) => { const hit = body.includes(t); chk(hit, `대시보드 표기 없음: ${t}`); console.log(`  ${t.padEnd(20)} ${hit ? '✓' : '✗'}`) })

// ── 7. EN 한국어 잔존
console.log('\n[7] EN 본문 한글 잔존')
const enKor = en.replace(/\/\/[^\n]*/g, '').match(/[가-힣]+/g)
chk(!enKor, `EN 에 한글: ${enKor ? [...new Set(enKor)].slice(0, 8).join(' ') : ''}`)
console.log(`  ${enKor ? '✗ ' + [...new Set(enKor)].slice(0, 8).join(' ') : '✓ 없음'}`)

console.log('\n' + '─'.repeat(50))
console.log(`실패 ${fail.length} · 경고 ${warn.length}`)
fail.forEach(f => console.log('  ✗', f))
warn.forEach(w => console.log('  ⚠', w))
