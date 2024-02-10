import type { DOMElement } from "ink";
import { measureElement, useStdout } from "ink";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "../state/navigation.js";

type Dimensions = {
	width: number;
	height: number;
};

/**
 * Listens for dimensions of the terminal
 * @returns Object with width and height
 */
const useDynamicDimensions = () => {
	const { stdout } = useStdout();
	const { columns: width, rows: height } = stdout;
	const [dimensions, setDimensions] = useState<Dimensions>({
		width,
		height
	});

	useEffect(() => {
		const handleResize = () => {
			setDimensions({ width, height });
		};
		stdout.on("resize", handleResize);
		return () => {
			stdout.off("resize", handleResize);
		};
	}, [width, height]);

	return dimensions;
};

export const useDimensions = (
	staticWidth: number,
	staticHeight: number,
	dimensionsMode: string
) => {
	// Subscribe to the dynamic dimensions
	const { width: unsafeWidth, height: dynamicHeight } = useDynamicDimensions();
	const dynamicWidth = unsafeWidth - 1;

	// Choose the dimensions
	const width = (() =>
		dimensionsMode === "dynamic" ? dynamicWidth : staticWidth)();

	const height = (() =>
		dimensionsMode === "dynamic" ? dynamicHeight : staticHeight)();

	return { width, height };
};

/**
 * Listens for dimensions of a <Box> element.
 *
 * The returned ref should be given directly to the
 * measured element, not through another component as
 * this seems to cause issues with ink.
 * @returns Object with width, height and a ref to be
 * given to the measured element
 */
export const useMeasurements = ([...deps] = []) => {
	type Measurements = {
		width: number;
		height: number;
	};

	const ref = useRef<DOMElement>(null);
	const [measurements, setMeasurements] = useState<Measurements>(
		{} as Measurements
	);

	const { width, height } = useDynamicDimensions();
	const { primaryPanel, secondaryPanel } = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			if (ref.current !== null) {
				setMeasurements(measureElement(ref.current));
			}
		}, 5);
	}, [ref.current, width, height, primaryPanel, secondaryPanel, ...deps]);

	return { ref, ...measurements };
};
