/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Support.
 */
var jack = require('jack');
var should = require('chai').should();
var winston = require('winston');

/**
 * Context.
 */
var Reporter = require('../lib/reporter');

describe('Reporter', function() {
  describe('info', function() {
    it('should print info message', function() {
      winston.mock('info').should_be.called.once.with.arguments('foo');
      var reporter = new Reporter;
      reporter.info('foo');
      winston.info.reset();
    });
  });

  describe('error', function() {
    it('should print error message', function() {
      winston.mock('error').should_be.called.once.with.arguments('foo');
      var reporter = new Reporter;
      reporter.error('foo');
      winston.error.reset();
    });
  });
});

