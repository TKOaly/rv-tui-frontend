import { useStyles } from "../lib/state.ts";
import type { LayoutBoxProps } from "./LayoutBox.tsx";
import LayoutBox from "./LayoutBox.tsx";

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
