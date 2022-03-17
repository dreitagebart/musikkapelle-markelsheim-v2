import React from 'react'
import { Divider, HStack } from '@chakra-ui/react'

import { SubMenuLink } from './Links'

interface Props {}

export const ClubSubMenu: React.FC<Props> = () => {
  return (
    <>
      <HStack fontFamily='Montserrat Light' spacing={0} flexWrap='wrap'>
        <SubMenuLink href='/club/about'>Über uns</SubMenuLink>
        <SubMenuLink href='/club/membership'>Mitgliedschaft</SubMenuLink>
        <SubMenuLink href='/club/recruitment'>Ausbildung</SubMenuLink>
        <SubMenuLink href='/club/band'>Unsere Musiker</SubMenuLink>
        <SubMenuLink href='/club/history'>Vereinsgeschichte</SubMenuLink>
      </HStack>
      <Divider></Divider>
    </>
  )
}
