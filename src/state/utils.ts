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
