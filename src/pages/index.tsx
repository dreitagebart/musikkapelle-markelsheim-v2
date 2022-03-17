import type { NextPage } from 'next'
import Image from 'next/image'

import band from '../assets/images/mkm02.jpeg'
import { Global, PageHeader } from '../components'

const Page: NextPage = () => {
  return (
    <Global>
      <PageHeader>Herzlich Willkommen!</PageHeader>
      <Image src={band} alt='Gruppenbild der Musikkapelle'></Image>
    </Global>
  )
}

export default Page
