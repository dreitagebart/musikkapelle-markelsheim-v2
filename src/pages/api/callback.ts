import { NextApiRequest, NextApiResponse } from 'next'
import { AuthorizationCode } from 'simple-oauth2'

import { config } from '../../lib/config'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { host } = req.headers
  const url = new URL(`https://${host}/${req.url}`)
  const urlParams = url.searchParams
  const code = urlParams.get('code')
  const provider = urlParams.get('provider')
  const client = new AuthorizationCode(config(provider!))
  const tokenParams = {
    code: code!,
    redirect_uri: `https://${host}/api/callback?provider=${provider}`
  }

  try {
    const accessToken = await client.getToken(tokenParams)
    const token = accessToken.token['access_token']

    const responseBody = renderBody('success', {
      token,
      provider: provider!
    })

    res.statusCode = 200
    res.end(responseBody)
  } catch (e: any) {
    res.statusCode = 200
    res.end(renderBody('error', e))
  }
}

function renderBody(
  status: string,
  content: {
    token: string
    provider: string
  }
) {
  return `
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:${content.provider}:${status}:${JSON.stringify(
    content
  )}',
          message.origin
        );

        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);

      window.opener.postMessage("authorizing:${content.provider}", "*");
    </script>
  `
}
