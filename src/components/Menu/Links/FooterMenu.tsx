import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'

interface Props {
  href: string
}

export const FooterMenuLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a>
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
