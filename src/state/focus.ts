import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset } from "jotai/utils";
import { RefObject } from "react";
import useSelect from "../lib/select";

export type FocusState = {
	menuPanelEnabled: boolean;
	barEnabled: boolean;
	BarHidden: boolean;
};

/**
 * Stores which panels are focused
 * Is used to control which panels receive which inputs
 */
export const focusAtom = atomWithReset<FocusState>({
	menuPanelEnabled: true,
	barEnabled: true,
	BarHidden: false
});

/**
 * Menu ref for resetting the menu from outside the menu component
 */
const menuRefAtom = atom<RefObject<ReturnType<typeof useSelect>> | undefined>(
	undefined
);

export const useSetMenuRef = (ref: RefObject<ReturnType<typeof useSelect>>) =>
	useSetAtom(menuRefAtom)(ref);

export const useMenu = () => ({
	reset: useAtomValue(menuRefAtom)?.current?.reset
});
