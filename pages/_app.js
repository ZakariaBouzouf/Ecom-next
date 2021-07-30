import { ChakraProvider, Container } from "@chakra-ui/react";

import theme from "../theme";
import Layout from "../component/layout/layout";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Container centerContent maxW='container.xl'>
					<Component {...pageProps} />
				</Container>
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
