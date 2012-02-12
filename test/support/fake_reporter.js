/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT Licesnse.
 */

/**
 * Returns fake reporter object.
 *
 * @returns {Object}
 */
module.exports = function() {
  return {
    info: function() {},
    error: function() {}
  };
};
