import React from 'react'
import { Stack } from '@chakra-ui/react'

import { FooterMenuLink } from './Links'
import { signIn, signOut, useSession } from 'next-auth/react'

interface Props {}

export const FooterMenu: React.FC<Props> = () => {
  const { data: session } = useSession()

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
      {session ? (
        <FooterMenuLink
          href='/'
          onClick={(e) => {
            e.preventDefault()
            signOut()
          }}
        >
          Abmelden
        </FooterMenuLink>
      ) : (
        <FooterMenuLink
          href='/'
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          Anmelden
        </FooterMenuLink>
      )}
    </Stack>
  )
}
