/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thieuhoa.com.vn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'thieuhoa.local',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8081',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vantrong.tailc51ac.ts.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
