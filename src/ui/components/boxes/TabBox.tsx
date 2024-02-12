import { Box } from "ink";
import { useMeasurements } from "../../../lib/dimensions.js";
import BorderBox, { BorderBoxProps } from "./BorderBox.js";
import TabSelect, { TabSelectProps } from "./TabSelect.js";

type OwnProps = TabSelectProps & BorderBoxProps;

const TabBox = ({
	options = undefined,
	onChange,
	title,
	children,
	flexDirection,
	flexWrap,
	...rest
}: OwnProps) => {
	const { ref, height } = useMeasurements();

	return (
		<Box ref={ref} flexDirection="column" {...rest}>
			<TabSelect options={options} onChange={onChange} title={title} />
			<BorderBox
				width={"100%"}
				height={height - 1}
				flexShrink={0}
				borderTop={false}
				flexDirection={flexDirection}
				flexWrap={flexWrap}
			>
				{children}
			</BorderBox>
		</Box>
	);
};

export default TabBox;
