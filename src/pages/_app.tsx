import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Layout } from '../components'
import { theme } from '../styles/theme'
import { Fonts } from '../styles/fonts'

function MKMApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS theme={theme}>
        <Fonts></Fonts>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MKMApp
