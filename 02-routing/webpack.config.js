const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { test:  /\.(hbs|handlebars)$/, 
        loader: "handlebars-loader",
        options: {
            partialDirs: [path.join(__dirname, './src/components')],
        }, 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pokemon App',
      inject: true,
      template: './src/index.hbs',
      minify: {
          html5: true,
          collapseWhitespace: true,
          caseSensitive: true,
          removeComments: true,
          removeEmptyElements: true
      }
    })
  ]
};
