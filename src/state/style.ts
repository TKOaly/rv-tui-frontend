import { type ForegroundColorName } from "chalk";
import { type Boxes } from "cli-boxes";
import { atom, useAtomValue } from "jotai";

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
