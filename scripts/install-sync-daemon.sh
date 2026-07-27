#!/usr/bin/env bash
# ─── 뉴스레터 저장본 동기화 데몬 — 맥미니 부팅 시 자동 시작 (launchd) ─────────
# 사용:
#   bash scripts/install-sync-daemon.sh            # 설치 + 즉시 시작
#   bash scripts/install-sync-daemon.sh status     # 상태 확인
#   bash scripts/install-sync-daemon.sh uninstall  # 제거
#
# 사전 조건: .env 에 REMOTE_URL=https://<앱>.onrender.com
#           (비번은 REMOTE_ADMIN_PASSWORD, 없으면 ADMIN_PASSWORD 사용 — 데몬이 .env 자동 로드)
# plist 에는 URL·비밀번호를 넣지 않는다 — 데몬이 WorkingDirectory 의 .env 에서 직접 읽음.
set -euo pipefail

LABEL="com.hiro.sync-snapshots"
REPO="$(cd "$(dirname "$0")/.." && pwd)"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
LOG="$HOME/Library/Logs/hiro-sync-snapshots.log"
NODE_BIN="$(command -v node || true)"

cmd="${1:-install}"

status() {
  if launchctl list 2>/dev/null | grep -q "$LABEL"; then
    echo "✓ 실행 중 — launchd 등록됨 ($LABEL)"
    echo "  로그: tail -f $LOG"
    tail -5 "$LOG" 2>/dev/null | sed 's/^/  │ /' || true
  else
    echo "✗ 미등록 (설치: bash scripts/install-sync-daemon.sh)"
  fi
}

uninstall() {
  launchctl bootout "gui/$(id -u)" "$PLIST" 2>/dev/null || launchctl unload "$PLIST" 2>/dev/null || true
  rm -f "$PLIST"
  echo "✓ 제거 완료 ($LABEL)"
}

install() {
  [ -n "$NODE_BIN" ] || { echo "FATAL: node 를 찾을 수 없습니다 (PATH 확인)"; exit 1; }
  # .env 의 REMOTE_URL 검증 — 없이 로드하면 KeepAlive 재시작 루프가 되므로 사전 차단
  if ! grep -qE "^REMOTE_URL=https?://" "$REPO/.env" 2>/dev/null; then
    echo "FATAL: $REPO/.env 에 REMOTE_URL 이 없습니다."
    echo "  다음 한 줄을 추가 후 재실행:  echo 'REMOTE_URL=https://<본인앱>.onrender.com' >> .env"
    echo "  (원격 비번이 로컬과 다르면:  echo 'REMOTE_ADMIN_PASSWORD=<비번>' >> .env)"
    exit 1
  fi
  mkdir -p "$(dirname "$PLIST")" "$(dirname "$LOG")"
  cat > "$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>$LABEL</string>
  <key>ProgramArguments</key>
  <array>
    <string>$NODE_BIN</string>
    <string>$REPO/scripts/sync-snapshots-daemon.mjs</string>
  </array>
  <key>WorkingDirectory</key><string>$REPO</string>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>ThrottleInterval</key><integer>30</integer>
  <key>StandardOutPath</key><string>$LOG</string>
  <key>StandardErrorPath</key><string>$LOG</string>
</dict>
</plist>
EOF
  # 재설치 대비 기존 것 내리고 로드
  launchctl bootout "gui/$(id -u)" "$PLIST" 2>/dev/null || true
  launchctl bootstrap "gui/$(id -u)" "$PLIST" 2>/dev/null || launchctl load "$PLIST"
  sleep 2
  echo "✓ 설치 완료 — 부팅 시 자동 시작 + 지금 즉시 실행됨"
  status
}

case "$cmd" in
  status) status ;;
  uninstall) uninstall ;;
  *) install ;;
esac
