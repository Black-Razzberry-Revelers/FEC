const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.config');

module.exports = merge(
  common,
  {
    mode: 'production',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /.s?css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin({
        test: /\.foo\.css$/i,
      })],
    },
    plugins: [new MiniCssExtractPlugin()],
  },
);
