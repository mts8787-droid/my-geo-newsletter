#!/usr/bin/env bash
# PostToolUse hook — 뉴스레터 / 이메일 호환 HTML 의 NEVER Rule 자동 차단
# - 대상별 검사 항목 분기:
#   A) emailTemplate.js / monthlyTemplate.js / weeklyTemplate.js (게시본 본문):
#      - containerWidth = N 에서 N > 940 (우측 짤림)
#      - display:flex / display:grid (Outlook 미지원)
#      ※ overflow-x:hidden 은 이메일 srcdoc 콘텐츠 자체 (의도된 패턴) — 검사 X
#   B) src/newsletter/*.{js,jsx} (어드민 React — iframe srcdoc 부모):
#      - overflow-x:hidden / body min-width (srcdoc 안 콘텐츠 클립)
# - 실패 시 exit 2 + stderr → Claude 재시도

INPUT=$(cat)
FILE_PATH=$(printf '%s' "$INPUT" | node -e '
let s = "";
process.stdin.on("data", c => s += c);
process.stdin.on("end", () => {
  try { process.stdout.write(JSON.parse(s).tool_input?.file_path || "") } catch {}
});
' 2>/dev/null)

[ -z "$FILE_PATH" ] && exit 0
[ ! -f "$FILE_PATH" ] && exit 0

# 대상 파일 분류
KIND=""
case "$FILE_PATH" in
  */src/emailTemplate.js | \
  */src/monthly-report/monthlyTemplate.js | \
  */src/weekly-report/weeklyTemplate.js)
    KIND="body"
    ;;
  */src/newsletter/*.jsx | \
  */src/newsletter/*.js)
    KIND="admin"
    ;;
  *)
    exit 0
    ;;
esac

ISSUES=""

if [ "$KIND" = "body" ]; then
  # 1) containerWidth > 940 — 할당 우변의 숫자만 추출 (라인 번호 무시)
  #    예: `containerWidth = 940` / `containerWidth: 1000` / `containerWidth = 1200,`
  while IFS= read -r line; do
    [ -z "$line" ] && continue
    # 라인에서 "containerWidth" 다음의 첫 숫자만 추출
    N=$(echo "$line" | sed -nE 's/.*containerWidth[^0-9]*([0-9]+).*/\1/p' | head -1)
    if [ -n "$N" ] && [ "$N" -gt 940 ] 2>/dev/null; then
      ISSUES="${ISSUES}- containerWidth=${N} > 940 (우측 짤림):\n${line}\n"
    fi
  done < <(grep -nE "containerWidth\s*[:=]\s*['\"]?[0-9]+" "$FILE_PATH" | head -10)

  # 2) display:flex / display:grid — 이메일 HTML 본문에서 금지
  FLEX_GRID=$(grep -nE "display\s*:\s*(flex|grid)\b" "$FILE_PATH" | head -5)
  if [ -n "$FLEX_GRID" ]; then
    ISSUES="${ISSUES}- display:flex / display:grid (Outlook 미지원, table-layout 사용):\n${FLEX_GRID}\n"
  fi
fi

if [ "$KIND" = "admin" ]; then
  # 3) overflow-x:hidden / body min-width — iframe srcdoc 부모 컨테이너에서 금지
  OVERFLOW=$(grep -nE "overflow-x\s*:\s*['\"]?hidden" "$FILE_PATH" | head -5)
  if [ -n "$OVERFLOW" ]; then
    ISSUES="${ISSUES}- overflow-x:hidden (iframe srcdoc 안 콘텐츠 클립):\n${OVERFLOW}\n"
  fi
  MIN_WIDTH=$(grep -nE "body\s*\{[^}]*min-width" "$FILE_PATH" | head -5)
  if [ -n "$MIN_WIDTH" ]; then
    ISSUES="${ISSUES}- body { min-width } (iframe 클립):\n${MIN_WIDTH}\n"
  fi
fi

if [ -n "$ISSUES" ]; then
  echo "[newsletter-guard] $FILE_PATH 에 NEVER Rule 위반:" >&2
  printf '%b' "$ISSUES" >&2
  echo "" >&2
  echo "→ .claude/rules/newsletter.md §3 NEVER RULES 참조" >&2
  exit 2
fi

exit 0
