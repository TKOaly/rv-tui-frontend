import { atom, useAtomValue } from "jotai";
import type { Cli } from "../rv.js";

/**
 * Stores the flags and input from the CLI as well as other things returned by meow
 * @see https://www.npmjs.com/package/meow
 */
export const cliAtom = atom<Cli | Record<keyof Cli, undefined>>({} as Cli);

export const useCli = () => useAtomValue(cliAtom);
