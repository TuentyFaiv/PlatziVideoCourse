const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/[name].css")
  ];

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], { root: __dirname })
    )
  }

  return {
    mode: 'production',
    entry: {
      app: path.resolve(__dirname, 'src/pages/containers/app.js')
      // redux: path.resolve(__dirname, 'src/entries/redux.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ssr/[name].js',
      // publicPath: path.resolve(__dirname, ' dist') + "/",
      publicPath: "/",
      chunkFilename: 'js/[id].[chunkhash].js',
      libraryTarget: 'commonjs2'
    },
    devServer: {
      port: 9000
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: 'css-loader'
          })
        },
        {
          test: /\.(png|jpg|ico|svg|eot|ttf|woff)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000000000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]'
            }
          }
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJSPlugin(),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins
  }
};