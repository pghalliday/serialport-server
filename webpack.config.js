module.exports = {
  entry: './src/client/index.js',
  output: {
    path: './src/static/js',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
