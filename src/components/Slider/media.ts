import slide01 from '../../assets/images/mkm2022_01.jpg'
import slide02 from '../../assets/images/mkm2022_02.jpg'
import slide03 from '../../assets/images/mkm2022_03.jpg'
import slide04 from '../../assets/images/mkm01.jpeg'
import slide05 from '../../assets/images/mkm02.jpeg'
import slide06 from '../../assets/images/mkm03.jpeg'
import slide07 from '../../assets/images/gruppenfoto.jpg'
import slide08 from '../../assets/images/gruppenfoto_wo.png'
import slide09 from '../../assets/images/2014_RoteWeste.jpg'
import slide10 from '../../assets/images/AlleWeste2014_gr.jpg'
import slide11 from '../../assets/images/Ausschuss2014_gr.jpg'
import slide12 from '../../assets/images/gruppe_2012_1_gr.jpg'
import slide13 from '../../assets/images/gruppe_2012_2_gr.jpg'
import slide14 from '../../assets/images/gruppe_2012_3_gr.jpg'
import slide15 from '../../assets/images/gruppe2008-0_gr.jpg'
import slide16 from '../../assets/images/gruppe2008-1_gr.jpg'
import slide17 from '../../assets/images/gruppe2008-2_gr.jpg'
import slide18 from '../../assets/images/gruppe2008-3_gr.jpg'
import slide19 from '../../assets/images/gruppe2008-4_gr.jpg'
import slide20 from '../../assets/images/gruppe2008-5_gr.jpg'

interface Image {
  image: StaticImageData
  description: string
}

const media: Array<Image> = [
  { image: slide01, description: '2022 Weinberg' },
  { image: slide02, description: '2022 Weinberg' },
  { image: slide03, description: '2022 Weinberg' },
  { image: slide04, description: '2019 Weinberg' },
  { image: slide05, description: '2019 Weinberg' },
  { image: slide06, description: '2019 Weinberg' },
  { image: slide07, description: '2018 Zehntkeller' },
  { image: slide08, description: '2018 Zehntkeller' },
  { image: slide09, description: '2014 Rathaus' },
  { image: slide10, description: '2014 Rathaus' },
  { image: slide11, description: '2014 Rathaus' },
  { image: slide12, description: '2014 Rathaus' },
  { image: slide13, description: '2012 Mühlwiese' },
  { image: slide14, description: '2012 Mühlwiese' },
  { image: slide15, description: '2008 Fronhof' },
  { image: slide16, description: '2008 Fronhof' },
  { image: slide17, description: '2008 Fronhof' },
  { image: slide18, description: '2008 Weinpresse' },
  { image: slide19, description: '2008 Weinpresse' },
  { image: slide20, description: '2008 Fronhof' }
]

export const getMedia = (index: number) => media[index % media.length]
