import { Box, Flex, Grid } from "@chakra-ui/react";

import products from "../products";
import ProductItem from "../component/product/productItem";

export default function Home() {
	return (
		<Grid templateColumns='repeat(4,1fr)' gap={2} p='2'>
			{products.map((product, key) => (
				<ProductItem key={key} product={product} />
			))}
		</Grid>
	);
}
