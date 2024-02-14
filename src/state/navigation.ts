import { useAtomValue } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";
import { usePartialSetAtom } from "./atomUtils.js";

/**
 * Enum corresponding to larger panels that require more space or are prioritized above secondary panels.
 * Secondary panels shouldn't be used to handle e.g. subnavigation of primary panels to minimize sharing state
 * thus primary panels should handle their own subnavigation.
 */
export enum PrimaryPanel {
	None = 1,
	Returns = 2,
	Barcodes = 3,
	PriceCheck = 4,
	NewUser = 5,
	Purchases = 6,
	Account = 7,
	RFID = 8,
	Debug = 9,
	Nag = 10,
	Deposit = 11,
	Settings = 12,
	Wiki = 13,
	Scratchpad = 14,
	Art = 15,
	Receipt = 16,
	Search = 17,
	Error = 18,
	Leaderboard = 19,
	Gur = 20,
	Coffee = 21,
	Default = 22
}

/**
 * Enum corresponding to smaller panels that can be displayed alongside primary panels.
 */
export enum SecondaryPanel {
	None = 1,
	User = 2
}

export type NavigationState = {
	primaryPanel: PrimaryPanel | null;
	secondaryPanel: SecondaryPanel | null;
	showSecondary: boolean;
};

/**
 * Stores which panels should be displayed
 */
const navigationAtom = atomWithReset<NavigationState>({
	primaryPanel: PrimaryPanel.Default,
	secondaryPanel: SecondaryPanel.User,
	showSecondary: true
});

/**
 * Returns the current navigation state and a functions to update and reset it.
 * Update Function can be given partial state to update.
 */
export const useNavigation = () => ({
	...useAtomValue(navigationAtom),
	setNavigation: usePartialSetAtom(navigationAtom),
	resetNavigation: useResetAtom(navigationAtom)
});
