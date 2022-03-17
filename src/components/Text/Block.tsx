import { Text } from '@chakra-ui/react'
import React from 'react'

interface Props {}

export const Block: React.FC<Props> = ({ children }) => {
  return <Text variant='block'>{children}</Text>
}
