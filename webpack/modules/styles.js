// const env = require('postcss-preset-env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const cssnano = require('cssnano')

const loadCss = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader:  'css-loader',
  options: {
    modules: {
      localIdentName: '[path][name]__[local]--[hash:base64:5]', // generated style classes
    },
    sourceMap,
  },
})

// const loadPostcss = (
//   { sourceMap = false, minify = false } = { sourceMap: false, minify: false },
// ) => {
//   const plugins = [
//     env({
//       stage: 0, // default: stage 2
//       features: {
//         'custom-media-queries': {
//           importFrom: [
//             {
//               customMedia: {
//                 '--phonePortrait':
//                   '(width <= 414px)',
//                 '--phoneLandscape':
//                   '(width >= 414px) and (width <= 667)',
//                 '--tabletPortrait':
//                   '(width >= 668px and (width <= 768px))',
//                 '--tabletLandscape':
//                   '(width >= 769px and (width <= 1024px))',
//                 '--desktopS':
//                   '(width >= 1025px and (width <= 1366px))',
//                 '--desktopM':
//                   '(width >= 1367px and (width <= 1680px))',
//                 '--desktopL':
//                   '(width >= 1681px and (width <= 1920px))',
//                 '--desktopXL':
//                   '(width >= 1921px)',
//               },
//             },
//           ],
//         },
//       },
//     }),
//   ]
//
//   if (minify) {
//     plugins.push(cssnano);
//   }
//
//   return {
//     loader:  'postcss-loader',
//     options: {
//       postcssOptions: {
//         plugins,
//       },
//       sourceMap,
//     }
//   }
// }

const loadSass = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: 'sass-loader',
  options: {
    sourceMap,
  },
})

exports.loadDevStyles = () => ({
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          'style-loader',
          loadCss({ sourceMap: true }),
          // loadPostcss({ sourceMap: true, minify: false }),
          loadSass({ sourceMap: true }),
        ],
      },
    ],
  },
})

exports.loadProdStyles = () => ({
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          loadCss({ sourceMap: false }),
          // loadPostcss({ sourceMap: false, minify: true }),
          loadSass({ sourceMap: false }),
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:      'css/[name].[contenthash:5].[id].css',
      chunkFilename: 'css/[name].[contenthash:5].[id].css',
    })
  ]
})
