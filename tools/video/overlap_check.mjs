#!/usr/bin/env node
// Text-overlap check (PLAYBOOK §5e): renders the lesson one layer at a time (scene, notes, caption) on white, one
// frame every STEP seconds at low resolution, and writes raw grey frames for tools/video/overlap_check.py to compare.
// Usage (from video/): node ../tools/video/overlap_check.mjs COMP OUT_DIR [step_seconds=1] [layers=scene,notes,caption]
import {createRequire} from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const [comp, out, stepArg, layersArg] = process.argv.slice(2);
const step = Number(stepArg ?? 1);
const req = createRequire(path.resolve('package.json'));
const {bundle} = req('@remotion/bundler');
const {selectComposition, renderStill, openBrowser} = req('@remotion/renderer');

fs.mkdirSync(out, {recursive: true});
const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts'), publicDir: path.resolve('public')});
const browser = await openBrowser('chrome');
for (const layer of (layersArg ?? 'scene,notes,caption').split(',')) {
	const composition = await selectComposition({serveUrl, id: comp, inputProps: {layer}, puppeteerInstance: browser});
	const n = Math.floor(composition.durationInFrames / (composition.fps * step));
	for (let i = 0; i < n; i++) {
		const frame = Math.round(i * step * composition.fps);
		const file = path.join(out, `${layer}_${String(i).padStart(5, '0')}.png`);
		if (fs.existsSync(file)) continue;
		await renderStill({serveUrl, composition, frame, output: file, scale: 0.25, inputProps: {layer}, puppeteerInstance: browser, imageFormat: 'png'});
	}
	console.log(layer, n, 'frames');
}
await browser.close({silent: true});
