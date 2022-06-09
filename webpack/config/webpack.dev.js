const { merge } = require('webpack-merge')
const openBrowser = require('react-dev-utils/openBrowser')

const modules = require('../modules')
const { PORT, HOST, BUILD_DIRECTORY } = require('../constants')
const common = require('./webpack.common.js')

module.exports = merge(common,
  {
    mode: 'development',
    devServer: {
      static: {
        directory: BUILD_DIRECTORY,
      },
      onListening: () => {
        openBrowser(`http://${HOST}:${PORT}`)
      },
      hot: true,
      // open: true,
      port: PORT,
      host: HOST,
      historyApiFallback: true,
      compress: true,
      client: {
        logging: 'none',
        overlay: true,
      },
    },
    devtool: 'eval-cheap-module-source-map',
  },
  modules.setHotReload(),
  modules.loadDevStyles(),
  modules.connectFriendlyErrors()
)
