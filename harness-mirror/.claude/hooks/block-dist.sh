#!/usr/bin/env bash
# PreToolUse hook — Edit|Write|MultiEdit 시 dist-*/dist/ 경로 직접 수정 차단
# CLAUDE.md NEVER 룰 강제: '빌드 산출물 직접 수정 금지'
# - 권고만 있을 땐 ~80% 따름. hook 으로 100% 강제.
# - 빌드 산출물은 항상 npm run build 로 생성. 수동 수정은 다음 빌드 시 덮어쓰여짐 + 회귀 위험.

INPUT=$(cat)
FILE_PATH=$(printf '%s' "$INPUT" | node -e '
let s = "";
process.stdin.on("data", c => s += c);
process.stdin.on("end", () => {
  try { process.stdout.write(JSON.parse(s).tool_input?.file_path || "") } catch {}
});
' 2>/dev/null)

[ -z "$FILE_PATH" ] && exit 0

# dist-*/  또는 dist/  포함 시 차단 (절대/상대 경로 모두)
case "$FILE_PATH" in
  */dist-*|*/dist/*|dist-*|dist/*)
    echo "[block-dist] $FILE_PATH 는 빌드 산출물 — 직접 수정 금지." >&2
    echo "  → 원본 소스 (src/, routes/) 수정 후 npm run build 실행" >&2
    echo "  → CLAUDE.md NEVER 룰: 'dist-* / dist 디렉토리 직접 수정 (빌드 산출물)'" >&2
    exit 2
    ;;
esac
exit 0
