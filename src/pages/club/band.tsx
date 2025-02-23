import {
	Box,
	Center,
	Heading,
	List,
	ListItem,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import groupImage from "../../assets/images/2023_weinberg.jpg";
// import groupImage from '../../assets/images/mkm2022_01.jpg'
import { Animate, ClubSubMenu, Global } from "../../components";
import { NextPageExtended } from "../../utils";

const Page: NextPageExtended = () => {
	return (
		<Global title="Musikkapelle">
			<ClubSubMenu></ClubSubMenu>
			<Animate>
				<Center my="1rem">
					<Image
						className="band-logo"
						placeholder="blur"
						quality={100}
						src={groupImage}
						alt="Gruppenbild auf dem Weinberg Markelsheim"
					/>
				</Center>
				<VStack spacing="2rem">
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						// maxWidth='860px'
					>
						<Heading size="md">Dirigent</Heading>
						<Text>Stephan Deppisch</Text>
					</Box>
					<SimpleGrid
						columns={{ sm: 2, lg: 3, xl: 4 }}
						spacingX="4rem"
						spacingY="2rem"
					>
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Klarinette
							</Heading>
							<List>
								<ListItem>Isabell Balling</ListItem>
								<ListItem>Corinna Burkert</ListItem>
								<ListItem>Isabelle Herrmann</ListItem>
								<ListItem>Verena Hüttl</ListItem>
								<ListItem>Alfred Kimmelmann</ListItem>
								<ListItem>Karin Staudt</ListItem>
								<ListItem>Simone Tatusch</ListItem>
							</List>
						</Box>
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Schlagwerk
							</Heading>
							<List>
								<ListItem>Christoph Burkert</ListItem>
								<ListItem>Lena Deppisch</ListItem>
								{/* <ListItem>Fabian Gundling</ListItem> */}
								<ListItem>David Hernadi</ListItem>
							</List>
						</Box>
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Querflöte
							</Heading>
							<List>
								<ListItem>Jule Haas</ListItem>
								<ListItem>Sonja Hainke</ListItem>
								<ListItem>Kristin Peyerl</ListItem>
								<ListItem>Doreen Pütz</ListItem>
								<ListItem>Verena Ruck</ListItem>
							</List>
						</Box>
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Tenorhorn
							</Heading>
							<List>
								<ListItem>Hermann Beck</ListItem>
								{/* <ListItem>Stefan Büchold</ListItem> */}
								<ListItem>Anton Kimmelmann</ListItem>
								<ListItem>Wilfried Zeihsel</ListItem>
							</List>
						</Box>
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Trompete
							</Heading>
							<List>
								<ListItem>Jens Gundling</ListItem>
								<ListItem>Jochen Popp</ListItem>
								<ListItem>Walter Schulz</ListItem>
							</List>
						</Box>
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Flügelhorn
							</Heading>
							<List>
								<ListItem>Tobias Borst</ListItem>
								<ListItem>Tobias Haas</ListItem>
								<ListItem>David Hartmann</ListItem>
								<ListItem>Klemens Leuchs</ListItem>
								<ListItem>Benedikt Mika</ListItem>
								<ListItem>Fred Prokosch</ListItem>
								<ListItem>Anton Schneider</ListItem>
								<ListItem>Rebeca Schulz</ListItem>
							</List>
						</Box>
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Bariton
							</Heading>
							<List>
								<ListItem>Florian Metzger</ListItem>
								<ListItem>Eugen Porasil</ListItem>
								<ListItem>Anton Rupp</ListItem>
							</List>
						</Box>
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Posaune
							</Heading>
							<List>
								<ListItem>Lukas Halbmann</ListItem>
								<ListItem>Bastian Hartmann</ListItem>
								{/* <ListItem>Philipp Hernadi</ListItem> */}
								<ListItem>Franz Schmidberger</ListItem>
							</List>
						</Box>
					</SimpleGrid>
					<SimpleGrid
						columns={{ sm: 1, md: 3, lg: 3, xl: 3 }}
						spacingX="4rem"
						spacingY="2rem"
					>
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Bass
							</Heading>
							<List>
								<ListItem>Alois Zöllinger</ListItem>
							</List>
						</Box>
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Horn
							</Heading>
							<List>
								<ListItem>Kai Kimmelmann</ListItem>
							</List>
						</Box>
						{/* <Box textAlign="center">
							<Heading size="md" variant="mb">
								Fagott
							</Heading>
							<List>
								<ListItem>Tizian Halbmann</ListItem>
							</List>
						</Box> */}
						<Box textAlign="center">
							<Heading size="md" variant="mb">
								Saxophon
							</Heading>
							<List>
								<ListItem>Nina Helebrand</ListItem>
							</List>
						</Box>
					</SimpleGrid>
				</VStack>
			</Animate>
		</Global>
	);
};

Page.auth = false;

export default Page;
