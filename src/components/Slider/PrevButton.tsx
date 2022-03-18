import React from 'react'
import { Icon } from '@chakra-ui/react'
import { FaChevronLeft } from 'react-icons/fa'
interface Props {
  enabled: boolean
  onClick: () => void
}

export const PrevButton: React.FC<Props> = ({ enabled, onClick }) => {
  return (
    <button
      className='slider__button slider__button--prev'
      onClick={onClick}
      disabled={!enabled}
    >
      <Icon as={FaChevronLeft} color='red.50' boxSize='48px'></Icon>
    </button>
  )
}
