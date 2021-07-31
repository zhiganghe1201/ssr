const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base');


const clientConfig = {
  devtool: 'source-map', // 服务器端不要 source-map
  entry: './src/client',
  output: {
    filename: 'js/bundle.[chunkhash:5].js',
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
    // new MiniCssExtractPlugin({
    //   filename: 'css/bundle.[chunkhash:5].css'
    // })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          // MiniCssExtractPlugin.loader,
          "isomorphic-style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
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