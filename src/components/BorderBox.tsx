import { useStyles } from "../lib/state.js";
import type { LayoutBoxProps } from "./LayoutBox.js";
import LayoutBox from "./LayoutBox.js";

const BorderBox = ({ align, center, children, ...rest }: LayoutBoxProps) => {
	const styles = useStyles();

	return (
		<LayoutBox
			align={align}
			center={center}
			borderStyle={styles.borderStyle}
			borderColor={styles.borderColor}
			{...rest}
		>
			{children}
		</LayoutBox>
	);
};

export default BorderBox;
