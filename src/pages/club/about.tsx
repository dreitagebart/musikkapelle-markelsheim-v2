import { Box, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Animate, ClubSubMenu, Global } from '../../components'

const Page: NextPage = () => {
  return (
    <Global title='Über uns'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <Heading variant='my'>Etwas über uns</Heading>
        <Box
          background='gray.100'
          padding='1rem'
          borderRadius='8px'
          fontSize='1.2rem'
          fontFamily='Montserrat'
        >
          Unsere Musikkapelle zählt stolze 200 Mitglieder mit 40 aktiven
          Musikern.
        </Box>
        <Text variant='block'>
          Bei durchschnittlich <strong>50 Auftritten im Jahr</strong> findet
          unsere harte Probenarbeit große Anerkennung und dies nicht nur in
          unserer Region. In Markelsheim gibt es kaum eine Feier, die ohne
          unsere Musik stattfindet.
        </Text>
        <Text variant='block'>
          Die Proben finden jeden Mittwoch im Haus der Vereine in Markelsheim
          statt. Von jeweils <b>20:00</b> bis <b>22:00 Uhr</b> bereiten wir uns
          dort zum Beispiel auf die anstehenden Ständchen , Feste und Konzerte
          vor. Uns ist es wichtig neben den Noten aus dem Repertoire auch immer
          wieder neue Stücke mit aufzunehmen und diese einzustudieren
        </Text>
        <Text>
          <b>Typisch für unsere Musikkapelle ist die konzertante Blasmusik</b>.
          Abend-, Promenaden-, Fest- und vorweihnachtliche Konzerte stehen auf
          unserem Programm. Den Höhepunkt für uns bildet jedes Jahr{' '}
          <b>das Weihnachtskonzert in Markelsheim</b>.
        </Text>
      </Animate>
    </Global>
  )
}

export default Page
