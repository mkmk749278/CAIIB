#!/usr/bin/env bash
# Google Drive for everything too big for git (audio, word timings, renders, music, downloaded PDFs).
# The repo keeps only text and code; media lives in Drive `CAIIB/` and is pulled into gitignored folders when needed.
# Same method as the Creator repo (scripts/upload_gdrive.sh there): rclone with the owner's refresh token from the
# cloud environment variable GDRIVE_RCLONE_TOKEN (never in git, chat or docs).
#
# Usage (paths are under Drive CAIIB/; layout in docs/PLAYBOOK.md §8):
#   tools/drive/drive.sh ls   [BFM/A07]                    list (recursive, 2 levels)
#   tools/drive/drive.sh push BFM/A07/voice FILE [FILE…]   upload; prints a private view link per file
#   tools/drive/drive.sh sync BFM/A07/lines LOCAL_DIR      upload a whole folder in one go (fast; no links)
#   tools/drive/drive.sh pull BFM/A07/voice LOCAL_DIR      download a folder (GDRIVE_INCLUDE='*.mp3' to filter)
#   tools/drive/drive.sh link BFM/A07/renders/r1.mp4       print the view link of one file
# Optional GDRIVE_CAIIB_FOLDER_ID overrides the CAIIB folder id below.
set -euo pipefail
RCLONE_VER=v1.71.1
ROOT=$(cd "$(dirname "$0")/../.." && pwd)
CACHE="$ROOT/.cache/rclone"
FOLDER_ID=${GDRIVE_CAIIB_FOLDER_ID:-1Yw1b2rwppOtup_eCRE5fLP0zLM9qAIXe}
[[ -n ${GDRIVE_RCLONE_TOKEN:-} ]] || { echo "GDRIVE_RCLONE_TOKEN is not set in this cloud environment" >&2; exit 3; }

RCLONE="$CACHE/rclone-$RCLONE_VER-linux-amd64/rclone"
if [[ ! -x $RCLONE ]]; then
  mkdir -p "$CACHE"
  curl -sSL -m 300 -o "$CACHE/rclone.zip" "https://downloads.rclone.org/$RCLONE_VER/rclone-$RCLONE_VER-linux-amd64.zip"
  (cd "$CACHE" && unzip -q -o rclone.zip && rm rclone.zip)
fi

# The Claude app's environment field can strip parts of the token JSON; rebuild it from the refresh token.
TOKEN=$(python3 - <<'EOF'
import json, os, re
t = os.environ["GDRIVE_RCLONE_TOKEN"].strip()
try:
    json.loads(t); print(t)
except ValueError:
    rt = re.search(r'refresh_token"?\s*:\s*"?([^",}\s]+)', t)
    if not rt:
        raise SystemExit("GDRIVE_RCLONE_TOKEN has no refresh_token; run rclone authorize again")
    print(json.dumps({"access_token": "", "token_type": "Bearer",
                      "refresh_token": rt.group(1), "expiry": "2000-01-01T00:00:00Z"}))
EOF
)
export RCLONE_CONFIG_GD_TYPE=drive RCLONE_CONFIG_GD_SCOPE=drive RCLONE_CONFIG_GD_TOKEN="$TOKEN"
export RCLONE_CONFIG_GD_ROOT_FOLDER_ID="$FOLDER_ID" RCLONE_CONFIG=/dev/null

link() { local id; id=$("$RCLONE" lsjson --stat --no-mimetype "gd:$1" | python3 -c 'import json,sys; print(json.load(sys.stdin)["ID"])')
         echo "$(basename "$1")  https://drive.google.com/file/d/$id/view"; }

cmd=${1:-}; shift || true
case $cmd in
  ls)   "$RCLONE" lsf -R --max-depth 2 --format "sp" --separator "  " "gd:${1:-}" ;;
  push) dest=${1:?Drive folder}; shift; [[ $# -ge 1 ]] || { echo "no files" >&2; exit 2; }
        for f in "$@"; do
          "$RCLONE" copyto --drive-chunk-size 64M --retries 4 --low-level-retries 10 --stats-one-line --stats 30s \
            "$f" "gd:$dest/$(basename "$f")" >&2
          link "$dest/$(basename "$f")"
        done ;;
  sync) dest=${1:?Drive folder}; src=${2:?local folder}
        "$RCLONE" copy --transfers 8 --retries 4 --stats-one-line --stats 30s "$src" "gd:$dest" >&2
        echo "synced $(ls "$src" | wc -l) files to CAIIB/$dest" ;;
  pull) src=${1:?Drive folder}; dst=${2:?local folder}; mkdir -p "$dst"
        "$RCLONE" copy --retries 4 --stats-one-line --stats 30s ${GDRIVE_INCLUDE:+--include "$GDRIVE_INCLUDE"} \
          "gd:$src" "$dst"; ls -la "$dst" ;;
  link) link "${1:?Drive file path}" ;;
  *)    sed -n 2,14p "$0"; exit 2 ;;
esac
