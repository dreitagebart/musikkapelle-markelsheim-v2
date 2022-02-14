import { NextApiRequest, NextApiResponse } from 'next'
import { AuthorizationCode } from 'simple-oauth2'
import { randomBytes } from 'crypto'

import { config } from '../../lib/config'
import { scopes } from '../../lib/scopes'

export const randomString = () => randomBytes(4).toString('hex')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { host } = req.headers
  const url = new URL(`https://${host}/${req.url}`)
  const urlParams = url.searchParams
  const provider = urlParams.get('provider')

  const client = new AuthorizationCode(config(provider!))

  const authorizationUri = client.authorizeURL({
    redirect_uri: `https://${host}/api/callback?provider=${provider}`,
    scope: scopes[provider!],
    state: randomString()
  })

  res.writeHead(301, { Location: authorizationUri })
  res.end()
}
