/* User Requests */

import axios from "axios";

type UserResponse = Promise<{
	userId: number;
	username: string;
	fullName: string;
	email: string;
	moneyBalance: number; // In cents
	role: "ADMIN" | "USER1";
}>;

type NewUserRequest = {
	username: string;
	password: string;
	fullName: string;
	email: string;
};

/**
 * Register new user with backend to database
 * @param {object} newUser
 */
export const registerUser = async (newUser: NewUserRequest): UserResponse => {
	const res = await axios.post(
		`${process.env["RV_BACKEND_URL"]}/api/v1/register`,
		{
			username: newUser.username,
			password: newUser.password,
			fullName: newUser.fullName,
			email: newUser.email
		}
	);
	return res.data.user;
};

/**
 * Fetches user information from backend.
 * @param {string} token access token
 */
export const getUser = async (token: string): UserResponse => {
	const res = await axios.get(`${process.env["RV_BACKEND_URL"]}/api/v1/user`, {
		headers: { Authorization: "Bearer " + token }
	});
	return res.data.user;
};

type EditUserRequest = {
	username: string;
	fullName: string;
	email: string;
};

export const editUser = async (
	token: string,
	editedUserFields: EditUserRequest
): UserResponse => {
	const res = await axios.patch(
		`${process.env["RV_BACKEND_URL"]}/api/v1/user`,
		editedUserFields,
		{
			headers: {
				Authorization: "Bearer " + token
			}
		}
	);
	return res.data.user;
};

export const changePassword = async (token: string, password: string) => {
	await axios.post(
		`${process.env["RV_BACKEND_URL"]}/api/v1/user/changePassword`,
		{ password },
		{
			headers: {
				Authorization: "Bearer " + token
			}
		}
	);
	/* Returns nothing. */
};

/**
 * Authenticates the user with back-end. Returns an access token.
 * @param {object} user
 */
export const authenticate = async (
	username: string,
	password: string
): Promise<string> => {
	const res = await axios.post(
		`${process.env["RV_BACKEND_URL"]}/api/v1/authenticate`,
		{
			username,
			password
		}
	);
	return res.data.accessToken;
};

type DepositResponse = {
	accountBalance: number;
	deposit: {
		depositId: number;
		time: string; // ISO-8601 format
		amount: number; // In cents
		balanceAfter: number;
	};
};

/**
 * Increases a user's account balance.
 * @param {string} token access token
 * @param {integer} amount amount to increase
 */
export const deposit = async (
	token: string,
	amount: number
): Promise<DepositResponse> => {
	const res = await axios.post(
		`${process.env["RV_BACKEND_URL"]}/api/v1/user/deposit`,
		{
			amount
		},
		{
			headers: {
				Authorization: "Bearer " + token
			}
		}
	);
	return res.data;
};
