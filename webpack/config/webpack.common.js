const { merge } = require('webpack-merge')

const {
  BUILD_DIRECTORY,
  SOURCE_DIRECTORY,
} = require('../constants')

const modules = require('../modules')

module.exports = merge({
    entry: {
      index: SOURCE_DIRECTORY,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      path: BUILD_DIRECTORY,
      filename: 'bundle.js',
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|webp|ico|gif)$/,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/i,
          type: 'asset',
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          // Overrides output.assetModuleFilename and works only with asset and asset/resource module types.
          generator: {
            filename: 'fonts/[name].[hash:5].[ext]',
          },
        },
      ],
    },
  },
  modules.defineEnvVariables(),
  modules.provideGlobals(),
  modules.loadJavaScript(),
  modules.connectHtml(),
)
