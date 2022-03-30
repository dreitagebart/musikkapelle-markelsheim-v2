import { Avatar, Box, Button, Heading, HStack, Icon } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import { FaUserAlt } from 'react-icons/fa'

import { Animate, Global } from '../../components'
import { NextPageExtended } from '../../utils'

const Page: NextPageExtended = () => {
  const { data: session } = useSession()

  return (
    <Global title='Profil'>
      <Animate>
        <HStack flexDirection='row' alignItems='center'>
          <Avatar
            size='xl'
            icon={<Icon as={FaUserAlt}></Icon>}
            src={session?.user?.image || undefined}
            name={session?.user?.name || ''}
          ></Avatar>
          <Heading>{session?.user?.name}</Heading>
        </HStack>
        <Box mt='2rem'>
          <Button onClick={() => signOut()} colorScheme='red'>
            Abmelden
          </Button>
        </Box>
      </Animate>
    </Global>
  )
}

Page.auth = true

export default Page
