const path = require("path"); //bu bize c++ gelir, npm-den yuklemeye ehtiyac yoxdur.
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash:20].js"
  },

  devServer: {
    port: 3000
  },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader,'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
          MiniCssExtractPlugin.loader,
         'css-loader',
          'sass-loader',
        ],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ],
    },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html"
    }),

    new HtmlWebpackPlugin({
      template: "./src/second.html",
      inject: true,
      chunks: ["index"],
      filename: "second.html"
    })
  ]
};
