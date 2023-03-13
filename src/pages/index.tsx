import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Stack,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

import jahreskonzert from '../assets/images/ads/jahreskonzert.jpg'
import band from '../assets/images/mkm2022_01.jpg'
import { Global, PageHeader } from '../components'
import { NextPageExtended } from '../utils'

const Page: NextPageExtended = () => {
  return (
    <Global>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <PageHeader>Herzlich Willkommen!</PageHeader>
        <Image
          src={band}
          alt='Gruppenbild der Musikkapelle'
          className='band-logo'
        ></Image>
        <Stack
          direction={['column', 'row']}
          // width='100%'
          // padding='2rem'
          mt='2rem'
          // mb='2rem'
          spacing='2rem'
          alignItems='flex-start'
        >
          <Box
            width='100%'
            borderWidth='1px'
            borderStyle='solid'
            borderColor='gray.200'
            padding='2rem'
            borderRadius='8px'
            boxShadow='lg'
          >
            <Heading size='md' variant='mb'>
              Unser Verein
            </Heading>
            <Text variant='block'>
              Wir sind die Musikkapelle Markelsheim e. V. und zählen aktuell
              rund 40 aktive Musikerinnen und Musiker.
            </Text>
            <Text>
              <Link href='/club/about' passHref>
                <Button rightIcon={<Icon as={FaArrowRight}></Icon>}>
                  Mehr über den Verein
                </Button>
              </Link>
            </Text>
          </Box>
          <Box
            width='100%'
            padding='2rem'
            borderRadius='8px'
            boxShadow='lg'
            borderWidth='1px'
            borderStyle='solid'
            borderColor='gray.200'
          >
            <Heading size='md' variant='mb'>
              Unser Musikprogramm
            </Heading>
            <Text variant='block'>
              Wir lieben die traditionelle und konzertante Blasmusik, spielen
              aber auch gerne alles vom Musical bis hin zur Operette. Haben Sie
              Lust uns live zu hören?
            </Text>
            <Text>
              <Link href='/events' passHref>
                <Button rightIcon={<Icon as={FaArrowRight}></Icon>}>
                  Aktuelle Termine
                </Button>
              </Link>
            </Text>
          </Box>
          <Box
            width='100%'
            padding='2rem'
            borderRadius='8px'
            boxShadow='lg'
            borderWidth='1px'
            borderStyle='solid'
            borderColor='gray.200'
          >
            <Heading size='md' variant='mb'>
              Instrumentenrally
            </Heading>
            <Text variant='block'>
              Du siehst dich als Nachwuchsmusiker von morgen und möchtest ein
              Instrument bei uns erlernen? Für alle Interessenten bieten wir
              eine &laquo;Instrumentenrally&raquo; am <b>22.04.2023</b> in der
              Grundschule in Markelsheim.
            </Text>
            <Text>
              <Link href='/rally' passHref>
                <Button rightIcon={<Icon as={FaArrowRight}></Icon>}>
                  Zum Anmeldeformular
                </Button>
              </Link>
            </Text>
          </Box>
        </Stack>
      </Box>
    </Global>
  )
}

Page.auth = false

export default Page
