const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
    	 template: './src/index.html',
      filename: './index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
	      test: /\.(?:js|mjs|cjs)$/,
	      exclude: /node_modules/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: [
	            ['@babel/preset-env', { targets: "defaults" }]
	          ]
	        }
	      }
	    },
	    {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};