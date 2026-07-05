// 국가코드(소문자) → 표시명 — readability 집계/렌더 공용 single source.
// aggregate-readability.mjs · render-readability.mjs 가 import (중복 정의 → 드리프트 방지, data.md §5.5).
export const CC_NAME = {
  us: 'USA', ca: 'Canada', uk: 'UK', gb: 'UK', de: 'Germany', es: 'Spain',
  fr: 'France', it: 'Italy', br: 'Brazil', mx: 'Mexico', in: 'India',
  au: 'Australia', vn: 'Vietnam', jp: 'Japan', kr: 'Korea', cn: 'China',
}
