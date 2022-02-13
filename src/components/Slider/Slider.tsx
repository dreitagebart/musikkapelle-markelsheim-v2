import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useSlider from 'embla-carousel-react'
import { Box } from '@chakra-ui/react'

// import slide1 from '../../assets/images/gruppenfoto.jpg'
// import slide2 from '../../assets/images/gruppenfoto_wo.png'
// import slide3 from '../../assets/images/2014_RoteWeste.jpg'
// import slide4 from '../../assets/images/AlleWeste2014_gr.jpg'
// import slide5 from '../../assets/images/Ausschuss2014_gr.jpg'
// import slide6 from '../../assets/images/gruppe_2012_1_gr.jpg'
// import slide7 from '../../assets/images/gruppe_2012_2_gr.jpg'
// import slide8 from '../../assets/images/gruppe_2012_3_gr.jpg'
// import slide9 from '../../assets/images/gruppe2008-0_gr.jpg'
// import slide10 from '../../assets/images/gruppe2008-1_gr.jpg'
// import slide11 from '../../assets/images/gruppe2008-2_gr.jpg'
// import slide12 from '../../assets/images/gruppe2008-3_gr.jpg'
// import slide13 from '../../assets/images/gruppe2008-4_gr.jpg'
// import slide14 from '../../assets/images/gruppe2008-5_gr.jpg'
import { DotButton } from './DotButton'
import { NextButton } from './NextButton'
import { PrevButton } from './PrevButton'
import { getMedia } from './media'

interface Props {
  slides: Array<number>
}

export const Slider: React.FC<Props> = ({ slides }) => {
  const [sliderRef, slider] = useSlider({ skipSnaps: false })
  const [prevEnabled, setPrevEnabled] = useState(false)
  const [nextEnabled, setNextEnabled] = useState(false)
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => slider && slider.scrollPrev(), [slider])
  const scrollNext = useCallback(() => slider && slider.scrollNext(), [slider])
  const scrollTo = useCallback(
    (index) => slider && slider.scrollTo(index),
    [slider]
  )

  const onSelect = useCallback(() => {
    if (!slider) return

    setSelectedIndex(slider.selectedScrollSnap())
    setPrevEnabled(slider.canScrollPrev())
    setNextEnabled(slider.canScrollNext())
  }, [slider, setSelectedIndex])

  useEffect(() => {
    if (!slider) return

    onSelect()
    setScrollSnaps(slider.scrollSnapList())
    slider.on('select', onSelect)
  }, [slider, setScrollSnaps, onSelect])

  return (
    <>
      <Box className='slider'>
        <Box className='slider__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index == selectedIndex}
              onClick={() => scrollTo(index)}
            ></DotButton>
          ))}
        </Box>
        <Box className='slider__viewport' ref={sliderRef}>
          <Box className='slider__container'>
            {slides.map((index) => {
              return (
                <Box className='slider__slide' key={index}>
                  <Box className='slider__slide__inner'>
                    <Image
                      layout='responsive'
                      className='slider__slide__img'
                      src={getMedia(index)}
                      alt='Bild 1'
                    ></Image>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Box>
        <PrevButton onClick={scrollPrev} enabled={prevEnabled}></PrevButton>
        <NextButton onClick={scrollNext} enabled={nextEnabled}></NextButton>
      </Box>
    </>
  )
}
