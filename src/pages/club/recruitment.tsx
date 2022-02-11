import { Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'

import { Animate, ClubSubMenu, Global } from '../../components'

const Page: NextPage = () => {
  return (
    <Global title='Ausbildung'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <Heading variant='my'>Ausbildung</Heading>
        <Text>
          Der Nachwuchs ist unsere Zukunft und deswegen bilden wir auch gerne
          verschiedene Instrumente über unsere Musikkapelle aus. Die Ausbildung
          erfolgt über Musikerinnen und Musiker aus dem Verein. Ziel ist die
          Integration in die Kapelle. Außerdem bieten wir dir ein Leihinstrument
          von unserem Verein für die Ausbildung, soweit dies vorhanden ist, an.
        </Text>
        <Text variant='block'>
          Bereits während der Ausbildung ist es möglich im Jugendorchester
          mitzuspielen. Dort absolvieren die Kinder und Jugendlichen bereits
          erste Auftritte und werden in das Vereinsleben integriert.
        </Text>
        <Text variant='block'>
          Solltest du Interesse an einer Ausbildung haben, so wende dich bitte
          an <Link href='/contact'>Verena Hüttl</Link>.
        </Text>
      </Animate>
    </Global>
  )
}

export default Page
