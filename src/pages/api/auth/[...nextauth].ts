import NextAuth from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
import WordpressProvider from 'next-auth/providers/wordpress'

export default NextAuth({
  providers: [
    WordpressProvider({
      id: 'wordpress',
      type: 'oauth',
      name: 'MKM',
      authorization: {
        url: 'https://public-api.wordpress.com/oauth2/authorize',
        params: {
          scope: 'global',
          client_id: process.env.WP_CLIENT_ID,
          redirect_uri:
            'https://musikkapelle-markelsheim-v2.vercel.app/api/auth/callback/wordpress',
          response_type: 'token'
          // blog: 'http://musikkapelle-markelsheim.de/blog'
        }
      },
      token: 'https://public-api.wordpress.com/oauth2/token',
      userinfo: 'https://public-api.wordpress.com/rest/v1/me',
      profile: (profile) => {
        return {
          id: profile.ID,
          name: profile.display_name,
          email: profile.email,
          image: profile.avatar_URL
        }
      },
      clientId: process.env.WP_CLIENT_ID,
      clientSecret: process.env.WP_CLIENT_SECRET
    })
  ]
})
