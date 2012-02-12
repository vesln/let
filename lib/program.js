/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT Licesnse.
 */

/**
 * Dependencies.
 */
var path = require('path');

/**
 * `Program` constructor.
 *
 * @param {String} Path to file.
 */
function Program(file) {
  this._file = path.basename(file);
  this._ext = path.extname(this._file);
  this._full = file;
};

/**
 * File getter.
 *
 * @returns {String} The name of the file.
 * @api public
 */
Program.prototype.file = function() {
  return this._file;
};

/**
 * Return the program exec.
 *
 * @returns {String} Node or coffee.
 * @api public
 */
Program.prototype.exec = function() {
  return this._ext === '.js' ? 'node' : 'coffee';
};

/**
 * Return the program path.
 *
 * @returns {String}
 * @api public
 */
Program.prototype.path = function() {
  return this._full;
};

/**
 * Checks if program exists.
 *
 * @returns {Boolean}
 * @api public
 */
Program.prototype.exists = function() {
  return path.existsSync(this._full);
};

/**
 * Expose `Program`.
 */
module.exports = Program;
