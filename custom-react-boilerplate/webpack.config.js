const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const myEslintOptions = {
  extensions: ["js", "jsx", "ts"],
  exclude: ["node_modules"],
};

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html"),
    }),
    new ESLintPlugin(myEslintOptions),
  ],
  // devtool: isProduction ? 'source-map' : 'inline-source-map',
};
