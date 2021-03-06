import moment from 'moment'
import { Box, Heading, Text } from '@chakra-ui/react'
import type { InferGetStaticPropsType } from 'next'

import GET_EVENTS from '../lib/graphql/query/GetEvents.graphql'
import { Animate, Global, PageHeader } from '../components'
import { apolloClient } from '../lib/apollo'
import { GetEventsQuery, GetEventsQueryVariables } from '../lib/graphql/types'
import { NextPageExtended } from '../utils'

export const getStaticProps = async () => {
  const queryResult = await apolloClient.query<
    GetEventsQuery,
    GetEventsQueryVariables
  >({
    query: GET_EVENTS
  })

  const events = [...queryResult!.data!.events!.nodes!]

  const sortedEvents = events.sort(
    (a, b) =>
      moment(a!.add_info!.datum).toDate().getTime() -
      moment(b!.add_info!.datum).toDate().getTime()
  )

  return {
    props: {
      events: sortedEvents
    },
    revalidate: 60
  }
}

const Page: NextPageExtended<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ events }) => {
  return (
    <Global title='Termine'>
      <Animate>
        <PageHeader>Termine</PageHeader>
        {events?.map((event) => {
          return (
            <Box
              maxWidth='620px'
              key={event?.id}
              mb='1rem'
              borderWidth='1px'
              borderStyle='solid'
              borderColor='gray.200'
              borderRadius='8px'
              padding='2rem'
              boxShadow='lg'
            >
              <Text fontSize='0.9rem'>
                <Heading size='md'>{event?.title}</Heading>
                {moment(event?.add_info?.datum).format('DD.MM.YYYY')} -&nbsp;
                {event?.add_info?.uhrzeit} Uhr
              </Text>
              <Text>{event?.add_info?.ort}</Text>
            </Box>
          )
        })}
      </Animate>
    </Global>
  )
}

Page.auth = false

export default Page
