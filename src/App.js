import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
	return (
		<ChakraProvider>
			<AlertProvider>
				<main>
					<Header />
					<LandingSection />
					<ProjectsSection />
					<Form />
					<Footer />
					<Alert />
				</main>
			</AlertProvider>
		</ChakraProvider>
	);
}

export default App;
