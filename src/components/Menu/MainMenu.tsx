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

import { MenuLink } from './MenuLink'
import { FaBars, FaTimes } from 'react-icons/fa'

interface Props {}

export const MainMenu: React.FC<Props> = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box fontFamily='Montserrat Light' width='100%'>
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
      <MenuLink href='/club' onClick={onClick}>
        Verein
      </MenuLink>
      <MenuLink href='/events' onClick={onClick}>
        Termine
      </MenuLink>
      <MenuLink href='/history' onClick={onClick}>
        Geschichte
      </MenuLink>
      <MenuLink href='/images' onClick={onClick}>
        Bilder
      </MenuLink>
      <MenuLink href='/markelsheim' onClick={onClick}>
        Markelsheim
      </MenuLink>
      <MenuLink href='/links' onClick={onClick}>
        Links
      </MenuLink>
      <MenuLink href='/contact' onClick={onClick}>
        Kontakt
      </MenuLink>
    </>
  )
}
