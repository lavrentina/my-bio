import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const photo1 =
	"https://images.unsplash.com/photo-1591382696684-38c427c7547a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const photo2 =
	"https://images.unsplash.com/photo-1627843240043-aa499ed215e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";
const photo3 =
	"https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1836&q=80";
const photo4 =
	"https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80";

const projects = [
	{
		title: "React Space",
		description:
			"Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
		getImageSrc: photo1,
	},
	{
		title: "React Infinite Scroll",
		description:
			"A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land",
		getImageSrc: photo2,
	},
	{
		title: "Photo Gallery",
		description:
			"A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
		getImageSrc: photo3,
	},
	{
		title: "Event planner",
		description:
			"A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
		getImageSrc: photo4,
	},
];

const ProjectsSection = () => {
	return (
		<FullScreenSection
			backgroundColor="#238F51"
			isDarkBackground
			p={8}
			alignItems="flex-start"
			spacing={8}
		>
			<Heading as="h1" id="projects-section" color="white">
				Featured Projects
			</Heading>

			<Box
				display="grid"
				gridTemplateColumns="repeat(2,minmax(0,1fr))"
				gridGap={8}
			>
				{projects.map((project) => (
					<Card
						key={project.title}
						title={project.title}
						description={project.description}
						imageSrc={project.getImageSrc}
					/>
				))}
			</Box>
		</FullScreenSection>
	);
};

export default ProjectsSection;
