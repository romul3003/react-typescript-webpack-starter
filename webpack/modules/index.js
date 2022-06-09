const {
  defineEnvVariables,
  provideGlobals,
  setHotReload,
} = require('./utiles')
const { loadJavaScript } = require('./javascript')
const {
  connectHtml,
  loadImages,
  loadSvg,
  loadFonts,
} = require('./assets')
const { loadDevCss } = require('./styles')

module.exports = {
  defineEnvVariables,
  provideGlobals,
  setHotReload,
  loadJavaScript,
  connectHtml,
  loadDevCss,
  loadImages,
  loadSvg,
  loadFonts,
}
