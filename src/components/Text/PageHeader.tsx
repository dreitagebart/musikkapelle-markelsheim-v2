import React from 'react'
import { Heading } from '@chakra-ui/react'

interface Props {}

export const PageHeader: React.FC<Props> = ({ children }) => {
  return <Heading variant='my'>{children}</Heading>
}
