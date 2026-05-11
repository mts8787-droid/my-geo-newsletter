// ─── 대시보드 상수 — dashboardTemplate.js에서 분리 (C12 step2) ─────────────
export const FONT = "'LGEIText','LG Smart','Arial Narrow',Arial,sans-serif"
export const RED = '#CF0652'
export const COMP = '#94A3B8' // 경쟁사 공통 회색

// ─── 다국어 ──────────────────────────────────────────────────────────────────
export const T = {
  ko: {
    lead: '선도', behind: '추격', critical: '취약',
    weeklyTab: '주별', monthlyTab: '월별',
    vsComp: '대비', categories: '개 카테고리',
    byProduct: '제품별', byCountry: '국가별',
    allProducts: '전체 제품', allCountries: '전체 국가',
    productTitle: '제품별 GEO Visibility 현황',
    cntyTitle: '국가별 GEO Visibility 현황',
    cntyTitleByProduct: '제품별 GEO Visibility 현황',
    cBrandCompare: 'C브랜드 비교',
    citationTitle: '도메인 카테고리별 Citation 현황',
    citDomainTitle: '도메인별 Citation 현황',
    citCntyTitle: '국가별 Citation 도메인',
    dotcomTitle: '닷컴 Citation (경쟁사대비)',
    legendLead: '선도 ≥100%', legendBehind: '추격 ≥80%', legendCritical: '취약 <80%',
    lgBasis: 'LG/1위 기준',
    insight: 'INSIGHT', howToRead: 'HOW TO READ',
    geoInsight: 'Executive Summary',
    dotcomLgWin: 'LG 우위', dotcomSsWin: 'SS 우위', dotcomNone: '없음',
    dotcomTTL: 'TTL (전체)', dotcomLgOnly: '— (LG only)',
    todoTitle: 'Action Plan',
    footer: '해외영업본부 D2C해외영업그룹 D2C마케팅담당 D2C디지털마케팅팀',
    citLegend: 'Citation Score 건수 (비중)',
    progressMsg: '4월 업데이트 예정',
    readabilityMsg: '4월 업데이트 예정',
  },
  en: {
    lead: 'Lead', behind: 'Behind', critical: 'Critical',
    weeklyTab: 'Weekly', monthlyTab: 'Monthly',
    vsComp: 'vs', categories: ' Categories',
    byProduct: 'By Product', byCountry: 'By Country',
    allProducts: 'All Products', allCountries: 'All Countries',
    productTitle: 'GEO Visibility by Product',
    cntyTitle: 'GEO Visibility by Country',
    cntyTitleByProduct: 'GEO Visibility by Product',
    cBrandCompare: 'Compare China Brand',
    citationTitle: 'Citation by Domain Category',
    citDomainTitle: 'Citation by Domain',
    citCntyTitle: 'Citation Domain by Country',
    dotcomTitle: 'Dotcom Citation (vs Competitor)',
    legendLead: 'Lead ≥100%', legendBehind: 'Behind ≥80%', legendCritical: 'Critical <80%',
    lgBasis: 'LG/Top 1 Basis',
    insight: 'INSIGHT', howToRead: 'HOW TO READ',
    geoInsight: 'Executive Summary',
    dotcomLgWin: 'LG Leads', dotcomSsWin: 'SS Leads', dotcomNone: 'None',
    dotcomTTL: 'TTL (Total)', dotcomLgOnly: '— (LG only)',
    todoTitle: 'Action Plan',
    footer: 'Overseas Sales HQ · D2C Digital Marketing Team',
    citLegend: 'Citation Score Count (Ratio)',
    progressMsg: 'Coming in April update',
    readabilityMsg: 'Coming in April update',
  },
}

// ─── 브랜드 색상 ─────────────────────────────────────────────────────────────
export const BRAND_COLORS = {
  LG: RED, Samsung: '#3B82F6', Sony: '#7C3AED', Hisense: '#059669',
  TCL: '#D97706', Asus: '#0EA5E9', Dell: '#6366F1', MSI: '#EF4444',
  JBL: '#F97316', Bose: '#8B5CF6', Bosch: '#14B8A6', Whirlpool: '#06B6D4',
  Haier: '#22C55E', Miele: '#A855F7', Dyson: '#EC4899', Xiaomi: '#F59E0B',
  Shark: '#6B7280', Daikin: '#2563EB', Mitsubishi: '#DC2626', Media: '#10B981',
  Panasonic: '#0D9488', Blueair: '#0284C7', Philips: '#7C3AED',
}
export const FALLBACK_COLORS = ['#94A3B8','#64748B','#475569','#CBD5E1','#E2E8F0']

// ─── 지역·국가 ───────────────────────────────────────────────────────────────
export const REGIONS = {
  NA:    { label: '북미',   labelEn: 'North America',  countries: ['US', 'CA'] },
  EU:    { label: '유럽',   labelEn: 'Europe',         countries: ['UK', 'DE', 'ES'] },
  LATAM: { label: '중남미', labelEn: 'Latin America',   countries: ['BR', 'MX'] },
  APAC:  { label: '아태',   labelEn: 'Asia Pacific',    countries: ['AU', 'VN'] },
  IN:    { label: '인도',   labelEn: 'India',           countries: ['IN'] },
}

export const ALL_10_COUNTRIES = ['US','CA','UK','DE','ES','BR','MX','AU','VN','IN']

// 국가코드 → 풀네임 (dashboardFormat.cntyFullName 등에서 사용)
export const COUNTRY_FULL_NAME = {
  US: 'USA', CA: 'Canada', UK: 'UK', GB: 'UK',
  DE: 'Germany', ES: 'Spain', FR: 'France', IT: 'Italy',
  BR: 'Brazil', MX: 'Mexico', IN: 'India', AU: 'Australia',
  VN: 'Vietnam', JP: 'Japan', KR: 'Korea', CN: 'China',
  TTL: 'Total', TOTAL: 'Total', GLOBAL: 'Global',
}

// 국가코드 → 정식 국가명 (각주·문장 용 — 약자 대신 풀네임)
export const COUNTRY_OFFICIAL_NAME_EN = {
  US: 'United States', CA: 'Canada', UK: 'United Kingdom', GB: 'United Kingdom',
  DE: 'Germany', ES: 'Spain', FR: 'France', IT: 'Italy',
  BR: 'Brazil', MX: 'Mexico', IN: 'India', AU: 'Australia',
  VN: 'Vietnam', JP: 'Japan', KR: 'South Korea', CN: 'China',
}
export const COUNTRY_OFFICIAL_NAME_KR = {
  US: '미국', CA: '캐나다', UK: '영국', GB: '영국',
  DE: '독일', ES: '스페인', FR: '프랑스', IT: '이탈리아',
  BR: '브라질', MX: '멕시코', IN: '인도', AU: '호주',
  VN: '베트남', JP: '일본', KR: '한국', CN: '중국',
}

// ─── 미출시 코드 매핑 ────────────────────────────────────────────────────────
export const UL_PROD_MAP = {
  tv: 'TV', monitor: 'IT', audio: 'AV', washer: 'WM',
  fridge: 'REF', dw: 'DW', vacuum: 'VC',
  cooking: 'COOKING', rac: 'RAC', aircare: 'AIRCARE',
}

// ─── Dotcom 컬럼 ─────────────────────────────────────────────────────────────
export const DC_COLS = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide','Experience']
export const DC_SAM  = ['TTL','PLP','Microsites','PDP','Newsroom','Support','Buying-guide']

// ─── 트렌드 표 첫 컬럼 너비 ─────────────────────────────────────────────────
export const TREND_BRAND_COL = 90
