var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';

var ENTRY_POINTS = [
  './src/app'
];

var JS_LOADERS = [
  'babel?cacheDirectory&presets[]=react,presets[]=es2015,presets[]=stage-0'
];

var PLUGINS = [];
if (IS_PRODUCTION) {
  // Uglify in production.
  PLUGINS.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
          except: ['$super', '$', 'exports', 'require']
      },
      sourcemap: false
    })
  );
}

module.exports = {
  devtool: 'source-map',
  entry: ENTRY_POINTS,
  output: {
    // Bundle will be served at /bundle.js locally.
    filename: 'bundle.js',
    // Bundle will be built at ./src/media/js.
    path: path.join(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    noParse: [
      /node_modules\/aframe\/dist\/aframe.js/,
    ],
    loaders: [{
      test: /\.(jpg|png|jpeg)$/,
      loader: 'file-loader',
    },{
      // JS.
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      test: /\.js$/,
      query: {
        presets: [
          'babel-preset-react',
          'babel-preset-es2015',
          'babel-preset-stage-0'
        ]
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    }],
  },
  plugins: PLUGINS,
  resolve: {
    modules: ['src/components', 'node_modules'],
  },
};
