import NextLink from "next/link";

import Image from "next/image";
import { Flex, Heading, Text, Link } from "@chakra-ui/react";

import Rating from "../Rating";

const ProductItem = ({ product }) => {
	const { name, image, rating, numReviews, price, id } = product;
	return (
		<Flex
			flexDirection='column'
			p='4'
			// wmin='90'
			border='1px'
			borderRadius='md'
			borderColor='gray.200'
			alignItems='center'
			justifyContent='space-between'
		>
			<NextLink href={`/product/${id}`} passHref>
				<Link>
					<Image src={image} alt={name} layout='intrinsic' width='400' height='400' />
				</Link>
			</NextLink>
			<Link href={`/product/${id}`}>
				<Text
					as='p'
					textDecoration='underline'
					fontWeight='normal'
					fontSize='1rem'
					lineHeight='1.5'
					mb='2'
				>
					{name}
				</Text>
			</Link>
			<Rating value={rating} text={`${numReviews} reviews`}></Rating>
			<Heading as='h3' size='lg' fontWeight='normal'>
				${price}
			</Heading>
		</Flex>
	);
};

export default ProductItem;
