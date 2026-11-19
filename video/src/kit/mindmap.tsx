// A lesson mind map that grows: same layout every time (place memory), one branch per idea.
// Fixes from review_look_v2: balanced growth (top → right → left → …), earlier branches dim only to 0.55,
// at most 3 leaves of about 4 words, leaves ≥ 54 px Caveat, neutral branch colours (signal colours stay exclusive),
// sub-title "whose risk? whose cost?", the corner card only at chapter cards.
import React from 'react';
import {P, FT} from './look';

export type Branch = {title: string; leaves: string[]};

const CX = 960, CY = 470, RX = 560, RY = 320;
// clock positions in teaching order: top, right-up, left-up, right-down, left-down, bottom
const POS = [0, 2, 10, 4, 8, 6];

export const GrowMap: React.FC<{centre: [string, string]; branches: Branch[]; shown: number; lit?: number; p?: number; newFrom?: number}> = ({centre, branches, shown, lit, p = 1, newFrom}) => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		{branches.slice(0, shown).map((b, i) => {
			const a = (POS[i] / 12) * 2 * Math.PI;
			// the bottom branch sits 70 px higher so its leaves stay clear of a two-line caption
			const bx = CX + RX * Math.sin(a), by = CY - RY * Math.cos(a) - (Math.cos(a) < -0.99 ? 70 : 0);
			const right = Math.sin(a) > 0.1, left = Math.sin(a) < -0.1, mid = !right && !left;
			const q = i >= (newFrom ?? shown - 1) ? p : 1;
			const dimmed = lit !== undefined && lit !== i;
			const mx = (CX + bx) / 2 + (right ? -60 : left ? 60 : 80), my = (CY + by) / 2 + 40;
			const px = mid ? bx - 180 : right ? bx : bx - 360; // pill box left
			const top = mid && Math.cos(a) > 0;
			// leaves: right of the pill for the top branch, under it on the sides; the bottom branch puts them under its
			// pill in two short lines (three stacked lines ran into the caption; beside the pill they hit the Mode leaves)
			const bottom = mid && !top;
			const leaves = bottom ? [b.leaves.slice(0, 2).join(' · '), ...b.leaves.slice(2)] : b.leaves;
			const lx = top ? bx + 205 : bottom ? bx : right ? bx + 14 : bx - 14;
			const ly0 = top ? by + 18 - ((leaves.length - 1) * 56) / 2 : by + 90;
			const isLit = lit === i;
			return (
				<g key={i} opacity={dimmed ? 0.55 : 1}>
					<path d={`M${CX} ${CY} Q ${mx} ${my} ${bx} ${by}`} stroke={isLit ? P.ink : P.branch} strokeWidth={12} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - Math.min(1, q * 1.6)} />
					<g opacity={Math.max(0, q * 2 - 0.6)}>
						<rect x={px} y={by - 38} width={360} height={76} rx={38} fill={isLit ? P.ink : '#fff'} stroke={P.ink} strokeWidth={4} />
						<text x={px + 180} y={by + 14} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={38} fill={isLit ? '#fff' : P.ink}>{b.title}</text>
						{leaves.map((t, k) => (
							<text key={k} x={lx} y={ly0 + k * 56} textAnchor={top || right ? 'start' : bottom ? 'middle' : 'end'} fontFamily={FT.hand} fontWeight={700} fontSize={56} fill={P.ink} opacity={Math.max(0, Math.min(1, q * 3 - 1.4 - k * 0.15))}>{t}</text>
						))}
					</g>
				</g>
			);
		})}
		<ellipse cx={CX} cy={CY} rx={240} ry={125} fill="#fff" stroke={P.ink} strokeWidth={6} />
		<text x={CX} y={CY - 6} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={54} fill={P.ink}>{centre[0]}</text>
		<text x={CX} y={CY + 52} textAnchor="middle" fontFamily={FT.hand} fontWeight={700} fontSize={50} fill={P.soft}>{centre[1]}</text>
	</svg>
);

/** The Incoterms map (A07), in teaching order. Leaves: at most 3, about 4 words. */
export const INCO_MAP: {centre: [string, string]; branches: Branch[]} = {
	centre: ['Incoterms 2020', 'whose risk? whose cost?'],
	branches: [
		{title: 'What they are', leaves: ['ICC, 11 rules', 'version 2020', '"CIF Rotterdam 2020"']},
		{title: 'Decide 3 things', leaves: ['risk point', 'costs', 'customs clearance']},
		{title: 'The road', leaves: ['7 stations', 'red baton = risk', 'blue line = cost']},
		{title: 'E · F · C · D', leaves: ['E, F, D: same point', 'C: risk early,', 'cost far']},
		{title: 'Mode', leaves: ['sea only: 4', 'any mode: 7', 'containers: FCA/CIP']},
		{title: 'Insurance', leaves: ['only CIF, CIP', 'CIF: C · CIP: A', 'at least 110%']},
	],
};

/** Chapter-card "where are we" card: big enough for a phone; done ✓, now (bold), next (soft). */
export const MiniMap: React.FC<{branches: Branch[]; lit: number; x?: number; y?: number}> = ({branches, lit, x = 1340, y = 200}) => (
	<div style={{position: 'absolute', left: x, top: y, width: 480, background: '#fff', border: `4px solid ${P.ink}`, borderRadius: 22, padding: '18px 24px', fontFamily: FT.sans}}>
		<div style={{fontWeight: 700, fontSize: 30, letterSpacing: 3, color: P.soft, marginBottom: 8}}>LESSON MAP</div>
		{branches.map((b, i) => (
			<div key={i} style={{fontSize: 38, lineHeight: '56px', fontWeight: i === lit ? 700 : 600, color: i <= lit ? P.ink : P.soft}}>
				{i < lit ? '✓ ' : i === lit ? '▶ ' : '· '}{b.title}
			</div>
		))}
	</div>
);
