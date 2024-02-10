import { Box } from "ink";
import { useMeasurements } from "../../../lib/dimensions.js";
import { useStyles } from "../../../state/style.js";

type OwnProps = {
	border?: boolean;
	visible?: boolean;
	isFocused?: boolean;
} & React.ComponentProps<typeof Box>;

/**
 * This box should have overflow behavior disabled but the BOX SIZING IS WONKY when set to 100%.
 */
const NoOverflowBox = ({
	border = false,
	visible,
	isFocused = false,
	children,
	...rest
}: OwnProps) => {
	const { ref, width, height } = useMeasurements();
	const { borderStyle, borderColor, accentColor } = useStyles();

	return (
		<Box overflow="hidden" display={visible ? "flex" : "none"} {...rest}>
			<Box
				ref={ref}
				width={width}
				height={height}
				borderStyle={border ? borderStyle : undefined}
				borderColor={isFocused ? accentColor : borderColor}
				overflow="hidden"
			>
				{children}
			</Box>
		</Box>
	);
};

export default NoOverflowBox;
