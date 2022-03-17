import type { NextPage } from 'next'

import {
  Animate,
  Global,
  MarkelsheimSubMenu,
  PageHeader
} from '../../components'

const Page: NextPage = () => {
  return (
    <Global title='Geschichte'>
      <MarkelsheimSubMenu></MarkelsheimSubMenu>
      <Animate>
        <PageHeader>Die Geschichte von Markelsheim</PageHeader>
        <div className='font-light'>
          Markelsheim war ein altes Reichslehen, das unter Kaiser Heinrich III
          im Jahre 1054 erstmals erwähnt wurde. Graf Emehard der hier
          Besitzungen hatte wurde 1088 Bischof von Würzburg, womit Markelsheim
          Besitztum des Bistums Würzburg wurde. Ein Teil der Güter wurde den
          Dienstleuten Richizo und Wolfram von Marcholfesheim überlassen. Seit
          dieser Zeit hat Markelsheim einen Ortsadel gehabt, dessen Namen noch
          bis zum Ende des 14. Jahrhunderts erschien. Urkundlich ist Markelsheim
          ab 1246 Lehenssitz derer von Hohenlohe--Brauneck, die auf Burg Neuhaus
          saßen. Mit Erlöschen dieser Linie am Ende des 14. Jahrhunderts fiel
          Markelsheim an Würzburg zurück. Burg NeuhausSpäter wurde das Amt
          Neuhaus, wozu Markelsheim gehörte, an den Deutschorden zu Mergentheim
          verkauft. Dort blieb Markelsheim bis 1809, wo es dann zu Württemberg
          kam. Seit 1409 war Markelsheim Sitz der Deutschordengerichtbarkeit.
          Durch Eingemeindung zum 1. Januar 1972 wurde Markelsheim ein Stadtteil
          der Großen Kreisstadt Bad Mergentheim und hat derzeit ca. 2000
          Einwohner.
        </div>
      </Animate>
    </Global>
  )
}

export default Page
