const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: "./static/js/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpeg)$/,
        loader: "file-loader",

        options: {
          name: "[name].[ext]",
          outputPath: "../../static/dist",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.md$/i,
        loader: "raw-loader",
      },
    ],
  },
  output: {
    path: __dirname + "/static/dist",
    filename: "[name].bundle.js",
  },
};
