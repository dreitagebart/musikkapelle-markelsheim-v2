import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Animate, Global } from '../components'

const Page: NextPage = () => {
  return (
    <Global title='Links'>
      <Animate>
        <Heading>Links</Heading>
        <div>
          <div className='divider' />
          <div className='font-light'>
            <ul className='no-bullets'>
              <li className='title'>Blasmusikverband</li>
              <li>
                Blasmusikverband Baden Württemberg{' '}
                <a href='http://www.bvbw-online.de'>www.bvbw-online.de</a>
              </li>
              <li>
                Kreisverbande Hohenlohe{' '}
                <a href='http://www.bvbw-hohenlohe.de'>www.bvbw-hohenlohe.de</a>
              </li>
            </ul>
            <div className='row' />
            <ul className='no-bullets'>
              <li className='title'>Unsere Heimat</li>
              <li>
                Wein- und Erholungsort Markelsheim{' '}
                <a href='http://www.markelsheim.de'>www.markelsheim.de</a>
              </li>
              <li>
                Große Kreisstadt Bad Mergentheim{' '}
                <a href='http://www.bad-mergentheim.de'>
                  www.bad-mergentheim.de
                </a>
              </li>
              <li>
                &quot;Liebliches Taubertal&quot;{' '}
                <a href='http://www.liebliches-taubertal.de'>
                  www.liebliches-taubertal.de
                </a>
              </li>
            </ul>
            <div className='row' />
            <ul className='no-bullets'>
              <li className='title'>Vereine aus Markelsheim im Internet</li>
              <li>
                Motorradfreunde Markelsheim{' '}
                <a href='http://www.motorradfreunde-markelsheim.de'>
                  www.motorradfreunde-markelsheim.de
                </a>
              </li>
              <li>
                Ministrantengruppe Markelsheim
                <a href='http://www.ministranten-markelsheim.de.vu'>
                  www.ministranten-markelsheim.de.vu
                </a>
              </li>
              <li>
                Freiwillige Feuerwehr Markelsheim
                <a href='http://www.feuerwehr-markelsheim.de'>
                  www.feuerwehr-markelsheim.de
                </a>
              </li>
              <li>
                Winzertanzgruppe Markelsheim{' '}
                <a href='http://www.winzertanzgruppe.de'>
                  www.winzertanzgruppe.de
                </a>
              </li>
              <li>
                Minigolfpark Leiser{' '}
                <a href='http://www.minigolf-markelsheim.de'>
                  www.minigolf-markelsheim.de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Animate>
    </Global>
  )
}

export default Page
