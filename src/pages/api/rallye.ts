import mailer, { SendMailOptions } from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

import {
  rallyeMessage,
  rallyeConfirmationMessage,
  rallyeSubject,
  rallyeConfirmationSubject
} from '../../assets/templates'

const getRallyeMailData = (
  name: string,
  email: string,
  noc: number,
  takers: Array<string>,
  message: string
): SendMailOptions => ({
  from: {
    name: 'Musikkapelle Markelsheim',
    address: String(process.env.MAIL_FROM)
  },
  to: process.env.MAIL_TO,
  cc: process.env.MAIL_CC,
  replyTo: email,
  subject: rallyeSubject({ name }),
  html: rallyeMessage({ name, email, noc, takers, message })
})

const getRallyeConfirmationMailData = (
  email: string,
  message: string
): SendMailOptions => ({
  from: {
    name: 'Musikkapelle Markelsheim',
    address: String(process.env.MAIL_FROM)
  },
  to: email,
  subject: rallyeConfirmationSubject(),
  html: rallyeConfirmationMessage({ email, message })
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const transport = mailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  const { name, email, noc, takers, message } = req.body

  return transport
    .sendMail(getRallyeMailData(name, email, noc, takers, message))
    .then(() => {
      transport
        .sendMail(getRallyeConfirmationMailData(email, message))
        .then(() => {
          return res.status(200).json({ error: false })
        })
        .catch((error) => {
          console.log(error)

          return res.status(400).json({
            error: true
          })
        })
    })
}

export default handler
