const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';


module.exports = {
  //Gives console errors pointing to source files intead of bundles
  devtool: 'inline-source-map',

  //Development does the source mapping and production comments it out
  mode: isDevelopment ? 'development' : 'production',

  //Where to start the code bundle
  entry: {
    main: './src/App.js'
  },

  //Show what directory to serve from
  devServer: {
    contentBase: './dist',
    hot: true
  },

  //name and path of the resulting bundle
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  //for React and typescript
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          // ... other loaders
          {
            loader: require.resolve('babel-loader'),
            options: {
              // ... other options
              plugins: [
                // ... other plugins
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // ... other plugins
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean)
};
