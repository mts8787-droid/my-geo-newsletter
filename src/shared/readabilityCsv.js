// 검수 URL CSV 언어 변환 — 집계기가 만든 CSV(한국어 page_type)를 영문으로 바꾼다.
// CSV 를 언어별로 두 벌 굽지 않고 요청 시 변환한다 (원본이 single source).
import { PT_LABEL, pick } from './readabilityGuide.js'

const HEADER = { ko: 'url,country,page_type,score', en: 'url,country,page_type,score' }

// 한국어 라벨 → 영문 라벨 (PT_LABEL 에서 역방향 생성 — 사전이 바뀌어도 자동 추종)
function koToEn() {
  const m = {}
  Object.values(PT_LABEL).forEach(v => { m[pick(v, 'ko')] = pick(v, 'en') })
  return m
}

// CSV 본문을 지정 언어로 변환. lang !== 'en' 이면 원본 그대로.
export function localizeUrlsCsv(csv, lang) {
  if (lang !== 'en') return csv
  const map = koToEn()
  const bom = csv.startsWith('﻿') ? '﻿' : ''
  const lines = (bom ? csv.slice(1) : csv).split('\n')
  const out = lines.map((line, i) => {
    if (i === 0) return HEADER.en
    if (!line.trim()) return line
    // page_type 은 뒤에서 두 번째 컬럼 — URL 에 콤마가 있어도 안전하도록 뒤에서 자른다
    const last = line.lastIndexOf(',')
    if (last < 0) return line
    const prev = line.lastIndexOf(',', last - 1)
    if (prev < 0) return line
    const pt = line.slice(prev + 1, last)
    const en = map[pt]
    return en ? line.slice(0, prev + 1) + en + line.slice(last) : line
  })
  return bom + out.join('\n')
}
