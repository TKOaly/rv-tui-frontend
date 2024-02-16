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
	primaryPanelEnabled: boolean;
	focusId?: string;
};

/**
 * Default focus settings
 */
export const menuAndBarFocused: FocusState = {
	menuPanelEnabled: true,
	barEnabled: true,
	primaryPanelEnabled: false,
	barHidden: false
} as const;

export const primaryPanelFocused: FocusState = {
	menuPanelEnabled: false,
	barEnabled: false,
	primaryPanelEnabled: true,
	barHidden: true
} as const;

export const barHidden: FocusState = {
	menuPanelEnabled: false,
	barEnabled: false,
	primaryPanelEnabled: true,
	barHidden: true
} as const;

export const barAndPanelFocused: FocusState = {
	menuPanelEnabled: false,
	barEnabled: true,
	primaryPanelEnabled: true,
	barHidden: false
} as const;

/**
 * Default focus configurations for each panel.
 * FocusId can be used to have ink focus on a specific element inside the panel when opened.
 */
export const focusConfig: { [key in PrimaryPanel]: FocusState } = {
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
} as const;

/**
 * Stores which panels should be displayed and focused.
 * Is used inside input handlers to control whether it should react to inputs.
 * Doesn't use ink's focus system as it's reserved for use inside e.g. forms and tab headers.
 * The panels specified here should receive inputs regardless of ink's focus if they are enabled.
 */
const focusAtom = atomWithReset<FocusState>(menuAndBarFocused);

/**
 * Changes the focus state to the default configuration of specified panel
 * @see focusConfig
 */
const changeFocusAtom = atom(null, (_, set, update: PrimaryPanel) => {
	set(focusAtom, focusConfig[update]);
});

export const usePanelFocusManager = () => ({
	...useAtomValue(focusAtom), // The current values specified in FocusState
	changeFocusSetting: usePartialSetAtom(focusAtom), // Allows to change a specific property of the focus state
	changeFocusConfig: useSetAtom(changeFocusAtom),
	resetPanelFocus: useResetAtom(focusAtom)
});

// =============================== MENU ===============================

/**
 * Stores a ref of the application menu select hook instance to access its methods from outside the component
 */
const menuRefAtom = atom<RefObject<ReturnType<typeof useSelect>> | undefined>(
	undefined
);

/**
 * Sets the main menu ref
 * @example
 * const ref = useSelectRef(); // Pass this to he Select component
 * useSetMenuRef(ref);
 */
export const useSetMenuRef = (ref: RefObject<ReturnType<typeof useSelect>>) =>
	useSetAtom(menuRefAtom)(ref);

/**
 * Exposes methods of the main menu select hook instance globally
 * @example
 * const { reset } = useMenu();
 * reset(); // Resets the main menu focus to the first item and deselects any item
 * @see useSetMenuRef
 */
export const useMenu = () => ({
	reset: useAtomValue(menuRefAtom)?.current?.reset
});
