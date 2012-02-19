/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var spawn = require('child_process').spawn;
var Program = require('./program');

/**
 * `Runner` constructor.
 */
function Runner() {};

/**
 * `Runner` inherits from `EventEmitter`.
 */
util.inherits(Runner, EventEmitter);

/**
 * Run the given program.
 *
 * @param {Object} Program, instanceof Program.
 * @api public
 */
Runner.prototype.run = function(program) {
  var self = this;

  // Check if program is an instanceof Program.
  if (!(program instanceof Program)) { 
    throw new Error('Provide valid Program.');
  }

  // Check if the program exists.
  if (!program.exists()) {
    throw new Error('Invalid program.');
  }

  var child = this.child = spawn(program.exec(), [program.path()]);

  child.stdout.on('data', function(data) {
    self.emit('out', data);
  });

  child.stderr.on('data', function(data) {
    self.emit('error', data);
  });

  child.on('exit', function(code, signal) {
    self.emit('end', code, signal);
  });
};

/**
 * Send kill signal to the spawned process.
 *
 * @returns {Object} `this`.
 * @api public
 */
Runner.prototype.kill = function() {
	this.child.kill();
	return this;
};

/**
 * Expose `Runner`.
 */
module.exports = Runner;
