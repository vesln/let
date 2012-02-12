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

// Use the cli plugin.
app.use(flatiron.plugins.cli, {
  usage: 'let node-file.js --timeout 3000',
  source: path.join(__dirname, 'commands')
});
