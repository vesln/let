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
var flatiron = require('flatiron');

/**
 * Context.
 */
var app = require('../lib/app');

describe('app', function() {
  it('should be a flatiron app', function() {
    app.should.eql(flatiron.app);
  });

  it('should use the cli plugin', function() {
    app.plugins.cli.should.be.ok
  });
});
