module.exports = function(grunt) {

	// grunt.initConfig(grunt.file.readJSON('config.json'));
	
	grunt.initConfig({
		conf: {
			input: 'app/**/*.js'
		},
		watch: {
			files: "<%= conf.input %>",
			tasks: ['uglify']
		},
		uglify: {
			dist: {
				files: {
					'dist/app.min.js': "<%= conf.input %>"
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default", function() {
		grunt.log.writeln('hello world, ' + grunt.config.get('person').name);
	});
}