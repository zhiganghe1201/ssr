const nodeExternals = require("webpack-node-externals");
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const path = require('path');

const serverConfig = {
  entry: './src/server',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, "./dist"),
    publicPath: '/'
  },
  externals: [nodeExternals()], // 服务器端 打包时 排除掉`node_modules`目录
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png)|(jpg)|(jpeg)|(gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:5].[ext]',
              emitFile: false,
            }
          }
        ]
      }
    ]
  }
}

module.exports = merge(baseConfig, serverConfig)