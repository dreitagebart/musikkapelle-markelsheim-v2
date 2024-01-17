import mailer, { SendMailOptions } from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

import {
  wbwMessage,
  wbwConfirmationMessage,
  wbwSubject,
  wbwConfirmationSubject
} from '../../assets/templates'

const getWBWMailData = (
  name: string,
  email: string,
  noc: number,
  takers: Array<string>,
  message: string,
  phone: string
): SendMailOptions => ({
  from: {
    name: 'Musikkapelle Markelsheim',
    address: String(process.env.MAIL_FROM)
  },
  to: process.env.MAIL_TO,
  cc: process.env.MAIL_CC,
  replyTo: email,
  subject: wbwSubject({ name }),
  html: wbwMessage({ name, email, noc, takers, message, phone })
})

const getWBWConfirmationMailData = (
  email: string,
  message: string
): SendMailOptions => ({
  from: {
    name: 'Musikkapelle Markelsheim',
    address: String(process.env.MAIL_FROM)
  },
  to: email,
  subject: wbwConfirmationSubject(),
  html: wbwConfirmationMessage({ email, message })
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

  const { name, email, noc, takers, message, phone } = req.body

  transport
    .sendMail(getWBWMailData(name, email, noc, takers, message, phone))
    .then(() => {
      transport
        .sendMail(getWBWConfirmationMailData(email, message))
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
