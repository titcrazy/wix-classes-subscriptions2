// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/v1/catalog/services',
        destination: 'https://www.wixapis.com/bookings/v1/catalog/services',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: true,
      },
    ];
  },
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app', 'src'],
  },
  images: {
    domains: ['fakeimg.pl', 'static.wixstatic.com', 'fonts.cdnfonts.com'],
    formats: ['image/webp'],
  },
};
