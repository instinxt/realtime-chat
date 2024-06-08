import {
	Box,
	Container,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { Login } from "../components/authentication/Login";
import { Signup } from "../components/authentication/Signup";

export const HomePage = () => {
	const history = useHistory();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("userInfo"));

		if (user) history.push("/chats");
	}, [history]);

	return (
		<Container maxW="xl" centerContent>
			<Box
				display="flex"
				justifyContent="center"
				p={3}
				bg="white"
				w="100%"
				m="40px 0 15px 0"
				borderRadius="lg"
				borderWidth="3px"
				borderColor="black"
			>
				<Text fontSize="4xl" fontFamily="Work sans" fontWeight="bold">
					GupShup
				</Text>
			</Box>
			<Box
				bg="white"
				w="100%"
				p={4}
				borderRadius="lg"
				borderWidth="3px"
				borderColor="black"
			>
				<Tabs isFitted variant="soft-rounded">
					<TabList mb="1em" gap=".7em">
						<Tab border="2px">Login</Tab>
						<Tab border="2px">Sign Up</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Login />
						</TabPanel>
						<TabPanel>
							<Signup />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	);
};
