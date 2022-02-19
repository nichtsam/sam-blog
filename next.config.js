/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: process.env.NODE_ENV === 'production' }

const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')
const { withContentlayer } = require('next-contentlayer')

module.exports = withPlugins([withSvgr, withContentlayer()], nextConfig)
