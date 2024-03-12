const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  target: "electron-main", // Set target to electron-main
  externals: [nodeExternals()], // Exclude Node.js built-in modules
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
