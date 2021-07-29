import { Box } from "@chakra-ui/react";
import MainNavigation from "./MainNavigation";

const layout = (props) => {
	return (
		<Box>
			<MainNavigation />
			<Box
				as='main'
				paddingLeft='50'
				paddingRight='50'
				// marginLeft='auto'
				// marginRight='auto'
			>
				{props.children}
			</Box>
		</Box>
	);
};

export default layout;
