import { Box, Text } from "ink";
import type React from "react";
import { EANToUnicode, splitEAN } from "../../lib/barcodes.js";

type OwnProps = {
	EAN: number;
	height?: number;
	padding?: number;
	numbers?: boolean;
	inverted?: boolean;
	transparent?: boolean;
	errorOnInvalid?: boolean;
	scale?: 1 | 2;
} & React.ComponentProps<typeof Text>;

/**
 * Creates a unicode representation of en EAN-13 or EAN-8 barcode
 * @param {number} EAN EAN-13 or EAN-8 barcode number (invalid barcodes will be displayed as "INVALID EANCODE")
 * @param {number} height Height of the barcode including the numberline (if present) (default: 12)
 * @param {number} padding Padding around the barcode (default: 3)
 * @returns
 */
const Barcode = ({
	EAN,
	height = 12,
	padding: desiredPadding = 3,
	numbers = false,
	transparent = false,
	errorOnInvalid = false,
	scale = 1,
	color,
	backgroundColor,
	...rest
}: OwnProps) => {
	const padding = numbers && desiredPadding < 2 ? 2 : desiredPadding;
	const foreground = color ?? "black";
	const background = transparent ? undefined : backgroundColor ?? "white";

	// ToDo: Add actual EAN validation
	const length = EAN.toString().length;
	const valid = length === 13 || length === 8;
	if (!valid && errorOnInvalid) {
		throw new Error("Invalid EAN barcode");
	}

	const { firstDigit, leftGroup, rightGroup } = splitEAN(EAN);

	const lineRow = EANToUnicode(EAN, scale);

	/* eslint-disable no-mixed-spaces-and-tabs */
	// Numbers need a different spacing in EAN-8 and EAN-13 barcodes
	const numberRow =
		length === 13
			? "▌▌   " +
			  leftGroup.split("").join("  ") +
			  "  ▌▌  " +
			  rightGroup.split("").join("  ") +
			  "   ▌▌"
			: "▌▌ " +
			  leftGroup.split("").join("  ") +
			  "   ▌▌  " +
			  rightGroup.split("").join("  ") +
			  "  ▌▌";

	return (
		<Box
			width={lineRow.length + padding * 2}
			height={height}
			overflowX="hidden"
			flexDirection="column"
			alignItems="center"
		>
			{[...Array(!numbers ? height : (height ?? 0) - 1)].map((_, i) => (
				// Top part of the barcode (without numberline)
				<Text key={i} backgroundColor={background} color={foreground} {...rest}>
					{" ".repeat(padding) + lineRow + " ".repeat(padding)}
				</Text>
			))}

			{numbers && scale === 1 && (
				// Bottom part of the barcode (numberline)
				<Text backgroundColor={background} color={foreground} {...rest}>
					{" ".repeat(padding - 2) +
						(firstDigit ?? " ") +
						" " +
						(valid
							? numberRow
							: "▌▌       INVALID       ▌▌       EANCODE       ▌▌") +
						" ".repeat(padding)}
				</Text>
			)}
		</Box>
	);
};

export default Barcode;
