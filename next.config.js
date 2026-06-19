/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
    ],
  },
  basePath: '/saithsfuff.com', // Only add this if you aren't using a custom domain
};

module.exports = nextConfig;
