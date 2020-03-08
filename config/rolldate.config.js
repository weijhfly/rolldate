let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let webpack = require('webpack');
let banner = require('./banner').info;

module.exports = {
  entry:'./src/index.js',
  output: {
    filename: 'rolldate.min.js',
    path: path.resolve('dist'),
    library      : 'Rolldate',
    // libraryTarget: 'umd',
    libraryExport: "default",
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    //host: '0.0.0.0',
    port: 9091,
    open: false,
    hot: false
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules|bscroll/,
        loader:'babel-loader',
        options:{
          presets:["es2015"]
        }
      },
      {
        test:/\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: false,
    }),
    //new ExtractTextWebpackPlugin('css/rolldate.css'),
    //new webpack.BannerPlugin(banner)
  ],
  optimization: {
    minimize: false
  }
}
