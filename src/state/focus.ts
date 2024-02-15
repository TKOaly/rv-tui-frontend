import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";
import { RefObject } from "react";
import useSelect from "../lib/select.js";
import { usePartialSetAtom } from "./atomUtils.js";
import { PrimaryPanel } from "./navigation.js";

export type FocusState = {
	menuPanelEnabled: boolean;
	barEnabled: boolean;
	barHidden: boolean;
	panelEnabled: boolean;
	focusId?: string;
};

export const menuAndBarFocused: FocusState = {
	menuPanelEnabled: true,
	barEnabled: true,
	panelEnabled: false,
	barHidden: false
} as const;

export const primaryPanelFocused: FocusState = {
	menuPanelEnabled: false,
	barEnabled: false,
	panelEnabled: true,
	barHidden: true
} as const;

export const barHidden: FocusState = {
	menuPanelEnabled: false,
	barEnabled: false,
	panelEnabled: true,
	barHidden: true
} as const;

export const barAndPanelFocused: FocusState = {
	menuPanelEnabled: false,
	barEnabled: true,
	panelEnabled: true,
	barHidden: false
} as const;

export const focusSetting: { [key in PrimaryPanel]: FocusState } = {
	[PrimaryPanel.None]: { ...menuAndBarFocused, focusId: undefined },
	[PrimaryPanel.Returns]: { ...barAndPanelFocused, focusId: undefined },
	[PrimaryPanel.Barcodes]: { ...barAndPanelFocused, focusId: undefined },
	[PrimaryPanel.PriceCheck]: { ...barAndPanelFocused, focusId: undefined },
	[PrimaryPanel.NewUser]: { ...barHidden, focusId: undefined },
	[PrimaryPanel.Purchases]: { ...barHidden, focusId: undefined },
	[PrimaryPanel.Account]: { ...primaryPanelFocused, focusId: undefined },
	[PrimaryPanel.RFID]: { ...primaryPanelFocused, focusId: undefined },
	[PrimaryPanel.Debug]: { ...primaryPanelFocused, focusId: undefined },
	[PrimaryPanel.Nag]: { ...menuAndBarFocused, focusId: undefined },
	[PrimaryPanel.Deposit]: { ...barHidden, focusId: undefined },
	[PrimaryPanel.Settings]: { ...barHidden, focusId: undefined },
	[PrimaryPanel.Wiki]: { ...barHidden, focusId: undefined },
	[PrimaryPanel.Scratchpad]: { ...barHidden, focusId: undefined },
	[PrimaryPanel.Art]: { ...primaryPanelFocused, focusId: undefined },
	[PrimaryPanel.Receipt]: { ...primaryPanelFocused, focusId: undefined },
	[PrimaryPanel.Search]: { ...barAndPanelFocused, focusId: undefined },
	[PrimaryPanel.Error]: { ...menuAndBarFocused, focusId: undefined },
	[PrimaryPanel.Leaderboard]: { ...menuAndBarFocused, focusId: undefined },
	[PrimaryPanel.Gur]: { ...menuAndBarFocused, focusId: undefined },
	[PrimaryPanel.Coffee]: { ...barAndPanelFocused, focusId: undefined },
	[PrimaryPanel.Default]: { ...menuAndBarFocused, focusId: undefined }
};

/**
 * Stores which panels are focused
 * Is used to control which panels receive which inputs
 */
const focusAtom = atomWithReset<FocusState>({
	menuPanelEnabled: true,
	barEnabled: true,
	panelEnabled: false,
	barHidden: false
});

const changeFocusAtom = atom(null, (_, set, update: PrimaryPanel) => {
	set(focusAtom, focusSetting[update]);
});

export const useFocusState = () => ({
	...useAtomValue(focusAtom),
	setFocus: usePartialSetAtom(focusAtom),
	changeFocus: useSetAtom(changeFocusAtom),
	resetFocus: useResetAtom(focusAtom)
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
