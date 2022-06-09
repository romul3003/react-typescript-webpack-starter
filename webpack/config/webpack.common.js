const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  BUILD_DIRECTORY,
  SOURCE_DIRECTORY,
  STATIC_DIRECTORY,
} = require('../constants')

module.exports = {
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
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: `${STATIC_DIRECTORY}/template.html`,
      title: 'React typescript webpack starter! 🚀 ',
      favicon: `${STATIC_DIRECTORY}/favicon/favicon.ico`,
    })
  ],
}
