import { Heading, HStack, List, ListItem, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Animate, Global } from '../components'

const Page: NextPage = () => {
  return (
    <Global title='Links'>
      <Animate>
        <Heading variant='mb'>Unser Netzwerk</Heading>
        <Heading size='md' variant='my'>
          Blasmusikverband
        </Heading>
        <HStack>
          <Heading size='sm'>Blasmusikverband Baden Württemberg</Heading>
          <a href='http://www.bvbw-online.de' target='_blank' rel='noreferrer'>
            www.bvbw-online.de
          </a>
        </HStack>
        <HStack>
          <Heading size='sm'>Kreisverband Hohenlohe</Heading>
          <a
            href='http://www.bvbw-hohenlohe.de'
            target='_blank'
            rel='noreferrer'
          >
            www.bvbw-hohenlohe.de
          </a>
        </HStack>
        <Heading size='md' variant='my'>
          Unsere Heimat
        </Heading>
        <HStack>
          <Heading size='sm'>Wein- und Erholungsort Markelsheim</Heading>
          <a href='http://www.markelsheim.de' target='_blank' rel='noreferrer'>
            www.markelsheim.de
          </a>
        </HStack>
        <HStack>
          <Heading size='sm'>Große Kreisstadt Bad Mergentheim</Heading>
          <a
            href='http://www.bad-mergentheim.de'
            target='_blank'
            rel='noreferrer'
          >
            www.bad-mergentheim.de
          </a>
        </HStack>
        <HStack>
          <Heading size='sm'>&quot;Liebliches Taubertal&quot;</Heading>
          <a
            href='http://www.liebliches-taubertal.de'
            target='_blank'
            rel='noreferrer'
          >
            www.liebliches-taubertal.de
          </a>
        </HStack>
        <Heading size='md' variant='my'>
          Vereine aus Markelsheim im Internet
        </Heading>
        <HStack>
          <Heading size='sm'>Motorradfreunde Markelsheim</Heading>
          <a
            href='https://m.facebook.com/Motorradfreunde-Markelsheim-eV-1594129114019308/'
            target='_blank'
            rel='noreferrer'
          >
            www.motorradfreunde-markelsheim.de
          </a>
        </HStack>
        <HStack>
          <Heading size='sm'>Freiwillige Feuerwehr Markelsheim</Heading>
          <a
            href='http://www.feuerwehr-markelsheim.de'
            target='_blank'
            rel='noreferrer'
          >
            www.feuerwehr-markelsheim.de
          </a>
        </HStack>
        <HStack>
          <Heading size='sm'>Winzertanzgruppe Markelsheim</Heading>
          <a
            href='http://www.winzertanzgruppe.de'
            target='_blank'
            rel='noreferrer'
          >
            www.winzertanzgruppe.de
          </a>
        </HStack>
        <HStack>
          <Heading size='sm'>Minigolfpark Leiser</Heading>
          <a
            href='http://www.minigolf-markelsheim.de'
            target='_blank'
            rel='noreferrer'
          >
            www.minigolf-markelsheim.de
          </a>
        </HStack>
      </Animate>
    </Global>
  )
}

export default Page
