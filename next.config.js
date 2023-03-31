const withPWA = require('next-pwa')({
  dest: 'public',
  register:true,
  skipWaiting:true
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: false,
      },
    ];
  },
})
