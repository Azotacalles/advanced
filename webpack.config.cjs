const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,

    assetModuleFilename: 'assets/[name].[contenthash][ext]',
  },

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,

        use: {
          loader: 'babel-loader',
        },
      },

      // CSS
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      // HTML
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      // Изображения
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
      },

      // Шрифты
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],

  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },

  devtool: 'source-map',
};