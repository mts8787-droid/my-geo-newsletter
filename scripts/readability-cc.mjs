// 국가코드(소문자) → 표시명 — readability 집계/렌더 공용 single source.
// aggregate-readability.mjs · render-readability.mjs 가 import (중복 정의 → 드리프트 방지, data.md §5.5).
export const CC_NAME = {
  us: 'USA', ca: 'Canada', uk: 'UK', gb: 'UK', de: 'Germany', es: 'Spain',
  fr: 'France', it: 'Italy', br: 'Brazil', mx: 'Mexico', in: 'India',
  au: 'Australia', vn: 'Vietnam', jp: 'Japan', kr: 'Korea', cn: 'China',
  be: 'Belgium', nl: 'Netherlands',
  // HS(가전) 디지털컨텐츠팀 URL 시트의 감사 국가 밖 사이트 (HS-Others, 2026-10-26) — 표시명만 필요
  sa: 'Saudi Arabia', eg: 'Egypt', hk: 'Hong Kong', cz: 'Czechia', tw: 'Taiwan', co: 'Colombia',
  cl: 'Chile', th: 'Thailand', ph: 'Philippines', sg: 'Singapore', za: 'South Africa', pe: 'Peru',
  ma: 'Morocco', fi: 'Finland', se: 'Sweden', my: 'Malaysia', ee: 'Estonia', nz: 'New Zealand',
  dk: 'Denmark', id: 'Indonesia', lt: 'Lithuania', lv: 'Latvia', kz: 'Kazakhstan', ae: 'UAE',
  at: 'Austria', dz: 'Algeria', ec: 'Ecuador', bd: 'Bangladesh', pl: 'Poland', hu: 'Hungary', pa: 'Panama',
  africa: 'Africa', eastafrica: 'East Africa', cac: 'Central America & Caribbean', levant: 'Levant',
  // 국가가 아니라 글로벌 대표 사이트(lg.com/global). 국가 분류에 한 줄로 넣어 집계·표시한다
  // (사용자 결정 2026-08-30). 이전에는 CC_NAME 에 없어 run_results 에 있어도 통째로 드롭됐다.
  global: 'Global-site',
}
