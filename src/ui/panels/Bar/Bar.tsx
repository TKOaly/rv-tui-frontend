import { useFocus } from "ink";
import { Bar, useBar } from "../../../state/bar.js";
import BorderBox from "../../components/boxes/BorderBox.js";
import BarcodeBar from "./BarcodeBar.js";
import LoginBar from "./LoginBar.js";

const CommandBar = () => {
	const { isFocused } = useFocus();

	const { bar } = useBar();

	return (
		<BorderBox
			isFocused={isFocused}
			flexDirection="row"
			flexShrink={0}
			height={3}
			overflow="hidden"
		>
			{bar === Bar.Login && <LoginBar />}
			{bar === Bar.Barcode && <BarcodeBar />}
		</BorderBox>
	);
};

export default CommandBar;
