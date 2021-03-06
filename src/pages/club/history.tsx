import {
  Animate,
  Block,
  Blockquote,
  ClubSubMenu,
  Global,
  PageHeader
} from '../../components'
import { NextPageExtended } from '../../utils'

const Page: NextPageExtended = () => {
  return (
    <Global title='Geschichte'>
      <ClubSubMenu></ClubSubMenu>
      <Animate>
        <PageHeader>Unsere Vereinsgeschichte</PageHeader>
        <Block>
          Im Januar 1964 fanden sich 10 musikbegeisterte junge Männer aus
          Markelsheim zusammen, um gemeinsam zu musizieren. Zunächst probten
          diese abwechselnd in den Häusern, später fand die Kapelle im
          Zehntkeller ein Zuhause. Geleitet wurde die Kapelle zu dieser Zeit von
          Rudolf Zuber. Die Musikkapelle Markelsheim wurde im Dezember 1968
          gegründet und 1972 ins Vereinsregister eingetragen. Seit 1969
          signalisieren wir Musikanten durch unsere Uniform auch nach außen
          unsere Zusammengehörigkeit. Der erste Aufschwung unserer Kapelle
          führte dazu, dass immer mehr Jugendliche ihre Liebe zur Blasmusik
          entdeckten.
        </Block>
        <Blockquote>
          Heute zählt unsere Musikkapelle stolze 200 Mitglieder mit rund 40
          aktiven Musikern.
        </Blockquote>
        <Block>
          1975 übernahm <strong>Gerhard Landkammer</strong> den Dirigentenstab.
          Intensive Probenarbeit brachte unserer Kapelle von Anfang an einen
          steilen musikalischen Aufstieg. Inzwischen erreichen wir bereits
          Oberstufenniveau.
        </Block>
        <Block>
          Bei durchschnittlich <strong>50 Auftritten im Jahr</strong> findet
          unsere harte Probenarbeit große Anerkennung und dies nicht nur in
          unserer Region. In Markelsheim gibt es kaum eine Feier, die ohne
          unsere Musik stattfindet.
        </Block>
        <Block>
          <strong>
            Typisch für unsere Musikkapelle ist die konzertante Blasmusik
          </strong>
          . Abend-, Promenaden-, Fest- und vorweihnachtliche Konzerte stehen auf
          unserem Programm. Den Höhepunkt für uns bildet jedes Jahr{' '}
          <strong>das Weihnachtskonzert in Markelsheim</strong>.
        </Block>
        <Block>
          Auftritte in{' '}
          <strong>
            Berlin, im kurhessischen Bergland, im Stuttgarter Neckarstadion, in
            Digne (Südfrankreich) und Prag
          </strong>{' '}
          sind Glanzpunkte unseres Vereinslebens.
        </Block>
        <Block>
          Selbst im Süddeutschen Rundfunk sowie anderen Radioanstalten und sogar
          im Fernsehen durften wir bereits unser Können unter Beweis stellen.
          Ein Meilenstein für unseren Verein war die Teilnahme am 8.
          Internationalen Wettbewerb der Blaskapellen in Brünn, in der
          Tschechoslowakei.{' '}
          <strong>Dort wurden wir mit einem Sonderpokal ausgezeichnet</strong>.
        </Block>
        <Block>
          Nach fast 44 Jahren übergibt{' '}
          <strong>Dirigent Gerhard Landkammer</strong> seinen Dirigentenstab an{' '}
          <strong>Stephan Deppisch</strong>.
        </Block>
      </Animate>
    </Global>
  )
}

Page.auth = false

export default Page
