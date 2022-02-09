import React from 'react'
import { Box, Container, Divider, HStack, Icon, Text } from '@chakra-ui/react'
import { FaCode, FaHeart } from 'react-icons/fa'

import { FooterMenu } from '..'

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <Box as='footer' bgGradient='linear(to-t, #efefef, #fff)'>
      <Container>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Divider></Divider>
          <FooterMenu></FooterMenu>
          <HStack marginY='.8rem' fontSize='.8rem'>
            <Icon as={FaCode}></Icon>
            <Text>with</Text>
            <Icon as={FaHeart} color='red.400'></Icon>
            <Text>by</Text>
            <a href='https://dreitagebart.io'>dreitagebart</a>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}
