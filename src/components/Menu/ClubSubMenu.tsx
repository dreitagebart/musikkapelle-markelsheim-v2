import React from 'react'
import { Box, Stack } from '@chakra-ui/react'

import { MenuLink } from './MenuLink'

interface Props {}

export const ClubSubMenu: React.FC<Props> = () => {
  return (
    <Stack direction='row' fontFamily='Montserrat Light'>
      <MenuLink href='/club/about'>Über uns</MenuLink>
      <MenuLink href='/club/membership'>Mitgliedschaft</MenuLink>
      <MenuLink href='/club/recruitment'>Ausbildung</MenuLink>
      <MenuLink href='/club/band'>Unsere Musiker</MenuLink>
    </Stack>
  )
}
