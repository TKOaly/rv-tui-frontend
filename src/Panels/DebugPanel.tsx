import Barcode from "../components/Barcode";
import BorderBox from "../components/BorderBox";

const DebugPanel = () => {
	return (
		<BorderBox flexDirection="column" flexGrow={20} overflowY="hidden">
			<Barcode EAN={96385074} height={6} numbers />
		</BorderBox>
	);
};

export default DebugPanel;
