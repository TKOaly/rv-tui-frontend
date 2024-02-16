/* Product Requests */

import axios from "axios";

export type BuyProductResponse = {
	accountBalance: number;
	productStock: number;
	purchases: [
		{
			purchaseId: number;
			time: string; // ISO-8601 format
			price: number; // In cents
			balanceAfter: number; // In cents
			stockAfter: number;
		}
	];
};

export const buyProduct = async (
	barcode: string,
	quantity: number,
	token: string
): Promise<BuyProductResponse> => {
	const res = await axios.post(
		`${process.env["RV_BACKEND_URL"]}/api/v1/products/${barcode}/purchase`,
		{
			count: quantity
		},
		{
			headers: { Authorization: "Bearer " + token }
		}
	);
	return res.data;
};

export type AllProductsResponse = [
	{
		barcode: string;
		name: string;
		category: {
			categoryId: number;
			description: string;
		};
		weight: number; // In grams
		sellPrice: number; // In cents
		stock: number;
	}
];

export const getAllProducts = async (
	token: string
): Promise<AllProductsResponse> => {
	const res = await axios.get(
		`${process.env["RV_BACKEND_URL"]}/api/v1/products`,
		{
			headers: { Authorization: "Bearer " + token }
		}
	);
	return res.data.products;
};

type AllCategoriesResponse = [
	{
		categoryId: number;
		description: string;
	}
];

export const getAllCategories = async (
	token: string
): Promise<AllCategoriesResponse> => {
	const res = await axios.get(
		`${process.env["RV_BACKEND_URL"]}/api/v1/categories`,
		{
			headers: { Authorization: "Bearer " + token }
		}
	);
	return res.data.categories;
};
