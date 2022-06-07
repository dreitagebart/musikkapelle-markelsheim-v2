import { Animate, Global, Slider } from '../components'
import { NextPageExtended } from '../utils'

const SLIDE_COUNT = 17
const slides = Array.from(Array(SLIDE_COUNT).keys())

const Page: NextPageExtended = () => {
  return (
    <Global title='Bilder'>
      <Animate>
        <Slider slides={slides}></Slider>
      </Animate>
    </Global>
  )
}

Page.auth = false

export default Page
