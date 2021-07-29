import Link from "next/link";

import { Heading } from "@chakra-ui/react";

const Logo = () => {
	return (
		<Heading pt='2' fontSize='20' ml='24' mr='6' _hover={{ color: "gray.200" }}>
			<Link href='/'>proshop</Link>
		</Heading>
	);
};

export default Logo;
