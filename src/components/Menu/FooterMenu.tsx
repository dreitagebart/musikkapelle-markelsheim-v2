import React from 'react'
import { Stack } from '@chakra-ui/react'

import { FooterMenuLink } from './Links'

interface Props {}

export const FooterMenu: React.FC<Props> = () => {
  return (
    <Stack
      marginTop='1rem'
      direction='row'
      fontFamily='Montserrat'
      fontSize='0.8rem'
    >
      <FooterMenuLink href='/club/membership'>Mitglied werden</FooterMenuLink>
      <FooterMenuLink href='/contact'>Kontakt</FooterMenuLink>
      <FooterMenuLink href='/impressum'>Impressum</FooterMenuLink>
    </Stack>
  )
}
