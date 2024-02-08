import { atom, useAtomValue } from "jotai";

/**
 * Global utils functions for interacting across components
 */
type Utils = {
	exit: () => void;
};

export const utilsAtom = atom<Utils>({
	exit: () => process.exit()
});

export const useUtils = () => useAtomValue(utilsAtom);

/**
 * Houses the current panel chosen in the menu
 */
export const mainPanelAtom = atom<string>("gur");

/**
 * The logged in user
 */
type User = {
	username: string;
};

export const userAtom = atom<User | undefined>({
	username: "Anonymous"
});
