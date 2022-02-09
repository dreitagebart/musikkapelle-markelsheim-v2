import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Animate, Global } from '../components'

const Page: NextPage = () => {
  return (
    <Global title='Termine'>
      <Animate>
        <Heading>Termine</Heading>
      </Animate>
    </Global>
  )
}

export default Page
