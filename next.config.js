/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

const withSvgr = require('next-plugin-svgr')

module.exports = withSvgr(nextConfig)
