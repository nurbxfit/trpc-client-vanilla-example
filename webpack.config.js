const path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // our script will be bundled into this folder, we need to import in our index.html
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // path to our static file (index.html) if u put in dist, then change public to dist
    },
    port: 8080, // Port to run our dev server
    open: true, // automatically open the default browser when the server starts
  }
};