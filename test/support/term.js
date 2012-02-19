/*!
 * let - Force timeouts.
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

process.on('SIGTERM', function() {
	console.log('SIGTERM');
	process.exit(0);
});

setInterval(function() {}, 2000);
