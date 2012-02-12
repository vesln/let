/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT Licesnse.
 */

/**
 * Support.
 */
var jack = require('jack');
var should = require('chai').should();
var flatiron = require('flatiron');

console.log(flatiron);
/**
 * Context.
 */
var app = require('../lib/app.js');

describe('app', function() {
  it('should be a flatiron app', function() {
    app.should.eql(flatiron.app);
  });
});


