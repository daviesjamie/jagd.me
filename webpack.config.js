const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "jagd.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
