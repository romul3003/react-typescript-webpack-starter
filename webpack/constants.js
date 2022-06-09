const { resolve } = require('path')
const { path: PROJECT_ROOT } = require('app-root-path')

// Network
exports.HOST = 'localhost'
exports.PORT = 3030

// Paths
exports.PROJECT_ROOT = PROJECT_ROOT
exports.SOURCE_DIRECTORY = resolve(PROJECT_ROOT, './src')
exports.BUILD_DIRECTORY = resolve(PROJECT_ROOT, './build')
exports.STATIC_DIRECTORY = resolve(PROJECT_ROOT, './static')
