const { DefinePlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { PORT, HOST } = require('./constants')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: PORT,
    host: HOST,
    historyApiFallback: true,
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas')
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
