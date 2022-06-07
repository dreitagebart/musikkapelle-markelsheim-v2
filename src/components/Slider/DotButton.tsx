import React from 'react'

interface Props {
  selected: boolean
  onClick: () => void
}

export const DotButton: React.FC<Props> = ({ selected, onClick }) => {
  return (
    <button
      className={`slider__dot ${selected ? 'selected' : ''}`}
      onClick={onClick}
    ></button>
  )
}
