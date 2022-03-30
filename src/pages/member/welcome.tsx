import { useSession } from 'next-auth/react'

import { Animate, Global, PageHeader } from '../../components'
import { NextPageExtended } from '../../utils'

const Page: NextPageExtended = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') return <></>

  return (
    <Global title='Willkommen'>
      <Animate>
        <PageHeader>Hallo {session?.user?.name}</PageHeader>
      </Animate>
    </Global>
  )
}

Page.auth = true

export default Page
