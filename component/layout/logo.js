import Link from "next/link";

import { Heading } from "@chakra-ui/react";

const Logo = () => {
	return (
		<Heading fontSize='20' mr='6' ml='4' _hover={{ color: "gray.200" }}>
			<Link href='/'>proshop</Link>
		</Heading>
	);
};

export default Logo;
