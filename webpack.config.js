const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");




module.exports = {
  entry: "./src/assets/js/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "js/main.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      }, 
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Sabka Bazaar",
      filename:"index.html",
      template: path.resolve(__dirname, "./src/index.hbs"),
      // template: "src/index.hbs",
      discription:" index page..",
      minify:false
    
    }),
    new HtmlWebpackPlugin({
      title: "Sabka Bazaar about",
      filename:"about.html",
      template: path.resolve(__dirname, "./src/about.hbs"),
      // template: "src/about.hbs",
      discription:"all about page..",
      minify:false
    
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({

      filename: "css/main.css",
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "./static"),
         to: "static" },
      
      ],
    }),
  ],

  devServer: {
    historyApiFallback: true,
    static: "./",
    hot: true,
  },
  devtool: "inline-source-map",
};
