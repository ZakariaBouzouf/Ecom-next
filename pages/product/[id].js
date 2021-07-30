import NextLink from "next/link";
import {
	Box,
	Flex,
	Link,
	Heading,
	Divider,
	Text,
	Table,
	Tr,
	Td,
	Button,
	HStack,
} from "@chakra-ui/react";
import Image from "next/image";

import Rating from "../../component/Rating";

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
	const { image, name, price, rating, numReviews, description, countInStock } = PRODUCT;
	return (
		<>
			<NextLink href='/' passHref>
				<Link>Go back</Link>
			</NextLink>
			<HStack spacing='50'>
				<Box w='50%'>
					<Image
						src={image}
						alt={name}
						width='600'
						height='600'
						layout='responsive'
					></Image>
				</Box>
				<HStack spacing='5' w='50%'>
					<Flex flexDirection='column'>
						<Heading>{name}</Heading>
						<Divider />
						<Rating value={rating} text={`${numReviews} reviews`}></Rating>
						<Divider />
						<Box>Price : ${price}</Box>
						<Divider />
						<Text as='p'>{description}</Text>
					</Flex>
					<Box>
						<Table variant='simple' border='1px' borderColor='gray.200'>
							<Tr>
								<Td>Price</Td>
								<Td>{price}</Td>
							</Tr>
							<Tr>
								<Td>Status</Td>
								<Td>{countInStock === 0 ? "Out of Stock" : countInStock}</Td>
							</Tr>
							<Tr>
								<Button>Check Out</Button>
							</Tr>
						</Table>
					</Box>
				</HStack>
			</HStack>
		</>
	);
};

export default ProductPage;
