import { Box } from '@chakra-ui/react'
import React from 'react'

interface Props {}

export const Blockquote: React.FC<Props> = ({ children }) => {
  return (
    <Box
      borderTopRightRadius='8px'
      borderBottomRightRadius='8px'
      backgroundColor='gray.50'
      borderLeftColor='gray.400'
      borderLeftWidth='6px'
      borderLeftStyle='solid'
      padding='1rem'
    >
      {children}
    </Box>
  )
}
