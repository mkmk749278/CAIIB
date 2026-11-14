#!/usr/bin/env bash
# Copy the woff2 files the video uses from node_modules/@fontsource into video/public/fonts (licence: OFL).
set -euo pipefail
cd "$(dirname "$0")/../../video"
mkdir -p public/fonts
for f in inter-tight-latin-500-normal inter-tight-latin-700-normal inter-tight-latin-ext-500-normal; do
  cp node_modules/@fontsource/inter-tight/files/$f.woff2 public/fonts/; done
for f in jetbrains-mono-latin-500-normal jetbrains-mono-latin-700-normal; do
  cp node_modules/@fontsource/jetbrains-mono/files/$f.woff2 public/fonts/; done
ls public/fonts
