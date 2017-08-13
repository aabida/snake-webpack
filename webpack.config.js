const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
 devServer: {
     contentBase: './dist'
  },
  plugins: [
     new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
