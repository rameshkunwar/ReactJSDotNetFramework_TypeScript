const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const { webpack } = require("./node_modules/webpack/types");

//Use this if your domain name has path. Example, www.example.com/myapp
//This will inject correct path of scripts in _Layout.cshtml via _Layout_Template.cshtml otherwise it will omit /myapp

//const ASSET_PATH = process.env.ASSET_PATH || '/myapp/wwwroot/dist/';
const isDevelopment = process.env.NODE_ENV !== "production";
module.exports = {
  mode: isDevelopment ? "development" : "production",
  //this can be omitted in webpack 5 as it's the default
  entry: {
    app: "./src/index.tsx",
  },

  output: {
    // publicPath: ASSET_PATH,
    filename: "[name].[contenthash].bundle.js",
    //this can be omitted in webpack 5 as it's the default
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
      new CleanWebpackPlugin(),     
    new HtmlWebpackPlugin({
      title: "Production",
      filename: "../../Views/Shared/_Layout.cshtml",
      template: "../Views/Shared/_Template.cshtml",
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        use: {
          loader: 'ts-loader',
        },
        test: /\.tsx?$/,
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        exclude: /node_modules/,
      },
      {
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        test: /\.css$/,
      },
      {
        test: /\.svg$/,
        exclude: path.resolve(__dirname, "node_modules", "font-awesome"),
        use: ["babel-loader", "react-svg-loader"],
      },
    ],
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
