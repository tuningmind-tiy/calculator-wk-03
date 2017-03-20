module.exports = {
  entry: "./scripts/app.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  watch: true,
  devtool: "source-map",
}


