import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Show } from '@chakra-ui/react'

import leafLeft from '../../assets/images/leaves_left.png'
import leafRight from '../../assets/images/leaves_right.png'
import logo from '../../assets/images/logo.png'
import { MainMenu } from '..'

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <>
      <Show above='lg'>
        <Box position='absolute' top={0} left={0}>
          <Image src={leafLeft} alt=''></Image>
        </Box>
      </Show>
      <Show above='lg'>
        <Box position='absolute' top={0} right={0}>
          <Image src={leafRight} alt=''></Image>
        </Box>
      </Show>
      <Box
        as='header'
        bgGradient='linear(to-b, #dfdfdf, #fff)'
        display='flex'
        width='100%'
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
    </>
  )
}
