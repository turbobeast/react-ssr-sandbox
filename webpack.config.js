const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const sharedRules = require('./config/webpack-rules')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
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
    new ManifestPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/static/vendor.[chunkhash].js',
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        NODE_SERVER: false,
      },
    }),
  ]
}