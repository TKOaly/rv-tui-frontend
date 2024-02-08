import { Box } from "ink";
import type React from "react";
import { type ReactNode } from "react";

export type LayoutBoxProps = {
	align?: "left" | "right" | "center";
	center?: boolean;
	children?: ReactNode | ReactNode[];
} & React.ComponentProps<typeof Box>;

const LayoutBox = ({ align, center, children, ...rest }: LayoutBoxProps) => {
	const contentAlignment = () => {
		if (center || align === "center") {
			return "center";
		}
		if (align === "right") {
			return "flex-end";
		}
		if (align === "left") {
			return "flex-start";
		}
		return undefined;
	};

	return (
		<Box
			alignItems={contentAlignment()}
			justifyContent={center ? "center" : undefined}
			{...rest}
		>
			{children}
		</Box>
	);
};

export default LayoutBox;
