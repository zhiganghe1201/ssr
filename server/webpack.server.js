const nodeExternals = require("webpack-node-externals");
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const serverConfig = {
  entry: './src/server',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, "./dist")
  },
  externals: [nodeExternals()], // 服务器端 打包时 排除掉`node_modules`目录
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            // modules: {
            //   namedExport: true,
            //   localIdentName: "foo__[name]__[local]",
            // },
          }
        }]
    }]
  }
}

module.exports = merge(baseConfig, serverConfig)