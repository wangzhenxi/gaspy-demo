

module.exports = function() {

  return {
    middleware: [
    ],
    devServer: {
      proxy: {
        '/api': {
          target: 'https://blog.joshwong.cn',
          changeOrigin: true
        }
      }
    }
  }
}
