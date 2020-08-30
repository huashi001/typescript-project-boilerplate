const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlPlugins = ['index'].map(item => {
  return new htmlWebpackPlugin({
    template: `./demo/${item}.html`,
    filename: `${item}.html`,
    chunks: [item]
  })
})
module.exports = {
  entry: {
    index: './demo/index.ts',
  },
  output: {
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  plugins: [
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['../dist']
    // }),
    ...htmlPlugins
  ]
}