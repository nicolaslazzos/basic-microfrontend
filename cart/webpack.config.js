const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: { port: 8082 },
  plugins: [
    new ModuleFederationPlugin({ name: 'cart', filename: 'remoteEntry.js', exposes: { './Cart': './src/bootstrap' }, shared: ['@faker-js/faker'] }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};