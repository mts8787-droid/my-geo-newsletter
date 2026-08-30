// Readability 개선 가이드 single source — 검수 기준(체크) × 콘텐츠 타입(페이지타입).
//
// 대시보드가 국가·페이지타입 필터에 맞춰 "해석 + 액션 아이템" 을 뽑아 쓴다.
// 구조: GUIDE[checkId] = { why, action, byPt?: { <pageTypeId>: action 덮어쓰기 } }
//   why    — 이 항목이 왜 AI 가시성에 중요한지 (한 줄)
//   action — 기본 액션 아이템 (한 줄, 명령형)
//   byPt   — 해당 페이지타입에서 액션이 실질적으로 달라질 때만 오버라이드
//
// ⚠ 신규 체크 추가 시 여기에도 한 줄 추가할 것 (npm test 가 누락을 잡는다).

export const PT_LABEL = {
  pdp: '제품 상세(PDP)', plp: '제품 카테고리(PLP)', support: '지원/Support',
  support_troubleshoot: '지원-트러블슈팅', press_media: '프레스앤미디어',
  newsroom: '뉴스룸/Press', buying_guide: '구매 가이드',
  lg_experience: 'LG Experience', microsite: '마이크로사이트/캠페인',
}

export const GUIDE = {
  // ── 사이트 성능 ────────────────────────────────────────────────────────────
  perf_ttfb: {
    why: '서버 응답이 느리면 AI 크롤러가 수집을 포기하거나 크롤 예산을 덜 배정한다.',
    action: '서버 응답시간 600ms 미만으로 — CDN 캐시 적중률과 원본 응답 시간을 함께 점검한다.',
    byPt: { pdp: 'PDP 는 트래픽이 가장 많다 — 원본 서버 부하 대신 CDN 엣지 캐시로 응답을 내보낸다.' },
  },
  perf_compression: {
    why: '압축이 없으면 전송량이 커져 크롤 속도와 수집 성공률이 떨어진다.',
    action: 'HTML 응답에 gzip 또는 brotli 압축을 적용한다.',
  },
  perf_http_protocol: {
    why: 'HTTP/1.1 은 동시 요청이 제한돼 크롤러의 대량 수집이 느려진다.',
    action: 'HTTP/2 이상으로 서빙한다 (CDN 설정에서 활성화).',
  },
  perf_cache_control: {
    why: '캐시 정책이 없으면 재방문 크롤이 매번 원본을 때려 수집이 느려진다.',
    action: 'Cache-Control 에 max-age 를 명시한다 — 값이 0이어도 정책 선언은 필요하다.',
  },
  perf_redirect: {
    why: '리다이렉트가 겹치면 크롤러가 중간에 추적을 포기할 수 있다.',
    action: '리다이렉트 체인을 1회 이하로 줄인다 — 사이트맵·내부링크를 최종 URL 로 교체한다.',
  },
  perf_mixed_content: {
    why: 'HTTPS 페이지의 HTTP 리소스는 차단돼 콘텐츠 일부가 수집되지 않는다.',
    action: '모든 리소스 URL 을 https:// 로 교체한다.',
  },

  // ── 웹접근성 ──────────────────────────────────────────────────────────────
  a11y_image_alt: {
    why: 'alt 가 없으면 AI 가 이미지의 내용을 텍스트로 이해할 수 없다.',
    action: '의미 있는 이미지에 alt 를 채운다 — 장식 이미지는 alt="" 로 명시한다.',
    byPt: {
      pdp: '제품 이미지 alt 에 "모델명 + 핵심 특징" 을 넣어 AI 가 제품을 특정할 수 있게 한다.',
      press_media: '보도자료 사진 alt 에 인물·장소·행사명을 넣어 인용 근거가 되게 한다.',
    },
  },
  a11y_semantic: {
    why: 'div 만으로 짠 페이지는 AI 가 본문·네비게이션·부가정보를 구분하지 못한다.',
    action: 'header · nav · main · article · footer 시맨틱 태그로 문서 구조를 표시한다.',
  },
  a11y_heading_hier: {
    why: '제목 계층이 어긋나면 AI 가 어디까지가 한 주제인지 판단하지 못해 인용 단위가 깨진다.',
    action: 'H1 → H2 → H3 순서를 건너뛰지 않게 정리한다 — 스타일 목적의 제목 태그 사용을 금지한다.',
    byPt: {
      pdp: 'PDP 템플릿에서 스펙·리뷰·FAQ 블록의 제목 레벨을 고정한다 (섹션마다 H2, 하위는 H3).',
      support_troubleshoot: '증상 → 원인 → 해결 단계를 H2/H3 로 계층화해 단계별 인용이 가능하게 한다.',
      newsroom: '기사 제목만 H1, 본문 소제목은 H2 이하로 — 배포 템플릿에서 강제한다.',
      press_media: '보도자료 제목 H1 + 소제목 H2 구조를 발행 템플릿에 고정한다.',
    },
  },
  a11y_aria_labels: {
    why: 'ARIA 라벨이 없으면 인터랙티브 요소의 목적을 AI 가 추론할 수 없다.',
    action: '아이콘 버튼·탭·아코디언에 aria-label 을 부여한다.',
  },

  // ── Basic SEO ────────────────────────────────────────────────────────────
  seo_title: {
    why: 'Title 은 AI 가 페이지 주제를 판단하는 1순위 신호다.',
    action: '모든 페이지에 고유한 title 을 넣는다 (60자 내외).',
  },
  seo_meta_desc: {
    why: 'Meta Description 은 AI 답변의 요약 문장으로 그대로 쓰이는 경우가 많다.',
    action: '페이지 핵심을 담은 meta description 을 채운다 (120~160자).',
    byPt: {
      newsroom: '발행 시스템에서 기사 리드 문단을 meta description 으로 자동 채우게 한다.',
      press_media: '보도자료 첫 문단을 description 으로 자동 생성하도록 템플릿에 넣는다.',
      pdp: '모델명 + 핵심 스펙 2~3개를 조합해 자동 생성한다 — 카테고리 공통 문구 재사용을 피한다.',
    },
  },
  seo_canonical: {
    why: 'canonical 이 없으면 파라미터·중복 URL 로 인용이 분산돼 정본이 흐려진다.',
    action: '각 페이지에 자기 자신을 가리키는 canonical 을 넣는다.',
    byPt: { plp: '필터·정렬 파라미터 URL 의 canonical 을 파라미터 없는 기본 목록으로 고정한다.' },
  },
  seo_h1: {
    why: 'H1 이 없거나 여러 개면 AI 가 페이지 주제를 특정하지 못한다.',
    action: '페이지당 H1 을 정확히 1개만 둔다 — 로고·배너의 H1 사용을 제거한다.',
    byPt: { newsroom: '기사 제목만 H1 으로 두고 사이트 로고의 H1 을 제거한다.' },
  },
  seo_robots: {
    why: 'noindex 가 걸리면 해당 페이지는 AI 색인 대상에서 완전히 빠진다.',
    action: '공개 대상 페이지에 noindex 가 걸려 있지 않은지 meta·헤더 양쪽을 확인한다.',
  },
  seo_open_graph: {
    why: 'OG 태그는 공유·인용 시 제목과 대표 이미지를 결정한다.',
    action: 'og:title 과 og:image 를 채운다 — 이미지는 1200×630 이상.',
    byPt: { press_media: '보도자료 대표 사진을 og:image 로 자동 지정한다.' },
  },
  seo_sitemap: {
    why: '사이트맵이 낡으면 신규·수정 페이지가 크롤 대상에서 누락된다.',
    action: '사이트맵을 1개월 이내로 갱신하고 lastmod 를 실제 수정일로 채운다.',
    byPt: { newsroom: '기사 발행 시 사이트맵이 자동 갱신되도록 발행 파이프라인에 연결한다.' },
  },

  // ── 스키마마크업 ──────────────────────────────────────────────────────────
  ai_schema_breadcrumb: {
    why: 'BreadcrumbList 는 AI 에게 페이지의 카테고리 위치를 알려준다.',
    action: 'BreadcrumbList 스키마를 전 페이지 공통 템플릿에 넣는다.',
  },
  ai_schema_faq: {
    why: 'FAQPage 스키마가 있으면 AI 가 질의응답 쌍을 그대로 답변에 인용한다.',
    action: '기존 FAQ 아코디언에 FAQPage 스키마를 자동 생성해 붙인다.',
    byPt: {
      pdp: 'PDP 하단 자주 묻는 질문 블록을 FAQPage 스키마로 마크업한다 — 경쟁사 대비 격차가 가장 큰 항목.',
      buying_guide: '구매 가이드의 비교·선택 질문을 FAQPage 로 구조화한다.',
    },
  },
  ai_schema_collection: {
    why: 'CollectionPage 는 목록 페이지가 무엇의 모음인지 AI 에게 알려준다.',
    action: 'PLP 템플릿에 CollectionPage 스키마와 목록 항목을 마크업한다.',
  },
  ai_schema_product: {
    why: 'Product 스키마는 AI 가 제품을 특정·비교하는 핵심 근거다 — 없으면 추천 후보에서 빠진다.',
    action: 'PDP 에 Product 풀세트(name·image·description·sku·brand·offers)를 마크업한다.',
    byPt: { pdp: '통과율 1% 미만 — 최우선 과제. 스키마 자동화로 전 모델에 일괄 적용한다.' },
  },
  ai_schema_image: {
    why: 'ImageObject 는 AI 가 이미지를 답변에 인용할 때의 출처·설명 근거가 된다.',
    action: '주요 이미지에 ImageObject(contentUrl·caption)를 마크업한다.',
    byPt: { pdp: '제품 대표 이미지부터 ImageObject 를 적용한다 — 현재 전 페이지 0%.' },
  },
  ai_schema_video: {
    why: 'VideoObject 가 없으면 영상 콘텐츠가 AI 답변에 노출되지 않는다.',
    action: '임베드 영상에 VideoObject(name·thumbnailUrl·uploadDate)를 마크업한다.',
  },
  ai_schema_howto: {
    why: 'HowTo 는 절차형 콘텐츠를 AI 가 단계별로 인용하게 해준다.',
    action: '문제 해결 절차를 HowTo 스키마의 step 으로 구조화한다.',
    byPt: { support_troubleshoot: '트러블슈팅 단계가 이미 순서형이다 — 템플릿에서 HowTo 로 자동 변환한다.' },
  },
  ai_schema_article: {
    why: 'Article 스키마는 기사형 콘텐츠의 저자·발행일을 AI 에게 전달한다.',
    action: '기사·가이드 콘텐츠에 Article(headline·author·datePublished)을 마크업한다.',
    byPt: {
      newsroom: '발행 템플릿에 NewsArticle/Article 을 넣어 전 기사에 일괄 적용한다.',
      buying_guide: '구매 가이드를 Article 로 마크업해 작성자·발행일을 함께 노출한다.',
    },
  },
  ai_schema_offer: {
    why: 'Offer 는 가격·재고 상태를 AI 가 답변에 반영하게 한다.',
    action: 'Product 스키마 안에 offers(price·priceCurrency·availability)를 채운다.',
  },

  // ── 고인용 콘텐츠 ─────────────────────────────────────────────────────────
  ai_faq_block: {
    why: 'FAQ 형식은 AI 가 질문에 그대로 대응시킬 수 있어 인용 확률이 가장 높다.',
    action: '페이지 주제와 직결된 질문 3개 이상을 FAQ 블록으로 추가한다.',
    byPt: {
      pdp: '제품별 실제 문의 상위 질문을 PDP 하단 FAQ 로 배치한다.',
      support: '지원 문서 상단에 "이 문서로 해결되는 질문" 블록을 둔다.',
    },
  },
  ai_definition: {
    why: '용어를 한 문단으로 정의해두면 AI 가 개념 질의의 답으로 인용한다.',
    action: '핵심 용어·기술명을 "X는 ~이다" 형태의 정의 문단으로 서술한다.',
    byPt: {
      pdp: '핵심 기술명(예: 인버터 · OLED evo)을 한 문장 정의로 본문에 넣는다 — 현재 통과율 2%대.',
      buying_guide: '가이드 도입부에 다루는 개념의 정의 문단을 배치한다.',
    },
  },
  ai_author_source: {
    why: 'AI 는 저자·출처·날짜로 콘텐츠의 신뢰성과 최신성을 판단한다.',
    action: '작성자 · 출처 · 발행일을 본문과 스키마 양쪽에 노출한다.',
    byPt: {
      buying_guide: '가이드에 작성 부서·검수자·최종 수정일을 표기한다 — 현재 0%.',
      lg_experience: '콘텐츠 하단에 발행 주체와 날짜를 표기한다 — 현재 0%.',
      newsroom: '기사 템플릿에 byline 과 발행일을 고정 필드로 넣는다.',
    },
  },
  ai_summary_box: {
    why: '요약 박스는 AI 가 페이지 전체를 읽지 않고도 핵심을 인용하게 해준다.',
    action: '페이지 상단에 3~5줄 핵심 요약 박스를 배치한다.',
    byPt: { support_troubleshoot: '문서 맨 위에 "요약: 증상 / 원인 / 해결" 3줄 박스를 둔다 — 현재 0%.' },
  },
  ai_citable: {
    why: '숫자·연도·통계가 담긴 문장은 AI 가 근거로 인용하기 쉽다.',
    action: '본문에 수치·연도·비교 데이터를 포함한 문장 비중을 10% 이상으로 높인다.',
    byPt: { pdp: '스펙 수치를 표에만 두지 말고 본문 문장으로도 서술한다.' },
  },

  // ── AI Crawlability ──────────────────────────────────────────────────────
  ai_ssr_ratio: {
    why: '초기 HTML 에 본문이 없으면 JS 를 실행하지 않는 AI 는 내용을 보지 못한다.',
    action: '주요 본문을 서버 렌더링(SSR)으로 초기 HTML 에 포함시킨다.',
    byPt: {
      pdp: '스펙·설명·리뷰 요약을 SSR 로 전환한다 — 현재 60%대로 전 타입 중 하위.',
      support_troubleshoot: '해결 단계 본문을 SSR 로 전환한다 — 현재 35%대로 최저.',
    },
  },
  ai_pdp_thumbnails: {
    why: '썸네일이 초기 HTML 에 없으면 AI 가 제품 이미지를 수집하지 못한다.',
    action: 'PDP 대표 이미지 3장 이상을 SSR 로 내보낸다.',
  },
  ai_core_element: {
    why: '핵심 영역이 CSR 로만 오면 AI 가 제품 정보를 불완전하게 수집한다.',
    action: 'PDP 핵심 5개 영역 중 3개 이상을 SSR 로 제공한다.',
  },
  ai_image_filename: {
    why: '파일명은 AI 가 이미지 주제를 추론하는 보조 신호다.',
    action: '이미지 파일명에 브랜드·모델명을 포함시킨다.',
  },
  ai_status_200: {
    why: '비-200 응답은 페이지 자체가 수집되지 않는다.',
    action: '사이트맵·내부링크에서 깨진 URL 을 제거한다.',
  },
  ai_soft_404: {
    why: '200 을 반환하는 빈 페이지는 AI 가 실제 콘텐츠로 오인해 품질 신호를 떨어뜨린다.',
    action: '내용이 없는 페이지는 404 를 반환하거나 콘텐츠를 채운다.',
  },
  ai_llms_txt: {
    why: 'llms.txt 는 AI 에게 사이트의 우선 수집 대상과 정책을 알려준다.',
    action: '루트에 llms.txt 를 두고 주요 섹션과 정책을 명시한다.',
  },
}

// 특정 체크 × 페이지타입의 액션 아이템 (byPt 있으면 그것, 없으면 기본)
export function actionFor(checkId, ptId) {
  const g = GUIDE[checkId]
  if (!g) return null
  return (ptId && g.byPt && g.byPt[ptId]) || g.action
}
