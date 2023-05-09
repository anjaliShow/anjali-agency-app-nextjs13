/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
    ],
    // domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
