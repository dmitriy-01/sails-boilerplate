module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
        'handlebars:dev',
		'less:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
