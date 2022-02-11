import { Box, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Animate, Global, MarkelsheimSubMenu } from '../../components'

const Page: NextPage = () => {
  return (
    <Global title='Region'>
      <MarkelsheimSubMenu></MarkelsheimSubMenu>
      <Animate>
        <Heading variant='my'>Unsere Region</Heading>
        <Text>
          An der &quot;Romantischen Straße&quot;, im Herzen des lieblichen
          Taubertals, liegt unsere schöne Ortschaft Markelsheim. Idyllisch
          gelegen zwischen ausgedehnten Weinbergen, Feldern und Wiesen, am
          Zusammenfluß von Lochbach und Tauber. Markelsheim ist mit ca. 2000
          Einwohnern größter Stadtteil vom weltbekannten Kur- und Badeort Bad
          Mergentheim. Brunnen am Marktplatz Der Charakter und Idylle eines
          fränkischen Weindorfes ist trotz der Ortssanierung geblieben.
          Zentraler Punkt ist der Marktplatz. Umrahmt von dem hübschen Rathaus,
          den Gasthäusern, der alten Dorfschmiede bietet sich dem Gast ein
          malerisches Bild.
        </Text>
        <Text variant='block'>
          Stolz ragt auf dem nahen Engelsberg der alte Wehrturm mit seinen
          Resten der Befestigung und der Giebelfassade des Schulhauses ins Tal
          und weist auf die geschichtliche Vergangenheit von Markelsheim hin.
        </Text>
        <Text variant='block'>
          Bereits 1054 fand Markelsheim eine erste urkundliche Erwähnung. Vom
          15.Jahrhundert an zählte der Ort fast 400 Jahre lang zum Besitz des
          Deutschen Ordens, anschließend zur Krone Württembergs. Seit 1972 sind
          wir Ortsteil der großen Kreisstadt Bad Mergentheim.
        </Text>
        <Text variant='block'>
          Dominierend ist der Weinbau. Schon zur Zeit Karls des Großen wurden im
          Taubertal Reben angepflanzt Ein Dokument aus dem Jahre 1096 weist auch
          auf den Weinbau in Markelsheim hin.
        </Text>
        <Text variant='block'>
          Wirtschaftlicher und geselliger Mittelpunkt der Gemeinde ist die 1898
          gegründete Weingärtnergenossenschaft. Typisch für die Gegend ist ein
          herzhafter, fränkischer Weißwein, der sich großer Beliebtheit erfreut.
        </Text>
        <Text variant='block'>
          Mit seiner gepflegten Gastlichkeit, seinen freundlichen Menschen und
          malerischen Häusern bietet der Wein- und Erholungsort Markelsheim
          seinen Gästen wirkliche Erholung und erlebnisreiche Stunden in
          unverbrauchter Natur.
        </Text>
        <Box background='gray.100' borderRadius='8px' padding='1rem'>
          <Text fontStyle='italic'>
            Mehr über Markelsheim erfahren Sie unter{' '}
            <a
              href='http://www.markelsheim.de'
              target='_blank'
              rel='noreferrer'
            >
              <b>www.markelsheim.de</b>
            </a>
          </Text>
        </Box>
      </Animate>
    </Global>
  )
}

export default Page
