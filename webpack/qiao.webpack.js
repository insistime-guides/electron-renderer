'use strict';

// alias
var alias = require('./alias.js');

// entry
var entry = require('./entry.js');

// output
var output = require('./output.js');

// plugins
var plugins = require('./plugins.js');

/**
 * qiao.webpack.js
 */
module.exports = {
  resolve: {
    alias: alias,
  },
  entry: entry,
  output: output,
  plugins: plugins
};