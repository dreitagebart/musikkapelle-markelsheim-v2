import { Box, Button, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// import promenadenkonzert from "../assets/images/ads/promenadenkonzert.jpeg";
import band from "../assets/images/2023_weinberg.jpg";
import { Global, PageHeader } from "../components";
import { NextPageExtended } from "../utils";

const Page: NextPageExtended = () => {
	return (
		<Global>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
			>
				<PageHeader>Herzlich Willkommen!</PageHeader>
				<Image
					src={band}
					alt="Gruppenbild der Musikkapelle"
					className="band-logo"
				></Image>
				<Stack
					direction={["column", "row"]}
					// width='100%'
					// padding='2rem'
					mt="2rem"
					// mb='2rem'
					spacing="2rem"
					alignItems="flex-start"
				>
					<Box
						width="100%"
						borderWidth="1px"
						borderStyle="solid"
						borderColor="gray.200"
						padding="2rem"
						borderRadius="8px"
						boxShadow="lg"
					>
						<Heading size="md" variant="mb">
							Jubiläumsjahr
						</Heading>
						<Text variant="block">
							Wir feiern 60 Jahre Musikkapelle Markelsheim! Erfahren Sie mehr
							über unsere Veranstaltungen im Jubiläumsjahr 2024.
						</Text>
						<Stack direction={["column", "row"]} spacing="12px">
							<Text>
								<a
									href="/pdf/veranstaltungen_jubiläumsjahr.pdf"
									target="_blank"
								>
									<Button rightIcon={<Icon as={FaArrowRight}></Icon>}>
										PDF zum Jubiläumsjahr
									</Button>
								</a>
							</Text>
							{/* <Text>
                <Link href='/weinbergwanderung' passHref>
                  <Button rightIcon={<Icon as={FaArrowRight}></Icon>}>
                    Anmeldung Schlürfen im 3/4 Takt
                  </Button>
                </Link>
              </Text> */}
						</Stack>
					</Box>
					<Box
						width="100%"
						borderWidth="1px"
						borderStyle="solid"
						borderColor="gray.200"
						padding="2rem"
						borderRadius="8px"
						boxShadow="lg"
					>
						<Heading size="md" variant="mb">
							Unser Verein
						</Heading>
						<Text variant="block">
							Wir sind die Musikkapelle Markelsheim e. V. und zählen aktuell
							rund 40 aktive Musikerinnen und Musiker.
						</Text>
						<Text>
							<Link href="/club/about" passHref>
								<Button rightIcon={<Icon as={FaArrowRight}></Icon>}>
									Mehr über den Verein
								</Button>
							</Link>
						</Text>
					</Box>
					<Box
						width="100%"
						padding="2rem"
						borderRadius="8px"
						boxShadow="lg"
						borderWidth="1px"
						borderStyle="solid"
						borderColor="gray.200"
					>
						<Heading size="md" variant="mb">
							Unser Musikprogramm
						</Heading>
						<Text variant="block">
							Wir lieben die traditionelle und konzertante Blasmusik, spielen
							aber auch gerne alles vom Musical bis hin zur Operette. Haben Sie
							Lust uns live zu hören?
						</Text>
						<Text>
							<Link href="/events" passHref>
								<Button rightIcon={<Icon as={FaArrowRight}></Icon>}>
									Aktuelle Termine
								</Button>
							</Link>
						</Text>
					</Box>
				</Stack>
				{/* <Center mt={10}>
          <Image src={promenadenkonzert} alt="Promenadenkonzert"></Image>
        </Center> */}
			</Box>
		</Global>
	);
};

Page.auth = false;

export default Page;
