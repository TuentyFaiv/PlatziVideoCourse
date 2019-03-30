const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, 'src/entries/app.js')
    // redux: path.resolve(__dirname, 'src/entries/redux.js')
  },
  devServer: {
    port: 9000
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devtool: 'eval-source-map',
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|ico|svg|eot|ttf|woff)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]'
          }
        }
      }
    ]
  }
}