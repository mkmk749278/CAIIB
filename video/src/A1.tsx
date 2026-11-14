import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame} from 'remotion';
import lines from './lines.json';
import {C, F, tw, env, inr} from './theme';
import {Label, Tag, Card, PauseCard, ChapterCard, Person, Bubble, Flow, Board} from './parts';
import {Ladder, NostroClock, Calculator, typeKeys, CounterTop, RateFinder, MindMap, RungKey, rungY} from './rich';

type L = {id: string; speaker: string; text: string; start: number; dur: number; hold: number; audio: string | null};
const LS = (lines as {lines: L[]}).lines;
const by: Record<string, L> = Object.fromEntries(LS.map((l) => [l.id, l]));
const S = (id: string) => by[id].start;
const E = (id: string) => by[id].start + by[id].dur; // end of speech
const H = (id: string) => E(id) + by[id].hold; // end of thinking time

// a scene is visible from a to b with a short cross-fade; children get the absolute frame
const Scene: React.FC<{a: number; b: number; children: (f: number) => React.ReactNode}> = ({a, b, children}) => {
	const f = useCurrentFrame();
	if (f < a - 1 || f > b + 1) return null;
	return <AbsoluteFill style={{opacity: env(f, a, b, 9)}}>{children(f)}</AbsoluteFill>;
};

const BOARD4 = ['85.2719', '85.3573', '85.5054', '85.6337'];

// slow, continuous camera move so no frame is ever dead (two incommensurate sines)
const Drift: React.FC<{f: number; children: React.ReactNode}> = ({f, children}) => {
	const z = 1.035 + 0.02 * Math.sin(f / 170);
	const x = 14 * Math.sin(f / 230), y = 9 * Math.sin(f / 190 + 1.3);
	return <AbsoluteFill style={{transform: `translate(${x}px, ${y}px) scale(${z})`}}>{children}</AbsoluteFill>;
};

// sentence-by-sentence captions of the spoken line (speaker named, active sentence bright)
const Captions: React.FC<{f: number}> = ({f}) => {
	const l = LS.find((x) => f >= x.start && f < x.start + x.dur + 6);
	if (!l) return null;
	const sents = l.text.match(/[^.?!]+[.?!]*/g)?.map((t) => t.trim()).filter(Boolean) ?? [l.text];
	const total = sents.reduce((a, t) => a + t.length, 0);
	const p = (f - l.start) / Math.max(1, l.dur);
	let acc = 0, idx = 0;
	for (let i = 0; i < sents.length; i++) { acc += sents[i].length / total; if (p < acc) { idx = i; break; } idx = i; }
	const meera = l.speaker === 'meera';
	return (
		<div style={{position: 'absolute', left: 120, right: 120, bottom: 26, display: 'flex', justifyContent: 'center'}}>
			<div style={{background: 'rgba(5,9,14,0.82)', borderRadius: 18, padding: '12px 26px', maxWidth: 1600, fontFamily: F.sans, fontWeight: 600, fontSize: 44, lineHeight: 1.25, color: C.text, textAlign: 'center'}}>
				{meera ? <span style={{color: C.meera, fontWeight: 700}}>MEERA · </span> : null}
				{sents[idx]}
			</div>
		</div>
	);
};

export const A1: React.FC = () => {
	const f = useCurrentFrame();
	const ch1 = S('M01') - 75, ch2 = S('M03') - 75, ch3 = S('N41') - 75;
	const flip1 = tw(f, S('N06'), S('N06') + 20);
	const flipUndo = tw(f, S('N54'), S('N54') + 20);
	return (
		<AbsoluteFill style={{background: `radial-gradient(1400px 900px at 50% 40%, ${C.bg2}, ${C.bg})`, fontFamily: F.sans}}>
			<Drift f={f}>
			{/* ---------------- Cold open ---------------- */}
			<Scene a={0} b={ch1}>
				{(f) => (
					<>
						<CounterTop flip={0} bankSide={false}>
							<Board x={1080} y={70} rates={BOARD4.map((v) => ({v}))} o={tw(f, 10, 30)} />
							<Person x={260} y={640} color="#E8A87C" label="Father" o={tw(f, S('N02'), S('N02') + 15)} />
							<Person x={640} y={640} color="#7FB8D9" label="Exporter" o={tw(f, S('N02') + 60, S('N02') + 75)} />
							<Card x={1080} y={540} w={760} h={150} o={tw(f, S('N02'), S('N02') + 15)} bg="#0A1018">
								<Label x={30} y={22} size={40}>Fee: USD 18,000 out</Label>
								<Label x={30} y={80} size={40} color={C.dim}>Shrimp bill: USD 40,000 in</Label>
							</Card>
							<Card x={1080} y={710} w={760} h={100} o={tw(f, S('N03'), S('N03') + 12)} border={C.undo} bg="#2A2010">
								<Label x={30} y={26} size={46} weight={700} color={C.undo}>Wrong price = ₹2,665.80 lost</Label>
							</Card>
						</CounterTop>
						<Tag text="ILLUSTRATIVE · VISAKHAPATNAM BRANCH" />
						<Label x={60} y={110} size={28} color={C.dim} o={env(f, 0, S('N02'), 12)}>Meera is a fictional character. Both voices are AI-generated.</Label>
						<PauseCard f={f} from={S('N04') + 30} to={H('N04')} q="Father: the HIGHER price or the LOWER?" timerFrom={E('N04')} timerFrames={by.N04.hold} />
					</>
				)}
			</Scene>

			{/* ---------------- Chapter 1 ---------------- */}
			<ChapterCard f={f} from={ch1} n={1} title="Which side of the counter?" />
			<Scene a={ch1 + 60} b={ch2}>
				{(f) => {
					const bank = flip1 >= 0.5;
					const ph = (id: string) => f >= S(id);
					return (
						<>
							<CounterTop flip={flip1} bankSide={bank}>
								{!bank ? <Person x={860} y={620} color={C.meera} label="Meera" /> : <Person x={1640} y={190} s={0.85} color={C.meera} label="Meera" o={0.6} />}
								{bank && ph('N07') && f < S('N09') ? <Flow x1={960} y1={980} x2={960} y2={380} color={C.buy} word="IN → bank BUYS" p={tw(f, S('N07'), S('N07') + 25)} /> : null}
								{bank && ph('N08') && f < S('N09') ? <Flow x1={1500} y1={380} x2={1500} y2={980} color={C.sell} word="OUT → bank SELLS" p={tw(f, S('N08'), S('N08') + 25)} /> : null}
								{ph('N11') && f < S('N12') ? <Flow x1={760} y1={380} x2={1500} y2={160} color={C.sell} word="Fee → university: bank SELLS" lx={1180} ly={60} p={tw(f, S('N11'), S('N11') + 30)} /> : null}
								{ph('N12') && f < S('M02') ? <Flow x1={1500} y1={980} x2={760} y2={420} color={C.buy} word="Bill → bank BUYS" lx={1180} ly={700} p={tw(f, S('N12'), S('N12') + 30)} /> : null}
							</CounterTop>
							<Bubble f={f} from={S('M01')} to={E('M01') + 50} text="The father is buying dollars, so he gets the buying rate…" x={140} y={150} />
							{f >= S('N05') && f < S('N06') ? <Label x={960} y={160} w={1200} align="center" size={110} weight={700} color={C.sell} o={tw(f, S('N05') + 60, S('N05') + 75)}>Exactly backwards.</Label> : null}
							{f >= S('N09') && f < S('N10') ? (
								<>
									<Board x={160} y={200} w={760} title="AIRPORT MONEY-CHANGER" rates={[{label: 'BUY', v: '84.10', color: C.buy}, {label: 'SELL', v: '87.60', color: C.sell}]} o={tw(f, S('N09'), S('N09') + 12)} />
									<Board x={1000} y={200} w={760} title="BANK · TT RATES" rates={[{label: 'BUY', v: '85.3573', color: C.buy}, {label: 'SELL', v: '85.5054', color: C.sell}]} o={tw(f, S('N09') + 40, S('N09') + 55)} />
									<Label x={960} y={640} w={1500} align="center" size={50} color={C.dim} o={tw(f, S('N09') + 90, S('N09') + 105)}>Same idea · the bank's gap is a few paise</Label>
								</>
							) : null}
							{f >= S('N10') && f < S('N11') ? (
								<Card x={360} y={260} w={1200} h={300} border={C.market}>
									<Label x={600} y={40} w={1100} align="center" size={42} color={C.dim}>In a direct quote (₹ per unit)</Label>
									<Label x={600} y={110} w={1100} align="center" size={64} weight={700} color={C.buy}>▼ BUY rate = lower</Label>
									<Label x={600} y={190} w={1100} align="center" size={64} weight={700} color={C.sell}>▲ SELL rate = higher</Label>
								</Card>
							) : null}
							<Bubble f={f} from={S('M02')} to={E('M02') + 30} text="I was standing on the wrong side of my own counter." x={140} y={150} />
							{f >= S('N13') && f < S('N14') ? <Card x={260} y={360} w={1400} h={200} border={C.text}><Label x={700} y={60} w={1300} align="center" size={64} weight={700}>Name every deal from the BANK's side.</Label></Card> : null}
							<PauseCard f={f} from={E('N14')} to={H('N14')} q="Son sends USD 2,500 home: bank BUYS or SELLS?" timerFrom={E('N14')} timerFrames={by.N14.hold} />
							{f >= S('N15') ? <Flow x1={960} y1={980} x2={960} y2={380} color={C.buy} word="IN → bank BUYS" p={tw(f, S('N15'), S('N15') + 20)} /> : null}
						</>
					);
				}}
			</Scene>

			{/* ---------------- Chapter 2 ---------------- */}
			<ChapterCard f={f} from={ch2} n={2} title="The rate ladder" />
			<Scene a={ch2 + 60} b={S('N20')}>
				{(f) => (
					<>
						<Bubble f={f} from={S('M03')} to={E('M03') + 20} text="Four prices on the board. Which buying rate? Which selling rate?" x={140} y={140} />
						{f >= S('N17') ? (
							<>
								<Label x={960} y={150} w={1600} align="center" size={42} color={C.dim}>Interbank · banks trading with banks</Label>
								<div style={{position: 'absolute', left: 0, right: 0, top: 260, textAlign: 'center', fontFamily: F.mono, fontWeight: 700, fontSize: 190, color: C.market}}>85.40 / 85.42</div>
								<Label x={560} y={520} w={600} align="center" size={50} weight={700} color={C.text} o={tw(f, S('N18'), S('N18') + 12)}>bid ↑ buyer pays</Label>
								<Label x={1360} y={520} w={600} align="center" size={50} weight={700} color={C.text} o={tw(f, S('N18') + 70, S('N18') + 82)}>ask / offer ↑ seller wants</Label>
								<Card x={360} y={700} w={1200} h={190} o={tw(f, S('N19'), S('N19') + 12)}>
									<Label x={600} y={30} w={1100} align="center" size={50} weight={700}>Direct quote: ₹ per 1 USD · ₹ per 100 JPY</Label>
									<Label x={600} y={110} w={1100} align="center" size={36} color={C.dim}>FEDAI Rule 5.7</Label>
								</Card>
							</>
						) : null}
					</>
				)}
			</Scene>
			<Scene a={S('N20')} b={S('N23')}>
				{(f) => (
					<>
						<Ladder x={580} y={175} show={{mkt: 1, ttS: tw(f, S('N21'), S('N21') + 15), billS: tw(f, S('N21') + 20, S('N21') + 35), ttB: tw(f, S('N21') + 40, S('N21') + 55), billB: tw(f, S('N21') + 60, S('N21') + 75)}} />
						<Card x={300} y={800} w={1320} h={110} o={tw(f, S('N22'), S('N22') + 12)} border={C.undo}>
							<Label x={660} y={26} w={1260} align="center" size={44} weight={700}>Margin: each bank's own · the exam sum gives it</Label>
						</Card>
					</>
				)}
			</Scene>
			<Scene a={S('N23')} b={S('N26')}>
				{(f) => <NostroClock f={f} from={f < S('N25') ? S('N24') : S('N25')} mode={f < S('N25') ? 'tt' : 'bill'} />}
			</Scene>
			<Scene a={S('N26')} b={S('N31')}>
				{(f) => {
					const order: RungKey[] = ['billS', 'ttS', 'mkt', 'ttB', 'billB'];
					let hi: RungKey | null = null;
					if (f >= S('N26') && f < S('N28')) hi = 'billB';
					if (f >= S('N28') && f < S('N29')) hi = 'billS';
					if (f >= S('N29') && f < S('N30')) hi = order[Math.min(4, Math.floor((f - S('N29')) / 40))];
					const notes = tw(f, S('N30'), S('N30') + 20);
					return (
						<>
							<Ladder x={580} y={150} step={130} show={{billS: 1, ttS: 1, mkt: 1, ttB: 1, billB: 1, notesS: notes, notesB: notes}} hi={hi} />
							{f >= S('N27') && f < S('N28') ? <Card x={1380} y={760} w={480} h={150} border={C.undo}><Label x={240} y={20} w={440} align="center" size={36} weight={700}>Interest for the wait: charged separately (A5)</Label></Card> : null}
							{f >= S('N30') ? <Label x={60} y={880} size={36} color={C.dim} o={notes}>Later: currency notes · forward premium on bill rates (A5)</Label> : null}
						</>
					);
				}}
			</Scene>
			<Scene a={S('N31')} b={ch3}>
				{(f) => {
					const seq = [
						...typeKeys(S('N32') + 20, ['8', '5', '.', '4', '2', '×', '1', '.', '0', '0', '1', '='], {11: '85.50542'}),
						...typeKeys(S('N34') + 20, ['8', '5', '.', '4', '0', '×', '0', '.', '9', '9', '9', '5', '='], {12: '85.3573'}),
						...typeKeys(S('N36'), ['8', '5', '.', '4', '0', '×', '0', '.', '9', '9', '8', '5', '='], {12: '85.2719'}),
						...typeKeys(S('N38'), ['8', '5', '.', '5', '0', '5', '4', '2', '×', '1', '.', '0', '0', '1', '5', '='], {15: '85.63367813'}),
						...typeKeys(S('N39') + 90, ['8', '5', '.', '4', '2', '×', '1', '.', '0', '0', '2', '5', '='], {12: '85.63355'}),
					];
					const v: Partial<Record<RungKey, string>> = {mkt: ''};
					if (f >= S('N33')) v.ttS = '85.5054';
					if (f >= E('N34')) v.ttB = '85.3573';
					if (f >= S('N36') + 100) v.billB = '85.2719';
					if (f >= S('N38') + 120) v.billS = '85.6337';
					return (
						<>
							<Card x={60} y={60} w={1180} h={180} border={C.market}>
								<Label x={30} y={22} size={36} color={C.dim}>Interbank 85.40 / 85.42 · margins (illustrative)</Label>
								<Label x={30} y={84} size={33} weight={700}>TT buy 0.05% · bill buy 0.15% · TT sell 0.10% · bill sell +0.15% on TT sell</Label>
							</Card>
							<Ladder x={60} y={340} step={120} w={1180} show={{billS: 1, ttS: 1, mkt: 1, ttB: 1, billB: 1}} values={v} />
							<Calculator f={f} x={1330} y={140} seq={seq} />
							{f >= S('N31') && f < S('N32') ? <Card x={1330} y={880} w={520} h={120} border={C.undo}><Label x={260} y={30} w={500} align="center" size={38} weight={700}>× 1.001 · × 0.9995</Label></Card> : null}
							<PauseCard f={f} from={E('N35')} to={H('N35')} q="Bill buying = 85.40 less 0.15%" timerFrom={E('N35')} timerFrames={by.N35.hold} />
							<PauseCard f={f} from={E('N37')} to={H('N37')} q="Bill selling = TT selling + 0.15%" timerFrom={E('N37')} timerFrames={by.N37.hold} />
							{f >= S('N39') && f < S('N40') ? <Card x={1300} y={790} w={580} h={170} border={C.sell} bg="#2A1416"><Label x={290} y={22} w={540} align="center" size={36} weight={700} color={C.sell}>✗ 85.42 × 1.0025</Label><Label x={290} y={80} w={540} align="center" size={36} weight={700} color={C.sell}>= 85.6336 · one digit off</Label></Card> : null}
						</>
					);
				}}
			</Scene>

			{/* ---------------- Chapter 3 ---------------- */}
			<ChapterCard f={f} from={ch3} n={3} title="Five deals, one map" />
			<Scene a={ch3 + 60} b={S('M04')}>
				{(f) => {
					const deals: {q: string; a: string; rung: RungKey; rule: string}[] = [
						{q: 'N42', a: 'N43', rung: 'ttB', rule: 'Inward remittance · Rule 4.4'},
						{q: 'N44', a: 'N45', rung: 'ttS', rule: 'Outward remittance · Rule 4.1'},
						{q: 'N46', a: 'N47', rung: 'billB', rule: 'Export bill bought · Rule 2.1(a)'},
						{q: 'N48', a: 'N49', rung: 'ttB', rule: 'Collection, after Nostro credit · Rule 2.5(a)'},
						{q: 'N50', a: 'N51', rung: 'billS', rule: 'Import bill retired · Rule 3.1(a)'},
					];
					const cur = [...deals].reverse().find((d) => f >= S(d.q));
					const hi = cur && f >= S(cur.a) ? cur.rung : null;
					return (
						<>
							<Ladder x={1040} y={260} step={130} w={820} show={{billS: 1, ttS: 1, mkt: 1, ttB: 1, billB: 1}} hi={hi} />
							{cur ? (
								<Card x={60} y={300} w={900} h={360} border={hi ? C.text : C.line}>
									<Label x={40} y={40} w={820} size={50} weight={700}>{by[cur.q].text}</Label>
									{hi ? <Label x={40} y={250} w={820} size={34} color={C.dim}>{cur.rule}</Label> : null}
								</Card>
							) : null}
							{cur && !hi && f >= E(cur.q) ? <PauseCard f={f} from={E(cur.q)} to={H(cur.q)} q="Which rung?" timerFrom={E(cur.q)} timerFrames={by[cur.q].hold} /> : null}
							{hi && cur ? <svg style={{position: 'absolute', inset: 0}} width={1920} height={1080}><line x1={960} y1={480} x2={1040} y2={rungY(cur.rung, 260, 130)} stroke={C.text} strokeWidth={6} strokeDasharray="14 10" /></svg> : null}
							{f >= S('N52') ? <Card x={60} y={760} w={900} h={170} border={C.market}><Label x={40} y={30} w={820} size={44} weight={700}>Override: a forward contract → the contract rate</Label></Card> : null}
						</>
					);
				}}
			</Scene>
			<Scene a={S('M04')} b={S('M05')}>
				{(f) => {
					const bank = flipUndo < 0.5;
					return (
						<>
							<CounterTop flip={flipUndo} bankSide={bank}>
								<Person x={1640} y={bank ? 190 : 620} s={0.85} color={C.meera} label="Meera" o={0.8} />
							</CounterTop>
							<Bubble f={f} from={S('M04')} to={H('M04')} text="Unpaid export bill. We bought it at bill buying, so I reverse it at bill selling, right?" x={140} y={130} w={1100} />
							<PauseCard f={f} from={E('M04')} to={H('M04')} q="Bill selling? Yes or no" timerFrom={E('M04')} timerFrames={by.M04.hold} />
							{f >= S('N54') ? <Label x={1500} y={120} size={90} weight={700} color={C.undo} o={tw(f, S('N54') + 10, S('N54') + 25)}>UNDO ↺</Label> : null}
							{f >= S('N55') && f < S('N56') ? <Card x={260} y={330} w={1400} h={220} border={C.sell}><Label x={700} y={40} w={1300} align="center" size={72} weight={700} color={C.sell}>▲ TT SELLING</Label><Label x={700} y={140} w={1300} align="center" size={40} color={C.dim}>not bill selling · Rule 2.1(b)(iii), 2.1(d)</Label></Card> : null}
							{f >= S('N56') && f < S('N57') ? <Card x={260} y={330} w={1400} h={260} border={C.undo}><Label x={700} y={34} w={1300} align="center" size={56} weight={700}>Crystallisation</Label><Label x={700} y={120} w={1300} align="center" size={40}>unpaid on the due date · converted to a rupee debt</Label><Label x={700} y={182} w={1300} align="center" size={36} color={C.dim}>date: the bank's own policy (older books: 30th day) · Rule 2.1(b)</Label></Card> : null}
							{f >= S('N57') && f < S('N58') ? <Card x={260} y={330} w={1400} h={200} border={C.buy}><Label x={700} y={50} w={1300} align="center" size={60} weight={700} color={C.buy}>Dollars arrive later → ▼ TT BUYING</Label><Label x={700} y={130} w={1300} align="center" size={36} color={C.dim}>Rule 2.1(c)</Label></Card> : null}
							{f >= S('N58') ? <Card x={260} y={330} w={1400} h={220} border={C.undo}><Label x={700} y={40} w={1300} align="center" size={52} weight={700}>Cancel a purchase contract → TT selling</Label><Label x={700} y={110} w={1300} align="center" size={52} weight={700}>Cancel a sale contract → TT buying</Label><Label x={700} y={176} w={1300} align="center" size={32} color={C.dim}>Rule 6.4(ii) · sums in lesson A4</Label></Card> : null}
						</>
					);
				}}
			</Scene>
			<Scene a={S('M05')} b={S('N61')}>
				{(f) => (
					<>
						<Bubble f={f} from={S('M05')} to={E('M05') + 20} text="So undoing a deal flips me to the other side. Always?" x={140} y={140} />
						{f >= S('N59') && f < S('M06') ? <Card x={260} y={300} w={1400} h={260} border={C.undo}><Label x={700} y={50} w={1300} align="center" size={60} weight={700}>Unpaid IMPORT bill crystallised</Label><Label x={700} y={140} w={1300} align="center" size={56} weight={700} color={C.undo}>Flip, or no flip?</Label></Card> : null}
						<PauseCard f={f} from={E('N59')} to={H('N59')} q="Unpaid IMPORT bill crystallised: does the side flip?" timerFrom={E('N59')} timerFrames={by.N59.hold} />
						<Bubble f={f} from={S('M06')} to={E('M06') + 60} text="No. Nothing is undone. The importer still buys dollars. Bill selling." x={140} y={140} who="MEERA ✓" />
						{f >= S('N60') ? <Card x={260} y={460} w={1400} h={260} border={C.sell}><Label x={700} y={40} w={1300} align="center" size={64} weight={700} color={C.sell}>▲ BILL SELLING · no flip</Label><Label x={700} y={140} w={1300} align="center" size={40} color={C.dim}>Rule 3.1(b): same rate as retirement</Label></Card> : null}
					</>
				)}
			</Scene>
			<Scene a={S('N61')} b={S('N63')}>
				{(f) => (
					<CounterTop flip={0} bankSide>
						<Board x={1080} y={70} rates={[{label: 'Bill selling', v: '85.6337'}, {label: 'TT selling', v: '85.5054', color: C.sell}, {label: 'TT buying', v: '85.3573'}, {label: 'Bill buying', v: '85.2719', color: C.buy}]} />
						<Person x={260} y={640} color="#E8A87C" label="Father" />
						<Person x={640} y={640} color="#7FB8D9" label="Exporter" />
						<Card x={60} y={130} w={980} h={150} border={C.sell}><Label x={30} y={20} size={36} color={C.dim}>Fee: 18,000 × 85.5054 (TT selling)</Label><Label x={30} y={70} size={58} weight={700} mono>{inr(1539097.2)}</Label></Card>
						{f >= S('N62') ? <Card x={60} y={310} w={980} h={150} border={C.buy}><Label x={30} y={20} size={36} color={C.dim}>Bill: 40,000 × 85.2719 (bill buying)</Label><Label x={30} y={70} size={58} weight={700} mono>{inr(3410876)}</Label></Card> : null}
					</CounterTop>
				)}
			</Scene>
			<Scene a={S('N63')} b={S('N67')}>
				{(f) => (
					<>
						<Card x={160} y={180} w={1600} h={260}>
							<Label x={40} y={34} w={1520} size={50} weight={700}>1 · Importer sends an advance payment by wire. Which rate?</Label>
							{f >= S('N64') ? <Label x={40} y={160} w={1520} size={46} color={C.sell} weight={700}>▲ TT selling · a remittance out, not an import bill (Rule 4.1)</Label> : null}
						</Card>
						{f >= S('N65') ? (
							<Card x={160} y={500} w={1600} h={260}>
								<Label x={40} y={34} w={1520} size={50} weight={700}>2 · Highest first: TT buying, bill selling, bill buying, TT selling</Label>
								{f >= S('N66') ? <Label x={40} y={160} w={1520} size={46} weight={700} color={C.market}>Bill selling › TT selling › TT buying › bill buying</Label> : null}
							</Card>
						) : null}
						<PauseCard f={f} from={E('N63')} to={H('N63')} q="Which rate?" timerFrom={E('N63')} timerFrames={by.N63.hold} />
						<PauseCard f={f} from={E('N65')} to={H('N65')} q="Put them in order" timerFrom={E('N65')} timerFrames={by.N65.hold} />
					</>
				)}
			</Scene>
			<Scene a={S('N67')} b={S('M07')}>
				{(f) => <RateFinder f={f} from={S('N67')} />}
			</Scene>
			<Scene a={S('M07')} b={(lines as {durationInFrames: number}).durationInFrames}>
				{(f) => (
					<>
						<MindMap f={f} from={S('M07')} nodes={['Bank\'s side: in = BUY, out = SELL', 'Direct quote · bid / ask', 'Ladder: bill S · TT S · market · TT B · bill B', 'Nostro clock: together = TT', 'Undo flips · import crystallisation does not', 'Forward contract overrides']} />
						<Bubble f={f} from={S('M07')} to={E('M07') + 20} text="Next time, I'm on the right side of the counter." x={60} y={700} w={1000} />
						<Label x={60} y={40} size={34} color={C.dim}>Next · A2: the ladder in real exam sums</Label>
					</>
				)}
			</Scene>

			</Drift>
			<Captions f={f} />
			{/* ---------------- audio ---------------- */}
			{LS.filter((l) => l.audio).map((l) => (
				<Sequence key={l.id} from={l.start} durationInFrames={l.dur + 2}>
					<Audio src={staticFile(l.audio as string)} />
				</Sequence>
			))}
		</AbsoluteFill>
	);
};
