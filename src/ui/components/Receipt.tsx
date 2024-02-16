import { Box, Text } from "ink";
import { RecentPurchases } from "../../state/purchases.js";
import { User } from "../../state/user.js";

type ReceiptProps = {
	purchases: RecentPurchases;
	user: User;
	width?: number;
	padding?: number;
};

const Receipt = ({
	purchases,
	user,
	width = 23,
	padding = 1
}: ReceiptProps) => {
	const style = {
		color: "grey",
		backgroundColor: "whiteBright"
	};

	const contentWidth = width - padding * 2;

	const padString = (str: string) => {
		return " ".repeat(padding) + str + " ".repeat(width - str.length - padding);
	};

	const padStringSpaceBetween = (strLeft: string, strRight: string) => {
		let content =
			strLeft +
			" ".repeat(
				Math.max(width - 2 * padding - strLeft.length - strRight.length, 0)
			) +
			strRight;
		if (content.length > contentWidth) {
			content =
				content.slice(0, contentWidth - strRight.length - 2) + "… " + strRight;
		}
		return padString(content);
	};

	const padStringCentered = (str: string) => {
		return padString(
			" ".repeat(Math.max((contentWidth - str.length) / 2, 0)) +
				str +
				" ".repeat(
					contentWidth -
						str.length -
						Math.max((contentWidth - str.length) / 2, 0)
				)
		);
	};

	if (purchases === undefined || Object.keys(purchases).length === 0)
		return null;

	type MappedPurchase = {
		name: string;
		total: number;
		quantity: number | undefined;
		pricePer: number | undefined;
	};

	const mappedPurchases = Object.values(purchases)
		.map(productPurchases => {
			const total = productPurchases.reduce(
				(acc, purchase) => acc + purchase.price,
				0
			);
			const quantity = productPurchases.every(
				purchase => purchase.price === productPurchases[0]?.price
			)
				? productPurchases.length
				: undefined;
			const pricePer = productPurchases.every(
				purchase => purchase.price === productPurchases[0]?.price
			)
				? productPurchases[0]?.price
				: undefined;
			return {
				name: productPurchases[0]?.name,
				total,
				quantity,
				pricePer
			};
		})
		.filter(purchase => purchase.name !== undefined) as MappedPurchase[];

	return (
		<Box flexDirection="column" width={width}>
			<Text {...style}>{" ".repeat(width)}</Text>
			<Text {...style}>{padStringCentered("RUOKAVÄLITYS")}</Text>
			<Text {...style}>{padStringCentered("DK115, Gurula")}</Text>
			<Text {...style}>{" ".repeat(width)}</Text>
			{mappedPurchases.map((purchase, index) => (
				<Text {...style} key={index}>
					{padStringSpaceBetween(
						purchase.name.slice(0, contentWidth - 6),
						(purchase.total / 100).toFixed(2)
					)}
				</Text>
			))}
			<Text {...style}>{padString("*".repeat(contentWidth))}</Text>
			<Text {...style}>
				{padStringSpaceBetween(
					"TOTAL:",
					(
						mappedPurchases.reduce((acc, purchase) => acc + purchase.total, 0) /
						100
					).toFixed(2)
				)}
			</Text>
			<Text {...style}>
				{padStringSpaceBetween(
					"BALANCE LEFT:",
					(user.moneyBalance / 100).toFixed(2)
				)}
			</Text>
			<Text {...style}>{padStringCentered("Thank You!")}</Text>
			<Text {...style}>{" ".repeat(width)}</Text>
		</Box>
	);
};

export default Receipt;
