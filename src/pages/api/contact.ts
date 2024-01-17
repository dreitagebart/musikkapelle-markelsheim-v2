import mailer, { SendMailOptions } from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

import {
  contactMessage,
  confirmationMessage,
  contactSubject,
  confirmationSubject
} from '../../assets/templates'

const getContactMailData = (
  name: string,
  phone: string,
  email: string,
  message: string
): SendMailOptions => ({
  from: {
    name: 'Musikkapelle Markelsheim',
    address: String(process.env.MAIL_FROM)
  },
  to: process.env.MAIL_TO,
  replyTo: email,
  subject: contactSubject({ name }),
  html: contactMessage({ name, phone, email, message })
})

const getConfirmationMailData = (
  phone: string,
  email: string,
  message: string
): SendMailOptions => ({
  from: {
    name: 'Musikkapelle Markelsheim',
    address: String(process.env.MAIL_FROM)
  },
  to: email,
  subject: confirmationSubject(),
  html: confirmationMessage({ phone, email, message })
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

  const { name, phone, email, message } = req.body

  return transport
    .sendMail(getContactMailData(name, phone, email, message))
    .then(() => {
      transport
        .sendMail(getConfirmationMailData(phone, email, message))
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
