const withPWA = require('next-pwa')({
  dest: 'public',
  register:true,
  skipWaiting:true
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: '127.0.0.1',
  //       port: '8000',
  //       pathname: '/storage/',
  //     },
  //   ],
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ];
  },
})
