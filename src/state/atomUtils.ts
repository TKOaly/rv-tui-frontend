import type { WritableAtom } from "jotai";
import { atom, useSetAtom } from "jotai";

/**
 * An atom with a setter that allows for Partial<> update values allowing
 * to update only the given properties of the atom while keeping the others intact.
 * @param atomToSet any WritableAtom
 * @returns a read-only atom
 */
const partialSetAtom = <T>(
	atomToSet: WritableAtom<T, [T & Partial<T>], unknown>
) => {
	return atom(null, (get, set, update: Partial<T>) => {
		set(atomToSet, { ...get(atomToSet), ...update });
	});
};

/**
 * A hook that returns an atom set function that allows for Partial<> update values
 * allowing to update only the given properties of the atom while keeping the others intact.
 * @param atom any WritableAtom
 * @returns an atom set function
 */
export const usePartialSetAtom = <T>(
	atom: WritableAtom<T, [T & Partial<T>], unknown>
) => useSetAtom(partialSetAtom(atom));
