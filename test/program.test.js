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
var path = require('path');

/**
 * Context.
 */
var Program = require('../lib/program');

describe('Program', function() {
  describe('file', function() {
    it('should return the file name', function() {
      var program = new Program('lib/test.js');
      program.file().should.eql('test.js');
    });
  });

  describe('exec', function() {
    it('should return the program exec', function() {
      var program = new Program('lib/test.js');
      program.exec().should.eql('node');

      var program = new Program('lib/test.coffee');
      program.exec().should.eql('coffee');
    });
  });

  describe('path', function() {
    it('should return the full path of the program', function() {
      var program = new Program('/lib/foo.js');
      program.path().should.eql('/lib/foo.js');
    });
  });

  describe('exists', function() {
    it('should return app existance', function() {
      var program = new Program('/tmp/foo-bar-baz-bar.js');
      program.exists().should.be.false;

      var program = new Program(path.join(__dirname, 'app.test.js'));
      program.exists().should.be.true;

      var program = new Program('test/support/whiny.js');
      program.exists().should.be.true;

      var program = new Program('test/support/whiny');
      program.exists().should.be.true;
    });
  });
});

