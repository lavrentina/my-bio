import React from "react";
import { Image, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/avatar.jpg";

const greeting = "Hello there, I am Valentyna!";
const bio1 = "A beginner frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
	<FullScreenSection
		justifyContent="center"
		alignItems="center"
		color="white"
		backgroundColor="#F05D4D"
	>
		<VStack>
			<Image src={avatar} width="125px" borderRadius="full" />
			<Text>{greeting}</Text>
			<Heading>{bio1}</Heading>
			<Heading>{bio2}</Heading>
		</VStack>
	</FullScreenSection>
);

export default LandingSection;
