module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
        'handlebars:dev',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
