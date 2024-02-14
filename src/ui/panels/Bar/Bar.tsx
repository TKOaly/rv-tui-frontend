import { Box } from "ink";
import { Bar, useBar } from "../../../state/bar.js";
import BarcodeBar from "./BarcodeBar.js";
import LoginBar from "./LoginBar.js";

const CommandBar = () => {
	const { bar } = useBar();

	return (
		<Box>
			{bar === Bar.Login && <LoginBar />}
			{bar === Bar.Barcode && <BarcodeBar />}
		</Box>
	);
};

export default CommandBar;
