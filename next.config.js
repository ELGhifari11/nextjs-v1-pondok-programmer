// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',              // <— penting agar .next/standalone terbentuk
  productionBrowserSourceMaps: false,
  reactStrictMode: true
}
module.exports = nextConfig
