import React from 'react'
import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  HStack,
  Icon,
  useDisclosure,
  VStack
} from '@chakra-ui/react'

import { MainMenuLink } from './Links'
import { FaBars, FaTimes } from 'react-icons/fa'

interface Props {}

export const MainMenu: React.FC<Props> = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box fontFamily='Montserrat Light' width='100%' as='nav'>
      <Container maxWidth='container.xl'>
        <HStack display={['none', 'none', 'flex']} justifyContent='center'>
          <Divider></Divider>
          <Menu></Menu>
          <Divider></Divider>
        </HStack>
      </Container>
      <VStack
        display={['block', 'block', 'none']}
        alignItems='center'
        justifyContent='center'
        paddingX='2rem'
      >
        <Button
          variant='outline'
          width='100%'
          onClick={onToggle}
          rightIcon={<Icon as={isOpen ? FaTimes : FaBars}></Icon>}
        >
          Menü
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <VStack>
            <Menu onClick={onToggle}></Menu>
            <Divider></Divider>
          </VStack>
        </Collapse>
      </VStack>
    </Box>
  )
}

interface MenuProps {
  onClick?: () => void
}

const Menu: React.FC<MenuProps> = ({ onClick }) => {
  return (
    <>
      <MainMenuLink href='/club' onClick={onClick}>
        Verein
      </MainMenuLink>
      <MainMenuLink href='/events' onClick={onClick}>
        Termine
      </MainMenuLink>
      <MainMenuLink href='/images' onClick={onClick}>
        Bilder
      </MainMenuLink>
      <MainMenuLink href='/markelsheim' onClick={onClick}>
        Markelsheim
      </MainMenuLink>
      <MainMenuLink href='/links' onClick={onClick}>
        Links
      </MainMenuLink>
      <MainMenuLink href='/contact' onClick={onClick}>
        Kontakt
      </MainMenuLink>
    </>
  )
}
