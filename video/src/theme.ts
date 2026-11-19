import {loadFont} from '@remotion/fonts';
import {staticFile, interpolate, Easing} from 'remotion';

// Fonts are vendored from @fontsource into public/fonts by tools/video/vendor_fonts.sh
export const loadFonts = () =>
	Promise.all([
		loadFont({family: 'Inter Tight', url: staticFile('fonts/inter-tight-latin-500-normal.woff2'), weight: '500'}),
		loadFont({family: 'Inter Tight', url: staticFile('fonts/inter-tight-latin-700-normal.woff2'), weight: '700'}),
		loadFont({family: 'Inter Tight', url: staticFile('fonts/inter-tight-latin-ext-500-normal.woff2'), weight: '500'}),
		loadFont({family: 'JetBrains Mono', url: staticFile('fonts/jetbrains-mono-latin-500-normal.woff2'), weight: '500'}),
		loadFont({family: 'JetBrains Mono', url: staticFile('fonts/jetbrains-mono-latin-700-normal.woff2'), weight: '700'}),
		loadFont({family: 'Caveat', url: staticFile('fonts/caveat-latin-700-normal.woff2'), weight: '700'}),
	]);

export const C = {
	bg: '#0D1520',
	bg2: '#121D2B',
	card: '#182638',
	line: '#2A3B52',
	text: '#F2F5F9',
	dim: '#93A3B8',
	buy: '#38D996', // bank BUYS: always with an inward arrow and the word BUY
	sell: '#FF6B6B', // bank SELLS: always with an outward arrow and the word SELL
	undo: '#FFB547', // reversing a deal
	market: '#5AA9FF',
	meera: '#C7A6FF',
	paper: '#F5EFE3',
	ink: '#1B2430',
};

export const F = {
	sans: '"Inter Tight", system-ui, sans-serif',
	mono: '"JetBrains Mono", ui-monospace, monospace',
};

export const ease = Easing.bezier(0.22, 1, 0.36, 1);

// clamped, eased 0..1 between two frames
export const tw = (f: number, a: number, b: number, e = ease) =>
	interpolate(f, [a, b], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: e});

// fade in at a, out at b (both over n frames)
export const env = (f: number, a: number, b: number, n = 10) =>
	Math.min(tw(f, a, a + n), 1 - tw(f, b - n, b));

export const inr = (x: number) => {
	const [i, d] = x.toFixed(2).split('.');
	const last3 = i.slice(-3);
	const rest = i.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
	return '₹' + (rest ? rest + ',' + last3 : last3) + '.' + d;
};
