import slide1 from '../../assets/images/gruppenfoto.jpg'
import slide2 from '../../assets/images/gruppenfoto_wo.png'
import slide3 from '../../assets/images/2014_RoteWeste.jpg'
import slide4 from '../../assets/images/AlleWeste2014_gr.jpg'
import slide5 from '../../assets/images/Ausschuss2014_gr.jpg'
import slide6 from '../../assets/images/gruppe_2012_1_gr.jpg'
import slide7 from '../../assets/images/gruppe_2012_2_gr.jpg'
import slide8 from '../../assets/images/gruppe_2012_3_gr.jpg'
import slide9 from '../../assets/images/gruppe2008-0_gr.jpg'
import slide10 from '../../assets/images/gruppe2008-1_gr.jpg'
import slide11 from '../../assets/images/gruppe2008-2_gr.jpg'
import slide12 from '../../assets/images/gruppe2008-3_gr.jpg'
import slide13 from '../../assets/images/gruppe2008-4_gr.jpg'
import slide14 from '../../assets/images/gruppe2008-5_gr.jpg'

const media = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14
]

export const getMedia = (index: number) => media[index % media.length]
