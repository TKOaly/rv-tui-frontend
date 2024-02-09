import { atom } from "jotai";

/**
 * Houses the current panel chosen in the menu
 */
export const mainPanelAtom = atom<string>("gur");
