/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var flatiron = require('flatiron');
var path = require('path');

/**
 * Application.
 *
 * @type {Object}
 */
var app = module.exports = flatiron.app;

var usage = [
  '',
  'let - Force timeouts.',
  '',
  'Usage:',
  '  let-node run <path/to/file.js> --timeout <time-in-ms>',
  '',
  ' Veselin Todorov <hi@vesln.com>',
  ''
].join('\n');

// Use the cli plugin.
app.use(flatiron.plugins.cli, {
  usage: usage,
  source: path.join(__dirname, 'commands')
});
