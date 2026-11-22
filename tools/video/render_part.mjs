#!/usr/bin/env node
// Render part I of N of a composition (silent video), or the whole composition's sound, from one bundle.
// Used by .github/workflows/render.yml: N runners each render one part; the join job renders the sound once and
// glues the parts with `ffmpeg -f concat -c copy` (same encoder settings in every part, so no re-encode).
// Idea from the Creator repo's scripts/render_shards.mjs, kept simpler: our lessons have no footage to wait for.
//
// Usage (run from video/):
//   node ../tools/video/render_part.mjs COMP part I N SCALE OUT.mp4   e.g. Incoterms part 0 6 2/3 out/part_0.mp4
//   node ../tools/video/render_part.mjs COMP sound OUT.wav
// RENDER_CONCURRENCY sets Remotion's concurrency (default 4; Modal sets it to the container's cores, 2026-11-22).
// SCALE may be a fraction ("2/3" = 720p from 1080p): a rounded decimal can give a non-integer frame size.
import {createRequire} from 'node:module';
import path from 'node:path';

const [comp, mode, ...a] = process.argv.slice(2);
const req = createRequire(path.resolve('package.json'));
const {bundle} = req('@remotion/bundler');
const {selectComposition, renderMedia} = req('@remotion/renderer');

const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts'), publicDir: path.resolve('public')});
const composition = await selectComposition({serveUrl, id: comp});
const total = composition.durationInFrames;
const t0 = Date.now();

if (mode === 'sound') {
	await renderMedia({serveUrl, composition, codec: 'wav', outputLocation: a[0]});
	console.log(`${comp}: sound ${(total / composition.fps).toFixed(2)} s in ${((Date.now() - t0) / 1000).toFixed(0)} s`);
} else if (mode === 'part') {
	const [i, n, scaleArg, out] = [Number(a[0]), Number(a[1]), String(a[2]), a[3]];
	const scale = scaleArg.includes('/') ? Number(scaleArg.split('/')[0]) / Number(scaleArg.split('/')[1]) : Number(scaleArg);
	const from = Math.floor((total * i) / n);
	const to = Math.floor((total * (i + 1)) / n) - 1;
	await renderMedia({
		serveUrl, composition, codec: 'h264', outputLocation: out, frameRange: [from, to], scale, crf: 18,
		muted: true, concurrency: Number(process.env.RENDER_CONCURRENCY || 4), x264Preset: 'medium', pixelFormat: 'yuv420p',
	});
	console.log(`${comp}: part ${i + 1}/${n}, frames ${from}-${to} of ${total}, ` +
		`${((Date.now() - t0) / (to - from + 1)).toFixed(0)} ms/frame`);
} else {
	console.error('usage: render_part.mjs COMP part I N SCALE OUT.mp4 | COMP sound OUT.wav');
	process.exit(2);
}
