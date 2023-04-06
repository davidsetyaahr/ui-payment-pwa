const withPWA = require('next-pwa')({
  dest: 'public',
  register:true,
  skipWaiting:true
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  images: {
    domains: ['primtech-sistem.com'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'primtech-sistem.com',
  //       port: '',
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
