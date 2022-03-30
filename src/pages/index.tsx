import Image from 'next/image'

import band from '../assets/images/mkm02.jpeg'
import { Global, PageHeader } from '../components'
import { NextPageExtended } from '../utils'

const Page: NextPageExtended = () => {
  return (
    <Global>
      <PageHeader>Herzlich Willkommen!</PageHeader>
      <Image
        src={band}
        alt='Gruppenbild der Musikkapelle'
        className='band-logo'
      ></Image>
    </Global>
  )
}

Page.auth = false

export default Page
