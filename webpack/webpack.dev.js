const { DefinePlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas')
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
