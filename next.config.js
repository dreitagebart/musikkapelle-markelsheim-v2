/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.graphql': {
        loaders: ['graphql-tag/loader'],
        as: '*.js'
      },
      '*.gql': {
        loaders: ['graphql-tag/loader'],
        as: '*.js'
      }
    }
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })

    return config
  },
  reactStrictMode: true
}

module.exports = nextConfig
