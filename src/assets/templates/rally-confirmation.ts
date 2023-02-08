import mjml from 'mjml'

interface MessageProps {
  email: string
  message: string
}

export const rallyConfirmationSubject = (): string =>
  `Anmeldung zur Instrumentenrally - Musikkapelle Markelsheim`

export const rallyConfirmationMessage = ({
  email,
  message
}: MessageProps): string => {
  return mjml(`<mjml>
  <mj-body background-color="#e9ecef">
    <mj-section background-color="#f6f9fc">
      <mj-column>
        <mj-text font-size="26px" color="#1A202C"
          >Musikkapelle Markelsheim</mj-text
        >
      </mj-column>
    </mj-section>
    <mj-section background-repeat="no-repeat">
      <mj-column>
        <mj-image
          width="156px"
          src="https://musikkapelle-markelsheim-v2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.26f80dd5.png&w=256&q=75"
        ></mj-image>
      </mj-column>
    </mj-section>
    <mj-section background-color="#ffffff">
      <mj-column>
        <mj-text font-size="22px" color="#1A202C" font-family="arial"
          >Ihre Anmeldung zur Instrumentenrally</mj-text
        >
        <mj-text font-size="16px" color="#1A202C" font-family="arial"
          >Hiermit bestätigen wir Ihnen den Eingang der Anmeldung. Die
          Instrumentenrally findet am Samstag, 22.04.2023 um 10:00 Uhr in der
          Grundschule Markelsheim statt.
        </mj-text>
        <mj-text font-size="16px" color="#1A202C" font-family="arial">
          Sollten Sie kurzfristig nicht an der Instrumentenrally teilnehmen
          können, so melden Sie sich bitte per E-Mail über
          info@musikkapelle-markelsheim.de ab!</mj-text
        >
        <mj-text font-size="16px" color="#1A202C" font-family="arial">
          Wir freuen uns auf Ihr Kommen!</mj-text
        >
      </mj-column>
    </mj-section>
    <mj-section background-color="#822727">
      <mj-column>
        <mj-text color="#efefef" font-size="16px"
          >Mit freundlichen Grüßen</mj-text
        >
        <mj-text color="#ffffff" font-size="18px" font-style="italic"
          >Ihre Musikkapelle Markelsheim</mj-text
        >
      </mj-column>
    </mj-section>
    <mj-section padding-bottom="0" padding-top="20px">
      <mj-column>
        <mj-text font-size="14px">Besuchen Sie uns im Internet</mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding-top="0" padding-bottom="20px">
      <mj-column>
        <mj-social
          align="left"
          font-size="15px"
          icon-size="30px"
          mode="horizontal"
        >
          <mj-social-element
            text-padding="4px 20px 4px 0"
            name="web"
            href="https://www.musikkapelle-markelsheim.de"
            >musikkapelle-markelsheim.de</mj-social-element
          >
          <mj-social-element
            text-padding="4px 20px 4px 0"
            name="facebook-noshare"
            href="https://facebook.com/MusikkapelleMarkelsheim/"
            >Facebook</mj-social-element
          >
          <mj-social-element
            name="instagram"
            href="https://instagram.com/musikkapelle_markelsheim"
          >
            Instagram
          </mj-social-element>
        </mj-social>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`).html
}
