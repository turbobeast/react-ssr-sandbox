const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpackSharedRules = [
  {
    test: /\.js$/,
    use: 'eslint-loader',
    enforce: 'pre',
    exclude: /node_modules/,
  },
  {
    test: /\.js$/,
    use: [{
      loader: 'babel-loader',
      options: {
        plugins: ['syntax-dynamic-import'],
      }
    }],
    exclude: /node_modules/,
  },
  {
    test: /.woff$/,
    use: [ 'url-loader' ],
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?sourceMap',
    }),
  }
];

module.exports = webpackSharedRules