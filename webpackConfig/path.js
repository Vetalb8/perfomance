const path = require('path');

const PATHS = {
  app: path.resolve(__dirname, '../src/index.js'),
  appHtml: path.resolve(__dirname, '../public/index.html'),
  public: path.resolve(__dirname, '../public'),
  build: path.resolve(__dirname, '../dist'),
  project: path.resolve(__dirname, '../src'),
};


module.exports = PATHS;
