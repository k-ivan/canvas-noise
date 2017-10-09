var webpack = require('webpack');

module.exports = {
  entry: './src/noise.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'noise.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}