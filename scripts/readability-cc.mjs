// 국가코드(소문자) → 표시명 — readability 집계/렌더 공용 single source.
// aggregate-readability.mjs · render-readability.mjs 가 import (중복 정의 → 드리프트 방지, data.md §5.5).
export const CC_NAME = {
  us: 'USA', ca: 'Canada', uk: 'UK', gb: 'UK', de: 'Germany', es: 'Spain',
  fr: 'France', it: 'Italy', br: 'Brazil', mx: 'Mexico', in: 'India',
  au: 'Australia', vn: 'Vietnam', jp: 'Japan', kr: 'Korea', cn: 'China',
  // 국가가 아니라 글로벌 대표 사이트(lg.com/global). 국가 분류에 한 줄로 넣어 집계·표시한다
  // (사용자 결정 2026-08-30). 이전에는 CC_NAME 에 없어 run_results 에 있어도 통째로 드롭됐다.
  global: 'Global-site',
}
