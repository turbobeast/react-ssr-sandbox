const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const sharedRules = require('./config/webpack-rules')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.dev.js'
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
    publicPath: '/',
    historyApiFallback: true,
  },

  module: {
    rules: sharedRules.concat(
      { 
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules' ],
      }),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
}
