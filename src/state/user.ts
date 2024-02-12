import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";
import { authenticate, getUser } from "../queries/user/userQueries.js";

export type User = {
	userId: number;
	username: string;
	fullName: string;
	email: string;
	moneyBalance: number; // In cents
	role: "ADMIN" | "USER1";
};

/* USER DATA */
const userAtom = atomWithReset<User | undefined>(undefined);

/* USER ACCESS TOKEN */
const accessTokenAtom = atomWithReset<string | undefined>(undefined);

/**
 * Returns user data
 * @returns The logged in user
 */
export const useUser = () => useAtomValue(userAtom);

/**
 * Returns the access token
 * Separate from user data to make sure it is exposed only where explicitly needed
 * @returns The access token
 */
export const useAccessToken = () => useAtomValue(accessTokenAtom);

type LoginInfo = { username: string; password: string };

/**
 * Exposes a function to log in the user
 * @returns A function to log in the user
 */
export const useLoginUser = () => {
	const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
	const setUser = useSetAtom(userAtom);
	const resetUser = useResetAtom(userAtom);
	const resetAccessToken = useResetAtom(accessTokenAtom);

	return async ({ username, password }: LoginInfo) => {
		if (username !== undefined && password !== undefined) {
			const accessToken = await authenticate(username, password).catch(
				error => {
					console.error(error);
					throw new Error("Failed to authenticate");
				}
			);
			setAccessToken(accessToken);

			const user: User = await getUser(accessToken).catch(error => {
				console.error(error);
				resetAccessToken();
				resetUser();
				throw new Error("Failed to fetch user data");
			});
			setUser(user);
		}

		if (accessToken !== undefined) {
		}
	};
};

/**
 * Exposes a function to log out the user clear user data
 * This clears the both the access token and user state
 * @todo should also reset navigation and bar states
 */
export const useLogoutUser = () => {
	const resetAccessToken = useResetAtom(accessTokenAtom);
	const resetUser = useResetAtom(userAtom);
	return () => {
		resetAccessToken();
		resetUser();
	};
};
