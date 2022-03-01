import NextAuth from 'next-auth'
import WordpressProvider from 'next-auth/providers/wordpress'

export default NextAuth({
  providers: [
    WordpressProvider({
      clientId: process.env.WORDPRESS_CLIENT_ID,
      clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
      authorization: 'https://mindreport.com/blog/oauth2/authorize?scope=auth',
      token: 'https://mindreport.com/blog/oauth2/token'
    })
  ]
})
