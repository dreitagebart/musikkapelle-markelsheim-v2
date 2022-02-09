import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '../styles/theme'
import { Layout } from '../components'
import { Fonts } from '../styles/fonts'

function MKMApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts></Fonts>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MKMApp
