import React from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
  selected: boolean
  onClick: () => void
}

export const DotButton: React.FC<Props> = ({ selected, onClick }) => {
  return (
    <Button
      variant='unstyled'
      className={`slider__dot ${selected} ? 'selected' : ''`}
      onClick={onClick}
    ></Button>
  )
}
