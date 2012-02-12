/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT Licesnse.
 */

/**
 * Dependencies.
 */
var EventEmitter = require('events').EventEmitter;

/**
 * Run command.
 *
 * @returns {Object} Runner.
 */
function run(cmd) {

  /**
   * Runner.
   *
   * @type {Object}
   */
  var runner = new EventEmitter;

  return runner;
};

/**
 * Expost `run`.
 */
module.exports = run;
