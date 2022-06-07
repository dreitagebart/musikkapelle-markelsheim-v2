import { Button, Icon, VStack } from '@chakra-ui/react'
import { InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'

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
    <Global title='Anmelden'>
      <Animate>
        <PageHeader>Mitgliederbereich</PageHeader>
        <Block>
          Wir bieten unseren aktiven Musikern einen geschützen Bereich an. Bitte
          melde dich mit deinen Zugangsdaten an.
        </Block>
        <VStack alignItems='flex-start'>
          {Object.values(providers!).map((provider) => {
            return (
              <Button
                colorScheme='red'
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: `https://musikkapelle-markelsheim-v2.vercel.app/member/welcome`
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
