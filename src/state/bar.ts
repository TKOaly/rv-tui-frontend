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
	barDisabled: boolean;
	barReturn: boolean | undefined;
};

const barAtom = atomWithReset<BarState>({
	bar: Bar.Login,
	barDisabled: false,
	barReturn: undefined
});

export const useBar = () => ({
	...useAtomValue(barAtom),
	setBar: usePartialSetAtom(barAtom),
	resetBar: useResetAtom(barAtom)
});
