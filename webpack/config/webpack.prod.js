const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const common = require('./webpack.common.js')
const modules = require('../modules')

module.exports = merge(common,
  {
    mode: 'production',
    devtool: false,
  },
  modules.connectBuildProgressIndicator(),
  modules.loadProdStyles(),
  modules.connectBundleAnalyzer()
)
