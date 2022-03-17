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
  { image: slide1, description: 'Bärlauchknacker' },
  { image: slide2, description: 'Blutwurst' },
  { image: slide3, description: 'Debreziner' },
  { image: slide4, description: 'Schinkenwurst' },
  { image: slide5, description: 'Bierschinken' },
  { image: slide6, description: 'Volkswagen Currywurst' },
  { image: slide7, description: 'Lyoner' },
  { image: slide8, description: 'Salami' },
  { image: slide9, description: 'Bierkugel' },
  { image: slide10, description: 'Stabenwurst' },
  { image: slide11, description: 'Appenzeller Siedwurst' },
  { image: slide12, description: 'Feine Extrawurst' },
  { image: slide13, description: 'Thüringer Rostbratwurst' },
  { image: slide14, description: 'Rød pølse' },
  { image: slide15, description: 'Nordhäuser Bratwurst' },
  { image: slide16, description: 'Pfälzer Saumagen' },
  { image: slide17, description: 'Böhmische Weinbratwurst' }
]

export const getMedia = (index: number) => media[index % media.length]
