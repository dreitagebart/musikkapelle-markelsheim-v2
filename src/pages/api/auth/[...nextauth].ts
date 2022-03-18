import NextAuth from 'next-auth'
import WordpressProvider from 'next-auth/providers/wordpress'

export default NextAuth({
  providers: [
    WordpressProvider({
      clientId: process.env.WP_CLIENT_ID,
      clientSecret: process.env.WP_CLIENT_SECRET,
      authorization:
        'http://musikkapelle-markelsheim.de/blog/oauth2/authorize?scope=auth',
      token: 'http://musikkapelle-markelsheim.de/blog/oauth2/token'
    })
  ]
})
