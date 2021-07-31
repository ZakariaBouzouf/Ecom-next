import NextLink from "next/link";
import {
	Box,
	Flex,
	Link,
	Heading,
	Divider,
	Text,
	Button,
	HStack,
	VStack,
	Grid,
	GridItem,
	List,
	ListItem,
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

const ProductDetail = () => {
	const { image, name, price, rating, numReviews, description, countInStock } = PRODUCT;
	return (
		<>
			<Box p='10'>
				<NextLink href='/' passHref>
					<Link textTransform='uppercase'>Go back</Link>
				</NextLink>
			</Box>
			<Grid
				templateColumns='repeat(4, 1fr)'
				gap='6'
				// flexDirection={{ base: "column", md: "row", xl: "row" }}
				// alignContent='space-around'
			>
				<GridItem colSpan={2}>
					<Image
						src={image}
						alt={name}
						width='700'
						height='700'
						// layout='responsive'
					></Image>
				</GridItem>

				<GridItem>
					<VStack alignItems='flex-start' spacing='3'>
						<Heading size='lg' fontWeight='normal' p='2'>
							{name}
						</Heading>
						<Divider />
						<Box p='2'>
							<Rating value={rating} text={`${numReviews} reviews`}></Rating>
						</Box>
						<Divider />
						<Box p='2'>Price : ${price}</Box>
						<Divider />
						<Text p='2' as='p'>
							{description}
						</Text>
					</VStack>
				</GridItem>

				<GridItem>
					<Flex alignItems='flex-start'>
						<List
							templateColumns='repeat(1,1fr)'
							templateRows='repeat(4,1fr)'
							w='100%'
							spacing='4'
							border='1px'
							borderColor='gray.300'
							p='2'
						>
							<ListItem mt='2'>
								<Grid templateColumns='repeat(2, 1fr)' gap='5'>
									<GridItem>Price :</GridItem>
									<GridItem>$ {price}</GridItem>
								</Grid>
							</ListItem>
							<Divider />
							<ListItem>
								<Grid templateColumns='repeat(2, 1fr)' gap='5'>
									<GridItem>Status :</GridItem>
									<GridItem>
										{countInStock === 0 ? "Out of Stock" : countInStock}
									</GridItem>
								</Grid>
							</ListItem>
							<Divider />
							<ListItem>
								<Grid templateColumns='repeat(2, 1fr)' gap='5'>
									<GridItem>QTY :</GridItem>
									<GridItem>{PRODUCT.countInStock}</GridItem>
								</Grid>
							</ListItem>
							<Divider />
							<ListItem w='100%'>
								<Button
									size='lg'
									borderRadius='0'
									bg='black'
									color='white'
									w='100%'
									_hover={{
										bg: "gray.800",
									}}
								>
									Check Out
								</Button>
							</ListItem>
						</List>
					</Flex>
				</GridItem>
			</Grid>
		</>
	);
};

export default ProductDetail;
