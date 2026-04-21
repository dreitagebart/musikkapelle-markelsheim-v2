import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { Box } from '@chakra-ui/react'

import leafLeft from '../../assets/images/leaves_left.png'
import leafRight from '../../assets/images/leaves_right.png'
import logo from '../../assets/images/logo.png'
import { MainMenu } from '..'

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <>
      <Box display={{ base: 'none', lg: 'block' }} position='absolute' top={0} left={0}>
        <Image
          src={leafLeft}
          alt=''
          style={{
            maxWidth: "100%",
            height: "auto"
          }}></Image>
      </Box>
      <Box display={{ base: 'none', lg: 'block' }} position='absolute' top={0} right={0}>
        <Image
          src={leafRight}
          alt=''
          style={{
            maxWidth: "100%",
            height: "auto"
          }}></Image>
      </Box>
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
          <Link href='/'>

            <Image
              src={logo}
              alt='Logo'
              style={{
                maxWidth: "100%",
                height: "auto"
              }}></Image>

          </Link>
        </Box>
        <MainMenu></MainMenu>
      </Box>
    </>
  );
}
