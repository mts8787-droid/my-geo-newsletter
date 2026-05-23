// ─── Category Single Source of Truth ─────────────────────────────────────────
// 이전: excelUtils.js (CATEGORY_ID_MAP, CATEGORY_KR_MAP, parseUnlaunched 의 NORMALIZE),
//       dashboard/dashboardConsts.js (UL_PROD_MAP), emailTemplate.js (UL_PROD_MAP 로컬 복사본)
//       — 5곳에 분산되어 있어 신규 카테고리 추가 시 누락 위험 (STYLER 누락 사례).
// 이제: 본 파일이 단일 소스. 다른 파일은 import 만.

// prodId = lowercase 식별자 — 클라이언트 데이터 모델·차트·필터의 정식 키
// UL_CODE = uppercase 미출시 시트 표기 — unlaunchedMap 의 `${country}|${code}` 키 우측

export const PROD_IDS = [
  'tv', 'monitor', 'audio',
  'washer', 'fridge', 'dw', 'vacuum', 'cooking',
  'rac', 'aircare', 'styler',
]

// prodId → 한글 표시명 (제품 카드, 라벨 등)
export const PROD_ID_TO_KR = {
  tv: 'TV', monitor: '모니터', audio: '오디오',
  washer: '세탁기', fridge: '냉장고', dw: '식기세척기', vacuum: '청소기',
  cooking: 'Cooking', rac: 'RAC', aircare: 'Aircare', styler: 'Styler',
}

// prodId → 영문 표시명 (영문 이메일/뉴스레터)
export const PROD_ID_TO_EN = {
  tv: 'TV', monitor: 'Monitor', audio: 'Audio',
  washer: 'Washer', fridge: 'REF', dw: 'DW', vacuum: 'VC', cooking: 'Cooking',
  rac: 'RAC', aircare: 'Aircare', styler: 'Styler',
}

// prodId → BU (Business Unit) 분류
// MS = Media Solutions (TV/모니터/오디오)
// HS = Home Solutions (가전 — 세탁기/냉장고/식세기/청소기/쿠킹/스타일러)
// ES = Energy Solutions (공조 — RAC/AirCare)
// 호출처는 `PROD_ID_TO_BU[id] || 'HS'` 패턴 — 미정의 prodId 는 HS fallback
export const PROD_ID_TO_BU = {
  tv: 'MS', monitor: 'MS', audio: 'MS',
  washer: 'HS', fridge: 'HS', dw: 'HS', vacuum: 'HS', cooking: 'HS', styler: 'HS',
  rac: 'ES', aircare: 'ES',
}

// prodId → UL_CODE (미출시 시트 표준 표기)
// 호환: 기존 UL_PROD_MAP 과 정확히 같은 키/값 — dashboardConsts.js 가 alias 로 re-export
export const PROD_ID_TO_UL_CODE = {
  tv: 'TV', monitor: 'IT', audio: 'AV',
  washer: 'WM', fridge: 'REF', dw: 'DW', vacuum: 'VC', cooking: 'COOKING',
  rac: 'RAC', aircare: 'AIRCARE', styler: 'STYLER',
}

// 시트 raw 표기 (다양한 표현) → prodId
// 호환: 기존 CATEGORY_ID_MAP 과 동일
export const RAW_TO_PROD_ID = {
  'TV': 'tv',
  'Monitor': 'monitor', 'IT': 'monitor',
  'Audio': 'audio', 'AV': 'audio',
  'WM': 'washer', 'Washer': 'washer', 'Washing Machine': 'washer',
  'REF': 'fridge', 'Refrigerator': 'fridge',
  'DW': 'dw', 'Dishwasher': 'dw',
  'VC': 'vacuum', 'Vacuum': 'vacuum', 'Vacuum Cleaner': 'vacuum',
  'Cooking': 'cooking', 'Cook': 'cooking',
  'RAC': 'rac', 'Aircare': 'aircare', 'Air Care': 'aircare',
  'Styler': 'styler',
}

// 시트 raw → 한글 표시명 (parseProductCnty 의 즉시 표시용)
// 호환: 기존 CATEGORY_KR_MAP 과 동일
export const RAW_TO_KR = {
  'TV': 'TV',
  'Monitor': '모니터', 'IT': '모니터',
  'Audio': '오디오', 'AV': '오디오',
  'WM': '세탁기', 'Washer': '세탁기', 'Washing Machine': '세탁기',
  'REF': '냉장고', 'Refrigerator': '냉장고',
  'DW': '식기세척기', 'Dishwasher': '식기세척기',
  'VC': '청소기', 'Vacuum': '청소기', 'Vacuum Cleaner': '청소기',
  'Cooking': 'Cooking', 'Cook': 'Cooking',
  'RAC': 'RAC', 'Aircare': 'Aircare', 'Air Care': 'Aircare',
  'Styler': 'Styler',
}

// 미출시 시트의 raw 카테고리 (uppercase 정규화 후) → 표준 UL_CODE
// 시트 사용자가 'WASHING MACHINE', 'AIR CARE' 같은 다양한 표기로 입력해도 흡수.
// 결과값 셋은 반드시 PROD_ID_TO_UL_CODE 의 값 셋과 일치해야 함 (invariant — 아래 검증).
export const UL_CODE_NORMALIZE = {
  'TV': 'TV',
  'MONITOR': 'IT', 'IT': 'IT',
  'AUDIO': 'AV', 'AV': 'AV',
  'WASHER': 'WM', 'WM': 'WM', 'WASHING MACHINE': 'WM',
  'REFRIGERATOR': 'REF', 'REF': 'REF', 'FRIDGE': 'REF',
  'DISHWASHER': 'DW', 'DW': 'DW',
  'VACUUM': 'VC', 'VC': 'VC', 'VACUUM CLEANER': 'VC',
  'COOKING': 'COOKING', 'COOK': 'COOKING',
  'RAC': 'RAC',
  'AIRCARE': 'AIRCARE', 'AIR CARE': 'AIRCARE',
  'STYLER': 'STYLER',
}

// ─── Invariant 검증 ─────────────────────────────────────────────────────────
// UL_CODE_NORMALIZE 의 결과값 ⊆ Object.values(PROD_ID_TO_UL_CODE)
// — 시트 raw 표기가 흡수된 결과가 미정의 UL_CODE 로 새지 않도록 보장.
// 모듈 로드 시 1회 검증 (테스트 환경 + 런타임 모두). 위반 시 warn (시드 깨짐 즉시 인지).
const _UL_CODES = new Set(Object.values(PROD_ID_TO_UL_CODE))
const _UNKNOWN_RESULTS = [...new Set(Object.values(UL_CODE_NORMALIZE))].filter(c => !_UL_CODES.has(c))
if (_UNKNOWN_RESULTS.length) {
  console.warn('[categoryMap] invariant violation: UL_CODE_NORMALIZE 결과값이 PROD_ID_TO_UL_CODE 와 불일치',
    { unknown: _UNKNOWN_RESULTS, validCodes: [..._UL_CODES] })
}

// 외부에서 호출 가능한 검증 헬퍼 (테스트용)
// invariant 1: UL_CODE_NORMALIZE 결과값 ⊆ PROD_ID_TO_UL_CODE 의 값 집합
// invariant 2: PROD_IDS 의 모든 prodId 가 매핑 4종 (KR/EN/UL_CODE/BU) 에 정의
export function assertCategoryMapInvariant() {
  const codes = new Set(Object.values(PROD_ID_TO_UL_CODE))
  const unknown = [...new Set(Object.values(UL_CODE_NORMALIZE))].filter(c => !codes.has(c))
  if (unknown.length) {
    throw new Error(`UL_CODE_NORMALIZE 결과값 ${JSON.stringify(unknown)} 이 PROD_ID_TO_UL_CODE 와 불일치`)
  }
  const maps = { PROD_ID_TO_KR, PROD_ID_TO_EN, PROD_ID_TO_UL_CODE, PROD_ID_TO_BU }
  for (const [name, map] of Object.entries(maps)) {
    const missing = PROD_IDS.filter(id => map[id] == null)
    if (missing.length) {
      throw new Error(`${name} 에 prodId 누락: ${JSON.stringify(missing)} — categoryMap.js single source 룰 위반`)
    }
  }
  return true
}
