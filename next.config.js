/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: process.env.NODE_ENV === "production",
}

const { withContentlayer } = require("next-contentlayer")

module.exports = () => {
  const plugins = [withContentlayer]
  return plugins.reduce((acc, next) => next(acc), nextConfig)
}
