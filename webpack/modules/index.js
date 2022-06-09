const {
  defineEnvVariables,
  provideGlobals,
  setHotReload,
  connectBuildProgressIndicator,
  connectFriendlyErrors,
  connectBundleAnalyzer,
} = require('./utiles')
const { loadJavaScript } = require('./javascript')
const {
  connectHtml,
  loadImages,
  loadSvg,
  loadFonts,
} = require('./assets')
const { loadDevStyles, loadProdStyles } = require('./styles')

module.exports = {
  defineEnvVariables,
  provideGlobals,
  setHotReload,
  loadJavaScript,
  connectHtml,
  loadDevStyles,
  loadImages,
  loadSvg,
  loadFonts,
  connectBuildProgressIndicator,
  connectFriendlyErrors,
  connectBundleAnalyzer,
  loadProdStyles,
}
