import Image from "next/image";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";

import Rating from "../Rating";

const ProductItem = ({ product }) => {
	const { name, image, rating, numReviews, price } = product;
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
			<Link>
				<Image src={image} alt={name} width='400px' height='400px' />
			</Link>
			<Link>
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
			<Heading as='h3' size='md'>
				${price}
			</Heading>
		</Flex>
	);
};

export default ProductItem;
