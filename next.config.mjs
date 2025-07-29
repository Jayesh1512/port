/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Enables static export
  distDir: 'build',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
