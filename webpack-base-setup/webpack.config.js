const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extracts CSS into separate files (but not equals to scope according to JS modules)

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader', // teach webpack to read js modules
        test: /\.js$/ //format in regular expression
      },
      {
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        test: /\.css$/
      },
      {
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ],
        test: /\.(jpe?g|png|gif|svg)$/,
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};

module.exports = config;