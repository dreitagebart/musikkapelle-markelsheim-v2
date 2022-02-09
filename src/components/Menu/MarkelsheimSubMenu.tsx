import React from 'react'
import { Box, Stack } from '@chakra-ui/react'

import { MenuLink } from './MenuLink'

interface Props {}

export const MarkelsheimSubMenu: React.FC<Props> = () => {
  return (
    <Stack
      direction='row'
      fontFamily='Montserrat Light'
      textTransform='uppercase'
    >
      <MenuLink href='/markelsheim/region'>Region</MenuLink>
      <MenuLink href='/markelsheim/history'>Geschichte</MenuLink>
    </Stack>
  )
}
