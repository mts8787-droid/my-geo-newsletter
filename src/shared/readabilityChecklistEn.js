// 검수 기준 체크리스트 영문 — data/readability/geo-agent-checklist.html 의 EN 판.
//
// 왜 별도 파일인가: 원본 체크리스트 HTML 은 사람이 직접 유지하는 문서다.
// 거기에 data-en-* 속성을 섞으면 편집할 때 깨지기 쉬워, 문서 번호(no)로 잇는 사전을 따로 둔다.
// 대신 병렬 구조의 드리프트는 테스트로 막는다 — 원본에 행이 늘면 EN 누락으로 npm test 실패.
//
// 키는 문서 행 번호(no). '예정' 행은 순서대로 planned1..N 로 잇는다.

export const CHECKLIST_EN = {
  '1':  { name: 'TTFB', def: 'Time until the first response arrives after the request', pass: '< 600ms' , method: 'Server-Timing, X-Response-Time headers' },
  '2':  { name: 'Compression', def: 'Whether HTTP responses are compressed to cut transfer size', pass: 'gzip / br / deflate' , method: 'Content-Encoding header' },
  '3':  { name: 'HTTP Protocol', def: 'HTTP protocol version used to deliver the page', pass: 'HTTP/2 or later' , method: 'Alt-Svc, :status headers' },
  '4':  { name: 'Cache-Control', def: 'Cache lifetime that lets the browser store and reuse the resource', pass: 'max-age present (0 counts)' , method: 'Cache-Control header' },
  '6':  { name: 'Redirect Chain', def: 'Number of URL redirects before reaching the final page', pass: '≤ 1 hop' , method: 'redirectChain metadata' },
  '7':  { name: 'Mixed Content', def: 'Whether an HTTPS page includes non-secure (HTTP) resources', pass: 'None' , method: 'Detection of http:// resources' },
  '9':  { name: 'Image Alt', def: 'Whether images carry alternative text describing their content and meaning', pass: 'No missing alt' , method: 'img[alt] check' },
  '10': { name: 'Semantic HTML', def: 'Use of meaning-bearing HTML elements that express content role and structure', pass: 'Main + 3 or more landmarks' , method: 'main, nav, header, footer, article, section, aside' },
  '11': { name: 'Heading Hierarchy', def: 'Whether heading tags form a proper hierarchy separating titles from sub-content', pass: 'No violations' , method: 'Detects jumps such as h1 → h3' },
  '12': { name: 'ARIA Labels', def: 'Whether UI elements such as buttons and inputs expose their name and role', pass: 'Missing < 10%' , method: 'Accessible text on buttons, inputs, links' },
  '13': { name: 'Title', def: 'Page title conveying the core topic to search engines and users', pass: 'Present (30–60 chars)' , method: 'Parse and verify the title tag' },
  '14': { name: 'Meta Description', def: 'Meta description summarising the page for search results', pass: 'Present (120–160 chars)' , method: 'Parse and verify meta[name=\"description\"]' },
  '15': { name: 'Canonical', def: 'URL setting that tells search engines which page is authoritative', pass: 'Self-referencing' , method: 'Parse and verify link[rel=\"canonical\"]' },
  '16': { name: 'H1', def: 'Number of top-level heading tags marking the main title of the body', pass: 'Exactly one' , method: 'Parse and count the h1 tag' },
  '17': { name: 'Robots', def: 'Setting that tells search engines whether the page may be crawled and shown', pass: 'Indexing allowed via meta robots or X-Robots-Tag' , method: 'Parse meta robots; also check the X-Robots-Tag response header' },
  '18': { name: 'Open Graph', def: 'Information that carries title and image when the link is shared', pass: 'OG tags present in the meta tag area' , method: 'og: meta tags' },
  '19': { name: 'Sitemap', def: 'Whether the file listing all site pages for search engines is current', pass: 'Sitemap XML published/updated within 1 month' , method: 'HEAD request to /sitemap.xml; verify each country’s sitemap' },
  '20': { name: 'Schema Types — Organization', def: 'Company name, contact, and address marked up so AI can read them', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'contactPoint, address, geo, hasMap present' },
  '21': { name: 'Schema Types — BreadcrumbList', def: 'Path information showing where the page sits in the site structure', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'itemListElement, item, name, position present' },
  '22': { name: 'Schema Types — Speakable', def: 'Key passages marked so voice services can read them aloud', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'speakable.cssSelector present' },
  '23': { name: 'Schema Types — FAQ', def: 'Frequently asked questions and answers marked up so AI can read them', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'mainEntity present' },
  '24': { name: 'Schema Types — CollectionPage', def: 'Marks the page as a listing that gathers multiple items', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'itemList, ListItem present' },
  '25': { name: 'Schema Types — Product + Offer + AggregateRating + Review', def: 'Product name, price, stock, rating, and reviews marked up so AI can read them', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'name, description, sku, brand, offers.price, offers.availability, aggregateRating.ratingValue, Review present' },
  '26': { name: 'Schema Types — ImageObject', def: 'Image URL, name, and caption marked up so AI can read them', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'url, name, description, uploadDate present' },
  '27': { name: 'Schema Types — VideoObject', def: 'Video URL, title, and thumbnail marked up so AI can read them', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'url, name, description, thumbnailUrl present' },
  '28': { name: 'Schema Types — HowTo', def: 'Instructions made of materials and steps marked up so AI can read them', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'HowToSupply / HowToStep present' },
  '29': { name: 'Schema Types — Article', def: 'Article title, author, publisher, and body marked up so AI can read them', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'headline, author, publisher, articleBody present' },
  '30': { name: 'Schema Types — DigitalDocument', def: 'Name, format, and URL of attached manuals or catalogues marked up for AI', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'name, url, fileFormat, description present' },
  '31': { name: 'Schema Types — Recipe', def: 'Ingredients and cooking steps marked up so AI can read them', pass: 'All required JSON-LD fields present, parses cleanly' , method: 'name, description, image, author, datePublished, recipeIngredient, recipeInstructions present' },
  '32': { name: 'FAQ Block*', def: 'Whether the body contains content laid out as questions and answers', pass: 'One or more present' , method: 'FAQPage schema, details/summary, Q&A patterns' },
  '33': { name: 'Definition Paragraph*', def: 'Whether the page explains terms in an "A is B" form', pass: 'One or more present' , method: '\"X is Y\" phrasing, dfn and abbr tags' },
  '34': { name: 'Author / Source', def: 'Author, or source and date, showing who wrote the content and when', pass: 'Author, or (source + date), present' , method: 'meta author, byline, datePublished' },
  '35': { name: 'Summary Box*', def: 'Whether a short summary of the key points sits near the top of the body', pass: 'One or more present' , method: 'TL;DR, Key Takeaways, Highlights, Abstract' },
  '36': { name: 'Citable Sentences*', def: 'Share of sentences with numbers, years, or statistics that AI can cite as evidence', pass: 'Density ≥ 10%' , method: 'Sentences containing numbers, years, statistics, or research keywords' },
  '37': { name: '(JavaScript) HTML Text Ratio', def: 'Share of on-screen text that is readable without running JavaScript', pass: 'Density ≥ 60%' , method: 'Share of HTML text count against text after JavaScript rendering' },
  '38': { name: '(JavaScript) HTML Resource', def: 'Whether the product’s lead images sit in the HTML without running JavaScript', pass: 'HTML markup present for PDP thumbnails 1–3' , method: 'Parse PDP HTML and confirm server-side rendering' },
  '39': { name: '(JavaScript) Core element check', def: 'Whether the product page’s core information sits in the HTML without running JavaScript', pass: 'Core PDP elements present in the HTML' , method: 'Parse PDP HTML and confirm server-side rendering' },
  '40': { name: 'Image File Name', def: 'Whether the image file name alone identifies the brand and product', pass: 'Brand name included' , method: 'Verify image file naming rules such as brand name inclusion' },
  '41': { name: 'Status Code (200)', def: 'Whether the page responds as normally reachable', pass: 'Returns a 200 status code' , method: 'Status code' },
  '42': { name: 'Status Code (Soft 404)', def: 'Whether a page that responds normally is actually empty', pass: 'Among 200-status pages, HTML text count at or above the bar (200 chars)' , method: 'Status code plus a check that HTML text falls below the bar' },
  '43': { name: 'llms.txt / llms-corepage.txt', def: 'Whether a file exists that points AI at the site’s key pages', pass: 'Present' , method: 'Verify llms.txt per country' },
}

// '예정' 행 — 문서에 번호가 없어 등장 순서로 잇는다
export const CHECKLIST_EN_PLANNED = [
  { name: 'LCP (Largest Contentful Paint)', def: 'Time until the largest content element finishes painting', pass: '≤ 4,000ms', method: 'PageSpeed Insights (Lighthouse) measurement'  },
  { name: 'CLS (Cumulative Layout Shift)', def: 'How much the layout shifts while reading — higher means more movement', pass: '≤ 0.25', method: 'PageSpeed Insights (Lighthouse) measurement'  },
  { name: 'INP (Interaction to Next Paint)', def: 'Time until the screen responds after a tap or keystroke', pass: '≤ 500ms', method: 'PageSpeed Insights — CrUX field data'  },
  { name: 'Agentic Browsing', def: 'How well the site is set up to interact with AI agents (requirement in Google beta)', pass: 'Scoring bar or pass/fail form to be confirmed per Google policy', method: 'Evaluation of CLS · LLMS.txt · agent accessibility items (scoring in progress)'  },
]

// 행(no 또는 '예정' 순번) → EN. 없으면 null (호출부가 KO 로 폴백)
export function checklistEn(no, plannedIdx) {
  if (no === '예정' || no === 'planned') return CHECKLIST_EN_PLANNED[plannedIdx] || null
  return CHECKLIST_EN[String(no)] || null
}
