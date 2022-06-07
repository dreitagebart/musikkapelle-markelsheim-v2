import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, SliderProvider } from '@chakra-ui/react'

interface Props {
  onClick?: () => void
  href: string
}

export const MainMenuLink: React.FC<Props> = ({ href, children, onClick }) => {
  const { pathname } = useRouter()
  const active = pathname.includes(href) || href === pathname

  return (
    <Link href={href} passHref>
      <a onClick={onClick}>
        <Box
          borderRadius='8px'
          paddingY='0.4rem'
          paddingX='0.8rem'
          transition='all 300ms ease-in'
          background={active ? 'gray.100' : undefined}
          borderBottomWidth='0.5px'
          borderBottomColor='transparent'
          _hover={{
            borderBottomColor: 'gray.100',
            borderBottomWidth: '0.5px',
            borderBottomStyle: 'solid',
            color: 'red.600',
            backgroundColor: 'gray.100'
          }}
        >
          {children}
        </Box>
      </a>
    </Link>
  )
}
