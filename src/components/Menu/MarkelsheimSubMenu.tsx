import React from 'react'
import { Stack } from '@chakra-ui/react'

import { SubMenuLink } from './Links'

interface Props {}

export const MarkelsheimSubMenu: React.FC<Props> = () => {
  return (
    <Stack
      direction='row'
      fontFamily='Montserrat Light'
      textTransform='uppercase'
    >
      <SubMenuLink href='/markelsheim/region'>Region</SubMenuLink>
      <SubMenuLink href='/markelsheim/history'>Geschichte</SubMenuLink>
    </Stack>
  )
}
