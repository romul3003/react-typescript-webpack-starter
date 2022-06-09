const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'production',
  devtool: false,
  plugins: [
    new DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution')
    }),
  ],
}
