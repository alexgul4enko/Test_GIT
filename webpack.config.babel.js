import './init-env'
import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import webpack from 'webpack'
import {
  addPlugins,
  createConfig,
  devServer,
  env,
  entryPoint,
  resolve,
  setEnv,
  setOutput,
  sourceMaps,
  when,
  customConfig,
  babel,
  uglify,
} from 'webpack-blocks'

import {
  react,
  styles,
  spa,
  assets,
  proxy,
  sentry,
  i18n,
} from './presets'


module.exports = createConfig([
  entryPoint('index.js'),
  setOutput(path.resolve(`${process.env.OUTPUT_PATH}/[name].js`)),
  resolve({
    modules: [
      path.resolve(`${process.env.SOURCES_PATH}/app`),
      'node_modules',
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@img': path.resolve(`${process.env.SOURCES_PATH}/img`),
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.sass', '.scss'],
  }),
  setEnv([
    'API_URL', 'AUTH_HEADER', 'MAIN_HOST', 'BACKEND_URL',
    'CACHE_STATE_KEYS', 'STORAGE_KEY', 'SENTRY_DSN', 'SENTRY_ENVIRONMENT', 'CACHE_STATE_PERSIST_KEYS', 'LIMIT',
  ]),
  customConfig({
    optimization: {
      splitChunks: {
        chunks: 'async',
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
  }),
  env('development', [
    devServer({
      port: process.env.DEV_SERVER_PORT || 3000,
      stats: 'minimal',
      host: process.env.DEV_SERVER_HOST,
      allowedHosts: [
        '.localhost',
        `.${process.env.MAIN_HOST}`,
      ],
      hot: true,
    }),
    sourceMaps(),
  ]),
  addPlugins([
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: process.env.APP_NAME,
    }),
  ]),
  env('production', [
    uglify(),
    addPlugins([new webpack.LoaderOptionsPlugin({ minimize: true })]),
  ]),
  babel(),
  react(),
  styles(),
  assets(),
  i18n(),
])
