import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";

type User = {
	username: string;
};

const userAtom = atomWithReset<User | undefined>(undefined);

/**
 * @todo try to authenticate the user
 */
const userLoginAtom = atom(
	null,
	(get, set, update: { password: string; username: string }) => {
		set(userAtom, { ...get(userAtom), username: update.username });
	}
);

/**
 * Returns basic user information
 * Explicitly returns
 * @returns The logged in user
 */
export const useUser = () => useAtomValue(userAtom);

/**
 * Exposes a function to clear the user data
 * This is used to log out the user
 * @todo should also reset navigation and bar states
 */
export const useResetUser = () => useResetAtom(userAtom);

export const useLoginUser = () => useSetAtom(userLoginAtom);
