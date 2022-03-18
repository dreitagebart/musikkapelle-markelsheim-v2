import React from 'react'
import { Button, Stack } from '@chakra-ui/react'

import { FooterMenuLink } from './Links'
import { signIn } from 'next-auth/react'

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
      <FooterMenuLink
        href='/'
        onClick={(e) => {
          e.preventDefault()
          signIn()
        }}
      >
        Login
      </FooterMenuLink>
    </Stack>
  )
}
