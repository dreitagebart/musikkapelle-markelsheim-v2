import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useSlider from 'embla-carousel-react'
import { Box, Heading } from '@chakra-ui/react'

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
        <Box className='slider__viewport' ref={sliderRef}>
          <Box className='slider__container'>
            {slides.map((index) => {
              const media = getMedia(index)

              return (
                <Box className='slider__slide' key={index}>
                  <Box className='slider__slide__inner'>
                    <Image
                      layout='responsive'
                      className='slider__slide__img'
                      src={media.image}
                      alt={media.description}
                    ></Image>
                    <Box
                      mt='1rem'
                      flexDirection='row'
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Heading size='md'>{media.description}</Heading>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Box>
        <PrevButton onClick={scrollPrev} enabled={prevEnabled}></PrevButton>
        <NextButton onClick={scrollNext} enabled={nextEnabled}></NextButton>
        <Box className='slider__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index == selectedIndex}
              onClick={() => scrollTo(index)}
            ></DotButton>
          ))}
        </Box>
      </Box>
    </>
  )
}
