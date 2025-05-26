import { Button, Heading } from "@chakra-ui/react";
import Link from "next/link";

import {
	Animate,
	Block,
	ClubSubMenu,
	Global,
	PageHeader,
} from "../../components";
import { NextPageExtended } from "../../utils";

const Page: NextPageExtended = () => {
	return (
		<Global title="Ausbildung">
			<ClubSubMenu></ClubSubMenu>
			<Animate>
				<PageHeader>Ausbildung</PageHeader>
				<Block>
					Der Nachwuchs ist unsere Zukunft. Deswegen liegt es uns am Herzen,
					dass Kindern und Jugendlichen die Möglichkeit gegeben wird, ein
					Instrument zu erlernen.
				</Block>
				<Block>
					Die Musikkapelle Markelsheim e.&nbsp;V. bietet in Kooperation mit der
					Jugendmusikschule Bad Mergentheim Unterricht für verschiedene
					Instrumente an. Als Teil dieser Kooperation erhältst du einen
					monatlichen Zuschuss der Musikkapelle Markelsheim e. V. zum Unterricht
					sowie die kostenfreie Teilnahme an der Jugendmusikkapelle.
				</Block>
				<Block>
					Als Ergänzung zum Einzel- oder Gruppenunterricht bauen wir wieder ein
					Jugendorchester auf, um das gemeinsame Spielen zu fördern und die
					Freude an der Musik zu verstärken.
				</Block>
				<Heading>Klarinettenunterricht ab September 2025!</Heading>
				<Block>
					Ab September 2025 gibt es zusätzlich die Möglichkeit, den
					Klarinettenunterricht direkt in Markelsheim wahrzunehmen, wenn
					genügend Kinder Interesse haben. Bist du dabei?
				</Block>
				<Block>
					Solltest du Interesse an einer Ausbildung haben, so wende dich bitte
					an unseren Vereinsvorstand <Link href="/contact">Verena Hüttl</Link>.
				</Block>
				{/* Die Ausbildung der Instrumente erfolgt über
					die Jugendmusikschule Bad Mergentheim.
				</Block>
				<Block>
					Als Ergänzung zum Einzel- oder Gruppenunterricht soll wieder ein
					Jugendorchester aufgebaut werden, um das gemeinsame Spielen zu fördern
					und die Freude an der Musik zu verstärken.
				</Block>
				<Block>

					Damit sich interessierte Nachwuchsmusiker von morgen in unser
					Vereinsleben einfinden können, bieten wir dieses Jahr am{" "}
					<b>Samstag, den 15.03.2025</b> eine &laquo;Instrumentenrallye&raquo;
					in der Grundschule Markelsheim an.
				</Block> */}
				{/* <Block>
					<Link href="/rallye" passHref>
						<Button variant="solid" colorScheme="red">
							Anmeldeformular zur Instrumentenrallye
						</Button>
					</Link>
				</Block> */}
			</Animate>
		</Global>
	);
};

Page.auth = false;

export default Page;
