import { useStyles } from "../../../state/style.js";
import type { LayoutBoxProps } from "./LayoutBox.js";
import LayoutBox from "./LayoutBox.js";

export type BorderBoxProps = {
	isFocused?: boolean;
} & LayoutBoxProps;

const BorderBox = ({
	align,
	center,
	children,
	isFocused = false,
	...rest
}: BorderBoxProps) => {
	const { borderStyle, borderColor, accentColor } = useStyles();

	return (
		<LayoutBox
			align={align}
			center={center}
			borderStyle={borderStyle}
			borderColor={isFocused ? accentColor : borderColor}
			{...rest}
		>
			{children}
		</LayoutBox>
	);
};

export default BorderBox;
