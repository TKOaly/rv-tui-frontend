import { atom, useAtomValue } from "jotai";
import type { ReactNode } from "react";

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
 * Houses the current displayed dialog shown on top of all other components
 */
export const dialogAtom = atom<ReactNode | null>(null);

/**
 * The logged in user
 */
type User = {
	username: string;
};

export const userAtom = atom<User | undefined>(undefined);
