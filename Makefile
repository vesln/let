TESTS = $(wildcard test/*.test.js) $(wildcard test/commands/*.test.js)
REPORTER = dot

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--slow 1000 \
		--timeout 1500 \
		--reporter $(REPORTER) \
		$(TESTS)

.PHONY: test
