const path = require('path');
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const clientConfig = {
  devtool: 'source-map', // 服务器端不要 source-map
  entry: './src/client',
  output: {
    filename: 'js/bundle.[hash:5].js',
    path: path.resolve(__dirname, './public'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!favicon.ico', // 清楚文件但排除这个文件
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.[hash:5].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }]
      },
      {
        test: /\.(png)|(jpg)|(jpeg)|(gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:5].[ext]'
            }
          }
        ]
      }
    ]
  }
}
module.exports = merge(baseConfig, clientConfig)