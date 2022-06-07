import Link from 'next/link'
import {
  Box,
  Divider,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Text
} from '@chakra-ui/react'
import { FaRegFilePdf } from 'react-icons/fa'

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
    <Global title='Mitgliedschaft'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <PageHeader>Aktive Mitgliedschaft</PageHeader>
        <Block>
          Du spielst bereits ein Blas- bzw. Schlaginstrument? Du bist auf der
          Suche nach einer guten Musikkapelle und guten Gemeinschaft?
        </Block>
        <Block>
          Die Musikkapelle Markelsheim freut sich jederzeit über neue aktive
          Mitglieder - egal welches Instrument. Natürlich kannst du auch
          jederzeit mal unverbindlich in den Proben reinschnuppern.
        </Block>
        <Block>
          Du spielst noch kein Instrument, aber du möchtest gerne eines
          erlernen? Hier gibt es in unserem Verein auch viele Möglichkeiten!!
          Sprich uns einfach an!
        </Block>
        <Block>
          Wende dich am besten an unsere Vorsitzende{' '}
          <Link href='/contact'>Verena Hüttl</Link>.
        </Block>
        <Block>Wir freuen uns auf dich!</Block>
        <PageHeader>Passive Mitgliedschaft</PageHeader>
        <Block>
          Sie sind Musikliebhaber spielen aber selbst kein Instrument? Freuen
          auch Sie sich über den Beitrag der Musikkapelle zum kulturellen Leben
          in Markelsheim? Ihnen gefällt unsere Musik, Sie finden unseren Verein
          sympathisch oder fühlen sich unserer Kapelle verbunden? Sie sind der
          Meinung, dass es die Blasmusik verdient hat, gefördert zu werden?
          Wollen auch Sie die Musikkapelle Markelsheim in seinem Wirken, sowie
          seiner Jugendarbeit unterstützen?
        </Block>
        <Block>
          Dann freuen wir uns sehr, Sie als passives Mitglied in der
          Musikkapelle Markelsheim begrüßen zu dürfen.
        </Block>
        <Box
          marginBottom='1rem'
          display='inline-block'
          background='gray.100'
          borderRadius='8px'
          fontStyle='italic'
          fontFamily='Montserrat Light'
          fontSize='1.2rem'
          padding='1rem'
        >
          <Text>Musik lebt durch den Menschen...</Text>
          <Text>...jeder Mensch braucht Musik...</Text>
          <Text>...und wir brauchen Sie!</Text>
        </Box>
        <Divider></Divider>
        <Text variant='block'>
          Für eine passive Mitgliedschaft wende dich einfach an{' '}
          <Link href='/contact'>unsere Ansprechpartner</Link> oder nutze das
          untenstehende Beitrittsformular zum Herunterladen.
        </Text>
        <LinkBox display='inline-block'>
          <LinkOverlay href='/pdf/mitgliedschaft.pdf'>
            <HStack
              padding='1rem'
              borderRadius='8px'
              borderWidth='1px'
              borderColor='gray.200'
              borderStyle='solid'
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

Page.auth = false

export default Page
