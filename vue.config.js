const webpack = require("webpack")

module.exports = {
  publicPath: './',
  lintOnSave: false, // 禁用eslint
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
