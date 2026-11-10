// GEO 액션아이템 엑셀 → JSON 변환기 — 커밋된 엑셀 원본으로 재변환하면 커밋된 JSON 과 같아야 한다 (회귀 방지).
import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'fs'
import { join, basename } from 'path'

const { buildGeoActions, findLatestXlsx, GEO_DIR } = await import('../scripts/build-geo-actions.mjs')
const XLSX = (await import('xlsx-js-style')).default
const competitors = JSON.parse(readFileSync(join(GEO_DIR, 'competitors.json'), 'utf8'))
const META = { competitors, source: 'test', sourceMtime: 'test', generatedAt: 'test' }

const xlsx = findLatestXlsx()
const ver = basename(xlsx).match(/_v(\d+)\.xlsx$/)[1]
const committed = JSON.parse(readFileSync(join(GEO_DIR, `geo_actions_v${ver}.json`), 'utf8'))
const { data } = buildGeoActions(XLSX, XLSX.readFile(xlsx), META)

describe('엑셀 → JSON 변환', () => {
  it('최신 엑셀 판에 대응하는 JSON 이 커밋되어 있음', () => {
    const jsons = readdirSync(GEO_DIR).filter(f => /^geo_actions_v\d+\.json$/.test(f))
    expect(jsons).toContain(`geo_actions_v${ver}.json`)
  })
  it.each(['dims', 'activities', 'topics', 'rows', 'groups', 'confirmed', 'criteria', 'competitors', 'checks'])('%s — 커밋된 JSON 과 동일', key => {
    expect(data[key]).toEqual(committed[key])
  })
  it("'요약' 시트 대조 모두 일치", () => {
    expect(data.checks.length).toBeGreaterThan(30)
    expect(data.checks.filter(c => !c.ok)).toEqual([])
  })
  it('외부 컨설팅사 명칭 미노출', () => {
    expect(JSON.stringify(data)).not.toMatch(/커니|kearney/i)
  })
})

describe('입력 오류는 조용히 넘기지 않음', () => {
  const wbFrom = sheets => {
    const wb = XLSX.utils.book_new()
    for (const [name, aoa] of Object.entries(sheets)) XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(aoa), name)
    return wb
  }
  const base = () => ({ '요약': [['t'], ['n']], 'Activity': [['Activity ID']], '세부과제': [['세부과제 ID']], '확인 완료(가정)': [['제품']], '기준': [['항목']] })
  it('필수 시트 없음 → 오류', () => {
    const sh = base(); delete sh['기준']
    expect(() => buildGeoActions(XLSX, wbFrom(sh), META)).toThrow("시트 '기준'")
  })
  it('세부과제 시트 필수 열 없음 → 오류', () => {
    expect(() => buildGeoActions(XLSX, wbFrom(base()), META)).toThrow('필수 열 누락')
  })
  it('판별할 수 없는 주관 조직 → 오류', () => {
    const sh = base()
    sh['Activity'] = [['Activity ID', '제품', '열세 주제', 'Activity', '목적', '대표 주관', '시점 범위◇', 'Gap', '세부과제 수'], ['TV-A1', 'TV', 'A. x', 'x — 원천 근거·공개 기준', 'p', 'o', '1차', '', 1]]
    sh['세부과제'] = [['세부과제 ID', 'Activity ID', '제품', '열세 주제', 'Activity', '단계', '세부과제', '대상 국가', '주관', '구분', '시점◇'], ['TV-A1-01', 'TV-A1', 'TV', 'A. x', 'x', 'S2 원천 정리', 't', 'DE', '알 수 없는 팀', 'QW', '1차']]
    expect(() => buildGeoActions(XLSX, wbFrom(sh), META)).toThrow('주관 조직 그룹 판별 불가')
  })
})
