const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  target: 'web',
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
             ["@babel/preset-react", {"runtime": "automatic"}]
            ]
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
             ["@babel/preset-react", {"runtime": "automatic"}]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use:{
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
        {
            loader: "file-loader",
            options: {
                name: '[name].[ext]',
                outputPath: 'static/',
                useRelativePath: true,
            }
        }
      ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Minecraft admin by FreHar",
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  output: {
    filename: 'bundle.js',
  },
};
