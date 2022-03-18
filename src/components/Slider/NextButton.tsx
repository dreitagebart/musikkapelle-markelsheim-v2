import React from 'react'
import { Icon } from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa'

interface Props {
  enabled: boolean
  onClick: () => void
}

export const NextButton: React.FC<Props> = ({ enabled, onClick }) => {
  return (
    <button
      className='slider__button slider__button--next'
      onClick={onClick}
      disabled={!enabled}
    >
      <Icon boxSize='48px' color='red.50' as={FaChevronRight}></Icon>
    </button>
  )
}
