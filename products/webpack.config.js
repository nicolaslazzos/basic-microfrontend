const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: { port: 8081 },
  plugins: [
    new ModuleFederationPlugin({ name: 'products', filename: 'remoteEntry.js', exposes: { './ProductsIndex': './src/index' }, shared: ['@faker-js/faker'] }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};