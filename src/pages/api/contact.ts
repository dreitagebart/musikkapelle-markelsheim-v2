import mailer, { SendMailOptions } from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

import {
  contactMessage,
  confirmationMessage,
  contactSubject,
  confirmationSubject
} from '../../assets/templates'

const getContactMailData = async (
  name: string,
  phone: string,
  email: string,
  message: string
): Promise<SendMailOptions> => ({
  from: {
    name: 'Musikkapelle Markelsheim',
    address: String(process.env.MAIL_FROM)
  },
  to: process.env.MAIL_TO,
  replyTo: email,
  subject: contactSubject({ name }),
  html: await contactMessage({ name, phone, email, message })
})

const getConfirmationMailData = async (
  phone: string,
  email: string,
  message: string
): Promise<SendMailOptions> => ({
  from: {
    name: 'Musikkapelle Markelsheim',
    address: String(process.env.MAIL_FROM)
  },
  to: email,
  subject: confirmationSubject(),
  html: await confirmationMessage({ phone, email, message })
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

  try {
    await transport.sendMail(await getContactMailData(name, phone, email, message))
    await transport.sendMail(await getConfirmationMailData(phone, email, message))

    return res.status(200).json({ error: false })
  } catch (error) {
    console.log(error)

    return res.status(400).json({ error: true })
  }
}

export default handler
