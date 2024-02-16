import { atom, useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import {
	AllProductsResponse,
	getAllProducts
} from "../queries/user/productQueries.js";
import { useAccessToken } from "./user.js";

export const inventoryAtom = atom<AllProductsResponse | undefined>(undefined);

const useFetchInventory = () => {
	const accessToken = useAccessToken();
	const setInventory = useSetAtom(inventoryAtom);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<Error | undefined>(undefined);
	return {
		fetchInventory: async () => {
			if (!accessToken) {
				console.error("No access token");
				return;
			}
			setError(undefined);
			setLoading(true);
			await getAllProducts(accessToken)
				.then(inventory => {
					setLoading(false);
					setSuccess(true);
					setInventory(inventory);
				})
				.catch(err => {
					console.error(err);
					setError(err);
					setLoading(false);
					setSuccess(false);
				});
		},
		loading,
		success,
		error
	};
};

export const useInventory = () => {
	return {
		inventory: useAtomValue(inventoryAtom),
		...useFetchInventory()
	};
};
