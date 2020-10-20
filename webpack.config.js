const path = require('path');

module.exports = {
  //Gives console errors pointing to source files intead of bundles
  devtool: 'inline-source-map',

  //Development does the source mapping and production comments it out
  mode: 'development',

  //Where to start the code bundle
  entry: {
    main: './src/App.js'
  },

  //Show what directory to serve from
  devServer: {
  contentBase: './dist',
  },

  //name and path of the resulting bundle
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  //for React
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
