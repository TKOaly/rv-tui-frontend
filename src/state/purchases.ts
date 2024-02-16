import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";
import {
	AllProductsResponse,
	BuyProductResponse,
	buyProduct
} from "../queries/user/productQueries.js";
import { inventoryAtom } from "./inventory.js";
import { useAccessToken, useUser } from "./user.js";

export type RecentPurchases = {
	[barcode: string]: ({
		name: string;
	} & BuyProductResponse["purchases"][number])[];
};

const recentPurchasesAtom = atomWithReset<RecentPurchases>(Object.create(null));

const addRecentPurhaseAtom = atom(
	null,
	async (
		get,
		set,
		{
			purchases,
			barcode,
			inventory
		}: {
			purchases: BuyProductResponse["purchases"];
			barcode: string;
			inventory: AllProductsResponse | undefined;
		}
	) => {
		const recentPurchases = get(recentPurchasesAtom);
		const productName =
			inventory?.find(product => product.barcode === barcode)?.name ||
			"Product";
		if (productName) {
			set(recentPurchasesAtom, {
				...recentPurchases,
				[barcode]: [
					...(recentPurchases[barcode] || []),
					...purchases.map(purchase => ({ ...purchase, name: productName }))
				]
			});
		}
	}
);

/**
 * Hook to buy a product
 * Refetches user data after purchase to update the user's balance
 * Adds the purchase to the recentPurchasesAtom
 */
const useBuyProduct = () => {
	const accessToken = useAccessToken();
	const { refetchUser } = useUser();
	const addRecentPurhase = useSetAtom(addRecentPurhaseAtom);
	const inventory = useAtomValue(inventoryAtom);

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
			addRecentPurhase({ purchases: purchase.purchases, barcode, inventory });
		}
	};
};

export const usePurchases = () => ({
	recentPurchases: useAtomValue(recentPurchasesAtom),
	clearRecentPurchases: useResetAtom(recentPurchasesAtom),
	buyProduct: useBuyProduct()
});
