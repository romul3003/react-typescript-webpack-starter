const {
  defineEnvVariables,
  provideGlobals,
  setHotReload,
} = require('./utiles')
const { connectHtml } = require('./assets')
const { loadDevCss } = require('./styles')

module.exports = {
  defineEnvVariables,
  provideGlobals,
  setHotReload,
  connectHtml,
  loadDevCss,
}
