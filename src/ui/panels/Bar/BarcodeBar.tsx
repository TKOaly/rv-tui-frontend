import { TextInput } from "@inkjs/ui";
import { useState } from "react";
import { useBar } from "../../../state/bar.js";
import { usePurchases } from "../../../state/purchases.js";
import Barcode from "../../components/Barcode.js";
import BarBox from "./BarBox.js";

const BarcodeBar = () => {
	const [barcode, setBarcode] = useState<string | undefined>(undefined);
	const { setBarContent } = useBar();
	const { buyProduct } = usePurchases();

	return (
		<BarBox>
			{barcode === undefined ? (
				<TextInput
					placeholder="Read Barcode:"
					isDisabled={barcode !== undefined}
					onChange={content => setBarContent(content)}
					onSubmit={async barcode => {
						if (barcode.length === 8 || barcode.length === 13) {
							setBarcode(barcode);
							await buyProduct(barcode, 1);
							setBarContent("");
							setTimeout(() => {
								setBarcode(undefined);
							}, 1500);
						}
					}}
				/>
			) : (
				<Barcode
					EAN={Number(barcode) ?? 0}
					height={1}
					color={"white"}
					transparent
					padding={0}
					scale={2}
				/>
			)}
		</BarBox>
	);
};

export default BarcodeBar;
