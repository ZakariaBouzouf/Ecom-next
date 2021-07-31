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
	VStack,
	Spacer,
	Center,
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
		<Box>
			<Box p='10'>
				<NextLink href='/' passHref>
					<Link textTransform='uppercase'>Go back</Link>
				</NextLink>
			</Box>
			<Flex
				flexDirection={{ base: "column", md: "row", xl: "row" }}
				// alignContent='space-around'
			>
				<Box w='100%' mr='6'>
					<Image
						src={image}
						alt={name}
						width='700'
						height='700'
						// layout='responsive'
					></Image>
				</Box>
				{/* <Spacer /> */}
				<Flex>
					<VStack alignItems='flex-start' mr='6' spacing='3'>
						<Heading size='xl' fontWeight='normal'>
							{name}
						</Heading>
						<Divider />
						<Rating value={rating} text={`${numReviews} reviews`}></Rating>
						<Divider />
						<Box>Price : ${price}</Box>
						<Divider />
						<Text as='p'>{description}</Text>
					</VStack>
					{/* <Spacer /> */}
					<Flex alignItems='flex-start' justifyContent='stretch'>
						<Table variant='simple' border='1px' borderColor='gray.200'>
							<Tr>
								<Td>Price</Td>
								<Td>{price}</Td>
							</Tr>
							<Tr>
								<Td>Status</Td>
								<Td>{countInStock === 0 ? "Out of Stock" : countInStock}</Td>
							</Tr>
							<Tr w='100%'>
								<Flex alignItems='center'>
									<Button w='100%'>Check Out</Button>
								</Flex>
							</Tr>
						</Table>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
};

export default ProductPage;
