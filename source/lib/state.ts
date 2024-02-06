import {atom} from 'jotai';
import {type Boxes} from 'cli-boxes';
import {ReactNode} from 'react';

type Styles = {
	borderColor: string;
	accentColor: string;
	borderStyle: keyof Boxes;
};

export const stylesAtom = atom<Styles>({
	borderColor: 'white',
	accentColor: 'yellow',
	borderStyle: 'round',
});

export const styles = atom(get => get(stylesAtom));

export const dialogAtom = atom<ReactNode | null>(null);
