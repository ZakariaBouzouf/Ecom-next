import { ChakraProvider, Container } from "@chakra-ui/react";

import theme from "../theme";
import Layout from "../component/layout/layout";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Container centerContent maxW='container.xl' py='1rem'>
					<Component {...pageProps} />
				</Container>
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
