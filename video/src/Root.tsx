import React from 'react';
import {Composition, continueRender, delayRender} from 'remotion';
import {A1} from './A1';
import lines from './lines.json';
import {loadFonts} from './theme';

const h = delayRender('fonts');
loadFonts().then(() => continueRender(h)).catch(() => continueRender(h));

export const Root: React.FC = () => (
	<Composition id="A1" component={A1} durationInFrames={(lines as {durationInFrames: number}).durationInFrames} fps={30} width={1920} height={1080} />
);
