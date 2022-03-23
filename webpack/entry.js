'use strict';

// path
var path = require('path');

// entry path
var loginPath = path.resolve(__dirname, '../src/views/login-view.js');
var indexPath = path.resolve(__dirname, '../src/views/index-view.js');

// entry
module.exports = {
  login: loginPath,
  index: indexPath
};