const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./app/js/app.js"
  },
  mode: "development",
 resolve: {
   alias: {
     vue: "vue/dist/vue.js"
   }
  },
  module: {
    rules: [
       {
         test: /\.vue$/,
         use: [ "vue-loader" ]
       },
       {
         test: /\.js$/,
         loader: "babel-loader",
         exclude: /node_modules/
       },
       {
         test: /\.css$/,
         loader: [ "style-loader", "css-loader" ]
       },
       {
         test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
         loader: [ "file-loader?name=app/image/[name].[ext]" ]
       },
       {
         test: /manifest\.json$/,
         loader: "w3c-manifest-loader",
         type: "javascript/auto",
         options: {
           name: "[name].[ext]",
           icon: "app/image/icons/[name].[ext]",
           legacyAppleSupport: true
         }
       }
     ]
  },
  devServer: {
   contentBase: "./build",
   port: 4200
 },
 output: {
   filename: "assets/js/[name].bundle.js",
   chunkFilename: "assets/js/[name]/[name].bundle.js",
   path: path.resolve(__dirname, "build"),
   publicPath: ""
 },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ]
 };
