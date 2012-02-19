/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Runner = require('../runner');
var Program = require('../program');
var Reporter = require('../reporter');
var app = require('../app');

/**
 * `Command` constructor.
 *
 * @param {String} File.
 * @param {Number} Delay in ms.
 */
function Command(file, delay) {
  this.file = file;
  this.delay = delay;
  this.runner = new Runner;
  this.program = new Program(file);
  this.reporter = new Reporter;
};

/**
 * Run the show.
 *
 * @param {Function} Callback.
 * @api public
 */
Command.prototype.run = function(cb) {
  var self = this;

  this.runner.on('out', function(txt) {
    self.reporter.info(txt);
  });

  this.runner.on('error', function(txt) {
    self.reporter.error(txt);
  });

  this.runner.run(this.program);

  this.timeout = setTimeout(function() {
    self.runner.kill();
    self.reporter.info('Killing the process...');
  }, this.delay);

  if (cb) cb();
};

/**
 * Run command.
 *
 * @param {String} File.
 */
function run(file) {
  var delay = app.argv.timeout || 1000;
  var cmd = new Command(file, delay);
  cmd.run();
};

/**
 * Expose `run`.
 */
module.exports = run;

/**
 * Expose `Command`.
 */
module.exports.Command = Command;
