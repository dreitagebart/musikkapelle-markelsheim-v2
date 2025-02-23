import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Icon,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import betb from "../assets/images/sponsors/bokmeier_erd_tiefbau.png";
import leuchs from "../assets/images/sponsors/buerohaus-leuchs.png";
import gzs from "../assets/images/sponsors/gasthof_zur_sonnenhalde.png";
import halbmann from "../assets/images/sponsors/halbmann.png";
import jakobshof from "../assets/images/sponsors/jakobshof.png";
import lochner from "../assets/images/sponsors/lochner.png";
import mstu from "../assets/images/sponsors/moehler_sturban.png";
import spkTbf from "../assets/images/sponsors/sparkasse_tauberfranken.jpg";
import kuhn from "../assets/images/sponsors/tauberenergie_kuhn.png";
import wittenstein from '../assets/images/sponsors/wittenstein.jpg'
import band from "../assets/images/2023_weinberg.jpg";
// import jahreskonzert from "../assets/images/jahreskonzert-2025.png";
import { Global, PageHeader, Sponsor } from "../components";
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
					{/* <Box
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
						</Stack>
					</Box> */}
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
				<Heading size="md" mt={20}>
					Unsere Sponsoren
				</Heading>
				{/* <Center mt={10}> */}
				<Flex
					alignItems='center'
					justifyContent='center'
					wrap='wrap'
					// width='100%'
					mt={10}
					// columns={[1, 2, 3, 4]}
					// minChildWidth="sm"
					// spacing="20px"
					mb="40px"
				>
					<Sponsor
						mx={5}
						size={200}
						label="Bokmeier Erd & Tiefbau"
						image={betb}
						link="https://www.bokmeier.de"
					></Sponsor>
					<Sponsor
						mx={5}
						size={200}
						label="Helmut Halbmann GmbH"
						image={halbmann}
						link="https://www.zimmereihalbmann.de"
					></Sponsor>
					<Sponsor
						mx={5}
						size={200}
						label="Jakobshof Lehr"
						image={jakobshof}
						link="https://jakobshof-lehr.de/"
					></Sponsor>
					<Sponsor
						mx={5}
						size={200}
						label="Tauberenergie Kuhn"
						image={kuhn}
						link="https://www.tauberenergie-kuhn.de"
					></Sponsor>
					<Sponsor
						mx={5}
						size={200}
						label="Bürohaus Leuchs"
						image={leuchs}
						link="https://buero-leuchs.de/"
					></Sponsor>
					<Sponsor
						mx={5}
						size={200}
						label="Weinstube Lochner"
						image={lochner}
						link="https://www.weinstube-lochner.de"
					></Sponsor>
					<Sponsor
						mx={5}
						size={200}
						label="St. Urban & Möhler Apotheke"
						image={mstu}
						link="http://www.moehler-apotheke.de/"
					></Sponsor>
					<Sponsor
						mx={5}
						size={200}
						label="Gasthof zur Sonnenhalde"
						image={gzs}
						link="https://visit.bad-mergentheim.de/de/kultur-schloss-genuss/gastronomieverzeichnis/gasthaus-sonnenhalde-id_361"
					></Sponsor>
					<Sponsor
						mx={5}
						size={200}
						label="Sparkasse Tauberfranken"
						image={spkTbf}
						link="https://www.sparkasse-tauberfranken.de"
					></Sponsor>
					<Sponsor
						mx={5}
						size={200}
						label="WITTENSTEIN"
						image={wittenstein}
						link="https://www.wittenstein.de"
					></Sponsor>
				</Flex>
				{/* <Image src={jahreskonzert} alt="Jahreskonzert 2025"></Image> */}
				{/* </Center> */}
			</Box>
		</Global >
	);
};

Page.auth = false;

export default Page;
