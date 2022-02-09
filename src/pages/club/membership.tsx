import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Animate, ClubSubMenu, Global } from '../../components'

const Page: NextPage = () => {
  return (
    <Global title='Mitgliedschaft'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <Heading>Aktive Mitgliedschaft</Heading>
        <p>
          Du spielst bereits ein Blas- bzw. Schlaginstrument? Du bist auf der
          Suche nach einer guten Musikkapelle und guten Gemeinschaft?
        </p>
        <p>
          Die Musikkapelle Markelsheim freut sich jederzeit über neue aktive
          Mitglieder - egal welches Instrument. Natürlich kannst du auch
          jederzeit mal unverbindlich in den Proben reinschnuppern.
        </p>
        <p>
          Du spielst noch kein Instrument, aber du möchtest gerne eines
          erlernen? Hier gibt es in unserem Verein auch viele Möglichkeiten!!
          Sprich uns einfach an!
        </p>
        <p>
          Wende dich am besten an unsere Vorsitzende{' '}
          <a href='/contact'>Verena Hüttl</a>.
        </p>
        <p>Wir freuen uns auf dich!</p>
        <br />

        <h3 className='title font-light'>Passive Mitgliedschaft</h3>
        <p>
          Sie sind Musikliebhaber spielen aber selbst kein Instrument? Freuen
          auch Sie sich über den Beitrag der Musikkapelle zum kulturellen Leben
          in Markelsheim? Ihnen gefällt unsere Musik, Sie finden unseren Verein
          sympathisch oder fühlen sich unserer Kapelle verbunden? Sie sind der
          Meinung, dass es die Blasmusik verdient hat, gefördert zu werden?
          Wollen auch Sie die Musikkapelle Markelsheim in seinem Wirken, sowie
          seiner Jugendarbeit unterstützen?
        </p>
        <p>
          Dann freuen wir uns sehr, Sie als passives Mitglied in der
          Musikkapelle Markelsheim begrüßen zu dürfen.
        </p>
        <blockquote>
          Musik lebt durch den Menschen...
          <br />
          ... jeder Mensch braucht Musik...
          <br />
          ... und wir brauchen Sie!
        </blockquote>
        <p>
          Für eine passive Mitgliedschaft wende dich einfach an{' '}
          <a href='/contact'>unsere Ansprechpartner</a> oder nutze das
          untenstehende Beitrittsformular zum Herunterladen.
        </p>
        <div className='u-center'>
          <div className='u-text-center'>
            <a href='/pdf/mitgliedschaft.pdf'>
              <div className='card' style={{ padding: 14, width: 400 }}>
                <div className='tile'>
                  <div className='tile-icon'>
                    <i className='far fa-file-pdf fa-4x fa-fw' />
                  </div>
                  <div className='tile-container'>
                    <p className='tile-title no-margin'>
                      <b>beitritt_passive_mitgliedschaft.pdf</b>
                    </p>
                    <p className='tile-subtitle no-margin'>
                      Beitritterklärung für die Musikkapelle Markelsheim
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Animate>
    </Global>
  )
}

export default Page
