const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: ['/node_modules/', /\.test\.tsx?$/]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // modules: [
      // path.resolve('./src'),
      // path.resolve('./node_modules')
    // ]
    alias: {
      '@src': path.resolve('./src')
    }

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, '/js/'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    publicPath: path.resolve(__dirname, '/js/')
  }
}
