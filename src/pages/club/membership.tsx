import Link from 'next/link'
import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Text
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { FaRegFilePdf } from 'react-icons/fa'

import { Animate, ClubSubMenu, Global } from '../../components'

const Page: NextPage = () => {
  return (
    <Global title='Mitgliedschaft'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <Heading variant='my'>Aktive Mitgliedschaft</Heading>
        <Text>
          Du spielst bereits ein Blas- bzw. Schlaginstrument? Du bist auf der
          Suche nach einer guten Musikkapelle und guten Gemeinschaft?
        </Text>
        <Text variant='block'>
          Die Musikkapelle Markelsheim freut sich jederzeit über neue aktive
          Mitglieder - egal welches Instrument. Natürlich kannst du auch
          jederzeit mal unverbindlich in den Proben reinschnuppern.
        </Text>
        <Text variant='block'>
          Du spielst noch kein Instrument, aber du möchtest gerne eines
          erlernen? Hier gibt es in unserem Verein auch viele Möglichkeiten!!
          Sprich uns einfach an!
        </Text>
        <Text variant='block'>
          Wende dich am besten an unsere Vorsitzende{' '}
          <Link href='/contact'>Verena Hüttl</Link>.
        </Text>
        <Text variant='block'>Wir freuen uns auf dich!</Text>
        <Heading variant='my'>Passive Mitgliedschaft</Heading>
        <Text>
          Sie sind Musikliebhaber spielen aber selbst kein Instrument? Freuen
          auch Sie sich über den Beitrag der Musikkapelle zum kulturellen Leben
          in Markelsheim? Ihnen gefällt unsere Musik, Sie finden unseren Verein
          sympathisch oder fühlen sich unserer Kapelle verbunden? Sie sind der
          Meinung, dass es die Blasmusik verdient hat, gefördert zu werden?
          Wollen auch Sie die Musikkapelle Markelsheim in seinem Wirken, sowie
          seiner Jugendarbeit unterstützen?
        </Text>
        <Text variant='block'>
          Dann freuen wir uns sehr, Sie als passives Mitglied in der
          Musikkapelle Markelsheim begrüßen zu dürfen.
        </Text>
        <Box
          background='gray.100'
          borderRadius='8px'
          fontStyle='italic'
          fontFamily='Montserrat'
          fontSize='1.2rem'
          padding='1rem'
        >
          Musik lebt durch den Menschen...
          <br />
          ... jeder Mensch braucht Musik...
          <br />
          ... und wir brauchen Sie!
        </Box>
        <Divider></Divider>
        <Text variant='block'>
          Für eine passive Mitgliedschaft wende dich einfach an{' '}
          <Link href='/contact'>unsere Ansprechpartner</Link> oder nutze das
          untenstehende Beitrittsformular zum Herunterladen.
        </Text>
        <LinkBox>
          <LinkOverlay href='/pdf/mitgliedschaft.pdf'>
            <HStack
              padding='1rem'
              borderRadius='8px'
              borderWidth='1px'
              borderColor='#cfcfcf'
              borderStyle='solid'
              width='420px'
            >
              <Icon as={FaRegFilePdf} boxSize='2rem'></Icon>
              <Box>
                <b>Mitgliedschaft.pdf</b>
                <Text fontSize='0.8rem'>
                  Beitritterklärung für die Musikkapelle Markelsheim
                </Text>
              </Box>
            </HStack>
          </LinkOverlay>
        </LinkBox>
      </Animate>
    </Global>
  )
}

export default Page
