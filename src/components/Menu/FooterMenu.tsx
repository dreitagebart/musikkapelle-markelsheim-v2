import React from 'react'
import { Stack } from '@chakra-ui/react'

import { MenuLink } from './MenuLink'

interface Props {}

export const FooterMenu: React.FC<Props> = () => {
  return (
    <Stack
      marginTop='1rem'
      direction='row'
      fontFamily='Montserrat'
      fontSize='0.8rem'
    >
      <MenuLink href='/member'>Mitglied werden</MenuLink>
      <MenuLink href='/contact'>Kontakt</MenuLink>
      <MenuLink href='/impressum'>Impressum</MenuLink>
    </Stack>
  )
}
