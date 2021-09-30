// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['localhost', 'almenara-api-wfaof.ondigitalocean.app']
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
