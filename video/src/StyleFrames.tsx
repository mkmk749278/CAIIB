// Style frames for the v2 look (one still per frame), shown to the owner before the full lesson is rebuilt.
// Rev 1 after the independent review (course/bfm/A/A9_incoterms/review_look_v2.md).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Page, Header, Caption, Note, Thoughts, PauseCard, TitleCard, P, FT} from './kit/look';
import {Journey, RuleCard} from './kit/journey';
import {GrowMap, MiniMap, INCO_MAP} from './kit/mindmap';

const H = 'CAIIB · BFM · A07 INCOTERMS';

export const StyleFrames: React.FC = () => {
	const f = useCurrentFrame();
	if (f === 0)
		return (
			<Page>
				<Header left={H} right="CHAPTER 2 · THE ROAD" />
				<RuleCard code="CIF" name="Cost, Insurance and Freight" sea x={180} y={80} />
				<Journey risk={3} cost={4} ship={0.5} split={1} costLabel="freight to Rotterdam port" />
				<Caption text="Under CIF, the risk passes on board at Chennai, but she pays the freight to Rotterdam port." />
			</Page>
		);
	if (f === 1)
		return (
			<Page>
				<Header left={H} right="CHAPTER 2 · THE ROAD" />
				<GrowMap {...INCO_MAP} shown={3} lit={2} p={1} />
				<Caption text="That's chapter one done. Now, the one picture that holds all eleven rules." />
			</Page>
		);
	if (f === 2)
		return (
			<Page>
				<Header left={H} right="CHAPTER 1 · THREE LETTERS" />
				<div style={{position: 'absolute', top: 90, left: 140, width: 1000, fontFamily: FT.sans, fontWeight: 700, fontSize: 58, lineHeight: 1.15}}>Under CIF, the container is lost at sea. Whose loss?</div>
				<PauseCard f={45} a={0} n={150} />
				<Thoughts f={100} a={0} left="The seller's! She paid freight and insurance." right="The buyer's. It was already on board." wrong="left" crossAt={60} />
				<Caption text="Many of you are thinking: the seller paid freight and insurance, so it's her loss." />
			</Page>
		);
	if (f === 3)
		return (
			<Page>
				<Header left={H} right="THE WHOLE LESSON ON ONE PAGE" />
				<GrowMap {...INCO_MAP} shown={6} />
				<Note x={1440} y={960} size={56} color={P.risk} rot={-4}>draw this tonight!</Note>
			</Page>
		);
	if (f === 4)
		return (
			<Page>
				<TitleCard code="CAIIB · BFM · MODULE A · LESSON A07" title="Incoterms® 2020" sub="whose risk? whose cost?" version="Rules taught: Incoterms® 2020 (ICC) · UCP 600 · as at the IIBF cut-off of 31 Dec 2026" />
			</Page>
		);
	return (
		<Page>
			<Header left={H} right="CHAPTER 3 · INSURANCE" />
			<RuleCard code="CPT" name="Carriage Paid To" x={180} y={80} />
			<Journey risk={1} cost={4} split={1} anyMode costLabel="carriage to the named place" />
			<MiniMap branches={INCO_MAP.branches} lit={4} x={1380} y={60} />
		</Page>
	);
};
