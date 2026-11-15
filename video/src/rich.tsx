import React from 'react';
import {interpolate} from 'remotion';
import {C, F, tw} from './theme';

// ---------- the rate ladder ----------
export type RungKey = 'notesS' | 'billS' | 'ttS' | 'mkt' | 'ttB' | 'billB' | 'notesB';
export const RUNGS: {k: RungKey; name: string; side: 'sell' | 'buy' | 'mkt'}[] = [
	{k: 'notesS', name: 'Currency notes · selling', side: 'sell'},
	{k: 'billS', name: 'Bill selling', side: 'sell'},
	{k: 'ttS', name: 'TT selling', side: 'sell'},
	{k: 'mkt', name: 'Market  85.40 / 85.42', side: 'mkt'},
	{k: 'ttB', name: 'TT buying', side: 'buy'},
	{k: 'billB', name: 'Bill buying', side: 'buy'},
	{k: 'notesB', name: 'Currency notes · buying', side: 'buy'},
];
export const rungY = (k: RungKey, y0: number, step: number) => y0 + RUNGS.findIndex((r) => r.k === k) * step;

export const Ladder: React.FC<{
	x: number; y: number; step?: number; w?: number;
	show: Partial<Record<RungKey, number>>; // 0..1 visibility per rung
	values?: Partial<Record<RungKey, string>>;
	hi?: RungKey | null; o?: number;
}> = ({x, y, step = 118, w = 760, show, values = {}, hi = null, o = 1}) => {
	const vis = RUNGS.filter((r) => (show[r.k] ?? 0) > 0);
	if (!vis.length) return null;
	const top = Math.min(...vis.map((r) => rungY(r.k, y, step)));
	const bot = Math.max(...vis.map((r) => rungY(r.k, y, step)));
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<div style={{position: 'absolute', left: x + 20, top: top - 30, width: 12, height: bot - top + 60, background: C.line, borderRadius: 6}} />
			<div style={{position: 'absolute', left: x + w - 32, top: top - 30, width: 12, height: bot - top + 60, background: C.line, borderRadius: 6}} />
			{RUNGS.map((r) => {
				const s = show[r.k] ?? 0;
				if (s <= 0) return null;
				const yy = rungY(r.k, y, step);
				const faint = r.k.startsWith('notes');
				const col = r.side === 'sell' ? C.sell : r.side === 'buy' ? C.buy : C.market;
				const isHi = hi === r.k;
				return (
					<div key={r.k} style={{position: 'absolute', left: x, top: yy - 36, width: w, height: 72, opacity: s * (faint ? 0.45 : 1), transform: `scaleX(${0.6 + 0.4 * s})`, transformOrigin: 'center', background: isHi ? col : C.card, border: `4px solid ${col}`, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', boxSizing: 'border-box', boxShadow: isHi ? `0 0 40px ${col}` : 'none'}}>
						<span style={{fontFamily: F.sans, fontWeight: 700, fontSize: 38, color: isHi ? C.bg : C.text}}>
							{r.side === 'sell' ? '▲ SELL · ' : r.side === 'buy' ? '▼ BUY · ' : ''}{r.name}
						</span>
						<span style={{fontFamily: F.mono, fontWeight: 700, fontSize: 40, color: isHi ? C.bg : '#FFD27A'}}>{values[r.k] ?? ''}</span>
					</div>
				);
			})}
		</div>
	);
};

// ---------- the Nostro clock: rupees at the counter vs dollars in New York ----------
const Dial: React.FC<{cx: number; cy: number; label: string; sym: string; p: number; color: string; moved: boolean}> = ({cx, cy, label, sym, p, color, moved}) => (
	<g>
		<circle cx={cx} cy={cy} r={150} fill={C.card} stroke={moved ? color : C.line} strokeWidth={10} />
		{[...Array(12)].map((_, i) => {
			const a = (i / 12) * 2 * Math.PI;
			return <line key={i} x1={cx + 125 * Math.sin(a)} y1={cy - 125 * Math.cos(a)} x2={cx + 140 * Math.sin(a)} y2={cy - 140 * Math.cos(a)} stroke={C.dim} strokeWidth={5} />;
		})}
		<line x1={cx} y1={cy} x2={cx + 105 * Math.sin(p * 2 * Math.PI)} y2={cy - 105 * Math.cos(p * 2 * Math.PI)} stroke={C.text} strokeWidth={10} strokeLinecap="round" />
		<circle cx={cx} cy={cy} r={14} fill={C.text} />
		<text x={cx} y={cy + 220} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={40} fill={C.text}>{label}</text>
		<text x={cx} y={cy - 175} textAnchor="middle" fontFamily={F.mono} fontWeight={700} fontSize={56} fill={moved ? color : C.dim}>{moved ? `${sym} moved` : `${sym} waiting`}</text>
	</g>
);

export const NostroClock: React.FC<{f: number; from: number; mode: 'tt' | 'bill'; o?: number}> = ({f, from, mode, o = 1}) => {
	const t = (f - from) / 30;
	const pR = Math.max(0, t) / 4;
	const lag = mode === 'tt' ? 0 : 2.4;
	const pD = Math.max(0, t - lag) / 4;
	const docs = mode === 'bill' ? interpolate(t, [0.5, lag], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}) : 0;
	return (
		<svg style={{position: 'absolute', inset: 0, opacity: o}} width={1920} height={1080}>
			<Dial cx={520} cy={520} label="Counter · Visakhapatnam" sym="₹" p={pR} color={C.text} moved={t > 0.2} />
			<Dial cx={1400} cy={520} label="Nostro · New York" sym="$" p={pD} color={C.market} moved={t > lag + 0.2} />
			{mode === 'bill' ? (
				<g transform={`translate(${700 + docs * 520},${470})`} opacity={docs > 0 && docs < 1 ? 1 : 0}>
					<rect x={-40} y={-50} width={80} height={100} rx={8} fill={C.paper} />
					<line x1={-22} y1={-20} x2={22} y2={-20} stroke={C.ink} strokeWidth={5} />
					<line x1={-22} y1={0} x2={22} y2={0} stroke={C.ink} strokeWidth={5} />
					<line x1={-22} y1={20} x2={10} y2={20} stroke={C.ink} strokeWidth={5} />
				</g>
			) : null}
			<text x={960} y={140} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={62} fill={mode === 'tt' ? C.market : C.undo}>
				{mode === 'tt' ? 'Together → TT rates (inner rungs)' : 'Rupees first, dollars later, documents → BILL rates'}
			</text>
		</svg>
	);
};

// ---------- the IIBF-allowed 8-function calculator ----------
export type Key = {at: number; key: string; disp: string};
export const typeKeys = (start: number, keys: string[], results: Record<number, string>, per = 7): Key[] => {
	let shown = '';
	return keys.map((k, i) => {
		if (results[i] !== undefined) shown = results[i];
		else if ('0123456789.'.includes(k)) shown = (shown.match(/^[0-9.]*$/) && i > 0 && '0123456789.'.includes(keys[i - 1]) ? shown : '') + k;
		return {at: start + i * per, key: k, disp: shown};
	});
};
const PAD = [['%', '√', 'C', '÷'], ['7', '8', '9', '×'], ['4', '5', '6', '−'], ['1', '2', '3', '+'], ['0', '.', '=', '']];
export const Calculator: React.FC<{f: number; x: number; y: number; seq: Key[]; o?: number}> = ({f, x, y, seq, o = 1}) => {
	const cur = [...seq].reverse().find((k) => k.at <= f);
	const disp = cur ? cur.disp : '0';
	return (
		<div style={{position: 'absolute', left: x, top: y, width: 520, opacity: o, background: '#1E2A36', borderRadius: 40, padding: 30, boxShadow: '0 30px 80px rgba(0,0,0,0.5)', border: `3px solid ${C.line}`}}>
			<div style={{fontFamily: F.sans, fontSize: 24, color: C.dim, letterSpacing: 3, marginBottom: 10}}>8 FUNCTIONS · 12 DIGITS</div>
			<div style={{background: '#B9C8A8', borderRadius: 14, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 22px', fontFamily: F.mono, fontWeight: 700, fontSize: 60, color: '#17201A'}}>{disp.slice(-13)}</div>
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 22}}>
				{PAD.flat().map((k, i) => {
					const hit = seq.some((s) => s.key === k && f >= s.at && f < s.at + 5);
					return (
						<div key={i} style={{height: 74, borderRadius: 16, background: k === '' ? 'transparent' : hit ? C.text : k === '=' ? C.market : '#2C3B4B', color: hit ? C.bg : C.text, fontFamily: F.mono, fontWeight: 700, fontSize: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: hit ? 'scale(0.92)' : 'none'}}>{k}</div>
					);
				})}
			</div>
		</div>
	);
};

// ---------- the counter seen from above (with the flip) ----------
export const CounterTop: React.FC<{flip: number; bankSide: boolean; children?: React.ReactNode}> = ({flip, bankSide, children}) => {
	// flip: 0..1, squash through the middle like turning over a card
	const sy = Math.abs(Math.cos(flip * Math.PI));
	return (
		<div style={{position: 'absolute', inset: 0, transform: `scaleY(${Math.max(sy, 0.02)})`, filter: flip > 0.05 && flip < 0.95 ? 'blur(6px)' : 'none'}}>
			<div style={{position: 'absolute', left: 0, right: 0, top: 500, height: 80, background: '#7A5A3A', borderTop: '6px solid #A47B50', borderBottom: '6px solid #4E3824'}} />
			<div style={{position: 'absolute', left: 60, top: bankSide ? 380 : 620, fontFamily: F.sans, fontWeight: 700, fontSize: 40, letterSpacing: 6, color: bankSide ? C.text : C.dim}}>
				{bankSide ? "BANK'S SIDE ▲" : "CUSTOMER'S SIDE ▼"}
			</div>
			{children}
		</div>
	);
};

// ---------- rate finder card ----------
export const RateFinder: React.FC<{f: number; from: number; o?: number}> = ({f, from, o = 1}) => {
	const s1 = tw(f, from, from + 15), s2 = tw(f, from + 120, from + 140), s3 = tw(f, from + 260, from + 280);
	return (
		<div style={{position: 'absolute', left: 140, top: 110, width: 1640, height: 860, opacity: o, background: C.paper, borderRadius: 36, padding: '50px 70px', boxSizing: 'border-box', color: C.ink, fontFamily: F.sans}}>
			<div style={{fontWeight: 700, fontSize: 64}}>Rate finder · merchant rates</div>
			<div style={{fontSize: 30, color: '#5B6675', marginTop: 4}}>FEDAI Rules (10th ed.) as at 30 June 2026 · illustrative</div>
			<div style={{display: 'flex', gap: 40, marginTop: 40, opacity: s1}}>
				<div style={{flex: 1, fontSize: 44, fontWeight: 700}}>① In or out?</div>
				<div style={{flex: 2, fontSize: 40}}><b style={{color: '#13915C'}}>IN → bank BUYS</b> (lower) &nbsp;·&nbsp; <b style={{color: '#C93636'}}>OUT → bank SELLS</b> (higher)</div>
			</div>
			<div style={{display: 'flex', gap: 40, marginTop: 34, opacity: s2}}>
				<div style={{flex: 1, fontSize: 44, fontWeight: 700}}>② TT or bill?</div>
				<div style={{flex: 2, fontSize: 40}}>Rupees and Nostro move together → <b>TT</b><br />Bank pays first, waits, handles documents → <b>bill</b></div>
			</div>
			<div style={{marginTop: 40, opacity: s3, background: '#FFE7BF', border: '4px solid #E39A12', borderRadius: 24, padding: '24px 34px', fontSize: 36, lineHeight: 1.35}}>
				<b>Undo flips the side</b>: unpaid export bill crystallised → TT selling · cancel a purchase contract → TT selling, a sale contract → TT buying<br />
				<b>No flip</b>: unpaid import bill crystallised → bill selling (same as retirement)<br />
				<b>Override</b>: forward contract → the contract rate
			</div>
		</div>
	);
};

// ---------- Module A mind map with the Rates branch lit ----------
const BR = ['Rates', 'People who send money', 'People abroad', 'Trade documents', 'Exporters', 'Importers', '', 'Borrowing from abroad', 'Insurance and risk', 'Referees', 'Special zone', 'Pipes and plumbing'];
export const MindMap: React.FC<{f: number; from: number; nodes: string[]; o?: number; lit?: number; nodeW?: number}> = ({f, from, nodes, o = 1, lit: litIdx = 0, nodeW = 680}) => {
	const cx = 620, cy = 560;
	const la = (litIdx / 12) * 2 * Math.PI;
	const lx = cx + 430 * Math.sin(la), ly = cy - 360 * Math.cos(la);
	return (
		<svg style={{position: 'absolute', inset: 0, opacity: o}} width={1920} height={1080}>
			{BR.map((b, i) => {
				if (!b) return null;
				const a = (i / 12) * 2 * Math.PI;
				const lit = i === litIdx;
				const x = cx + 430 * Math.sin(a), y = cy - 360 * Math.cos(a);
				return (
					<g key={i} opacity={lit ? 1 : 0.35}>
						<line x1={cx} y1={cy} x2={x} y2={y} stroke={lit ? C.market : C.line} strokeWidth={lit ? 8 : 4} />
						<text x={x} y={y + (Math.cos(a) > 0 ? -16 : 40)} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={lit ? 44 : 30} fill={lit ? C.text : C.dim}>{b}</text>
					</g>
				);
			})}
			<circle cx={cx} cy={cy} r={120} fill={C.card} stroke={C.market} strokeWidth={6} />
			<text x={cx} y={cy - 8} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={34} fill={C.text}>The bank's</text>
			<text x={cx} y={cy + 34} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={34} fill={C.text}>forex counter</text>
			{nodes.map((n, i) => {
				const p = tw(f, from + i * 40, from + i * 40 + 15);
				const x = 1200, y = 200 + i * 96;
				return (
					<g key={n} opacity={p}>
						<line x1={lx} y1={ly} x2={x} y2={y + 10} stroke={C.market} strokeWidth={3} opacity={0.6} />
						<rect x={x} y={y - 24} width={nodeW} height={66} rx={14} fill={C.card} stroke={C.market} strokeWidth={3} />
						<text x={x + 20} y={y + 20} fontFamily={F.sans} fontWeight={500} fontSize={32} fill={C.text}>{n}</text>
					</g>
				);
			})}
		</svg>
	);
};
