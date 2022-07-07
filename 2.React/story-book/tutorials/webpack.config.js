const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    hot: true,
    open: true, // browser auto open
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin(),
  ],
  stats: "errors-only",
};
