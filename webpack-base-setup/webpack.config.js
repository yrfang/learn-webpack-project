const path = require('path');
// Webpack 5: extracts CSS into separate files (but not equals to scope according to JS modules)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/',
    assetModuleFilename: 'images/[hash][ext][query]'
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
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: { limit: 40000 }
        //   },
        //   'image-webpack-loader'
        // ],
        // remove url-loader, use webpack 5 'Asset Modules' instead
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 6 * 1024 // 6kb
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};

module.exports = config;