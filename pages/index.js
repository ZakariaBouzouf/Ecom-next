import { Grid } from "@chakra-ui/react";

import products from "../products";
import ListItems from "../component/product/listItems";

export default function Home() {
	return (
		<Grid templateColumns='repeat(4,1fr)' gap={2} p='2'>
			{products.map((product, key) => (
				<ListItems key={key} product={product} />
			))}
		</Grid>
	);
}
