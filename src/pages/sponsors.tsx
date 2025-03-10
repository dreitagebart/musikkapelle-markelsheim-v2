import { Alert, AlertIcon, Heading, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

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
import { Animate, Global, PageHeader, Sponsor } from "../components";
import { NextPageExtended } from "../utils";

const Page: NextPageExtended = () => {
	return (
		<Global title="Sponsoren">
			<Animate>
				<PageHeader>Unsere Sponsoren</PageHeader>
				<Heading size="md" variant="my" mb="20px">
					Danke an alle Sponsoren, die unsere Vereinsarbeit unterstützen!
				</Heading>
				<SimpleGrid minChildWidth={["300px", "400px"]} spacing="20px" mb="40px">
					<Sponsor
						label="Bokmeier Erd & Tiefbau"
						image={betb}
						link="https://www.bokmeier.de"
					></Sponsor>
					<Sponsor
						label="Helmut Halbmann GmbH"
						image={halbmann}
						link="https://www.zimmereihalbmann.de"
					></Sponsor>
					<Sponsor
						label="Jakobshof Lehr"
						image={jakobshof}
						link="https://jakobshof-lehr.de/"
					></Sponsor>
					<Sponsor
						label="Tauberenergie Kuhn"
						image={kuhn}
						link="https://www.tauberenergie-kuhn.de"
					></Sponsor>
					<Sponsor
						label="Bürohaus Leuchs"
						image={leuchs}
						link="https://buero-leuchs.de/"
					></Sponsor>
					<Sponsor
						label="Weinstube Lochner"
						image={lochner}
						link="https://www.weinstube-lochner.de"
					></Sponsor>
					<Sponsor
						label="St. Urban & Möhler Apotheke"
						image={mstu}
						link="http://www.moehler-apotheke.de/"
					></Sponsor>
					<Sponsor
						label="Gasthof zur Sonnenhalde"
						image={gzs}
						link="https://visit.bad-mergentheim.de/de/kultur-schloss-genuss/gastronomieverzeichnis/gasthaus-sonnenhalde-id_361"
					></Sponsor>
					<Sponsor
						label="Sparkasse Tauberfranken"
						image={spkTbf}
						link="https://www.sparkasse-tauberfranken.de"
					></Sponsor>
					<Sponsor
						label="WITTENSTEIN"
						image={wittenstein}
						link="https://www.wittenstein.de"
					></Sponsor>
				</SimpleGrid>

				<Link href="/contact" passHref>
					<Alert
						cursor="pointer"
						status="info"
						mb="1rem"
						alignItems="flex-start"
						borderRadius="8px"
						maxWidth="800px"
					>
						<AlertIcon></AlertIcon>
						<div>
							Bei Interesse an einem Sponsoring für unseren Verein, benutzen Sie
							einfach unser Kontaktformular
						</div>
					</Alert>
				</Link>
			</Animate>
		</Global>
	);
};

Page.auth = false;

export default Page;
