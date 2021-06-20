const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  chainWebpack: config => {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        languages: ['json', 'javascript', 'typescript', 'html', 'xml', 'css', 'python']
      }
    ])
  }
}
