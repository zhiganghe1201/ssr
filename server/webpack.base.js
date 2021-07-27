const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 别名
    },
    extensions: ['.js', '.jsx', '.css'], // 配置扩展名
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-react"]
            }
          }
        ]
      }
    ]
  }
}