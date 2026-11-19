// Readability Raw 데이터(checks-<date>.json) 영문 변환 — EN 대시보드의 Type · 항목 · 실패 사유 컬럼.
// checks JSON 은 한 벌(한국어)만 굽고, ?lang=en 요청 때 서버가 이 모듈로 바꿔 내려보낸다
// (readabilityCsv.js 의 localizeUrlsCsv 와 같은 패턴).
//
// 실패 사유(hint) = 상류 검수기가 만든 정형 문구 + 선택적 '(모델 제외 사유: a, b)' 꼬리.
//   1) 정형 문구는 HINT_RULES 정규식으로 번역
//   2) 제외 사유는 REASON_EN 사전 (2026-09-29·10-24 스냅샷 전수) → 없으면 WORD_EN 단어 치환
//   3) 그래도 남는 한글은 원문 유지 (silent 삭제 X) — untranslatedHints() 로 점검
import { PT_LABEL, pick } from './readabilityGuide.js'

const HANGUL = /[가-힣]/

// 항목 라벨 — checks[id].label 중 한글이 섞인 것만 (번호 접두 '#n ' 포함 원문 그대로 대응)
export const CHECK_LABEL_EN = {
  perf_cache_control: '#4 Cache-Control max-age set',
  a11y_image_alt: '#9 Image Alt missing = 0',
  a11y_aria_labels: '#12 ARIA missing < 10%',
  seo_title: '#13 Title present',
  seo_canonical: '#15 Canonical (same host)',
  seo_h1: '#16 Exactly one H1',
  seo_indexable: '#17 Indexing allowed (meta robots or X-Robots-Tag)',
  seo_sitemap: '#19 Sitemap (within 1 month)',
  ai_faq_block: '#32 FAQ Block (content)',
  ai_summary_box: '#35 Summary Box (content)',
  ai_citable: '#36 Citable Sentence ≥ 5 (Troubleshooting·PLP: 3)',
  ai_image_filename: '#40 Image file name includes brand',
  ai_soft_404: '#42 No Soft 404',
  ai_llms_txt: '#43 llms.txt present',
  ai_schema_product: '#25 Schema: Product full set (Product+Offer, PDP)',
  ai_pdp_thumbnails: '#38 PDP 3+ thumbnails SSR',
  ai_core_element: '#39 PDP core elements SSR (3 of 5 areas)',
  ai_author_source: '#34 Author or source+date',
}

// 매칭/누락 목록 속 요소명
const ELEM_EN = { 제품명: 'product name', 갤러리: 'gallery', 가격: 'price', 사양: 'specs', 리뷰: 'reviews' }
const elems = s => s.replace(/[가-힣]+/g, w => ELEM_EN[w] || w)

// 정형 문구 — 위에서부터 첫 매칭 1건만 적용
const HINT_RULES = [
  [/^서술적 파일명 (\d+)\/(\d+) \(([\d.]+)%\) — (\d+)% 이상 필요$/, (m) => `Descriptive file names ${m[1]}/${m[2]} (${m[3]}%) — ${m[4]}% or more required`],
  [/^정의문 (\d+)건 — (\d+)건 이상 필요$/, (m) => `Definition sentences: ${m[1]} — ${m[2]} or more required`],
  [/^인용 가능 문장 (\d+)개 — (\d+)개 이상 필요$/, (m) => `Citable sentences: ${m[1]} — ${m[2]} or more required`],
  [/^TTFB (\d+)ms \(PSI\) — (\d+)ms 미만 필요$/, (m) => `TTFB ${m[1]}ms (PSI) — under ${m[2]}ms required`],
  [/^(\d+)개 요소에 '(.+)' 속성이 없습니다\.$/, (m) => `${m[1]} elements are missing the '${m[2]}' attribute.`],
  [/^'(.+)' (\d+)개 — == (\d+) 필요$/, (m) => `'${m[1]}' count: ${m[2]} — exactly ${m[3]} required`],
  [/^헤딩 역순 (\d+)건 — 첫 헤딩\((h\d)\)보다 상위 레벨이 뒤에 등장$/, (m) => `${m[1]} out-of-order heading(s) — a higher level appears after the first heading (${m[2]})`],
  [/^헤딩 (\d+) \+ 랜드마크 (\d+) = (\d+) — 의미 구조 (\d+)\+ 필요$/, (m) => `Headings ${m[1]} + landmarks ${m[2]} = ${m[3]} — ${m[4]}+ semantic elements required`],
  [/^@type='(.+)' 노드 없음$/, (m) => `No @type='${m[1]}' node`],
  [/^SSR 비율 ([\d.]+)% — ([\d.]+)% 이상 필요$/, (m) => `SSR ratio ${m[1]}% — ${m[2]}% or more required`],
  [/^리다이렉트 (\d+)회 — (\d+)회 이하 권장$/, (m) => `${m[1]} redirects — ${m[2]} or fewer recommended`],
  [/^필수 필드 누락: (.+)$/, (m) => `Missing required fields: ${m[1]}`],
  [/^누락: (.+)$/, (m) => `Missing: ${m[1]}`],
  [/^본문 (\d+)자 — 내용 없는 (\d+) 응답 \((\d+)자 미만\)$/, (m) => `Body ${m[1]} chars — empty ${m[2]} response (under ${m[3]} chars)`],
  [/^매칭: \[(.*)\] · 누락: \[(.*)\] · 최소 (\d+)개 필요$/, (m) => `Matched: [${elems(m[1])}] · Missing: [${elems(m[2])}] · at least ${m[3]} required`],
  [/^본문 영역에 헤딩 태그가 없습니다\.$/, () => 'No heading tags in the main content area.'],
  [/^JSON-LD author 또는 \(datePublished\+publisher\) 조합 없음$/, () => 'No JSON-LD author or (datePublished+publisher) combination'],
  [/^Product 풀세트 미충족 — (.+)와 (.+) 모두 필요$/, (m) => `Product full set not met — both ${m[1]} and ${m[2]} required`],
  [/^'(.+)' 속성이 없거나 (\d+)자 미만입니다\.$/, (m) => `'${m[1]}' attribute is missing or shorter than ${m[2]} chars.`],
  [/^로고·아이콘을 제외하면 판정할 img 가 없습니다\.$/, () => 'No img left to evaluate after excluding logos and icons.'],
  [/^키워드\((.+)\)를 포함한 요소를 찾을 수 없습니다\.$/, (m) => `No element containing the keywords (${m[1]}) was found.`],
  [/^JSON-LD 노드 없음 \(author\/source 스키마 검증 불가\)$/, () => 'No JSON-LD node (cannot validate author/source schema)'],
  [/^http:\/\/ 리소스 (\d+)개: (.+)$/, (m) => `${m[1]} http:// resource(s): ${m[2]}`],
  [/^canonical 태그 없음$/, () => 'No canonical tag'],
  [/^'(.+)' 요소를 찾을 수 없습니다\.$/, (m) => `Element '${m[1]}' not found.`],
  [/^types \[(.+)\] 중 하나도 JSON-LD에 없음 \(둘 중 하나 필요\)$/, (m) => `None of types [${m[1]}] in JSON-LD (one of them required)`],
  [/^canonical='(.+)' — 다른 도메인을 가리킵니다$/, (m) => `canonical='${m[1]}' — points to another domain`],
  [/^텍스트 길이 (\d+) — (\d+)자 이상 필요$/, (m) => `Text length ${m[1]} — ${m[2]}+ chars required`],
  [/^마지막 갱신 (\S+) — (\d+)일 이내 필요$/, (m) => `Last updated ${m[1]} — within ${m[2]} days required`],
  [/^HTTP\/([\d.]+) — HTTP\/([\d.]+) 이상 필요$/, (m) => `HTTP/${m[1]} — HTTP/${m[2]} or higher required`],
  [/^국가 sitemap 에 <lastmod> 가 없어 갱신 여부 판별 불가$/, () => 'Country sitemap has no <lastmod>, so freshness cannot be determined'],
  [/^'(.+)' 선언으로 색인이 차단됩니다\.$/, (m) => `Indexing is blocked by the '${m[1]}' directive.`],
  [/^Cache-Control 에 max-age 디렉티브가 없습니다\.$/, () => 'Cache-Control has no max-age directive.'],
  [/^요약 블록\(헤딩 문구·selector\)을 찾지 못했습니다\.$/, () => 'Summary block (heading text·selector) not found.'],
]

// 모델 제외 사유 — 'ko|en' 한 줄 1건 (2026-09-29·10-24 스냅샷 전수 591건 + 2026-11-04 신규 215건, 모델 v5c)
const REASON_LINES = `
1,5M:1 용어 정의|1,5M:1 term definition
1.5M:1 용어 정의+수치|1.5M:1 term definition+figure
1.5x·5.9x·Zero OD·27GM950B 스펙|1.5x·5.9x·Zero OD·27GM950B specs
125 PPI 용어 정의+수치|125 PPI term definition+figure
140 PPI 해상도 수치|140 PPI resolution figure
140 PPI 해상도 스펙|140 PPI resolution spec
15.6인치 OLED·13세대 Raptor Lake CPU 스펙|15.6-inch OLED·13th-gen Raptor Lake CPU specs
150,000:1 대역폭 수치|150,000:1 bandwidth figure
16” 2560x1600 144Hz 16:10 DCI-P3 스펙|16” 2560x1600 144Hz 16:10 DCI-P3 specs
18% 성능 수치|18% performance figure
18,000~48,000 Btu/h·30dB·17.7·9.45 휘도·출처|18,000~48,000 Btu/h·30dB·17.7·9.45 brightness·source
1ms MBR·1ms·100% 수치|1ms MBR·1ms·100% figures
218 PPI 해상도 스펙|218 PPI resolution spec
240Hz 스펙+기능 설명|240Hz spec+feature description
240Hz 스펙+의미|240Hz spec+meaning
24인치 용량 수치|24-inch capacity figure
48인치 4K OLED 스펙 수치|48-inch 4K OLED spec figures
4K 해상도·10,500루멘·10,000루멘·135도 수치|4K resolution·10,500 lumens·10,000 lumens·135° figures
5 TÜV Rheinland 인증 ID+인증서|5 TÜV Rheinland certification ID+certificate
5) 제품 불명|5) product unclear
52인치 5120×2160 해상도 스펙|52-inch 5120×2160 resolution spec
5K AI Upscaling 지원 스펙|5K AI Upscaling support spec
5K2K AI Upscaling 스펙+인증|5K2K AI Upscaling spec+certification
5K2K AI Upscaling 지원 스펙|5K2K AI Upscaling support spec
6.5/2.5/10인치 스펙|6.5/2.5/10-inch specs
6.5/2.5/6.5인치 스펙|6.5/2.5/6.5-inch specs
60Hz 권장 수치|60Hz recommended figure
68.58cm(27) QHD 용량 수치|68.58cm(27) QHD size figure
6채널·128단계 스펙 수치|6-channel·128-level spec figures
7개 항목·인증 각주|7 items·certification footnote
7번 적용 범위 각주|No. 7 scope footnote
99.9% BAF 인증 각주|99.9% BAF certification footnote
99.9% 인증 각주|99.9% certification footnote
99.9%·1,000,000 수치|99.9%·1,000,000 figures
99.9%·BAAF 인증·각주 면책|99.9%·BAAF certification·footnote disclaimer
99.999%·0.01µm·98.5%·99.9%·26dB 수치|99.999%·0.01µm·98.5%·99.9%·26dB figures
AHRI 프로모션|AHRI promotion
ARC 연결 안내|ARC connection guide
CDM 프로젝트 사실|CDM project fact
CSR 이벤트 설명|CSR event description
FAQ 질문|FAQ question
FAQ 질문 제목|FAQ question title
FAST 채널 출시 사실|FAST channel launch fact
GPU 스펙+기능 설명|GPU spec+feature description
GWP 용어와 수치|GWP term and figure
HDMI ARC 연결 범용 지시|generic HDMI ARC connection instruction
HDR 용어 정의|HDR term definition
Heizleistung·Energieklasse·모델별 용량·제품 유형|Heizleistung·Energieklasse·capacity by model·product type
IEC 규격 수치 설명|IEC standard figure explanation
IEC 규격 시험 원리 구체 설명|IEC standard test principle, specific explanation
IEC 시험 규격 구체 사실|IEC test standard, specific fact
IPX4 등급 정의+수치|IPX4 rating definition+figure
IPX4 등급 정의+제품 불특정|IPX4 rating definition+product unspecified
Intertek 검증 SCI 값 수치|Intertek-verified SCI value figure
Intertek 검증 SCI 값 정의|Intertek-verified SCI value definition
Intertek 검증 인증 각주|Intertek verification footnote
Key Features 블록|Key Features block
Key Features 블록 나열|Key Features block list
Key Features 블록 병합|merged Key Features block
Key Features 블록 병합 2.5kW(기능) 구조 설명|merged Key Features block 2.5kW (feature) structure description
Key Features 블록 병합 3.4kW(기능) 구조 설명|merged Key Features block 3.4kW (feature) structure description
Key Features 블록 병합 5.0kW(냉장) UBS50SET 스펙표|merged Key Features block 5.0kW (cooling) UBS50SET spec table
Key Features 블록 블록 병합|merged Key Features blocks
Key features 블록 구체 설명|Key features block, specific description
Key features 블록 나열|Key features block list
Key features 블록만|Key features block only
SC9S가 OLED C4 4K TV 최적 스펙|SC9S as optimal spec for OLED C4 4K TV
SCI 용어 정의|SCI term definition
TV·Mobile Hotspot·증상·메뉴명 명시|TV·Mobile Hotspot·symptom·menu name stated
Triple A* 인증 수치|Triple A* certification figure
UI 메시지|UI message
UI 알림|UI notification
UI 텍스트|UI text
UL 시선 보호 인증·webOS·모델 수치|UL eye-comfort certification·webOS·model figures
UL 시험 각주 표기|UL test footnote
UL 인증 각주|UL certification footnote
UL 인증 사실|UL certification fact
UL 인증·ECP 인증 각주|UL certification·ECP certification footnote
UL 인증·UL 규격 수치|UL certification·UL standard figures
UL 인증·제품 사실|UL certification·product fact
UL 인증·제품 유형 정의|UL certification·product type definition
UL 인증·제품 정의|UL certification·product definition
UL 인증·제품명·인증 요건 명시|UL certification·product name·certification requirements stated
UL 인증·출처 각주|UL certification·source footnote
WHO/NPCB 통계 수치|WHO/NPCB statistics
WM5500HVA 용량·세탁 수치·기능 설명|WM5500HVA capacity·washing figures·feature description
World's First* 인증 사실|World's First* certification fact
XELS 인증 각주|XELS certification footnote
webOS 범위·webOS 25 TV 조건 명시|webOS scope·webOS 25 TV conditions stated
가격 고지|price notice
가격 면책 고지|price disclaimer
가격·UI 텍스트|price·UI text
가격·내비 나열|price·navigation list
가격·내비·프로모션|price·navigation·promotion
가격·배너 나열|price·banner list
가격·배송 조건|price·shipping terms
가격·할인 안내|price·discount notice
가격표 나열|price table list
각주 고지|footnote notice
각주 면책 고지|footnote disclaimer
각주 요구사항|footnote requirement
각주 인증 각주|certification footnote
각주 적용|footnote applied
각주 조각|footnote fragment
각주 조건 각주|footnote on conditions
각주 질문|footnote question
각주(비교 조건) 주석|footnote (comparison conditions) note
결제 안내|payment notice
공휴일 조건 완결 진술|complete statement of holiday conditions
구매 조언|buying advice
구성품 고지|components notice
구체 동작 사실|specific operation fact
구체 부품 사실|specific component fact
구체 부품+디자인 설명|specific component+design description
구체 사실 없음|no specific facts
구체 사양 없음|no specific specs
구체 수치(대역) 설명|specific figures (bands) explanation
구체 수치(세별)|specific figures (by tax bracket)
구체 스펙 수치|specific spec figures
구체 스펙+ MIL-STD-810H 검증|specific specs+ MIL-STD-810H verification
구체 스펙+기능 설명|specific specs+feature description
구체 스펙+마케팅|specific specs+marketing
구체 연결 규격·출력 스펙|specific connection standard·output specs
구체 연결 수치|specific connection figures
구체 정보 없는 범용 지시|generic instruction without specifics
구체 정보 없는 주석|note without specifics
구체 정보 없는 주의 문구|caution text without specifics
구체 정보 없음|no specific information
구체 조건 없음|no specific conditions
구체성 부족|lacks specificity
금융 법적 고지|financial legal notice
기능 목록 뭉침|clumped feature list
기능 불명|feature unclear
기능 홍보 문구|feature promo text
기능명+구체 작동 설명|feature name+specific operation description
기능명+기능 설명 나열|feature name+feature description list
기능명과 모델명 조각|feature name and model name fragment
기능명과 사용 범위 정의|feature name and scope of use definition
기능명과 사용 조건 완결|feature name and complete usage conditions
기능명과 사용 조건 정의|feature name and usage conditions definition
기능명과 지원 국가 조건 완결|feature name and complete supported-country conditions
기능명과 지원 규격 정의|feature name and supported standard definition
기능명과 지원 모델 조건 완결|feature name and complete supported-model conditions
기능명과 지원 범위 정의|feature name and support scope definition
기능명과 하는 일 정의|feature name and what it does
기사 내용 안내|article content notice
기사 제목|article title
기사 톤 도입|article-style intro
기사 티저|article teaser
기사 헤더+제목|article header+title
기술 원리 구체 설명|specific explanation of technical principle
기술명+구체 동작 설명|technology name+specific operation description
기술명+구체 작동 설명|technology name+specific operation description
기술명+기능 설명|technology name+feature description
기술명+모호한 혜택|technology name+vague benefit
기술명+작동 구체 설명|technology name+specific operation description
기업 슬로건|corporate slogan
기업 홍보 문구|corporate promo text
기업 홍보 발언|corporate promo statement
기준 개념 설명|explanation of baseline concept
김치가 세계 각주 인기 요리|kimchi as a popular dish worldwide (footnote)
내비게이션 나열|navigation list
내비게이션 메뉴|navigation menu
내비게이션 메뉴 나열|navigation menu list
내비게이션 문구|navigation text
내비게이션 텍스트|navigation text
내비게이션 텍스트 나열|navigation text list
내용 없음|no content
네비 텍스트|navigation text
다음의 instructions 참조 안내|refer to the following instructions
대상 불명|subject unclear
대상 제품 없는 API 정의|API definition without target product
대상 제품 없는 일반적 용어|generic term without target product
대상 제품 없는 주의 문구|caution text without target product
대상 제품 없는 홍보 문구|promo text without target product
등록 인증 각주|registration certification footnote
등록된 상표 고지|registered trademark notice
디자인 홍보 문구|design promo text
리뷰어 Top 1 인증|reviewer Top 1 certification
링크 안내|link notice
마케팅 문구|marketing copy
마케팅 문구 나열|marketing copy list
마케팅 서술|marketing description
마케팅 수사|marketing rhetoric
마케팅 슬로건|marketing slogan
마케팅 주장|marketing claim
막연|vague
매뉴얼 참조 안내|refer to manual
면책 고지|disclaimer
면책 문구|disclaimer text
모델 불명|model unclear
모델 조건 각주|model conditions footnote
모델·360도 필터링·PM1.0 센서·Wi-Fi 지원 스펙|model·360° filtering·PM1.0 sensor·Wi-Fi support specs
모델·기능 비교 각주|model·feature comparison footnote
모델명 없음|no model name
모델명+32인치·4K·IPS 스펙·webOS·FHD Webcam|model name+32-inch·4K·IPS specs·webOS·FHD Webcam
모델명+용량 수치+기능 설명|model name+capacity figure+feature description
모델명+프로모션|model name+promotion
모델명·제품 무선 사실|model name·product wireless fact
모델명과 출시 사실|model name and launch fact
모델별 상이 일반 설명|generic note that it varies by model
모델별 상이 일반 안내|generic notice that it varies by model
모델별 약관 각주|terms footnote by model
모든 모델 공통 일반 안내|generic notice common to all models
모터가 휴용 전원 수치|motor standby power figure
모호|vague
모호한 IPLV 각주|vague IPLV footnote
모호한 결과 주장|vague outcome claim
모호한 기관 설명|vague organization description
모호한 기능 항목 나열|vague feature list
모호한 마케팅|vague marketing
모호한 마케팅 문구|vague marketing copy
모호한 마케팅 주장|vague marketing claim
모호한 문장|vague sentence
모호한 서술|vague description
모호한 일반 안내|vague general notice
모호한 일반론|vague generality
모호한 자찬|vague self-praise
모호한 장점 서술|vague description of advantages
모호한 주장|vague claim
모호한 평가|vague evaluation
모호한 평가 문구|vague evaluation text
모호한 혜택 문구|vague benefit text
모호한 혜택 주장|vague benefit claim
모호한 홍보 문구|vague promo text
문맥 의존|context-dependent
문의 안내|inquiry notice
문장 깨짐|broken sentence
문장 조각|sentence fragment
번호 1. 각주 고지|numbered (1.) footnote notice
번호 10. 각주 면책|numbered (10.) footnote disclaimer
번호 14) 검증 인증 각주|numbered (14)) verification footnote
번호·모델별 스펙 비교 각주|numbered spec comparison footnote by model
번호로 시작하는 각주 조각|footnote fragment starting with a number
번호로 시작하는 각주 표기|footnote starting with a number
범용 HDMI 연결 지시|generic HDMI connection instruction
범용 비교 점검 지시|generic comparison check instruction
범용 설치 지시|generic installation instruction
범용 점검 지시|generic check instruction
범용 지시|generic instruction
법적 고지|legal notice
법적 면책 고지|legal disclaimer
법적 보일러플레이트|legal boilerplate
별표 BAF 검증 인증 각주|asterisk BAF verification footnote
별표 각주|asterisk footnote
별표 각주(Dolby Vision IQ)|asterisk footnote (Dolby Vision IQ)
별표 각주(ISO22196)|asterisk footnote (ISO22196)
별표 각주(캘리브레이션)|asterisk footnote (calibration)
별표 시험 각주|asterisk test footnote
별표 인증 각주|asterisk certification footnote
별표 인증·기능 설명|asterisk certification·feature description
보도자료 발언|press release statement
보도자료 보일러플레이트|press release boilerplate
보도자료 인용|press release quote
보도자료 인용 발언|press release quoted statement
보도자료 헤더+보도자료|press release header+press release
보도자료 헤더+출처|press release header+source
보증 기간 수치|warranty period figure
보증 기간·Key features 블록|warranty period·Key features block
보증 기간·수치 명시|warranty period·figure stated
보증 문구|warranty text
보증 조건|warranty terms
보증 조건 고지|warranty terms notice
보험 약관|insurance terms
비교 기준 각주|comparison basis footnote
비교 기준 수치|comparison basis figure
비교 조각|comparison fragment
비교 조건 각주|comparison conditions footnote
비교 조건 없음|no comparison conditions
비교표 텍스트|comparison table text
비교표 텍스트 뭉침|clumped comparison table text
비교표 텍스트 조각|comparison table text fragment
사실 없음|no facts
사양 없음|no specs
사용 안내|usage guide
사용 안내문|usage instructions
사용 조건 각주|usage conditions footnote
사용 지시문|usage instruction
사용자 제목|user title
상담 안내|consultation notice
서비스 안내|service notice
서비스 약관|terms of service
서비스 없음|no service
서비스 홍보|service promotion
서비스명과 제공 국가 각주|service name and available-country footnote
서비스명과 제공 국가 조건 완결|service name and complete available-country conditions
서비스명과 제공 내용 정의|service name and offering definition
서비스명과 제공 서비스 내용 정의|service name and service offering definition
서술어 없음|no predicate
수상·출처 명시|award·source stated
수상·출처·기능 수치|award·source·feature figures
수상자+수치 나열|award winners+figure list
수상자·수치 명시|award winners·figures stated
수수료 고지|fee notice
수치 없는 마케팅 문구|marketing copy without figures
수치 없음|no figures
수치·출처 명시 사실|fact with figures·source stated
스펙 수치 나열|spec figure list
스펙 수치+기능 설명|spec figures+feature description
스펙 수치+보증 조건|spec figures+warranty terms
스펙 수치+인증 각주|spec figures+certification footnote
스펙 조각|spec fragment
스펙표 Key Features 블록|spec table Key Features block
스펙표 단어 나열|spec table word list
스펙표 뭉침|clumped spec table
스펙표 블록|spec table block
스펙표 조각|spec table fragment
스펙표 조각 나열|spec table fragment list
스펙표 텍스트|spec table text
스펙표 텍스트 뭉침|clumped spec table text
슬로건|slogan
시험 각주(캘리브레이션)|test footnote (calibration)
시험 결과 각주(캘리브레이션)|test result footnote (calibration)
시험 방법|test method
시험 방법 각주|test method footnote
시험 조건 각주|test conditions footnote
안내 문구|notice text
앱명 없음|no app name
앱명과 사용 범위 정의|app name and scope of use definition
여러 텍스트 뭉침|multiple texts clumped together
연구소 홍보 문구|research lab promo text
연도·수치 명시 사실|fact with year·figures stated
연도·수치·출처 명시|year·figures·source stated
연도·수치·출처 명시 수치 사실|figure fact with year·figures·source stated
연도·제품 유형·수치 명시 사실|fact with year·product type·figures stated
연도·출처·수치 명시|year·source·figures stated
연식·모델·에너지 등급 수치|model year·model·energy rating figures
영상 제목|video title
영화 순위 목록|movie ranking list
용량·거리·해상도 구체 스펙|capacity·distance·resolution specific specs
용량·기능 구체 사실|capacity·feature specific facts
용량·모델·구체 부품 수치|capacity·model·specific component figures
용량·모델명·용량 수치|capacity·model name·capacity figures
용량·세탁기 유형·용량 수치·용량 수치|capacity·washer type·capacity figures
이미지 참조|image reference
인물 서술|person description
인물 소개|person introduction
인물 소개+출처|person introduction+source
인물 수상·인증|person award·certification
인물 수상·출처|person award·source
인물 홍보|person promotion
인물 홍보 문구|person promo text
인물·작품 수상|person·work award
인용 발언|quoted statement
인용할 구체 사실 없음|no specific fact to cite
인증 각주|certification footnote
인증 각주(캘리브레이션)|certification footnote (calibration)
인증 기관·대상·인증 내용 명시|certifier·subject·certification details stated
인증 기준·기능 구체 사실|certification criteria·feature specific facts
인증 기준·대상·결과|certification criteria·subject·result
인증 사실(캘리브레이션)|certification fact (calibration)
인증 세계최초·속도 제2위|certified world-first·2nd in speed
인증 인증 각주|certification footnote
인증+기능 나열|certification+feature list
인증·기능 구체 사실|certification·feature specific facts
인증·기능 구체 스펙|certification·feature specific specs
인증·기능 나열|certification·feature list
인증·모드·센서·기능 구체 사실|certification·mode·sensor·feature specific facts
인증·수치 명시 사실|fact with certification·figures stated
인증·수치 사실|certification·figure fact
인증·스펙·모델 디자인 구체 사실|certification·specs·model design specific facts
인증·출처 명시|certification·source stated
인증·출처·모델 명시|certification·source·model stated
인증번호 조각|certification number fragment
일반 논평|general commentary
일반 도입 문장|generic intro sentence
일반 도입문|generic intro
일반 서술|generic description
일반 안내|general notice
일반론|generality
일반적 관리 서술|generic care description
일반적 구매 조언|generic buying advice
일반적 권고|generic recommendation
일반적 도입 문장|generic intro sentence
일반적 마케팅 문구|generic marketing copy
일반적 마케팅 주장|generic marketing claim
일반적 서술|generic description
일반적 주장|generic claim
잘린 문장 조각|truncated sentence fragment
잘린 조각|truncated fragment
잘림|truncated
정보 없음|no information
정의문 없음|no definition sentence
제1공식 인증 사실|first official certification fact
제2단계 인증 각주|stage-2 certification footnote
제3자 검증|third-party verification
제3자 검증 수치|third-party verified figure
제목|title
제목 나열|title list
제목 없음|no title
제목 혼재|mixed with title
제목+UI 텍스트|title+UI text
제목+기능 홍보|title+feature promotion
제목+마케팅|title+marketing
제목+마케팅 문구|title+marketing copy
제목+모델 설명|title+model description
제목+모호한 마케팅|title+vague marketing
제목+서비스 설명|title+service description
제목+스펙표 뭉침|title+clumped spec table
제목+일반 도입|title+generic intro
제목+일반 서술|title+generic description
제목+일반론|title+generality
제목+주어 없는 특징 나열|title+feature list without subject
제목+주요 기능 블록|title+key features block
제목+주요 특징 블록|title+key characteristics block
제목+질문|title+question
제목+홍보 문구|title+promo text
제목+회사 홍보|title+company promotion
제목·FAQ 질문|title·FAQ question
제목·Tính năng chính 블록 나열|title·Tính năng chính block list
제목·기능 나열 블록|title·feature list block
제목·날짜·버튼 텍스트|title·date·button text
제목·단계 번호 조각|title·step number fragment
제목·메뉴 경로·설정값 명시|title·menu path·settings stated
제목·모델 목록 나열|title·model list
제목·모델명·UI 텍스트|title·model name·UI text
제목·모델명·내비 나열|title·model name·navigation list
제목·모델명·배너|title·model name·banner
제목·모델명·스펙표 블록|title·model name·spec table block
제목·모델명·홈 배너 홍보|title·model name·home banner promotion
제목·모호한 헤더|title·vague header
제목·모호한 홍보 문구|title·vague promo text
제목·목록 조각 혼입|title·list fragments mixed in
제목·목록 조각 혼재|title·mixed list fragments
제목·보증 조각 혼재|title·mixed warranty fragments
제목·비교 항목 텍스트|title·comparison item text
제목·스펙표 뭉침|title·clumped spec table
제목·스펙표 블록 나열|title·spec table block list
제목·일반 도구 목록|title·generic tool list
제목형 글|title-style text
제목형 나열|title-style list
제목형 도입문|title-style intro
제목형 마케팅|title-style marketing
제목형 메뉴|title-style menu
제목형 모델 문구|title-style model text
제목형 모델 번호|title-style model number
제목형 문구|title-style text
제목형 문장|title-style sentence
제목형 범용 지시|title-style generic instruction
제목형 범용 청소 지시|title-style generic cleaning instruction
제목형 안내|title-style notice
제목형 제목|title-style heading
제목형 주의 문구|title-style caution text
제목형 증상 문구|title-style symptom text
제목형 질문|title-style question
제발|plea text
제외된 홍보 문구|excluded promo text
제일공장 수치·지시어·증상 제목|factory figures·demonstrative·symptom title
제품 구성 구체 사실|product composition specific fact
제품 기능 나열 블록|product feature list block
제품 불명|product unclear
제품 사실 아님|not a product fact
제품 사실 없음|no product facts
제품 스펙표 뭉침|clumped product spec table
제품 없는 단계 설명|step description without product
제품 없는 단계 조각|step fragment without product
제품 없는 색 목록 조각|color list fragment without product
제품 없는 일반 설명|generic description without product
제품 없는 일반 안내|generic notice without product
제품 없는 일반 확인|generic check without product
제품 없는 주석|note without product
제품 없는 주석 조각|note fragment without product
제품 없는 주의 문구|caution text without product
제품 없는 필터 청소 단계|filter cleaning step without product
제품 없는 홍보 문구|promo text without product
제품 없음|no product
제품 없음 판정|judged as no product
제품 유닛 수치|product unit figure
제품 유형 구체 목록|specific product type list
제품 유형 정의|product type definition
제품 유형 정의+수치|product type definition+figure
제품 정의|product definition
제품 정의+구체 수치|product definition+specific figure
제품 정의문|product definition sentence
제품 카테고리 조각|product category fragment
제품 카테고리+Key features 블록|product category+Key features block
제품 크기 구체 사실|product size specific fact
제품 홍보|product promotion
제품 홍보 문구|product promo text
제품+기술 설명|product+technology description
제품·기능 구체 사실|product·feature specific facts
제품·기능명 없음|no product·feature name
제품·기능명과 사용 조건 완결|product·feature name and complete usage conditions
제품·기능명과 하는 일 정의|product·feature name and what it does
제품·모델 범위·수치 없음|no product·model scope·figures
제품·모델 불명|product·model unclear
제품·모델 불명 사양|specs with unclear product·model
제품·모델·기능 설명|product·model·feature description
제품·법적 고지|product·legal notice
제품군 구체 스펙 나열|product line specific spec list
제품군 없음|no product line
제품군 정의|product line definition
제품군·연도·회사·수치 사실|product line·year·company·figure facts
제품명 없음|no product name
제품명+구체 구조 설명|product name+specific structure description
제품명+기능표 블록|product name+feature table block
제품명+모델+기능 구체 설명|product name+model+feature specific description
제품명+스펙표|product name+spec table
제품명·모델명·스펙표·메뉴 나열|product name·model name·spec table·menu list
제품명과 주어 불명|product name and subject unclear
제품명과 지원 설정 목록 나열|product name and supported settings list
주사율·모델명·속도·구체 지원 범위|refresh rate·model name·speed·specific support scope
주석 조각|note fragment
주석 텍스트 뭉침|clumped note text
주어 it|subject 'it'
주어 its|subject 'its'
주어 this|subject 'this'
주어 불명|subject unclear
주어 없는 요구사항 조각|requirement fragment without subject
주어 없는 주석 목록 조각|note list fragment without subject
주어 의존|subject-dependent
증상 불명|symptom unclear
증상·동작 설명(트러블슈팅)|symptom·operation description (troubleshooting)
증상의 원인 설명(트러블슈팅)|explanation of symptom cause (troubleshooting)
지시어 'This Scene' 사용 범위|demonstrative 'This Scene' scope of use
지시어 '그것' 앞 문장 의존|demonstrative 'it' depends on previous sentence
지시어 '이 case'|demonstrative 'this case'
지시어 '이 regard' 앞 문장 의존|demonstrative 'this regard' depends on previous sentence
지시어 '이 기능' 없음|demonstrative 'this feature' without referent
지시어 '이러한 이점' 없음|demonstrative 'these benefits' without referent
지시어 '이러한 일' 시작|starts with demonstrative 'such things'
지시어 시작|starts with a demonstrative
지시어 없는 범용 설명|generic description without referent
지시어 없는 비밀번호 조각|password fragment without referent
지시어 없는 증상 문구|symptom text without referent
지원 규격 구체 설명|supported standard specific description
지원 규격 명시|supported standard stated
지원 규격 지원 규격 사실|supported standard fact
지원 기능 목록|supported feature list
지원 메뉴 나열|support menu list
지원 안내|support notice
질문|question
질문형 문장|question-style sentence
질문형 제목|question-style title
참조 안내|reference notice
출처 없는 평가 문장|evaluation sentence without source
출처(EPA)·수치(캘리브레이션) 명시|source (EPA)·figures (calibration) stated
출처(캘리브레이션) 수상|source (calibration) award
출처(캘리브레이션) 수치|source (calibration) figure
출처(캘리브레이션) 포함 수치|figure with source (calibration)
출처·수치 명시 사실|fact with source·figures stated
출처·연도·순위 수치|source·year·ranking figures
출처·출력 스펙·채널 수 사실|source·output specs·channel count facts
출처만|source only
치수 구체 수치|specific dimension figures
크기·용량 구체 스펙|size·capacity specific specs
투자 사실|investment fact
페이지 소개|page introduction
페이지 제목|page title
프로모션|promotion
프로모션 대상 각주|promotion eligibility footnote
프로모션 문구|promo text
프로모션 배너|promo banner
프로모션 안내|promotion notice
프로모션 약관|promotion terms
프로모션 조각|promotion fragment
프로모션 조건|promotion conditions
프로모션/내비 나열|promotion/navigation list
프로모션/질문|promotion/question
프로세서명+역할 구체 설명|processor name+specific role description
필터 유형 없음|no filter type
할인 조건|discount conditions
할인 프로모션|discount promotion
행동 유도|call to action
행동 유도 문구|call-to-action text
행사 보도|event coverage
행사 보도 리드|event coverage lead
행사 안내|event notice
행사 홍보|event promotion
행사 홍보 문구|event promo text
행사 홍보 발언|event promo statement
헤드라인+마케팅|headline+marketing
헤드라인+모호한 문구|headline+vague text
헤드라인+질문|headline+question
헤드라인+질문형 문장|headline+question-style sentence
헤드라인+홍보|headline+promotion
혜택 문구|benefit text
혜택 주장|benefit claim
홈 배너 나열|home banner list
홍보|promotion
홍보 문구|promo text
회사 계획 안내|company plan notice
회사 보도자료|company press release
회사 보일러플레이트|company boilerplate
회사 소개 보일러플레이트|company profile boilerplate
회사 연혁 보일러플레이트|company history boilerplate
회사 의견|company opinion
회사 전략 설명|company strategy description
회사 홍보 문구|company promo text
회사 홍보 발언|company promo statement
회사 홍보 보일러플레이트|company promo boilerplate
14인치·지시어·구체 사실|14-inch·demonstrative·specific fact
27GM950B·5.9배·0OD|27GM950B·5.9x·0OD
3시간 스펙|3-hour spec
BAF 인증 기준|BAF certification criteria
CPU 최대 4,8GHz 스펙|CPU up to 4,8GHz spec
HDMI ARC 사양·목적 명시|HDMI ARC specs·purpose stated
IEC 표준 기준|IEC standard criteria
Intertek 검증 결과|Intertek verification result
LG CineBeam가 무엇인지 설명|explains what LG CineBeam is
PPI 수치+의미|PPI figure+meaning
UI 편의성 서술|UI convenience description
WELS 표기 정의|WELS label definition
검증 사실 아님|not a verified fact
결과 없음|no result
관리 기간 안내|care period notice
관리 절차 안내|care procedure notice
관리 조언|care advice
관리 지시문|care instruction
구매 조건 안내|purchase conditions notice
구성품 목록|package contents list
구인 조건|job requirements
구체 스펙+ErP 등급|specific spec+ErP rating
구체 스펙+제품이 무엇인지 설명|specific spec+explains what the product is
구체 요소 없음|no specific element
구체 케어 목록|specific care list
구체 항목 없는 마케팅 문구|marketing text without specific items
구체 항목 없음|no specific items
구체적 기술 사실|specific technical fact
금융 법적 문구|financing legal text
금융 약관|financing terms
기술명+효과 설명|technology name+effect description
기업 소개 보일러플레이트|corporate intro boilerplate
기업 소개 서술|corporate intro description
기업 전략 서술|corporate strategy description
내비 텍스트|navigation text
내비+CTA|navigation+CTA
내비+UI|navigation+UI
내비+UI 텍스트|navigation+UI text
내비+네비|navigation+navigation
내비+마케팅|navigation+marketing
내비+마케팅 나열|navigation+marketing list
내비+보증 기간|navigation+warranty period
내비+슬로건|navigation+slogan
내비+안내|navigation+notice
내비+일반 도입문|navigation+generic intro
내비+일반 문구|navigation+generic text
내비+일반 소개|navigation+generic intro
내비+일반적 도입문|navigation+generic intro
내비+질문|navigation+question
내비+프로모션|navigation+promotion
내비/UI 텍스트|navigation/UI text
네비+날짜|navigation+date
네비+네비 UI|navigation+navigation UI
네비+네비 연결 안내|navigation+navigation connection notice
네비+네비 지원 안내|navigation+navigation support notice
네비+네비 텍스트|navigation+navigation text
네비+네비 혜택|navigation+navigation benefit
네비+네비+네비|navigation+navigation+navigation
네비+네비네비|navigation+navigation
네비+마케팅|navigation+marketing
네비+마케팅 나열|navigation+marketing list
네비+보도자료|navigation+press release
네비+서비스 소개|navigation+service intro
네비+질문|navigation+question
네비+홍보|navigation+promo
네비+회사 소개|navigation+company intro
뉴스레터 UI 텍스트|newsletter UI text
다음의 instructions 참조|refers to the following instructions
마케팅 소개|marketing intro
마케팅 스펙+일반 소개|marketing spec+generic intro
막연한 기술 설명|vague technology description
막연한 마케팅 문구|vague marketing text
막연한 혜택 서술|vague benefit description
막연한 혜택 주장|vague benefit claim
모델 수·용량 구체 사실|model count·capacity specific fact
모델명+에너지 등급|model name+energy rating
모델별 지원 기준 각주|per-model support criteria footnote
모델별 지원 범위 구체 사실|per-model support scope specific fact
모델이 무엇인지 설명|explains what the model is
모드별 구체 수치|specific figures per mode
버튼·목적 없는 기능|button·feature without purpose
범용 점검 절차|generic check procedure
법적 기록 서술|legal record description
법적 상표 고지|legal trademark notice
법적 상표 문구|legal trademark text
법적 안내문|legal notice
법적 용어 설명|legal term description
법적 인용문|legal quotation
보도자료 인용문|press release quotation
보증 기간|warranty period
보증 기간 홍보|warranty period promo
보증 기간·서비스 조건|warranty period·service conditions
비교 조건 불특정|comparison conditions unspecified
서비스명 없는 일반 안내|generic notice without service name
설치 안내|installation notice
설치 안내문|installation notice
설치 조건 안내|installation conditions notice
설치 지시문|installation instruction
섹션 제목 조각|section title fragment
수치 기반 연구 방법|figure-based research method
수치 기준 각주|figure criteria footnote
수치 포함 스펙|spec with figures
스펙 요약 블록|spec summary block
스펙 표 덤프|spec table dump
스펙 표 조각|spec table fragment
스펙+마케팅 요약|spec+marketing summary
스펙+제품이 무엇인지 설명|spec+explains what the product is
스펙표 덤프|spec table dump
스펙표+네비|spec table+navigation
스펙표+네비 혼재|spec table+navigation mixed
시험 방법 설명|test method description
시험 방법·대상·결과 명시|test method·target·result stated
시험 조건·결과 수치|test conditions·result figures
시험 조건·모델·결과|test conditions·model·result
시험 조건만|test conditions only
시험기관 명시 수치|figure with testing body stated
시험기관·표준·조건 명시|testing body·standard·conditions stated
연결 수·제품명 구체 사실|connection count·product name specific fact
연락처 안내|contact notice
연락처·내비·질문|contact·navigation·question
오류 메시지|error message
용어 정의+수치|term definition+figure
용어 정의+용량 구체|term definition+specific capacity
용어 정의+용량 구체 사실|term definition+capacity specific fact
용어 정의+용량 수치|term definition+capacity figure
인물 인용문|person quotation
인사 문구|greeting text
인사 보일러플레이트|greeting boilerplate
인용문|quotation
인용문 발언|quoted statement
인용문+CEO 발언|quotation+CEO statement
인증 기관 검증|verified by certification body
인증 기관 검증 사실|fact verified by certification body
인증 기관 명시|certification body stated
인증 기관 명시 사실|fact with certification body stated
인증 기준 명시|certification criteria stated
인증·모드·센서·스마트 LED·목적 명시|certification·mode·sensor·smart LED·purpose stated
인증·센서·스마트 LED·노브·디자인 요약|certification·sensor·smart LED·knob·design summary
인증기관 검증 사실|fact verified by certification body
인증기관 명시|certification body stated
인증기관 명시 사실|fact with certification body stated
인증명+표준 명시|certification name+standard stated
인증번호+면책 문구|certification number+disclaimer text
인증번호·URL|certification number·URL
인텔 프로세서+7단계 MIL-STD-810H|Intel processor+7-step MIL-STD-810H
일반적 개념 설명|generic concept description
일반적 관리 조언|generic care advice
일반적 기술 설명|generic technology description
일반적 기준 설명|generic criteria description
일반적 마무리 문구|generic closing text
일반적 마무리 문장|generic closing sentence
일반적 시장 서술|generic market description
일반적 치료 주장|generic treatment claim
제목+일반 사용 안내|title+generic usage notice
제품 무관|unrelated to product
제품 소개 서술|product intro description
제품 없는 범용 설정 지시|generic settings instruction without product
제품 원료 원리 설명|product ingredient principle description
제품군 소개|product category intro
제품명 없는 단계|step without product name
제품명 없는 메뉴 조작|menu operation without product name
제품명 없는 버튼 조작|button operation without product name
제품명 없는 범용 조치|generic action without product name
제품명 없는 조작|operation without product name
제품명 없음('el' 앞)|no product name (before 'el')
제품명+구체 부품 설명|product name+specific part description
제품명+구체 온도 스펙|product name+specific temperature spec
제품명+재료 원리+수치|product name+material principle+figure
제품명+제제품 원료|product name+product ingredient
제품명+제품이 무엇인지 설명|product name+explains what the product is
조리 지시문|cooking instruction
증상 제목+LG 고유 정보 없음|symptom title+no LG-specific information
증상 제목+범용 연결 안내|symptom title+generic connection notice
증상 제목+범용 점검 절차|symptom title+generic check procedure
지시문|instruction
청소 지시문|cleaning instruction
출력 용량·음향 스펙·SEER·HSPF 스펙|output capacity·audio spec·SEER·HSPF spec
출력·효과·구체 스펙|output·effect·specific spec
출시 기간 명시 사실|fact with release period stated
출시 모델 정의|released model definition
출처 명시된 상표 정의|trademark definition with source stated
출처 없는 설문 조사 결과|survey result without source
출처 없는 수상 프로모|award promo without source
출처 없는 순위 조각|ranking fragment without source
출처 없는 인물 소개|person intro without source
출처 없는 전략 서술|strategy description without source
출처 없는 책 소개|book intro without source
출처 없는 회사 소개|company intro without source
출처 있는 기록 사실|sourced record fact
출처 있는 수상|sourced award
출처 있는 수상 실적|sourced award record
출처 있는 수치|sourced figure
출처 있는 수치 사실|sourced figure fact
출처 있는 순위 수치|sourced ranking figure
출처 있는 스펙|sourced spec
출처 있는 평가 항목|sourced evaluation item
측정 기준 각주|measurement criteria footnote
치수 구체 스펙|specific dimension spec
카드명 없음|no card name
파일명 조각|file name fragment
페이지 내용 안내|page content notice
페이지 내용 안내 리드문|page content lead sentence
표준 시험 조건 각주|standard test conditions footnote
프로 경기 규격|pro match standard
프로모션 기한|promotion deadline
프로세서·스펙 명시|processor·spec stated
프로세서명+5.6배 수치|processor name+5.6x figure
프로팀만|pro teams only
필터명과 구매 조건|filter name and purchase conditions
할부 조건|installment conditions
행사 소개|event intro
행사 소개·보도자료|event intro·press release
행사 안내문|event notice
헤드라인+날짜|headline+date
회사 정책 서술|company policy description
`
export const REASON_EN = Object.fromEntries(
  REASON_LINES.split('\n').filter(l => l.includes('|')).map(l => {
    const i = l.lastIndexOf('|')
    return [l.slice(0, i), l.slice(i + 1)]
  })
)

// 사전에 없는 새 제외 사유 — 단어 단위 근사 번역 (긴 단어 먼저 치환)
const WORD_EN = {
  일반론: 'generality', 보일러플레이트: 'boilerplate', 내비게이션: 'navigation', 프로모션: 'promotion',
  캘리브레이션: 'calibration', 트러블슈팅: 'troubleshooting', 보도자료: 'press release', 스펙표: 'spec table',
  비교표: 'comparison table', 정의문: 'definition sentence', 기능명: 'feature name', 제품명: 'product name',
  모델명: 'model name', 서비스명: 'service name', 기술명: 'technology name', 질문형: 'question-style', 제목형: 'title-style',
  모호한: 'vague', 일반적: 'generic', 구체: 'specific', 마케팅: 'marketing', 홍보: 'promo', 문구: 'text',
  문장: 'sentence', 도입: 'intro', 도입문: 'intro', 서술: 'description', 설명: 'description', 주장: 'claim',
  제목: 'title', 질문: 'question', 각주: 'footnote', 주석: 'note', 고지: 'notice', 면책: 'disclaimer',
  안내: 'notice', 지시: 'instruction', 범용: 'generic', 제품: 'product', 모델: 'model', 기능: 'feature',
  인증: 'certification', 수치: 'figure', 스펙: 'spec', 사양: 'specs', 출처: 'source', 연도: 'year',
  조각: 'fragment', 뭉침: 'clumped', 나열: 'list', 목록: 'list', 블록: 'block', 텍스트: 'text',
  없는: 'without', 없음: 'none', 불명: 'unclear', 사실: 'fact', 정의: 'definition', 조건: 'conditions',
  가격: 'price', 할인: 'discount', 보증: 'warranty', 약관: 'terms', 법적: 'legal', 회사: 'company',
  기업: 'corporate', 인물: 'person', 수상: 'award', 행사: 'event', 기사: 'article', 헤드라인: 'headline',
  주어: 'subject', 지시어: 'demonstrative', 의존: 'dependent', 대상: 'target', 증상: 'symptom', 사용: 'usage',
  지원: 'support', 규격: 'standard', 시험: 'test', 검증: 'verification', 용량: 'capacity', 해상도: 'resolution',
  배너: 'banner', 슬로건: 'slogan', 혜택: 'benefit', 평가: 'evaluation', 잘린: 'truncated', 잘림: 'truncated',
  명시: 'stated', 완결: 'complete', 혼재: 'mixed', 메뉴: 'menu', 페이지: 'page', 영상: 'video', 이미지: 'image',
}
const WORD_KEYS = Object.keys(WORD_EN).sort((a, b) => b.length - a.length)
function wordTranslate(s) {
  let out = s
  for (const k of WORD_KEYS) if (out.includes(k)) out = out.split(k).join(WORD_EN[k])
  return out
}
function reasonEn(r) {
  const t = r.trim()
  if (REASON_EN[t]) return REASON_EN[t]
  // 복합 사유 (a+b · a·b) — 조각별 사전 → 단어 치환
  return t.split(/([+·/])/).map(seg => /^[+·/]$/.test(seg) ? seg : (REASON_EN[seg.trim()] || wordTranslate(seg))).join('')
}

const TAIL = /\s*\(모델 제외 사유: (.*)\)\s*$/

// 실패 사유 1건 → 영문
export function translateHint(hint) {
  if (!hint || !HANGUL.test(hint)) return hint
  let base = hint, tail = ''
  const m = hint.match(TAIL)
  if (m) {
    base = hint.slice(0, m.index)
    tail = ' (excluded by model: ' + m[1].split(', ').map(reasonEn).join(', ') + ')'
  }
  for (const [re, fn] of HINT_RULES) {
    const mm = base.match(re)
    if (mm) return fn(mm) + tail
  }
  return base + tail
}

// checks JSON 문서 → 지정 언어. lang !== 'en' 이면 원본 그대로 (새 객체 X).
export function localizeChecksDoc(doc, lang) {
  if (lang !== 'en' || !doc) return doc
  const pageTypes = {}
  for (const [id, label] of Object.entries(doc.pageTypes || {})) pageTypes[id] = PT_LABEL[id] ? pick(PT_LABEL[id], 'en') : label
  const checks = {}
  for (const [id, c] of Object.entries(doc.checks || {})) checks[id] = CHECK_LABEL_EN[id] ? { ...c, label: CHECK_LABEL_EN[id] } : c
  return { ...doc, pageTypes, checks, hints: (doc.hints || []).map(translateHint) }
}

// 번역 후에도 한글이 남은 hint (사전 보강 대상)
export function untranslatedHints(hints) {
  return [...new Set(hints)].map(translateHint).filter(h => h && HANGUL.test(h))
}
