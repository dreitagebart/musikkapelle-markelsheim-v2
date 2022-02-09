import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Animate, Global } from '../components'

const Page: NextPage = () => {
  return (
    <Global title='Bilder'>
      <Animate>
        <Heading>Bilder</Heading>
      </Animate>
    </Global>
  )
}

export default Page
