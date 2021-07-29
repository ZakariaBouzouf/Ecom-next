import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			body: {
				textDecoration: "none",
			},
			main: {
				minH: "80vh",
			},
			h3: {
				margin: "1rem 0",
			},
		},
	},
});

export default theme;
