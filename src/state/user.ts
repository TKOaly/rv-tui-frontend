import { useAtomValue, useSetAtom } from "jotai";
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
const useLoginUser = () => {
	const setAccessToken = useSetAtom(accessTokenAtom);
	const setUser = useSetAtom(userAtom);
	const resetUser = useResetAtom(userAtom);
	const resetAccessToken = useResetAtom(accessTokenAtom);

	return async ({ username, password }: LoginInfo) => {
		if (username !== undefined && password !== undefined) {
			const accessToken = await authenticate(username, password).catch(() => {
				throw new Error("Failed to authenticate");
			});
			setAccessToken(accessToken);

			const user: User = await getUser(accessToken).catch(() => {
				resetAccessToken();
				resetUser();
				throw new Error("Failed to fetch user data");
			});
			setUser(user);
		}
	};
};

const useRefetchUser = () => {
	const accessToken = useAtomValue(accessTokenAtom);
	const setUser = useSetAtom(userAtom);

	return async () => {
		if (accessToken === undefined)
			throw new Error("Not able to fetch user data");

		const user: User = await getUser(accessToken).catch(() => {
			throw new Error("Failed to refetch user data");
		});
		setUser(user);
	};
};

/**
 * Exposes a function to log out the user clear user data
 * This clears the both the access token and user state
 * @todo should also reset navigation and bar states
 */
const useLogoutUser = () => {
	const resetAccessToken = useResetAtom(accessTokenAtom);
	const resetUser = useResetAtom(userAtom);
	return () => {
		resetAccessToken();
		resetUser();
	};
};

/**
 * Returns user data
 * @returns The logged in user
 */
export const useUser = () => ({
	user: useAtomValue(userAtom),
	loginUser: useLoginUser(),
	refetchUser: useRefetchUser(),
	logoutUser: useLogoutUser()
});
