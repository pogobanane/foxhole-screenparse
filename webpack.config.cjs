const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = [
  {
    target: 'web',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'browser.js',
      library: {
        type: 'umd',
        name: 'sp',
      },
    },
    plugins: [
      new NodePolyfillPlugin({
        excludeAliases: ['fs']
      })
    ],
    resolve: {
      fallback: {
        fs: false,
      },
    },
    devtool: "inline-source-map",
  },
  {
    target: 'node',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      library: {
        type: 'umd',
        name: 'sp',
      },
    },
    devtool: "inline-source-map",
  }
];
