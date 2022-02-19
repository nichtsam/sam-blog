/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true }

const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')
const { withContentlayer } = require('next-contentlayer')

module.exports = withPlugins([withSvgr, withContentlayer()], nextConfig)
