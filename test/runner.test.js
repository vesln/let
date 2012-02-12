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
var expect = require('chai').expect;
var Program = require('../lib/program');
var EventEmitter = require('events').EventEmitter;

/**
 * Context.
 */
var Runner = require('../lib/runner');

describe('Runner', function() {
  it('should inherit from EventEmitter', function() {
    var runner = new Runner;
    runner.should.be.an.instanceof(EventEmitter);
  });

  describe('run', function() {
    it('should throw an error if no program is supplied', function() {
      var runner = new Runner;
      expect(function() {
        runner.run();
      }).to.throw();
    });

    it('should throw an error if the program does not exists', function() {
      var program = new Program('foo/bar');
      var runner = new Runner(program);
      expect(function() {
        runner.run(program);
      }).to.throw();
    });
  });

  describe('reporter', function() {
    it('should be a reporter accessor', function() {
      var runner = new Runner;
      runner.reporter({}).reporter().should.eql({});
    });
  });

  describe('constructor', function() {
    it('should set supplied reporter', function() {
      var runner = new Runner({});
      runner.reporter().should.eql({});
    });
  });
});
