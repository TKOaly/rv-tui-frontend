import { Box, Text } from "ink";
import { useEffect, useState } from "react";
import { Option } from "../../lib/select.js";
import Barcode from "../components/Barcode.js";
import BorderBox from "../components/boxes/BorderBox.js";
import { HeaderBox } from "../components/boxes/HeaderBox.js";
import LayoutBox from "../components/boxes/LayoutBox.js";
import TabBox from "../components/boxes/TabBox.js";
import TabSelect from "../components/boxes/TabSelect.js";
import { Gur6 } from "../prompts/GURPrompts.js";
import { Dogo, Nag, Rage } from "../prompts/LegacyPrompts.js";

const DebugPanel = () => {
	const [debugView, setDebugView] = useState("barcodes");

	const options = [
		{
			label: "Barcodes",
			value: "barcodes"
		},
		{
			label: "Timers",
			value: "timers"
		},
		{
			label: "Headers",
			value: "headers"
		},
		{
			label: "Tabs",
			value: "tabs"
		},
		{
			label: "Art",
			value: "art"
		}
	];

	const onChange = (option: Option | undefined) => {
		if (option) {
			setDebugView(option.value.toString());
		}
	};

	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(t => t + 1);
		}, 10);
		return () => clearInterval(interval);
	});

	return (
		<Box overflow="hidden" flexDirection="column" flexGrow={20} height={"100%"}>
			<TabBox
				options={options}
				onChange={onChange}
				title="DEBUG"
				height={"100%"}
				flexShrink={0}
			>
				<Box
					flexDirection="row"
					overflowY="hidden"
					alignItems="flex-start"
					justifyContent="flex-start"
					flexWrap="wrap"
					rowGap={1}
					columnGap={2}
					paddingY={1}
					paddingX={3}
				>
					{debugView === "barcodes" && (
						<>
							<Barcode EAN={40700719} height={6} numbers />
							<Barcode EAN={4070071935759} height={6} numbers />
							<Barcode
								EAN={4070071935759}
								height={2}
								padding={0}
								color={"blueBright"}
								transparent
							/>
						</>
					)}
					{debugView === "timers" && (
						<>
							<BorderBox paddingX={1}>
								<Text>10ms: {timer}</Text>
							</BorderBox>
							<BorderBox paddingX={1}>
								<Text>100ms: {Math.floor(timer / 10)}</Text>
							</BorderBox>
							<BorderBox paddingX={1}>
								<Text>1000ms: {Math.floor(timer / 100)}</Text>
							</BorderBox>
						</>
					)}
					{debugView === "headers" && (
						<>
							<HeaderBox title="Header" flexWrap="wrap">
								<Text>Tab Content</Text>
							</HeaderBox>
							<HeaderBox title="Ascii Art" headerPosition={3}>
								<Gur6 />
							</HeaderBox>
						</>
					)}
					{debugView === "tabs" && (
						<>
							<Text>Tabs: </Text>
							<TabSelect
								options={[
									{ label: "a", value: "a" },
									{ label: "b", value: "b" }
								]}
								title="TabSelect"
							></TabSelect>
						</>
					)}
					{debugView.includes("art") && (
						<TabBox
							title="Art"
							options={[
								{
									label: "Dogo",
									value: "art_dogo"
								},
								{
									label: "Gur",
									value: "art_gur"
								},
								{
									label: "Nag",
									value: "art_nag"
								},
								{
									label: "Rage",
									value: "art_rage"
								}
							]}
							defaultValue={"art_dogo"}
							onChange={onChange}
							height={"100%"}
						>
							<LayoutBox height={"100%"} width={"100%"} center>
								{debugView === "art_dogo" && <Dogo />}
								{debugView === "art_gur" && <Gur6 />}
								{debugView === "art_nag" && <Nag />}
								{debugView === "art_rage" && <Rage />}
							</LayoutBox>
						</TabBox>
					)}
				</Box>
			</TabBox>
		</Box>
	);
};

export default DebugPanel;
