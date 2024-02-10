import { TextInput } from "@inkjs/ui";
import { useState } from "react";
import Barcode from "../../components/Barcode.js";

const BarcodeBar = () => {
	const [barcode, setBarcode] = useState<string | undefined>(undefined);

	return barcode === undefined ? (
		<TextInput
			placeholder="Read Barcode:"
			isDisabled={barcode !== undefined}
			onSubmit={barcode => {
				(barcode.length === 8 || barcode.length === 13) && setBarcode(barcode);
				setTimeout(() => {
					setBarcode(undefined);
				}, 2000);
			}}
		/>
	) : (
		<Barcode
			EAN={Number(barcode) ?? 0}
			height={1}
			color={"white"}
			transparent
			padding={0}
		/>
	);
};

export default BarcodeBar;
