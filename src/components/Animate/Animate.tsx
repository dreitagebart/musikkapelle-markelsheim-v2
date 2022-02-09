import React, { useEffect, useState } from 'react'
import { Fade } from '@chakra-ui/react'

interface Props {}

export const Animate: React.FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)

    return () => {
      setVisible(false)
    }
  }, [visible])

  return (
    <Fade
      in
      unmountOnExit
      animate={{ opacity: 1, transitionDuration: '1000ms' }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Fade>
  )
}
