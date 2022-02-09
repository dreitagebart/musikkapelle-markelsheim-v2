import { Container } from '@chakra-ui/react'
import React from 'react'

interface Props {}

export const Content: React.FC<Props> = ({ children }) => {
  return (
    <Container as='main' my='2rem' maxWidth='container.xl'>
      {children}
    </Container>
  )
}
