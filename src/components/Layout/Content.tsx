import React from 'react'
import { Container } from '@chakra-ui/react'

interface Props {}

export const Content: React.FC<Props> = ({ children }) => {
  return (
    <Container my='2rem' as='main' maxWidth='container.xl'>
      {children}
    </Container>
  )
}
