import React from 'react'
import Image from 'next/image'
import { Box, Center } from '@chakra-ui/react'

import logo from '../../assets/images/logo.png'
import { MainMenu } from '..'
import Link from 'next/link'

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <Box
      as='header'
      bgGradient='linear(to-b, #dfdfdf, #fff)'
      // border='1px solid red'
      display='flex'
      width='100vw'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Box marginY='1rem'>
        <Link href='/' passHref>
          <a>
            <Image src={logo} alt='Logo'></Image>
          </a>
        </Link>
      </Box>
      <MainMenu></MainMenu>
    </Box>
  )
}
