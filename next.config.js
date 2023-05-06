/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['robohash.org'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env : {
    URL_HOST : "https://users-admin-bk-vercel.vercel.app",
    PORT : '3002'
  }
}

module.exports = nextConfig
