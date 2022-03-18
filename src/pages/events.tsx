import moment from 'moment'
import { Box, Heading, Text } from '@chakra-ui/react'
import type { InferGetStaticPropsType, NextPage } from 'next'

import GET_EVENTS from '../lib/graphql/query/GetEvents.graphql'
import { Animate, Global, PageHeader } from '../components'
import { apolloClient } from '../lib/apollo'
import { GetEventsQuery, GetEventsQueryVariables } from '../lib/graphql/types'

export const getStaticProps = async () => {
  const queryResult = await apolloClient.query<
    GetEventsQuery,
    GetEventsQueryVariables
  >({
    query: GET_EVENTS
  })

  return {
    props: {
      events: queryResult.data.events
    },
    revalidate: 60
  }
}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  events
}) => {
  return (
    <Global title='Termine'>
      <Animate>
        <PageHeader>Termine</PageHeader>
        {events?.nodes?.map((event) => {
          return (
            <Box
              maxWidth='620px'
              key={event?.id}
              mb='1rem'
              borderWidth='1px'
              borderStyle='solid'
              borderColor='gray.200'
              borderRadius='8px'
              padding='1rem'
              background='gray.50'
            >
              <Text fontSize='0.9rem'>
                <Heading size='md'>{event?.title}</Heading>
                {moment(event?.add_info?.datum).format('DD.MM.YYYY')} -
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

export default Page
