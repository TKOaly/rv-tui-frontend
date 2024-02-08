import { type ForegroundColorName } from "chalk";
import { type Boxes } from "cli-boxes";
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
 * The style variables used throughout the app
 * Can be reactively updated with useSetAtom()
 */
export type Color = ForegroundColorName;

type Styles = {
	borderColor: Color;
	accentColor: Color;
	borderStyle: keyof Boxes;
};

export const stylesAtom = atom<Styles>({
	borderColor: "white",
	accentColor: "yellow",
	borderStyle: "round"
});

export const useStyles = () => useAtomValue(stylesAtom);

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
