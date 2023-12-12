/** @type {import('next').NextConfig} */
const withLinaria = require("next-with-linaria");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(new MiniCssExtractPlugin());
    config.module.rules.push(
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "@wyw-in-js/webpack-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    );

    return config;
  },
};

module.exports = withLinaria(nextConfig);
