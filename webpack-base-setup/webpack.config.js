const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader', // teach webpack to read js modules
        test: /\.js$/ //format in regular expression
      }
    ]
  }
};

module.exports = config;