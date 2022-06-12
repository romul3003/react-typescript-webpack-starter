const { merge } = require('webpack-merge')

const {
  BUILD_DIRECTORY,
  SOURCE_DIRECTORY,
} = require('../constants')

const modules = require('../modules')

module.exports = merge(
  {
    entry: {
      index: SOURCE_DIRECTORY,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'js/[name].[contenthash:5].[id].js', // entry point bundle name
      chunkFilename: 'js/[name].[chunkhash:5].[id].js', // chunk name
      path: BUILD_DIRECTORY,
      clean: true,
      assetModuleFilename: 'assets/[name].[hash:5].[ext]', // folder for assets
      publicPath: '/',
    },
  },
  modules.defineEnvVariables(),
  modules.provideGlobals(),
  modules.loadJavaScript(),
  modules.connectHtml(),
  modules.loadImages(),
  modules.loadSvg(),
  modules.loadFonts(),
)
