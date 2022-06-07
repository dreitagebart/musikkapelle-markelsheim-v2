import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

import leafLeft from '../../assets/images/leaves_left.png'
import leafRight from '../../assets/images/leaves_right.png'
import logo from '../../assets/images/logo.png'
import { MainMenu } from '..'

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <>
      <Box
        position='absolute'
        top={0}
        left={0}
        display={['none', 'none', 'block']}
      >
        <Image src={leafLeft} alt=''></Image>
      </Box>
      <Box
        position='absolute'
        top={0}
        right={0}
        display={['none', 'none', 'block']}
      >
        <Image src={leafRight} alt=''></Image>
      </Box>
      <Box
        as='header'
        bgGradient='linear(to-b, #dfdfdf, #fff)'
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
    </>
  )
}
