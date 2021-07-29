import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import Layout from "../component/layout/layout";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
