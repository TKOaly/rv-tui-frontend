import { useStdout } from "ink";
import { useEffect, useState } from "react";

type Dimensions = {
	width: number;
	height: number;
};

/**
 * Listens dimensions of the terminal
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

export default useDimensions;
