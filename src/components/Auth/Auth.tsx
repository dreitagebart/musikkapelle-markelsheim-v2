import { Box, Spinner } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import React from 'react'

interface Props { }

export const Auth: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession({ required: true })
  const isUser = session?.user

  if (isUser) {
    return <>{children}</>
  }

  return (
    <Box
      width='100%'
      height='100%'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Spinner size='xl' />
    </Box>
  )
}
