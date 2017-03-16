const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './hmr-entry.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dev'),
    publicPath: '/'
  },

  context: path.resolve(__dirname, 'src'),
  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dev'),
    publicPath: '/'
  },

  module: {
    rules: [
       {
        test: /\.js$/,
        use: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules' ]
      },
      {
        test: /.woff$/,
        use: [ 'url-loader' ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
}
