import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../styles/Card.css";

const Card = ({ title, description, imageSrc }) => {
	return (
		<Box borderRadius="md" bg="white" color="black">
			<Image src={imageSrc} className="card-image" />
			<VStack
				display="flex"
				alignItems="flex-start"
				justifyContent="flex-start"
				padding="28px 16px 16px 16px"
			>
				<Heading size="md">{title}</Heading>
				<Text color="gray">{description}</Text>
				<HStack padding="4px 0" className="card-link">
					<Text fontSize="sm">See more</Text>
					<FontAwesomeIcon icon={faArrowRight} size="1x" className="arrow" />
				</HStack>
			</VStack>
		</Box>
	);
};

export default Card;
