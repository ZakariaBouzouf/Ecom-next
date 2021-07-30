import { Flex, Box, Button, Input, Link, Container, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

import Logo from "./logo";

const MainNavigation = () => {
	return (
		<Flex
			as='header'
			textTransform='uppercase'
			h='40'
			bgColor='#343a40'
			color='white'
			align='center'
			// justifyContent='space-between'
		>
			<Container maxW='container.xl'>
				<HStack justifyContent='space-between'>
					<Flex align='center'>
						<Logo />
						<Input
							variant='outline'
							size='md'
							bg='white'
							w='50'
							mr='3'
							placeholder='Search for a product'
							color='black'
							// _focus={{ borderColor: "black" }}
						/>
						<Button color='green' variant='outline' borderColor='green'>
							Search
						</Button>
					</Flex>

					<Box mr='3'>
						<Link
							ml='2'
							mr='8'
							fontSize='0.875rem'
							color='gray.300'
							fontWeight='600'
							_hover={{ color: "white" }}
						>
							<FontAwesomeIcon
								icon={faShoppingCart}
								style={{ marginRight: "8px" }}
							></FontAwesomeIcon>
							Chart
						</Link>

						<Link
							ml='2'
							mr='8'
							fontSize='0.875rem'
							color='gray.300'
							fontWeight='600'
							_hover={{ color: "white" }}
						>
							<FontAwesomeIcon
								icon={faUser}
								style={{ marginRight: "8px" }}
							></FontAwesomeIcon>
							Sign in
						</Link>
					</Box>
				</HStack>
			</Container>
		</Flex>
	);
};

export default MainNavigation;
