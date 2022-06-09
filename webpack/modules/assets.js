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
