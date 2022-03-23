var path = require('path');

var distPath = path.resolve(__dirname, '../../electron-app/renderer-login');

/**
 * qiao.webpack.js
 */
module.exports = {
  devServer: {
    static: distPath,
  },
  entry: {
    app: path.resolve(__dirname, '../src/login-container.js'),
  },
  output: {
    filename  : '[name].bundle.js',
    path      : distPath,
    clean     : true,
  },
  plugins: [
    {
      type    : 'html',
      inject  : 'body',
      template: path.resolve(__dirname, './template.html')
    }
  ],
  module: {
    rules: [],
  },
};