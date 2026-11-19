# Independent review: the v2 look (A07 Incoterms)

Reviewer: a fresh session that did not build v2. 2026-11-19.
Looked at: r1 720p cut (35 frames, one every 30 s), the 4 v2 style frames at 1920, 800 and 400 px wide,
`video/src/kit/*`, `StyleFrames.tsx`, `script.md`, PLAYBOOK §5, §5a, §5b, §5c.

## Verdict: ADOPT WITH FIXES

v2 is clearly better than r1. r1 is dark slides with small text floating in empty space; the "road" is a line of
dots with two house icons. v2 gives the eye a real place (factory, Chennai, the sea, Rotterdam, customs), so the
risk flag and the cost arrow mean something at a glance. The CIF frame (frame 0) teaches the core idea of the lesson
in one picture. Keep the direction. But the frames have layout bugs, one wrong misconception, colour-code leaks and
text that is too small on a phone. Fix those before the full rebuild.

## Top 5 must-fix (in order)

1. **Frame 2 shows the wrong misconception.** The cloud says "The exporter. She hasn't been paid yet!" The script
   (N06a) says the wrong idea is *"the seller paid freight and insurance, so the sea is the seller's risk"*. That is
   the trap the lesson exists to break; payment is a different one. The question also drops "Under CIF", and without
   it the question can't be answered. Use: "Under CIF, the container is lost at sea. Whose loss?" and put N06a/N06b in
   the clouds. Bring back r1's **PAUSE card with a countdown** (§5a, prediction prompt); v2 has none.
2. **Signal colours leak onto decoration.** Red and blue mean risk and cost, and amber/teal/magenta/slate mean the
   families, but: the truck is amber (C), the shop roof blue (cost), the customs roof magenta (D), the crane loads
   teal (F), and the ship carries **red and blue containers** right next to the red flag and blue arrow. The mind map
   repeats this: "The road" branch is risk-red, "Insurance" is cost-blue, "Mode" is F-teal, "E·F·C·D" is C-amber.
   Coherence and signalling (§5a) need **one meaning per colour**. Make all scenery ink plus neutral greys and
   browns. Give map branches their own muted set, or use ink pills with a coloured icon.
3. **Layout collisions.**
   - The labels for stations 5 and 6 run into each other: "ready to unload (Rotterdam)".
   - The shop is drawn on top of the customs booth.
   - The cost arrow crosses both crane jibs.
   - "Incoterms 2020" spills past the edge of the centre ellipse.
   - In the recap, the "sea only: FAS FOB…" leaf starts left of the margin line (x ≈ 55).
   - The "Some of you" cloud touches the question title.
   - In the map, "C: risk early, cost far" nearly touches "blue line = cost".
4. **Too small on a phone.**
   - At 400 px wide (portrait phone), the station labels (24 px), the corner lesson map (18–24 px) and the map leaves
     (Caveat 42 px, which looks like about 30 px because Caveat's x-height is small) can't be read.
   - At 800 px (phone held landscape), the station labels only just pass.
   - Rule: nothing under 30 px at 1080p. Caveat 52 px or more, or use Inter for leaves.
   - Station labels go to one short word each (Premises · Carrier · Alongside · On board · Arrived · Unloaded ·
     Cleared). The full names go in the caption the first time.
5. **Colour-blind failure in the four families.** I simulated colour-blind vision (Machado 2009) and measured how far
   apart the colours look (ΔE; under about 15, most people can't tell two colours apart):
   - Deuteranopia: E slate and D magenta are ΔE ≈ 5 (look the same), E and F ≈ 11, F and D ≈ 16.
   - Protanopia: E and F ≈ 19, E and D ≈ 23.
   - Red risk vs blue cost is safe in every mode (ΔE 85 or more). Keep that pair.
   - White text on amber is 2.6:1 (the "CIF" code and the "E·F·C·D" pill), which fails. Use ink on amber.
   - So the family must never depend on colour alone. Keep the big letter, and add a shape per family (e.g. E square,
     F triangle, C circle, D diamond) or a fill pattern. Re-pick the palette so the colours also differ in lightness:
     for example, a dark slate, a light teal, an amber and a dark plum.

## Other fixes (do them in the rebuild)

6. **"seller pays up to here" sits at the start of the arrow**, so "here" points the wrong way (spatial contiguity).
   Put the label at the arrowhead.
7. **Show the C-rule split as one shape.** "C rules: they split!" floats with nothing under it. Draw a bracket
   between the flag (4) and the arrowhead (5): "buyer's risk · seller's freight". That gap *is* the lesson.
8. **The cost endpoint for CIF.** The arrow ends at station 5, "Arrived, ready to unload", which is the DAP delivery
   point. That's fine for freight to the port of destination. But label the arrowhead "freight to Rotterdam port",
   and in the caption say "to Rotterdam port", not "all the way". Unloading costs at destination fall on the buyer
   unless the carriage contract includes them. Otherwise the road is accurate to Incoterms 2020:
   - EXW at station 1; FCA, CPT and CIP risk at station 2; FAS at station 3; FOB, CFR and CIF on board at Chennai (4).
   - DAP at station 5, DPU at station 6 (unloaded), DDP at station 7 (import cleared).
   - The map leaves are correct: 11 rules; 4 sea-only; containers → FCA/CIP; CIF Clauses C, CIP Clauses A; at least
     110%; Incoterms don't decide price, payment or title.
9. **Any-mode rules on a sea-only road.** r1 labelled the gap "sea · air · road"; v2 shows only a ship. When FCA, CPT
   or CIP is on screen, swap the ship for a generic box/plane icon, or label the gap "sea · air · road". Otherwise the
   picture argues against "any mode".
10. **Lose the "≈"** in "≈ sea and inland waterway only" (also in r1). It reads as "roughly".
11. **Keep r1's honesty and source cards.** The style frames have no "voice is AI-generated" card, no "illustrative:
    names made up" tag and no rule-version line. They must come back in the v2 look, styled to match.
12. **"whose ship is it?" as the map's sub-title** is a fine hook in speech, but on the recap page it teaches the
    wrong question (ownership). Use "whose risk? whose cost?"
13. **The ✓ glyph renders, but 'E · F · C · D' in the mini card is pale grey on white**, which is unreadable. The
    "next" items need at least `P.soft`.

## The mind map

- **Good:** the fixed clock positions (place memory), drawing a branch on as it's taught, the finished map as recap,
  and "draw this tonight" as homework. This is the strongest research-backed addition (§5c).
- **The map grows lopsided.** Positions 0, 2, 4, 6 put the first four branches all on the right; the left half stays
  empty for most of the lesson (frame 1). Use the order top → right → left → bottom-right → bottom-left → … so it
  grows balanced.
- **Dimming to 0.3** makes the earlier branches nearly vanish, and they're the ones learners should be recalling.
  Use 0.55, and keep the ticks.
- **Overload:** the recap has 6 branches and 22 leaves. That's fine as a still to pause on, too much to read in 5
  s on a phone. Cap leaves at 3 per branch and about 4 words each, and reveal the recap branch by branch with the
  voice.
- **The corner "lesson map" card** says the same thing as the header ("CHAPTER 2 · THE ROAD"), sits in prime screen
  space, and is unreadable at 400 px. Show it only at chapter cards and on the recap, not on every scene. Or replace
  it with a tiny drawing of the real map's shape with the current branch lit, which reinforces place memory better
  than a list.
- **Link it upward:** r1 ended on the module map ("The bank's forex counter"). Keep that zoom-out: lesson map shrinks
  into its slot on the module map.

## Night viewing

The cream page is about 88% as bright as white. In a dark room on a phone that is a lot more glare than r1's navy.
Ink on cream reads far better (12.9:1), so keep cream, but tone it down (about #EDE3CC, with a darker vignette at the
edges). Test one minute on a real phone at night brightness. Don't build a separate dark theme now; it doubles the
QA.

## What would make it great (ranked, all buildable in Remotion)

1. **Animate the journey, don't show it.** The ship sails as the voice says "two days later"; the flag drops
   (spring) on "on board"; the blue arrow draws on its word. The `at(id, word)` timing already exists; tie every
   draw-on to a spoken word.
2. **One camera on one page.** Instead of cutting between scenes, pan and zoom across one large notebook page
   (road → map → calculator). Continuity carries place memory, and it reads as a teacher's notebook, not slides.
3. **Pen-stroke draw-on everywhere** (station circles, map branches, the underline), with a very light pencil-scratch
   sound. Use three sound cues only: flag drop (soft thud), arrow (short whoosh), correct answer (soft chime). Music
   only in the warm-up, chapter cards and close, never under explanation (§5a coherence).
4. **Reveal the misconception in place:** the wrong cloud gets the red cross *on the word "seller"*, then the camera
   moves to the road and the flag lands at Chennai, so the answer appears in the picture, not in text.
5. **A recurring "trap" card style** (torn sticky note, amber edge) for N08's "insurance in the name ≠ seller's
   risk". r1 had it as plain text; it deserves the strongest visual in the lesson.
6. **Calculator and number scenes in the same notebook style.** They're the r1 frames that worked best; keep the
   layout, just restyle them.

## Against PLAYBOOK §5a / §5c

- Coherence: cut the coloured containers, smoke, coloured roofs and duplicated progress UI (items 2 and 13 above);
  keep the grid, margin and vignette (quiet).
- Signalling: strong in the flag and arrow, weakened by the colour leaks. Fix item 2 and it's the best part.
- Segmenting: the chapter header plus map works. Make chapter cards full-screen map moments, so the segments come
  from the map itself.
- Spatial contiguity: mostly good (labels under stations); the cost-label fix in item 6 is the exception.
