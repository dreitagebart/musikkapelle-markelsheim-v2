import { Button, Icon, VStack } from '@chakra-ui/react'
import { InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'

import { Animate, Block, Global, PageHeader } from '../../components'
import { getIcon, NextPageExtended } from '../../utils'

export const getServerSideProps = async () => {
  const providers = await getProviders()

  return {
    props: { providers }
  }
}

const Page: NextPageExtended<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ providers }) => {
  return (
    <Global title='Keine Berechtigung'>
      <Animate>
        <PageHeader>Das hat nicht funktioniert</PageHeader>
        <Block>
          Du hast vermutlich keine Berechtigung, dich mit deinen Zugangsdaten
          bei Google, Facebook oder Instagram bei uns anzumelden.
        </Block>
        <VStack alignItems='flex-start'>
          {Object.values(providers!).map((provider) => {
            return (
              <Button
                colorScheme='red'
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: `http://localhost:3000/member/welcome`
                  })
                }
                key={provider.id}
                leftIcon={<Icon as={getIcon(provider.id)}></Icon>}
              >
                {provider.name}
              </Button>
            )
          })}
        </VStack>
      </Animate>
    </Global>
  )
}

Page.auth = false

export default Page
