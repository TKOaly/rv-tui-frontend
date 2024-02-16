import { Box, Text } from "ink";
import { usePanelFocusManager } from "../../../state/focus.js";
import { useStyles } from "../../../state/style.js";
import BorderBox from "../../components/boxes/BorderBox.js";

/**
 default, normal and undefined are aliases for the global border color
*/
export type BarVariant =
	| "error"
	| "success"
	| "warning"
	| "question"
	| "info"
	| "default"
	| "normal"
	| undefined;

type BarBoxProps = {
	variant?: BarVariant;
} & React.ComponentProps<typeof BorderBox>;

const BarBox = ({ variant, children, ...rest }: BarBoxProps) => {
	const { borderColor: defaultBorderColor } = useStyles();
	const { barEnabled } = usePanelFocusManager();

	const borderColor = () => {
		switch (variant) {
			case "error":
				return "red";
			case "success":
				return "green";
			case "question":
				return "cyan";
			case "info":
				return "blue";
			case "warning":
				return "yellow";
			case "default":
				return barEnabled ? defaultBorderColor : "grey";
			case "normal":
				return barEnabled ? defaultBorderColor : "grey";
			default:
				return barEnabled ? defaultBorderColor : "grey";
		}
	};

	return (
		<BorderBox
			flexDirection="row"
			flexShrink={0}
			height={3}
			width={"100%"}
			overflow="hidden"
			borderColor={borderColor()}
			columnGap={1}
			paddingX={1}
			{...rest}
		>
			{variant === "error" && <Text color="redBright">✘</Text>}
			{variant === "success" && <Text color="greenBright">✔</Text>}
			{variant === "warning" && <Text color="yellowBright">⚠</Text>}
			{variant === "question" && <Text color="cyanBright">?</Text>}
			{variant === "info" && <Text color="blueBright">i</Text>}
			<Box flexDirection="row" justifyContent="space-between">
				{children}
			</Box>
		</BorderBox>
	);
};

export default BarBox;
