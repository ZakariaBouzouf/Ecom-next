import { Box } from "@chakra-ui/react";
import Image from "next/image";

const PRODUCT = {
	name: "Airpods Wireless Bluetooth Headphones",
	image: "/images/airpods.jpg",
	description:
		"Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
	brand: "Apple",
	category: "Electronics",
	price: 89.99,
	countInStock: 10,
	rating: 4.5,
	numReviews: 12,
};

const ProductPage = () => {
	const { image, name, price } = PRODUCT;
	return (
		<Box>
			<Image src={image} alt={name} w='400' h='400'></Image>
		</Box>
        
	);
};

export default ProductPage;
