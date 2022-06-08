import { Button } from '@chakra-ui/react'
import Link from 'next/link'

import {
  Animate,
  Block,
  ClubSubMenu,
  Global,
  PageHeader
} from '../../components'
import { NextPageExtended } from '../../utils'

const Page: NextPageExtended = () => {
  return (
    <Global title='Ausbildung'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <PageHeader>Ausbildung</PageHeader>
        <Block>
          Der Nachwuchs ist unsere Zukunft. Deswegen liegt es uns am Herzen,
          dass Kindern und Jugendlichen die Möglichkeit gegeben wird ein
          Instrument zu erlernen. Die Ausbildung der Instrumente erfolgt über
          die Jugendmusikschule Bad Mergentheim.
        </Block>
        <Block>
          Als Ergänzung zum Einzel- oder Gruppenunterricht soll wieder ein
          Jugendorchester aufgebaut werden, um das gemeinsame Spielen zu fördern
          und die Freude an der Musik zu verstärken.
        </Block>
        <Block>
          Damit sich interessierte Nachwuchsmusiker von morgen in unser
          Vereinsleben einfinden können, bieten wir dieses Jahr am{' '}
          <b>Samstag, den 23.07.2022</b> eine &laquo;Instrumentenrally&raquo; in
          der Grundschule Markelsheim an.
        </Block>
        <Block>
          <Link href='/rally' passHref>
            <Button variant='solid' colorScheme='red'>
              Anmeldeformular zur Instrumentenrally
            </Button>
          </Link>
        </Block>
        <Block>
          Solltest du Interesse an einer Ausbildung haben, so wende dich bitte
          an unseren Vereinsvorstand <Link href='/contact'>Verena Hüttl</Link>.
        </Block>
      </Animate>
    </Global>
  )
}

Page.auth = false

export default Page
