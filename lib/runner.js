/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT Licesnse.
 */

/**
 * Dependencies.
 */
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Program = require('./program');

/**
 * `Runner` constructor.
 *
 * @param {Object} Reporter.
 */
function Runner(reporter) {
  this.reporter(reporter);
};

/**
 * `Runner` inherits from `EventEmitter`.
 */
util.inherits(Runner, EventEmitter);

/**
 * Reporter accessor.
 *
 * @param {Object} Reporter. [optional]
 * @returns {Object} `this` if used as setter or the reporter.
 * @api public
 */
Runner.prototype.reporter = function(reporter) {
  if (arguments.length === 0) return this._reporter;
  this._reporter = reporter;
  return this;
};

/**
 * Run the given program.
 *
 * @param {Object} Program, instanceof Program.
 * @api public
 */
Runner.prototype.run = function(program) {
  // Check if program is an instanceof Program.
  if (!(program instanceof Program)) { 
    throw new Error('Provide valid Program.');
  }

  // Check if the program exists.
  if (!program.exists()) {
    throw new Error('Invalid program.');
  }
};

/**
 * Expose `Runner`.
 */
module.exports = Runner;
