import { atom, useAtomValue } from "jotai";
import {
	BuyProductResponse,
	buyProduct
} from "../queries/user/productQueries.js";
import { useAccessToken, useUser } from "./user.js";

const recentPurchasesAtom = atom<BuyProductResponse>({} as BuyProductResponse);

const useBuyProduct = () => {
	const accessToken = useAccessToken();
	const { refetchUser } = useUser();

	return async (barcode: string, quantity: number) => {
		if (!accessToken) return;
		const purchase = await buyProduct(barcode, quantity, accessToken).catch(
			err => {
				console.error(err);
				return null;
			}
		);
		if (purchase) {
			await refetchUser();
		}
	};
};

export const usePurchases = () => ({
	recentPurchases: useAtomValue(recentPurchasesAtom),
	buyProduct: useBuyProduct()
});
