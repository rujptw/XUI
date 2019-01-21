'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const markdownRender = require('markdown-it')()

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['babel-polyfill', './examples/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.md'],
    alias: {
      '@': resolve('examples')

    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('examples'), resolve('packages'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.md$/,
      loader: 'vue-markdown-loader',
      options: {
        preventExtract: true,
        use: [
          [require('markdown-it-container'), 'demo', {

            validate: function(params) {
              return params.trim().match(/^demo\s+(.*)$/)
            },

            render: function(tokens, idx) {
              if (tokens[idx].nesting === 1) {
                // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                const demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
                const description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : ''
                const descriptionHTML = description ? markdownRender.render(description) : ''
                // 2.获取代码块内的html和js代码
                const content = tokens[idx + 1].content
                // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                return `<demo-block>
                    <div class="source" slot="source">${content}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`
              } else {
                return '</div></demo-block>\n'
              }
            }
          }]
        ]

      }
    },
    {
      test: /\.js$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [path.resolve(__dirname, 'src')], // 指定检查的目录
      options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
        formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
      }
    }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
