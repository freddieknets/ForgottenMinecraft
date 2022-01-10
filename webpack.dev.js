const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 7024,
    hot: true,
    allowedHosts: [
      '.frederix.eu'
    ],
    client: {
      overlay: true,
      progress: true,
      reconnect: true,
      webSocketURL: 'auto://0.0.0.0:0/ws',
    },
  },
});
