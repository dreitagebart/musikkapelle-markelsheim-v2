import { Heading } from '@chakra-ui/react'
import { NextPage } from 'next'

import { Animate, Global, Slider } from '../components'

const SLIDE_COUNT = 14
const slides = Array.from(Array(SLIDE_COUNT).keys())

const Page: NextPage = () => {
  return (
    <Global title='Bilder'>
      <Animate>
        <Slider slides={slides}></Slider>
      </Animate>
    </Global>
  )
}

export default Page
