import React from 'react'
import { Box, Container, Divider, HStack, Icon, Text } from '@chakra-ui/react'
import { FaCode, FaFacebookSquare, FaHeart, FaInstagram } from 'react-icons/fa'

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
          <HStack marginY='.8rem' verticalAlign='center'>
            <Text>Du findest uns auch auf</Text>
            <a
              href='https://www.facebook.com/MusikkapelleMarkelsheim'
              target='_blank'
              rel='noreferrer'
            >
              <Icon as={FaFacebookSquare} boxSize='24px' color='#3b5998'></Icon>
            </a>
            <a
              href='https://www.instagram.com/musikkapelle_markelsheim'
              target='_blank'
              rel='noreferrer'
            >
              <Icon
                boxSize='24px'
                as={FaInstagram}
                color='#ffffff'
                borderRadius='8px'
                background={
                  'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
                }
              ></Icon>
            </a>
          </HStack>
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
