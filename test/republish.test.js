// 통합 게시 엔진 (lib/republish.mjs) — sync-data ∪ 스냅샷 조립·렌더·게시 검증.
// DATA_DIR 를 임시 폴더로 격리해 실제 data/ 를 건드리지 않는다.
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'

// DATA_DIR 은 lib/storage.js 가 모듈 로드 시점에 env 로 확정 — import 전에 세팅해야 한다
const TMP = mkdtempSync(join(tmpdir(), 'republish-test-'))
process.env.DATA_DIR = TMP

const { updateSyncDataFromParsed, assembleDashboardData, assembleCitationData, recomputePeriod, deriveProducts, runUnifiedPublish } =
  await import('../lib/republish.mjs')
const { writeModeSyncData, readModeSyncData, saveModeSnapshot, PUB_DIR } = await import('../lib/storage.js')

function seedDashboardSync() {
  writeModeSyncData('dashboard', {
    meta: { period: 'Jul 2026', title: 'GEO KPI', totalInsight: '사용자가 쓴 종합 인사이트', showTotal: true },
    total: { score: 80, vsComp: 75, rank: 1 },
    productsPartial: [
      { id: 'tv', kr: 'TV', bu: 'MS', score: 87.2, prev: 85.0, vsComp: 90.9, compName: '삼성', date: '26년 7월', allScores: { LG: 87.2, 삼성: 90.9 } },
      { id: 'monitor', kr: '모니터', bu: 'MS', score: 60.7, prev: 58.1, vsComp: 60.7, compName: 'Asus', date: '26년 7월', allScores: { LG: 60.7, Asus: 60.7 } },
    ],
    weeklyMap: { tv: [80, 82, 85, 87.2], monitor: [55, 57, 59, 60.7] },
    weeklyLabels: ['W1', 'W2', 'W3', 'W4'],
    weeklyAll: {},
    citations: [{ category: 'TV', count: 120 }],
    citationsCnty: [{ cnty: '미국', count: 40 }],
    productsCnty: [{ country: '미국', product: 'TV', score: 88, prev: 86, compName: '삼성', compScore: 91, allScores: { LG: 88 } }],
    monthlyVis: [{ date: '26년 7월', country: 'TTL', score: 80 }],
    dotcom: {}, citationsByCnty: {}, dotcomByCnty: {},
    unlaunchedMap: { 'BR|AV': true },
  })
}

function seedCitationSync() {
  writeModeSyncData('citation', {
    meta: { period: 'Jul 2026' },
    citations: [{ category: 'TV', count: 120 }],
    citationsCnty: [{ cnty: '미국', count: 40 }],
    dotcom: {}, citationsByCnty: {}, dotcomByCnty: {}, citationsByPrd: {},
    citTouchPointsTrend: { TV: [1, 2] }, citTrendMonths: ['Jun', 'Jul'],
  })
}

beforeAll(() => {
  mkdirSync(PUB_DIR, { recursive: true })
  seedDashboardSync()
  seedCitationSync()
  // 스냅샷 — EN 번역 필드·metaEn 은 여기에만 존재 (실환경과 동일)
  saveModeSnapshot('dashboard', {
    name: 'test', ts: 1000,
    data: {
      metaKo: { period: 'Jul 2026', totalInsight: '사용자가 쓴 종합 인사이트' },
      metaEn: { title: 'GEO KPI Dashboard', totalInsight: 'User-written total insight', period: 'Jul 2026' },
      products: [{ id: 'tv', en: 'TV', compNameEn: 'Samsung' }, { id: 'monitor', en: 'Monitor', compNameEn: 'Asus' }],
      productsCnty: [{ country: '미국', product: 'TV', countryEn: 'US', productEn: 'TV', compNameEn: 'Samsung' }],
      citations: [{ category: 'TV', categoryEn: 'TV' }],
      citationsCnty: [{ cnty: '미국', cntyEn: 'US' }],
    },
  })
  saveModeSnapshot('citation', {
    name: 'test', ts: 1000,
    data: {
      metaKo: { period: 'Jul 2026', citationInsight: '사용자가 쓴 사이테이션 인사이트', citationTopN: 8 },
      metaEn: { period: 'Jul 2026', citationInsight: 'User citation insight' },
      citations: [{ category: 'TV', categoryEn: 'TV' }],
      citationsCnty: [{ cnty: '미국', cntyEn: 'US' }],
    },
  })
})

afterAll(() => { rmSync(TMP, { recursive: true, force: true }) })

describe('updateSyncDataFromParsed — 사용자 텍스트 보존 병합', () => {
  it('시트 구조 필드는 덮고 META_TEXT_KEYS 는 기존 값 유지', () => {
    updateSyncDataFromParsed({
      meta: { period: 'Aug 2026', totalInsight: '시트가 준 기본 문구' },
      productsPartial: [{ id: 'tv', score: 90, prev: 87.2, vsComp: 91, compName: '삼성' }],
    })
    const d = readModeSyncData('dashboard')
    expect(d.meta.period).toBe('Aug 2026')                       // 구조 필드 → 시트 값
    expect(d.meta.totalInsight).toBe('사용자가 쓴 종합 인사이트')  // 텍스트 → 보존
    expect(d.meta.showTotal).toBe(true)                          // 토글 → 보존 (시트에 없음)
    expect(d.productsPartial[0].score).toBe(90)                  // 시트 데이터 갱신
    expect(d.weeklyMap.tv).toEqual([80, 82, 85, 87.2])           // 시트에 없는 키는 기존 유지
    seedDashboardSync(); seedCitationSync() // updateSyncDataFromParsed 는 두 모드를 모두 쓰므로 둘 다 원복
  })

  it('total 없으면 productsPartial 평균으로 폴백 생성', () => {
    updateSyncDataFromParsed({
      productsPartial: [
        { id: 'tv', score: 80, vsComp: 90 },
        { id: 'monitor', score: 60, vsComp: 50 },
      ],
    })
    const d = readModeSyncData('dashboard')
    expect(d.total.score).toBe(70)   // (80+60)/2
    expect(d.total.vsComp).toBe(70)  // (90+50)/2
    seedDashboardSync(); seedCitationSync()
  })
})

describe('recomputePeriod / deriveProducts — visibility SPA 파생 로직 이식', () => {
  it('한국식·영문 date 에서 최신 월 추출', () => {
    expect(recomputePeriod({ productsPartial: [{ date: '26년 7월' }], monthlyVis: [{ date: 'Aug 2026' }] }))
      .toBe(`Aug ${new Date().getFullYear()}`)
  })
  it('월 정보 없으면 null (기존 period 유지)', () => {
    expect(recomputePeriod({ productsPartial: [], monthlyVis: [] })).toBeNull()
  })
  it('weeklyMap 에서 weeklyScore·compRatio·status 파생', () => {
    const products = deriveProducts({
      productsPartial: [{ id: 'tv', score: 87.2, prev: 85, vsComp: 90.9 }],
      weeklyMap: { tv: [80, 82, 85, 87.2] },
    })
    expect(products[0].weeklyScore).toBe(87.2)
    expect(products[0].compRatio).toBe(96)  // round(87.2/90.9*100)
    expect(products[0].status).toBe('behind')
  })
})

describe('assemble — sync-data ∪ 스냅샷 EN 오버레이', () => {
  it('dashboard: EN 필드가 스냅샷에서 id 매칭으로 복사된다', () => {
    const a = assembleDashboardData()
    expect(a.products.find(p => p.id === 'tv').en).toBe('TV')
    expect(a.products.find(p => p.id === 'tv').compNameEn).toBe('Samsung')
    expect(a.productsCnty[0].countryEn).toBe('US')
    expect(a.citationsCnty[0].cntyEn).toBe('US')
    expect(a.metaEn.totalInsight).toBe('User-written total insight')
    expect(a.hasMetaEn).toBe(true)
  })
  it('citation: 스냅샷에서는 사용자 텍스트만 — 낡은 토글·설정은 오염 금지', () => {
    const c = assembleCitationData()
    expect(c.metaKo.citationInsight).toBe('사용자가 쓴 사이테이션 인사이트') // 스냅샷 텍스트 (META_TEXT_KEYS)
    // 스냅샷의 설정·토글은 가져오지 않는다 — 운영에서 3월 옛 스냅샷의 낡은 토글이
    // fresh 데이터를 덮어 범프차트 소실 + 'Mar 2026' 제목 회귀 (2026-09-02)
    expect(c.metaKo.citationTopN).toBeUndefined()
    expect(c.metaKo.period).toBe('Jul 2026')                                 // sync-data 구조
    expect(c.trendData.citTrendMonths).toEqual(['Jun', 'Jul'])
  })
})

describe('runUnifiedPublish({ sync:false }) — 렌더 + 게시 E2E (시트 fetch 생략)', () => {
  it('3채널 6개 HTML 이 PUB_DIR 에 생성된다', async () => {
    const r = await runUnifiedPublish({ trigger: 'test', sync: false })
    expect(r.ok).toBe(true)
    expect(Object.keys(r.channels).sort()).toEqual(['citation', 'dashboard', 'visibility'])
    for (const f of [
      'GEO-KPI-Dashboard-KO.html', 'GEO-KPI-Dashboard-EN.html',
      'GEO-Visibility-Dashboard-KO.html', 'GEO-Visibility-Dashboard-EN.html',
      'GEO-Citation-Dashboard-KO.html', 'GEO-Citation-Dashboard-EN.html',
    ]) {
      expect(existsSync(join(PUB_DIR, f)), f).toBe(true)
    }
    // EN 본문에 스냅샷의 EN 인사이트가 실려야 한다 (metaEn 오버레이 검증)
    const en = readFileSync(join(PUB_DIR, 'GEO-KPI-Dashboard-EN.html'), 'utf-8')
    expect(en).toContain('User-written total insight')
    // 실행 메타 기록
    expect(existsSync(join(TMP, 'unified-publish-meta.json'))).toBe(true)
  })

  it('한 채널 실패해도 나머지는 게시된다 (per-channel 격리)', async () => {
    // citation sync-data 를 비워 citation 만 실패 유도
    writeModeSyncData('citation', {})
    const r = await runUnifiedPublish({ trigger: 'test', sync: false })
    expect(r.ok).toBe(false)
    expect(r.errors.some(e => e.step === 'citation')).toBe(true)
    expect(r.channels.dashboard).toBeTruthy()   // dashboard 는 성공
    expect(r.channels.visibility).toBeTruthy()
    seedCitationSync()
  })
})
