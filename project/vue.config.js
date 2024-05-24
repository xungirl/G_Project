const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.100.211.167:8502',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
})
