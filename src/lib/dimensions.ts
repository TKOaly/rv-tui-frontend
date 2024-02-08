import type { DOMElement } from "ink";
import { measureElement, useStdout } from "ink";
import { useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import { mainPanelAtom } from "./state.js";

type Dimensions = {
	width: number;
	height: number;
};

/**
 * Listens for dimensions of the terminal
 * @returns Object with width and height
 */
const useDimensions = () => {
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

	const { width, height } = useDimensions();
	const mainPanel = useAtomValue(mainPanelAtom);

	useEffect(() => {
		setTimeout(() => {
			if (ref.current !== null) {
				setMeasurements(measureElement(ref.current));
			}
		}, 5);
	}, [ref.current, width, height, mainPanel, ...deps]);

	return { ref, ...measurements };
};

export default useDimensions;
