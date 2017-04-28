var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

var reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
}

module.exports = {
  entry: {
    'react-teller': './src/index.js',
    'react-teller.min': './src/index.js'
  },

  externals: {
    'react': reactExternal,
    'react-dom': reactDOMExternal
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: process.cwd() + '/dist',
    publicPath: './',
    libraryTarget: 'umd',
    library: 'ReactTeller'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.min\.js$/,
			threshold: 10240,
			minRatio: 0.8
		}),
    new ExtractTextPlugin("react-teller.css"),
  ],

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css?$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract({
        fallback: 'style-loader', use: 'css-loader!postcss-loader'}) },
      { test: /\.(eot|svg|ttf|woff|woff2)?$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
