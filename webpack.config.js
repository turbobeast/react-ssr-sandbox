const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const sharedRules = require('./config/webpack-rules')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '/static/[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  module: { rules: sharedRules },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin({
      filename: '/static/[name].[chunkhash].css' 
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ManifestPlugin()
  ]
}