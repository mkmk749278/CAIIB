#!/usr/bin/env bash
# Builds the Gemini skill's knowledge files (9 files, all modules) and uploads them to Drive CAIIB/_gemini/skill_files.
# Re-run after plans, depth checklists, the example lesson or the rules change. Gemini reads the Drive copies live.
set -euo pipefail
cd "$(dirname "$0")/../.."
K=.cache/gemini_knowledge; rm -rf "$K"; mkdir -p "$K"
cat_files() { for f in "$@"; do printf '\n\n===== FILE: %s =====\n\n' "$f"; cat "$f"; done; }
cat_files course/spec/lesson_spec.md course/bfm/A/A1/script_class_sample.md course/bfm/greetings.md > "$K/rules_and_style.md"
cp research/pedagogy/teaching_method.md "$K/teaching_method.md"
cat_files course/bfm/A/A16b/script_class.md research/bfm/facts/A2.2-A2.7-A2.9_A16b.md \
  course/bfm/A/A16b/numericals.md course/bfm/A/A16b/practice.md > "$K/example_lesson_A16b.md"
cat_files research/bfm/syllabus_official.md research/bfm/regulatory_updates.md > "$K/syllabus_and_updates.md"
cp tools/gemini/prompts/deep_research_A17.md "$K/model_deep_research_prompt.md"
for m in A B C D; do
  cat_files course/bfm/$m/plans_$m.md research/bfm/depth/$m.md > "$K/module_$m.md"
  [[ -f course/bfm/$m/STATUS.md ]] && cat_files course/bfm/$m/STATUS.md >> "$K/module_$m.md"
done
ls -la "$K"
tools/drive/drive.sh sync _gemini/skill_files "$K"
tools/drive/drive.sh link _gemini/skill_files
python3 tools/gemini/make_start_here.py
tools/drive/drive.sh push _gemini .cache/gemini_knowledge/START_HERE.md
