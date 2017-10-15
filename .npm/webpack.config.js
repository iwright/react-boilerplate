const debug = process.env.NODE_ENV !== 'prod';
const path = require('path');
const webpack = require('webpack');

// Project settings.
const BUILD_DIR = path.resolve('../docroot/js');
const APP_DIR = path.resolve('./src/js');

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : false,
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: "app.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: [
              'react-html-attrs'
            ]
          }
        }
      }
    ]
  },
  // Remove any duplicate code and uglify when compiling for production.
  // npm run prod
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
