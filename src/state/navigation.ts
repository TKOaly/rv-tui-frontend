import { atom, useAtomValue, useSetAtom } from "jotai";

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
	Stats = 6,
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
	Leaderboard = 19
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
const navigationAtom = atom<NavigationState>({
	primaryPanel: PrimaryPanel.Art,
	secondaryPanel: SecondaryPanel.User,
	showSecondary: true
});

const navigation = atom(
	get => get(navigationAtom),
	(get, set, update: Partial<NavigationState>) => {
		set(navigationAtom, { ...get(navigationAtom), ...update });
	}
);

/**
 * Returns the current navigation state and a function to update it
 */
export const useNavigation = () => ({
	...useAtomValue(navigation),
	setNavigation: useSetAtom(navigation)
});
