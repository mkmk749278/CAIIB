#!/data/data/com.termux/files/usr/bin/bash
# Run on the owner's phone (Termux): fetch YouTube CAPTIONS (text only, no video) and put them straight into Drive
# CAIIB/<folder>/, where a cloud session pulls them with tools/drive/drive.sh. Why the phone: YouTube refuses the
# cloud container ("Sign in to confirm you're not a bot", 2026-11-20); the phone's own connection works.
# What captions are for (PLAYBOOK §4b): a checklist of which syllabus sub-points public classes cover and how deep.
# Never a source of facts, and nothing from them is copied into our lessons.
#
# One command in Termux (the session that needs the captions writes the full line for the owner):
#   curl -sL https://raw.githubusercontent.com/mkmk749278/CAIIB/main/tools/drive/termux_fetch_to_drive.sh | bash -s -- \
#     BFM/_downloads/class_captions https://youtu.be/ID1 https://youtu.be/ID2
#
# Drive access: reuses the rclone remote "creator" that the Creator repo's Termux script set up on the phone, pointed
# at the CAIIB folder instead (same Google account). First run on a phone without it: a browser opens; sign in with the
# account that owns the CAIIB folder and tap Allow.
set -uo pipefail
DEST="${1:?usage: termux_fetch_to_drive.sh <folder under CAIIB> URL [URL ...]}"; shift
[[ $# -ge 1 ]] || { echo "give at least one URL" >&2; exit 2; }
CAIIB_FOLDER_ID=1Yw1b2rwppOtup_eCRE5fLP0zLM9qAIXe   # Drive folder CAIIB/ (same id as tools/drive/drive.sh)
OUT="$HOME/caiib_fetch/$(basename "$DEST")"
mkdir -p "$OUT" && cd "$OUT" || exit 1

command -v rclone >/dev/null && command -v node >/dev/null && command -v python3 >/dev/null \
  || pkg install -y python nodejs rclone
python3 -m pip show yt-dlp >/dev/null 2>&1 || python3 -m pip install -q yt-dlp

if ! rclone listremotes | grep -q "^creator:$"; then
  echo "One-time Google Drive sign-in: a browser opens; choose the account that owns the CAIIB folder and tap Allow."
  rclone config create creator drive scope=drive || { echo "rclone sign-in failed" >&2; exit 3; }
fi
REMOTE="creator,root_folder_id=$CAIIB_FOLDER_ID:"

ok=0; n=0
for url in "$@"; do
  n=$((n + 1)); echo "== $n $url"
  if yt-dlp --js-runtimes node --skip-download --write-auto-subs --write-subs --sub-langs "en.*" --sub-format vtt \
       --no-warnings -q --sleep-requests 1.5 -o "%(id)s.%(ext)s" "$url"; then ok=$((ok + 1))
  else echo "   failed (try again later or on Wi-Fi)" >&2; fi
done
yt-dlp --js-runtimes node --skip-download --no-warnings -q --print "%(id)s,%(channel)s,%(duration)s,%(title)s" "$@" \
  > captions_index.csv 2>/dev/null || true
echo "$ok of $n fetched. Uploading to Drive: CAIIB/$DEST/"
rclone copy --include "*.vtt" --include "captions_index.csv" . "${REMOTE}$DEST" && {
  echo "Done. Tell Claude: captions are in Drive, CAIIB/$DEST ($ok videos)."
  rclone ls "${REMOTE}$DEST" | tail -5
}
