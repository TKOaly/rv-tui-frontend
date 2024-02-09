import { atom } from "jotai";

/**
 * The logged in user
 */
type User = {
	username: string;
};

export const userAtom = atom<User | undefined>({
	username: "Anonymous"
});
