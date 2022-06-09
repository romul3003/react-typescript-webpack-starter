const HtmlWebpackPlugin = require('html-webpack-plugin')

const { STATIC_DIRECTORY } = require('../constants')


exports.connectHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: `${STATIC_DIRECTORY}/template.html`,
      title: 'React typescript webpack starter! 🚀 ',
      favicon: `${STATIC_DIRECTORY}/favicon/favicon.ico`,
    }),
  ]
})

exports.loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|webp|ico|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
})

exports.loadSvg = () => ({
  module: {
    rules: [
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
    ],
  },
})
