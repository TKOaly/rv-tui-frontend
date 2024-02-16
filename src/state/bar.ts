import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";
import { BarVariant } from "../ui/panels/Bar/BarBox.js";

export enum Bar {
	Login = 1,
	Barcode = 2,
	Hidden = 3
}

type BarState = {
	bar: Bar;
	notification?: {
		message: string;
		variant: BarVariant;
		timeout: number; // In milliseconds, -1 for no timeout
	};
};

/**
 * Determines which bar is currently displayed
 * Also contains a possible notification to be displayed in the bar
 */
const barAtom = atomWithReset<BarState>({
	bar: Bar.Login,
	notification: undefined
});

// The current content of the bar (read-only)
// Doesn't control bar content so can only be used to read the current content
// and determine if the bar is empty
const barContentAtom = atomWithReset<string>("");

// A helper forwhether the bar is empty
const barEmptyAtom = atom(
	get => get(barContentAtom) === undefined || get(barContentAtom).length === 0
);

export const useBar = () => ({
	...useAtomValue(barAtom),
	setBar: useSetAtom(barAtom),
	resetBar: useResetAtom(barAtom),
	barContent: useAtomValue(barContentAtom),
	barIsEmpty: useAtomValue(barEmptyAtom),
	setBarContent: useSetAtom(barContentAtom)
});
