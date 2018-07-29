/**
 * banner description
 */
var pkg = require('../package.json'),
	version = pkg.version,
	released = 'Licensed under MIT',
	repository = pkg.repository.url,
	author = 'Copyright ' + (new Date()).getFullYear() + ' 雾空',
	date = 'Released on: unknown';

module.exports = {
	'info': [
		'Rolldate ' + version,
		author,
		repository,
		released,
		date
	].join('\n')
}