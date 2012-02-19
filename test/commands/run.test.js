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
var Runner = require('../../lib/runner');
var Program = require('../../lib/program');
var Reporter = require('../../lib/reporter');

/**
 * Context.
 */
var run = require('../../lib/commands/run');
var Command = run.Command;

describe('Command', function() {
	describe('when constructed', function() {
		it('should setup dependencies', function() {
			var cmd = new Command('foo', 300);
			cmd.file.should.eql('foo');
			cmd.delay.should.eql(300);
			cmd.runner.should.be.an.instanceof(Runner);
			cmd.program.should.be.an.instanceof(Program);
			cmd.reporter.should.be.an.instanceof(Reporter);
			cmd.program.file().should.eql('foo');
		});
	});

	describe('when it is runned', function() {
		it('should subscribe to stdout and error', function(done) {
			var cmd = new Command('test/support/term.js', 300);
			var events = [];
			var i = 0;

			cmd.runner.mock('on').and.replace(function(event) {
				events.push(event);
				if (++i === 2) {
					events.should.eql(['out', 'error']);
					cmd.runner.on.reset();
					done();
				}
			});

			cmd.run();
		});

		it('should call runner.run with a program', function(done) {
			var cmd = new Command('test/support/term.js', 3000);
			cmd.runner.mock('run').it.should_be.called.once.with.arguments(cmd.program);
			cmd.run(function() {
				cmd.runner.run.reset();
				done();
			});
		});

		it('should call runner.run with a program', function(done) {
			var cmd = new Command('test/support/term.js', 3000);
			cmd.runner.mock('run').it.should_be.called.once.with.arguments(cmd.program);
			cmd.run(function() {
				cmd.runner.run.reset();
				done();
			});
		});

		it('should kill the child process after supplied amount of time', function(done) {
			var cmd = new Command('test/support/term.js', 500);
			cmd.runner.stub('run').and.replace(function() {});
			cmd.runner.mock('kill').and.replace(function() {
				done();	
			});
			cmd.run();
		});
	});
});
