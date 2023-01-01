import React from 'react'
import { HStack } from '@chakra-ui/react'

import { FooterMenuLink } from './Links'
// import { signIn, signOut, useSession } from 'next-auth/react'

interface Props {}

export const FooterMenu: React.FC<Props> = () => {
  // const { data: session } = useSession()

  return (
    <HStack
      marginTop='1rem'
      direction='row'
      fontFamily='Montserrat'
      fontSize='0.8rem'
    >
      <FooterMenuLink href='/club/membership'>Mitglied werden</FooterMenuLink>
      <FooterMenuLink href='/contact'>Kontakt</FooterMenuLink>
      <FooterMenuLink href='/impressum'>Impressum</FooterMenuLink>
      <FooterMenuLink href='/sponsors'>Sponsoren</FooterMenuLink>
      {/* {session ? (
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
        <FooterMenuLink href='/member/login'>Anmelden</FooterMenuLink>
      )} */}
    </HStack>
  )
}
