const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.config');
const path = require('path');

module.exports = merge(
  common,
  {
    entry: path.join(__dirname, '/client/dist/style.css'),
    mode: 'production',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /.s?css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({
      filename: '[name].css',
    })],
    optimization: {
      minimizer: [new CssMinimizerPlugin({
        test: /\.foo\.css$/i,
      })],
      minimize: true,
    },
  },
);
