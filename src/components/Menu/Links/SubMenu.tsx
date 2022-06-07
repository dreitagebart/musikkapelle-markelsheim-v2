import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'

interface Props {
  onClick?: () => void
  href: string
}

export const SubMenuLink: React.FC<Props> = ({ href, children, onClick }) => {
  const { pathname } = useRouter()
  const active = pathname.includes(href) || href === pathname

  return (
    <Link href={href} passHref>
      <a
        style={
          active
            ? {
                fontWeight: 'bold',
                backgroundColor: '#EDF2F7',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px'
              }
            : undefined
        }
        onClick={onClick}
      >
        <Box
          borderTopLeftRadius='8px'
          borderTopRightRadius='8px'
          paddingY='0.4rem'
          paddingX='0.8rem'
          transition='all 300ms ease-in'
          _hover={{ backgroundColor: 'red.500', color: 'gray.50' }}
        >
          {children}
        </Box>
      </a>
    </Link>
  )
}
