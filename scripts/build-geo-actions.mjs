#!/usr/bin/env node
// GEO 답변분석 액션아이템 엑셀 → 대시보드 JSON 변환 (/admin/geo-actions · /p/GEO-Action-Items 데이터).
// 원본 규칙: JOY 저장소 dashboard/build_data.py — 파싱·묶음·선행 관계·'요약' 시트 대조를 그대로 이식.
//
// 사용법
//   npm run build:geo-actions                          # data/geo-actions/source/ 의 최신 '*액션아이템_v*.xlsx'
//   node scripts/build-geo-actions.mjs --xlsx <경로>    # 원본 지정
//   node scripts/build-geo-actions.mjs --no-strict     # '요약' 대조 불일치여도 저장 (기본: 불일치 시 저장 안 함, 종료코드 1)
//
// 산출물: data/geo-actions/geo_actions_v<N>.json  (N = 엑셀 파일명의 버전 번호, 라우트가 최신 N 을 자동 선택)
// 진척(세부과제 ID 기준)이 새 판에 이어지는지 확인하려고 직전 판 대비 사라진·새로 생긴 ID 를 보고한다.

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs'
import { join, dirname, basename, relative } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO = join(__dirname, '..')
export const GEO_DIR = join(REPO, 'data', 'geo-actions')
const SOURCE_DIR = join(GEO_DIR, 'source')

const COUNTRIES = ['DE', 'ES', 'UK', 'BR', 'MX', 'IN', 'VN', 'AU', 'CA', 'US']
const COUNTRY_NAMES = { DE: '독일', ES: '스페인', UK: '영국', BR: '브라질', MX: '멕시코', IN: '인도', VN: '베트남', AU: '호주', CA: '캐나다', US: '미국' }
const REGIONS = { DE: 'EU', ES: 'EU', UK: 'EU', BR: 'LATAM', MX: 'LATAM', IN: 'ASIA', VN: 'ASIA', AU: 'ASIA', CA: 'NA', US: 'NA' }
const PRODUCTS = ['공통', 'TV', '냉장고', '세탁기', '에어컨']
const AXES = [['①', '원천 근거·공개 기준'], ['②', 'lg.com 콘텐츠·스키마'], ['③', '외부 채널 근거 공급'], ['④', '제품·투자 환류'], ['⑤', '측정·환류']]
const AXIS_BY_SUFFIX = {
  '원천 근거·공개 기준': '①', 'lg.com 콘텐츠·스키마': '②', 'lg.com 적용': '②',
  '외부 채널 근거 공급': '③', '외부 채널': '③', '제품·투자 환류': '④', '측정·환류': '⑤',
}
const COMMON_NAMES = { P0: 'P0 공통 선행', P1: 'P1 서비스·AS', P2: 'P2 BP 확산' }
const TIMINGS = ['선행', '1차', '2차', '중장기', '상시']
const GUBUNS = ['QW(선행)', 'QW', '조건부 QW', '중장기', '상시']
const OWNER_GROUPS = ['사업본부', 'D2C 마케팅담당', 'D2C플랫폼개발', '고가혁', '글로벌Comm', '법무', '플사센', '법인']
const BIZ_SUBS = ['마케팅·콘텐츠', '상품기획', '품질·개발']
const CORP_ROLE_ORDER = ['현지화·게시', '리뷰·PR', '이커머스', '마케팅', '서비스·마케팅', '서비스']
// 외부 컨설팅사 명칭은 노출하지 않음 (작업 지시 5절) — 텍스트에서 발견되면 마스킹
const HIDE_TERMS = ['커니', 'Kearney', 'KEARNEY', 'kearney']
const COL = { // 세부과제 시트 머리글 → 키
  '세부과제 ID': 'id', 'Activity ID': 'aid', '제품': 'product', '열세 주제': 'topic',
  'Activity': 'activity', '단계': 'step', '세부과제': 'task', '대상 국가': 'countryRaw',
  '영역': 'area', '대상 채널·매체': 'channel', '주관': 'owner', '협업': 'collabRaw',
  '구분': 'gubun', '선행 조건': 'precond', '시점◇': 'timing', '산출물': 'output',
  '목표·기한·미달 시 후속◇': 'targetRaw', '비고': 'note', '변경': 'change',
  'v15 No': 'v15', '근거 (MD 장)': 'basis',
}
const REQUIRED = new Set(['세부과제 ID', 'Activity ID', '제품', '열세 주제', 'Activity', '단계', '세부과제', '대상 국가', '주관', '구분', '시점◇'])
const REQUIRED_SHEETS = ['세부과제', 'Activity', '확인 완료(가정)', '기준', '요약']

const isNum = v => typeof v === 'number' && Number.isFinite(v)
function s(v) {
  if (v == null) return ''
  let t = String(v).trim()
  for (const term of HIDE_TERMS) t = t.split(term).join('외부 진단')
  return t
}
const uniq = arr => [...new Set(arr)]
const counter = () => new Map()
const inc = (m, k, n = 1) => m.set(k, (m.get(k) || 0) + n)

/* ── 파싱 규칙 ── */
function parseAxis(name, aid) {
  const common = aid.startsWith('CM-P0') ? 'P0' : aid.startsWith('CM-P1') ? 'P1' : aid.startsWith('CM-P2') ? 'P2' : null
  let axis
  if (name.includes(' — ')) {
    const suffix = name.slice(name.lastIndexOf(' — ') + 3).trim()
    axis = AXIS_BY_SUFFIX[suffix]
    if (!axis) throw new Error(`실행 축 판별 불가: ${aid} ${name}`)
  } else {
    // 이름에 축이 없으면 ID 끝자리로 판별 (CM-P01 → ①, CM-P02 → ②)
    const m = aid.match(/^CM-P\d(\d)$/)
    const n = m ? +m[1] : 0
    axis = n >= 1 && n <= 5 ? '①②③④⑤'[n - 1] : '①'
  }
  return [axis, common]
}
function parseCountries(raw) {
  raw = raw.trim()
  if (COUNTRIES.includes(raw)) return ['country', [raw]]
  const found = COUNTRIES.filter(c => new RegExp(`(?<![A-Z])${c}(?![A-Z])`).test(raw))
  return ['hq', found.length ? found : [...COUNTRIES]]
}
const CORP_RE = /^(DE|ES|UK|BR|MX|IN|VN|AU|CA|US)법인\s*(?:\(([^)]*)\)|(.+))?$/
function parseOwner(owner) {
  const o = owner.trim()
  const m = o.match(CORP_RE)
  if (m) {
    const role = (m[2] || m[3] || '').trim() || '현지화·게시'
    return { group: '법인', sub: role, country: m[1], label: `법인 ${role === '현지화·게시' ? 'OBS(현지화·게시)' : role}` }
  }
  if (o.startsWith('고가혁')) return { group: '고가혁', sub: '', country: null, label: o }
  for (const g of ['D2C 마케팅담당', 'D2C플랫폼개발', '글로벌Comm', '법무', '플사센']) {
    if (o.startsWith(g)) return { group: g, sub: '', country: null, label: o }
  }
  if (o.includes('사업본부') || o.includes('품질') || o.includes('개발')) {
    const sub = o.includes('상품기획') ? '상품기획' : (o.includes('품질') || o.includes('개발')) ? '품질·개발' : '마케팅·콘텐츠'
    return { group: '사업본부', sub, country: null, label: o }
  }
  throw new Error(`주관 조직 그룹 판별 불가: ${o}`)
}
function parseTarget(raw) {
  if (!raw) return null
  const p = { goal: '', due: '', fallback: '' }
  for (let x of raw.split(' / ')) {
    x = x.trim()
    if (x.startsWith('목표◇:')) p.goal = x.slice('목표◇:'.length).trim()
    else if (x.startsWith('기한:')) p.due = x.slice('기한:'.length).trim()
    else if (x.startsWith('미달 시:')) p.fallback = x.slice('미달 시:'.length).trim()
    else if (p.fallback) p.fallback += ' / ' + x
    else p.goal += ' / ' + x
  }
  const m = p.goal.match(/\(\s*([+\-−]?[\d.]+%p)\s*→\s*([^)]+)\)/)
  p.current = m ? m[1] : ''
  p.target = m ? m[2].trim() : p.goal
  return p
}
const stepCode = st => { const m = st.match(/^(S\d+|P)/); return m ? m[1] : st }
const stepNum = st => { const m = st.match(/^S(\d+)/); return m ? +m[1] : null }

// 시트 → 2차원 배열 (A1 기준, 빈 행 유지 — '요약' 시트를 행·열 좌표로 읽음)
function sheetRows(XLSX, ws) {
  return XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, blankrows: true, raw: true })
}

/* ── 본 변환 ── */
export function buildGeoActions(XLSX, wb, { competitors, source, sourceMtime, generatedAt }) {
  for (const n of REQUIRED_SHEETS) if (!wb.SheetNames.includes(n)) throw new Error(`시트 '${n}' 이(가) 없음`)

  // Activity 시트
  const actRows = sheetRows(XLSX, wb.Sheets['Activity'])
  const ah = actRows[0].map(s)
  const activities = new Map()
  for (const r of actRows.slice(1)) {
    if (!r || !r[0]) continue
    const d = Object.fromEntries(ah.map((h, i) => [h, s(r[i])]))
    const aid = d['Activity ID']
    const [axis, common] = parseAxis(d['Activity'], aid)
    const purpose = d['목적']
    const m = purpose.match(/\(원인:\s*([^)]*(?:\([^)]*\)[^)]*)*)\)\s*$/)
    activities.set(aid, {
      aid, product: d['제품'], topic: d['열세 주제'], name: d['Activity'],
      axis, common, purpose: m ? purpose.slice(0, m.index).trim() : purpose, cause: m ? m[1].trim() : '',
      repOwner: d['대표 주관'], timingRange: d['시점 범위◇'], gap: d['Gap'],
      sheetCount: parseInt(d['세부과제 수'] || 0, 10) || 0,
    })
  }

  // 세부과제 시트 — 열 이름 꼬리표가 판마다 바뀜('변경 (v16~v18)') → 같은 이름, 없으면 앞부분이 같은 열
  const subRows = sheetRows(XLSX, wb.Sheets['세부과제'])
  const header = subRows[0].map(s)
  const idx = {}, missing = [], notes = []
  for (const [h, k] of Object.entries(COL)) {
    let i = header.indexOf(h)
    if (i < 0) i = header.findIndex(x => x.startsWith(h))
    if (i >= 0) idx[k] = i
    else if (REQUIRED.has(h)) missing.push(h)
    else notes.push(`세부과제 시트에 '${h}' 열이 없어 빈 값으로 둠`)
  }
  if (missing.length) throw new Error(`세부과제 시트 필수 열 누락: ${missing.join(', ')}`)
  const rows = []
  for (const r of subRows.slice(1)) {
    if (!r || !r[idx.id]) continue
    const d = {}
    for (const k of Object.values(COL)) d[k] = k in idx ? s(r[idx[k]]) : ''
    const act = activities.get(d.aid)
    if (!act) throw new Error(`Activity 시트에 없는 Activity ID: ${d.aid}`)
    d.axis = act.axis; d.common = act.common
    d.stepCode = stepCode(d.step)
    ;[d.scope, d.countries] = parseCountries(d.countryRaw)
    const own = parseOwner(d.owner)
    d.ownerGroup = own.group; d.ownerSub = own.sub; d.ownerCountry = own.country; d.ownerLabel = own.label
    d.collab = d.collabRaw.split('/').map(c => c.trim()).filter(Boolean)
    d.target = parseTarget(d.targetRaw)
    const expand = d.change.includes('국가 단위 전개')
    d.taskBase = expand ? d.task.replace(/^\s*\[[^\]]+\]\s*/, '') : d.task
    d.gkey = expand ? `${d.aid}|${d.taskBase}` : d.id
    d.tkey = `${d.product}|${d.topic}`
    delete d.collabRaw; delete d.activity; delete d.v15
    rows.push(d)
  }
  const rowById = new Map(rows.map(r => [r.id, r]))

  // 세부과제(국가 전개 전) 묶음
  const groups = new Map()
  for (const d of rows) {
    let g = groups.get(d.gkey)
    if (!g) {
      g = {
        gkey: d.gkey, gid: d.id, aid: d.aid, tkey: d.tkey, product: d.product, topic: d.topic, axis: d.axis, common: d.common,
        task: d.taskBase, step: d.step, stepCode: d.stepCode, gubun: d.gubun, timing: d.timing, precond: d.precond,
        area: d.area, output: d.output, note: d.note, rows: [], countries: [], owners: [], expanded: d.gkey !== d.id,
      }
      groups.set(d.gkey, g)
    }
    g.rows.push(d.id)
    if (d.scope === 'country') for (const c of d.countries) if (!g.countries.includes(c)) g.countries.push(c)
    if (!g.owners.includes(d.owner)) g.owners.push(d.owner)
  }
  const glist = [...groups.values()]
  for (const g of glist) {
    const first = rowById.get(g.rows[0])
    g.scope = g.countries.length ? 'country' : 'hq'
    if (g.scope === 'hq') g.countries = first.countries
    g.countryRaw = g.scope === 'hq' ? first.countryRaw : g.countries.join('·')
  }

  // 선행 관계 ('선행 조건' 문구 → 막고 있는 선행 과제)
  const isPrereq = g => { const n = stepNum(g.step); return g.gubun === 'QW(선행)' || (n != null && n >= 2 && n <= 5) }
  const byTopic = new Map()
  for (const g of glist) { if (!byTopic.has(g.tkey)) byTopic.set(g.tkey, []); byTopic.get(g.tkey).push(g) }
  const p0 = glist.filter(g => g.common === 'P0')
  const p1 = glist.filter(g => g.aid === 'CM-P11')
  const pick = (pool, ...words) => { const hit = pool.filter(g => words.every(w => g.task.includes(w))); return hit.length ? hit : pool }
  function blockersOf(g) {
    const pc = g.precond
    if (!pc) return []
    const same = byTopic.get(g.tkey).filter(x => x.gkey !== g.gkey)
    let res = []
    if (pc.includes('공통 P0')) {
      const pool = p0.filter(isPrereq)
      if (pc.includes('PIM')) res.push(...pick(pool, 'PIM'))
      if (pc.includes('승인 문구 대장')) {
        res.push(...pick(pool, '승인 문구 대장'))
        res.push(...same.filter(x => x.axis === '①' && isPrereq(x)))
      }
      if (!res.length) res.push(...pool)
    } else if (pc.includes('공통 P1') || pc.includes('공개 가능 서비스 정보')) {
      const pr = p1.filter(isPrereq), pool = pr.length ? pr : p1
      res.push(...(pc.includes('R2R') ? pick(pool, 'R2R') : pool))
    } else if (pc.includes('G6 패키지')) {
      res.push(...glist.filter(x => x.aid === 'CM-P23' && x.task.includes('표준화')))
      if (pc.includes('원천')) res.push(...glist.filter(x => x.axis === '①' && ['냉장고', '세탁기', '에어컨'].includes(x.product) && x.stepCode === 'S5'))
    } else if (pc.includes('같은 주제 ①')) {
      res.push(...same.filter(x => x.axis === '①' && isPrereq(x)))
    } else if (pc.includes('글로벌 마스터')) {
      res.push(...same.filter(x => x.stepCode === 'S7'))
    } else if (pc.includes('해당 페이지 게시')) {
      res.push(...same.filter(x => x.stepCode === 'S8' || x.stepCode === 'S9'))
    } else if (pc.includes('팩트시트')) {
      res.push(...same.filter(x => x.task.includes('팩트시트')))
    } else if (pc.includes('기능명')) {
      res.push(...glist.filter(x => x.product === g.product && x.task.includes('기능명') && x.gkey !== g.gkey))
    } else if (pc.includes('우위 요인')) {
      // 확인 완료(가정) 항목에 연결 — 별도 과제 행 없음
    } else if (pc.includes('플레이북')) {
      res.push(...glist.filter(x => x.task.includes('플레이북') && x.gkey !== g.gkey))
    } else if (pc.includes('개편')) {
      res.push(...glist.filter(x => x.task.includes('개편') && x.countries.includes('DE') && x.gkey !== g.gkey && (x.product === '냉장고' || x.product === '공통')))
    }
    if (!res.length) { // 기본: 같은 Activity → 같은 주제의 선행 과제
      const a = same.filter(x => x.aid === g.aid && isPrereq(x))
      res = a.length ? a : same.filter(isPrereq)
    }
    const out = []
    for (const x of res) if (x.gkey !== g.gkey && !out.includes(x.gkey)) out.push(x.gkey)
    return out
  }
  for (const g of glist) g.blockers = blockersOf(g)
  const blocks = counter(), blocksRows = counter()
  for (const g of glist) for (const b of g.blockers) { inc(blocks, b); inc(blocksRows, b, g.rows.length) }
  for (const g of glist) { g.blocks = blocks.get(g.gkey) || 0; g.blocksRows = blocksRows.get(g.gkey) || 0 }

  // 열세 주제
  const topics = new Map()
  for (const d of rows) {
    let t = topics.get(d.tkey)
    if (!t) { t = { tkey: d.tkey, product: d.product, topic: d.topic, aids: [], countries: new Set(), countryRows: counter() }; topics.set(d.tkey, t) }
    if (!t.aids.includes(d.aid)) t.aids.push(d.aid)
    d.countries.forEach(c => t.countries.add(c))
    if (d.scope === 'country') inc(t.countryRows, d.countries[0])
  }
  for (const t of topics.values()) {
    const acts = t.aids.map(a => activities.get(a))
    t.gap = (acts.find(a => a.gap) || {}).gap || ''
    const causes = []
    for (const a of acts) for (let c of (a.cause ? a.cause.split(/·(?![^()]*\))/) : [])) { c = c.trim(); if (c && !causes.includes(c)) causes.push(c) }
    t.causes = causes
    t.causeText = uniq(acts.filter(a => a.cause).map(a => a.cause)).join(' · ')
    t.countries = COUNTRIES.filter(c => t.countries.has(c))
    t.countryRows = Object.fromEntries(t.countryRows)
    t.common = acts[0].common
  }

  // 확인 완료(가정) · 기준
  const confirmed = []
  for (const r of sheetRows(XLSX, wb.Sheets['확인 완료(가정)']).slice(1)) {
    if (!r || !r[0] || s(r[0]) === '제품') continue
    confirmed.push({ product: s(r[0]), topic: s(r[1]), item: s(r[2]), next: s(r[3]), tkey: `${s(r[0])}|${s(r[1])}` })
  }
  const criteria = sheetRows(XLSX, wb.Sheets['기준']).slice(1).filter(r => r && r[0]).map(r => ({ item: s(r[0]), rule: s(r[1]) }))

  const summaryRows = sheetRows(XLSX, wb.Sheets['요약'])
  const checks = verify(summaryRows, rows, glist, activities)

  // BP 확산 분류
  for (const g of glist) {
    if (g.common !== 'P2') continue
    const n = g.note
    g.bpType = n.includes('채널 운영형') ? '채널 운영형' : (n.includes('국가 확산형') || n.includes('글로벌 확산')) ? '국가 확산형' : '제품 확산형'
    g.bpStatus = n.includes('성과 확인') ? '성과 확인' : n.includes('진행 중') ? '진행 중' : n.includes('후보') ? '후보' : '확산 계획'
  }

  const areaCount = counter(); rows.forEach(r => inc(areaCount, r.area))
  const steps = uniq(rows.map(r => r.step)).sort((a, b) => ((stepNum(a) ?? 99) - (stepNum(b) ?? 99)) || (a < b ? -1 : a > b ? 1 : 0))
  return {
    data: {
      meta: {
        title: 'GEO 답변분석 액션아이템 실행 대시보드', source, sourceMtime, generatedAt,
        summaryNote: s((summaryRows[1] || [])[0]),
      },
      dims: {
        countries: COUNTRIES, countryNames: COUNTRY_NAMES, regions: REGIONS, products: PRODUCTS,
        axes: AXES.map(([code, name]) => ({ code, name })), commonNames: COMMON_NAMES, timings: TIMINGS, gubuns: GUBUNS,
        ownerGroups: OWNER_GROUPS, bizSubs: BIZ_SUBS, corpRoles: CORP_ROLE_ORDER, steps,
        areas: [...areaCount.entries()].sort((a, b) => b[1] - a[1]).map(([a]) => a), // 동률은 처음 나온 순서 (Python Counter.most_common 과 동일)
      },
      activities: [...activities.values()],
      topics: [...topics.values()],
      rows, groups: glist, confirmed, criteria, competitors, checks,
    },
    notes,
  }
}

/* ── '요약' 시트와 대조 ── */
function verify(sheet, rows, groups, activities) {
  const out = []
  const chk = (name, expect, got) => out.push({ name, expect, got, ok: expect === got })
  const vals = sheet.map(r => Array.from({ length: 14 }, (_, i) => (r && r[i] !== undefined ? r[i] : null)))
  const acts = [...activities.values()]
  const byProd = counter(); rows.forEach(r => inc(byProd, r.product))
  const actProd = counter(); acts.forEach(a => inc(actProd, a.product))
  const timingProd = counter(); rows.forEach(r => inc(timingProd, r.product + '|' + r.timing))
  for (const v of vals) {
    if (PRODUCTS.includes(v[0]) && isNum(v[3]) && v[1] != null && v[1] !== '(소계)') {
      const p = v[0]
      chk(`제품 ${p} 국가 실행 단위`, Math.trunc(v[3]), byProd.get(p) || 0)
      chk(`제품 ${p} Activity`, Math.trunc(v[2]), actProd.get(p) || 0)
      TIMINGS.forEach((t, i) => chk(`제품 ${p} 시점 ${t}`, Math.trunc(v[4 + i] || 0), timingProd.get(p + '|' + t) || 0))
    }
    if (v[0] === '합계' && isNum(v[2]) && isNum(v[1]) && !out.some(c => c.name === '합계 Activity')) {
      chk('합계 열세 주제', Math.trunc(v[1]), new Set(rows.map(r => r.tkey)).size)
      chk('합계 Activity', Math.trunc(v[2]), activities.size)
      chk('합계 국가 실행 단위', Math.trunc(v[3]), rows.length)
    }
  }
  const axRows = counter(); rows.forEach(r => inc(axRows, r.axis))
  const axAct = counter(); acts.forEach(a => inc(axAct, a.axis))
  for (const v of vals) {
    if (typeof v[0] === 'string' && '①②③④⑤'.includes(v[0].slice(0, 1)) && isNum(v[1])) {
      const a = v[0].slice(0, 1)
      chk(`실행 축 ${v[0]} Activity`, Math.trunc(v[1]), axAct.get(a) || 0)
      chk(`실행 축 ${v[0]} 세부과제(행)`, Math.trunc(v[2]), axRows.get(a) || 0)
    }
  }
  const grp = counter(); rows.forEach(r => inc(grp, r.ownerGroup))
  for (const v of vals) if (v[1] === '(소계)' && OWNER_GROUPS.includes(v[0])) chk(`주관 ${v[0]} 소계(행)`, Math.trunc(v[2]), grp.get(v[0]) || 0)
  const role = counter(); rows.filter(r => r.ownerGroup === '법인').forEach(r => inc(role, r.ownerLabel))
  for (const v of vals) {
    if ((v[0] == null || v[0] === '') && typeof v[1] === 'string' && v[1].startsWith('법인 ') && isNum(v[2])) chk(`주관 ${v[1]}(행)`, Math.trunc(v[2]), role.get(v[1]) || 0)
  }
  const note = String((vals[1] || [])[0] ?? '')
  let m = note.match(/세부과제\s*([\d,]+)\s*개/)
  if (m) chk('세부과제(국가 전개 전)', +m[1].replace(/,/g, ''), groups.length)
  m = note.match(/Activity\s*([\d,]+)\s*개/)
  if (m) chk('요약 문구 Activity', +m[1].replace(/,/g, ''), activities.size)
  const pre = vals.find(v => v[0] === '합계' && isNum(v[9]))
  if (pre) chk('선행 과제(QW(선행))', Math.trunc(pre[9]), rows.filter(r => r.gubun === 'QW(선행)').length)
  return out
}

/* ── CLI ── */
const verOf = f => +((basename(f).match(/_v(\d+)\.(xlsx|json)$/) || [0, -1])[1])
export function findLatestXlsx(dir = SOURCE_DIR) {
  if (!existsSync(dir)) return null
  const files = readdirSync(dir).filter(f => /액션아이템_v\d+\.xlsx$/.test(f)).sort((a, b) => verOf(a) - verOf(b))
  return files.length ? join(dir, files[files.length - 1]) : null
}
const fmtLocal = d => { const p = n => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}` }

async function main() {
  const args = process.argv.slice(2)
  const ai = args.indexOf('--xlsx')
  const xlsx = ai >= 0 ? args[ai + 1] : findLatestXlsx()
  const strict = !args.includes('--no-strict')
  if (!xlsx || !existsSync(xlsx)) { console.error(`[build-geo-actions] FATAL: 원본 엑셀 없음 — ${SOURCE_DIR} 에 '…액션아이템_vNN.xlsx' 를 넣거나 --xlsx 로 지정`); process.exit(1) }
  const ver = verOf(xlsx)
  if (ver < 0) { console.error(`[build-geo-actions] FATAL: 파일명에서 버전(_vNN)을 읽지 못함: ${basename(xlsx)}`); process.exit(1) }
  const XLSX = (await import('xlsx-js-style')).default
  const wb = XLSX.readFile(xlsx)
  const competitors = JSON.parse(readFileSync(join(GEO_DIR, 'competitors.json'), 'utf8'))
  const mtime = (wb.Props && wb.Props.ModifiedDate) ? new Date(wb.Props.ModifiedDate) : statSync(xlsx).mtime
  const { data, notes } = buildGeoActions(XLSX, wb, {
    competitors, source: relative(REPO, xlsx).split('\\').join('/'), sourceMtime: fmtLocal(mtime), generatedAt: fmtLocal(new Date()),
  })
  notes.forEach(n => console.log('  참고:', n))
  const bad = data.checks.filter(c => !c.ok)
  console.log(`원본: ${data.meta.source}`)
  console.log(`Activity ${data.activities.length} · 세부과제 ${data.groups.length} · 국가 실행 단위 ${data.rows.length}`)
  console.log(`'요약' 시트 대조 ${data.checks.length - bad.length}/${data.checks.length} 일치`)
  bad.forEach(c => console.log(`  ✗ ${c.name}: 요약 ${c.expect} / 변환 ${c.got}`))
  if (bad.length && strict) { console.error('[build-geo-actions] 불일치가 있어 저장하지 않음 — 엑셀을 확인하거나 --no-strict 로 강제 저장'); process.exit(1) }

  // 직전 판 대비 세부과제 ID 변화 — 진척은 ID 에 붙으므로 사라진 ID 의 진척은 새 판에서 보이지 않음
  const prev = readdirSync(GEO_DIR).filter(f => /^geo_actions_v\d+\.json$/.test(f) && verOf(f) < ver).sort((a, b) => verOf(a) - verOf(b)).pop()
  if (prev) {
    const old = new Set(JSON.parse(readFileSync(join(GEO_DIR, prev), 'utf8')).rows.map(r => r.id))
    const now = new Set(data.rows.map(r => r.id))
    const gone = [...old].filter(id => !now.has(id)), added = [...now].filter(id => !old.has(id))
    console.log(`직전 판(${prev}) 대비 세부과제 ID — 유지 ${now.size - added.length} · 신규 ${added.length} · 삭제 ${gone.length}`)
    if (gone.length) console.log(`  ⚠ 삭제된 ID (입력된 진척이 있으면 새 판에서 안 보임): ${gone.slice(0, 30).join(', ')}${gone.length > 30 ? ` 외 ${gone.length - 30}건` : ''}`)
  }
  const out = join(GEO_DIR, `geo_actions_v${ver}.json`)
  writeFileSync(out, JSON.stringify(data, null, 1))
  console.log(`저장: ${relative(REPO, out)}`)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main().catch(e => { console.error('[build-geo-actions] FATAL:', e.message); process.exit(1) })
