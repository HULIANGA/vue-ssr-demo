const path = require('path');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const base = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(base, {
  entry: path.resolve(__dirname, '../src/entry-client.js'),

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  
  plugins: [
    // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
    // 以便可以在之后正确注入异步 chunk。
    // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
    // optimize.CommonsChunkPlugin已经从webpack4里移除了
    // webpack4有默认配置自动分离代码
    // 需要自定义配置可以使用splitChunks，https://www.webpackjs.com/plugins/split-chunks-plugin/
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "manifest",
    //   minChunks: Infinity
    // }),

    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin(),

    // 复制html模板和icon
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/public/index.ssr.html'),
        },
        {
          from: path.resolve(__dirname, '../src/public/favicon.ico'),
        }
      ],
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    })
  ]
});