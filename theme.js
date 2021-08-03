import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: "Nunito Sans",
		body: "Nunito Sans",
	},
	styles: {
		global: {
			body: {
				fontWeight: "200",
				textDecoration: "none",
				letterSpacing: "1px",
			},
			main: {
				minH: "80vh",
			},
			h1: {
				textTransform: "uppercase",
				letterSpacing: "3px",
				lineHeight: "1.2",
			},
			h2: {
				textTransform: "uppercase",
				letterSpacing: "3px",
				lineHeight: "1.2",
			},
			h3: {
				margin: "1rem 0",
				textTransform: "uppercase",
				letterSpacing: "3px",
				lineHeight: "1.2",
			},
		},
	},
});

export default theme;
