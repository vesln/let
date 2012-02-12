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
var EventEmitter = require('events').EventEmitter;

/**
 * Context.
 */
var run = require('../../lib/commands/run');

describe('run', function() {
  it('should return an event emitter instance', function() {
    run().should.be.an.instanceof(EventEmitter);
  });
});

