
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
    "wordswipe": './src/js/main.js'
  },

  output: {

    path: path.join(__dirname, 'dist'),
    filename: './js/[name].build.js'
  },

  module: {

    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            exclude: /node_modules/,
            css: ExtractTextPlugin.extract("css-loader"),
            less: ExtractTextPlugin.extract("css-loader!less-loader")
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new ExtractTextPlugin("css/[name].build.css"),
    new CopyWebpackPlugin([
      { from: './vendor', to: 'vendor' },
      { from: './static', to: 'static' },
      { from: './*.html', to: './' }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
