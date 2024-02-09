import { Box } from "ink";
import { useMeasurements } from "../../lib/dimensions.js";
import { useStyles } from "../../lib/style.js";

type OwnProps = {
	border?: boolean;
	visible?: boolean;
} & React.ComponentProps<typeof Box>;

const NoOverflowBox = ({
	border = false,
	visible,
	children,
	...rest
}: OwnProps) => {
	const { ref, width, height } = useMeasurements();
	const { borderStyle, borderColor } = useStyles();

	<Box overflow="hidden" display={visible ? "flex" : "none"}>
		<Box
			ref={ref}
			width={width}
			height={height}
			borderStyle={border ? borderStyle : undefined}
			borderColor={borderColor}
			overflow="hidden"
			{...rest}
		></Box>
		{children}
	</Box>;
};

export default NoOverflowBox;
