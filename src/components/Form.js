import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	Textarea,
	VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import "../styles/Form.css";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required("Name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("E-mail is required"),
	comment: Yup.string()
		.min(25, "Must be 25 characters at minimum")
		.required("Comment is required"),
});

const Form = () => {
	const { isLoading, response, submit } = useSubmit();
	const { onOpen } = useAlertContext();
	const { errors, touched, getFieldProps, handleSubmit, resetForm } = useFormik(
		{
			initialValues: {
				firstName: "",
				email: "",
				type: "hireMe",
				comment: "",
			},

			validationSchema,

			onSubmit: (values) => {
				submit("https://example.com/#contact-me", values);
			},
		}
	);

	useEffect(() => {
		if (response) {
			onOpen(response.type, response.message);
			if (response.type === "success") {
				resetForm();
			}
		}
	}, [response]);

	return (
		<FullScreenSection
			isDarkBackground
			backgroundColor="#FEC126"
			py={16}
			spacing={8}
		>
			<VStack w="1024px" p={32} alignItems="flex-start">
				<Heading id="contactme-section">Contact Me</Heading>
				<Box p={6} rounded="md" w="100%">
					<form onSubmit={handleSubmit}>
						<VStack spacing={4}>
							<FormControl
								isInvalid={!!errors.firstName && touched.firstName}
								isRequired
							>
								<FormLabel htmlFor="firstName">Name</FormLabel>
								<Input
									id="firstName"
									name="firstName"
									{...getFieldProps("firstName")}
								/>
								<FormErrorMessage>{errors.firstName}</FormErrorMessage>
							</FormControl>

							<FormControl
								isInvalid={!!errors.email && touched.email}
								isRequired
							>
								<FormLabel htmlFor="email">E-mail</FormLabel>
								<Input
									id="email"
									name="email"
									type="email"
									{...getFieldProps("email")}
								/>
								<FormErrorMessage>{errors.email}</FormErrorMessage>
							</FormControl>

							<FormControl isRequired>
								<FormLabel htmlFor="type">Type of enquiry</FormLabel>
								<Select id="type" type="text" {...getFieldProps("type")}>
									<option value="hireMe">Freelance project proposal</option>
									<option value="openSource">
										Open source consultancy session
									</option>
									<option value="other">Other</option>
								</Select>
							</FormControl>

							<FormControl
								isInvalid={!!errors.comment && touched.comment}
								isRequired
							>
								<FormLabel htmlFor="comment">Your message</FormLabel>
								<Textarea
									id="comment"
									name="comment"
									height={250}
									{...getFieldProps("comment")}
								/>
								<FormErrorMessage>{errors.comment}</FormErrorMessage>
							</FormControl>

							<Button
								type="submit"
								bg="#238F51"
								width="full"
								isLoading={isLoading}
							>
								Submit
							</Button>
						</VStack>
					</form>
				</Box>
			</VStack>
		</FullScreenSection>
	);
};

export default Form;
