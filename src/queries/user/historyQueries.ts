/* History Requests */

import axios from "axios";

type DepositsResponse = [
	{
		depositId: number;
		time: string; // ISO-8601 format
		amount: number; // In Cents
		balanceAfter: number;
	}
];

const getDepositHistory = async (token: string): Promise<DepositsResponse> => {
	const res = await axios.get(
		`${process.env["RV_BACKEND_URL"]}/api/v1/user/depositHistory`,
		{
			headers: { Authorization: "Bearer " + token }
		}
	);
	return res.data.deposits;
};

type PurchasesResponse = [
	{
		purchaseId: number;
		time: string; // ISO-8601 format
		price: number; // In cents
		product: {
			barcode: string;
			name: string;
			category: {
				categoryId: number;
				description: string;
			};
			weight: number; // In grams
			sellPrice: number; // In cents
			stock: number;
		};
		balanceAfter: number; // In cents
	}
];

const getPurchaseHistory = async (
	token: string
): Promise<PurchasesResponse> => {
	const res = await axios.get(
		`${process.env["RV_BACKEND_URL"]}/api/v1/user/purchaseHistory`,
		{
			headers: { Authorization: "Bearer " + token }
		}
	);
	return res.data.purchases;
};

export default {
	getDepositHistory,
	getPurchaseHistory
};
