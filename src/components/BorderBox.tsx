import { forwardRef } from "react";
import { useStyles } from "../lib/style.js";
import type { LayoutBoxProps } from "./LayoutBox.js";
import LayoutBox from "./LayoutBox.js";

const BorderBox = forwardRef(
	({ align, center, children, ref, ...rest }: LayoutBoxProps) => {
		const styles = useStyles();
		return (
			<LayoutBox
				align={align}
				center={center}
				borderStyle={styles.borderStyle}
				borderColor={styles.borderColor}
				ref={ref}
				{...rest}
			>
				{children}
			</LayoutBox>
		);
	}
);

export default BorderBox;
