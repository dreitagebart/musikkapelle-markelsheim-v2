import slidenew1 from '../../assets/images/MK26.jpg'
import slidenew2 from '../../assets/images/MK16.jpg'
import slidenew3 from '../../assets/images/MK011.jpg'
import slide1 from '../../assets/images/mkm01.jpeg'
import slide2 from '../../assets/images/mkm02.jpeg'
import slide3 from '../../assets/images/mkm03.jpeg'
import slide4 from '../../assets/images/gruppenfoto.jpg'
import slide5 from '../../assets/images/gruppenfoto_wo.png'
import slide6 from '../../assets/images/2014_RoteWeste.jpg'
import slide7 from '../../assets/images/AlleWeste2014_gr.jpg'
import slide8 from '../../assets/images/Ausschuss2014_gr.jpg'
import slide9 from '../../assets/images/gruppe_2012_1_gr.jpg'
import slide10 from '../../assets/images/gruppe_2012_2_gr.jpg'
import slide11 from '../../assets/images/gruppe_2012_3_gr.jpg'
import slide12 from '../../assets/images/gruppe2008-0_gr.jpg'
import slide13 from '../../assets/images/gruppe2008-1_gr.jpg'
import slide14 from '../../assets/images/gruppe2008-2_gr.jpg'
import slide15 from '../../assets/images/gruppe2008-3_gr.jpg'
import slide16 from '../../assets/images/gruppe2008-4_gr.jpg'
import slide17 from '../../assets/images/gruppe2008-5_gr.jpg'

interface Image {
  image: StaticImageData
  description: string
}

const media: Array<Image> = [
  { image: slidenew1, description: '2022 Weinberg' },
  { image: slidenew2, description: '2022 Weinberg' },
  { image: slidenew3, description: '2022 Weinberg' },
  { image: slide1, description: '2019 Weinberg' },
  { image: slide2, description: '2019 Weinberg' },
  { image: slide3, description: '2019 Weinberg' },
  { image: slide4, description: '2018 Zehntkeller' },
  { image: slide5, description: '2018 Zehntkeller' },
  { image: slide6, description: '2014 Rathaus' },
  { image: slide7, description: '2014 Rathaus' },
  { image: slide8, description: '2014 Rathaus' },
  { image: slide9, description: '2014 Rathaus' },
  { image: slide10, description: '2012 Mühlwiese' },
  { image: slide11, description: '2012 Mühlwiese' },
  { image: slide12, description: '2008 Fronhof' },
  { image: slide13, description: '2008 Fronhof' },
  { image: slide14, description: '2008 Fronhof' },
  { image: slide15, description: '2008 Weinpresse' },
  { image: slide16, description: '2008 Weinpresse' },
  { image: slide17, description: '2008 Fronhof' }
]

export const getMedia = (index: number) => media[index % media.length]
