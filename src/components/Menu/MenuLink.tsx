import React, { CSSProperties } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'

interface Props {
  onClick?: () => void
  href: string
}

export const MenuLink: React.FC<Props> = ({ href, children, onClick }) => {
  const { pathname } = useRouter()
  const active = pathname.includes(href) || href === pathname

  return (
    <Link href={href} passHref>
      <a style={active ? { fontWeight: 'bold' } : undefined} onClick={onClick}>
        <Box
          borderRadius='4px'
          paddingY='0.4rem'
          paddingX='0.8rem'
          transition='all 300ms ease-in'
          _hover={{ backgroundColor: '#efefef', color: '#333' }}
        >
          {children}
        </Box>
      </a>
    </Link>
  )
}
