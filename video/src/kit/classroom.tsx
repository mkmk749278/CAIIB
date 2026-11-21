// Online-class furniture (owner, 2026-11-21: "as this is an online class, any refinements?"): a class header with
// chapter progress dots, and one fixed "Your turn" look for every pause question, so learners learn to answer
// before the ring runs out.
import React from 'react';
import {P, FT} from './look';
import {tw} from '../theme';

/** "MODULE A · CLASS 1" and one dot per chapter: filled once its chapter starts, the current one ringed. */
export const ClassBar: React.FC<{f: number; label: string; starts: number[]; o?: number}> = ({f, label, starts, o = 1}) => {
	const cur = starts.filter((t) => f >= t).length - 1;
	return (
		<div style={{position: 'absolute', left: 130, top: 26, display: 'flex', alignItems: 'center', gap: 18, opacity: o, fontFamily: FT.sans, fontWeight: 700, fontSize: 24, letterSpacing: 3, color: P.soft}}>
			<span>{label}</span>
			<span style={{display: 'flex', gap: 10}}>
				{starts.map((t, i) => {
					const fill = tw(f, t - 6, t + 14);
					return <span key={i} style={{width: 18, height: 18, borderRadius: 9, border: `3px solid ${P.soft}`, background: `rgba(78,89,104,${fill})`, boxShadow: i === cur ? `0 0 0 4px ${P.gold}` : undefined}} />;
				})}
			</span>
		</div>
	);
};

/** The pause look: "YOUR TURN · answer out loud", the question, and a ring that empties over the hold. */
export const YourTurn: React.FC<{f: number; from: number; to: number; q: string; holdFrom: number; holdFrames: number; top?: boolean}> = ({f, from, to, q, holdFrom, holdFrames, top = true}) => {
	const o = Math.min(tw(f, from - 4, from + 10), 1 - tw(f, to - 8, to + 4));
	if (o <= 0) return null;
	const left = 1 - Math.max(0, Math.min(1, (f - holdFrom) / Math.max(1, holdFrames)));
	const secs = Math.ceil((left * holdFrames) / 30);
	return (
		<div style={{position: 'absolute', left: 260, right: 260, ...(top ? {top: 88} : {bottom: 150}), opacity: o, transform: `translateY(${(1 - o) * 20}px)`, display: 'flex', alignItems: 'center', gap: 28, background: '#fff', border: `4px solid ${P.ink}`, borderRadius: 28, padding: '16px 32px', boxShadow: `8px 8px 0 ${P.gold}`}}>
			<svg width={104} height={104}>
				<circle cx={52} cy={52} r={42} fill="none" stroke={P.grid} strokeWidth={10} />
				<circle cx={52} cy={52} r={42} fill="none" stroke={P.ink} strokeWidth={10} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - left} transform="rotate(-90 52 52)" strokeLinecap="round" />
				<text x={52} y={66} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={40} fill={P.ink}>{f >= holdFrom ? secs : '?'}</text>
			</svg>
			<div>
				<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 28, letterSpacing: 4, color: '#9A5B00'}}>YOUR TURN · ANSWER OUT LOUD</div>
				<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 46, color: P.ink, lineHeight: 1.15}}>{q}</div>
			</div>
		</div>
	);
};
