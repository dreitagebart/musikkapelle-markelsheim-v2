import { NextPage } from 'next'
import { AppProps } from 'next/app'

export type NextPageExtended<P = {}, IP = P> = NextPage<P, IP> & {
  auth: boolean
}

export type AppPropsExtended = AppProps & {
  Component: NextPageExtended
}

export type PageSubMenu = {
  path: string
  title: string
}
