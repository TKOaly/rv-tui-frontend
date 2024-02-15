import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";
import { BarVariant } from "../ui/panels/Bar/BarBox.js";

export enum Bar {
	Login = 1,
	Barcode = 2,
	Hidden = 3
}

/**
 * The logged in user
 */
type BarState = {
	bar: Bar;
	notification?: {
		message: string;
		variant: BarVariant;
		timeout: number; // In milliseconds, -1 for no timeout
	};
};

const barAtom = atomWithReset<BarState>({
	bar: Bar.Login,
	notification: undefined
});

const barContentAtom = atomWithReset<string>("");

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
