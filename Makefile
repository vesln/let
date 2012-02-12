TESTS = $(wildcard test/*.test.js) $(wildcard test/commands/*.test.js)
REPORTER = dot

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(TESTS)

.PHONY: test
