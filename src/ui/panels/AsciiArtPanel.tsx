import BorderBox from "../components/boxes/BorderBox.js";

type OwnProps = {
	visible: boolean;
} & React.ComponentProps<typeof BorderBox>;

const AciiArtPanel = ({ visible, children, ...rest }: OwnProps) => (
	<BorderBox
		overflow="hidden"
		flexDirection="column"
		flexGrow={20}
		height={"100%"}
		center={true}
		display={visible ? "flex" : "none"}
		{...rest}
	>
		{children}
	</BorderBox>
);

export default AciiArtPanel;
