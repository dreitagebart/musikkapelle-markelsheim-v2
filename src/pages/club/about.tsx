import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

import {
  Animate,
  Block,
  ClubSubMenu,
  Global,
  PageHeader
} from '../../components'

const Page: NextPage = () => {
  return (
    <Global title='Über uns'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <PageHeader>Etwas über uns</PageHeader>
        <Box
          display='inline-block'
          background='gray.100'
          padding='1rem'
          borderRadius='8px'
          fontSize='1.2rem'
          fontFamily='Montserrat'
        >
          Unsere Musikkapelle zählt stolze 200 Mitglieder mit 40 aktiven
          Musikern.
        </Box>
        <Block>
          Bei durchschnittlich <strong>50 Auftritten im Jahr</strong> findet
          unsere harte Probenarbeit große Anerkennung und dies nicht nur in
          unserer Region. In Markelsheim gibt es kaum eine Feier, die ohne
          unsere Musik stattfindet.
        </Block>
        <Block>
          Die Proben finden jeden Mittwoch im Haus der Vereine in Markelsheim
          statt. Von jeweils <strong>20:00</strong> bis{' '}
          <strong>22:00 Uhr</strong> bereiten wir uns dort zum Beispiel auf die
          anstehenden Ständchen , Feste und Konzerte vor. Uns ist es wichtig
          neben den Noten aus dem Repertoire auch immer wieder neue Stücke mit
          aufzunehmen und diese einzustudieren
        </Block>
        <Block>
          <strong>
            Typisch für unsere Musikkapelle ist die konzertante Blasmusik
          </strong>
          . Abend-, Promenaden-, Fest- und vorweihnachtliche Konzerte stehen auf
          unserem Programm. Den Höhepunkt für uns bildet jedes Jahr{' '}
          <strong>das Weihnachtskonzert in Markelsheim</strong>.
        </Block>
      </Animate>
    </Global>
  )
}

export default Page
