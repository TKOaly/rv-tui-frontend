import type { DOMElement } from "ink";
import { Box, Text } from "ink";
import { useMeasurements } from "../../../lib/dimensions.js";
import { useStyles } from "../../../lib/style.js";
import BorderBox from "../BorderBox.js";
import LayoutBox from "../LayoutBox.js";

type HeaderProps = {
	title: string;
	padding?: number;
	width?: number;
	headerPosition?: number;
	middle?: boolean;
} & React.ComponentProps<typeof LayoutBox>;

export const TabHeader = ({
	title,
	padding = 1,
	width = 0,
	headerPosition = 0,
	display = "flex",
	middle = true
}: HeaderProps) => {
	const headerWidth = title.length + padding * 2 + 2;
	const position = middle
		? Math.floor(width / 2 - headerWidth / 2)
		: headerPosition;

	return (
		<LayoutBox
			display={display}
			width={Math.max(headerWidth, width)}
			flexDirection="column"
		>
			<LayoutBox flexDirection="row">
				<Box
					height={1}
					width={position}
					display={position === 0 ? "none" : "flex"}
				/>
				<BorderBox
					borderBottom={false}
					flexWrap="nowrap"
					flexShrink={0}
					paddingX={padding}
				>
					<Text>{title}</Text>
				</BorderBox>
			</LayoutBox>
			{width >= headerWidth + 2 && (
				<LayoutBox flexDirection="row" height={1} overflow="hidden">
					{position === 0 ? (
						<Text>│</Text>
					) : (
						<BorderBox
							borderBottom={false}
							borderRight={false}
							minWidth={position}
						></BorderBox>
					)}
					<Text>
						{position !== 0 && "╯"}
						{" ".repeat(headerWidth - 2)}╰
					</Text>
					<BorderBox
						borderBottom={false}
						borderLeft={false}
						width={width - position - headerWidth}
					></BorderBox>
				</LayoutBox>
			)}
		</LayoutBox>
	);
};

type TabBoxProps = {
	title: string;
	middle?: boolean;
	headerCentered?: boolean;
	headerPosition?: number;
	children?: React.ReactNode | React.ReactNode[];
	ref?: React.Ref<DOMElement>;
} & React.ComponentProps<typeof Box>;

export const TabBox = ({
	title,
	headerCentered = false,
	headerPosition = 0,
	children,
	display = "flex",
	...rest
}: TabBoxProps) => {
	const styles = useStyles();

	const { ref, width } = useMeasurements();

	return (
		<LayoutBox align="left" flexDirection="column">
			<TabHeader
				title={title}
				width={width}
				headerPosition={headerPosition}
				middle={headerCentered}
				display={display}
			/>
			<Box
				ref={ref}
				borderTop={false}
				borderStyle={styles.borderStyle}
				borderColor={styles.borderColor}
				display={display}
				{...rest}
			>
				{children}
			</Box>
		</LayoutBox>
	);
};
