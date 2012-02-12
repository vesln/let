/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var winston = require('winston');

/**
 * `Reporter` constructor.
 */
function Reporter() {

};

/**
 * Prints info message.
 *
 * @param {String} Message.
 * @api public
 */
Reporter.prototype.info = function() {
  winston.info.apply(winston, arguments);
};

/**
 * Prints error message.
 *
 * @param {String} Message.
 * @api public
 */
Reporter.prototype.error = function() {
  winston.error.apply(winston, arguments);
};

/**
 * Expose `Reporter`.
 */
module.exports = Reporter;
