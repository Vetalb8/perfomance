const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const PATHS = require('./path');


module.exports = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        template: PATHS.appHtml
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new WebpackChunkHash(),
    ],
  },
  parts.loadFonts({
    options: {
      name: 'static/[name].[hash:8].[ext]',
    },
  }),
]);
