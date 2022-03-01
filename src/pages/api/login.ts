import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

import { loginUser } from '../../lib/api'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body
  console.log('username', username)
  console.log('password', password)
  const data = await loginUser({ username, password })

  /**
   * Note when you run 'npm run start' locally, cookies won't be set, because locally process.env.NODE_ENV = 'production'
   * so secure will be true, but it will still be http and not https , when tested locally.
   * So when testing locally both in dev and prod, set the value of 'secure' to be false.
   */
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('auth', String(data?.login?.authToken ?? ''), {
      httpOnly: true,
      secure: 'development' !== process.env.NODE_ENV,
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })
  )

  // Only sending a message that successful, because we dont want to send JWT to client.
  res.status(200).json({ success: Boolean(data?.login?.authToken) })
  // res.status(200).json({ success: true })
}

export default handler
