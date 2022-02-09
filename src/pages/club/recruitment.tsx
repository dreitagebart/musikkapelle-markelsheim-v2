import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'

import { Animate, ClubSubMenu, Global } from '../../components'

const Page: NextPage = () => {
  return (
    <Global title='Ausbildung'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <div className='font-light'>
          <Heading>Ausbildung</Heading>
          <p>
            Der Nachwuchs ist unsere Zukunft und deswegen bilden wir auch gerne
            verschiedene Instrumente über unsere Musikkapelle aus. Die
            Ausbildung erfolgt über Musikerinnen und Musiker aus dem Verein.
            Ziel ist die Integration in die Kapelle. Außerdem bieten wir dir ein
            Leihinstrument von unserem Verein für die Ausbildung, soweit dies
            vorhanden ist, an.
          </p>
          <p>
            Bereits während der Ausbildung ist es möglich im Jugendorchester
            mitzuspielen. Dort absolvieren die Kinder und Jugendlichen bereits
            erste Auftritte und werden in das Vereinsleben integriert.
          </p>
          <p>
            Solltest du Interesse an einer Ausbildung haben, so wende dich bitte
            an <Link href='/contact'>Verena Hüttl</Link>.
          </p>
        </div>
      </Animate>
    </Global>
  )
}

export default Page
