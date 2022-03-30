import React from 'react'
import { Divider, HStack } from '@chakra-ui/react'

import { SubMenuLink } from './Links'

interface Props {}

export const MarkelsheimSubMenu: React.FC<Props> = () => {
  return (
    <>
      <HStack fontFamily='Montserrat' flexWrap='wrap' spacing='0.8rem'>
        <SubMenuLink href='/markelsheim/region'>Region</SubMenuLink>
        <SubMenuLink href='/markelsheim/history'>Geschichte</SubMenuLink>
      </HStack>
      <Divider></Divider>
    </>
  )
}
