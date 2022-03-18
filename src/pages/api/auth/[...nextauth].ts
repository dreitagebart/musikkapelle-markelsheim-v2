import NextAuth from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
import WordpressProvider from 'next-auth/providers/wordpress'

export default NextAuth({
  providers: [
    WordpressProvider({
      authorization:
        'https://public-api.wordpress.com/oauth2/authorize?scope=auth&blog=http://musikkapelle-markelsheim.de/blog',
      clientId: process.env.WP_CLIENT_ID,
      clientSecret: process.env.WP_CLIENT_SECRET
    })
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // })
  ]
})
