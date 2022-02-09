import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Global } from '../components'

const Page: NextPage = () => {
  return (
    <Global>
      <Heading>Lorem ipsum dolor sit amet</Heading>
      <p>Ich möchte diesen Teppich nicht kaufen</p>
    </Global>
  )
}

export default Page
