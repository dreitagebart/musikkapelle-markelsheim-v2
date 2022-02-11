import { Heading, List, ListItem } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Animate, Global } from '../components'

const Page: NextPage = () => {
  return (
    <Global title='Links'>
      <Animate>
        <Heading variant='mb'>Unser Netzwerk</Heading>
        <List>
          <ListItem>
            <Heading size='sm'>Blasmusikverband</Heading>
            Blasmusikverband Baden Württemberg{' '}
            <a
              href='http://www.bvbw-online.de'
              target='_blank'
              rel='noreferrer'
            >
              www.bvbw-online.de
            </a>
          </ListItem>
          <ListItem>
            Kreisverband Hohenlohe{' '}
            <a
              href='http://www.bvbw-hohenlohe.de'
              target='_blank'
              rel='noreferrer'
            >
              www.bvbw-hohenlohe.de
            </a>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Heading size='sm' variant='mt'>
              Unsere Heimat
            </Heading>
            Wein- und Erholungsort Markelsheim{' '}
            <a
              href='http://www.markelsheim.de'
              target='_blank'
              rel='noreferrer'
            >
              www.markelsheim.de
            </a>
          </ListItem>
          <ListItem>
            Große Kreisstadt Bad Mergentheim{' '}
            <a
              href='http://www.bad-mergentheim.de'
              target='_blank'
              rel='noreferrer'
            >
              www.bad-mergentheim.de
            </a>
          </ListItem>
          <ListItem>
            &quot;Liebliches Taubertal&quot;{' '}
            <a
              href='http://www.liebliches-taubertal.de'
              target='_blank'
              rel='noreferrer'
            >
              www.liebliches-taubertal.de
            </a>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Heading size='sm' variant='mt'>
              Vereine aus Markelsheim im Internet
            </Heading>
            Motorradfreunde Markelsheim{' '}
            <a
              href='http://www.motorradfreunde-markelsheim.de'
              target='_blank'
              rel='noreferrer'
            >
              www.motorradfreunde-markelsheim.de
            </a>
          </ListItem>
          <ListItem>
            Ministrantengruppe Markelsheim
            <a
              href='http://www.ministranten-markelsheim.de.vu'
              target='_blank'
              rel='noreferrer'
            >
              www.ministranten-markelsheim.de.vu
            </a>
          </ListItem>
          <ListItem>
            Freiwillige Feuerwehr Markelsheim
            <a
              href='http://www.feuerwehr-markelsheim.de'
              target='_blank'
              rel='noreferrer'
            >
              www.feuerwehr-markelsheim.de
            </a>
          </ListItem>
          <ListItem>
            Winzertanzgruppe Markelsheim{' '}
            <a
              href='http://www.winzertanzgruppe.de'
              target='_blank'
              rel='noreferrer'
            >
              www.winzertanzgruppe.de
            </a>
          </ListItem>
          <ListItem>
            Minigolfpark Leiser{' '}
            <a
              href='http://www.minigolf-markelsheim.de'
              target='_blank'
              rel='noreferrer'
            >
              www.minigolf-markelsheim.de
            </a>
          </ListItem>
        </List>
      </Animate>
    </Global>
  )
}

export default Page
