import { useAtomValue } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";
import { usePartialSetAtom } from "./atomUtils.js";

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
};

const barAtom = atomWithReset<BarState>({
	bar: Bar.Login
});

export const useBar = () => ({
	...useAtomValue(barAtom),
	setBar: usePartialSetAtom(barAtom),
	resetBar: useResetAtom(barAtom)
});
