import React from 'react'
import Head from 'next/head'

interface Props {
  title?: string
}

const pageTitle = 'Musikkapelle Markelsheim'

export const Global: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{!title ? pageTitle : `${title} ~ ${pageTitle}`}</title>
        <meta
          name='description'
          content='Die offizielle Seite der Musikkapelle Markelsheim'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      {children}
    </>
  )
}
