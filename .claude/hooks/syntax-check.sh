#!/usr/bin/env bash
# PostToolUse hook — Edit/Write/MultiEdit 직후 .js 파일 신택스 검증
# - 대상: src/ 또는 routes/ 의 *.js (서버측 JS만; .jsx 는 transform 필요해서 제외)
# - 실패 시 exit 2 → Claude 에게 에러 피드백 (즉시 수정 유도)
# - 정상 시 침묵 (exit 0)

INPUT=$(cat)
FILE_PATH=$(printf '%s' "$INPUT" | node -e '
let s = "";
process.stdin.on("data", c => s += c);
process.stdin.on("end", () => {
  try { process.stdout.write(JSON.parse(s).tool_input?.file_path || "") } catch {}
});
' 2>/dev/null)

[ -z "$FILE_PATH" ] && exit 0

case "$FILE_PATH" in
  *.js) ;;
  *) exit 0 ;;
esac

case "$FILE_PATH" in
  */src/*|*/routes/*) ;;
  *) exit 0 ;;
esac

[ ! -f "$FILE_PATH" ] && exit 0

if ! ERR=$(node --check "$FILE_PATH" 2>&1); then
  echo "[syntax-check] $FILE_PATH 에 신택스 오류:" >&2
  echo "$ERR" >&2
  exit 2
fi
exit 0
