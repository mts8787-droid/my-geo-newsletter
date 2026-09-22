// EN meta 병합 — 순수 모듈 (React 의존 없음).
// Sidebar.jsx 에서 분리 (2026-08-30): 서버 통합 게시 엔진(lib/republish.mjs)이
// Node 에서 mergeEnMeta 를 써야 하는데 Sidebar.jsx 는 .jsx(React import)라 불가.
// Sidebar.jsx 는 본 모듈을 re-export 해 기존 import 경로 호환 유지.

// period·reportNo·dateLine 은 번역이 아니라 데이터 파생값 — 목록에서 제외해 mergeEnMeta 가
// 항상 KO 값을 쓰게 한다 (EN 헤더 Vol·발행월이 안 따라오던 문제, 2026-09-18)
export const EN_TEXT_FIELDS = ['title', 'noticeText', 'totalInsight', 'reportType', 'productInsight', 'productHowToRead', 'citationInsight', 'citationHowToRead', 'dotcomInsight', 'dotcomHowToRead', 'todoText', 'todoNotice', 'kpiLogicText', 'cntyInsight', 'cntyHowToRead', 'citDomainInsight', 'citDomainHowToRead', 'citCntyInsight', 'citCntyHowToRead', 'citPrdInsight', 'citPrdHowToRead', 'team', 'monthlyReportBody', 'highlightInsight', 'bumpInsight', 'hlChapterTitle', 'hlChapterTitle2', 'hlWeeklyTitle', 'hlModelTitle', 'hlBumpTitle', 'semiHighlightText']
// V2 인사이트 — 편집된 필드만 번역 대상 (미편집이면 템플릿의 EN 기본 문구가 자동 렌더)
const V2_TRANSLATE_FIELDS = ['v2ExIntro2', 'v2Ex1T2', 'v2Ex1B2', 'v2Ex2T2', 'v2Ex2B2', 'v2Ex3T2', 'v2Ex3B2', 'v2T11Caption', 'v2CaseCaption', 'v2C1Title', 'v2C1Keep', 'v2C1Bko', 'v2C1Tko', 'v2C2Title4', 'v2C2Keep2', 'v2C2Bko4', 'v2C2Tko4', 'v2VisTblHtml8', 'todoV2Title', 'todoV2NoticeLabel', 'todoV2NoticeHtml', 'todoV2PerfTitle', 'todoV2ChBu', 'todoV2NewBu', 'todoV2FixBu', 'todoV2TechBu', 'todoV2NextSecTitle', 'todoV2NextTitle', 'todoV2NextHtml3', 'todoV2NextHtml4']
EN_TEXT_FIELDS.push(...V2_TRANSLATE_FIELDS)
// Readability Highlight (2026-08 신설) — 이 목록에 없으면 mergeEnMeta 가 undefined 로 덮어
// 템플릿의 한국어 기본 문안이 그대로 EN 본문에 나온다 (영문본 미번역 증상).
const RD_TRANSLATE_FIELDS = ['rd_h1', 'rd_intro', 'rd_introNotes', 'rd_summary', 'rd_areaIntro', 'rd_h2',
  'rd_d1Title', 'rd_d1', 'rd_d1Notes', 'rd_d2Title', 'rd_d2', 'rd_d3Title', 'rd_d3', 'rd_d4Title', 'rd_d4']
EN_TEXT_FIELDS.push(...RD_TRANSLATE_FIELDS)
// 8월 Executive Summary V3 — 편집 시 EN 번역 대상
// 7월호 개편 (2026-08-31): 인트로 + 3항목, 필드 버전업 (v3Ex*T2/B2). 구 필드도 호환 유지.
const V3_TRANSLATE_FIELDS = ['v3Ex1T', 'v3Ex1B', 'v3Ex2T', 'v3Ex2B',
  'v3ExIntro', 'v3Ex1T2', 'v3Ex1B2', 'v3Ex2T2', 'v3Ex2B2', 'v3Ex3T2', 'v3Ex3B2',
  // 9월호 신설 블록 (2026-09-19 커밋 92872dd·efc90a1) — 목록 누락 시 EN 이 KO 값을 그대로 추종해
  // "한쪽 수정하면 다른 쪽도 바뀜" 증상 (사용자 보고 2026-09-22: LLM 차트 아래 본문)
  'v3Ex1B2b', 'v3Ex1B2c',                    // 차트 아래 · 답변예시 아래 본문 슬롯
  'v3ChartT1', 'v3ChartT2',                  // LLM 차트 패널 제목
  'v3C1Title', 'v3C1Prompt',                 // 답변예시 카드 제목·프롬프트
  'v3C1Ben', 'v3C1Bko', 'v3C1Ten', 'v3C1Tko', // 답변예시 인용 (7월·8월 원문/해석)
  'v3Ex2Note']                               // 항목2 각주
EN_TEXT_FIELDS.push(...V3_TRANSLATE_FIELDS)
// 제품별 Visibility 하단 미출시 각주 (2026-09-22) — 자동 생성 기본값 + 언어별 편집
EN_TEXT_FIELDS.push('productUlFootnote')

// EN meta = KO 구조(토글·레이아웃·수치) 그대로 + EN 번역 텍스트만 오버레이.
// metaEn 을 통째로 쓰면 예전 번역 시점의 구조 스냅샷이 남아 KO 변경(신규 섹션·개정 문구)이
// EN 에 반영되지 않음 → 미리보기·게시·발송 모두 이 병합을 사용해 EN 이 KO 를 자동 추종.
// rd_* 는 하이라이트 표/그래프 라벨까지 동적으로 늘어나므로 정적 목록으로 못 따라간다.
// prefix 로 일괄 오버레이하되 문자열만 — rd_schemaCompare 같은 구조 데이터는 KO 것을 그대로 쓴다.
function isTranslatableRdKey(k, v) {
  return k.startsWith('rd_') && (typeof v === 'string' || v == null)
}

// 해당 key 가 "EN 번역 대상 텍스트" 인지 판정.
// 텍스트가 아닌 것(토글·색상·폰트크기·카드버전 등 구조/표시 설정)은 KO 를 단일 소스로 쓴다 —
// EN 미리보기에서 토글을 바꿔도 metaEn 에 저장되면 mergeEnMeta 가 무시해 반영이 안 됐다
// (사용자 보고 2026-08-28: "인사이트 보기 on/off 가 영문에서 작동 안 함").
export function isEnTextField(key, value) {
  return EN_TEXT_FIELDS.includes(key) || isTranslatableRdKey(key, value)
}

export function mergeEnMeta(metaKo, metaEn) {
  const m = { ...metaKo }
  EN_TEXT_FIELDS.forEach(k => { m[k] = metaEn?.[k] })
  // 동적 rd_* 필드 (하이라이트 표·그래프 라벨) 도 EN 오버레이 대상
  new Set([...Object.keys(metaKo || {}), ...Object.keys(metaEn || {})])
    .forEach(k => { if (isTranslatableRdKey(k, metaKo?.[k])) m[k] = metaEn?.[k] })
  return m
}
