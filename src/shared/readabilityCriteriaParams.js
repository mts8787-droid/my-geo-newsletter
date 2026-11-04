// ⚠ 생성 파일 — 직접 수정 금지. node scripts/sync-criteria-params.mjs 로 다시 만든다.
// 출처: my-geo-audit/scoring_config.json (활성 항목 39개 · 원문 그대로)
export const CRITERIA_PARAMS = {
  "perf_ttfb": {
    "cat": "performance",
    "name": "#1 TTFB < 600ms (PSI Lab)",
    "type": "psi_metric",
    "params": {
      "metric": "server_response_time_ms",
      "max_value": 600,
      "unit": "ms"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "perf_compression": {
    "cat": "performance",
    "name": "#2 Compression",
    "type": "header_value_in",
    "params": {
      "header": "content-encoding",
      "values": "gzip,br,deflate"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "perf_http_protocol": {
    "cat": "performance",
    "name": "#3 HTTP/2+",
    "type": "http_protocol_min",
    "params": {
      "min_version": "HTTP/2"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "perf_cache_control": {
    "cat": "performance",
    "name": "#4 Cache-Control max-age 설정",
    "type": "header_max_age_min",
    "params": {
      "min_seconds": 0
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "perf_redirect": {
    "cat": "performance",
    "name": "#6 Redirect ≤ 1",
    "type": "redirect_max",
    "params": {
      "max_count": 1
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "perf_mixed_content": {
    "cat": "performance",
    "name": "#7 Mixed Content 0",
    "type": "mixed_content_zero",
    "params": {},
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "a11y_image_alt": {
    "cat": "accessibility",
    "name": "#9 Image Alt 누락 0",
    "type": "css_all_have_attr",
    "params": {
      "selector": "img",
      "attr": "alt",
      "ignore_src_contains": "adnxs.com,ads.linkedin.com,doubleclick,googletagmanager,google-analytics,facebook.com/tr,/pixel,/collect,scorecardresearch,demdex,everesttech,bat.bing"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "a11y_semantic": {
    "cat": "accessibility",
    "name": "#10 Semantic HTML",
    "type": "landmark_count_min",
    "params": {
      "min_landmarks": 8,
      "require_main": "no"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "a11y_heading_hier": {
    "cat": "accessibility",
    "name": "#11 Heading Hierarchy",
    "type": "heading_no_jump",
    "params": {},
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "a11y_aria_labels": {
    "cat": "accessibility",
    "name": "#12 ARIA 누락 < 10%",
    "type": "aria_missing_ratio_max",
    "params": {
      "max_ratio": 0.1
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "seo_title": {
    "cat": "seo",
    "name": "#13 Title 존재",
    "type": "css_text_min_length",
    "params": {
      "selector": "title",
      "min_length": 1
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "seo_meta_desc": {
    "cat": "seo",
    "name": "#14 Meta Description",
    "type": "css_attr_exists",
    "params": {
      "selector": "meta[name='description' i]",
      "attr": "content",
      "min_length": 1
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "seo_canonical": {
    "cat": "seo",
    "name": "#15 Canonical (동일 host)",
    "type": "canonical_self",
    "params": {},
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "seo_h1": {
    "cat": "seo",
    "name": "#16 H1 정확히 1개",
    "type": "css_count",
    "params": {
      "selector": "h1",
      "operator": "==",
      "value": 1
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "seo_indexable": {
    "cat": "seo",
    "name": "#17 Indexing 허용 (meta robots 또는 X-Robots-Tag)",
    "type": "noindex_absent",
    "params": {
      "selector": "meta[name='robots' i]",
      "header": "x-robots-tag",
      "token": "noindex"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "seo_open_graph": {
    "cat": "seo",
    "name": "#18 Open Graph (title+image)",
    "type": "og_required_pairs",
    "params": {
      "required": "title,image"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "seo_sitemap": {
    "cat": "seo",
    "name": "#19 Sitemap (1개월 내)",
    "type": "sitemap_recent",
    "params": {
      "path": "/sitemap.xml",
      "max_days": 30
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "ai_schema_breadcrumb": {
    "cat": "schema_markup",
    "name": "#21 Schema: BreadcrumbList",
    "type": "schema_required_fields",
    "params": {
      "type": "BreadcrumbList",
      "fields": "itemListElement"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "ai_schema_faq": {
    "cat": "schema_markup",
    "name": "#23 Schema: FAQPage",
    "type": "schema_required_fields",
    "params": {
      "type": "FAQPage",
      "fields": "mainEntity"
    },
    "pageTypes": [
      "pdp",
      "plp",
      "buying_guide",
      "microsite"
    ],
    "when": {
      "type": "class_id_contains",
      "params": {
        "keywords": "faq,자주 묻는,자주묻는,frequently asked,veelgestelde vragen,q&a,qna,questions,질문,answer,accordion",
        "tags": "div,section,aside,article,details"
      },
      "naHint": "FAQ 섹션(클래스·헤딩)이 없는 페이지라 FAQPage 스키마 평가 대상이 아닙니다."
    },
    "note": ""
  },
  "ai_schema_collection": {
    "cat": "schema_markup",
    "name": "#24 Schema: CollectionPage (PLP)",
    "type": "schema_required_fields",
    "params": {
      "type": "CollectionPage",
      "fields": "mainEntity"
    },
    "pageTypes": [
      "plp"
    ],
    "when": null,
    "note": ""
  },
  "ai_schema_product": {
    "cat": "schema_markup",
    "name": "#25 Schema: Product 풀세트 (PDP)",
    "type": "schema_required_fields",
    "params": {
      "type": "Product",
      "fields": "name,description,sku|mpn|gtin13|gtin,brand,offers.price,offers.availability",
      "alt_types": "ProductGroup"
    },
    "pageTypes": [
      "pdp",
      "business"
    ],
    "when": null,
    "note": ""
  },
  "ai_schema_offer": {
    "cat": "schema_markup",
    "name": "#43 Schema: Offer",
    "type": "schema_required_fields",
    "params": {
      "type": "Offer",
      "fields": "price,priceCurrency,availability"
    },
    "pageTypes": [
      "pdp",
      "business",
      "promotion"
    ],
    "when": null,
    "note": ""
  },
  "ai_schema_image": {
    "cat": "schema_markup",
    "name": "#26 Schema: ImageObject",
    "type": "schema_required_fields",
    "params": {
      "type": "ImageObject",
      "fields": "url|contentUrl,name|caption,description",
      "exclude_within": "Review,Comment"
    },
    "pageTypes": null,
    "when": {
      "type": "css_exists",
      "params": {
        "selector": "figure img, article img, picture img, [class*='content'] img, [class*='Content'] img, [class*='editorial'] img, [class*='gallery'] img, [class*='Gallery'] img, [class*='Product-ImageGrid'] img, img[src*='PDPGalleryThumbnail'], .cmp-image img"
      },
      "naHint": "본문 콘텐츠 이미지가 없어 ImageObject 평가 대상이 아닙니다."
    },
    "note": ""
  },
  "ai_schema_video": {
    "cat": "schema_markup",
    "name": "#27 Schema: VideoObject",
    "type": "schema_required_fields",
    "params": {
      "type": "VideoObject",
      "fields": "url|contentUrl|embedUrl,name,description,thumbnailUrl",
      "exclude_within": "Review,Comment"
    },
    "pageTypes": null,
    "when": {
      "type": "css_exists",
      "params": {
        "selector": "video, iframe[src*='youtube'], iframe[src*='youtu.be'], iframe[src*='vimeo']"
      },
      "naHint": "영상이 없는 페이지라 VideoObject 스키마 평가 대상이 아닙니다."
    },
    "note": ""
  },
  "ai_schema_howto": {
    "cat": "schema_markup",
    "name": "#28 Schema: HowTo",
    "type": "schema_required_fields",
    "params": {
      "type": "HowTo",
      "fields": "step"
    },
    "pageTypes": [
      "support_troubleshoot"
    ],
    "when": {
      "type": "css_count",
      "params": {
        "selector": "ol > li, [class*='step'], [class*='con-view'], [class*='procedure']",
        "operator": ">=",
        "value": 3
      },
      "naHint": "절차(순서 목록·단계 블록)가 없는 페이지라 HowTo 스키마 평가 대상이 아닙니다."
    },
    "note": ""
  },
  "ai_schema_article": {
    "cat": "schema_markup",
    "name": "#29 Schema: Article",
    "type": "schema_required_fields",
    "params": {
      "type": "Article",
      "fields": "headline,author,publisher,articleBody"
    },
    "pageTypes": [
      "experience",
      "buying_guide",
      "microsite",
      "support_troubleshoot"
    ],
    "when": {
      "type": "css_exists",
      "params": {
        "selector": "article, [class*='article'], [class*='post-body']"
      },
      "naHint": "기사 본문 구조가 없는 페이지라 Article 스키마 평가 대상이 아닙니다."
    },
    "note": ""
  },
  "ai_schema_rating_or_review": {
    "cat": "schema_markup",
    "name": "#44 Schema: AggregateRating OR Review",
    "type": "schema_any_of",
    "params": {
      "types": "AggregateRating,Review"
    },
    "pageTypes": [
      "pdp"
    ],
    "when": null,
    "note": ""
  },
  "ai_faq_block": {
    "cat": "citable_content",
    "name": "#32 FAQ Block (콘텐츠)",
    "type": "class_id_contains",
    "params": {
      "keywords": "faq,자주 묻는,자주묻는,frequently asked,veelgestelde vragen,q&a,qna,questions,질문,answer,accordion",
      "tags": "div,section,aside,article,details",
      "question_min": 1,
      "question_keywords": "frequently asked,faq,q&a,qna,common questions,questions and answers,your questions,answer,answers,ask us,need help,help center,learn more about,자주 묻는,자주묻는,질문,답변,문의,궁금,preguntas frecuentes,preguntas,respuesta,respuestas,dudas,häufig gestellte fragen,haufig gestellte fragen,fragen,antwort,antworten,perguntas frequentes,perguntas,resposta,respostas,dúvidas,duvidas,câu hỏi thường gặp,câu hỏi,giải đáp,thắc mắc,trả lời,veelgestelde vragen,vragen,antwoord,antwoorden",
      "class_need_question": "accordion"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "ai_definition": {
    "cat": "citable_content",
    "name": "#33 Definition Paragraph",
    "type": "definition_pattern_min",
    "params": {
      "min_count": 1,
      "model": "yes",
      "model_scan_max": 40
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "ai_author_source": {
    "cat": "citable_content",
    "name": "#34 Author 또는 출처+날짜",
    "type": "author_or_source",
    "params": {},
    "pageTypes": [
      "newsroom",
      "press_media"
    ],
    "when": null,
    "note": ""
  },
  "ai_summary_box": {
    "cat": "citable_content",
    "name": "#35 Summary Box (콘텐츠)",
    "type": "class_id_contains",
    "params": {
      "keywords": "summary,overview,tldr,tl;dr,abstract,key takeaway,key takeaways,at a glance,highlights,요약,핵심,한눈에,주요 특징,개요,resumen,de un vistazo,zusammenfassung,auf einen blick,im überblick,resumo,em resumo,visão geral,tóm tắt,tổng quan,samenvatting,in het kort,overzicht,news summary,key features",
      "tags": "div,section,aside,article,blockquote,p",
      "block_selector": "p.info-desc, p.description, div.c-floating-features",
      "block_exclude_class": "idt",
      "block_min_chars": 80,
      "block_min_lines": 1,
      "match_class": "no",
      "label_tags": "p"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "ai_citable": {
    "cat": "citable_content",
    "name": "#36 Citable Sentence ≥ 5개 (트러블슈팅·PLP 3개)",
    "type": "citable_density_min",
    "params": {
      "min_count": 5,
      "min_count_by_type": "support_troubleshoot:3,plp:3",
      "model": "yes",
      "model_scan_max": 40
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "ai_ssr_ratio": {
    "cat": "ai_crawlability",
    "name": "#37 JS HTML Text Ratio ≥ 60%",
    "type": "ssr_text_ratio_min",
    "params": {
      "min_ratio": 0.6
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "ai_pdp_thumbnails": {
    "cat": "ai_crawlability",
    "name": "#38 PDP 썸네일 3장 이상 SSR",
    "type": "css_count",
    "params": {
      "selector": "img[src*='PDPGalleryThumbnail'], [class*='Product-ImageGrid'] img, .c-summary-gallery img, .c-gallery img, .swiper-wrapper .swiper-slide img",
      "operator": ">=",
      "value": 3
    },
    "pageTypes": [
      "pdp"
    ],
    "when": null,
    "note": ""
  },
  "ai_core_element": {
    "cat": "ai_crawlability",
    "name": "#39 PDP 핵심 element SSR (5개 영역 중 3개 이상)",
    "type": "area_coverage",
    "params": {
      "min_groups": 3,
      "groups": [
        {
          "label": "제품명",
          "selector": "h1.cmp-text, h1, [class*='Product-MainTitle']",
          "jsonld_any": [
            "\"name\""
          ],
          "raw_any": [
            "\"productname\"",
            "\"modelname\""
          ]
        },
        {
          "label": "가격",
          "selector": "[class*='Product-Price'], [class*='price-area'], .info-sticky--price",
          "jsonld_any": [
            "pricecurrency",
            "\"price\"",
            "pricespecification"
          ],
          "raw_any": [
            "pricecurrency",
            "\"offers\""
          ]
        },
        {
          "label": "갤러리",
          "selector": "img[src*='PDPGalleryThumbnail'], [class*='Product-ImageGrid'], .c-summary-gallery, .c-gallery, .swiper-wrapper .swiper-slide img",
          "jsonld_any": [
            "\"image\""
          ],
          "raw_any": [
            "pdpgallerythumbnail"
          ]
        },
        {
          "label": "사양",
          "selector": "[class*='Product-KeyFeatures'], [class*='Product-Features'], .c-specs-summary, .c-all-specs-area, .c-specs-dimensions",
          "jsonld_any": [
            "additionalproperty"
          ],
          "raw_any": [
            "\"specification\"",
            "\"keyfeature\"",
            "\"feature\""
          ]
        },
        {
          "label": "리뷰",
          "selector": "[data-bv-show], [class*='Product-Review'], [class*='review'], [class*='Review'], [class*='rating'], [class*='Rating']",
          "jsonld_any": [
            "aggregaterating",
            "\"review\""
          ],
          "raw_any": [
            "data-bv-show",
            "rating_summary",
            "\"reviewcount\""
          ]
        }
      ]
    },
    "pageTypes": [
      "pdp"
    ],
    "when": null,
    "note": "US/React PDP: DOM 위젯은 CSR이지만 데이터는 SSR(JSON-LD/__NEXT_DATA__)로 존재. DOM OR JSON-LD OR raw embedded 중 하나라도 있으면 해당 영역 SSR 인정. 5개 영역 중 3개 이상 PASS."
  },
  "ai_image_filename": {
    "cat": "ai_crawlability",
    "name": "#40 Image File Name 브랜드 포함",
    "type": "image_filename_keyword",
    "params": {
      "keywords": "lg,oled,qned,nanocell,uhd,4k,8k,tv,soundbar,speaker,xboom,monitor,ultragear,ultrawide,ultrafine,gram,thinq,refrigerator,fridge,washer,dryer,dishwasher,microwave,oven,cooktop,range,aircon,ac,purifier,styler,cordzero,vacuum,projector,cinebeam,tone,earbud,laptop,objet,standbyme,heatpump",
      "min_ratio": 0.3,
      "exclude_filename": "logo,icon,ico-,sprite,placeholder,blank,spacer,dummy",
      "content_only": "yes"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "ai_status_200": {
    "cat": "ai_crawlability",
    "name": "#41 Status Code 200",
    "type": "status_code_eq",
    "params": {
      "code": 200
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "ai_soft_404": {
    "cat": "ai_crawlability",
    "name": "#42 Soft 404 부재",
    "type": "soft_404_check",
    "params": {
      "min_text_length": 200
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  },
  "ai_llms_txt": {
    "cat": "ai_crawlability",
    "name": "#43 llms.txt 존재",
    "type": "http_status",
    "params": {
      "path": "/llms.txt",
      "status": 200,
      "must_contain": "# ,## ,http"
    },
    "pageTypes": null,
    "when": null,
    "note": ""
  }
}
