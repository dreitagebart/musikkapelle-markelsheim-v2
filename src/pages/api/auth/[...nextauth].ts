import NextAuth from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
import WordpressProvider from 'next-auth/providers/wordpress'

export default NextAuth({
  providers: [
    WordpressProvider({
      checks: 'none',
      authorization: {
        url: 'https://public-api.wordpress.com/oauth2/authorize',
        params: {
          scope: 'auth',
          client_id: process.env.WP_CLIENT_ID,
          redirect_uri:
            'https://musikkapelle-markelsheim-v2.vercel.app/api/auth/callback/wordpress',
          response_type: 'token',
          blog: 'http://musikkapelle-markelsheim.de/blog'
        }
      },
      token: 'https://public-api.wordpress.com/oauth2/token',
      clientId: process.env.WP_CLIENT_ID,
      clientSecret: process.env.WP_CLIENT_SECRET
    })
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // })
  ]
})
