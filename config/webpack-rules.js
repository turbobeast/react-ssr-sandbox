const webpackSharedRules = [
  {
    test: /\.js$/,
    use: 'eslint-loader',
    enforce: 'pre',
    exclude: /node_modules/,
  },
  {
    test: /\.js$/,
    use: ['babel-loader'],
    exclude: /node_modules/,
  },
  {
    test: /.woff$/,
    use: [ 'url-loader' ],
  },
];

module.exports = webpackSharedRules