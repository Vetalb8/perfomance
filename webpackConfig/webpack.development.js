const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const webpack = require('webpack');
const PATHS = require('./path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';


module.exports = merge([
  {
    entry: [
      'react-hot-loader/patch',
      // activate HMR for React
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      'babel-polyfill',
      PATHS.app,
    ],
    output: {
      path: PATHS.build,
      publicPath: '/',
      filename: 'bundle.js',
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'server',
      //   analyzerHost: '127.0.0.1',
      //   analyzerPort: 5030,
      //   reportFilename: 'report.html',
      //   defaultSizes: 'parsed',
      //   openAnalyzer: true,
      // }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  },
  parts.lintJavaScript({
    include: PATHS.project,
    options: {
      emitWarning: true,
    }
  }),
  parts.lintSCSS({
    include: PATHS.project,
  }),
  parts.Babel({
    include: PATHS.project,
    options: {
      plugins: [
        'react-hot-loader/babel',
        'transform-decorators-legacy',
        'transform-class-properties'
      ],
      presets: ['env', 'stage-0', 'react']
    }
  }),
  parts.loadImages(),
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'development'
  ),
  parts.loadSCSS({
    include: PATHS.project
  }),
  parts.devServer({
    // Customize host/port here if needed
    host: HOST,
    port: PORT,
    overlay: {
      errors: true,
      warnings: true,
    }
  }),
  parts.npmInstall()
]);
