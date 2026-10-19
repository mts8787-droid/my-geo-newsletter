// ─── 이메일 HTML 경량화 (발송·복사 직전) ─────────────────────────────────────
// 줄바꿈+들여쓰기를 공백 1개로 치환 — HTML 은 연속 공백을 1개로 collapse 하므로 렌더링 불변.
// 주석은 유지한다 (Outlook 조건부 주석 <!--[if mso]> ... <![endif]--> 보존 필수).
// <pre> 미사용 전제 — emailTemplate 은 table-layout 만 사용.
export function minifyEmailHtml(html) {
  return String(html || '').replace(/\s*\n\s*/g, ' ')
}
