const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution')
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // to use analyser - needs to be 'server'
      openAnalyzer:  false, // to open analyzer in default browser needs to be true
      generateStatsFile: true,
    }),
  ],
})
