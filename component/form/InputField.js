import { Input, FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import { useField, ErrorMessage } from "formik";

const InputField = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<FormControl id={field.name} isInvalid={meta.error}>
				{/* {console.log("FIELD", field, "META", meta)} */}
				<FormLabel htmlFor={field.name} fontSize='1rem' fontWeight='300'>
					{label}
				</FormLabel>
				<Input {...field} {...props} p='5' rounded='none' />
				{meta.touched && meta.error ? (
					<FormErrorMessage fontWeight='normal'>{meta.error}</FormErrorMessage>
				) : null}
			</FormControl>
		</>
	);
};

export default InputField;
