import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'

import groupImage from '../../assets/images/mkm01.jpeg'
import { Animate, ClubSubMenu, Global } from '../../components'

const Page: NextPage = () => {
  return (
    <Global title='Musikkapelle'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <div className='font-light'>
          <br />
          <div className='u-text-center'>
            <Image
              src={groupImage}
              alt='Gruppenbild auf dem Weinberg Markelsheim'
            />
          </div>
          <div className='row u-text-center'>
            <div className='col-12'>
              <h6 className='title font-light'>Dirigent</h6>
              <p>Stephan Deppisch</p>
            </div>
          </div>
          <div className='row u-text-center'>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Klarinette</h6>
                </li>
                <li>Isabell Balling</li>
                <li>Corinna Burkert</li>
                <li>Isabelle Herrmann</li>
                <li>Tabea Halbmann</li>
                <li>Verena Hüttl</li>
                <li>Alfred Kimmelmann</li>
                <li>Karin Staudt</li>
                <li>Simone Tatusch</li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Schlagwerk</h6>
                </li>
                <li>Christoph Burkert</li>
                <li>David Hernadi</li>
                <li>Lena Kimmelmann</li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Querflöte</h6>
                </li>
                <li>Carla Bauer</li>
                <li>Jule Haas</li>
                <li>Sonja Hainke</li>
                <li>Jelena Kuhn</li>
                <li>Kristin Peyerl</li>
              </ul>
            </div>
          </div>
          <div className='row u-text-center'>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Tenorhorn</h6>
                </li>
                <li>Hermann Beck</li>
                <li>Stefan Büchold</li>
                <li>Wilfried Zeihsel</li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Trompete</h6>
                </li>
                <li>Jochen Popp</li>
                <li>Rebeca Schulz</li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Flügelhorn</h6>
                </li>
                <li>Tobias Haas</li>
                <li>David Hartmann</li>
                <li>Benedikt Mika</li>
                <li>Fred Prokosch</li>
                <li>Anton Schneider</li>
              </ul>
            </div>
          </div>
          <div className='row u-text-center'>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Bariton</h6>
                </li>
                <li>Florian Metzger</li>
                <li>Eugen Porasil</li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Posaune</h6>
                </li>
                <li>Lukas Halbmann</li>
                <li>Bastian Hartmann</li>
                <li>Philipp Hernadi</li>
                <li>Franz Schmidberger</li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Bass</h6>
                </li>
                <li>Xaver Halbmann</li>
                <li>Alois Zöllinger</li>
              </ul>
            </div>
          </div>
          <div className='row u-text-center'>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Horn</h6>
                </li>
                <li>Kai Kimmelmann</li>
                <li>Sabine Strysak-Halbmann</li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Fagott</h6>
                </li>
                <li>Tizian Halbmann</li>
              </ul>
            </div>
            <div className='col-4'>
              <ul className='no-bullets'>
                <li>
                  <h6 className='title font-light'>Saxophon</h6>
                </li>
                <li>Nina Helebrand</li>
              </ul>
            </div>
          </div>
        </div>
      </Animate>
    </Global>
  )
}

export default Page
