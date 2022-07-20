const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
};
