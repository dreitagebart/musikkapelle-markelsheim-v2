// import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'

import { Layout, Auth } from '../components'
import { theme } from '../styles/theme'
import { Fonts } from '../styles/fonts'
import { AppPropsExtended } from '../utils'

function MKMApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppPropsExtended) {
  return (
    // <SessionProvider session={session}>
    <ChakraProvider resetCSS theme={theme}>
      <Fonts></Fonts>
      <Layout>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </ChakraProvider>
    // </SessionProvider>
  )
}

export default MKMApp
