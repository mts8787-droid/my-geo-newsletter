#!/usr/bin/env bash
# SessionStart hook — HIRO 하네스 부트스트랩 주입.
# 'using-hiro' 스킬(디스패처)을 매 세션 <EXTREMELY_IMPORTANT> 컨텍스트로 주입 →
# 상황에 따라 HIRO 스킬이 자동 발동하도록 규율을 세운다.
# (Superpowers session-start 메커니즘 이식 — Claude Code hookSpecificOutput.additionalContext.)
set -euo pipefail

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "$0")/../.." && pwd)}"
SKILL_FILE="${PROJECT_DIR}/.claude/skills/using-hiro/SKILL.md"

content=$(cat "$SKILL_FILE" 2>/dev/null || echo "using-hiro 스킬을 찾을 수 없음: $SKILL_FILE — .claude/skills/using-hiro/SKILL.md 확인 필요.")

# JSON 임베딩용 이스케이프 (bash parameter substitution — C-레벨 단일 패스, 빠름).
escape_for_json() {
    local s="$1"
    s="${s//\\/\\\\}"
    s="${s//\"/\\\"}"
    s="${s//$'\n'/\\n}"
    s="${s//$'\r'/\\r}"
    s="${s//$'\t'/\\t}"
    printf '%s' "$s"
}

escaped=$(escape_for_json "$content")
session_context="<EXTREMELY_IMPORTANT>\n당신은 HIRO 하네스에서 작동한다.\n\n**아래는 'using-hiro' 부트스트랩 스킬의 전문 — 스킬을 찾고 디스패치하는 방법이다. 다른 모든 스킬은 Skill 도구로 발동한다:**\n\n${escaped}\n</EXTREMELY_IMPORTANT>"

# printf 사용 (bash 5.3+ heredoc hang 회피).
printf '{\n  "hookSpecificOutput": {\n    "hookEventName": "SessionStart",\n    "additionalContext": "%s"\n  }\n}\n' "$session_context"

exit 0
