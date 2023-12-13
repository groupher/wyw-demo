/** @type {import('next').NextConfig} */
const withLinaria = require("next-with-linaria");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nextConfig = {
  webpack: (config, options) => {
    return config;
  },
};

module.exports = nextConfig;
