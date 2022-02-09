import React from 'react'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Content>{children}</Content>
      <Footer></Footer>
    </>
  )
}
