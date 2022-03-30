import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import InstagramProvider from 'next-auth/providers/instagram'

import userlist from './userlist.json'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/member/login'
  },
  callbacks: {
    redirect: ({ url, baseUrl }) => {
      console.log('redirect')
      console.log('url', url)
      console.log('baseUrl', baseUrl)

      if (url.startsWith(baseUrl)) {
        console.log('redirect to url')
        return url
      }
      // Allows relative callback URLs
      if (url.startsWith('/')) {
        console.log('relative callback URL')
        return new URL(url, baseUrl).toString()
      }

      console.log('redirect to baseUrl')
      return baseUrl
    },
    signIn: async ({ user, account, profile, email, credentials }) => {
      console.log('triggered event sign in:')
      console.log('user', user)
      console.log('account', account)
      console.log('profile', profile)
      console.log('email', email)
      console.log('credentials', credentials)

      if (userlist.hasOwnProperty(account.provider)) {
        const provider = account.provider as keyof typeof userlist
        const mail = user.email

        if (!mail) {
          return '/member/noauth'
        }

        if (userlist[provider].includes(mail)) {
          return true
        }

        return '/member/noauth'
      }

      return '/member/noauth'
    }
  }
})
