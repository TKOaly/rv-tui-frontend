import BorderBox from "../components/boxes/BorderBox.js";

type OwnProps = {} & React.ComponentProps<typeof BorderBox>;

const AciiArtPanel = ({ children, ...rest }: OwnProps) => (
	<BorderBox
		overflow="hidden"
		flexDirection="column"
		flexGrow={20}
		height={"100%"}
		center={true}
		{...rest}
	>
		{children}
	</BorderBox>
);

export default AciiArtPanel;
