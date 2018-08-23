const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./frontend/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: __dirname + '/frontend/app.js',
  output: {
    filename: 'static/main.js'
  },
  module: {
    rules: [
      // loaders are loaded bottom up
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }          
        ]
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    contentBase: __dirname + '/frontend',
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
};