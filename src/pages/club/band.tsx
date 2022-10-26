import {
  Box,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'
import Image from 'next/image'

import groupImage from '../../assets/images/mkm01.jpeg'
import { Animate, ClubSubMenu, Global } from '../../components'
import { NextPageExtended } from '../../utils'

const Page: NextPageExtended = () => {
  return (
    <Global title='Musikkapelle'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <Box my='1rem'>
          <Image
            className='band-logo'
            placeholder='blur'
            quality={100}
            src={groupImage}
            alt='Gruppenbild auf dem Weinberg Markelsheim'
          />
        </Box>
        <VStack spacing='2rem'>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            // maxWidth='860px'
          >
            <Heading size='md'>Dirigent</Heading>
            <Text>Stephan Deppisch</Text>
          </Box>
          <SimpleGrid
            columns={{ sm: 2, lg: 3, xl: 4 }}
            spacingX='4rem'
            spacingY='2rem'
          >
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Klarinette
              </Heading>
              <List>
                <ListItem>Isabell Balling</ListItem>
                <ListItem>Corinna Burkert</ListItem>
                <ListItem>Isabelle Herrmann</ListItem>
                <ListItem>Tabea Halbmann</ListItem>
                <ListItem>Verena Hüttl</ListItem>
                <ListItem>Alfred Kimmelmann</ListItem>
                <ListItem>Karin Staudt</ListItem>
                <ListItem>Simone Tatusch</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Schlagwerk
              </Heading>
              <List>
                <ListItem>Christoph Burkert</ListItem>
                <ListItem>David Hernadi</ListItem>
                <ListItem>Lena Kimmelmann</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Querflöte
              </Heading>
              <List>
                <ListItem>Jule Haas</ListItem>
                <ListItem>Sonja Hainke</ListItem>
                <ListItem>Jelena Kuhn</ListItem>
                <ListItem>Kristin Peyerl</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Tenorhorn
              </Heading>
              <List>
                <ListItem>Hermann Beck</ListItem>
                <ListItem>Stefan Büchold</ListItem>
                <ListItem>Anton Kimmelmann</ListItem>
                <ListItem>Wilfried Zeihsel</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Trompete
              </Heading>
              <List>
                <ListItem>Jens Gundling</ListItem>
                <ListItem>Cordelia Halbmann</ListItem>
                <ListItem>Jochen Popp</ListItem>
                <ListItem>Rebeca Schulz</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Flügelhorn
              </Heading>
              <List>
                <ListItem>Tobias Haas</ListItem>
                <ListItem>David Hartmann</ListItem>
                <ListItem>Benedikt Mika</ListItem>
                <ListItem>Fred Prokosch</ListItem>
                <ListItem>Anton Schneider</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Bariton
              </Heading>
              <List>
                <ListItem>Florian Metzger</ListItem>
                <ListItem>Eugen Porasil</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Posaune
              </Heading>
              <List>
                <ListItem>Lukas Halbmann</ListItem>
                <ListItem>Bastian Hartmann</ListItem>
                <ListItem>Philipp Hernadi</ListItem>
                <ListItem>Franz Schmidberger</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Bass
              </Heading>
              <List>
                <ListItem>Xaver Halbmann</ListItem>
                <ListItem>Alois Zöllinger</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Horn
              </Heading>
              <List>
                <ListItem>Kai Kimmelmann</ListItem>
                <ListItem>Sabine Strysak-Halbmann</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Fagott
              </Heading>
              <List>
                <ListItem>Tizian Halbmann</ListItem>
              </List>
            </Box>
            <Box textAlign='center'>
              <Heading size='md' variant='mb'>
                Saxophon
              </Heading>
              <List>
                <ListItem>Nina Helebrand</ListItem>
              </List>
            </Box>
          </SimpleGrid>
        </VStack>
      </Animate>
    </Global>
  )
}

Page.auth = false

export default Page
