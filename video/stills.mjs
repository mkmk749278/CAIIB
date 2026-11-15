// node stills.mjs <out dir> <id:frameOffset> ...  (frame = start of line id + offset)
import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import fs from 'fs';
import path from 'path';
const lines = JSON.parse(fs.readFileSync(process.env.LINES || 'src/lines.json', 'utf8')).lines;
const by = Object.fromEntries(lines.map((l) => [l.id, l]));
const [out, ...specs] = process.argv.slice(2);
fs.mkdirSync(out, {recursive: true});
const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts')});
const comp = await selectComposition({serveUrl, id: process.env.COMP || 'A1'});
for (const s of specs) {
	const [id, off] = s.split(':');
	const frame = by[id] ? by[id].start + Number(off || 0) : Number(id);
	await renderStill({serveUrl, composition: comp, frame, output: `${out}/${s.replace(':', '_')}.jpg`, imageFormat: 'jpeg', jpegQuality: 80, scale: 0.5});
	console.log('ok', s, frame);
}
