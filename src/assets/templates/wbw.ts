import mjml from 'mjml'

interface SubjectProps {
  name: string
}

interface MessageProps {
  name: string
  email: string
  noc: number
  phone: string
  takers: Array<string>
  message: string
}

export const wbwSubject = ({ name }: SubjectProps): string =>
  `Musikkapelle Markelsheim - Weinbergwanderung ${name}`

export const wbwMessage = ({
  name,
  email,
  noc,
  phone,
  takers,
  message
}: MessageProps): string => {
  return mjml(`<mjml>
  <mj-body background-color="#e9ecef">
    <mj-section background-color="#f6f9fc" padding-bottom="0">
      <mj-column>
        <mj-text font-size="24px" color="#1A202C" font-family="arial"
          >Anmeldung zur Weinbergwanderung</mj-text
        >
      </mj-column>
    </mj-section>
    <mj-section background-color="#f6f9fc" padding-top="0">
      <mj-column>
        <mj-text font-size="18px" font-weight="bold">Vor- und Zuname</mj-text>
        <mj-text font-size="16px" font-style="italic">${name}</mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#f6f9fc" padding-top="0">
      <mj-column>
        <mj-text font-size="18px" font-weight="bold">Telefon</mj-text>
        <mj-text font-size="16px">${phone}</mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#f6f9fc" padding-top="0">
      <mj-column>
        <mj-text font-size="18px" font-weight="bold">Anzahl Teilnehmer</mj-text>
        <mj-text font-size="16px" font-style="italic">${noc}</mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#f6f9fc" padding-top="0">
      <mj-column>
        <mj-text font-size="18px" font-weight="bold">Teilnehmer</mj-text>
        <mj-text font-size="16px">${takers.join(', ')}</mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#f6f9fc" padding-top="0">
      <mj-column>
        <mj-text font-size="18px" font-weight="bold">Nachricht</mj-text>
        <mj-text font-size="16px" font-style="italic">${message}</mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#822727">
      <mj-column>
        <mj-text color="#efefef" font-size="18px" font-weight="bold"
          >eMail Adresse des Absenders</mj-text
        >
        <mj-text color="#ffffff" font-size="14px">${email}</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`).html
}
