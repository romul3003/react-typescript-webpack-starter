const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')
const modules = require('../modules')

module.exports = merge(common,
  {
    mode: 'none',
    devtool: false,
  },
  modules.connectBuildProgressIndicator(),
  modules.loadProdStyles(),
  modules.optimizeBuild(),
  modules.connectBundleAnalyzer()
)
