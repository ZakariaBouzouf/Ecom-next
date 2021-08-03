import { Link, Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import NextLink from "next/link";

import InputField from "../component/form/InputField";
import { useState } from "react";

const SignIn = () => {
	const [isLogin, setIsLogin] = useState(false);

	const switchToRegister = () => {
		setIsLogin(!isLogin);
	};
	const validation = Yup.object({
		email: Yup.string().email("Enter a valid email").required("Email is required"),
		password: Yup.string().required("Password is required"),
	});
	return (
		<VStack p='4' align='stretch' w='50%' spacing='4'>
			<Heading as='h1' size='xl' fontWeight='normal'>
				{!isLogin ? "Sign in" : "Sign up"}
			</Heading>
			<Box>
				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={validation}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					{(formik) => (
						<Form>
							{/* {console.log(formik)} */}
							{isLogin && (
								<InputField
									label='Your Name'
									name='name'
									type='text'
									placeHolder='Enter Your Name'
								/>
							)}

							<InputField
								label='Email Address'
								name='email'
								type='email'
								placeHolder='Enter Your Address Email'
							/>
							<InputField
								label='Password'
								name='password'
								type='password'
								placeHolder='Enter Your Password'
							/>
							{isLogin && (
								<InputField
									label='Confirm Your Password'
									name='confirmPassword'
									type='password'
									placeHolder='Confirm Your Password'
								/>
							)}
							<Button
								bg='black'
								color='white'
								type='submit'
								my='5'
								size='xl'
								p='4'
								textTransform='uppercase'
								rounded='none'
							>
								Sign in
							</Button>
							<Text as='p' fontWeight='normal'>
								{!isLogin ? "New Costumer ?" : "Already have an Account ?"}
								<NextLink href='' passHref>
									<Link
										ml='2'
										onClick={switchToRegister}
										textDecoration='underline'
										_hover={{ fontWeight: "bold" }}
									>
										{!isLogin ? "Register" : "Login"}
									</Link>
								</NextLink>
							</Text>
						</Form>
					)}
				</Formik>
			</Box>
		</VStack>
	);
};

export default SignIn;
